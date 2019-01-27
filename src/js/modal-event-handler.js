import ItemClickHandler from './item-click-handler';
import LinkSubmitHandler from './link-submit-handler';
import Uploader from './uploader';
import extend from 'lodash/extend';
import has from 'lodash/has';


import fileManagerItemFile from "./templates/item-file.handlebars";
import fileManagerItemFolder from "./templates/item-folder.handlebars";
import fileManagerItemBack from "./templates/item-back.handlebars";




export default class ModalEventHandler {

    constructor(defaults) {

        this.defaults = defaults || {};
        this.itemInModal = 0;
        this.modal = null;
        this.button = null;
        this.target = null;

        this.uploader = new Uploader(this.defaults.ajax.upload, this.defaults.modalId, this);

        this.model = document.querySelector('#' + (this.defaults.modalId || 'fileManagerModal'));

        var self = this;

        $(self.modal).on('show.bs.modal', function (event) {

            self.button = event.relatedTarget;

            self.uploader.initial();

            self.getFilesList();

            self.enableLoadMore();
        });

        $(self.modal).on('hide.bs.modal', function (event) {

            $(self.modal).find('.modal-body .fm-wrapper').html("");

            self.uploader.distroy();
        });


        document.addEventListener('fm.folder.item.select', function (event) {
            console.info("this-folder", self);

            self.getFilesList({
                nextPagekey: event.detail.nextPagekey || '',
                path: event.detail.address
            }, false, event.detail.backPath);

        }, false);

        document.addEventListener('fm.back.item.select', function (event) {
            console.info("this-back", self);
            console.info("back", event);

            self.getFilesList({
                nextPagekey: event.detail.nextPagekey || '',
                path: event.detail.address
            }, false, event.detail.backPath);

        }, false);

        return self;
    };

    getFilesList = (data = {
        nextPagekey: '',
        path: '/'
    }, append = false, backAddress = "/") => {

        var self = this;


        var headers = {};
        var token = $("meta[name='_csrf']").attr("content");
        var header = $("meta[name='_csrf_header']").attr("content");
        headers[header] = token;
if($(self.modal).find('#nextPagekey').val() !== 0){
    console.log("INPUT " + $(self.modal).find('#nextPagekey').val())
    $.ajax({
        url: self.defaults.ajax.list.url,
        method: self.defaults.ajax.list.method,
        data: extend(data, self.defaults.ajax.list.data),
        headers: self.defaults.ajax.list.headers || headers
    })
        .then(function (response) {
            console.log(response.directoryInfo);
            if (response.status === 1) {
                self.renderData(response, append, backAddress);
            }

        })
        .catch(function (error) {
            console.error(error);
        });
}

    };

    enableEvents = () => {
        var self = this;

        $(self.modal).on('show.bs.modal', function (event) {

            self.button = event.relatedTarget;

            self.uploader.initial();

            self.getFilesList();

            self.enableLoadMore();
        });

        $(self.modal).on('hide.bs.modal', function (event) {

            self.removeEvents();

            $(self.modal).find('.modal-body .fm-wrapper').html("");

            self.uploader.distroy();
        });
    };

    removeEvents = () => {
        var fileItems = document.querySelectorAll("[data-toggle='addFile']");
        fileItems.forEach((item) => {
            $(item).off('click');
        });

        var folderItems = document.querySelectorAll("[data-toggle='openFolder']");
        folderItems.forEach((item) => {
            $(item).off('click');
        });
    }

    renderData = (response = {}, append = false, backAddress = "/") => {
        var self = this;
        if (response.directoryInfo.nextPageKey === "") {
            console.log('STOP'+ response.directoryInfo.nextPageKey);
            $(self.modal).find('#nextPagekey').val(0);
        } else {
            console.log('RUN'+ response.directoryInfo.nextPageKey);
            $(self.modal).find('#nextPagekey').val(response.directoryInfo.nextPageKey);
        }

        $(self.modal).find('#path').val(response.directoryInfo.currentPath);
        $(self.modal).find('#backPath').val(backAddress);

        if (!append)
            $(self.modal).find('.modal-body .fm-wrapper').html("");

        // console.info("response.directoryInfo.currentPath", response.directoryInfo.currentPath);

        if (backAddress && !append && (response.directoryInfo.currentPath !== "/" && response.directoryInfo.currentPath !== "%2F" && response.directoryInfo.currentPath !== ""))
            $(self.modal).find('.modal-body .fm-wrapper').append(fileManagerItemBack({
                address: backAddress
            }));

        if (has(response, "directoryInfo") && has(response.directoryInfo, "data")) {
            response.directoryInfo.data.forEach((item) => {
                if (item.isDirectory) {
                    $(self.modal).find('.modal-body .fm-wrapper').append(fileManagerItemFolder({
                        name: item.name
                    }));
                } else {
                    $(self.modal).find('.modal-body .fm-wrapper').append(fileManagerItemFile({
                        name: item.name,
                        path: item.linkHost + item.linkPath,
                        isImage: true
                    }));
                }
            });
        }

        new ItemClickHandler(self.modal, self.button, self.defaults, self.uploader);
        new LinkSubmitHandler(self.modal, self.button, self.defaults, self.uploader);

    };

    enableLoadMore = () => {
        var self = this;

        $(self.modal).find('.modal-body').off('scroll');
        $(self.modal).find('.modal-body').scroll(function () {
            if ($(self.modal).find('.fm-wrapper').height() <= $(self.modal).find('.modal-body').scrollTop() + ($(self.modal).find('.modal-body').height() + 16)) {
                self.getFilesList({

                    nextPagekey: $(self.modal).find('#nextPagekey').val(),
                    path: $(self.modal).find('#path').val()
                }, true)
            }
        });

    };

    getModal = () => this.modal;

    setModal = (modal) => {
        this.modal = modal;
    };
}
import ItemClickHandler from './item-click-handler';
import Uploader from './uploader';
import extend from 'lodash/extend';
import has from 'lodash/has';


import fileManagerItemFile from "./templates/item-file.handlebars";
import fileManagerItemFolder from "./templates/item-folder.handlebars";
import fileManagerItemBack from "./templates/item-back.handlebars";


var self;

export default class ModalEventHandler {

    constructor(defaults) {
        
        this.defaults = defaults || {};
        this.itemInModal = 0;
        this.modal = null;
        this.button = null;
        this.target = null;

        document.addEventListener('fm.folder.item.select', function (event) {
            console.info("this-folder", this);

            this.getFilesList({
                nextPagekey: event.detail.nextPagekey || '',
                path: event.detail.address
            }, false, event.detail.backPath);

        }, false);

        document.addEventListener('fm.back.item.select', function (event) {
            console.info("this-back", this);
            console.info("back", event);

            this.getFilesList({
                nextPagekey: event.detail.nextPagekey || '',
                path: event.detail.address
            }, false, event.detail.backPath);

        }, false);

        this.uploader = new Uploader(this.defaults.ajax.upload, this.defaults.modalId, this);

        this.model = document.querySelector('#' + (this.defaults.modalId || 'fileManagerModal'));

        self = this;

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


        return self;
    };

    getFilesList = (data = {
        nextPagekey: '',
        path: '/'
    }, append = false, backAddress = "/") => {

        var headers = {};
        var token = $("meta[name='_csrf']").attr("content");
        var header = $("meta[name='_csrf_header']").attr("content");
        headers[header] = token;

        $.ajax({
                url: self.defaults.ajax.list.url,
                method: self.defaults.ajax.list.method,
                data: extend(data, self.defaults.ajax.list.data),
                headers: self.defaults.ajax.list.headers || headers
            })
            .then(function (response) {
                if (response.status === 1) {
                    self.renderData(response, append, backAddress);
                }

            })
            .catch(function (error) {
                console.error(error);
            });

    };

    enableEvents = () => {

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

        $(self.modal).find('#nextPagekey').val(response.directoryInfo.nextPageKey);
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

    };

    enableLoadMore = () => {
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

    getModal = () => self.modal;

    setModal = (modal) => {
        self.modal = modal;
    };
}
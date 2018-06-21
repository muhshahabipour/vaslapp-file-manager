import ItemClickHandler from './item-click-handler';
import extend from 'lodash/extend';


import fileManagerItemFile from "./templates/item-file.handlebars";
import fileManagerItemFolder from "./templates/item-folder.handlebars";
import fileManagerItemBack from "./templates/item-back.handlebars";


var self;

export default class ModalEventHandler {
    modal = null;
    button = null;
    defaults = {}

    constructor(defaults) {
        this.defaults = defaults;
        self = this;

        document.addEventListener('fm.folder.item.select', function (e) {
            // console.info("HERE", e.detail);
            // console.info("HERE", e);

            self.getFilesList({
                nextPagekey: e.detail.nextPagekey || '',
                path: e.detail.address
            }, false, e.detail.backPath);

        }, false);

        document.addEventListener('fm.back.item.select', function (e) {
            // console.info("HERE", e.detail);
            // console.info("HERE", e);

            self.getFilesList({
                nextPagekey: e.detail.nextPagekey || '',
                path: e.detail.address
            }, false, e.detail.backPath);

        }, false);

        return self;
    }

    enableEvents = (defaults) => {

        $(self.modal).on('show.bs.modal', function (event) {
            self.button = event.relatedTarget;

            self.getFilesList();

            self.enableLoadMore();
        });

        $(self.modal).on('hide.bs.modal', function (event) {
            self.removeEvents();
            $(self.modal).find('.modal-body .fm-wrapper').html("");
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

    getFilesList = (data = {
        nextPagekey: '',
        path: '/'
    }, append = false, backAddress = "/") => {
        $.ajax({
                url: self.defaults.ajax.url,
                method: self.defaults.ajax.method,
                data: extend(data, self.defaults.ajax.data),
                headers: self.defaults.ajax.headers
            })
            .then(function (response) {
                if (response.status === 1) {
                    self.renderData(response, append, backAddress);
                }

            })
            .catch(function (error) {
                console.error(error);
            });

    }

    renderData = (response = {}, append = false, backAddress = "/") => {

        $(self.modal).find('#nextPagekey').val(response.directoryInfo.nextPageKey);
        $(self.modal).find('#path').val(response.directoryInfo.currentPath);
        $(self.modal).find('#backPath').val(backAddress);

        if (!append)
            $(self.modal).find('.modal-body .fm-wrapper').html("");

        // console.info("response.directoryInfo.currentPath", response.directoryInfo.currentPath);

        if (backAddress && !append && (response.directoryInfo.currentPath !== "/" || response.directoryInfo.currentPath !== "%2F" || response.directoryInfo.currentPath !== ""))
            $(self.modal).find('.modal-body .fm-wrapper').append(fileManagerItemBack({
                address: backAddress
            }));

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

        const itemClickHandler = new ItemClickHandler(self.modal, self.button, self.defaults);
        itemClickHandler.init();

    }

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

    }


    getModal = () => self.modal;
    setModal = (modal) => {
        self.modal = modal;
    };
}
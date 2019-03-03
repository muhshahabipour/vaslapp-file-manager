import ItemClickHandler from './item-click-handler';
import LinkSubmitHandler from './link-submit-handler';
import Uploader from './uploader';
import extend from 'lodash/extend';
import has from 'lodash/has';


import fileManagerItemFile from "./templates/item-file.handlebars";
import fileManagerItemFolder from "./templates/item-folder.handlebars";
import fileManagerItemBack from "./templates/item-back.handlebars";


var selfClass = "";

export default class ModalEventHandler {

    constructor(defaults) {

        this.defaults = defaults || {};
        this.itemInModal = 0;
        this.modal = null;
        this.button = null;
        this.target = null;
        this.ajaxStart = false;
        this.loadMore = true;
        this.linkSubmitInit = false;


        this.uploader = new Uploader(this.defaults.ajax.upload, this.defaults.modalId, this);

        var self = this;

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
        headers["X-Requested-With"] = "XMLHttpRequest";

        if (self.loadMore) {
            self.ajaxStart = true;

            $.ajax({
                    url: self.defaults.ajax.list.url,
                    method: self.defaults.ajax.list.method,
                    data: extend(data, self.defaults.ajax.list.data),
                    headers: self.defaults.ajax.list.headers || headers,
                })
                .then(function (response) {
                    self.ajaxStart = false;
                    if (response.status === 1) {
                        if (!has(response, "directoryInfo") || !has(response.directoryInfo, "nextPageKey") || response.directoryInfo.nextPageKey == "")
                            self.loadMore = false;
                        let newBackAddress = backAddress;
                        console.log("newBackAddress 01", newBackAddress)
                        if (has(data, "path") && data.path != "/") {
                            newBackAddress = (data.path).replace(/((\/)*[^\/]+(\/)*)$/mg, "");
                            if (newBackAddress == "") {
                                newBackAddress = "/";
                            }
                        } else {
                            newBackAddress = "/";
                        }
                        console.log("newBackAddress 02", newBackAddress)
                        self.renderData(response, append, newBackAddress);
                    } else {

                    }

                })
                .catch(function (error) {
                    var eventError = new Event('fm.error.ajax');
                    if (error && (error, "status")) {
                        if (error.status === 401) {
                            eventError.detail = error;
                            document.dispatchEvent(eventError);
                        }
                    }
                    // console.error(error);
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
            if (self.defaults.useExternalLink) {
                new LinkSubmitHandler(self.modal, self.button, self.defaults);
            }
        });


        $(self.modal).on('hidden.bs.modal', function (event) {
            // self.removeEvents();
            self.loadMore = true;
            $(self.modal).find('.modal-body .fm-wrapper').html("");
            self.uploader.distroy();
        });
    };

    // removeEvents = () => {
    //     var fileItems = document.querySelectorAll("[data-toggle='addFile']");
    //     fileItems.forEach((item) => {
    //         $(item).off('click');
    //     });

    //     var folderItems = document.querySelectorAll("[data-toggle='openFolder']");
    //     folderItems.forEach((item) => {
    //         $(item).off('click');
    //     });
    // }

    renderData = (response = {}, append = false, backAddress = "/") => {
        var self = this;
        if (response.directoryInfo.nextPageKey === null || response.directoryInfo.nextPageKey === "" || response.directoryInfo.nextPageKey === undefined) {
            $(self.modal).find('#nextPagekey').val(0);
        } else {
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
                        name: backAddress + (item.name)
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

        selfClass = this;
        onCustomEvents();
        new ItemClickHandler(self.modal, self.button, self.defaults, self.uploader);
    };

    enableLoadMore = () => {
        var self = this;

        $(self.modal).find('.modal-body').off('scroll');
        $(self.modal).find('.modal-body').on('scroll', function (event) {
            event.preventDefault()
            if (!self.ajaxStart) {
                if (($(self.modal).find('.fm-wrapper').height() <= $(self.modal).find('.modal-body').scrollTop() + ($(self.modal).find('.modal-body').height() + 16))) {
                    self.getFilesList({
                        nextPagekey: $(self.modal).find('#nextPagekey').val(),
                        path: $(self.modal).find('#path').val()
                    }, true)
                }
            }
        });

    };

    getModal = () => this.modal;

    setModal = (modal) => {
        this.modal = modal;
    };
}




var onCustomEvents = function () {
    document.removeEventListener('fm.folder.item.select', _listenerFileSelect, false);
    document.addEventListener('fm.folder.item.select', _listenerFileSelect, false);

    document.removeEventListener('fm.back.item.select', _listenerBackSelect, false);
    document.addEventListener('fm.back.item.select', _listenerBackSelect, false);
};

var _listenerFileSelect = function (event) {
    // console.info("this-folder", selfClass);
    selfClass.loadMore = true;
    selfClass.getFilesList({
        nextPagekey: event.detail.nextPagekey || '',
        path: event.detail.address
    }, false, event.detail.backPath);

}

var _listenerBackSelect = function (event) {
    // console.info("this-back", selfClass);
    selfClass.loadMore = true;
    selfClass.getFilesList({
        nextPagekey: event.detail.nextPagekey || '',
        path: event.detail.address
    }, false, event.detail.backPath);
}
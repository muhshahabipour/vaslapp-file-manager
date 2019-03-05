import extend from 'lodash/extend';

var selfModal = "",
    selfButton = "",
    selfDefaults = "",
    selfUploader = "";

var eventFileItemClick = "", 
    eventBackItemClick = "", 
    eventFolderItemClick = "";


export default class ItemClickHandler {

    constructor(modal, button, defaults, uploader) {
        selfModal = $(modal);
        selfButton = button;
        selfDefaults = defaults;
        selfUploader = uploader;

        //default => fm.file.item.select
        eventFileItemClick = new Event(defaults.customNameForEventFileSelect);
        //eventFileItemClick = new Event("fm.file.item.select");
        eventBackItemClick = new Event('fm.back.item.select');
        eventFolderItemClick = new Event('fm.folder.item.select')

        var fileItems = document.querySelectorAll("[data-toggle='addFile']");
        fileItems.forEach((item) => {
            item.removeEventListener('click', _listenerFileClick, false)
            item.addEventListener('click', _listenerFileClick, false)
        })

        var folderItems = document.querySelectorAll("[data-toggle='openFolder']");
        folderItems.forEach((item) => {
            item.removeEventListener('click', _listenerFolderClick, false)
            item.addEventListener('click', _listenerFolderClick, false)
        })

        var backItem = document.querySelector("[data-toggle='backFolder']");
        if (backItem) {
            backItem.removeEventListener('click', _listenerBackClick, false);
            backItem.addEventListener('click', _listenerBackClick, false);
        }
    }


    distroy(){
        var fileItems = document.querySelectorAll("[data-toggle='addFile']");
        fileItems.forEach((item) => {
            item.removeEventListener('click', _listenerFileClick, false)
        })
        var folderItems = document.querySelectorAll("[data-toggle='openFolder']");
        folderItems.forEach((item) => {
            item.removeEventListener('click', _listenerFolderClick, false)
        })
        var backItem = document.querySelector("[data-toggle='backFolder']");
        backItem.removeEventListener('click', _listenerBackClick, false);
    }
}



var _listenerBackClick = function (event) {


    // const dataset = event.target.dataset;
    let dataset = event.currentTarget.dataset;

    eventBackItemClick.detail = dataset
    eventBackItemClick.relatedTarget = selfButton;

    // Dispatch the event.
    document.dispatchEvent(eventBackItemClick);

}


var _listenerFolderClick = function (event) {

    // const dataset = event.target.dataset;
    let dataset = event.currentTarget.dataset;

    selfUploader.setCurrentPath(dataset.address);

    eventFolderItemClick.detail = dataset
    eventFolderItemClick.relatedTarget = selfButton;


    // Dispatch the event.
    document.dispatchEvent(eventFolderItemClick);

    // selfModal.modal("hide");
}


var _listenerFileClick = function (event) {
    // const dataset = event.target.dataset;
    let dataset = event.currentTarget.dataset;

    eventFileItemClick.detail = dataset;
    eventFileItemClick.relatedTarget = selfButton;

    let eventPlace = document;
    if (selfDefaults.target != "") {
        eventPlace = document.querySelector(selfDefaults.target);
    }

    // Dispatch the event.
    eventPlace.dispatchEvent(eventFileItemClick);

    selfModal.modal("hide");
}
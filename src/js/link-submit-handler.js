import {
    clearTextFromSelector
} from "./general-functions";


export default class LinkSubmitHandler {

    constructor(modal, button, defaults, uploader) {
        let $modal = $(modal);

        var eventFileItemClick = new Event(defaults.customNameForEventFileSelect);
        // var eventFileItemClick = new Event("fm.file.item.select");

        var linkFile = document.querySelector(`input#linkSubmit-${clearTextFromSelector(defaults.target)}`);
        var submitLinkFile = document.querySelector(`div#linkSubmitBtn-${clearTextFromSelector(defaults.target)}`);

        submitLinkFile.addEventListener('click', eventAction(eventFileItemClick, defaults, button, submitLinkFile, linkFile, $modal), true)
    }
}


function eventAction(eventFileItemClick, defaults, button, submitLinkFile, linkFile, modal){
    let dataset = {
        address: linkFile.value
    };

    eventFileItemClick.detail = dataset;
    eventFileItemClick.relatedTarget = button;

    let eventPlace = document;
    if (defaults.target != "") {
        eventPlace = document.querySelector(defaults.target);
    }

    
    submitLinkFile.removeEventListener('click', eventAction(eventFileItemClick, defaults, button, submitLinkFile, linkFile, modal), true);


    // Dispatch the event.
    eventPlace.dispatchEvent(eventFileItemClick);
    linkFile.value = "";
    modal.modal("hide");
}
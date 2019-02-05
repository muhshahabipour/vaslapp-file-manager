import {
    clearTextFromSelector
} from "./general-functions";


export default class LinkSubmitHandler {

    constructor(modal, button, defaults) {
        let $modal = $(modal);

        var eventFileItemClick = new Event(defaults.customNameForEventFileSelect);
        // var eventFileItemClick = new Event("fm.file.item.select");

        var linkFile = document.querySelector(`input#linkSubmit-${clearTextFromSelector(defaults.target)}`);
        var submitLinkFile = document.querySelector(`div#linkSubmitBtn-${clearTextFromSelector(defaults.target)}`);

        console.log("HERE 01")

        submitLinkFile.addEventListener('click', eventAction(eventFileItemClick, defaults, button, linkFile, $modal), true)
    }



    distroy(modal, defaults) {

        let $modal = $(modal);

        var eventFileItemClick = new Event(defaults.customNameForEventFileSelect);
        // var eventFileItemClick = new Event("fm.file.item.select");

        var linkFile = document.querySelector(`input#linkSubmit-${clearTextFromSelector(defaults.target)}`);
        var submitLinkFile = document.querySelector(`div#linkSubmitBtn-${clearTextFromSelector(defaults.target)}`);

        let button = null;

        console.log("HERE 03")

        submitLinkFile.removeEventListener('click', eventAction(eventFileItemClick, defaults, button, linkFile, $modal), true);

        console.log("HERE 04")
    }
}


function eventAction(eventFileItemClick, defaults, button, linkFile, modal) {
    let dataset = {
        address: linkFile.value
    };

    eventFileItemClick.detail = dataset;
    eventFileItemClick.relatedTarget = button;

    let eventPlace = document;
    if (defaults.target != "") {
        eventPlace = document.querySelector(defaults.target);
    }

    console.log("HERE 02")

    // Dispatch the event.
    eventPlace.dispatchEvent(eventFileItemClick);
    linkFile.value = "";

    if (modal.hasClass('in')) {
        console.log("HERE 02-1")
        modal.modal("hide");
    }

    console.log("HERE 02-2")
}
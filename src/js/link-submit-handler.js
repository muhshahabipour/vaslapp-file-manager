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

        submitLinkFile.addEventListener('click', function _listener() {
            let dataset = {
                address: linkFile.value
            };

            eventFileItemClick.detail = dataset;
            eventFileItemClick.relatedTarget = button;

            let eventPlace = document;
            if (defaults.target != "") {
                eventPlace = document.querySelector(defaults.target);
            }

            // Dispatch the event.
            eventPlace.dispatchEvent(eventFileItemClick);
            linkFile.value = "";

            if ($modal.hasClass('in') || $modal.hasClass('show')) {
                submitLinkFile.removeEventListener("click", _listener, true);
                $modal.modal("hide");
            }

        }, true)
    }
}
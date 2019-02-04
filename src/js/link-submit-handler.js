

export default class LinkSubmitHandler {

    constructor(modal, button, defaults, uploader) {
        let $modal = $(modal);

        var eventFileItemClick = new Event(defaults.customNameForEventFileSelect);
        // var eventFileItemClick = new Event("fm.file.item.select");

        var linkFile = document.querySelector("input#linkSublit");
        var submitLinkFile = document.querySelector("button#linkSublitBtn");

        submitLinkFile.addEventListener('click', (event) => {
            console.log("clicked");
            // const dataset = event.target.dataset;
            let dataset = {address: linkFile.value};

            eventFileItemClick.detail = dataset;
            eventFileItemClick.relatedTarget = button;

            let eventPlace = document;
            if (defaults.target != "") {
                eventPlace = document.querySelector(defaults.target);
            }

            // Dispatch the event.
            eventPlace.dispatchEvent(eventFileItemClick);
            submitLinkFile.removeEventListener('click', function(){});
            $modal.modal("hide");
        })
    }
}
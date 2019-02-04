import extend from 'lodash/extend';


export default class ItemClickHandler {

    constructor(modal, button, defaults, uploader) {
        let $modal = $(modal);

        //default => fm.file.item.select
        var eventFileItemClick = new Event(defaults.customNameForEventFileSelect);
        // var eventFileItemClick = new Event("fm.file.item.select");

        var fileItems = document.querySelectorAll("[data-toggle='addFile']");
        fileItems.forEach((item) => {
            item.addEventListener('click', (event) => {
                // const dataset = event.target.dataset;
                let dataset = event.currentTarget.dataset;

                eventFileItemClick.detail = dataset;
                eventFileItemClick.relatedTarget = button;

                let eventPlace = document;
                if (defaults.target != "") {
                    eventPlace = document.querySelector(defaults.target);
                }

                // Dispatch the event.
                eventPlace.dispatchEvent(eventFileItemClick);

                $modal.modal("hide");
            })
        })

        var eventFolderItemClick = new Event('fm.folder.item.select');

        var folderItems = document.querySelectorAll("[data-toggle='openFolder']");
        folderItems.forEach((item) => {
            item.addEventListener('click', (event) => {
                // const dataset = event.target.dataset;
                let dataset = event.currentTarget.dataset;

                extend(dataset, {
                    backPath: $modal.find("#backPath").val()
                });

                uploader.setCurrentPath(dataset.address);

                eventFolderItemClick.detail = dataset
                eventFolderItemClick.relatedTarget = button;


                // Dispatch the event.                
                document.dispatchEvent(eventFolderItemClick);

                // $modal.modal("hide");
            })
        })

        var eventBackItemClick = new Event('fm.back.item.select');

        var backItem = document.querySelector("[data-toggle='backFolder']");
        if (backItem) {
            backItem.addEventListener('click', (event) => {
                // const dataset = event.target.dataset;
                let dataset = event.currentTarget.dataset;

                extend(dataset, {
                    backPath: $modal.find("#backPath").val() || '/'
                });

                eventBackItemClick.detail = dataset
                eventBackItemClick.relatedTarget = button;

                // Dispatch the event.
                document.dispatchEvent(eventBackItemClick);

            });
        }
    }
}
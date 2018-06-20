import extend from 'lodash/extend';


var self;

export default class ItemClickHandler {

    constructor(modal, button, defaults) {
        this.modal = modal;
        this.button = button;
        this.defaults = defaults;
        self = this;
    }

    init = () => {

        let $modal = $(self.modal);
        let $button = $(self.button);
        
        var eventFileItemClick = new Event('fm.file.item.select');

        var fileItems = document.querySelectorAll("[data-toggle='addFile']");
        fileItems.forEach((item) => {
            item.addEventListener('click', (event) => {
                // const dataset = event.target.dataset;
                let dataset = event.currentTarget.dataset;

                dataset.button = $button;

                console.info(dataset.button);

                eventFileItemClick.detail = dataset;


                // Dispatch the event.
                document.dispatchEvent(eventFileItemClick);

                $modal.modal("hide");
            })
        })

        var eventFolderItemClick = new Event('fm.folder.item.select');

        var folderItems = document.querySelectorAll("[data-toggle='openFolder']");
        folderItems.forEach((item) => {
            item.addEventListener('click', (event) => {
                // const dataset = event.target.dataset;
                let dataset = event.currentTarget.dataset;

                extend(dataset, {backPath: $modal.find("#backPath").val()});
                extend(dataset, {button: $button});

                console.info("dataset", dataset)

                eventFolderItemClick.detail = dataset

                // Dispatch the event.
                document.dispatchEvent(eventFolderItemClick);

                // $modal.modal("hide");
            })
        })


    }



}
import general from './general-functions';
import ModalEventHandler from './modal-event-handler'


var self;


export default class ItemClickHandler {

    constructor(modal, defaults) {
        this.modal = modal;
        this.defaults = defaults;
        self = this;
    }

    init = () => {

        let $modal = $(self.modal);
        
        var eventFileItemClick = new Event('fm.file.item.select');

        var fileItems = document.querySelectorAll("[data-toggle='addFile']");
        fileItems.forEach((item) => {
            item.addEventListener('click', (event) => {
                // const dataset = event.target.dataset;
                const dataset = event.currentTarget.dataset;

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
                const dataset = event.currentTarget.dataset;

                eventFolderItemClick.detail = dataset

                // Dispatch the event.
                document.dispatchEvent(eventFolderItemClick);

                // $modal.modal("hide");
            })
        })


    }



}
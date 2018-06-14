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
        var fileItems = document.querySelectorAll("[data-toggle='addFile']");
        fileItems.forEach((item) => {
            $(item).off('click');
            $(item).on('click', (event) => {
                // const dataset = event.target.dataset;
                const dataset = event.currentTarget.dataset;

                var event = new CustomEvent('fm.file.item.select', {
                    detail: dataset
                });

                // Dispatch the event.
                document.dispatchEvent(event);

                $modal.modal("hide");
            })
        })

        var folderItems = document.querySelectorAll("[data-toggle='openFolder']");
        folderItems.forEach((item) => {
            $(item).off('click');
            $(item).on('click', (event) => {

                // const dataset = event.target.dataset;
                const dataset = event.currentTarget.dataset;

                var event = new CustomEvent('fm.folder.item.select', {
                    detail: dataset
                });

                // Dispatch the event.
                document.dispatchEvent(event);

                // $modal.modal("hide");
            })
        })


        // document.removeEventListener('fm.folder.item.select');
        document.addEventListener('fm.folder.item.select', function (e) {
            // e.target matches elem
            console.info("HERE", e.detail);

            let modalEventHandler = new ModalEventHandler(self.defaults);
            modalEventHandler.setModal(self.modal);
            modalEventHandler.getFilesList({
                nextPagekey: e.detail.nextPagekey || '',
                path: e.detail.address
            });
        }, false);

    }



}
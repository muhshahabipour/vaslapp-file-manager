import general from './general-functions'


export default class fileManager {
    modal = null;

    constructor(modal = null) {
        this.modal = modal;
    }

    init = (button, coreClass) => {
        let $modal = this.modal;

        var fileItems = document.querySelectorAll("[data-toggle='addFile']");
        fileItems.forEach((item) => {
            item.addEventListener('click', (event) => {
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
            item.addEventListener('click', (event) => {
                
                // const dataset = event.target.dataset;
                const dataset = event.currentTarget.dataset;

                var event = new CustomEvent('fm.folder.item.select', {
                    detail: dataset
                });

                // Dispatch the event.
                document.dispatchEvent(event);

                $modal.modal("hide");
            })
        })


    }

}
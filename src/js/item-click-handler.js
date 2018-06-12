import general from './general-functions';


var self;


export default class ItemClickHandler {
    currentClass;


    constructor(currentClass) {
        this.currentClass = currentClass;
        self = this;
    }

    init = () => {
        let $modal = $(self.currentClass.modal);
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



        document.addEventListener('fm.folder.item.select', function (e) {
            // e.target matches elem
            console.info(e.detail);
            self.currentClass.getFilesList({
                nextPagekey: '',
                path: e.detail.address
            });
        }, false);

    }



}
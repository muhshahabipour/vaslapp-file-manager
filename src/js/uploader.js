import ModalEventHandler from './modal-event-handler';

export default class Uploader {

    constructor(ajax) {
        this.ajax = ajax;
    }

    initial = () => {
        const fileSelector = document.querySelector('#vaslapp-file-selector');
        fileSelector.addEventListener("change", (event) => {
            // console.log("event.currentTarget",fileSelector.files.length);

            // console.log("this.ajax", this.ajax);

            if (fileSelector.files && fileSelector.files.length) {
                let headers = {};
                const token = $("meta[name='_csrf']").attr("content");
                const header = $("meta[name='_csrf_header']").attr("content");
                headers[header] = token;

                const form = $('#form-vaslapp-file-uploader');
                const formData = new FormData(form[0]);

                $.ajax({
                        url: this.ajax.url,
                        method: "POST",
                        data: formData,
                        headers: headers,
                        cache: false,
                        processData: false,
                        contentType: false
                    })
                    .then(function (response) {
                        if (response.status === 1) {
                            ModalEventHandler.getFilesList({nextPagekey: '', path: '/'}, false, "/")
                        }else{
                            console.error(response.msg);
                        }
                    })
                    .catch(function (error) {
                        console.error(error);
                    });
            }
        });
    }

    setCurrentPath = (path) => {
        let filePath = document.getElementById('vaslapp-file-path');
        filePath.value = path;
    }

    distroy = () => {
        fileSelector.removeEventListener("change");
    }

}
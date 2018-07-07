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
                            self.renderData(response, append, backAddress);
                        }
                    })
                    .catch(function (error) {
                        console.error(error);
                    });
            }
        });
    }

    distroy = () => {
        fileSelector.removeEventListener("change");
    }

}
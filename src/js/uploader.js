let self;

export default class Uploader {


    constructor(ajax, modalClass) {
        this.ajax = ajax;
        this.modalClass = modalClass;
        self = this;
    }

    initial = () => {
        let fileSelector = document.querySelector('#vaslapp-file-selector');
        fileSelector.addEventListener("change", (event) => {

            // console.log("this.ajax", this.ajax);

            if (fileSelector.files && fileSelector.files.length) {
                let headers = {};
                const token = $("meta[name='_csrf']").attr("content");
                const header = $("meta[name='_csrf_header']").attr("content");
                headers[header] = token;

                const form = $('#form-vaslapp-file-uploader');
                const formData = new FormData(form[0]);

                let currentPath, previousPath;
                try {
                    currentPath = $('#vaslapp-file-path').val();
                    if (currentPath.endsWith("/")) {
                        let currentPathNormal = currentPath.substr(0, (currentPath.length - 1));
                        previousPath = currentPathNormal.substr(0, currentPathNormal.lastIndexOf("/"))
                    } else {
                        previousPath = currentPath.substr(0, currentPath.lastIndexOf("/"))
                    };
                } catch (err) {}

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
                            self.modalClass.getFilesList({
                                nextPagekey: "",
                                path: currentPath || "/"
                            }, false, previousPath || "/")
                        } else {
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
        let filePath = document.querySelector('#vaslapp-file-path');
        filePath.value = path;
    }

    distroy = () => {
        let fileSelector = document.querySelector('#vaslapp-file-selector');
        fileSelector.removeEventListener("change", () => {});
    }

}
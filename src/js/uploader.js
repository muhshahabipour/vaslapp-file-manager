let self;

export default class Uploader {


    constructor(ajax, id, modalClass) {
        this.ajax = ajax;
        this.id = id;
        this.modalClass = modalClass;
        self = this;
    }

    initial = () => {
        let fileSelector = document.querySelector('#' + this.id + '-vaslapp-file-selector');
        fileSelector.addEventListener("change", (event) => {

            if (fileSelector.files && fileSelector.files.length) {
                let headers = {};
                const token = $("meta[name='_csrf']").attr("content");
                const header = $("meta[name='_csrf_header']").attr("content");
                headers[header] = token;
                headers["X-Requested-With"] = "XMLHttpRequest";

                const form = $('#' + this.id + '-form-vaslapp-file-uploader');
                const formData = new FormData(form[0]);

                let currentPath, previousPath;
                try {
                    currentPath = $('#' + this.id + '-vaslapp-file-path').val();
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
                        var eventError = new Event('fm.error.ajax');
                        if(error && (error, "status")){
                            if(error.status === 401){
                                eventError.detail = error;
                                document.dispatchEvent(eventError);
                            }
                        }
                        // console.error(error);
                    });
            }
        });
    }

    setCurrentPath = (path) => {
        let filePath = document.querySelector('#' + this.id + '-vaslapp-file-path');
        filePath.value = path;
    }

    distroy = () => {
        let fileSelector = document.querySelector('#' + this.id + '-vaslapp-file-selector');
        fileSelector.removeEventListener("change", () => {});
    }

}
import general from './general-functions'
import fileManager from './filemanager'
import map from 'lodash/map'
import extend from 'lodash/extend'

var modalFileManager = require("./templates/modal-filemanager.handlebars");
var fileManagerItemFile = require("./templates/item-file.handlebars");
var fileManagerItemFolder = require("./templates/item-folder.handlebars");

export default class core {

    constructor(defaults) {

        // fot test 
        // const aaaaaaaaa = 1

        this.defaults = defaults;
        let thisClass = this;

        var b = document.createElement('div')
        console.log("FileManager")
        b.innerHTML = modalFileManager({});
        document.body.appendChild(b);


        $('#fileManagerModal').on('show.bs.modal', function (event) {
            var $button = $(event.relatedTarget);

            var modal = $(this)
            const filemanager = new fileManager(modal);

            // TODO: Optimize File/Folder List
            $.ajax({
                    url: defaults.ajax.url,
                    method: defaults.ajax.method,

                    data: extend({
                        nextPagekey: '',
                        path: '/'
                    }, defaults.ajax.data),
                    headers: defaults.ajax.headers
                })
                .then(function (response) {
                    // console.info(response);
                    if (response.status === 1) {
                        response.directoryInfo.data.forEach((item) => {
                            if (item.isDirectory) {
                                modal.find('.modal-body .fm-wrapper').append(fileManagerItemFolder({name: item.name}));
                            } else {
                                modal.find('.modal-body .fm-wrapper').append(fileManagerItemFile({
                                    name: item.name,
                                    path: item.linkHost + item.linkPath,
                                    isImage: true
                                }));
                            }

                        });

                        filemanager.init($button, thisClass);

                    }

                })
                .catch(function (error) {
                    console.error(error);
                });

        })

        $('#fileManagerModal').on('hide.bs.modal', function (event) {
            var modal = $(this)
            modal.find('.modal-body .fm-wrapper').html("");
        })


        return this;
    }
}
import ModalEventHandler from './modal-event-handler';

import modalFileManager from "./templates/modal-filemanager.handlebars";


export default class Core extends ModalEventHandler{
    
    constructor(defaults) {

        // fot test 
        const aaaaaaaaa = 1

        var b = document.createElement('div')
        console.log("FileManager")
        b.innerHTML = modalFileManager({});
        document.body.appendChild(b);


        let modalEventHandler = super(defaults);
        modalEventHandler.setModal(document.querySelector('#fileManagerModal'));
        modalEventHandler.enableEvents();
        
    }






}
import ModalEventHandler from './modal-event-handler';

import modalFileManager from "./templates/modal-filemanager.handlebars";


export default class Core extends ModalEventHandler{
    
    constructor(defaults) {

        // fot test 
        const aaaaaaaaa = 2;

        var b = document.createElement('div')
        b.innerHTML = modalFileManager({id: defaults.modalId || 'fileManagerModal'});
        document.body.appendChild(b);


        let modalEventHandler = super(defaults);
        modalEventHandler.setModal(document.querySelector('#' + (defaults.modalId || 'fileManagerModal')));
        modalEventHandler.enableEvents();
        
    }






}
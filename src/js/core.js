import ModalEventHandler from './modal-event-handler';
import modalFileManager from "./templates/modal-filemanager.handlebars";
import { clearTextFromSelector } from "./general-functions";


export default class Core{
    
    constructor(defaults) {

        // fot test 
        const aaaaaaaaa = 1;


        var b = document.createElement('div')
        b.innerHTML = modalFileManager({id: defaults.modalId || 'fileManagerModal', target: clearTextFromSelector(defaults.target), useExtrnalLink: defaults.useExtrnalLink});
        document.body.appendChild(b);


        let modalEventHandler = new ModalEventHandler(defaults);
        modalEventHandler.setModal(document.querySelector('#' + (defaults.modalId || 'fileManagerModal')));
        modalEventHandler.enableEvents();
    }






}
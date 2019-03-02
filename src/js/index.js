import '../scss/index.scss';
import extend from 'lodash/extend';
import Core from './core';

let defaults = {
    target: '', // '#target or .target'
    modalId: '', // 'fileManagerModal'
    customNameForEventFileSelect: 'fm.file.item.select',
    useExternalLink: false,
    ajax: { // for get files
        list: {
            url: 'path.php',
            method: "POST",
            data: {},
            headers: {}
        },
        upload: {
            url: 'upload.php',
            method: "POST",
            data: {},
            headers: {}
        }
    }
}


let elem = null;


export class FileManager{

    constructor(options = {}) {
        defaults = extend(defaults, options)
        let core = new Core(defaults);
    }

}


export default FileManager;
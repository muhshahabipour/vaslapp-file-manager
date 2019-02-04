import '../scss/index.scss';
import extend from 'lodash/extend';
import Core from './core';
import {
    relative
} from 'path';


let defaults = {
    target: '', // '#target or .target'
    modalId: '', // 'fileManagerModal'
    customNameForEventFileSelect: 'fm.file.item.select',
    useExtrnalLink: false,
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
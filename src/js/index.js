import '../scss/index.scss';
import extend from 'lodash/extend';
import Core from './core';
import {
    relative
} from 'path';


let defaults = {
    target: '', // '#target'
    modalId: '', // 'fileManagerModal'
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


export class FileManager extends Core {

    constructor(options = {}) {
        defaults = extend(defaults, options)
        super(defaults);
    }

}


export default FileManager;
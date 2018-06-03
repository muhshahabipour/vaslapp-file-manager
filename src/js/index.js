import '../scss/index.scss';
import extend from 'lodash/extend';
import core from './core';
import {
    relative
} from 'path';


let defaults = {
    ajax: { // for get files
        url: 'path.php',
        method: "POST",
        data: {},
        headers: {}
    }
}


let elem = null;


export class FileManager {

    constructor(options = {}) {

        defaults = extend(defaults, options)

        new core(defaults);
    }

}


export default FileManager;
import {
    clearTextFromSelector
} from "./general-functions";


let selfClass = null;

export default class LinkSubmitHandler {

    constructor(modal, button, defaults) {
        this.modal = $(modal);
        this.button = button;
        this.defaults = defaults;
        this.eventFileItemClick = new Event(this.defaults.customNameForEventFileSelect);
        // this.eventFileItemClick = new Event("fm.file.item.select");
        this.linkFile = document.querySelector(`input#linkSubmit-${clearTextFromSelector(this.defaults.target)}`);
        this.submitLinkFile = document.querySelector(`div#linkSubmitBtn-${clearTextFromSelector(this.defaults.target)}`);

        selfClass = this;

        this.init();
    }

    init() {
        let self = this;
        this.submitLinkFile.removeEventListener('click', self._listener(), true)
        this.submitLinkFile.addEventListener('click', self._listener, true)
    }

    _listener() {
        let self = selfClass;

        let dataset = {
            address: self.linkFile.value
        };

        self.eventFileItemClick.detail = dataset;
        self.eventFileItemClick.relatedTarget = self.button;

        let eventPlace = document;
        if (self.defaults.target != "") {
            eventPlace = document.querySelector(self.defaults.target);
        }

        // self.submitLinkFile.removeEventListener("click", self._listener, true);

        if (self.modal.hasClass('in') || self.modal.hasClass('show')) {
            // Dispatch the event.
            eventPlace.dispatchEvent(self.eventFileItemClick);
            self.linkFile.value = "";

            self.modal.modal("hide");
        }
    }
}
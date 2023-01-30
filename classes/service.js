import General from "./general.js";

export default class Service extends General{
    constructor(title, price, description, domain) {
        super(title, price, description)
        this.domain = domain;
    }
} 
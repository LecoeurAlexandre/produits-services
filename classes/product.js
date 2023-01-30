import General from "./general.js";

export default class Product extends General{
    constructor(title, price, description, stock) {
        super(title, price, description)
        this.stock = stock;
    }
} 
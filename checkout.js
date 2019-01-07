module.exports = class Checkout {

    constructor() {
        this.basket = {};
        this.items = {};
        this.discounts = {};
    }

    addItemPrice(item, price) {
        this.basket[item] = price;
    }

    addItem(item) {
        this.items[item] ? this.items[item] = 1 : this.items[item]++;
    }

    calculateTotal() {
        return 
    }

    addDiscount(item, itemCount, discountPrice) {
        this.discounts[item] = { itemCount, discountPrice };
    }
} 
module.exports = class Checkout {

    constructor() {
        this.basket = {};
        this.items = {};
    }

    addItemPrice(item, price) {
        this.basket[item] = price;
    }

    addItem(item) {
        this.items[item] === undefined ? this.items[item] = 1 : this.items[item]++;
    }

    calculateTotal() {
        let total = 0;
        Object.keys(this.items).forEach(key => {
            let value = this.items[key];
            total += value;
            //use key and value here
        });
        return total;
    }

    addDiscount(item, itemCount, discountPrice) {
        this.discounts[item] = { itemCount, discountPrice };
    }
};
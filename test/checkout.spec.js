const Checkout = require('../checkout.js')
const expect = require('chai').expect

let checkout;

beforeEach(() => {
    checkout = new Checkout();
});


it('Can add an item price', () => {
    checkout.addItemPrice('apples', 1);
})

it('Can add an item', () => {
    checkout.addItem('apples');
})

it('Can calculate the current total', () => {
    checkout.addItemPrice('apples', 1);
    checkout.addItem('apples');
    expect(checkout.calculateTotal()).to.equal(1);
})

it('Can add multiple items and get correct total', () => {
    checkout.addItemPrice('apples', 1);
    checkout.addItem('apples');
    checkout.addItemPrice('pairs', 1);
    checkout.addItem('pairs');
    checkout.addItemPrice('juice', 1);
    checkout.addItem('juice');
    expect(checkout.calculateTotal()).to.equal(3);
});

xit('Can add discount rules', () => {
    checkout.addDiscount('apples', 3, 2);
    checkout.addItem('apples');
    checkout.addItem('apples');
    checkout.addItem('apples');
    expect(checkout.calculateTotal()).to.equal(3);
})

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customers = [
    {
        id: 1,
        name: "Shahroze",
        email: "sksahotra911@gmail.com"
    },
    {
        id: 2,
        name: "Kamran",
        email: "sksahotra302@gmail.com"
    },
    {
        id: 3,
        name: "Sahotra",
        email: "sksahotra303@gmail.com"
    }
];
const products = [
    {
        p_id: 101,
        name: "Iphone 14",
        price: 1400,
        category: "Electronics"
    },
    {
        p_id: 102,
        name: "Laptop",
        price: 10000,
        category: "Electronics"
    },
    {
        p_id: 103,
        name: "Hair Dryer",
        price: 5000,
        category: "Appliance"
    },
    {
        p_id: 104,
        name: "Powerbank",
        price: 5000,
        category: "Electronics"
    }
];
const orders = [
    {
        customer: customers[0],
        cart: [products[0], products[1]] // Customer 1's cart with products 1 and 2
    },
    {
        customer: customers[1],
        cart: [products[2]]
    },
    {
        customer: customers[2],
        cart: [products[3], products[0]]
    }
];
const calculatePurchase = (cart) => {
    let total = 0;
    for (const product of cart) {
        total += product.price;
    }
    return total;
};
// Calculate and print total purchase price for each customer
orders.forEach(order => {
    const totalPurchase = calculatePurchase(order.cart);
    console.log(`Customer: ${order.customer.name}`);
    console.log("Products in Cart:");
    order.cart.forEach(item => {
        console.log(`- ${item.name} (Price: $${item.price}, Category: ${item.category})`);
    });
    console.log(`Total Purchase: $${totalPurchase}`);
    console.log("========================");
});
console.log(`Total Purchase: ${calculatePurchase(products)}`);

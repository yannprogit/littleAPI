//------------- Data -------------
const orders = [
    { dueDate: new Date('2023-12-15T10:30:00'), customerId: 7, foodId: 1, deliverymanId: 2, deliveryDate: new Date('2023-12-15T11:00:00'), status: 'paid', validation: 1, qty: 2 },
    { dueDate: new Date('2023-11-25T15:45:00'), customerId: 4, foodId: 5, deliverymanId: 5, deliveryDate: new Date('2023-11-25T16:30:00'), status: 'paid', validation: 1, qty: 1 },
    { dueDate: new Date('2023-02-01T12:00:00'), customerId: 11, foodId: 10, deliverymanId: 2, deliveryDate: new Date('2023-02-01T12:45:00'), status: 'paid', validation: 1, qty: 3 },
    { dueDate: new Date('2023-10-20T19:00:00'), customerId: 1, foodId: 15, deliverymanId: 2, deliveryDate: new Date('2023-10-20T19:45:00'), status: 'paid', validation: 1, qty: 1 },
    { dueDate: new Date('2023-04-05T08:15:00'), customerId: 8, foodId: 20, deliverymanId: 2, deliveryDate: new Date('2023-04-05T08:45:00'), status: 'paid', validation: 1, qty: 2 },
    { dueDate: new Date('2023-08-10T14:30:00'), customerId: 2, foodId: 3, deliverymanId: 2, deliveryDate: new Date('2023-08-10T15:15:00'), status: 'paid', validation: 1, qty: 1 },
    { dueDate: new Date('2023-05-22T18:45:00'), customerId: 10, foodId: 8, deliverymanId: 5, deliveryDate: new Date('2023-05-22T19:30:00'), status: 'paid', validation: 1, qty: 3 },
    { dueDate: new Date('2023-09-01T11:00:00'), customerId: 5, foodId: 13, deliverymanId: 5, deliveryDate: new Date('2023-09-01T11:45:00'), status: 'paid', validation: 1, qty: 1 },
    { dueDate: new Date('2023-03-15T17:30:00'), customerId: 3, foodId: 18, deliverymanId: 2, deliveryDate: new Date('2023-03-15T18:15:00'), status: 'paid', validation: 1, qty: 2 },
    { dueDate: new Date('2023-07-05T21:00:00'), customerId: 6, foodId: 23, deliverymanId: 2, deliveryDate: new Date('2023-07-05T21:45:00'), status: 'paid', validation: 1, qty: 1 },
    { dueDate: new Date('2023-11-12T16:15:00'), customerId: 9, foodId: 2, deliverymanId: 2, deliveryDate: new Date('2023-11-12T17:00:00'), status: 'paid', validation: 1, qty: 2 },
    { dueDate: new Date('2024-11-12T16:15:00'), customerId: 3, foodId: 4, deliverymanId: 7, deliveryDate: null, status: 'paid', validation: 0, qty: 6 },
    { dueDate: null, customerId: 1, foodId: 26, deliverymanId: null, deliveryDate: null, status: 'cart', validation: 0, qty: 6 },
];

//------------- Methods -------------

exports.getOrders = () => {
    return orders;
}
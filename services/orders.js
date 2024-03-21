//------------- Data -------------
const orders = [
    { dueDate: new Date('2024-12-15T10:30:00'), customerId: 2, foodId: 1, deliverymanId: 14, deliveryDate: new Date('2024-12-15T11:00:00'), status: 'paid', validation: 1, qty: 2 },
    { dueDate: new Date('2024-11-25T15:45:00'), customerId: 4, foodId: 5, deliverymanId: 17, deliveryDate: new Date('2024-11-25T16:30:00'), status: 'paid', validation: 1, qty: 1 },
    { dueDate: new Date('2024-02-01T12:00:00'), customerId: 3, foodId: 10, deliverymanId: 17, deliveryDate: new Date('2024-02-01T12:45:00'), status: 'paid', validation: 1, qty: 3 },
    { dueDate: new Date('2024-10-20T19:00:00'), customerId: 3, foodId: 15, deliverymanId: 18, deliveryDate: new Date('2024-10-20T19:45:00'), status: 'paid', validation: 1, qty: 1 },
    { dueDate: new Date('2024-04-05T08:15:00'), customerId: 2, foodId: 20, deliverymanId: 14, deliveryDate: new Date('2024-04-05T08:45:00'), status: 'paid', validation: 1, qty: 2 },
    { dueDate: new Date('2024-08-10T14:30:00'), customerId: 2, foodId: 3, deliverymanId: 14, deliveryDate: new Date('2024-08-10T15:15:00'), status: 'paid', validation: 1, qty: 1 },
    { dueDate: new Date('2024-05-22T18:45:00'), customerId: 2, foodId: 8, deliverymanId: 18, deliveryDate: new Date('2024-05-22T19:30:00'), status: 'paid', validation: 1, qty: 3 },
    { dueDate: new Date('2024-09-01T11:00:00'), customerId: 4, foodId: 13, deliverymanId: 18, deliveryDate: new Date('2024-09-01T11:45:00'), status: 'paid', validation: 1, qty: 1 },
    { dueDate: new Date('2024-03-15T17:30:00'), customerId: 5, foodId: 18, deliverymanId: 29, deliveryDate: new Date('2024-03-15T18:15:00'), status: 'paid', validation: 1, qty: 2 },
    { dueDate: new Date('2024-07-05T21:00:00'), customerId: 5, foodId: 23, deliverymanId: 30, deliveryDate: new Date('2024-07-05T21:45:00'), status: 'paid', validation: 1, qty: 1 },
    { dueDate: new Date('2024-11-12T16:15:00'), customerId: 5, foodId: 2, deliverymanId: 31, deliveryDate: new Date('2024-11-12T17:00:00'), status: 'paid', validation: 1, qty: 2 },
    { dueDate: new Date('2024-19-07T16:15:00'), customerId: 5, foodId: 4, deliverymanId: 32, deliveryDate: null, status: 'paid', validation: 0, qty: 6 },
    { dueDate: null, customerId: 2, foodId: 26, deliverymanId: null, deliveryDate: null, status: 'cart', validation: 0, qty: 6 },
];

//------------- Methods -------------

exports.getOrders = () => {
    return orders;
}
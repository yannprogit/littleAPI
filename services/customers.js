//------------- Import -------------
const bcrypt = require('bcrypt');

//------------- Data -------------
const customers = [
    { firstname: 'Klie', lastname: 'Yen', mail: 'klie.yen@gmail.com', password: 'mdp', zipCode: 75600, address: "8 rue de la merguez", town: "Paris" },
    { firstname: 'Sophie', lastname: 'Martin', mail: 'sophie.martin@gmail.com', password: 'mdp', zipCode: 69000, address: "15 avenue des tulipes", town: "Lyon" },
    { firstname: 'Pierre', lastname: 'Leblanc', mail: 'pierre.leblanc@gmail.com', password: 'mdp', zipCode: 33000, address: "22 rue du chocolat", town: "Bordeaux" },
    { firstname: 'Claire', lastname: 'Dupuis', mail: 'claire.dupuis@gmail.com', password: 'mdp', zipCode: 59000, address: "10 place du croissant", town: "Lille" },
    { firstname: 'Antoine', lastname: 'Roussel', mail: 'antoine.roussel@gmail.com', password: 'mdp', zipCode: 59000, address: "5 boulevard de la baguette", town: "Lille" },
    { firstname: 'Julie', lastname: 'Fournier', mail: 'julie.fournier@gmail.com', password: 'mdp', zipCode: 34000, address: "18 rue de la lavande", town: "Montpellier" },
    { firstname: 'Martin', lastname: 'Lefevre', mail: 'martin.lefevre@gmail.com', password: 'mdp', zipCode: 67000, address: "25 avenue du fromage", town: "Strasbourg" },
    { firstname: 'Caroline', lastname: 'Legrand', mail: 'caroline.legrand@gmail.com', password: 'mdp', zipCode: 69002, address: "12 place de la saucisse", town: "Lyon" },
    { firstname: 'Alexandre', lastname: 'Roy', mail: 'alexandre.roy@gmail.com', password: 'mdp', zipCode: 75015, address: "30 rue de la baguette", town: "Paris" },
    { firstname: 'Boubou', lastname: 'Langer', mail: 'boubou.langer@gmail.com', password: 'mdp', zipCode: 44000, address: "8 avenue de la confiture", town: "Nantes" },
    { firstname: 'Malik', lastname: 'Dufresne', mail: 'malik.dufresne@gmail.com', password: 'mdp', zipCode: 69003, address: "14 rue de la crêpe", town: "Lyon" },
  ];

//------------- Methods -------------

exports.getCustomers = () => {
    return customers;
}
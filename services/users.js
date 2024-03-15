//------------- Data -------------
const users = [
    { firstname: 'Klie', lastname: 'Yen', mail: 'klie.yen@gmail.com', password: 'mdp'},
    { firstname: 'Sophie', lastname: 'Martin', mail: 'sophie.martin@gmail.com', password: 'mdp'},
    { firstname: 'Pierre', lastname: 'Leblanc', mail: 'pierre.leblanc@gmail.com', password: 'mdp'},
    { firstname: 'Claire', lastname: 'Dupuis', mail: 'claire.dupuis@gmail.com', password: 'mdp'},
    { firstname: 'Antoine', lastname: 'Roussel', mail: 'antoine.roussel@gmail.com', password: 'mdp'},
    { firstname: 'Julie', lastname: 'Fournier', mail: 'julie.fournier@gmail.com', password: 'mdp'},
    { firstname: 'Martin', lastname: 'Lefevre', mail: 'martin.lefevre@gmail.com', password: 'mdp'},
    { firstname: 'Caroline', lastname: 'Legrand', mail: 'caroline.legrand@gmail.com', password: 'mdp'},
    { firstname: 'Alexandre', lastname: 'Roy', mail: 'alexandre.roy@gmail.com', password: 'mdp'},
    { firstname: 'Boubou', lastname: 'Langer', mail: 'boubou.langer@gmail.com', password: 'mdp'},
    { firstname: 'Malik', lastname: 'Dufresne', mail: 'malik.dufresne@gmail.com', password: 'mdp'},
  ];

//------------- Methods -------------

exports.getUsers = () => {
    return users;
}
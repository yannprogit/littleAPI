//------------- Import -------------
const bcrypt = require('bcrypt');

//------------- Data -------------
const employees = [
  { firstname: 'Hamp', lastname: 'Loyé', mail: 'hamp.loye@gmail.com', password: bcrypt.hashSync('mdp', 10), role: 3, endContract: null },
  { firstname: 'Ali', lastname: 'Expe-Rèss', mail: 'ali.er@gmail.com', password: bcrypt.hashSync('mdp', 10), role: 2, endContract: null },
  { firstname: 'Pie', lastname: 'Ksou', mail: 'pie.ksou@gmail.com', password: bcrypt.hashSync('mdp', 10), role: 4, endContract: null },
  { firstname: 'Mana', lastname: 'Jeur', mail: 'mana.jeur@gmail.com', password: bcrypt.hashSync('mdp', 10), role: 5, endContract: null },
  { firstname: 'Hubert', lastname: 'Ite', mail: 'hubert.ite@gmail.com', password: bcrypt.hashSync('mdp', 10), role: 2, endContract: null },
  { firstname: 'Délie', lastname: 'Vérroux', mail: 'delie.verroux@gmail.com', password: bcrypt.hashSync('mdp', 10), role: 2, endContract: null },
  { firstname: 'Jean', lastname: 'Dupont', mail: 'jean.dupont@gmail.com', password: bcrypt.hashSync('mdp', 10), role: 3, endContract: new Date('2023-12-01') },
  { firstname: 'Marie', lastname: 'Lafontaine', mail: 'marie.lafontaine@gmail.com', password: bcrypt.hashSync('mdp', 10), role: 4, endContract: new Date('2024-06-25') },
  { firstname: 'Luc', lastname: 'Martin', mail: 'luc.martin@gmail.com', password: bcrypt.hashSync('mdp', 10), role: 5, endContract: null },
  { firstname: 'Sylvie', lastname: 'Rouge', mail: 'sylvie.rouge@gmail.com', password: bcrypt.hashSync('mdp', 10), role: 2, endContract: new Date('2023-11-15') },
  { firstname: 'Paul', lastname: 'Blanc', mail: 'paul.blanc@gmail.com', password: bcrypt.hashSync('mdp', 10), role: 3, endContract: null },
  { firstname: 'Marine', lastname: 'Noir', mail: 'marine.noir@gmail.com', password: bcrypt.hashSync('mdp', 10), role: 4, endContract: null },
  { firstname: 'Olivier', lastname: 'Jaune', mail: 'olivier.jaune@gmail.com', password: bcrypt.hashSync('mdp', 10), role: 5, endContract: new Date('2023-09-10') },
  { firstname: 'Sophie', lastname: 'Verte', mail: 'sophie.verte@gmail.com', password: bcrypt.hashSync('mdp', 10), role: 2, endContract: null },
  { firstname: 'Thomas', lastname: 'Violet', mail: 'thomas.violet@gmail.com', password: bcrypt.hashSync('mdp', 10), role: 3, endContract: null },
  { firstname: 'Caroline', lastname: 'Gris', mail: 'caroline.gris@gmail.com', password: bcrypt.hashSync('mdp', 10), role: 4, endContract: null },
  { firstname: 'Farid', lastname: 'Bleu', mail: 'farid.bleu@gmail.com', password: bcrypt.hashSync('mdp', 10), role: 5, endContract: new Date('2023-10-05') },
  { firstname: 'Isabelle', lastname: 'Marron', mail: 'isabelle.marron@gmail.com', password: bcrypt.hashSync('mdp', 10), role: 2, endContract: new Date('2024-01-15') },
  { firstname: 'Vincent', lastname: 'Rougeot', mail: 'vincent.rougeot@gmail.com', password: bcrypt.hashSync('mdp', 10), role: 3, endContract: null },
];

//------------- Methods -------------

exports.getEmployees = () => {
    return employees;
}
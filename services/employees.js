//------------- Import -------------
//const bcrypt = require('bcrypt');

//------------- Data -------------
const employees = [
  { firstname: 'Hamp', lastname: 'Loyé', mail: 'hamp.loye@gmail.com', password: 'mdp', role: 3, endContract: null },
  { firstname: 'Ali', lastname: 'Expe-Rèss', mail: 'ali.er@gmail.com', password: 'mdp', role: 2, endContract: null },
  { firstname: 'Pie', lastname: 'Ksou', mail: 'pie.ksou@gmail.com', password: 'mdp', role: 4, endContract: null },
  { firstname: 'Mana', lastname: 'Jeur', mail: 'mana.jeur@gmail.com', password: 'mdp', role: 5, endContract: null },
  { firstname: 'Hubert', lastname: 'Ite', mail: 'hubert.ite@gmail.com', password: 'mdp', role: 2, endContract: null },
  { firstname: 'Délie', lastname: 'Vérroux', mail: 'delie.verroux@gmail.com', password: 'mdp', role: 2, endContract: null },
  { firstname: 'Jean', lastname: 'Dupont', mail: 'jean.dupont@gmail.com', password: 'mdp', role: 3, endContract: new Date('2023-12-01') },
  { firstname: 'Marie', lastname: 'Lafontaine', mail: 'marie.lafontaine@gmail.com', password: 'mdp', role: 4, endContract: new Date('2024-06-25') },
  { firstname: 'Luc', lastname: 'Martin', mail: 'luc.martin@gmail.com', password: 'mdp', role: 5, endContract: null },
  { firstname: 'Sylvie', lastname: 'Rouge', mail: 'sylvie.rouge@gmail.com', password: 'mdp', role: 2, endContract: new Date('2023-11-15') },
  { firstname: 'Paul', lastname: 'Blanc', mail: 'paul.blanc@gmail.com', password: 'mdp', role: 3, endContract: null },
  { firstname: 'Marine', lastname: 'Noir', mail: 'marine.noir@gmail.com', password: 'mdp', role: 4, endContract: null },
  { firstname: 'Olivier', lastname: 'Jaune', mail: 'olivier.jaune@gmail.com', password: 'mdp', role: 5, endContract: new Date('2023-09-10') },
  { firstname: 'Sophie', lastname: 'Verte', mail: 'sophie.verte@gmail.com', password: 'mdp', role: 2, endContract: null },
  { firstname: 'Thomas', lastname: 'Violet', mail: 'thomas.violet@gmail.com', password: 'mdp', role: 3, endContract: null },
  { firstname: 'Caroline', lastname: 'Gris', mail: 'caroline.gris@gmail.com', password: 'mdp', role: 4, endContract: null },
  { firstname: 'Farid', lastname: 'Bleu', mail: 'farid.bleu@gmail.com', password: 'mdp', role: 2, endContract: new Date('2023-10-05') },
  { firstname: 'Isabelle', lastname: 'Marron', mail: 'isabelle.marron@gmail.com', password: 'mdp', role: 2, endContract: null },
  { firstname: 'Vincent', lastname: 'Rougeot', mail: 'vincent.rougeot@gmail.com', password: 'mdp', role: 2, endContract: null },
];

const employeesForLakojary = [
  { userId: 2, departmentId: 77, roleId: 3, endContract: null, salary: 2500.00 },
  { userId: 3, departmentId: 77, roleId: 2, endContract: null, salary: 1800.00 },
  { userId: 4, departmentId: 77, roleId: 4, endContract: null, salary: 3200.00 },
  { userId: 5, departmentId: 77, roleId: 4, endContract: null, salary: 2800.00 },
  { userId: 6, departmentId: 77, roleId: 2, endContract: null, salary: 3300.00 },
  { userId: 7, departmentId: 77, roleId: 2, endContract: null, salary: 2000.00 },
  { userId: 8, departmentId: 75, roleId: 3, endContract: new Date('2023-12-01'), salary: 3500.00 },
  { userId: 9, departmentId: 69, roleId: 4, endContract: new Date('2024-06-25'), salary: 3700.00 },
  { userId: 10, departmentId: 36, roleId: 4, endContract: null, salary: 2900.00 },
  { userId: 11, departmentId: 43, roleId: 2, endContract: new Date('2023-11-15'), salary: 2800.00 },
  { userId: 12, departmentId: 15, roleId: 3, endContract: null, salary: 2200.00 },
  { userId: 13, departmentId: 12, roleId: 4, endContract: null, salary: 3100.00 },
  { userId: 14, departmentId: 12, roleId: 4, endContract: new Date('2023-09-10'), salary: 2600.00 },
  { userId: 15, departmentId: 78, roleId: 2, endContract: null, salary: 2400.00 },
  { userId: 16, departmentId: 91, roleId: 3, endContract: null, salary: 3700.00 },
  { userId: 17, departmentId: 91, roleId: 4, endContract: null, salary: 3600.00 },
  { userId: 18, departmentId: 31, roleId: 4, endContract: new Date('2023-10-05'), salary: 3300.00 },
  { userId: 19, departmentId: 31, roleId: 2, endContract: null, salary: 1900.00 },
  { userId: 20, departmentId: 31, roleId: 3, endContract: null, salary: 2600.00 },
];

//------------- Methods -------------

exports.getEmployees = () => {
    return employees;
}

exports.getEmployeesForLakojary = () => {
  return employeesForLakojary;
}
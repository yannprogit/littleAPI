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
    { firstname: 'Hamp', lastname: 'Loyé', mail: 'hamp.loye@gmail.com', password: 'mdp' },
    { firstname: 'Ali', lastname: 'Expe-Rèss', mail: 'ali.er@gmail.com', password: 'mdp' },
    { firstname: 'Pie', lastname: 'Ksou', mail: 'pie.ksou@gmail.com', password: 'mdp' },
    { firstname: 'Mana', lastname: 'Jeur', mail: 'mana.jeur@gmail.com', password: 'mdp' },
    { firstname: 'Hubert', lastname: 'Ite', mail: 'hubert.ite@gmail.com', password: 'mdp' },
    { firstname: 'Délie', lastname: 'Vérroux', mail: 'delie.verroux@gmail.com', password: 'mdp' },
    { firstname: 'Jean', lastname: 'Dupont', mail: 'jean.dupont@gmail.com', password: 'mdp' },
    { firstname: 'Marie', lastname: 'Lafontaine', mail: 'marie.lafontaine@gmail.com', password: 'mdp' },
    { firstname: 'Luc', lastname: 'Martin', mail: 'luc.martin@gmail.com', password: 'mdp' },
    { firstname: 'Sylvie', lastname: 'Rouge', mail: 'sylvie.rouge@gmail.com', password: 'mdp' },
    { firstname: 'Paul', lastname: 'Blanc', mail: 'paul.blanc@gmail.com', password: 'mdp' },
    { firstname: 'Marine', lastname: 'Noir', mail: 'marine.noir@gmail.com', password: 'mdp' },
    { firstname: 'Olivier', lastname: 'Jaune', mail: 'olivier.jaune@gmail.com', password: 'mdp' },
    { firstname: 'Sophie', lastname: 'Verte', mail: 'sophie.verte@gmail.com', password: 'mdp' },
    { firstname: 'Thomas', lastname: 'Violet', mail: 'thomas.violet@gmail.com', password: 'mdp' },
    { firstname: 'Caroline', lastname: 'Gris', mail: 'caroline.gris@gmail.com', password: 'mdp' },
    { firstname: 'Farid', lastname: 'Bleu', mail: 'farid.bleu@gmail.com', password: 'mdp' },
    { firstname: 'Isabelle', lastname: 'Marron', mail: 'isabelle.marron@gmail.com', password: 'mdp' },
    { firstname: 'Vincent', lastname: 'Rougeot', mail: 'vincent.rougeot@gmail.com', password: 'mdp' },
    { firstname: 'Michel', lastname: 'Bouanou', mail: 'michel.bouanou@gmail.com', password: 'mdp' },
  ];

//------------- Methods -------------

exports.getUsers = () => {
    return users;
}
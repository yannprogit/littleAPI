//------------- Data -------------

const users = [
    { firstname: 'Klie', lastname: 'Yen', mail: 'klie.yen@gmail.com', password: '$2b$10$VJ.mLF25s6TMEbLCb2KhXezgvd5rS2hbZemTRBqRbkaeahPDKRMgm'},
    { firstname: 'Sophie', lastname: 'Martin', mail: 'sophie.martin@gmail.com', password: '$2b$10$VJ.mLF25s6TMEbLCb2KhXezgvd5rS2hbZemTRBqRbkaeahPDKRMgm'},
    { firstname: 'Pierre', lastname: 'Leblanc', mail: 'pierre.leblanc@gmail.com', password: '$2b$10$VJ.mLF25s6TMEbLCb2KhXezgvd5rS2hbZemTRBqRbkaeahPDKRMgm'},
    { firstname: 'Claire', lastname: 'Dupuis', mail: 'claire.dupuis@gmail.com', password: '$2b$10$VJ.mLF25s6TMEbLCb2KhXezgvd5rS2hbZemTRBqRbkaeahPDKRMgm'},
    { firstname: 'Antoine', lastname: 'Roussel', mail: 'antoine.roussel@gmail.com', password: '$2b$10$VJ.mLF25s6TMEbLCb2KhXezgvd5rS2hbZemTRBqRbkaeahPDKRMgm'},
    { firstname: 'Julie', lastname: 'Fournier', mail: 'julie.fournier@gmail.com', password: '$2b$10$VJ.mLF25s6TMEbLCb2KhXezgvd5rS2hbZemTRBqRbkaeahPDKRMgm'},
    { firstname: 'Martin', lastname: 'Lefevre', mail: 'martin.lefevre@gmail.com', password: '$2b$10$VJ.mLF25s6TMEbLCb2KhXezgvd5rS2hbZemTRBqRbkaeahPDKRMgm'},
    { firstname: 'Caroline', lastname: 'Legrand', mail: 'caroline.legrand@gmail.com', password: '$2b$10$VJ.mLF25s6TMEbLCb2KhXezgvd5rS2hbZemTRBqRbkaeahPDKRMgm'},
    { firstname: 'Alexandre', lastname: 'Roy', mail: 'alexandre.roy@gmail.com', password: '$2b$10$VJ.mLF25s6TMEbLCb2KhXezgvd5rS2hbZemTRBqRbkaeahPDKRMgm'},
    { firstname: 'Boubou', lastname: 'Langer', mail: 'boubou.langer@gmail.com', password: '$2b$10$VJ.mLF25s6TMEbLCb2KhXezgvd5rS2hbZemTRBqRbkaeahPDKRMgm'},
    { firstname: 'Malik', lastname: 'Dufresne', mail: 'malik.dufresne@gmail.com', password: '$2b$10$VJ.mLF25s6TMEbLCb2KhXezgvd5rS2hbZemTRBqRbkaeahPDKRMgm'},
    { firstname: 'Hamp', lastname: 'Loyé', mail: 'hamp.loye@gmail.com', password: '$2b$10$VJ.mLF25s6TMEbLCb2KhXezgvd5rS2hbZemTRBqRbkaeahPDKRMgm' },
    { firstname: 'Ali', lastname: 'Expe-Rèss', mail: 'ali.er@gmail.com', password: '$2b$10$VJ.mLF25s6TMEbLCb2KhXezgvd5rS2hbZemTRBqRbkaeahPDKRMgm' },
    { firstname: 'Pie', lastname: 'Ksou', mail: 'pie.ksou@gmail.com', password: '$2b$10$VJ.mLF25s6TMEbLCb2KhXezgvd5rS2hbZemTRBqRbkaeahPDKRMgm' },
    { firstname: 'Mana', lastname: 'Jeur', mail: 'mana.jeur@gmail.com', password: '$2b$10$VJ.mLF25s6TMEbLCb2KhXezgvd5rS2hbZemTRBqRbkaeahPDKRMgm' },
    { firstname: 'Hubert', lastname: 'Ite', mail: 'hubert.ite@gmail.com', password: '$2b$10$VJ.mLF25s6TMEbLCb2KhXezgvd5rS2hbZemTRBqRbkaeahPDKRMgm' },
    { firstname: 'Délie', lastname: 'Vérroux', mail: 'delie.verroux@gmail.com', password: '$2b$10$VJ.mLF25s6TMEbLCb2KhXezgvd5rS2hbZemTRBqRbkaeahPDKRMgm' },
    { firstname: 'Jean', lastname: 'Dupont', mail: 'jean.dupont@gmail.com', password: '$2b$10$VJ.mLF25s6TMEbLCb2KhXezgvd5rS2hbZemTRBqRbkaeahPDKRMgm' },
    { firstname: 'Marie', lastname: 'Lafontaine', mail: 'marie.lafontaine@gmail.com', password: '$2b$10$VJ.mLF25s6TMEbLCb2KhXezgvd5rS2hbZemTRBqRbkaeahPDKRMgm' },
    { firstname: 'Luc', lastname: 'Martin', mail: 'luc.martin@gmail.com', password: '$2b$10$VJ.mLF25s6TMEbLCb2KhXezgvd5rS2hbZemTRBqRbkaeahPDKRMgm' },
    { firstname: 'Sylvie', lastname: 'Rouge', mail: 'sylvie.rouge@gmail.com', password: '$2b$10$VJ.mLF25s6TMEbLCb2KhXezgvd5rS2hbZemTRBqRbkaeahPDKRMgm' },
    { firstname: 'Paul', lastname: 'Blanc', mail: 'paul.blanc@gmail.com', password: '$2b$10$VJ.mLF25s6TMEbLCb2KhXezgvd5rS2hbZemTRBqRbkaeahPDKRMgm' },
    { firstname: 'Marine', lastname: 'Noir', mail: 'marine.noir@gmail.com', password: '$2b$10$VJ.mLF25s6TMEbLCb2KhXezgvd5rS2hbZemTRBqRbkaeahPDKRMgm' },
    { firstname: 'Olivier', lastname: 'Jaune', mail: 'olivier.jaune@gmail.com', password: '$2b$10$VJ.mLF25s6TMEbLCb2KhXezgvd5rS2hbZemTRBqRbkaeahPDKRMgm' },
    { firstname: 'Sophie', lastname: 'Verte', mail: 'sophie.verte@gmail.com', password: '$2b$10$VJ.mLF25s6TMEbLCb2KhXezgvd5rS2hbZemTRBqRbkaeahPDKRMgm' },
    { firstname: 'Thomas', lastname: 'Violet', mail: 'thomas.violet@gmail.com', password: '$2b$10$VJ.mLF25s6TMEbLCb2KhXezgvd5rS2hbZemTRBqRbkaeahPDKRMgm' },
    { firstname: 'Caroline', lastname: 'Gris', mail: 'caroline.gris@gmail.com', password: '$2b$10$VJ.mLF25s6TMEbLCb2KhXezgvd5rS2hbZemTRBqRbkaeahPDKRMgm' },
    { firstname: 'Farid', lastname: 'Bleu', mail: 'farid.bleu@gmail.com', password: '$2b$10$VJ.mLF25s6TMEbLCb2KhXezgvd5rS2hbZemTRBqRbkaeahPDKRMgm' },
    { firstname: 'Isabelle', lastname: 'Marron', mail: 'isabelle.marron@gmail.com', password: '$2b$10$VJ.mLF25s6TMEbLCb2KhXezgvd5rS2hbZemTRBqRbkaeahPDKRMgm' },
    { firstname: 'Vincent', lastname: 'Rougeot', mail: 'vincent.rougeot@gmail.com', password: '$2b$10$VJ.mLF25s6TMEbLCb2KhXezgvd5rS2hbZemTRBqRbkaeahPDKRMgm' },
    { firstname: 'Michel', lastname: 'Bouanou', mail: 'michel.bouanou@gmail.com', password: '$2b$10$VJ.mLF25s6TMEbLCb2KhXezgvd5rS2hbZemTRBqRbkaeahPDKRMgm' },
  ];

//------------- Methods -------------

exports.getUsers = () => {
    return users;
}
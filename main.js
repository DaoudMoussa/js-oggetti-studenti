// 1
// creare un oggetto che rappresenta uno studente: ogni studente è caratterizzato
// da un nome, un cognome e un'età. Attraverso un ciclo for-in stampare a schermo
// tutte le sue proprietà e il relativo valore
// 2
// creare un array di oggetti "studente". Ciclare su tutti gli studenti e
// stampare per ciascuno il nome e il cognome
// 3
// tramite 3 prompt, chiedere all'utente il nome, il cognome e l'età di un nuovo studente.
// Creare con questi dati un nuovo oggetto e inserirlo nell'array del punto precedente.

/*=========== 1 ===========*/
console.log('PUNTO 1');

var student = {
    'name' : 'Daoud',
    'lastName' : 'Moussa',
    'age' : 20
}

for (var key in student) {
    switch (key) {
        case 'name':
            console.log('il nome dello studente è: ' + student[key]);
        break;
        case 'lastName':
            console.log('il cognome dello studente è: ' + student[key]);
        break;
        case 'age':
            console.log('Lo studente ha ' + student[key] + ' anni.');
        break;
    }
}


/*=========== 2 ===========*/
console.log('PUNTO 2');

var students = [
    {
        'name' : 'Pippo',
        'lastName' : 'Baudo',
        'age' : 83
    },

    {
        'name' : 'Pluto',
        'lastName' : 'Topolino',
        'age' : 14
    },

    {
        'name' : 'Daoud',
        'lastName' : 'Moussa',
        'age' : 20
    }
];

for (var i = 0; i < students.length; i++) {
    console.log('STUDENTE ' + (i+1) + ':');
    for (var key in students[i]) {
        if(key != 'age') {
            console.log(students[i][key]);
        }
    }
}

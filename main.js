$(document).ready(function() {
    /*=========== 1 ===========*/
    // creare un oggetto che rappresenta uno studente: ogni studente è caratterizzato
    // da un nome, un cognome e un'età. Attraverso un ciclo for-in stampare a schermo
    // tutte le sue proprietà e il relativo valore
    console.log('PUNTO 1');

    var student = {
        'name' : 'Daoud',
        'lastName' : 'Moussa',
        'age' : 20
    }

    for (var key in student) {
        switch (key) {
            case 'name':
                $('#punto-1 .name').text('il nome dello studente è: ' + student[key]);
                console.log('il nome dello studente è: ' + student[key]);
                break;
            case 'lastName':
                $('#punto-1 .last-name').text('il cognome dello studente è: ' + student[key]);
                console.log('il cognome dello studente è: ' + student[key]);
                break;
            case 'age':
                $('#punto-1 .age').text('Lo studente ha ' + student[key] + ' anni.');
                console.log('Lo studente ha ' + student[key] + ' anni.');
                break;
        }
    }

    /*=========== 2 ===========*/
    // creare un array di oggetti "studente". Ciclare su tutti gli studenti e
    // stampare per ciascuno il nome e il cognome
    console.log('PUNTO 2');

    var studentsPoint2 = [
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

    printAtNPoint(studentsPoint2, 2);


    /*=========== 3 ===========*/
    // tramite 3 prompt, chiedere all'utente il nome, il cognome e l'età di un nuovo studente.
    // Creare con questi dati un nuovo oggetto e inserirlo nell'array del punto precedente.
    var studentsPoint3 = [
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
            'name' : 'Qui',
            'lastName' : 'Quo',
            'age' : 60
        }
    ];

    var studentData = {};

    var input = prompt('inserisci nome')
    studentData.name = firstCharUpperCase(input);
    input = prompt('Inserisci il tuo cognome');
    studentData.lastName = firstCharUpperCase(input);
    studentData.age = parseInt(prompt('inserisci la tua età'));
    studentsPoint3.push(studentData);

    printAtNPoint(studentsPoint3, 3);

});

function printAtNPoint(students, puntoN) {
    for (var i = 0; i < students.length; i++) {
        var studentSelector = $('#punto-'+ puntoN + ' li').eq(i);
        for (var key in students[i]) {
            if(key != 'age') {
                studentSelector.children('.numero-studente').text(i+1);
                studentSelector.children('.nome').append(students[i][key] + ' ');
            }
        }
    }
}

function firstCharUpperCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

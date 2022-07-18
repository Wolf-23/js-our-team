let containerDom = document.getElementById('container');
const teamArray = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        immagine: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        immagine: 'angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        immagine: 'walter-gordon-office-manager.jpg'
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        immagine: 'angela-lopez-social-media-manager.jpg'
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        immagine: 'scott-estrada-developer.jpg'
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        immagine: 'barbara-ramos-graphic-designer.jpg'
    }
];

// Stampa in console i valori di nome, ruolo e immagine

for (let key in teamArray) {
    console.log(teamArray[key]);
}

for (i = 0; i < teamArray.length; i++) {
    //Creo Card
    let card = document.createElement('div');
    card.classList.add('card');
    //Aggiungo Card a containerDom
    containerDom.append(card);
    let nome = document.createElement('h2');
    card.append(nome);
    nome.append(teamArray[i].nome);
    let ruolo = document.createElement('h3');
    card.append(ruolo);
    ruolo.append(teamArray[i].ruolo);
    let immagine = document.createElement('h4');
    card.append(immagine);
    immagine.append(teamArray[i].immagine);
    containerDom.append(card);
}

//+ ' ' + teamArray[i].ruolo + ' ' + teamArray[i].immagine);
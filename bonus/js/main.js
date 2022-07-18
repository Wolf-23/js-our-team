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
    //Creo Card e aggiungo la classe card
    let card = document.createElement('div');
    card.classList.add('card');
    //Aggiungo Card a containerDom
    containerDom.append(card);
    //Creo nome, aggiungo il valore e lo appendo a Card 
    let nome = document.createElement('h2');
    card.append(nome);
    nome.append(teamArray[i].nome);
    //Creo ruolo, aggiungo il valore e lo appendo a Card 
    let ruolo = document.createElement('h3');
    card.append(ruolo);
    ruolo.append(teamArray[i].ruolo);
    //Creo immagine, aggiungo la classe imgContainer
    let immagine = document.createElement('div');
    immagine.classList.add('imgContainer');
    //Lo appendo a card e aggiungo il contenuto
    card.append(immagine);
    immagine.innerHTML = `<img class="my-img" src="img/${teamArray[i].immagine}">`;
}



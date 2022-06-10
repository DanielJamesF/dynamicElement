function smartPeople() {
    let names = ['Charles', 'Amanda', 'Bulelani', 'Cameron', 'Cassidy', 'Clayton', 'Daniel', 'Emile', 'Ikhlaas', 'Joshe', 'Joshua', 'Liam', 'Marshalino', 'Meagan', 'Michaela', 'Mikhail', 'Monique', 'Philani', 'Ra\'ees', 'Rasheedah', 'Reagan', 'Ridhaa', 'Saleem', 'Shane', 'Sibongile', 'Siliziwe', 'Sinethemba', 'Taucia', 'Yaseen'
];
let ul = document.createElement('ul');
document.body.appendChild(ul);

names.forEach( (item, index)=> {
    ul.innerHTML += `<li>${index}: ${item} </li>`;
});
}

smartPeople();

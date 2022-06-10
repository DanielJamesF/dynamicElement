let smartPeople = ['Charles', 'Amanda', 'Bulelani', 'Cameron', 'Cassidy', 'Clayton', 'Daniel', 'Emile', 'Ikhlaas', 'Joshe', 'Joshua', 'Liam', 'Marshalino', 'Meagan', 'Michaela', 'Mikhail', 'Monique', 'Philani', 'Ra\'ees', 'Rasheedah', 'Reagan', 'Ridhaa', 'Saleem', 'Shane', 'Sibongile', 'Siliziwe', 'Sinethemba', 'Taucia', 'Yaseen'];
let wrapper = document.getElementById('names');
smartPeople.forEach((item)=>{
    wrapper.innerHTML += `<li>${item}</li>`
} );

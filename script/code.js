let smartPeople = ['Daniel', 'Clayton', 'Muddathir', 'Jared', 'Yaseen'];
let wrapper = document.getElementById('names');
smartPeople.forEach((item)=>{
    wrapper.innerHTML += `<li>${item}</li>`
} );

git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/DanielJamesF/dynamicElement.git
git push -u origin main
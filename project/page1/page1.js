var newParagraph = document.createElement('p');
newParagraph.innerText ='I have just been created in JavaScript';
document.body.appendChild(newParagraph);

newParagraph.style.font = '18px';
newParagraph.style.font = 'sans-serif';
newParagraph.style.width = '100px';
newParagraph.style.border = '1px solid orange'
newParagraph.style.padding = '30px';

newParagraph.addEventListener('click',function(event){
    console.log(event);
    console.log(event.target);
    event.target.style.color = 'pink';


})




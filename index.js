document.getElementById('ground').style.backgroundColor='grey'

document.getElementById('title').innerHTML='Welcome to Green Kiosk'
document.getElementById('title').style.fontSize='24px'
document.getElementById('title').style.color='green'

let newfruit =document.createElement('li');
newfruit.innerHTML='Strawberrries'
document.getElementById('fruList').appendChild(newfruit)

let newveg =document.createElement('li');
newveg.innerHTML='Cabbages'
document.getElementById('vegList').appendChild(newveg)


document.getElementById('tag').style.textTransform="uppercase"
document.getElementById('tag1').style.textTransform="uppercase"
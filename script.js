//dichirazione variabile
//const myVar = 5; //valori costanti
//let myVar = 5; // valori che posso cambiare

//console(myVar);

//const button = document.querySelector('button')//seleziona ekemento tramite ricerca

//console.log(button.innerHTML);

const button = document.querySelector('button');
const input = document.querySelector('input');
const todoList = document.querySelector('.todo-list');
const emptyListMessage = document.querySelector('.empty-list-message');

const activities = ["Imparare HTML", "Imparare JS"];

//activities.push('Fare la spesa', "Altro")
//activities.splice(0, 1)
//console.log(activities.length);

showContent();


function showContent() {
    todoList.innerText = ' ';
    emptyListMessage.innerText = ' ';

    if (activities.length > 0) {
        activities.forEach(function (activity) {
            console.log(activity);
        });
    } else {
        emptyListMessage.innerText = 'Sembra non ci siano attività';
    }
}

//alt 96 per fare `

const input=document.getElementById('input');

const btn=document.getElementById('add');
const itme=document.getElementById('item');

btn.addEventListener('click',addTodo);

function addTodo() {
    const data=input.value.trim();
    if(data === " ") {
        alert('Enter Value');
        return;
    }
    const li=document.createElement('li');
    li.textContent=data;

    const deleteBtn=document.createElement('button');
    deleteBtn.textContent='❌';
    deleteBtn.addEventListener('click', ()=>{
        li.remove();
    })

    itme.appendChild(li)

    li.appendChild(deleteBtn)
    

}
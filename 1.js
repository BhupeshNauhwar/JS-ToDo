const input=document.getElementById('input');
const btn=document.getElementById('add');

const item =document.getElementById('item');

btn.addEventListener('click',addTodo);

function addTodo(){
   const data=input.value.trim();
   
   if(data=== ''){
    alert("add input");
    return;
   }
   const li =document.createElement('li');
   li.textContent=data;

   const deleteBtn=document.createElement('button');
   deleteBtn.textContent='❌'
   item.appendChild(li);
   li.appendChild(deleteBtn)
   input.value='';
}

item.addEventListener('click',deleteTodo)
function deleteTodo(e){

        if(e.target.tagName === 'BUTTON'){
            e.target.parentElement.remove()
        }
    }


// item.addEventListener('click',(e)=>{
//     if(e.target.tagName === 'BUTTON')
//         e.target.parentElement.remove()
// })


let input = document.querySelector("#button1")
const taskinput = document.querySelector("#taskinput")
const tasks = document.querySelector(".tasks")
const alltask = document.querySelector(".alltask")
input.addEventListener ("click", () => {
    if (taskinput.value.length == 0) {
        alert("Please enter a task")
    }
    else {
        alltask.innerHTML += `
        <div id="alltask">
        <span class="tasks">
        ${taskinput.value}
        </span>
        <button class= "delete"> 
        <i class="fa-solid fa-trash" style="color: #25203a;"></i>
        </button> 
        </div>
        `;

                var del = document.querySelectorAll(".delete");
            for (var i = 0; i < del.length; i++){
                del[i].onclick = function (){
                    this.parentNode.remove();
            }
        }
    } 
    document.querySelector('#taskinput').value = '';                                
})
  
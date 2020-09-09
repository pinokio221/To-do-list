var line = document.getElementById('lines');
var checkbox;
var block;

window.onload = function() {
    var retObj = JSON.parse(localStorage.getItem("line"))
    line.innerHTML = retObj;
}

function add() {
    var text = prompt('Введіть завдання','');  
    
    switch(true) {
        case (text == "") || (text.trim() == ''): alert("Ви не ввели текст.");
            return;
            
        case (text == null):
            return;
            
        case (text.length > 80): alert("Завдання не може містити більше 80-ти символів.");
            return;
            
        default:
            var n_line = line.innerHTML+="<div class = 'my_block'><input type ='checkbox' class = 'check'></input><div class = 'new_add'>"+text+"</div></div>";
            line.firstChild.childNodes[0].style.animation = 'expand .5s ease-in-out';
            localStorage.setItem("line", JSON.stringify(line.innerHTML));
        }
    }

function remove() {
    checkbox = document.querySelectorAll(".check");
    checkbox.forEach(function(e) {
            if(e.checked) {
                e.parentNode.remove(); // доступ до батьківського елементу
                localStorage.setItem("line", JSON.stringify(line.innerHTML)); // запис у local
                line.firstChild.childNodes[0].style.animation = 'expand .5s ease-in-out';
                }
            })  
        }

function edit() {
    checkbox = document.querySelectorAll(".check");
        checkbox.forEach(function(e) {
            if(e.checked) {
                var msg = prompt('Відредагуйте завдання',e.parentNode.childNodes[1].innerHTML);
                if (msg !== "" && msg.trim() != '') {
                    e.parentNode.childNodes[1].innerHTML = msg;
                    localStorage.setItem("line", JSON.stringify(line.innerHTML));
                    }
                 else {
                    alert("Ви не ввели текст.");
                 }
                }
            })
        }        

function clear() { // очищення local storage
    localStorage.clear();
    return 'Data cleared';

}

             
                        


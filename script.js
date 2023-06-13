//CHECKBOX

var todosCheckbox = document.getElementById("checkbox-1");
var emailCheckbox = document.getElementById("checkbox-2");
var smsCheckbox = document.getElementById("checkbox-3");

todosCheckbox.addEventListener("click", function() {
  if (todosCheckbox.checked) {
    emailCheckbox.checked = true;
    smsCheckbox.checked = true;

    todosCheckbox.classList.add("todos-check");
    todosCheckbox.classList.remove("todos-minus");
  } 
  else {
    emailCheckbox.checked = false;
    smsCheckbox.checked = false;
    todosCheckbox.classList.remove("todos-check");
  }
  
});

emailCheckbox.addEventListener("click", checkTodosCheckbox);
smsCheckbox.addEventListener("click", checkTodosCheckbox);

function checkTodosCheckbox() {
  if (emailCheckbox.checked && smsCheckbox.checked) {
    todosCheckbox.checked = true;
    todosCheckbox.classList.add("todos-check");
  }

  if ( (emailCheckbox.checked && smsCheckbox.checked == false) || (emailCheckbox.checked == false && smsCheckbox.checked)) {
    todosCheckbox.checked = true;
    todosCheckbox.classList.add("todos-minus");
    todosCheckbox.classList.remove("todos-check");
  }
  else if ( emailCheckbox.checked && smsCheckbox.checked ) {
    todosCheckbox.checked = true;
    todosCheckbox.classList.remove("todos-minus");
    todosCheckbox.classList.add("todos-check");
  }
  else if ( emailCheckbox.checked == false && smsCheckbox.checked == false ) {
    todosCheckbox.checked = false;

  }
}



//ACCORDION

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    
    const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
      currentlyActiveAccordionItemHeader.classList.toggle("active");
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});




//SELECT

let select = document.getElementById("select");
let list = document.getElementById("list");
let selectText = document.getElementById("selectText");
let inputfield = document.getElementById("inputfield");

let options = document.getElementsByClassName("options");
var img = document.querySelector("#troca-icon");

    select.onclick = function(){
        list.classList.toggle("open");

        if(list.classList.contains("open")) {
          img.setAttribute('src', 'arrow-cima.png');
        }
        else {
          img.setAttribute('src', 'arrow-baixo.png');
        }

        
    }

    for(option of options){
        option.onclick = function(){
            selectText.innerHTML = this.innerHTML;
            inputfield.placeholder = "Search In " + selectText.innerHTML;
        }
    }


    
//RADIO

let inid = document.getElementById("btnCadastrar");

inid.addEventListener("click", function() {

  let idum = document.getElementById("test1").checked;
  let iddois = document.getElementById("test2").checked;
  let idtres = document.getElementById("test3").checked;

  if ( idum == false && iddois == false && idtres == false) {
    alert("Selecione uma opção")
  }

})
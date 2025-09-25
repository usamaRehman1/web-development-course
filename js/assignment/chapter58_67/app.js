// DOM

// Task  01
let main_content = document.getElementById('main-content');
let mainContentChild = main_content.children;
let getAllElementOfClassRender = document. getElementsByClassName('render')

for (let i = 0; i < getAllElementOfClassRender.length; i++) {
    document.writeln(`${getAllElementOfClassRender[i].innerHTML}<br>`)
}
let firstName = document.getElementById('first-name').value = "muhammad";
let lastName = document.getElementById('last-name').value = "usama";
let email = document.getElementById('email').value = "usama@gmail.com";

// Task 02 

// The possible values are:
// 1 → Element Node (like <div>, <p>, <form> etc.)
// 2 → Attribute Node
// 3 → Text Node
// 8 → Comment Node
// 9 → Document Node
// 10 → DocumentType Node

let checkNodeType = document.getElementById('form-content');
console.log(checkNodeType.nodeType) // 1

let checkIdNodeType = document.getElementById('last-name');
console.log(checkIdNodeType.nodeType)// 1

let nType = document.getElementById("form-content").nodeType ; // 1 because its element is div
let lastName_nType =  document.getElementById("last-name").nodeType ; // 1 because its element is p
let child_nType = document.getElementById("last-name").value ; // 3 because it is text
let update_lastName = document.getElementById("last-name").value = "Gray" ;


let mainContent = document.getElementById("main-content") ;
console.log(mainContent.childNodes[1]);
console.log(mainContent.firstChild);
console.log(mainContent.lastChild);

let getLastName = document.getElementById("last-name") ;
console.log(getLastName.nextSibling)
console.log(getLastName.previousSibling)

let _email = document.getElementById("email");
console.log(_email.parentNode);
console.log(_email.nodeType);
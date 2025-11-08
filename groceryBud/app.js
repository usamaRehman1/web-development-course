const showPopUp = (_icon, _title) => {
    Swal.fire({
        icon: _icon,
        title: _title,
        // text: "Something went wrong!",
    });
}


const groceryList = document.querySelector("#grocery-list");
const grocery = document.querySelector("#grocery");
const handleChange = () => {
    let flag = true;

    for (let i = 0; i < groceryList.children.length; i++) {
        // console.log("check", groceryList.children[i].children[0].textContent.toString())
        if (groceryList.children[i].children[0].textContent.toString() == grocery.value.toString()) {
            alert('The same task is already present in the todo list')
            flag = false;
            grocery.focus();
            return
        } else {
            // console.log("task not present")
        }
    }

    console.log(flag, grocery.value.trim())

    if (grocery.value.trim() != '' && flag) {
        const li = document.createElement("li");
        li.innerHTML = `<span class="listText">${grocery.value.trim()}</span>
                                <span class="actions">
                                    <i class="fa-solid fa-pen-to-square edit" onclick="editBtn(this)"></i>
                                    <i class="fa-solid fa-trash delete" onclick="deleteBtn(this)"></i>
                            </span>`
        groceryList.prepend(li)

        document.querySelector("#clear-btn").style.display = "block"

        showPopUp("success", "Your work has been saved")
        grocery.value = ""
    } else {
        showPopUp("error", 'Your task is not valid.\nPlease try again')
        grocery.focus()
    }
}

const editBtn = (e) => {
    grocery.value = e.parentElement.previousElementSibling.innerText.toString();
    grocery.focus();
    e.parentElement.parentElement.remove();
}

const deleteBtn = (e) => {
    e.parentElement.parentElement.remove()
    !groceryList.children.length && (document.querySelector("#clear-btn").style.display = "none")
}

const crearAll = () => {
    [...groceryList.children].forEach(element => {
        // console.log(element)
        element.remove()
    });

    document.querySelector("#clear-btn").style.display = "none"
}

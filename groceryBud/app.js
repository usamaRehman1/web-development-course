

const showPopUp = (_icon, _title) => {
    Swal.fire({
        icon: _icon,
        title: _title,
        // text: "Something went wrong!",
    });
}

const groceryList = document.querySelector("#grocery-list");
const handleChange = () => {
    const grocery = document.querySelector("#grocery");

    if (grocery.value.trim() == "") showPopUp("error", "Invalid input")

    const li = document.createElement("li");
    li.innerHTML = `<span class="listText">${grocery.value.trim()}</span>
                        <span class="actions">
                            <i class="fa-solid fa-pen-to-square edit" onclick="editBtn(this)"></i>
                            <i class="fa-solid fa-trash delete" onclick="deleteBtn(this)"></i>
                    </span>`
    groceryList.prepend(li)

    document.querySelector("#clear-btn").style.display = "block"
    grocery.value = ""
}

const editBtn = (e) => {
    console.log(e.parentElement.previousElementSibling)

}

const deleteBtn = (e) => {
    e.parentElement.parentElement.remove()
}

const crearAll = () => {
    [...groceryList.children].forEach( element => {
        console.log(element)
        element.remove()
    });

    document.querySelector("#clear-btn").style.display = "none"
}

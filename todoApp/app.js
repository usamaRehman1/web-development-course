function addTask() {
    let task = document.getElementById("task");
    let todolistCheck = document.querySelectorAll(".todoList li");
    let flag = true;

    // check whether the entered task already exists in the list
    for (let i = 0; i < todolistCheck.length; i++) {
        if (todolistCheck[i].childNodes[0].childNodes[0].nodeValue.toString() == task.value.toString()) {
            alert('The same task is already present in the todo list')
            flag = false;
            task.focus();
        } else {
            // console.log("task not present")
        }
    }

    // check that the task input: Is not empty, Does not contain spaces, a flagn is true
    //.trim() method is used to remove whitespace from both ends of a string
    if (task.value.trim() != '' && flag) {
        let getUl = document.querySelector(".todoList");

        let currLi = document.createElement('li');

        let spanText = document.createElement('span');
        let spanTextNode = document.createTextNode(task.value);
        spanText.setAttribute("class", "taskText")
        spanText.appendChild(spanTextNode)
        currLi.appendChild(spanText)

        let spanBtn = document.createElement('span');
        spanBtn.setAttribute("class", "taskBtn")


        let editBtn = document.createElement("button");
        let editBtnTextNode = document.createTextNode("EDIT")
        editBtn.setAttribute("onClick", `editTask(this)`)
        editBtn.setAttribute("id", "edit_btn")
        editBtn.appendChild(editBtnTextNode)
        spanBtn.appendChild(editBtn)

        let delBtn = document.createElement("button");
        let delBtnTextNode = document.createTextNode("DELETE");
        delBtn.setAttribute("onClick", "delTask(this)")
        delBtn.setAttribute("id", "del_btn")
        delBtn.appendChild(delBtnTextNode)
        spanBtn.appendChild(delBtn)
        currLi.appendChild(spanBtn)

        getUl.insertBefore(currLi, getUl.firstChild)
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
        });
        task.value = ""
    } else {
        Swal.fire({
            title: 'Error!',
            text: 'Your task is not valid.Please try again',
            icon: 'error',
            confirmButtonText: 'cancel'
        })
        task.value = ""
        task.focus();
    }
}

const editTask = (e) => {
    task.value = e.parentElement.parentElement.childNodes[0].childNodes[0].nodeValue.toString();
    task.focus();
    e.parentElement.parentElement.remove();
}

const delTask = (e) => {

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
        customClass: {
            confirmButton: 'confirmBtn',
            cancelButton: 'cancelBtn',
        }
    }).then((result) => {
        if (result.isConfirmed) {
            e.parentElement.parentElement.remove();
            swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your Work has been deleted.",
                icon: "success",
                confirmButtonText: 'Ok',
                customClass: {
                    confirmButton: 'okBtn',
                }
            });
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "Your Work is safe :)",
                icon: "error",
                confirmButtonText: 'Ok',
                customClass: {
                    confirmButton: 'okBtnError',
                }
            });
        }
    });
}
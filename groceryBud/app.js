

const showPopUp = (_icon, _title) => {
    Swal.fire({
        icon: _icon,
        title: _title,
        text: "Something went wrong!",
    });
}

const handleChange = () => {
    let grocery = document.querySelector("#grocery");

    if (grocery.value.trim() == "") showPopUp("error", "Oops...")
}
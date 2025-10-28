let menuData = [];
// --------------- menu Display ------------
const menuDisplay = document.querySelector("#menuDisplay");
// ---------- btns ------------------------
const all = document.querySelector("#all");
const breakFast = document.querySelector("#breakFast");
const lunch = document.querySelector("#lunch");
const shakes = document.querySelector("#shakes");

// --------------------- Display card func ---------------
const displayCard = (menuData) => {
    menuData.filter(item => {
        let { menuName, menuPrice, menuURL, menuType, menuDetail } = item;
        menuDisplay.innerHTML += `<div class="card">
                <div class="menuImg" style="background-image: url('${menuURL}')"></div>
                <div id="menuDetail">
                        <div id="titleAndPrice" style="display: flex; justify-content: space-between;">
                            <h4>${menuName}</h4>
                            <b style="color: brown;">$${menuPrice}</b>
                        </div>
                        <hr style="color: brown; margin: 10px 10px; ">
                        <p>${menuDetail}</p>
                    </div>
                </div>`
    })
}

// -------------------- Handle active class ----------------------
const classActiveHandler = (newIdClick) => {
    document.querySelectorAll(".btn").forEach(item => {
        item.classList.remove("active")
    })
    newIdClick.classList.add("active")
}

// ------------------------ when window load --------------
window.onload = async () => {
    fetch('./menuItems.json')
        .then(response => {
            // if (!response.ok) {
            //     throw new Error(`HTTP error! status: ${response.status}`);
            // }
            return response.json();
        })
        .then(data => {
            menuData = [...data];
            displayCard(menuData)
        })
        .catch(error => console.error("Error:", error));
}

all.addEventListener("click", (event) => {
    event.preventDefault()
    menuDisplay.innerHTML = ""
    classActiveHandler(all)
    displayCard(menuData)
})

breakFast.addEventListener("click", (event) => {
    event.preventDefault()
    menuDisplay.innerHTML = ""
    classActiveHandler(breakFast)
    const breakFastMenu = menuData.filter(item => item.menuType == 'Breakfast')
    displayCard(breakFastMenu)
})

lunch.addEventListener("click", (event) => {
    event.preventDefault()
    menuDisplay.innerHTML = ""
    classActiveHandler(lunch)
    const lunchMenu = menuData.filter(item => item.menuType == 'Lunch')
    displayCard(lunchMenu)
})

shakes.addEventListener("click", (event) => {
    event.preventDefault()
    menuDisplay.innerHTML = ""
    classActiveHandler(shakes)
    const shakesMenu = menuData.filter(item => item.menuType == 'Shakes')
    displayCard(shakesMenu)
})
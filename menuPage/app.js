let menuData = [];
// --------------- menu Display ------------
const menuDisplay = document.querySelector("#menuDisplay");
// --------------- search bar --------------
const searchItem = document.querySelector("#searchItem");
// ---------- btns ------------------------
const all = document.querySelector("#all");
const breakFast = document.querySelector("#breakFast");
const lunch = document.querySelector("#lunch");
const shakes = document.querySelector("#shakes");
const search = document.querySelector("#search");

// --------------------- Display card func ---------------
const displayCard = (menuData) => {

    let cardArr = []
    menuData.forEach(item => {
        // console.log("item=>", item)
        let { menuName, menuPrice, menuURL, menuType, menuDetail } = item;
        let card = `<div class="card">
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
        cardArr.push(card)
    })
    console.log("arr =>", cardArr)
    menuDisplay.innerHTML = `${cardArr.join("")}`
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

// -------------------------- Search Items ---------------

search.addEventListener("click", () => {
    searchItem.style.display = "block"
    document.querySelectorAll(".btn").forEach(item => {
        item.classList.remove("active")
    })

    if (!searchItem.value) return menuDisplay.innerHTML = "search item not found..."

    if (searchItem.value.trim() != "") {
        const findSearch = menuData.find(element => {
            if (element.menuName.toLowerCase().toString() == searchItem.value.trim().toLowerCase().toString()) return true
        })
        if (!findSearch) return menuDisplay.innerHTML = "search item not found..."
        displayCard([findSearch])
    }
})
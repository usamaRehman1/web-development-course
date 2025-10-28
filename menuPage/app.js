let menuData = [];
const menuDisplay = document.querySelector("#menuDisplay");

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

            menuData.filter(item => {
                menuDisplay.innerHTML += `            <div class="card">
                <div class="menuImg"></div>
                <div id="menuDetail">
                    <div id="titleAndPrice" style="display: flex; justify-content: space-between;">
                        <h4>Buttermilk Pancakes</h4>
                        <b style="color: brown;">$15.98</b>
                    </div>
                    <hr style="color: brown; margin: 10px 10px; ">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. </p>
                </div>
            </div>`

            })

        })
        .catch(error => console.error("Error:", error));
}

const all = document.querySelector("#all");
const breakFast = document.querySelector("#breakFast");
const lunch = document.querySelector("#lunch");
const shakes = document.querySelector("#shakes");

const classActiveHandler = (newIdClick) => {
    document.querySelectorAll(".btn").forEach(item => {
        item.classList.remove("active")
    })
    newIdClick.classList.add("active")
}


all.addEventListener("click", (event) => {
    event.preventDefault()
    classActiveHandler(all)
    console.log("=>",menuData)
})

breakFast.addEventListener("click", (event) => {
    event.preventDefault()
    classActiveHandler(breakFast)
    const breakFastMenu = menuData.filter(item => item.menuType == 'Breakfast')
    console.log("breakFast =>", breakFastMenu)
})


lunch.addEventListener("click", (event) => {
    event.preventDefault()
    classActiveHandler(lunch)
    const lunchMenu = menuData.filter(item => item.menuType == 'Lunch')
    console.log("lunch =>", lunchMenu)

})

shakes.addEventListener("click", (event) => {
    event.preventDefault()
    classActiveHandler(shakes)
    const shakesMenu = menuData.filter(item => item.menuType == 'Shakes')
    console.log("shakes =>", shakesMenu)

})
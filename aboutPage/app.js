const historyVisionGoal = [
    {
        heading: "History",
        content: `Lorem History dolor sit amet consectetur, adipisicing elit. Est hic deleniti consequatur. Aut
                        nesciunt corrupti distinctio tempora illo quis esse voluptatum accusamus reiciendis, id
                        assumenda, illum natus et. Architecto, atque.L Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Eaque assumenda perferendis voluptatum asperiores veniam eveniet, ipsa qui
                        cupiditate, ut, quos nihil nemo harum obcaecati rerum magnam nisi nesciunt optio quaerat?Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis voluptas iste laboriosam!
                        Aliquid tempora beatae corporis soluta ratione quod sapiente voluptas vero suscipit! Ea nam
                        dicta inventore aliquid repudiandae.`,
        imgURL: "https://plus.unsplash.com/premium_photo-1661963952208-2db3512ef3de?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGlzdG9yeXxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000",
    },
    {
        heading: "Vision",
        content: `Lorem Vision dolor sit amet consectetur, adipisicing elit. Est hic deleniti consequatur. Aut
                        nesciunt corrupti distinctio tempora illo quis esse voluptatum accusamus reiciendis, id
                        assumenda, illum natus et. Architecto, atque.L Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Eaque assumenda perferendis voluptatum asperiores veniam eveniet, ipsa qui
                        cupiditate, ut, quos nihil nemo harum obcaecati rerum magnam nisi nesciunt optio quaerat?Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis voluptas iste laboriosam!
                        Aliquid tempora beatae corporis soluta ratione quod sapiente voluptas vero suscipit! Ea nam
                        dicta inventore aliquid repudiandae.`,
        imgURL: "https://png.pngtree.com/thumb_back/fh260/background/20230516/pngtree-this-is-an-overhead-shot-of-an-ancient-arena-in-rome-image_2563888.jpg",
    },
    {
        heading: "Goals",
        content: `Lorem Goal dolor sit amet consectetur, adipisicing elit. Est hic deleniti consequatur. Aut
                        nesciunt corrupti distinctio tempora illo quis esse voluptatum accusamus reiciendis, id
                        assumenda, illum natus et. Architecto, atque.L Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Eaque assumenda perferendis voluptatum asperiores veniam eveniet, ipsa qui
                        cupiditate, ut, quos nihil nemo harum obcaecati rerum magnam nisi nesciunt optio quaerat?Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis voluptas iste laboriosam!
                        Aliquid tempora beatae corporis soluta ratione quod sapiente voluptas vero suscipit! Ea nam
                        dicta inventore aliquid repudiandae.`,
        imgURL: "https://png.pngtree.com/thumb_back/fh260/background/20230407/pngtree-views-of-the-ancient-roman-coliseum-it-is-the-largest-amphitheatre-photo-image_2276561.jpg",
    }
]

const handleChange = tabKey => {
    const matchTabKeyObj = historyVisionGoal.filter(obj => obj.heading.toLowerCase() == tabKey.toLowerCase())
    let { heading, content, imgURL } = matchTabKeyObj[0];
    document.querySelector("#history-Vision-Goals-container").innerHTML = `<h4>${heading}</h4><p>${content}</p>`
    document.querySelector("#img").style.backgroundImage = `url(${imgURL})`;
    document.querySelectorAll(".navBtn").forEach(item => {
        (item.innerHTML.toLowerCase() == tabKey.toLowerCase()) ? item.classList.add("active") : item.classList.remove("active");
    })
}
const modal = document.querySelector("#modal");
const openModal = () => {
    modal.style.display = 'block';
    modal.style.animation = 'popIn 0.3s forwards';
}

document.querySelector("#close").addEventListener("click", () => {
    modal.style.display = 'none';
    modal.style.animation ='popOut 0.6s forwards';
})
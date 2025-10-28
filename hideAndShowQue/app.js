
const generalQuestions = [
    {
        question: "Do You Accept All Major Credit Cards?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Libero impedit nam ratione dignissimos incidunt explicabo saepe ipsa? Est eligendi, impedit,"
    },
    {
        question: "Do You Support Local Farmers?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Libero impedit nam ratione dignissimos incidunt explicabo saepe ipsa? Est eligendi, impedit,"
    },
    {
        question: "Do You Use Organic Ingredients?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Libero impedit nam ratione dignissimos incidunt explicabo saepe ipsa? Est eligendi, impedit,"
    },
    {
        question: "Do You Accept All Major Credit Cards?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Libero impedit nam ratione dignissimos incidunt explicabo saepe ipsa? Est eligendi, impedit,"
    }
]

const displayQuestion = document.querySelector("#question-container")
generalQuestions.forEach(item => {
    let {question , answer} = item;
    displayQuestion.innerHTML += `<div class="question">
            <div class="show-question">
                <h3>${question}</h3>
                <i class="fa-solid fa-square-plus" style="font-size: 20px;" onclick="toggleBtn(this)"></i>
            </div>
            <div class="Show-answer">${answer}</div>
        </div>`
})

const toggleBtn = (e) => {
    e.classList.toggle("fa-square-plus")
    e.classList.toggle("fa-square-minus")
    e.parentElement.nextElementSibling.classList.toggle("show")
    console.log(e.parentElement.nextElementSibling)
}
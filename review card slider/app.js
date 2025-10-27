const users = [
    {
        profileURL: "https://randomuser.me/api/portraits/men/32.jpg",
        name: "Talha Ahmed",
        title: "Front End Developer",
        detail: "I’m a Front-End Developer from Karachi, Pakistan, passionate about creating clean, responsive, and user-friendly web interfaces. I specialize in HTML, CSS, JavaScript, and modern frameworks like React to build visually appealing and high-performing websites. With a strong focus on UI/UX and attention to detail, I love turning creative ideas into smooth, interactive digital experiences. I’m always eager to learn new technologies and contribute to projects that combine design and functionality to deliver exceptional user experiences."
    },
    {
        profileURL: "https://randomuser.me/api/portraits/women/44.jpg",
        name: "Ayesha Khan",
        title:"UI/UX Designer",
        detail: "I am a UI/UX Designer passionate about creating intuitive, engaging, and visually appealing digital experiences. I specialize in transforming complex ideas into user-friendly designs that enhance usability and deliver meaningful interactions. With a strong eye for detail and a deep understanding of user behavior, I focus on crafting interfaces that are both beautiful and functional. My passion for design drives me to continuously explore new trends, tools, and techniques to create seamless user experiences that leave a lasting impression."
    },
    {
        profileURL: "https://randomuser.me/api/portraits/men/55.jpg",
        name: "Ali Raza",
        title:"Full Stack Developer",
        detail: "I am a Full Stack Developer specializing in React and Node.js, with a passion for building scalable, high-performance web applications. I have strong expertise in frontend development using React, Redux, and modern UI frameworks, along with backend development using Node.js, Express, and RESTful APIs. Experienced in working with databases like MongoDB and Firebase, I focus on creating seamless integrations between client and server. I’m dedicated to writing clean, maintainable code and delivering efficient, user-focused solutions. Always eager to learn new technologies, I strive to build applications that combine performance, functionality, and great user experience."
    },
    {
        profileURL: "https://randomuser.me/api/portraits/women/25.jpg",
        name: "Sara Ahmed",
        title:"Mobile App Developer",
        detail: "I am a Mobile App Developer with a strong focus on Flutter and Firebase, dedicated to building high-quality, cross-platform applications that deliver smooth and engaging user experiences. I specialize in creating responsive, performance-driven mobile apps with seamless backend integration using Firebase services such as Authentication, Firestore, and Cloud Storage. With a keen eye for UI/UX and attention to detail, I aim to design apps that are not only functional but also visually appealing. Passionate about continuous learning and innovation, I strive to develop mobile solutions that combine creativity, efficiency, and scalability."
    },
    {
        profileURL: "https://randomuser.me/api/portraits/men/61.jpg",
        name: "Hamza Malik",
        title:"Backend Engineer",
        detail: "I am a Backend Engineer experienced in building robust, scalable, and efficient server-side applications using Python and PostgreSQL. I specialize in designing RESTful APIs, optimizing database performance, and implementing secure, maintainable backend architectures. With a strong understanding of data modeling, system design, and API integration, I focus on delivering reliable solutions that power seamless user experiences. Passionate about clean code, automation, and performance optimization, I continuously strive to enhance application efficiency and support scalable product growth."
    }
];

let currUserConter = 0;

const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

const profileImg = document.querySelector("#profileImg");
const profileName = document.querySelector("#profileName");
const titleDisplay = document.querySelector("#title");
const profileDetail = document.querySelector("#profileDetail");

const displayProfile = ({profileURL, name, title, detail}) => {
    profileImg.style.backgroundImage  = `url('${profileURL}')`;
    profileName.textContent = name;
    titleDisplay.textContent = title;
    profileDetail.textContent = detail;
}

prev.addEventListener("click", () => {
    if (currUserConter > 0) {
        --currUserConter;
        displayProfile(users[currUserConter])
    }else{
        currUserConter = users.length - 1
        displayProfile(users[currUserConter])
    }
})

next.addEventListener("click", () => {
    if (currUserConter < users.length - 1) {
        ++currUserConter
        displayProfile(users[currUserConter])
    }else{
        currUserConter = 0
        displayProfile(users[currUserConter])
    }
})
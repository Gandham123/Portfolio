
let modalHeadingEl=document.getElementById("staticBackdropLabel");
let modalCenterEl=document.getElementById("modalCentered");
let modalBodyContainerEl=document.getElementById("modalBodyContainer");
let videoSourceUrlEl=document.getElementById("videoSourceUrl");
let videoParagraphEl=document.getElementById("videoParagraph");

var Typed=new Typed(".Typing",{
    strings:["Full Stack Developer","Designer","Learner"],
    typeSpeed:150,
    backSpeed:150,
    loop:true
});
function aboutNxtrendz(){
    modalHeadingEl.textContent="NxtTrendz";
    modalHeadingEl.classList.add("about-nxtrendz-heading");
    videoSourceUrlEl.src="videos/Nxttrendz.mp4";
    videoParagraphEl.textContent="Nxt Trendz is a frontend e-commerce application built using React.js, featuring a Home Page and Products Page where products are displayed based on user type (prime and non-prime), with prime users getting exclusive access to certain items. The application uses Redux for efficient cart state management and Redux Thunk to handle asynchronous API calls. Users can apply filters such as price sorting, category, and rating to refine their search, and clicking on a product navigates to a detailed product page. The UI allows users to add items to the cart, select quantities, and manage their cart seamlessly. The project focuses on smooth navigation, responsive design, and delivering an interactive user experience."
    modalCenterEl.classList.remove("modal-dialog-centered");
}
function aboutJobbyApp(){
    modalHeadingEl.textContent="To-DO App";
    modalHeadingEl.classList.add("about-nxtrendz-heading");
    modalCenterEl.classList.remove("modal-dialog-centered");
    videoSourceUrlEl.src="videos/todo.mp4"
    videoParagraphEl.textContent="A full-stack task management app with real-time backend integration. Users can add tasks with a title and description, ensuring empty fields trigger an error message. Tasks can be edited, deleted, or marked as completed, moving them between Pending and Completed tabs with timestamps. Input validation guarantees smooth task entry, and errors are handled efficiently. Full CRUD functionality enables seamless frontend-backend synchronization, delivering a reliable and user-friendly experience"
}
function aboutNxtWatch(){
    modalHeadingEl.textContent="NxtWatch";
    modalHeadingEl.classList.add("about-nxtrendz-heading");
    videoSourceUrlEl.src='videos/nxtwatch.mp4'
    videoParagraphEl.textContent="Nxt Watch is a frontend video streaming application built using React.js. It features a secure authentication system where users can log in to access various sections like Home, Trending, Gaming, Saved Videos, and Video Details. Users can search for videos, apply filters, and interact by liking, disliking, and saving videos. The app supports a dark/light theme toggle and ensures smooth navigation with React Router. Video playback is powered by React Player, providing a seamless viewing experience. Protected routes ensure only authenticated users can access content. Users can save videos for later viewing, and the app displays appropriate error and loading states for API requests. The intuitive UI enhances the overall user experience.";
    modalCenterEl.classList.remove("modal-dialog-centered");
}
function aboutCargomate(){
    let popUpClosingButtonEl=document.getElementById('popUpClosingId');
    modalHeadingEl.textContent="Cargomate";
    modalHeadingEl.classList.remove("modal-dialog-centered");
    videoSourceUrlEl.src="videos/cargomatevideo.mp4";
    videoParagraphEl.textContent=`Cargomate is a web application designed to bridge the gap between lorry drivers and businesses or individuals needing to transport goods. The platform allows load owners to post detailed information about their loads, while drivers can search for and connect with available loads in their vicinity. It also features a review system to build trust and ensure reliable collaborations, making it a comprehensive solution for the logistics industry.`
    let bottomContainerEl=document.createElement('div');
    modalBodyContainerEl.appendChild(bottomContainerEl);
    let stackHeading=document.createElement("h1");
    stackHeading.classList.add('project-paragragh-stack');
    stackHeading.textContent="Tech Stack:"
    bottomContainerEl.appendChild(stackHeading);
    let unorderedListEl = document.createElement("ul");
    bottomContainerEl.appendChild(unorderedListEl);

const techStack = [
    { title: "Frontend", value: "React.js,HTML,CSS,Bootstrap" },
    { title: "Backend", value: "Node.js, Express.js" },
    { title: "Database", value: "MongoDB" }
];

techStack.forEach(item => {
    let listItemEl = document.createElement("li");

    // Create bold element for the title
    let boldTextEl = document.createElement("strong");
    boldTextEl.textContent = `${item.title}: `;

    // Create a text node for the value
    let normalTextEl = document.createTextNode(item.value);

    // Append bold and normal text to the list item
    listItemEl.appendChild(boldTextEl);
    listItemEl.appendChild(normalTextEl);

    // Append the list item to the unordered list
    unorderedListEl.appendChild(listItemEl);
});
popUpClosingButtonEl.onclick=function(){
    modalBodyContainerEl.removeChild(bottomContainerEl);
}
}

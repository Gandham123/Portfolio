
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
    videoSourceUrlEl.src="https://media-hosting.imagekit.io//29a43a90b3454a39/a6dec75c-c000-4fcb-a782-738cfede444f_restream.mp4?Expires=1832935789&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=HHmrgLxIxifMnf3oygazecaFtMdhe59t3cfg2neUqWQX1xMcq~WpwrIf85wcM8C-TjYh0l849z0IE0yev5p3ucJvSRakTNL6eHJdBntbu2V05VR-GYYjgn3yM2R4W0~ZR68lJ37TRF3LKlr~UZuVSnonqTAiTmj2hblr3NVOdGTs1QO8yXKbfcw1QVESeiKba4jIZMj9B4Ye2tnPIsTmuBVRfsvdF1-JscItoVJyLTR~ETqZJo78usAyYM9pRqvuGP50eEVScdNDKVnV3GrM1nz1MZZvU4kuqPHaNLtBwNk09t8wMJGjepePbwYt0eOfPt3tA7wQbsrBn7bxIJfgNw__";
    videoParagraphEl.textContent="Nxt Trendz is a frontend e-commerce application built using React.js. It features a Home Page and Products Page, where products are displayed based on user type (prime and non-prime). Prime users get exclusive access to certain products. Users can apply filters like price sorting, category, and rating. Clicking a product navigates to a detailed product page. The UI allows users to add items to the cart and select quantity. The project focuses on smooth navigation, responsive design, and interactive user experience."
    modalCenterEl.classList.remove("modal-dialog-centered");
}
function aboutJobbyApp(){
    modalHeadingEl.textContent="JobbyApp";
    modalHeadingEl.classList.add("about-nxtrendz-heading");
    modalCenterEl.classList.remove("modal-dialog-centered");
    videoSourceUrlEl.src="https://media-hosting.imagekit.io//410690b4fb274013/37f20fc4-8f30-439c-9979-3a2610ad3d46_restream.mp4?Expires=1832939745&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Evjf91Ujnw1194uADduSXbhZ84zbK8LxxtSmfWnmESnbAqVoBDbdxYJcUwikDHGOdeczHGXbSE2fGns2qfBRqpPoLun7ADijhCbUC3AkClQQK6k3X0TTho45XSW6SuhE6KdRCUxoGCDrezJ2rBj4cIx6-VWqNXFFWTvdkhk-XVJkp5jDvcDT0~yxM4dNgXWTu5Zq-04iEBodsjlqxd9JBDWC1pyR6EzgSpcrAyTgJ~GWdHD7PwKszvcrYczqv8GP0GqJ~l9JJukltOnQ15hY7Gsf1x-RvVycUsOxHBQVGumgMok~WHnMlAkIeCIG9qyM4PUU-Hin8UI4lTvN1gmXkQ__"
    videoParagraphEl.textContent="Jobby is a frontend job search application built using React.js. It features a Home Page and a Jobs Page, where users can explore job listings from various companies. Users can filter jobs based on salary packages and job types like Internship, Part-time, Full-time, and Freelance. A search feature allows users to find specific job roles. Clicking on a job opens a detailed job description, where users can view all relevant information. They can then apply for the job through the company's career page. The project focuses on smooth navigation, responsive design, and an intuitive job search experience."
}
function aboutNxtWatch(){
    modalHeadingEl.textContent="NxtWatch";
    modalHeadingEl.classList.add("about-nxtrendz-heading");
    videoSourceUrlEl.src='https://media-hosting.imagekit.io//94ca9f2589a6426c/React%20App%20-%20Google%20Chrome%202025-01-31%2016-13-14%20(1).mp4?Expires=1832930980&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=u-nLcD5JfM~xth1vaeiFwWob6hxXFBspJ91Yspa33DwjixIAhciZRKjUjsY3zqeUJNExgW-fQpXLxtGHsbr0Rqbf7eoVQl~-MRWrxIiQqGko5xraAKT3Ok7Yfu4XapnNJyIzYDcune2x0NhU3C0QCqYTCIINGyK~JcFfKy6t0XLaemz9hz9X6Q2FspA4ztrNtzHOuLUXN5g74ETiS7oHdMiTW0QrQseOavAU23WkbRcKBi4j2aCBo2Mencx-~~JX0T6ijud-N5Ph50wDxyAXn2wzlQ-0d8ZqYTD1ju6AHz7WoODEmL0wErDvc7bryEV3EgbKJ6gjQ8vYXa~MfmtQUQ__'
    videoParagraphEl.textContent="Nxt Watch is a frontend video streaming application built using React.js. It features a secure authentication system where users can log in to access various sections like Home, Trending, Gaming, Saved Videos, and Video Details. Users can search for videos, apply filters, and interact by liking, disliking, and saving videos. The app supports a dark/light theme toggle and ensures smooth navigation with React Router. Video playback is powered by React Player, providing a seamless viewing experience. Protected routes ensure only authenticated users can access content. Users can save videos for later viewing, and the app displays appropriate error and loading states for API requests. The intuitive UI enhances the overall user experience.";
    modalCenterEl.classList.remove("modal-dialog-centered");
}
function aboutCargomate(){
    let popUpClosingButtonEl=document.getElementById('popUpClosingId');
    modalHeadingEl.textContent="Cargomate";
    modalHeadingEl.classList.remove("modal-dialog-centered");
    videoSourceUrlEl.src="https://media-hosting.imagekit.io//da550be80f0f4e62/278004bc-4e4c-4215-af2a-fc3dfba8437a_restream.mp4?Expires=1832926996&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=OqZGx2hAXYE26BDwZ22Pu5FZn6bya78Wjv5aPnOZDPnvNS0EGyuc4P5XV4c5y4C4Jjdmb17yEtBMPw3zrJkCCUs06DYbxfOddoc~Qjrq2HydFCpJoivEYEDjWflIZu7S~tAw2CzSTvkQhaZwlS-2Ix-47hPebuv9hlV-FPuKrEFwv~asEwFcDXpl1-yD7U1SOFK8zNX~l3lmIlgkRNlCjcBbPiOqTWPhUYTiUY8EYhaSA9~t-~nBR4R353jK-OYfm~9BCYYAIunCsDAEcOPRgwUPF3KBPNRiCAnJrw9XiL3atNN5y8-T-pKZOkh2wGdTM0p0mDWVrz9qskAmg6QV6A__";
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
function viewMoreProjects(){
    let videoTagEl=document.getElementById('videoSourceUrl');
    let popUpClosingButtonEl=document.getElementById('popUpClosingId');
    let carousleEl=document.getElementById('carouselExampleIndicators');
    videoTagEl.classList.add('d-none');
    videoParagraphEl.classList.add('d-none');
    modalHeadingEl.textContent='Projects';
    popUpClosingButtonEl.onclick=function(){
        videoParagraphEl.classList.remove('d-none');
        videoTagEl.classList.remove('d-none');
        carousleEl.classList.add('d-none');

    }

    carousleEl.classList.remove('d-none');
    carousleEl.classList.add('d-block');
    modalCenterEl.classList.add("modal-dialog-centered");
}

var currentImage;
var darkTheme = true;

const portfolios = [
	{
		image: "./img/webss/devconnector.png",
		title: "DevConnector",
		description: `A MERN stack social network app for developers, where you can create account to interact with developers through the forum. You can also showcase your skills and experience as a developer. This project was built by the guidance of <i>"MERN Stack Front To Back: Full Stack React, Redux & Node.js"</i> by Brad Traversy from Udemy.`,
		techstack: ["React.js", "Node.js"],
		sourcecode: "https://github.com/piuskrisantono/mern-devconnector",
		website: "https://wiatmojo-devconnector.herokuapp.com",
	},
	{
		image: "./img/webss/weatherapp.png",
		title: "Weather App",
		description: `A Node.js weather forecast app, where you can get the current weather info from any places all over the world. This project was built by the guidance of <i>"The Complete Node.js Developer Course (3rd Edition)"</i> by Andrew Mead & Rob Percival from Udemy.`,
		techstack: ["Node.js"],
		sourcecode: "https://github.com/piuskrisantono/node-weather-website",
		website: "https://wiatmojo-weather-application.herokuapp.com",
	},
	{
		image: "./img/webss/chatapp.png",
		title: "Chat App",
		description: `A Node.js chat application, where you can create a room to have a chit chat with your friends inside. This project was built by the guidance of <i>"The Complete Node.js Developer Course (3rd Edition)"</i> by Andrew Mead & Rob Percival from Udemy.`,
		techstack: ["Node.js"],
		sourcecode: "https://github.com/piuskrisantono/node-chat-application",
		website: "https://wiatmojo-chat-app.herokuapp.com",
	},
	{
		image: "./img/webss/mediaapp.png",
		title: "Media App",
		description: `A React.js media app, where you can find any pictures and videos that you need for any purposes. This project was built by the guidance of <i>"Modern React with Redux"</i> by Stephen Grider from Udemy.`,
		techstack: ["React.js"],
		sourcecode: "https://github.com/piuskrisantono/media-app",
		website: "https://wiatmojo-media-app.herokuapp.com",
	},
	{
		image: "./img/webss/streamapp.png",
		title: "Stream App",
		description: `A RESTful React.js app, where you can manage streams list with a user account. The front end implements React with Redux and Router, while the backend uses a fake REST API with json-server. This project was built by the guidance of <i>"Modern React with Redux"</i> by Stephen Grider from Udemy.`,
		techstack: ["React.js"],
		sourcecode: "https://github.com/piuskrisantono/streamy",
		website: "https://wiatmojo-stream-app.herokuapp.com",
	},
	{
		image: "./img/webss/pintester.png",
		title: "Pintester",
		description: `A Laravel e-commerce app, where you can sell or buy pictures for any purposes. This project was built for Web Programming Course from Binus University`,
		techstack: ["Laravel"],
		sourcecode: "https://github.com/piuskrisantono/pintester",
		website: "http://wiatmojo-pintester.herokuapp.com",
	},
	{
		image: "./img/webss/productlandingpage.png",
		title: "Product Landing Page",
		description: `An HTML-CSS responsive web design for a product's landing page. This project was built for Responsive Web Design certification from freeCodeCamp`,
		techstack: ["HTML", "CSS"],
		sourcecode: "https://codepen.io/piuskrisantono/pen/LYVrpgo",
		website: "https://codepen.io/piuskrisantono/full/LYVrpgo",
	},
	{
		image: "./img/webss/technicaldocumentation.png",
		title: "Technical Documentation",
		description: `An HTML-CSS responsive web design for a documentation of Python. This project was built for Responsive Web Design certification from freeCodeCamp`,
		techstack: ["HTML", "CSS"],
		sourcecode: "https://codepen.io/piuskrisantono/pen/PoZpjdY",
		website: "https://codepen.io/piuskrisantono/full/PoZpjdY",
	},
	{
		image: "./img/webss/portfolio.png",
		title: "Personal Portfolio",
		description: `An HTML-CSS responsive web design for a personal portfolio. This project was built for Responsive Web Design certification from freeCodeCamp`,
		techstack: ["HTML", "CSS"],
		sourcecode: "https://codepen.io/piuskrisantono/pen/zYrzzor",
		website: "https://codepen.io/piuskrisantono/full/zYrzzor",
	},
	{
		image: "./img/webss/surveyform.png",
		title: "Survey Form",
		description: `An HTML-CSS responsive web design for a survey form that mimics the Google Form's design. This project was built for Responsive Web Design certification from freeCodeCamp`,
		techstack: ["HTML", "CSS"],
		sourcecode: "https://codepen.io/piuskrisantono/pen/xxxqYNB",
		website: "https://codepen.io/piuskrisantono/full/xxxqYNB",
	},
	{
		image: "./img/webss/tributepage.png",
		title: "Tribute Page",
		description: `An HTML-CSS responsive web design for a tribute to a local band. This project was built for Responsive Web Design certification from freeCodeCamp`,
		techstack: ["HTML", "CSS"],
		sourcecode: "https://codepen.io/piuskrisantono/pen/vYBexGV",
		website: "https://codepen.io/piuskrisantono/full/vYBexGV",
	}
]

function closeModal() {
	document.querySelector(".modal-container").style.top = "-100vh";
	document.querySelector("#modal-bg").style.backgroundColor = "rgba(0, 0, 0, 0)";
	setTimeout(() => document.querySelector("#modal-bg").style.display = "none", 200);
}


document.querySelector("#close-modal").addEventListener('click', () => closeModal());
document.querySelector("#modal-bg").addEventListener('click', () => closeModal());

const updateModalContent = (portfolio) => {
	document.querySelector("#modal-title").innerText = portfolio.title;
	document.querySelector("#modal-body-image").setAttribute('src', portfolio.image);

	let techstackHTML = "";
	portfolio.techstack.forEach((stack) => techstackHTML += `<span>${stack}</span>`);

	document.querySelector("#techstack").innerHTML = techstackHTML;
	document.querySelector("#description").innerHTML = portfolio.description;
	document.querySelector("#sourcecode").setAttribute('href', portfolio.sourcecode);
	document.querySelector("#go-to-website").setAttribute('href', portfolio.website);

	document.querySelector("#modal-bg").style.display = "flex";
	setTimeout(() => {
		document.querySelector(".modal-container").style.top = "0";
		document.querySelector("#modal-bg").style.backgroundColor = "rgba(0,0,0,0.8)";
	}, 10);
};

const renderCard = (portfolio) => {
	const card = document.createElement('div');
	card.classList.add("card");
	card.innerHTML = `
		<div class="card-title">
			<h3 class="card-title-text">
				${portfolio.title}
			</h3>

		</div>
		
		<div class="card-image" style="background-image: linear-gradient(var(--overlay-blue), var(--overlay-blue)),  url('${portfolio.image}');">
		</div>
	`;

	const buttonContainer = document.createElement('div');
	buttonContainer.classList.add('card-title');

	const category = document.createElement('div');
	category.classList.add("category");

	let techstackHTML = "";
	portfolio.techstack.forEach((stack) => techstackHTML += `<div>${stack}</div>`);
	category.innerHTML = techstackHTML;

	// let button = document.createElement('button')
	// button.textContent = 'Detail'
	// button.classList.add("detail")

	// button.addEventListener('click', () => {
	// 	updateModalContent(portfolio.title, portfolio.description, portfolio.image, portfolio.techstack, portfolio.sourcecode, portfolio.website)
	// })

	// buttonContainer.appendChild(button)

	const linkButton = document.createElement('div');
	linkButton.classList.add("card-link");
	linkButton.innerHTML = `
		<div class="card-link">
			<a href="${portfolio.sourcecode}" class="fab fa-github card-link-a" target="_blank"></a>
			<a href="${portfolio.website}" class="fas fa-globe card-link-a" target="_blank"></a>
		</div>
	`;


	buttonContainer.appendChild(category);
	buttonContainer.appendChild(linkButton);

	card.addEventListener('mouseover', function () {
		currentImage = this.children[1].style.backgroundImage
		this.children[1].style.backgroundImage = this.children[1].style.backgroundImage.split(')), ')[1];
	});

	card.addEventListener('mouseout', function () {
		this.children[1].style.backgroundImage = currentImage;
	});

	card.addEventListener('click', () => updateModalContent(portfolio));

	document.getElementById("portfolio-list").appendChild(card).appendChild(buttonContainer);
};


portfolios.map((portfolio) => renderCard(portfolio));

const cardLinks = document.getElementsByClassName('card-link-a');

for (let i = 0; i < cardLinks.length; i++) {
	cardLinks[i].addEventListener('click', (event) => event.stopPropagation());
};

document.querySelector('.modal-container').addEventListener('click', (event) => event.stopPropagation());

function isVisible(element) {
	const { top, bottom } = element.getBoundingClientRect();
	const vHeight = (window.innerHeight || document.documentElement.clientHeight);

	return (top > 0 || bottom > 0) && top < vHeight;
}

window.addEventListener('scroll', () => {
	if (window.scrollY != 0) {
		document.querySelector('#nav-background').style.top = "0";
	}
	else {
		document.querySelector('#nav-background').style.top = "-70px";
	}

	const menuAbout = document.querySelector('#nav-menu-about');
	const menuPortfolio = document.querySelector('#nav-menu-portfolio');

	if (isVisible(document.querySelector('#about'))) {
		menuAbout.classList.add('active');
		menuPortfolio.classList.remove('active');
	} else {
		menuPortfolio.classList.add('active');
		menuAbout.classList.remove('active');
	}
});


function changeTheme() {
	let html = document.getElementsByTagName('html')[0];
	if (darkTheme) {
		html.style.cssText = "--background-color: #EDF6F9; --second-background-color: #FFF; --title-color: #3c425a; --text-color: #565867; --nav-background-color: #EDF6F9; --overlay-blue: #36558F80; --accent-text-color: #fff;";
		darkTheme = false;
		document.querySelector('#switcher-ball').style.left = "28px";
		document.querySelector('#logo').src = "./img/logo-pius-dark.png";
	} else {
		html.style.cssText = "--background-color: #1b1b2f; --second-background-color: #162447; --title-color: #ECF0F1; --text-color: #ABB7B7;--nav-background-color: #1f4068; --overlay-blue: #162447CC; --accent-text-color: #ECF0F1;";
		darkTheme = true;
		document.querySelector('#switcher-ball').style.left = "0px";
		document.querySelector('#logo').src = "./img/logo-pius-white.png";
	}
}

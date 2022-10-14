const imageFiles = [
	"./img/cat01.jpg",
	"./img/cat02.jpg",
	"./img/cat03.jpg",
	"./img/cat04.jpg",
	"./img/cat05.jpg",
	"./img/cat06.jpg",
	"./img/cat07.jpg",
	"./img/cat08.png",
];
const profileContentImage = document.querySelector("#profile .profile__content-image img");
let count = 0;
setInterval(() => {
	count++;
	if (count <= 7) {
		profileContentImage.setAttribute("src", imageFiles[count]);
	} else {
		count = 0;
		profileContentImage.setAttribute("src", imageFiles[count]);
	}
}, 2000);

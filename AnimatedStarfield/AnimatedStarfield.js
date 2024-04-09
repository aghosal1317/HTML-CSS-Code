const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let stars = [];

const makeStars = () => {
	for (let i = 0; i < 100; i++) {
		stars.push({
			x: Math.floor(Math.random() * canvas.width),
			y: Math.floor(Math.random() * canvas.height),
			size: Math.random() * 4,
			speed: Math.random()
		});
	}
};

const drawStars = () => {
	ctx.fillStyle = "white";
	for (let i = 0; i < stars.length; i++) {
		ctx.fillRect(stars[i].x, stars[i].y, stars[i].size, stars[i].size);
	}
};
makeStars();
const animateStars = () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawStars();
	for (let i = 0; i < stars.length; i++) {
		stars[i].y += stars[i].speed;
		if(stars[i].y>canvas.height){
			stars[i].y = 0
		}
	}
	requestAnimationFrame(animateStars);
};
animateStars();

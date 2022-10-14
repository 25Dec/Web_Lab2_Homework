document.addEventListener("keypress", (e) => {
	let key = e.keyCode;
	console.log(key);
	switch (key) {
		case 119:
			let wSound = new Audio("./sounds/sounds_tom-1.mp3");
			wSound.play();
			break;
		case 97:
			let aSound = new Audio("./sounds/sounds_tom-2.mp3");
			aSound.play();
			break;
		case 115:
			let sSound = new Audio("./sounds/sounds_tom-3.mp3");
			sSound.play();
			break;
		case 100:
			let dSound = new Audio("./sounds/sounds_tom-4.mp3");
			dSound.play();
			break;
		case 106:
			let jSound = new Audio("./sounds/sounds_snare.mp3");
			jSound.play();
			break;
		case 107:
			let kSound = new Audio("./sounds/sounds_crash.mp3");
			kSound.play();
			break;
		case 108:
			let lSound = new Audio("./sounds/sounds_kick-bass.mp3");
			lSound.play();
			break;
		case 99:
			let cSound = new Audio("./sounds/sounds_trumpet.mp3");
			cSound.play();
			break;
		case 118:
			let vSound = new Audio("./sounds/sounds_bell.mp3");
			vSound.play();
			break;
		case 98:
			let bSound = new Audio("./sounds/sounds_electricguitar.mp3");
			bSound.play();
			break;
	}
});
const images = document.querySelectorAll(".musical-instrument");
images.forEach((image) => {
	image.addEventListener("click", (e) => {
		let musicalInstrument = e.target.alt;
		switch (musicalInstrument) {
			case "w":
				let wSound = new Audio("./sounds/sounds_tom-1.mp3");
				wSound.play();
				break;
			case "a":
				let aSound = new Audio("./sounds/sounds_tom-2.mp3");
				aSound.play();
				break;
			case "s":
				let sSound = new Audio("./sounds/sounds_tom-3.mp3");
				sSound.play();
				break;
			case "d":
				let dSound = new Audio("./sounds/sounds_tom-4.mp3");
				dSound.play();
				break;
			case "j":
				let jSound = new Audio("./sounds/sounds_snare.mp3");
				jSound.play();
				break;
			case "k":
				let kSound = new Audio("./sounds/sounds_crash.mp3");
				kSound.play();
				break;
			case "l":
				let lSound = new Audio("./sounds/sounds_kick-bass.mp3");
				lSound.play();
				break;
			case "c":
				let cSound = new Audio("./sounds/sounds_trumpet.mp3");
				cSound.play();
				break;
			case "v":
				let vSound = new Audio("./sounds/sounds_bell.mp3");
				vSound.play();
				break;
			case "b":
				let bSound = new Audio("./sounds/sounds_electricguitar.mp3");
				bSound.play();
				break;
		}
	});
});

//logic

const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
	const triggerBottom = (window.innerHeight / 5) * 4;
	console.log(triggerBottom, "trigger bottom");
	boxes.forEach((box) => {
		const boxTop = box.getBoundingClientRect().top;
		console.log(boxTop, "boxtop");

		if (boxTop < triggerBottom) {
			console.log("Adding 'show' class");
			box.classList.add("show");
		} else {
			box.classList.remove("show");
			console.log("remove show class");
		}
	});
}

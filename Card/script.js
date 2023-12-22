let panels = document.querySelectorAll(".panel");

// //loop through panels
// panels.forEach((panel) => {
// 	panel.addEventListener("click", () => {
// 		removeActiveclass();
// 		panel.classList.add("active");
// 	});
// });

// function removeActiveclass() {
// 	panels.forEach((panel) => {
// 		panel.classList.remove("active");
// 	});
// }

panels.forEach((panel) => {
	panel.addEventListener("click", () => {
		toggleActiveclass(panel);
	});
});

function toggleActiveclass(selectedPanel) {
	//remove active class from all panels
	panels.forEach((panel) => {
		panel.classList.remove("active");
	});
	//add active class to the selected panel
	selectedPanel.classList.add("active");
}

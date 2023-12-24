const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus();
textarea.addEventListener("keyup", (e) => {
	createTags(e.target.value);

	if (e.key === "Enter") {
		setTimeout(() => {
			e.target.value = "";
		}, 10);
		randomSelect();
	}
});

function createTags(input) {
	const tags = input
		.split(",")
		.filter((tag) => tag.trim() != "")
		.map((tag) => tag.trim());

	tagsEl.innerHTML = "";

	tags.forEach((tag) => {
		const tagEl = document.createElement("span");
		tagEl.classList.add("tag");
		tagEl.innerText = tag;
		tagsEl.appendChild(tagEl);
	});
}

function randomSelect() {
	const times = 30;
	const interval = setInterval(() => {
		const randomTag = pickrandomTag();
		highlighTag(randomTag);

		setTimeout(() => {
			unhighlighTag(randomTag);
		}, 100);
	}, 100);

	setTimeout(() => {
		clearInterval(interval);
		setTimeout(() => {
			const randomTag = pickrandomTag();
			highlighTag(randomTag);
		}, 100);
	}, times * 100);
}

function pickrandomTag() {
	const tags = document.querySelectorAll(".tag");
	console.log("all tage: ", tags);
	return tags[Math.floor(Math.random() * tags.length)];
}

function highlighTag(tag) {
	tag.classList.add("highlight");
}
function unhighlighTag(tag) {
	tag.classList.remove("highlight");
}

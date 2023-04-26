const img = document.getElementById("cat-picture").querySelector(".imagem_gato");
const button = document.querySelector(".trocar");

function setLoading() {
	button.innerText = "Fetching a cat";
}
function clearLoading() {
	button.innerText = "Get another cat";
}
async function newCat() {
	setLoading();
	const catUrl = await fetchAnotherCat();
	img.src = catUrl;
	clearLoading();
}

async function fetchAnotherCat() {
	const newCat = await fetch("https://api.thecatapi.com/v1/images/search");
	const catData = await newCat.json();
	return catData[0].url;
}

newCat();
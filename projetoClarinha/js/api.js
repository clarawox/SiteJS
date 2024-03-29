const img = document.getElementById("cat-picture").querySelector(".imagem_gato");
const button = document.querySelector(".trocar");

function setLoading() {
	button.innerText = "Buscando gatos";
}
function clearLoading() {
	button.innerText = "Mostrar outro gato";
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
console.log("hello beautiful")
import { loadLegos, useLegos } from './legos/LegoData.js'
import { makeLegoList } from './legos/LegoList.js';

const navElement = document.querySelector("nav");

navElement.addEventListener("click", (event) => {
	if (event.target.id === "showRed") {
		filterLegos("Red")
	} else if (event.target.id === "showAll") {
		makeLegoList(useLegos())
	} else if (event.target.id === "showGreen") {
		filterLegos("Green")
	}
})

const filterLegos = (whatFilter) => {
	const filterArray = useLegos().filter(singleLego => {
		if (singleLego.LegoName.includes(whatFilter)) {
			return singleLego;
		}
	})
	makeLegoList(filterArray);
}


navElement.addEventListener("change", (event) => {
	if (event.target.id === "block-material") {
		const currentMaterial = event.target.value
		showFilteredLegos(currentMaterial)
		console.log("You filtered by", currentMaterial)
	}
});

const showFilteredLegos = (lego) => {
	const filteredLego = useLegos().filter(singleLego => {
		if (singleLego.Material === lego) {
			return singleLego
		}
	})
	// console.log("Filtered Lego is", filteredLego)
	makeLegoList(filteredLego);

	}
// Search function
navElement.addEventListener("keyup", (event) => {
	if (event.key === "Enter" && event.target.id === "searchInput"){
			console.log("Keyup worked!")
			searchLegos();
		}
	})


const searchLegos = () => {
	const legoID = document.getElementById("searchInput").value
	console.log("legoID", legoID)
	console.log("this is a test")
	const legoSearch = useLegos().filter(singleLego => {
		if(singleLego.LegoId === legoID){
		return singleLego;
	}
	})
	if (legoSearch.length === 0){
		document.getElementById("all-legos").innerHTML = `<h3>That Lego ID does not exist`
	}
	else {makeLegoList(legoSearch)}

}

const startEIA = () => {
	loadLegos()
	.then(legoArray => {
		makeLegoList(legoArray)
	})

}

startEIA();
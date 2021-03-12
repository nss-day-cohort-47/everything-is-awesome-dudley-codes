console.log("hello beautiful")
import { loadLegos, useLegos } from './legos/LegoData.js'
import { makeLegoList, render } from './legos/LegoList.js';

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









// const filterMaterial = (whatFilter) => {
// 	const materialArray = useLegos().filter(singleLego => {
// 		if (singleLego.)
// 	})
// }


const startEIA = () => {
	loadLegos()
	.then(legoArray => {
		makeLegoList(legoArray)
	})

}

startEIA();
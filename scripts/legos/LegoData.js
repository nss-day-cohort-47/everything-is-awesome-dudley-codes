let apiLegos = [];

export const useLegos = () => {
  return [...apiLegos]
}

export const loadLegos = () => {
  return fetch("../data/lego-colors.json")
    .then(response => response.json())
    .then((legoArray) => {
      apiLegos = legoArray.LegoColorss;
      return legoArray.LegoColorss;
    })
};




// Delete ===================

// export const filterByMood = () => {
//   appElement.addEventListener("change", event => {
//       if (event.target.id === "sort--mood") {
//           const currentMood = event.target.value
//           showFilteredPosts(currentMood)
//       }
//   })

//   const showFilteredPosts = (mood) => {
//       const filteredMood = useJournalEntries().filter(singlePost => {
//           if (singlePost.mood === mood) {
//               return singlePost
//           } 
//       })
//       const postElement = document.querySelector("#entryLog");
//           postElement.innerHTML = EntryListComponent(filteredMood)
//   }
// }
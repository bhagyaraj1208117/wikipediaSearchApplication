let searchInputEl = document.getElementById("searchInput");
let searchResultEl = document.getElementById("searchResults");
let spinnerEl=document.getElementById("spinner");
function createAndAppend(result){
    let {title,link,description} = result;
    
    let searchResultsContainer=document.createElement("div");
    searchResultsContainer.classList.add("result-item");
    searchResultEl.appendChild(searchResultsContainer);
    
    let titleEl=document.createElement("a");
    titleEl.classList.add("result-title");
    titleEl.textContent=title;
    titleEl.href=link;
    titleEl.target="_blank";
    searchResultsContainer.appendChild(titleEl);
    
    let breakElement=document.createElement("br");
    searchResultsContainer.appendChild(breakElement);
   
    let linkEl= document.createElement("a");
    linkEl.classList.add("result-url");
    linkEl.textContent=link;
    linkEl.href=link;
    linkEl.target="_blank";
    searchResultsContainer.appendChild(linkEl);
    
    let breakEl=document.createElement("br");
    searchResultsContainer.appendChild(breakEl);
    
    
    let descriptionEl=document.createElement("p");
    descriptionEl.classList.add("link-description");
    descriptionEl.textContent=description;
    searchResultsContainer.appendChild(descriptionEl);
}

function displayResults(search_results) {
    spinnerEl.classList.add("d-none");
    for (let result of search_results){
         createAndAppend(result);
    }
}


  function searchWikipedia(event) {
    if (event.key === "Enter") {
    spinnerEl.classList.toggle("d-none");
    searchResultEl .textContent="";

    let searchInput = searchInputEl.value;
    
    let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
    let options = {
      method: "GET"
    };

    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (Data) {
        let {search_results} = Data;

        displayResults(search_results);
      });
  }

}
searchInput.addEventListener("keydown", searchWikipedia);

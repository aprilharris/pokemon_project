function fetchPokemon(){

let pokemon=$(".pokemon").val();

let request = new XMLHttpRequest();

let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

console.log(`GENERATED URL:${url}`);

request.open("GET", url);

request.onload = function() {
  //ERROR MESSAGE (spelling errors, nonexistent pokemon)
if(this.response === "Not Found") {
  $("#res").text(`Search result for ${pokemon}`);
  $("#pokeId").text(`Pokemon not found. Please check for typos and try again.`);
} else {

  //RAW JSON DATA
let data = JSON.parse(this.response);

if(request.status>=200 && request.status<400) {

let frontImg = data.sprites.front_default; 
let pokeId = data.id;

$("#res").text(`Search result for ${pokemon}`);
$("#pokeId").text(`Pokedex ID#: ${pokeId}`);
$("#front").attr("src", frontImg);
}
} 
}
request.send();
};
  

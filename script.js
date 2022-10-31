/* optional: the line below executes the fetchPokemon() function when the user hits the enter/return key on their keyboard */
document.addEventListener('keydown', ({key}) => key === 'Enter' && fetchPokemon());

function fetchPokemon() {
  
  let pokemon = $(".pokemon").val();
  let request = new XMLHttpRequest();
  
  let url = "https://pokeapi.co/api/v2/pokemon/"+pokemon;
  console.log(url);
  request.open("GET", url, true);
  request.onload = function() {
//ERROR MESSAGE
    if (this.response == "Not Found"){
      $("#res").text('Search Result for: " '+pokemon+ ' "' );
      $("#pokeId").text("Pokémon not found. Please try again.");
    }

    else{
 
      let data = JSON.parse(this.response); 
      
      if (request.status >= 200 && request.status < 400) {
        let frontImg = data.sprites.front_default;
        let pokeId = data.id;
          
        $("#res").text('Search Result for: " '+pokemon+ ' "' );
        $("#pokeId").text("This pokemon's ID in the pokedex is: "+pokeId);      
        $('#front').attr('src',frontImg);
    
      }
    }
  };


  request.send();
}

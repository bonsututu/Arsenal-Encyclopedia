document.addEventListener("DOMContentLoaded", retrieve_DOM_references);

//references for the DOM
function retrieve_DOM_references() {
    playerSelect = document.getElementById("player_select");
    playerSection = document.getElementById("players");
    players = playerSection.querySelectorAll("a");

    //getting player names from "img" alt text and assigning positions
    const playerPositions = {
      "David Raya": "goalkeepers",
      "Norberto Neto": "goalkeepers",
      "William Saliba": "defenders",
      "Kieran Tierney": "defenders",
      "Ben White": "defenders",
      "Gabirel Magalhães": "defenders",
      "Jurrien Timber": "defenders",
      "Jakub Kiwior": "defenders",
      "Oleksandr Zinchenko": "defenders",
      "Takehiro Tomiyasu": "defenders",
      "Riccardo Calafiori": "defenders",
      "Thomas Partey": "midfielders",
      "Martin Odegaard": "midfielders",
      "Jorginho": "midfielders",
      "Mikel Merino": "midfielders",
      "Declan Rice": "midfielders",
      "Bukayo Saka": "forwards",
      "Gabriel Jesus": "forwards",
      "Gabriel Martinelli": "forwards",
      "Leandro Trossard": "forwards",
      "Kai Havertz": "forwards",
      "Raheem Sterling": "forwards",
    };
    function filterPlayers() {
        const selectedPosition = playerSelect.value;

        players.forEach(function (player) {
            //getting alt text from the "img" tag
            const playerAlt = player.querySelector("img").alt;
            const position = playerPositions[playerAlt] || "all";

            if (selectedPosition === "all" || position === selectedPosition) {
                player.style.display = "block";
            } else {
                player.style.display = "none";
            }
        });
    }
    playerSelect.addEventListener("change", filterPlayers)
}

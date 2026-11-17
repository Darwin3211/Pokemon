
const form = document.querySelector("form");
const input = document.querySelector("input");
const img = document.querySelector("img");
const container = document.querySelector(".container");
const storage = document.querySelector(".storage");

function getPokemon() {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const height = document.createElement("p");
        const id = document.createElement("p");
        const weight = document.createElement("p");
        const moves = document.createElement("p");
        const ul = document.createElement("ul");
        const li = document.createElement("li");


        const search = encodeURIComponent(input.value);

        try {
            const response = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${search}`
            );

            if (!response.ok) {
                throw new Error("Pokemon not found!");
            }

            const pokeData = await response.json();

            img.src = pokeData.sprites.front_default;

            height.textContent = `Height: ${pokeData.height}`;
            weight.textContent = `Weight: ${pokeData.weight}`;
            id.textContent = `ID: ${pokeData.id}`;
            moves.textContent = `Move: ${pokeData.abilities[0].ability.name}`;
            container.replaceChildren();

            container.appendChild(height);
            container.appendChild(id);
            container.appendChild(weight);
            container.appendChild(moves);



        } catch (error) {
            console.log(error);
        }
    });
}

getPokemon();

function afficherInfos(id) {
  const infos = {
    "tour-eiffel": {
      nom: "Tour Eiffel",
      description: "Monument emblématique de Paris, construit en 1889 pour l'exposition universelle. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut debitis officia repellat, nihil officiis esse, nesciunt fugiat, aperiam reiciendis quod sunt voluptatibus quia quos eos hic quibusdam! Inventore, quasi in.",
      localisation: "Paris, France"
    },
    "notre-dame": {
      nom: "Notre Dame de Paris",
      description: "Cathédrale gothique célèbre pour son architecture et ses vitraux. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut debitis officia repellat, nihil officiis esse, nesciunt fugiat, aperiam reiciendis quod sunt voluptatibus quia quos eos hic quibusdam! Inventore, quasi in.",
      localisation: "Île de la Cité, Paris, France"
    },
    "arc-de-triomphe": {
      nom: "Arc de Triomphe",
      description: "Monument commémoratif dédié aux armées françaises. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut debitis officia repellat, nihil officiis esse, nesciunt fugiat, aperiam reiciendis quod sunt voluptatibus quia quos eos hic quibusdam! Inventore, quasi in.",
      localisation: "Place Charles de Gaulle, Paris, France"
    },
    "mont-saint-michel": {
      nom: "Mont Saint Michel",
      description: "Îlot rocheux avec une abbaye médiévale spectaculaire. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut debitis officia repellat, nihil officiis esse, nesciunt fugiat, aperiam reiciendis quod sunt voluptatibus quia quos eos hic quibusdam! Inventore, quasi in.",
      localisation: "Normandie, France"
    },
    "versailles": {
      nom: "Château de Versailles",
      description: "Ancienne résidence royale célèbre pour ses jardins et la galerie des Glaces. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut debitis officia repellat, nihil officiis esse, nesciunt fugiat, aperiam reiciendis quod sunt voluptatibus quia quos eos hic quibusdam! Inventore, quasi in.",
      localisation: "Versailles, France"
    }
  };

  const monument = infos[id];
  const container = document.getElementById("infos-monument");

  if (monument) {
    container.innerHTML = `
      <div class="infos-content">
        <h2>${monument.nom}</h2>
        <p>${monument.localisation}</p>
        <p>${monument.description}</p>
        
        
      </div>
    `;
    container.classList.add("visible");
  }
}

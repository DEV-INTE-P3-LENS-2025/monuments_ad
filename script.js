function afficherInfos(id) {

// Supprimer la classe 'active' de toutes les images
const images = document.querySelectorAll(".monuments-container img");
images.forEach(img => img.classList.remove("active"));

// Trouver l'image du monument cliqué et lui ajouter la classe 'active'
const clickedImage = document.querySelector(`img[onclick*="${id}"]`);
if (clickedImage) {
  clickedImage.classList.add("active");
}


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
        <p class="pays">${monument.localisation}</p>
        <p class="description">${monument.description}</p>
      </div>
    `
    container.classList.add("visible");
  };
  
const maps = {
  "tour-eiffel": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6243.266254942009!2d2.289359528654984!3d48.85878042250055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1746533376475!5m2!1sfr!2sfr",
  "notre-dame": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6244.001170207353!2d2.347274397068911!3d48.85288802874971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671e19ff53a01%3A0x36401da7abfa068d!2sCath%C3%A9drale%20Notre-Dame%20de%20Paris!5e0!3m2!1sfr!2sfr!4v1746533573847!5m2!1sfr!2sfr",
  "arc-de-triomphe": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.182799755001!2d2.292452576341489!3d48.87379167133419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fec70fb1d8f%3A0xd9b5676e112e643d!2sArc%20de%20Triomphe!5e0!3m2!1sfr!2sfr!4v1746533651239!5m2!1sfr!2sfr",
  "mont-saint-michel": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.7553274358543!2d-1.5143192058724957!3d48.63609684786282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48065844370cc7c1%3A0x3b3b252279d89f96!2sMont%20Saint-Michel!5e0!3m2!1sfr!2sfr!4v1746533741830!5m2!1sfr!2sfr",
  "versailles": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8838.898849279505!2d2.117747522398245!3d48.80440726367334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67d94d7b14c75%3A0x538fcc15f59ce8f!2sCh%C3%A2teau%20de%20Versailles!5e0!3m2!1sfr!2sfr!4v1746533947437!5m2!1sfr!2sfr",
};

const mapContainer = document.getElementById("map-container");
mapContainer.innerHTML = `
  <iframe 
    src="${maps[id]}" 
    width="100%" 
    height="400" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade">
  </iframe>
`;

}

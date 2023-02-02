  
var data = [
    {
        id: "1",
        analogie: "Un Pirate",
        Valeuranalogie: "Un Navigateur",
        img : "https://static.vecteezy.com/ti/vecteur-libre/p1/4434311-petite-boussole-pour-l-aventure-en-colore-cartoon-line-art-illustration-vectoriel.jpg",
        justify : "Étant quelqu'un qui aime l'aventure et l'exploration. Les pirates étaient célèbres pour parcourir les mers à la recherche de trésors et de nouveaux terrains à conquérir. En me décrivant comme un pirate navigateur, je fais référence à un désir d'aller à l'aventure et de découvrir de nouvelles choses, tout en ayant des compétences pour naviguer à travers les différents défis et obstacles que j'ai pu rencontrer et que je rencontrerai.",
        
    },
    {
        id : "2",
        analogie : "Une Fête",
        Valeuranalogie : "La fête des morts",
        img : "https://media.istockphoto.com/id/1257499537/fr/vectoriel/cinco-de-mayo-mexican-skull-logo-mascot-pour-la-partie-de-marchandises-et-de-v%C3%AAtements.jpg?s=612x612&w=0&k=20&c=555DY1CuzRHO8i2aYo0GZMeOPz8qFyB5rKAXFBPFRO0=",
        justify : "Étant quelqu'un qui apprécie la culture et les traditions, particulièrement celles qui ont un lien avec la mort et la mémoire. Je pourrais aimer célébrer les vies qui ont précédé les nôtres et j'ai une appréciation pour l'héritage et les racines culturelles. Je suis aussi quelqu'un qui est sensible aux mécanismes de deuil, ou qui croit en la spiritualité en rapport avec la mort.",
       
    },
    {
        id : "3",
        analogie : "Un Objet",
        Valeuranalogie : "Un Pinceau",
        img: "https://static.vecteezy.com/ti/vecteur-libre/p3/6083290-palette-avec-peintures-et-pinceau-sujets-pour-dessiner-creativite-loisirs-et-ecoles-dessin-dessine-a-la-main-illustrationle-isole-sur-fond-blanc-vectoriel.jpg",
        justify: "Un pinceau est un outil utilisé pour peindre ou appliquer de la matière (comme de la peinture ou de la colle).En me décrivant comme étant un objet qui est un pinceau, cela  signifie que je suis quelqu'un qui est créatif et expérimenté. Les pinceaux sont utilisés pour créer de l'art, pour exprimer des idées et des émotions. J'aime explorer de nouvelles choses et être capable de m'adapter  à différentes situations. J'ai une grande précision et dextérité dans vos actions."
          },

    {
        id : "4",
        analogie : "Un trait de caractère",
        Valeuranalogie : "la Nonchalance",
        img: "https://readthemike.com/wp-content/uploads/2021/03/EuAbBPyA.jpg",
        justify: "Si je serais la nonchalance, je prendrais les choses avec désinvolture et je ne me laisserais pas trop perturber par les responsabilités ou les obligations. Je pourrais être perçu comme paresseux ou comme quelqu'un qui remet toujours les choses à plus tard. Je pourrais manquer d'enthousiasme ou d'énergie pour les activités que je entreprends Mais je garderais aussi un certain calme, une certaine sérénité face aux stress de la vie quotidienne, je saurais les gérer efficacement. "
     },
    {
        id : "5",
        analogie : "Un  Pays",
        Valeuranalogie : "Le Japon",
        img: "https://img.freepik.com/vecteurs-libre/chien-shiba-inu-mignon-illustration-dessin-anime-costume-japonais_138676-2786.jpg?w=2000",
        justify: "Si je serais le Japon, je serais un pays riche en culture et en histoire. On me connaitrait pour ma traditionnelle culture samouraï et geisha, et pour mes temples bouddhistes et Shintoistes. Je suis aussi reconnu pour ma cuisine et mes festivals, comme le festival de cerisiers en fleur, mon archipel est connu pour la beauté de ses paysages naturels, ses parcs et ses jardins. On me reconnaîtrait aussi pour ma modernité. "
     },
    {
        id : "6",
        analogie : "Un Personnage d'animé",
        Valeuranalogie : "Kou MABUCHI",
        img: "https://i.pinimg.com/originals/68/6a/6b/686a6b42c204a477c81e3a24afd2b14b.jpg",
        justify: "Si je devais être un personnage d'animé, je serais Kou Mabuchi. Je serais un personnage de fiction de l'anime Ao Haru Ride. On me décrirait comme quelqu'un qui a un passé compliqué, j'ai des blessures émotionnelles qui me poussent à être distant et froid avec les autres. Mais en même temps, j'ai un côté attentionné et protecteur pour mes amis et les personnes qui m'importent.En somme, je serais un personnage intriguant, profond et riche en émotions qui fera vivre des moments forts aux spectateurs qui me suivent.  "
     },
    {
        id : "7",
        analogie : "Une mythologie",
        Valeuranalogie : "la Nordique",
        img: "https://thumbs.dreamstime.com/b/t%C3%AAte-de-la-mascotte-face-d-un-dieu-des-vikings-odin-en-noir-et-blanc-l-illustration-%C3%A9galement-appel%C3%A9-wodan-woden-ou-wotan-188975023.jpg",
        justify: "Je serais considérée comme une culture forte et guerrière, qui met en avant l'honneur, le courage et la détermination. Mais aussi une culture spirituelle et profonde, qui explore les thèmes de la mort, de la résurrection, de la vie après la mort et de la destinée. On me verrait aussi comme une culture qui met en avant le cycle de la vie, la mort, la résurrection, la nature et le changement, où tout est cyclique. En somme, Je serais une mythologie riche et diverse, qui a su marquer l'imaginaire collectif depuis des siècles et continue d'inspirer les cultures contemporaines. "
     }
]

document.addEventListener("DOMContentLoaded", function () {
    var listAnalogies = document.getElementById("list-analogies");
    data.forEach(function(resultat) {
        var sec = document.createElement("section");
        sec.className = "sec";
        sec.id = resultat.id;

        var h1 = document.createElement("h1");
        h1.textContent = "Si j’étais " + resultat.analogie + ", je serais " + resultat.Valeuranalogie + ".";
        sec.appendChild(h1);

        var img = document.createElement("img");
        img.src = resultat.img;
        img.alt = "";
        img.className = "image";
        sec.appendChild(img);

        var justify = document.createElement("p");
        justify.textContent = resultat.justify;
        justify.className = "justify";
        sec.appendChild(justify);

        listAnalogies.appendChild(sec);
    });
});


//Fleche vers le haut//
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })

})

//Formulaire + API//

document.querySelector('#sub').addEventListener('click', event => {
    event.preventDefault();

    // Select the form inputs
    const analogie = document.querySelector("#analogie").value;
    const valeurAnalogie = document.querySelector("#valeurAnalogie").value;
    const imganalogie = document.querySelector("#imganalogie").value;
    const arganalogie = document.querySelector("#arganalogie").value;
    const mail = document.querySelector("#mail").value;

    // Create the section and append it to the page
    const section = `
        <section class="sec">
            <h1>Si j’étais ${analogie}, je serais ${valeurAnalogie}.
                <img src="${imganalogie}" alt="" class="img">
            </h1>
            <p class="justify">${arganalogie}</p>
        </section>
    `;
    document.querySelector('#you').insertAdjacentHTML('beforeend', section);

    // Send the message to the API
    fetch(`https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=corentin.chalat&courriel=${mail}&message=Si j'étais ${analogie},je serais ${valeurAnalogie} Parce que ${arganalogie}`)
        .then(response => response.json())
        .then(data => {
            if (data.status === "success") {
                document.querySelector("#message").innerHTML = "Votre message a bien été reçu";
            } else {
                document.querySelector("#message").innerHTML = "Problème : votre message n'a pas été reçu";
            }
        })
        .catch(error => console.error(error));
});

    //Fenêtre modale// 

    let legalButton = document.getElementById("legal-button");
    legalButton.addEventListener("click", function() {
        let legalModal = document.getElementById("legal-modal");
        legalModal.style.display = "block";
    });

    //fermer la fenetre modale// 
    let closeButton = document.getElementsByClassName("close-button")[0];

    closeButton.addEventListener("click", function() {
    let legalModal = document.getElementById("legal-modal");
    legalModal.style.display = "none";
});


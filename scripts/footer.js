/* Récupération du body */
const body = document.body;

/* Création du footer et mise en enfant au body */
const footer = document.createElement('footer');
body.appendChild(footer);

/* Création de la div qui contient les liens  et mise en enfant au footer*/
const divLiens = document.createElement('div');
divLiens.setAttribute('class', 'liensUtiles');
footer.appendChild(divLiens);

/* Création de la div qui contient les langues et le copyright et mise en enfant au footer*/
const divCopy = document.createElement('div');
divCopy.setAttribute('class', 'copy');
footer.appendChild(divCopy);

/* Création du formulaire et du select de langues */
const form = document.createElement('form');
const select = document.createElement('select');
select.setAttribute('name', 'langues');
select.setAttribute('id', 'langues');
form.appendChild(select)

/* Mise en enfant du formulaire et ajout du texte copyright à la divCopy */
divCopy.appendChild(form);
const span = document.createElement('span');
span.innerHTML = '&copy; 2021 Instagram par Facebook';
divCopy.appendChild(span);

/* Liens Footer */
let liens = [];
let infosLiens = ['À propos', 'Blog', 'Emplois', 'Aide', 'API', 'Confidentialité', 'Conditions', 'Comptes principaux', 'Hashtags', 'Lieux', 'Instagram Lite'];

for(let i = 0 ; i < 11 ; i++)
{
    let lien = document.createElement('a');
    liens.push(lien);
}

for(let i = 0 ; i < liens.length ; i++)
{
    liens[i].innerText = infosLiens[i];
}

liens.forEach(lien =>
{
    divLiens.appendChild(lien); 
});

/* Select Footer */
let options = ['Français', 'Anglais'];

for(let i = 0 ; i < options.length ; i++)
{
    let option = document.createElement('option');
    option.setAttribute('value', `${options[i]}`);
    option.innerText = options[i];
    
    select.appendChild(option);
    
    let premiereOption = document.querySelector('option[value="Français"]');
    premiereOption.setAttribute('selected', '');
}
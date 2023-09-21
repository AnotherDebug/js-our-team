/* 
# js-our-team

esercizio di oggi: **Our Team**


Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.

Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

**MILESTONE 0:**
Creare l’array di oggetti con le informazioni fornite.

**MILESTONE 1:**
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

**MILESTONE 2:**
Stampare le stesse informazioni su DOM sottoforma di stringhe

**BONUS 1:**
Trasformare la stringa foto in una immagine effettiva

**BONUS 2:**
Organizzare i singoli membri in card/schede

===============================================================================================

1. Creo il mio array di oggetti;

2. All'interno di ogni oggetto inserisco le coppie chiave valore forniti;

3. Estraggo i dati di ogni membro del team tramite l'utilizzo di un ciclo;

4. Stampo i dati in console;

5. Stampo i dati in pagina sottoforma di stringa;
*/

//1. Creo il mio array di oggetti;
const ourTeam = [
  {
    firstname: "Wayne",
    lastname: "Barnett",
    work: "Founder & CEO",
    photo: "wayne-barnett-founder-ceo.jpg",
  },
  {
    firstname: "Angela",
    lastname: "Caroll",
    work: "Chief Editor",
    photo: "angela-caroll-chief-editor.jpg",
  },
  {
    firstname: "Walter",
    lastname: "Gordon",
    work: "Office Manager",
    photo: "walter-gordon-office-manager.jpg",
  },
  {
    firstname: "Angela",
    lastname: "Lopez",
    work: "Social Media Manager",
    photo: "angela-lopez-social-media-manager.jpg",
  },
  {
    firstname: "Scott",
    lastname: "Estrada",
    work: "Developer",
    photo: "scott-estrada-developer.jpg",
  },
  {
    firstname: "Barbara",
    lastname: "Ramos",
    work: "Graphic Designer",
    photo: "barbara-ramos-graphic-designer.jpg",
  }
];

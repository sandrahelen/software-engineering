# SiF hybelvask
Enkleste vei til din vaskeliste!

G� til siden [her](https://sifvaskeliste.netlify.com/)

Legg inn pipeline status og coverage report?

## Motivasjon
Det kan v�re vanskelig � holde oversikt over renholdet i en stor studentby. Det gjelder b�de for beboere og adminstrasjonen. De manuelle papirarkene blir glemt eller forsvinner, og det er vanskelig � holde oversikt. Studentsamskipnaden i Fredrikstad er i sterk vekst, og trengte s�rt en ny og bedre l�sning! V�r intuive nettside, skal gj�re det lett for alle involverte � holde oversikt over vaskelisten. Ingen flere unnskyldninger for sluntre unna en god vask!


## Build Status
Legg inn pipeline status


## Kodestandard
Prettier er ble brukt til � formatere koden, og ESlint ble brukt som linter. [Har dette skjedd?]

## Screenshots
#### Forside
![picture](Screenshots/forside.jpg)


#### Admin View
N�r man logger inn som admin m�ter man denne siden:
![picture](Screenshots/adminview.jpg)


#### Legge til kollektiv
Som administrator kan man legge til kollektiv, og gi dette et nummer
![picture](Screenshots/legge_til_kollektiv.jpg)

#### Legge til kollektivmedlemmer
En admin kan legge til kollektivmedlemmer, med brukernavn, fornavn og etternavn
![picture](Screenshots/legge_til_kollektiv.jpg)

#### Endre vaskelisten
I vinduet kan administratoren legge til eller fjerne oppgaver i vaskelisten
![picture](Screenshots/endre_vaskeliste.jpg)


## Rammeverk
- React
- Node.js med Express

## Database
- MongoDB

## Egenskaper
Vaskesystemet er intuivt fra f�rste m�te, og har et enkelt og effektivt design. Alle funksjonene er lett tilgjengelig fra forsidene som m�ter beboere og administratorer.

## Eksempelkode

Lim gjerne inn noe annen kode

```java
const addCleaningItem = (newCleaningItem) => {
       newCleaningList.push(newCleaningItem);
       axios.put(`http://localhost:5000/api/vaskeliste/${cleaningList._id}`,
           {
               "liste": newCleaningList
           }
       )
           .then(response => {
               console.log(response)
           })
           .catch((error) => {
               console.log(error);
           })
   };

```

## Installasjon
For � kj�re prosjektet trenger du
- [Node.js] (https://nodejs.org)

Last ned prosjektet fra gitlab som vist under

git clone https://gitlab.stud.idi.ntnu.no/tdt4140-2020/48.git

For � se nettsiden, g� inn p� [https://sifvaskeliste.netlify.com/](https://sifvaskeliste.netlify.com/)

## Testing
[![coverage report]]

Kan noen skrive noe inn her?

## Hvordan anvende produktet?
Se [wiki](https://gitlab.stud.idi.ntnu.no/tdt4140-2020/48/-/wikis/Brukermanual) for detaljert brukermanual om hvordan man anvender produktet


## Team
- Edvard D�nvold Sj�borg
- Fredrik Bj�rnland
- Oline Vik�ren Zachariassen
- Oscar Bergan
- Sandra Helen Husnes
- Johanne �derud Vatne


## Lisens
[MIT License](LICENSE)

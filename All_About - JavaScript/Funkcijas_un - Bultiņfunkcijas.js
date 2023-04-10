'use strict';

/* Kas ir funkcijas? Ja sakām pa visam vienkāršā valodā, tad: funkcijas ir mūsu darbības JavaScript programmēšanas valodā. Vis tas, ko mēs liekam kādam elementam, mainīgajam, objektam vai datu masīvam darīt ir funkcijas. Lai izprastu funkciju darbību, mēs varam iztēloties jeb kuru lietu, piemēram: kalkulatoru, ledusskapi, miroviļņu krāsni, pulksteni - katrs pilda noteiktas darbības. Tās arī ir funkcijas. Piemēram: kalkulators - mēs ievadām kādus datus, gribam izpildīt kādas darbības ar tiem. Kalkulatoram ir noteiktas funkcijas, mēs ievadot datus varam ar tiem izpildīt noteiktas darbības. Un tas attiecās uz jeb kuru lietu. Visvienkāršāk to ir saprast iedomājoties kādu elektronisku ierīci. Ierīču funkcionalitāte var būt sākot no dažām funkcijām, beidzot ar ļoti daudzām, sarežģītām funkcijām, piemēram: mobilaais telefons, dators. */

/* Pierakstot funkcijas ir jāievēro noteikta rakstības sintakse, izskatīsim dažus piemērus: */

function showFirstMessage(text) {
	console.log(text);
	let num = 20;
}

showFirstMessage('Hello world!');

/* Pierakstot funkciju mēs izmantojam: function, tālāk norādām funkcijas nosaukumu, aiz tā uzreiz liekam ( ) iekavas, kur varam ierakstīt funkcijas elementus, argumentus. Šīnī piemērā kā funkcijas arguments mums ir: text - teksts. Pēc tam liekam { } iekavas, kurās norādām, kas konkrētai funkcijai ir jāzidara, darbību, kas tai ir jāizpilda. Mūsu gadījumā tā izpilda konsoles izvadi: text. Kad mēs esam aprakstījuši kādu funkciju, mums ir obligāti tā jāizsauc, lai tā darbotos: rakstot tās nosaukumu un aiz nosaukuma liekot ( ) iekavas. Ja mums ir kādi argumenti, kad funkcija ir jāizpilda, tad mēs tos rakstām ( ) iekavās. Mūsu piemērā, lai funkcija izvadītu kādu tekstu, mēs ( ) iekavās rakstām tekstu, ko vēlamies izvadīt: 'Hello world!' . */

/* Veidojot funkcijas nosaukumu, mums ir jāievēro likums, ka nosaukumam jāizsaka tas ko šī funkcija dara, kādu darbību tā veic. Nosaukumiem jābūt loģiskiem, lai mums un citiem būtu viegli orientēties kodā, ja tas ir garš un lai būtu viegli to lasīt. */

/* Funkcijas mēdz būt arī anonīmas, tas ir tad, kad tām nav nosaukuma, bet tad mums ir jāņem vēra tas, ka tā izpildās tikai vienu reizi, un mēs vēlāk nevaram ar to strādāt, to izmantot, jo mums vienkārši nav nosaukuma pie kā vērsties. */

/* Par funkcijas argumentiem sauc datus, kuri ie ierakstīti ( ) iekavās. Tie r dati, kas atrodas konkrētas funkcijas iekšienē, tas ko satur šī funkcija. Kā piemēru mēs varam iztēloties kalkulatora darbību. Mūsu ievadītie skaitļi ir dati - funkcijas argumenti, tas ko satur kāda funkcija - darbība. Funkcijas argumenti var būt ļoti daudz, bet var būt arī viens. */

/* Funkcijas iekšienē mēs varam noteikt mainīgos, gan parastā tipa, izmantojot atslēgvārdu: let, gan stingri deklarētos mainīgos, izmantojot atslēgvārdu: const. Ja mēs deklarējam mainīgo funkcijas iekšienē, tad mums jāatcerās likums: ka tas nav pieejams ārēji, mēs nevaram aiz funkcijas izsaukšanas, izmantot deklarēto mainīgo funkcijas iekšienē. Kods nedarbosies un mēs saņemsim kļūdu. Šāds mainīgais, kas ir deklarēts funkcijas iekšienē skaitās lokāls mainīgais, un mēs to nevaram izmantot ārpus funkcijas. Lai mēs varētu izmantot mainīgo ārpus funkcijas - globāli, mums tas ir jādeklarē ārpus funkcijas, lai mēs to varētu izmantot. */
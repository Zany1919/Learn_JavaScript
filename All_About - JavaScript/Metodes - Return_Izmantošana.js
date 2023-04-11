'use strict';

/* Izskatīsim metodes: return izmantošanas nozīmīgumu. */

/* Return izmantošana mums atgriež to, ko mēs esam norādījuši aiz tā. Visbiežāk metode: return tiek izmantota function pierakstā. Izskatīsim dažus metodes: return izmantošanas piemērus ar funkcijām. Piemērs no iepriekšējās lekcijas par valūtu konvertēšanas funkcijas izmantošanu: */

const usdCurr = 28;
const discount = 0.9;

function convert(amount, curr) {
	return curr * amount;
}

function promotion(result) {
	console.log(result * discount);
}

promotion(convert(500, usdCurr));

/* Kas notiek šinī koda pierakstā? Mēs sākumā deklarējam divus tingrus mainīgos. Pēc tam pierakstām funkciju: convert un dodot tai argumentus. Mēs liekam izmantojot metodi: return tai adgriezt mums divu argumentu reizinājumu. Pēc tam mēs aprakstām funkciju: discount, ( ) iekvaās norādot argumentu: result. Liekam izpildīt konsoles izvadi sareizinot result un discount. Tālāk mēs izsaucam funkciju: promotion, ( ) iekavās rakstot funkciju: convert, liekam atkal ( ), iekavās rakstot: summu, kuru vēlamies mainīt, rakstot mainīgo: usdCurr, kas izsaka dolāra kursu. Izpildot visu šo kodu mēs konsolē redzam: 12600, kas nozīmē, ka ir aprēķināts tekošais dolāru kurs un aprēķināta atlaidi. Redzam, ka abas funkcijas strādā pareizi. */

/* Mums sanāk tā, ka mēs izsaucam funkciju iekš funkcijas, bet ne vienmēr tas ir labākais un piemērotākais veids, jo uzdevumi var būt ar citādiem nosacījumu, kad ir nepieciešams izmantot citas metodes. Izskatīsim vēl vienu variantu kāizsaukt šīs abas funkcijas: */

const res = convert(500, usdCurr);
discount(res);

/* Šeit mēs nosakām jaunu mainīgo, kurā ieliekam iekšā funkciju: convert un ( ) iekavās ierakstām vērtību cik naudas vēlamies saminīt, liekma komatu un rakstām mainīgā nosaukumu, kas satur dolāra kursa aprēķināšanas vērtību. Tālāk izsaucam funkciju: discount ( ) iekavās norādot pirms tam deklarēto mainīgo, kas šajā piemērā ir: res. Mēs redzam, ka funkcijas izsaukšanu mēs varam izpildīt dažādi, tad, kad mums ir vairākas funkcijas, un kad starp tām ir kāda sakarība, kad vairākas funkcijas atbild par vienu uzdevumu - par vienu mērķi. */

/* Svarīgi lai viena konkrēta funkcija pildītu vienu konkrētu darbību. Nejaukt vairākas darbības vienā funkcijā. Aiz metodes: return izmantošanas mēs tālāk iekš funkcijas neko nerakstām, jo tas netiks izpildīts, jo metode: return aptur funkcijas darbību. Metode: return mums kaut ko atgriež, kādu rezultātu. Metode: return mums var atgriezt jeb kāda tipa datus, objektus, datu masīvu, kādu citu funkciju. */

/* Mēs iekš kādas funkcijas izmantojot metodi: return varam atgriezt kādu citu funkciju. Bet tad atceramies, ka pirms funkcijas izsaukšanas mums ir jādeklrē mainīgais, kas satur šo fukciju un tālāk izsaucot pamatfunkciju, mēs tās argumenta vietā norādām iepriekš deklarētā mainīgā nosaukumu. Iepriekš deklarēto mainīgo mēs varam izmantot tālāk savā darbā. */

/* Cits piemēr ar funkcijām un metodes: return izmantošanu: */

function test() {
	for (let i = 0; i < 5; i++) {
		console.log(i);
		if (i === 3) return;
	}
	console.log('Done!');
}

test();

/* Kas notiek šinī piemērā? Mēs izveidojam funkciju: test, kas nesatur nekādus argumentus. Iekš tās pierakstām ciklu: for, ciklā for darbojamies ar: i - iterator, nosakot trīs darbības nosacījumus, kas ir: sākumā i vērtība ir: 0, cikls izpildās līdz vērtībai: 5, katru reizi i palielinās par: +1. Izpildām konsoles izvadē i vērtību. Rakstām nosacījumus, ja i ir stingri  vienāds ar 3, tad izpildām metodi: return, kas aptur ne tikai cikla darbību, bet arī funkcijas: test darbību. Ja vis ir izpildījies pareizi, tad izpildām konsoles izvadē: Done! Neaizmirstam izsaukt funkciju: test(); */


/* Par cik funkcija savā darbībā atdūrās pret metodi: return, mēs redzam, ka ne tikai cikls apstājās pie vērtības: 3, bet arī pati funkcija: test, un nekas, kas ir norādīts tālāk netiek izpildīts, mums netiek izpildīts konsoles izvades pieprasījums: console.log('Done!'), jo tas ir ierakstīts iekš funkcijas. Kods atduroties pret metodi: return pārstāj savu darbību funkcijā: test. */

/* Mums jāatceras svarīga lieta: ka jeb kura funkcija mums kat ko atgriež, arī, kad netiek izmantota metode: return. Ja aiz metodes: return netiek norādīts kas tai jāatgriež, tad tie dati ko tā atgirež pieder pie: undefined datu tipa. */
'use strict';

/* Ja mums ir viens dators mājās, bet otrs ofisā, un mēs gribam no abiem strādāt pie viena projekta, pastrādāt ofisā, atnākt mājās, atjaunināt projektu un turpināt arto strādāt no mājas datora, tad mums tam ir: Git versiju kontrole un Git Hub - attālinātā failu glabātuve. */

/* Ja esam pastrādājuši pie viena datora un tagad gribam strādāt pie tā paša projekta no cita datora, tad mums sākumā ir jāiekopē esošais projekts no Git Hub repozitorija jaunajā datorā, tajā no kura mēs gribam strādāt pie konkrētā projekta. */

/* Lai iekoētu jaunajā datorā esošu projektu mums ir jāatver Git Hum repozitorijs, kur ir mums vajadzīgais projekts, jānospiež uz pogas: code, jāizvēlās HTPPS, jānokopē tur dotās adreses ceļš, kas šinī gadījumā ir: 
https://github.com/Zany1919/Learn_JavaScript.git . Bet mus ir jāatver terminālis un tajā jāizpilda klonēšanas darbība, kas ir šāda: */

//git clone https://github.com/Zany1919/Learn_JavaScript.git

/* Mēs redzam, ka mūsu jaunajā datorā mapītē darbs ir viss mūsu projekts, un mēs varam sākt ar to strādāt. */

/* Strādājam, veicam izmaiņas, papildinam projektu no darba datora. Atnākam mājās, un lai darbā veiktās izmaiņas parādītos uz mājas datora, mūsu projektā, mums ir jāizpilda sekojoša komanda terminālī: */

//git pull


/* Izpildīt šo komadu ir ļoti svarīgi, jo, ja mēs strādājam komandā un kāds izstrādātājs ir veicis kādas izmaiņas projektā, mums obligāti jāizpilda šī komanda, lai mēs uzreiz redzētu jaunākās izmaiņas, un varētu pilnvērtīgi turpināt darbu pie konkrētā projekta. Mēs redzam, ka parādās visi jaunie faili, un mēs varam turpināt tālāk savu darbu, projektu jau no mājas datora, katru reizi, kad veicam kādas izmaiņas no cita datora, bet tad pārejam atpakaļ pie otra datora mums ir jāizpilda šī komanda, lai vienmēr turpinātu darbu tur kur beidzām. */

/* Ja mēs attālinātajā failu glabāšanas servisā Git Hub veicam kādas izmaiņas, jeb arī kāds no mūsu komandas augšuplādē failus, maina tos, tad mums turpinot darbu no savas puses, strādājot ar versiju kontroli: Git var rasties kļūda. Lai tas tā nenotiktu, pirms atsākt darbu pie projekta, mums ir terminālī jāizpilda komanda: */

//git pull

/* . */

/* Katru rezi neatkarīgi no kura datora mēs strādājam, kad mēs kaut ko mainām, papildinam savā projektā, lai mēs strādātu vienmēr pie projekta aktuālākās versijas, mums ir jāizpilda piecas obligātas komandas: */

//git status
//git add -A
//git status
//git commit -a -m"Komentārs"
//git push

/* . */
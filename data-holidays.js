// Bulgaars Leren — data-holidays.js
// Bulgarian holidays and celebrations with exact dates for calendar

var BG_HOLIDAYS = [
  {
    id: "h1",
    date: "01-01",
    bg: "Нова година",
    nl: "Nieuwjaar",
    em: "🎆",
    desc: "Vuurwerk, banitsa met geluksmuntjes, en kinderen doen survakane — ze tikken volwassenen met versierde takken voor gezondheid en geluk!",
    tradition: "Survakane",
    greeting: {bg: "Честита Нова година!", pron: "Tsjestita Nova godina!", nl: "Gelukkig Nieuwjaar!"}
  },
  {
    id: "h2",
    date: "01-06",
    bg: "Йордановден",
    nl: "Driekoningen / Jordaandag",
    em: "✝️",
    desc: "Een priester gooit een kruis in ijskoud water en mannen duiken erin om het te pakken. Wie het vindt krijgt een jaar geluk!",
    tradition: "Kruisduiken",
    greeting: {bg: "Честит Йордановден!", pron: "Tsjestit Jordanovden!", nl: "Fijne Jordaandag!"}
  },
  {
    id: "h3",
    date: "02-14",
    bg: "Трифон Зарезан",
    nl: "Dag van de Wijnbouwer",
    em: "🍷",
    desc: "Op Valentijnsdag vieren Bulgaren het snoeien van de druivenranken! De wijnboer wordt gekroond als 'Koning van de Wijn'. Meer wijn dan rozen!",
    tradition: "Wijnfeest",
    greeting: {bg: "Честит Трифон Зарезан!", pron: "Tsjestit Trifon Zarezan!", nl: "Fijne Wijndag!"}
  },
  {
    id: "h4",
    date: "03-01",
    bg: "Баба Марта",
    nl: "Oma Marta / Martenitsa-dag",
    em: "🧶",
    desc: "Iedereen geeft elkaar rode-witte armbandjes (мартеници). Je draagt ze tot je de eerste ooievaar of bloeiende boom ziet — dan hang je ze aan een boom!",
    tradition: "Мартеница",
    greeting: {bg: "Честита Баба Марта!", pron: "Tsjestita Baba Marta!", nl: "Fijne Baba Marta!"}
  },
  {
    id: "h5",
    date: "03-03",
    bg: "Национален празник",
    nl: "Nationale Feestdag",
    em: "🇧🇬",
    desc: "Op 3 maart 1878 werd Bulgarije bevrijd na bijna 500 jaar Ottomaans bewind. Overal vlaggen, ceremonies en herdenkingen.",
    tradition: "Bevrijdingsdag",
    greeting: {bg: "Честит национален празник!", pron: "Tsjestit natsionalen praznik!", nl: "Fijne Nationale Feestdag!"}
  },
  {
    id: "h6",
    date: "04-00",
    bg: "Лазаровден",
    nl: "Lazarusdag",
    em: "🌸",
    desc: "De zaterdag voor Palmzondag. Meisjes in traditionele kleding gaan van huis tot huis om te zingen en te dansen — lazaruvane. Ze krijgen eieren en snoep!",
    tradition: "Лазаруване",
    isMoveable: true,
    moveableNote: "Zaterdag voor Palmzondag (wisselende datum)",
    greeting: {bg: "Честит Лазаровден!", pron: "Tsjestit Lazarovden!", nl: "Fijne Lazarusdag!"}
  },
  {
    id: "h7",
    date: "04-00",
    bg: "Великден",
    nl: "Pasen",
    em: "🥚",
    desc: "Het eerste ei is altijd rood geverfd! Families tikken eieren tegen elkaar — wiens ei niet breekt heeft geluk het hele jaar. Er wordt kozunak (paasbrood) gegeten.",
    tradition: "Eierentikken",
    isMoveable: true,
    moveableNote: "Orthodoxe Pasen (wisselende datum, vaak later dan in NL)",
    greeting: {bg: "Христос воскресе!", pron: "Hristos voskrese!", nl: "Christus is opgestaan!"}
  },
  {
    id: "h8",
    date: "05-01",
    bg: "Ден на труда",
    nl: "Dag van de Arbeid",
    em: "💪",
    desc: "Vrije dag! Veel Bulgaren gaan picknicken in de natuur met familie en vrienden.",
    tradition: "Picknick",
    greeting: {bg: "Честит 1 май!", pron: "Tsjestit parvi maj!", nl: "Fijne 1 mei!"}
  },
  {
    id: "h9",
    date: "05-06",
    bg: "Гергьовден",
    nl: "Sint Joris / Georgiusdag",
    em: "🐑",
    desc: "Dag van het Bulgaarse leger én naamdag van iedereen die Georgi of Gergana heet. Traditioneel wordt er lam geroosterd. Een van de belangrijkste feestdagen!",
    tradition: "Lamgrillen",
    greeting: {bg: "Честит Гергьовден!", pron: "Tsjestit Gergjovden!", nl: "Fijne Georgiusdag!"}
  },
  {
    id: "h10",
    date: "05-24",
    bg: "Ден на славянската писменост",
    nl: "Dag van het Cyrillisch Alfabet",
    em: "📖",
    desc: "Bulgarije viert zijn alfabet! Kinderen krijgen bloemen en boeken. Er zijn optochten met portretten van Cyrillus en Methodius. Uniek in de wereld!",
    tradition: "Alfabetfeest",
    greeting: {bg: "Честит 24 май!", pron: "Tsjestit dvadeset i tsjetvurti maj!", nl: "Fijne Dag van het Alfabet!"}
  },
  {
    id: "h11",
    date: "06-00",
    bg: "Розов фестивал",
    nl: "Rozenfestival (Kazanlak)",
    em: "🌹",
    desc: "In het Rozendal wordt het oogsten van rozen gevierd. Bulgarije maakt 85% van de rozeolie in de wereld! Er wordt een Rozenkoningin gekozen.",
    tradition: "Rozenoogst",
    isMoveable: true,
    moveableNote: "Eerste weekend van juni (wisselende datum)",
    greeting: {bg: "На хубав празник!", pron: "Na hoebav praznik!", nl: "Fijn festival!"}
  },
  {
    id: "h12",
    date: "09-06",
    bg: "Ден на Съединението",
    nl: "Dag van de Eenwording",
    em: "🤝",
    desc: "In 1885 werden het Vorstendom Bulgarije en Oost-Roemelië herenigd. Een belangrijke stap naar het moderne Bulgarije.",
    tradition: "Eenwording",
    greeting: {bg: "Честит празник!", pron: "Tsjestit praznik!", nl: "Fijne feestdag!"}
  },
  {
    id: "h13",
    date: "09-22",
    bg: "Ден на Независимостта",
    nl: "Onafhankelijkheidsdag",
    em: "🏛️",
    desc: "In 1908 verklaarde Bulgarije zich officieel onafhankelijk van het Ottomaanse Rijk in Veliko Tarnovo.",
    tradition: "Onafhankelijkheid",
    greeting: {bg: "Честит Ден на Независимостта!", pron: "Tsjestit Den na Nezavisimostta!", nl: "Fijne Onafhankelijkheidsdag!"}
  },
  {
    id: "h14",
    date: "11-01",
    bg: "Ден на народните будители",
    nl: "Dag van de Nationale Helden",
    em: "📚",
    desc: "Bulgarije eert de mensen die de Bulgaarse taal, cultuur en onderwijs in leven hielden tijdens eeuwen van buitenlands bestuur. Leraren worden extra geëerd!",
    tradition: "Helden herdenken",
    greeting: {bg: "Честит празник!", pron: "Tsjestit praznik!", nl: "Fijne feestdag!"}
  },
  {
    id: "h15",
    date: "12-24",
    bg: "Бъдни вечер",
    nl: "Kerstavond",
    em: "🕯️",
    desc: "Kerstavond is misschien wel de belangrijkste avond! De tafel heeft altijd een oneven aantal gerechten — en allemaal ZONDER vlees. Onder het tafelkleed zit stro.",
    tradition: "Vasten-feestmaal",
    greeting: {bg: "Весела Коледа!", pron: "Vesela Koleda!", nl: "Vrolijk Kerstfeest!"}
  },
  {
    id: "h16",
    date: "12-25",
    bg: "Коледа",
    nl: "Kerstmis",
    em: "🎄",
    desc: "Op Eerste Kerstdag wordt er wél vlees gegeten! Traditioneel varken of kalkoen. De коледари (zanggroepen) gaan van deur tot deur.",
    tradition: "Koleduvane",
    greeting: {bg: "Весела Коледа!", pron: "Vesela Koleda!", nl: "Vrolijk Kerstfeest!"}
  },
  {
    id: "h17",
    date: "12-31",
    bg: "Нова година",
    nl: "Oudejaarsavond",
    em: "🎉",
    desc: "Feesten tot middernacht! Kinderen doen survakane net na middernacht. Banitsa met geluksmuntjes is verplicht!",
    tradition: "Survakane",
    greeting: {bg: "Честита Нова година!", pron: "Tsjestita Nova godina!", nl: "Gelukkig Nieuwjaar!"}
  }
];

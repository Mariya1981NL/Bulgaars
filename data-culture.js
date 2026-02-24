// Bulgaars Leren — data-culture.js

var CULTURE_PAGES=[
  {id:"eten",title:"Bulgaars Eten",em:"🍲",items:[
    {t:"Баница (Banitsa)",d:"Filodeeg met kaas, het nationale ontbijt. Op Nieuwjaarsdag zit er een geluksmuntje in!"},
    {t:"Шопска салата (Shopska salade)",d:"Tomaten, komkommers, paprika en witte kaas. De kleuren van de Bulgaarse vlag!"},
    {t:"Кебапчета (Kebapcheta)",d:"Gegrilde gehaktrolletjes, het populairste BBQ-gerecht."},
    {t:"Таратор (Tarator)",d:"Koude yoghurtsoep met komkommer, perfect voor de zomer!"},
    {t:"Лютеница (Ljutenitsa)",d:"Paprikaspread die iedereen zelf maakt in de herfst."},
    {t:"Кисело мляко (Yoghurt)",d:"Bulgaarse yoghurt is wereldberoemd! De bacterie heet Lactobacillus bulgaricus."}
  ]},
  {id:"muziek",title:"Bulgaarse Muziek",em:"🎵",items:[
    {t:"Bulgaarse Volksmuziek",d:"Bekend om complexe ritmes (7/8, 11/8) die je nergens anders vindt. UNESCO erfgoed!"},
    {t:"De Gaida (Doedelzak)",d:"Het traditionele instrument van de herders in de Rhodopen bergen."},
    {t:"Le Mystère des Voix Bulgares",d:"Het beroemde vrouwenkoor dat Grammy Awards heeft gewonnen."},
    {t:"Horo",d:"De traditionele kringdans. Iedereen danst samen, hand in hand!"},
    {t:"Chalga",d:"Moderne Bulgaarse popmuziek. Heel populair bij feestjes!"},
    {t:"Кавал (Kaval)",d:"Een lange houten fluit. Herders speelden ermee in de bergen. Heel mooi geluid!"},
    {t:"Тъпан (Tapan)",d:"Een grote trommel die je met twee stokken bespeelt. Je hoort hem bij elk festival!"}
  ]},
  {id:"tradities",title:"Tradities",em:"🎭",items:[
    {t:"Martenitsa (1 maart)",d:"Rode en witte armbandjes die je draagt tot je een ooievaar ziet. Symbool van lente!"},
    {t:"Kukeri",d:"Mannen in enge maskers met bellen die de winter verjagen. Heel indrukwekkend!"},
    {t:"Nestinari (Vuurdansers)",d:"Dansen op gloeiende kolen! Een eeuwenoude traditie in Strandja."},
    {t:"Rozenfestival (Kazanlak)",d:"Bulgarije maakt 85% van de rozeolie in de wereld. Elk jaar een groot festival!"},
    {t:"Naamdag",d:"In Bulgarije vier je niet alleen je verjaardag maar ook je naamdag!"},
    {t:"Сурвакане (Survakane)",d:"Op 1 januari tikken kinderen volwassenen met een versierde tak voor gezondheid en geluk!"},
    {t:"Трифон Зарезан (Trifon Zarezan)",d:"Op 14 februari (ja, Valentijnsdag!) vieren wijnboeren hun druivenoogst met feest!"},
    {t:"Лазаровден (Lazarovden)",d:"Meisjes in traditionele kleding zingen en dansen van huis tot huis, een week voor Pasen."},
    {t:"Бъдни вечер (Budni Vecher)",d:"Kerstavond! De tafel heeft altijd een oneven aantal gerechten — en allemaal zonder vlees!"}
  ]},
  {id:"natuur",title:"Natuur",em:"🏔️",items:[
    {t:"De Zwarte Zee",d:"Prachtige stranden aan de oostkust. Populaire vakantiebestemming!"},
    {t:"Pirin Gebergte",d:"UNESCO erfgoed met eeuwenoude bossen en de oudste boom van Bulgarije (1300 jaar!)."},
    {t:"De Rhodopen",d:"Mysterieuze bergen vol grotten, legenden en het land van Orpheus."},
    {t:"Het Rozendal",d:"Tussen twee bergketens, waar miljoenen rozen groeien voor rozeolie."},
    {t:"De Donau",d:"De noordgrens van Bulgarije, met unieke natuur en pelikanen."},
    {t:"Рилските езера (Rilameren)",d:"Zeven prachtige bergmeren in het Rilagebergte. Elk meer heeft een eigen naam!"},
    {t:"Белоградчишките скали (Belogradchik)",d:"Spectaculaire rode rotsformaties die op dieren en mensen lijken. Miljoenen jaren oud!"}
  ]},
  {id:"recepten",title:"Kindvriendelijke Recepten",em:"👨‍🍳",items:[
    {t:"Мекици (Mekitsi) — Bulgaarse oliebollen",d:"Deeg van yoghurt en bloem, gebakken in olie. Lekker met poedersuiker of siroop! Simpel en snel."},
    {t:"Снежанка (Snezjanka) — Sneeuwwitje-salade",d:"Gezeefde yoghurt met komkommer, knoflook en dille. Fris en makkelijk te maken!"},
    {t:"Боб чорба (Bob Chorba) — Bonensoep",d:"Witte bonen in tomatensaus met paprika. Warm en voedzaam, een echte winterklassieker!"},
    {t:"Тиквеник (Tikvenik) — Pompoentaart",d:"Filodeeg met pompoen en suiker. Zoet en knapperig, een favoriet bij kinderen!"},
    {t:"Пълнени чушки (Palneni Chushki) — Gevulde paprika's",d:"Paprika's gevuld met rijst en gehakt, gebakken in de oven. Kleurrijk en lekker!"},
    {t:"Палачинки (Palatsjinki) — Bulgaarse pannenkoeken",d:"Dunne pannenkoeken met jam, Nutella of kaas. Net als Nederlandse pannenkoeken, maar dan Bulgaars!"}
  ]},
  {id:"feesten",title:"Feestdagen & Festivals",em:"🎉",items:[
    {t:"Нова година (Nieuwjaar) — 1 jan",d:"Vuurwerk, banitsa met geluksmuntjes, en kinderen doen survakane!"},
    {t:"Баба Марта — 1 maart",d:"Iedereen geeft elkaar rode-witte мартеници. Je draagt ze tot je een ooievaar ziet!"},
    {t:"Национален празник — 3 maart",d:"De nationale feestdag: Bulgarije werd vrij in 1878. Vlaggen overal!"},
    {t:"Великден (Pasen)",d:"Eieren verven (het eerste ei is altijd rood!) en met eieren tegen elkaar tikken — wie het laatst breekt, wint!"},
    {t:"Гергьовден (St. George) — 6 mei",d:"Dag van het leger én naamdag van iedereen die Georgi heet. Overal lam op tafel!"},
    {t:"24 май — Dag van het Alfabet",d:"Bulgarije viert zijn alfabet! Kinderen krijgen bloemen en boeken. Uniek in de wereld!"},
    {t:"Бъдни вечер & Коледа (Kerst) — 24-25 dec",d:"Kerstavond zonder vlees (7, 9 of 11 gerechten!), kerstdag met de hele familie."}
  ]}
];

var SONGS=[
  {id:"abc",title:"АБВ (Азбука)",titleNl:"Het Alfabet Lied",em:"🎶",
   lines:[
    {bg:"А, Б, В, Г, Д, Е, Ж",nl:"A, B, V, G, D, E, Zj"},
    {bg:"З, И, Й, К, Л, М, Н",nl:"Z, I, J, K, L, M, N"},
    {bg:"О, П, Р, С, Т, У",nl:"O, P, R, S, T, Oe"},
    {bg:"Ф, Х, Ц, Ч, Ш, Щ",nl:"F, Ch, Ts, Tsj, Sj, Sjt"},
    {bg:"Ъ, Ь, Ю, Я",nl:"Uh, Zacht, Joe, Ja"},
    {bg:"Това е азбуката!",nl:"Dat is het alfabet!"}
  ]},
  {id:"pit",title:"Пиленце",titleNl:"Kuikentje",em:"🐥",
   lines:[
    {bg:"Пиленце малко,",nl:"Klein kuikentje,"},
    {bg:"жълто, кръгло,",nl:"geel, rond,"},
    {bg:"тича в двора,",nl:"rent in de tuin,"},
    {bg:"търси зърно.",nl:"zoekt een graan."},
    {bg:"Пию, пию, пию!",nl:"Piep, piep, piep!"}
  ]},
  {id:"kal",title:"Краставичко",titleNl:"Komkommertje",em:"🥒",
   lines:[
    {bg:"Краставичко зелен,",nl:"Groen komkommertje,"},
    {bg:"в градинката расте,",nl:"groeit in de tuin,"},
    {bg:"слънцето го гледа,",nl:"de zon kijkt ernaar,"},
    {bg:"дъждът го полива.",nl:"de regen begiet het."},
    {bg:"Расте всеки ден!",nl:"Het groeit elke dag!"}
  ]},
  {id:"zai",title:"Зайчето",titleNl:"Het konijntje",em:"🐰",
   lines:[
    {bg:"Зайче бяло, малко,",nl:"Wit konijntje, klein,"},
    {bg:"скача по полянка.",nl:"springt over het veld."},
    {bg:"Яде морковчета,",nl:"Het eet worteltjes,"},
    {bg:"спи под елхичка.",nl:"slaapt onder een den."},
    {bg:"Скок, скок, скок!",nl:"Hop, hop, hop!"}
  ]},
  {id:"slun",title:"Слънчице",titleNl:"Zonnetje",em:"☀️",
   lines:[
    {bg:"Слънчице, слънчице,",nl:"Zonnetje, zonnetje,"},
    {bg:"грей ми топло!",nl:"schijn warm voor mij!"},
    {bg:"Събуди цветята,",nl:"Maak de bloemen wakker,"},
    {bg:"събуди птичките.",nl:"maak de vogeltjes wakker."},
    {bg:"Добро утро, свят!",nl:"Goedemorgen, wereld!"}
  ]},
  {id:"esen",title:"Есен",titleNl:"Herfst",em:"🍂",
   lines:[
    {bg:"Есента дойде,",nl:"De herfst is gekomen,"},
    {bg:"листата падат.",nl:"de bladeren vallen."},
    {bg:"Жълти и червени,",nl:"Geel en rood,"},
    {bg:"кръжат във въздуха.",nl:"ze dwarrelen in de lucht."},
    {bg:"Есен, красива есен!",nl:"Herfst, mooie herfst!"}
  ]},
  {id:"more",title:"На море",titleNl:"Naar de zee",em:"🌊",
   lines:[
    {bg:"На море, на море!",nl:"Naar de zee, naar de zee!"},
    {bg:"Водата е синя.",nl:"Het water is blauw."},
    {bg:"Пясъкът е топъл,",nl:"Het zand is warm,"},
    {bg:"вълните са весели.",nl:"de golven zijn vrolijk."},
    {bg:"Лято, обичам те!",nl:"Zomer, ik hou van je!"}
  ]}
];

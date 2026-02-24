// Bulgaars Leren — data-stories.js

var STORIES=[
  // === INTERACTIEF: Poes Mimi ===
  {id:"s1",title:"Котката Мими",titleNl:"Poes Mimi",em:"🐱",level:"Beginner",interactive:true,
   scenes:[
    {id:"start",text:{bg:"Мими е котка. Тя е малка и бяла.",nl:"Mimi is een poes. Ze is klein en wit."},choices:[
      {text:{bg:"Мими отива навън.",nl:"Mimi gaat naar buiten."},next:"outside"},
      {text:{bg:"Мими остава вкъщи.",nl:"Mimi blijft thuis."},next:"inside"}
    ]},
    {id:"outside",text:{bg:"Мими вижда пеперуда! 🦋",nl:"Mimi ziet een vlinder!"},choices:[
      {text:{bg:"Мими гони пеперудата.",nl:"Mimi rent achter de vlinder aan."},next:"chase"},
      {text:{bg:"Мими лежи на слънце.",nl:"Mimi gaat in de zon liggen."},next:"sun"}
    ]},
    {id:"inside",text:{bg:"Мими намира топка! 🧶",nl:"Mimi vindt een bolletje wol!"},choices:[
      {text:{bg:"Мими играе с топката.",nl:"Mimi speelt met het bolletje."},next:"play"},
      {text:{bg:"Мими спи на дивана.",nl:"Mimi slaapt op de bank."},next:"sleep"}
    ]},
    {id:"chase",text:{bg:"Мими хваща пеперудата! Тя е щастлива! 🎉",nl:"Mimi vangt de vlinder! Ze is gelukkig!"},end:true},
    {id:"sun",text:{bg:"Мими спи на слънце. Мррр... 😊",nl:"Mimi slaapt in de zon. Purr..."},end:true},
    {id:"play",text:{bg:"Мими играе цял ден! Тя е уморена. 😴",nl:"Mimi speelt de hele dag! Ze is moe."},end:true},
    {id:"sleep",text:{bg:"Мими сънува риба. Мняу! 🐟",nl:"Mimi droomt over vis. Miauw!"},end:true}
  ]},

  // === INTERACTIEF: In het park ===
  {id:"s2",title:"В парка",titleNl:"In het park",em:"🌳",level:"Beginner",interactive:true,
   scenes:[
    {id:"start",text:{bg:"Днес е слънчев ден. Децата отиват в парка.",nl:"Vandaag is het een zonnige dag. De kinderen gaan naar het park."},choices:[
      {text:{bg:"Момчето взема топката.",nl:"De jongen pakt de bal."},next:"ball"},
      {text:{bg:"Момичето иска сладолед.",nl:"Het meisje wil ijs."},next:"icecream"}
    ]},
    {id:"ball",text:{bg:"Момчето играе футбол с приятели. ⚽",nl:"De jongen speelt voetbal met vrienden."},choices:[
      {text:{bg:"Той вкарва гол!",nl:"Hij scoort een doelpunt!"},next:"goal"},
      {text:{bg:"Топката отива в езерото!",nl:"De bal valt in het meer!"},next:"lake"}
    ]},
    {id:"icecream",text:{bg:"Има много видове сладолед! 🍦",nl:"Er zijn veel soorten ijs!"},choices:[
      {text:{bg:"Искам шоколадов сладолед.",nl:"Ik wil chocolade-ijs."},next:"chocolate"},
      {text:{bg:"Искам ягодов сладолед.",nl:"Ik wil aardbeiijs."},next:"strawberry"}
    ]},
    {id:"goal",text:{bg:"Гол! Всички се радват! Момчето е герой! 🏆",nl:"Goal! Iedereen juicht! De jongen is een held!"},end:true},
    {id:"lake",text:{bg:"Една патка взема топката! Децата се смеят! 🦆😂",nl:"Een eend pakt de bal! De kinderen lachen!"},end:true},
    {id:"chocolate",text:{bg:"Шоколадовият сладолед е много вкусен! Мммм! 🍫",nl:"Het chocolade-ijs is heel lekker! Mmm!"},end:true},
    {id:"strawberry",text:{bg:"Ягодовият сладолед е розов и сладък! 🍓",nl:"Het aardbeiijs is roze en zoet!"},end:true}
  ]},

  // === INTERACTIEF: Bij oma ===
  {id:"s3",title:"При баба",titleNl:"Bij oma",em:"👵",level:"Beginner",interactive:true,
   scenes:[
    {id:"start",text:{bg:"Аз отивам при баба в София. Тя ме чака!",nl:"Ik ga naar oma in Sofia. Ze wacht op mij!"},choices:[
      {text:{bg:"Баба прави баница.",nl:"Oma maakt banitsa."},next:"banitsa"},
      {text:{bg:"Баба има градина.",nl:"Oma heeft een tuin."},next:"garden"}
    ]},
    {id:"banitsa",text:{bg:"Баницата мирише чудесно! 🥧",nl:"De banitsa ruikt heerlijk!"},choices:[
      {text:{bg:"Помагам на баба да готви.",nl:"Ik help oma met koken."},next:"cook"},
      {text:{bg:"Чакам и ям първи!",nl:"Ik wacht en eet als eerste!"},next:"eat"}
    ]},
    {id:"garden",text:{bg:"В градината има домати и рози. 🌹",nl:"In de tuin zijn tomaten en rozen."},choices:[
      {text:{bg:"Берем домати заедно.",nl:"We plukken samen tomaten."},next:"tomatoes"},
      {text:{bg:"Мирисвам розите.",nl:"Ik ruik aan de rozen."},next:"roses"}
    ]},
    {id:"cook",text:{bg:"Баба казва: \"Браво, готвач!\" Баницата е перфектна! 👩‍🍳",nl:"Oma zegt: \"Bravo, chef!\" De banitsa is perfect!"},end:true},
    {id:"eat",text:{bg:"Баницата е много вкусна! Аз обичам баба! ❤️",nl:"De banitsa is heel lekker! Ik hou van oma!"},end:true},
    {id:"tomatoes",text:{bg:"Доматите са червени и сочни! Баба прави салата! 🥗",nl:"De tomaten zijn rood en sappig! Oma maakt salade!"},end:true},
    {id:"roses",text:{bg:"Розите са красиви! Давам една на баба. Тя се усмихва! 🌹😊",nl:"De rozen zijn mooi! Ik geef er een aan oma. Ze lacht!"},end:true}
  ]},

  // === INTERACTIEF: Op de markt ===
  {id:"s4",title:"На пазара",titleNl:"Op de markt",em:"🍎",level:"Gemiddeld",interactive:true,
   scenes:[
    {id:"start",text:{bg:"Мама и аз отиваме на пазара.",nl:"Mama en ik gaan naar de markt."},choices:[
      {text:{bg:"Отиваме за плодове.",nl:"We gaan fruit kopen."},next:"fruit"},
      {text:{bg:"Отиваме за зеленчуци.",nl:"We gaan groenten kopen."},next:"veggies"}
    ]},
    {id:"fruit",text:{bg:"Виждаме ябълки, круши и дини.",nl:"We zien appels, peren en watermeloenen."},choices:[
      {text:{bg:"Искам диня!",nl:"Ik wil een watermeloen!"},next:"watermelon"},
      {text:{bg:"Искам ябълки.",nl:"Ik wil appels."},next:"apples"}
    ]},
    {id:"veggies",text:{bg:"Има домати, краставици и моркови.",nl:"Er zijn tomaten, komkommers en wortels."},choices:[
      {text:{bg:"Купуваме домати.",nl:"We kopen tomaten."},next:"tomatoes"},
      {text:{bg:"Купуваме краставици.",nl:"We kopen komkommers."},next:"cucumbers"}
    ]},
    {id:"watermelon",text:{bg:"Динята е голяма и сладка! Много вкусно! 🍉",nl:"De watermeloen is groot en zoet! Lekker!"},end:true},
    {id:"apples",text:{bg:"Ябълките са червени и хрупкави! Мммм! 🍎",nl:"De appels zijn rood en knapperig! Mmm!"},end:true},
    {id:"tomatoes",text:{bg:"Мама прави шопска салата! 🥗",nl:"Mama maakt shopska salata!"},end:true},
    {id:"cucumbers",text:{bg:"Краставиците са свежи и вкусни! 🥒",nl:"De komkommers zijn vers en lekker!"},end:true}
  ]},

  // === INTERACTIEF: School ===
  {id:"s5",title:"Училище",titleNl:"School",em:"🏫",level:"Gemiddeld",interactive:true,
   scenes:[
    {id:"start",text:{bg:"Аз ходя на училище. Моята учителка се казва Иванка.",nl:"Ik ga naar school. Mijn lerares heet Ivanka."},choices:[
      {text:{bg:"Днес имаме математика.",nl:"Vandaag hebben we wiskunde."},next:"math"},
      {text:{bg:"Днес четем книги.",nl:"Vandaag lezen we boeken."},next:"reading"}
    ]},
    {id:"math",text:{bg:"Учителката пише числа на дъската. 📐",nl:"De juf schrijft getallen op het bord."},choices:[
      {text:{bg:"Аз решавам задачата правилно!",nl:"Ik los de som goed op!"},next:"mathwin"},
      {text:{bg:"Задачата е трудна. Приятелят ми помага.",nl:"De som is moeilijk. Mijn vriend helpt me."},next:"mathhelp"}
    ]},
    {id:"reading",text:{bg:"Има нова книга за животни! 📚",nl:"Er is een nieuw boek over dieren!"},choices:[
      {text:{bg:"Чета за лъвове.",nl:"Ik lees over leeuwen."},next:"lions"},
      {text:{bg:"Чета за делфини.",nl:"Ik lees over dolfijnen."},next:"dolphins"}
    ]},
    {id:"mathwin",text:{bg:"\"Браво!\" казва учителката. Получавам звезда! ⭐",nl:"\"Bravo!\" zegt de juf. Ik krijg een ster!"},end:true},
    {id:"mathhelp",text:{bg:"Заедно решаваме задачата! Приятелите са важни! 🤝",nl:"Samen lossen we de som op! Vrienden zijn belangrijk!"},end:true},
    {id:"lions",text:{bg:"Лъвовете са силни и смели! Аз също искам да съм смел! 🦁",nl:"Leeuwen zijn sterk en dapper! Ik wil ook dapper zijn!"},end:true},
    {id:"dolphins",text:{bg:"Делфините плуват в морето! Искам да ги видя! 🐬",nl:"Dolfijnen zwemmen in de zee! Ik wil ze zien!"},end:true}
  ]},

  // === INTERACTIEF: Verjaardagsfeest ===
  {id:"s6",title:"Рожден ден",titleNl:"Verjaardagsfeest",em:"🎂",level:"Gemiddeld",interactive:true,
   scenes:[
    {id:"start",text:{bg:"Днес е моят рожден ден! Имам голяма торта!",nl:"Vandaag is mijn verjaardag! Ik heb een grote taart!"},choices:[
      {text:{bg:"Приятелите ми идват!",nl:"Mijn vrienden komen!"},next:"friends"},
      {text:{bg:"Първо отварям подаръците!",nl:"Eerst maak ik de cadeautjes open!"},next:"gifts"}
    ]},
    {id:"friends",text:{bg:"Приятелите донасят подаръци и балони! 🎈",nl:"De vrienden brengen cadeaus en ballonnen!"},choices:[
      {text:{bg:"Играем на криеница.",nl:"We spelen verstoppertje."},next:"hideseek"},
      {text:{bg:"Танцуваме на музика!",nl:"We dansen op muziek!"},next:"dance"}
    ]},
    {id:"gifts",text:{bg:"Има много подаръци! Кой да отворя първо? 🎁",nl:"Er zijn veel cadeautjes! Welke maak ik eerst open?"},choices:[
      {text:{bg:"Отварям голямата кутия.",nl:"Ik open de grote doos."},next:"bigbox"},
      {text:{bg:"Отварям малкия пакет.",nl:"Ik open het kleine pakje."},next:"smallbox"}
    ]},
    {id:"hideseek",text:{bg:"Намирам всички! Аз печеля! Играем и се смеем! 😄",nl:"Ik vind iedereen! Ik win! We spelen en lachen!"},end:true},
    {id:"dance",text:{bg:"Всички танцуват! Мерси на всички за най-добрия ден! 💃🕺",nl:"Iedereen danst! Dankjewel aan iedereen voor de beste dag!"},end:true},
    {id:"bigbox",text:{bg:"Вътре има велосипед! Ура! Най-добрият подарък! 🚲",nl:"Er zit een fiets in! Hoera! Het beste cadeau!"},end:true},
    {id:"smallbox",text:{bg:"Вътре има красива книга за Булгария! Обичам я! 📖🇧🇬",nl:"Er zit een mooi boek over Bulgarije in! Ik vind het geweldig!"},end:true}
  ]},

  // === INTERACTIEF: Op het strand ===
  {id:"s7",title:"На плажа",titleNl:"Op het strand",em:"🏖️",level:"Beginner",interactive:true,
   scenes:[
    {id:"start",text:{bg:"Отиваме на морето. Водата е топла!",nl:"We gaan naar de zee. Het water is warm!"},choices:[
      {text:{bg:"Искам да плувам!",nl:"Ik wil zwemmen!"},next:"swim"},
      {text:{bg:"Правя замък от пясък.",nl:"Ik maak een zandkasteel."},next:"castle"}
    ]},
    {id:"swim",text:{bg:"Водата е чудесна! Виждам риба! 🐠",nl:"Het water is heerlijk! Ik zie een vis!"},choices:[
      {text:{bg:"Гмуркам се под водата.",nl:"Ik duik onder water."},next:"dive"},
      {text:{bg:"Играя с вълните.",nl:"Ik speel met de golven."},next:"waves"}
    ]},
    {id:"castle",text:{bg:"Замъкът е голям! 🏰",nl:"Het kasteel is groot!"},choices:[
      {text:{bg:"Правя кула.",nl:"Ik maak een toren."},next:"tower"},
      {text:{bg:"Копая канал.",nl:"Ik graaf een gracht."},next:"moat"}
    ]},
    {id:"dive",text:{bg:"Виждам красиви миди! Морето е невероятно! 🐚",nl:"Ik zie mooie schelpen! De zee is geweldig!"},end:true},
    {id:"waves",text:{bg:"Скачам във вълните! Много е забавно! 🌊",nl:"Ik spring in de golven! Erg leuk!"},end:true},
    {id:"tower",text:{bg:"Замъкът ми е най-красивият на плажа! 👑",nl:"Mijn kasteel is het mooiste op het strand!"},end:true},
    {id:"moat",text:{bg:"Водата идва в канала! Замъкът е готов! 🌟",nl:"Het water komt in de gracht! Het kasteel is klaar!"},end:true}
  ]},

  // === INTERACTIEF: Een sneeuwdag ===
  {id:"s8",title:"Снежен ден",titleNl:"Een sneeuwdag",em:"❄️",level:"Beginner",interactive:true,
   scenes:[
    {id:"start",text:{bg:"Вали сняг! Всичко е бяло навън!",nl:"Het sneeuwt! Alles is wit buiten!"},choices:[
      {text:{bg:"Правим снежен човек!",nl:"We maken een sneeuwpop!"},next:"snowman"},
      {text:{bg:"Хвърляме снежни топки!",nl:"We gooien sneeuwballen!"},next:"snowball"}
    ]},
    {id:"snowman",text:{bg:"Снежният човек е голям! Трябва му нос. ⛄",nl:"De sneeuwpop is groot! Hij heeft een neus nodig."},choices:[
      {text:{bg:"Слагаме морков за нос.",nl:"We zetten een wortel als neus."},next:"carrot"},
      {text:{bg:"Слагаме шапка и шал.",nl:"We zetten een muts en sjaal op."},next:"hat"}
    ]},
    {id:"snowball",text:{bg:"Снежните топки летят навсякъде! 🎯",nl:"De sneeuwballen vliegen overal!"},choices:[
      {text:{bg:"Аз уцелвам татко!",nl:"Ik raak papa!"},next:"hitdad"},
      {text:{bg:"Правим отбори!",nl:"We maken teams!"},next:"teams"}
    ]},
    {id:"carrot",text:{bg:"Снежният човек е готов! Той се усмихва! Красив е! ⛄😊",nl:"De sneeuwpop is klaar! Hij lacht! Hij is mooi!"},end:true},
    {id:"hat",text:{bg:"Снежният човек прилича на дядо! Всички се смеят! 😂🎩",nl:"De sneeuwpop lijkt op opa! Iedereen lacht!"},end:true},
    {id:"hitdad",text:{bg:"Татко се смее и ме гони! Бягам! После пием горещ шоколад! ☕",nl:"Papa lacht en rent achter me aan! Ik ren! Daarna drinken we warme chocolademelk!"},end:true},
    {id:"teams",text:{bg:"Нашият отбор печели! Ура! Ръцете ми са студени но аз съм щастлив! 🏆❄️",nl:"Ons team wint! Hoera! Mijn handen zijn koud maar ik ben blij!"},end:true}
  ]},

  // === INTERACTIEF: Een schooldag ===
  {id:"s9",title:"Училищен ден",titleNl:"Een schooldag",em:"📝",level:"Gemiddeld",interactive:true,
   scenes:[
    {id:"start",text:{bg:"Звънецът звъни! Влизам в класната стая.",nl:"De bel gaat! Ik ga het klaslokaal in."},choices:[
      {text:{bg:"Учителката дава нова задача.",nl:"De juf geeft een nieuwe opdracht."},next:"task"},
      {text:{bg:"Днес рисуваме!",nl:"Vandaag gaan we tekenen!"},next:"draw"}
    ]},
    {id:"task",text:{bg:"Трябва да напишем история! 📝",nl:"We moeten een verhaal schrijven!"},choices:[
      {text:{bg:"Пиша за моето куче.",nl:"Ik schrijf over mijn hond."},next:"dog"},
      {text:{bg:"Пиша за пътуване до морето.",nl:"Ik schrijf over een reis naar de zee."},next:"sea"}
    ]},
    {id:"draw",text:{bg:"Учителката казва: \"Рисувайте вашия любим сезон!\" 🎨",nl:"De juf zegt: \"Teken jullie favoriete seizoen!\""},choices:[
      {text:{bg:"Рисувам лятото и морето.",nl:"Ik teken de zomer en de zee."},next:"summer"},
      {text:{bg:"Рисувам зимата и снега.",nl:"Ik teken de winter en de sneeuw."},next:"winter"}
    ]},
    {id:"dog",text:{bg:"Учителката казва: \"Прекрасна история!\" Получавам шестица! 🐕⭐",nl:"De juf zegt: \"Een prachtig verhaal!\" Ik krijg een tien!"},end:true},
    {id:"sea",text:{bg:"Всички харесват моята история за морето! Обичам училище! 🌊📖",nl:"Iedereen vindt mijn verhaal over de zee leuk! Ik hou van school!"},end:true},
    {id:"summer",text:{bg:"Рисунката ми е с плаж и слънце! Учителката я слага на стената! ☀️🖼️",nl:"Mijn tekening heeft een strand en zon! De juf hangt hem aan de muur!"},end:true},
    {id:"winter",text:{bg:"Рисувам снежен човек и планини! Учителката казва: \"Много красиво!\" 🏔️⛄",nl:"Ik teken een sneeuwpop en bergen! De juf zegt: \"Heel mooi!\""},end:true}
  ]},

  // === INTERACTIEF: Spelen met vrienden ===
  {id:"s10",title:"Игра с приятели",titleNl:"Spelen met vrienden",em:"👫",level:"Beginner",interactive:true,
   scenes:[
    {id:"start",text:{bg:"Отивам в парка. Срещам приятелите си!",nl:"Ik ga naar het park. Ik ontmoet mijn vrienden!"},choices:[
      {text:{bg:"Играем на футбол!",nl:"We spelen voetbal!"},next:"football"},
      {text:{bg:"Играем на люлката!",nl:"We spelen op de schommel!"},next:"swing"}
    ]},
    {id:"football",text:{bg:"Играем два срещу два! ⚽",nl:"We spelen twee tegen twee!"},choices:[
      {text:{bg:"Аз вкарвам гол!",nl:"Ik scoor een doelpunt!"},next:"score"},
      {text:{bg:"Пасвам на приятеля ми.",nl:"Ik pas naar mijn vriend."},next:"pass"}
    ]},
    {id:"swing",text:{bg:"Люлката е висока! 🎡",nl:"De schommel gaat hoog!"},choices:[
      {text:{bg:"Люлея се по-високо!",nl:"Ik schommel hoger!"},next:"higher"},
      {text:{bg:"Скачам от люлката!",nl:"Ik spring van de schommel!"},next:"jump"}
    ]},
    {id:"score",text:{bg:"Гооол! Приятелите ме поздравяват! Много е забавно! ⚽🎉",nl:"Doelpunt! De vrienden feliciteren me! Heel leuk!"},end:true},
    {id:"pass",text:{bg:"Приятелят ми вкарва гол! Празнуваме заедно! Ще дойда пак утре! 🤝⚽",nl:"Mijn vriend scoort! We vieren het samen! Ik kom morgen weer!"},end:true},
    {id:"higher",text:{bg:"Виждам целия парк от горе! Чувствам се като птица! 🦅",nl:"Ik zie het hele park van boven! Ik voel me als een vogel!"},end:true},
    {id:"jump",text:{bg:"Скачам далеч! Приятелите казват: \"Уау!\" Много е забавно! 🌟",nl:"Ik spring ver! De vrienden zeggen: \"Wauw!\" Heel leuk!"},end:true}
  ]}
];

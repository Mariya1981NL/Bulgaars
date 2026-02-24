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

  // === LINEAIR: In het park ===
  {id:"s2",title:"В парка",titleNl:"In het park",em:"🌳",level:"Beginner",
   lines:[
    {bg:"Днес е слънчев ден.",nl:"Vandaag is het een zonnige dag."},
    {bg:"Децата играят в парка.",nl:"De kinderen spelen in het park."},
    {bg:"Едно момче има топка.",nl:"Een jongen heeft een bal."},
    {bg:"Едно момиче яде сладолед.",nl:"Een meisje eet ijs."},
    {bg:"Всички са щастливи!",nl:"Iedereen is gelukkig!"}
  ]},

  // === LINEAIR: Bij oma ===
  {id:"s3",title:"При баба",titleNl:"Bij oma",em:"👵",level:"Beginner",
   lines:[
    {bg:"Аз отивам при баба.",nl:"Ik ga naar oma."},
    {bg:"Баба живее в София.",nl:"Oma woont in Sofia."},
    {bg:"Тя прави баница.",nl:"Ze maakt banitsa."},
    {bg:"Баницата е много вкусна!",nl:"De banitsa is heel lekker!"},
    {bg:"Аз обичам баба.",nl:"Ik hou van oma."}
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

  // === LINEAIR: School ===
  {id:"s5",title:"Училище",titleNl:"School",em:"🏫",level:"Gemiddeld",
   lines:[
    {bg:"Аз ходя на училище.",nl:"Ik ga naar school."},
    {bg:"Моята учителка се казва Иванка.",nl:"Mijn lerares heet Ivanka."},
    {bg:"Днес имаме математика.",nl:"Vandaag hebben we wiskunde."},
    {bg:"Аз обичам да чета книги.",nl:"Ik hou ervan om boeken te lezen."},
    {bg:"След училище играя с приятели.",nl:"Na school speel ik met vrienden."}
  ]},

  // === LINEAIR: Verjaardagsfeest ===
  {id:"s6",title:"Рожден ден",titleNl:"Verjaardagsfeest",em:"🎂",level:"Gemiddeld",
   lines:[
    {bg:"Днес е моят рожден ден!",nl:"Vandaag is mijn verjaardag!"},
    {bg:"Имам голяма торта.",nl:"Ik heb een grote taart."},
    {bg:"Приятелите ми идват.",nl:"Mijn vrienden komen."},
    {bg:"Играем и се смеем.",nl:"We spelen en lachen."},
    {bg:"Получавам подаръци!",nl:"Ik krijg cadeautjes!"},
    {bg:"Мерси на всички!",nl:"Dankjewel aan iedereen!"}
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

  // === LINEAIR: Een sneeuwdag ===
  {id:"s8",title:"Снежен ден",titleNl:"Een sneeuwdag",em:"❄️",level:"Beginner",
   lines:[
    {bg:"Вали сняг!",nl:"Het sneeuwt!"},
    {bg:"Всичко е бяло.",nl:"Alles is wit."},
    {bg:"Правим снежен човек.",nl:"We maken een sneeuwpop."},
    {bg:"Ръцете ми са студени.",nl:"Mijn handen zijn koud."},
    {bg:"Пием горещ шоколад.",nl:"We drinken warme chocolademelk."}
  ]},

  // === LINEAIR: Een schooldag ===
  {id:"s9",title:"Училищен ден",titleNl:"Een schooldag",em:"🏫",level:"Gemiddeld",
   lines:[
    {bg:"Звънецът звъни!",nl:"De bel gaat!"},
    {bg:"Влизам в класната стая.",nl:"Ik ga het klaslokaal in."},
    {bg:"Учителката е добра.",nl:"De juf is aardig."},
    {bg:"Пишем в тетрадките.",nl:"We schrijven in onze schriften."},
    {bg:"Обичам училище!",nl:"Ik hou van school!"}
  ]},

  // === LINEAIR: Spelen met vrienden ===
  {id:"s10",title:"Игра с приятели",titleNl:"Spelen met vrienden",em:"👫",level:"Beginner",
   lines:[
    {bg:"Отивам в парка.",nl:"Ik ga naar het park."},
    {bg:"Срещам приятелите си.",nl:"Ik ontmoet mijn vrienden."},
    {bg:"Играем на футбол.",nl:"We spelen voetbal."},
    {bg:"Много е забавно!",nl:"Het is heel leuk!"},
    {bg:"Ще дойда пак утре!",nl:"Ik kom morgen weer!"}
  ]}
];

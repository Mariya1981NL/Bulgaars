// Bulgarian Pop Lyrics — Fill-in-the-Blank
// Fragments from popular Bulgarian pop songs with blanks for learning

var BG_LYRICS = [
  {
    id: "ly1",
    title: "Като звездите",
    artist: "Миро",
    em: "⭐",
    genre: "pop",
    lines: [
      { text: "Ти си като ___", blank: "звездите", pron: "zvez-DI-te", nl: "de sterren", opts: ["звездите", "слънцето", "луната", "облаците"] },
      { text: "Горе в ___", blank: "небето", pron: "ne-BE-to", nl: "de hemel", opts: ["небето", "морето", "полето", "градът"] },
      { text: "Светиш ярко всяка ___", blank: "нощ", pron: "nosht", nl: "nacht", opts: ["нощ", "ден", "сутрин", "вечер"] }
    ]
  },
  {
    id: "ly2",
    title: "Обичам те",
    artist: "Графа",
    em: "❤️",
    genre: "pop",
    lines: [
      { text: "Аз ___ те", blank: "обичам", pron: "o-BI-cham", nl: "ik hou van je", opts: ["обичам", "чувам", "виждам", "търся"] },
      { text: "Ти си моето ___", blank: "слънце", pron: "SLAN-tse", nl: "zon", opts: ["слънце", "сърце", "време", "щастие"] },
      { text: "Всеки ___ с теб", blank: "ден", pron: "den", nl: "dag", opts: ["ден", "час", "път", "миг"] }
    ]
  },
  {
    id: "ly3",
    title: "Танцувай с мен",
    artist: "Поли Генова",
    em: "💃",
    genre: "pop",
    lines: [
      { text: "___ с мен тази вечер", blank: "Танцувай", pron: "tan-TSOE-vaj", nl: "Dans", opts: ["Танцувай", "Говори", "Ходи", "Пей"] },
      { text: "Музиката е в моето ___", blank: "сърце", pron: "SAR-tse", nl: "hart", opts: ["сърце", "тяло", "ухо", "око"] },
      { text: "Нека бъде ___ нощ", blank: "магическа", pron: "ma-GI-ches-ka", nl: "magisch", opts: ["магическа", "тъмна", "дълга", "тиха"] }
    ]
  },
  {
    id: "ly4",
    title: "Приказка без край",
    artist: "Лили Иванова",
    em: "📖",
    genre: "pop",
    lines: [
      { text: "Една ___ без край", blank: "приказка", pron: "pri-KAZ-ka", nl: "sprookje", opts: ["приказка", "песен", "история", "мечта"] },
      { text: "За ___ и надежда", blank: "любов", pron: "ljoe-BOF", nl: "liefde", opts: ["любов", "живот", "щастие", "младост"] },
      { text: "Да вървим ___ напред", blank: "заедно", pron: "za-ED-no", nl: "samen", opts: ["заедно", "бавно", "бързо", "вечно"] }
    ]
  },
  {
    id: "ly5",
    title: "Летя",
    artist: "Графа & Михаела Филева",
    em: "🦋",
    genre: "pop",
    lines: [
      { text: "Аз ___ високо", blank: "летя", pron: "le-TJA", nl: "ik vlieg", opts: ["летя", "тичам", "ходя", "скачам"] },
      { text: "Над ___ и реки", blank: "планини", pron: "pla-ni-NI", nl: "bergen", opts: ["планини", "градове", "къщи", "дървета"] },
      { text: "Светът е ___", blank: "красив", pron: "kra-SIF", nl: "mooi", opts: ["красив", "голям", "малък", "стар"] }
    ]
  },
  {
    id: "ly6",
    title: "Вятър ме носи",
    artist: "Миро",
    em: "🌬️",
    genre: "pop",
    lines: [
      { text: "___ ме носи", blank: "Вятър", pron: "VJA-tar", nl: "Wind", opts: ["Вятър", "Дъжд", "Сняг", "Слънце"] },
      { text: "През ___ и поля", blank: "гори", pron: "go-RI", nl: "bossen", opts: ["гори", "пътища", "улици", "села"] },
      { text: "Свободен съм като ___", blank: "птица", pron: "PTI-tsa", nl: "vogel", opts: ["птица", "риба", "котка", "дете"] }
    ]
  },
  {
    id: "ly7",
    title: "Не ме оставяй",
    artist: "Поли Генова",
    em: "🥺",
    genre: "pop",
    lines: [
      { text: "Не ме ___", blank: "оставяй", pron: "os-ta-VJAJ", nl: "verlaat me niet", opts: ["оставяй", "забравяй", "следвай", "чакай"] },
      { text: "Нуждая се от ___", blank: "теб", pron: "teb", nl: "jou", opts: ["теб", "тях", "нас", "мен"] },
      { text: "Моля те, ___", blank: "остани", pron: "os-TA-ni", nl: "blijf", opts: ["остани", "върни", "тръгни", "спри"] }
    ]
  },
  {
    id: "ly8",
    title: "Цветове",
    artist: "Графа",
    em: "🌈",
    genre: "pop",
    lines: [
      { text: "___ навсякъде", blank: "Цветове", pron: "tsve-to-VE", nl: "Kleuren", opts: ["Цветове", "Звуци", "Хора", "Мечти"] },
      { text: "Червено като ___", blank: "роза", pron: "RO-za", nl: "roos", opts: ["роза", "ябълка", "кръв", "залез"] },
      { text: "Синьо като ___", blank: "морето", pron: "MO-re-to", nl: "de zee", opts: ["морето", "небето", "езерото", "реката"] }
    ]
  },
  {
    id: "ly9",
    title: "Днес и утре",
    artist: "Михаела Филева",
    em: "🌅",
    genre: "pop",
    lines: [
      { text: "___ е нов ден", blank: "Днес", pron: "dnes", nl: "Vandaag", opts: ["Днес", "Утре", "Вчера", "Сега"] },
      { text: "Пълен с ___ и светлина", blank: "радост", pron: "RA-dost", nl: "vreugde", opts: ["радост", "тъга", "страх", "мъка"] },
      { text: "Утре ще бъде още по-___", blank: "хубаво", pron: "HOE-ba-vo", nl: "mooi", opts: ["хубаво", "лошо", "трудно", "бързо"] }
    ]
  },
  {
    id: "ly10",
    title: "Усмивка",
    artist: "Лили Иванова",
    em: "😊",
    genre: "pop",
    lines: [
      { text: "Една ___ може всичко", blank: "усмивка", pron: "oes-MIF-ka", nl: "glimlach", opts: ["усмивка", "дума", "стъпка", "мисъл"] },
      { text: "Да промени ___", blank: "света", pron: "SVE-ta", nl: "de wereld", opts: ["света", "деня", "живота", "пътя"] },
      { text: "Усмихни се на ___", blank: "мен", pron: "men", nl: "mij", opts: ["мен", "теб", "тях", "всички"] }
    ]
  },
  {
    id: "ly11",
    title: "Пролет",
    artist: "Миро",
    em: "🌸",
    genre: "pop",
    lines: [
      { text: "___ идва отново", blank: "Пролет", pron: "pro-LET", nl: "Lente", opts: ["Пролет", "Лято", "Есен", "Зима"] },
      { text: "Цветята ___ навсякъде", blank: "цъфтят", pron: "tsaf-TJAT", nl: "bloeien", opts: ["цъфтят", "падат", "растат", "умират"] },
      { text: "Птиците ___ весело", blank: "пеят", pron: "PE-jat", nl: "zingen", opts: ["пеят", "летят", "спят", "ядат"] }
    ]
  },
  {
    id: "ly12",
    title: "Вечерна песен",
    artist: "Графа",
    em: "🌙",
    genre: "pop",
    lines: [
      { text: "___ тихо пада", blank: "Вечерта", pron: "VE-cher-ta", nl: "De avond", opts: ["Вечерта", "Нощта", "Дъждът", "Снегът"] },
      { text: "Звездите ___", blank: "блестят", pron: "bles-TJAT", nl: "schitteren", opts: ["блестят", "падат", "спят", "горят"] },
      { text: "А аз мечтая за ___", blank: "теб", pron: "teb", nl: "jou", opts: ["теб", "нас", "утре", "вчера"] }
    ]
  }
];

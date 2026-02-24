// Bulgaars Leren — data-proverbs.js
// Bulgarian proverbs & idioms with Dutch equivalents

var PROVERBS = [
  {
    id: "p1",
    bg: "Който копае гроб другиму, сам пада в него.",
    pron: "Kojto kopae grob drugimu, sam pada v nego.",
    nlLiteral: "Wie een graf graaft voor een ander, valt er zelf in.",
    nlEquiv: "Wie een kuil graaft voor een ander, valt er zelf in.",
    em: "⛏️",
    cat: "karma",
    note: "Bijna identiek aan het Nederlands! Dezelfde wijsheid in twee talen."
  },
  {
    id: "p2",
    bg: "Тихите води са най-дълбоки.",
    pron: "Tihite vodi sa naj-dalboki.",
    nlLiteral: "Stille wateren zijn het diepst.",
    nlEquiv: "Stille wateren hebben diepe gronden.",
    em: "🌊",
    cat: "wijsheid",
    note: "In beide talen waarschuwt men voor rustige mensen — ze zijn vaak het slimst!"
  },
  {
    id: "p3",
    bg: "Капка по капка — вир става.",
    pron: "Kapka po kapka — vir stava.",
    nlLiteral: "Druppel na druppel wordt het een poel.",
    nlEquiv: "De kruik gaat zo lang te water tot ze breekt.",
    em: "💧",
    cat: "geduld",
    note: "Bulgaren focussen op opbouwen (druppels), Nederlanders op de grens (breekpunt)."
  },
  {
    id: "p4",
    bg: "На всяко прасе идва Коледа.",
    pron: "Na vsjako prase idva Koleda.",
    nlLiteral: "Voor elk varken komt Kerstmis.",
    nlEquiv: "Elk huisje heeft zijn kruisje.",
    em: "🐷",
    cat: "lot",
    note: "In Bulgarije werd traditioneel een varken geslacht met Kerst. Het varken wist: zijn dag komt!"
  },
  {
    id: "p5",
    bg: "Ябълката не пада далеч от дървото.",
    pron: "Jabalkata ne pada dalech ot darvoto.",
    nlLiteral: "De appel valt niet ver van de boom.",
    nlEquiv: "De appel valt niet ver van de boom.",
    em: "🍎",
    cat: "familie",
    note: "100% identiek! Een van de weinige spreekwoorden die exact hetzelfde zijn."
  },
  {
    id: "p6",
    bg: "Бързата кучка слепи ги ражда.",
    pron: "Barzata kutsjka slepi gi razhda.",
    nlLiteral: "Een haastige teef werpt blinde puppy's.",
    nlEquiv: "Haastige spoed is zelden goed.",
    em: "🐕",
    cat: "geduld",
    note: "De Bulgaarse versie is beeldender — haast leidt tot slechte resultaten!"
  },
  {
    id: "p7",
    bg: "Дървото се познава по плодовете.",
    pron: "Darvetoto se poznava po plodovete.",
    nlLiteral: "Een boom ken je aan zijn vruchten.",
    nlEquiv: "Aan de vruchten kent men de boom.",
    em: "🌳",
    cat: "karakter",
    note: "Weer bijna identiek! Beoordeel mensen op wat ze doen, niet wat ze zeggen."
  },
  {
    id: "p8",
    bg: "Гладна мечка хоро не играе.",
    pron: "Gladna metsjka horo ne igrae.",
    nlLiteral: "Een hongerige beer danst geen horo.",
    nlEquiv: "Een lege maag maakt geen gelukkig mens.",
    em: "🐻",
    cat: "praktisch",
    note: "Horo is de Bulgaarse volksdans. Zelfs een beer kan niet feesten op een lege maag!"
  },
  {
    id: "p9",
    bg: "Който не работи, не трябва да яде.",
    pron: "Kojto ne raboti, ne trjabva da jade.",
    nlLiteral: "Wie niet werkt, moet niet eten.",
    nlEquiv: "Wie niet werkt, zal niet eten.",
    em: "🍞",
    cat: "werk",
    note: "Een universele wijsheid die in veel culturen voorkomt."
  },
  {
    id: "p10",
    bg: "Два пъти мери, един път режи.",
    pron: "Dva pati meri, edin pat rezji.",
    nlLiteral: "Twee keer meten, één keer snijden.",
    nlEquiv: "Bezint eer ge begint.",
    em: "✂️",
    cat: "wijsheid",
    note: "Denk goed na voor je handelt. De Bulgaarse versie is heel praktisch!"
  },
  {
    id: "p11",
    bg: "Умен враг е по-добър от глупав приятел.",
    pron: "Oemen vrag e po-dobar ot gloepav prijatel.",
    nlLiteral: "Een slimme vijand is beter dan een domme vriend.",
    nlEquiv: "Met zulke vrienden heb je geen vijanden nodig.",
    em: "🤔",
    cat: "wijsheid",
    note: "Een slim persoon — vriend of vijand — is altijd waardevoller dan een dom persoon."
  },
  {
    id: "p12",
    bg: "Където има дим, има и огън.",
    pron: "Kadeto ima dim, ima i ogan.",
    nlLiteral: "Waar rook is, is ook vuur.",
    nlEquiv: "Waar rook is, is vuur.",
    em: "🔥",
    cat: "waarheid",
    note: "Exact hetzelfde! Geruchten hebben vaak een kern van waarheid."
  },
  {
    id: "p13",
    bg: "Око за око, зъб за зъб.",
    pron: "Oko za oko, zab za zab.",
    nlLiteral: "Oog om oog, tand om tand.",
    nlEquiv: "Oog om oog, tand om tand.",
    em: "⚖️",
    cat: "karma",
    note: "Universeel spreekwoord uit de Bijbel, identiek in beide talen."
  },
  {
    id: "p14",
    bg: "На вълка му е дебел вратът, защото сам си върши работата.",
    pron: "Na valka mu e debel vratat, zasjtoto sam si varshi rabotata.",
    nlLiteral: "De wolf heeft een dikke nek, want hij doet zijn werk zelf.",
    nlEquiv: "Eigen handen zijn gouden randen.",
    em: "🐺",
    cat: "werk",
    note: "De wolf is sterk omdat hij op zichzelf vertrouwt. Zelf doen maakt sterk!"
  },
  {
    id: "p15",
    bg: "Когато котката я няма, мишките играят хоро.",
    pron: "Kogato kotkata ja njama, misjkite igrajat horo.",
    nlLiteral: "Als de kat weg is, dansen de muizen horo.",
    nlEquiv: "Als de kat van huis is, dansen de muizen op tafel.",
    em: "🐱",
    cat: "gedrag",
    note: "De muizen dansen Bulgaars! Horo in plaats van op tafel — typisch Bulgaars!"
  },
  {
    id: "p16",
    bg: "Крушата не пада по-далеч от крушата.",
    pron: "Kroessjata ne pada po-daletsj ot kroessjata.",
    nlLiteral: "De peer valt niet ver van de perenboom.",
    nlEquiv: "De appel valt niet ver van de boom.",
    em: "🍐",
    cat: "familie",
    note: "Bulgaren gebruiken een peer in plaats van een appel — zelfde idee!"
  },
  {
    id: "p17",
    bg: "Дай на детето крила и то ще литне.",
    pron: "Daj na deteto krila i to sjte litne.",
    nlLiteral: "Geef het kind vleugels en het zal vliegen.",
    nlEquiv: "Vertrouwen geven maakt sterk.",
    em: "🦅",
    cat: "opvoeding",
    note: "Een prachtige Bulgaarse wijsheid over kinderen — geef ze vertrouwen!"
  },
  {
    id: "p18",
    bg: "Който пее, зло не мисли.",
    pron: "Kojto pee, zlo ne misli.",
    nlLiteral: "Wie zingt, denkt geen kwaad.",
    nlEquiv: "Wie zingt, denkt geen kwaad.",
    em: "🎵",
    cat: "geluk",
    note: "Zingen maakt gelukkig! De Bulgaren zijn beroemd om hun zangtraditie."
  },
  {
    id: "p19",
    bg: "На лъжата краката са къси.",
    pron: "Na lazhata krakata sa kasi.",
    nlLiteral: "De leugen heeft korte benen.",
    nlEquiv: "Al is de leugen nog zo snel, de waarheid achterhaalt hem wel.",
    em: "🤥",
    cat: "waarheid",
    note: "De Bulgaarse versie is korter en krachtiger — de leugen kan niet ver rennen!"
  },
  {
    id: "p20",
    bg: "Който рано рани, два пъти печели.",
    pron: "Kojto rano rani, dva pati petsjeli.",
    nlLiteral: "Wie vroeg opstaat, wint twee keer.",
    nlEquiv: "De morgenstond heeft goud in de mond.",
    em: "🌅",
    cat: "werk",
    note: "Bulgaren zeggen dat je twee keer wint. Nederlanders praten over goud!"
  },
  {
    id: "p21",
    bg: "Приятел в нужда се познава.",
    pron: "Prijatel v noezjda se poznava.",
    nlLiteral: "Een vriend herken je in nood.",
    nlEquiv: "In nood leert men zijn vrienden kennen.",
    em: "🤝",
    cat: "vriendschap",
    note: "Universeel: ware vrienden blijven in moeilijke tijden."
  },
  {
    id: "p22",
    bg: "Една лястовица пролет не прави.",
    pron: "Edna ljastovitsa prolet ne pravi.",
    nlLiteral: "Eén zwaluw maakt nog geen lente.",
    nlEquiv: "Eén zwaluw maakt nog geen zomer.",
    em: "🕊️",
    cat: "geduld",
    note: "Bijna identiek! Bulgaren zeggen lente (пролет), Nederlanders zomer."
  },
  {
    id: "p23",
    bg: "Всяко начало е трудно.",
    pron: "Vsjako natsjalo e troedno.",
    nlLiteral: "Elk begin is moeilijk.",
    nlEquiv: "Alle begin is moeilijk.",
    em: "🏔️",
    cat: "moed",
    note: "Exact hetzelfde gezegde. Dit geldt ook voor het leren van Bulgaars!"
  },
  {
    id: "p24",
    bg: "С търпение и труд всичко се постига.",
    pron: "S tarpenije i troed vsitsjko se postiga.",
    nlLiteral: "Met geduld en werk bereik je alles.",
    nlEquiv: "Geduld is een schone zaak.",
    em: "🎯",
    cat: "geduld",
    note: "De Bulgaarse versie is completer: niet alleen geduld, maar ook hard werken!"
  },
  {
    id: "p25",
    bg: "Не е злато всичко, що блести.",
    pron: "Ne e zlato vsitsjko, sjto blesti.",
    nlLiteral: "Het is niet allemaal goud wat blinkt.",
    nlEquiv: "Het is niet alles goud wat er blinkt.",
    em: "✨",
    cat: "wijsheid",
    note: "Weer identiek! Laat je niet misleiden door de buitenkant."
  }
];

// Categories for filtering
var PROVERB_CATS = [
  {id: "all", name: "Alles", em: "📚"},
  {id: "karma", name: "Karma", em: "⚖️"},
  {id: "wijsheid", name: "Wijsheid", em: "🦉"},
  {id: "geduld", name: "Geduld", em: "⏳"},
  {id: "familie", name: "Familie", em: "👨‍👩‍👧‍👦"},
  {id: "werk", name: "Werk", em: "💪"},
  {id: "waarheid", name: "Waarheid", em: "🔍"},
  {id: "geluk", name: "Geluk", em: "😊"},
  {id: "moed", name: "Moed", em: "🦁"},
  {id: "vriendschap", name: "Vriendschap", em: "🤝"}
];

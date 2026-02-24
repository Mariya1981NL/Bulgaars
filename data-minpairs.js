// Minimal Pairs — Bulgarian Listening Quiz
// Two similar-sounding words, pick which matches the picture/meaning

var BG_MINPAIRS = [
  {
    id: "mp1",
    cat: "vowels",
    a: { bg: "бял", pron: "bjal", nl: "wit", em: "⬜" },
    b: { bg: "бол", pron: "bol", nl: "kom/schaal", em: "🥣" },
    tip: "я (ja) vs. о (o) — let op de klinker!"
  },
  {
    id: "mp2",
    cat: "vowels",
    a: { bg: "мед", pron: "med", nl: "honing", em: "🍯" },
    b: { bg: "мид", pron: "mid", nl: "mossel", em: "🦪" },
    tip: "е (e) vs. и (i) — korte klinkers"
  },
  {
    id: "mp3",
    cat: "consonants",
    a: { bg: "кон", pron: "kon", nl: "paard", em: "🐴" },
    b: { bg: "сон", pron: "son", nl: "slaap/droom", em: "💤" },
    tip: "к (k) vs. с (s) — begin-medeklinker"
  },
  {
    id: "mp4",
    cat: "consonants",
    a: { bg: "бас", pron: "bas", nl: "bas/stem", em: "🎵" },
    b: { bg: "пас", pron: "pas", nl: "pas/bewaking", em: "🐕" },
    tip: "б (b) vs. п (p) — stemhebbend vs. stemloos"
  },
  {
    id: "mp5",
    cat: "consonants",
    a: { bg: "дом", pron: "dom", nl: "huis", em: "🏠" },
    b: { bg: "том", pron: "tom", nl: "deel/boek", em: "📕" },
    tip: "д (d) vs. т (t) — stemhebbend vs. stemloos"
  },
  {
    id: "mp6",
    cat: "vowels",
    a: { bg: "вар", pron: "var", nl: "kalk", em: "🪨" },
    b: { bg: "вор", pron: "vor", nl: "dief", em: "🦹" },
    tip: "а (a) vs. о (o) — open klinkers"
  },
  {
    id: "mp7",
    cat: "softness",
    a: { bg: "мат", pron: "mat", nl: "schaakmat", em: "♟️" },
    b: { bg: "мят", pron: "mjat", nl: "verfrommeld", em: "📄" },
    tip: "а (a) vs. я (ja) — harde vs. zachte klinker"
  },
  {
    id: "mp8",
    cat: "consonants",
    a: { bg: "гол", pron: "gol", nl: "doelpunt", em: "⚽" },
    b: { bg: "кол", pron: "kol", nl: "paal/stok", em: "🪵" },
    tip: "г (g) vs. к (k) — stemhebbend vs. stemloos"
  },
  {
    id: "mp9",
    cat: "vowels",
    a: { bg: "кос", pron: "kos", nl: "haar", em: "💇" },
    b: { bg: "кус", pron: "koes", nl: "stuk/brok", em: "🧱" },
    tip: "о (o) vs. у (oe) — geronde klinkers"
  },
  {
    id: "mp10",
    cat: "consonants",
    a: { bg: "зима", pron: "ZI-ma", nl: "winter", em: "❄️" },
    b: { bg: "сима", pron: "SI-ma", nl: "draad/snaar", em: "🧵" },
    tip: "з (z) vs. с (s) — stemhebbend vs. stemloos"
  },
  {
    id: "mp11",
    cat: "softness",
    a: { bg: "нос", pron: "nos", nl: "neus", em: "👃" },
    b: { bg: "нож", pron: "nozj", nl: "mes", em: "🔪" },
    tip: "с (s) vs. ж (zj) — sibilanten"
  },
  {
    id: "mp12",
    cat: "vowels",
    a: { bg: "сок", pron: "sok", nl: "sap", em: "🧃" },
    b: { bg: "сук", pron: "soek", nl: "knoop (hout)", em: "🌲" },
    tip: "о (o) vs. у (oe) — klinkerlengte"
  },
  {
    id: "mp13",
    cat: "consonants",
    a: { bg: "раб", pron: "rab", nl: "slaaf", em: "⛓️" },
    b: { bg: "рак", pron: "rak", nl: "kreeft", em: "🦞" },
    tip: "б (b) vs. к (k) — eind-medeklinker"
  },
  {
    id: "mp14",
    cat: "softness",
    a: { bg: "лук", pron: "loek", nl: "ui", em: "🧅" },
    b: { bg: "люк", pron: "ljoek", nl: "luik", em: "🚪" },
    tip: "у (oe) vs. ю (joe) — hard vs. zacht"
  },
  {
    id: "mp15",
    cat: "consonants",
    a: { bg: "жар", pron: "zjar", nl: "hitte/gloed", em: "🔥" },
    b: { bg: "шар", pron: "sjar", nl: "patroon/bont", em: "🎨" },
    tip: "ж (zj) vs. ш (sj) — stemhebbend vs. stemloos"
  },
  {
    id: "mp16",
    cat: "vowels",
    a: { bg: "сън", pron: "san", nl: "slaap/droom", em: "😴" },
    b: { bg: "син", pron: "sin", nl: "blauw / zoon", em: "🔵" },
    tip: "ъ (a) vs. и (i) — typisch Bulgaarse ъ!"
  },
  {
    id: "mp17",
    cat: "softness",
    a: { bg: "кът", pron: "kat", nl: "hoek/plek", em: "📐" },
    b: { bg: "кат", pron: "kat", nl: "verdieping", em: "🏢" },
    tip: "ъ (a) vs. а (a) — subtiel verschil in Bulgaars!"
  },
  {
    id: "mp18",
    cat: "consonants",
    a: { bg: "вода", pron: "vo-DA", nl: "water", em: "💧" },
    b: { bg: "мода", pron: "MO-da", nl: "mode", em: "👗" },
    tip: "в (v) vs. м (m) — begin-medeklinker"
  },
  {
    id: "mp19",
    cat: "vowels",
    a: { bg: "ден", pron: "den", nl: "dag", em: "☀️" },
    b: { bg: "дин", pron: "din", nl: "meloen", em: "🍈" },
    tip: "е (e) vs. и (i) — voorklinkers"
  },
  {
    id: "mp20",
    cat: "consonants",
    a: { bg: "лов", pron: "lov", nl: "jacht", em: "🏹" },
    b: { bg: "лос", pron: "los", nl: "eland", em: "🫎" },
    tip: "в (v) vs. с (s) — eind-medeklinker"
  }
];

var MINPAIR_CATS = [
  { id: "all", name: "Alles", em: "🎧" },
  { id: "vowels", name: "Klinkers", em: "🔤" },
  { id: "consonants", name: "Medeklinkers", em: "🗣️" },
  { id: "softness", name: "Hard/Zacht", em: "🎭" }
];

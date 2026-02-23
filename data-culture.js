// Bulgaars Leren — data-culture.js

var CULTURE_PAGES=[
  {id:"eten",title:"Bulgaars Eten",em:"\u{1f372}",items:[
    {t:"\u0411\u0430\u043d\u0438\u0446\u0430 (Banitsa)",d:"Filodeeg met kaas, het nationale ontbijt. Op Nieuwjaarsdag zit er een geluksmuntje in!"},
    {t:"\u0428\u043e\u043f\u0441\u043a\u0430 \u0441\u0430\u043b\u0430\u0442\u0430 (Shopska salade)",d:"Tomaten, komkommers, paprika en witte kaas. De kleuren van de Bulgaarse vlag!"},
    {t:"\u041a\u0435\u0431\u0430\u043f\u0447\u0435\u0442\u0430 (Kebapcheta)",d:"Gegrilde gehaktrolletjes, het populairste BBQ-gerecht."},
    {t:"\u0422\u0430\u0440\u0430\u0442\u043e\u0440 (Tarator)",d:"Koude yoghurtsoep met komkommer, perfect voor de zomer!"},
    {t:"\u041b\u044e\u0442\u0435\u043d\u0438\u0446\u0430 (Ljutenitsa)",d:"Paprikaspread die iedereen zelf maakt in de herfst."},
    {t:"\u041a\u0438\u0441\u0435\u043b\u043e \u043c\u043b\u044f\u043a\u043e (Yoghurt)",d:"Bulgaarse yoghurt is wereldberoemd! De bacterie heet Lactobacillus bulgaricus."}
  ]},
  {id:"muziek",title:"Bulgaarse Muziek",em:"\u{1f3b5}",items:[
    {t:"Bulgaarse Volksmuziek",d:"Bekend om complexe ritmes (7/8, 11/8) die je nergens anders vindt. UNESCO erfgoed!"},
    {t:"De Gaida (Doedelzak)",d:"Het traditionele instrument van de herders in de Rhodopen bergen."},
    {t:"Le Myst\u00e8re des Voix Bulgares",d:"Het beroemde vrouwenkoor dat Grammy Awards heeft gewonnen."},
    {t:"Horo",d:"De traditionele kringdans. Iedereen danst samen, hand in hand!"},
    {t:"Chalga",d:"Moderne Bulgaarse popmuziek. Heel populair bij feestjes!"}
  ]},
  {id:"tradities",title:"Tradities",em:"\u{1f3ad}",items:[
    {t:"Martenitsa (1 maart)",d:"Rode en witte armbandjes die je draagt tot je een ooievaar ziet. Symbool van lente!"},
    {t:"Kukeri",d:"Mannen in enge maskers met bellen die de winter verjagen. Heel indrukwekkend!"},
    {t:"Nestinari (Vuurdansers)",d:"Dansen op gloeiende kolen! Een eeuwenoude traditie in Strandja."},
    {t:"Rozenfestival (Kazanlak)",d:"Bulgarije maakt 85% van de rozeolie in de wereld. Elk jaar een groot festival!"},
    {t:"Naamdag",d:"In Bulgarije vier je niet alleen je verjaardag maar ook je naamdag!"}
  ]},
  {id:"natuur",title:"Natuur",em:"\u{1f3d4}\ufe0f",items:[
    {t:"De Zwarte Zee",d:"Prachtige stranden aan de oostkust. Populaire vakantiebestemming!"},
    {t:"Pirin Gebergte",d:"UNESCO erfgoed met eeuwenoude bossen en de oudste boom van Bulgarije (1300 jaar!)."},
    {t:"De Rhodopen",d:"Mysterieuze bergen vol grotten, legenden en het land van Orpheus."},
    {t:"Het Rozendal",d:"Tussen twee bergketens, waar miljoenen rozen groeien voor rozeolie."},
    {t:"De Donau",d:"De noordgrens van Bulgarije, met unieke natuur en pelikanen."}
  ]}
];

var SONGS=[
  {id:"abc",title:"\u0410\u0411\u0412 (\u0410\u0437\u0431\u0443\u043a\u0430)",titleNl:"Het Alfabet Lied",em:"\u{1f3b6}",
   lines:[
    {bg:"\u0410, \u0411, \u0412, \u0413, \u0414, \u0415, \u0416",nl:"A, B, V, G, D, E, Zj"},
    {bg:"\u0417, \u0418, \u0419, \u041a, \u041b, \u041c, \u041d",nl:"Z, I, J, K, L, M, N"},
    {bg:"\u041e, \u041f, \u0420, \u0421, \u0422, \u0423",nl:"O, P, R, S, T, Oe"},
    {bg:"\u0424, \u0425, \u0426, \u0427, \u0428, \u0429",nl:"F, Ch, Ts, Tsj, Sj, Sjt"},
    {bg:"\u042a, \u042c, \u042e, \u042f",nl:"Uh, Zacht, Joe, Ja"},
    {bg:"\u0422\u043e\u0432\u0430 \u0435 \u0430\u0437\u0431\u0443\u043a\u0430\u0442\u0430!",nl:"Dat is het alfabet!"}
  ]},
  {id:"pit",title:"\u041f\u0438\u043b\u0435\u043d\u0446\u0435",titleNl:"Kuikentje",em:"\u{1f425}",
   lines:[
    {bg:"\u041f\u0438\u043b\u0435\u043d\u0446\u0435 \u043c\u0430\u043b\u043a\u043e,",nl:"Klein kuikentje,"},
    {bg:"\u0436\u044a\u043b\u0442\u043e, \u043a\u0440\u044a\u0433\u043b\u043e,",nl:"geel, rond,"},
    {bg:"\u0442\u0438\u0447\u0430 \u0432 \u0434\u0432\u043e\u0440\u0430,",nl:"rent in de tuin,"},
    {bg:"\u0442\u044a\u0440\u0441\u0438 \u0437\u044a\u0440\u043d\u043e.",nl:"zoekt een graan."},
    {bg:"\u041f\u0438\u044e, \u043f\u0438\u044e, \u043f\u0438\u044e!",nl:"Piep, piep, piep!"}
  ]},
  {id:"kal",title:"\u041a\u0440\u0430\u0441\u0442\u0430\u0432\u0438\u0447\u043a\u043e",titleNl:"Komkommertje",em:"\u{1f952}",
   lines:[
    {bg:"\u041a\u0440\u0430\u0441\u0442\u0430\u0432\u0438\u0447\u043a\u043e \u0437\u0435\u043b\u0435\u043d,",nl:"Groen komkommertje,"},
    {bg:"\u0432 \u0433\u0440\u0430\u0434\u0438\u043d\u043a\u0430\u0442\u0430 \u0440\u0430\u0441\u0442\u0435,",nl:"groeit in de tuin,"},
    {bg:"\u0441\u043b\u044a\u043d\u0446\u0435\u0442\u043e \u0433\u043e \u0433\u043b\u0435\u0434\u0430,",nl:"de zon kijkt ernaar,"},
    {bg:"\u0434\u044a\u0436\u0434\u044a\u0442 \u0433\u043e \u043f\u043e\u043b\u0438\u0432\u0430.",nl:"de regen begiet het."},
    {bg:"\u0420\u0430\u0441\u0442\u0435 \u0432\u0441\u0435\u043a\u0438 \u0434\u0435\u043d!",nl:"Het groeit elke dag!"}
  ]}
];

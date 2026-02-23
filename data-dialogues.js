// Bulgaars Leren — data-dialogues.js

var DIALOGUES=[
{id:"d1",title:"Bij oma thuis",em:"\u{1f475}",steps:[
{speaker:"oma",bg:"\u0417\u0434\u0440\u0430\u0432\u0435\u0439, \u0441\u043a\u044a\u043f\u0438!",nl:"Hallo, lieverd!"},
{speaker:"kid",bg:"",nl:"Begroet oma terug",choices:[
  {bg:"\u0417\u0434\u0440\u0430\u0432\u0435\u0439, \u0431\u0430\u0431\u043e!",nl:"Hallo, oma!",ok:true},
  {bg:"\u0414\u043e\u0432\u0438\u0436\u0434\u0430\u043d\u0435!",nl:"Tot ziens!",ok:false},
  {bg:"\u041b\u0435\u043a\u0430 \u043d\u043e\u0449!",nl:"Welterusten!",ok:false}]},
{speaker:"oma",bg:"\u041a\u0430\u043a \u0441\u0438?",nl:"Hoe gaat het?"},
{speaker:"kid",bg:"",nl:"Zeg dat het goed gaat",choices:[
  {bg:"\u0414\u043e\u0431\u0440\u0435 \u0441\u044a\u043c!",nl:"Goed met mij!",ok:true},
  {bg:"\u041d\u0435 \u0437\u043d\u0430\u043c",nl:"Ik weet het niet",ok:false},
  {bg:"\u0413\u043b\u0430\u0434\u0435\u043d \u0441\u044a\u043c",nl:"Ik heb honger",ok:false}]},
{speaker:"oma",bg:"\u0418\u0441\u043a\u0430\u0448 \u043b\u0438 \u0431\u0430\u043d\u0438\u0446\u0430?",nl:"Wil je banitsa?"},
{speaker:"kid",bg:"",nl:"Zeg ja alsjeblieft",choices:[
  {bg:"\u0414\u0430, \u043c\u043e\u043b\u044f!",nl:"Ja, alsjeblieft!",ok:true},
  {bg:"\u041d\u0435, \u043c\u0435\u0440\u0441\u0438",nl:"Nee, dankjewel",ok:false},
  {bg:"\u041a\u0430\u043a\u0432\u043e \u0435 \u0442\u043e\u0432\u0430?",nl:"Wat is dat?",ok:false}]},
{speaker:"oma",bg:"\u041c\u043d\u043e\u0433\u043e \u0432\u043a\u0443\u0441\u043d\u043e!",nl:"Heel lekker!"},
{speaker:"kid",bg:"",nl:"Zeg dankjewel",choices:[
  {bg:"\u041c\u0435\u0440\u0441\u0438, \u0431\u0430\u0431\u043e!",nl:"Dankjewel, oma!",ok:true},
  {bg:"\u041e\u0449\u0435 \u0435\u0434\u043d\u043e",nl:"Nog eentje",ok:false},
  {bg:"\u041d\u0435 \u043c\u0438 \u0445\u0430\u0440\u0435\u0441\u0432\u0430",nl:"Ik vind het niet lekker",ok:false}]}
]},
{id:"d2",title:"In het park",em:"\u{1f333}",steps:[
{speaker:"oma",bg:"\u0425\u0430\u0439\u0434\u0435 \u043d\u0430 \u043f\u0430\u0440\u043a\u0430!",nl:"Laten we naar het park gaan!"},
{speaker:"kid",bg:"",nl:"Zeg dat je dat leuk vindt",choices:[
  {bg:"\u0414\u0430, \u0441\u0442\u0440\u0430\u0445\u043e\u0442\u043d\u043e!",nl:"Ja, geweldig!",ok:true},
  {bg:"\u041d\u0435 \u0438\u0441\u043a\u0430\u043c",nl:"Ik wil niet",ok:false},
  {bg:"\u0423\u043c\u043e\u0440\u0435\u043d \u0441\u044a\u043c",nl:"Ik ben moe",ok:false}]},
{speaker:"oma",bg:"\u0412\u0438\u0436 \u043a\u0430\u043a\u0432\u043e \u0445\u0443\u0431\u0430\u0432\u043e \u0432\u0440\u0435\u043c\u0435!",nl:"Kijk wat mooi weer!"},
{speaker:"kid",bg:"",nl:"Zeg dat de zon schijnt",choices:[
  {bg:"\u0421\u043b\u044a\u043d\u0446\u0435\u0442\u043e \u0433\u0440\u0435\u0435!",nl:"De zon schijnt!",ok:true},
  {bg:"\u0412\u0430\u043b\u0438 \u0434\u044a\u0436\u0434",nl:"Het regent",ok:false},
  {bg:"\u0421\u0442\u0443\u0434\u0435\u043d\u043e \u0435",nl:"Het is koud",ok:false}]},
{speaker:"oma",bg:"\u0418\u0441\u043a\u0430\u0448 \u043b\u0438 \u0441\u043b\u0430\u0434\u043e\u043b\u0435\u0434?",nl:"Wil je een ijsje?"},
{speaker:"kid",bg:"",nl:"Zeg ja en bedank oma",choices:[
  {bg:"\u0414\u0430, \u043c\u0435\u0440\u0441\u0438!",nl:"Ja, dankjewel!",ok:true},
  {bg:"\u041d\u0435 \u0438\u0441\u043a\u0430\u043c",nl:"Ik wil niet",ok:false},
  {bg:"\u041a\u043e\u043b\u043a\u043e \u0441\u0442\u0440\u0443\u0432\u0430?",nl:"Hoeveel kost het?",ok:false}]}
]},
{id:"d3",title:"Bellen met oma",em:"\u{1f4de}",steps:[
{speaker:"oma",bg:"\u0410\u043b\u043e? \u041a\u043e\u0439 \u0435?",nl:"Hallo? Wie is het?"},
{speaker:"kid",bg:"",nl:"Zeg wie je bent",choices:[
  {bg:"\u0410\u0437 \u0441\u044a\u043c, \u0431\u0430\u0431\u043e!",nl:"Ik ben het, oma!",ok:true},
  {bg:"\u0417\u0434\u0440\u0430\u0432\u0435\u0439\u0442\u0435",nl:"Goedendag (formeel)",ok:false},
  {bg:"\u041d\u0435 \u0437\u043d\u0430\u043c",nl:"Ik weet het niet",ok:false}]},
{speaker:"oma",bg:"\u041e, \u0441\u043a\u044a\u043f\u0438! \u041a\u0430\u043a\u0432\u043e \u043f\u0440\u0430\u0432\u0438\u0448?",nl:"Oh, lieverd! Wat doe je?"},
{speaker:"kid",bg:"",nl:"Zeg dat je leert",choices:[
  {bg:"\u0423\u0447\u0430 \u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438!",nl:"Ik leer Bulgaars!",ok:true},
  {bg:"\u0418\u0433\u0440\u0430\u044f",nl:"Ik speel",ok:false},
  {bg:"\u0421\u043f\u044f",nl:"Ik slaap",ok:false}]},
{speaker:"oma",bg:"\u0411\u0440\u0430\u0432\u043e! \u041e\u0431\u0438\u0447\u0430\u043c \u0442\u0435!",nl:"Goed zo! Ik hou van je!"},
{speaker:"kid",bg:"",nl:"Zeg dat je ook van oma houdt",choices:[
  {bg:"\u0418 \u0430\u0437 \u0442\u0435 \u043e\u0431\u0438\u0447\u0430\u043c!",nl:"Ik hou ook van jou!",ok:true},
  {bg:"\u0414\u043e\u0432\u0438\u0436\u0434\u0430\u043d\u0435!",nl:"Tot ziens!",ok:false},
  {bg:"\u041c\u0435\u0440\u0441\u0438",nl:"Dankjewel",ok:false}]}
]}
];

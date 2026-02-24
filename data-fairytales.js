// Bulgaars Leren — data-fairytales.js
var FAIRYTALES=[
  {
    id:"ft1",
    title:"Хитрият Петър",
    titleNl:"De Slimme Petrus",
    em:"🎭",
    level:"Beginner",
    interactive:true,
    scenes:[
      {
        id:"start",
        text:{
          bg:"Един млад момък се казваше Петър. Петър беше много хитър. Той работеше на голямо имение. Един ден господарят каза: 'Петър, тази ноч дойде разбойник на имението!'",
          nl:"Een jonge man heette Petrus. Petrus was erg slim. Hij werkte op een groot landgoed. Op een dag zei de heer: 'Petrus, vannacht komt er een bandiet naar het landgoed!'"
        },
        choices:[
          {text:{bg:"Петър каза: 'Не се страхувам! Ще го изхитря!'", nl:"Petrus zei: 'Ik ben niet bang! Ik zal hem slim overlistten!'"}, next:"scene2a"},
          {text:{bg:"Петър попита: 'Колко злато има в касата?'", nl:"Petrus vroeg: 'Hoeveel goud is er in de kist?'"}, next:"scene2b"}
        ]
      },
      {
        id:"scene2a",
        text:{
          bg:"Петър взе един голям сак и го напълни със сламa и камъни. После легна в леглото на господаря и чака разбойника.",
          nl:"Petrus nam een grote zak en vulde hem met stro en stenen. Toen ging hij in het bed van de heer liggen en wachtte op de bandiet."
        },
        choices:[
          {text:{bg:"Разбойникът дойде и видя Петър спящ.", nl:"De bandiet kwam en zag Petrus slapen."}, next:"scene3"}
        ]
      },
      {
        id:"scene2b",
        text:{
          bg:"Господарят отговори: 'Много злато! Защо питаш?' Петър улисна и каза: 'Имам идея.' Той направи един план.",
          nl:"De heer antwoordde: 'Veel goud! Waarom vraag je?' Petrus glimlachte en zei: 'Ik heb een idee.' Hij maakte een plan."
        },
        choices:[
          {text:{bg:"Петър взе един сак със злато и скри го.", nl:"Petrus nam een zak met goud en verstopte het."}, next:"scene3"}
        ]
      },
      {
        id:"scene3",
        text:{
          bg:"Когато разбойникът вле в стаята, той видя хубавото легло и сака. Той дума: 'Това е много добро! Ще го крада!'",
          nl:"Toen de bandiet de kamer in sloop, zag hij het mooie bed en de zak. Hij dacht: 'Dit is heel goed! Ik zal het stelen!'"
        },
        choices:[
          {text:{bg:"Петър хванал разбойника и викнал: 'Стой! Аз съм тук!'", nl:"Petrus greep de bandiet vast en riep: 'Halt! Ik ben hier!'"}, next:"scene4a"},
          {text:{bg:"Разбойникът се наклони да вземе сака.", nl:"De bandiet bukte zich om de zak te pakken."}, next:"scene4b"}
        ]
      },
      {
        id:"scene4a",
        text:{
          bg:"Разбойникът се страхуваше и тичаше навън от стаята. Петър гонеше разбойника из целия дом. Разбойникът попада в капана с мрежа!",
          nl:"De bandiet was bang en rende de kamer uit. Petrus achtervolgde de bandiet door het hele huis. De bandiet liep in de valstrik!"
        },
        choices:[
          {text:{bg:"Петър викнал на господаря.", nl:"Petrus riep de heer."}, next:"ending1"}
        ]
      },
      {
        id:"scene4b",
        text:{
          bg:"Щом разбойникът дотука сака, от него излезол един дом глас: 'БУУ!' Петър скокна от леглото и направи огромен шум. Разбойникът се уплаши ужасно!",
          nl:"Toen de bandiet de zak pakte, kwam er een enorm geluid: 'BOOE!' Petrus sprong uit bed en maakte veel lawaai. De bandiet was erg bang!"
        },
        choices:[
          {text:{bg:"Разбойникът тичаше из стаята и падна.", nl:"De bandiet rende door de kamer en viel."}, next:"ending2"}
        ]
      },
      {
        id:"ending1",
        text:{
          bg:"Господарят хвана разбойника и го даде на полицията. Петър беше герой! Все хората казваха: 'Петър е много хитър!' Той получи голямо награда.",
          nl:"De heer ving de bandiet en gaf hem aan de politie. Petrus was een held! Iedereen zei: 'Petrus is erg slim!' Hij kreeg een groot beloning."
        },
        end:true
      },
      {
        id:"ending2",
        text:{
          bg:"Разбойникът се удари и не се движеше. Петър го свързал с въже. Господарят каза: 'Петър, ти си най-добрия мой слуга! Ще те направя управител!'",
          nl:"De bandiet raakte gewond en bewoog niet. Petrus bond hem vast met touw. De heer zei: 'Petrus, jij bent mijn beste bediende! Ik maak je tot opzichter!'"
        },
        end:true
      }
    ]
  },

  {
    id:"ft2",
    title:"Златната ябълка",
    titleNl:"De Gouden Appel",
    em:"🍎",
    level:"Beginner",
    interactive:true,
    scenes:[
      {
        id:"start",
        text:{
          bg:"Един цар имаше болна дъщеря. Врачът каза: 'Тя има нужда от една особена ябълка. Това е Златната ябълка от краят на света. Само тя может да я оздрави.'",
          nl:"Een koning had een zieke dochter. De dokter zei: 'Ze heeft een bijzondere appel nodig. Dit is de Gouden Appel van het einde van de wereld. Alleen die kan haar genezen.'"
        },
        choices:[
          {text:{bg:"Най-големия син каза: 'Ще отида!'", nl:"De oudste zoon zei: 'Ik zal gaan!'"}, next:"scene2a"},
          {text:{bg:"Най-малкия син каза: 'Ние всички трябва да отидем!'", nl:"De jongste zoon zei: 'We moeten allemaal gaan!'"}, next:"scene2b"}
        ]
      },
      {
        id:"scene2a",
        text:{
          bg:"Най-големия син взе коня и тръгна в пътешествие. След два дни той видя един стар човек на пътя. Старецът каза: 'Млад момче, къде отиваш?'",
          nl:"De oudste zoon nam het paard en begon aan zijn reis. Na twee dagen zag hij een oude man op de weg. De oude man zei: 'Jonge jongen, waar ga je heen?'"
        },
        choices:[
          {text:{bg:"Синът каза: 'Не е твое дело!' и отлетя бързо.", nl:"De zoon zei: 'Dat gaat je niets aan!' en reed snel weg."}, next:"scene3a"},
          {text:{bg:"Синът попита: 'Можеш ли да ми помогнеш?'", nl:"De zoon vroeg: 'Kun je me helpen?'"}, next:"scene3b"}
        ]
      },
      {
        id:"scene2b",
        text:{
          bg:"Най-малкия син и неговите братя подготвиха három коня и храна. Те отидоха заедно в дълъг път към края на света.",
          nl:"De jongste zoon en zijn broers bereidden drie paarden en voedsel voor. Ze gingen samen op een lange reis naar het einde van de wereld."
        },
        choices:[
          {text:{bg:"След дни те дойдоха до един град.", nl:"Na enkele dagen kwamen ze bij een stad aan."}, next:"scene3c"}
        ]
      },
      {
        id:"scene3a",
        text:{
          bg:"Синът пътуваше сам, но загубил пътя. Той заблудился в гората и вече не знаеше къде е. После той видя един замък черен и страшен.",
          nl:"De zoon reisde alleen, maar verloor zijn weg. Hij verdwaalde in het bos en wist niet meer waar hij was. Toen zag hij een zwart en eng kasteel."
        },
        choices:[
          {text:{bg:"Той влезе в замъка.", nl:"Hij betrad het kasteel."}, next:"ending1"}
        ]
      },
      {
        id:"scene3b",
        text:{
          bg:"Старецът беше много мъдър. Той каза на синът: 'Поеди с мене! Ще ти дам магична карта.' Той даде карта на синът.",
          nl:"De oude man was erg wijs. Hij zei tegen de zoon: 'Kom met me mee! Ik geef je een magische kaart.' Hij gaf een kaart aan de zoon."
        },
        choices:[
          {text:{bg:"Синът благодари и последва старецът.", nl:"De zoon bedankte en volgde de oude man."}, next:"ending3"}
        ]
      },
      {
        id:"scene3c",
        text:{
          bg:"В град те се встретиха със един магьосник. Магьосникът каза: 'Вие търсите Златната ябълка? Аз знам къде е, но първо решете една загадка!'",
          nl:"In de stad ontmoetten ze een tovenaar. De tovenaar zei: 'Jullie zoeken de Gouden Appel? Ik weet waar die is, maar eerst moeten jullie een raadsel oplossen!'"
        },
        choices:[
          {text:{bg:"Братята решиха загадката заедно.", nl:"De broers losten het raadsel samen op."}, next:"ending4"}
        ]
      },
      {
        id:"ending1",
        text:{
          bg:"В черния замък той видя много други момчета. Те всички търсеха Златната ябълка, но замъкът ги държаше пленници. Синът не намери ябълката и се върна болен.",
          nl:"In het zwarte kasteel zag hij veel andere jongens. Ze zochten allemaal de Gouden Appel, maar het kasteel hield hen gevangen. De zoon vond de appel niet en keerde ziek terug."
        },
        end:true
      },
      {
        id:"ending3",
        text:{
          bg:"Старецът го отведе при Баба Яга, която беше добра мъдра жена. Тя даде на синът Златната ябълка! Синът се върна и неговата сестра се оздрави. То е добър край.",
          nl:"De oude man bracht hem naar Baba Yaga, die een goede wijze vrouw was. Ze gaf de gouden appel aan de zoon! Hij keerde terug en zijn zus werd beter. Gelukkig einde."
        },
        end:true
      },
      {
        id:"ending4",
        text:{
          bg:"Магьосникът беше доволен от техния отговор. Той им показа път към Златната ябълка. Братята намериха ябълката под един голям дъб. Те се върнаха домой и техния сестра се оздрави!",
          nl:"De tovenaar was blij met hun antwoord. Hij toonde hun de weg naar de Gouden Appel. De broers vonden de appel onder een grote eik. Ze keerden thuis terug en hun zus werd beter!"
        },
        end:true
      }
    ]
  },

  {
    id:"ft3",
    title:"Косе Босе",
    titleNl:"Kose Bose de Spreeuw",
    em:"🐦",
    level:"Beginner",
    interactive:true,
    scenes:[
      {
        id:"start",
        text:{
          bg:"Едно време имаше един момченце по име Косе Босе. Той имаше един верен приятел - черната птица. Птицата му помагаше всеки ден.",
          nl:"Er was eens een jongetje genaamd Kose Bose. Hij had één trouw vriend - de zwarte vogel. De vogel hielp hem elke dag."
        },
        choices:[
          {text:{bg:"Един ден, един горд господин дойде в село.", nl:"Één dag kwam een trotse heer naar het dorp."}, next:"scene2"}
        ]
      },
      {
        id:"scene2",
        text:{
          bg:"Господинът имаше един син. Синът каза: 'Аз съм по-силен от всички! Ще доказам това.' И той удари Косе Босе в лицето.",
          nl:"De heer had een zoon. De zoon zei: 'Ik ben sterker dan iedereen! Ik zal dat bewijzen.' En hij sloeg Kose Bose in het gezicht."
        },
        choices:[
          {text:{bg:"Косе Босе начина да плача.", nl:"Kose Bose begon te huilen."}, next:"scene3a"},
          {text:{bg:"Косе Босе не каза нищо, но черната птица полетя.", nl:"Kose Bose zei niets, maar de zwarte vogel vloog weg."}, next:"scene3b"}
        ]
      },
      {
        id:"scene3a",
        text:{
          bg:"Черната птица видя Косе Босе с суши очи и се ядоса. Птицата полетя към замъка на господина и начина да издава странни звуци: 'Крииик! Крииик!'",
          nl:"De zwarte vogel zag Kose Bose met natte ogen en werd boos. De vogel vloog naar het kasteel van de heer en begon vreemde geluiden te maken: 'Kraai! Kraai!'"
        },
        choices:[
          {text:{bg:"Господинът слушаше птицата.", nl:"De heer luisterde naar de vogel."}, next:"scene4"}
        ]
      },
      {
        id:"scene3b",
        text:{
          bg:"Птицата полетя към замъка и начина да поет красиво. Всички в замъка слушаха. Синът на господина слушаше и понимаше, че е направил лошо нещо.",
          nl:"De vogel vloog naar het kasteel en begon mooi te zingen. Iedereen in het kasteel luisterde. De zoon van de heer hoorde en begreep dat hij iets slechts had gedaan."
        },
        choices:[
          {text:{bg:"Синът на господина излезе от замъка.", nl:"De zoon van de heer verliet het kasteel."}, next:"scene4"}
        ]
      },
      {
        id:"scene4",
        text:{
          bg:"Синът на господина дойде при Косе Босе и каза: 'Съжалявам! Бях груб. Можеш ли да ми простиш?' Косе Босе кимна с главата.",
          nl:"De zoon van de heer kwam naar Kose Bose en zei: 'Spijt me! Ik was ruw. Kun je me vergeven?' Kose Bose knikte met zijn hoofd."
        },
        choices:[
          {text:{bg:"Двете момчета станаха добри приятели.", nl:"De twee jongens werden goede vrienden."}, next:"ending1"},
          {text:{bg:"Черната птица начина отново да поет красиво.", nl:"De zwarte vogel begon opnieuw mooi te zingen."}, next:"ending2"}
        ]
      },
      {
        id:"ending1",
        text:{
          bg:"От този ден нататък, Косе Босе и синът на господина играха всеки ден. Черната птица леташе над тях и пееше. То беше красиво приятелство между трима.",
          nl:"Van die dag af speelden Kose Bose en de zoon van de heer elke dag. De zwarte vogel vloog boven hen en zong. Het was een mooie vriendschap tussen drieën."
        },
        end:true
      },
      {
        id:"ending2",
        text:{
          bg:"Синът на господина слушаше птицата и разбра че синът е тънък като музиката. От този ден той бе много мил към Косе Босе и чуваше пътя на добротата.",
          nl:"De zoon van de heer luisterde naar de vogel en begreep dat vriendelijkheid mooier is dan hardheid. Van die dag af was hij aardig voor Kose Bose en volgde het pad van goedheid."
        },
        end:true
      }
    ]
  },

  {
    id:"ft4",
    title:"Дядо и ряпа",
    titleNl:"Opa en de Reuzerui",
    em:"🥬",
    level:"Beginner",
    interactive:true,
    scenes:[
      {
        id:"start",
        text:{
          bg:"Един стар дядо засаді голяма ряпа в градина. Той я поливаше всеки ден с вода. През пролетта и летото ряпата растеше, растеше, растеше. Тя станала огромна!",
          nl:"Een oude opa plantte een grote rui in de tuin. Hij goot hem elke dag met water. In het voorjaar en de zomer groeide de rui, en groeide, en groeide. Hij werd enorm groot!"
        },
        choices:[
          {text:{bg:"Един ден дядо каза: 'Е, сега ще дърпа ряпата!'", nl:"Op een dag zei opa: 'Nu zal ik de rui eruit trekken!'"}, next:"scene2"}
        ]
      },
      {
        id:"scene2",
        text:{
          bg:"Дядо взе листата на ряпата и начина да дърпа. 'Ддддрр! Ддддрр!' Но ряпата не излезе. Тя беше твърде голяма и тежка!",
          nl:"Opa pakte de bladeren van de rui vast en begon te trekken. 'Treeeek! Treeeek!' Maar de rui kwam niet los. Het was te groot en te zwaar!"
        },
        choices:[
          {text:{bg:"Дядо позвa баба си.", nl:"Opa riep zijn oma."}, next:"scene3a"},
          {text:{bg:"Дядо позвa съседката си.", nl:"Opa riep zijn buurvrouw."}, next:"scene3b"}
        ]
      },
      {
        id:"scene3a",
        text:{
          bg:"Баба дойде и се хвана от дядо. Баба дърпа дядо, дядо дърпа ряпата. 'Хай, хай, хай!' Но ряпата още не излезе!",
          nl:"Oma kwam en greep opa vast. Oma trok aan opa, opa trok aan de rui. 'Hee, hee, hee!' Maar de rui kwam nog niet los!"
        },
        choices:[
          {text:{bg:"Баба позва внука си, малката Маша.", nl:"Oma riep haar kleindochter, kleine Masha."}, next:"scene4"}
        ]
      },
      {
        id:"scene3b",
        text:{
          bg:"Съседката дойде и се хвана от дядо. Те всички дърпаха заедно. 'Ха! Ха! Ха!' Но ряпата беше твърде силна!",
          nl:"De buurvrouw kwam en greep opa vast. Ze trokken allemaal samen. 'Ha! Ha! Ha!' Maar de rui was te sterk!"
        },
        choices:[
          {text:{bg:"Съседката позва своя дъщеря.", nl:"De buurvrouw riep haar dochter."}, next:"scene4"}
        ]
      },
      {
        id:"scene4",
        text:{
          bg:"Маша беше малко момиче, но беше енергична! Тя се хвана от баба и казала: 'Ще помогна!' Всички дърпаха: дядо, баба, Маша и съседката. 'Един, два, ТРИ!'",
          nl:"Masha was een klein meisje, maar vol energie! Ze greep oma vast en zei: 'Ik zal helpen!' Ze trokken allemaal: opa, oma, Masha en de buurvrouw. 'Een, twee, DRIE!'"
        },
        choices:[
          {text:{bg:"Ръпата излезе с огромна БУММ!", nl:"De rui kwam los met een enorme BOEM!"}, next:"ending1"},
          {text:{bg:"Маша позва и кучето си.", nl:"Masha riep ook haar hondje."}, next:"ending2"}
        ]
      },
      {
        id:"ending1",
        text:{
          bg:"Ряпата излезе с такава сила че всички падаха назад на земята! 'БАХХХХХХ!' Но всички беше добре. Те реше рая на парчета и направи супа за всички. Беше най-добрата супа!",
          nl:"De rui kwam los met zoveel kracht dat iedereen achterover op de grond viel! 'BOEM!' Maar iedereen was oké. Ze sneden de rui in stukken en maakten soep voor iedereen. Het was de beste soep!"
        },
        end:true
      },
      {
        id:"ending2",
        text:{
          bg:"Малкото куче Батко се хвана от Маша! 'Хав, хав!' викаше Батко. С кучето помощ, ряпата излезе лесно! 'Ура!' крещеше всички. Те направиха хубава супа и я поделиха с кучето.",
          nl:"Het kleine hondje Batko greep Masha vast! 'Waf, waf!' blafde Batko. Met hulp van het hondje kwam de rui gemakkelijk los! 'Hoera!' riepen allemaal. Ze maakten soep en deelden die met het hondje."
        },
        end:true
      }
    ]
  },

  {
    id:"ft5",
    title:"Назлъм Горанов",
    titleNl:"Nazlam de Dappere",
    em:"⚔️",
    level:"Beginner",
    interactive:true,
    scenes:[
      {
        id:"start",
        text:{
          bg:"Давно имаше един млад момче по име Назлъм. Той беше смел и бравартист. В планините, над селото, живеше един страшен дракон. Дракончиката беше черна и огромна.",
          nl:"Er was eens een dappere jongen genaamd Nazlam. Hij was moedig en sterk. In de bergen, boven het dorp, woonde een verschrikkelijke draak. De draak was zwart en enorm groot."
        },
        choices:[
          {text:{bg:"Дракончиката украде животните на селата.", nl:"De draak stal de dieren van het dorp."}, next:"scene2"}
        ]
      },
      {
        id:"scene2",
        text:{
          bg:"Дракончиката взе козите, овцете и кравите. Всички в село плачеха. Старешинават на село каза: 'Кой ще спаси нас?' Назлъм чу това и каза: 'Аз ще отида!'",
          nl:"De draak nam de geiten, schapen en koeien. Iedereen in het dorp huilde. De dorpsoudste zei: 'Wie zal ons redden?' Nazlam hoorde dit en zei: 'Ik zal gaan!'"
        },
        choices:[
          {text:{bg:"Назлъм взе един мач и щит.", nl:"Nazlam nam een zwaard en een schild."}, next:"scene3a"},
          {text:{bg:"Назлъм попита старца за съвет.", nl:"Nazlam vroeg de ouderling om advies."}, next:"scene3b"}
        ]
      },
      {
        id:"scene3a",
        text:{
          bg:"Назлъм взе железни оръжия и тръгна към гората. Той се качи на висока планина. До върхът на планината видя пещера, черна и дълбока.",
          nl:"Nazlam nam ijzeren wapens en ging naar het bos. Hij klom op een hoge berg. Bij de top van de berg zag hij een grot, zwart en diep."
        },
        choices:[
          {text:{bg:"Той влезе в пещерата.", nl:"Hij betrad de grot."}, next:"scene4"}
        ]
      },
      {
        id:"scene3b",
        text:{
          bg:"Старецът беше мъдър. Той каза: 'Дракончиката е опасна, но имa една слабост. През нощта той спи. През ден той летал. Ако го удариш през нощта, той е незащитен!'",
          nl:"De ouderling was wijs. Hij zei: 'De draak is gevaarlijk, maar heeft één zwakheid. 's Nachts slaapt hij. Overdag vliegt hij. Als je hem 's nachts raakt, is hij zonder verdediging!'"
        },
        choices:[
          {text:{bg:"Назлъм чака нощта.", nl:"Nazlam wachtte tot de nacht."}, next:"scene4"}
        ]
      },
      {
        id:"scene4",
        text:{
          bg:"В пещерата Назлъм видя дракона! Дракончиката спеше. Той имаше огромни крила и острите зъби. Назлъм беше платен, но не се страхуваше.",
          nl:"In de grot zag Nazlam de draak! De draak sliep. Hij had enorme vleugels en scherpe tanden. Nazlam was bang, maar niet doodsbenauwd."
        },
        choices:[
          {text:{bg:"Назлъм удари драконa c мача!", nl:"Nazlam sloeg de draak met het zwaard!"}, next:"scene5a"},
          {text:{bg:"Назлъм разбуди драконa и му говораше.", nl:"Nazlam wekte de draak wakker en sprak met hem."}, next:"scene5b"}
        ]
      },
      {
        id:"scene5a",
        text:{
          bg:"Мачат на Назлъм го удари в крилата на драконa! Дракончиката се разбуди с гнев. 'РРРАААРРРР!' викаше дракончиката. Голямо пламък излезе из неговото уста!",
          nl:"Het zwaard van Nazlam raakte de vleugels van de draak! De draak werd woedend wakker. 'RRRAAARRR!' schreeuwde de draak. Enorme vlammen kwamen uit zijn mond!"
        },
        choices:[
          {text:{bg:"Назлъм прескоча пламък с щит.", nl:"Nazlam sprong over de vlammen met zijn schild."}, next:"ending1"}
        ]
      },
      {
        id:"scene5b",
        text:{
          bg:"Назлъм каза на драконa: 'Защо крадаш животните на село? Те не те направиха лошо нищо!' Дракончиката слушаше. Той беше сам, и той беше тъжен.",
          nl:"Nazlam zei tegen de draak: 'Waarom steel je de dieren van het dorp? Ze hebben je niks kwaads gedaan!' De draak luisterde. Hij was eenzaam en triest."
        },
        choices:[
          {text:{bg:"Дракончиката преи да върни животните.", nl:"De draak beloofde de dieren terug te geven."}, next:"ending2"}
        ]
      },
      {
        id:"ending1",
        text:{
          bg:"После много битка, Назлъм победи драконa! Дракончиката попаде и на земята той станала камък. Животните на село беше спасени! Назлъм се върна домой герой. Все хората викаха: 'Ура за Назлъм!'",
          nl:"Na een lange strijd won Nazlam! De draak viel en werd steen. De dieren van het dorp waren gered! Nazlam keerde thuis als held. Iedereen schreeuwde: 'Hoera voor Nazlam!'"
        },
        end:true
      },
      {
        id:"ending2",
        text:{
          bg:"Дракончиката разбра че той е бил неправеден. Той се врна животните на село. Но той остана в планините и развали приятелство с Назлъм. От този ден нататък, дракончиката пазеше село от лошо и всички беше щастива.",
          nl:"De draak begreep dat hij ongelijk had. Hij gaf de dieren terug aan het dorp. Maar hij bleef in de bergen en werd vrienden met Nazlam. Van die dag af beschermde de draak het dorp en iedereen was blij."
        },
        end:true
      }
    ]
  }
];

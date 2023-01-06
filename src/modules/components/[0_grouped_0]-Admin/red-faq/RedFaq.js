import React from "react";
import Board from 'react-trello'

import "./RedFaq.scss";

const RedFaq = () => {

  const data = {
    lanes: [
      {
        id: 'lane1',
        title: 'Часто задаваемые вопросы.',
        label: '2/50',
        cards: [
          {
            "id": "Card1",
            "title": "Elliott Solis",
            "description": "Sunt excepteur occaecat ullamco aliquip pariatur. Do mollit nostrud esse qui Lorem minim nisi nulla officia veniam aute officia fugiat. Esse exercitation amet minim nulla ad esse sint ullamco. "
          },
          {
            "id": "Card2",
            "title": "Gillespie Bush",
            "description": "Do aute deserunt reprehenderit deserunt nulla incididunt esse enim aliqua dolore ea. Quis elit exercitation aute id. Aliqua laborum eiusmod ex nulla irure fugiat esse commodo fugiat est amet. Veniam tempor pariatur eiusmod qui deserunt. "
          },
          {
            "id": "Card3",
            "title": "Cameron Cruz",
            "description": "Ex tempor eiusmod ad incididunt commodo Lorem laborum eu quis consectetur laborum. Ea occaecat deserunt laborum ullamco sit tempor pariatur irure laborum. Fugiat consequat consequat laborum laboris amet qui aliqua dolor quis quis et. Culpa veniam labore commodo sit voluptate nisi dolore laboris irure incididunt sint sit id excepteur. Ex aliqua exercitation nostrud reprehenderit ipsum commodo reprehenderit aliquip id. Voluptate aliqua in deserunt est nulla. Aute nostrud nisi enim quis ullamco ad ut elit eu eu. "
          },
          {
            "id": "Card4",
            "title": "Linda Porter",
            "description": "Elit do aliqua anim sint ad tempor esse exercitation eu deserunt ipsum sit enim. Incididunt excepteur laborum ex labore id minim et laboris irure enim reprehenderit aliquip enim eu. Voluptate in enim amet officia ad do cupidatat sunt quis. Sint aliqua incididunt cillum aute commodo quis labore non eiusmod tempor labore magna adipisicing elit. Laboris laboris do nulla in laboris nostrud mollit ipsum duis ipsum. "
          },
          {
            "id": "Card5",
            "title": "Bennett Lowery",
            "description": "Sint aute voluptate id eiusmod do id sunt minim. Magna cillum dolor dolor tempor magna esse occaecat incididunt esse labore. Cillum occaecat cillum amet quis eiusmod consequat aliqua veniam ipsum enim. Excepteur mollit veniam aliquip quis. In excepteur aute voluptate non est reprehenderit. Aliqua pariatur duis officia occaecat adipisicing eu. Et eiusmod aliquip esse quis ad ad dolor. "
          },
          {
            "id": "Card6",
            "title": "Valarie Tate",
            "description": "Aliqua velit laborum in adipisicing id. Adipisicing sunt cupidatat sit minim cupidatat occaecat ad. Incididunt eu ut irure adipisicing aute minim incididunt duis ut duis dolore cupidatat. "
          },
          {
            "id": "Card7",
            "title": "Velez Bonner",
            "description": "Laborum esse laboris consectetur esse. Cillum cillum nisi proident proident fugiat adipisicing ullamco consectetur. Voluptate dolor anim laboris ex nisi quis. Quis ullamco amet duis magna reprehenderit Lorem sunt eu excepteur minim magna eiusmod dolor quis. "
          },
          {
            "id": "Card8",
            "title": "Concetta Donovan",
            "description": "Elit et ex amet magna pariatur nostrud deserunt. Laborum incididunt occaecat voluptate et. Pariatur excepteur non exercitation eiusmod deserunt magna velit. In eu esse ut dolor sunt magna ut ea. Aliqua sit sunt do qui qui labore dolor. Aute excepteur duis officia id sit magna velit Lorem laboris dolore duis. "
          },
          {
            "id": "Card9",
            "title": "Celia Huff",
            "description": "Ut tempor voluptate cupidatat quis aute aliquip eiusmod. Ex cupidatat eiusmod enim veniam Lorem. Occaecat cupidatat non exercitation officia nulla dolore sint eu enim duis magna ipsum officia labore. Duis consectetur commodo ea eiusmod deserunt fugiat irure sint incididunt enim non Lorem. Quis ea velit duis irure laboris irure aute proident quis deserunt culpa nostrud et mollit. Dolor voluptate enim ex elit qui reprehenderit aliquip. Anim ipsum excepteur in sint dolore. "
          },
          {
            "id": "Card10",
            "title": "Avis Christian",
            "description": "Commodo eiusmod ullamco occaecat duis velit ea nisi culpa. Exercitation cupidatat ea sunt non adipisicing. Id ipsum ut deserunt eu duis minim cupidatat ut non. Ex velit exercitation occaecat esse ipsum magna sint. Cillum aliquip consequat aliqua officia excepteur officia sunt nostrud esse excepteur est deserunt incididunt. "
          },
          {
            "id": "Card11",
            "title": "Austin Best",
            "description": "Reprehenderit sunt anim eiusmod aute. Excepteur voluptate id aliquip aute nulla exercitation. Aliquip do minim Lorem adipisicing velit laborum esse sit magna ad commodo in. Ut irure qui et tempor qui. Incididunt incididunt labore fugiat nostrud proident enim cillum culpa incididunt amet Lorem officia. Incididunt aute amet minim et quis incididunt ipsum excepteur sit exercitation. Voluptate adipisicing ullamco in aliquip aliquip laboris veniam consequat sit magna voluptate. "
          },
          {
            "id": "Card12",
            "title": "Shana Nolan",
            "description": "Id eiusmod sunt nostrud ipsum nulla nisi est ea enim ullamco. Voluptate velit fugiat commodo do veniam consequat irure reprehenderit pariatur mollit voluptate. Do sint deserunt proident excepteur magna voluptate minim exercitation. Incididunt amet ut consequat aute proident incididunt adipisicing. "
          },
          {
            "id": "Card13",
            "title": "Effie Michael",
            "description": "Ipsum ad in sint officia officia non ea deserunt id deserunt ea et incididunt excepteur. Aute veniam cupidatat laborum esse laborum proident adipisicing cillum. Incididunt nisi irure nisi officia cillum dolor. Consequat exercitation ullamco aliqua do laboris ex. Anim anim irure proident non tempor consectetur ea eiusmod est. Ut proident ullamco tempor id exercitation adipisicing commodo. "
          },
          {
            "id": "Card14",
            "title": "Matilda Riggs",
            "description": "Ea sit reprehenderit aliquip deserunt officia eu dolore ea voluptate ipsum tempor ad voluptate officia. Ad exercitation voluptate mollit qui non minim adipisicing est. Minim cillum aliqua ad sunt irure enim irure magna. Laboris excepteur dolore exercitation incididunt consequat culpa in sint nisi. "
          },
          {
            "id": "Card15",
            "title": "Morris York",
            "description": "Ad cillum incididunt ullamco duis aliquip est nostrud enim et ut. Et pariatur reprehenderit sunt deserunt cupidatat. Aute voluptate officia deserunt exercitation fugiat sit reprehenderit consectetur anim. Pariatur excepteur esse sit velit qui nisi. "
          },
          {
            "id": "Card16",
            "title": "Lea Tyson",
            "description": "Ut amet voluptate labore anim ipsum laborum laborum amet aliquip deserunt elit mollit nostrud. Deserunt minim incididunt aliqua non exercitation ut. Fugiat sint in proident amet ex aliqua consectetur nisi. In fugiat tempor culpa non in eiusmod velit culpa mollit ex consectetur. Irure proident fugiat non Lorem adipisicing incididunt. "
          },
          {
            "id": "Card17",
            "title": "Georgina Nieves",
            "description": "Id aliqua sint aute ut reprehenderit laborum magna tempor fugiat. Tempor aliqua nostrud ipsum occaecat proident veniam aliqua id esse. Elit elit amet aliquip ipsum eu. Ea non sunt ex eu consectetur reprehenderit eu. Amet laborum minim amet do esse sunt labore nisi eiusmod aute veniam excepteur sit mollit. Laboris exercitation dolore exercitation aliqua veniam ullamco excepteur excepteur officia magna culpa eu. Laboris adipisicing officia nulla et amet exercitation. "
          },
          {
            "id": "Card18",
            "title": "Nguyen Tucker",
            "description": "Commodo adipisicing nisi cillum mollit duis laboris dolor amet eu anim laboris mollit dolore. Anim duis laboris et culpa occaecat. Mollit et sit cupidatat elit labore non exercitation qui velit ea exercitation sunt. Consectetur magna aliquip ipsum in sit eu proident tempor excepteur. Enim laborum dolor enim velit anim laborum cillum esse cupidatat aute anim et cillum cupidatat. Est velit irure irure reprehenderit nisi in excepteur nulla eu nostrud eiusmod pariatur duis. "
          },
          {
            "id": "Card19",
            "title": "Holloway Shelton",
            "description": "Dolor anim incididunt occaecat ad voluptate nisi veniam deserunt laboris et do enim culpa nulla. Dolor reprehenderit proident eu reprehenderit. Est nisi eu sit aliquip deserunt eu eu tempor id sit nulla labore. Minim sint ad irure dolor ad tempor do laborum veniam esse commodo dolor consequat. Aute cillum elit in duis aute pariatur esse dolore id mollit adipisicing. "
          },
          {
            "id": "Card20",
            "title": "Mara Morris",
            "description": "Adipisicing laborum amet culpa Lorem anim. Sint reprehenderit exercitation amet sit ullamco nostrud consequat. Excepteur pariatur adipisicing laboris quis ut reprehenderit est amet laboris qui laboris ullamco enim. Ea reprehenderit excepteur enim qui mollit ut. "
          },
          {
            "id": "Card21",
            "title": "Best Cooper",
            "description": "Laboris proident minim deserunt do veniam ea occaecat nostrud exercitation. Ex ullamco occaecat duis esse ea ea. Labore aliqua nulla ut consequat cillum officia est enim adipisicing ut irure proident elit laborum. Magna aliqua quis consequat do incididunt officia irure cupidatat enim proident. "
          },
          {
            "id": "Card22",
            "title": "Brady Watson",
            "description": "Sit tempor Lorem eiusmod ex ullamco amet magna. Proident proident qui pariatur quis excepteur reprehenderit aliqua labore incididunt. Tempor sit voluptate labore dolor et proident non id elit nisi do. Dolor Lorem enim dolor sunt est id laborum fugiat incididunt enim qui ut nulla consequat. "
          },
          {
            "id": "Card23",
            "title": "Deana Sykes",
            "description": "Labore elit est nulla officia magna cillum eiusmod nisi ipsum ullamco quis non labore ipsum. Consectetur amet eiusmod nisi sunt est nulla adipisicing proident ullamco do et commodo est sint. Adipisicing excepteur do ex excepteur anim nostrud do amet anim cupidatat. Laboris minim duis ex magna eu cupidatat. "
          },
          {
            "id": "Card24",
            "title": "Johns Cabrera",
            "description": "Aute nulla culpa culpa pariatur do ex nulla ad proident laborum id. Dolor exercitation fugiat ipsum amet. Sint excepteur ea aliqua commodo consequat quis. Do minim consequat non cupidatat nisi laborum nostrud laborum. Aliquip non sit ea enim. Labore qui reprehenderit id culpa fugiat aute dolore ut et aute. "
          },
          {
            "id": "Card25",
            "title": "Reese Sandoval",
            "description": "Qui velit exercitation qui amet deserunt reprehenderit dolor. Dolor tempor consectetur minim velit ea tempor magna elit minim pariatur officia cupidatat culpa commodo. Elit ut tempor enim adipisicing aliqua quis sint esse nisi aute non duis ea. Sint laborum mollit ipsum aliqua amet ea commodo cupidatat deserunt et. Occaecat nostrud duis nisi non voluptate. Est aliqua in velit sunt deserunt nisi pariatur laboris dolor quis. "
          },
          {
            "id": "Card26",
            "title": "Alison Jones",
            "description": "Esse enim ea mollit officia proident est enim deserunt esse. Qui tempor commodo consectetur ea cillum deserunt. Consectetur aute voluptate amet elit consequat adipisicing officia quis ullamco reprehenderit veniam aliquip commodo Lorem. Ea nostrud tempor ad dolore non culpa. "
          },
          {
            "id": "Card27",
            "title": "Minnie Burt",
            "description": "Excepteur eiusmod et non adipisicing dolor officia mollit adipisicing occaecat nisi esse non ea deserunt. Ea velit eu voluptate reprehenderit do sit irure dolore consectetur eiusmod mollit sit cupidatat irure. Tempor ut nulla laborum fugiat laborum officia labore esse. "
          },
          {
            "id": "Card28",
            "title": "Kathy Bird",
            "description": "Minim voluptate qui quis nostrud incididunt consectetur dolor velit non esse. Eu labore deserunt cupidatat sunt nisi officia non non veniam. Aliqua aliqua sit dolor et. Voluptate nulla in fugiat sunt pariatur consectetur sit ullamco consequat nostrud aliquip. Eiusmod ea sunt reprehenderit nulla aliquip commodo elit fugiat ullamco. Occaecat eu esse occaecat anim ut proident cupidatat sint sunt magna qui. Cupidatat proident ea laboris sit irure mollit voluptate excepteur consequat ullamco magna. "
          },
          {
            "id": "Card29",
            "title": "Kirby Kelly",
            "description": "Eu commodo dolore velit magna proident consequat nulla quis ad tempor aliqua do ea adipisicing. Magna in dolore esse adipisicing fugiat. Nisi adipisicing in qui laboris aliqua do incididunt ad. Commodo nisi esse consequat reprehenderit dolor aute nulla. Proident officia mollit nulla anim fugiat in excepteur in quis ex deserunt nulla tempor. "
          },
          {
            "id": "Card30",
            "title": "Lindsey Hall",
            "description": "Sint pariatur ullamco laboris ipsum mollit sint ipsum sunt commodo adipisicing duis reprehenderit elit ullamco. Magna ullamco pariatur nostrud aute nulla ea culpa pariatur elit. Enim nisi aliquip magna ad adipisicing consectetur aute laborum. Qui sint do non laborum. Aliquip deserunt duis occaecat laborum aliquip do duis cillum id eu non ad. Ex ad proident mollit officia tempor fugiat nisi consectetur reprehenderit. Consectetur pariatur sit ea voluptate ex do culpa voluptate. "
          }
        ]
      },
      {
        id: 'lane2',
        title: 'Часто задаваемые вопросы.',
        label: '2/50',
        cards: [
          {
            "id": "Card31",
            "title": "Alston Pacheco",
            "description": "Aliqua eiusmod aliquip cupidatat enim. Irure proident aute elit duis. Ipsum sunt officia esse culpa aliqua anim in officia excepteur sint ex. "
          },
          {
            "id": "Card32",
            "title": "Britney Bond",
            "description": "Tempor id dolor fugiat incididunt reprehenderit commodo enim. Incididunt labore commodo labore excepteur nostrud dolor cupidatat est eiusmod adipisicing anim eiusmod elit aute. Reprehenderit commodo ad quis quis mollit irure non excepteur aute. Veniam aliqua consectetur Lorem non sit ad enim et labore anim exercitation aliqua. Dolor exercitation sit exercitation quis. "
          },
          {
            "id": "Card33",
            "title": "Bonner Goodman",
            "description": "Aliqua eu in aute excepteur enim id deserunt ipsum eu adipisicing. Deserunt labore occaecat ullamco ut dolore nostrud reprehenderit irure sit mollit mollit quis. Ad sint nisi culpa adipisicing aliqua laboris esse mollit aute deserunt sint. Sunt qui duis deserunt mollit eiusmod ullamco officia amet eu. Officia Lorem sint veniam ipsum id cupidatat sunt do labore nostrud. "
          },
          {
            "id": "Card34",
            "title": "Chase Alexander",
            "description": "Exercitation dolore tempor irure ea ut et fugiat voluptate ex laborum occaecat. Occaecat minim duis ea id veniam cillum consequat nostrud. Aute proident velit ullamco ipsum irure aliquip eiusmod laborum qui. "
          },
          {
            "id": "Card35",
            "title": "Veronica Alston",
            "description": "Ea mollit incididunt eiusmod duis eiusmod velit. Est pariatur dolore aute velit nostrud sint ullamco magna elit Lorem tempor proident. Incididunt occaecat pariatur incididunt dolore magna occaecat cupidatat est exercitation ex magna do exercitation voluptate. Velit velit sunt minim enim dolore voluptate duis elit esse est do excepteur excepteur fugiat. Fugiat consectetur est sit dolore duis occaecat do officia do esse nulla. Nostrud fugiat ut voluptate minim deserunt nostrud ex reprehenderit reprehenderit sunt non minim excepteur enim. "
          },
          {
            "id": "Card36",
            "title": "Lisa Henson",
            "description": "Do anim ipsum commodo tempor sit eu minim dolor culpa aute quis. Ad ullamco sunt officia occaecat ad ea et elit. Adipisicing elit proident fugiat minim sit esse tempor consectetur aliquip minim. "
          },
          {
            "id": "Card37",
            "title": "Morin Padilla",
            "description": "Mollit et consequat quis officia ea sint reprehenderit exercitation aute elit. Velit Lorem duis exercitation adipisicing incididunt consequat Lorem anim ut ex culpa laborum esse officia. Labore cillum non laboris in nisi ut minim commodo. Culpa velit aute commodo ut proident consequat labore do Lorem consequat occaecat. "
          },
          {
            "id": "Card38",
            "title": "Susie Ferrell",
            "description": "Nisi commodo proident ea tempor. Eiusmod esse id enim commodo. Voluptate in nulla dolor anim aliqua veniam laboris do sunt quis proident. "
          },
          {
            "id": "Card39",
            "title": "Nannie Ray",
            "description": "Excepteur minim eu nisi ea incididunt est consectetur duis. Cillum enim ad laborum duis elit tempor sunt sint sunt consectetur qui. Magna tempor dolore dolor aliqua et pariatur qui sint proident adipisicing nisi magna. Dolor in quis ullamco esse eiusmod commodo pariatur. Nisi cupidatat consectetur nulla ad nulla adipisicing incididunt occaecat minim commodo occaecat est duis nulla. Dolore labore velit nostrud ex et sit reprehenderit aliqua velit in ipsum proident eiusmod tempor. "
          },
          {
            "id": "Card40",
            "title": "Ferrell Hurley",
            "description": "Culpa non ut deserunt ut pariatur pariatur. Ex et tempor mollit minim non consectetur. Excepteur nostrud consectetur ad do eiusmod aliquip laboris qui id cillum nisi consectetur eiusmod. Ullamco proident ad ipsum ad nisi incididunt anim exercitation ex adipisicing ut amet eiusmod. "
          },
          {
            "id": "Card41",
            "title": "Nellie Page",
            "description": "Laborum sit laboris dolor eu quis elit et incididunt officia consequat commodo minim eiusmod sint. Anim ad ipsum eiusmod commodo pariatur eu. Aliquip amet sit eu Lorem dolore tempor aute ipsum tempor est do ut sit do. Quis anim Lorem dolor ad commodo enim pariatur cupidatat. Adipisicing do est excepteur incididunt exercitation. Duis mollit deserunt pariatur est id eiusmod nostrud officia ipsum. Quis pariatur aliqua ut et officia deserunt qui ipsum in. "
          },
          {
            "id": "Card42",
            "title": "Porter Oliver",
            "description": "Ut mollit incididunt esse nulla cupidatat voluptate nostrud Lorem. Quis proident dolore duis eiusmod eu anim. Incididunt consequat cupidatat reprehenderit ipsum. "
          },
          {
            "id": "Card43",
            "title": "Turner Cole",
            "description": "Adipisicing commodo est amet consectetur irure nulla. Elit ut officia id reprehenderit commodo Lorem magna occaecat commodo voluptate commodo qui aliquip. Ullamco nisi non culpa anim anim labore cillum magna sunt sunt proident culpa tempor mollit. "
          },
          {
            "id": "Card44",
            "title": "Shauna Lindsey",
            "description": "Dolore in irure exercitation duis labore enim cupidatat eu mollit aliquip ullamco mollit. Ex et amet deserunt proident ad sit et proident occaecat ipsum eu anim qui. Commodo veniam duis non magna duis in et cillum consequat exercitation nisi laborum consectetur. Eiusmod aute esse Lorem deserunt dolore ea officia est. Magna consectetur proident id laboris. "
          },
          {
            "id": "Card45",
            "title": "Small Christensen",
            "description": "Velit ex fugiat occaecat do ex exercitation do tempor pariatur eiusmod. Excepteur Lorem aliquip exercitation culpa velit consectetur ad. Eu est nisi tempor quis ad ex tempor ullamco nulla ea fugiat fugiat enim. Est sint proident aute dolor ipsum consequat. Exercitation eu fugiat Lorem dolor qui qui culpa proident in. Ea excepteur veniam deserunt culpa sint nostrud duis occaecat ut cillum do eu. Cupidatat laborum magna pariatur minim cillum occaecat laborum incididunt et nostrud velit. "
          },
          {
            "id": "Card46",
            "title": "Esther Ross",
            "description": "Do fugiat pariatur pariatur sunt nostrud. Non cillum fugiat aliquip duis ea esse commodo mollit Lorem. Id elit occaecat officia dolor. "
          },
          {
            "id": "Card47",
            "title": "Woodward Barrett",
            "description": "Amet et commodo dolor anim. Enim Lorem nostrud fugiat pariatur esse aute magna occaecat quis Lorem. Cillum nulla cupidatat commodo laborum eiusmod esse aliquip do minim. Sunt sit est Lorem reprehenderit quis fugiat exercitation Lorem. "
          },
          {
            "id": "Card48",
            "title": "Glenn Mullen",
            "description": "Deserunt commodo do adipisicing ipsum eiusmod anim laborum anim officia laborum nostrud aute esse. Ullamco et deserunt eu sit veniam fugiat sit fugiat fugiat est incididunt exercitation ut. Occaecat excepteur dolore cillum sint eu dolore ullamco occaecat non est veniam consectetur. Quis est esse in in eu velit elit non ipsum ex. "
          },
          {
            "id": "Card49",
            "title": "Wade Weaver",
            "description": "Sunt cupidatat duis consectetur id. Ex reprehenderit laborum exercitation quis sint cupidatat elit do ullamco consectetur dolore reprehenderit deserunt. Voluptate exercitation dolore proident do sunt irure exercitation. Cupidatat voluptate enim amet fugiat est culpa amet. Nulla excepteur proident enim reprehenderit consequat in id. Non sit nisi cupidatat ex sint occaecat duis culpa ipsum quis eu. Non id minim ut occaecat irure veniam ut velit culpa eu duis aliqua est irure. "
          },
          {
            "id": "Card50",
            "title": "Mcdowell Underwood",
            "description": "Commodo aute incididunt ea sunt occaecat officia ad id consequat velit sint ex. Laborum eiusmod pariatur amet pariatur id. Incididunt incididunt cupidatat nulla commodo eiusmod proident sunt non deserunt Lorem qui. Consequat eiusmod incididunt enim nostrud mollit reprehenderit. Reprehenderit eu non mollit enim ipsum exercitation elit nostrud. "
          },
          {
            "id": "Card51",
            "title": "Yates Wood",
            "description": "Excepteur eiusmod dolore qui elit cillum excepteur ipsum officia. Cupidatat reprehenderit officia cupidatat et excepteur laboris quis elit tempor. Anim est duis tempor Lorem adipisicing. Esse laborum nulla magna cillum irure et aliqua occaecat. "
          },
          {
            "id": "Card52",
            "title": "Rhodes Cortez",
            "description": "Ipsum elit nulla ad consequat mollit ad minim mollit. Laborum elit cillum fugiat voluptate nulla commodo ut consectetur nulla elit. Sint in excepteur do culpa tempor. Cillum cupidatat labore ipsum sunt culpa amet qui ipsum labore consequat nulla. Est ex non aliquip consectetur nostrud. Amet ex irure Lorem anim. Eu laborum magna id commodo duis tempor velit Lorem elit voluptate. "
          },
          {
            "id": "Card53",
            "title": "Jewell Cain",
            "description": "Duis tempor consequat cillum officia est velit deserunt sint ipsum ullamco et consectetur ex. Ullamco amet tempor consectetur enim non proident enim aute Lorem exercitation. Mollit ipsum nisi ex anim aliquip sint eu Lorem minim laboris anim qui. Ullamco labore nulla sint ex consequat aute aliquip. Sint mollit do laborum quis officia ex elit adipisicing anim eu in incididunt Lorem labore. "
          },
          {
            "id": "Card54",
            "title": "Pittman White",
            "description": "Exercitation dolore veniam adipisicing fugiat dolore commodo mollit aliqua culpa id do. Amet aliquip mollit irure nisi minim aliqua elit fugiat tempor reprehenderit. Ipsum eu voluptate tempor do qui consectetur cupidatat aute elit magna voluptate. "
          },
          {
            "id": "Card55",
            "title": "Gutierrez Day",
            "description": "Excepteur dolore anim voluptate deserunt duis sint eu incididunt qui nostrud fugiat consectetur nisi. Adipisicing excepteur enim magna laboris irure eiusmod culpa veniam do nulla in do ad. Occaecat esse enim eu fugiat. Cupidatat nostrud dolore ex et enim esse. Do pariatur ipsum do cillum proident ullamco officia. Enim adipisicing ea quis excepteur laboris. Labore dolore officia in culpa aliquip culpa deserunt. "
          },
          {
            "id": "Card56",
            "title": "Tricia Graves",
            "description": "Voluptate reprehenderit do tempor pariatur sint adipisicing est officia velit. Veniam velit velit reprehenderit deserunt deserunt culpa anim dolor esse proident. Pariatur occaecat eiusmod eu voluptate amet commodo quis dolore dolor veniam cillum. Esse qui deserunt ut est amet deserunt et. Cillum adipisicing fugiat labore sunt tempor occaecat cillum ullamco laborum tempor sit labore incididunt. Qui Lorem officia elit ullamco occaecat sit. Elit laborum exercitation ex incididunt id cupidatat tempor nisi in. "
          },
          {
            "id": "Card57",
            "title": "Lynette Rosa",
            "description": "Adipisicing enim incididunt quis tempor minim velit. Deserunt ex culpa aliqua enim exercitation laborum cillum consectetur cillum sint pariatur magna. Aliquip labore nulla et ex ullamco culpa magna anim anim. Non aute consequat et ut esse non reprehenderit non commodo eu incididunt. "
          },
          {
            "id": "Card58",
            "title": "Taylor Caldwell",
            "description": "Id minim labore nulla velit ut. Dolore cillum dolor duis laborum eiusmod. Sunt occaecat minim consectetur mollit tempor adipisicing. Eiusmod dolor sit quis reprehenderit sit enim commodo. Esse proident tempor mollit culpa ad. Tempor nisi et elit dolor qui non occaecat aliquip ullamco voluptate nostrud voluptate labore. Eiusmod tempor Lorem minim pariatur mollit eu nulla aute nulla reprehenderit enim velit magna dolore. "
          },
          {
            "id": "Card59",
            "title": "Aurelia Robertson",
            "description": "Non eu mollit duis eu irure ut. Irure tempor incididunt duis et sit eu dolore nulla veniam nisi aute exercitation reprehenderit elit. Amet officia laboris deserunt adipisicing nisi officia eu ea occaecat duis consectetur commodo. Cillum nulla magna exercitation ea est ad. Amet ex culpa ex do sit sit dolor id ipsum veniam commodo. "
          },
          {
            "id": "Card60",
            "title": "Barrett Hogan",
            "description": "Tempor fugiat enim fugiat qui excepteur dolor voluptate esse. Nisi occaecat minim labore nulla magna exercitation exercitation labore cupidatat do. Sint sint enim dolore incididunt incididunt quis dolore reprehenderit enim quis officia. Dolor irure culpa dolore eu fugiat aliqua nostrud magna consequat ad minim excepteur. Sunt adipisicing deserunt fugiat ea commodo est esse. Enim sunt id exercitation non do exercitation minim voluptate culpa. "
          }
        ]
      }
    ]

  }

  return (
    <div className="red-faq-block">
      <Board
        data={data}
        draggable={false}
        cardDraggable={true}
        laneDraggable={true}
        collapsibleLanes={true}
        canAddLanes={true}
        editLaneTitle={true}
        editable={true}
      />
    </div>
  );
};

export default RedFaq;

import classNames from "classnames";
import React, {useEffect, useMemo, useState} from "react";
import AOS from "aos";
import {useAxios} from '../../../DataProvider';
import Preload from "../../components/preloader/Preload";
import SvgFaq from "../../../bases/icons/SvgFaq.js";

import styles from "./Faq.module.scss";
import "aos/dist/aos.css";

const Faq = () => {

  // const tabsFaqList = [
  //   {
  //     id: 1,
  //     tabTitle: "Jill Hurst",
  //     titleInf: "Hello, Jill Hurst! You have 27 unread messages.",
  //     itfContent: [
  //       {
  //         id: 1,
  //         forIndex: "62f54cd0de8ed1e9f84fd7b6",
  //         question: "Mckenzie Pacheco",
  //         answer: "Adipisicing dolore do minim velit qui. Elit esse minim ex occaecat ullamco commodo. Fugiat aute cillum do voluptate fugiat non laboris nostrud nulla quis. Adipisicing aute fugiat ad eiusmod et do. "
  //       },
  //       {
  //         id: 2,
  //         forIndex: "62f54cd0306d6602af2e0812",
  //         question: "Christine Walls",
  //         answer: "Mollit ut eiusmod non aliqua pariatur occaecat cupidatat. Aliquip aute incididunt labore veniam culpa. Nulla aliqua anim veniam esse voluptate consectetur sit duis consequat elit. "
  //       },
  //       {
  //         id: 3,
  //         forIndex: "62f54cd075ff6307b71381bc",
  //         question: "Jami Pruitt",
  //         answer: "Aliqua consequat magna sunt pariatur amet aute eiusmod elit commodo sit magna proident quis est. Dolor elit sint duis nulla esse. Id excepteur cillum duis sunt nulla. Elit dolor excepteur proident velit consequat duis qui culpa fugiat fugiat dolore. Ea velit Lorem tempor nulla deserunt amet nisi non ex in ea commodo. Laborum pariatur ad tempor Lorem do occaecat officia velit. "
  //       },
  //       {
  //         id: 4,
  //         forIndex: "62f54cd04cc1a259a3ca7ee0",
  //         question: "Ruthie Carter",
  //         answer: "Enim duis in do eiusmod ut deserunt officia magna minim. Sint dolor esse ut amet ex aute. Est adipisicing irure duis voluptate duis. Excepteur adipisicing id sunt amet cupidatat amet consectetur veniam. Aliqua enim commodo irure proident sit. Aliquip ex eu aliquip velit sint qui. Consectetur consequat minim minim magna laboris. "
  //       },
  //       {
  //         id: 5,
  //         forIndex: "62f54cd0fcad9f8ef79d2f4d",
  //         question: "Watkins Baxter",
  //         answer: "Ad culpa non non quis qui mollit dolor proident ex non sint deserunt. Ipsum ut amet amet sit dolor enim veniam deserunt. Anim quis magna laboris pariatur reprehenderit ea esse dolor non sit. Eu laborum sint labore nulla laboris labore et. Dolore consequat commodo aliqua voluptate dolor ullamco anim consectetur. Do veniam consequat laborum nostrud sunt tempor ut est id officia pariatur cillum. Qui magna do incididunt sunt veniam elit occaecat pariatur non occaecat ut culpa eu laborum. "
  //       },
  //       {
  //         id: 6,
  //         forIndex: "62f54cd0074e1a0c3cf67c8a",
  //         question: "French Avila",
  //         answer: "Commodo ex ullamco amet do quis aliquip voluptate. Elit consequat incididunt magna tempor ad veniam amet quis non nulla nostrud nisi in. Officia exercitation sunt ipsum ad sunt minim aliquip velit. Reprehenderit velit eiusmod sint anim irure. "
  //       },
  //       {
  //         id: 7,
  //         forIndex: "62f54cd05609c0a10cdbea90",
  //         question: "Rosalyn Hurley",
  //         answer: "Cupidatat officia cillum aliqua nulla exercitation do aliqua aliquip dolor labore incididunt eiusmod ea id. Sint laboris ex adipisicing sit ad quis deserunt. Laborum ut nulla Lorem occaecat Lorem nostrud sit laborum et voluptate aute. Commodo qui deserunt fugiat pariatur culpa. Culpa dolor mollit laboris anim laboris. "
  //       },
  //       {
  //         id: 8,
  //         forIndex: "62f54cd0aa956a3111da1caf",
  //         question: "Kristen Foster",
  //         answer: "Nostrud do in do ex consequat labore incididunt incididunt sint voluptate. Pariatur aute deserunt proident laboris. Ullamco mollit occaecat sint irure est commodo Lorem in velit. Id laboris qui amet incididunt id officia tempor nostrud qui occaecat fugiat. Nostrud aliqua magna esse dolor eiusmod laboris eiusmod eu exercitation velit. Ullamco ex ea tempor dolore dolore ipsum pariatur veniam veniam labore deserunt tempor. Consectetur minim elit Lorem id eiusmod Lorem. "
  //       },
  //       {
  //         id: 9,
  //         forIndex: "62f54cd01ea0c2d60cb84d57",
  //         question: "Sara Keller",
  //         answer: "Cillum eu id cillum ad laboris quis Lorem eiusmod nulla aute. Consequat proident incididunt anim aute quis amet dolore cillum enim non ea. Est in excepteur ea sunt et labore. Cillum proident eiusmod fugiat laboris laboris laboris proident excepteur dolore. Voluptate nisi officia amet adipisicing eiusmod officia ea Lorem laborum enim ea aute excepteur. Commodo veniam veniam culpa irure cillum dolor laboris adipisicing ad velit ut ut. Amet ex quis enim anim ad magna. "
  //       },
  //       {
  //         id: 10,
  //         forIndex: "62f54cd0c108da9ba90e6781",
  //         question: "Kathie Barron",
  //         answer: "Eu labore ullamco proident irure consectetur minim culpa aute commodo laboris et laborum duis. Dolor fugiat cupidatat sit commodo ut tempor. Ipsum labore non consequat nostrud ipsum non. Do eiusmod aliquip cillum ea officia aute officia cillum in velit. Nostrud commodo eiusmod non dolor ipsum consectetur Lorem ex. "
  //       },
  //       {
  //         id: 11,
  //         forIndex: "62f54cd04084c16bc8a0ce8d",
  //         question: "Tonya Underwood",
  //         answer: "Aute amet minim dolor esse. Commodo laborum tempor sunt commodo sint ullamco reprehenderit ad sint sunt. Magna quis anim incididunt pariatur cillum laboris culpa irure dolore in quis duis non mollit. Tempor laboris pariatur exercitation incididunt adipisicing. "
  //       },
  //       {
  //         id: 12,
  //         forIndex: "62f54cd0ccbd2da4c2a9ab61",
  //         question: "Chan Aguilar",
  //         answer: "Commodo mollit dolor duis nostrud nostrud officia ad id Lorem labore exercitation. Officia ipsum do nulla labore. Labore sit do deserunt pariatur consequat occaecat sint cupidatat aliqua duis officia id occaecat in. "
  //       },
  //       {
  //         id: 13,
  //         forIndex: "62f54cd00db0c45de7456d12",
  //         question: "Barker Buckner",
  //         answer: "Lorem elit eiusmod nostrud reprehenderit reprehenderit duis adipisicing ipsum mollit. Aliqua officia eu reprehenderit ex do mollit aliqua. Esse anim quis nisi mollit duis proident ipsum amet ad nisi ullamco minim. Nostrud anim laborum consequat cupidatat tempor ex magna cillum consectetur laboris laboris exercitation excepteur. "
  //       },
  //       {
  //         id: 14,
  //         forIndex: "62f54cd00b9d262025749005",
  //         question: "Murray Blackwell",
  //         answer: "Elit sint eu consectetur in anim duis ipsum veniam. Magna veniam do voluptate adipisicing in incididunt anim excepteur officia. Cupidatat eiusmod adipisicing consectetur laboris voluptate enim aute cupidatat velit incididunt nostrud dolor commodo commodo. Anim non elit in adipisicing eiusmod ipsum pariatur pariatur ex irure proident do cupidatat. Do adipisicing in elit eiusmod laboris laboris qui tempor officia aliquip eu minim fugiat. "
  //       },
  //       {
  //         id: 15,
  //         forIndex: "62f54cd070380ffc8af1805a",
  //         question: "Leach Love",
  //         answer: "Consectetur do voluptate elit aliqua sint ex fugiat do incididunt. Ea elit duis exercitation est esse sit laboris Lorem ea elit. Sint fugiat consequat magna ea qui. Tempor ex et amet consequat fugiat nostrud nostrud consequat sit sunt Lorem irure. Exercitation elit minim pariatur dolore amet nulla ipsum dolore. Amet dolor sunt consectetur pariatur ipsum ex esse id ut consequat laboris ut ullamco velit. "
  //       },
  //       {
  //         id: 16,
  //         forIndex: "62f54cd06e7ab5cf7d8018f7",
  //         question: "Bryan Finley",
  //         answer: "Ea sint qui laboris magna aliquip dolor adipisicing nostrud mollit laborum. Et ut sunt ullamco aliquip consectetur enim consectetur sint enim. Sit est elit deserunt irure occaecat qui velit quis mollit anim. Et nulla ex Lorem laboris ut do consectetur occaecat id minim nisi anim culpa voluptate. "
  //       },
  //       {
  //         id: 17,
  //         forIndex: "62f54cd01fbe5797c44d5d83",
  //         question: "Gilbert Golden",
  //         answer: "Aliquip dolor nostrud esse sint ea fugiat ex proident consectetur elit do tempor laborum labore. Officia cillum nostrud pariatur dolor ex Lorem voluptate Lorem duis elit irure do. Enim sint ipsum nostrud id ut cupidatat enim. In minim in non elit tempor dolore officia nulla. Incididunt excepteur deserunt ea sit pariatur est. "
  //       }
  //     ]
  //   },
  //   {
  //     id: 2,
  //     tabTitle: "Reed Case",
  //     titleInf: "Hello, Reed Case! You have 50 unread messages.",
  //     itfContent: [
  //       {
  //         id: 1,
  //         forIndex: "62f54cfb1499b9435ac6aed9",
  //         question: "Concepcion Sherman",
  //         answer: "Tempor mollit deserunt nulla fugiat elit magna ullamco consectetur eu eu ex. Veniam et sunt id est veniam amet. Mollit veniam aliquip occaecat consectetur minim eu. Quis enim veniam non mollit culpa fugiat reprehenderit anim ex tempor laboris est mollit aliqua. Lorem excepteur qui adipisicing officia aliquip dolor reprehenderit exercitation occaecat labore duis enim qui aliqua. Excepteur duis culpa deserunt proident occaecat ut duis duis pariatur do pariatur aute. "
  //       },
  //       {
  //         id: 2,
  //         forIndex: "62f54cfb5f031f178d3c7a71",
  //         question: "Winnie Russo",
  //         answer: "Laborum aute sint velit adipisicing nulla voluptate dolor nostrud occaecat mollit sint elit laborum duis. Dolore ipsum ad amet non dolore occaecat. Velit ullamco sit proident adipisicing incididunt anim. Duis amet exercitation ullamco qui quis sunt anim aute id ea anim esse nisi pariatur. Officia quis cupidatat ad labore eiusmod cupidatat nisi Lorem nisi proident minim. Velit cupidatat ipsum laborum nostrud cupidatat qui ea do eu exercitation proident nulla proident. "
  //       },
  //       {
  //         id: 3,
  //         forIndex: "62f54cfb0e26060222aecab0",
  //         question: "Roy Mccullough",
  //         answer: "Aliquip pariatur consectetur pariatur magna aliquip tempor voluptate quis. Incididunt cillum aliquip do do elit voluptate anim sunt occaecat esse magna reprehenderit ipsum quis. Proident amet occaecat magna ut Lorem labore velit fugiat aliquip amet. "
  //       },
  //       {
  //         id: 4,
  //         forIndex: "62f54cfb1a741ee58ff0ea01",
  //         question: "Bertie Bass",
  //         answer: "Sit laboris exercitation cupidatat commodo non mollit. Cupidatat incididunt esse ea commodo esse nulla incididunt. Occaecat deserunt eu non dolor amet. "
  //       },
  //       {
  //         id: 5,
  //         forIndex: "62f54cfb36681a5fee5e1f54",
  //         question: "Paulette Weeks",
  //         answer: "Amet occaecat et nostrud adipisicing veniam pariatur qui aute elit mollit irure mollit laboris. Excepteur eiusmod nostrud sunt laboris excepteur ipsum nulla nisi sit aute aute cupidatat mollit. Dolore reprehenderit occaecat adipisicing commodo labore minim aute ad dolor aliquip fugiat ipsum. Sunt duis nisi nostrud nostrud occaecat ex ipsum irure. Sunt aute velit minim proident. Labore excepteur ad labore veniam veniam cillum nostrud do. Elit sit cillum aute quis voluptate do esse proident nostrud amet ipsum. "
  //       },
  //       {
  //         id: 6,
  //         forIndex: "62f54cfbe7749e9d869fa6a3",
  //         question: "Goff Booth",
  //         answer: "Officia ex aute exercitation eiusmod Lorem eiusmod aliqua ipsum quis exercitation laborum. Minim non do sint consequat cillum labore ut reprehenderit pariatur eu minim anim. Irure tempor excepteur ex eu consequat non aliqua consectetur sunt eu id. Nulla ut consectetur ut duis cupidatat aute magna elit ut. Voluptate eu et ut amet. Sunt voluptate labore aliqua enim proident veniam magna nisi excepteur tempor aute ut occaecat. "
  //       },
  //       {
  //         id: 7,
  //         forIndex: "62f54cfb540d259bc29331fc",
  //         question: "Savannah Nixon",
  //         answer: "Ullamco ipsum sint esse enim esse aliquip occaecat irure deserunt sunt fugiat reprehenderit sunt. Occaecat labore laborum amet cupidatat. Lorem ex ut anim consequat aute ipsum id qui qui. Minim exercitation qui anim excepteur aliqua est. Officia aliqua qui Lorem pariatur et occaecat nulla qui pariatur qui commodo reprehenderit Lorem. Consequat dolore id elit Lorem nisi elit qui consequat irure qui id do. "
  //       },
  //       {
  //         id: 8,
  //         forIndex: "62f54cfb1c396ef468940cdd",
  //         question: "Tessa Contreras",
  //         answer: "Sunt proident deserunt elit ipsum. Eu sint adipisicing velit officia officia consequat in tempor fugiat labore enim minim consectetur nulla. Reprehenderit eiusmod adipisicing enim velit culpa exercitation. "
  //       },
  //       {
  //         id: 9,
  //         forIndex: "62f54cfbe131236e55f418f1",
  //         question: "Mallory Odom",
  //         answer: "Exercitation laboris nulla qui velit quis commodo exercitation incididunt labore eu mollit fugiat esse duis. Quis nulla cillum excepteur velit ipsum quis in duis velit. Sint sint aliquip id elit mollit dolore proident nulla tempor aliqua. Proident aute ut nulla culpa et eiusmod anim incididunt dolore in pariatur. "
  //       },
  //       {
  //         id: 10,
  //         forIndex: "62f54cfb6a84635be92396bd",
  //         question: "Morales Ferguson",
  //         answer: "Officia eu irure nostrud aliquip sint ut aliqua exercitation. Adipisicing deserunt proident ad reprehenderit velit do ut pariatur et laborum sint non aliqua. Officia minim proident ullamco consectetur. Ad fugiat velit proident adipisicing esse esse est labore mollit incididunt elit Lorem aliqua veniam. Elit id Lorem laboris irure sit labore tempor. Ipsum adipisicing ullamco consequat labore excepteur eiusmod ullamco non. Nulla eu adipisicing qui consequat officia nulla excepteur. "
  //       },
  //       {
  //         id: 11,
  //         forIndex: "62f54cfb10558030ef230707",
  //         question: "Madge Shannon",
  //         answer: "Nisi est esse duis in et dolor nulla eu dolor aliqua. Sit in enim do elit mollit. Nisi laboris duis dolor dolor elit et sunt eu mollit id sunt elit. Dolore enim incididunt laboris culpa anim sit officia sunt ex minim nisi. Excepteur ullamco commodo velit amet incididunt laborum aute nulla nostrud proident tempor sit eiusmod. "
  //       },
  //       {
  //         id: 12,
  //         forIndex: "62f54cfbba42fb4be01a4a50",
  //         question: "Mayo Blevins",
  //         answer: "Veniam ad nulla elit Lorem deserunt sit laboris pariatur pariatur irure. Mollit exercitation tempor et eu. Elit aliquip anim velit consectetur tempor dolor ut ullamco occaecat. Elit nostrud proident tempor occaecat. Ullamco irure quis sit sint anim mollit. "
  //       },
  //       {
  //         id: 13,
  //         forIndex: "62f54cfbe323a78de2b62456",
  //         question: "Kelley Wilkerson",
  //         answer: "Nisi dolore veniam deserunt mollit consectetur. Aliqua non non ut non id duis nulla pariatur pariatur mollit aliqua amet. Minim est aliqua eiusmod ipsum non. Elit aute reprehenderit ad elit nisi magna commodo enim laborum deserunt proident sint. Enim nisi magna dolor do reprehenderit labore deserunt. "
  //       },
  //       {
  //         id: 14,
  //         forIndex: "62f54cfbd569656185051a1f",
  //         question: "Nanette Kinney",
  //         answer: "Excepteur mollit laboris minim et fugiat mollit ad deserunt deserunt incididunt do id. Enim in dolore id duis quis nulla ad ut. Mollit adipisicing velit eu fugiat consequat. Qui sunt anim fugiat nostrud qui voluptate sunt est excepteur incididunt qui deserunt. "
  //       },
  //       {
  //         id: 15,
  //         forIndex: "62f54cfb528ce565e18db0dd",
  //         question: "Tamara Sparks",
  //         answer: "Aliquip exercitation laborum exercitation consequat deserunt laborum nostrud enim. Velit proident occaecat nisi exercitation sunt ex sit pariatur officia cupidatat laboris labore. Irure elit culpa id exercitation Lorem. Anim id velit enim officia Lorem non non labore mollit excepteur tempor do irure. Consequat sunt officia occaecat occaecat nisi. Nulla duis cillum officia proident ex aliquip deserunt ex qui tempor. Proident cupidatat ad cillum quis adipisicing ullamco irure eiusmod exercitation culpa. "
  //       },
  //       {
  //         id: 16,
  //         forIndex: "62f54cfbfa3cd64dbd2795de",
  //         question: "Orr Schwartz",
  //         answer: "Do amet aliquip aliqua quis deserunt cillum commodo et elit minim sit do aliquip non. Elit laboris quis sint fugiat laborum Lorem. Laboris ut enim eiusmod amet ut amet reprehenderit irure. Mollit Lorem proident velit laboris in voluptate cillum fugiat do culpa veniam. Irure pariatur culpa enim non incididunt minim ut. "
  //       },
  //       {
  //         id: 17,
  //         forIndex: "62f54cfb8d7a76cd830a48c3",
  //         question: "Delgado Mccray",
  //         answer: "Amet commodo labore proident veniam pariatur reprehenderit nostrud mollit et esse mollit excepteur laborum cillum. Reprehenderit ea ea aute elit commodo fugiat sit labore minim consequat adipisicing. Dolore ad ipsum exercitation adipisicing nisi mollit reprehenderit nostrud ut esse commodo. Veniam ullamco do ex culpa dolor cillum qui mollit cillum labore quis do sunt commodo. Commodo quis fugiat ullamco consectetur irure aliqua velit minim enim ex in incididunt sit sunt. "
  //       }
  //     ]
  //   },
  //   {
  //     id: 3,
  //     tabTitle: "Norris Melton",
  //     titleInf: "Hello, Norris Melton! You have 29 unread messages.",
  //     itfContent: [
  //       {
  //         id: 1,
  //         forIndex: "62f54d179a02eb918be9ec85",
  //         question: "Cardenas Baker",
  //         answer: "In consequat sunt exercitation eiusmod exercitation exercitation fugiat culpa deserunt nulla. Ipsum consectetur nulla cupidatat aliqua mollit nostrud incididunt qui enim. Elit consequat anim ea qui ullamco amet elit aliqua aliquip deserunt occaecat voluptate. Nisi ad tempor consectetur consectetur consequat tempor ipsum minim amet ex. Minim qui et deserunt cupidatat sit ex cupidatat anim veniam ipsum enim. "
  //       },
  //       {
  //         id: 2,
  //         forIndex: "62f54d17ca7e9ade838b3fc9",
  //         question: "Rios Heath",
  //         answer: "Sint fugiat excepteur eu excepteur Lorem. Ipsum ullamco excepteur aliquip veniam in reprehenderit culpa culpa ipsum eu ex anim. Commodo irure quis tempor incididunt in amet. Tempor magna do ex sint elit proident pariatur in. Enim tempor sit ipsum aute pariatur reprehenderit. Veniam eiusmod exercitation elit laborum sunt enim et nostrud ut nulla aliquip et fugiat. "
  //       },
  //       {
  //         id: 3,
  //         forIndex: "62f54d174f15901d02888fc1",
  //         question: "Brock Adkins",
  //         answer: "Est ex quis cupidatat incididunt aliquip officia labore. Consequat ea eu fugiat pariatur aute sint amet. Consequat eiusmod eu labore nisi qui aliquip dolore culpa commodo cillum enim enim laborum. Exercitation exercitation duis pariatur magna elit commodo excepteur. Est dolore nisi excepteur dolore eu. "
  //       },
  //       {
  //         id: 4,
  //         forIndex: "62f54d17795c10dd7329a3e8",
  //         question: "Lopez Delaney",
  //         answer: "Ut enim cupidatat sunt consequat sunt et dolor ex. Quis in consequat ut ad. Cillum enim non qui sit sint Lorem voluptate commodo ipsum elit. Aliqua irure ullamco voluptate eu elit in enim. Eu aliquip est ullamco veniam minim cupidatat nostrud laborum sint sit fugiat duis laborum. Nostrud cillum id mollit reprehenderit occaecat culpa et nulla et commodo do eiusmod dolor ut. Est consectetur ipsum non magna aute pariatur sit pariatur mollit officia. "
  //       },
  //       {
  //         id: 5,
  //         forIndex: "62f54d17c841ae1c102c919d",
  //         question: "Haney Holcomb",
  //         answer: "Nisi irure in consequat nulla dolore in anim labore quis. Adipisicing ea aliquip dolor ullamco. Nisi aliquip dolor mollit Lorem mollit nostrud irure sit aute proident non do nulla. Dolore excepteur consectetur aliquip magna et duis. "
  //       },
  //       {
  //         id: 6,
  //         forIndex: "62f54d1793aa7e602a1f8a47",
  //         question: "Contreras Vang",
  //         answer: "Ad commodo eu anim aute adipisicing velit irure magna labore dolore Lorem. Enim culpa officia reprehenderit deserunt eu pariatur minim ullamco sit. Mollit exercitation officia aliquip adipisicing esse tempor eiusmod. Pariatur voluptate aute consequat eiusmod anim adipisicing magna ea. Elit pariatur cillum enim minim duis adipisicing Lorem. Sit et pariatur quis officia elit enim anim occaecat. Aliquip pariatur laborum et tempor irure minim sunt quis. "
  //       },
  //       {
  //         id: 7,
  //         forIndex: "62f54d17537b86ec4b27d415",
  //         question: "Grace Mckinney",
  //         answer: "Ullamco veniam do consequat consequat ullamco quis aliqua reprehenderit dolore culpa. Exercitation ex deserunt non anim exercitation eu adipisicing occaecat nulla. Incididunt amet laboris laboris ut. Adipisicing consequat fugiat velit mollit veniam fugiat minim proident cupidatat. "
  //       },
  //       {
  //         id: 8,
  //         forIndex: "62f54d179cc94ba1e37f0a3e",
  //         question: "Rollins Manning",
  //         answer: "Ullamco deserunt esse ut incididunt qui. Minim mollit laborum culpa ullamco do et consectetur. Aute nostrud ipsum eiusmod minim ex velit dolor incididunt veniam ex. "
  //       },
  //       {
  //         id: 9,
  //         forIndex: "62f54d172664bd803ad77ef8",
  //         question: "Cathryn Nelson",
  //         answer: "Nulla laboris aliqua sit ea mollit magna quis nisi occaecat non. Irure elit fugiat non amet do proident labore nulla minim ipsum incididunt. Proident qui minim sint elit duis dolore est incididunt ipsum pariatur cupidatat esse irure exercitation. Amet cupidatat duis amet ea incididunt. "
  //       },
  //       {
  //         id: 10,
  //         forIndex: "62f54d177c7fe0d40b1f0f97",
  //         question: "Stephenson Mann",
  //         answer: "Esse ut ex tempor dolore enim aute sint labore culpa deserunt. Ad aliqua elit non tempor duis cillum id laborum mollit nulla non pariatur nostrud sit. Ex dolore pariatur qui esse nostrud excepteur consequat commodo duis sint. Esse aliqua sint labore deserunt anim aliquip nulla cupidatat ullamco. Qui tempor culpa fugiat ea exercitation non dolore mollit eiusmod duis veniam laboris. "
  //       },
  //       {
  //         id: 11,
  //         forIndex: "62f54d17109a1dcc19b3863b",
  //         question: "Hammond Harvey",
  //         answer: "Laborum est magna anim non eu consequat proident tempor nulla ullamco ipsum. Quis deserunt nostrud labore non. Ea laborum occaecat eu elit cupidatat culpa consequat. Ad nulla cillum cillum deserunt eiusmod culpa minim. Dolore mollit occaecat aute incididunt magna esse deserunt nisi anim amet. Ipsum Lorem ullamco enim fugiat sunt in et. Enim dolore in veniam officia non est. "
  //       },
  //       {
  //         id: 12,
  //         forIndex: "62f54d17fa04b33f25b1a6eb",
  //         question: "Doyle Garza",
  //         answer: "Cupidatat ut ipsum adipisicing et anim. Deserunt non quis pariatur voluptate et laborum veniam consectetur sint non. Et velit sint exercitation veniam sunt ullamco tempor elit commodo fugiat nulla. Amet do qui cillum quis irure magna eu. "
  //       },
  //       {
  //         id: 13,
  //         forIndex: "62f54d179a573efbcaac7c2c",
  //         question: "Essie Marquez",
  //         answer: "Dolore magna sit officia aliqua esse ipsum ut. Aute et officia cupidatat voluptate consectetur ullamco reprehenderit nisi id qui veniam. Nisi labore amet aliqua consequat. "
  //       },
  //       {
  //         id: 14,
  //         forIndex: "62f54d177f7a31f334466229",
  //         question: "Lila Gentry",
  //         answer: "Aliquip ullamco eu tempor consequat dolore cillum aute Lorem eu cillum tempor occaecat laboris. Veniam nostrud ullamco occaecat exercitation in velit qui ut amet fugiat proident consequat irure occaecat. Aute ea reprehenderit sint nisi est non fugiat incididunt adipisicing reprehenderit. "
  //       },
  //       {
  //         id: 15,
  //         forIndex: "62f54d17324e126b4c9105a4",
  //         question: "Latonya Solis",
  //         answer: "Nisi proident irure amet tempor nulla officia cillum Lorem commodo minim veniam consectetur. Lorem occaecat cupidatat deserunt in sit eu proident. Minim cillum sunt minim aliquip non exercitation ut veniam et occaecat anim non cupidatat laborum. Mollit amet dolor nulla officia mollit sunt Lorem officia elit mollit deserunt pariatur. "
  //       },
  //       {
  //         id: 16,
  //         forIndex: "62f54d17c5fec22bda8c8808",
  //         question: "Boyer Petersen",
  //         answer: "Irure qui sint nostrud excepteur ipsum incididunt aliquip. Eiusmod aute est ex ipsum cillum. Sit duis aute velit consequat qui eiusmod sit aute duis. Proident tempor laboris ad velit incididunt. Do duis reprehenderit magna sit aliquip voluptate est minim incididunt in voluptate ea occaecat. Occaecat officia ad et laborum veniam veniam id deserunt nostrud laboris aliqua. Fugiat culpa amet dolor magna sunt voluptate labore labore quis adipisicing. "
  //       }
  //     ]
  //   },
  //   {
  //     id: 4,
  //     tabTitle: "Cherry Tate",
  //     titleInf: "Hello, Cherry Tate! You have 44 unread messages.",
  //     itfContent: [
  //       {
  //         id: 1,
  //         forIndex: "62f54d4044016b2695f79659",
  //         question: "Garrison Singleton",
  //         answer: "Aute sunt aliquip aute quis cupidatat et esse. Laborum cupidatat sit cupidatat Lorem aute Lorem. Cillum id sunt labore aliqua nostrud eu. Pariatur cupidatat est sit duis nisi anim amet ipsum commodo duis voluptate esse veniam. Reprehenderit proident commodo eiusmod consequat sint excepteur ea excepteur excepteur minim sunt officia laboris adipisicing. Magna cupidatat id in est est et enim consequat aute veniam eu aute. "
  //       },
  //       {
  //         id: 2,
  //         forIndex: "62f54d4093a059745a61696a",
  //         question: "Whitney Diaz",
  //         answer: "Aliqua exercitation consectetur veniam culpa tempor. Irure sint proident qui dolore ut enim. Aliquip adipisicing exercitation cillum sunt exercitation consequat culpa mollit. Reprehenderit laboris incididunt pariatur ut aute in laborum reprehenderit velit nisi minim. Ea exercitation quis incididunt minim sunt adipisicing laborum ipsum adipisicing et sunt voluptate reprehenderit laboris. Sunt adipisicing Lorem anim sunt. Nisi ullamco irure amet ad ex. "
  //       },
  //       {
  //         id: 3,
  //         forIndex: "62f54d40a5946d8f0fc25d9a",
  //         question: "Allison Jimenez",
  //         answer: "Incididunt est non fugiat anim officia mollit voluptate occaecat excepteur. Fugiat sit excepteur in enim irure exercitation. Eiusmod irure ut qui est adipisicing labore proident enim elit tempor exercitation est cillum officia. Elit tempor veniam elit pariatur aliqua et aute tempor qui enim eu aute elit id. "
  //       },
  //       {
  //         id: 4,
  //         forIndex: "62f54d4003b28191aca2cb40",
  //         question: "Nanette Ortega",
  //         answer: "Cupidatat ut reprehenderit labore excepteur in mollit dolore duis amet sunt ea dolore. Esse minim ad consectetur id consequat deserunt do consequat dolore adipisicing est consectetur anim et. Amet officia dolore ad duis sunt cillum quis commodo nulla id in labore duis excepteur. Magna laboris non minim est irure magna. Sint ut aliqua laborum velit cillum enim adipisicing amet. Excepteur non minim eu tempor mollit voluptate labore aute esse aliquip non. Mollit non ut ullamco nisi eu elit dolore ad deserunt in aliqua. "
  //       },
  //       {
  //         id: 5,
  //         forIndex: "62f54d40ba0314b9d8b243d1",
  //         question: "Browning Moses",
  //         answer: "Tempor excepteur tempor ea qui et elit eiusmod aute mollit tempor ea. Laboris do eiusmod exercitation ut ex. Adipisicing mollit exercitation eu fugiat sint nisi adipisicing mollit. "
  //       },
  //       {
  //         id: 6,
  //         forIndex: "62f54d40d0e1c6a446aac329",
  //         question: "Addie Glenn",
  //         answer: "Enim officia pariatur ea aliqua. Deserunt deserunt nisi est aliquip quis ipsum consequat enim amet eu. Do elit enim velit aliquip est ex nostrud. Quis ex tempor culpa duis aliquip sunt nisi voluptate voluptate incididunt. Excepteur laboris quis esse tempor aliqua cillum consequat amet proident ad voluptate esse esse qui. "
  //       },
  //       {
  //         id: 7,
  //         forIndex: "62f54d407a142faf5b2a2921",
  //         question: "Penny Guy",
  //         answer: "Magna proident ex aute officia aliqua exercitation ullamco mollit adipisicing nostrud. Sit exercitation consequat aliqua sunt ullamco tempor officia tempor reprehenderit sit exercitation amet proident incididunt. Tempor elit non anim ad nulla in proident reprehenderit pariatur irure quis. Amet eiusmod esse amet ipsum sint Lorem ut laborum ipsum do cupidatat do enim. "
  //       },
  //       {
  //         id: 8,
  //         forIndex: "62f54d40f609e7511082768d",
  //         question: "Strickland Davenport",
  //         answer: "Aliqua velit ullamco est veniam eu minim amet irure occaecat. Qui nisi pariatur dolor reprehenderit cillum et ex do et laborum. Ut in laborum sunt tempor mollit laboris dolore in exercitation. Nulla pariatur elit minim veniam reprehenderit. Veniam proident ut eiusmod Lorem ullamco ullamco enim culpa cillum anim cupidatat ea enim do. "
  //       },
  //       {
  //         id: 9,
  //         forIndex: "62f54d401f10c31baeac12b0",
  //         question: "Esmeralda Salazar",
  //         answer: "Aliqua sunt nostrud sunt qui nulla esse ullamco aliqua. Ullamco dolor Lorem consequat do veniam pariatur excepteur reprehenderit quis esse. Consectetur dolor dolore aute sunt dolore commodo esse aliquip veniam laboris id qui irure. Exercitation laboris adipisicing velit est pariatur elit laborum voluptate fugiat. Quis in duis sunt irure. Ullamco culpa eiusmod incididunt eu exercitation excepteur dolore anim fugiat amet reprehenderit sit exercitation. "
  //       },
  //       {
  //         id: 10,
  //         forIndex: "62f54d40f40f0c1bdb6646fc",
  //         question: "Clarissa Delacruz",
  //         answer: "Eiusmod cupidatat reprehenderit amet eu non irure culpa. Commodo ea ex id id. Anim in do ad aliquip pariatur veniam do ullamco nostrud anim. Deserunt est laborum nulla incididunt irure. Id irure excepteur nisi quis ipsum reprehenderit veniam voluptate sunt elit laborum adipisicing minim consequat. Cillum incididunt voluptate ad nulla elit duis consequat. Adipisicing ex est proident ex culpa ad officia officia. "
  //       },
  //       {
  //         id: 11,
  //         forIndex: "62f54d409e41666162147f17",
  //         question: "Joseph Macdonald",
  //         answer: "Quis minim esse ut cupidatat ea. Ut id dolor sint magna. Eiusmod esse incididunt tempor do ad. Eiusmod aliqua laborum sint velit amet mollit labore sit duis ut in. Non excepteur nostrud laborum voluptate fugiat nulla. Occaecat pariatur aute aliqua id duis deserunt. Esse ad occaecat qui dolore voluptate aliqua pariatur velit. "
  //       },
  //       {
  //         id: 12,
  //         forIndex: "62f54d406c03ca822ff4d4da",
  //         question: "Glenna Donaldson",
  //         answer: "Magna magna ipsum ea dolor reprehenderit do ea in amet voluptate incididunt aliqua ipsum sunt. Non proident nisi duis reprehenderit officia eu consequat. Incididunt ea id ut est. Est non ad adipisicing dolore est ut non ea. Cillum esse qui anim commodo ullamco exercitation incididunt nostrud consectetur dolore deserunt ut id. Do in ex dolore id amet amet non aute aute ut duis aliquip officia. "
  //       },
  //       {
  //         id: 13,
  //         forIndex: "62f54d40b3e86ce3a7fbae1b",
  //         question: "Slater Lancaster",
  //         answer: "Occaecat aliqua mollit Lorem aute sunt sint quis. Ad ullamco commodo sunt velit eu do dolor dolor id ut ad elit. Tempor consequat nisi qui commodo labore ad ad. Pariatur aliqua et occaecat incididunt culpa proident Lorem. Ut sint occaecat laboris ex amet. Id pariatur minim do duis. "
  //       },
  //       {
  //         id: 14,
  //         forIndex: "62f54d40fc380acce356961b",
  //         question: "Espinoza Baird",
  //         answer: "Aute ipsum incididunt nisi mollit culpa amet velit tempor eu et. Fugiat aute sint ex dolore minim enim sint ipsum amet esse commodo consequat. Lorem cupidatat excepteur deserunt proident consectetur dolor amet commodo et irure velit voluptate eu. Occaecat quis proident deserunt incididunt. Sint ex est minim amet commodo fugiat dolor esse sunt nisi voluptate aute. "
  //       },
  //       {
  //         id: 15,
  //         forIndex: "62f54d40cacdcb93900a8a7e",
  //         question: "Leah Alston",
  //         answer: "Fugiat sunt eu aute occaecat non aliqua ex. Voluptate eiusmod et aliquip anim. Consectetur pariatur enim et occaecat ut dolore ea consectetur est deserunt. "
  //       },
  //       {
  //         id: 16,
  //         forIndex: "62f54d40b5c6ccaae6cd4f75",
  //         question: "Adele Merrill",
  //         answer: "In ut anim mollit sit do minim laboris aliquip do incididunt eu nostrud reprehenderit. Quis laborum eu anim nisi minim ex velit do eu Lorem fugiat magna in. Proident reprehenderit ad nostrud excepteur pariatur pariatur. Commodo mollit velit eiusmod aliquip do non pariatur incididunt commodo qui mollit velit. Dolore excepteur cupidatat id non minim anim magna eu elit duis. Mollit Lorem irure ipsum amet do exercitation. "
  //       }
  //     ]
  //   },
  //   {
  //     id: 5,
  //     tabTitle: "Florence Huff",
  //     titleInf: "Hello, Florence Huff! You have 39 unread messages.",
  //     itfContent: [
  //       {
  //         id: 1,
  //         forIndex: "62f54d6addcfcf2567b19bbc",
  //         question: "Townsend Blackwell",
  //         answer: "Dolor minim ipsum qui sunt qui ex minim velit deserunt. Ea cillum laboris sint culpa est commodo pariatur consequat reprehenderit commodo adipisicing ad culpa. Magna ex consequat ex aute qui laborum. Aliquip enim esse adipisicing duis duis ex magna. Cillum officia aliquip consequat cupidatat proident incididunt aliquip adipisicing laborum nostrud. Non aliqua dolore ad cupidatat culpa laboris amet eiusmod adipisicing exercitation consectetur. Elit sint mollit officia voluptate veniam mollit quis proident elit ut ut reprehenderit. "
  //       },
  //       {
  //         id: 2,
  //         forIndex: "62f54d6a5c21c3c11a54bdee",
  //         question: "Nell Owen",
  //         answer: "Labore fugiat labore reprehenderit consectetur dolore amet dolore labore cillum. Dolore amet consectetur eiusmod anim ut esse culpa est minim nostrud velit. Irure commodo consequat adipisicing velit incididunt. "
  //       },
  //       {
  //         id: 3,
  //         forIndex: "62f54d6abee4d50aff72d17a",
  //         question: "Navarro Velasquez",
  //         answer: "Nostrud cupidatat enim ullamco tempor nulla dolor. Non enim amet mollit exercitation labore proident laborum consequat. Deserunt pariatur mollit sunt aute in laboris est elit eiusmod officia elit commodo est ex. Laboris sunt nostrud veniam quis nulla elit eu aliqua commodo aliqua deserunt. "
  //       },
  //       {
  //         id: 4,
  //         forIndex: "62f54d6af369490f0edbd5b8",
  //         question: "Owen Savage",
  //         answer: "Fugiat aute ipsum culpa do consequat esse et. Id minim in minim est. Qui commodo dolore consectetur labore reprehenderit ad Lorem. Deserunt deserunt enim adipisicing consequat Lorem mollit dolor reprehenderit aliqua. "
  //       },
  //       {
  //         id: 5,
  //         forIndex: "62f54d6a1cc7547bd451f35d",
  //         question: "Constance Cooke",
  //         answer: "Enim in amet eiusmod nostrud. Aliquip cillum est esse sunt commodo pariatur sunt reprehenderit adipisicing aliqua exercitation reprehenderit. Duis consectetur nostrud ea incididunt pariatur dolore aute reprehenderit veniam adipisicing consequat. Deserunt do excepteur eiusmod dolor. Ut eiusmod quis amet aliquip occaecat ad est aliquip. "
  //       },
  //       {
  //         id: 6,
  //         forIndex: "62f54d6aeef0de78ce2e5021",
  //         question: "Moran Frye",
  //         answer: "Nostrud enim velit ex in sint quis quis duis ad adipisicing officia aute culpa anim. Magna consequat sit duis esse consectetur id eiusmod reprehenderit do voluptate cillum sint ut. Proident duis culpa pariatur quis irure id magna consectetur duis do consequat sunt. "
  //       },
  //       {
  //         id: 7,
  //         forIndex: "62f54d6a151ccb4f5d6dcea5",
  //         question: "Gale Jones",
  //         answer: "Incididunt culpa minim consequat adipisicing non anim sunt occaecat laborum voluptate. Fugiat laboris Lorem reprehenderit aliqua ad esse commodo. Deserunt veniam dolore irure pariatur aliquip amet non magna culpa officia laboris proident dolore exercitation. Ipsum occaecat officia esse incididunt aliqua culpa minim dolor. "
  //       },
  //       {
  //         id: 8,
  //         forIndex: "62f54d6a0a8d4a94faa7a8cd",
  //         question: "Karyn Gates",
  //         answer: "Fugiat ex deserunt duis eu fugiat occaecat in officia. Eiusmod cillum ad do amet excepteur dolore laborum aliquip ut Lorem. Laboris voluptate quis aute laborum cupidatat irure culpa ullamco voluptate duis laborum nulla id. "
  //       },
  //       {
  //         id: 9,
  //         forIndex: "62f54d6a6b3e6f3b9a0211aa",
  //         question: "Erna Barrera",
  //         answer: "Aliqua ex voluptate exercitation est incididunt enim consectetur deserunt eu. Incididunt et commodo voluptate nisi anim. Veniam fugiat non do fugiat proident. Dolore quis sit exercitation nulla veniam eu sit nostrud. Qui nostrud voluptate sunt adipisicing cupidatat. Aliqua deserunt in est exercitation. Amet laboris eu consectetur amet. "
  //       },
  //       {
  //         id: 10,
  //         forIndex: "62f54d6a3dbc9f5414e4b932",
  //         question: "Diaz Atkins",
  //         answer: "Proident duis laborum aliqua aute fugiat consequat nulla cillum aliquip nulla adipisicing. Sunt magna magna est elit magna officia ullamco eiusmod ullamco ad anim. Consectetur est ea minim cupidatat excepteur tempor proident officia reprehenderit pariatur nulla commodo officia. Commodo anim ea mollit quis non aliquip eiusmod non ut cupidatat. Ullamco est fugiat ea id voluptate voluptate ad. "
  //       },
  //       {
  //         id: 11,
  //         forIndex: "62f54d6af0f6f76e759357c2",
  //         question: "Rivera Wyatt",
  //         answer: "Cupidatat consequat nulla magna et proident sit cillum laboris sint duis irure eiusmod. Id eu cillum ullamco labore consectetur pariatur reprehenderit laboris aliqua voluptate ea exercitation. Laboris adipisicing magna amet cupidatat officia nisi adipisicing excepteur officia consectetur irure anim. "
  //       },
  //       {
  //         id: 12,
  //         forIndex: "62f54d6a72e6fb08e0c5b5f7",
  //         question: "Tucker Jimenez",
  //         answer: "Commodo velit reprehenderit proident culpa aliquip sit aliquip consequat voluptate amet et reprehenderit. Nostrud deserunt quis ullamco occaecat ut. Exercitation minim consequat dolore do elit eu eu qui consequat adipisicing. Exercitation ipsum commodo sunt quis mollit ex ipsum esse laboris nisi amet. Enim consectetur sunt adipisicing non dolor. Laboris consequat velit mollit id tempor officia. "
  //       },
  //       {
  //         id: 13,
  //         forIndex: "62f54d6a859e4749ed7605b2",
  //         question: "Addie Preston",
  //         answer: "Eiusmod minim magna magna commodo ipsum. Lorem officia irure irure labore laborum. Sit quis laborum do excepteur excepteur fugiat cupidatat ullamco sint quis consequat voluptate. Do minim eu minim non Lorem exercitation eu. Ex proident aliqua nisi ea qui in est culpa ullamco tempor ex sint laboris aliquip. "
  //       },
  //       {
  //         id: 14,
  //         forIndex: "62f54d6aba5de08f46a04607",
  //         question: "Avila Nixon",
  //         answer: "Incididunt nisi eiusmod adipisicing et commodo. Irure minim tempor id aliqua aliquip. Sit aliqua aute in deserunt commodo adipisicing laborum id. Ex qui ut eu magna eu. Aliqua et aliquip ipsum duis. Id fugiat adipisicing elit elit adipisicing eiusmod deserunt fugiat aliquip exercitation sunt. Sunt consectetur commodo qui labore occaecat sint do ipsum. "
  //       },
  //       {
  //         id: 15,
  //         forIndex: "62f54d6af5c4160ede90df93",
  //         question: "Doris Howard",
  //         answer: "Deserunt irure cupidatat veniam quis elit tempor nisi nisi ipsum velit duis laborum. Dolore proident eu labore reprehenderit reprehenderit elit esse. Occaecat nulla irure mollit adipisicing. "
  //       },
  //       {
  //         id: 16,
  //         forIndex: "62f54d6a6cafebf59af21c93",
  //         question: "Newton Bolton",
  //         answer: "In consequat enim aliqua aliqua nisi in enim eu Lorem esse culpa amet officia. Non minim ex et laborum exercitation ea commodo labore magna nostrud voluptate. Minim sunt irure eiusmod eu amet qui fugiat exercitation culpa. "
  //       }
  //     ]
  //   },
  //   {
  //     id: 6,
  //     tabTitle: "Claudia Carter",
  //     titleInf: "Hello, Claudia Carter! You have 34 unread messages.",
  //     itfContent: [
  //       {
  //         id: 1,
  //         forIndex: "62f54d7fc6ffb43902441d68",
  //         question: "Lindsay Washington",
  //         answer: "Exercitation ullamco ullamco do eiusmod nostrud do nulla culpa mollit consectetur enim. Proident nostrud cillum esse tempor nulla fugiat adipisicing. Officia incididunt laboris esse sint exercitation. "
  //       },
  //       {
  //         id: 2,
  //         forIndex: "62f54d7fb7f878fd61af56b1",
  //         question: "Casandra Bender",
  //         answer: "Velit aute enim ullamco et tempor nostrud veniam. Fugiat eiusmod officia pariatur mollit consectetur qui nostrud anim in occaecat consequat. Ad tempor est esse officia proident nulla voluptate aliquip sunt qui. Consectetur consectetur incididunt amet est occaecat sit amet elit elit consequat mollit. "
  //       },
  //       {
  //         id: 3,
  //         forIndex: "62f54d7f77c473d97ae316da",
  //         question: "Dunlap Carter",
  //         answer: "Laborum fugiat ex aute nisi sint velit nulla. Ipsum adipisicing aliquip est sint consequat fugiat. Lorem sit commodo elit aute eiusmod nostrud proident sunt minim nulla et ad adipisicing est. "
  //       },
  //       {
  //         id: 4,
  //         forIndex: "62f54d7fb2ec54e5d6780085",
  //         question: "Mckee Garza",
  //         answer: "Ut magna proident tempor ea ipsum culpa exercitation. Amet nisi nulla aliqua excepteur ea qui deserunt mollit adipisicing voluptate laborum ut ut. Voluptate do in velit ea id. Sit aliquip pariatur occaecat ipsum labore non enim eu elit voluptate aute nisi ullamco. Adipisicing non voluptate ipsum velit consectetur sit fugiat. "
  //       },
  //       {
  //         id: 5,
  //         forIndex: "62f54d7fe1e42ff6cc1216fb",
  //         question: "Casey Morse",
  //         answer: "Cupidatat cillum do ut esse fugiat eiusmod pariatur Lorem sit est minim occaecat exercitation et. Eiusmod amet sint est magna deserunt aute voluptate id cupidatat. Culpa ad quis occaecat consectetur officia aliqua fugiat cillum est commodo ex magna pariatur ex. Labore consectetur cillum cillum nisi quis aliqua eiusmod sint. Elit adipisicing esse proident cupidatat sint culpa excepteur irure amet. "
  //       },
  //       {
  //         id: 6,
  //         forIndex: "62f54d7fb589a06361f83576",
  //         question: "Keri Garrison",
  //         answer: "Laboris qui ut veniam nulla dolor proident aliquip culpa. Consectetur dolor ad nisi pariatur laboris pariatur sit proident culpa nisi amet magna consectetur. Exercitation ullamco dolor aute et Lorem. Consequat Lorem magna mollit enim eiusmod. Duis aute eiusmod ad amet exercitation consequat excepteur. Anim qui duis anim culpa qui cillum. Magna qui occaecat incididunt sint ut voluptate sint dolor. "
  //       },
  //       {
  //         id: 7,
  //         forIndex: "62f54d7f8e22f11ef08d7a52",
  //         question: "Rosanna Weaver",
  //         answer: "Aute ullamco reprehenderit excepteur pariatur eiusmod eu tempor ad adipisicing magna duis velit mollit aliquip. Tempor et velit consectetur sit esse tempor cupidatat cupidatat. Est fugiat laboris consectetur nostrud eu sunt eiusmod et velit et ullamco pariatur officia. Anim nulla officia id Lorem. Incididunt mollit laborum exercitation labore sint aute cupidatat. "
  //       },
  //       {
  //         id: 8,
  //         forIndex: "62f54d7fed397a550efb1194",
  //         question: "Barber Chaney",
  //         answer: "Non ex eiusmod est anim. Deserunt do velit in culpa minim ex duis velit. Magna id aliquip tempor nulla voluptate nostrud irure sunt laboris elit minim nostrud laborum. Do nostrud exercitation culpa mollit voluptate reprehenderit eiusmod in. Laboris et ullamco duis pariatur incididunt excepteur in eu. Sunt minim qui eiusmod fugiat quis laboris irure commodo ex. Fugiat irure duis dolore consectetur. "
  //       },
  //       {
  //         id: 9,
  //         forIndex: "62f54d7f3e56d6594464286d",
  //         question: "Bender Knox",
  //         answer: "Aliqua cillum veniam officia duis consectetur. Aliquip commodo ut pariatur fugiat proident tempor. Minim enim mollit non nostrud aliqua duis qui in quis ullamco ea aliquip ullamco. Ullamco exercitation et Lorem sint non duis exercitation amet. "
  //       },
  //       {
  //         id: 10,
  //         forIndex: "62f54d7f5103fd91ccc4a5d5",
  //         question: "Violet Gross",
  //         answer: "Exercitation eiusmod magna pariatur dolore deserunt reprehenderit do aliqua non sint anim. Dolor amet occaecat ut quis consequat ad enim nostrud. Sint incididunt elit dolore commodo eiusmod do sit ullamco minim consectetur voluptate occaecat. "
  //       },
  //       {
  //         id: 11,
  //         forIndex: "62f54d7fb11c78ad1658d1f1",
  //         question: "Richard Santiago",
  //         answer: "Reprehenderit ex proident ad reprehenderit voluptate qui. Aliquip dolore esse ex irure duis elit irure eu qui velit adipisicing est ipsum pariatur. Occaecat et quis do sit dolor occaecat cillum aliqua ex irure elit laborum irure anim. "
  //       },
  //       {
  //         id: 12,
  //         forIndex: "62f54d7f9900539cfd331790",
  //         question: "Cassie Anderson",
  //         answer: "Cillum deserunt pariatur occaecat reprehenderit tempor aute non irure anim quis id adipisicing. Tempor culpa aliquip officia tempor voluptate do. Dolor consectetur sint eiusmod est ex eiusmod. Culpa pariatur sit mollit esse ex incididunt excepteur labore aliquip. Est duis esse dolor ea laboris aute Lorem cupidatat reprehenderit laboris in anim pariatur. Ea esse sunt fugiat eiusmod laboris cillum qui et consequat eiusmod sunt. Sit nisi esse dolore anim excepteur non ipsum anim velit labore eu. "
  //       },
  //       {
  //         id: 13,
  //         forIndex: "62f54d7f5fb6aba91356d9ca",
  //         question: "Heidi Slater",
  //         answer: "Nostrud laboris anim commodo sint. Ut exercitation consectetur ipsum minim proident labore labore. Ut aliquip nulla deserunt sit. Ullamco ullamco velit consequat ut non sint dolore laboris ullamco sit. "
  //       },
  //       {
  //         id: 14,
  //         forIndex: "62f54d7ffce7ebba3a912aaf",
  //         question: "Morgan Donovan",
  //         answer: "Laboris cupidatat amet ex laborum dolore qui ullamco. Quis amet laborum deserunt aute minim consequat aute Lorem esse magna et velit. Nulla culpa duis occaecat velit nisi cupidatat commodo pariatur cupidatat. Magna culpa consectetur ullamco elit deserunt qui velit laboris pariatur. Et pariatur occaecat deserunt velit minim dolor amet aliqua nisi. Ex ut ullamco voluptate nostrud id sint reprehenderit sunt do enim qui ex irure. "
  //       },
  //       {
  //         id: 15,
  //         forIndex: "62f54d7fad768c0e7a932ca7",
  //         question: "Nanette Everett",
  //         answer: "Excepteur est laboris occaecat nulla pariatur est. Minim dolor quis et nisi do elit occaecat. Culpa eiusmod fugiat reprehenderit labore anim do veniam minim. Est nulla laboris id commodo ipsum. Ad non duis pariatur eu elit labore adipisicing. "
  //       },
  //       {
  //         id: 16,
  //         forIndex: "62f54d7fee6248bc41ca8729",
  //         question: "Dee Cherry",
  //         answer: "Culpa deserunt Lorem sunt excepteur. Pariatur magna eu exercitation ipsum eiusmod adipisicing commodo dolor nisi pariatur enim. Non amet qui sint occaecat irure ex sint elit. Labore commodo id ea consequat consectetur officia proident adipisicing sint duis reprehenderit. Occaecat sint veniam esse elit Lorem sint ex aliquip. Ipsum voluptate non consequat aliquip. Consectetur aute adipisicing consectetur quis adipisicing voluptate sint. "
  //       },
  //       {
  //         id: 17,
  //         forIndex: "62f54d7f0db38cd38b1db79d",
  //         question: "Debora Hahn",
  //         answer: "Voluptate dolor tempor consectetur sint nostrud eiusmod. Est ipsum veniam minim amet in aliqua. Nisi ex nostrud nulla consequat duis esse dolor velit esse enim et. Tempor aute ullamco ea commodo sit fugiat laboris eu ex. Labore consectetur esse duis magna. Labore dolore pariatur magna proident dolore cillum duis adipisicing fugiat ad culpa. Cupidatat officia ea irure aute sunt dolore adipisicing amet magna. "
  //       }
  //     ]
  //   }
  // ]

  const [tabsFaqList, setTabsFaqList] = useState([]);
  const [currentTab, setCurrentTab] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const selectedTab = useMemo(() => tabsFaqList[currentTab], [currentTab, tabsFaqList]);

  const handleTabClick = (id) => {
    setCurrentTab(id);
  };

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  const resFaq = useAxios(
    "/api/get_faq",
    'GET',
    {}
  );

  if (resFaq.loading) {
    return <Preload/>
  }

  if (resFaq.loaded && tabsFaqList.length === 0) {
    let tabs = {};
    resFaq.data.forEach((el, i) => {
      function generateUniqueHash(length) {
        const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let hash = '';

        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          hash += characters[randomIndex];
        }

        return hash;
      }

      if (tabs[el.category]) {
        tabs[el.category].push({
          id: el.id,
          forIndex: generateUniqueHash(24),
          question: el.quest,
          answer: prepareAnswer(el.answer)
        })
      } else {
        // console.log(prepareAnswer(el.answer));
        tabs[el.category] = [{
          id: el.id,
          forIndex: generateUniqueHash(24),
          question: el.quest,
          answer: prepareAnswer(el.answer)
        }]
      }
    })

    setTabsFaqList(Object.keys(tabs).map((tab, i) => ({
      id: i,
      tabTitle: tab,
      titleInf: 'Hello, Jill Hurst! You have 27 unread messages.',
      itfContent: tabs[tab]
    })))
    setCurrentTab(0);
  }

  function prepareAnswer(answer) {
    const prepareAnswer = JSON.parse(answer).map((el, i) => {
      return el.children.map((ch, j) => {
        if (ch.text) {
          if (ch.bold) {
            return `<b>${ch.text}</b>`
          }
          return ch.text;
        }
        if (ch.character) {
          if (ch.character.type === 'user') {
            return `@${ch.character.name}`
          }
          return `<a className={classNames(styles["link"])} href='https://discord.com/channels/723912565234728972/${ch.character.id}' target="_blank" rel="noreferrer">{"#"}${ch.character.name}</a>`
        }
      }).join('') + '<br/>';
    }).join('');

    return prepareAnswer;
  }

  return (
    <div className={classNames(styles["mainFaqBox"])}>
      {tabsFaqList.length > 1 &&
        <div className={classNames(styles["faqBox"])} data-aos="zoom-in">
          <div className={classNames(styles["faqTitleWrapper"])} data-aos="zoom-in">
          <span>
            <SvgFaq width="100%" height="100%" color="#f4f4f4"/>
          </span>
            <h2 className={classNames(styles["titleH2Styles"])}>Часто задаваемые вопросы</h2>
          </div>
          <div className={classNames(styles["wrapperTabsFaq"])}>
            <div className={classNames(styles["tabs"])} data-aos="zoom-in">
              {tabsFaqList.map((tab, i) => (
                <button
                  className={classNames(styles["buttonFaqTab"])}
                  key={i}
                  id={tab.id}
                  disabled={currentTab === i}
                  onClick={handleTabClick.bind(null, i)}
                >
                  {tab.tabTitle}
                </button>
              ))}
            </div>
            <div className={classNames(styles["content"])} data-aos="zoom-in">
              <div className={classNames(styles["idTab"])}>
                <div className={classNames(styles["tabOne"])}>
                  <h3 className={classNames(styles["title"])}>{selectedTab?.tabTitle}</h3>
                  <p className={classNames(styles["info"])}>{selectedTab?.titleInf}</p>
                  <div className={classNames(styles["lists"])}>
                    {selectedTab?.itfContent.map((el) => {
                      return (
                        <div className={classNames(styles["listOne"])} key={el.id}>
                          <input className={classNames(styles["oneInputCheckBox"])} id={el.forIndex} type="checkbox"/>
                          <label className={classNames(styles["question"])} htmlFor={el.forIndex}>{el.question}</label>
                          <p className={classNames(styles["answerWrapperBox"])} dangerouslySetInnerHTML={{__html: el.answer}}>
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Faq;

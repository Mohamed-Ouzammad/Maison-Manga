import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MangaDetail from "./MangaDetail";
import naruto from '../assets/naruto.jpg';
import one_piece from '../assets/one_piece.jpg';
import dbz from '../assets/dbz.jpg';
import hxh from '../assets/hxh.jpg';
import snk from '../assets/snk.jpg';
import kimetsu from '../assets/kimetsu.jpg';
import vinland from '../assets/vinland.jpg';
import death from '../assets/death.jpg';
import parasite from '../assets/Parasite.jpg';
import mha from '../assets/mha.jpg';
import kuroko from '../assets/kuroko.jpg';
import tokyoR from '../assets/tokyoR.jpg'
import tokyoG from '../assets/tokyoG.jpg'
import baki from '../assets/baki.jpg'


const MangaPage = () => {
  const { id } = useParams();
  const [manga, setManga] = useState(null);

  const mangaData = [
    {
      id: 1,
      cover: one_piece,
      title: "One Piece",
      summary: "L'histoire suit les aventures de Monkey D. Luffy, un garçon dont le corps a acquis les propriétés du caoutchouc après avoir mangé par inadvertance un fruit du démon. Avec son équipage de pirates, appelé l'équipage de Chapeau de paille, Luffy explore Grand Line à la recherche du trésor ultime connu sous le nom de « One Piece » afin de devenir le prochain roi des pirates.",
      stars: 5,
      author: "Eiichiro Oda",
      publicationDate: "1997",
      category: "Action, Aventure",
    },
    {
      id: 2,
      cover: naruto,
      title: "Naruto",
      summary: "L'histoire commence pendant l'adolescence de Naruto, vers ses douze ans. Orphelin cancre et grand farceur, il fait toutes les bêtises possibles pour se faire remarquer. Son rêve : devenir le meilleur Hokage afin d'être reconnu par les habitants de son village. En effet, le démon renard à neuf queues scellé en lui a attisé la crainte et le mépris des autres villageois, qui, avec le temps, ne font plus de différence entre Kyûbi et Naruto. Malgré cela, Naruto s'entraîne dur afin de devenir genin, le premier niveau chez les ninjas. Après avoir raté l'examen genin 3 fois, il arrive finalement à recevoir son bandeau frontal de Konoha. Il est alors inclus dans une équipe de trois apprentis ninjas, avec Sakura Haruno et le talentueux Sasuke Uchiwa qui veut venger les personnes chères à ses yeux, en tuant son frère Itachi Uchiwa. Peu après, ils rencontrent leur jōnin (ninja de classe supérieure), celui qui s'occupera de leur formation : le mystérieux Kakashi Hatake. Au début craint et méprisé par ses pairs, Naruto va peu à peu monter en puissance et gagner le respect et l'affection des villageois grâce, notamment, aux combats dantesques qu'il remportera face aux ennemis les plus puissants du monde ninja.",
      stars: 5,
      author: "Masashi Kishimoto",
      publicationDate: "1999",
      category: "Action, Aventure",
    },
    {
      id: 3,
      cover: dbz,
      title: "Dragon Ball Z",
      summary: "Dragon Ball Z se déroule cinq ans après le mariage de Son Goku et de Chichi, désormais parents de Son Gohan. Raditz, un mystérieux guerrier extraterrestre, qui s'avère être le frère de Son Goku, arrive sur Terre pour retrouver ce dernier. Ce dernier apprend qu'il vient d'une planète de guerriers redoutables dont il ne reste plus que quatre survivants, et qu'il avait été envoyé sur la planète Terre dans le but de la conquérir (une chute alors qu'il était enfant lui aurait fait perdre la mémoire).",
      stars: 4,
      author: "Akira Toriyama",
      publicationDate: "1989",
      category: "Action, Aventure",
    },
    {
      id: 4,
      cover: kimetsu,
      title: "Kimetsu",
      summary: "Dans un Japon de l'ère Taishō, Tanjirō Kamado est le premier enfant d'une famille de marchands de charbon dont le père est décédé : pour subvenir aux besoins de celle-ci, il vend du charbon de bois au village en contrebas de la montagne. Malgré les difficultés de la vie, ils réussissent à trouver un peu de bonheur dans leur quotidien. Un jour, à cause de rumeurs qui circulent à propos d'un démon mangeur d'hommes qui traînerait dans les parages la nuit tombée, il est obligé de passer la nuit chez un Bon Samaritain du village. Seulement, tout bascule à son retour lorsqu'il détecte grâce à son odorat aiguisé une forte odeur de sang : il se précipite chez lui et retrouve sa famille massacrée. Nezuko, l'une de ses petites sœurs, est bien qu'inconsciente la seule survivante et Tanjirō l'emporte donc avec lui, pour tenter de l'amener chez un médecin qui pourrait peut-être la sauver : elle reprend cependant conscience en chemin et, étant devenue elle-même un démon, attaque son frère mais finit tout de même par montrer des signes d'émotions et de pensées humaines. C'est à ce moment qu'intervient un Pourfendeur de démons du nom de Giyū Tomioka, chargé d'éliminer le démon sévissant dans la région. Alors qu'il tente de tuer Nezuko, Giyū se rend compte du comportement singulier de cette dernière qui, au lieu de chercher à dévorer son frère, tente de s'interposer pour empêcher le Pourfendeur de s'en prendre à Tanjirō, qui l'avait défié afin de la sauver alors qu'il n'avait aucune chance, et décide ainsi de les laisser en rengainant son sabre. Sur les conseils de Giyū, Tanjirō se rend chez son maître Sakonji Urokodaki pour s'entraîner à devenir un Pourfendeur de démons, afin d'entamer son périple pour tenter de trouver un antidote pouvant rendre à nouveau humaine sa petite sœur (chose qui, de mémoire d’homme et avec les connaissances médicales actuelles, est en l'état impossible) tout en protégeant les Humains des démons, ainsi que retrouver le démon responsable du massacre de sa famille et de la transformation de Nezuko pour se venger.",
      stars: 5,
      author: "Koyoharu Gotōge",
      publicationDate: "2016",
      category: "Action, Drame",
    },
    {
      id: 5,
      cover: hxh,
      title: "Hunter x Hunter",
      summary: "Gon Freecss est un jeune garçon âgé de 12 ans, rêvant de devenir hunter (chasseur en anglais). Les hunters sont des citoyens d'élite autorisés à faire quasiment tout ce qu'ils souhaitent sur simple présentation de leur licence : ils peuvent ainsi acquérir gratuitement tout objet à la vente sur les fonds de l'association, réquisitionner tout véhicule, logement et outil pour leur travail et sont de facto habilités à exercer tous les métiers du monde, pouvant tout aussi bien devenir chasseurs de primes, chefs-cuisinier, archéologues, zoologues, justiciers ou consultants dans divers domaines. Son père, Ging Freecss, qu'il ne connaît pas directement, est considéré comme un des plus grands hunters de son temps. C'est aussi pour le retrouver que Gon veut devenir hunter. Cependant l'examen de hunter, qui a lieu chaque année, est extrêmement difficile et périlleux. On dit qu'un candidat sur 10 000 arrive sur le lieu des épreuves et qu'un seul candidat tous les trois ans devient hunter à sa première tentative. Durant les épreuves, il n'est pas rare d'être blessé, voire être tué par des monstres, des pièges ou même d'autres concurrents… Au cours de cet examen, Gon va rencontrer différents personnages, aussi bien ami qu'ennemi : Kurapika, dont le seul objectif est de venger son clan, le clan Kuruta, assassiné par la Brigade fantôme et tenter de récupérer les yeux de son clan, les pupilles écarlates ; Léolio, dont le but avoué est d'acquérir de l'argent pour financer ses études de médecine ; Kirua, qui a le même âge que Gon, est le fils d'une famille d'assassins d'élite, la famille Zoldik, ne souhaite pas poursuivre la voie de sa famille, participant à cet examen par simple amour du défi ; Hisoka, dont la grande passion est le combat contre des guerriers très puissants ; ainsi que beaucoup d'autres… La force de Gon n'est pas que physique : son charisme, sa pureté, sa gentillesse, sa grande générosité et surtout son incroyable capacité à attirer la sympathie l'aident souvent à se sortir des situations les plus périlleuses.",
      stars: 4,
      author: "Yoshihiro Togashi",
      publicationDate: "2011",
      category: "Action, Aventure",
    },
    {
      id: 6,
      cover: death,
      title: "Death Note",
      summary: "Light Yagami est un lycéen surdoué qui juge le monde actuel criminel, pourri et corrompu. Sa vie change du tout au tout le jour où il ramasse par hasard un mystérieux cahier intitulé « Death Note ». Son mode d'emploi indique que « la personne dont le nom est écrit dans ce cahier meurt ». D'abord sceptique, Light décide toutefois de tester le cahier et découvre que son pouvoir est bien réel. Il rencontre l'ancien propriétaire du Death Note, un dieu de la mort nommé Ryûk. Celui-ci déclare avoir volontairement laissé tomber son carnet dans le but de se divertir. Light décide d'utiliser le Death Note pour exterminer les criminels, dans le but de bâtir un monde parfait dont il sera le dieu. Il apprend peu à peu à se servir des pouvoirs du cahier et de ses règles : l'utilisateur ne peut tuer une personne que s'il connait son visage, en y inscrivant son prénom et son nom de famille. Il peut également en préciser la cause et les circonstances détaillées, la cause par défaut étant la crise cardiaque. Les nombreuses morts inexpliquées de criminels à travers le monde attirent l'attention d'Interpol et du mystérieux L, un détective particulièrement talentueux, mais dont personne ne connaît l'identité. L décide d'enquêter sur le tueur en série, surnommé « Kira » (キラ?, dérivé de la prononciation japonaise de « killer ») par le grand public.",
      stars: 5,
      author: "Tsugumi Ōba",
      publicationDate: "2006",
      category: "Suspence, Drame",
    },
    {
      id: 7,
      cover: mha,
      title: "My Hero Academia",
      summary: "Dans un monde où 80 % de la population mondiale possède des super-pouvoirs, nommés « Alters » (個性, Kosei?), on suit les aventures de Izuku Midoriya, l'un des rares humains ne possédant pas d'Alter. Malgré cela, Izuku rêve pourtant de rejoindre la filière super-héroïque de la grande académie Yuei (勇井高校, Yūei Kōkō?) et de devenir un jour un des plus grands héros de son époque. Un jour, Izuku eût la chance de rencontrer son idole de toujours, All Might, numéro 1 des super-héros. Celui-ci va léguer à Izuku son Alter, le One For All.",
      stars: 4,
      author: "Kōhei Horikoshi",
      publicationDate: "2014",
      category: "Aventure, Action",
    },
    {
      id: 8,
      cover: snk,
      title: "Shingeki No Kyojin",
      summary: "Eren est un petit garçon rêvant de voyager dans le monde extérieur. Mais cela est impossible car il vit dans une ville fortifiée aux murailles dépassant les cinquante mètres de haut. Ces remparts sont nécessaires à la sécurité des habitants car ils sont les derniers représentants de l'humanité, obligés de se cacher pour échapper aux titans qui ont massacré la majeure partie du genre humain un siècle plus tôt. Eren est têtu : il ne se doute pas de la violence des combats qui ont opposé les hommes aux titans. Il décide de poster sa candidature pour devenir éclaireur, car il s'agit des seuls soldats autorisés à sortir de la ville pour en savoir plus sur les titans. Mais un beau jour, un géant parvient à détruire le mur qui protégeait la ville et ouvre la voie à plusieurs dizaines de ses congénères ! Eren assiste impuissant à la mort atroce de sa mère qui finit dévorée. Alors qu'il fuit avec d'autres survivants, il se jure de se venger et de détruire la race des titans jusqu'à ce qu'il n'en reste plus un seul !!",
      stars: 5,
      author: "Hajime Isayama",
      publicationDate: "2013",
      category: "Aventure, Action, Drame",
    },
    {
      id: 9,
      cover: vinland,
      title: "Vinland Saga",
      summary: "Ce manga s'inspire de plusieurs sagas islandaises : le Flateyjarbók, la Saga des Groenlandais et la Saga d'Erik le Rouge. Le titre de la série renvoie à la découverte de l'Amérique du Nord par les Vikings, qui nommèrent cette terre Vinland. La découverte aurait vraisemblablement été le fait du navigateur islandais Leif Erikson autour de l'an 1000, personnage qui apparaît justement dans le manga. Mêlant personnages et évènements historiques avec de nombreux éléments fictifs, Vinland Saga est le récit de la vie d'un jeune islandais, Thorfinn Thorsson. Ce fils d'un illustre guerrier repenti verra sa vie basculer lorsque son père est assassiné par des pirates menés par le rusé Askeladd. Animé par la vengeance, Thorfinn suivra puis intégrera cette bande, avec le désir affiché de tuer dans un duel loyal l'assassin de son père. La quête vengeresse de Thorfinn est le fil rouge du prologue de l'histoire (tomes 01 à 08). Elle le mènera notamment à participer à l'invasion de l'Angleterre par les Danois, au début du xie siècle. Cette partie de l'histoire traite avec brio de sujets divers tels que la guerre, la politique, la religion, et brosse un portrait convaincant et humain de la vie quotidienne des populations victimes de la guerre mais aussi et surtout des guerriers Vikings. À partir du tome 8 débute le deuxième arc de l'histoire. L'action quitte les champs de bataille anglais pour s'établir dans une propriété agricole d'Europe du Nord, tandis que le thème de la guerre fait place à celui de la rédemption.",
      stars: 4,
      author: "Makoto Yukimura",
      publicationDate: "2005",
      category: "Action, Aventure, Drame, Violence, Combat",
    },
    {
      id: 10,
      cover: parasite,
      title: "Parasite Maxim",
      summary: "Resumé",
      stars: 4,
      author: "Hitoshi Iwaaki",
      publicationDate: "2014",
      category: "Action, Aventure, Paranormal",
    },
    {
      id: 11,
      cover: kuroko,
      title: "Koruko's Basket",
      summary: "Resumé",
      stars: 4,
      author: "Tadatoshi Fujimaki",
      publicationDate: "2012",
      category: "Sport, Aventure, Competition",
    },
    {
      id: 12,
      cover: tokyoG,
      title: "Tokyo Ghoul",
      summary: "Resumé de tokyo ghoul",
      stars: 4,
      author: "Sui Ishida",
      publicationDate: "2012",
      category: "Meurtre, Aventure, Drame",
    },
    {
      id: 13,
      cover: tokyoR,
      title: "Tokyo Revenger",
      summary: "Resumé de tokyo revenger",
      stars: 4,
      author: "Ken Wakui",
      publicationDate: "2017",
      category: "Gang, Action, Drame",
    },
    {
      id: 14,
      cover: baki,
      title: "Baki",
      summary: "Resumé de baki",
      stars: 4,
      author: "Keisuke Itagaki",
      publicationDate: "2021",
      category: "Combat, Action, Force",
    },
  ];

  useState(() => {
    setManga(mangaData.find(item => item.id === parseInt(id)));
  }, [id]);

  return (
    <div>
      <MangaDetail manga={manga} />
    </div>
  );
};

export default MangaPage;
export type Gift = {
  id: string
  title: string
  category: "books" | "kindle" | "accessories" | "puzzle" | "paint" | "other"
  description: string
  link: string
  imageUrl?: string
  price?: string
}

export const gifts: Gift[] = [
  {
    id: "bd-1",
    title: "Le Problème avec les fantômes",
    category: "books",
    description:
      "Combien de temps vivent les fantômes ?Un soir d’été, quatre amies dans la fin de la vingtaine se retrouvent pour prendre un verre. Il fait doux, l’ambiance est joyeuse. Il y a d'abord Anne et Irène, puis Nour arrive à son tour, suivie de Marie-Pierre. Au fil de la soirée et des anecdotes, Irène vient briser sans le vouloir cette atmosphère tendre en parlant du fantôme de leur ami Caleb, décédé l'année passée. C’est troublant, mais Irène le voit partout : dans la rue, dans le métro, à l’épicerie. Entre malaise et colère...",
    link: "https://www.fnac.com/a21422214/Mirion-Malle-Le-Probleme-avec-les-fantomes",
    imageUrl: "/Le-Probleme-avec-les-fantomes.jpg",
  },
  {
    id: "books-8",
    title: "Pourquoi les spaghetti bolognese n'existent pas",
    category: "books",
    description:
      "Après Le Manuel du Garçon Boucher, Arthur Le Caisne secoue de nouveau nos neurones et nos croyances sur la cuisine en près de 700 pourquoi et explications. Ustensiles, ingrédients, viandes, poissons et fruits de mer, légumes, préparations et cuissons sont passés au crible des remises en question. Chacune des réponses repose sur les études et expériences scientifiques les plus récentes, et est toujours livrée avec une bonne dose d’humour et de bienveillance.",
    link: "https://www.fnac.com/a13602245/Arthur-Le-Caisne-Pourquoi-les-spaghetti-bolognese-n-existent-pas",
    imageUrl: "/bolo.jpg",
  },
  {
    id: "books-9",
    title: "De l'autre côté de la mère",
    category: "books",
    description:
      "Nine était toute petite quand sa mère, Fiona, a fui sans plus jamais donner de nouvelles. Élevée par un père aimant mais silencieux, elle a grandi avec cette absence et ses questions.",
    link: "https://www.fnac.com/a21770433/Pauline-Harmange-De-l-autre-cote-de-la-mere",
    imageUrl: "/mere.jpg",
  },
  {
    id: "books-10",
    title: "Manuel du cuisinier amateur - Tome 2",
    category: "books",
    description:
      "Le Manuel du Cuisinier Amateur rassemble plus de 150 recettes et techniques permettant à tout  un chacun de revisiter les plus grands classiques comme la blanquette de veau ou le hachis parmentier, de découvrir une multitude d'autres plats emblématiques du monde entier comme le ramen, le dalh ou le BLT mais aussi d'apprendre à manier des techniques et des ustensiles ultra-utiles pour briller en cuisine. ",
    link: "https://www.editionsduchene.fr/livre/manuel-du-cuisinier-amateur-tome-2-9782812321689/",
    imageUrl: "/amateur.webp",
  },
  {
    id: "paint-1",
    title: "Boutiques du monde",
    category: "paint",
    description:
      "Retrouvez des pas à pas illustrés de techniques de coloriage au début de l’ouvrage, puis laissez parler votre sensibilité et votre créativité en donnant des couleurs aux 40 illustrations pleines de charme présentes dans ce livre de coloriage.",
    link: "https://www.hachetteheroes.com/produit/85516/9782017312529/boutiques-du-monde",
    imageUrl: "/boutiques.webp",
  },
  {
    id: "delonhgi",
    title: "Delonhgi La Specialista Arte",
    category: "other",
    description:
      "Découvrez un monde de possibilités avec La Specialista Arte Evo. Cet  machine expresso manuelle d’inspiration barista vous permet de contrôler l’ensemble du processus de préparation du café.",
    link: "https://www.delonghi.com/fr-fr/p/la-specialista-arte-machine-expresso-ec9255.m-la-specialista-arte-evo/EC9255.M.html?pid=0132126074",
    imageUrl: "/delonghi.png",
  },
  {
    id: "mug",
    title: "Tasse Rifle Paper Co.",
    category: "other",
    description:
      'Une magnifique tasse en porcelaine "Ladies Night Book Club" de Rifle Paper Co. Parfaite pour accompagner tes moments de lecture avec une bonne boisson chaude.',
    link: "https://riflepaperco.com/products/porcelain-mug-ladies-night-book-club?utm_source=21181&utm_medium=affiliate&utm_content=21181&clickId=5273990404&pj_creativeid=8-12339&pj_publisherid=21181",
    imageUrl: "/mug-rifle-paper.jpg",
  },
  {
    id: "book-1",
    title: "The Wedding People",
    category: "books",
    description:
      "Un roman captivant qui te plongera dans une histoire de mariage pleine de rebondissements et d'émotions.",
    link: "https://www.goodreads.com/book/show/198902277-the-wedding-people",
    imageUrl: "/wedding-people.jpg",
  },
  {
    id: "bougie-1",
    title: "Bougie naturelle « Lecture sous la couette »",
    category: "other",
    description:
      "Avec notre artisan parfumeur, nous avons porté une attention toute particulière à l’harmonie entre le parfum de chaque bougie et l’auteur ou l’œuvre littéraire qui lui est associé. Chaque fragrance a été soigneusement élaborée pour capturer l’essence du texte et offrir une expérience sensorielle qui renforce l’immersion dans la lecture.",
    link: "https://zigzagisland.fr/produit/bougie-lecture-sous-la-couette/",
    imageUrl: "/bougie-1.jpg",
  },
  {
    id: "book-2",
    title: "First-Time Caller",
    category: "books",
    description:
      "Une histoire touchante et drôle qui explore les relations humaines et les nouvelles connexions.",
    link: "https://www.goodreads.com/book/show/213243908-first-time-caller",
    imageUrl: "/first-time.jpg",
  },
  {
    id: "book-3",
    title: "Nora Goes Off Script",
    category: "books",
    description:
      "Une comédie romantique délicieuse où Nora doit naviguer entre sa vie réelle et le monde du cinéma.",
    link: "https://www.goodreads.com/book/show/58988426-nora-goes-off-script",
    imageUrl: "/nora.jpg",
  },
  {
    id: "book-4",
    title: "Life's Too Short",
    category: "books",
    description:
      "Un roman qui célèbre la vie, l'amitié et l'importance de profiter de chaque instant.",
    link: "https://www.goodreads.com/book/show/54377375-life-s-too-short",
    imageUrl: "/too-short.jpg",
  },
  {
    id: "puzzle-1",
    title: "Puzzle Central Road Shinjuku",
    category: "puzzle",
    description:
      "La collection Puzzle Quatre Coins vous propose une jolie série d’évasion en 1000 pièces ! Découvrez le Puzzle Central Road Shinjuku, une virée survoltée dans les rues de Tokyo illustrées par le talentueux Clément Thoby.",
    link: "https://monjolipuzzle.com/products/puzzle-central-road-shinjuku-la-petite-epicerie-1000-pieces/?srsltid=AfmBOordPD3spb0nCOq8WArZ_xW3TIVn4udvhjuKvpEOsRy_W5l0C9SX5es",
    imageUrl: "/puzzle-1.jpg",
  },
  {
    id: "book-5",
    title: "Under Your Spell",
    category: "books",
    description: "Une romance ensorcelante pleine de magie, d'humour et de tension romantique.",
    link: "https://www.goodreads.com/book/show/199798015-under-your-spell",
    imageUrl: "/your-spell.jpg",
  },
  {
    id: "book-6",
    title: "Out on a Limb",
    category: "books",
    description:
      "Une histoire rafraîchissante sur le courage de prendre des risques et de suivre son cœur.",
    link: "https://www.goodreads.com/book/show/124950295-out-on-a-limb",
    imageUrl: "/out-limb.jpg",
  },
  {
    id: "kindle",
    title: "Kindle Paperwhite Noir",
    category: "kindle",
    description:
      "Le nouveau Kindle Paperwhite en noir pour emporter toute ta bibliothèque partout avec toi. Écran antireflet, étanche et avec une autonomie incroyable.",
    link: "https://www.amazon.fr/dp/B0CFPWLGF2?tag=fransite-21&linkCode=ogi&th=1",
    imageUrl: "/kindle.jpg",
  },
  {
    id: "case-1",
    title: "Étui Kindle à Fleurs",
    category: "accessories",
    description:
      "Une pochette élégante pour Kindle Paperwhite avec un magnifique motif floral. Parfaite pour protéger ta liseuse avec style.",
    link: "https://www.etsy.com/fr/listing/4340395728/etui-paperwhite-pour-kindle-a-fleurs",
    imageUrl: "/kindle-floral.jpg",
  },
  {
    id: "case-2",
    title: "Étui Kindle à Carreaux Rouge et Blanc",
    category: "accessories",
    description:
      "Un étui charmant avec un motif à carreaux rouge et blanc, parfait pour un look cosy et élégant.",
    link: "https://www.etsy.com/fr/listing/4322339799/etui-pour-kindle-a-carreaux-rouge-et",
    imageUrl: "/kindle-cochonou.jpg",
  },
  {
    id: "case-3",
    title: "Étui Cuir Végétal Floral Vert",
    category: "accessories",
    description:
      "Étui en cuir végétal luxueux avec motif floral vert de Klevercase. Élégant et éco-responsable.",
    link: "https://klevercase.com/collections/luxury-faux-leather-universal-ereader-cases/products/floral-green-faux-leather-ereader-case?variant=45084714467522",
    imageUrl: "/kindle-cuir-red.webp",
  },
  {
    id: "clear-case",
    title: "Coque Transparente Kindle",
    category: "accessories",
    description:
      "Protection transparente qui laisse voir le design de ta Kindle tout en la protégeant efficacement.",
    link: "https://www.amazon.fr/CoBak-Transparent-Paperwhite-Génération-Colorsoft/dp/B0DK9DS755/",
    imageUrl: "/etui-kindle.jpg",
  },
  {
    id: "stickers-1",
    title: "Autocollants Book Lover",
    category: "accessories",
    description:
      "Lot de 10, 20 ou 50 autocollants pour book lovers. Parfaits pour décorer ta Kindle avec style.",
    link: "https://www.etsy.com/fr/listing/4382684070/lot-de-10-20-ou-50-autocollants-de",
    imageUrl: "/sticker.jpg",
  },
  {
    id: "stickers-2",
    title: "Autocollants Lecture",
    category: "accessories",
    description:
      "Feuille d'autocollants sur le thème de la lecture, avec des designs adorables et colorés.",
    link: "https://www.etsy.com/fr/listing/975991536/feuille-dautocollants-lecture-stickers",
    imageUrl: "/sticker-etsy.jpg",
  },
  {
    id: "stickers-3",
    title: "Autocollants Chatons",
    category: "accessories",
    description:
      "Des petits chatons trop mignons pour décorer ta liseuse et ajouter une touche de douceur.",
    link: "https://www.etsy.com/fr/listing/1475438308/feuille-dautocollants-chatons-stickers",
    imageUrl: "/other-sticker.jpg",
  },
  {
    id: "stickers-4",
    title: "Autocollants Livres",
    category: "accessories",
    description:
      "Feuille d'autocollants avec des motifs de livres, parfaite pour les amoureuses de lecture.",
    link: "https://www.etsy.com/fr/listing/1575575611/feuille-dautocollants-livres",
    imageUrl: "/sticker-4.jpg",
  },
  {
    id: "stickers-5",
    title: "Autocollants Mugs Mignons",
    category: "accessories",
    description: "Des mugs adorables en autocollants pour ajouter une touche cosy à ta Kindle.",
    link: "https://www.etsy.com/fr/listing/1602163160/feuille-dautocollants-mugs-mignons-o",
    imageUrl: "/sticker-5.jpg",
  },
  {
    id: "grip-1",
    title: "Poignée E-Reader",
    category: "accessories",
    description:
      "Poignée pratique pour tenir ta Kindle confortablement pendant des heures de lecture. Bouche ouverte et fermée.",
    link: "https://www.etsy.com/fr/listing/1882891723/e-reader-bouche-ouverte-et-fermee-o",
    imageUrl: "/kindle-grip.jpg",
  },
  {
    id: "grip-2",
    title: "Poignée Transparente Dragon",
    category: "accessories",
    description:
      "Une poignée transparente avec un magnifique motif de dragon, parfaite pour les fans de fantasy.",
    link: "https://www.etsy.com/fr/listing/1873704328/poignee-transparente-pour-kindle-dragon",
    imageUrl: "/kindle-grip-2.jpg",
  },
]

export const getCategoryLabel = (category: Gift["category"]): string => {
  const labels = {
    books: "Livres",
    kindle: "Kindle",
    accessories: "Accessoires",
    other: "Autres",
    puzzle: "Puzzles",
    paint: "Peintures",
  }
  return labels[category]
}

export const getGiftById = (id: string): Gift | undefined => {
  return gifts.find((gift) => gift.id === id)
}

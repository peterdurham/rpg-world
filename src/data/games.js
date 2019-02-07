const games = [
  {
    id: 1,
    title: "Mass Effect 2",
    release: "Jan 26, 2010",
    developer: "Bioware",
    genre: "Action RPG",
    score: 8.9,
    platforms: ["PC", "PlayStation 3", "Xbox 360"],
    price: 19.99,
    summary:
      "The Mass Effect trilogy is a science fiction adventure set in a vast universe filled with dangerous alien life forms and mysterious uncharted planets. In this dark second chapter, Saren’s evil army of Geth soldiers has just been defeated, and humans, who are still struggling to make their mark on the galactic stage, are now faced with an even greater peril. "
  },
  {
    id: 2,
    title: "The Elder Scrolls V: Skyrim",
    release: "Nov 11, 2011",
    developer: "Bethesda Game Studios",
    genre: "First-Person",
    score: 8.5,
    platforms: ["PC", "PlayStation 3", "Xbox 360"],
    price: 19.99,
    summary:
      "The next chapter in the Elder Scrolls saga arrives from the Bethesda Game Studios. Skyrim reimagines the open-world fantasy epic, bringing to life a complete virtual world open for you to explore any way you choose. Play any type of character you can imagine, and do whatever you want; the legendary freedom of choice, storytelling, and adventure of The Elder Scrolls is realized like never before. Skyrim's new game engine brings to life a complete virtual world with rolling clouds, rugged mountains, bustling cities, lush fields, and ancient dungeons. Choose from hundreds of weapons, spells, and abilities. The new character system allows you to play any way you want and define yourself through your actions. Battle ancient dragons like you've never seen. As Dragonborn, learn their secrets and harness their power for yourself. "
  },
  {
    id: 3,
    title: "Baldur's Gate",
    release: "Sep 34, 2000",
    developer: "Bioware",
    genre: "PC-style RPG",
    score: 9.2,
    platforms: ["PC"],
    price: 9.99,
    summary:
      "Baldur's Gate is a fantasy role-playing video game developed by BioWare and published in 1998 by Interplay Entertainment. It is the first game in the Baldur's Gate series and takes place in the Forgotten Realms, a high fantasy campaign setting, using a modified version of the Advanced Dungeons & Dragons (AD&D) 2nd edition rules. It was the first game to use the Infinity Engine for its graphics, with Interplay using the engine for other Forgotten Realms-licensed games, including the Icewind Dale series, as well as other licensed D&D campaign worlds such as Planescape: Torment. "
  },
  {
    id: 4,
    title: "Divinity: Original Sin II",
    release: "Aug 31, 2018",
    developer: "Larian Studios",
    genre: "Western-Style RPG",
    score: 8.9,
    platforms: ["PC", "PlayStation 4", "Xbox One"],
    price: 39.99,
    summary:
      "Master deep, tactical combat. Join up to 3 other players - but know that only one of you will have the chance to become a God."
  },
  {
    id: 5,
    title: "Final Fantasy IX",
    release: "Nov 13, 2000",
    developer: "SquareSoft",
    genre: "Console-style RPG",
    score: 9.2,
    platforms: ["PlayStation"],
    price: 14.99,
    summary:
      "The last Final Fantasy for the PlayStation, Final Fantasy IX returns to the pure fantasy roots that spawned the series. This latest installment features highly detailed characters, vehicles, and environments, and breathtaking cinema-graphics. The addition of brand new features such as the story-enhancing Active Time Event system and the return of minigames that grant additional gameplay make Final Fantasy IX not only a memorable gaming experience, but also a significant step forward in the series."
  },
  {
    id: 6,
    title: "Chrono Cross",
    release: "Aug 15, 2000",
    developer: "SquareSoft",
    genre: "Console-style RPG",
    score: 8.8,
    platforms: ["Playstation"],
    price: 9.99,
    summary:
      "Featuring a storyline developed by the creator of Chrono Trigger and Xenogears, Chrono Cross has been christened the Best RPG Creation by its development team. With multiple scenarios cast along a single story thread, and many different endings, each replay can result in an entirely new adventure. In addition, a brand new battle system makes combat smooth and innovative by introducing an element field system and combo system that gives the player unparalleled flexibility in their fighting options. The elimination of random battles also quickens the pace of the game, and places the choice of where to battle in the player's hands. With character designs by a famed Japanese illustrator and music by the original Chrono Trigger composer, Chrono Cross features visuals and sounds that bring its magic to life."
  },
  {
    id: 7,
    title: "The Elder Scrolls IV: Oblivion",
    release: "Mar 20, 2006",
    developer: "Bethesda Softworks",
    genre: "First-Person RPG",
    score: 8.7,
    platforms: ["PC", "PlayStation 3", "Xbox 360"],
    price: 14.99,
    summary:
      "Oblivion is a single-player game that takes place in Tamriel's capital province, Cyrodiil. You are given the task of finding the hidden heir to a throne that sits empty, the previous emperor having been killed by an unknown assassin. With no true Emperor, the gates to Oblivion (the equivalent of hell in the world of Tamriel) open, and demons begin to invade Cyrodiil and attack its people and towns. It's up to you to find the lost heir to the throne and unravel the sinister plot that threatens to destroy all of Tamriel."
  },
  {
    id: 8,
    title: "Divinity: Original Sin",
    release: "Oct 27, 2015",
    developer: "Larian Studios",
    genre: "Action RPG",
    score: 8.3,
    platforms: ["PC", "PlayStation 4", "Xbox One"],
    price: 29.99,
    summary:
      "Gather your party and get ready for a new, back-to-the-roots RPG adventure. Discuss your decisions with companions; fight foes in turn-based combat; explore an open world and interact with everything and everyone you see. Join up with a friend to play online in co-op and make your own…"
  },
  {
    id: 9,
    title: "Diablo",
    release: "Dec 31, 1996",
    developer: "Blizzard Entertainment",
    genre: "Action RPG",
    score: 8.7,
    platforms: ["PC"],
    price: 9.99,
    summary:
      "The kingdom of Khandaras has fallen into chaos. An unknown force of evil has swept across the land. Plunging it nto civil war and terrorizing the populace. A mad king, his missing son, and a mysterious archbishop are all pieces to the puzzle that faces you. You have journeyed to the source of the evil. The town of Tristram. Now inhabited by only a handful of survivors. "
  },
  {
    id: 10,
    title: "Bastion",
    release: "Aug 30, 2012",
    developer: "Warner Bros Interactive",
    genre: "Action RPG",
    score: 8.1,
    platforms: [
      "PC",
      "PlayStation 4",
      "Xbox 360",
      "Xbox One",
      "Nintendo Switch"
    ],
    price: 14.99,
    summary:
      "The goal of the game is to construct a safe haven in the wake of the Calamity, a cataclysmic event that shattered the world into a series of floating islands. As players journey into the wild unknown in search of survivors and supplies, they will confront strange beasts, forge an array of customizable weapons, and gain new powers from specially-brewed spirits. The entire play experience of Bastion is dynamically narrated, gradually revealing a rich backstory as the narrator reacts to the player's actions in real time"
  },
  {
    id: 11,
    title: "Star Wars: Knights of the Old Republic",
    release: "Jul 17, 2003",
    developer: "BioWare",
    genre: "Third-person",
    score: 9.0,
    platforms: ["PC"],
    price: 4.99,
    summary:
      "Star Wars: Knights of the Old Republic (sometimes known simply as Knights of the Old Republic or KOTOR) is a role-playing video game set in the Star Wars universe. Developed by BioWare and published by LucasArts, the game was released for the Xbox on July 15, 2003, and for Microsoft Windows on November 19, 2003. The game was later ported to Mac OS X, iOS, and Android by Aspyr, and it is playable on the Xbox 360 and Xbox One via their respective backwards-compatibility features."
  },
  {
    id: 12,
    title: "The Witcher 3: Wild Hunt",
    release: "May 18, 2015",
    developer: "CD Projekt Red Studio",
    genre: "Action RPG",
    score: 8.9,
    platforms: ["PC", "PlayStation 4", "Xbox One"],
    price: 29.99,
    summary:
      "With the Empire attacking the Kingdoms of the North and the Wild Hunt, a cavalcade of ghastly riders, breathing down your neck, the only way to survive is to fight back. As Geralt of Rivia, a master swordsman and monster hunter, leave none of your enemies standing. Explore a gigantic open…"
  },
  {
    id: 13,
    title: "Fallout 3",
    release: "Oct 28, 2008",
    developer: "Bethesda Game Studios",
    genre: "First-person RPG",
    score: 8.5,
    platforms: ["PC", "PlayStation 3"],
    price: 19.99,
    summary:
      "Vault-Tec engineers have worked around the clock on an interactive reproduction of Wasteland life for you to enjoy from the comfort of your own vault. Included is an expansive world, unique combat, shockingly realistic visuals, tons of player choice, and an incredible cast of dynamic characters. Every minute is a fight for survival against the terrors of the outside world – radiation, Super Mutants, and hostile mutated creatures."
  },
  {
    id: 14,
    title: "Mass Effect 3",
    release: "Mar 5, 2012",
    developer: "BioWare",
    genre: "Action RPG",
    score: 5.6,
    platforms: ["PC", "PlayStation 3", "Xbox 360"],
    price: 9.99,
    summary:
      "BioWare completes the Mass Effect Trilogy with Mass Effect 3. Earth is burning. Striking from beyond known space, a race of terrifying machines have begun their destruction of the human race. As Commander Shepard, an Alliance Marine, the only hope for saving mankind is to rally the civilizations of the galaxy and launch one final mission to take back the Earth. "
  },
  {
    id: 15,
    title: "World of Warcraft",
    release: "Nov 23, 2004",
    developer: "Blizzard Entertainent",
    genre: "MMORPG",
    score: 7.4,
    platforms: ["PC"],
    price: 19.99,
    summary:
      "Four years have passed since the aftermath of Warcraft III: Reign of Chaos, and a great tension now smolders throughout the ravaged world of Azeroth. As the battle-worn races begin to rebuild their shattered kingdoms, new threats, both ancient and ominous, arise to plague the world once again. World of Warcraft is an online role-playing experience set in the award-winning Warcraft universe. Players assume the roles of Warcraft heroes as they explore, adventure, and quest across a vast world. "
  },
  {
    id: 16,
    title: "BloodBorne",
    release: "Mar 24, 2015",
    developer: "From Software",
    genre: "Action RPG",
    score: 8.9,
    platforms: ["PlayStation 4"],
    price: 59.99,
    summary:
      " Bloodborne is an action RPG in which you hunt for answers in the ancient city of Yharnam, now cursed with a strange endemic illness spreading through the streets like a disease. Peril, death and madness infest this dark world, and you're tasked with uncovering its darkest secrets which will be necessary for you to survive. Armed with a singular arsenal of weaponry, including guns and saw cleavers, you'll require wits, strategy and reflexes to dispatch the agile and intelligent enemies that guard the city's underbelly. You will utility holy chalices to access an array of vast underground ruins, chock full of traps, beasts, and rewards, to explore and conquer on your own or with other people. "
  },
  {
    id: 17,
    title: "Vagrant Story",
    release: "May 15, 2000",
    developer: "SquareSoft",
    genre: "Japanese-style RPG",
    score: 9.0,
    platforms: ["PlayStation"],
    price: 9.99,
    summary:
      "Relive an adventurous tale rich with agents, espionage, and conspiracies. Challenge deadly monsters and villains with your steel and magic. Clear your name by uncovering a sinister plot -- or perish in the attempt."
  },
  {
    id: 18,
    title: "Final Fantasy XII",
    release: "Oct 31, 2006",
    developer: "Square Enix",
    genre: "Console-style RPG",
    score: 8.0,
    platforms: ["PlayStation 2"],
    price: 19.99,
    summary:
      "The story takes place in a world called Ivalice, in an age when magic was commonplace and airships plied the skies - the Archadian Empire, seeking to strengthen its base of power, had been invading and subjugating its neighboring lands one by one- a fate which befell the small Kingdom of Dalmasca. Archadia's invasion and the subsequent death of the Dalmascan king prompted the Princess Ashe, the sole surviving heir to the Dalmascan throne, to take up arms against the invaders."
  },
  {
    id: 19,
    title: "Final Fantasy X",
    release: "Dec 17, 2001",
    developer: "SquareSoft",
    genre: "Console-style RPG",
    score: 9.0,
    platforms: ["PlayStation 2"],
    price: 19.99,
    summary:
      "Final Fantasy's first game on the Playstation 2 is the first to use voice acting and a massive leap in the cinematic approach to storytelling. Stop reading and go play."
  },
  {
    id: 20,
    title: "Final Fantasy VII",
    release: "Sep 3, 1997",
    developer: "SquareSoft",
    genre: "Console-style RPG",
    score: 9.2,
    platforms: ["PC", "PlayStation"],
    price: 14.99,
    summary:
      "An epic adventure across 3 cd-roms. What begins as a rebellion against an evil corporation becomes much more. And what erupts goes beyond imagination. With vivid landscapes, lush 3D animation and environments, Square Soft's multi-million dollar masterpiece is like nothing ever seen before."
  },
  {
    id: 21,
    title: "Chrono Trigger",
    release: "Nov 25, 2008",
    developer: "TOSE",
    genre: "Japanese-style RPG",
    score: 9.2,
    platforms: ["Super Nintendo", "PlayStation"],
    price: 9.99,
    summary:
      "When a newly developed teleportation device malfunctions at the Millennial Fair, young Crono must travel through time to rescue his unfortunate companion from an intricate web of past and present perils. The swashbuckling adventure that ensues soon unveils an evil force set to destroy the world, triggering Crono's race against time to change the course of history and bring about a brighter future. Features an engaging and unparalleled storyline, leading to the discovery of multiple epic conclusions to a journey that transcends time. An inspiring musical score created by Yasunori Mitsuda."
  },
  {
    id: 22,
    title: "Xenoblade Chronicles",
    release: "Apr 6, 2012",
    developer: "Monolith Soft",
    genre: "Action RPG",
    score: 9.2,
    platforms: ["Wii"],
    price: 29.99,
    summary:
      "Xenoblade Chronicles throws you into a universe bursting with imagination. Take hold of an ancient sword that offers glimpses of the future, customise your characters extensively and discover a world where your relationships with others matter."
  },
  {
    id: 23,
    title: "Dark Souls II",
    release: "Mar 11, 2014",
    developer: "From Software",
    genre: "Action RPG",
    score: 7.9,
    platforms: ["PC", "PlayStation 3", "Xbox 360"],
    price: 19.99,
    summary:
      "Prepare to die... Again. Dare yourself to engage against intense gameplay in a vast world powered by a new engine. Immerse yourself into mind-bending environments filled with new twisted monsters and deadly bosses. A vast array of threats will prey on human senses & phobias - auditory hallucinations, vertigo, acrophobia, etc. More intricate customization options provide weapons and armor tailoring to player style."
  },
  {
    id: 24,
    title: "Baldur's Gate II: Shadows_of_Amn",
    release: "Sep 21, 2000",
    developer: "BioWare",
    genre: "PC-style RPG",
    score: 8.8,
    platforms: ["PC"],
    price: 9.99,
    summary:
      "Baldur's Gate II: Shadows of Amn is a role-playing video game developed by BioWare and published by Interplay Entertainment. It is the sequel to Baldur's Gate (1998) and was released for Microsoft Windows in September 2000. Like Baldur's Gate, the game takes place in the Forgotten Realms—a fantasy campaign setting—and is based on the Advanced Dungeons & Dragons 2nd edition rules. Powered by BioWare's Infinity Engine, Baldur's Gate II uses an isometric perspective and pausable real-time gameplay. The player controls a party of up to six characters, one of whom is the player-created protagonist, while the others are certain characters recruited from the game world."
  },
  {
    id: 25,
    title: "Monster Hunter: World",
    release: "Jan 26, 2018",
    developer: "Capcom",
    genre: "Action RPG",
    score: 7.7,
    platforms: ["PC", "PlayStation 4", "Xbox One"],
    price: 59.99,
    summary:
      " In Monster Hunter: World you assume the role of a hunter venturing to a new continent where you track down and slay ferocious beasts in heart-pounding battles. This new land and its diverse inhabitants play a critical role in each quest as you strategically use the surrounding environment including terrain, vegetation and wildlife to your advantage in battle or become hindered by the hazards they present. As a hunter, you must use your cunning and expertise to track and maneuver your targets throughout the intense, evolving battles."
  },
  {
    id: 26,
    title: "Guild Wars 2",
    release: "Aug 28, 2012",
    developer: "ArenaNet",
    genre: "MMORPG",
    score: 8.1,
    platforms: ["PC"],
    price: 9.99,
    summary:
      "Guild Wars 2 is a massively multiplayer online role-playing game developed by ArenaNet and published by NCSOFT. Set in the fantasy world of Tyria, the game follows the re-emergence of Destiny's Edge, a disbanded guild dedicated to fighting the Elder Dragons, a Lovecraftian species that has seized control of Tyria in the time since the original Guild Wars. The game takes place in a persistent world with a story that progresses in instanced environments."
  },
  {
    id: 27,
    title: "Final Fantasy VIII",
    release: "Sep 7, 1999",
    developer: "SquareSoft",
    genre: "Console-style RPG",
    score: 9.0,
    platforms: ["PC", "PlayStation"],
    price: 9.99,
    summary:
      "The next chapter in Final Fantasy takes the series to the next level. Final Fantasy VIII combines an epic storyline with dynamic role-playing elements, breathtaking music, and well-defined characters. The world of Final Fantasy VIII comes to life in a dazzling display of digital artistry that spans four CDs. With the addition of an hour worth of CG animation, a new Junction system, and compatibility with the Dual Shock Analog Controller, Final Fantasy VIII is a breathtaking addition to the series."
  },
  {
    id: 28,
    title: "Dark Souls III",
    release: "Apr 11, 2016",
    developer: "From Software",
    genre: "Action RPG",
    score: 8.5,
    platforms: ["PC", "PlayStation 4", "Xbox One"],
    price: 29.99,
    summary:
      "Developed by Japanese developer FromSoftware, DARK SOULS III is the latest chapter in the DARK SOULS series with its trademark sword and sorcery combat and rewarding action RPG gameplay. Players travel across a wide variety of locations in an interconnected world of unrelenting challenge and deep RPG gameplay as they search for a way to survive the coming apocalypse."
  },
  {
    id: 29,
    title: "Demon Souls",
    release: "Oct 6, 2009",
    developer: "From Software",
    genre: "Action RPG",
    score: 8.9,
    platforms: ["PlayStation 3"],
    price: 14.99,
    summary:
      "Demon's Souls is an action role-playing game developed by FromSoftware for the PlayStation 3. It was published in Japan by Sony Computer Entertainment in February 2009, in North America by Atlus USA in October 2009, and in Australia and Europe by Namco Bandai Games in June 2010. It was the first installment in the Souls series of games created by game director Hidetaka Miyazaki and was produced under supervision by Sony's Japan Studio."
  },
  {
    id: 30,
    title: "Pillars of Eternity",
    release: "Mar 26, 2015",
    developer: "Obsidian Entertainment",
    genre: "Third-person RPG",
    score: 8.3,
    platforms: ["PC"],
    price: 19.99,
    summary:
      "Pillars of Eternity is a role-playing video game developed by Obsidian Entertainment and published by Paradox Interactive. It was released for Microsoft Windows, OS X, and Linux on March 26, 2015. The game is a spiritual successor to the Baldur's Gate and Icewind Dale series, along with Planescape: Torment. Obsidian started a crowdfunding campaign on Kickstarter for it in September 2012. The campaign raised over US$4 million, which was the highest funded video game at the time. The game uses the Unity engine."
  },
  {
    id: 31,
    title: "Castlevania: Symphony of the Night",
    release: "Mar 21, 2007",
    developer: "Digital Eclipse",
    genre: "Action RPG",
    score: 8.7,
    platforms: ["PlayStation", "Xbox 360"],
    price: 9.99,
    summary:
      "Castlevania: Symphony of the Night is a platform-adventure action role-playing game developed and published by Konami in 1997 for the PlayStation. It was directed and produced by Toru Hagihara, with Koji Igarashi acting as assistant director. It is the direct sequel to Castlevania: Rondo of Blood taking place four years later. It features Dracula's dhampir son Alucard as the protagonist rising from his slumber to explore the Dracula's castle which has re-appeared after Richter Belmont has vanished. It marks a break from previous games in the series, introducing exploration, non-linear level design and role-playing elements."
  },
  {
    id: 32,
    title: "The Elder Scrolls III: Morrowind",
    release: "May 1, 2002",
    developer: "Bethesda Softworks",
    genre: "First-person RPG",
    score: 8.9,
    platforms: ["PC", "Xbox 360"],
    price: 4.99,
    summary:
      "The Elder Scrolls III: Morrowind is an open-world, fantasy, action role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks. It is the third installment in The Elder Scrolls series of games, following The Elder Scrolls II: Daggerfall, and preceding The Elder Scrolls IV: Oblivion. It was released in North America in 2002 for Microsoft Windows and Xbox. The main story takes place on Vvardenfell, an island in the Dunmer province of Morrowind, part of the continent of Tamriel. "
  },
  {
    id: 33,
    title: "Fable II",
    release: "Oct 21, 2008",
    developer: "Lionhead Studios",
    genre: "Action RPG",
    score: 6.6,
    platforms: ["Xbox 360"],
    price: 4.99,
    summary:
      "Fable II is an action role-playing open world video game in the Fable game series developed by Lionhead Studios and published by Microsoft Game Studios for Xbox 360. It is the sequel to Fable and Fable: The Lost Chapters, it was originally announced in 2006 and released in October 2008. A compilation of the game, and its two downloadable content packs, was released on 24 October 2009, titled the Game of the Year edition."
  }
];

module.exports = games;

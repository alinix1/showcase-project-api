const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.set("port", process.env.PORT || 3003);

app.listen(app.get("port"), () => {
  console.log(`${app.locals.title} is now running on ${app.get("port")}!`);
});

app.locals.title = "Beats 4 Devs";

app.locals.songs = [
  {
    id: 1,
    albumCover: "https://f4.bcbits.com/img/a1462187402_10.jpg",
    album: "Third",
    releaseDate: "July 20, 2018",
    artist: "Nathan Salsburg",
    songTitle: "Impossible Air",
    songDetails:
      "Nathan Salsburg is a guitarist and composer. He is a frequent collaborator of songwriter-singer Joan Shelley, occasional guitar-duo partner to James Elkington, and has contributed to recordings by Shirley Collins, Bonnie 'Prince' Billy, the Weather Station, and Jake Xerxes Fussell, among others.",
    genre: "folk",
  },
  {
    id: 2,
    albumCover:
      "https://i.scdn.co/image/ab67616d0000b2733722791f61d34847dc603737",
    album: "Mullaghmore",
    releaseDate: "2022",
    artist: "Calan McIntyre",
    songTitle: "Mullaghmore",
    songDetails: "sorry, we couldn't find any details on this artist",
    genre: "unknown",
  },
  {
    id: 3,
    albumCover:
      "https://upload.wikimedia.org/wikipedia/en/e/e5/LNT_Khruangbin.png",
    album: "Late Night Tales: Khruangbin",
    releaseDate: "2020",
    artist: "Khruangbin",
    songTitle: "Summer Madness",
    songDetails:
      "Khruangbin is an American musical trio from Houston, Texas. The band comprises Laura Lee on bass, Mark Speer on guitar, and Donald 'DJ' Johnson Jr. on drums. The band is known for blending global music influences, such as classic soul, dub, rock and psychedelia.",
    genre: "psychedelic rock",
  },
  {
    id: 4,
    albumCover:
      "https://upload.wikimedia.org/wikipedia/en/3/39/Tron_Legacy_Soundtrack.jpg",
    album: "Tron: Legacy",
    releaseDate: "2010",
    artist: "Daft Punk",
    songTitle: 'Solar Sailer - From "TRON: Legacy"/Score',
    songDetails:
      "Daft Punk were a French electronic music duo formed in 1993 in Paris by Thomas Bangalter and Guy-Manuel de Homem-Christo. They achieved popularity in the late 1990s as part of the French house movement, combining elements of house music with funk, disco, techno, rock and synth-pop.",
    genre: "electronic",
  },
  {
    id: 5,
    albumCover:
      "https://upload.wikimedia.org/wikipedia/en/6/67/Kiasmos_-_Kiasmos.jpg",
    album: "Kiasmos",
    releaseDate: "2014",
    artist: "Kiasmos",
    songTitle: "Looped",
    songDetails:
      "Kiasmos is a Faroese-Icelandic minimal, experimental techno duo, composed of Ólafur Arnalds and Janus Rasmussen. They started in 2009 and released their first extended play, Thrown, in 2012 and their album Kiasmos in 2014.",
    genre: "dance/electronic",
  },
  {
    id: 6,
    albumCover:
      "https://images.squarespace-cdn.com/content/v1/5bdfef0a697a98c05dd88ac0/1577925568939-T6UUPMU7D0VTSKEABU8X/Blog+1.jpg?format=750w",
    album: "Thousand Peaces",
    releaseDate: "2017",
    artist: "Absofacto, NITESHIFT",
    songTitle: "Dissolve",
    songDetails:
      "Absofacto is a solo project by musician Jonathan Visger, a member of Michigan-based indie rock band Mason Proper.[1][2] In 2008, Visger released his first solo efforts, North South, Pt. 1, under his own name, and Trilobite Trash, under the pseudonym Bug Lung Baby. In 2009, the EP Tagalong was released under the moniker Absofacto, the name Visger has used for all his solo musical projects since.",
    genre: "experimental pop",
  },
  {
    id: 7,
    albumCover:
      "https://i.scdn.co/image/ab67616d0000b27363e2b9a41b135bfeb410654c",
    album: "Stolen Heart",
    releaseDate: "2020",
    artist: "Freddy Beats",
    songTitle: "Escape",
    songDetails: "sorry, we couldn't find any details on this artist",
    genre: "hip hop/rap",
  },
  {
    id: 8,
    albumCover: "https://img.youtube.com/vi/976bzfeA-oo/0.jpg",
    album: "Eternal",
    releaseDate: "2021",
    artist: "Athena, smle",
    songTitle: "Eternal",
    songDetails:
      "Smle is an American electronic music duo consisting of Ruben Cardenas and Lewis Martinee. They are best known for their remix of Bobby Rush's song 'Funk O'De Funk', for which they were nominated for the Best Remixed Recording award at the 60th Annual Grammy Awards.",
    genre: "kawaii future bass",
  },
  {
    id: 9,
    albumCover:
      "https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/09/fdcd5a_240a6e0fd7c041a798c9a36998e1416dmv2-1.jpg?fit=693%2C689&ssl=1",
    album: " MONTERO",
    releaseDate: "2021",
    artist: "Lil Nas X",
    songTitle: "THATS WHAT I WANT",
    songDetails:
      "Montero Lamar Hill (born April 9, 1999), known by his stage name Lil Nas X, is an American rapper, singer, and songwriter. He rose to prominence with the release of his country rap single 'Old Town Road', which spent 19 weeks atop the U.S. Billboard Hot 100 chart, becoming the longest-running number-one song since the chart debuted in 1958. As the song was atop the Hot 100, Lil Nas X came out as gay, becoming the only artist to do so while having a number-one record.",
    genre: "pop rap",
  },
  {
    id: 10,
    albumCover:
      "https://novoamor.co.uk/wp-content/uploads/2020/07/whatsoever.jpg",
    album: "Cannot Be, Whatsoever",
    releaseDate: "2020",
    artist: "Novo Amor",
    songTitle: "No Plans",
    songDetails:
      "Ali John Meredith-Lacey, better known under the moniker Novo Amor, is a Welsh multi-instrumentalist, singer, songwriter, sound designer and producer. Lacey rose to prominence after the release of his debut EP Woodgate, NY in March 2014.",
    genre: "alternative/indie",
  },
  {
    id: 11,
    albumCover:
      "https://i.scdn.co/image/ab67616d0000b273a150ae8c72690d4c644c84a0",
    album: "Night on the Beach",
    releaseDate: "2020",
    artist: "Hash3r",
    songTitle: "Heavy Haze",
    songDetails: "sorry, we couldn't find any details on this artist",
    genre: "japanese hip hop/rap",
  },
  {
    id: 12,
    albumCover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/3e/1c/69/3e1c69fc-1bf3-ebd1-3f05-e176010dddce/cover.jpg/1200x1200bf-60.jpg",
    album: "2 Am Study Session",
    releaseDate: "2020",
    artist: "Spencer Hunt, WYS",
    songTitle: "Vhs",
    songDetails:
      "Spencer Hunt is a multi-instrumentalist and producer from St. Louis, Missouri. Pursuing a full-time music career, he enjoys exploring new sounds and creating soothing melodies from his home studio.",
    genre: "lo-fi",
  },
  {
    id: 13,
    albumCover:
      "https://i.scdn.co/image/ab67616d00001e02de17cfccf8390d5252c7e6c1",
    album: "unknown",
    releaseDate: "unknown",
    artist: "SOUNDSBYLAITUE",
    songTitle: "Pixel Quest",
    songDetails: "sorry, we couldn't find any details on this artist",
    genre: "dance/electronic",
  },
  {
    id: 14,
    albumCover:
      "https://upload.wikimedia.org/wikipedia/en/5/5b/Kavinsky_Nightcall_2010.png",
    album: "Nightcall",
    releaseDate: "2010",
    artist: "Kavinsky",
    songTitle: "Pacific Coast Highway",
    songDetails:
      "Vincent Belorgey (born 31 July 1975), known professionally as Kavinsky, is a French musician, producer, DJ, and actor. His production style is reminiscent of the electropop film soundtracks of the 1980s. Kavinsky claims that his music is inspired by thousands of movies he watched as a young boy and that he has cherry-picked the best parts from them, consolidating them into one concept. Kavinsky has been compared to many similar French house artists, including Daft Punk and Danger. He achieved greater mainstream recognition after his song 'Nightcall' was featured in the 2011 film Drive. His debut studio album, OutRun, was released in 2013.",
    genre: "french house synthwave",
  },
  {
    id: 15,
    albumCover:
      "https://miro.medium.com/max/1400/1*zwAZFKGEOn6muluaKsCTsQ.jpeg",
    album: "unknown",
    releaseDate: "April 27, 1810",
    artist: "Ludwig van Beethoven, Igor Levit",
    songTitle: 'Bagatelle No. 25 in A Minor, WoO 59 "Fur Elise"',
    songDetails:
      "Ludwig van Beethoven was a German composer and pianist. Beethoven remains one of the most admired composers in the history of Western music; his works rank among the most performed of the classical music repertoire and span the transition from the Classical period to the Romantic era in classical music.",
    genre: "classical",
  },
  {
    id: 16,
    albumCover:
      "https://i.scdn.co/image/ab67616d0000b27300b68f49dfdda890dbdc8c0b",
    album: "Clarinet Blue",
    releaseDate: "May 16, 2000",
    artist: "Gordon/Mckenna, Bobby Gordon, Dave McKenna,...",
    songTitle: "It's Been So Long",
    songDetails: "sorry, we couldn't find any details on this artist",
    genre: "jazz",
  },
  {
    id: 17,
    albumCover:
      "https://is3-ssl.mzstatic.com/image/thumb/Music7/v4/45/c7/75/45c77595-0762-fd8c-ebb5-6a29a6b4a132/0013964758016_cover.jpg/600x600bf-60.jpg",
    album: "Helios / Erebus",
    releaseDate: "2015",
    artist: "God Is An Astronaut",
    songTitle: "Agneya",
    songDetails:
      "The band was formed in 2002 by twin brothers Niels and Torsten Kinsella, who took the inspiration for its name from a quote in the movie Nightbreed. God Is an Astronaut's debut album, The End of the Beginning, was released in 2002 on the Revive Records label, which is independently owned by the band. The album was intended to be a farewell to the industry. Two music videos, for 'The End of the Beginning' and 'From Dust to the Beyond', both produced by the band, received airplay on MTV UK and other MTV Europe networks.",
    genre: "rock",
  },
  {
    id: 18,
    albumCover:
      "https://i.scdn.co/image/ab67616d0000b273575b40bcbd92aed16b0643c5",
    album: "Sanctuary",
    releaseDate: "2022",
    artist: "Hoverchild",
    songTitle: "Sanctuary",
    songDetails:
      "Dreamy, ambient, emotional instrumental music from Germany.  Hoverchild is a German ambient instrumental project. The music features dreamy, emotive sounds and melodies, with expressive guitars and pianos on top.",
    genre: "natural sounds",
  },
  {
    id: 19,
    albumCover:
      "https://i.scdn.co/image/ab67616d0000b273139133fc4455ddf8569f5d56",
    album: "Hummingbird",
    releaseDate: "2013",
    artist: "Dario Marianelli",
    songTitle: "Isabel Is Dead",
    songDetails:
      "An Italian composer of film and concert music, Dario Marianelli is perhaps best known for his collaborations with movie director Joe Wright, which include Pride and Prejudice (2005), Atonement (2007), and Anna Karenina (2012). All three of those scores were nominated for Academy Awards, with Atonement taking home the statue in 2008.",
    genre: "unknown",
  },
  {
    id: 20,
    albumCover:
      "https://static.qobuz.com/images/covers/ub/yh/wx54nkwt6yhub_600.jpg",
    album: "Soundings In Film",
    releaseDate: "2001",
    artist: "Paul Kelly",
    songTitle: "Peace",
    songDetails: "sorry, we couldn't find any details on this artist",
    genre: "alternative/indie",
  },
  {
    id: 21,
    albumCover:
      "https://upload.wikimedia.org/wikipedia/en/6/63/Atomic_%28Mogwai%29_%28Front_Cover%29.jpg",
    album: "Atomic",
    releaseDate: "2016",
    artist: "Mogwai",
    songTitle: "U-235",
    songDetails:
      "Mogwai  are a Scottish post-rock band, formed in 1995 in Glasgow. The band consists of Stuart Braithwaite (guitar, vocals), Barry Burns (guitar, piano, synthesizer, vocals), Dominic Aitchison (bass guitar), and Martin Bulloch (drums). Mogwai typically compose lengthy guitar-based instrumental pieces that feature dynamic contrast, melodic bass guitar lines, and heavy use of distortion and effects.",
    genre: "post-rock",
  },
  {
    id: 22,
    albumCover:
      "https://i1.sndcdn.com/artworks-ZKm4jS9szmnzEYxI-AQMjag-t500x500.jpg",
    album: "Find Yourself",
    releaseDate: "2022",
    artist: "Blue Wednesday, juniorodeo",
    songTitle: "Find Yourself",
    songDetails:
      "Hailing from the cold and wet landscape that is the Pacific Northwest, Gustav Joseph, professionally known as Blue Wednesday, is a Canadian musician, songwriter and producer. Identifying as genre-fluid, Gustav's sound highlights his artistry behind the piano, whilst honouring heavy influences from beatmakers and other instrumental acts that have inspired him from a young age.",
    genre: "lo-fi hip hop",
  },
  {
    id: 23,
    albumCover:
      "https://upload.wikimedia.org/wikipedia/en/0/04/Floating_Points_-_Crush.png",
    album: "Crush",
    releaseDate: "2019",
    artist: "Floating Points",
    songTitle: "Bias",
    songDetails:
      "Crush received positive reception upon release. At Metacritic, which assigns a normalized rating out of 100 to reviews from music publications, the album received an average score of 81 based on 16 reviews, indicating 'universal acclaim'. Shawn Reynaldo of Pitchfork awarded the album 'Best New Music', saying that the project is 'an album of mischievous, melodic, stripped-down electronic music.'",
    genre: "Electronic",
  },
  {
    id: 24,
    albumCover:
      "https://upload.wikimedia.org/wikipedia/en/e/e9/Musichastherighttochildren.jpg",
    album: "Music Has the Right to Children",
    releaseDate: "1998",
    artist: "Boards of Canada",
    songTitle: "Roygbiv",
    songDetails:
      "The members of Boards of Canada, brothers Michael Sandison and Marcus Eoin, had been creating music together as early as 1981, layering synths over cassette recordings of shortwave radio. The album received widespread acclaim upon release. In 2014, AllMusic called it 'a landmark for electronic listening music that was widely copied.' Fact called it 'an adult meditation on childhood, concerned with play, naïveté and nostalgia, all tinted with rosy pastoralism,' but 'also devilishly subtle, intricate and emotionally mature.'",
    genre: "electronic, downtempo, ambient",
  },
  {
    id: 25,
    albumCover:
      "https://i.scdn.co/image/ab67616d0000b273f42a72f65605c6001d4c0349",
    album: "Into Black EP",
    releaseDate: "2015",
    artist: "Emperor",
    songTitle: "She Said - Original Mix",
    songDetails: "sorry, we couldn't find any details on this artist",
    genre: "drum and bass",
  },
  {
    id: 26,
    albumCover:
      "https://i.scdn.co/image/ab67616d0000b273cc1055b1a57d1005a0ca5649",
    album: "Warm Time",
    releaseDate: "2014",
    artist: "iLLFlip",
    songTitle: "Chinese Flower",
    songDetails: "sorry, we couldn't find any details on this artist",
    genre: "afro house",
  },
  {
    id: 27,
    albumCover:
      "https://i.scdn.co/image/ab67616d0000b2735d2b20c82084e6f7669820a5",
    album: "Colonia EP",
    releaseDate: "2022",
    artist: "Space 92",
    songTitle: "Colonia",
    songDetails:
      "One of Techno music's best-selling artists and the mind behind a string of Number One hits, Space 92 is a trailblazing French producer. His sound identity is a mix of trancey Techno, distorted percussion and a touch of Acid, in addition to underlying sensitivity and nostalgia.",
    genre: "dance/electronic",
  },
  {
    id: 28,
    albumCover:
      "https://i.scdn.co/image/ab67616d0000b27386debcdef297e071c061f771",
    album: "Crazy Love",
    releaseDate: "2022",
    artist: "Toby Romeo, Leony",
    songTitle: "Crazy Love",
    songDetails:
      "Toby Romeo is an Austrian DJ and music producer from Salzburg best known for the song 'Where the Lights Are Low' featuring Felix Jaehn. He also had appearances at international music festivals such as Parookaville and Electric Love. He is signed by Universal.",
    genre: "dance/electro pop",
  },
  {
    id: 29,
    albumCover:
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Tycho_-_Weather.png/220px-Tycho_-_Weather.png",
    album: "Weather",
    releaseDate: "July 12, 2019",
    artist: "Tycho",
    songTitle: "Weather",
    songDetails:
      "Scott Hansen (born February 7, 1977), known professionally as Tycho, is an American musician, record producer, composer, and songwriter based in San Francisco. He is also known as ISO50 for his photographic and design work. His music blends multiple stylistic components, including downtempo guitar, analogue synthesis, and ambient elements such as breathing and found sounds of weather broadcasts and dialogue.",
    genre: "chillwave",
  },
  {
    id: 30,
    albumCover:
      "https://i.scdn.co/image/ab67616d0000b273fa5a81181a68bacca2fffe62",
    album: "Le refuge",
    releaseDate: "2010",
    artist: "Louis-Ronan Choisy, Alexandra Chabane",
    songTitle: "Theme piano",
    songDetails:
      "Louis-Ronan Choisy is a French singer-songwriter and actor born in Paris on 12 May 1977.",
    genre: "classical pop",
  },
];

app.get("/api/v1/songs", (request, response) => {
  const songs = app.locals.songs;

  response.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  response.status(200).json({ songs });
});

app.get("/api/v1/songs/:id", (request, response) => {
  const id = parseInt(request.params.id);
  const foundSong = app.locals.songs.find((song) => song.id === id);

  if (!foundSong) {
    return response
      .status(404)
      .json({ message: `Sorry, no song found with an id of ${id}` });
  }

  response.status(200).json(foundSong);
});

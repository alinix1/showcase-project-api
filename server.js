const express = require("express")
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

app.set('port', process.env.PORT || 3003)
app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is now running on ${app.get('port')}!`)
  })

app.locals.title = 'Beats 4 Devs'

app.locals.songs = [
    {
        id: 1,
        albumCover: 'https://placekitten.com/200/300',
        album: 'Third',
        releaseDate: 'July 20, 2018',
        artist: 'Nathan Salsburg',
        songTitle: 'Impossible Air',
        genre: 'folk'
    },
    {
        id: 2,
        albumCover: 'https://placekitten.com/200/300',
        album: 'Mullaghmore',
        releaseDate: '2022',
        artist: 'Calan McIntyre',
        songTitle: 'Mullaghmore',
        genre: 'null'

    },
    {
        id: 3,
        albumCover: 'https://placekitten.com/200/300',
        album: 'Late Night Tales: Khruangbin',
        releaseDate: '2020',
        artist: 'Khruangbin',
        songTitle: 'Summer Madness',
        genre: 'psychedelic rock'

    },
    {
        id: 4,
        albumCover: 'https://placekitten.com/200/300',
        album: 'Tron: Legacy',
        releaseDate: '2010',
        artist: 'Daft Punk',
        songTitle: 'Solar Sailer - From "TRON: Legacy"/Score',
        genre: 'electronic'

    },
    {
        id: 5,
        albumCover: 'https://placekitten.com/200/300',
        album: 'Kiasmos',
        releaseDate: '2014',
        artist: 'Kiasmos',
        songTitle: 'Looped',
        genre: 'dance/electronic'

    },
    {
        id: 6,
        albumCover: 'https://placekitten.com/200/300',
        album: 'Thousand Peaces',
        releaseDate: '2017',
        artist: 'Absofacto, NITESHIFT',
        songTitle: 'Dissolve',
        genre: 'experimental pop'

    },
    {
        id: 7,
        albumCover: 'https://placekitten.com/200/300',
        album: 'Stolen Heart',
        releaseDate: '2020',
        artist: 'Freddy Beats',
        songTitle: 'Escape',
        genre: 'hip hop/rap'

    },
    {
        id: 8,
        albumCover: 'https://placekitten.com/200/300',
        album: 'Eternal',
        releaseDate: '2021',
        artist: 'Athena, smle',
        songTitle: 'Eternal',
        genre: 'kawaii future bass'

    },
    {
        id: 9,
        albumCover: 'https://placekitten.com/200/300',
        album: ' MONTERO',
        releaseDate: '2021',
        artist: 'Lil Nas X',
        songTitle: 'THATS WHAT I WANT',
        genre: 'pop rap'

    },
    {
        id: 10,
        albumCover: 'https://placekitten.com/200/300',
        album: 'Cannot Be, Whatsoever',
        releaseDate: '2020',
        artist: 'Novo Amor',
        songTitle: 'No Plans',
        genre: 'alternative/indie'

    },
    {
        id: 11,
        albumCover: 'https://placekitten.com/200/300',
        album: 'Night on the Beach',
        releaseDate: '2020',
        artist: 'Hash3r',
        songTitle: 'Heavy Haze',
        genre: 'japanese hip hop/rap'

    },
    {
        id: 12,
        albumCover: 'https://placekitten.com/200/300',
        album: '2 Am Study Session',
        releaseDate: '2020',
        artist: 'Spencer Hunt, WYS',
        songTitle: 'Vhs',
        genre: 'lo-fi'

    },
    {
        id: 13,
        albumCover: 'https://placekitten.com/200/300',
        album: 'null',
        releaseDate: 'null',
        artist: 'SOUNDSBYLAITUE',
        songTitle: 'Pixel Quest',
        genre: 'dance/electronic'
    },
    {
        id: 14,
        albumCover: 'https://placekitten.com/200/300',
        album: 'Nightcall',
        releaseDate: '2010',
        artist: 'Kavinsky',
        songTitle: 'Pacific Coast Highway',
        genre: 'french house synthwave'

    },
    {
        id: 15,
        albumCover: 'https://placekitten.com/200/300',
        album: 'null',
        releaseDate: 'April 27, 1810',
        artist: 'Ludwig van Beethoven, Igor Levit',
        songTitle: 'Bagatelle No. 25 in A Minor, WoO 59 "Fur Elise"',
        genre: 'classical'

    },
    {
        id: 16,
        albumCover: 'https://placekitten.com/200/300',
        album: 'Clarinet Blue',
        releaseDate: 'May 16, 2000',
        artist: 'Gordon/Mckenna, Bobby Gordon, Dave McKenna,...',
        songTitle: 'It\'s Been So Long',
        genre: 'jazz'

    },
    {
        id: 17,
        albumCover: 'https://placekitten.com/200/300',
        album: 'Helios / Erebus',
        releaseDate: '2015',
        artist: 'God Is An Astronaut',
        songTitle: 'Agneya',
        genre: 'rock'

    },
    {
        id: 18,
        albumCover: 'https://placekitten.com/200/300',
        album: 'Sanctuary',
        releaseDate: '2022',
        artist: 'Hoverchild',
        songTitle: 'Sanctuary',
        genre: 'natural sounds'

    },
    {
        id: 19,
        albumCover: 'https://placekitten.com/200/300',
        album: 'Hummingbird',
        releaseDate: '2013',
        artist: 'Dario Marianelli',
        songTitle: 'Isabel Is Dead',
        genre: 'null'
    },
    {
        id: 20,
        albumCover: 'https://placekitten.com/200/300',
        album: 'Soundings In Film',
        releaseDate: '2001',
        artist: 'Paul Kelly',
        songTitle: 'Peace',
        genre: 'alternative/indie'
    },
    {
        id: 21,
        albumCover: 'https://placekitten.com/200/300',
        album: 'Atomic',
        releaseDate: '2016',
        artist: 'Mogwai',
        songTitle: 'U-235',
        genre: 'post-rock'
    },
    {
        id: 22,
        albumCover: 'https://placekitten.com/200/300',
        album: 'Find Yourself',
        releaseDate: '2022',
        artist: 'Blue Wednesday, juniorodeo',
        songTitle: 'Find Yourself',
        genre: 'lo-fi hip hop'
    },
    {
        id: 23,
        albumCover: 'https://placekitten.com/200/300',
        album: 'Chillhop Essentials Summer 2022',
        releaseDate: '2022',
        artist: 'Mommy',
        songTitle: 'Jellyfish-Lamp',
        genre: 'null'
    },
    {
        id: 24,
        albumCover: 'https://placekitten.com/200/300',
        album: 'Duke Ellington, John Coltrane',
        releaseDate: 'January 1963',
        artist: 'Duke Ellington, John Coltrane',
        songTitle: 'My Little Brown Book',
        genre: 'jazz'
    },
    {
        id: 25,
        albumCover: 'https://placekitten.com/200/300',
        album: 'Into Black EP',
        releaseDate: '2015',
        artist: 'Emperor',
        songTitle: 'She Said - Original Mix',
       genre: 'drum and bass'
    },
    {
        id: 26,
        albumCover: 'https://placekitten.com/200/300',
        album: 'Warm Time',
        releaseDate: '2014',
        artist: 'iLLFlip',
        songTitle: 'Chinese Flower',
       genre: 'afro house'
    },
    {
        id: 27,
        albumCover: 'https://placekitten.com/200/300',
        album: 'Colonia EP',
        releaseDate: '2022',
        artist: 'Space 92',
        songTitle: 'Colonia',
       genre: 'dance/electronic'
    },
    {
        id: 28,
        albumCover: 'https://placekitten.com/200/300',
        album: 'Crazy Love',
        releaseDate: '2022',
        artist: 'Toby Romeo, Leony',
        songTitle: 'Crazy Love',
       genre: 'dance/electro pop'
    },
    {
        id: 29,
        albumCover: 'https://placekitten.com/200/300',
        album: 'Weather',
        releaseDate: 'July 12, 2019',
        artist: 'Tycho',
        songTitle: 'Weather',
        genre: 'chillwave'
    },
    {
        id: 30,
        albumCover: 'https://placekitten.com/200/300',
        album: 'Le refuge',
        releaseDate: '2010',
        artist: 'Louis-Ronan Choisy, Alexandra Chabane',
        songTitle: 'Theme piano',
        genre: 'classical pop'
    }
]

app.get('/songs', (request, response) => {
    response.status(200).json(app.locals.songs);
  });
  

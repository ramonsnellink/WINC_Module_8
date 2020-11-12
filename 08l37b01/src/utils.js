const names = [
  {
    id: 1,
    name: "Olva",
    surname: "Gibbe",
    email: "ogibbe0@uol.com.br",
    gender: "Female",
    birthyear: "1982",
  },
  {
    id: 2,
    name: "Constanta",
    surname: "O'Hallagan",
    email: "cohallagan1@ucsd.edu",
    gender: "Female",
    birthyear: "1965",
  },
  {
    id: 3,
    name: "Cort",
    surname: "Soldan",
    email: "csoldan2@ycombinator.com",
    gender: "Male",
    birthyear: "1976",
  },
  {
    id: 4,
    name: "Lynea",
    surname: "Von Der Empten",
    email: "lvonderempten3@arstechnica.com",
    gender: "Female",
    birthyear: "1918",
  },
  {
    id: 5,
    name: "Freeman",
    surname: "Joseff",
    email: "fjoseff4@arizona.edu",
    gender: "Male",
    birthyear: "1953",
  },
  {
    id: 6,
    name: "Corrie",
    surname: "Thoms",
    email: "cthoms5@cloudflare.com",
    gender: "Male",
    birthyear: "1949",
  },
  {
    id: 7,
    name: "Kelly",
    surname: "Titterton",
    email: "ktitterton6@etsy.com",
    gender: "Male",
    birthyear: "1970",
  },
  {
    id: 8,
    name: "Jermaine",
    surname: "Fifield",
    email: "jfifield7@scribd.com",
    gender: "Male",
    birthyear: "1912",
  },
  {
    id: 9,
    name: "Doris",
    surname: "Patinkin",
    email: "dpatinkin8@eventbrite.com",
    gender: "Female",
    birthyear: "1988",
  },
  {
    id: 10,
    name: "Tobe",
    surname: "Spry",
    email: "tspry9@mlb.com",
    gender: "Female",
    birthyear: "1935",
  },
  {
    id: 11,
    name: "Fabiano",
    surname: "Climpson",
    email: "fclimpsona@reverbnation.com",
    gender: "Male",
    birthyear: "1928",
  },
  {
    id: 12,
    name: "Gerardo",
    surname: "Tanswell",
    email: "gtanswellb@oaic.gov.au",
    gender: "Male",
    birthyear: "1939",
  },
  {
    id: 13,
    name: "Egbert",
    surname: "Sugarman",
    email: "esugarmanc@ebay.co.uk",
    gender: "Male",
    birthyear: "1965",
  },
  {
    id: 14,
    name: "Annora",
    surname: "Patriche",
    email: "apatriched@umn.edu",
    gender: "Female",
    birthyear: "1993",
  },
  {
    id: 15,
    name: "Virgilio",
    surname: "Trimme",
    email: "vtrimmee@printfriendly.com",
    gender: "Male",
    birthyear: "1977",
  },
  {
    id: 16,
    name: "Clare",
    surname: "Hamel",
    email: "chamelf@deviantart.com",
    gender: "Female",
    birthyear: "1994",
  },
  {
    id: 17,
    name: "Bartholomew",
    surname: "Nesfield",
    email: "bnesfieldg@linkedin.com",
    gender: "Male",
    birthyear: "1927",
  },
  {
    id: 18,
    name: "Vachel",
    surname: "Lumsden",
    email: "vlumsdenh@gizmodo.com",
    gender: "Male",
    birthyear: "1962",
  },
  {
    id: 19,
    name: "Maxie",
    surname: "Cavendish",
    email: "mcavendishi@yahoo.com",
    gender: "Male",
    birthyear: "1910",
  },
  {
    id: 20,
    name: "Brina",
    surname: "Jimmes",
    email: "bjimmesj@ning.com",
    gender: "Female",
    birthyear: "1993",
  },
  {
    id: 21,
    name: "Nil",
    surname: "McNicol",
    email: "nmcnicolk@twitpic.com",
    gender: "Male",
    birthyear: "1959",
  },
  {
    id: 22,
    name: "Twila",
    surname: "Tugwell",
    email: "ttugwelll@geocities.jp",
    gender: "Female",
    birthyear: "1982",
  },
  {
    id: 23,
    name: "Dominique",
    surname: "Epple",
    email: "depplem@mediafire.com",
    gender: "Male",
    birthyear: "1971",
  },
  {
    id: 24,
    name: "Tressa",
    surname: "Conerding",
    email: "tconerdingn@aboutads.info",
    gender: "Female",
    birthyear: "1915",
  },
  {
    id: 25,
    name: "Jere",
    surname: "Moorman",
    email: "jmoormano@nih.gov",
    gender: "Male",
    birthyear: "1909",
  },
  {
    id: 26,
    name: "Quincy",
    surname: "Sevin",
    email: "qsevinp@yelp.com",
    gender: "Male",
    birthyear: "1931",
  },
  {
    id: 27,
    name: "Elena",
    surname: "Peasgood",
    email: "epeasgoodq@apache.org",
    gender: "Female",
    birthyear: "1916",
  },
  {
    id: 28,
    name: "Lyndel",
    surname: "Balaisot",
    email: "lbalaisotr@blinklist.com",
    gender: "Female",
    birthyear: "1907",
  },
  {
    id: 29,
    name: "Dredi",
    surname: "Pontain",
    email: "dpontains@illinois.edu",
    gender: "Female",
    birthyear: "1936",
  },
  {
    id: 30,
    name: "Emmery",
    surname: "Gavaghan",
    email: "egavaghant@example.com",
    gender: "Male",
    birthyear: "1985",
  },
  {
    id: 31,
    name: "Stace",
    surname: "O' Mahony",
    email: "somahonyu@yandex.ru",
    gender: "Female",
    birthyear: "1938",
  },
  {
    id: 32,
    name: "Serena",
    surname: "Berrington",
    email: "sberringtonv@umich.edu",
    gender: "Female",
    birthyear: "1993",
  },
  {
    id: 33,
    name: "Cati",
    surname: "Van der Spohr",
    email: "cvanderspohrw@princeton.edu",
    gender: "Female",
    birthyear: "1964",
  },
  {
    id: 34,
    name: "Jerry",
    surname: "Montrose",
    email: "jmontrosex@hp.com",
    gender: "Male",
    birthyear: "1964",
  },
  {
    id: 35,
    name: "Georgia",
    surname: "Creser",
    email: "gcresery@bluehost.com",
    gender: "Female",
    birthyear: "1935",
  },
  {
    id: 36,
    name: "Xylia",
    surname: "Kippie",
    email: "xkippiez@com.com",
    gender: "Female",
    birthyear: "1953",
  },
  {
    id: 37,
    name: "Miriam",
    surname: "Jentgens",
    email: "mjentgens10@apache.org",
    gender: "Female",
    birthyear: "1996",
  },
  {
    id: 38,
    name: "Dario",
    surname: "Hasson",
    email: "dhasson11@seesaa.net",
    gender: "Male",
    birthyear: "1965",
  },
  {
    id: 39,
    name: "Verile",
    surname: "Hanaby",
    email: "vhanaby12@google.com",
    gender: "Female",
    birthyear: "1962",
  },
  {
    id: 40,
    name: "Lynea",
    surname: "Rickman",
    email: "lrickman13@toplist.cz",
    gender: "Female",
    birthyear: "1951",
  },
  {
    id: 41,
    name: "Leona",
    surname: "Henkmann",
    email: "lhenkmann14@tamu.edu",
    gender: "Female",
    birthyear: "1980",
  },
  {
    id: 42,
    name: "Carlynn",
    surname: "Pargent",
    email: "cpargent15@usnews.com",
    gender: "Female",
    birthyear: "1958",
  },
  {
    id: 43,
    name: "Nils",
    surname: "Myner",
    email: "nmyner16@noaa.gov",
    gender: "Male",
    birthyear: "1959",
  },
  {
    id: 44,
    name: "Manon",
    surname: "Yosevitz",
    email: "myosevitz17@dropbox.com",
    gender: "Female",
    birthyear: "1962",
  },
  {
    id: 45,
    name: "Mitchel",
    surname: "Chastenet",
    email: "mchastenet18@amazonaws.com",
    gender: "Male",
    birthyear: "1903",
  },
  {
    id: 46,
    name: "Ki",
    surname: "Rosbottom",
    email: "krosbottom19@homestead.com",
    gender: "Female",
    birthyear: "1951",
  },
  {
    id: 47,
    name: "Caprice",
    surname: "Shaudfurth",
    email: "cshaudfurth1a@diigo.com",
    gender: "Female",
    birthyear: "1936",
  },
  {
    id: 48,
    name: "Sebastiano",
    surname: "Cunio",
    email: "scunio1b@businessinsider.com",
    gender: "Male",
    birthyear: "1985",
  },
  {
    id: 49,
    name: "Bianca",
    surname: "Hunton",
    email: "bhunton1c@redcross.org",
    gender: "Female",
    birthyear: "1975",
  },
  {
    id: 50,
    name: "Dee dee",
    surname: "Blachford",
    email: "dblachford1d@usgs.gov",
    gender: "Female",
    birthyear: "1950",
  },
];

const dentistList = [
  {
    id: 1,
    name: "Jaap van de",
    surname: "Velde",
    gender: "male",
    region: "Netherlands",
    phone: "06-012345678",
    email: "velde@tandartspraktijkbvt.nl",
  },
  {
    id: 2,
    name: "Johanneke van",
    surname: "Loon",
    gender: "female",
    region: "Netherlands",
    phone: "06-012345678",
    email: "loon@tandartspraktijkbvt.nl",
  },
  {
    id: 3,
    name: "Mirthe van",
    surname: "Veen",
    gender: "female",
    region: "Netherlands",
    phone: "06-012345678",
    email: "mirthe@tandartspraktijkbvt.nl",
  },
  {
    id: 4,
    name: "Leentje",
    surname: "Wolters",
    gender: "female",
    region: "Netherlands",
    phone: "06-012345678",
    email: "wolters@tandartspraktijkbvt.nl",
  },
];

const assistantList = [
  {
    name: "Michiel de",
    surname: "Vos",
    gender: "male",
    region: "Netherlands",
    phone: "06-012345678",
    email: "vos@tandartspraktijkbvt.nl",
    id: 1,
  },
  {
    name: "Wies van der",
    surname: "Horst",
    gender: "female",
    region: "Netherlands",
    phone: "06-012345678",
    email: "horst@tandartspraktijkbvt.nl",
    id: 2,
  },
];

const getRandomName = () => {
  const person = names[Math.floor(Math.random() * (names.length - 1))];
  return `${person.name} ${person.surname}`;
};

const getRandomDentist = () => {
  const dentist = dentistList[Math.floor(Math.random() * (dentistList.length - 1))];
  return `${dentist.name} ${dentist.surname}`;
};

const getRandomAssistent = () => {
  const assistant = assistantList[Math.floor(Math.random() * assistantList.length)];
  return `${assistant.name} ${assistant.surname}`;
};

const getRandomTime = () => {
  let hour;
  while (true) {
    hour = Math.floor(Math.random() * 24);
    if (hour > 7 && hour < 19) {
      return hour;
    }
  }
};

const getRandomDay = () => Math.floor(Math.random() * 28) + 1;

const generateRandomAppointment = () => ({
  day: getRandomDay(),
  time: getRandomTime(),
  patient: getRandomName(),
  dentist: getRandomDentist(),
  assistant: getRandomAssistent(),
});

const generateRandomAppointments = (num) =>
  Array(num)
    .fill(0)
    .map((_) => generateRandomAppointment());

export { generateRandomAppointments, dentistList, assistantList, names };

const UserList = [
  {
    id: 1,
    name: "john",
    userName: "john",
    age: 20,
    natinaliity: "canada",

    friends: [
      {
        id: 2,
        name: "jessica",
        userName: "jessica",
        age: 19,
        natinaliity: "America",
      },
      {
        id: 3,
        name: "Tom",
        userName: "Tommy",
        age: 23,
        natinaliity: "brazil",
      },
    ],
  },

  {
    id: 2,
    name: "jessica",
    userName: "jessica",
    age: 19,
    natinaliity: "America",
  },
  {
    id: 3,
    name: "Tom",
    userName: "Tommy",
    age: 23,
    natinaliity: "brazil",
    friends: [
      {
        id: 4,
        name: "petric",
        userName: "petty",
        age: 21,
        natinaliity: "Japan",
      },
    ],
  },
  {
    id: 4,
    name: "Patrick",
    userName: "petty",
    age: 21,
    natinaliity: "Japan",
  },
  {
    id: 5,
    name: "Pratik",
    userName: "pratik",
    age: 21,
    natinaliity: "India",
  },
];

const MovieList = [
  {
    id: 1,
    movieName: "SHAWSHANK REDEMPTION",
    releaseDate: 1994,
    IsOnNetflix: true,
  },
  {
    id: 2,
    movieName: "TRAIN TO BUSAN",
    releaseDate: 2010,
    IsOnNetflix: true,
  },
  {
    id: 3,
    movieName: "INTERSTELLER",
    releaseDate: 2014,
    IsOnNetflix: true,
  },
  {
    id: 4,
    movieName: "INCEPTION",
    releaseDate: 2011,
    IsOnNetflix: true,
  },
  {
    id: 5,
    movieName: "THE DARK KNIGHT",
    releaseDate: 2013,
    IsOnNetflix: false,
  },
];

module.exports = { UserList, MovieList };

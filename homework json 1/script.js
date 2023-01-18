let users = [
  {
    firstName: "Eli",
    lastName: "Rotenberg",
    password: "321321",
    nick: "eroten",
  },
  {
    firstName: "Nadav",
    lastName: "Bar On",
    password: "1qa2ws3ed",
    nick: "Nadavbar",
  },
  {
    firstName: "Nikolay",
    lastName: "Okhman",
    password: "aaaa",
    nick: "Nick",
  },
];
localStorage.setItem("usersStorage", JSON.stringify(users));

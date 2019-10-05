interface User {
  name: string;
  age: number;
  jobs: Array<string>;
  isAdmin?: boolean;
  isDeleted?: boolean;
}

const users: Array<User> = [
  {
    name: "Yura",
    age: 23,
    jobs: ["Aurora", "UkrNet"],
    isAdmin: true,
  },
  {
    name: "Test-user",
    age: 25,
    jobs: ["Test", "UkrNet"],
    isDeleted: true,
  },
];

function checkNotDeletedUsers(userList: Array<User>): Array<string> {
  const notDeletedUsers = userList.filter(user => !user.isDeleted);

  return notDeletedUsers.map(user => user.name);
}

function findCurrentUser(userList: Array<User>, findUser: string): User {
  return userList.find(user => user.name === findUser);
}

const users = [
  { name: "User 1", id: 1 },
  { name: "User 2", id: 2 },
  { name: "User 3", id: 3 },
  { name: "User 4", id: 4 },
  { name: "User 5", id: 5 },
];

export function fetchAll() {
  return users;
}

export function getUserById(userId) {
  return users.find((user) => user.id.toString() === userId);
}

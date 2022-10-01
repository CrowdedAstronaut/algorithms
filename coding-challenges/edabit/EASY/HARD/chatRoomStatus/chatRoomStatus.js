function chatroomStatus(users) {
  let count = 0;
  if (users.length === 0) return `no one online`;
  else if (users.length === 1) return `${users[0]} online`;
  else if (users.length === 2)
    return `${users[0]} and ${users[1]} online`;
  else if (users.length > 2) {
    for (let i = 0; i < users.length; i++) {
      if (i > 1) {
        count++;
      }
    }
  }
  return `${users[0]}, ${users[1]} and ${count} more online`;
}

const chatroomStatus = (users) => {
  const { length } = users;
  if (length > 2) {
    return `${users.slice(0, 2).join(", ")} and ${
      length - 2
    } more online`;
  }
  if (length < 1) return "no one online";
  return `${users.join(" and ")} online`;
};

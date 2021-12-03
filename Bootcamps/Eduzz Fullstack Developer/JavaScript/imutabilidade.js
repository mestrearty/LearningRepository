const user = {
  name: "Pedro",
  lastName: "Ventura",
};

function getUserWithFullName(user) {
  return {
    ...user,
    fullName: `${user.name} ${user.lastName}`,
  };
}

const userWithFullName = getUserWithFullName(user);
console.log(userWithFullName);

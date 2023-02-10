type VerifyUserFn = (user: User, receviedValues: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
    return user.username === sentValue.username && user.password === sentValue.password;
};
const bdUser = { username: "danilo", password: "1123" };
const sentUser = { username: "danilo", password: "123" };

const loggedIn = verifyUser(bdUser, sentUser);

console.log(loggedIn);

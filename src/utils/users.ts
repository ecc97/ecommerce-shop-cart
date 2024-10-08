import bcrypt from "bcryptjs";

// Este array es compartido entre el login y el registro
let users = [
    { id: "1", username: "test", email: "test@example.com", passwordHash: bcrypt.hashSync("password123", 10), language: "es", token: "my-token-fake-123" },
];

export const getUsers = () => users;

export const addUser = (user: { id: string, username: string, email: string, passwordHash: string, language: string, token: string }) => {
    users.push(user);
}
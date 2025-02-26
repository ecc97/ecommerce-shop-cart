import bcrypt from "bcryptjs";
import fs from "fs";
import path from "path";
import { IUser } from "@/interface/IUsers";

const usersFilePath = path.join(process.cwd(), "src", "utils", "users.json");

const readUsers = () => {
    if (!fs.existsSync(usersFilePath)) {
        console.warn("⚠️ Archivo users.json no encontrado, creando uno nuevo.");
        return [];
    }
    try {
        const data = fs.readFileSync(usersFilePath, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        console.error("Error al leer los usuarios:", error);
        return []; 
    }
};

const writeUsers = (users: IUser[]) => {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2), "utf-8");
};

let users: IUser[] = readUsers();

if (users.length === 0) {
    users = [
        { id: "1", username: "test", email: "test@example.com", passwordHash: bcrypt.hashSync("password123", 10), language: "es", token: "my-token-fake-123" }
    ];
    writeUsers(users);
}

export const getUsers = () => users;

export const addUser = (user: IUser) => {
    users.push(user);
    writeUsers(users);
};

//{ id: string, username: string, email: string, passwordHash: string, language: string, token: string }
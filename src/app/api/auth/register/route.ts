import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { registerUser } from "@/utils/users";

// let users = [
//     { id: "1", email: "test@example.com", passwordHash: bcrypt.hashSync("password123", 10), language: "es", token: "my-token-fake-123" },
// ]

export async function POST(req: Request) {
    try {
        const { username, email, password } = await req.json();

        await registerUser(username, email, password);

        return NextResponse.json({ message: "Usuario registrado exitosamente" }, { status: 201 });
    } catch (error: unknown) {
        const err = error as Error;
        if (err.message === "El email ya está registrado") {
            return NextResponse.json({ message: err.message }, { status: 400 });
        }
        console.error("Error al registrar usuario:", err.message);
        return NextResponse.json({ message: "Error en el registro" }, { status: 500 });
    }
}
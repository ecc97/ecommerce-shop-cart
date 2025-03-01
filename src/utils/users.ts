import bcrypt from "bcryptjs";
import fs from "fs";
import path from "path";
import jwt from "jsonwebtoken";
import { IUser } from "@/interface/IUsers";
import { supabase } from "../../supabase/supabase";

export const registerUser = async (username: string, email: string, password: string, language: string = "es") => {
    const { data: existingUser, error: findError } = await supabase
        .from("users")
        .select("id")
        .eq("email", email)
        .single();

    if (existingUser) {
        throw new Error("El email ya está registrado");
    }

    if (findError && findError.code !== "PGRST116") {
        throw findError;
    }
    
    const passwordHash = await bcrypt.hash(password, 10);
    
    const token = jwt.sign({ email }, process.env.JWT_SECRET || "default_secret_key", { expiresIn: "7d" });

    const { data, error } = await supabase.from("users").insert([
        { username, email, password_hash: passwordHash, language, token}
    ]);

    if (error) throw error;
    
    return data;
};

export const loginUser = async (email: string, password: string) => {
    const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("email", email)
        .single();

    if (error || !data) throw new Error("Usuario no encontrado");

    const isValidPassword = await bcrypt.compare(password, data.password_hash);
    if (!isValidPassword) throw new Error("Contraseña incorrecta");

    const newToken = jwt.sign({ email }, process.env.JWT_SECRET || "default_secret_key", { expiresIn: "7d" });

    await supabase.from("users").update({ token: newToken }).eq("id", data.id);

    return { id: data.id, username: data.username, email: data.email, language: data.language, token: newToken };
};

export const getUsers = async () => {
    const { data, error } = await supabase.from("users").select("*");
    if (error) throw error;
    return data;
};


//{ id: string, username: string, email: string, passwordHash: string, language: string, token: string }
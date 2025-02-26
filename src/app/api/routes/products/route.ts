import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        
        // Devuelve la respuesta en formato JSON
        return NextResponse.json(data);
    } catch (error) {
        const errorMessage = error as Error
        console.error("Error al obtener los productos:", errorMessage.message);
        // Si hay un error, devuelve un mensaje de error con código 500
        return NextResponse.json({ message: "Error al obtener los productos." }, { status: 500});
    }
}
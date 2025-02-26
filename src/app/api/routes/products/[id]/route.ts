import { NextResponse } from "next/server";

export async function GET(_request: Request, { params }: { params: { id: string } }) {
    try {
        const { id } = params;
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();

        
        if (!data) {
            return NextResponse.json({ message: "Producto no encontrado" }, { status: 404 });
        }

        
        return NextResponse.json(data);
    } catch (error: unknown) {
        const err = error as Error;
        console.error("Error al obtener el producto:", err.message);
        return NextResponse.json({ message: "Error al obtener el producto." }, { status: 500 });
    }
}
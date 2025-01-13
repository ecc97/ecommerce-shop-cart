"use client"
import { useState, useEffect } from "react";
import axios from "axios";
import { Product } from "@/interface/IProducts";
import Navbar from "@/components/Navbar/Navbar";
import ProductDetailText from "@/components/ProductDetailText/ProductDetail";

const ProductDetails = ({ params }: { params: { id: string } }) => {
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getProduct = async (id: string) => {
            try {
                const response = await axios.get(`/api/routes/products/${id}`);
                const data = await response.data; 
                setProduct(data);

            } catch (error) {
                console.error("Error al obtener el producto:", error);
                return null; 
            } finally {
                setLoading(false);
            }
        };

        getProduct(params.id);
    }, [params.id]);

    if (loading) {
        return <p>Cargando...</p>; 
    }

    if (!product) {
        return <p>No se encontró el producto.</p>; 
    }
    

    return (
        <>
            <Navbar />
            <main className="flex flex-col justify-center min-h-screen pt-20 lg:pt-0">
                <article className="flex flex-col gap-2 md:flex-row max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4 rounded-3xl shadow-2xl">
                    <div className="md:w-1/2 flex-1">
                        <div className="p-3">
                            <img src={product.image} alt={product.title} className="w-full"/>
                        </div>
                    </div>
                    <ProductDetailText product={product} />
                </article>
            </main>
        </>
    );
};

export default ProductDetails;
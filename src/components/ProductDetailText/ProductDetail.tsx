"use client"
import { addToCart, removeFromCart } from '@/redux/features/cart/CartSlice';
import { useAppDispatch } from '@/redux/hooks';
import { signIn, useSession } from 'next-auth/react';
import { Product } from '@/interface/IProducts';
import React from 'react'

export default function ProductDetailText({ product }: { product: Product }) {
    const { data: session } = useSession()
    const dispatch = useAppDispatch();

    const handleAddCart = () => {
        if (!session) return signIn();

        const productOfUser = {
            ...product,
            idUser: session.user.id,
        }

        dispatch(addToCart(productOfUser));

    };

    return (
        <div className="md:w-1/2 flex flex-col flex-1 justify-center gap-4">
            <h3 className="text-2xl font-bold">{product.title}</h3>
            <p className="text-base md:text-sm lg:text-lg">{product.description}</p>
            <p className="text-base md:text-sm lg:text-lg"><strong>Category:</strong> {product.category}</p>
            <p className="text-base md:text-sm lg:text-lg"><strong>Price:</strong> ${product.price}</p>
            <div className="flex justify-center md:justify-start">
                <button onClick={handleAddCart} className="py-2 px-4 w-full md:w-auto rounded-3xl text-white font-medium bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-gradient-to-r from-blue-600 to-blue-800 transition-colors">
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

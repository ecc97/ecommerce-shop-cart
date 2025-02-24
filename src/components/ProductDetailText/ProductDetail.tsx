"use client"
import { addToCart, removeFromCart } from '@/redux/features/cart/CartSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { signIn, useSession } from 'next-auth/react';
import { Product } from '@/interface/IProducts';
import React, { useMemo } from 'react'
import { useTranslations } from 'next-intl';

export default function ProductDetailText({ product }: { product: Product }) {
    const { data: session } = useSession()
    const dispatch = useAppDispatch();
    const cartItems = useAppSelector((state) => state.cart.products);
    const t = useTranslations("ProductDetailView")

    const isInCart = useMemo(() => {
        if (!session) return false;
        return cartItems.some(item => item.id === product.id && item.idUser === session.user.id);
    }, [cartItems, product.id, session]);
    // const filteredCartItems = useMemo(() => {
    //     return cartItems.filter(item => item.idUser === session?.user.id)
    // }, [cartItems, session]);

    const handleAddCart = () => {
        if (!session) return signIn();

        const productOfUser = {
            ...product,
            idUser: session.user.id,
        }

        dispatch(addToCart(productOfUser));

    };

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(product.id))
        localStorage.removeItem(`cart`)
    }

    return (
        <div className="md:w-1/2 flex flex-col flex-1 justify-center gap-4">
            <h3 className="text-2xl font-bold">{product.title}</h3>
            <p className="text-base md:text-sm lg:text-lg">{product.description}</p>
            <p className="text-base md:text-sm lg:text-lg"><strong>{t('category')}:</strong> {product.category}</p>
            <p className="text-base md:text-sm lg:text-lg"><strong>{t('price')}:</strong> ${product.price}</p>
            <div className="flex justify-center md:justify-start">
                {!isInCart ? (
                    <button onClick={handleAddCart} className="py-2 px-4 w-full md:w-auto rounded-3xl text-white font-medium bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-gradient-to-r from-blue-600 to-blue-800 transition-colors">
                        {t('addToCart')}
                    </button>
                ) : (
                    <button
                        onClick={handleRemoveFromCart}
                        className="py-2 px-4 w-full md:w-auto rounded-3xl text-white font-medium bg-gradient-to-r from-red-500 to-red-700 hover:bg-gradient-to-r from-red-600 to-red-800 transition-colors"
                    >
                        {t('removeFromCart')}
                    </button>
                )}
            </div>
        </div>
    )
}

'use client'
import React, { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { useAppSelector, useAppDispatch } from "@/redux/hooks"
import { setCart } from "@/redux/features/cart/CartSlice"
import Navbar from "@/components/Navbar/Navbar"
import { ProductsContainer } from "@/components/ui/StyledProduct"
import ProductCard from "@/components/ProductCard/ProductCard"
import { useTranslations } from "next-intl"
import { useRouter } from "next/navigation"
import { SectionCart } from "@/components/ui/StyledCart"

const CartPage = () => {
    const { data: session, status } = useSession()
    const dispatch = useAppDispatch()
    const cartItems = useAppSelector((state) => state.cart.products)
    const [isLoading, setIsLoading] = useState(true)
    const router = useRouter()
    const t = useTranslations("ShoppingCartView")

    const filteredCartItems = cartItems.filter(item => 
        session?.user?.id ? item.idUser === session.user.id : false
    )

    useEffect(() => {
        
        if (status === "unauthenticated") {
            router.push("/login")
            return
        }
        
        if (status === "authenticated") {
            const savedCart = localStorage.getItem("cart")
            if (savedCart) {
                dispatch(setCart(JSON.parse(savedCart)))
            }
            setIsLoading(false)
        }
        
    }, [status, dispatch, router]);

    useEffect(() => {
        if (cartItems.length > 0) {
            localStorage.setItem("cart", JSON.stringify(cartItems))
        }
    }, [cartItems]);

    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-20">
                <SectionCart>
                    <h1 className="text-3xl font-bold mb-4 text-center md:text-start">{t("title")}</h1>
                    {isLoading ? (
                        <p>{t("loading")}</p>
                    ) : filteredCartItems.length === 0 ? (
                        <p className="text-lg text-center md:text-start">{t("emptyCart")}</p>
                    ) : (
                        <ProductsContainer>
                            {filteredCartItems.map((item) => (
                                <ProductCard
                                    key={item.id}
                                    product={item}
                                />
                            ))}
                        </ProductsContainer>
                    )}
                </SectionCart>
            </main>
        </>
    )
}

export default CartPage
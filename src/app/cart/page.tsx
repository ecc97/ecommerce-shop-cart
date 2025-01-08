'use client'
import React from "react"
import { useEffect } from "react"
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
    const { data: session } = useSession()
    const dispatch = useAppDispatch()
    const cartItems = useAppSelector((state) => state.cart.products)
    const filteredCartItems = cartItems.filter(item => item.idUser === session?.user.id)
    const [isLoading, setIsLoading] = React.useState<boolean>(true)
    const router = useRouter()
    const t = useTranslations("ShoppingCartView")


    useEffect(() => {
        if (session) {
            const savedCart = localStorage.getItem("cart")
            if (savedCart) {
                dispatch(setCart(JSON.parse(savedCart)))
            }
        } else {
            router.push("/login")
        }
    }, [dispatch, session]);

    useEffect(() => {
        if (cartItems.length > 0) {
            localStorage.setItem("cart", JSON.stringify(cartItems))
        }
    }, [cartItems])

    useEffect(() => {
        if (session && cartItems.length > 0) {
            setIsLoading(false)
        }
    }, [session, cartItems]);

    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-20">
                <SectionCart>
                    <h1 className="text-3xl font-bold mb-4 text-center md:text-start">{t("title")}</h1>
                    {isLoading ? (<p>{t("loading")}</p>) :
                    filteredCartItems.length === 0 ? (
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
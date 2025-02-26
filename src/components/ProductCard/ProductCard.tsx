
import { useSession, signIn } from "next-auth/react";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart, removeFromCart } from "@/redux/features/cart/CartSlice";
import { Product } from "@/interface/IProducts";
import LikeButton from "../LikeButton/LikeButton";
import styled from "styled-components";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { BiTrash } from "react-icons/bi";
import { showToast } from "../Alerts";

const Card = styled.div`
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    max-width: 300px;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    margin: 16px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
    max-width: 100%;
    width: 350px;
    height: 250px;
    border-radius: 8px;
`;

const Title = styled.h2`
    font-size: 1.5em;
    margin: 10px 0;
`;

const Price = styled.p`
    font-size: 1.25em;
    color: #4caf50;
`;

const ButtonAddCart = styled.button`
    background-color: #4caf50;
    color: white;
    padding: 10px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #45a049;
    }

    &:disabled {
        background-color: #cccccc;
        cursor: not-allowed;
    }
`

const ButtonDetails = styled.button`
    background-color: #cfcc12;
    color: white;
    padding: 10px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
    transition: background-color 0.3s ease;
    
    &:hover {
        background-color: #b1922b;
    }
`;

interface ProductCardProps {
    product: Product
}

// interface CardProps {
//     title: string;
//     price: string;
//     image: string;
// }

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { data: session } = useSession()
    const pathname = usePathname();
    const dispatch = useAppDispatch();
    const t = useTranslations("ProductsPageView");
    const tCart = useTranslations("ShoppingCartView");

    const handleAddCart = () => {
        if (!session) return signIn();

        const productOfUser = {
            ...product,
            idUser: session.user.id,
        }

        dispatch(addToCart(productOfUser));

        showToast("success", t("addToCartSuccess"));

    };

    const handleRemoveFromCart = (id: number) => {
            dispatch(removeFromCart(id))
            localStorage.removeItem(`cart`)
    }

    return (
        <Card>
            <Image src={product.image} alt={product.title} />
            <Title>{product.title}</Title>
            <Price>${product.price}</Price>
            <div className="flex gap-2 flex-wrap justify-center my-2">
                <ButtonAddCart onClick={handleAddCart} disabled={pathname === "/cart" ? true : false}>{t("cartButton")}</ButtonAddCart>
                <LikeButton productId={product.id} />
                <Link href={`/details/${product.id}`} passHref>
                    <ButtonDetails>{t("viewDetailsButton")}</ButtonDetails>
                </Link>
                {session && pathname === "/cart" && (
                    <button onClick={() => handleRemoveFromCart(product.id)} style={{ position: "absolute", top: "10px", right: "10px", color: "red"}}><BiTrash title={tCart("removeButton")} size={20} /></button>
                )}
            </div>
        </Card>
    );
};

export default ProductCard;

import { useSession, signIn } from "next-auth/react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart } from "@/redux/features/cart/CartSlice";
import { Product } from "@/interface/IProducts";
import LikeButton from "../LikeButton/LikeButton";
import styled from "styled-components";
import Link from "next/link";

const Card = styled.div`
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
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
`

const ButtonDetails = styled.a`
    background-color: #0070f3;
    color: white;
    padding: 10px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
    transition: background-color 0.3s ease;
    
    &:hover {
        background-color: #005bb5;
    }
`;

interface ProductCardProps {
    product: Product
}

interface CardProps {
    title: string;
    price: string;
    image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
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
        <Card>
            <Image src={product.image} alt={product.title} />
            <Title>{product.title}</Title>
            <Price>${product.price}</Price>
            <ButtonAddCart onClick={handleAddCart}>Add to Cart</ButtonAddCart>
            <LikeButton productId={product.id} />
            <Link href={`/details/${product.id}`} passHref>
                <ButtonDetails>Ver detalles</ButtonDetails>
            </Link>
        </Card>
    );
};

export default ProductCard;
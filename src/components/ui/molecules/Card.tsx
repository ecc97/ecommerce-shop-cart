import React from "react";
import Image from "next/image";
import ActionsButtons from "./Actions";
import Button from "../atomics/Button";
import Link from "next/link";

interface CardProps {
    title: string;
    description: string;
    image: string;
    link?: string;
}

const Card: React.FC<CardProps> = ({ title, description, image, link }) => {
    return (
        <div>
            <Image src={image} alt={title} width={100} height={100} />
            <h3 className="text-lg font-medium">{title}</h3>
            <p className="text-sm text-gray-500">{description}</p>
            {link && (
                <Link href={link} target="_blank">
                    Ver más
                </Link>
            )}
            <ActionsButtons>
                <Button type="button">Ver más</Button>
            </ActionsButtons>
        </div>
    );
}

export default Card;
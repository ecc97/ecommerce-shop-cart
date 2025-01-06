import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Product } from '@/interface/IProducts';
import { ProductsContainer } from './StyledProduct';
import ProductCard from '../ProductCard/ProductCard';
import { useTranslations } from 'next-intl';


const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const getProducts = async () => {
            const response = await axios.get('/api/routes/products');
            const data = await response.data;
            setProducts(data);
        };

        getProducts();
    }, []);

    return (
        <article className='flex flex-col gap-4'>
            <h1 className='text-3xl font-bold my-4 text-center md:text-start px-4 sm:px-8 lg:px-36'>{useTranslations("ProductsPageView")("productListTitle")}</h1>
            <ProductsContainer>
                {products.map(product => (
                    <ProductCard 
                    key={product.id} 
                    product={product}
                  />
                ))}
            </ProductsContainer>
        </article>
    );
};

export default Products;

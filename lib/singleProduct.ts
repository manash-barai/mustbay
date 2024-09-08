import React from 'react';

export async function singleProduct({ product }: { product: string }) {
    try {
        const result = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}api/singleProduct?id=${product}`, {
            next: { revalidate: 120 }, // Revalidate every 2 minutes
        });

        if (!result.ok) {
            throw new Error(`Failed to fetch the product: ${result.statusText}`);
        }

        const data = await result.json();

        // Validate that the data contains the required fields
        if (!data || !data.singleProduct) {
            throw new Error('Invalid product data received');
        }

        return data;
    } catch (error) {
        console.error('Error fetching product:', error);
        throw error; // Optionally, re-throw the error to be handled at a higher level
    }
}

import React from 'react'

export async function getAllFeatureProduct() {
    const result = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}api/feature-product`, {
        next: { revalidate: 120 }, // Revalidate every 2 minutes
    });

    if (!result.ok) {
        throw new Error('There was an error while fetching feature products');
    }

    return await result.json();
}

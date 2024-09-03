import React from 'react'

export async function getAllFeatureProduct() {



    const result = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}api/feature-product`);

    if (!result.ok) {
        throw new Error('There was an error while fetching feature products');
    }

    // Correctly parse the JSON response
    return await result.json();
}
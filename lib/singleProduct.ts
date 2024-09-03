import React from 'react'

export async function singleProduct({product}:{product:string}) {

    const result = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}api/singleProduct?id=${product}`);

    if (!result.ok) {
        throw new Error('There was an error while fetching feature products');
    }

    // Correctly parse the JSON response
    return await result.json();
}
export const getProduct = async () => {
    const res = await fetch('https://dynamic-route-vert.vercel.app/api/products');
    const data = await res.json()
    return data;
}

export const getProductID = async (ids) => {
    const arr_id = [];
    
    for(const id of ids){
        const res = await fetch(`https://dynamic-route-vert.vercel.app/api/products/${id}`);
        const data = await res.json()
        arr_id.push(data)
    }
    
    return arr_id;
}
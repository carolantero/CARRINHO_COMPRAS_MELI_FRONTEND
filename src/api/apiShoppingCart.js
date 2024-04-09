const getAllProducts = async (category) => {
    const response = await fetch(`http://127.0.0.1:8000/get_all_products`);
    const data = await response.json();

    return data;
};

export default getAllProducts;
export const getAllProducts = async (category) => {
  const response = await fetch(`http://127.0.0.1:8000/get_all_products`);
  const data = await response.json();

  return data;
};

export const postCartProducts = async (item) => {
  try {
    const response = await fetch("http://127.0.0.1:8000/post_cart_products/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding item to cart:", error);
  }
};

export const getCartProducts = async () => {
  const response = await fetch(`http://127.0.0.1:8000/get_cart_products`);
  const data = await response.json();

  return data;
};

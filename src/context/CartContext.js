import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Función para agregar un producto al carrito
    const addToCart = (product) => {
        console.log('Añadiendo producto al carrito:', product);
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === product.id);

            if (existingItem) {
                return prevItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [
                ...prevItems,
                {
                    ...product,
                    price: parseFloat(product.price), // Asegurarte de que price sea un número
                    quantity: 1,
                },
            ];
        });
    };

    // Función para actualizar la cantidad de un producto en el carrito
    const updateQuantity = (id, amount) => {
        setCartItems((prevItems) =>
            prevItems.map((item) => {
                if (item.id === id) {
                    const updatedQuantity = item.quantity + amount;

                    if (updatedQuantity <= 0) {
                        // Si la cantidad es 0 o menor, eliminamos el producto
                        return null;
                    } else {
                        // Si la cantidad es mayor a 0, actualizamos el producto
                        return { ...item, quantity: updatedQuantity };
                    }
                }
                return item;
            }).filter(item => item !== null) // Filtramos los productos nulos (eliminados)
        );
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);

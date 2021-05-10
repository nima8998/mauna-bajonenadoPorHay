import React, { createContext, useContext, useState } from "react";

export let CartContext = createContext(0);
export let useCartContext = () => useContext(CartContext);

export let CartProvider = ({ children }) => {
	const [contextCantItems, setContextCantItems] = useState(0);
	const arrayItemSeleccionado = [];

	return (
		<CartContext.Provider
			value={([contextCantItems, setContextCantItems], arrayItemSeleccionado)}
		>
			{children}
		</CartContext.Provider>
	);
};

import React, { createContext, useState, useContext } from "react";

export let CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

export let CartProvider = ({ children }) => {
	let [itemCart, setItemCart] = useState([]);

	// FUNCTIONS Y CHECKEOS PARA EL CARRITO
	const isInCart = (id) => {
		const enElCart = itemCart.find((x) => x.id === id);
		if (enElCart !== undefined) {
			return true;
		}
		return false;
	};

	const getQuantity = (datos, count) => {
		const filtro = [...itemCart];
		filtro.forEach((i) => {
			if (i.id === datos.id) {
				i.qty += count;
			}
		});
		setItemCart(filtro);
	};

	const addItems = (count, datos, talle) => {
		if (isInCart(datos.id) === false) {
			setItemCart([...itemCart, { ...datos, qty: count, tal: talle }]);
		} else {
			getQuantity(datos, count);
		}
	};

	// FUNCTION PARA INTERACTUAR EN /CHECKOUT

	const total = () => {
		const precioTotal = itemCart.reduce((a, b) => a + b.price * b.qty, 0);
		return precioTotal;
	};

	const getUnits = () => {
		const unid = itemCart.reduce((a, b) => a + b.qty, 0);
		return unid;
	};

	const removeItems = (item) => {
		const newItems = itemCart.filter((x) => x.id !== item);
		setItemCart(newItems);
	};

	const clearItems = () => setItemCart([]);

	return (
		<CartContext.Provider
			value={{
				addItems,
				removeItems,
				clearItems,
				total,
				getUnits,
				itemCart,
				setItemCart,
				isInCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

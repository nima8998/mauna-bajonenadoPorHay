import React, { createContext, useState, useContext } from "react";

export let CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

export let CartProvider = ({ children }) => {
	let [itemCart, setItemCart] = useState([]);

	// FUNCTIONS Y CHECKEOS PARA EL CARRITO
	// checkeo si item ya figura en el estado
	const isInCart = (id) => {
		const enElCart = itemCart.find((x) => x.id === id);
		if (enElCart !== undefined) {
			return true;
		}
		return false;
	};

	// si ya figura en el estado, itera para solo sumar la cantidad
	const getQuantity = (datos, count) => {
		const filtro = [...itemCart];
		filtro.forEach((i) => {
			if (i.id === datos.id) {
				i.qty += count;
			}
		});
		setItemCart(filtro);
	};

	// agrega item al estado
	const addItems = (count, datos) => {
		if (isInCart(datos.id) === false) {
			setItemCart([...itemCart, { ...datos, qty: count }]);
		} else {
			getQuantity(datos, count);
		}
	};

	// FUNCTION PARA INTERACTUAR EN /CHECKOUT
	// devuelve el total del precio

	const total = () => {
		const precioTotal = itemCart.reduce((a, b) => a + b.precio * b.qty, 0);
		return precioTotal;
	};

	// suma cantidades para mostrar el total de items en el estado
	const getUnits = () => {
		const unid = itemCart.reduce((a, b) => a + b.qty, 0);
		return unid;
	};

	// sacar item
	const removeItems = (item) => {
		const newItems = itemCart.filter((x) => x.id !== item);
		setItemCart(newItems);
	};

	// vacia el estado
	const clearItems = () => setItemCart([]);

	return (
		<CartContext.Provider
			value={{ addItems, removeItems, clearItems, total, getUnits, itemCart }}
		>
			{children}
		</CartContext.Provider>
	);
};

import "./css/App.css";
import NavBar from "./Components/NavBar";
import ItemDetailContainer from "./container/ItemDetailContainer";
import ItemListContainer from "./container/ItemListContainer";
import Footer from "./Components/Footer";
import CartContainer from "./container/CartContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartProvider } from "./Context/CartContext";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<CartProvider>
					<NavBar />

					<Switch>
						<Route path="/checkout">
							<CartContainer />
						</Route>

						<Route path="/item/:paramId">
							<ItemDetailContainer />
						</Route>

						<Route path="/category/:paramCategory">
							<ItemListContainer />
						</Route>

						<Route path="/">
							<ItemListContainer />
						</Route>
					</Switch>

					<Footer />
				</CartProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;

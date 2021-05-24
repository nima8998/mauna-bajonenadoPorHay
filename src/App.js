import "./css/App.css";
import NavBar from "./Components/NavBar";
import ItemDetailContainer from "./container/ItemDetailContainer";
import ItemListContainer from "./container/ItemListContainer";
import Footer from "./Components/Footer";
import CartContainer from "./container/CartContainer";
import UserProfileContainer from "./container/UserProfileContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartProvider } from "./Context/CartContext";
import { UserProvider } from "./Context/UserContext";

function App() {
	return (
		<div className="App">
			<UserProvider>
				<CartProvider>
					<BrowserRouter>
						<NavBar />
						<Switch>
							<Route path="/profile">
								<UserProfileContainer />
							</Route>
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
					</BrowserRouter>
				</CartProvider>
			</UserProvider>
		</div>
	);
}

export default App;

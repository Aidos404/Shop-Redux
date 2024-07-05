import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Cart from './components/Cart'
import NavBarPanel from './components/NavBarPanel'
import Product from './components/Product'
import store from './store/store'
function App() {
	return (
		<>
			<Provider store={store}>
				<BrowserRouter>
					<NavBarPanel />
					<Routes>
						<Route path='/cart' element={<Cart />} />
						<Route path='/' element={<Product />} />
					</Routes>
				</BrowserRouter>
			</Provider>
		</>
	)
}

export default App

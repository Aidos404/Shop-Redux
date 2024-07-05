import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useDispatch } from 'react-redux'
import { add } from '../store/cartSlice'
function Product() {
	const [products, getProducts] = useState([])
	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then((data) => data.json())
			.then((result) => getProducts(result))
	}, [])
	const dispatch = useDispatch()
	const addToCart = (product) => {
		dispatch(add(product))
	}

	const cards = products.map((product) => (
		<div className='col-md-3' key={product.id}>
			<Card style={{ width: '18rem' }}>
				<div className='text-center'>
					<Card.Img
						variant='top'
						src={product.image}
						style={{ width: '100px', height: '130px' }}
					/>
				</div>

				<Card.Body>
					<Card.Title>{product.title}</Card.Title>
					<Card.Text>${product.price}</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Button variant='primary' onClick={() => addToCart(product)}>
						Add to Cart
					</Button>
				</Card.Footer>
			</Card>
		</div>
	))
	return (
		<>
			<div className='row'>{cards}</div>
		</>
	)
}

export default Product

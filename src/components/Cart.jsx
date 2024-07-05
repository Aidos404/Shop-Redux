import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice'

function Cart() {
	const dispatch = useDispatch()
	const removeFromCart = (id) => {
		dispatch(remove(id))
	}
	const productsInCart = useSelector((state) => state.cart)
	const cards = productsInCart.map((product) => (
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
					<Button variant='primary' onClick={() => removeFromCart(product.id)}>
						Remove From Cart
					</Button>
				</Card.Footer>
			</Card>
		</div>
	))
	return <div className='row'>{cards}</div>
}

export default Cart

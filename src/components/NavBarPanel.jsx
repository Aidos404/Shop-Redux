import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarText from 'react-bootstrap/esm/NavbarText'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function NavBarPanel() {
	const cartProducts = useSelector((state) => state.cart)
	return (
		<div>
			<Navbar expand='lg' className='bg-body-tertiary'>
				<Container>
					<Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
					<Navbar.Toggle aria-controls='тnavbarScroll' />
					<Nav>
						<Nav.Link to='/' as={Link}>
							Products
						</Nav.Link>
					</Nav>

					<NavbarToggle />
					<NavbarCollapse className='justify-content-end'>
						<NavbarText>
							<Nav.Link to='/cart' as={Link}>
								My Bag {cartProducts.length}
							</Nav.Link>
						</NavbarText>
					</NavbarCollapse>
				</Container>
			</Navbar>
		</div>
	)
}

export default NavBarPanel

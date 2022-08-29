import React from 'react';
import DataPanel from './DataPanel';
import MundoMascotaDH from './MundoMascotaDH';
import FamilyProducts from './FamilyProducts';
import CategoryProducts from './CategoryProducts';
import LastProduct from './LastProduct';
import ProductsInDb from './ProductsInDb';

class ContentRowTop extends React.Component {

	constructor() {
		super()
		this.state = {
			nombre: '',
			descripcion: '',
			imageSrc: ''
		}
	}

	componentDidMount() {
		fetch('api/products')
			.then(respuesta => { return respuesta.json() })
			.then(productos => {
				return productos.products[productos.products.length - 1]
			})
			.then(product => {
				let parts = product.detailURL.split('/');
				let url = 'api/products/' + parts[parts.length - 1];
				fetch(url).then(resp => { return resp.json() })
					.then(producto => {
						this.setState({ nombre: producto.data.productToSend.name });
						this.setState({ descripcion: producto.data.productToSend.description });
						let parts = producto.data.imageURL.split('/');
						this.setState({ imageSrc: '/images/products/' + parts[parts.length - 1] });
					})
					.catch(error => {
						return (error)
					})
			})
	}

	render() {

		let imageRoute;
		if (this.state.imageSrc === '') {
			imageRoute = '';
		} else {
			imageRoute = this.state.imageSrc;
		}

		return (
			<React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Mundo Mascota DH Dashboard</h1>
					</div>

					{/*<!-- PANELES*/}
					<div className="row">

						{/* TARJETITAS */}
						<DataPanel />

					</div>
					{/*<!-- PANELES -->*/}


					{/*<!-- TODA LA LOGICA DE LOS COMPONENTES POR SEPARADO -->*/}
					<div className="row">

						{/*<!-- MUNDO MASCOTA DH -->*/}
						<MundoMascotaDH />

						{/*<!-- FAMILIA DE PRODUCTOS -->*/}
						<FamilyProducts />

						{/*<!-- CATEGORIAS DE PRODUCTOS -->*/}
						<CategoryProducts />

						{/*<!-- ULTIMO PRODUCTO CREADO -->*/}
						<LastProduct />

						{/*<!-- ULTIMO PRODUCTO CREADO -->*/}
						<ProductsInDb />
						

					</div>
				</div>


			</React.Fragment>
		)

	}
}

export default ContentRowTop;


import React, { Component } from 'react';
import DataPanel from './DataPanel';
import MundoMascotaDH from './MundoMascotaDH';
import FamilyProducts from './FamilyProducts';
import CategoryProducts from './CategoryProducts';
import ProductsInDb from './ProductsInDb';

class ContentRowTop extends Component {

	constructor() {
		super()
		this.state = {
			nombre: '',
			descripcion: '',
			imageSrc: ''
		}
	}
	/* Se encarga de modificar los estados de nombre,descripcion e imagen */
	componentDidMount() {
		fetch('/api/products/:id')
			.then(respuesta => { return respuesta.json() })
			.then(productos => { return productos.data[productos.data.length - 1] })
			.then(data => {
				let parts = data.detailURL.split('/');
				let url = 'api/products' + parts[parts.length - 1];
				fetch(url).then(resp => { return resp.json() })
					.then(producto => {
						this.setState({ nombre: producto.data.productToSend.name });
						this.setState({ descripcion: producto.data.productToSend.description });
						let parts = producto.data.imageURL.split('/');
						this.setState({ imageSrc: '/img/usersimage/' + parts[parts.length - 1] });
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
					
					{/* TARJETITAS */}
					<DataPanel />
					
					{/*<!-- TODA LA LOGICA DE LOS COMPONENTES POR SEPARADO -->*/}
					<div className="row">

						{/*<!-- MUNDO MASCOTA DH -->*/}
						<MundoMascotaDH />

						{/*<!-- FAMILIA DE PRODUCTOS -->*/}
						<FamilyProducts />

						{/*<!-- CATEGORIAS DE PRODUCTOS -->*/}
						<CategoryProducts />

						{/*<!-- ULTIMO PRODUCTO CREADO -->*/}
						<div className="col-lg-6 mb-4">
								<div className="card shadow mb-4">
									<div className="card-header py-3">
										<h5 className="h1 m-0 font-weight-bold text-gray-800">Último Producto</h5>
									</div>
									<div className="card-body">
										<div className="text-center">
											<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imageRoute} alt="Imagen de producto" />
										</div>
										<p className="h2"> <strong> {this.state.nombre} </strong> </p>
										<p className="h4"> <strong> {this.state.descripcion} </strong> </p>
									</div>
								</div>
							</div>

						{/*<!-- TODOS LOS PRODUCTOS -->*/}
						<ProductsInDb />

					</div>
				</div>


			</React.Fragment>
		)

	}
}

export default ContentRowTop;


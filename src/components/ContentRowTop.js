import React from 'react';
import imagenMarca from '../assets/images/pagina-web.PNG'
function ContentRowTop() {
	return (
		<React.Fragment>
			{/*<!-- Content Row Top -->*/}
			<div className="container-fluid">
				<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
					<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
				</div>

				{/*<!-- Content Row Movies-->*/}
				<div className="row">

					{/*<!-- Movies in Data Base -->*/}
					<div className="col-md-4 mb-4">
						<div className="card border-left-primary shadow h-100 py-2">
							<div className="card-body">
								<div className="row no-gutters align-items-center">
									<div className="col mr-2">
										<div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Total de Productos</div>
										<div className="h5 mb-0 font-weight-bold text-gray-800">21</div>
									</div>
									<div className="col-auto">
										<i className="fas fa-film fa-2x text-gray-300"></i>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/*<!-- Total awards -->*/}
					<div className="col-md-4 mb-4">
						<div className="card border-left-success shadow h-100 py-2">
							<div className="card-body">
								<div className="row no-gutters align-items-center">
									<div className="col mr-2">
										<div className="text-xs font-weight-bold text-success text-uppercase mb-1"> Total de Categorias</div>
										<div className="h5 mb-0 font-weight-bold text-gray-800">79</div>
									</div>
									<div className="col-auto">
										<i className="fas fa-award fa-2x text-gray-300"></i>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/*<!-- Actors quantity -->*/}
					<div className="col-md-4 mb-4">
						<div className="card border-left-warning shadow h-100 py-2">
							<div className="card-body">
								<div className="row no-gutters align-items-center">
									<div className="col mr-2">
										<div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Total de Usuarios
										</div>
										<div className="h5 mb-0 font-weight-bold text-gray-800">49</div>
									</div>
									<div className="col-auto">
										<i className="fas fa-user fa-2x text-gray-300"></i>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/*<!-- End movies in Data Base -->*/}


				{/*<!-- Content Row Last Movie in Data Base -->*/}
				<div className="row">
					{/*<!-- Last Movie in DB -->*/}
					<div className="col-lg-6 mb-4">
						<div className="card shadow mb-4">
							<div className="card-header py-3">
								<h5 className="m-0 font-weight-bold text-gray-800">Mundo Mascota DH</h5>
							</div>
							<div className="card-body">
								<div className="text-center">
									<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 40 + 'rem' }} src={imagenMarca} alt=" Imagen Marca MD " />
								</div>
							
								<h5>En Mundo Mascota DH reconocemos a las mascotas como un miembro más de la familia, a las que
									debemos cuidar, proteger, y brindar el mejor cuidado para que tengan una excelente calidad
									de vida. Para ello ofrecemos la más amplia variedad en productos alimenticios, accesorios,
									farmacia, servicios experimentados (veterinaria, peluquería), mascotas para adopción , y
									mucho más!</h5>

									<h5>Te damos una experiencia diferente de compra, ofreciendo productos y servicios de alta
									calidad que cumplen con las necesidades de las mascotas y la satisfacción de sus dueños.
								</h5>
								<a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Quienes somos...</a>
							</div>
						</div>
					</div>
					{/*<!-- End content row last movie in Data Base -->*/}

					{/*<!-- Genres in DB -->*/}
					<div className="col-lg-6 mb-4">
						<div className="card shadow mb-4">
							<div className="card-header py-3">
								<h5 className="m-0 font-weight-bold text-gray-800">Nuestra familia de productos</h5>
							</div>
							<div className="card-body">
								<div className="row">
									<div className="col-lg-6 mb-4">
										<div className="card bg-dark text-white shadow">
											<div className="card-body">
												Alimentos
											</div>
										</div>
									</div>
									<div className="col-lg-6 mb-4">
										<div className="card bg-dark text-white shadow">
											<div className="card-body">
												Juguetes
											</div>
										</div>
									</div>
									<div className="col-lg-6 mb-4">
										<div className="card bg-dark text-white shadow">
											<div className="card-body">
												Belleza
											</div>
										</div>
									</div>
									<div className="col-lg-6 mb-4">
										<div className="card bg-dark text-white shadow">
											<div className="card-body">
												Camas
											</div>
										</div>
									</div>
									<div className="col-lg-6 mb-4">
										<div className="card bg-dark text-white shadow">
											<div className="card-body">
												Higiene
											</div>
										</div>
									</div>
									<div className="col-lg-6 mb-4">
										<div className="card bg-dark text-white shadow">
											<div className="card-body">
												Ropa
											</div>
										</div>
									</div>
									<div className="col-lg-6 mb-4">
										<div className="card bg-dark text-white shadow">
											<div className="card-body">
												Articulos
											</div>
										</div>
									</div>
									<div className="col-lg-6 mb-4">
										<div className="card bg-dark text-white shadow">
											<div className="card-body">
												Comedores
											</div>
										</div>
									</div>
									{/* <div className="col-lg-6 mb-4">
										<div className="card bg-dark text-white shadow">
											<div className="card-body">
												Infantiles
											</div>
										</div>
									</div> */}
									{/* <div className="col-lg-6 mb-4">
										<div className="card bg-dark text-white shadow">
											<div className="card-body">
												Musical
											</div>
										</div>
									</div> */}

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/*<!--End Content Row Top-->*/}

		</React.Fragment>
	)

}
export default ContentRowTop;
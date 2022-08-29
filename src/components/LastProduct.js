import React from 'react';

function LastProduct(){
    return(
        <React.Fragment>
				<div className="row">
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
						</div>
        </React.Fragment>
    )
}
export default LastProduct;
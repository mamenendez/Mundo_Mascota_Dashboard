import React from 'react';


function CategoryProducts(){
    return(
        <React.Fragment>
				<div className="col-lg-6 mb-4">
						<div className="card shadow mb-4">
							<div className="card-header py-3">
								<h5 className="m-0 font-weight-bold text-gray-800">Categoria de productos</h5>
							</div>
							<div className="card-body">
								<div className="row">
									<div className="col-lg-6 mb-4">
										<div className="card bg-dark text-white shadow">
											<div className="card-body">
												Perros
											</div>
										</div>
									</div>
									<div className="col-lg-6 mb-4">
										<div className="card bg-dark text-white shadow">
											<div className="card-body">
												Gatos
											</div>
										</div>
									</div>
									
								
								</div>
							</div>
						</div>
					</div>

        </React.Fragment>
    )
}
export default CategoryProducts;
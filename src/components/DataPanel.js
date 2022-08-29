import React from 'react';
import SmallCard from './DataNumbersSmallCard';


class DataPanel extends React.Component{
    constructor(){
        super()
        this.state = {
            productLength : 0,
            usersLength : 0,
            categories : 0
        }
    }

    componentDidMount(){
        let cantProductos = fetch('api/products').then(respuesta =>{return respuesta.json()});
        let cantUsuarios = fetch('api/usuarios').then(respuesta =>{return respuesta.json()});
        Promise.all ([cantProductos,cantUsuarios])
        .then (([cantProductos,cantUsuarios]) =>{
            this.setState ({productLength: cantProductos.count})
            this.setState ({usersLength: cantUsuarios.total})
            this.setState ({categories:cantProductos.categoriesCount})
        })
    }

    render (){
        let valor;
        let cardProps;
        
        if (this.state.productLength === ' ') {
            valor = <p>Cargando</p>
        } else {
            let productInDataBase = {
                color: "azul1",
                titulo: "Productos",
                valor: this.state.productLength,
                icono: "fas fa-shopping-cart",
            }
            
            let amount ={
                color: "azul1",
                titulo: "Usuarios",
                valor: this.state.usersLength,
                icono: "ffas fa-paw",
            }
            
            let user = {
                color: "azul1",
                titulo: "Categorias",
                valor: this.state.categories,
                icono: "fa-solid fa-users",
            }
            
            cardProps = [productInDataBase, amount, user];

            valor = cardProps.map((producto,index)=>{
                return <SmallCard  {...producto} key= {index}/>
            }) 
        }

        return (
            <React.Fragment>
            <div className="row">
                {valor}
            </div>
            </React.Fragment>
        )
    }
};

export default DataPanel;
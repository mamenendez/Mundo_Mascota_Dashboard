/* import React, {Component} from 'react';
import UserList from './UserList';

class Users extends Component{
    constructor(){
        super()
        this.state ={
            listUser: []
        }
    }

    componentDidMount(){
        fetch('api/usuarios')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(usuarios =>{
            this.setState({listUser: usuarios.data})
        })
        .catch(error => console.log(error))
    }

    render(){
        return (
            <React.Fragment>
            
            <h1 className="h1 mb-2 text-gray-800">Usuarios</h1>
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th className="h4"><strong>Id</strong></th>
                                    <th className="h4"><strong>Nombre</strong></th>
                                    <th className="h4"><strong>Email</strong></th>
                                </tr>
                            </thead>
                            {
                            this.state.listUser.map((usuario,index)=>{
                                return <UserList {...usuario} key={index} />
                            })
                        }
                        </table>
                    </div>
                </div>
            </div>            
            </React.Fragment>
        )
    }   
}
export default Users; */
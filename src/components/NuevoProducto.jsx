import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//Action de Redux
import { crearNuevoProductoAction } from '../actions/productoActions';

const NuevoProducto = () => {

    //state del componente
    const [ nombre, guardarNombre ] = useState('');
    const [precio, guardarPrecio] = useState(0);

    //utilizar useDispatch
    const dispatch = useDispatch();

    //Mandar llamr el action de productoAction
    const agregarProducto = () => dispatch( crearNuevoProductoAction() )

    //CUando el usuario haga submit
    const submitNuevoProducto = e =>{
        e.preventDefault();

        //Validar formulario

        //sia no hay erores

        //crear el nuevo producto
        agregarProducto();
    }

    return ( 
       <div className="row justify-content-center">
           <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar Nuevo Producto
                        </h2>

                        <form
                            onSubmit={submitNuevoProducto}
                        >
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    name="nombre"
                                    value={nombre}
                                    onChange={e => guardarNombre(e.target.value)}
                                ></input>
                            </div>

                            <div className="form-group">
                                <label>Precio del Producto </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio del Producto"
                                    name="precio"
                                    value={precio}
                                    onChange={e => guardarPrecio(e.target.value)}
                                ></input>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase
                                d-block w-100"
                            >Agregar</button>
                        </form>

                    </div>
                </div>
           </div>
       </div>
     );
}
 
export default NuevoProducto;
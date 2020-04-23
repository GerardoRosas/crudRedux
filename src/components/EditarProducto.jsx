import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editarProductoAction } from '../actions/productoActions';
import { useHistory } from 'react-router-dom'

const EditarProducto = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    //Nuevo state de producto
    const [ producto, guardarProdcuto ] = useState({
        nombre: '',
        precio: ''
    })

    //producto a editar
    const productoeditar = useSelector(state => state.productos.productoeditar);
    
    //Lenar el state automáticamente
    useEffect(() => {
        guardarProdcuto(productoeditar);
    }, [productoeditar])

    //Leer los datos del formulario
    const onChangeFormulario = e => {
        guardarProdcuto({
            ...producto,
            [e.target.name]: e.target.value
        })
    }

    const {nombre, precio} = producto;

    const submitEditarProducto = e => {
        e.preventDefault();


        dispatch(editarProductoAction(producto));
        history.push('/');
    }

    return ( 
        <div className="row justify-content-center">
           <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar Producto
                        </h2>

                        <form
                            onSubmit={submitEditarProducto}
                        >
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    name="nombre"
                                    value={nombre}
                                    onChange={onChangeFormulario}
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
                                    onChange={onChangeFormulario}
                                ></input>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase
                                d-block w-100"
                            >Guardar Cambios</button>
                        </form>

                    </div>
                </div>
           </div>
       </div>
     );
}
 
export default EditarProducto;
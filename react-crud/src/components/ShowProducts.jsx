import {useState, useEffect} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { show_alerta } from '../funciones';

const ShowProducts = () => {
    const url = 'http://api-producst.run';
    const [products, setProducts] = useState([]);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [operation, setOperation] = useState(1);
    const [title, setTitle] = useState('');
    
    useEffect(() => {
        getProducts();
    },[])

    const getProducts = async () => {
        const respuesta = await axios.get(url);
        setProducts(respuesta.data);
    }


  return (
    <>
        <div className="App">
            <div className="container-fluid">

            </div>
            <div className="row mt-3">
                <div className="col-md-4 offset-4">
                    <div className="d-grid mx-auto">
                        <button className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#modal-Products">
                            <i className="fa-solid fa-circle-plus"></i> Añadir
                        </button>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12 col-lg-8 offset-0 offset-lg-12">
                        <div className="table-responsive">
                            <table className="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Producto</th>
                                        <th scope="col">Descripción</th>
                                        <th scope="col">Precio</th>
                                        <th scope="col">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody className="table-group-divider">

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade">

            </div>
        </div>
    </>
  )
}

export default ShowProducts
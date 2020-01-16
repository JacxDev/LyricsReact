import React, { useState } from 'react';

const Formulario = ({ guardarBusquedaLetra }) => {

    const [busqueda, guardarBusqueda] = useState({
        artista: '',
        cancion: ''
    })

    const [error, guardarError] = useState(false);

    const { artista, cancion } = busqueda;

    //Funcion de input para guardar el contenido en el state
    const actualizarState = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }


    //Funcion para buscar la informacion en la API
    const buscarInformacion = e => {
        e.preventDefault();

        if (artista.trim() === '' || cancion.trim() === '') {
            guardarError(true);
            return;
        }
        guardarError(false);
        //Si las consultas son correctas pasar al componente principal
        guardarBusquedaLetra(busqueda);

    }

    return (
        <div className="bg-info">
            {error ? <p className="alert alert-danger text-danger p-2"> Todos los campos son obligatorios</p> : null}
            <div className="container">
                <div className="row">



                    <form onSubmit={buscarInformacion} className="col card text-white bg-transparent mb-5 pt-5 pb-2" action="">
                        <fieldset>
                            <legend className="text-center">Buscador de letras de canciones</legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input type="text"
                                            className="form-control"
                                            name="artista"
                                            placeholder="Nombre artista"
                                            onChange={actualizarState} />

                                    </div>

                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Cancion</label>
                                        <input type="text"
                                            className="form-control"
                                            name="cancion"
                                            placeholder="Nombre cancion"
                                            onChange={actualizarState}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary float-right">
                                Buscar
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>


    )
}

export default Formulario
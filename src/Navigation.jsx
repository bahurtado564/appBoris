import React, {Component} from 'react';

export default () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="navbar-header">
                <a className="navbar-brand" href="/">Prueba</a>
                </div>
            </div>
            <div className=" navbar">
                <div className="nav navbar navbar-right">
                    <a className="btn btn-primary" href="/inscripcion" role="button">Inciar sesión</a>
                </div>
            </div>
        </nav>

    )
}
import React from "react";
import { ZonaSuperior1 } from "./shared/zonaSuperior1"
import { SeleccionarJugador } from "./seleccionarJugador"

export const PantallaSeleccion = () => {

    return <>
        <div className="container">
            <ZonaSuperior1 />
            <SeleccionarJugador />
        </div>
    </>
}
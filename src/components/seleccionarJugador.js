import React, { useState } from "react";
import { Input } from "./input"
import { Weapon } from "./weapon"
import { ZonaJuego } from "./zonaJuego";
import { ZonaSuperior2 } from "./shared/zonaSuperior2";

export const SeleccionarJugador = () => {

    const [state, setState] = useState({
        player1: "",
        player2: "",
        jugadorActivo: "",
        weapon: null
    });
    

    const getName = (e) => {

        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const getWeapon = (e) => {

        setState({
            ...state,
            [e.target.id]: e.target.className,
            jugadorActivo: state.player1
        })
    }

    const turno = () => {

        setState({
            ...state,
            jugadorActivo: state.jugadorActivo === state.player1 ? state.player2 : state.player1,
            weapon: state.weapon === "X" ? "O" : "X"
        })

    }

    return (
        <>

            {
                (state.player1 === "" || state.player2 === "" || state.weapon === null) &&
                //Los parentesis es un retorn al momento de querer implementar algo despues de hacer condicionales
                (
                    <>
                        <ZonaSuperior2 />
                        <div className="row">
                            <div className="col-md-6 tablero offset-md-3 text-center">
                                <h2 className="mb-3 text-light">Choose your Weapon</h2>
                                <div className="row">
                                    <div className="col-md-4  offset-md-2">
                                        <Input placeholder="Name Player 1" name="player1" getName={getName} />
                                    </div>
                                    <div className="col-md-4">
                                        <Input placeholder="Name Player 2" name="player2" getName={getName} />
                                    </div>
                                </div>
                                <Weapon id="weapon" getWeapon={getWeapon} />
                            </div>
                        </div>
                    </>
                )
            }
            {
                (state.player1 !== "" && state.player2 !== "" && state.weapon !== null) &&
                <ZonaJuego state={state} turno={turno} />
            }



        </>
    )
}


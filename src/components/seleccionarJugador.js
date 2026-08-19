import React, { useState } from "react";
import { Input } from "./input";
import { Weapon } from "./weapon";
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
        const { name, value } = e.target;
        setState((prev) => ({ ...prev, [name]: value }));
    };

    const getWeapon = (weapon) => {
        setState((prev) => ({
            ...prev,
            weapon,
            jugadorActivo: prev.player1
        }));
    };

    const turno = () => {
        setState((prev) => ({
            ...prev,
            jugadorActivo: prev.jugadorActivo === prev.player1 ? prev.player2 : prev.player1,
            weapon: prev.weapon === "X" ? "O" : "X"
        }));
    };

    const setupComplete =
        state.player1 !== "" &&
        state.player2 !== "" &&
        state.weapon !== null;

    return (
        <>
            {!setupComplete && (
                <>
                    <ZonaSuperior2 />
                    <div className="row">
                        <div className="col-md-6 tablero offset-md-3 text-center">
                            <h2 className="mb-3 text-light">Choose your Weapon</h2>
                            <div className="row">
                                <div className="col-md-4 offset-md-2">
                                    <Input placeholder="Name Player 1" name="player1" getName={getName} />
                                </div>
                                <div className="col-md-4">
                                    <Input placeholder="Name Player 2" name="player2" getName={getName} />
                                </div>
                            </div>
                            <Weapon getWeapon={getWeapon} />
                        </div>
                    </div>
                </>
            )}
            {setupComplete && <ZonaJuego state={state} turno={turno} />}
        </>
    );
};

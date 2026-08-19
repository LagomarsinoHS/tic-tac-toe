import React, { useState } from "react";

const WINNING_LINES = [
    ["div1", "div2", "div3"],
    ["div4", "div5", "div6"],
    ["div7", "div8", "div9"],
    ["div1", "div4", "div7"],
    ["div2", "div5", "div8"],
    ["div3", "div6", "div9"],
    ["div1", "div5", "div9"],
    ["div3", "div5", "div7"]
];

const EMPTY_BOARD = {
    div1: "",
    div2: "",
    div3: "",
    div4: "",
    div5: "",
    div6: "",
    div7: "",
    div8: "",
    div9: ""
};

function checkWinner(board) {
    return WINNING_LINES.some(([a, b, c]) => {
        return board[a] !== "" && board[a] === board[b] && board[b] === board[c];
    });
}

export const ZonaJuego = (props) => {
    const [equisOcirculo, setEquisoCirculo] = useState(EMPTY_BOARD);
    const [ganador, setGanador] = useState(false);

    const cambiarArmayNombre = (e) => {
        const cellId = e.target.id;

        if (ganador || equisOcirculo[cellId] !== "") {
            return;
        }

        const nextBoard = {
            ...equisOcirculo,
            [cellId]: props.state.weapon
        };

        setEquisoCirculo(nextBoard);

        if (checkWinner(nextBoard)) {
            setGanador(true);
        } else {
            props.turno();
        }
    };

    return (
        <div className="container text-center">
            {ganador ? (
                <span className="fw-bold">GANADOR!!! {props.state.jugadorActivo}</span>
            ) : (
                <span className="fw-bold">Turno de: {props.state.jugadorActivo}</span>
            )}

            <div className="row mt-5">
                <div className="col-md-6 offset-md-3 bg-dark">
                    <div className="row">
                        <div className="col-4 equisYcirculo border-end border-bottom turno" id="div1" onClick={cambiarArmayNombre}>{equisOcirculo.div1}</div>
                        <div className="col-4 equisYcirculo border-end border-bottom turno" id="div2" onClick={cambiarArmayNombre}>{equisOcirculo.div2}</div>
                        <div className="col-4 equisYcirculo border-bottom turno" id="div3" onClick={cambiarArmayNombre}>{equisOcirculo.div3}</div>
                    </div>
                    <div className="row">
                        <div className="col-4 equisYcirculo border-end border-bottom turno" id="div4" onClick={cambiarArmayNombre}>{equisOcirculo.div4}</div>
                        <div className="col-4 equisYcirculo border-end border-bottom turno" id="div5" onClick={cambiarArmayNombre}>{equisOcirculo.div5}</div>
                        <div className="col-4 equisYcirculo border-bottom turno" id="div6" onClick={cambiarArmayNombre}>{equisOcirculo.div6}</div>
                    </div>
                    <div className="row">
                        <div className="col-4 equisYcirculo border-end turno" id="div7" onClick={cambiarArmayNombre}>{equisOcirculo.div7}</div>
                        <div className="col-4 equisYcirculo border-end turno" id="div8" onClick={cambiarArmayNombre}>{equisOcirculo.div8}</div>
                        <div className="col-4 equisYcirculo turno" id="div9" onClick={cambiarArmayNombre}>{equisOcirculo.div9}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

import React, { useState } from "react";

export const ZonaJuego = (props) => {
    console.log(props);
    const [equisOcirculo, setEquisoCirculo] = useState({
        div1: "",
        div2: "",
        div3: "",
        div4: "",
        div5: "",
        div6: "",
        div7: "",
        div8: "",
        div9: ""
    })

    const [ganador, setGanador] = useState();

    const getWinner = () => {

        //Horizontal
        if (equisOcirculo["div1"] !== "" && equisOcirculo["div2"] !== "" && equisOcirculo["div3"] !== "") {
            if (equisOcirculo["div1"] === equisOcirculo["div2"] && equisOcirculo["div2"] === equisOcirculo["div3"]) {
                setGanador(true);
                console.log("aqui")
            }
        }
        if (equisOcirculo.div4 !== "" && equisOcirculo.div5 !== "" && equisOcirculo.div6 !== "") {
            if (equisOcirculo.div4 === equisOcirculo.div5 && equisOcirculo.div5 === equisOcirculo.div6) {
                setGanador(true);
            }
        }
        if (equisOcirculo.div7 !== "" && equisOcirculo.div8 !== "" && equisOcirculo.div9 !== "") {
            if (equisOcirculo.div7 === equisOcirculo.div8 && equisOcirculo.div8 === equisOcirculo.div9) {
                setGanador(true);
            }
        }
        //Vertical
        if (equisOcirculo.div1 !== "" && equisOcirculo.div4 !== "" && equisOcirculo.div7 !== "") {
            if (equisOcirculo.div1 === equisOcirculo.div4 && equisOcirculo.div4 === equisOcirculo.div7) {
                setGanador(true);
            }
        }
        if (equisOcirculo.div2 !== "" && equisOcirculo.div5 !== "" && equisOcirculo.div8 !== "") {
            if (equisOcirculo.div2 === equisOcirculo.div5 && equisOcirculo.div5 === equisOcirculo.div8) {
                setGanador(true);
            }
        }
        if (equisOcirculo.div3 !== "" && equisOcirculo.div6 !== "" && equisOcirculo.div9 !== "") {
            if (equisOcirculo.div3 === equisOcirculo.div6 && equisOcirculo.div6 === equisOcirculo.div9) {
                setGanador(true);
            }
        }

        //Diagonales
        if (equisOcirculo.div1 !== "" && equisOcirculo.div5 !== "" && equisOcirculo.div9 !== "") {
            if (equisOcirculo.div1 === equisOcirculo.div5 && equisOcirculo.div5 === equisOcirculo.div9) {
                setGanador(true);
            }
        }
        if (equisOcirculo.div3 !== "" && equisOcirculo.div5 !== "" && equisOcirculo.div7 !== "") {
            if (equisOcirculo.div3 === equisOcirculo.div5 && equisOcirculo.div5 === equisOcirculo.div7) {
                setGanador(true);
            }
        }

    }






    const cambiarArmayNombre = (e) => {
        //V Variable programada
        if (equisOcirculo[e.target.id] === "") {

            let data = {
                [e.target.id]: props.state.weapon
            }
            setEquisoCirculo(prevState => {

                //  V  Variable programada
                return { ...prevState, ...data }
            })
            props.turno(e);
            getWinner();
        }
    }

    return (
        <>

            <div className="container text-center">
                {
                    ganador != null ?
                        <span className="font-weight-bold">GANADOR!!! {props.state.jugadorActivo}</span> :

                        <span className="font-weight-bold">Turno de: {props.state.jugadorActivo}</span>
                }

                <div className="row mt-5 ">
                    <div className="col-md-6 offset-md-3 bg-dark">
                        <div className="row">
                            <div className="col-md-4 equisYcirculo border-right border-bottom turno" id="div1" onClick={(e) => cambiarArmayNombre(e)}>{equisOcirculo.div1}</div>
                            <div className="col-md-4 equisYcirculo border-right border-bottom turno" id="div2" onClick={(e) => cambiarArmayNombre(e)}>{equisOcirculo.div2}</div>
                            <div className="col-md-4 equisYcirculo border-bottom turno" id="div3" onClick={(e) => cambiarArmayNombre(e)}>{equisOcirculo.div3}</div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 equisYcirculo border-right border-bottom turno" id="div4" onClick={(e) => cambiarArmayNombre(e)}>{equisOcirculo.div4}</div>
                            <div className="col-md-4 equisYcirculo border-right border-bottom turno" id="div5" onClick={(e) => cambiarArmayNombre(e)}>{equisOcirculo.div5}</div>
                            <div className="col-md-4 equisYcirculo border-bottom turno" id="div6" onClick={(e) => cambiarArmayNombre(e)}>{equisOcirculo.div6}</div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 equisYcirculo border-right turno" id="div7" onClick={(e) => cambiarArmayNombre(e)}>{equisOcirculo.div7}</div>
                            <div className="col-md-4 equisYcirculo border-right turno" id="div8" onClick={(e) => cambiarArmayNombre(e)}>{equisOcirculo.div8}</div>
                            <div className="col-md-4 equisYcirculo turno" id="div9" onClick={(e) => cambiarArmayNombre(e)}>{equisOcirculo.div9}</div>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}
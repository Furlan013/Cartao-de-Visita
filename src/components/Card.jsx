import React from "react";
import './Card.css';
import perfil from "../assets/rocket.jpg"
import zap from "../assets/zap.png"
import linkedin from "../assets/linkedin.png"

function Card() {
    return (
        <div className="card">
            <img
                src={perfil}
                alt="Foto de Perfil"
                className="perfil"
            />
            <h2>Rocket Raccoon</h2>

            <ul className="formacao">  
                <li>Geneticamente Modificado</li>
                <li>Engenheiro e Mecânico de Alta Performance</li>
                <li>Especialista em Engenharia Militar</li>
            </ul>

            <p className="telefone">
                <a href="tel:+5519328746351">Tel: (19) 328746351</a>
            </p>

            <div className="contato">
                <a href="#" target="_blank" rel="icon">
                    <img src={zap} alt="zap" />
                </a>

                <a href="https://www.linkedin.com/in/rocket-raccoon-042033190" target="_blank" rel="icon">
                    <img src={linkedin} alt="linkedin" />
                </a>
            </div>
        </div>
    );
}

export default Card;

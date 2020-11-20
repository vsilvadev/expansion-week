import React from "react";
import  winner from "../assets/winner.svg";
import runner from "../assets/correndo.svg";


export default function BeResilient() {
    return(
        <div>
            <div class="be-resilient">
                <div class="reasons-to-be">
                    <h1>Seja resiliente! 🚀</h1>

                    <ul>
                        <li>• Tenha maior capacidade de adaptação</li>
                        <li>• Ganhe criatividade</li>
                        <li>• Aumente sua autoestima</li>
                        <li>• Aprenda mais com as experiências da vida</li>
                        <li>• Vença momentos de crise</li>
                        <li>• Veja os fatos pelo lado positivo</li>
                    </ul>
                </div>
                <img src={winner} alt="Winner trophy"/>
            </div>

            <div class="final-quote">
                <h1>“Programação não é uma corrida de 100 metros, é uma maratona onde o aprendizado é constante. Não é sobre quem chega primeiro e sim sobre quem se mantém correndo.”</h1>
                <p>- Diego Fernandes</p>

                <img src={runner} alt="Runner"/>
            </div>
        </div>
    );
}
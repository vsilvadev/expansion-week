import React from "react";
import duvida from "../assets/duvida.svg";

export default function About() {
    return (
        <div class="about">
            <h1>O que é resiliência?</h1>
        
            <div class="blocks-layout">
                <div class="block">
                    <p>É a capacidade de se recuperar depois de um acontecimento negativo através de respostas positivas e proativas.</p>
                </div>

                <div class="block">
                    <p> Mais do que força, é algo que exige  maturidade psicológica. A pessoa com essa característica consegue lidar com problemas, se adaptar a mudanças e resistir a pressões.</p>
                </div>

                <div class="block">
                    <p> Por possibilitar os aprendizados nos momentos de dificuldade, acaba sendo a base para o desenvolvimento de outras “soft skills” algo extremamente útil na vida e no mercado de trabalho.</p>
                </div>
            </div>

            <hr/>

            <div class="how-to">
                <img src={duvida} alt="Boy with doubt"/>
                <h1>Como ser resiliente?</h1>
            </div>

            <div class="tips">
                <div class="tip">
                    <h1>Seja adaptável</h1>

                    <div class="tip-block">
                        <p>Tenha a flexibilidade para ver diferentes pontos de vista e assim  se adaptar a diversas situações através de ajustes, busque a evolução.</p>
                    </div>
                </div>

                <div class="tip">
                    <h1>Seja positivo</h1>

                    <div class="tip-block">
                        <p>Se condicione a pensar de uma maneira positiva em todas as situações. Comece a dar valor ao lado positivo das coisas, crie esse hábito!</p>
                    </div>
                </div>

                <div class="tip">
                    <h1>Cometa erros</h1>

                    <div class="tip-block">
                        <p>Não tenha medo de se frustrar e nem de errar, os erros vão te gerar calos e esses calos sempre irão te ensinar uma lição nova para seu crescimento.</p>
                    </div>
                </div>

                <div class="tip">
                    <h1>Se aceite</h1>

                    <div class="tip-block">
                        <p>Reconheça suas qualidades, acredite em si mesmo e saiba se respeitar. Ao mesmo tempo, entenda seus pontos a melhorar e busque desenvolvê-los para crescer</p>
                    </div>
                </div>
            </div>
        </div> 
    );
}
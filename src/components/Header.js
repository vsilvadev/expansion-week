import React from "react";
import heroImage from "../assets/powerfulhero.svg";

export default function Header() {
    return (
        <header>
            <div class="header-block">
                <h1>Resiliência</h1>
                <p>A força nas adversidades</p>
            </div>

            <div align="center" class="header-image">
                <img src={heroImage} alt="Strong person"/>
            </div>
        </header> 
    );
}
import React from 'react';
import './textTransform.css';

const textChange = () => {
    const text = document.querySelector('p');

    const ClasseTextTransformExiste = text.classList.contains('textTransform');

    if(ClasseTextTransformExiste) {
        text.classList.remove('textTransform')
    } else {
        text.classList.add('textTransform')
    }
}


const TextTransform = () => { 
    return (
        <div>
            <h3>Desafio 1</h3>
            <p>Clique no botão abaixo para transformar este texto.</p>

            <button className="btn" onClick={textChange}>Clique Aqui</button>
            
        </div>
    )
}


export default TextTransform
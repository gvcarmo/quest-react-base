const showLabel = (label) => {
    window.alert('A label deste botão é '+(label))
}

const Button = (props) => {
    return (
        <div>
            <h3>Desafio 2</h3>
            <p>Clique no botão abaixo para mostrar sua Label</p>
            <button onClick={()=> showLabel(props.label)}>Clique Aqui</button>
        </div>
    )
}

export default Button
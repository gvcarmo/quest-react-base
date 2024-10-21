
const Button = (props) => {
    return (
        <div>
            <h3>Desafio 2</h3>
            <p>Clique no botão abaixo para mostrar sua Label</p>
            <button onClick={()=> alert('A label deste botão é '+(props.label))}>Clique Aqui</button>
        </div>
    )
}

export default Button
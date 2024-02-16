import './Colaborador.css'

const Colaborador = ({ backgroundColor, nome, imagem, cargo }) =>{
    return (
        <div className='colaborador'>
            <div style = {backgroundColor = {backgroundColor}} className='cabecalho'>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodapes'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
    
}


export default Colaborador
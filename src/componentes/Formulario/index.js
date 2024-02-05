import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {
    
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e gestão'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('formulario salvo')
    }

    return (
        <section className = "formulario" >
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label='Nome' placeholder = 'digite seu nome'/>
                <CampoTexto obrigatorio={true} label='Cargo' placeholder = 'digite seu cargo'/>
                <CampoTexto label='Imagem' placeholder =  'digite o endereço da imagem'/>
                <ListaSuspensa obrigatorio={true} label='Time' itens={times}/>
                <Botao>Criar Card</Botao>

            </form>
        </section>
    )
}

export default Formulario
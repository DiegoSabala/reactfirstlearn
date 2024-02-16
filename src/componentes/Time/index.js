import Colaborador from '../Colaborador'
import './Time.css'

const Time = ({colaboradores, nome, corPrimaria, corSecundaria, ...rest}) => {
        return (
            // renderização condicional
            colaboradores.length > 0 ?
            <section className='time' style={{backgroundColor: corPrimaria, ...rest}}>
                <h3 style={{borderColor: corSecundaria}}>{nome}</h3>
                <div className='colaboradores'>
                    {colaboradores.map(colaborador => <Colaborador key={colaborador.nome} backgroundColor={corSecundaria} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
                </div>
            </section>
            : false
        )
}

export default Time
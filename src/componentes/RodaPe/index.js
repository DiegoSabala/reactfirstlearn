import './RodaPe.css'

const RodaPe = () => {
    return(

        <footer className='rodape'>
            <div className='redes-sociais'>
                <a href='https://www.facebook.com/' target="_blank">
                    <img src='/images/fb.png' alt='facebook'/>
                </a>
                <a href="https://www.twitter.com">
                    <img src='/images/tw.png' alt='twiter'/>
                </a>
                <a href='https://www.instagram.com'>
                    <img src='/images/ig.png' alt='instagram'/>
                </a>
            </div>

            <div>
                <img src='/images/logo.png' alt='organo'/>
            </div>
            <p>
                desenvolvido por alura
            </p>
        </footer>
    )
}

export default RodaPe
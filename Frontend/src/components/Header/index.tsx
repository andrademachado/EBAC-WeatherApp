import * as S from './styles'
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <S.Header>
            <div className='logo' >
                <img src={logo} />
                <S.Title>
                    EBACLIMA
                </S.Title>

            </div>

            <div className='formButton'>
                <input className='form' type='text' placeholder='Digite  sua cidade' />
                <button className='button' type='submit'>pesquisar</button>
            </div>
            <div >
                <button className='localizacao' type='submit' > Localização</button>
            </div>


        </S.Header>
    )
}

export default Header
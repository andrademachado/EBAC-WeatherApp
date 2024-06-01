import * as S from './styles'

const Header = () => {
    return (
        <S.Header>
            <div className='logo' >
                <img src="https://via.placeholder.com/40x40" />
                <S.Title>
                    EBACLIMA
                </S.Title>
            </div>
            <div className='formButton'>
                <input className='form' type='text' placeholder='Digite sua cidade' />
                <button className='button' type='submit'>O</button>
            </div>
            <div className='buttonLocalizacao'>
                <button type='submit' className='localizacao'>Minha Localização</button>
            </div>
        </S.Header>
    )
}

export default Header
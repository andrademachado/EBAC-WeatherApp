import * as S from './styles'

import sun from '../../assets/astro-sun.png'
import moon from '../../assets/astro-moon.png'

const Astro = () => {
    return (
        <S.AstroContainer>
            <S.SunContainer>
                <S.AstroTitle>
                    <img src={sun} alt="Ícone Sol" />
                    <span>Sol</span>
                </S.AstroTitle>
                <S.AstroDataContainer>
                    <div className="astroParent">
                        <div className="astroLine">
                            <div
                                className="pie"
                                style={{ '--p': '50', '--c': '#C7C8CC', '--b': '1px', '--w': '212px' } as React.CSSProperties}
                            ></div>
                        </div>
                        <div className="astroLine">
                            <div
                                className="pie animate"
                                style={{ '--p': '35', '--c': '#F6C833', '--b': '3px', '--w': '212px' } as React.CSSProperties}
                            ></div>
                        </div>
                    </div>
                </S.AstroDataContainer>
                <S.AstroApiData style={{padding: `0 50px 0 30px`}}>
                    <div className='astroHour'>
                        <span className='astroTxt'>Nascer do Sol</span>
                        <span className='astroTime'>07:06</span>
                    </div>
                    <div className='astroHour'>
                        <span className='astroTxt'>Pôr do Sol</span>
                        <span className='astroTime'>17:43</span>
                    </div>
                </S.AstroApiData>
            </S.SunContainer>
            <S.MoonContainer>
                <S.AstroTitle>
                    <img src={moon} alt="Ícone Lua" />
                    <span>Lua</span>
                </S.AstroTitle>
                <S.AstroDataContainer>
                    <S.AstroDataContainer>
                        <div className="astroParent">
                            <div className="astroLine">
                                <div
                                    className="pie"
                                    style={{ '--p': '50', '--c': '#C7C8CC', '--b': '1px', '--w': '212px' } as React.CSSProperties}
                                ></div>
                            </div>
                            <div className="astroLine">
                                <div
                                    className="pie animate"
                                    style={{ '--p': '35', '--c': '#818FB4', '--b': '3px', '--w': '212px' } as React.CSSProperties}
                                ></div>
                            </div>
                        </div>
                    </S.AstroDataContainer>
                    <S.AstroApiData style={{padding: `0 36px 0 68px`}}>
                        <div className='astroHour'>
                            <span className='astroTxt'>Luar</span>
                            <span className='astroTime'>07:06</span>
                        </div>
                        <div className='astroHour'>
                            <span className='astroTxt'>Pôr da Lua</span>
                            <span className='astroTime'>17:43</span>
                        </div>
                    </S.AstroApiData>
                </S.AstroDataContainer>
            </S.MoonContainer>
        </S.AstroContainer>
    )
}

export default Astro
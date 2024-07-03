import CityName from "../../components/CityName"
import DaysContainer from "../../components/DaysContainer"
import Footer from "../../containers/Footer"
import Header from "../../containers/Header"
import LeftColumn from "../../containers/LeftColumn"
import RightColumn from "../../containers/RightColumn"
import { Main } from "../../styles"

const Home = () => {
    return (
        <>
            
            <DaysContainer />
            <CityName />
            <Main>
                <LeftColumn />
                <RightColumn />
            </Main>
            
        </>
    )
}

export default Home
import { Provider } from "react-redux"
import DaysContainer from "./components/DaysContainer"
import Header from "./components/Header"
import GlobalStyle, { Main } from "./styles"
import { store } from "./store"
import Footer from "./containers/Footer"
import LeftColumn from "./containers/LeftColumn"
import RightColumn from "./containers/RightColumn"
import CityName from "./components/CityName"

function App() {

  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="wrapper">
        <Header />        
        <DaysContainer />
        <CityName />
        <Main>
          <LeftColumn />
          <RightColumn />     
        </Main>
        <Footer />
      </div>      
    </Provider>
  )
}

export default App
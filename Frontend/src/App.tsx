import { Provider } from "react-redux"
import DaysContainer from "./components/DaysContainer"
import Header from "./components/Header"
import SectionCurrent from "./containers/SectionCurrent"
import GlobalStyle from "./styles"
import { store } from "./store"
import SectionHours from "./containers/SectionHours"
import APItest2 from "./components/temp/apiTest2"
import Footer from "./containers/Footer"

function App() {

  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="wrapper">
        <Header />
        <APItest2 />
        <DaysContainer />
        <main className="main">
          <SectionCurrent />
          <SectionHours />          
        </main>
        <Footer />
      </div>      
    </Provider>
  )
}

export default App
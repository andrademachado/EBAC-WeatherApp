import { Provider } from "react-redux"
import DaysContainer from "./components/DaysContainer"
import Header from "./components/Header"
import SectionCurrent from "./containers/SectionCurrent"
import GlobalStyle from "./styles"
import { store } from "./store"
import SectionHours from "./containers/SectionHours"

function App() {

  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="wrapper">
        <Header />
        <DaysContainer />
        <main className="main">
          <SectionCurrent />
          <SectionHours />          
        </main>
      </div>      
    </Provider>
  )
}

export default App
import { Provider } from "react-redux"
import DaysContainer from "./components/DaysContainer"
import Header from "./components/Header"
import SectionCurrent from "./containers/SectionCurrent"
import GlobalStyle from "./styles"
import { store } from "./store"

function App() {

  return (
    <Provider store={store}>
      <GlobalStyle />
     
      <div className="wrapper">
        <Header />
        <DaysContainer />
        <main className="main">
          <SectionCurrent />
        </main>
      </div>
    </Provider>
  )
}

export default App
import { Provider } from "react-redux"
import DaysContainer from "./components/DaysContainer"
import Header from "./components/Header"
import APItest2 from "./components/temp/apiTest2"
import SectionCurrent from "./containers/SectionCurrent"
import GlobalStyle from "./styles"
import { store } from "./store"

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
        </main>
      </div>
    </Provider>
  )
}

export default App
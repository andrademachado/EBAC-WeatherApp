import DaysContainer from "./components/DaysContainer"
import Header from "./components/Header"
import APItest2 from "./components/temp/apiTest2"
import SectionCurrent from "./containers/SectionCurrent"
import GlobalStyle from "./styles"

function App() {

  return (
    <>
      <GlobalStyle />
      <div className="wrapper">
        <Header />
        <APItest2 />
        <DaysContainer />
        <main className="main">
          <SectionCurrent />
        </main>
      </div>
    </>
  )
}

export default App
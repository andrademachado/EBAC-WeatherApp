import DaysContainer from "./components/DaysContainer"
import Header from "./components/Header"
import SectionCurrent from "./containers/SectionCurrent"
import GlobalStyle from "./styles"


function App() {

  return (
    <>
      <GlobalStyle />
      <div className="wrapper">
        <Header />
        <DaysContainer />
        <main className="main">
          <SectionCurrent />
        </main>
        
      </div>
    </>
  )
}

export default App
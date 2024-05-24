import DaysContainer from "./components/DaysContainer"
import Temp from "./components/temp/index."
import SectionCurrent from "./containers/SectionCurrent"
import GlobalStyle from "./styles"


function App() {

  return (
    <>
      <GlobalStyle />
      <div className="wrapper">
        <Temp />
        <DaysContainer />
        <main className="main">
          <SectionCurrent />
        </main>
        
      </div>
    </>
  )
}

export default App
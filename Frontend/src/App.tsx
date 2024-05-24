import DaysContainer from "./components/DaysContainer"
import SectionCurrent from "./containers/SectionCurrent"
import GlobalStyle from "./styles"

function App() {

  return (
    <>
      <GlobalStyle />
      <div className="wrapper">
        <DaysContainer />
        <main className="main">
          <SectionCurrent />
        </main>
      </div>
    </>
  )
}

export default App
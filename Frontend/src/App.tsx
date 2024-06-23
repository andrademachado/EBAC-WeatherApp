import { Provider } from "react-redux"
import GlobalStyle from "./styles"
import { store } from "./store"
import Pages from "./routes"
import { BrowserRouter } from "react-router-dom"

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <div className="wrapper">
          <Pages />
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
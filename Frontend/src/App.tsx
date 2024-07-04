import { Provider } from "react-redux"
import GlobalStyle from "./styles"
import { store } from "./store"
import Pages from "./routes"
import { BrowserRouter } from "react-router-dom"
import Header from "./containers/Header"
import Footer from "./containers/Footer"
import ScrollToTop from "./components/ScrollToTop"

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <ScrollToTop />
        <div className="wrapper">
          <Header />
          <Pages />
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
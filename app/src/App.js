import { BrowserRouter } from "react-router-dom"
import Routes from "./Routes"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Global from "./styles/global";

export default function App() {
  return (
    <BrowserRouter>
      <Global />
      <Routes />
      <ToastContainer autoclose={1000} />
    </BrowserRouter>
  )
}
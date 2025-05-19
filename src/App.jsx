import Home from "./pages/Home"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer} from 'react-toastify';

library.add(fab, faEnvelope, faBars)


function App() {


  return (
    <>
      <ToastContainer/>
      <Home/>
    </>
  )
}

export default App

import { BrowserRouter, Route } from "react-router-dom"
import logo from '../media/hellbentLogo.png'

const BannerImage = () => {
    return(
            <div>
        <BrowserRouter >
        <Route to="/tasks">
            <img
              className="ui centered medium image"
              style={{ maxWidth: '200px' }}
              alt="logo"
              src={logo}
            ></img>
          </Route>
          </BrowserRouter >
          </div>
    )
}

export default BannerImage
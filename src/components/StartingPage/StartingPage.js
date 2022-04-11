import { Fragment } from 'react'
import Start from "./Start/Start";
import InfoBar from "./InfoBar/InfoBar";
import Begin from "./Begin/Begin";
import About from "./About/About";
import Funds from "./Funds/Funds";
import Contact from "./Contact/Contact";

const StartingPage = () => {
  return (
    <Fragment>
        <Start />
        <InfoBar />
        <Begin />
        <About />
        <Funds />
        <Contact />
    </Fragment>
  )
}

export default StartingPage
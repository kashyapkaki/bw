import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../../sass/components/_navbarmobil.scss"
import LogoBW from "./LogoBW"
import LogoBWtext from "./LogoBWtext"
import NavbarMenu from "./NavbarMenu"
import Hamburger from "./Hamburger"

export default function NavbarMobil() {
  const [menuOpen, setMenuOpen] = useState(false)

  const menuOpenHandler = () => {
    setMenuOpen(!menuOpen)
    //props.setIsMenuOpened(!menuOpen)
  }

  return (
    <nav className="navbar-mobil">
      <div className="container-fluid p-0">
        <a className="navbar-logo" href="/">
          <LogoBW />
          <LogoBWtext />
        </a>
        <div onClick={menuOpenHandler}>
          <Hamburger open={menuOpen} />
        </div>
      </div>
      <NavbarMenu open={menuOpen} />
    </nav>
  )
}

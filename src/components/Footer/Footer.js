import * as React from "react"
import FooterMobil from "./FooterMobil"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Container"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

const Footer = () => {
  const breakpoints = useBreakpoint()

  return (
    <Container fluid>
      {breakpoints.md ? <FooterMobil /> : <FooterMobil />}
    </Container>
  )
}

export default Footer

// when the desktop menu is ready

{
  /* <Row>{breakpoints.md ? <NavbarMobil /> : <NavbarDesktop />}</Row> */
}

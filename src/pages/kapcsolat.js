import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
// import Button from "react-bootstrap/Button"
import { Row, Col } from "react-bootstrap"
// import { Link } from "gatsby"
// import "../sass/components/_kapcsolat.scss"

export default function Kapcsolat() {
  return (
    <Layout>
      <Seo title="Kapcsolat" />
      <Row>
        <Col>
          <h1>Kapcsolat</h1>
        </Col>
      </Row>
    </Layout>
  )
}

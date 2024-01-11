import * as React from "react"
import { Link } from "gatsby"
import { Container, Col } from "react-bootstrap"

import Layout from "../components/layout"

const NotFoundPage = () => (
  <Layout>
    <Container className="text-center mt-5">
      <Col>
        <h1 className="display-4">404: Not Found</h1>
        <p className="lead">
          Oops! It looks like you've stumbled upon a page that doesn't exist.
        </p>
        <p>
          <Link to="/" className="btn btn-primary">
            Go to Home
          </Link>
        </p>
      </Col>
    </Container>
  </Layout>
)

export const Head = () => <title>404: Not Found</title>

export default NotFoundPage

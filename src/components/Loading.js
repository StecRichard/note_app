import React, { Component } from "react";
import styledComps from "../static/styledComps";
import Spinner from "react-bootstrap/Spinner";
import { withTranslation } from "react-i18next";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

class Loading extends Component {
  render() {
    const { t } = this.props;

    return (
      <Container>
        <Row>
          <Col>
            <styledComps.Centered>
              <Spinner animation="border" role="status">
                <span className="sr-only">{t("loading")}</span>
              </Spinner>
            </styledComps.Centered>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withTranslation()(Loading);

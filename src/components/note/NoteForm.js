import styledComps from "../../static/styledComps";
import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: props.body,
      title: props.title
    };
  }

  changeTitleValue = e => {
    this.setState({ title: e.target.value });
  };

  changeBodyValue = e => {
    this.setState({ body: e.target.value });
  };

  checkValues = () => {
    return this.state.body && this.state.title;
  };

  handleSubmit = () => {
    // ERROR: this.state is null
    this.props.onSubmit(this.state);
  };

  render() {
    const { t } = this.props;

    return (
      <div>
        <Form>
          <Container>
            <Row>
              <Col>
                <Form.Group controlId="noteCreateTitle">
                  <Form.Label>{t("note-title")}</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Title of your note"
                    value={this.state.title}
                    onChange={this.changeTitleValue}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="noteCreateBody">
                  <Form.Label>{t("note")}</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="5"
                    placeholder="Your text ..."
                    value={this.state.body}
                    onChange={this.changeBodyValue}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <styledComps.StyledButton
                  id="createNoteButton"
                  disabled={!this.checkValues()}
                  onClick={this.handleSubmit}
                >
                  {t("create")}
                </styledComps.StyledButton>
              </Col>
            </Row>
          </Container>
        </Form>
      </div>
    );
  }
}

export default withTranslation()(NoteForm);

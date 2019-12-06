import React, { Component } from "react";
import StyledComps from "../../static/styledComps";
import { getNote } from "../../store/actions";
import { withTranslation } from "react-i18next";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styledComps from "../../static/styledComps";
import Loading from "../Loading";

const mapDispatchToProps = {
  getNote
};

class NoteDetail extends Component {
  toEdit(id) {
    this.props.history.push(`/note/edit/${id}`);
  }

  componentDidMount() {
    this.props.getNote(this.props.match.params.id);
  }

  render() {
    const { note, t } = this.props;

    return (
      <div>
        {!note && <Loading/>}
        {note && (
          <>
            <Container>
              <Row>
                <Col>
                  <StyledComps.Title>{note.title}</StyledComps.Title>
                </Col>
                <Col>
                  <styledComps.Centered>
                    <styledComps.StyledButton
                      onClick={() => this.toEdit(note.id)}
                    >
                      {t("edit")}
                    </styledComps.StyledButton>
                  </styledComps.Centered>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div>{note.body}</div>
                </Col>
              </Row>
            </Container>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ noteDetailReducer: { note } }) => ({
  note
});

export default withTranslation()(
  withRouter(connect(mapStateToProps, mapDispatchToProps)(NoteDetail))
);

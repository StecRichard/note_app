import React, { Component } from "react";
import { connect } from "react-redux";
import Note from "./Note";
import styledComps from "../../static/styledComps";
import { create, getNotes } from "../../store/actions";
import { withTranslation } from "react-i18next";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Loading from "../Loading";

const mapDispatchToProps = {
  create,
  getNotes
};

class NoteList extends Component {
  toNewNote() {
    this.props.history.push("/note/new");
  }

  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    const { t, notes, count } = this.props;

    return (
      <div>
        <styledComps.Title>{t("note-list")}</styledComps.Title>
        <Container>
          <Row>
            <Col>
              <styledComps.TextCentered>
                {" "}
                {t("note-count")}: {count}
              </styledComps.TextCentered>
            </Col>
          </Row>
          <Row>
            <Col>
              <styledComps.Centered>
                <Button onClick={() => this.toNewNote()}>
                  {t("note-new")}
                </Button>{" "}
              </styledComps.Centered>
            </Col>
          </Row>
          <ul>
            <Row>
              <Col>
                {!notes && <Loading/>}
                {notes &&
                notes.map(note => <Note key={note.id} note={note}/>)}{" "}
              </Col>
            </Row>
          </ul>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = ({ notesReducer: { notes, count } }) => ({
  notes,
  count
});

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(NoteList)
);

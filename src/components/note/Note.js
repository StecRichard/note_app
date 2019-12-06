import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import styledComps from "../../static/styledComps";
import { remove } from "../../store/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { withTranslation } from "react-i18next";

const StyledDiv = styled.div`
  margin: 10px;
`;

const mapDispatchToProps = {
  remove
};

class Note extends Component {
  toDetail(id) {
    this.props.history.push(`/note/detail/${id}`);
  }

  render() {
    const { note, remove } = this.props;
    return (
      <StyledDiv>
        <styledComps.StyledButton onClick={() => this.toDetail(note.id)}>
          <FontAwesomeIcon icon={faEye}/>
        </styledComps.StyledButton>
        <styledComps.StyledButton onClick={() => remove(note.id)}>
          <FontAwesomeIcon icon={faTrashAlt}/>
        </styledComps.StyledButton>
        {note.title}
      </StyledDiv>
    );
  }
}

export default withTranslation()(
  withRouter(connect(null, mapDispatchToProps)(Note))
);

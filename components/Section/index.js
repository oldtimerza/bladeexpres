import React from "react";
import { Container, Row, Col } from "reactstrap";
import PropTypes from "prop-types";

import css from "./styling.scss";

const Section = props => {
  return (
    <div className={css.spacer}>
      <Container>
        <Row>
          <Col>
            <div className={css.textContainerStyle}>
              <h2 className={css.summaryText}>{props.summary}</h2>
              <p className={css.descriptionTextStyle}>{props.description}</p>
            </div>
            <div style={props.childrenStyle}>{props.children}</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Section.propTypes = {
  summary: PropTypes.string,
  childrenStyle: PropTypes.object,
  children: PropTypes.arrayOf(PropTypes.object)
};

export default Section;

import React from "react";
import PropTypes from 'prop-types';

import Container from "./Section.styled";


const Section = ({ title, children }) => (
  <Container>
    <h2>{title}</h2>
    {children}
  </Container>
)

export default Section;

Section.propTypes = {
  title: PropTypes.string,
}
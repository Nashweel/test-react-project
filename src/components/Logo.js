import React from "react"
import PropTypes from "prop-types"


const Logo = ({ text }) =>  <div>{text}</div>

export default Logo

Logo.propTypes = {
    text: PropTypes.string.isRequired,
}
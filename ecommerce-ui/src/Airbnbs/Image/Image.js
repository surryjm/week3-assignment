import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Image.css';


class Image extends Component {
  static propTypes = {
    imageSrc: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    isSuperhost: PropTypes.bool.isRequired
  };

  render() {
    const { imageSrc, altText, isSuperhost } = this.props;
    return (
    <div className="image-container">
      {isSuperhost && 
      (<p className="superhost">Superhost</p>)
      }
      <img className="img" src={imageSrc} alt={altText} />
    </div>
    )
  }
}

export default Image; 
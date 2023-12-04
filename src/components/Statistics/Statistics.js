import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Statistics.css';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <div className="statistics">
        <p className="statistics-item">Good: {good}</p>
        <p className="statistics-item">Neutral: {neutral}</p>
        <p className="statistics-item">Bad: {bad}</p>
        <p className="statistics-item">Total: {total}</p>
        <p className="statistics-item">
          Positive Percentage: {positivePercentage}%
        </p>
      </div>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;

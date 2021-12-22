import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';

function ReportCard({
  reportTitle,
  totalRevenue,
  totalProducts
}) {
  return (
    <div>
      <Card className='report-cards'>
        <CardBody>
          <CardTitle tag="h3">{reportTitle}</CardTitle>
          <CardText>Total Revenue: ${totalRevenue}</CardText>
          <CardText>Total Products Sold: {totalProducts}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

ReportCard.propTypes = {
  reportTitle: PropTypes.string.isRequired,
  totalRevenue: PropTypes.number.isRequired,
  totalProducts: PropTypes.number.isRequired
};

export default ReportCard;

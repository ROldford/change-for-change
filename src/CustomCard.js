import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardBody, CardTitle, CardText} from 'reactstrap';
import Image from 'react-graceful-image';

let CustomCard = (props) => {
  const data = props.data;
  return (
    <Card className="m-2">
      <CardBody>
        <CardTitle>
          {data.cardTitle}
          <br />
          <Image
            src={data.imageSource}
            width="64"
            height="64"
            alt={data.imageAltText}
          />
        </CardTitle>
        <CardText>{data.cardText}</CardText>
      </CardBody>
    </Card>
  );
}

CustomCard.propTypes = {
  cardTitle: PropTypes.string.isRequired,
  cardText: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  imageAltText: PropTypes.string.isRequired
}

export default CustomCard;

    // {/*getWrapDivs(props.position)*/}

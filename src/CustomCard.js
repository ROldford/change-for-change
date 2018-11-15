import React from 'react';
import {Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';
import Image from 'react-graceful-image';

let CustomCard = (props) => {
  const data = props.data;
  const imgStyle = {
    display: 'block',
    maxWidth: 64,
    width: 'auto',
    height: 'auto',
    margin: 'auto'
  }
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

export default CustomCard;

    // {/*getWrapDivs(props.position)*/}

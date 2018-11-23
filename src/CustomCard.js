import React from 'react';
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

export default CustomCard;

    // {/*getWrapDivs(props.position)*/}

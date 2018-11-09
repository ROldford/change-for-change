// WrappingCard takes in card data and position in deck
// Cards can output extra divs for wrapping
// <div className="w-100 d-none d-sm-block d-md-none">{/* wrap every 2 on sm */}</div>
// <div className="w-100 d-none d-md-block d-lg-none">{/* wrap every 3 on md*/}</div>
// <div className="w-100 d-none d-lg-block d-xl-none">{/* wrap every 4 on lg*/}</div>
// <div className="w-100 d-none d-xl-block">{/* wrap every 5 on xl*/}</div>

import React from 'react';
import {Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';

let CustomCard = (props) => {
  const data = props.data;

  return (
      <Card className="m-2">
          <CardImg top className="img-fluid" src={data.imageSource} alt={data.imageAltText} />
          <CardBody>
              <CardTitle>{data.cardTitle}</CardTitle>
              <CardText>{data.cardText}</CardText>
          </CardBody>
      </Card>
  );
}

export default CustomCard;

    // {/*getWrapDivs(props.position)*/}

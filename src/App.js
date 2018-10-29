import React from 'react';
import {Jumbotron, Container, CardDeck, Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';
import './App.css';

export default () => (
  <div className="App">
    <Jumbotron>
        <h1 className="display-3">Welcome To My Hello World!</h1>
        <hr className="my-2" />
        <p className="lead">My name is Ryan Oldford. Welcome, and hello!</p>
    </Jumbotron>
    <Container>
        <CardDeck>
            <Card>
                <CardImg top className="img-fluid" src="//placehold.it/500x280" alt="Card image cap" />
                <CardBody>
                    <CardTitle>1 Card title</CardTitle>
                    <CardText>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                    <CardText><small className="text-muted">Last updated 3 mins ago</small></CardText>
                </CardBody>
            </Card>
            <Card>
                <CardImg top className="img-fluid" src="//placehold.it/500x280" alt="Card image cap" />
                <CardBody>
                    <CardTitle>2 Card title</CardTitle>
                    <CardText>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                    <CardText><small className="text-muted">Last updated 3 mins ago</small></CardText>
                </CardBody>
            </Card>
            <div className="w-100 d-none d-sm-block d-md-none">{/* wrap every 2 on sm */}</div>
            <Card>
                <CardImg top className="img-fluid" src="//placehold.it/500x280" alt="Card image cap" />
                <CardBody>
                    <CardTitle>3 Card title</CardTitle>
                    <CardText>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                    <CardText><small className="text-muted">Last updated 3 mins ago</small></CardText>
                </CardBody>
            </Card>
            <div className="w-100 d-none d-md-block d-lg-none">{/* wrap every 3 on md*/}</div>
            <Card>
                <CardImg top className="img-fluid" src="//placehold.it/500x280" alt="Card image cap" />
                <CardBody>
                    <CardTitle>4 Card title</CardTitle>
                    <CardText>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                    <CardText><small className="text-muted">Last updated 3 mins ago</small></CardText>
                </CardBody>
            </Card>
            <div className="w-100 d-none d-sm-block d-md-none">{/* wrap every 2 on sm*/}</div>
             <div className="w-100 d-none d-lg-block d-xl-none">{/* wrap every 4 on lg*/}</div>
            <Card>
                <CardImg top className="img-fluid" src="//placehold.it/500x280" alt="Card image cap" />
                <CardBody>
                    <CardTitle>5 Card title</CardTitle>
                    <CardText>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                    <CardText><small className="text-muted">Last updated 3 mins ago</small></CardText>
                </CardBody>
            </Card>
            <div className="w-100 d-none d-xl-block">{/* wrap every 5 on xl*/}</div>
            <Card>
                <CardImg top className="img-fluid" src="//placehold.it/500x300" alt="Card image cap" />
                <CardBody>
                    <CardTitle>6 Card title</CardTitle>
                    <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                    <CardText><small className="text-muted">Last updated 3 mins ago</small></CardText>
                </CardBody>
            </Card>
            <div className="w-100 d-none d-sm-block d-md-none">{/* wrap every 2 on sm*/}</div>
            <div className="w-100 d-none d-md-block d-lg-none">{/* wrap every 3 on md*/}</div>
            <Card>
                <CardImg top className="img-fluid" src="//placehold.it/500x270" alt="Card image cap" />
                <CardBody>
                    <CardTitle>7 Card title</CardTitle>
                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                    <CardText><small className="text-muted">Last updated 3 mins ago</small></CardText>
                </CardBody>
            </Card>
            <Card>
                <CardImg top className="img-fluid" src="//placehold.it/500x300" alt="Card image cap" />
                <CardBody>
                    <CardTitle>8 Card title</CardTitle>
                    <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                    <CardText><small className="text-muted">Last updated 3 mins ago</small></CardText>
                </CardBody>
            </Card>
            <div className="w-100 d-none d-sm-block d-md-none">{/* wrap every 2 on sm*/}</div>
            <div className="w-100 d-none d-lg-block d-xl-none">{/* wrap every 4 on lg*/}</div>
            <Card>
                <CardImg top className="img-fluid" src="//placehold.it/500x270" alt="Card image cap" />
                <CardBody>
                    <CardTitle>9 Card title</CardTitle>
                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                    <CardText><small className="text-muted">Last updated 3 mins ago</small></CardText>
                </CardBody>
            </Card>
            <div className="w-100 d-none d-md-block d-lg-none">{/* wrap every 3 on md*/}</div>
            <Card>
                <CardImg top className="img-fluid" src="//placehold.it/500x270" alt="Card image cap" />
                <CardBody>
                    <CardTitle>10 Card title</CardTitle>
                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                    <CardText><small className="text-muted">Last updated 3 mins ago</small></CardText>
                </CardBody>
            </Card>
        </CardDeck>
    </Container>
  </div>
);

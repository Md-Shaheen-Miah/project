import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

 const Carde = () => {
  return (
    <CardGroup>
      <Card style={{backgroundColor:'#088567'}}>
        <Card.Img style={{height:'250px',borderRadius:'100%'}} variant="top" src="src/components/images/card2.jpg" />
        <Card.Body style={{backgroundColor:'#008000',border:'1px solid black',borderRadius:'10px'}}>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body >
        <Card.Footer  style={{backgroundColor:'#2243b6',borderRadius:'10px'}}>
        <Card.Link  style={{color:'white'}} href="#">Another Link</Card.Link>
        </Card.Footer>
      </Card>
      <Card style={{backgroundColor:'#088567'}}>
        <Card.Img style={{height:'250px',borderRadius:'100%'}}  variant="top" src="src/components/images/card3.jpg" />
        <Card.Body  style={{backgroundColor:'#008000',border:'1px solid black',borderRadius:'10px'}}>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer  style={{backgroundColor:'#2243b6',borderRadius:'10px'}}>
        <Card.Link  style={{color:'white'}} href="#">Another Link</Card.Link>
        </Card.Footer>
      </Card>
      <Card style={{backgroundColor:'#088567'}}>
        <Card.Img style={{height:'250px',borderRadius:'100%'}}  variant="top" src="src/components/images/card4.jpg" />
        <Card.Body  style={{backgroundColor:'#008000',border:'1px solid black',borderRadius:'10px'}}>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{backgroundColor:'#2243b6',borderRadius:'10px'}}>
        <Card.Link style={{color:'white'}} href="#">Another Link</Card.Link>
        </Card.Footer>
      </Card>
    </CardGroup>
  )
}
export default Carde;
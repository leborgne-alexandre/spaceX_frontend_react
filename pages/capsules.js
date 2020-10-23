import { getItems } from './api/data'

import { Card } from "react-bootstrap";

export async function getStaticProps() {

  const dragons = await getItems("dragons");

  return {

    props: {

      dragons: dragons

    }

  }


}


const Index = ({ dragons }) => {
  return (


    <div>

      <h1 className="mt-5 mb-3 text-center bold"> Dragons (capsules) 🐲🚀</h1>


      {dragons.map((dragon) => (
        <div className="center-content">
        <Card >
          <Card.Body>
            <Card.Title>{dragon.name} </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Poids: {dragon.dry_mass_lb} kg</Card.Subtitle>
            
            <p>{dragon.flickr_images.map((image) => (
              <img className="img_resize" src={image}></img>
            ))}</p>
            <Card.Title>Description</Card.Title>
            <Card.Text> {dragon.description}</Card.Text>
          </Card.Body>
        </Card>
        </div>


      ))}


    </div>



  )
}


export default Index
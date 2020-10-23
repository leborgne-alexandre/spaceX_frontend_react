import { getItems } from './api/data'

import { Card, Button } from "react-bootstrap";

export async function getStaticProps() {

  const infos = await getItems("info");

  return {

    props: {

      infos: infos

    }

  }

}


const Index = ({ infos }) => {
  return (

    <div>
      <h1 className="text-center bold mt-5 mb-5"> Space X 🌌</h1>
      <div style={{ margin: "0 auto", width : "60%"}}>
        <Card >
          <Card.Img variant="top" src="https://www.journaldugeek.com/content/uploads/2018/12/spacex-starship-780x439.jpg" />
          <Card.Body>
            <Card.Title> Info : </Card.Title>
            <Card.Text>
              {infos.summary}
              <p>Crée en : {infos.founded}</p>
              <p>Employées : {infos.employees}</p>
              <p>Localisation : {infos.headquarters.city}</p>
              <p>Nombre de site de lancement : {infos.launch_sites}</p>
              <p>Capital : {infos.valuation}</p>
            </Card.Text>
            <Button variant="primary">En savoir plus</Button>
          </Card.Body>
        </Card>
      </div>

    </div>



  )
}


export default Index
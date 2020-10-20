import Head from 'next/head'
import { getItems } from './api/data'


//get api request

export async function getStaticProps() {

  const dragons = await getItems("spaceX_api");

  return {

    props: {

      dragons: dragons

    }

  }


}


export default function Home({dragons}) {
  return (


    <div><h1>Hello ✋</h1>
    <h1> Dragons :</h1>🐲
    

    {dragons.map((dragon)=>(

      <p>{dragon.title} / {dragon.description}</p>
    

    ))}
    
    
     </div>
    

  )
}

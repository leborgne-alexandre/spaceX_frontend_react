import React from 'react';
import { getItems } from './api/data'


export async function getStaticProps() {

  const news = await getItems("news");

  return {

    props: {

      news: news

    }

  }


}

const news = () => {
  return (
    <div>

      {news}

    </div>
  );
};

export default news;
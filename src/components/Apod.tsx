import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ApodData } from '../types';

const API_KEY = process.env.REACT_APP_NASA_API_KEY;

const Apod: React.FC = () => {
  const [data, setData] = useState<ApodData | null>(null);

  useEffect(() => {
    axios
      .get<ApodData>(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  if (!data) return <p>Caricamento...</p>;

  return (
    <div style={{ textAlign: 'center', padding: '1rem' }}>
      <h1>{data.title}</h1>
      <p>{data.date}</p>
      {data.media_type === 'image' ? (
        <img src={data.url} alt={data.title} style={{ maxWidth: '100%' }} />
      ) : (
        <iframe src={data.url} title={data.title} width="100%" height="500px" />
      )}
      <p style={{ marginTop: '1rem' }}>{data.explanation}</p>
    </div>
  );
};

export default Apod;

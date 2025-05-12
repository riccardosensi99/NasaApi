import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Props {
  date: string;
}

interface ApodData {
  title: string;
  explanation: string;
  url: string;
  hdurl?: string;
  date: string;
  media_type: 'image' | 'video';
}

const ApodSection: React.FC<Props> = ({ date }) => {
  const [data, setData] = useState<ApodData | null>(null);
  const [loading, setLoading] = useState(true);

  const API_KEY = process.env.REACT_APP_NASA_API_KEY;

  useEffect(() => {
    setLoading(true);
    axios
      .get<ApodData>(
        `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`
      )
      .then(res => {
        setData(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Errore nel recupero dell’APOD:', err);
        setData(null);
        setLoading(false);
      });
  }, [date, API_KEY]);

  if (loading) return <p style={{ textAlign: 'center' }}>Caricamento APOD...</p>;
  if (!data) return <p style={{ textAlign: 'center' }}>Nessun dato disponibile.</p>;

  return (
    <div style={{ textAlign: 'center', padding: '1rem' }}>
      <h2>{data.title}</h2>
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

export default ApodSection;

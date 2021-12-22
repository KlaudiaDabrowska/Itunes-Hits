import { useEffect, useState } from 'react';
import { baseUrl } from 'config/BaseURL';

export const FetchData = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hits, setHits] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${baseUrl}topalbums/limit=100/json`);
        const json = await response.json();
        setHits(json.feed.entry);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error);
      }
    };
    fetchData();
  }, []);

  return {
    error: error,
    isLoading: isLoading,
    hits: hits,
  };
};

export const GetAlbum = (albumId) => {
  const [hit, setHit] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${baseUrl}topalbums/limit=100/json`);
      const json = await response.json();
      setHit(json.feed.entry.find((element) => element.id.attributes['im:id'] === albumId));
    };
    fetchData();
  }, [albumId]);

  return {
    hit: hit,
  };
};

import React, { useEffect, useState } from 'react';
import { List } from './List';
import { baseUrl } from 'config/BaseURL';

export const FetchList = () => {
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

  if (error) {
    return <div> Error: {error.message}</div>;
  } else if (isLoading) {
    return <div> Loading....</div>;
  } else {
    return <List hits={hits} />;
  }
};

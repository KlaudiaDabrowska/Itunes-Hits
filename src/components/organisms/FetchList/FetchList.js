import React, { useEffect, useState } from 'react';
import { List } from '../List/List';

export const FetchList = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hits, setHits] = useState([]);

  useEffect(() => {
    fetch(`https://itunes.apple.com/us/rss/topalbums/limit=100/json`)
      .then((res) => res.json())
      .then(
        (res) => {
          setIsLoaded(true);
          setHits(res.feed.entry);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div> Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div> Loading....</div>;
  } else {
    return <List hits={hits} />;
  }
};

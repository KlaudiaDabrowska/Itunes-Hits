import React from 'react';
import { ListItem } from './ListItem';
import { Wrapper, LoaderWrapper } from 'assets/styles/List.styles';
import { FetchData } from 'pages/mainView/Fetch';
import Loader from 'react-loader-spinner';
import { useEffect } from 'react';

export const List = () => {
  const { error, isLoading, hits } = FetchData();

  useEffect(() => {
    const scrollPosition = sessionStorage.getItem('scrollPosition');
    window.scrollTo(0, scrollPosition);
  });

  return isLoading ? (
    <LoaderWrapper>
      <Loader type="Circles" color="#773795" height={80} width={80} />
    </LoaderWrapper>
  ) : error ? (
    <div>Error: {error.message}</div>
  ) : (
    <Wrapper>
      {hits.map((el, index) => (
        <ListItem el={el} index={index + 1} key={el.id.attributes['im:id']} />
      ))}
    </Wrapper>
  );
};

import { Watch } from 'react-loader-spinner';
import React from 'react';
import { ContainerLoader } from './Styled';

export default function Loader() {
  return (
    <ContainerLoader>
      <Watch
        height="150"
        width="150"
        radius="48"
        color="#000000"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </ContainerLoader>
  );
}

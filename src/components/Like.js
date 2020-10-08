import React from 'react';
import styled from 'styled-components';
import likeIcon from '../images/like.png';

const LikeIcon = styled.img`
  width: 25px;
  height: 25px;
  opacity: 0.8;
`;

const LikesCount = styled.p`
  font-family: 'RobotoCondensed';
  font-weight: bold;
  font-size: 19px;
  margin: 4px 12px;
`;

const LikesContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 50px 30px 0;
  cursor: pointer;
`;

const Like = (props) => {
  const message = `${props.likes} ${props.likes === 1 ? 'Like' : 'Likes'}`;
  return (
    <LikesContainer onClick={() => props.addLike()}>
      <LikeIcon src={likeIcon} alt='like' />
      <LikesCount>{message}</LikesCount>
    </LikesContainer>
  );
};

export default Like;

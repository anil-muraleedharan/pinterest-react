import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import StyledPinContainer from './StyledPinContainer';
import Like from './Like';
import UserDetails from './UserDetails';

const ImageContainer = styled.div`
  width: 40%;
  margin: 1.5%;
  height: auto;
`;

const PinImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  background-color: whitesmoke;
`;

const PinDetails = styled.div`
  width: 58%;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 0 20px;
`;

const PinAdditionalDetails = styled.div`
  display: flex;
`;

const PinTitle = styled.h3`
  font-size: 35px;
  margin: 35px 0 10px 0;
  overflow: wrap;
  font-family: 'RobotoCondensedBold';
`;

const PinDescription = styled.p`
  font-size: 19px;
  line-height: 28px;
  opacity: 0.9;
  margin: 5px 0;
  overflow: wrap;
  font-family: 'RobotoCondensed';
`;

const PinTime = styled.p`
  font-size: 16px;
  font-family: 'RobotoCondensed';
  opacity: 0.5;
  margin: 12px 0 5px 0;
`;

const PinDescriptionPlaceholder = styled(PinDescription)`
  color: #ccc;
`;

const PinTitlePlaceholder = styled(PinTitle)`
  color: #ccc;
`;

const Pin = (props) => {
  const { id } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [pinDetails, setPinDetails] = useState({});
  const [likesCount, setLikesCount] = useState(0);

  useEffect(() => {
    fetch(`/api/getPin/${id}`)
      .then((res) => res.json())
      .then((details) => {
        setPinDetails(details);
        setIsLoaded(true);
      });
  }, [id, likesCount]);

  useEffect(() => {
    setLikesCount(pinDetails.likes);
  }, [pinDetails]);

  const addLike = () =>
    fetch('/api/addLike', {
      method: 'POST',
      body: JSON.stringify({ id }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then(({ likes }) => setLikesCount(likes));

  if (isLoaded) {
    const {
      imageSrc,
      title,
      description,
      name,
      avatar_url,
      createdAt,
      createdBy,
    } = pinDetails;
    return (
      <StyledPinContainer>
        <ImageContainer>
          <PinImage src={`${imageSrc}`} alt={`image_${id}`} />
        </ImageContainer>
        <PinDetails>
          {title ? (
            <PinTitle>{title}</PinTitle>
          ) : (
            <PinTitlePlaceholder>No Title available...</PinTitlePlaceholder>
          )}
          {description ? (
            <PinDescription>{description}</PinDescription>
          ) : (
            <PinDescriptionPlaceholder>
              No description available...
            </PinDescriptionPlaceholder>
          )}
          <PinTime>Created on {new Date(createdAt).toLocaleString()}</PinTime>
          <PinAdditionalDetails>
            <UserDetails id={createdBy} name={name} avatar={avatar_url} />
            <Like likes={likesCount} addLike={addLike} />
          </PinAdditionalDetails>
        </PinDetails>
      </StyledPinContainer>
    );
  }
  return (
    <div>
      <p>Loading...</p>
    </div>
  );
};

export default Pin;

import React, { useState } from 'react';
import styled from 'styled-components';
import addIcon from '../images/add.png';

const AddImageIcon = styled.img`
  width: 10%;
  margin-left: 45%;
`;

const Preview = styled.img`
  padding: 1%;
  width: 98%;
  height: auto;
`;

const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: solid 3px #ccc;
  min-height: 95%;
  border-radius: 6px;
  width: 100%;
  margin-top: 2%;
`;

const ImageInputBox = styled.input`
  display: none;
`;

const ImageInputContainer = styled.div`
  width: 40%;
  margin: 1.5%;
  height: auto;
`;

const ImageInput = (props) => {
  const [image, setImage] = useState(undefined);

  const handleImageUpload = (event) => {
    const image = event.target.files[0];
    props.handleImageChange(image);
    setImage(URL.createObjectURL(image));
  };

  return (
    <ImageInputContainer className='image-input-container'>
      <ImageInputBox
        type='file'
        onChange={handleImageUpload}
        id='image-input'
      />
      <label for='image-input'>
        <PreviewContainer className='add-image-container'>
          {image ? (
            <Preview src={image} alt='preview' />
          ) : (
            <AddImageIcon src={addIcon} alt='add-icon' />
          )}
        </PreviewContainer>
      </label>
    </ImageInputContainer>
  );
};

export default ImageInput;

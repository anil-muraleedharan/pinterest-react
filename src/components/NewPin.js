import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import StyledPinContainer from './StyledPinContainer';
import { TitleInput, DescriptionInput } from './StyledInput';
import ImageInput from './ImageInput';
import { AddPinButton } from './StyledButton';

const NewPin = (props) => {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(undefined);

  const handleTitleChange = ({ target }) => setTitle(target.value);
  const handleDescriptionChange = ({ target }) => setDescription(target.value);
  const handleImageChange = (image) => setImage(image);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formDetails = new FormData();
    formDetails.append('title', title);
    formDetails.append('description', description);
    formDetails.append('image', image);
    fetch('/api/addPin', {
      method: 'POST',
      body: formDetails,
    }).then(() => history.push('/'));
  };

  return (
    <StyledPinContainer>
      <ImageInput handleImageChange={handleImageChange} />
      <div className='details-input'>
        <TitleInput
          type='text'
          placeholder='Give a title for your pin...'
          onChange={handleTitleChange}
          value={title}
        />
        <br />
        <DescriptionInput
          type='text'
          placeholder='Give a description for your pin...'
          onChange={handleDescriptionChange}
          value={description}
        />
        <AddPinButton onClick={handleSubmit}>Add Pin</AddPinButton>
      </div>
    </StyledPinContainer>
  );
};

export default NewPin;

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const NewPin = (props) => {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(undefined);

  const handleTitleChange = ({ target }) => setTitle(target.value);
  const handleDescriptionChange = ({ target }) => setDescription(target.value);
  const handleImageChange = ({ target }) => setImage(target.files[0]);
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
    <div className='new-pin'>
      <form onSubmit={handleSubmit} className='new-pin-form'>
        <div className='image-input-container'>
          <input
            type='file'
            id='image-input'
            className='image-input'
            onChange={handleImageChange}
          />
        </div>
        <div className='details-input'>
          <input
            type='text'
            id='title-input'
            placeholder='Give a title for your pin...'
            className='title-input'
            onChange={handleTitleChange}
            value={title}
          />
          <br />
          <input
            type='text'
            id='description-input'
            placeholder='Give a description for your pin...'
            className='description-input'
            onChange={handleDescriptionChange}
            value={description}
          />
          <input type='submit' value='Submit' className='submit' />
        </div>
      </form>
    </div>
  );
};

export default NewPin;

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import addIcon from '../images/add.png';

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
      <div className='image-input-container'>
        <input
          type='file'
          id='image-input'
          className='image-input'
          onChange={handleImageChange}
        />
        <label for='image-input'>
          <div className='add-image-container'>
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt='preview'
                className='image-preview'
              />
            ) : (
              <img src={addIcon} alt='add-icon' className='add-image-icon' />
            )}
          </div>
        </label>
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
        <button className='submit' onClick={handleSubmit}>
          Add Pin
        </button>
      </div>
    </div>
  );
};

export default NewPin;

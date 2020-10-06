import React, { useState } from 'react';
import addIcon from '../images/add.png';

const ImageInput = (props) => {
  const [preview, setPreview] = useState({
    src: addIcon,
    className: 'add-image-icon',
  });

  const handleImageUpload = (event) => {
    const image = event.target.files[0];
    props.handleImageChange(image);
    setPreview({ src: URL.createObjectURL(image), className: 'image-preview' });
  };

  return (
    <div className='image-input-container'>
      <input
        type='file'
        id='image-input'
        className='image-input'
        onChange={handleImageUpload}
      />
      <label for='image-input'>
        <div className='add-image-container'>
          <img src={preview.src} alt='preview' className={preview.className} />
        </div>
      </label>
    </div>
  );
};

export default ImageInput;

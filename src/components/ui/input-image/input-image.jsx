import React from 'react';

import clip from "../../../assets/icons/clip.svg";
import doc from "../../../assets/icons/doc.svg";

import {
  InputFileWrapper,
  StyledInputFile,
  InputFileLabel,
  StyledInputFileText,
  StyledPreview,
} from './style';

function InputImage({ photoPreview, setPhoto, children }) {
  return (
    <InputFileWrapper>
      <InputFileLabel>
        <img
          src={clip}
          width="20"
          alt="Иконка с изображением скрепки"
        />
        <StyledInputFileText>{children}</StyledInputFileText>
        <StyledInputFile
          type="file"
          accept="image/png, image/jpeg"
          name="image"
          valuedefault={photoPreview}
          onChange={(evt) => {
            const file = evt.target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
              setPhoto(reader.result);
            };
            if (file) {
              reader.readAsDataURL(file);
            }
          }}
        />
      </InputFileLabel>
      <StyledPreview>
        <img
          src={photoPreview || doc}
          alt="Предпросмотр загруженного фото"
        />
      </StyledPreview>
    </InputFileWrapper>
  );
};

export default InputImage;
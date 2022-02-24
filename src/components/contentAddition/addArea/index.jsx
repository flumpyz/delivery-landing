import React, {useState} from 'react';
import cx from 'classnames';
import s from './style.module.css';

import ImageIcon from '../../../UIComponents/imageIcon';
import RemoveButton from "../../../UIComponents/removeButton";

const Index = () => {
    const [text, setText] = useState("");
    const [imgPreview, setImgPreview] = useState(null);

    const setTextHandler = (event) => {
        setText(event.target.value);
    }

    const setImgPreviewHandler = (event) => {
        let file = event.target.files[0];

        let fileReader = new FileReader();

        fileReader.onload = (function(readFile) {
            return function (event) {
                setImgPreview(event.target.result);
            }
        })(file);

        fileReader.readAsDataURL(file);
    }

    const removeFile = () => {
      let fileInput = document.getElementById("fileUpload");

      fileInput.value = null;
      setImgPreview(null);
    }

    return (
        <div className={cx(s.addArea)}>
            <div className={cx(s.addAreaContainer)}>
                <div className={cx(s.contentContainer)}>
                    <div className={cx(s.infoContainer)}>
                        <h1 className={cx(s.infoContainer__title)}>
                            Добавить новость
                        </h1>
                        <p className={cx(s.infoContainer__description)}>
                            Введите текст новости, а также приложите изображение (размер: 270х270px, формат JPG,PNG)
                        </p>
                    </div>
                    <div className={cx(s.addTextContainer)}>
                        <textarea className={cx(s.addTextContainer__textarea)} placeholder={"Введите текст новости"}
                                  value={text} onChange={setTextHandler}/>
                    </div>
                    <div className={cx(s.charCountContainer)}>
                        <p className={cx(s.charCountContainer__chars)}>Символов:
                            <span
                                className={text.length > 150
                                    ? cx(s.charCountContainer__charCount, s.charCountContainer__charCountOverflow)
                                    : cx(s.charCountContainer__charCount)}>
                                {" " + text.length}</span>
                            /150
                        </p>
                    </div>
                    <div className={cx(s.addImageContainer)}>
                        <label htmlFor={"fileUpload"} className={cx(s.addLabelContainer)}>
                            <ImageIcon/>
                            <p className={cx(s.addLabelContainer__text)}>
                                + Добавить изображение
                            </p>
                        </label>
                        { imgPreview !== null &&
                            <img className={cx(s.addImageContainer__imgPreview)} src={imgPreview} alt="">
                            </img>
                        }
                        <input className={cx(s.addImageContainer__fileInput)} id={"fileUpload"} type={"file"}
                               accept={".jpg,.png"} onInput={setImgPreviewHandler}/>
                        { imgPreview !== null &&
                            <RemoveButton removeFile={removeFile}/>
                        }
                    </div>
                    <button className={cx(s.contentContainer__submitButton)}>
                        Применить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Index;
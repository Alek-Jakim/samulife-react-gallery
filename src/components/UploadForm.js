import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import '../index.css'

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const allowedTypes = ['image/png', 'image/jpeg']

    const changeHandler = (e) => {
        let selected = e.target.files[0];

        if (selected && allowedTypes.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select a valid image file (png or jpeg).');
        }
    }

    return (
        <div>

            <form>
                <p>Add Image</p>
                <label>
                    <input type="file" onChange={changeHandler} />
                +
            </label>
                <div className="output">
                    {error && <div className="error">{error}</div>}
                    {file && <div>{file.name}</div>}
                    {file && <ProgressBar file={file} setFile={setFile} />}
                </div>
            </form>
        </div>
    )
}

export default UploadForm;
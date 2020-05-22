import React from 'react';


const FaceRecognition = ({ imageUrl }) => {
    return (
        <div className='center ma'>
            <div className='center ma'>
                <img alt='' src={imageUrl} width='500px' height='auto'/>
            </div>
        </div>
    );
}

export default FaceRecognition;
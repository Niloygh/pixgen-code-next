import { photosData } from '@/lib/FetchData/data';
import React from 'react';

const PhotoDetailsPage = async({params}) => {
    const {id} = await params

    const photos = await photosData()

    const photo = photos.find(p => p.id == id)
    
    
    return (
        <div>
            <h1>{photo.title}</h1>
            <p>{photo.prompt}</p>
        </div>
    );
};

export default PhotoDetailsPage;
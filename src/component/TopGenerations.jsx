import { photosData } from '@/lib/FetchData/data';
import React from 'react';
import PhotoCard from './PhotoCard';


const TopGenerations = async () => {
    const photos = await photosData()
    console.log(photos)
    
    return (
        <div>
            <h1 className='text-2xl font-bold my-5'>Top Generations</h1>

            <div className="grid grid-cols-4 gap-5">
                {photos.slice(0, 8).map(photo=> <PhotoCard key={photo.id} photo={photo} />)}
            </div>
                        
        </div>
    );
};

export default TopGenerations;
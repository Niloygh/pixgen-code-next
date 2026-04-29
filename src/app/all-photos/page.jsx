import PhotoCard from '@/component/PhotoCard';
import { photosData } from '@/lib/FetchData/data';
import React from 'react';

const AllPhotosPage = async() => {

    const photos = await photosData()
    // console.log(photos)
    
    return (
        <div>
            <h2 className='text-2xl font-bold my-5'>All Photos</h2>

            <div className="grid grid-cols-4">
                {
                    photos.map(photo=> <PhotoCard key={photo.id} photo={photo} />)
                }
            </div>
        </div>
    );
};

export default AllPhotosPage;
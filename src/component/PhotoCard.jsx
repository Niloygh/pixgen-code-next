import { Button, Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiDownload } from 'react-icons/bi';
import { FaHeart } from 'react-icons/fa';

const PhotoCard = ({ photo }) => {

    return (
        <Card className='border rounded-xl'>
            <div className="relative w-full aspect-square">
                <Image
                    src={photo.imageUrl}
                    fill
                    alt={photo.title}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className='object-cover rounded-xl' />

                <Chip className='absolute right-2 top-2' >{photo.category}</Chip>

            </div>

            <h1>{photo.title}</h1>

            <div className="flex items-center gap-5 ">
                <p className=' flex items-center gap-2'><FaHeart />{photo.likes}</p>
                <Separator orientation='vertical' />
                <p className=' flex items-center gap-2'><BiDownload />{photo.downloads}</p>
            </div>

            <Link href={`/all-photos/${photo.id}`}>
                <Button variant='outline' className={'w-full'} >View</Button>
            </Link>

        </Card>
    );
};

export default PhotoCard;
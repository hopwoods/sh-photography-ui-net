/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { GetPhotoAlbum } from './../_services/photos.service';
import loader from './../images/Infinity-1s-200px.svg';
import useWindowDimensions from '../_hooks/UseWindowDimensions'

export function PhotoGallery(props)
{
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const [photos, setPhotos] = useState([
        {
            src: loader,
            width: 1,
            height: 1,
            alt: 'Loading Photos...'
        }
    ]);

    const { width, height } = useWindowDimensions();

    function getReducedDimensions(originalWidth, originalHeight, multiplier)
    {
        const reducedWidth = originalWidth / multiplier;
        const reducedHeight = originalHeight / multiplier;
        return {
            width,
            height
        };
    }

    const dimensions = getReducedDimensions(width, height, 1.25);
 
    const photosArray = () => GetPhotoAlbum(props.albumId, dimensions.width, dimensions.height,).then(function(data)
    {
        setPhotos(data);
    });


    useEffect(() =>
        {
            photosArray();
            //console.log("Getting Photos Gallery - On Component Load - Runs Once Only");
        },
        []); //Use Empty arrray knowing that an empty set does never change, the effect will run only once.

    const openLightbox = (event, obj) =>
    {
        setCurrentImage(obj.index);
        setViewerIsOpen(true);
    };
    const closeLightbox = () =>
    {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <div>
            <Gallery photos={photos} margin={props.margin} onClick={openLightbox}/>
            <ModalGateway>
                {viewerIsOpen
                ? (
                <Modal onClose={closeLightbox}>
                <Carousel
                    currentIndex={currentImage}
                    views={photos.map(x => ({
                                  src: x.src,
                                  width: x.width,
                                  height: x.height,
                                  srcSet: x.srcSet,
                                  sizes: x.sizes,
                                  caption: x.title,
                                  alt: x.title
                            }))}/>
                        </Modal>
                    )
                    : null}
            </ModalGateway>
        </div>
);
}
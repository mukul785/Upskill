import React from 'react';
import useFetch from './useFetch';
// import './Photos.css'; // Optional for styling
import './photos.css';

const Photos = () => {
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/photos');

    if (loading) return <div className="res">Loading...</div>;
    if (error) return <div className="res">{error}</div>;

    return (
        <>
        <header className="App-header">
            <h1>Photo Gallery</h1>
        </header>
        <div className="photos-container">
            {data && data.slice(0, 50).map(photo => (
                <div key={photo.id} className="photo-card">
                    <img src={photo.thumbnailUrl} alt={photo.title} className="photo-img" />
                    <p>{photo.title}</p>
                </div>
            ))}
        </div>
        </>
    );
};

export default Photos;

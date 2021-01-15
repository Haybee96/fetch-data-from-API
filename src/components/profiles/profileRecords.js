import React from 'react';
import ProfileItem from './profileItems';
import Spinner from './../UI/Spinner';

const ProfileRecords = ({items, isLoading}) => {
    return isLoading ? <Spinner /> : <section className='cards'>
            {items.map(item => (
                <ProfileItem item={item}></ProfileItem>
            ))}
        </section>
    
}

export default ProfileRecords;

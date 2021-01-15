import React from 'react'

const ProfileItems = ({item}) => {
    return (
        <div className='card'>
            <div className='card-content'>
                <div className='text-center'>
                    <strong>Firstname:</strong> {item.FirstName} <br />
                    <strong>Lastname:</strong> {item.LastName} <br />
                    <strong>Username:</strong> {item.UserName} <br />
                    <strong>Gender:</strong> {item.Gender} <br />
                    <strong>Email:</strong> {item.Email} <br />
                    <strong>Domain name:</strong> {item.DomainName} <br />
                    <strong>Last Login:</strong> {item.LastLogin} <br />
                    <strong>Latitude:</strong> {item.Latitude} <br />
                    <strong>Longitude:</strong> {item.Longitude} <br />
                    <strong>Mac Address:</strong> {item.MacAddress} <br />
                    <strong>Payment Method:</strong> {item.LastName} <br />
                    <strong>Phone Number:</strong> {item.PhoneNumber} <br />
                    <strong>URL:</strong> {item.URL} <br />
                    <strong>Credit Card Number:</strong> {item.CreditCardNumber} <br />
                    <strong>Credit Card Type:</strong> {item.CreditCardType}
                    
                </div>
                
            </div>
        </div>
    )
}

export default ProfileItems

import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1 className="cards__header">Checkout these epic destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <CardItem
                        src='/images/img-9.jpg'
                        text='Explore the hidden waterfall deep in the amazon jungle'
                        label='Adventures'
                        path='/services' />
                    <CardItem
                        src='/images/img-2.jpg'
                        text='Travels through the islands of Bali i A Private Cruise'
                        label='Luxury'
                        path='/services' />
                </div>
                <div className="cards__wrapper">
                    <CardItem
                        src='/images/img-4.jpg'
                        text='Experiance football on top of the Himilayan mountains'
                        label='Adventures'
                        path='/services' />
                    <CardItem
                        src='/images/img-3.jpg'
                        text='Set sail in the Atlantic Ocean visiting Uncharted Waters'
                        label='Mystery'
                        path='/services' />
                    <CardItem
                        src='/images/img-8.jpg'
                        text='Ride through the sahar desert on a guided camel tour'
                        label='Adventures'
                        path='/sign-up' />
                </div>
            </div>
        </div>
    )
}

export default Cards

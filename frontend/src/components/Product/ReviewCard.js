import React from 'react'
import ReactStars from 'react-rating-stars-component'

const ReviewCard = ({ review }) => {
    const profilePng = 'https://tse1.mm.bing.net/th?id=OIP.ruat7whad9-kcI8_1KH_tQHaGI&pid=Api&rs=1&c=1&qlt=95&w=124&h=102'

    const options = {
        edit: false,
        color: 'rgba(20,20,20,.1)',
        activeColor: 'tomato',
        size: window.innerWidth < 900 ? 20 : 25,
        value: Number(review.rating),
        isHalf: true

    }
    return (
        <div className='reviewCard'>
            <img src={profilePng} alt='User' />
            <p>
                {review.name ? review.name : '******'}
            </p>
            <ReactStars {...options} />
            <span>{review.comment}</span>
        </div>
    )
}

export default ReviewCard

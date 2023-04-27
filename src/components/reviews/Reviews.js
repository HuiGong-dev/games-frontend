import React, { useState, useRef } from 'react';
import './Reviews.css';
import Review from '../Review';
import api from '../../api/axiosConfig';
import { Container, Row } from 'react-bootstrap';

const Reviews = ({ reviews, setReviews, steamId }) => {
  const [reviewBody, setReviewBody] = useState('');
  const [currentReviewId, setCurrentReviewId] = useState();
  const [showEdit, setShowEdit] = useState(false);
  const inputRef = useRef(null);
  const handleEditClick = (review) => {
    setCurrentReviewId(review.id);
    setReviewBody(review.body);
    inputRef.current.focus();
    setShowEdit(true);
  };
  const deleteReviewById = async (id) => {
    api.delete(`/api/v1/reviews/${id}`);
    const updatedReviews = reviews.filter((review) => {
      return review.id !== id;
    });
    setReviews(updatedReviews);
  };
  const createReview = async (reviewBody) => {
    const response = await api.post(
      '/api/v1/reviews',
      { reviewBody, steamId },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    setReviews([...reviews, response.data]);
  };
  const updateReview = async () => {
    try {
      const response = await api.put(`/api/v1/reviews/${currentReviewId}`, {
        reviewBody,
      });
      const updatedReviews = reviews.map((review) => {
        if (review.id === currentReviewId) {
          return { ...review, ...response.data };
        }
        return review;
      });
      setReviews(updatedReviews);
      setShowEdit(false);
      setCurrentReviewId(null);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    showEdit ? updateReview() : createReview(reviewBody);
    setReviewBody('');
    inputRef.current.blur();
  };
  const handleChange = (event) => {
    setReviewBody(event.target.value);
  };
  return (
    <Container className="container mx-auto max-w-full flex flex-col  m-10 mt-5 justify-normal border rounded-md px-2 drop-shadow-md bg-neutral-900 border-neutral-900">
      <Row className="font-bold pb-5 text-2xl mt-5 mx-5">Reviews</Row>
      <Row>
        <form onSubmit={handleSubmit} className="flex flex-row justify-between">
          <input
            ref={inputRef}
            value={reviewBody}
            type="text"
            onChange={handleChange}
            className="bg-black w-full max-w-full pl-5  break-words h-20 text-lg rounded"
            required
            minLength="4"
            maxLength="100"
            placeholder="What do you think..."
          />
          <button className="button px-10 border rounded-lg text-lg font-bold hover:bg-black mx-5">
            Send
          </button>
        </form>
      </Row>
      <Row className="grid grid-auto-rows mt-4">
        {reviews !== []
          ? reviews?.map((review) => {
              return (
                <Review
                  key={review.id}
                  review={review}
                  handleEditClick={handleEditClick}
                  deleteReviewById={deleteReviewById}
                />
              );
            })
          : ''}
      </Row>
    </Container>
  );
};

export default Reviews;

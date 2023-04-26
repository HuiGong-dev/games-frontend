import React, { useState, useRef } from 'react';
import './Reviews.css';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import api from '../../api/axiosConfig';
import { Container, Row, Col } from 'react-bootstrap';

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
    <Container className="container mx-auto h-1/2 flex flex-col  mt-10 justify-normal border rounded-md px-2 drop-shadow-md bg-neutral-900 border-neutral-900">
      <Row className="font-bold pb-5">Reviews</Row>
      <Row>
        <form onSubmit={handleSubmit} className="flex flex-row justify-between">
          <input
            ref={inputRef}
            value={reviewBody}
            type="text"
            onChange={handleChange}
            className="bg-black w-full pl-2"
            placeholder="What do you think..."
          />
          <button className="button px-2">Add Review</button>
        </form>
      </Row>
      <Row className="grid grid-auto-rows mt-4">
        {reviews !== []
          ? reviews?.map((review) => {
              return (
                <div key={review.id}>
                  <Row className="hover:bg-neutral-800 pb-3">
                    <Col className="flex flex-row justify-between pt-3">
                      {review.body}
                      <div>
                        <button
                          className="mr-4 text-lg  hover:cursor-pointer"
                          onClick={() => {
                            handleEditClick(review);
                          }}
                        >
                          <AiFillEdit />
                        </button>
                        <button
                          className="text-lg hover:cursor-pointer"
                          onClick={() => {
                            deleteReviewById(review.id);
                          }}
                        >
                          <AiFillDelete />
                        </button>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <hr className="border-gray-800" />
                    </Col>
                  </Row>
                </div>
              );
            })
          : ''}
      </Row>
    </Container>
  );
};

export default Reviews;

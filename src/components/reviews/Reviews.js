import React, { useState } from 'react';
import './Reviews.css';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import api from '../../api/axiosConfig';
import { Container, Row, Col } from 'react-bootstrap';

const Reviews = ({ reviews, setReviews, steamId }) => {
  const [reviewBody, setReviewBody] = useState('');
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

  const handleSubmit = (event) => {
    event.preventDefault();
    createReview(reviewBody);
    setReviewBody('');
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
                <div key={review.id} className="pt-3 hover:bg-neutral-800">
                  <Row>
                    <Col className="flex flex-row justify-between">
                      {review.body}
                      <div>
                        <button className="mr-4 text-lg  hover:cursor-pointer">
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
                      <hr />
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

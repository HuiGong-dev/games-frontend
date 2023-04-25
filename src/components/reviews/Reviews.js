import React from 'react';
import './Reviews.css';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import api from '../../api/axiosConfig';
import { Container, Row, Col } from 'react-bootstrap';

const Reviews = ({ reviews, setReviews }) => {
  const deleteReviewById = async (id) => {
    const result = api.delete(`/api/v1/reviews/${id}`);
    console.log(result);
    const updatedReviews = reviews.filter((review) => {
      return review.id !== id;
    });
    setReviews(updatedReviews);
  };
  return (
    <Container className="container mx-auto h-1/2 flex flex-col p-2 mt-10 justify-normal border rounded-md ml-2 drop-shadow-md bg-neutral-900 border-neutral-900">
      <Row className="font-bold pb-5">Reviews</Row>
      <Row>review form</Row>
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

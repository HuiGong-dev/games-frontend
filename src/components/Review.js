import React from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { Row, Col } from 'react-bootstrap';

const Review = ({ review, handleEditClick, deleteReviewById }) => {
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
};

export default Review;

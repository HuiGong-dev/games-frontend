import React from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

const Reviews = ({ reviews }) => {
  return (
    <div className="container mx-auto h-1/2 flex flex-col p-2 mt-10 justify-normal border rounded-md ml-2 drop-shadow-md bg-neutral-900 border-neutral-900">
      <div className="font-bold">Reviews</div>
      <div>review form</div>
      <div className="grid grid-auto-rows">
        {reviews !== []
          ? reviews?.map((review) => {
              return (
                <div
                  key={review.id}
                  className="flex flex-row px-2 justify-between hover:bg-neutral-800 py-2 border-t-2 border-stone-600 last:border-b-2 "
                >
                  {review.body}
                  <div className="flex flex-row">
                    <AiFillEdit className="text-lg" />
                    <AiFillDelete />
                  </div>
                </div>
              );
            })
          : ''}
      </div>
    </div>
  );
};

export default Reviews;

import React from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import api from '../../api/axiosConfig';

const Reviews = ({ reviews }) => {
  return (
    <div className="container mx-auto h-1/2 flex flex-col p-2 mt-10 justify-normal border rounded-md ml-2 drop-shadow-md bg-neutral-900 border-neutral-900">
      <div className="font-bold pb-5">Reviews</div>
      <div>review form</div>
      <div className="grid grid-auto-rows mt-4">
        {reviews !== []
          ? reviews?.map((review) => {
              return (
                <div
                  key={review.id}
                  className="flex flex-row px-2 justify-between hover:bg-neutral-800 py-2 border-t-2 border-stone-400 last:border-b-2 "
                >
                  {review.body}
                  <div className="flex flex-row p-2">
                    <button className="mr-4 text-lg  hover:cursor-pointer">
                      <AiFillEdit />
                    </button>
                    <button className="text-lg hover:cursor-pointer">
                      <AiFillDelete />
                    </button>
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

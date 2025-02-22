import React from 'react';

const Card = (props) => {
  return (
    <>
      <div className='  h-fit rounded-sm flex flex-col gap-2 cursor-pointer' onClick={props.onClick}>
        <img src={props.image} alt="" className='rounded-md lg:hover:scale-110 overflow-hidden duration-300' />
        <h1 className='font-semibold text-white text-center'>{props.title}</h1>
      </div>
    </>
  );
}

export default Card;

import React from 'react';

function Modal({ dispatch }) {
   return (
      <div
         onClick={() => {
            dispatch();
            console.log(1);
         }}
         className='mark-modal fixed z-[-1] top-[64px] sm:top-[72px] md:top-[76px] left-0 right-0 bottom-0 bg-lpink opacity-50'
      ></div>
   );
}

export default Modal;

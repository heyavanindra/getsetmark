'use client'
import React, { useState } from 'react';


const Alert = ({visible,setVisible}:{visible:boolean,setVisible:any}) => {
  

  return (
    <>
      {visible && (
        <div className="fixed inset-x-0 top-10 pb-2 sm:pb-5 z-50">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="rounded-lg bg-indigo-600 p-2 shadow-lg sm:p-3">
              <div className="flex flex-wrap relative items-center justify-between">
                <div className="flex p-2 flex-1 items-center font-medium text-white">
                  error while sendting request
                  
                </div>
                <button
                  className="absolute -top-2 -right-2 hover:text-gray-100"
                  onClick={() => setVisible(false)}
                >
                  <span className="sr-only">Dismiss</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-6 w-6 text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;

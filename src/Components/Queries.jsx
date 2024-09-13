import React from 'react';

const Queries = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl mb-8">
      <h2 className="text-center text-xl sm:text-2xl font-bold my-8">
        Got <span className="text-orange-500">Queries?</span> Get in Touch!
      </h2>
      <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-between mb-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full sm:w-[48%] p-4 border border-gray-300 rounded-md shadow-md"
        />
        <input
          type="email"
          placeholder="Your Email ID"
          className="w-full sm:w-[48%] p-4 border border-gray-300 rounded-md shadow-md"
        />
      </div>
      <textarea
        placeholder="Type your message here..."
        className="w-full p-4 border border-gray-300 rounded-md shadow-md h-40 mb-8"
      />
    </div>
  );
};

export default Queries;

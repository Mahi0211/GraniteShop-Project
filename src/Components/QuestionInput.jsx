import React, { useState } from "react";

const QuestionInput = () => {
  const [question, setQuestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Question submitted:", question);
    // Add your submission logic here
  };

  return (
    <div className="w-full max-w-4xl mt-[20px]">
      <div className="flex items-center bg-white border border-gray-300 rounded-full p-1 shadow-sm">
        {/* Input Field */}
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Have a different question"
          className="flex-1 px-6 py-4 text-gray-800 placeholder-gray-500 bg-transparent border-none outline-none text-base font-normal"
        />

        {/* Submit Button */}
        <button
          type="submit"
          onClick={handleSubmit}
          className="cursor-pointer px-6 py-3 mr-[10px] bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors duration-200 text-sm whitespace-nowrap"
        >
          Ask Something
        </button>
      </div>
    </div>
  );
};

export default QuestionInput;

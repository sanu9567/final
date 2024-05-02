import React, { useState } from 'react';

const FeedbackBox = () => {
  const [rating, setRating] = useState(null);
  const [feedback, setFeedback] = useState('');

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
    console.log('Submitted rating:', rating);
    console.log('Submitted feedback:', feedback);
    setRating(null);
    setFeedback('');
  };

  return (
    <div>
      <h2>FEEDBACK</h2>
      <form onSubmit={handleSubmit}>
        <div>
          
          <div>
            {[...Array(5)].map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleRatingChange(index + 1)}
                style={{
                  color: index < rating ? 'gold' : 'gray',
                  fontSize: '24px',
                  cursor: 'pointer',
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                }}
              >
                ★
                <br></br>
              </button>
            ))}
          </div>
        </div>
        <div>
          <textarea
            value={feedback}
            onChange={handleFeedbackChange}
            placeholder="Write your feedback here..."
            style={{ width: '30%', minHeight: '100px' }}
          />
        </div>
        <div><br></br>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackBox;
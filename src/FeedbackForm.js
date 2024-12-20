import React, { useState } from 'react';
import './App.css'; // Importing global styles

function FeedbackForm() {
  const [rating, setRating] = useState(1);
  const [comments, setComments] = useState('');
  const [subscribe, setSubscribe] = useState(false);
  const [feedbackSummary, setFeedbackSummary] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFeedbackSummary({
      rating,
      comments,
      subscribe,
    });
    // Reset form fields
    setRating(1);
    setComments('');
    setSubscribe(false);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Feedback Form</h2>
        <div>
          <label>Rating:</label>
          {[1, 2, 3, 4, 5].map((star) => (
            <label key={star}>
              <input
                type="radio"
                value={star}
                checked={rating === star}
                onChange={() => setRating(star)}
              />
              {star} Star
            </label>
          ))}
        </div>
        <div className="form-group">
          <label>Comments:</label>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            rows="4"
            required
            className="form-control"
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={subscribe}
              onChange={() => setSubscribe(!subscribe)}
            />
            Subscribe to newsletter
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Submit Feedback</button>
      </form>
      {feedbackSummary && (
        <div className="card">
          <h3>Feedback Summary</h3>
          <p>Rating: {feedbackSummary.rating} Star(s)</p>
          <p>Comments: {feedbackSummary.comments}</p>
          <p>Subscribed to newsletter: {feedbackSummary.subscribe ? 'Yes' : 'No'}</p>
        </div>
      )}
    </div>
  );
}

export default FeedbackForm;

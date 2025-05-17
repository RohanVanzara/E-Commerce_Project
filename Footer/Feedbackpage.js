// import React, { useState } from 'react';
// import './Feedbackpage.css';
// import Footer from "../Footer/Footer";


// const FeedbackPage = () => {
//   const [page, setPage] = useState(4);
//   const [formData, setFormData] = useState({
//     productQuality1: '',
//     overallSatisfaction: '',
//     storeCollection: '',
//     productQuality2: '',
//     checkoutExperience: '',
//     comments: '',
//     name: '',
//     email: '',
//     number: ''
//   });

//   // Form validation state
//   const [errors, setErrors] = useState({});

//   const handleNext = () => {
//     setPage(prev => prev + 1);
//   };

//   const handleBack = () => {
//     if (page > 4) setPage(prev => prev - 1);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));

//     // Clear error for this field when user types
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: '' }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     // Validate each required field
//     if (!formData.name.trim()) {
//       newErrors.name = 'Name is required';
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email is invalid';
//     }

//     if (!formData.number.trim()) {
//       newErrors.number = 'Phone number is required';
//     }

//     if (!formData.comments.trim()) {
//       newErrors.comments = 'Comments are required';
//     }

//     setErrors(newErrors);

//     // Return true if there are no errors
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validate the form before submitting
//     if (validateForm()) {
//       console.log("Form submitted:", formData);
//       setPage(9);
//     }
//   };

//   const handleStarClick = (question, rating) => {
//     setFormData(prev => ({
//       ...prev,
//       [question]: rating
//     }));
//   };

//   const renderStars = (question) => {
//     const rating = formData[question];
//     return (
//       <div className="star-rating">
//         {[1, 2, 3, 4, 5].map(star => (
//           <span
//             key={star}
//             className={`star ${rating >= star ? 'filled' : ''}`}
//             onClick={() => handleStarClick(question, star)}
//           >
//             ★
//           </span>
//         ))}
//       </div>
//     );
//   };

//   const renderQuestion = () => {
//     switch (page) {
//       case 4:
//         return (
//           <div className="question-card">
//             <h2>Overall, how satisfied are you with your visit to our store today?</h2>
//             {renderStars('productQuality1')}
//           </div>
//         );
//       case 5:
//         return (
//           <div className="question-card">
//             <h2>How would you rate the collection in our store today?</h2>
//             {renderStars('overallSatisfaction')}
//           </div>
//         );
//       case 6:
//         return (
//           <div className="question-card">
//             <h2>How satisfied are you with the quality of our products?</h2>
//             {renderStars('storeCollection')}
//           </div>
//         );
//       case 7:
//         return (
//           <div className="question-card">
//             <h2>How was your checkout experience at our store?</h2>
//             {renderStars('productQuality2')}
//           </div>
//         );
//       case 8:
//         return (
//           <div className="question-card">
//             <h2>Would you like to share your contact details?</h2>
//             <form onSubmit={handleSubmit}>
//               <div className="form-group">
//                 <textarea
//                   name="comments"
//                   value={formData.comments}
//                   onChange={handleChange}
//                   placeholder="Comments..."
//                   required
//                 />
//                 {errors.comments && <span className="error-message">{errors.comments}</span>}
//               </div>

//               <div className="form-group">
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Name"
//                   required
//                 />
//                 {errors.name && <span className="error-message">{errors.name}</span>}
//               </div>

//               <div className="form-group">
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Email"
//                   required
//                 />
//                 {errors.email && <span className="error-message">{errors.email}</span>}
//               </div>

//               <div className="form-group">
//                 <input
//                   type="tel"
//                   name="number"
//                   value={formData.number}
//                   onChange={handleChange}
//                   placeholder="Phone Number"
//                   required
//                 />
//                 {errors.number && <span className="error-message">{errors.number}</span>}
//               </div>

//               <button type="submit" className="submit-btn">Submit</button>
//             </form>
//           </div>
//         );
//       case 9:
//         return (
//           <div className="thank-you">
//             <h2>Thank You!</h2>
//             <p>We appreciate your feedback. Have a great day!</p>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <>
//       <div className="feedback-page-wrapper">
//         <div className="feedback-container">
//           {renderQuestion()}
//           {page < 9 && page !== 8 && (
//             <div className="navigation-controls">
//               {page > 4 && (
//                 <button className="nav-btn back-btn" onClick={handleBack}>
//                   <span className="arrow">&#10094;</span>
//                 </button>
//               )}
//               <button className="nav-btn next-btn" onClick={handleNext}>
//                 <span className="arrow">&#10095;</span>
//               </button>
//             </div>
//           )}
//           {page === 8 && (
//             <div className="navigation-controls">
//               <button className="nav-btn back-btn" onClick={handleBack}>
//                 <span className="arrow">&#10094;</span>
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default FeedbackPage;


import React, { useState } from 'react';
import './Feedbackpage.css';
import Footer from "../Footer/Footer";

const FeedbackPage = () => {
  const [page, setPage] = useState(4);
  const [formData, setFormData] = useState({
    productQuality1: '',
    overallSatisfaction: '',
    storeCollection: '',
    productQuality2: '',
    comments: '',
    name: '',
    email: '',
    number: ''
  });

  const [errors, setErrors] = useState({});

  const handleNext = () => {
    setPage(prev => prev + 1);
  };

  const handleBack = () => {
    if (page > 4) setPage(prev => prev - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.number.trim()) {
      newErrors.number = 'Phone number is required';
    }
    if (!formData.comments.trim()) {
      newErrors.comments = 'Comments are required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch('http://localhost:8081/feedback', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        

        if (response.ok) {
          setPage(9);
        } else {
          alert('Failed to submit feedback. Please try again.');
        }
      } catch (error) {
        // console.error('Error submitting feedback:', error);
        alert('Something went wrong. Please try later.');
      }
    }
  };

  const handleStarClick = (question, rating) => {
    setFormData(prev => ({
      ...prev,
      [question]: rating
    }));
  };

  const renderStars = (question) => {
    const rating = formData[question];
    return (
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map(star => (
          <span
            key={star}
            className={`star ${rating >= star ? 'filled' : ''}`}
            onClick={() => handleStarClick(question, star)}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  const renderQuestion = () => {
    switch (page) {
      case 4:
        return (
          <div className="question-card">
            <h2>Overall, how satisfied are you with your visit to our store today?</h2>
            {renderStars('productQuality1')}
          </div>
        );
      case 5:
        return (
          <div className="question-card">
            <h2>How would you rate the collection in our store today?</h2>
            {renderStars('overallSatisfaction')}
          </div>
        );
      case 6:
        return (
          <div className="question-card">
            <h2>How satisfied are you with the quality of our products?</h2>
            {renderStars('storeCollection')}
          </div>
        );
      case 7:
        return (
          <div className="question-card">
            <h2>How was your checkout experience at our store?</h2>
            {renderStars('productQuality2')}
          </div>
        );
      case 8:
        return (
          <div className="question-card">
            <h2>Would you like to share your contact details?</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  placeholder="Comments..."
                  required
                />
                {errors.comments && <span className="error-message">{errors.comments}</span>}
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                />
                {errors.number && <span className="error-message">{errors.number}</span>}
              </div>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        );
      case 9:
        return (
          <div className="thank-you">
            <h2 >Thank You!</h2>
            <p>We appreciate your feedback. Have a great day!</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="feedback-page-wrapper">
        <div className="feedback-container">
          {renderQuestion()}
          {page < 9 && page !== 8 && (
            <div className="navigation-controls">
              {page > 4 && (
                <button className="nav-btn back-btn" onClick={handleBack}>
                  <span className="arrow">&#10094;</span>
                </button>
              )}
              <button className="nav-btn next-btn" onClick={handleNext}>
                <span className="arrow">&#10095;</span>
              </button>
            </div>
          )}
          {page === 8 && (
            <div className="navigation-controls">
              <button className="nav-btn back-btn" onClick={handleBack}>
                <span className="arrow">&#10094;</span>
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FeedbackPage;

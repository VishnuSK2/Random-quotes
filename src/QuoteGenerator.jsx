  import React, { useState, useEffect } from 'react';
  import axios from 'axios';

  const QuoteGenerator = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    // Function to fetch a random quote from the API
    const fetchQuote = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/quotes/random');
        const { quote, author } = response.data;
        setQuote(quote);
        setAuthor(author);
      } catch (error) {
        console.error('Error fetching quote:', error);
      }
    };

    // Fetch an initial quote on component mount
    useEffect(() => {
      fetchQuote();
    }, []);

    return (
      <div className='main'>
      <div className='sub'>
        <h2>Random Quote Generator</h2>
        <p style={{ fontSize: '30px', fontStyle: 'italic' }}>{quote}</p>
        <p style={{fontSize:'20px'}}>- {author}</p>
        <button onClick={fetchQuote}>Get New Quote</button>
      </div>
      </div>
    );
  };

  export default QuoteGenerator;

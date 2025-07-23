import BookCard from './BookCard';
import './App.css'

function App() {
  const books = [ 
    {
      image: "https://diwanegypt.com/wp-content/uploads/2020/08/9781526604750.jpg",
      title: "A Thousand Splendid Suns",
      author: "Khaled Hosseini",
      link: "https://amzn.in/d/dYvy5LO",
      description: "It is a powerful story of two Afghan women whose lives become intertwined through hardship, love, and sacrifice. It explores themes of resilience, female friendship, and hope amid war and oppression." 
    },
        {
      image: "https://m.media-amazon.com/images/I/5177eLEs+YL._SY445_SX342_PQ72_.jpg",
      title: "Silent Patient",
      author: "Alex Michaelides",
      description: "A psychological thriller about a woman who stops speaking after murdering her husband, and the therapist determined to uncover why. Twists unravel the truth behind silence and trauma." ,
      link: "https://amzn.in/d/2ZE3Zx5"
    },
    {
      image: "https://m.media-amazon.com/images/I/51wbVQTpTgL._SY445_SX342_PQ72_.jpg",
      title: "Wings of Fire",
      author: "APJ Abdul Kalam and Arun Tiwari",
      description: "The inspiring autobiography of Dr. A.P.J. Abdul Kalam, tracing his journey from a small-town boy to India's Missile Man. It’s a story of resilience, vision, and scientific pursuit.",
      link: "https://amzn.in/d/8K9M3Gs"
    },
    {
      image: "https://m.media-amazon.com/images/I/41ziEX0PJgL._SY445_SX342_PQ72_.jpg",
      title: "Alchemist",
      author: "Paulo Coelho",
      description: "A young shepherd named Santiago follows his dream to find treasure, learning life’s spiritual truths along the way. It’s a poetic fable about destiny, purpose, and the soul of the world.",
      link: "https://amzn.in/d/bBDCLT0" 
    },
    {
      image: "https://m.media-amazon.com/images/I/41q8viTxePL._SY445_SX342_PQ72_.jpg",
      title: "Little Life",
      author: " Hanya Yanagihara",
      description: "Follows four college friends over decades, with a haunting focus on one man's harrowing past and deep trauma. It’s an emotionally intense story about friendship, suffering, and survival.",
      link: "https://amzn.in/d/7vz7OBv"
    },
    {
      image: "https://m.media-amazon.com/images/I/81F90H7hnML._SY342_.jpg",
      title: "Atomic Habits",
      author: "James Clear",
      description: "James Clear presents a powerful system for building good habits and breaking bad ones. Small daily improvements compound into remarkable long-term change.",
      link: "https://amzn.in/d/2mAjBEP"
    }
  ];
  return (
    <>
      <h1 style={{textAlign: 'center'}}>My Book Recommendations💙</h1>
      <div className="book-container">
      {books.map((book, index) => (
        <BookCard
          key={index}
          image={book.image}
          title={book.title} 
          author={book.author}
          link={book.link}
          description={book.description}
          />
      ))}
      </div>
    </>
  );
}

export default App;


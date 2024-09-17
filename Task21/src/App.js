import './App.css';
import React from 'react';
import Card from './components/Card';

function App() {

  const cardsData = [
    {
      title: 'Card Title 1',
      description: 'This is a description for card 1.',
      imageUrl: 'https://img.freepik.com/free-photo/beautiful-rainbow-nature_23-2151498338.jpg?ga=GA1.1.1490474753.1726164427&semt=ais_hybrid'
    },
    {
      title: 'Card Title 2',
      description: 'This is a description for card 2.',
      imageUrl: 'https://img.freepik.com/free-photo/beautiful-rainbow-nature_23-2151498273.jpg?ga=GA1.1.1490474753.1726164427&semt=ais_hybrid'
    },
    {
      title: 'Card Title 3',
      description: 'This is a description for card 2.',
      imageUrl: 'https://img.freepik.com/free-photo/wooden-bridge-leading-adventurous-walk-middle-woods_181624-6278.jpg?ga=GA1.1.1490474753.1726164427&semt=ais_hybrid'
    }, 
    {
      title: 'Card Title 4',
      description: 'This is a description for card 2.',
      imageUrl: 'https://img.freepik.com/free-photo/ai-generated-boat-picture_23-2150648101.jpg?ga=GA1.1.1490474753.1726164427&semt=ais_hybrid'
    },  
    {
      title: 'Card Title 5',
      description: 'This is a description for card 2.',
      imageUrl: 'https://img.freepik.com/free-photo/green-tropical-leaves-background_23-2148245206.jpg?ga=GA1.1.1490474753.1726164427&semt=ais_hybrid'
    },  
    {
      title: 'Card Title 6',
      description: 'This is a description for card 2.',
      imageUrl: 'https://img.freepik.com/free-photo/young-girl-summer-holidays_23-2147646898.jpg?ga=GA1.1.1490474753.1726164427&semt=ais_hybrid'
    },
    {
      title: 'Card Title 7',
      description: 'This is a description for card 2.',
      imageUrl: 'https://img.freepik.com/free-photo/animal-wild-nature-undomesticated-cat-close-up-portrait-generative-ai_188544-8150.jpg?ga=GA1.1.1490474753.1726164427&semt=ais_hybrid'
    },
    {
      title: 'Card Title 8',
      description: 'This is a description for card 2.',
      imageUrl: 'https://img.freepik.com/free-photo/realistic-elephant-studio_23-2150802006.jpg?ga=GA1.1.1490474753.1726164427&semt=ais_hybrid'
    },
    {
      title: 'Card Title 9',
      description: 'This is a description for card 2.',
      imageUrl: 'https://img.freepik.com/free-photo/extinct-triceratops-dinosaur-with-natural-habitat_23-2151646933.jpg?ga=GA1.1.1490474753.1726164427&semt=ais_hybrid'
    },
  ];

  return (
    <>
    <div className='main'>
      <h2>All the cards are here.</h2>
      <div className="cards">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    </div>
    </>
  );
}

export default App;

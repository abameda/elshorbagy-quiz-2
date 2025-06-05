import React, { useState, useEffect } from 'react';

const TypewriterBanner = ({ text, speed = 50, className = '', onComplete = () => {} }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, speed);
      
      return () => clearTimeout(timer);
    } else if (!isComplete) {
      setIsComplete(true);
      onComplete();
    }
  }, [currentIndex, text, speed, isComplete, onComplete]);

  return (
    <div className={`typewriter-banner ${className}`}>
      <p>{displayedText}</p>
      {!isComplete && <span className="cursor">|</span>}
    </div>
  );
};

export default TypewriterBanner;

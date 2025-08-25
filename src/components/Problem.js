import React, { useEffect, useRef, useState } from 'react';

const Problem = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTop = rect.top;
        const elementHeight = rect.height;
        
        // Calculate scroll progress based on element position in viewport
        // Start animation when element enters viewport (0.9 from bottom)
        // End animation when element reaches 0.25 from top
        const start = windowHeight * 0.8;
        const end = windowHeight * 0.35;
        
        const progress = Math.max(0, Math.min(1, (start - elementTop) / (start - end + elementHeight)));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Problem text with two distinct paragraphs
  const problemParagraphs = [
    "Creator marketing drives viral growth, but it's a grind — endless searching for the right creators, chasing content, and tracking performance.",
    "Koli flips the script. AI agents handle everything from creative direction and creator sourcing to outreach and campaign management, so you can launch faster, scale smarter, and see results — all without adding headcount."
  ];

  // Split each paragraph into words and combine with paragraph info
  const allWords = [];
  problemParagraphs.forEach((paragraph, paragraphIndex) => {
    const paragraphWords = paragraph.split(' ');
    paragraphWords.forEach((word, wordIndex) => {
      allWords.push({
        text: word,
        paragraphIndex,
        isLastWordInParagraph: wordIndex === paragraphWords.length - 1
      });
    });
  });

  // Define words to highlight with specific colors
  const highlightWords = {
    'Koli': '#79B939', // bright blue
    'growth': '#E635A3', // emerald green  
    'scale': '#10B981', // emerald green
    'viral': '#35A3E6', // cyan
    'AI': '#79B939', // blue
    'smarter': '#10B981', // emerald green
    'launch': '#06B6D4', // cyan
    'faster': '#3B82F6' // cyan
  };

  // Calculate opacity for each word based on scroll progress
  const getWordOpacity = (wordIndex) => {
    const totalWords = allWords.length;
    const start = wordIndex / totalWords;
    const end = start + (1 / totalWords);
    
    // Map scroll progress to word-specific opacity range
    if (scrollProgress < start) return 0.15;
    if (scrollProgress > end) return 1;
    
    const wordProgress = (scrollProgress - start) / (end - start);
    return 0.15 + (0.85 * wordProgress);
  };

  // Get color for a word (highlight color or default)
  const getWordColor = (word, opacity) => {
    const cleanWord = word.replace(/[.,!?;:]/, ''); // Remove punctuation for matching
    const highlightColor = highlightWords[cleanWord];
    
    if (highlightColor) {
      // Convert hex to RGB and apply opacity
      const hex = highlightColor.replace('#', '');
      const r = parseInt(hex.substr(0, 2), 16);
      const g = parseInt(hex.substr(2, 2), 16);
      const b = parseInt(hex.substr(4, 2), 16);
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }
    
    // Default gentle-black with opacity
    return `rgba(31, 41, 55, ${opacity})`;
  };

  return (
    <section ref={sectionRef} className="bg-white py-5 md: py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-xl leading-tight md:text-4xl md:leading-relaxed">
            {problemParagraphs.map((paragraph, paragraphIndex) => {
              // Calculate starting word index for this paragraph
              let startingWordIndex = 0;
              for (let i = 0; i < paragraphIndex; i++) {
                startingWordIndex += problemParagraphs[i].split(' ').length;
              }
              
              return (
                <p key={paragraphIndex} className={paragraphIndex > 0 ? "mt-8" : ""}>
                  {paragraph.split(' ').map((word, wordIndex) => {
                    const globalWordIndex = startingWordIndex + wordIndex;
                    const opacity = getWordOpacity(globalWordIndex);
                    return (
                      <span
                        key={`${paragraphIndex}-${wordIndex}`}
                        style={{
                          color: getWordColor(word, opacity),
                          transition: 'color 0.1s ease-out, opacity 0.1s ease-out',
                          marginRight: '0.25em',
                          display: 'inline-block',
                          fontWeight: highlightWords[word.replace(/[.,!?;:]/, '')] ? '600' : 'inherit'
                        }}
                      >
                        {word}
                      </span>
                    );
                  })}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
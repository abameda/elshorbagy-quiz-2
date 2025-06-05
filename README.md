# Computer Architecture MCQ Quiz

A professional, interactive quiz application for testing knowledge on Computer Architecture concepts. This application features:

- Chapter-based organization of questions
- Interactive quiz interface with immediate feedback
- Detailed explanations for each answer
- Dark/light mode toggle with preference saving
- Mobile-responsive design
- Score tracking and results summary

## Created By
Abdelhmeed Elshorbagy

## Contact
- WhatsApp: [+968 93637398](https://wa.me/96893637398)
- LinkedIn: [linkedin.com/in/abameda](https://www.linkedin.com/in/abameda)
- Instagram: [instagram.com/abamedax](https://www.instagram.com/abamedax/)
- Portfolio: [abameda.github.io/Elshorbagy](https://abameda.github.io/Elshorbagy/)

## Deployment Instructions

### Option 1: Deploy the Build Files (Recommended)
1. Extract the `computer-architecture-quiz-build.zip` file
2. Upload the entire `build` folder to your web hosting service
3. No additional configuration needed - the site is ready to use!

### Option 2: Deploy from Source Code
1. Extract the `computer-architecture-quiz-source-code.zip` file
2. Install Node.js if not already installed
3. Open a terminal in the extracted directory
4. Run `npm install` to install dependencies
5. Run `npm run build` to create a production build
6. Upload the generated `build` folder to your web hosting service

## Adding More Questions
To add more questions, modify the `src/data/questions.js` file following the existing format:

```javascript
'Chapter Name': [
  {
    question: "Your question text here?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    correct: 0, // Index of correct answer (0 for A, 1 for B, etc.)
    explanation: "Explanation of the correct answer"
  },
  // More questions...
]
```

## Technologies Used
- React
- Tailwind CSS
- JavaScript ES6+

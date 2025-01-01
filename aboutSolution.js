```javascript
// pages/aboutSolution.js
import React from 'react';

export default function About() {
  const imgSrc = '/image-not-found.jpg';
  const imgExists = !!document.querySelector(`img[src$='${imgSrc}']`);

  return (
    <div>
      <h1>About Page</h1>
      {imgExists && <img src={imgSrc} alt="About Page Image" />}
      {!imgExists && <p>Image not found</p>}
    </div>
  );
}
```
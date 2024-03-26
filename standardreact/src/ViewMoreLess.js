import { useState } from 'react';

export default function ViewMoreLess() {
  const items = ["1", "2", "3", "4", "5"];
  const [viewMore, setViewMore] = useState(false);
  const numberOfItems = viewMore ? items.length : 1;
  const content = "Understanding and fluent usage across a broad spectrum of technologies including (but not limited to): Vanilla JS, Typescript, NodeJS, React, Redux, SASS/CSS, WebGL and Responsive Web Development. Be a Creative Developer: In depth experience with React, React Spring, Framer Motion and complex UI animations, better if experienced with Tensorflow, ThreeJS."
  const noOfContent = viewMore ? content.length : 50;
  return (
    <>
      <div className="App">
        {items.slice(0, numberOfItems).map((item, index) => {
          return <p key={index}>{item}</p>
        })
        }
        <button onClick={() => setViewMore(!viewMore)}>{viewMore ? "View Less" : "View More"}</button>
      </div>
      <div className='App'>
          <p>{content.slice(0,noOfContent)}</p>
          <button onClick={() => setViewMore(!viewMore)}>{viewMore ? "View Less" : "View More"}</button>
      </div>
    </>
  );
}
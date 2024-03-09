import { useState } from 'react';

export default function HideShow (){
  const items = ["1", "2", "3", "4", "5"];
  const [showMore, setShowMore] = useState(false);
  const numberOfItems = showMore ? items.length : 1;
    return(
        <>
        <div className="App">
          {items.slice(0, numberOfItems).map((item, index)=>{
                        return <p key={index}>{item}</p>
                    })
          }
          <button onClick={() => setShowMore(!showMore)}>{showMore ? "View Less": "View More"}</button>
        </div>
        </>
    );
}
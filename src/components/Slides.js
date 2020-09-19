import React, { useState, useEffect } from 'react';

function Slides({ slides }) {

    const [slide, setSlide] = useState(slides[0]);
    let [slideIndex, setSlideIndex] = useState(0);

    const nextHandler = () => {
        slideIndex = slideIndex + 1;
        setSlideIndex(slideIndex);
        setSlide(slides[slideIndex]);
    }

    const prevHandler = () => {
        slideIndex = slideIndex - 1;
        setSlideIndex(slideIndex);
        setSlide(slides[slideIndex]);
    }

    const restartHandler = () => {
        slideIndex = 0;
        setSlide(slides[slideIndex]);
    }

    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" onClick={restartHandler} className="small outlined">Restart</button>
                <button data-testid="button-prev" disabled={slideIndex < 1}
                    onClick={prevHandler} className="small">Prev</button>
                <button data-testid="button-next" disabled={slideIndex === slides.length - 1}
                    onClick={() => {
                        nextHandler();
                        console.log(slideIndex, slides.length);
                    }} className="small">Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slide.title}</h1>
                <p data-testid="text">{slide.text}</p>
            </div>
        </div>
    )
}

export default Slides;

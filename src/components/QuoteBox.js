import React from 'react';
import "./QuoteBox.css";

const QuoteBox = (props) => {
    console.log(props);
    const handleNewQuote = () => {
        props.getRandomQuoteAndColor(props.state.changeColor);
    }

    const handleChangeClick = (e) => {
    let check = e.target.dataset.check;
    if(check === 'true'){
        props.handleChangeClick(true);
    }else {
        props.handleChangeClick(false);
    }
    }

    return (
        <div className="container" >
            <div class="btn-group btn-group-toggle" data-toggle="buttons">
                <label onClick={handleChangeClick} data-check='true' class="btn no-shadow btn-background active">
                    <input type="radio" name="options" id="option1"  autocomplete="off" checked />Change
                </label>
                <label onClick={handleChangeClick} data-check='false' class="btn btn-background">
                    <input  type="radio" name="options" id="option2"  autocomplete="off" /> Don't change background
                </label>
            </div>
            <div id="quote-box"  class="card">
            <div class="card-header">
                Quote
                <a class="btn btn-outline-primary" target="_blank" id="tweet-quote" href="https://www.twitter.com/intent/tweet">Tweet</a>
            </div>
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                <p id="text">{props.state.selectedQuote.quote}</p>
                <footer id="author" class="blockquote-footer">{props.state.selectedQuote.author}</footer>
                </blockquote>
                <button id="new-quote" onClick={handleNewQuote}  className="btn btn-background">New Quote</button>
            </div>
            </div>
        </div>
    )
}

export default QuoteBox;
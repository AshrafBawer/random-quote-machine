import React from 'react';
import QuoteBox from './QuoteBox';
import axios from 'axios';

//https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json

let colorsArray = [
    ['#7f7fd5, #86a8e7, #91eae4', '#7f7fd5'],
    ['#c31432, #240b36', '#c31432'],
    ['#f12711, #f5af19', '#f12711'],
    ['#659999, #f4791f', '#659999'],
    ['#654ea3, #eaafc8', '#654ea3'],
    ['#ff416c, #ff4b2b', '#ff416c'],
    ['#5a3f37, #2c7744', '#5a3f37'],
    ['#114357, #f29492', '#114357'],
    ['#403a3e, #be5869', '#403a3e'],
    ['#da4453, #89216b', '#da4453'],
    ['#808080, #3fada8', '#808080'],
    ['#000428, #004e92', '#000428']
]

class App extends React.Component {

    state = {selectedQuote: {}, quotes: [], changeColor: true}

    componentDidMount(){
        axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json').then(response => {
            this.setState({quotes:response.data.quotes });
            this.getRandomQuoteAndColor(this.state.changeColor);
        });

    }

    getRandomQuoteAndColor = (change) => {
        let selectedQuote = Math.floor(Math.random() * this.state.quotes.length);
        let randomColor = Math.floor(Math.random() * colorsArray.length);
        console.log(randomColor);
        this.setState({ selectedQuote: this.state.quotes[selectedQuote] });
        console.log(colorsArray[randomColor]);
        if(change){
            document.querySelector('.main').style.background = `linear-gradient(to right,${colorsArray[randomColor][0]})`;
            document.querySelector('.card').style.color = colorsArray[randomColor][1];
            let buttonList = document.querySelectorAll('.btn-background');
            for(let i=0; i< buttonList.length; i++ ){
                buttonList[i].style.background = colorsArray[randomColor][1];
            }

            document.querySelector('#tweet-quote').style.background = 'white';
            document.querySelector('#tweet-quote').style.color = colorsArray[randomColor][1];
            document.querySelector('#tweet-quote').style.borderColor = colorsArray[randomColor][1];
        }
            
        
    }

    handleChangeClick = (check) => {
        if(check === true){
            this.setState({changeColor: true});
        }else {
            this.setState({changeColor: false});
        }
        
        console.log(this.state);
    }

    render(){
        return(
            <div className="main">
                <QuoteBox state={this.state} handleChangeClick={this.handleChangeClick} getRandomQuoteAndColor={this.getRandomQuoteAndColor} />
            </div>
        )
    }
}

export default App


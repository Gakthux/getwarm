var React = global.React || require('react');
var classie = require('classie');
var Warm = require('warm-react');
var Man = require('./man.jsx');

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var Index = React.createClass({
    getInitialState: function() {
        return ({
            readme: '',
            quote: 'Be',
            modal: false
        });
    },
    downloadSK: function () {
        window.open('./starter-kit.zip', 'Download');
    },
    openGithub: function () {
        window.open('https://github.com/maestro-tech/warm');
    },
    changeQuote: function () {
        that = this;
        var quotes = ['Be', 'Get', 'Have', 'Become', 'Join', 'Feel', 'Steal', '42', 'I\'m', 'Oh my', 'Love', 'Like'];
        setTimeout(function(){
            that.setState({
                quote: quotes[getRandomIntInclusive(0, quotes.length - 1)]
            });
        },5000);
    },
    render: function() {
        var that = this;
        this.changeQuote();
        return (
            <div id="main-container" className="main-container">
                <div className="download-component">
                    <div className="sub-container title">
                        <div className="download-container">
                            <div className="desc-container">
                                <h1><i>W</i>ARM</h1>
                                <h3>- A new and simple way to create web-applications</h3>
                                <h3>using react Js -</h3>
                            </div>
                        </div>
                    </div>
                    <div className="npm-container">
                        <p>$ npm install warm --save</p>
                    </div>
                    <div className="sub-container download">
                        <div className="download-container">
                            <div className="button-container">
                                <div className="front">
                                    <h3 className="use">Download</h3>
                                    <button onClick={this.downloadSK} className="download-button"><i>{that.state.quote} WARM</i></button>
                                </div>
                                <div className="back down">
                                    <img src="http://i.imgur.com/duox2qy.png" alt="Down" height="50" width="50"/>
                                </div>
                            </div>
                            <div className="button-container">
                                <div className="front">
                                    <button onClick={this.openGithub} className="git-button"><i>Github</i></button>
                                    <h3 className="contribute">Contribute</h3>
                                </div>
                                <div className="back up">
                                    <img src="http://i.imgur.com/BCniysX.png" alt="Up" height="50" width="50"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="about" className="about-component">
                    <div className="about-container">
                        <img src="../../img/tech.png" alt="Technologies" width="700"/>
                        <p>
                            <br></br>
                            WARM is a package containing many ReactJs modules comparable to bootstrap : you can use any of this module separately to create your own WebApp.<br></br>
                            By clicking the download button you obtain the 'starter-kit' witch gives you acess to a simple environment with a gulp and node modules.<br></br><br></br>
                            You can aleready launch the demo  by typing - make warm - in your term at rhe root of the starter kit.<br></br>
                            Or you can directly modify the code to explore all the possibilities by yourself helped of course by the documentation on your left ! Enjoy :)
                        </p>
                    </div>
                </div>
                <Man />
            </div>
        );
    }
});

module.exports = Index;

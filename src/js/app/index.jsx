var React = global.React || require('react');
var classie = require('classie');
var Warm = require('warm-react');
var Man = require('./man.jsx');
var TimerMixin = require('react-timer-mixin');

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var Index = React.createClass({
    mixins: [TimerMixin],
    getInitialState: function() {
        return ({
            readme: '',
            quote: 'Be',
            modal: false
        });
    },
    componentDidMount: function () {
        this.changeQuote();
    },
    downloadSK: function () {
        window.open('https://github.com/maestro-tech/warm/archive/master.zip', 'download');
    },
    openGithub: function () {
        window.open('https://github.com/maestro-tech/warm');
    },
    changeQuote: function () {
        that = this;
        var quotes = ['Be', 'Get', 'Join', 'Feel', 'Fork'];
        this.setTimeout(function(){
            this.setState({
                quote: quotes[getRandomIntInclusive(0, quotes.length - 1)]
            });
            this.changeQuote();
        }.bind(this),5000);
    },
    render: function() {
        var that = this;
        return (
            <div id="main-container" className="main-container">
                <div className="download-component">
                    <div className="sub-container title">
                        <div className="download-container">
                            <div className="desc-container">
                                <h1><i>W</i>ARM</h1>
                                <h3>- Useful components for web-applications using ReactJS -</h3>
                            </div>
                        </div>
                    </div>
                    <div className="npm-container">
                        <p>$ npm install warm-react --save</p>
                    </div>
                    <div className="sub-container download">
                        <div className="download-container">
                            <div className="button-container">
                                <div className="front">
                                    <button onClick={this.openGithub} className="git-button"><i>Github</i></button>
                                    <h3 className="contribute">Contribute</h3>
                                </div>
                                <div className="back up">
                                    <img src="http://i.imgur.com/BCniysX.png" alt="Up" height="50" width="50"/>
                                </div>
                            </div>
                            <div className="button-container">
                                <div className="front">
                                    <h3 className="use">Download</h3>
                                    <button onClick={this.downloadSK} className="download-button"><i>{that.state.quote} WARM</i></button>
                                </div>
                                <div className="back down">
                                    <img src="http://i.imgur.com/duox2qy.png" alt="Down" height="50" width="50"/>
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
                        WARM is a library containing ReactJS components which can be used to create your own WebApp.<br></br>
                        Feel free to clone the Github repository and explore the code and modify it to suit your needs.
                        </p>
                    </div>
                </div>
                <Man />
            </div>
        );
    }
});

module.exports = Index;

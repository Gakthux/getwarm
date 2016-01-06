var React = global.React || require('react');
var $ = require('jquery');
var Index = require('./index.jsx');
var Warm = require('warm-react');
var classie = require('classie');

var SimplePageScrollMixin = {
    componentDidMount: function() {
        var main = document.getElementById('main-container');
        main.addEventListener('scroll', this.onScroll, false);
    },
    componentWillUnmount: function() {
        window.removeEventListener('scroll', this.onScroll, false);
    }
};

var WarmApp = React.createClass({
    mixins: [SimplePageScrollMixin],
    getInitialState: function() {
        return ({
            listing: [],
            quote: 'Be',
            page: {name :'Index', path : null},
            path: {target : Warm, hist : 'Warm'}
        });
    },
    onScroll: function() {
        var sands = document.getElementsByClassName('sand-container');
        var main = document.getElementById('main-container');
        Object.keys(sands).map(function (key) {
            var elems = document.getElementsByClassName('sub-elem');
            var sand = sands[key];
            if (main.scrollTop > sand.offsetParent.offsetTop - 100 && main.scrollTop < sand.offsetParent.offsetTop + 400) {
                Object.keys(elems).map(function (elemKey) {
                    if (elemKey == key) {
                        $(elems[elemKey]).addClass("targeted");
                    }
                })
            } else {
                Object.keys(elems).map(function (elemKey) {
                    if (elemKey == key) {
                        $(elems[elemKey]).removeClass("targeted");
                    }
                })
            }
        })
    },
    goTop: function () {
        var main = document.getElementById('main-container');
        main.scrollTop = document.documentElement.scrollTop = 0;
    },
    handleClick: function (e) {
        var main = document.getElementById('main-container');
        var elems = document.getElementsByClassName('sub-elem');
        Object.keys(elems).map(function (elemKey) {
            if (e.target.parentElement == elems[elemKey]) {
                var sands = document.getElementsByClassName('sand-container');
                Object.keys(sands).map(function (key) {
                    if (elemKey == key) {
                        main.scrollTop = sands[key].offsetParent.offsetTop - 100;
                    }
                })
            }
        })
        var targetedList = document.getElementsByClassName('targeted');
        for (var j = 0; j < targetedList.length; j++) {
            classie.remove(targetedList[j], 'targeted');
        }
        classie.add(e.target.parentElement, 'targeted');
    },
    subGen: function (menuName) {
        var i = 0;
        var that = this;
        return (
            <div>
                <ul>
                    {
                        Object.keys(Warm[menuName]).map (function (subName) {
                            var temp = Warm[menuName];
                            var subVal = temp[subName];
                            if (subName != 'readme'){
                                return (<li className='sub-elem' key={"sub"+i++}><a onClick={that.handleClick}>{subName.charAt(0).toUpperCase() + subName.substring(1).toLowerCase()}</a></li>);
                            }
                        })
                    }
                </ul>
            </div>
        );
    },
    render: function() {
        var i = 0;
        return (
            <div className="view-container">
                <div className="left-menu">
                    <ul>
                        <li className='menu-title' key={i++}><a onClick={this.goTop}>WARM</a></li>
                        {
                            Object.keys(Warm).map (function (menuName) {
                                var menuVal = Warm[menuName];
                                if (menuName != 'readme'){
                                    if (menuVal.constructor == Object) {
                                        var sub = this.subGen.bind(this, menuName);
                                        return (
                                            <div key={"menu-div"+i++}>
                                                <li className='menu-elem' key={"menu"+i++}><a onClick={this.handleClick}>{menuName.charAt(0).toUpperCase() + menuName.substring(1).toLowerCase()}</a></li>
                                                {sub()}
                                            </div>
                                        );
                                    }
                                }
                            }, this)
                        }
                    </ul>
                </div>
                <Index />
            </div>
        );
    }
});

module.exports = WarmApp;

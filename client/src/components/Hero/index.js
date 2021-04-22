import React from 'react';
import './hero.css';

function Hero() {
    const TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        const i = this.loopNum % this.toRotate.length;
        const fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        const that = this;
        let delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        const elements = document.getElementsByClassName('typewrite');
        for (let i=0; i<elements.length; i++) {
            const toRotate = elements[i].getAttribute('data-type');
            const period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        
        let css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #43FFF4}";
        document.body.appendChild(css);
    };

    return (
        <section className="hero">
            <h1>
                <a href="" className="typewrite" data-period="2000" data-type='[ "Software Engineer", "Full Stack Developer"]'>
                    <span className="wrap"></span>
                </a>
            </h1>
            <p className="quote">"<em>Today I will do what others won't, so tomorrow I can accomplish what others can't.</em>" - Jerry Rice</p>

            <a href="#contactMe" className="button">Contact Me</a>
        </section>
    );
}

export default Hero;
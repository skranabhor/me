import React, { Component } from 'react'
export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Us</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I am a Cell Biology major at the University of California at Davis and I have a huge love for computer science, espcially at its intersection with biology.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">What do I love doing?</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Coding </h3>
                    <p>I have experience with Python and more specifically numpy, Pandas, matplotlib and other Python libraries and I always love learning new languages!</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-pencil" />
                </span>
                <div className="desc">
                    <h3>Cellular Biology</h3>
                    <p>After my high school biology and chemistry classes, I fell in love with biology and chemistry. I hope to work in this field, using techniques from both biology as well as computer science and statistics.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-heart" />
                </span>
                <div className="desc">
                    <h3>Tutoring and Volunteer Work</h3>
                    <p>Ever since high school, I have loved tutoring and teaching people difficult topics in Biology, Chemistry, Statistics, and French. I love answering questions about those subjects or anything general. Feel free to hit me up!</p>
                </div>
                </div>
            </div>

            </div>
        </div>
        </section>
      </div>
    )
  }
}

import React from 'react';
import './about.css';
import Header from '../../components/Header';
import StoryImage from '../../images/about1.jpg';
import VisionImage from '../../images/about2.jpg';
import MissionImage from '../../images/about3.jpg';
import HeaderImage from '../../images/header_bg_1.jpg';

const About = () => {
    return (
        <>
            <Header title="About Us" image={HeaderImage}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos consectetur sint placeat nam, quo reprehenderit eligendi soluta molestias quae a.
            </Header>
            <section className="about_story">
                <div className="container about_story-container">
                    <div className="about_section-image">
                        <img src={StoryImage} alt="Story Img" />
                    </div>
                    <div className="about_section-content">
                        <h1>Our Story</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores figit ad nequo quo, quas eius quam at sunt quod in atque nulla minus nam impedit tempore comsectetur esse quibusdam voluptatum optio nemo! Aperiam veritatis delectus commodi. Minima tempora voluptates natus.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipicising elit. Laboriosam harum corrupti quas voluptate, perferendis consectetur veritatis veniam, ratione, distinctio iste dignissimos alias ipsum minima consequuntur?</p>
                        <p>Perferendis consectetur verutatis veniam, ratione, distinctio iste dignissimos alias ipsum minima consequuntur?</p>
                    </div>
                </div>
            </section>

            <section className="about_vision">
                <div className="container about_vision-container">
                    <div className="about_section-content">
                        <h1>Our Vision</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipicising elit. Laboriosam harum corrupti quas voluptate, perferendis consectetur veritatis veniam, ratione, distinctio iste dignissimos alias ipsum minima consequuntur?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores figit ad nequo quo, quas eius quam at sunt quod in atque nulla minus nam impedit tempore comsectetur esse quibusdam voluptatum optio nemo! Aperiam veritatis delectus commodi. Minima tempora voluptates natus.</p>
                    </div>
                    <div className="about_section-image">
                        <img src={VisionImage} alt="Vision Img" />
                    </div>
                </div>
            </section>

            <section className="about_mission">
                <div className="container about_mission-container">
                    <div className="about_section-image">
                        <img src={MissionImage} alt="Mission Img" />
                    </div>
                    <div className="about_section-content">
                        <h1>Our Mission</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores figit ad nequo quo, quas eius quam at sunt quod in atque nulla minus nam impedit tempore comsectetur esse quibusdam voluptatum optio nemo! Aperiam veritatis delectus commodi. Minima tempora voluptates natus.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipicising elit. Laboriosam harum corrupti quas voluptate, perferendis consectetur veritatis veniam, ratione, distinctio iste dignissimos alias ipsum minima consequuntur?</p>
                        <p>Perferendis consectetur verutatis veniam, ratione, distinctio iste dignissimos alias ipsum minima consequuntur?</p>
                    </div>
                </div>
            </section>
        </>
)
}

export default About;
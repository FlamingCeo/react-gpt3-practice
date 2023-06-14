import React from "react";
import "./whatGPT3.css";
import Feature from "../../components/feature/Feature";
function WhatGPT3() {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="I am an AI language model called GPT-3, created by OpenAI. I have been trained on a vast amount of text data to generate human-like responses and provide information on various topics. My purpose is to assist users in engaging conversations and providing helpful insights."
        />
      </div>

      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore the Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
          <Feature
            title="Chatbots"
            text="I can be used to create chatbots that can engage in conversations with users. My conversational abilities enable me to understand and respond to a wide range of topics, making interactions more engaging and interactive."
          />

          <Feature
            title="Knowledgebase"
            text="I possess a vast knowledgebase covering various domains and subjects. Users can ask questions and seek information on topics such as science, history, technology, and more. I strive to provide accurate and detailed responses."
          />
          <Feature
            title="Education"
            text="As an educational resource, I can assist students and learners by answering questions, explaining concepts, and providing guidance on different subjects. I aim to enhance the learning experience and promote knowledge acquisition."
          />
      </div>
    </div>
  );
}

export default WhatGPT3;
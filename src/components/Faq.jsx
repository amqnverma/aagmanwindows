import React, { useState } from "react";
import "./Faq.css";
import { FaQuoteLeft } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const Faq = () => {
  const questions = [
    {
      question: "What types of windows do you offer?",
      answer:
        "We offer a wide range of window types including slider two track, slider three track, casement windows, bay windows, and custom designs. Each type is available in various sizes and finishes to suit your specific needs.",
    },
    {
      question: "What is your warranty policy?",
      answer:
        "Our windows come with a comprehensive warranty that covers materials and workmanship for up to 20 years. This includes coverage for frame, glass, and hardware components.",
    },
    {
      question: "Do you offer installation services?",
      answer:
        "Yes, we provide professional installation services with all our window purchases. Our team of certified installers ensures proper fitting and sealing for optimal performance.",
    },
    {
      question: "How energy efficient are your windows?",
      answer:
        "Our windows are designed with energy efficiency in mind, featuring double or triple glazing options, low-E coatings, and thermal breaks. Many of our products exceed energy efficiency standards.",
    },
    {
      question: "Do you offer installation services?",
      answer:
        "Yes, we provide professional installation services with all our window purchases. Our team of certified installers ensures proper fitting and sealing for optimal performance.",
    },
  ];
  return (
    <>
      <div className="faq-container">
        <div className="faq-text">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about our windows and services</p>
        </div>

        <div className="faq-card">
          {questions.map((faq) => (
            <Accordion type="single" collapsible className="faq-card">
              <AccordionItem value="item-1">
                <AccordionTrigger className="faq-question">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </>
  );
};

export default Faq;

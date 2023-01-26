import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { questions } from "./Data";

const FormInput = ({ onAdd, notify }) => {
  const [questionInput, setQuestionInput] = useState("");
  const [answerInput, setAnswerInput] = useState("");

  const dataPushing = () => {
    if (questionInput === "" || answerInput === "") {
      notify("يرجي إكمال البيانات", "Error");
      return;
    }
    questions.push({ id: Math.random(), q: questionInput, a: answerInput });
    setQuestionInput("");
    setAnswerInput("");
    onAdd();
  };
  return (
    <Row className="my-3">
      <Col sm="5">
        <Form.Control
          value={questionInput}
          onChange={(e) => setQuestionInput(e.target.value)}
          type="text"
          placeholder="أدخل السؤال"
          className="w-100"
        />
      </Col>
      <Col sm="5">
        <Form.Control
          value={answerInput}
          onChange={(e) => setAnswerInput(e.target.value)}
          type="text"
          placeholder="أدخل الإجابه"
          className="w-100"
        />
      </Col>
      <Col sm="2">
        <button
          onClick={dataPushing}
          className="btn-color w-100"
          variant="primary"
          type="submit"
        >
          إضافه
        </button>
      </Col>
    </Row>
  );
};

export default FormInput;

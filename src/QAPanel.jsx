import React from "react";
import { Accordion, Row } from "react-bootstrap";
import { questions } from "./Data";

const QAPanel = ({ onDelete }) => {
  const localStorageData = JSON.parse(localStorage.getItem("items"));

  const deleteOnClick = (recordId) => {
    if (localStorage.getItem("items") != null) {
      const indx = questions.findIndex((el) => el.id === recordId);
      questions.splice(indx, 1);
      onDelete(questions);
    }
  };

  return (
    <Row>
      <Accordion>
        {localStorage.getItem("items") != null ? (
          localStorageData.map((item, index) => {
            return (
              <Accordion.Item key={index} eventKey={item.id}>
                <Accordion.Header>
                  <div className="m-auto"> {item.q} </div>
                </Accordion.Header>
                <Accordion.Body className="d-flex justify-content-xl-between">
                  <div className="p-auto >"> {item.a} </div>
                  <button
                    onClick={() => deleteOnClick(item.id)}
                    className="btn-color"
                  >
                    مسح السؤال
                  </button>
                </Accordion.Body>
              </Accordion.Item>
            );
          })
        ) : (
          <h2 className="fs-4 text-center p-5"> لا يوجد أسئله الان </h2>
        )}
      </Accordion>
    </Row>
  );
};

export default QAPanel;

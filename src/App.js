import { Container, Row, Col } from "react-bootstrap";
import FormInput from "./FormInput";
import QAPanel from "./QAPanel";
import { questions } from "./Data";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [data, setData] = useState(questions);

  const addData = () => {
    localStorage.setItem("items", JSON.stringify([...questions]));
    setData([...questions]);
    notify("تم الإضافة بنجاح", "Success");
  };

  const deleteRecord = (item) => {
    localStorage.setItem("items", JSON.stringify([...item]));
    setData([...item]);
    if (item.length <= 0) {
      deleteAllData();
    }
    notify("تم الحذف بنجاح", "Error");
  };

  const deleteAllData = () => {
    questions.splice(0, questions.length);
    localStorage.removeItem("items");
    setData([]);
    notify("تم الكل بنجاح", "Success");
  };

  const notify = (message, type) => {
    if (type === "Error") {
      toast.error(message, type);
    } else if (type === "Success") toast.success(message, type);
  };
  return (
    <div className="font text-center color-body">
      <Container className="p-5">
        <Row className="justfiy-content-center">
          <Col sm="4">
            {" "}
            <div className="fs-3 text-center py-2"> تطبيق سؤال وجواب </div>{" "}
          </Col>
          <Col sm="8">
            <FormInput onAdd={addData} notify={notify}/>
            <QAPanel data={questions} onDelete={deleteRecord} />
            {localStorage.getItem("items") != null ? (
              <button onClick={deleteAllData} className="btn-color w-100 my-5">
                مسح الكل
              </button>
            ) : null}
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </div>
  );
}

export default App;

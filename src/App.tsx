import React from "react";
import "./App.css";
import { Button, Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
function App(): JSX.Element {
    return (
        <div className="App">
            <Container>
                <Row>
                    <Col>
                        <header
                            className="App-header"
                            style={{ backgroundColor: "GoldenRod" }}
                        >
                            UD CISC275 with React Hooks and TypeScript Zahra
                            Temori
                        </header>
                        <p>
                            Edit <code>src/App.tsx</code> and save. This page
                            will automatically reload. ok
                        </p>
                        <h1>This is a header</h1>
                        <span> Hello World</span>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img
                            src="https://static.toiimg.com/thumb/msid-99686102,width-1280,height-720,resizemode-4/99686102.jpg"
                            alt="A picture of the world"
                            width={300}
                            height={300}
                        />
                        <ul>
                            <li>Sean Johnson</li>
                            <li>Olivia Okarney</li>
                            <li>Zahra Temori</li>
                        </ul>
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: 200,
                                height: 100,
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: 200,
                                height: 100,
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;

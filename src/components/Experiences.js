import React from "react";
import { Toast, Button, Col, Row, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "../styles/Experiences.css";

function Experiences() {

    const { t } = useTranslation();

    const [show1, setShow1] = React.useState(false);
    const [show2, setShow2] = React.useState(false);

    const toggleShow1 = () => setShow1(!show1);
    const toggleShow2 = () => setShow2(!show2);

    return (
        <div className="Experiences" id="experiences">
            <div className="Experiences-container">
                <h2>
                    {t("cv.experiences.title")}
                </h2>
                <hr />
                <div className="Experiences-description">
                    <Container>
                        <Row className="text-center">
                            <Col className="Experiences-col">
                                <Button variant="button" onClick={toggleShow1} className="Experiences-button">
                                    <img className="Experiences-img-preview" src="assets/epitech_logo.png" alt="epitech_logo" />
                                </Button>
                                <Toast show={show1} onClose={toggleShow1} className="Experiences-toast">
                                    <Toast.Header>
                                        <strong className="me-auto">{t("cv.experiences.jobs.job-1.company")}</strong>
                                        <small>{t("cv.experiences.jobs.job-1.type")}</small>
                                    </Toast.Header>
                                    <Toast.Body>
                                        <p className="Experiences-toast-description">{t("cv.experiences.jobs.job-1.description")}</p>
                                    </Toast.Body>
                                    <small>{t("cv.experiences.jobs.job-1.date")}</small>
                                </Toast>
                            </Col>
                            <Col className="">
                                <Button variant="button" onClick={toggleShow2} className="Experiences-button">
                                    <img className="Experiences-img-preview" src="assets/linagora_logo.png" alt="linagora_logo" />
                                </Button>
                                <Toast show={show2} onClose={toggleShow2} className="Experiences-toast">
                                    <Toast.Header>
                                        <strong className="me-auto">{t("cv.experiences.jobs.job-2.company")}</strong>
                                        <small>{t("cv.experiences.jobs.job-2.type")}</small>
                                    </Toast.Header>
                                    <Toast.Body>
                                        <p className="Experiences-toast-description">{t("cv.experiences.jobs.job-2.description")}</p>
                                        <br />
                                        <p className="Experiences-toast-description">{t("cv.experiences.jobs.job-2.description-2")}</p>
                                    </Toast.Body>
                                    <small>{t("cv.experiences.jobs.job-2.date")}</small>
                                </Toast>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
}

export default Experiences;
import React from "react";
import { Card, useAccordionButton, Accordion } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "../styles/Experiences.css";

function Experiences() {

    const { t } = useTranslation();

    function CustomButton({ children, eventKey }) {
        const decoratedOnClick = useAccordionButton(eventKey);

        return (
            <button
                type="button"
                style={{
                    backgroundColor: "transparent",
                    border: "none",
                    color: "white",
                    cursor: "pointer",
                    outline: "none",
                    padding: "0",
                    margin: "0",
                }}
                onClick={decoratedOnClick}
            >
                {children}
            </button>
        );
    }

    return (
        <div className="Experiences" id="experiences">
            <h2>
                {t("cv.experiences.title")}
            </h2>
            <hr />
            <div className="Experiences-description">
                <Accordion defaultActiveKey="0">
                    <Card className="Experiences-card">
                        <Card.Header className="Experiences-card-header">
                            <CustomButton eventKey="0">
                                <Card.Img className="Experiences-card-img-preview" variant="top" src="assets/epitech_logo.png" alt="epitech_logo.png" />
                            </CustomButton>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Card.Title className="Experiences-card-title">
                                    {t("cv.experiences.jobs.job-1.company")}
                                </Card.Title>
                                <Card.Subtitle className="Experiences-card-subtitle">
                                    {t("cv.experiences.jobs.job-1.type")}
                                </Card.Subtitle>
                                <Card.Text className="Experiences-card-text">
                                    {t("cv.experiences.jobs.job-1.description")}
                                </Card.Text>
                                <Card.Footer className="Experiences-card-footer">
                                    {t("cv.experiences.jobs.job-1.date")}
                                </Card.Footer>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className="Experiences-card">
                        <Card.Header className="Experiences-card-header">
                            <CustomButton eventKey="1">
                                <Card.Img className="Experiences-card-img-preview" variant="top" src="assets/linagora_logo.png" alt="linagora_logo.png" />
                            </CustomButton>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <Card.Title className="Experiences-card-title">
                                    {t("cv.experiences.jobs.job-2.company")}
                                </Card.Title>
                                <Card.Subtitle className="Experiences-card-subtitle">
                                    {t("cv.experiences.jobs.job-2.type")}
                                </Card.Subtitle>
                                <Card.Text className="Experiences-card-text">
                                    {t("cv.experiences.jobs.job-2.description")}
                                    <br />
                                    <br />
                                    {t("cv.experiences.jobs.job-2.description-2")}
                                </Card.Text>
                                <Card.Footer className="Experiences-card-footer">
                                    {t("cv.experiences.jobs.job-2.date")}
                                </Card.Footer>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        </div>
    );
}

export default Experiences;
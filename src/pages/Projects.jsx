import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particls";
import RestApi from "../assets/projects/Screenshot (485).png";
import Library from "../assets/projects/Screenshot (483).png";
import Shoping from "../assets/projects/Screenshot (484).png";
import GmailClone from "../assets/projects/Screenshot (478).png";
import DashBoard from "../assets/projects/Screenshot (486).png";
import ToTo from "../assets/projects/Screenshot (482).png"

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GmailClone}
              isBlog={false}
              title="Gmail Clone"
              description="This project aims to replicate the basic functionalities of Gmail, providing a platform for users to send, receive, organize, and manage emails."
              ghLink="https://github.com/Balajiruse/Gmail-Clone-FrontEnd.git"
              demoLink="https://celebrated-biscuit-598c6e.netlify.app/signin"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Library}
              isBlog={false}
              title="Library Dashboard"
              description="My Library Dashboard is a web application built using React.js, Redux, and React Router"
              ghLink="https://github.com/Balajiruse/Formik.git"
              demoLink="https://teal-churros-191ac5.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ToTo}
              isBlog={false}
              title="Task Manager"
              description="Like Todo list you can sign in with this and use it anywhere"
              ghLink="https://github.com/Balajiruse/Todo.git"
              demoLink="https://funny-granita-bec956.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Shoping}
              isBlog={false}
              title="Shoping Cart"
              description="Shopping Website in which we can add the product to cart"
              ghLink="https://github.com/Balajiruse/ContextApi.git"
              demoLink="https://playful-narwhal-c8d89f.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DashBoard}
              isBlog={false}
              title="My Dashboard"
              description="Dashboard in which we can Show the list of people it contains Full Crud Functionality"
            ghLink="https://github.com/Balajiruse/React-Axios.git"
            demoLink="https://sparkly-semolina-15b3b3.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RestApi}
              isBlog={false}
              title="Restcountries and Weather App "
              description="his project is a simple web application that utilizes the Fetch API to retrieve information about countries from the Restcountries API and weather data from a weather API."
              ghLink="https://github.com/Balajiruse/Fetch_api.git"
              demoLink="https://super-flan-c8a88a.netlify.app/"
            />
          </Col>

          

          
        </Row>
      </Container>
    </Container>
  )
}

export default Projects

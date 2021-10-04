import React from 'react';
import Helmet from '../components/Helmet';
import { ImGithub } from 'react-icons/im';

const About = () => {
    const about = {
        textAlign: "center"
    }
    const title = {
        color: "#4267b2",
        marginBottom: "25px"
    };

    const pTag = {
        fontSize: "25px",
    }

    return (
        <Helmet title="About">
            <div style={about} className="about">
                <h1 style={title} >Website 2Shoes được xây dựng nhằm phục vụ cho môn học Thương Mại Điện Tử tại Đại Học UEH</h1>
                <p style={pTag} >
                    <ImGithub /> <a href={"https://github.com/NuxTijNhaX/ecommerce-ueh"} > Github</a>
                </p>
            </div>
        </Helmet>
    )
}

export default About;

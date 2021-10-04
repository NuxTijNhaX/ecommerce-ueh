import React from 'react';
import Helmet from '../components/Helmet';
import { Link } from 'react-router-dom';

const Warranty = () => {
    const warranty = {
        textAlign: "center"
    };

    const title = {
        color: "#4267b2",
        marginBottom: "25px"
    };

    const button = {
        color: "white",
        backgroundColor: "#4267b2",
        padding: "10px 25px",
        cursor: "pointer",
        fontSize: "1.5rem",
        fontWeight: "600",
        border: "none"
    };

    return (
        <Helmet title="Bảo hành">
            <div style={warranty} >
                <h1 style={title} >Vui Lòng Ủng Hộ 2Shoes Để Được Bảo Hành</h1>
                <Link to={"/catalog"}>
                    <button style={button} >Mua Hàng</button>
                </Link>
            </div>
        </Helmet>
    )
}

export default Warranty;

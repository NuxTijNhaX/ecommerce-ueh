import React from 'react'
import { Link } from 'react-router-dom'
import Grid from './Grid'
import logo from '../assets/images/Logo-2.png'
import { ImLocation2, ImPhone, ImFacebook2 } from 'react-icons/im';
import { SiGmail } from 'react-icons/si';

const footerAboutLinks = [
    {
        display: "Giới thiệu",
        path: "/about"
    },
    {
        display: "Tuyển dụng",
        path: "/about"
    },
    {
        display: "Tin tức",
        path: "/about"
    },
    {
        display: "Hệ thống cửa hàng",
        path: "/about"
    }
]

const footerCustomerLinks = [
    {
        display: "Chính sách đổi trả",
        path: "/about"
    },
    {
        display: "Chính sách bảo hành",
        path: "/about"
    },
    {
        display: "Chính sách hoàn tiền",
        path: "/about"
    }
]
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={10}
                >
                    <div>
                        <div className="footer__title">
                            Thông Tin Liên Hệ
                        </div>
                        <div className="footer__content">
                            <p>
                                <ImLocation2 className="footer__icon"/> 59C Nguyễn Đình Chiểu, Phường 6, Quận 3, TP. Hồ Chí Minh
                            </p>
                            <p>
                                <ImPhone className="footer__icon"/> 0368686868
                            </p>
                            <p>
                                <ImFacebook2 className="footer__icon"/> 2Shoes Official
                            </p>
                            <p>
                                <SiGmail className="footer__icon"/> contact2Shoes@gmail.com
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            Về 2Shoes
                        </div>
                        <div className="footer__content">
                            {
                                footerAboutLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            Chăm sóc khách hàng
                        </div>
                        <div className="footer__content">
                            {
                                footerCustomerLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div className="footer__about">
                        <p>
                            <Link to="/">
                                <img src={logo} className="footer__logo" alt="" />
                            </Link>
                        </p>
                        <p>
                            Hướng đến mục tiêu mang lại niềm vui cho những người có sở thích, đam mê giày.
                        </p>
                    </div>
                </Grid>
            </div>
        </footer>
    )
}

export default Footer

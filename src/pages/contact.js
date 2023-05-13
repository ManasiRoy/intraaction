import React from 'react';
import "../scss/styles.scss";
import Layout from '../pages/Layout';
// import { StaticImage } from "gatsby-plugin-image";

const contact = () => {
    return (
        <Layout>
            <div className='contactwrap'>
                <section className='contact'>
                    {/* <StaticImage
                        src="../images/contact.jpg"
                        alt='contactbg'
                        className='w-100'
                    /> */}
                </section>
                <div className='mainSpacing'>
                    <div className='container'>
                        <div className='row justify-content-center align-items-center'>
                            <div className='col-lg-10'>
                                <div className='email'><i className="bi bi-envelope"></i><span>Email: </span> <a href="mailto:rumi.deb1708@gmail.com" >dummy.website@gmail.com</a></div>
                                <div className='phone'><i className="bi bi-headphones"></i><span>Contact: </span> <a href="tel:+919007834847">1234567890 </a></div>
                                <div className='linkedin'><i className="bi bi-linkedin"></i><span>Linkedin: </span> <a href='https://www.linkedin.com/' target='_blank' rel="noreferrer">linkedin.com</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
};

export default contact;
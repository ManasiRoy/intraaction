import React from 'react'

const Footer = () => {
    return (
        <footer className='footer mt-auto py-3 bg-dark'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8'>
                        <div className='d-flex'>
                            <div className='email me-md-2'><i className="bi bi-envelope"></i> <a href="mailto:sales@intraaction.com">sales@intraaction.com</a></div>
                            <div className='phone me-md-2'><i className="bi bi-headphones"></i><a href="tel:+7085476644">708.547.6644 </a></div>
                        </div>
                    </div>
                    <div className='col-md-4 align-self-center'>
                        <p className='text-white mb-0 text-end'>&copy;copyright 2023 contact</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
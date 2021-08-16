import React from 'react';

const Common = (props) => {

    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>{props.name} <br /><strong className="brand-name">Nirav</strong></h1>
                                    <h2 className="my-3">We are the team of telented for making Web</h2>
                                    <div className="mt-3">
                                        <a href={props.visit} className="btn btn-outline-primary rounded-pill btn-lg" role="button" aria-pressed="true">{props.btnname}</a>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img mt-5">
                                    <img src={props.imgsrc} className="img-fluid animated rounded" alt="Common" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}

export default Common;



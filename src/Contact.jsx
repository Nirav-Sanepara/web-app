import React from 'react';
import { useState } from 'react';
const Contact = () => {

    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        msg: "",
    })

    const InputEvent = (event) => {
        const { name, value } = event.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            };
        });
    }

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My name is ${data.fullname}. My phone no. is ${data.phone}. My email is ${data.email}.My message is ${data.msg}.`);
    }

    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="form-group">
                                <label >Fullname:</label>
                                <input type="text" className="form-control mb-2"
                                    name="fullname"
                                    value={data.fullname}
                                    onChange={InputEvent}
                                    placeholder="Enter your fullname" />
                            </div>
                            <div className="form-group">
                                <label >Phone no:</label>
                                <input type="number" className="form-control mb-2"
                                    name="phone"
                                    value={data.phone}
                                    onChange={InputEvent}
                                    placeholder="Enter your Phone number" />
                            </div>

                            <div className="form-group">
                                <label >Email address:</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    name="email"
                                    value={data.email}
                                    onChange={InputEvent}
                                    placeholder="Enter email" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label >Message:</label>
                                <input type="areatext" className="form-control mb-2"
                                    name="msg"
                                    value={data.msg}
                                    onChange={InputEvent}
                                    placeholder="Enter anything" />
                            </div>
                            <button type="submit" onClick={formSubmit} className="btn btn-outline-primary ">Submit form</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Contact;
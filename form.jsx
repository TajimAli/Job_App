// src/components/Form.js

import React, { useState, useEffect } from 'react';

const Form = ({ addOrUpdateData, currentData, clearCurrent }) => {
    const [formData, setFormData] = useState({
        fname: "", lname: "", email: "", number: "", gender: "", dob: "", country: "", state: "", city: "", coures: "",
        exHtmlcss: "", exJavaScript: "", exReact: "", exOther: "", companyn: "", resume: "", about: "",
    });

    useEffect(() => {
        if (currentData) {
            setFormData(currentData);
        }
    }, [currentData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addOrUpdateData(formData);
        setFormData({
            fname: "", lname: "", email: "", number: "", gender: "", dob: "", country: "", state: "", city: "", coures: "",
            exHtmlcss: "", exJavaScript: "", exReact: "", exOther: "", companyn: "", resume: "", about: "",
        });
        clearCurrent();
    };

    return (
        <div className="container">
            <h1>Job Application</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="fname">First Name:</label>
                    <input type="name" name="fname" value={formData.fname} placeholder="Enter First Name" onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="lname">Last Name:</label>
                    <input type="name" name="lname" value={formData.lname} placeholder="Enter Last Name" onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" value={formData.email} placeholder="Enter Email" onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="number">Contect Number:</label>
                    <input type="number" name="number" value={formData.number} placeholder="Enter Number" onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="gender">Select Gender</label>
                    <select name="gender" value={formData.gender} id="gender" onChange={handleChange}>
                        <option value="gender">--Select Gender--</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="dob">Date Of Birth</label>
                    <input type="date" name="dob" value={formData.dob} placeholder="Enter Birth Date" onChange={handleChange} />
                </div>

                {/* <div>
                    <label htmlFor="location">What is Your Location.?</label>
                    <div>
                        <select name="country" value={selectedCountry && formData.country} onChange={handleCountryChange}>
                            <option >--Select Country--</option>
                            {countries.map((country, index) => (
                                <option key={index} value={country.name}>{country.name}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <select name="state" value={selectedState && formData.state} onChange={handleStateChange}>
                            <option >--Select State--</option>
                            {states.map((state, index) => (
                                <option key={index} value={state.name}>{state.name}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <select name="city" onChange={handleChange}>
                            <option value={formData.city}>--Select city--</option>
                            {cities.map((city, index) => (
                                <option key={index} value={city}>{city}</option>
                            ))}
                        </select>
                    </div>
                </div> */}

                <div>
                    <label htmlFor="coures">Select Your Qualification:</label>
                    <select name="coures" value={formData.coures} id="coures" onChange={handleChange}>
                        <option value="coures">--Select Coures--</option>
                        <option value="btech">B Tech</option>
                        <option value="BCA">BCA</option>
                        <option value="MBA">MBA</option>
                        <option value="bcom">B Com</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="exHtmlcss">Experience in HTML,CSS</label>
                    <input type="exHtmlcss" value={formData.exHtmlcss} name="exHtmlcss" placeholder="Experience in HTML,CSS" onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="exJavaScript">Experience in JavaScript</label>
                    <input type="exJavaScript" name="exJavaScript" value={formData.exJavaScript} placeholder="Experience in JavaScript" onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="exReact">Experience in React</label>
                    <input type="exReact" name="exReact" value={formData.exReact} placeholder="Experience in React" onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="exOther">Experience in Other Technolagy</label>
                    <input type="exOther" name="exOther" value={formData.exOther} placeholder="Experience in Other Technolagy" onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="companyn">Company Name:</label>
                    <input type="companyn" name="companyn" value={formData.companyn} placeholder="Enter Company Name" onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="resume">Uplode Resume</label>
                    <input type="file" name="resume" value={formData.resume} placeholder="Uploade resume" onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="about">Enter About Your Experience</label>
                    <textarea name="about" value={formData.about} onChange={handleChange}></textarea>
                </div>

                <button type="reset">Reset</button>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;

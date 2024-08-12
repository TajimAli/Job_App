// src/components/DataTable.js

import React from 'react';

const DataTable = ({ data, editData, deleteData }) => {
    return (
        <div>
            <h1>Job Application Data</h1>
            <div className="tableData">
                <table border="1">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Gender</th>
                            <th>DOB</th>
                            {/* <th>Country</th>
                            <th>State</th>
                            <th>City</th> */}
                            <th>Coures</th>
                            <th>Experience HTML,CSS</th>
                            <th>JavaScript Experience</th>
                            <th>React Experience</th>
                            <th>Other Experience</th>
                            <th>Company Name</th>
                            <th>Resume</th>
                            <th>About</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.fname}</td>
                                <td>{item.lname}</td>
                                <td>{item.email}</td>
                                <td>{item.number}</td>
                                <td>{item.gender}</td>
                                <td>{item.dob}</td>
                                {/* <td>{item.country}</td>
                                <td>{item.state}</td>
                                <td>{item.city}</td> */}
                                <td>{item.coures}</td>
                                <td>{item.exHtmlcss}</td>
                                <td>{item.exJavaScript}</td>
                                <td>{item.exReact}</td>
                                <td>{item.exOther}</td>
                                <td>{item.companyn}</td>
                                <td>{item.resume}</td>
                                <td>{item.about}</td>
                                <td><button onClick={() => editData(index)}>Edit</button></td>
                                <td><button onClick={() => deleteData(index)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DataTable;

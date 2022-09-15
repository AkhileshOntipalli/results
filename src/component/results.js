import React, { useState } from 'react';
import axios from 'axios';

import './results.css';

const ShowResults = () => {

    const [hallTicketNumber, setHallTicketNumber] = useState('');
    const [marks, setMarks] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    console.log("Hello World");
    console.log("hello akhilesh");
    const handleHallTicketNumber = (event) => {
        event.preventDefault();
        let hallTicket = event.target.value;
        if (hallTicket && hallTicket.length > 0 && hallTicket.length < 11) {
            setHallTicketNumber(hallTicket);
        }
        else {
            setErrorMessage("Invalid HallTicket Number");
        }
    }
    /* const getResults = (number) => {
        return new Promise((resolve, reject) => {
            axios
                .get("http://localhost:8081/api/v1/results", number)
                .then((result) => {
                    if (result) {
                        resolve(result);
                    }
                })
                .catch((err) => {
                    reject(err);
                });
        });
    } */
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrorMessage("");
        if (hallTicketNumber && hallTicketNumber !== "") {
            if (hallTicketNumber.length > 0 && hallTicketNumber < 11) {
                return new Promise((resolve, reject) => {
                    axios
                        .get(`http://localhost:9009/api/v1/results/${hallTicketNumber}`)
                        .then((result) => {
                            if (result) {
                                resolve(result);
                                setMarks(result);
                            }
                        })
                        .catch((err) => {
                            reject(err);
                        });
                });
            }

        }
        else {
            setErrorMessage("Invalid Hall Ticket Number");
        }

    }
    return (
        <div class="container">
            <div>
                <center>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <h2>Enter Hall Ticket Number # :
                            <input
                                    type="text"
                                    name="hallticketnumber" className="field-input" placeholder="hallticket no."
                                    onInput={handleHallTicketNumber}
                                />
                                <button type="submit" className="btn-search">search</button>
                            </h2>
                        </form>
                    </div>

                </center>

            </div>
            <div>
                <p>HallTicket: {marks.hallTicket_number}</p>
                {marks && marks !== "" ?
                    <div className="content-align">

                        <p>Student Name: {marks.studentName}</p>

                    </div> :
                    <span class="text text-danger">{errorMessage} </span>}
               { marks && marks !== "" ? 
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Subject Name</th>
                                <th>Maximum Marks</th>
                                <th>Marks Obtained</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tr>
                            <td>Telegu</td>
                            <td>100</td>
                            <td>{marks.telugu}</td>
                            {marks.telugu>35 ?<td>Pass</td> :<td>Fail</td>}

                        </tr>
                        <tr>
                            <td>Hindhi</td>
                            <td>100</td>
                            <td>{marks.hindhi}</td>
                            {marks.hindhi>35 ?<td>Pass</td> :<td>Fail</td>}
                        </tr>
                        <tr>
                            <td>English</td>
                            <td>100</td>
                            <td>{marks.english}</td>
                            {marks.english>35 ?<td>Pass</td> :<td>Fail</td>}

                        </tr>
                        <tr>
                            <td>Mathematics</td>
                            <td>100</td>
                            <td>{marks.maths}</td>
                            {marks.mathematics > 35 ? <td>Pass</td> : <td>Fail</td>}
                        </tr>
                        <tr>
                            <td>Science</td>
                            <td>100</td>
                            <td>{marks.science}</td>
                            {marks.science > 35 ? <td>Pass</td> : <td>Fail</td>}
                        </tr>
                        <tr>
                            <td>Social</td>
                            <td>100</td>
                            <td>{marks.social}</td>
                            {marks.social > 35 ? <td>Pass</td> : <td>Fail</td>}
                        </tr>
                    </table>
                    :
                    ""} 
            </div>
        </div>
    )
}

export default ShowResults;
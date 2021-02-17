import React, { Component } from 'react';
import axios from 'axios';
import { Card, Button, CardColumns, Image } from 'react-bootstrap';
import './Profiles.css';

export default class Profiles extends Component {
    constructor() {
        super();
        this.state = {
            teamProfiles: [
                {   
                    id: 1,
                    picture : "Bob.png",
                    name: "Todd Marshall",
                    email: "todd.m@hotmail.com",
                    department: "National investigation Leader",
                    deptDesc: "VIEW DETAILS"
                },
                {
                    id: 2,
                    picture : "Sam.png",
                    name: "Harold Montgomery-White",
                    email: "harold.mw@hotmail.com",
                    department: "Executive Director",
                    deptDesc: "VIEW DETAILS"
                },
                {
                    id:3,
                    picture : "Nisha.png",
                    name: "Norma Owens",
                    email: "norma.owens@hotmail.com",
                    department: "Marketing Assistant",
                    deptDesc: "VIEW DETAILS"
                },
                {
                    id: 4,
                    picture : "Bob.png",
                    name: "Oscar Young",
                    email: "oscar.young@hotmail.com",
                    department: "Creative Director",
                    deptDesc: "VIEW DETAILS"
                },
                {
                    id: 5,
                    picture : "Riya.png",
                    name: "Alyssa Davidson",
                    email: "alyssa.davidson@hotmail.com",
                    department: "in-House Plumber",
                    deptDesc: "VIEW DETAILS"
                },
                {   
                    id: 6,
                    picture : "Melissa.png",
                    name: "Sophia Simpson",
                    email: "sophia.simpson@hotmail.com",
                    department: "Senior Executive Assistant to Alyssa Davidson",
                    deptDesc: "VIEW DETAILS"
                }
            ]
,
        };
        const fetchResults = () => {
            axios.get('http://localhost/Profiles/src/Profiles.php').then((results) => {
                console.log(results);
                // this.setState({ teamProfiles: results.data.results });
                
            });
          };
      
        fetchResults();
    }
    render () {
        return (
            <div className="mainContainer"> 
                
                { this.state.teamProfiles.map( (profile, id) => (
                        <Card key= {id} className="cardContainer">
                            <Card.Body className="cardBody">
                            <Image variant="top" src={profile.picture} className="cardImg" roundedCircle />
                                <Card.Title className="cardTitle ">{profile.name} </Card.Title>
                                <Card.Subtitle className="mb-2 cardSubTitle">{profile.department} </Card.Subtitle>
                                <Card.Link className="cardEmail">{profile.email}</Card.Link>
                                <Card.Text></Card.Text>
                                <Button variant="primary" size="sm" className="cardButton">{profile.deptDesc} </Button>
                            </Card.Body>
                        </Card>
                )) }
                
            </div>
        );
    }
}
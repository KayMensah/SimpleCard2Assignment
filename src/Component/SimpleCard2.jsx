import React from 'react';
import Image from './Image';
import Picture from '../images/JoanH.png';
import Title from './Title';
import Description from './Description';

class SimpleCard extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row no-gutters mt-4 container-border">
                    <div className="col-md-6">
                        <Image name={Picture}/>
                    </div>

                    <div className="col-md-6">
                        <div className="p-4 bg-light text-success">
                            <Title name="A short bio of the image" />
                        </div>

                        <div className="text-white bg-info p-2">
                            <Description name={<p>Joan Elizabeth Higginbotham (born August 3, 1964) is an electrical engineer and a former NASA astronaut. She flew aboard Space Shuttle Discovery mission STS-116 as a mission specialist[2] and is the third African American woman to go into space, after Mae Jemison and Stephanie Wilson.
                                    Higginbotham began her career in 1987, two weeks after getting her Bachelor of Science degree,[3] at the Kennedy Space Center (KSC), Florida, as a Payload Electrical Engineer in the Electrical and Telecommunications Systems Division.
                                    Within six months she became the lead for the Orbiter Experiments (OEX) on OV-102, the Space Shuttle Columbia. She later worked on the Shuttle payload bay reconfiguration for all Shuttle missions and conducted electrical compatibility tests for all payloads flown aboard the Shuttle. 
                                    She was also tasked by KSC management to undertake several special assignments where she served as the Executive Staff Assistant to the Director of Shuttle Operations and Management, led a team of engineers in performing critical analysis for the Space Shuttle flow in support of a simulation model tool, 
                                    and worked on an interactive display detailing the Space Shuttle processing procedures at Spaceport United States (Kennedy Space Center's Visitors Center). Higginbotham then served as backup orbiter project engineer for OV-104, Space Shuttle Atlantis, 
                                    where she participated in the integration of the orbiter docking station (ODS) into the space shuttle used during Shuttle/Mir docking missions. Two years later, she was promoted to lead orbiter project engineer for OV-102, Space Shuttle Columbia. In this position, 
                                    she held the technical lead government engineering position in the firing room where she supported and managed the integration of vehicle testing and troubleshooting.
                                </p>}/>
                            
                            {/* }; */}
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default SimpleCard;
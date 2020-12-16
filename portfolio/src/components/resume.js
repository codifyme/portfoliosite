import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';


class Resume extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign:'center'}}>
                            <img src="https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_client_male_person_user_work_sport_beard_team_glasses-512.png"
                            alt="avatar"
                            style={{height:'200px'}}/>
                        </div>
                        <h2 style={{paddingTop:'2em'}}>Angel Cochachez</h2>
                        <h4 style={{color:'grey'}}>Full Stack Developer</h4>
                        <hr style={{borderTop:'3px solid #833fb2',width:'50%' }}/>
                        <p>Currently working on a variety of projects regarding clients Full Stack Web Development and App Designs. Primary focused on designing E-Commerce website and App for online shopping using MERN Stack.</p>
                        <hr style={{borderTop:'3px solid #833fb2',width:'50%' }}/>
                        <h5>Address</h5>
                        <p>Addison st, Berkeley</p>
                        <h5>Phone</h5>
                        <p>(510)-834-5198</p>
                        <h5>Email</h5>
                        <p>someone@gmail.com</p>
                        <h5>Web</h5>
                        <p>mywebsite.com</p>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>

                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>

                        <Education startYear={2008}
                        endYear={2011}
                        schoolName="Cal State University East Bay"
                        schoolDescription="Business Administration, Marketing and Corporation Management" />

                        <Education startYear={2016}
                        endYear={2016}
                        schoolName="Codify Academy"
                        schoolDescription="Front End Development" />
                        <hr style={{borderTop:'3px solid #e22947'}}/>
                        <h2>Experience</h2>
                    <Experience
                    startYear={2013}
                    endYear={2017}
                    jobName="Tinita's Events - Florist"
                    jobTitle="Front-End Developer"
                    JobDescription="Worked on the company’s new landing page design, framework and graphic design for latest Bay Area Wedding Fairs events and bridal shows such as; photo galleries, flower decorations, contact info and more."/>
                    <Experience
                    startYear={2013}
                    endYear={2016}
                    jobName="Rock Sur"
                    jobTitle="Front-End Developer"
                    JobDescription="Coordinated with six of the most popular Latin American Rock Bands in the Bay Area and helped them to introduce their music to the Latino Community using the company website and social media channels."/>
                    <Experience
                    startYear={2009}
                    endYear={2010}
                    jobName="Apollo"
                    jobTitle="Front-End Developer"
                    JobDescription="Contributed to building the company’s new website and was responsible for working on front-end work, mobile responsiveness, layout integration with theme framework, adjusting CSS classes and styling components."/>



                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;
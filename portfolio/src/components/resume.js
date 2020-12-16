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
                        <p>I'm a passionate Full Stack Developer creating modern and responsive design for Web and Mobile.
Let's learn more about me.</p>
                        <hr style={{borderTop:'3px solid #833fb2',width:'50%' }}/>
                        <h5>Address</h5>
                        <p>San Francisco</p>
                        <h5>Phone</h5>
                        <p>(510)-829-4019</p>
                        <h5>Email</h5>
                        <p>acochachez@gmail.com</p>
                        <h5>Web</h5>
                        <p>https://acthefullstackdev.netlify.app/</p>
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

                        <Education startYear={2019}
                        endYear={2020}
                        schoolName="UC Berkeley Extension"
                        schoolDescription="Full Stack Coding Boot Camp"/>


                        <hr style={{borderTop:'3px solid #e22947'}}/>
                        <h2>Experience</h2>
                        <Experience
                    startYear={2020}
                    endYear={2020}
                    jobName="Ziggurat Technologies, Inc"
                    jobTitle="Full Stack Developer"
                    jobDescription="Currently working on a variety of projects regarding the company Full Stack Web Development for web and App Designs."/>
                    

                    <Experience
                    startYear={2019}
                    endYear={2020}
                    jobName="Code with Corgis"
                    jobTitle="Full Stack Web Developer"
                    jobDescription="Used to work on a variety of projects regarding clients Full Stack Web and App Designs.
                    Responsible for taking a design and turning it into a beautiful user experience using React, React Native, Redux, GraphQL, NodeJS, React Spring, Git/Github, Backend APIs, along with other libraries and frameworks."/>
                    <Experience
                    startYear={2013}
                    endYear={2017}
                    jobName="Tinita's Events - Florist"
                    jobTitle="Front-End Developer"
                    jobDescription="Worked on the company’s new landing page design, framework and graphic design for latest Bay Area Wedding Fairs events and bridal shows such as; photo galleries, flower decorations, contact info and more."/>
                    <Experience
                    startYear={2013}
                    endYear={2016}
                    jobName="Rock Sur"
                    jobTitle="Front-End Developer"
                    jobDescription="Coordinated with six of the most popular Latin American Rock Bands in the Bay Area and helped them to introduce their music to the Latino Community using the company website and social media channels."/>
                    <Experience
                    startYear={2008}
                    endYear={2011}
                    jobName="California State University - East Bay"
                    jobTitle="Student Research Assistant - Library"
                    jobDescription="Sorted and organized library materials, making access to documents seamless to library patrons and extensive experience with customer service.
                    Paged and processed promptly and accurately to other libraries; managed document and textbook requests from link+ database system."/>
                    
                    <Experience
                    startYear={2009}
                    endYear={2010}
                    jobName="Octagon Consulting, Apollo - Intern"
                    jobTitle="Front-End Developer"
                    jobDescription="Contributed to building the company’s new website and was responsible for working on front-end work, mobile responsiveness, layout integration with theme framework, adjusting CSS classes and styling components."/>



                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;
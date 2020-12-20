import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component{
    render(){
        return(
            <div style={{width:'100%', margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_client_male_person_user_work_sport_beard_team_glasses-512.png"
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                        <hr/>

                        <p> React | Bootstrap | Javascript | React Native | NodeJS | Express | MongoDB | Firebase | AWS </p>
                        <div className="social-links">

                            {/* LinkeIn */}
                            <a href="https://www.linkedin.com/in/angel-cochachez/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true"/>
                            </a>
                            {/* Github */}
                            <a href="https://github.com/codifyme" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true"/>
                            </a>
                            {/* Codepen */}
                            <a href="https://codepen.io/codifyme" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-codepen" aria-hidden="true"/>
                            </a>
                            {/* freecodecamp */}
                            <a href="https://www.freecodecamp.org/fccce172b1d-e670-48c8-9902-b53da8175c3e" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-free-code-camp" aria-hidden="true"/>
                            </a>

                        </div>

                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;
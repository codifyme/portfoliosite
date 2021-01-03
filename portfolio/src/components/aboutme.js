import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Skills from './skills';

class about extends Component{
  render(){
      return(
          <div >
              <Grid>
                  <Cell col={12}>
                      <div style={{textAlign:'center'}}>
                          <img src="https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_client_male_person_user_work_sport_beard_team_glasses-512.png"
                          alt="avatar"
                          style={{height:'200px'}}/>
                      </div>
                      <h2 style={{paddingTop:'2em', color:'grey', alignContent:'center'}}>Angel Cochachez</h2>
                      <h4 style={{color:'black'}}>Full Stack Developer</h4>
                      <hr style={{borderTop:'3px solid #833fb2',width:'100%' }}/>
                      <p>During the last three years, I have been greatly improving my skills as a Full Stack Developer; many of my finished side projects have taught me tremendously. Now I feel very confident to integrate and utilize potential source tools and resources, such as; MERN Stack and other several languages, that allow me to work in the most efficient and customizing manner.</p>
                      <hr style={{borderTop:'3px solid #833fb2',width:'100%' }}/>
                      <h5>Address</h5>
                      <p>San Francisco</p>
                      <h5>Phone</h5>
                      <p>(510)-829-4019</p>
                      <h5>Email</h5>
                      <p>acochachez@gmail.com</p>
                      <h5>Web</h5>
                      <p>https://acthefullstackdev.netlify.app/</p>
                      <hr style={{borderTop:'3px solid #833fb2', width:'100%'}}/>
                      <h2>Skills</h2>
                    <Skills 
                        skill="javascript"
                        progress={100}
                    />
                    <Skills 
                        skill="React"
                        progress={100}
                    />
                    <Skills 
                        skill="NodeJS"
                        progress={100}
                    />
                    <Skills 
                        skill="React Native"
                        progress={100}
                    />
                    
                    <Skills 
                        skill="Mongo DB"
                        progress={100}
                    />
                    <Skills 
                        skill="CSS"
                        progress={100}
                    />
                    <Skills 
                        skill="Javascript"
                        progress={100}
                    />
                    <Skills 
                        skill="HTML5"
                        progress={100}
                    />
                    <Skills 
                        skill="MySQL"
                        progress={100}
                    />
                    <Skills 
                        skill="Firebase"
                        progress={100}
                    />


                  </Cell>
              </Grid>
            </div>
      )
  }
}
export default about;

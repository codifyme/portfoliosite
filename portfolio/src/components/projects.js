import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://acthefullstackdev.netlify.app/images/portfolio/petfinder.png) center / cover'}} ></CardTitle>
            {/* <ProgressiveImage src={require("../images/petfinder.png")} placeholder={require("../images/menu.png")}></ProgressiveImage> */}
            <CardText>
            Pet Finder is a App that implements Pet matching based on the user's responses to a ten question survey. The user responds to questions with values from 1 (Strongly Disagree) to 5 (Strongly Agree). When the survey is submitted, an existing user record closest to the current user's responses is found and returned.
            </CardText>
            <CardActions border style={{color:'redd', margin:'auto', align:'center'}}>
            <div><a href="https://github.com/codifyme/FriendFINDER"><i class="fa fa-github"></i></a>
            <Button colored href="https://coolfriend.herokuapp.com/">Live Demo</Button>
            <a href="https://codepen.io/codifyme"><i class="fa fa-codepen"></i></a></div>
            
              {/* <Button colored href="https://github.com/codifyme/FriendFINDER">GitHub</Button> */}
              {/* <Button colored>CodePen</Button> */}
              
            </CardActions>
            <CardMenu style={{color: 'lightblue'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://acthefullstackdev.netlify.app/images/portfolio/burger.png) center / cover'}} ></CardTitle>
            <CardText>
            This Menu Application lets users place their order directly from a Mobile device. Whenever a user submits a burger’s name and side order, the app will display the order on the top side of the page waiting to be devoured. Happily devoured it, the user may remove by clicking on it, which moves it into the adjacent column and updates its status accordingly in the database.
            </CardText>
            <CardActions border>
            <div><a href="https://github.com/codifyme/Burger"><i class="fa fa-github"></i></a>
            <Button colored href="https://dasburger.herokuapp.com/">Live Demo</Button>
            <a href="https://codepen.io/codifyme"><i class="fa fa-codepen"></i></a></div>
            
              {/* <i className="fa fa-github" aria-hidden="true"/> */}
              {/* <Button colored href="https://github.com/codifyme/Burger">GitHub</Button> */}
              {/* <Button colored>CodePen</Button> */}
              {/* <Button colored href="https://dasburger.herokuapp.com/">Live Demo</Button> */}
            </CardActions>
            <CardMenu style={{color: 'lightblue'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://acthefullstackdev.netlify.app/images/portfolio/unproductive.png) center / cover'}} ></CardTitle>
            <CardText>
            UN|PRODUCTIVE is a React App that can be used to look up for books (Productive), or (||) (Un-Productive) video games based on the title of user inputs in a search bar. All Results are displayed in the same page. User can click "Learn more" for a description of book or game. Both Productive/Unproductive users can add games to the communal game recommendation
            </CardText>
            <CardActions border>
            <div><a href="https://github.com/vic30004/un-productive-"><i class="fa fa-github"></i></a>
            <Button colored href="https://un-productive.herokuapp.com/">Live Demo</Button>
            <a href="https://codepen.io/codifyme"><i class="fa fa-codepen"></i></a></div>
            {/* <i className="fa fa-github" aria-hidden="true"/>
              <Button colored href="https://github.com/vic30004/un-productive-">GitHub</Button> */}
              {/* <Button colored>CodePen</Button> */}
              {/* <Button colored href="https://un-productive.herokuapp.com/">Live Demo</Button> */}
            </CardActions>
            <CardMenu style={{color: 'lightblue'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>This is React</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is React Native</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is AWS</h1></div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>VueJS</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
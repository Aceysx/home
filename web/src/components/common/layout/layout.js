import React from 'react';
import {AppBar, Toolbar, Typography} from 'material-ui'
import {withRouter} from 'react-router-dom'
import {blue, grey, orange} from 'material-ui/colors';
import Tabs, {Tab} from 'material-ui/Tabs';
import {PersonPin, Phone, Timelapse, Work} from 'material-ui-icons';
import brown from "material-ui/es/colors/brown";

class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            value: './blog',
            isFixed:false
        }
        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        if(window.scrollY > 100) {
            this.setState({isFixed:true})
        }else{
            this.setState({isFixed:false})
        }
    }

    handleChange = (event, value) => {
        this.props.history.push(value)
        this.setState({value});
    };

    render() {
        return (
            <div style={{background: grey[50]}}>
                <AppBar position="static" style={{background: blue[300]}}>
                    <Toolbar>
                        <Typography type="title" color="inherit">
                            Acey
                        </Typography>
                    </Toolbar>

                </AppBar>
                <div style={{width: '75%', marginTop: 2, margin: '0 auto'}}>
                    <AppBar position="static" style={{background: orange[100]}}>
                        <Tabs
                            value={this.state.value}
                            onChange={this.handleChange}
                            fullWidth
                            indicatorColor={blue[300]}
                            textColor={brown[800]}>
                            <Tab value='/blog' icon={<Phone/>}/>
                            <Tab value='/time' icon={<Timelapse/>}/>
                            <Tab value={333} icon={<PersonPin/>}/>
                            <Tab value={1144411} icon={<Work/>}/>
                        </Tabs>
                    </AppBar>
                    <Typography component="div" style={{padding: 8 * 3, marginTop: 10, background: 'white'}}>
                        {this.props.children}
                    </Typography>
                </div>

            </div>
        );
    }
}

export default withRouter(Layout);

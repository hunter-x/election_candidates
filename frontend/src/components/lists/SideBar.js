import React, { Component } from 'react';
import Translate from 'react-translate-component';
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
const Range = Slider.Range;
import './lists.css'
export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 18,
      max: 100,
    };
  }
  onChange(e) {
    console.log('Checkbox checked:', (e.target));
  }
  sliderChange(res){
this.setState({min:res[0],max:res[1]});
  }
  searchHandle(e){
    this.props.getSearchedText(e.target.value)
  }
  render() {
    //const aboutUs = <Translate type="text" content="navbar.aboutUs" />//about
    return (
      <div className="right-bar col-lg-3 col-md-3 col-sm-3 col-xs-12">

        <div className="search">
          <input onChange={this.searchHandle.bind(this)} type="text" name="search" id="search" placeholder="Search.." />
          <button><i className="fa fa-search"></i></button>
        </div>

        <div className="right-bar-categories">
          <h3 className="right-bar-title"><i className="fa fa-filter"></i> Filter</h3>
          <p className='filterSubtitleFirst'> List Types : </p>

          <div >
            <p>
              <label>
                <Checkbox
                  name="Party"
                />
                 &nbsp; Party
            </label>
             
          </p>
            <p>
              <label>
                <Checkbox
                  name="Independent"
                />
                &nbsp; Independent
            </label>
              
          </p>
            <p>
              <label>
                <Checkbox
                  name="Coalition"
                />
                 &nbsp; Coalition
            </label>
              
          </p>
          </div>
          <p className='filterSubtitle'> Average age of Lists : </p>
          <div style={{ paddingBottom: '20px' }} >
            <div>
              <div className='wraperP'><p className='paragL'>Min= {this.state.min}</p> <p className='paragR'>Max= {this.state.max}</p></div>
            </div>

            <Range defaultValue={[18, 100]} min={18} max={100} onChange={this.sliderChange.bind(this)} />
          </div>
          <p className='filterSubtitle'> Gender of List's Head  : </p>

          <div >
            <p>
              <label>
                <Checkbox
                  name="Male"
                  onChange={this.onChange.bind(this)}
                />
                 &nbsp; Male
          </label>
              
        </p>
            <p>
              <label>
                <Checkbox
                  name="Female"
                  onChange={this.onChange.bind(this)}
                />
                 &nbsp; Female
          </label>
              
        </p>

          </div>
        </div>
      </div>
    );
  }
}

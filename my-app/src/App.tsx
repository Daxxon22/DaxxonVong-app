import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import * as React from 'react';
import './App.css';
import Title from './components/Title';




const API_KEY = "902a230551ab5a4a78d6101d13e16e59";

interface IState {
  city: any,
  description: any,
  error: any,
  tempAvg: any,
  humidity: any

}

class App extends React.Component<{}, IState> {

  constructor(props: any) {
    super(props)
    this.state = {
      city: "",
      description: "",
      error: "",
      humidity: "",
      tempAvg: "",
      
    }

    this.getWeather = this.getWeather.bind(this);

    this.handleChange = this.handleChange.bind(this);
  }

  public getWeather = async(e: any) => {
    e.preventDefault();
    const ApiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=`+ this.state.city +`&appid=${API_KEY}&units=metric`);
    const data = await ApiCall.json();


    if(this.state.city && data.cod !== '404') {
    this.setState({
      city: data.name + " ,NZ",
      description: data.weather[0].main,
      error: undefined,
      humidity: data.main.humidity + "% Humidity",
      tempAvg: data.main.temp + "°C Average",
    })
  } else {
    this.setState({
      city: "",
      description: "",
      error: "Please enter a valid city name",
      humidity: "",
      tempAvg: ""
    })
  }

  }

  public handleChange(event: any) {
    this.setState({city: event.target.value});
  }

  public render() {
    return (
      <div >
        {/* React components must have a wrapper node/element */}
        <Title />

        <form onSubmit={ this.getWeather }>
        <div className="centreText">

        <div>
        <h2><Input type="text" name="name" style={{height: 40}} placeholder="Search for city" value={this.state.city} onChange={this.handleChange} />
        </h2>
        </div>

        <div className="Button">
        <Button variant="outlined" type="submit" size="large" aria-label="Add" value="Submit">Search</Button>
        </div>

        <div>
        <h2>
        {this.state.error}

      
        <div><h2>{this.state.tempAvg}</h2></div>
        <div><h2>{this.state.humidity}</h2></div>
        <div><h2>{this.state.description}</h2></div>


        </h2> 
        </div>

        </div>
        </form>
      </div>
    );
  }
}

export default App;
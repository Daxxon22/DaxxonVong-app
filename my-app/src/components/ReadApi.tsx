// import * as React from "react";

// const API_KEY = "902a230551ab5a4a78d6101d13e16e59";


// class ReadApi extends React.Component{
//         constructor(props:any) {
//                 super(props);

//                 this.state = {
//                         hits: [],
//                 };
//         }

//         public componentDidMount() {
//                 fetch(`http://api.openweathermap.org/data/2.5/weather?q=Auckland,nz&appid=${API_KEY}&units=metric`)
//                 .then(response => response.json())
//                 .then(data => this.setState({ hits: data.hits }));
//         }
        
       
        
//         public render() {
//                 const { hits } = this.state;

//                 return (
//                         <ul>
//                                 {hits.map(hit: =>
//                                 <li key={hits.objectID}>
//                                         <a>{hit.weather}</a>
//                                         </li>
//                                 )}
//                         </ul>
//                 );
//         }     
// }

// export default ReadApi;


/**  public getWeather = async () => {
 *       const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Auckland,nz&appid=${API_KEY}&units=metric`);
 *  
 *      const data = await apiCall.json();
 *
 *       console.log(data)
 * }
 *
 */
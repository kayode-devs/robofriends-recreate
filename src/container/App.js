import React, {Component} from "react";
import {data} from "../data";
import CardList from "../components/CardList";
import Searchbox from "../components/Searchbox";

class App extends Component {
    constructor(){
      super()
      this.state = {
        data : data,
        searchfield: ''

      }

    }
    onSearchChange = (event) =>{
      this.setState({searchfield: event.target.value})
    }


    render(){
      const filteredArray = this.state.data.filter(element =>{
                return element.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
            })

        return(
          <div className="tc">
            <div><h1>Robofriends recreate</h1></div>
            <Searchbox searchChange = {this.onSearchChange}/>
            <CardList data = {filteredArray}/>
          </div>
        )
      }
}


export default App;

import React,{Component} from "react";
import ReactHooks from "./ReactHook";

class ReactOld extends Component{
    constructor(props){
        super(props)
        this.state = {
            counter:0,
            status:"Student"
        }
    }
    render(){
        return(


            <>

            <ReactHooks count={this.state.counter}/>
            <h1>React old state {this.state.counter}</h1>
            <input placeholder="State"
             value={this.state.status} 
             onChange={(e)=>this.setState({status:e.target.value})}
             />
            <div>
                Old Version
                <button onClick={()=>this.setState({counter: this.state.counter+1})}>+</button>
                <button onClick={()=>this.setState({counter: this.state.counter-1})}>-</button>
            
            </div>
            </>
        )
    }
}

export default ReactOld;
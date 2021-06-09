import React from 'react';
export default class SearchBar extends React.Component{
      state={query:''};
       onFormsubmit=(event)=>{
         event.preventDefault();  
         this.props.onsubmit(this.state.query);      
       }

    render(){
        return (
            <div>

         
                <div className="ui segment" >
                <form  onSubmit={this.onFormsubmit} className="ui form">
                    <div className="field">
                        <label>Search Videos</label>
                       <div className="ui icon input" style={{width:'70%'}}>
                     <input type="text"
                     value={this.state.query}
                     onChange={e=> this.setState({query:e.target.value})}
                     placeholder="search..." ></input >
                     <i className="search icon" ></i>
                       </div>
                        
                    </div>
                 </form> 
             
            </div>
            
            </div>
            
        ); 
    }
}
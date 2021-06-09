import React from 'react';
import SearchBar from './SearchBar'
import youtube from '../API/youtube'
import VideosList from './VideosList'
import VideoDetail from './VideoDetail';
export default class App extends React.Component{
       state={videos:[],videoSelect:null}
     onSearch= async term=>{
      const response= await youtube.get('/search',{
            params:{
                q:term
            }
        });
          this.setState({videos: response.data.items})
          this.setState({videoSelect:response.data.items[0]})
     }
     onVideoSelect=(video)=>{
          this.setState({videoSelect:video});
         
     }  
    render(){
        return<div className="ui container" style={{width:'80%' ,marginTop:'10px',marginLeft:'10px'}}>
            <SearchBar onsubmit={this.onSearch} ></SearchBar>
            <div className="ui grid">
                <div className="ui row">
                    <div className="ui eleven wide column" style={{marginTop:'10px'}}>
                    <VideoDetail video={this.state.videoSelect} ></VideoDetail>
                    </div>
                
            <div className="ui five wide column" style={{marginTop:'10px',border:'1px'}}> 
                <VideosList  onVideoSelect={this.onVideoSelect}  videos={this.state.videos} />
            </div>
                </div>
            </div>
           
          
        </div>
    }
}
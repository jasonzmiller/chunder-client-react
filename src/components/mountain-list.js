import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import CreateMountain from './create-mountain';
import axios from 'axios';
import { addMountainToUser , deleteMountain , findMountainByName } from '../services/mountain-service';
import Navbar from './navbar';

export default class MountainList extends React.Component {
    
    state = {
        mountains: [],
        users: [],
        cachedSearch: "",
        searchResult: {},
        searched: false
    }
    
    componentDidMount(){
        axios({
            method: "get",
            withCredentials: true,
            url: "http://localhost:4000/mountains"
        }).then((res) => {
            console.log(res);
            const mountains = res.data;
            this.setState({mountains});
        });

        axios({
            method: "get",
            withCredentials: true,
            url: "http://localhost:4000/user"
        }).then((res) => {
            console.log(res);
            const users = res.data;
            this.setState({users});
        });

        
    }
    
    render(){
        return(
            <>
            <Navbar></Navbar>
            <div style={{paddingTop: '20px'}}>
                <ul className="list-group">
                    <CreateMountain></CreateMountain>
                </ul>

                <h1>Mountains</h1>
                    <h1>{this.state.mountains.name}</h1>
                    <div className="row">
                        <div className="col-9">
                            <input 
                                className="form-control"
                                placeholder="Search..."
                                onChange={e => {
                                    const cachedSearch = e.target.value
                                    this.setState({cachedSearch})
                                }}
                            >
                            </input>
                        </div>
                        <div className="col-3">
                            <button 
                                className="btn btn-secondary"
                                type="button"
                                style={{float: 'left'}}
                                onClick={() => {
                                    findMountainByName(this.state.cachedSearch).then(response => this.setState({searchResult: response}))
                                    this.setState({searched: true})
                                }}
                            >
                                Find mountain by name
                            </button>
                        </div>
                    </div>


                <ul className="list-group" style={{paddingTop: '20px'}}>
                    {
                        this.state.searched &&
                        <ul className="list-group" style={{paddingBottom: '10px'}}>
                            <li className="list-group-item"><h3>Search results</h3></li>
                            {
                                this.state.searchResult !== null ?
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col-6">    
                                            <Link to={`/mountains/${this.state.searchResult._id}`}>
                                                {this.state.searchResult.name}
                                            </Link>
                                        </div>
                                        <div className="col-6">
                                            <div className="btn-group" role="group" style={{float: 'right'}}>
                                                <button
                                                    className="btn btn-secondary"
                                                    type="button"
                                                    onClick={() => {
                                                        addMountainToUser(this.state.searchResult._id, this.state.users._id)
                                                        console.log(`Added ${this.state.searchResult.name} to user ${this.state.users.username}`)
                                                    }}
                                                >
                                                    Add to favorites
                                                </button>
                                                <button
                                                    className="btn btn-secondary"
                                                    type="button"
                                                    onClick={() => {
                                                        deleteMountain(this.state.searchResult._id)
                                                    }}
                                                >
                                                Delete mountain
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                :
                                <li className="list-group-item">
                                    <h3>No results</h3>
                                </li>
                            }
                        </ul>
                    }
                {
                    this.state.mountains.map((mountain) => {
                        return(
                            <li className="list-group-item" key={mountain._id}>
                                <div className="row">
                                    <div className="col-6">    
                                        <Link to={`/mountains/${mountain._id}`}>
                                            {mountain.name}
                                        </Link>
                                    </div>
                                    <div className="col-6">
                                        <div className="btn-group" role="group" style={{float: 'right'}}>
                                            <button
                                                className="btn btn-secondary"
                                                type="button"
                                                onClick={() => {
                                                    addMountainToUser(mountain._id, this.state.users._id)
                                                    console.log(`Added ${mountain.name} to user ${this.state.users.username}`)
                                                }}
                                            >
                                                Add to favorites
                                            </button>
                                            <button
                                                className="btn btn-secondary"
                                                type="button"
                                                onClick={() => {
                                                    deleteMountain(mountain._id)
                                                }}
                                            >
                                            Delete mountain
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
                </ul>
            </div>
            </>
        )
    }
}

/*
const MountainList = (
    {
        mountains=[],
        users: []
    }
    componentDidMount(){
        axios({
            method: "get",
            withCredentials: true,
            url: "http://localhost:4000/user"
        }).then((res) => {
            const users = res.data;
            this.setState({users});
        });
    }
    render(){
        return(
            <>
            <ul className="list-group">
                <CreateMountain 
                    // createMountain={createMountain}
                ></CreateMountain>
            </ul>

            <ul className="list-group">
                <h1>Mountains</h1>
                <h1>{this.state.users.username}</h1>
                <h1>{this.state.users._id}</h1>
                
            
                
                
            {
                this.state.mountains.map((mountain) => {
                    return(
                        <li className="list-group-item">
                            <Link to={`/mountains/${mountain.id}`}>
                                {mountain.name}
                            </Link>
                        </li>
                    )
                })
            }
            </ul>
            </>
        )
    }
}
*/
/*
here we'll call the mountain-reducer
    - will pass down create function to the create-mountain component
*/
/*
const stpm = ( state ) => ({});

const dtpm = ( dispatch ) => ({});

export default MountainList
 */

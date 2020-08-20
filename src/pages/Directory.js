import React from "react";
import API from "../utils/API";
import UserTable from "../components/UserTable";
import SearchForm from "../components/SearchForm";
import {Container, Card} from "react-bootstrap";

class Directory extends React.Component {
  state = {
    name: "",
    role: "",
    manager: "",
    users: [],
    search: "",
    searchType: "name",
    sort: ""
  };

  updateSearch =(search)=>{
    // console.log(search);
    this.setState ({search});
  }

  updateSearchType =(searchType)=> {
    this.setState({searchType});
  }

  updateSort =(sort)=> {
    this.setState({sort});
  }

  componentDidMount() {
    API
        .getUsers()
        .then(res => {
          console.log(res.data.results[0] );
          this.setState ( { users: res.data.results } );
  });
}

  render() {
    return (
      <Container>
        <Card body className = "my-4">
          <SearchForm updateSearch ={this.updateSearch} searchType={this.state.searchType} updateSearchType={this.updateSearchType}/>
        </Card>
        <h2>Employees</h2>
        <UserTable 
          users = {this.state.users}  
          search ={this.state.search}
          searchType = {this.state.searchType}
          sort={this.state.sort}
          updateSort = {this.updateSort}
        />
      </Container>
    )
  }
}
export default Directory;

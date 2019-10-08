import React,{Component} from 'react';
class Saludar extends Component {
  render() {
    return(
      <div>


  <title>Bootstrap Example</title>
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <ul class="navbar-nav">
    <li class="nav-item active">
      <a class="nav-link" href="#">Active</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#">Disabled</a>
    </li>

  </ul>

  <form class="form-inline" action="/action_page.php">
  <input class="form-control mr-sm-2" type="text" placeholder="Search"></input>
  <button class="btn btn-success" type="submit">Search</button>
  </form>
  </nav>

    <h1>PAPAA!!</h1>
    <img src={'https://aka.weightwatchers.com/images/1033/dynamic/GCMSImages/Potato_main.jpg'} />
    </div>
    );
  }
}
export default Saludar;

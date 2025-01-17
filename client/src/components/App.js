import React,{Component} from 'react';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Header from './Header';
import { connect } from 'react-redux';
import * as actions from '../actions'
import Landing from './Landing';


const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
// const Landing = () => <h2>Landing</h2>;

class App extends Component {
 componentDidMount(){
this.props.fetchUser()
 }
 render(){
  return (
   <div className='container'>
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route index element={<Landing/>} />
            <Route path="/surveys" element={<Dashboard/>} />
            <Route path="/surveys/new" element={<SurveyNew/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
 };
}

export default connect(null,actions)(App);

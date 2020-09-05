import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { ToastContainer, toast } from 'react-toastify';
import { selectShowUser } from './redux/user/user.selectors';
import { addUser } from './redux/user/user.action';
import 'react-toastify/dist/ReactToastify.css';
import './app.scss';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component'
import BlogPage from './pages/blogpage/blogpage.component';
import CreateBlog from './pages/createblog/createblog.component';

function App({ addUser, name }) {
  //reloading page whenever the name changes
  useEffect(_ => {
  }, [name]);

  //useless stuff
  //addUser('jaspreet')
  console.log(name);
  toast.success('you loaded the website')

  return (<>
    <ToastContainer />
    <Header />
    <Switch>
      <Route exact path='/blog' exect component={CreateBlog} />
      <Route exact path='/blog/:blogId' component={BlogPage} />
      <Route exact path='/' exect component={Homepage} />
      <Redirect to='/' />
    </Switch>
  </>);
}

const mapStateToProps = createStructuredSelector({
  name: selectShowUser
})

const mapDispatchToProps = dispatch => ({
  addUser: name => dispatch(addUser(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import NewMeetup from '../pages/Meetups/new';
import ReadMeetup from '../pages/Meetups/Read';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" exact component={SignUp} />
      <Route path="/dashboard" exact component={Dashboard} isPrivate />
      <Route path="/meetups/new" exact component={NewMeetup} isPrivate />
      <Route path="/meetups/:id" exact component={ReadMeetup} isPrivate />
    </Switch>
  );
};

export default Routes;

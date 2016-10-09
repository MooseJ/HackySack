import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { HackerPosts } from '../api/hackerPosts.js';

import './HackerPost.js';
import './FindATeam.html';


Template.body.helpers({
  hackerPosts() {
    // Otherwise, return all of the tasks
    return HackerPosts.find({});
  },
});

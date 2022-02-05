import React from 'react';
import { connect } from 'react-redux';
import pic1 from './assets/p1 good.png';
import pic2 from './assets/p2 good.png';
import pic5 from './assets/p5 good.png';

const piclist = [pic1, pic2, pic5];

export const FriendsList = ({users}) => (
    <div>
        <h1 class="title">Friends</h1>
        <div class="columns is-centered is-vcentered">
        {users.map(user => (
            <div class="column is-one-third mt-4">
            <div class="card">
            <div class="card-image">
              <figure class="image">
                <img src={piclist[user.pic_ind]} alt="Placeholder image"/>
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src={piclist[user.pic_ind]} alt="Placeholder image"/>
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">{user.name}</p>
                  <p class="subtitle is-6">@{user.username}</p>
                </div>
              </div>
          
              <div class="content">
                {user.name} is currently feeling fine.
                <br/>
                They were last helped by {user.lasthelped} when their alert was sent @<time datetime="2022-2-5">{user.timestamp}.</time>
              </div>
            </div>
          </div>
          </div>
        ))}
        </div>
    </div>
)

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export const ConnectedFriendsList = connect(mapStateToProps)(FriendsList);
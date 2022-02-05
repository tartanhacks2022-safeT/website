import React from 'react';
import { connect } from 'react-redux';
import { ConnectedFriendsList } from './FriendsList';

export const Dashboard = ({users}) => (
    <div>
        <h1 class="title">Dashboard</h1>

        <div class="tile is-ancestor">
            <div class="tile is-parent">
                <article class="tile is-child box">
                <p class="title">Your Stats</p>
                <p class="subtitle">Awesome! You are healthy.</p>
                You were last helped by your friend Robin Robinson when your alert was sent @<time>6:34 PM - 6 February 2022</time>. Enjoy your day!
                </article>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child box">
                <p class="title">Vitals</p>
                <p class="subtitle is-5"><i class="fas fa-thermometer-half"></i> 97°F</p>
                <p class="subtitle is-5"><i class="fas fa-heart fa-beat"></i> 72 bpm <progress class="progress is-small is-dark" max="100">30%</progress></p>
                <p class="subtitle is-5"><i class="far fa-grin-beam"></i> Relaxed</p>
                </article>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child box">
                <p class="title">FAQ</p>
                <p class="subtitle">So, how does this work?</p>
                <div class="content">
                    <p>It's simple! Our comfortable wearables, like your trusty minutemen, monitor your vital signs at a 24/7 basis, and should you ever fall into a crisis where you can't pick up your phone, we'll send a signal to your friends' wearables so that they can get you assistance. No fuss, no friction.</p>
                </div>
                </article>
            </div>
        </div>

        <ConnectedFriendsList/>
    </div>
)

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);
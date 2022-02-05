import React from 'react';
import { connect } from 'react-redux';

export const Dashboard = ({users}) => (
    <div>
        <h2>Dashboard</h2>
    </div>
)

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);
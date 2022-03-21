import React from 'react';

import style from 'MeetingFeed.module.css';
import dialogFeedStore from '../../stores/dialogFeedStore';
import Meeting from './Meeting';

const MeetingFeed = () => {
    const { getMeetings } = dialogFeedStore;
    const meetings = getMeetings();

    return (
        <div>
            {meetings && meetings.map(meeting => <Meeting {...meeting} />)}
        </div>
    );
};

export default MeetingFeed;
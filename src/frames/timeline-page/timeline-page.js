import './timeline-page.css';
import * as FeatherIcon from 'react-feather';
import Airtable from 'airtable';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React, { useEffect, useState } from "react";

const base = new Airtable({apiKey: 'keyYyK3pJdeyhecUg'}).base('appI3tV6MavWBUv9e');

function TimelinePage() {
    const [positions, setPositions] = useState([]);

    useEffect(()=> {
        base("positions")
        .select({ view: "Grid view" })
        .eachPage((records, fetchNextPage) => {
        setPositions(records);
        fetchNextPage();
      });
    }, [])

    return (
        <div className="timelinePage">
            <div className="timeline">
                <VerticalTimeline>
                {positions.map((position) => (
                    <VerticalTimelineElement
                    className= {position.className}
                    date= {position.date}
                    iconStyle={position.iconStyle}
                    icon={position.icon}
                >
                    <h3 className="vertical-timeline-element-title">{position.title}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{position.location}</h4>
                    <p>
                    {position.details}
                    </p>
                    </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    );
}

export default TimelinePage;
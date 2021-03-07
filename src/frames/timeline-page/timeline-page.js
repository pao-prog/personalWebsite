import Airtable from 'airtable';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import React, { useEffect, useState } from "react";
import * as FeatherIcon from 'react-feather';
import * as IonIcon from 'react-ionicons';
import 'react-vertical-timeline-component/style.min.css';
import './timeline-page.css';

const icons = {
    Education: {
        icon: <FeatherIcon.BookOpen />,
        style: {background: '#333333' , color: '#fff' }
    },

    Code: {
        icon: <FeatherIcon.Code />,
        style: {background: '#333333' , color: '#fff' }
    },

    Research: {
        icon: <IonIcon.FlaskOutline color={'#FFFFFF'} width={"1.5em"} height={"1.5em"}/>,
        style: {background: '#333333' , color: '#FFFFFF'}
    }
}

const base = new Airtable({apiKey: process.env.REACT_APP_API_KEY}).base('appI3tV6MavWBUv9e');

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
        <div className="timelinePage" id="timeline">
            <div className="projects-and-experience">Projects and Experience</div>
            <div className="timeline">
                <VerticalTimeline>
                    {positions.map((position) => (
                        <VerticalTimelineElement
                            className= {position.fields.classname}
                            date= {position.fields.Date}
                            iconStyle={position.fields.Icon && icons[position.fields.Icon] ? icons[position.fields.Icon].style    :null}
                            icon={position.fields.Icon && icons[position.fields.Icon] ? icons[position.fields.Icon].icon    :null}
                        >
                            <h3 className="vertical-timeline-element-title">{position.fields.Title}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{position.fields.Location}</h4>
                            <p>
                            {position.fields.Details}
                            </p>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    );
}

export default TimelinePage;
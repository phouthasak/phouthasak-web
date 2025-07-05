import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase,faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import { FUEL_CYCLE_DESCRIPTION, FUEL_CYCLE_JOB_TITLE, FUEL_CYCLE_TITLE, INTUIT_DESCRIPTION, INTUIT_JOB_TITLE, INTUIT_PRODUCT_URL, INTUIT_TITLE, JPMORGAN_DESCRIPTION, JPMORGAN_JOB_TITLE, JPMORGAN_TITLE, NORPLAS_DESCRIPTION, NORPLAS_JOB_TITLE, NORPLAS_TITLE, RESEARCH_ENGINE_URL, ZOOM_DESCRIPTION, ZOOM_EVENTS_EXPO_URL, ZOOM_JOB_TITLE, ZOOM_TITLE } from "../utils/Constants";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="August 2024 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">{FUEL_CYCLE_TITLE}</h3>
            <h4 className="vertical-timeline-element-subtitle">{FUEL_CYCLE_JOB_TITLE}</h4>
            <p>{FUEL_CYCLE_DESCRIPTION}</p>
            <div id="product-summary">
              <a href={RESEARCH_ENGINE_URL} target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faArrowRight} /> Fuel Cycle: Research Engine</a>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="July 2023 - November 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">{INTUIT_TITLE}</h3>
            <h4 className="vertical-timeline-element-subtitle">{INTUIT_JOB_TITLE}</h4>
            <p>{INTUIT_DESCRIPTION}</p>
            <div id="product-summary">
              <a href={INTUIT_PRODUCT_URL} target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faArrowRight} /> Intuit Product Suite</a>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="April 2021 - February 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">{ZOOM_TITLE}</h3>
            <h4 className="vertical-timeline-element-subtitle">{ZOOM_JOB_TITLE}</h4>
            <p>{ZOOM_DESCRIPTION}</p>
            <div id="product-summary">
              <a href={ZOOM_EVENTS_EXPO_URL} target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faArrowRight} /> Zoom Events Expo</a>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="July 2017 - April 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">{JPMORGAN_TITLE}</h3>
            <h4 className="vertical-timeline-element-subtitle">{JPMORGAN_JOB_TITLE}</h4>
            <p>{JPMORGAN_DESCRIPTION}</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2013 - May 2016"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">{NORPLAS_TITLE}</h3>
            <h4 className="vertical-timeline-element-subtitle">{NORPLAS_JOB_TITLE}</h4>
            <p>{NORPLAS_DESCRIPTION}</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
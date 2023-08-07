import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from "assets/briefcase-white.svg"

type Props = {}

export default function Experience({}: Props) {


  return (
    <div className="px-2 w-full">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(0, 21, 58)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(0, 21, 58)' }}
          date="Nov 2021 - present"
          iconStyle={{ background: 'rgb(0, 21, 58)', color: '#fff' }}
          icon={<img src={WorkIcon} alt='briefcase' className="w-full p-3 xl:p-4 h-auto" />}
        >
          <h3 className="vertical-timeline-element-title font-semibold">Frontend Developer</h3>
          <a href="https://www.spinel.consulting" target="_blank" referrerPolicy="no-referrer" className="vertical-timeline-element-subtitle text-sm hover:underline font-semibold">Spinel Consulting</a>
          <p>
            Front-end developer in a collaborative team that employs agile methodologies to take projects from development to production.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Nov 2022 - present"
          contentStyle={{ background: 'rgb(0, 21, 58)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(0, 21, 58)' }}
          iconStyle={{ background: 'rgb(0, 21, 58)', color: '#fff' }}
          icon={<img src={WorkIcon} alt='briefcase' className="w-full p-3 xl:p-4 h-auto" />}
        >
          <h3 className="vertical-timeline-element-title font-semibold">Software Developer</h3>
          <a href="https://www.jaspersmehub.com" target="_blank" referrerPolicy="no-referrer" className="vertical-timeline-element-subtitle text-sm hover:underline font-semibold">JasperSMEHub</a>
          <p>
            Designed and built RESTful APIs using NestJS while creating engaging and interactive user-interfaces that address core business requirements.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jul 2021 - Nov 2021"
          contentStyle={{ background: 'rgb(0, 21, 58)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(0, 21, 58)' }}
          iconStyle={{ background: 'rgb(0, 21, 58)', color: '#fff' }}
          icon={<img src={WorkIcon} alt='briefcase' className="w-full p-3 xl:p-4 h-auto" />}
        >
          <h3 className="vertical-timeline-element-title font-semibold">Software Developer</h3>
          <a href="https://www.reflectrobotics.com" target="_blank" referrerPolicy="no-referrer" className="vertical-timeline-element-subtitle text-sm hover:underline font-semibold">Reflect Robotics</a>
          <p>
            Translated business needs into a stable income generating platform using software design methodoloogies
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006 - 2008"
          contentStyle={{ background: 'rgb(0, 21, 58)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(0, 21, 58)' }}
          iconStyle={{ background: 'rgb(0, 21, 58)', color: '#fff' }}
          icon={<img src={WorkIcon} alt='briefcase' className="w-full p-3 xl:p-4 h-auto" />}
        >
          <h3 className="vertical-timeline-element-title font-semibold">Backend Developer Intern</h3>
          <a href="https://internship.zuri.team/" target="_blank" referrerPolicy="no-referrer" className="vertical-timeline-element-subtitle text-sm hover:underline font-semibold">Zuri</a>
          <p>
            Led a team of developers and designers to build a barter product while working extensively with Laravel and PHP to build APIs for front-end developers
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        />
      </VerticalTimeline>
    </div>
  )
}
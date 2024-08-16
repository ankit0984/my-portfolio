import React from 'react'
import {
  GanttChartSquare,
  Blocks,
  Gem,
  Container,
  Webhook,
  MonitorSmartphone,
  Workflow,
} from 'lucide-react'

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from '../ui/card'

const servicesData = [
  {
    icon: <Webhook />,
    title: 'Web Development',
    description:
      'Creating responsive, user-friendly websites and web applications. Expertise in front-end and back-end technologies, ensuring seamless functionality, attractive design, and optimal performance across devices.',
    skills: 'HTML, CSS, JavaScript, React, Node.js, PHP, MySQL',
    projectCount: 15,
  },
  {
    icon: <MonitorSmartphone />,
    title: 'App Development',
    description:
      'Developing mobile applications with a focus on user experience and performance. Basic knowledge of app development principles and frameworks for creating simple yet effective mobile solutions.',
    skills: 'Flutter',
    projectCount: 3,
  },
  {
    icon: <Workflow />,
    title: 'DevOps',
    description:
      'Streamlining development and operations processes. Implementing CI/CD pipelines, managing cloud infrastructure, and optimizing workflows for efficient software delivery and maintenance.',
    skills: 'Docker, Kubernetes, AWS, Jenkins, Git, Ansible',
    projectCount: 8,
  },
]

export default function Services() {
  return (
    <section className="mb-12 md:mb-24 xl:mb-36">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          My Expertise
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 justify-center gap-y-12 md:gap-y-16 xl:gap-y-24 md:gap-x-6 xl:gap-x-8 px-4 sm:px-8 md:px-12 xl:px-24">
        {servicesData.map((item, index) => {
          return (
            <Card
              className="w-full max-w-[424px] h-[600px] sm:h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative xl:h-auto"
              key={index}
            >
              <CardHeader className="text-primary absolute -top-[60px]">
                <div className="w-[140px] h-[80px] bg-white flex items-center justify-center">
                  {item.icon}
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle className="mb-4">{item.title}</CardTitle>
                <CardDescription className="text-lg xl:text-justify">
                  {item.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="text-muted-foreground mt-4 mb-4">
                {item.skills}
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </section>
  )
}

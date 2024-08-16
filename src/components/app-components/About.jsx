// import React from 'react';
// import Devimg from '@/components/app-components/Devimg';
// import Image from 'next/image';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import {
//   User2,
//   MailIcon,
//   HomeIcon,
//   PhoneCall,
//   GraduationCap,
//   Calendar, Briefcase,
// } from 'lucide-react'
// import Images from 'next/image'
//
// const infoData = [
//   { icon: <User2 size={20}/>, text: 'Ankit Kumar' },
//   { icon: <PhoneCall size={20}/>, text: '+91 8800937197' },
//   { icon: <MailIcon size={20}/>, text: 'en.ankitkumarpandey@gmail.com' },
//   { icon: <Calendar size={20}/>, text: 'Born on 25 March, 2003' },
//   { icon: <GraduationCap size={20}/>, text: 'B.Tech CSE' },
//   { icon: <HomeIcon size={20}/>, text: 'WZ-725 Naraina Village, New Delhi' },
// ];
//
// const qualificationData = [
//   {
//     title: 'Education',
//     data: [
//       { university: 'DPG Polytechnic', qualification: 'Diploma CS', year: '2020-2022' },
//       { university: 'Noida Institute Of Engineering and Technology', qualification: 'B.Tech CSE', year: '2022-2025' },
//     ],
//   },
//   {
//     title: 'Experience',
//     data: [
//       { company: 'CloudTech Solutions', position: 'DevOps Engineer', year: '2024-Present',
//         description: 'Implemented CI/CD pipelines, managed cloud infrastructure, and optimized application performance.' },
//       { company: 'DataSphere Inc.', position: 'Junior DevOps Engineer', year: '2023-2024',
//         description: 'Assisted in containerization of applications, monitored system health, and participated in on-call rotations.' },
//       { company: 'TechNova Systems', position: 'DevOps Intern', year: '2022-2023',
//          description: 'Learned and applied DevOps practices, assisted in automating deployment processes, and contributed to documentation efforts.' },
//       // { company: 'CodeCraft Academy', position: 'Student Developer', year: '2021-2022',
//       //    description: 'Participated in coding bootcamps, worked on team projects, and developed foundational skills in software development and operations.' },
//     ],
//   },
// ];
//
// const skillData = [
//   {
//     title: 'Skills',
//     data: [
//       { name: 'HTML, CSS, JavaScript' },
//       { name: 'Node.js, Next.js, React.js, TailwindCSS' },
//       { name: 'GitHub, GitLab, Bitbucket, AWS, GCP' },
//       { name: 'Jenkins, Grafana, Docker, Kubernetes, Terraform' },
//       { name: 'MongoDB, MySQL' },
//       { name: 'Python, Shell-Scripting' }
//     ],
//   },
//   {
//     title: 'Tools',
//     data: [
//       { imgPath: '/assets/about/aws.svg' },
//       { imgPath: '/assets/about/azure.svg' },
//       { imgPath: '/assets/about/mongodb.svg' },
//       { imgPath: '/assets/about/mysql.png' },
//       { imgPath: '/assets/about/docker.png' }
//     ],
//   },
// ];
//
// export default function About() {
//     const getData = (arr, title)=>{
//     return arr.find((item)=> item.title === title)
//   };
//   return (
//     <section className="py-12 xl:py-24 h-[860px] xl:h-auto">
//       <div className="container mx-auto">
//         <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
//           About me
//         </h2>
//         <div className="flex flex-col xl:flex-row">
//           <div className="hidden xl:flex flex-1 relative">
//             <Devimg
//               containerStyle="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
//               imgSrc="/assets/about/developer.png"
//             />
//           </div>
//           <div className="flex-1">
//             <Tabs defaultValue="personal">
//               <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
//                 <TabsTrigger className="w-[162px] xl:w-auto" value="personal">Personal Info</TabsTrigger>
//                 <TabsTrigger className="w-[162px] xl:w-auto" value="qualifications">Qualifications</TabsTrigger>
//                 <TabsTrigger className="w-[162px] xl:w-auto" value="skills">Skills</TabsTrigger>
//               </TabsList>
//               <div className="text-lg mt-12 xl:mt-8">
//                 {/*personal-info*/}
//                 <TabsContent value="personal">
//                   <div>
//                     <h3 className="h3 mb-4">Passionate DevOps Engineer</h3>
//                     <p className="text-justify subtitle max-w-xl mx-auto xl:mx-0">
//                       I am a dedicated and experienced DevOps Engineer with a passion for optimizing software development processes and enhancing system reliability. With expertise in Python, Git, Bash, and Javascript, I bring a comprehensive skill set to any project.
//                     </p>
//                     <div className='grid xl:grid-cols-2 gap-4 mb-12'>
//                       {infoData.map((item,index)=>{
//                         return <div key={index} className='flex items-center gap-x-4 mx-auto xl:mx-0'>
//                           <div className='text-primary'>{item.icon}</div>
//                           <div>{item.text}</div>
//                         </div>
//                       })}
//                     </div>
//                     <div className='flex flex-col gap-y-2'>
//                       <div className='text-primary'>Language Skills</div>
//                       <div className='border-b border-border '></div>
//                       <div>English, Hindi</div>
//                     </div>
//                   </div>
//                 </TabsContent>
//                 {/*qualification-info*/}
//                 <TabsContent value="qualifications">
//                   <div>
//                     <h3 className="h3 mb-8 text-center xl:text-left">
//                       My Awesome Journey
//                     </h3>
//                     <div className='grid md:grid-cols-2 gap-y-8'>
//                       {/*experience*/}
//                       <div className='flex flex-col gap-y-6'>
//                         <div className='flex gap-x-4 items-center text-[22px] text-primary'>
//                           <Briefcase />
//                           <h4 className="capitalize font-medium">
//                             {getData(qualificationData, 'Experience').title}
//                           </h4>
//                         </div>
//                         <div className='flex flex-col gap-y-8'>
//                           {getData(qualificationData, 'Experience').data.map((item,index)=>{
//                             const {company, position, year, description}=item
//                             return (
//                               <div key={index} className='flex gap-x-8 group '>
//                                 <div className="h-[84px] w-[1px] bg-border relative ml-2">
//                                   <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
//                                 </div>
//                                 <div className=''>
//                                   <div className='font-semibold text-xl leading-none mb-2'>{company}</div>
//                                   <div className='text-lg leading-none text-muted-foreground mb-4'>{position}</div>
//                                   <div className='text-base font-medium'>{year}</div>
//                                   {/*<div className='text-muted-foreground w-[290px]'>{description}</div>*/}
//                                 </div>
//                               </div>
//                             )
//                           })}
//                         </div>
//                       </div>
//                       {/*education*/}
//                       <div className='flex flex-col gap-y-8'>
//                         <div className='flex gap-4 items-center text-[22px] text-primary'>
//                           <GraduationCap size={20} />
//                           <h4 className="capitalize font-medium">
//                             {getData(qualificationData, 'Education').title}
//                           </h4>
//                         </div>
//                         <div className='flex flex-col gap-y-8'>
//                           {getData(qualificationData, 'Education').data.map((item, index) => {
//                             const { university, qualification, year } = item
//                             return (
//                               <div key={index} className='flex gap-x-8 group '>
//                                 <div className="h-[84px] w-[1px] bg-border relative ml-2">
//                                   <div
//                                     className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
//                                 </div>
//                                 <div className=''>
//                                   <div className='font-semibold text-xl leading-none mb-2'>{university}</div>
//                                   <div className='text-lg leading-none text-muted-foreground mb-4'>{qualification}</div>
//                                   <div className='text-base font-medium'>{year}</div>
//                                 </div>
//                               </div>
//                             )
//                           })}
//                         </div>
//                       </div>
//
//                     </div>
//                   </div>
//                 </TabsContent>
//                 {/*skills-info*/}
//                 <TabsContent value="skills">
//                   <div className='text-center xl:text-left'>
//                     <h3 className="h3 mb-8">Tools I Use Everyday</h3>
//                     <div className='mb-16'>
//                       <h4 className="text-xl font-semibold mb-2">Skills</h4>
//                       <div className="border-b border-border mb-4"></div>
//                       <div className='flex flex-wrap gap-4'>
//                         {getData(skillData, 'Skills').data.map((item,index)=>{
//                           const {name} = item;
//                           return (
//                             <div key={index} >
//                               <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm">
//                                 {name}
//                               </span>
//                             </div>
//                           )
//                         })}
//                       </div>
//                     </div>
//                     {/*tools-list*/}
//                     <div>
//                       <h4 className="text-xl font-semibold mb-2 xl:text-left">
//                         tools
//                       </h4>
//                       <div className="border-b border-border mb-4"></div>
//                       <div className='flex gap-x-8 justify-center xl:justify-start'>
//                         {getData(skillData, 'Tools').data.map((item,index)=>{
//                           const {imgPath} = item;
//                           return(
//                             <div key={index}>
//                               <Images src={imgPath} alt='' width={48} height={48} priority/>
//                             </div>
//                           )
//                         })}
//                       </div>
//                     </div>
//                   </div>
//                 </TabsContent>
//               </div>
//             </Tabs>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from 'react'
import Devimg from '@/components/app-components/Devimg'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from 'lucide-react'

// ... (keep the existing data structures: infoData, qualificationData, skillData)
const infoData = [
  { icon: <User2 size={20} />, text: 'Ankit Kumar' },
  { icon: <PhoneCall size={20} />, text: '+91 8800937197' },
  { icon: <MailIcon size={20} />, text: 'en.ankitkumarpandey@gmail.com' },
  { icon: <Calendar size={20} />, text: 'Born on 25 March, 2003' },
  { icon: <GraduationCap size={20} />, text: 'B.Tech CSE' },
  { icon: <HomeIcon size={20} />, text: 'Naraina Village, New Delhi' },
]

const qualificationData = [
  {
    title: 'Education',
    data: [
      {
        university: 'DPG Polytechnic',
        qualification: 'Diploma CS',
        year: '2020-2022',
      },
      {
        university: 'Noida Institute Of Engineering and Technology',
        qualification: 'B.Tech CSE',
        year: '2022-2025',
      },
    ],
  },
  {
    title: 'Experience',
    data: [
      {
        company: 'CloudTech Solutions',
        position: 'DevOps Engineer',
        year: '2024-Present',
        description:
          'Implemented CI/CD pipelines, managed cloud infrastructure, and optimized application performance.',
      },
      {
        company: 'DataSphere Inc.',
        position: 'Junior DevOps Engineer',
        year: '2023-2024',
        description:
          'Assisted in containerization of applications, monitored system health, and participated in on-call rotations.',
      },
      {
        company: 'TechNova Systems',
        position: 'DevOps Intern',
        year: '2022-2023',
        description:
          'Learned and applied DevOps practices, assisted in automating deployment processes, and contributed to documentation efforts.',
      },
      // { company: 'CodeCraft Academy', position: 'Student Developer', year: '2021-2022',
      //    description: 'Participated in coding bootcamps, worked on team projects, and developed foundational skills in software development and operations.' },
    ],
  },
]

const skillData = [
  {
    title: 'Skills',
    data: [
      { name: 'HTML, CSS, JavaScript' },
      { name: 'Node.js, Next.js, React.js, TailwindCSS' },
      { name: 'GitHub, GitLab, Bitbucket, AWS, GCP' },
      { name: 'Jenkins, Grafana, Docker, Kubernetes, Terraform' },
      { name: 'MongoDB, MySQL' },
      { name: 'Python, Shell-Scripting' },
    ],
  },
  {
    title: 'Tools',
    data: [
      { imgPath: '/assets/about/aws.svg' },
      { imgPath: '/assets/about/azure.svg' },
      { imgPath: '/assets/about/mongodb.svg' },
      { imgPath: '/assets/about/mysql.png' },
      { imgPath: '/assets/about/docker.png' },
    ],
  },
]

export default function About() {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title)
  }

  return (
    <section className="py-8 md:py-12 lg:py-24 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 lg:mb-16 text-center">
          About me
        </h2>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="hidden lg:flex flex-1 justify-center items-center">
            <Image
              src="/assets/about/Group 2.png"
              alt=""
              width={505}
              height={505}
            />
            {/*<Devimg*/}
            {/*  containerStyle="bg-about_shape_light dark:bg-about_shape_dark w-[300px] h-[300px] lg:w-[505px] lg:h-[505px] bg-no-repeat relative"*/}
            {/*  imgSrc="/assets/about/developer.png"*/}
            {/*/>*/}
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="w-full grid grid-cols-3 mb-8 md:mb-12 lg:max-w-[520px] mx-auto lg:mx-0">
                <TabsTrigger className="text-sm md:text-base" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="text-sm md:text-base"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="text-sm md:text-base" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              <div className="mt-6 md:mt-8 lg:mt-12">
                {/* Personal Info Tab */}
                <TabsContent value="personal">
                  <div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
                      Passionate DevOps Engineer
                    </h3>
                    <p className="text-sm md:text-base lg:text-lg text-justify mb-6">
                      I am a dedicated and experienced DevOps Engineer with a
                      passion for optimizing software development processes and
                      enhancing system reliability. With expertise in Python,
                      Git, Bash, and Javascript, I bring a comprehensive skill
                      set to any project.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {infoData.map((item, index) => (
                        <div key={index} className="flex items-center gap-x-4">
                          <div className="text-primary">{item.icon}</div>
                          <div className="text-sm md:text-base">
                            {item.text}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary font-medium">
                        Language Skills
                      </div>
                      <div className="border-b border-border"></div>
                      <div className="text-sm md:text-base">English, Hindi</div>
                    </div>
                  </div>
                </TabsContent>
                {/* Qualifications Tab */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-center lg:text-left">
                      My Awesome Journey
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-lg md:text-xl text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, 'Experience').title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-6">
                          {getData(qualificationData, 'Experience').data.map(
                            (item, index) => {
                              const { company, position, year } = item
                              return (
                                <div key={index} className="flex gap-x-4 group">
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-base md:text-lg mb-1">
                                      {company}
                                    </div>
                                    <div className="text-sm md:text-base text-muted-foreground mb-2">
                                      {position}
                                    </div>
                                    <div className="text-sm font-medium">
                                      {year}
                                    </div>
                                  </div>
                                </div>
                              )
                            }
                          )}
                        </div>
                      </div>
                      {/* Education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-4 items-center text-lg md:text-xl text-primary">
                          <GraduationCap size={20} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, 'Education').title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-6">
                          {getData(qualificationData, 'Education').data.map(
                            (item, index) => {
                              const { university, qualification, year } = item
                              return (
                                <div key={index} className="flex gap-x-4 group">
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-base md:text-lg mb-1">
                                      {university}
                                    </div>
                                    <div className="text-sm md:text-base text-muted-foreground mb-2">
                                      {qualification}
                                    </div>
                                    <div className="text-sm font-medium">
                                      {year}
                                    </div>
                                  </div>
                                </div>
                              )
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* Skills Tab */}
                <TabsContent value="skills">
                  <div className="text-center lg:text-left">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6">
                      Tools I Use Everyday
                    </h3>
                    <div className="mb-8">
                      <h4 className="text-lg md:text-xl font-semibold mb-2">
                        Skills
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                        {getData(skillData, 'Skills').data.map(
                          (item, index) => {
                            const { name } = item
                            return (
                              <div key={index}>
                                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs md:text-sm">
                                  {name}
                                </span>
                              </div>
                            )
                          }
                        )}
                      </div>
                    </div>
                    {/* Tools list */}
                    <div>
                      <h4 className="text-lg md:text-xl font-semibold mb-2">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6">
                        {getData(skillData, 'Tools').data.map((item, index) => {
                          const { imgPath } = item
                          return (
                            <div key={index}>
                              <Image
                                src={imgPath}
                                alt=""
                                width={40}
                                height={40}
                                priority
                              />
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import ProjectCard from '@/components/app-components/ProjectCard'

const workData = [
  {
    image: '/assets/work/1.png',
    category: 'fullstack',
    name: 'example 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo laborum nihil optio perferendis quo repudiandae voluptate. Culpa tempore ullam velit.',
    link: '/',
    github: '/',
  },
  {
    image: '/assets/work/2.png',
    category: 'fullstack',
    name: 'example 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo laborum nihil optio perferendis quo repudiandae voluptate. Culpa tempore ullam velit.',
    link: '/',
    github: '/',
  },
  {
    image: '/assets/work/3.png',
    category: 'fullstack',
    name: 'example 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo laborum nihil optio perferendis quo repudiandae voluptate. Culpa tempore ullam velit.',
    link: '/',
    github: '/',
  },
  {
    image: '/assets/work/4.png',
    category: 'fullstack',
    name: 'example 4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo laborum nihil optio perferendis quo repudiandae voluptate. Culpa tempore ullam velit.',
    link: '/',
    github: '/',
  },
  {
    image: '/assets/work/4.png',
    category: 'fullstack',
    name: 'example 4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo laborum nihil optio perferendis quo repudiandae voluptate. Culpa tempore ullam velit.',
    link: '/',
    github: '/',
  },
  {
    image: '/assets/work/4.png',
    category: 'fullstack',
    name: 'example 4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo laborum nihil optio perferendis quo repudiandae voluptate. Culpa tempore ullam velit.',
    link: '/',
    github: '/',
  },
  {
    image: '/assets/work/4.png',
    category: 'fullstack',
    name: 'example 4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo laborum nihil optio perferendis quo repudiandae voluptate. Culpa tempore ullam velit.',
    link: '/',
    github: '/',
  },
  {
    image: '/assets/work/4.png',
    category: 'fullstack',
    name: 'example 4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo laborum nihil optio perferendis quo repudiandae voluptate. Culpa tempore ullam velit.',
    link: '/',
    github: '/',
  },
  {
    image: '/assets/work/4.png',
    category: 'fullstack',
    name: 'example 4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo laborum nihil optio perferendis quo repudiandae voluptate. Culpa tempore ullam velit.',
    link: '/',
    github: '/',
  },
  {
    image: '/assets/work/4.png',
    category: 'fullstack',
    name: 'example 4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo laborum nihil optio perferendis quo repudiandae voluptate. Culpa tempore ullam velit.',
    link: '/',
    github: '/',
  },
  {
    image: '/assets/work/4.png',
    category: 'fullstack',
    name: 'example 4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo laborum nihil optio perferendis quo repudiandae voluptate. Culpa tempore ullam velit.',
    link: '/',
    github: '/',
  },
]

export default function Work() {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div
          className="max-w-[400px] mx-auto xl:mx-0 text-center
        xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start"
        >
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Explore some of my recent work, where creativity meets technology to
            deliver exceptional results.
          </p>
          <Link href="/projects">
            <Button>All projects</Button>
          </Link>
        </div>
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[560px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {workData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} className="h-[400px]" />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

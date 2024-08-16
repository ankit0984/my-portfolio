// import React from 'react'
// import {Button} from '../ui/button'
// import Link from 'next/link'
// import {Download, Send} from 'lucide-react'
// import {
//   RiBriefcase4Fill,
//   RiTeamFill,
//   RiTodoFill,
//   RiArrowDownSLine
// } from 'react-icons/ri'
// import Devimg from './Devimg.jsx'
// import Social from './Social.jsx'
//
// export default function Hero() {
//   return (
//     <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
//       <div className="container mx-auto">
//         <div className="flex justify-between gap-x-8">
//           <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
//             <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px">
//               DevOps Engineer
//             </div>
//             <h1 className="h1 mb-4">Hello, I am Ankit Kumar</h1>
//             <p className="subtitle max-w-[590px] mx-auto xl:mx-0 ">Bridging the gap between development and operations to streamline software delivery.
//               I automate processes, implement CI/CD pipelines, and manage cloud infrastructure to ensure rapid,
//               reliable, and secure application deployment. My expertise lies in optimizing workflows,
//               enhancing system reliability, and fostering a culture of continuous improvement and collaboration.
//             </p>
//             <div className="flex flex-col gap-y-3 md:flex-row gap-3 mx-auto xl:mx-0 mb-12">
//               <Link href='/contact'>
//                 <Button className="gap-x-3">
//                 Contact me <Send size={18}/>
//                 </Button>
//               </Link>
//               <Button variant='secondary' className="gap-x-3">
//                 Download CV <Download size={18}/>
//               </Button>
//             </div>
//             <Social containerStyles='flex gap-x-6 mx-auto xl:mx-0' iconStyles='text-foreground text-[22px] hover:text-primary transition-all '/>
//           </div>
//           <div className="hidden xl:flex relative">
//             <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
//             <Devimg containerStyle='bg-hero_shape1 w-[510px] h-[462px] bg-no-repeat relative bg-bottom' imgSrc='/assets/hero/developer.png' />
//           </div>
//         </div>
//         <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
//           <RiArrowDownSLine className="text-3xl text-primary"/>
//         </div>
//       </div>
//     </section>
//
//   )
// }

import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Download, Send } from 'lucide-react'
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from 'react-icons/ri'
import Devimg from './Devimg.jsx'
import Social from './Social.jsx'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="py-12 lg:py-24 min-h-screen lg:min-h-[84vh] bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8 items-center">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto lg:mx-0 text-center lg:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              DevOps Engineer
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hello, I am Ankit Kumar
            </h1>
            <p className="text-base md:text-lg mb-6 max-w-[590px] mx-auto lg:mx-0">
              Bridging the gap between development and operations to streamline
              software delivery. I automate processes, implement CI/CD
              pipelines, and manage cloud infrastructure to ensure rapid,
              reliable, and secure application deployment. My expertise lies in
              optimizing workflows, enhancing system reliability, and fostering
              a culture of continuous improvement and collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
              <Link href="/contact">
                <Button className="w-full sm:w-auto gap-x-3">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Link href="https://cdn.sanity.io/files/r4bu79zv/book-shop/728bd03e2cdab52768afd106ef6080dd26215c10.pdf">
                <Button
                  variant="secondary"
                  className="w-full sm:w-auto gap-x-3"
                >
                  Download CV <Download size={18} />
                </Button>
              </Link>
            </div>
            <Social
              containerStyles="flex gap-x-6 justify-center lg:justify-start"
              iconStyles="text-foreground text-[30px] hover:text-primary transition-all"
            />
          </div>
          <div className="hidden lg:block relative">
            {/*<div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>*/}
            {/*<Devimg containerStyle='bg-hero_shape1 w-[510px] h-[462px] bg-no-repeat relative bg-bottom' imgSrc='/assets/hero/developer.png' />*/}
            {/*<Devimg className=' w-[510px] h-[462px]' imgSrc='/assets/hero/Group 5.png' />*/}
            <Image
              src="/assets/hero/Group 5.png"
              alt=""
              width="510"
              height="462"
            />
          </div>
        </div>
        <div className="hidden md:flex justify-center lg:justify-center mt-12 lg:mt-0">
          <RiArrowDownSLine className="text-3xl text-primary animate-bounce" />
        </div>
      </div>
    </section>
  )
}

import { MailIcon, HomeIcon, PhoneCall } from 'lucide-react'
import Form from '@/components/app-components/Form'
import React from 'react'

export default function Contact() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello 👋
            </div>
            <h1 className="h1 max-w-md mb-8">Let&apos;s Work Together.</h1>
            <p className="subtitle max-w-[4800px]">
              I&apos;m always eager to connect and collaborate on new projects.
              Whether you&apos;re looking to discuss a potential opportunity or
              just want to say hello, I&apos;d love to hear from you.
            </p>
          </div>
          <div className="hidden xl:flex w-full bg-contact_illustration bg-contain bg-top bg-no-repeat"></div>
        </div>
        <div>
          <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
            <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 p-8 xl:mb-24 text-base xl:text-lg">
              {/*  mail */}
              <div className="flex items-center gap-x-8">
                <MailIcon size={18} className="text-primary" />
                <div>en.ankitkumarpandey@gmail.com</div>
              </div>
              {/*address*/}
              <div className="flex items-center gap-x-8">
                <HomeIcon size={18} className="text-primary" />
                <div>Naraina Village, New Delhi</div>
              </div>
              {/*phone*/}
              <div className="flex items-center gap-x-8">
                <PhoneCall size={18} className="text-primary" />
                <div>9310126226</div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

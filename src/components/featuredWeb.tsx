'use client'
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient'
import { HoverEffect } from "./ui/card-hover-effect";

export default function FeaturedWeb() {
    const Webinars = [
        {
          title: 'Understanding Music Theory',
          description:
            'Dive deep into the fundamentals of music theory and enhance your musical skills.',
          slug: 'understanding-music-theory',
          isFeatured: true,
        },
        {
          title: 'The Art of Songwriting',
          description:
            'Learn the craft of songwriting from experienced musicians and songwriters.',
          slug: 'the-art-of-songwriting',
          isFeatured: true,
        },
        {
          title: 'Mastering Your Instrument',
          description:
            'Advanced techniques to master your musical instrument of choice.',
          slug: 'mastering-your-instrument',
          isFeatured: true,
        },
        {
          title: 'Music Production Essentials',
          description:
            'Get started with music production with this comprehensive overview.',
          slug: 'music-production-essentials',
          isFeatured: true,
        },
        // Added two more webinars
        {
          title: 'Live Performance Techniques',
          description:
            'Enhance your live performance skills with expert tips and strategies.',
          slug: 'live-performance-techniques',
          isFeatured: true,
        },
        {
          title: 'Digital Music Marketing',
          description:
            'Learn how to promote your music effectively in the digital age.',
          slug: 'digital-music-marketing',
          isFeatured: true,
        },
      ];

    return (
        <div className="py-12 bg-gray-900">
            <div>
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase"> 
                    FEATURED Webinars</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight 
                    text-white sm:text-4xl">Enhance Your music Journey</p>
                </div>
            </div>
            <div className='mt-10'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {Webinars.map((course:Course)=> (
                        <div key={course.id} className="flex justify-center ">
                            <BackgroundGradient className="max-w-sm h-full rounded-[22px] flex overflow-hidden
                             dark:bg-black/[0.96]">
                                <div className='p-4 sm:p-6 flex flex-col items-center text-center flex-grow'>
                                 <h3 className='text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200'> {course.title} </h3> 
                                 <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow"> {course.description} </p>
                                 <Link href={`/${course.slug}`}>
                                 <button className="bg-white dark:bg-black text-black py-0.5 px-7 rounded-md border-2 border-radius-50
                                 dark:text-white border-neutral-200 dark:border-slate-800">
                                     Learn More
                                 </button>
                                 </Link>
                                 </div>
                            </BackgroundGradient>
                        </div>
                    ))}

                </div>

            </div>
            <div className='mt-20 text-center'>
                <Link href='/cources'>
                <button className="bg-white dark:bg-black text-black py-2.5 px-20 rounded-md border-2 border-radius-50
                dark:text-white border-neutral-200 dark:border-slate-400">
                    View All Webinars
                </button>
                </Link>
            </div>
        </div>
    )

    }
'use client'
import Link from 'next/link'
import courseData from '../data/music_courses.json'
import { BackgroundGradient } from './ui/background-gradient'

interface Course
    {
        id: number,
        title: string,
        slug: string,
        description: string,
        price: number,
        instructor: String,
        isFeatured: boolean
      }

export default function FeaturedCources() {
    const featuredCources = courseData.courses.filter((course : Course) => course.isFeatured)

    return (
        <div className="py-12 bg-gray-900">
            <div>
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase"> 
                    FEATURED COURCES</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight 
                    text-white sm:text-4xl">Learn with the best</p>
                </div>
            </div>
            <div className='mt-10'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {featuredCources.map((course:Course)=> (
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
                    View All Cources
                </button>
                </Link>
            </div>
        </div>
    )

    }
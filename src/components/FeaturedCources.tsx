import Link from 'next/link'
import courseData from '../data/music_courses.json'



export default function FeaturedCources() {
    courseData.courses.filter((course) => course.isFeatured)
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
                    Test
                </div>

            </div>
            <div className='mt-20 text-center'>
                <Link href='/cources'>
                <button className="bg-white dark:bg-black text-black py-2 px-10 rounded-md border-2 border-radius-50
                dark:text-white border-neutral-200 dark:border-slate-800">
                    View All Cources
                </button>
                </Link>
            </div>
        </div>
    )

    }
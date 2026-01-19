import { Title } from './ui/text'
import { getLatestBlogs } from '@/sanity/queries'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'
import { Calendar } from 'lucide-react'
import dayjs from 'dayjs'


const LatestBlog = async () => {
  const blogs = await getLatestBlogs()

  return (
    <div className="mb-10 lg:mb-20">
      <Title className="text-lg text-black">Latest Blog</Title>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {blogs?.map((blog) => (
          <div
            key={blog?._id}
            className="rounded-lg overflow-hidden bg-white shadow-sm"
          >
            {blog?.mainImage && (
              <Link href={`/blog/${blog?.slug?.current}`}>
                <div className="relative w-full aspect-4/3">
                  <Image
                    src={urlFor(blog.mainImage).url()}
                    alt="blogImage"
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
            )}

            <div className="bg-shop_light_bg p-5">
              <div className="text-xs flex items-center gap-5">
                <div className="flex items-center relative group cursor-pointer">
                  {blog?.blogcategories?.map((item, index) => (
                    <p
                      key={index}
                      className="font-semibold text-shop_gold tracking-wider"
                    >
                      {item?.title}
                    </p>
                  ))}
                  <span className="absolute left-0 -bottom-1.5 bg-lightColor/30 inline-block w-full h-0.5 group-hover:bg-shop_gold hover:cursor-pointer hoverEffect" />
                </div>
                <p className="flex items-center gap-1 text-lightColor relative group hover:cursor-pointer hover:text-shop_gold hoverEffect">
                    <Calendar size={15} />{" "}
                    {dayjs(blog.publishedAt).format("MMMM D, YYYY")}
                    <span className="absolute left-0 -bottom-1.5 bg-lightColor/30 inline-block w-full h-0.5 group-hover:bg-shop_gold hover:cursor-pointer hoverEffect" />
                </p>
              </div>
              <div>
                <Link href={`/blog/${blog?.slug?.current}`} 
                 className="text-base font-semibold tracking-wide mt-5 line-clamp-2 hover:text-shop_gold hoverEffect"
                >
                    {blog?.title}</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBlog;


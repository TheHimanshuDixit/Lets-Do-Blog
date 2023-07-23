import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { BsFillTrashFill } from 'react-icons/bs';
import { FaEdit } from 'react-icons/fa';

const PORT = "https://lets-do-blog-ghvznq5ki-thehimanshudixit.vercel.app";

const Addblogs = () => {
  const Router = useRouter();

  const blogInitial = [

  ]
  const [blogs, setAllblogs] = useState(blogInitial)
  const [change, setChange] = useState(true)

  const getblogs = async () => {
    if (localStorage.getItem('token')) {
      fetch(`${PORT}/api/specificuserblog`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token'),
        }
      })
        .then(res => res.json())
        .then(data => {
          setAllblogs(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      Router.push('/login')
    }
    getblogs();
  }, [])

  const [id, setId] = useState('')
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [author, setAuthor] = useState('')
  const [imagelink, setImagelink] = useState('')
  const [metadata, setMetadata] = useState('')
  const [desc, setDesc] = useState('')

  const handleChange = (e) => {
    if (e.target.name === 'title') {
      setTitle(e.target.value)
    }
    if (e.target.name === 'slug') {
      setSlug(e.target.value)
    }
    if (e.target.name === 'author') {
      setAuthor(e.target.value)
    }
    if (e.target.name === 'imagelink') {
      setImagelink(e.target.value)
    }
    if (e.target.name === 'metadata') {
      setMetadata(e.target.value)
    }
    if (e.target.name === 'desc') {
      setDesc(e.target.value)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const addblog = { title, slug, desc, image: imagelink, author, metadata }
    // console.log(blog)
    const response = await fetch(`${PORT}/api/blogs`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
      },
      body: JSON.stringify(addblog)
    });
    const resp = await response.json();
    getblogs();
    alert("Blog Added Successfully");
    setTitle('')
    setSlug('')
    setAuthor('')
    setImagelink('')
    setMetadata('')
    setDesc('')
  }

  const handleEdit = (blog) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    // console.log(blog);
    setChange(false)
    setTitle(blog.title);
    setSlug(blog.slug)
    setAuthor(blog.author)
    setImagelink(blog.image)
    setMetadata(blog.metadata)
    setDesc(blog.desc)
    setId(blog._id)
  }


  const handleUpdate = async (e) => {
    e.preventDefault();
    const update = { id, title, slug, desc, image: imagelink, author, metadata };
    const response = await fetch('/api/updateblogs', {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
      },
      body: JSON.stringify(update)
    });
    const json = await response.json();
    getblogs();
    alert("Blog Updated Successfully");
    setChange(true)
    setTitle('')
    setSlug('')
    setAuthor('')
    setImagelink('')
    setMetadata('')
    setDesc('')
    setId('')
  }

  const handleDelete = async (id) => {
    fetch(`${PORT}/api/deleteblogs`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
      },
      body: JSON.stringify({ id })
    })
      .then(res => res.json())
      .then(data => {
        alert("Blog Deleted Successfully");
        const newBlogs = blogs.filter((blog) => { return blog._id !== id });
        setAllblogs(newBlogs)
      })
  }




  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Add Blog Here</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, natus!</p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="title" className="leading-7 text-sm text-gray-600">Enter title</label>
                  <input value={title} onChange={handleChange} type="text" id="title" name="title" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="slug" className="leading-7 text-sm text-gray-600">Enter unique slug</label>
                  <input value={slug} onChange={handleChange} type="text" id="slug" name="slug" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="author" className="leading-7 text-sm text-gray-600">Enter author name</label>
                  <input value={author} onChange={handleChange} type="text" id="author" name="author" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="imagelink" className="leading-7 text-sm text-gray-600">Enter image link</label>
                  <input value={imagelink} onChange={handleChange} type="text" id="imagelink" name="imagelink" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="metadata" className="leading-7 text-sm text-gray-600">Enter brief</label>
                  <input value={metadata} onChange={handleChange} type="text" id="metadata" name="metadata" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="desc" className="leading-7 text-sm text-gray-600">Enter description</label>
                  <textarea value={desc} onChange={handleChange} name='desc' id="desc" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-full">
                {change && <button onClick={handleSubmit} className="flex mx-auto text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">Submit</button>}
                {!change && <div className='flex'>
                  <button className="flex mx-auto text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg" onClick={() => {
                    setChange(true);
                    setTitle('');
                    setSlug('');
                    setAuthor('');
                    setImagelink('');
                    setMetadata('');
                    setDesc('');
                  }}>Close</button>
                  <button onClick={handleUpdate} className="flex mx-auto text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">Update</button>
                </div>}
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <h1 className="text-gray-900 title-font text-2xl mb-2 sm:mb-0 text-center font-bold underline">Your Blogs</h1>
          <div className="flex flex-wrap sm:m-4 mx-4 -mb-10 -mt-4 justify-center">
            {Object.keys(blogs).map((blogitem) => {
              return <div key={blogs[blogitem].slug} className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img alt="content" className="object-cover object-center h-full w-full" src={blogs[blogitem].image} />
                </div>
                <div className='flex justify-between'>
                  <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{blogs[blogitem].title}</h2>
                  <div className='flex justify-center items-end p-1'>
                    <FaEdit className='mx-1 text-pink-400 cursor-pointer' onClick={() => { handleEdit(blogs[blogitem]) }} />
                    <BsFillTrashFill className='mx-1 text-pink-400 cursor-pointer' onClick={() => { handleDelete(blogs[blogitem]._id) }} />
                  </div>
                </div>
                <p className="text-base leading-relaxed mt-2">{blogs[blogitem].metadata}.</p>
                <Link href={'/blogpost/' + blogs[blogitem].slug} className="text-pink-500 inline-flex items-center mt-3">Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>

            })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Addblogs
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Addblogs = () => {
  const Router = useRouter();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      fetch('http://localhost:3000/api/specificuserblog', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token'),
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }, [])

  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [author, setAuthor] = useState('')
  const [imagelink, setImagelink] = useState('')
  const [metadata, setMetadata] = useState('')
  const [desc, setDesc] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    const blog = { title, slug, desc, image: imagelink, author, metadata }
    // console.log(blog)
    fetch('http://localhost:3000/api/blogs', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
      },
      body: JSON.stringify(blog)
    }).then(res => res.json())
      .then(data => {
        console.log(data)
        setTitle('')
        setSlug('')
        setAuthor('')
        setImagelink('')
        setMetadata('')
        setDesc('')
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

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



  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Add Blog Here</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, natus!</p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-wrap -m-2">
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
                <button type='submit' className="flex mx-auto text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Addblogs
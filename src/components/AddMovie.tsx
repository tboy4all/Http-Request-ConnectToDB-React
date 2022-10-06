import React, { useRef } from 'react'

import classes from './AddMovie.module.css'

function AddMovie(props: any) {
  const initialRef: any = ''
  const titleRef = useRef(initialRef)
  const openingTextRef = useRef(initialRef)
  const releaseDateRef = useRef(initialRef)

  function submitHandler(event: React.FormEvent) {
    event.preventDefault()

    // could add validation here...

    const movie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    }

    props.onAddMovie(movie)
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' ref={titleRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='opening-text'>Opening Text</label>
        <textarea rows={5} id='opening-text' ref={openingTextRef}></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor='date'>Release Date</label>
        <input type='text' id='date' ref={releaseDateRef} />
      </div>
      <button>Add Movie</button>
    </form>
  )
}

export default AddMovie

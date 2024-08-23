import React from 'react'

const Bookmark = ({bookmark}) => {
  return (
   <section className="bookmark">
    <div>
        {bookmark.length ? (
            <div>
                {bookmark.map((item)=>(
                    <p>{`id:${item}`}</p>
                ))}
            </div>
        ) : <p>No bookmark</p>}
    </div>
    </section>
  )
}

export default Bookmark

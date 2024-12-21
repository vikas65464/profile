import React from 'react'

export default function Product() {
    const data=["vikas","chandu","ironman","kingkong"]
  return (
    <div>
        {
            data.map((x)=>(<li><h1>{x}</h1></li>))
        }
    </div>
  )
}

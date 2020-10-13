import React from 'react'

export const Artist = props => {
  return (
    <div className="artist">
      <a href={props.link} target="_blank">
        <h2> {props.name}</h2>
      </a>
    </div>
  )
}
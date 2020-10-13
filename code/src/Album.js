import React from 'react'
import data from './data.json'
import { Artist } from 'Artist.js'

export const Album = (props) => {
  console.log(props)
  return (
    <article className="album">
      < a href={props.link} target="_blank">
        <img src={props.image} alt="cover"></img>
      </a>
      <h1>{props.name}</h1>
      <div>
        {props.artists.map(artist => {
          return <Artist key={artist.id} name={artist.name} link={artist.external_urls.spotify} />
        })}
      </div>
    </article>
  )
}

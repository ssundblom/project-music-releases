import React from 'react'
import data from './data.json'
import { Artist } from 'Artist.js'

export const Album = props => {
  return (
    <div>
      Album: {props.name}
      {data.albums.items.map(artist => {
        console.log(artist.artists[0].name)
        return <Artist key={artist.artists[0].name} name={artist.artists[0].name} />
      })}
    </div>
  )
}

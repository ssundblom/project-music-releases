import React from 'react'
import data from './data.json'
import { Album } from './Album.js'
import { Artist } from './Artist.js'
import './index.css'

console.log(data)

export const App = () => {
  return (
    <div className="albumContainer">
      {data.albums.items.map(album => {
        return <Album key={album.id} name={album.name} image={album.images[0].url} link={album.external_urls.spotify} artists={album.artists} />
      })}
    </div>
  )
}


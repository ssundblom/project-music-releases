import React from 'react'
import data from './data.json'
import { Album } from './Album.js'
// import { Artist } from './Artist.js'

console.log(data)

export const App = () => {
  return (
    <div>
      {data.albums.items.map(album => {
        console.log(album.name)
        return <Album key={album.name} name={album.name} />
      })}
    </div>
  )
}

// export const App = () => {
//   return (
//     <div>
//       {data.albums.items.map(artist => {
//         return <Artist key={artist.artists[0].name} name={artist.artists[0].name} />
//       })}
//     </div>
//   )
// }

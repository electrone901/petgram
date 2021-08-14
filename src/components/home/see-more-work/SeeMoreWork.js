import React from 'react'
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  itemData,
  StylesProvider,
} from '@material-ui/core'
import StarBorderIcon from '@material-ui/icons/StarBorder'

const imgData = [
  {
    img:
      'https://raw.githubusercontent.com/electrone901/petgram/main/src/images/see-more-work/1.jpeg',
    title: 'Buba',
    author: 'David Guetta',
    featured: true,
  },
  {
    img:
      'https://raw.githubusercontent.com/electrone901/petgram/main/src/images/see-more-work/2.jpg',
    title: 'Mr Vens',
    author: 'David Guetta',
    featured: false,
  },
  {
    img:
      'https://raw.githubusercontent.com/electrone901/petgram/main/src/images/see-more-work/3.jpg',
    title: 'Fionna',
    author: 'David Guetta',
    featured: false,
  },
  {
    img:
      'https://raw.githubusercontent.com/electrone901/petgram/main/src/images/see-more-work/4.jpeg',
    title: 'goodie',
    author: 'David Guetta',
    featured: true,
  },

  {
    img:
      'https://github.com/electrone901/petgram/blob/main/src/images/see-more-work/5.jpeg',
    title: 'Lucy',
    author: 'David Guetta',
    featured: false,
  },
  {
    img:
      'https://raw.githubusercontent.com/electrone901/petgram/main/src/images/see-more-work/6.jpeg',
    title: 'Lion',
    author: 'David Guetta',
    featured: false,
  },

  {
    img:
      'https://raw.githubusercontent.com/electrone901/petgram/main/src/images/see-more-work/6.jpeg',
    title: 'Little lion',
    author: 'David Guetta',
    featured: true,
  },
]

function SeeMoreWork() {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: 'black',
      }}
    >
      <ImageList
        rowHeight={200}
        gap={1}
        style={{ width: 550, transform: 'translateZ(0)' }}
      >
        {imgData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.featured ? 2 : 1}
            rows={item.featured ? 2 : 1}
          >
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              position="top"
              actionIcon={
                <IconButton
                  aria-label={`star ${item.title}`}
                  style={{ color: 'white' }}
                >
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
              style={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  )
}

export default SeeMoreWork

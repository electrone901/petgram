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

import img1 from '../../../images/see-more-work/2.jpg'
const imgData = [
  {
    img:
      'https://images.unsplash.com/photo-1616058106290-8ec871aef47d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80',
    title: 'Buba',
    author: 'David Guetta',
    featured: true,
  },
  {
    img: '../../../images/see-more-work/2.jpg',
    title: 'Buba',
    author: 'David Guetta',
    featured: false,
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
        // backgroundColor: 'black',
      }}
    >
      <ImageList
        rowHeight={200}
        gap={1}
        style={{ width: 500, height: 450, transform: 'translateZ(0)' }}
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

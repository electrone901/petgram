import React from 'react'
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import ListSubheader from '@material-ui/core/ListSubheader'
import ImageListItemBar from '@material-ui/core/ImageListItemBar'
import './PetGallery.css'

const itemData = [
  {
    img: 'https://siasky.net/BACR1MMP7SnHgOfaAqWiYbUmeTy9bbql3yRAJtB8fWWgug/',
    title: 'Doggy Mo',
    author: 'Albert Lee',
    cols: 1,
  },

  {
    img: 'https://siasky.net/IABzyC1tIS5YVwp6I-vbHRCYY6P8l_PPXxnshWz_Fdjfdw',
    title: 'Birdthy ',
    author: 'Joe Lee',
    cols: 1,
  },

  {
    img: 'https://siasky.net/AAD4luU9OyDiOX3Rm5ns2KuzLdkp8REMZKqY69x33izvaQ',
    title: 'Doggy Kin',
    author: 'Albert Lee',
    cols: 1,
  },

  {
    img: 'https://siasky.net/BACR1MMP7SnHgOfaAqWiYbUmeTy9bbql3yRAJtB8fWWgug/',
    title: 'Doggy Mo',
    author: 'Albert Lee',
    cols: 1,
  },
  {
    img: 'https://siasky.net/_Al2dUTWsyrnh2mZF4r3DWB8UQMmHDkJEA4lf0zhg3Hw7Q',
    title: 'Doggy Mo',
    author: 'Albert Lee',
    cols: 1,
  },
  {
    img: 'https://siasky.net/AAD4luU9OyDiOX3Rm5ns2KuzLdkp8REMZKqY69x33izvaQ',
    title: 'Doggy Kin',
    author: 'Albert Lee',
    cols: 1,
  },

  {
    img: 'https://siasky.net/BACR1MMP7SnHgOfaAqWiYbUmeTy9bbql3yRAJtB8fWWgug/',
    title: 'Doggy Mo',
    author: 'Albert Lee',
    cols: 1,
  },
  {
    img: 'https://siasky.net/_Al2dUTWsyrnh2mZF4r3DWB8UQMmHDkJEA4lf0zhg3Hw7Q',
    title: 'Doggy Mo',
    author: 'Albert Lee',
    cols: 1,
  },
  {
    img: 'https://siasky.net/BACR1MMP7SnHgOfaAqWiYbUmeTy9bbql3yRAJtB8fWWgug/',
    title: 'Doggy Mo',
    author: 'Albert Lee',
    cols: 1,
  },
  {
    img: 'https://siasky.net/_Al2dUTWsyrnh2mZF4r3DWB8UQMmHDkJEA4lf0zhg3Hw7Q',
    title: 'Doggy Mo',
    author: 'Albert Lee',
    cols: 1,
  },
  {
    img: 'https://siasky.net/AAD4luU9OyDiOX3Rm5ns2KuzLdkp8REMZKqY69x33izvaQ',
    title: 'Doggy Kin',
    author: 'Albert Lee',
    cols: 1,
  },

  {
    img: 'https://siasky.net/BACR1MMP7SnHgOfaAqWiYbUmeTy9bbql3yRAJtB8fWWgug/',
    title: 'Doggy Mo',
    author: 'Albert Lee',
    cols: 1,
  },
  {
    img: 'https://siasky.net/_Al2dUTWsyrnh2mZF4r3DWB8UQMmHDkJEA4lf0zhg3Hw7Q',
    title: 'Doggy Mo',
    author: 'Albert Lee',
    cols: 1,
  },
]

function PetGallery() {
  return (
    <div className="root">
      <ImageList rowHeight={350} cols={4}>
        <ImageListItem key="Subheader" cols={4} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>by: {item.author}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${item.title}`}
                  className="icon"
                >
                  <Button variant="contained" size="small" color="primary">
                    View
                  </Button>
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  )
}

export default PetGallery

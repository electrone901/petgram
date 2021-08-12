import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import ListSubheader from '@material-ui/core/ListSubheader'
import ImageListItemBar from '@material-ui/core/ImageListItemBar'
import './PetGallery.css'
import CircularStatic from './CircularProgressWithLabel'
import { apiKey } from '../../APIKEYS'

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
// git commit -m "connected to nftStorage and fetched petsData.Render data on PetGallery from nft.storage"
function PetGallery() {
  const [petsData, setPetsData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const loadPets = async () => {
      try {
        setLoading(true)

        let cids = await fetch('https://api.nft.storage', {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
        })
        cids = await cids.json()

        const temp = []
        for (let cid of cids.value) {
          if (cid?.cid) {
            let data = await fetch(
              `https://ipfs.io/ipfs/${cid.cid}/metadata.json`,
            )

            data = await data.json()

            // formats the imageURL
            const getImage = (ipfsURL) => {
              if (!ipfsURL) return
              ipfsURL = ipfsURL.split('://')
              return 'https://ipfs.io/ipfs/' + ipfsURL[1]
            }

            data.image = await getImage(data.image)
            data.cid = cid.cid
            data.created = cid.created
            temp.push(data)
          }
        }
        setPetsData(temp)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    loadPets()
  }, [])

  return (
    <div style={{ minHeight: '70vh' }}>
      {loading ? (
        <CircularStatic />
      ) : (
        <ImageList rowHeight={350} cols={5} style={{ paddingBottom: '3rem' }}>
          <ImageListItem
            key="Subheader"
            cols={5}
            style={{ height: 'auto' }}
          ></ImageListItem>

          {petsData.length ? (
            petsData.map((pet, index) => (
              <ImageListItem key={index}>
                <img src={pet.image} alt={pet.name} />
                <ImageListItemBar
                  title={pet.name}
                  subtitle={<span>by: {pet.description}</span>}
                  actionIcon={
                    <IconButton
                      aria-label={`info about ${pet.name}`}
                      className="icon"
                    >
                      <Button
                        variant="contained"
                        size="small"
                        component={Link}
                        to={`/pet-details/${pet.image}`}
                        className="view-btn"
                      >
                        View
                      </Button>
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))
          ) : (
            <h2>No Pets Yet...</h2>
          )}
        </ImageList>
      )}
    </div>
  )
}

export default PetGallery

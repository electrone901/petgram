import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import ImageListItemBar from '@material-ui/core/ImageListItemBar'
import './PetGallery.css'
import CircularStatic from '../commons/CircularProgressWithLabel'
import { apiKey } from '../../APIKEYS'

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

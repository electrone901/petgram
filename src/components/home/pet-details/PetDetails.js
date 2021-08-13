import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import { StylesProvider } from '@material-ui/core/styles'
import {
  TextField,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  IconButton,
} from '@material-ui/core'

import { apiKey } from '../../../APIKEYS'
import './PetDetails.css'
import { CircularStatic } from '../../commons/CircularProgressWithLabel'

function PetDetails({ account, contractData }) {
  const { petId } = useParams()
  const [petsData, setPetsData] = useState('')
  const [image, setPetImage] = useState([])
  const [petName, setPetName] = useState([])
  const [petOwner, setOwnerName] = useState([])
  const [petCategory, setPetCategory] = useState([])
  const [comment, setComment] = useState('')

  // const [metadata, setMetadata] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getImage = (ipfsURL) => {
      if (!ipfsURL) return
      ipfsURL = ipfsURL.split('://')
      return 'https://ipfs.io/ipfs/' + ipfsURL[1]
    }

    const getMetadata = async () => {
      let data = await fetch(`https://ipfs.io/ipfs/${petId}/metadata.json`)
      data = await data.json()
      const [petOwner, petCategory] = data.description.split(',')
      const imageFormated = getImage(data.image)
      setPetImage(imageFormated)
      setPetName(data.name)
      setOwnerName(petOwner)
      setPetCategory(petCategory)
      // setMetadata(data)
    }
    if (petId) {
      getMetadata()
      getImage()
    }
  }, [petId, contractData])

  const handleChange = (event) => {
    setComment(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    const newObj = { author: 'Guest', content: comment }
    const commentArr = [...pet.comments, newObj]
    pet.comments = [...pet.comments, newObj]
    setComment('')
  }
  const pet = {
    name: 'Oliver',
    img: 'https://siasky.net/OADaRfw_nMqqXCz5NXXLq5xN6R3nScEKbzsRdqdEQrLL5A',
    type: 'Cat',
    Owner: 'Luis C',
    likes: 20,
    comments: [
      { author: 'Albert', content: 'This is awesome' },
      { author: 'Angie', content: 'So Cute~' },
    ],
  }

  const mintNFT = async () => {
    console.log('mintNFT ~ contractData', contractData)
    const response = await contractData.methods
      .mintPetNFT(
        'https://bafyreici4jgujgf6x6pzaqw4ayh5byu4rnrnfknlmma6a45zocluc7g2ou.ipfs.dweb.link/metadata.json',
      )
      .send({ from: account })
  }

  const getNFTMetadata = async () => {
    const temp = []
    const totalSupply = await contractData.methods.totalSupply().call()

    for (let i = 1; i <= totalSupply; i++) {
      try {
        let metadataURL = await contractData.methods.tokenURI(i).call()

        // metadataURL = metadataURL.split('://')

        let data = await fetch(metadataURL)
        data = await data.json()
        console.log(
          '🚀 ~ file: PetDetails.js ~ line 70 ~ getNFTMetadata ~ data',
          data,
        )

        temp.push(data)
      } catch (error) {
        console.error(error)
      }
    }
    setPetsData(temp)
  }


  return (
    <StylesProvider injectFirst>
      <Container className="root-pet-details">
        <div className="">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} className="grid-container">
              <div className="flex-container">
                <h2>{`${petName} the ${petCategory}`}</h2>
                <Button
                  variant="contained"
                  className="wallet-btn"
                  color="primary"
                  onClick={mintNFT}
                >
                  Mint NFT
                </Button>
              </div>

              <img className="img" src={image} alt="pet" />
              <div className="flex-container">
                <div>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>

                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </div>

                <Typography variant="body1" color="primary">
                  {pet.likes} Likes
                </Typography>
              </div>

              <Typography
                gutterBottom
                variant="subtitle1"
                className="details-text"
              >
                Pet's Details
              </Typography>

              <Typography variant="body2" gutterBottom className="details-text">
                Full rights and credits to the owner @{petOwner}...
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <form noValidate autoComplete="off">
                <TextField
                  id="outlined-basic"
                  label="Comment"
                  variant="outlined"
                  value={comment}
                  onChange={handleChange}
                  className="text-field"
                />
              </form>
              <Button type="submit" variant="contained" onClick={handleSubmit}>
                Add comment
              </Button>

              {pet?.comments ? (
                pet.comments.map((comment, id) => (
                  <List key={id}>
                    <ListItem style={{ paddingLeft: '0px' }}>
                      <ListItemAvatar>
                        <Avatar alt="Remy Sharp" />
                      </ListItemAvatar>
                      <ListItemText
                        secondary={
                          <React.Fragment>
                            <Typography
                              component="span"
                              variant="body2"
                              className="inline"
                              color="textPrimary"
                            >
                              {comment.author}
                            </Typography>
                            {` ${comment.content}`}
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                  </List>
                ))
              ) : (
                <h2>No comments</h2>
              )}
            </Grid>
          </Grid>
        </div>
      </Container>
    </StylesProvider>
  )
}

export default PetDetails

import React from 'react'
import Paper from '@material-ui/core/Paper'
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
import Web3 from 'web3'
import MyPet from '../../../abis/Pet.json'

import './PetDetails.css'

function PetDetails({ account, contractData }) {
  // const [account, setAccount] = React.useState('')
  // const [contractData, setContractData] = React.useState('')
  const [comment, setComment] = React.useState('')

  const handleChange = (event) => {
    setComment(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    const newObj = { author: 'Guest', content: comment }
    const commentArr = [...pet.comments, newObj]
    console.log(
      '🚀 ~ file: PetDetails.js ~ line 22 ~ handleSubmit ~ commentArr',
      commentArr,
    )
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

    console.log('mintNFT ~ response', response)
  }

  const getNFTMetadata = async () => {
    const metadataURI = await contractData.tokenURI(
      'https://bafyreia4vo2b4fd2hyjn7pqgme3iigrh2rwutbct3oz7ymveaqw7pz4xki.ipfs.dweb.link/metadata.json',
    )
    const metadata = await contractData.getIPFSJSON(metadataURI)
    console.log(
      '🚀 ~ file: PetDetails.js ~ line 66 ~ getNFTMetadata ~ metadata',
      metadata,
    )

    return { metadata, metadataURI }
  }

  return (
    <StylesProvider injectFirst>
      <Container className="root-pet-details">
        <div className="">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <h2>{`${pet.name} the ${pet.type}`}</h2>

              <Button variant="contained" onClick={getNFTMetadata}>
                getNFTMetadata
              </Button>

              <img className="img" src={pet.img} alt="pet" />
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

              <Typography gutterBottom variant="subtitle1">
                Pet's Details
              </Typography>

              <Typography variant="body2" gutterBottom>
                Full rights and credits to the owner @{pet.Owner}...
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                className="wallet-btn"
                color="primary"
                onClick={mintNFT}
              >
                Mint NFT
              </Button>
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

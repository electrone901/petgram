import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Comment from './Comment'

import './PetDetails.css'

function PetDetails() {
  const [comment, setComment] = React.useState('')

  const handleChange = (event) => {
    setComment(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('comment', comment)
  }
  const pet = {
    name: 'Oliver',
    img: 'https://siasky.net/OADaRfw_nMqqXCz5NXXLq5xN6R3nScEKbzsRdqdEQrLL5A',
    type: 'Cat',
    Owner: 'Luis C',
    likes: 20,
    comments: [{ Albert: 'This is awesome' }, { Angie: 'So Cute~' }],
  }
  return (
    <Container className="root">
      <div className="">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <h1>Pet's Details</h1>
            <img className="img" src={pet.img} alt="pet" />
            <Typography gutterBottom variant="subtitle1">
              {`${pet.name} the ${pet.type}`}
            </Typography>
            <Typography variant="body2" gutterBottom>
              Full rights to the owner {pet.Owner}
            </Typography>
            <Button variant="contained" color="primary" className="like-btn">
              {pet.likes} Likes
            </Button>
            <Button variant="contained" className="wallet-btn">
              Connect Wallet to Mint NFT
            </Button>
          </Grid>

          <Grid item xs={12} sm={6} className="cl-2">
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
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}

export default PetDetails

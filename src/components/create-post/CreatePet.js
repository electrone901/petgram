import React from 'react'
import {
  TextField,
  Container,
  StylesProvider,
  Typography,
  Button,
  IconButton,
  MenuItem,
} from '@material-ui/core'
import PhotoCamera from '@material-ui/icons/PhotoCamera'

import './CreatePet.css'

function CreatePet() {
  const petTypeRef = React.createRef()
  const [image, setImage] = React.useState('')
  const [petName, setPetName] = React.useState('')
  const [ownerName, setOwnerName] = React.useState('')
  const [petType, setPetType] = React.useState('')

  const handleImage = ({ target }) => {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(target.files[0])
    fileReader.onload = (e) => {
      setImage(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPetType('')
    setImage('')
    console.log('petType', petType)
  }

  console.log('petType', petType)
  console.log('petName', petName)
  console.log('ownerName', ownerName)

  return (
    <StylesProvider injectFirst>
      <Container className="root-create-pet">
        <Typography className="title" color="textPrimary" gutterBottom>
          Add a photo of your pet
        </Typography>
        <div className="form-container">
          <form className="form" noValidate autoComplete="off">
            <input
              accept="image/*"
              className="input"
              id="icon-button-photo"
              defaultValue={image}
              onChange={handleImage}
              type="file"
            />
            <label htmlFor="icon-button-photo">
              <IconButton color="primary" component="span">
                <PhotoCamera />
              </IconButton>
            </label>

            <TextField
              fullWidth
              id="outlined-basic"
              label="Pet's name"
              variant="outlined"
              className="text-field"
              defaultValue={petName}
              onChange={(e) => setPetName(e.target.value)}
            />

            <TextField
              fullWidth
              id="outlined-basic"
              label="Owner's name"
              variant="outlined"
              className="text-field"
              defaultValue={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
            />

            <TextField
              fullWidth
              name="petType"
              select
              label="Choose one option"
              variant="outlined"
              className="text-field"
              onChange={(e) => setPetType(e.target.value)}
              defaultValue=""
              ref={petTypeRef}
            >
              <MenuItem value="Cat">Cat</MenuItem>
              <MenuItem value="Dog">Dog</MenuItem>
              <MenuItem value="Bird">Bird</MenuItem>
              <MenuItem value="Fish">Fish</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </TextField>

            <Button size="large" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </div>
      </Container>
    </StylesProvider>
  )
}

export default CreatePet

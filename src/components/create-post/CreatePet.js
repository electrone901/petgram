import React from 'react'
import {
  TextField,
  Container,
  StylesProvider,
  Typography,
  Button,
  IconButton,
  MenuItem,
  SelectField,
} from '@material-ui/core'
import PhotoCamera from '@material-ui/icons/PhotoCamera'

import './CreatePet.css'

function CreatePet() {
  const [image, setImage] = React.useState('')
  const [petType, setPetType] = React.useState('')

  const handleImage = ({ target }) => {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(target.files[0])
    fileReader.onload = (e) => {
      setImage(e.target.value)
      console.log('image', image)
    }
  }

  const handlePetType = (e, value) => {
    setPetType(e.target.value)
  }

  const petTypes = ['Cat', 'Dog', 'Bird', 'Fish', 'other']
  const petCategories = (petTypes) => {
    petTypes.autoComplete((type) => (
      <MenuItem
        key={type}
        insetChildren={true}
        value={type}
        primaryText={type}
      ></MenuItem>
    ))
  }
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
            />

            <TextField
              fullWidth
              id="outlined-basic"
              label="Owner's name"
              variant="outlined"
              className="text-field"
            />

            {/* <SelectField  multiple={true} hintText="Select your pet type" values={values} onChange={}>
            {petCategories}
          </SelectField> */}
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

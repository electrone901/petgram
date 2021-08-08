import React from 'react'
import TextField from '@material-ui/core/TextField'

function Comment() {
  return (
    <div>
      <form className="form" noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Comment" variant="outlined" />
      </form>
    </div>
  )
}

export default Comment

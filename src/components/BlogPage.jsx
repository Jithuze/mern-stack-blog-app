import { Button, TextField } from '@mui/material'
import { teal } from '@mui/material/colors';
import React from 'react';

const BlogPage = () => {
  return (
    <div>
      <div className="container">
        <div className="form_container">
            <TextField id="outlined-basic" label="Blog Name" variant="outlined" />
            <TextField id="outlined-basic" label="Description" variant="outlined" />
            <TextField id="outlined-basic" label="Author Name" variant="outlined" />
            <Button 
            sx={{
              color: 'white', 
              backgroundColor: teal[500], 
              '&:hover': {
                backgroundColor: teal[300],
              },
            }}
          >Post Blog</Button>
        </div>
      </div>
    </div>
  )
}

export default BlogPage

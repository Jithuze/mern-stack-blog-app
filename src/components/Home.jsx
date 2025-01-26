import React from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Home = () => {
  const [blogs, setBlogs] = React.useState([]);

  React.useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className='blog_container'>
        <div className="slide">
        <marquee behavior="scroll" direction="right">New Blogs are Out...</marquee>
        </div>
        <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: 'repeat(auto-fill, minmax(300px,fr))', p: 3 }}>
        {blogs.map((blog) => (
            <Card key={blog.id} sx={{ minWidth: 275, boxShadow: 3 }}>
            <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                {blog.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {blog.body}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
            </Card>
        ))}
        </Box>
    </div>
  );
};

export default Home;

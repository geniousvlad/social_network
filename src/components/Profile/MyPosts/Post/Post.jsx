import React from 'react';
import s from './Post.module.css';


const Post = (props) => {


    return (      
            <div className={s.item}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSkKPpYse7S9_9Al6IirzF5DyWuPyFISkXTcd94TMU7dDHMn0We" />
             { props.message }
              <div>
    <span className={s.like_count}>likes: { props.like }</span>
              </div>
            </div>           
                
    )
}

export default Post;

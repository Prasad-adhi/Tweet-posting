import classes from "./Post.module.css";
export default function Post({author,description})
{
    return (
        <div className={classes.post}>
            <p className={classes.author}>{author}</p>
            <p className={classes.text}>{description}</p>
        </div> 
    );
}
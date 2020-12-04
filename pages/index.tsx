import { getAllPosts, Post } from "../lib/api";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

import { useState } from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    topBar: {
        marginBottom: 30,
    },
    toolBar: {
        display: 'flex',
        justifyContent: 'center'
    },
    tagButton: {
        marginRight: 15,
    },
}));

const Home = ({ posts, tags }) => {
    const [tagSelected, setTagSelected] = useState<string>();
    const classes = useStyles();
    return (
        <>
            <AppBar position="static" className={classes.topBar}>
                <Toolbar className={classes.toolBar}>
                    {tags.map(tag => (
                        <Button
                            className={classes.tagButton}
                            variant="contained"
                            key={tag}
                            onClick={() => setTagSelected(tag)}
                        >
                            {tag}
                        </Button>
                    ))}
                    <Button
                        className={classes.tagButton}
                        variant="contained"
                        key="all"
                        onClick={() => setTagSelected(undefined)}
                    >
                        Tout
                    </Button>
                </Toolbar>
            </AppBar>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={2}>
                    {posts.filter((post) => {
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
                        return tagSelected == undefined || post.tags?.includes(tagSelected);
                    })
                        .map((post: Post) => (
                            <Grid key={post.slug} item>
                                <Card className={classes.root} >
                                    <CardContent>
                                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                                            {post.title}
                                        </Typography>
                                        {post.summary}
                                        {post.tags && post.tags?.map((tag) => {
                                            return (
                                                <Chip
                                                    key={tag}
                                                    className={classes.tagButton}
                                                    label={tag}
                                                    onClick={() => setTagSelected(tag)}
                                                ></Chip>
                                            );
                                        })}
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small"><a href={`/posts/${post.slug}`}>Lire l'article</a></Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                </Grid>
            </Grid>
        </>
    );
};

// eslint-disable-next-line @typescript-eslint/require-await
export async function getStaticProps() {
    const posts = getAllPosts([
        'title',
        'slug',
        'author',
        'tags',
        'summary',
    ]);
    const tags = new Set();
    posts.forEach((post) => {
        post.tags?.forEach((tag) => {
            tags.add(tag);
        });
    });
    return {
        props: {
            posts,
            tags: Array.from(tags),
        }
    };
}

export default Home;

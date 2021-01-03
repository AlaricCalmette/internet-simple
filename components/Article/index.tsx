import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Post } from '../../lib/api';
import { UseAppContext } from '../../lib/context';
import { HoverableCard, UnstyledLink } from './styles';

interface ArticleProps {
    post: Post;
}

const useStyles = makeStyles(() => ({
    root: {
        minWidth: 275,
        marginBottom: 10,
    },
    title: {
        flexGrow: 1,
    },
    tagButton: {
        marginRight: 15,
    },
}));

const Article = ({post}: ArticleProps) => {
    const {setSelectedTag} = UseAppContext();
    const classes = useStyles();
    return (
        <Grid key={post.slug} item>
            <UnstyledLink href={`/posts/${post.slug}`}>
                <HoverableCard className={classes.root}>
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
                                // eslint-disable-next-line @typescript-eslint/no-unsafe-return
                                onClick={() => setSelectedTag(tag)}
                                ></Chip>
                            );
                        })}
                    </CardContent>
                    <CardActions>
                        <Button size="small"><a href={`/posts/${post.slug}`}>Lire l'article</a></Button>
                    </CardActions>
                </HoverableCard>
            </UnstyledLink>
        </Grid>
    );
};

export default Article;

import Grid from '@material-ui/core/Grid';
import { getAllPosts, Post } from "../lib/api";
import Category from '../components/Category';
import Layout from '../components/Layout';
import { UseAppContext } from '../lib/context';
import Article from '../components/Article';
interface HomeProps {
    posts: Post[];
    tags: string[];
}

const Home = ({ posts, tags }: HomeProps) => {
    const {selectedTag} = UseAppContext();
    return (
        <Layout tags={tags}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={2}>
                    {selectedTag ? 
                    posts.filter((post) => post.tags?.includes(selectedTag)).map((post) => {
                        return (
                            <Article key={post.slug} post={post}/>
                        );
                    }) :
                    tags.map((tag: string) => {
                        return (
                            <Category key={tag} posts={posts.filter((post: Post) => post.tags?.includes(tag))} title={tag} />
                        );
                    }).concat(<Category key='Other' posts={posts.filter((post: Post) => !post.tags)} title='Autres'/>)}
                </Grid>
            </Grid>
        </Layout>
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

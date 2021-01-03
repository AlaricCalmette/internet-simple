import { Post } from '../../lib/api';
import Article from '../Article';
import { CategoryTitle, CategoryWrapper } from './styles';

interface CategoryProps {
    posts: Post[];
    title: string;
}

const Category = ({posts, title}: CategoryProps) => {
    return (
        <CategoryWrapper elevation={3}>
            <CategoryTitle>{title.charAt(0).toUpperCase() + title.slice(1)}</CategoryTitle>
            <div>
                {posts.map((post) => {
                    return (
                        <Article key={post.slug} post={post}/>
                    );
                })}
            </div>
        </CategoryWrapper>
    );
};

export default Category;
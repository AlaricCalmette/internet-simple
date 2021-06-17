import TopBar from './TopBar';
import Header from './Header';

const Layout = ({tags, children}) => {
    return (
        <>
            <Header />
            <TopBar tags={tags}/>
            <div>
                {children}
            </div>
        </>
    );
};

export default Layout;

import TopBar from './TopBar';

const Layout = ({tags, children}) => {
    return (
        <>
            <TopBar tags={tags}/>
            <div>
                {children}
            </div>
        </>
    );
};

export default Layout;
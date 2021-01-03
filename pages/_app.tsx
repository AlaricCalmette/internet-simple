import '../lib/styles/styles.css';
import { AppWrapper } from '../lib/context';

export default function MyApp({ Component, pageProps }) {
    return (
        <AppWrapper>
            <Component { ...pageProps } />
        </AppWrapper>
    );
}

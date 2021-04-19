import '../lib/styles/styles.css';
import { AppWrapper } from '../lib/context';
import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: '70e3ecc2-f37f-4f60-ab24-34caec6be13d',
    clientToken: 'pub7307cfaa602d6e95b1376500ce8de2fb',
    site: 'datadoghq.eu',
    service:'netlify-internet-blog',
    // Specify a version number to identify the deployed version of your application in Datadog 
    // version: '1.0.0',
    sampleRate: 100,
    trackInteractions: true
});

export default function MyApp({ Component, pageProps }) {
    return (
        <AppWrapper>
            <Component { ...pageProps } />
        </AppWrapper>
    );
}

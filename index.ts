import App from './src/App';
import { serverConfiguration } from './node.config';

App.listen(serverConfiguration.serverPort,serverConfiguration.serverHost, () => {
    console.log(`Server listening at http://${serverConfiguration.serverHost}:${serverConfiguration.serverPort}`);
});

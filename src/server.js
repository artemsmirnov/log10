import config from 'config';
import app from 'src/app';

const port = config.get('port');
app.listen(port, () => {
    winston.info(`log10 listening port ${port}`)
});

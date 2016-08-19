import supertest from 'supertest';
import app from 'src/app';

const agent = supertest(app);

describe('/events', function () {
    describe('POST /', function () {
        it('should create event', async function () {
            const response = await agent.post('/events')
                .send({
                    event: {}
                });

            response.statusCode.should.be.equal(200);

            console.log(response.body);
        });
    });
});

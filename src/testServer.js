import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { posts, users, comments } from './testMockData';

const server = setupServer(
  rest.get('http://jsonplaceholder.typicode.com/posts', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(posts));
  }),
  rest.get('http://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(users));
  }),
  rest.get('http://jsonplaceholder.typicode.com/comments', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(comments));
  }),
  rest.get('*', (req, res, ctx) => {
    console.log(`ERROR: please add request handler for ${req.url.toString()}`);
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

export { server, rest };

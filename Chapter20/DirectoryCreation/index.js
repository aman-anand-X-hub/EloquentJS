import { createServer } from 'http';
import { stat, mkdir, rmdir, unlink } from 'node:fs/promises';
import { parse } from 'url';
import { resolve } from 'path';

const baseDirectory = process.cwd();  // The base directory for your server

function urlPath(url) {
  let { pathname } = parse(url);
  return resolve(decodeURIComponent(pathname).slice(1));
}

const methods = Object.create(null);

methods.MKCOL = async function(request) {
  let path = urlPath(request.url);
  let stats;
  try {
    stats = await stat(path);
  } catch (error) {
    if (error.code != "ENOENT") throw error;
    await mkdir(path);
    return { status: 204 };
  }
  if (stats.isDirectory()) return { status: 204 };
  else return { status: 400, body: "Not a directory" };
};

methods.DELETE = async function(request) {
  let path = urlPath(request.url);
  let stats;
  try {
    stats = await stat(path);
  } catch (error) {
    if (error.code != "ENOENT") throw error;
    return { status: 204 };
  }
  if (stats.isDirectory()) await rmdir(path);
  else await unlink(path);
  return { status: 204 };
};

const server = createServer((request, response) => {
  let handler = methods[request.method] || notAllowed;
  handler(request)
    .then(({ status = 200, body = '' }) => {
      response.writeHead(status, { 'Content-Type': 'text/plain' });
      response.end(body);
    })
    .catch(err => {
      response.writeHead(500, { 'Content-Type': 'text/plain' });
      response.end(err.toString());
    });
});

function notAllowed(request) {
  return Promise.resolve({ status: 405, body: `Method ${request.method} not allowed.` });
}

server.listen(8000, () => {
  console.log('Server listening on port 8000');
});

import axios from "axios";

const requestCount = 100;
const urlString = "http://localhost:3001/api/message";
const urls = [];
for (let i = 0; i < requestCount; i += 1) {
  urls.push(urlString);
}

async function requestMaker() {
  const responses = await Promise.all(urls.map((url) => axios.get(url)));
  return responses;
}

async function run() {
  const responses = await requestMaker();
  // eslint-disable-next-line no-console
  responses.map((response) => console.log(response.data));
}

run();

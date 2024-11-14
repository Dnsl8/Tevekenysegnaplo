// elasticClient.ts
import { Client } from '@elastic/elasticsearch';

const client = new Client({
  node: 'http://localhost:9200', // Replace with your Elasticsearch server URL
  auth: {
    username: 'elastic',  // Optional if your Elasticsearch instance has authentication
    password: 'G9Q3HN5f_Yt-NPKeSwxN',  // Optional if your Elasticsearch instance has authentication
  }
});

export default client;

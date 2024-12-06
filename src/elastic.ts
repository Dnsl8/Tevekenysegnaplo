import { Client } from '@elastic/elasticsearch';
import * as fs from 'fs';

const client = new Client({
    node: 'https://localhost:9200',
    auth: {
      username: 'elastic',
      password: 'password'
    },
    tls: {
      ca: fs.readFileSync('./http_ca.crt'),
      rejectUnauthorized: false
    }
  })

interface Document {
  message: string
}

export async function getMessages(searchText: string): Promise<Document[]> {
  
    const result = await client.search<Document>({
      index: 'proba',
      query: {
        match: { message: searchText },
      },
    });
    return result.hits.hits.map(hit => hit._source as Document);

}

async function displayMessages() {

    const messages = await getMessages('test');
    messages.forEach(message => {
      console.log(message.message);
    });
 
}

displayMessages();
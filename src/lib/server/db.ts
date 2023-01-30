import { MongoClient } from 'mongodb';
import { env } from '$env/dynamic/private';

//declare connection and db name
const url = 'mongodb://localhost:27017';
const dbname = 'flare';

export async function db_insert_user(collection_name: string, document: Document) {
	const data = {};
	return data;
}

console.log(env.DATABASE_URL);

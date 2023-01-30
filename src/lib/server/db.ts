import { MongoClient } from 'mongodb';
import { DATABASE_URL } from '$env/static/private';

export async function db_insert_user(collection_name: string, document: Document) {
	const client = new MongoClient(DATABASE_URL);
	await client.connect();
	const db = client.db(`${import.meta.env.MODE}_flare`);
	const doc = db.collection(collection_name);
	const data = await doc.insertOne(document);
	client.close();

	return data;
}

export async function db_get_user(collection_name: string, document: Document) {
	return;
}

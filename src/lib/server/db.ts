import { MongoClient } from 'mongodb';
import type { Document } from 'mongodb';
import { DATABASE_URL } from '$env/static/private';

export async function db_get_user(document: Document) {
	// connect to db
	const client = new MongoClient(DATABASE_URL);
	await client.connect();

	// get db and collection
	const db = client.db(`${import.meta.env.MODE}_flare`);
	const doc = db.collection("users");

	// check if user exists, if not, create/update it
	await doc.updateOne({ email: document.email }, { $set: document }, { upsert: true });

	// get user from db
	const data = await doc.findOne({ email: document.email });
	client.close();

	// return user data
	return data;
}

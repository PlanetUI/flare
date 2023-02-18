import { env } from '$env/dynamic/private';
import type { Document } from 'mongodb';
import { MongoClient } from 'mongodb';

export async function db_get_user(document: Document) {
	// connect to db
	const client = new MongoClient(env.DATABASE_URL || '');
	await client.connect();

	// get db and collection
	const db = client.db(`${import.meta.env.MODE}_flare`);
	const doc = db.collection('users');

	const now = Date.now();
	const now_iso = new Date(now).toISOString();
	const now_formatted = new Date(now).toLocaleString('id', { timeZone: 'Asia/jakarta' });

	// get user from db
	const data = await doc.findOne({ email: document.email });
	if (!data) {
		// create user
		const new_document_create = {
			...document,
			created_at: now_iso
		};
		await doc.insertOne(new_document_create);
	} else {
		const new_document_update = {
			...document,
			last_active_iso: now_iso,
			last_active_formatted: now_formatted
		};
		await doc.updateOne({ email: document.email }, { $set: new_document_update }, { upsert: true });
	}
	client.close();

	// return user data
	return data;
}

export async function db_count_users() {
	// connect to db
	const client = new MongoClient(env.DATABASE_URL || '');
	await client.connect();

	// get db and collection
	const db = client.db(`${import.meta.env.MODE}_flare`);
	const doc = db.collection('users');

	// get user from db
	const data = await doc.countDocuments();
	client.close();

	// return user data
	return data;
}

export async function db_count_premium_users() {
	// connect to db
	const client = new MongoClient(env.DATABASE_URL || '');
	await client.connect();

	// get db and collection
	const db = client.db(`${import.meta.env.MODE}_flare`);
	const doc = db.collection('users');

	// get user from db
	const data = await doc.countDocuments({ is_premium_user: true });
	client.close();

	// return user data
	return data;
}

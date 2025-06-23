// lib/db.ts
import Database from 'better-sqlite3';
import type { Database as DatabaseType } from 'better-sqlite3';

const db = new Database('users.db');

// Kullanıcılar tablosu
db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        name TEXT,
        email TEXT,
        image TEXT
    );
`);

// Yardımcı fonksiyonlar
const add = (user: { id: string; name: string; email: string; image: string }) => {
    const stmt = db.prepare('INSERT INTO users (id, name, email, image) VALUES (?, ?, ?, ?)');
    return stmt.run(user.id, user.name, user.email, user.image);
};

const get = (id: string) => {
    const stmt = db.prepare('SELECT * FROM users WHERE id = ?');
    return stmt.get(id);
};

const getAll = () => {
    const stmt = db.prepare('SELECT * FROM users');
    return stmt.all();
};

const update = (id: string, updates: Partial<{ name: string; email: string; image: string }>) => {
    const fields = Object.keys(updates).map(key => `${key} = ?`).join(', ');
    const values = Object.values(updates);
    if (!fields) return;
    const stmt = db.prepare(`UPDATE users SET ${fields} WHERE id = ?`);
    return stmt.run(...values, id);
};

const del = (id: string) => {
    const stmt = db.prepare('DELETE FROM users WHERE id = ?');
    return stmt.run(id);
};

const extendedDb = Object.assign(db, {
    add,
    get,
    getAll,
    update,
    delete: del
});
export default extendedDb as DatabaseType & {
    add: typeof add;
    get: typeof get;
    getAll: typeof getAll;
    update: typeof update;
    delete: typeof del;
};
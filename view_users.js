const sqlite3 = require('sqlite3').verbose();

// Open database
const db = new sqlite3.Database('./users.db', (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
        return;
    }
    console.log('Connected to SQLite database.');
});

// Query all users
db.all('SELECT id, name, email, created_at FROM users', [], (err, rows) => {
    if (err) {
        console.error('Error querying database:', err.message);
        return;
    }

    console.log('\n=== STORED USER DATA ===');
    if (rows.length === 0) {
        console.log('No users found in database.');
    } else {
        console.log(`Total users: ${rows.length}\n`);
        rows.forEach((row, index) => {
            console.log(`User ${index + 1}:`);
            console.log(`  ID: ${row.id}`);
            console.log(`  Name: ${row.name}`);
            console.log(`  Email: ${row.email}`);
            console.log(`  Created: ${row.created_at}`);
            console.log('---');
        });
    }

    // Close database
    db.close((err) => {
        if (err) {
            console.error('Error closing database:', err.message);
        } else {
            console.log('Database connection closed.');
        }
    });
});
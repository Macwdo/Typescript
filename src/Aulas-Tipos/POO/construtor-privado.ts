// Singleton
export class Database {
    private static database: Database;

    // eslint-disable-next-line prettier/prettier
    constructor(
        private host: string,
        private user: string,
        private password: string) {}

    connect(): void {
        console.log("Conectado");
    }
    // Factory Method
    static getDatabase(host: string, user: string, password: string): Database {
        console.log(Database.database);
        if (Database.database) return Database.database;
        Database.database = new Database(host, user, password);
        return Database.database;
    }
}

const db = Database.getDatabase("Local", "Macedo", "password");
const db1 = Database.getDatabase("Local", "DANILO", "password");

db;
db1;

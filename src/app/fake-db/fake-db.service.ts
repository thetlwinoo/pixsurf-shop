import { InMemoryDbService } from 'angular-in-memory-web-api';

import { CategoriesFakeDb } from 'app/fake-db/categories';

export class FakeDbService implements InMemoryDbService {
    createDb(): any {
        return {
            // Home
            'home-categories': CategoriesFakeDb.categories,
        };
    }
}

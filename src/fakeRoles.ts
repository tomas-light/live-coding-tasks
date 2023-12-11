import { Role } from './Role.ts';

export const fakeRole: Role = {
  id: 'Роль без конфликтов ID',
  name: 'Роль без конфликтов',
  policies: [
    {
      id: 'my fake policy id 1',
      name: 'корзина API',
      type: 'API',
      kind: 'ALLOW',
      paths: ['/api/basket'],
    },
    {
      id: 'my fake policy id 2',
      name: 'корзина UI',
      type: 'UI',
      kind: 'ALLOW',
      paths: ['/ui/basket'],
    },
  ],
};

export const fakeRoleWithConflict: Role = {
  id: 'Роль с конфликтами ID',
  name: 'Роль с конфликтами',
  policies: [
    {
      id: 'my fake policy id 3',
      name: 'можно получить все статьи и статьи по id',
      type: 'API',
      kind: 'ALLOW',
      paths: ['/api/articles', '/api/articles/:id'],
    },
    {
      id: 'my fake policy id 4',
      name: 'нельзя получить статью по id',
      type: 'API',
      kind: 'DENY',
      paths: ['/api/articles/:id'],
    },
  ],
};

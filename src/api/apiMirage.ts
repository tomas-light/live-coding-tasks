import roles from './roles.json';
import { Role } from './models';

export function startApi() {
  const getRoles = async () => roles as Role[]

  return {
    getRoles
  };
}

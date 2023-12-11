import { RoleDto } from './RoleDto.ts';
import roles from './roles.json';

export const getRoles = async () => roles as RoleDto[];

import { PolicyDto } from './PolicyDto.ts';

export type RoleDto = {
  id: string;
  name: string;
  policyIds: PolicyDto['id'][];
};

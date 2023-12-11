import { PolicyDto } from './api';

export type Role = {
  id: string;
  name: string;
  policies: PolicyDto[];
};

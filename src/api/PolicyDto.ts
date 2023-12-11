import { PolicyKind } from './PolicyKind.ts';
import { PolicyType } from './PolicyType.ts';

export type PolicyDto = {
  id: string;
  name: string;
  type: PolicyType;
  kind: PolicyKind;
  paths: string[];
};

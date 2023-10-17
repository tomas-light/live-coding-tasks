export type Role = {
  id: number,
  name: string
  policies: Policy[]
}

export type PolicyType = 'API' | 'CRM';
export type PolicyKind = 'ALLOW' | 'DENY';

export type Policy = {
  id: number,
  type: PolicyType,
  kind: PolicyKind
  path: string[],
}

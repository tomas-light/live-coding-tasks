import policies from './policies.json';
import { PolicyDto } from './PolicyDto.ts';

export const getPolicies = async () => policies as PolicyDto[];

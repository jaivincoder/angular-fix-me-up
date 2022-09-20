import { Account } from 'libs/shared/models/src/lib/account';

export interface AccountState {
  accounts: Account[];
  loading: boolean;
  errorMessage: string | null;
}

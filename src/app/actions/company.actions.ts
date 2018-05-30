import { Company } from "src/app/models";

export const LOAD_COMPANIES = 'LOAD_COMPANIES';
export const LOAD_COMPANIES_SUCCESS = 'LOAD_COMPANIES_SUCCESS';
export const DELETE_COMPANY = 'DELETE_COMPANY';
export const DELETE_COMPANIES_SUCCESS = 'DELETE_COMPANIES_SUCCESS';

export class LoadCompaniesAction  {
   readonly type = LOAD_COMPANIES;

   constructor (){  }
}

export class LoadCompaniesActionSuccess  {
  readonly type = LOAD_COMPANIES_SUCCESS;

  constructor (public payload: Company[]){  }   // payload es de tipo Company, interface que define el objeto compañia
}

export class DeleteCompanyAction  {
  readonly type = DELETE_COMPANY;

  constructor (public payload: number){  }   // payload es de tipo Company, interface que define el objeto compañia
}

export class DeleteCompaniesActionSuccess  {
  readonly type = DELETE_COMPANIES_SUCCESS;

  constructor (public payload: Company[]){  }   // payload es de tipo Company, interface que define el objeto compañia
}

export type ActionC
    = LoadCompaniesAction                                   // un pequeño 'helper' para tener a mano todas las acciones posibles
    | LoadCompaniesActionSuccess


import { Injectable } from '@angular/core';
import { CompanyService } from '../company/company.service';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as companyActions from './../actions/company.actions';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class CompanyEffects {

  constructor( private companyService: CompanyService,
               private actions$: Actions) { }

  @Effect() loadCompanies$ = this.actions$.pipe(
      ofType(companyActions.LOAD_COMPANIES),
      switchMap(
        () => this.companyService.loadCompanies().pipe(
            map(companies => (new companyActions.LoadCompaniesActionSuccess(companies)))
          )
      )

  )
      /*.ofType(companyActions.LOAD_COMPANIES)
      .switchMap(
        () => this.companyService.loadCompanies()
        .map(companies => (new companyActions.LoadCompaniesActionSuccess(companies)))
      )*/
}

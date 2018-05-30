import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Company } from '../../models';
import { AppState } from '../../models/appState';
import * as companyActions from './../../actions/company.actions';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
})
export class CompanyListComponent implements OnInit {

  companies$: Observable<Company[]>;

  constructor(
    //private companyService: CompanyService
    private store: Store<AppState>
    )
   {   }

  ngOnInit() {
    this.loadCompanies();   //carga las compañias de la url a la store
    console.log('store select');
    this.companies$ = this.store.select(state => state.companies);    //de la store a pantalla
  }

  loadCompanies() {
    //this.companies$ = this.companyService.getCompanies();

    this.store.dispatch(new companyActions.LoadCompaniesAction());    // despachar una acción..


  }

  deleteCompany(companyId: number) {
    //this.companyService.deleteCompany(companyId).subscribe(()=> this.loadCompanies());

    this.store.dispatch(new companyActions.DeleteCompanyAction(companyId));
  }

}

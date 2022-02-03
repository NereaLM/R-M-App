import { query } from '@angular/animations';
import { Injectable } from '@angular/core';
 import {Apollo,gql} from 'apollo-angular';
import { BehaviorSubject, take, tap } from 'rxjs';


const QUERY = gql `   
{
  episodes {
    results {
      name
      episode
    }
  }
  characters {
    results {
      name
      status
      species
      gender
      origin {
        name
      }
      location {
        name
      }
      image
    }
    
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private episodesSubjext = new BehaviorSubject<any>(null);
  episodes$ = this.episodesSubjext.asObservable();

  private charactersSubjext = new BehaviorSubject<any>(null);
  characters$ = this.charactersSubjext.asObservable();
  DataService: any;

  constructor(private apollo: Apollo) { 
    this.getDataAPI();
  }

  getDataAPI():void{
    this.apollo.watchQuery<any>({
      query: QUERY
    }).valueChanges.pipe(
      take(1),
      tap(({data}) => {
        const {characters, episodes} = data;
      })
    ).subscribe();
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { leagueEXP_v4 } from '../exp.model';
import { QueryData } from '../store/champion-mastery.action';
import { HttpHeaders } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class ChampionMasteryService {
  myDomain = 'https://br1.api.riotgames.com';
  /*queue = 'RANKED_SOLO_5x5';
  tier = 'CHALLENGER';
  division = 'I';
  url =  `/api/lol/league-exp/v4/entries/${this.queue}/${this.tier}/${this.division}`;*/
  url =  `/api/lol/league-exp/v4/entries`;
  getData(query: QueryData){
    let urlWithQuery = this.url;
    Object.values(query.queryData).forEach((ele) => {
      urlWithQuery = urlWithQuery.concat(`/${ele}`);
    });
    console.log('url:' + urlWithQuery);
    return this.http.get(urlWithQuery);
  }

  constructor(
    private http: HttpClient
  ) { }
}

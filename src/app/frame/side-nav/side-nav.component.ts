import { Component, OnInit, Input } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

interface ApiNode {
  name: string;
  link?: string;
  children?: ApiNode[];
}

const TREE_DATA: ApiNode[] = [
  {
    name: 'LOL APIs',
    children: [
      { name: 'CHAMPION-MASTERY-V4' },
      {
        name: 'LEAGUE-EXP-V4',
        link: '/LEAGUE-EXP-V4'
      },
      { name: 'LEAGUE-V4'},
      { name: 'LOL-STATUS-V3'},
      { name: 'MATCH-V4'},
      { name: 'SPECTATOR-V4'},
      { name: 'THIRD-PARTY-CODE-V4'},
      { name: 'TOURNAMENT-V4'},
    ]
  },
];

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {

  constructor() {
    this.dataSource.data = TREE_DATA;
  }
  opened = false;


  treeControl = new NestedTreeControl<ApiNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<ApiNode>();

  OnInit() {
  }

  toggleNav() {
    this.opened = !this.opened;
  }
  hasChild = (_: number, node: ApiNode) => !!node.children && node.children.length > 0;

}

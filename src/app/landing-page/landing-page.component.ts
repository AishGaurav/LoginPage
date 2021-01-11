import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  cards1 = [
    {'cardicon': '17.png', 'heading' : 'Quick cash disbursement', 'content' : 'Get terms loans that your business needs within 72 hr.',},
    {'cardicon': '18.png', 'heading' : 'Low-interest rate', 'content' : 'Achieve your financial goals with an amazing interest rate starting at 13% per annum.',},
    {'cardicon': '12.png', 'heading' : 'Secure Payments', 'content' : 'Get started instantly by submitting only your basic details & bank statements.',},
  ];

  cards2 = [
    {'cardicon': '10.png', 'heading' : 'Ace your business finances', 'content' : 'Manage banking, accounting & everything in between, on one platform.',},
    {'cardicon': '19.png', 'heading' : 'Loans to fight COVID', 'content' : 'Zero EMI for first 3 months on Back-to-Business loans of upto 1 lakh.',},
  ]

  constructor() { }

  ngOnInit() {
  }

}

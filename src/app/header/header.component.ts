import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import smoothscroll from 'smoothscroll-polyfill';
import { AuthService } from './../services/auth.service';
import { LoginComponent } from './login/login.component';
smoothscroll.polyfill();

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, OnDestroy {
  private authListenerSubs: Subscription;
  userIsAuthenticated = false;

  hoverPC: boolean;
  hoverMob = false;
  hoverMobSubmenu = false;
  searchStatus: boolean;

  constructor(public authService: AuthService,
              public dialog: MatDialog,
              private router: Router,
              @Inject(DOCUMENT) private document: Document /* onscroll add class */) { }

  ngOnInit(): void {
    this.userIsAuthenticated = this.authService.getIsAuth(); // for localstorage token

    this.authListenerSubs = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
    });
  }

  onSearch(form: NgForm) {
    const searchValue = form.value.search;

    switch (searchValue) {
      case 'kuhinje': case 'kuhinja':
      case 'Kuhinje': case 'Kuhinja':
        this.router.navigate(['product/kuhinje']);
        this.hoverMob = false;
        break;
      case 'garderoberi': case 'garderoberi':
      case 'ormari': case 'ormari':
      case 'Garderoberi': case 'Garderoberi':
      case 'Ormari': case 'Ormari':
        this.router.navigate(['product/garderoberi-i-ormari']);
        this.hoverMob = false;
        break;
      case 'stolovi': case 'Stolovi':
      case 'kancelarijski stolovi': case 'Kancelarijski stolovi':
        this.router.navigate(['product/kancelarijski-stolovi']);
        this.hoverMob = false;
        break;
      case 'boje': case 'Boje':
        this.router.navigate(['product/katalog-boja']);
        this.hoverMob = false;
        break;
      case 'fiokari': case 'Fiokari':
      case 'Nocni stocici': case 'nocni stocici':
        this.router.navigate(['product/fiokari-i-nocni-stocici']);
        this.hoverMob = false;
        break;
      case 'cipelari': case 'Cipelari':
      case 'predsoblja': case 'Predsoblja':
        this.router.navigate(['product/predsoblja-i-cipelari']);
        this.hoverMob = false;
        break;
      case 'tv komode': case 'tv komoda':
      case 'Tv komode': case 'Tv komoda':
        this.router.navigate(['product/tv-komode']);
        this.hoverMob = false;
        break;
      case 'police': case 'polica':
      case 'Police': case 'Polica':
        this.router.navigate(['product/police']);
        this.hoverMob = false;
        break;
      case 'stolovi za rucavanje': case 'Stolovi za rucavanje':
      case 'klub za rucavanje': case 'Klub za rucavanje':
        this.router.navigate(['product/klub-i-stolovi-za-rucavanje']);
        this.hoverMob = false;
        break;
      case 'kupatilski namestaj': case 'Kupatilski namestaj':
      case 'kupatilo': case 'Kupatilo':
        this.router.navigate(['product/kupatilski-namestaj']);
        this.hoverMob = false;
        break;
      default:
        this.router.navigate([`/falseProduct`]);
        this.hoverMob = false;
    }
  }

  routePage(page: string) {
    this.router.navigate([`/${page}`]);
    this.hoverMob = false;
    this.hoverMobSubmenu = false;
  }

  toggleMobMenu() {
    this.hoverMob = !this.hoverMob;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '300px',
      autoFocus: false
    });
  }

  onLogout() {
    this.authService.logout();
  }

  // smoothscroll arrow
  scrollToElement($element): void {
    $element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }

  // onscroll adding class
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop >= 350 || document.documentElement.scrollTop >= 350) {
      document.querySelector('.arrow-up').classList.add('arrow-up_active');
    } else {
      document.querySelector('.arrow-up').classList.remove('arrow-up_active');
    }
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }
}

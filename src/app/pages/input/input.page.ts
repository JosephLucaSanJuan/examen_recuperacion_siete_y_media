import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  public jugador: FormGroup

  constructor(
    private cardService: CardService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.jugador = this.formBuilder.group({
      name: ['', [], []],
      money: ['', [], []],
      bet: ['', [], []]
    })
  }

  ngOnInit() {
    this.jugador.reset()
  }

  ionViewDidEnter(){
    this.jugador.controls['name'].setValue('')
    this.jugador.controls['money'].setValue('')
    this.jugador.controls['bet'].setValue('')
  } 

  jugar() {
    if (this.jugador.invalid) {
      this.jugador.markAllAsTouched()
      return console.log(this.jugador.value)
    } else {
      return this.router.navigateByUrl('/juego')
    }
  }

}

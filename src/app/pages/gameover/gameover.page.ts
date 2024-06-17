import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gameover',
  templateUrl: './gameover.page.html',
  styleUrls: ['./gameover.page.scss'],
})
export class GameoverPage implements OnInit {

  public jugador: FormGroup

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.jugador = this.formBuilder.group({
      bet: ['', [], []]
    })
  }

  ngOnInit() {
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

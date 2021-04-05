'use strict';

const Reductions = function (
  dinoName,
  dinoBreed,
  dinoHealth,
  saddleArmor,
  isMateBoosted,
  isImprinted,
  hasYutiBuff,
  hasTartar
) {
  this.dinoName = dinoName;
  this.dinoBreed = dinoBreed;
  this.dinoHealth = dinoHealth;
  this.saddleArmor = saddleArmor;
  this.isMateBoosted = isMateBoosted;
  this.isImprinted = isImprinted;
  this.hasYutiBuff = hasYutiBuff;
  this.hasTartar = hasTartar;
};

class DmgReductions {
  sum;

  constructor(
    dinoName,
    dinoBreed,
    dinoHealth,
    saddleArmor,
    isMateBoosted,
    isImprinted,
    hasYutiBuff,
    hasTartar
  ) {
    this.dinoName = dinoName;
    this.dinoBreed = dinoBreed;
    this.dinoHealth = dinoHealth;
    this.saddleArmor = saddleArmor;
    this.isMateBoosted = isMateBoosted;
    this.isImprinted = isImprinted;
    this.hasYutiBuff = hasYutiBuff;
    this.hasTartar = hasTartar;
  }

  calcDamage() {
    const turretRawDamage = 77;
    const dinoDamageFromTurrets = 2.2;
    const rawDmg = this.turretRawDamage * this.dinoDamageFromTurrets;
    let reduceBy;

    if (this.dinoBreed === 'Turtle') {
      reduceBy = rawDmg / 5;
      console.log(Number(this.reduceBy));
      // return reduceBy;
    }
    return this;
  }
}

const turtle = new DmgReductions(
  'Squirtle',
  'Turtle',
  '20000',
  '175',
  false,
  false,
  false,
  false
);

console.log(turtle.calcDamage());

---
sidebar_position: 4
---

import EffectList from '@site/src/components/modules/EffectList';

# Effects

<EffectList modId="farmcharm" list={effects} />

export const effects = [
{
"name": "Cluck",
"imageId": "cluck.png",
"description": "Increases egg-laying and feather-shedding rate for chickens when Chicken Feed is given. Can also be consumed by players—try it to see what happens!"
},
{
"name": "Dog Food",
"imageId": "dog_food.png",
"description": "Boosts attack damage, attack speed, and knockback resistance of Wolves."
},
{
"name": "Farmer's Blessing",
"imageId": "farmers_blessing.png",
"description": "Removes all negative status effects for the effect's duration."
},
{
"name": "Feast",
"imageId": "feast.png",
"description": "Combines the effects of 'Sustenance' and 'Satiation'."
},
{
"name": "Grandma's Blessing",
"imageId": "grandmas_blessing.png",
"description": "Same as Farmer's Blessing, but also increases Luck by 2."
},
{
"name": "Horse Fodder",
"imageId": "horse_fodder.png",
"description": "Increases jump strength and speed of Horses."
},
{
"name": "Rested",
"imageId": "rested.png",
"description": "Increases gained Experience Points."
},
{
"name": "Satiation",
"imageId": "satiation.png",
"description": "Prevents you from getting too hungry too quickly, managing food exhaustion levels especially when injured but not healing naturally."
},
{
"name": "Sustenance",
"imageId": "sustenance.png",
"description": "Increases Hunger by 1 every 6 seconds. If Hunger Bar is full, regenerates Health by 1 every 6 seconds."
},
{
"name": "Sweets",
"imageId": "sweets.png",
"description": "Boosts movement speed, attack speed, and attack damage, enhancing navigation and combat. Stackable up to 10 times."
}
];

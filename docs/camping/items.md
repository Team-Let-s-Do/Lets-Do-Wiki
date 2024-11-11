---
sidebar_position: 1
---

import { ItemList } from '@site/src/components/modules/IconList';
import { ItemIcon } from '@site/src/components/modules/Icon';

# Items

## Backpacks
7 new Backpacks and giving 3 extra rows of storage. That’s it! No additional gimmicks.
### Usage
While equipped you can press `b` to open the inventory, the key can be changed in the Minecraft configuration. but you can also place the Backpack and right klick to open it.

<ItemList modId="camping" list={backpacks} />
export const backpacks = [
{
"name": "Small Backpack",
"imageId": "small_backpack.png"
},
{
"name": "Hiking Backpack",
"imageId": "hiking_backpack.png"
},
{
"name": "Wanderer Backpack",
"imageId": "wanderer_backpack.png"
},
{
"name": "Wanderer Bag",
"imageId": "wanderer_bag.png"
},
{
"name": "Sheepbag",
"imageId": "sheepbag.png"
}
];

But there also are two Ender Backpacks which open your Enderchest inventory.

<ItemList modId="camping" list={enderpacks} />
export const enderpacks = [
{
"name": "Enderpack",
"imageId": "enderpack.png"
},
{
"name": "Enderbag",
"imageId": "enderbag.png"
}
];

## Goodybag
<ItemIcon modId="camping" imageId="goodybag_unused.png" description="The Goodybag is awarded to all players who aquire all Backpacks from the Camping Mod." />

<br />

Thank you for playing Camping! ❤️
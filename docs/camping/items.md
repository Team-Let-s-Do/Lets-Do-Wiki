---
sidebar_position: 1
---

import { ItemList } from '@site/src/components/modules/IconList';
import { ItemIcon } from '@site/src/components/modules/Icon';

# Items

## Multitool
<ItemIcon modId="camping" imageId="multitool.png" description="With the Multitool you can rotate blocks horizontally and shear sheeps!" />

## Backpacks
7 new Backpacks which give 3 extra rows of storage. That’s it! No additional gimmicks.

### Usage
While equipped you can press `b` to open the inventory. The key can be changed in the Minecraft configuration. But you can also place the Backpack and right klick to open it.

### Normal Backpacks
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

### Ender Backpacks
However, there are also two Ender backpacks that open the Enderchest inventory.

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
<ItemIcon modId="camping" imageId="goodybag_unused.png" description="The Goodybag is awarded to all players who acquire all Backpacks from the Camping Mod." />

<br />

Thank you for playing Camping! ❤️
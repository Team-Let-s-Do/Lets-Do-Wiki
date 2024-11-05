---
sidebar_position: 2
---

import { BlockIcon } from '@site/src/components/modules/Icon';
import Image from '@site/src/components/modules/Image';
import BlockList from '@site/src/components/modules/Image';

# Blocks

## Stove
<BlockIcon modId="farmcharm" imageId="stove.png" description="The Stove is your primary crafting station for making pastries and bread. It also serves as a heat source for the Cooking Pot." pixelated="false" />

### Usage
The block works similarly to the already known crafting stations in Minecraft: It has 3 input slots for ingredients (top left), one input slot for a fuel source (bottom left), and one output slot (middle right). It also offers a built-in [recipe book](common.md#recipe-book) that displays all available recipes and the ingredients required for them.

Once you've placed the ingredients needed for the respective recipe into the corresponding input slots, it takes about 12 seconds for the crafting process to complete - the crafted item then appears in the output slot. Crafting all items requires a valid item in the fuel slot - this can be either coal, charcoal, or other items.

<Image modId="bakery" imageId="stove_gui.png" align="center" />

:::info

The items located in both the output and input slots are also displayed within the block in the game world.

:::

***

## Cooking Pot
<BlockIcon modId="farmcharm" imageId="cooking_pot.png" description="Used to prepare basic meals when placed on a heat source." />

### Usage
The Cooking Pot has 6 input slots for ingredients (top left), one container slot (middle), one output slot (middle right), and an indicator of whether it is on a hot (lit) surface. It also includes a built-in [recipe book](common.md#recipe-book).

After placing the necessary ingredients, the crafting process takes about 30 seconds to complete. The Cooking Pot must be placed on a heat source, such as a Stove, Magma Block, or campfire. When heated, you'll see bubbles and hear cooking sounds.

***

## Roaster
<BlockIcon modId="farmcharm" imageId="roaster.png" description="Used mainly for preparing larger meals. Requires a heat source." />

### Usage
The Roaster has 6 input slots for ingredients, one container slot, and one output slot, along with an indicator showing whether it is on a hot surface. It includes a [recipe book](common.md#recipe-book) with available recipes and ingredients.

After placing the necessary ingredients, it takes about 60 seconds to complete crafting. The Roaster must be placed on a hot surface, like a Stove or Magma Block. When heated, rising smoke and cooking sounds are visible.

***

## Mincer
<BlockIcon modId="farmcharm" imageId="mincer.png" description="Used for processing various items, including meat and other materials." />

The Mincer has no direct interface and operates by right-clicking to add valid items. The process is initiated by cranking, which is indicated by animations, particles, and sound effects. Processing time varies based on the material type, and holding an additional item in hand can reduce processing time.

***

## Crafting Bowl
<BlockIcon modId="farmcharm" imageId="crafting_bowl.png" description="The Crafting Bowl is used to make various types of dough." />

### Usage
Like the Caking Station, the Crafting Bowl also has no interface and functions through direct interaction. The Crafting Bowl has a capacity of up to a maximum of 4 items.

Once you have placed the correct ingredients inside, you can stir the whisk in the bowl to start the dough-making process. This is visually represented with an animation.

:::note

You need an empty hand to start the manufacturing process.

:::

***

## Silo
The silo is needed to dry harvested wheat, barley, or corn. The silo is modular and can be expanded in both width and height. The larger the silo, the higher the capacity and the shorter the drying time.

### Usage
Right-click with the item to be dried to place it in the silo.\
Right-click to open the silo hatch (when closed).\
Right-click to close the silo hatch (when open).

The content also dries with the hatch open. When the hatch is closed, the content will not be emptied automatically.

<BlockList modId="brewery" list={silos} />

export const silos = [
{
"name": "Wooden Silo",
"imageId": "silo_wood.png",
"description": "Can be crafted in a Crafting Table by 3*3 planks of any sort."
},
{
"name": "Copper Silo",
"imageId": "silo_copper.png",
"description": "Can be upgraded from a Wooden Silo by using copper and a Sentry smithing template."
}
];

## Fertilized Soil
<BlockIcon modId="farmcharm" imageId="fertilized_soil.png" description="Can be used to quickly grow fields or converted to [fertilized farmland](blocks#fertilized-farmland)." pixelated="false" />

### Usage
Right-click with a hoe to convert it into fertilized farmland. Right-click with a pitchfork to apply a Bone Meal effect to nearby crops. Each fertilized soil block can be used up to 4 times.

***

## Fertilized Farmland
<BlockIcon modId="farmcharm" imageId="fertilized_farmland.png" description="Enhanced farmland that boosts crop growth and resists trampling." pixelated="false" />

This soil has a chance to apply the Bone Meal effect to crops growing on it. It also cannot be trampled down.

***

## Feeding Trough
<BlockIcon modId="farmcharm" imageId="feeding_trough.png" description="Holds seeds to feed nearby animals, enabling breeding readiness." pixelated="false" />

The trough can be filled with up to 4 seeds, which nearby animals periodically consume, increasing their readiness to mate.

***

## Water Sprinkler
<BlockIcon modId="farmcharm" imageId="water_sprinkler.png" description="Used to irrigate farmland within an 8-block radius." pixelated="false" />

The sprinkler waters all farmland within an 8-block radius and does not require a water source. It will automatically turn off during rain and storms.

***

## Food Blocks
<BlockIcon modId="farmcharm" imageId="food_blocks.png" description="Placed meals that serve as both decoration and sustenance." pixelated="false" />

Placed meals offer higher hunger and saturation values and can be eaten multiple times (up to 4).

***

## Window Sill
<BlockIcon modId="farmcharm" imageId="window_sill.png" description="Holds up to 2 small flowers for decoration." />

Only flowers tagged as #small_flowers can be placed in the Window Sill.

***

## Tool Rack
<BlockIcon modId="farmcharm" imageId="tool_rack.png" description="Ideal for storing tools and pans." />

Provides convenient storage for tools and pans.
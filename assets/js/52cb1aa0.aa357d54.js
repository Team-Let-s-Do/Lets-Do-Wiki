"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[852],{5354:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>u,contentTitle:()=>c,default:()=>y,frontMatter:()=>h,metadata:()=>p,silos:()=>b,toc:()=>g,wildCrops:()=>m});var s=r(5893),n=r(1151),t=(r(7294),r(1798));function o(e){let{modId:i,imageUrl:r}=e;return(0,s.jsx)("span",{children:(0,s.jsx)("img",{src:`/Lets-Do-Wiki/img/textures/${i}/block/${r}`,style:{imageRendering:"pixelated",width:"22px",marginRight:"4px",marginBottom:"-5px"}})})}function l(e){let{modId:i,itemList:r}=e;return(0,s.jsx)("div",{children:r.map(((e,r)=>(0,s.jsxs)("span",{style:{marginBottom:"4px"},children:[(0,s.jsx)(o,{modId:i,imageUrl:e.imageId}),(0,s.jsx)("span",{style:{fontWeight:"bold"},children:e.name}),(0,s.jsx)("span",{children:" - "}),(0,s.jsx)("span",{className:"speckyInlineMarkdown",children:(0,s.jsx)(t.U,{children:e.description})}),(0,s.jsx)("span",{className:"bigAssItemSpacer"})]},r)))})}function a(e){let{modId:i,imageUrl:r}=e;return(0,s.jsx)("span",{children:(0,s.jsx)("img",{src:`/Lets-Do-Wiki/img/textures/${i}/block/${r}`,style:{imageRendering:"pixelated",width:"50px",marginRight:"4px",marginBottom:"-5px"}})})}function d(e){let{modId:i,imageId:r,description:n}=e;return(0,s.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"auto 1fr",alignItems:"center"},children:[(0,s.jsx)(a,{modId:i,imageUrl:r}),(0,s.jsx)("span",{className:"speckyInlineMarkdown",style:{marginLeft:"8px"},children:(0,s.jsx)(t.U,{children:n})})]})}const h={sidebar_position:1},c="Blocks",p={id:"brewery/blocks",title:"Blocks",description:"Wild Crops",source:"@site/docs/brewery/blocks.md",sourceDirName:"brewery",slug:"/brewery/blocks",permalink:"/Lets-Do-Wiki/docs/brewery/blocks",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Brewery",permalink:"/Lets-Do-Wiki/docs/category/brewery"},next:{title:"Items",permalink:"/Lets-Do-Wiki/docs/brewery/items"}},u={},g=[{value:"Wild Crops",id:"wild-crops",level:2},{value:"Silo",id:"silo",level:2},{value:"Usage",id:"usage",level:3},{value:"Big Barrel",id:"big-barrel",level:2},{value:"Brewingstation",id:"brewingstation",level:2},{value:"Usage",id:"usage-1",level:3},{value:"Beer Mug",id:"beer-mug",level:2},{value:"Rope",id:"rope",level:2},{value:"Usage",id:"usage-2",level:3}],m=[{name:"Wild Hops",imageId:"wild_hops.png",description:"Can mostly be found in taiga biomes and all sub-variants. It can also be found in Villages and / or Woodland Mansions."},{name:"Corn",imageId:"corn.png",description:"Can be found in Villages. If you having trouble finding Kernels just throw some Beetroot Seeds on a Woodcutter and enjoy your freshly... cut Kernels."},{name:"Barley",imageId:"barley.png",description:"Same as Corn. If you having trouble finding Barley Seeds just throw some Wheat Seeds on a Woodcutter and enjoy your freshly cut Barley Seeds."}],b=[{name:"Wooden Silo",imageId:"silo_wood.png",description:"Can be crafted in a Crafting Table by 3*3 planks of any sort."},{name:"Copper Silo",imageId:"silo_copper.png",description:"Can be upgraded from a Wooden Silo by using copper and a Sentry smithing template."}];function w(e){const i={br:"br",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"blocks",children:"Blocks"}),"\n",(0,s.jsx)(i.h2,{id:"wild-crops",children:"Wild Crops"}),"\n",(0,s.jsx)(i.p,{children:"After successfully adding Brewery to your mods, you will be able to discover various new plant species in newly generated chunks. Some of these will be more common, while others will be rarer to find. So keep your eyes open!"}),"\n",(0,s.jsx)(i.p,{children:"Note: Hops will also spawn in modded biomes as long as their using the respective biome tags."}),"\n",(0,s.jsx)(l,{modId:"brewery",itemList:m}),"\n","\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h2,{id:"silo",children:"Silo"}),"\n",(0,s.jsx)(i.p,{children:"The silo is needed to dry harvested wheat, barley, or corn. The silo is modular and can be expanded in both width and height. The larger the silo, the higher the capacity and the shorter the drying time."}),"\n",(0,s.jsx)(i.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(i.p,{children:["Right-click with the item to be dried to place it in the silo.",(0,s.jsx)(i.br,{}),"\n","Right-click to open the silo hatch (when closed).",(0,s.jsx)(i.br,{}),"\n","Right-click to close the silo hatch (when open)."]}),"\n",(0,s.jsx)(i.p,{children:"The content also dries with the hatch open. When the hatch is closed, the content will not be emptied automatically."}),"\n",(0,s.jsx)(l,{modId:"brewery",itemList:b}),"\n","\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h2,{id:"big-barrel",children:"Big Barrel"}),"\n",(0,s.jsx)(d,{modId:"brewery",imageId:"barrel.png",description:"The big barrel currently serves merely as a decorative element. It requires a space of 2x2x2 to be placed."}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h2,{id:"brewingstation",children:"Brewingstation"}),"\n",(0,s.jsx)(d,{modId:"brewery",imageId:"copper_brewingstation.png",description:"Required for brewing beer and whiskey. Unlike ordinary blocks, the brewing station is larger: It consists of 5 separate blocks and therefore requires a space of 2x2x2 for placement."}),"\n",(0,s.jsx)(i.h3,{id:"usage-1",children:"Usage"}),"\n",(0,s.jsx)(i.p,{children:"The brewing station has no GUI and only operates through direct interaction. It is composed of the following blocks:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Kettle"}),"\n",(0,s.jsx)(i.li,{children:"Oven"}),"\n",(0,s.jsx)(i.li,{children:"Timer"}),"\n",(0,s.jsx)(i.li,{children:"Whistle\nThe Kettle is the centerpiece: That's where all ingredients are placed. The Oven serves as a fire source and needs coal. The other parts are responsible for the minigame."}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"After the correct ingredients have been placed, the kettle is filled with water, and the oven is lit, the minigame begins. It lasts about 45 seconds and during this time various events can occur that require a direct action from you (or your teammates). The brewing process is represented audiovisually."}),"\n",(0,s.jsx)(i.p,{children:"Occurring events:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Kettle needs water: The Whistle whistles, the water level of the Kettle is low - refill the Kettle with water"}),"\n",(0,s.jsx)(i.li,{children:"Kettle overboils: The water level of the Kettle is high, bubbling bubbles rise - remove water with an empty Water Bucket"}),"\n",(0,s.jsx)(i.li,{children:"The Timer ticks: Red particles and a ticking sound are emitted - press the button on the Timer"}),"\n",(0,s.jsx)(i.li,{children:"The Oven has too little heat: Smoke particles rise, the flame of the Oven is low - add more coal"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"There are different tiers for the brewing station: Wood, Copper, and Netherite. To brew whiskey, you need Copper or Netherite."}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Note:"})," The faster and better you complete the mini-game, the better the beer quality. If you use a Wood or Copper Brewing Station, some very bad things can even happen!"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h2,{id:"beer-mug",children:"Beer Mug"}),"\n",(0,s.jsx)(d,{modId:"brewery",imageId:"beer_mug.png",description:"Not only serves as a mug for beer but can also be repurposed as a flower pot. Nice!"}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h2,{id:"rope",children:"Rope"}),"\n",(0,s.jsx)(d,{modId:"brewery",imageId:"rope.png",description:"After successfully adding Brewery to your mods, you will be able to discover various new plant species in newly generated chunks. Some of these will be more common, while others will be rarer to find. So keep your eyes open!After successfully adding Brewery to your mods, you will be able to discover various new plant species in newly generated chunks. Some of these will be more common, while others will be rarer to find. So keep your eyes open!"}),"\n",(0,s.jsx)(i.h3,{id:"usage-2",children:"Usage"}),"\n",(0,s.jsx)(i.p,{children:"Even though hops can grow without a rope, they can be further stabilized with the use of one. This additional stabilization allows the hops to grow taller than 2 blocks."}),"\n",(0,s.jsx)(i.p,{children:"The rope can be attached to both fence posts and tripwire hooks. Ropes can also be stretched diagonally. At a height of more than 3 blocks, vertical ropes are automatically created at valid positions\u2014if these are not needed, they can be easily removed with shears."})]})}function y(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(w,{...e})}):w(e)}}}]);
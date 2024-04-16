"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[160],{1933:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>p,contentTitle:()=>l,default:()=>y,effects:()=>u,frontMatter:()=>d,metadata:()=>c,toc:()=>h,wildCrops:()=>m});var s=n(5893),r=n(1151),t=n(1624),a=n(3769),o=n(4397);const d={sidebar_position:1},l="Nether Vinery",c={id:"vinery/nether",title:"Nether Vinery",description:"Blocks",source:"@site/docs/vinery/nether.md",sourceDirName:"vinery",slug:"/vinery/nether",permalink:"/Lets-Do-Wiki/fr/docs/vinery/nether",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"mainSidebar",previous:{title:"Misc",permalink:"/Lets-Do-Wiki/fr/docs/vinery/misc"},next:{title:"Blocks",permalink:"/Lets-Do-Wiki/fr/docs/vinery/blocks"}},p={},h=[{value:"Blocks",id:"blocks",level:2},{value:"Wild Crops",id:"wild-crops",level:3},{value:"Obsidian Stem",id:"obsidian-stem",level:3},{value:"Items",id:"items",level:2},{value:"Nether Bag",id:"nether-bag",level:3},{value:"Effects",id:"effects",level:2}],m=[{name:"Crimson Grape Bush",imageId:"crimson_grape_bush.png",description:"You can primarily find wild Crimson Grape Bushes in crimson Forest biomes. There is also a chance to find it in various nether structures. They only spawn near Lava Lakes."},{name:"Warped Grape Bush",imageId:"warped_grape_bush.png",description:"You can primarily find wild Warped Grape Bushes in warped Forest biomes. There is also a chance to find it in various nether structures. They only spawn near Lava Lakes."}],u=[{name:"Grave Digger",imageId:"balanced.png",description:"Teleports you to your last death point. Works only in the Overworld."},{name:"Hearthstone",imageId:"hearthstone.png",description:"Teleports you to your bed. Works only in the Overworld."},{name:"Netherite",imageId:"netherite.png",description:"You are immortal! At least for a short moment. Is it worth it for the Netherite Ingot?"}];function g(e){const i={admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"nether-vinery",children:"Nether Vinery"}),"\n",(0,s.jsx)(i.h2,{id:"blocks",children:"Blocks"}),"\n",(0,s.jsx)(i.h3,{id:"wild-crops",children:"Wild Crops"}),"\n",(0,s.jsx)(t.ZP,{modId:"vinery",imageId:"crimson_grape.png",description:"After successfully adding NetherVinery to your mods, you will be able to discover various new plant species in newly generated chunks. Some of these will be more common, while others will be rarer to find. So keep your eyes open!",type:"nether"}),"\n",(0,s.jsx)(o.ZP,{modId:"brewery",list:m,type:"nether"}),"\n","\n",(0,s.jsx)(i.admonition,{type:"note",children:(0,s.jsx)(i.p,{children:"You will not be able to find crops in chunks that have already been generated."})}),"\n",(0,s.jsx)(i.h3,{id:"obsidian-stem",children:"Obsidian Stem"}),"\n",(0,s.jsx)(t.ZP,{modId:"vinery",imageId:"obsidian_stem.png",description:"Used to cultivate normal, taiga, savanna, warped and crimson grapes.",pixelated:"false",type:"nether"}),"\n",(0,s.jsx)(i.p,{children:"The Stem is two blocks high, and to place the respective seeds, you must (while holding the seeds) click on the upper part. Increased Growth Speed by 10%"}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h2,{id:"items",children:"Items"}),"\n",(0,s.jsx)(i.h3,{id:"nether-bag",children:"Nether Bag"}),"\n",(0,s.jsx)(t.ZP,{modId:"vinery",imageId:"warped_nether_bag.png",description:"Wow! A fancy Bundle.",type:"nether"}),"\n",(0,s.jsx)(i.p,{children:"Works similar like a Bundle. Can be crafted."}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h2,{id:"effects",children:"Effects"}),"\n",(0,s.jsx)(a.Z,{modId:"herbalbrews",list:u})]})}function y(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},3769:(e,i,n)=>{n.d(i,{Z:()=>a});n(7294);var s=n(1798),r=n(5893);function t(e){let{modId:i,imageUrl:n}=e;return(0,r.jsx)("span",{children:(0,r.jsx)("img",{src:`/Lets-Do-Wiki/img/textures/${i}/effect/${n}`,style:{imageRendering:"pixelated",width:"50px",marginRight:"4px",marginBottom:"-5px"}})})}function a(e){let{modId:i,list:n}=e;return(0,r.jsx)("div",{children:n.map(((e,n)=>(0,r.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"auto 1fr",alignItems:"center"},children:[(0,r.jsx)(t,{modId:i,imageUrl:e.imageId}),(0,r.jsxs)("div",{className:"speckyInlineMarkdown",style:{marginLeft:"8px"},children:[(0,r.jsx)("strong",{children:e.name})," - ",(0,r.jsx)(s.U,{children:e.description}),(0,r.jsx)("span",{className:"bigAssItemSpacer"})]})]},n)))})}},4397:(e,i,n)=>{n.d(i,{WD:()=>d,ZP:()=>a,sr:()=>o});n(7294);var s=n(1798),r=n(5893);function t(e){let{modId:i,type:n,imageUrl:s}=e;return(0,r.jsx)("span",{children:(0,r.jsx)("img",{src:`/Lets-Do-Wiki/img/textures/${i}/${n}/${s}`,style:{imageRendering:"pixelated",width:"28px",marginRight:"4px",marginBottom:"-8px"}})})}function a(e){let{modId:i,list:n,type:a}=e;return(0,r.jsx)("div",{children:n.map(((e,n)=>(0,r.jsxs)("span",{style:{marginBottom:"4px"},children:[(0,r.jsx)(t,{modId:i,type:a,imageUrl:e.imageId}),(0,r.jsx)("span",{style:{fontWeight:"bold"},children:e.name}),(0,r.jsx)("span",{children:" - "}),(0,r.jsx)("span",{className:"speckyInlineMarkdown",children:(0,r.jsx)(s.U,{children:e.description})}),(0,r.jsx)("span",{className:"bigAssItemSpacer"})]},n)))})}function o(e){return(0,r.jsx)(a,{...e,type:"item"})}function d(e){return(0,r.jsx)(a,{...e,type:"block"})}}}]);
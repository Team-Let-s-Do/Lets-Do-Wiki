"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[9075],{7205:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"wildernature/bounties","title":"Bounties","description":"Your own Bounties!","source":"@site/versioned_docs/version-Legacy/wildernature/bounties.md","sourceDirName":"wildernature","slug":"/wildernature/bounties","permalink":"/Lets-Do-Wiki/docs/Legacy/wildernature/bounties","draft":false,"unlisted":false,"tags":[],"version":"Legacy","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"mainSidebar","previous":{"title":"Items","permalink":"/Lets-Do-Wiki/docs/Legacy/wildernature/items"},"next":{"title":"Contributing","permalink":"/Lets-Do-Wiki/docs/Legacy/contributing"}}');var r=t(4848),s=t(8453);const o={sidebar_position:4},l="Bounties",c={},d=[{value:"Your own Bounties!",id:"your-own-bounties",level:2}];function a(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"bounties",children:"Bounties"})}),"\n",(0,r.jsx)(n.h2,{id:"your-own-bounties",children:"Your own Bounties!"}),"\n",(0,r.jsx)(n.p,{children:"Adding your own bounties is quite simple. I will briefly explain how to do it here."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.p,{children:["First, you need a ",(0,r.jsx)(n.code,{children:"target predicate"}),", which looks like this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{\n  "condition": "minecraft:damage_source_properties",\n  "predicate": {\n    "direct_entity": {\n      "type": "wildernature:bullet"\n    },\n    "source_entity": {\n      "type": "minecraft:player"\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Components"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"condition:"}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"The type of condition being defined. In this case, it is damage_source_properties, indicating that the condition relates to the properties of a damage source. We will just keep this as it is."}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"predicate:"}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"The criteria that must be met for the condition to be true. The predicate contains sub-conditions to specify these criteria."}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"direct_entity:"}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["This sub-condition specifies the type of the direct entity involved in causing the damage. Here, type is set to wildernature",":bullet",", meaning the direct entity must be a bullet from WilderNature."]}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"source_entity:"}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"This sub-condition specifies the type of the source entity involved in causing the damage. Here, type is set to player, meaning the source entity must be a player."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Save your own Predicates under ",(0,r.jsx)(n.code,{children:"data/wildernature/predicates"})]}),"\n",(0,r.jsx)(n.p,{children:"Alright! That was already the most complex step. Well done!"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.p,{children:"Now let's create the corresponding contract."}),"\n",(0,r.jsx)(n.p,{children:"The Contract json should look like this here:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-{",children:'  "type": "wildernature:tier1",\n  "contractStack": {\n    "Count": 1,\n    "id": "wildernature:uncommon_contract"\n  },\n  "count": 6,\n  "damagePredicate": "wildernature:bullet",\n  "description": "contract.wildernature.tier1_boar.desc",\n  "name": "contract.wildernature.tier1_boar",\n  "reward": {\n    "blockExpReward": 2,\n    "loot": "wildernature:bountyboard/tier1_contract_boar",\n    "playerExpReward": 12\n  },\n  "targetPredicate": "wildernature:boar"\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Components"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"type:"}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"For which Tier Level will the contract be available"}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"contractStack, ID:"}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"The ID of the Item Icon that will be used. You can use any available Item ID."}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"count:"}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"The Amount of Entities that have to be killed."}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"damagePredicate:"}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"The damagePredicate we made before."}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsx)(n.li,{children:"description:"}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"The description being shown in the tooltip. Also needs a lang file entry."}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"6",children:["\n",(0,r.jsx)(n.li,{children:"name:"}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"The Name of the Contract. Also needs a lang file entry."}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"7",children:["\n",(0,r.jsx)(n.li,{children:"reward, blockExpReward:"}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"How much Experience the BountyBoard will get"}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"8",children:["\n",(0,r.jsx)(n.li,{children:"reward, loot:"}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"The Loot you will get after completing this contract"}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"9",children:["\n",(0,r.jsx)(n.li,{children:"reward, playerExpReward:"}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"How much Experience the Player will get"}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"10",children:["\n",(0,r.jsx)(n.li,{children:"targetPredicate:"}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"The Entity you have to kill in order to finish the contract"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Save your own Contract under ",(0,r.jsx)(n.code,{children:"data/wildernature/contracts"})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}}}]);
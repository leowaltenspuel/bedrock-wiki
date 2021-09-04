import{r as n,o as s,c as a,a as t,w as e,b as p,d as o}from"./404.md.950585aa.js";const r='{"title":"Detecting Other Entities","description":"","frontmatter":{"title":"Detecting Other Entities","tags":["intermediate"]},"headers":[{"level":2,"title":"Using `minecraft:entity_sensor`","slug":"using-minecraft-entity-sensor"},{"level":2,"title":"Using BP Animations & Animation Controllers","slug":"using-bp-animations-animation-controllers"}],"relativePath":"entities/detecting-other-entities.md","lastUpdated":1630770145917}',l={},i=t("p",null,"At some point in time you might have thought about making your entities do things when in the vicinity of a nearby entity. This article details the various known ways to do so.",-1),c=t("h2",{id:"using-minecraft-entity-sensor"},[t("a",{class:"header-anchor",href:"#using-minecraft-entity-sensor","aria-hidden":"true"},"#"),p(" Using "),t("code",null,"minecraft:entity_sensor")],-1),u=t("p",null,"This is probably the most basic way to detect other entities. The main issues are that it only accepts one entry, and detecting if the entity you want to detect goes away can be very tricky to say the least. Because it's an entity component, you can just plug it into your entity behavior file and plug in Minecraft filters. Here's a demonstration.",-1),b=o('',4),k=p("BP/animations/detection animation.json"),m=o('',3),d=p("BP/animations/detection animation.json"),q=o('',2),y=p("BP/animation_controllers/pig animation controllers.json"),_=o('',3);l.render=function(p,o,r,l,h,g){const f=n("CodeHeader");return s(),a("div",null,[i,c,u,t(f),b,t(f,null,{default:e((()=>[k])),_:1}),m,t(f,null,{default:e((()=>[d])),_:1}),q,t(f,null,{default:e((()=>[y])),_:1}),_])};export default l;export{r as __pageData};
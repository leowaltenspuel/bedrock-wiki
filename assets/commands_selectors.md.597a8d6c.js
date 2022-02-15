import{_ as e,c as t,o,e as a}from"./404.md.6d6646e0.js";const g='{"title":"Understanding Selectors","description":"","frontmatter":{"title":"Understanding Selectors","mention":["Science-geek42","Brougud","MedicalJewel105"]},"headers":[{"level":2,"title":"Secondary Selectors","slug":"secondary-selectors"},{"level":2,"title":"Tags","slug":"tags"},{"level":2,"title":"Has Item","slug":"has-item"},{"level":3,"title":"Item","slug":"item"},{"level":3,"title":"Data","slug":"data"},{"level":3,"title":"Location","slug":"location"},{"level":3,"title":"Slot","slug":"slot"},{"level":3,"title":"Quantity","slug":"quantity"},{"level":3,"title":"Additional Information","slug":"additional-information"},{"level":3,"title":"Examples","slug":"examples"},{"level":2,"title":"Combining Selectors","slug":"combining-selectors"},{"level":2,"title":"Other Useful Information","slug":"other-useful-information"}],"relativePath":"commands/selectors.md","lastUpdated":1644950029186}',l={},i=a(`<p>Selectors are used in commands to target where you want to execute a command at. The primary target selectors are:</p><ul><li><code>@e</code> - Target all entities</li><li><code>@s</code> - Target yourself, or the origin who the command is executed from</li><li><code>@p</code> - Target the nearest player</li><li><code>@a</code> - Target every player</li><li><code>@r</code> - Target a random player</li></ul><p>Examples are as follows</p><div class="language-"><pre><code>#kill every player
kill @a 
#kill every loaded entity
kill @e 
#kill a random player
kill @r
#kill the executor of the command
kill @s
#kill the nearest player
kill @p
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="secondary-selectors" tabindex="-1">Secondary Selectors <a class="header-anchor" href="#secondary-selectors" aria-hidden="true">#</a></h2><p>Now we will take a look at the secondary selectors so you can be specific in regard to what you want to execute the command on. In order to use any of the following secondary selectors, you must first have a primary selector. To start with secondary selectors you must add brackets <code>[]</code> to the end of the chosen selector like this <code>kill @e[]</code>. There are many secondary selectors you can use so let&#39;s start.</p><ul><li><code>kill @e[c=&lt;count&gt;]</code> Where <code>&lt;count&gt;</code> is the number you want. The selector <code>c</code> stands for count. It allows you to choose how many entities to select. For example, the command <code>/kill @e[c=4]</code> will kill four entities. The selector <code>c</code> will target in a specific order depending on how it is used. If the selector used is <code>@r</code> then <code>c</code> will target randomly E.g. <code>/kill @r[c=4]</code> will kill four random players. if <code>@r</code> is not used then c will kill from nearest to farthest unless the number given is negative. <code>kill @e[c=4]</code> will kill four entities nearest to farthest <code>kill @e[c=-4]</code> will still kill four entities but from farthest to nearest.</li><li><code>kill @e[name=&lt;name&gt;]</code> The selector <code>name</code> selects only entities with the name put in the place of <code>&lt;name&gt;</code>. If <code>=!</code> is used in place of <code>=</code> the selector will target entities without the name.</li><li><code>kill @e[l=&lt;level&gt;]</code> The selector <code>l</code> will target any players with an exp level equal to or greater than the value put in place of <code>&lt;level&gt;</code>.</li><li><code>kill @e[lm=&lt;levelm&gt;]</code> The selector <code>lm</code> will target any players with an exp level equal to or lower than the value put in place of <code>&lt;levelm&gt;</code>.</li><li><code>kill @e[m=&lt;gamemode&gt;]</code> The selector <code>m</code> will target any players who are in the mode put in place of <code>&lt;gamemode&gt;</code>. Possible values are: <code>survival</code>, <code>s</code>, and <code>0</code>, <code>creative</code>, <code>c</code>, and <code>1</code>, <code>adventure</code>, <code>a</code>, and <code>2</code>. If =! is used in place of = the selector will target players who are not in the selected mode.</li><li><code>kill @e[tag=&lt;tag&gt;]</code> The selector <code>tag</code> will target any entities with the tag put in place of <code>&lt;tag&gt;</code>. If <code>=!</code> is used in place of <code>=</code> the selector will target entities without the tag.</li><li><code>kill @e[r=&lt;radius&gt;]</code> The selector <code>r</code> will target any players whose distance in blocks from the location of the command execution is equal to or less than the value put in place of <code>&lt;radius&gt;</code>.</li><li><code>kill @e[rm=&lt;radiusm&gt;]</code> The selector <code>rm</code> will target any players whose distance in blocks from the location of the command execution is equal to or greater than the value put in place of <code>&lt;radiusm&gt;</code>.</li><li><code>kill @e[x=&lt;x&gt;,y=&lt;y&gt;,z=&lt;z&gt;]</code> These selectors must all be present together or not be there for a command to work. They do nothing by themselves but they modify other secondary selectors. They can modify <code>dx</code>, <code>dy</code>, <code>dz</code>, <code>rm</code>, <code>r</code>, and <code>c</code>. All of those previous selectors use a central starting location which can be set using <code>x</code>, <code>y</code>, and <code>z</code>. Otherwise, the starting location will be set to the position of the executor of the command. Tildes ~ can be used in place of numbers for <code>x</code>, <code>y</code>, and <code>z</code>.</li><li><code>kill @e[dx=&lt;dx&gt;,dy=&lt;dy&gt;,dz=&lt;dz&gt;]</code> These selectors must all be present together or not be there for a command to work. These selectors check if a player is in a volume. Starting at the location of the executor of the command <code>dx</code> will add the value put in <code>&lt;dx&gt;</code> to the x position to make a point. when <code>dx</code>, <code>dy</code>, and <code>dz</code> are used together they identify a point relative to the executor of the command. All entities within a box drawn between the executor of the command and the point made are selected.</li><li><code>kill @e[type=&lt;type&gt;]</code> This selector chooses the type of entity to be selected. The names of any entity can be replaced for <code>&lt;type&gt;</code> to choose the selection. If <code>type</code> is used with <code>@r</code> instead of <code>@r</code> selecting players <code>@r</code> will select the entity put in the place of <code>&lt;type&gt;</code>. This allows you to randomly select an entity of a specific type. If <code>=!</code> is used in place of <code>=</code> this selector will target entities other than the type. \u200C</li><li><code>kill @e[family=&lt;family&gt;]</code> This selector will select entities that are in the family put in place of <code>&lt;family&gt;</code>. This could be many things, <code>creeper</code> for all creepers, <code>monster</code> for any monster, <code>undead</code> for any undead mob, <code>mob</code> for any well... mob. If <code>=!</code> is used in place of <code>=</code> the selector will target entities not in the family.</li><li><code>kill @e[scores={&lt;scoreboard&gt;=&lt;score&gt;}]</code> This selector can read the score that a entity has from a scoreboard. In the place of <code>&lt;scoreboard&gt;</code> goes the name of the scoreboard you wish to test. In the place of <code>&lt;score&gt;</code> can go many things. If you want to check for a score of 10 just replace <code>&lt;score&gt;</code> with a 10. To invert a score selector use <code>=!</code> instead of <code>=</code>. You have to use <code>..</code> for checking between, above, and below a value(s). Think of <code>..</code> as the words &quot;between&quot; and &quot;continue&quot; it helps a lot. <ul><li><code>10..</code> is any number above or equal to ten.</li><li><code>..10</code> is any number below or equal to ten.</li><li><code>5..10</code> is any number between five and ten.</li></ul></li><li><code>kill @e[rx=&lt;xrotation&gt;]</code> The selector <code>rx</code> will target any entities with a rotation around the x axis equal to or less than the value put in place of <code>&lt;xrotation&gt;</code>. -90 would be straight up, 0 is straight horizontal, and 90 is down.</li><li><code>kill @e[rxm=&lt;xrotationm&gt;]</code> The selector <code>rxm</code> will target any entities a rotation around the x axis rotation equal to or greater than the value put in place of <code>&lt;xrotationm&gt;</code>. -90 would be straight up, 0 is straight horizontal, and 90 is down.</li><li><code>kill @e[ry=&lt;yrotation&gt;]</code> The selector <code>ry</code> will target any entities with a rotation around the y axis equal to or less than the value put in place of <code>&lt;yrotation&gt;</code>. -180 is north, -90 is east, 0 is south, 90 is west, 180 is north.</li><li><code>kill @e[rym=&lt;yrotationm&gt;]</code> The selector <code>rym</code> will target any entities with a rotation around the y axis equal to or greater than the value put in place of <code>&lt;yrotationm&gt;</code>. -180 is north, -90 is east, 0 is south, 90 is west, 180 is north.</li></ul><h2 id="tags" tabindex="-1">Tags <a class="header-anchor" href="#tags" aria-hidden="true">#</a></h2><p>Tags are a way to discriminate towards a player, or group of players and or mobs. Tags can be useful in alot of ways like making a ranks system, and or making a server with a anticheat. Tags can be used in a number of ways, for example, <code>give @e[tag=steak] cooked_beef</code> will give everyone with the tag steak, one steak. There are a number of ways you can use tags but we will be looking at the most used options.</p><ul><li><code>kill @e[tag=&lt;tag&gt;]</code> This is how you would kill all the players with your given tag. Its useful if you are making a minigame, and a player were to lose, you could kill them then set there gamemode into something else with a command block.</li><li><code>kill @e[tag=!&lt;tag&gt;]</code> This will kill all of the entities that <strong>DONT</strong> have the tag that you specified.</li><li><code>tag @a &lt;add | remove | list&gt; &lt;tag&gt;</code> This is how you would give, or remove a tag, useing <code>add</code> or <code>remove</code>. If you want to see what tags a player has then you can do <code>tag &lt;selector&gt; list</code></li></ul><h2 id="has-item" tabindex="-1">Has Item <a class="header-anchor" href="#has-item" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">Warning!</p><p>This argument was added in Minecraft Beta 1.18.20.21 and it is not in stable version yet.</p></div><p><code>hasitem</code> filter allows to execute commands on entities that have a special item.</p><p><code>/give @a[hasitem=[{item=sand,data=-1,quantity=16..64,location=slot.hotbar,slot=!4}]] minecraft:apple</code></p><p>This command will give apple to every player who has 16-64 sand within the hotbar but not in the fifth slot.</p><h3 id="item" tabindex="-1">Item <a class="header-anchor" href="#item" aria-hidden="true">#</a></h3><p><code>item=&lt;namespace:name&gt;</code></p><p>Defines name of item or block, like in <code>/give</code> command.</p><h3 id="data" tabindex="-1">Data <a class="header-anchor" href="#data" aria-hidden="true">#</a></h3><p><code>data=&lt;int&gt;</code></p><ul><li>Doesn&#39;t support range.</li><li>Doesn&#39;t support invert value.</li></ul><p>Data value of the item/block. If you want to use any data value, use <code>-1</code>. Default value is <code>-1</code>.<br><strong>Note: There is a bug in the data where it doesn&#39;t detect Data Value correctly [MCPE-151920]</strong></p><h3 id="location" tabindex="-1">Location <a class="header-anchor" href="#location" aria-hidden="true">#</a></h3><p><code>location=&lt;slot&gt;</code></p><p>Defines slot of entity where to detect, like in <code>/replaceitem</code> command. This component isn&#39;t required.</p><p><strong>Location Values:</strong></p><ul><li><code>slot.armor</code></li><li><code>slot.armor.chest</code></li><li><code>slot.armor.feet</code></li><li><code>slot.armor.head</code></li><li><code>slot.armor.legs</code></li><li><code>slot.chest</code></li><li><code>slot.enderchest</code></li><li><code>slot.equippable</code></li><li><code>slot.hotbar</code></li><li><code>slot.inventory</code></li><li><code>slot.saddle</code></li><li><code>slot.weapon.mainhand</code></li><li><code>slot.weapon.offhand</code></li></ul><h3 id="slot" tabindex="-1">Slot <a class="header-anchor" href="#slot" aria-hidden="true">#</a></h3><p><code>slot=&lt;value&gt;</code></p><p>Defines slot&#39;s id, like in <code>/replaceitem</code> command</p><ul><li>Supports range integer (<code>0..10</code>).</li><li>Supports invert value (<code>!0</code>).</li></ul><p>You must specify the location to use slot:<br> \u274E <code>[hasitem={item=sand, slot=0..8}]</code><br> \u2705 <code>[hasitem={item=sand, location=slot.hotbar, slot=0..8}]</code></p><h3 id="quantity" tabindex="-1">Quantity <a class="header-anchor" href="#quantity" aria-hidden="true">#</a></h3><p><code>quantity=&lt;value&gt;</code></p><p>Defines how much item entity must have.</p><ul><li>Supports range integer (<code>0..10</code>).</li><li>Supports invert value (<code>!0</code>).</li></ul><h3 id="additional-information" tabindex="-1">Additional Information <a class="header-anchor" href="#additional-information" aria-hidden="true">#</a></h3><p><code>hasitem</code> can:</p><ul><li>Accept two identical arguments: <code>[hasitem={item=sand,item=iron_sword}]</code></li><li>Accept array/multiple item: <code>[hasitem=[{item=sand},{item=iron_sword},{...}]]</code></li></ul><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h3><p>Checks for players who have netherite sword in inventory:</p><ul><li><code>testfor @a[hasitem={item=netherite_sword}]</code></li></ul><p>Clears 2 apples if player has more than 4 apples:</p><ul><li><code>clear @a[hasitem={item=apple,quantity=4..}] apple 2</code></li></ul><p>Checks for players who have 2 sticks and 2 diamonds:</p><ul><li><code>testfor @a[hasitem=[{item=diamond,quantity=2},{item=stick,quantity=2}]]</code></li><li><code>testfor @a[hasitem={item=diamond,item=stick,quantity=2}]</code> (<strong>More simple method</strong>)</li></ul><h2 id="combining-selectors" tabindex="-1">Combining Selectors <a class="header-anchor" href="#combining-selectors" aria-hidden="true">#</a></h2><p>Secondary selectors can be used together by utilizing commas. Make sure to split each selector into its own part. As an example <code>@e[type=&lt;type&gt;]</code> and <code>@e[name=&lt;name&gt;]</code> can be combined like this: <code>@e[type=&lt;type&gt;,name=&lt;name&gt;]</code>. However, with the <code>score</code> selector you must format checks to another scoreboard like this, <code>@e[scores={&lt;scoreboard&gt;=&lt;score&gt;,&lt;scoreboard2&gt;=&lt;score2&gt;}]</code>.</p><h2 id="other-useful-information" tabindex="-1">Other Useful Information <a class="header-anchor" href="#other-useful-information" aria-hidden="true">#</a></h2><p>There is one more primary selector on bedrock edition which is a very niche case, <code>@initiator</code>. When an NPC is set up to have a button run a command, <code>@initiator</code> can be used to target the player which clicked the button. Otherwise, <code>@p</code> might likely be used and the command might execute on a different player who is nearer to the NPC than the player who clicked the button.</p>`,50),c=[i];function d(s,n,r,h,u,m){return o(),t("div",null,c)}var y=e(l,[["render",d]]);export{g as __pageData,y as default};
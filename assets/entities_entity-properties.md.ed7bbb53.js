import{r as n,o as s,c as a,a as t,w as e,d as p,b as o}from"./404.md.fd2be1b7.js";const r='{"title":"Entity Properties","description":"","frontmatter":{"layout":"page","title":"Entity Properties","parent":"Concepts","tags":["beta"]},"headers":[{"level":2,"title":"Entity Properties Definition","slug":"entity-properties-definition"},{"level":3,"title":"Defining Properties on Entities","slug":"defining-properties-on-entities"},{"level":3,"title":"Entity Properties Object Fields","slug":"entity-properties-object-fields"},{"level":3,"title":"Manipulating and Accessing Entity Properties","slug":"manipulating-and-accessing-entity-properties"},{"level":2,"title":"Entity Aliases","slug":"entity-aliases"},{"level":2,"title":"Entity Permutations","slug":"entity-permutations"}],"relativePath":"entities/entity-properties.md","lastUpdated":1626131330140}',l={},c=o("Experimental"),u=p('<ul><li>Documentation on the new Entity Properties, also known as Actor Properties, introduced in the 1.16.230.52 Minecraft: Bedrock Edition beta version.</li><li>Entity Properties were implemented to save data or store values on entities efficiently without needing the use of components or attributes (For example, &quot;minecraft:variant&quot;) in server-side of the entity (Behavior Pack), similar to Block Properties.</li></ul><hr><h2 id="entity-properties-definition"><a class="header-anchor" href="#entity-properties-definition" aria-hidden="true">#</a> Entity Properties Definition</h2><h3 id="defining-properties-on-entities"><a class="header-anchor" href="#defining-properties-on-entities" aria-hidden="true">#</a> Defining Properties on Entities</h3><ul><li>Entity Properties Definition:</li></ul><div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>\n\t<span class="token property">&quot;minecraft:entity&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;entity:properties_example&quot;</span><span class="token punctuation">,</span>\n\t\t\t<span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t\t<span class="token property">&quot;property:number_range_example&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t\t\t<span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t\t\t\t<span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n\t\t\t\t\t\t<span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">100</span>\n\t\t\t\t\t<span class="token punctuation">}</span>\n\t\t\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t\t<span class="token property">&quot;property:number_enum_example&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t\t\t<span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>\n\t\t\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t\t<span class="token property">&quot;property:string_enum_example&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t\t\t<span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;first&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;second&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;third&quot;</span><span class="token punctuation">]</span>\n\t\t\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t\t<span class="token property">&quot;property:boolean_enum_example&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t\t\t<span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">]</span>\n\t\t\t\t<span class="token punctuation">}</span>\n\t\t\t<span class="token punctuation">}</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><hr><h3 id="entity-properties-object-fields"><a class="header-anchor" href="#entity-properties-object-fields" aria-hidden="true">#</a> Entity Properties Object Fields</h3><h4 id="values"><a class="header-anchor" href="#values" aria-hidden="true">#</a> <code>values</code></h4><ul><li><code>values</code> property is required, and omitting this field may cause errors and failure to register the property.</li><li><code>values</code> field can be evaluated as an array of enum values, or a range of minimum and maximum values (Note that integer, float, and boolean enum values currently supports only two values):</li></ul><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;property:range_example&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">5</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><strong>OR</strong></p><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;property:enum_example&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="default"><a class="header-anchor" href="#default" aria-hidden="true">#</a> <code>default</code></h4><ul><li>You can set the default value of the entity property (By default, the first value of the enum array index), through the <code>default</code> field inside the defined property object:</li></ul><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;property:default_value_example&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>As you can observe, the default property is set to <code>false</code> instead of <code>true</code> when the entity is spawned in the world.</li></ul><h4 id="client-sync"><a class="header-anchor" href="#client-sync" aria-hidden="true">#</a> <code>client_sync</code></h4><ul><li>To sync through the Resource Pack (client-side), <code>client_sync</code> field can be used to allow the Client Entity access the Entity Properties. By default, the value is set to <code>false</code>.</li></ul><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;property:client_sync_example&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">20</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;client_sync&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><hr><h3 id="manipulating-and-accessing-entity-properties"><a class="header-anchor" href="#manipulating-and-accessing-entity-properties" aria-hidden="true">#</a> Manipulating and Accessing Entity Properties</h3><ul><li><p>You can access entity properties through MoLang Entity Queries (Note, these MoLang Entity Queries are a part of Experimental features):</p><ul><li><code>query.actor_property</code></li><li><code>query.has_actor_property</code></li></ul></li><li><p>With entity events, you may set the entity property to a value with the <code>set_actor_property</code> event response:</p></li></ul><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;events&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;event:set_entity_property&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;set_actor_property&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;property:number_enum_example&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;property:string_enum_example&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&#39;second&#39;&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;property:boolean_enum_example&quot;</span><span class="token operator">:</span> <span class="token string">&quot;!query.actor_property(&#39;property:boolean_enum_example&#39;)&quot;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><hr><h2 id="entity-aliases"><a class="header-anchor" href="#entity-aliases" aria-hidden="true">#</a> Entity Aliases</h2><ul><li>You can define aliases for your entity to summon the entity with set entity property values through the <code>summon</code> command.</li><li>Entity can have various aliases with custom entity identifier to use:</li></ul><div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>\n\t<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.16.0&quot;</span><span class="token punctuation">,</span>\n\t<span class="token property">&quot;minecraft:entity&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;entity:properties_example&quot;</span><span class="token punctuation">,</span>\n\t\t\t<span class="token property">&quot;is_spawnable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\t\t\t<span class="token property">&quot;is_summonable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\t\t\t<span class="token property">&quot;is_experimental&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n\t\t\t<span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t\t<span class="token property">&quot;property:property_index&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t\t\t<span class="token property">&quot;client_sync&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\t\t\t\t\t<span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t\t\t\t<span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n\t\t\t\t\t\t<span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">2</span>\n\t\t\t\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t\t\t<span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n\t\t\t\t<span class="token punctuation">}</span>\n\t\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t<span class="token property">&quot;aliases&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t\t<span class="token property">&quot;entity:default_alias&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t\t<span class="token property">&quot;entity:first_alias&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t\t\t<span class="token property">&quot;property:property_index&quot;</span><span class="token operator">:</span> <span class="token number">1</span>\n\t\t\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t\t<span class="token property">&quot;entity:second_alias&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t\t\t<span class="token property">&quot;property:property_index&quot;</span><span class="token operator">:</span> <span class="token number">2</span>\n\t\t\t\t<span class="token punctuation">}</span>\n\t\t\t<span class="token punctuation">}</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><ul><li>Now, the entity has multiple aliases, and you can use the defined alias identifier through the <code>summon</code> command to spawn the entity with the properties set: <ul><li><code>/summon entity:first_alias</code> will spawn the entity with the entity property <code>property:property_index</code> set to 1.</li></ul></li></ul><hr><h2 id="entity-permutations"><a class="header-anchor" href="#entity-permutations" aria-hidden="true">#</a> Entity Permutations</h2><ul><li>Entity Permutations are implemented to apply a set of components every tick if the condition is met.</li><li><code>permutations</code> array is inserted in the <code>minecraft:entity</code> object, the same level as the <code>components</code> object:</li></ul><div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;permutations&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;query.actor_property(&#39;property:string_enum_example&#39;) == &#39;first&#39;&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;components&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;minecraft:scale&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n          <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;query.actor_property(&#39;property:string_enum_example&#39;) == &#39;second&#39;&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;components&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;minecraft:scale&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n          <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">2.0</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;query.actor_property(&#39;property:string_enum_example&#39;) == &#39;third&#39;&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;components&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;minecraft:scale&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n          <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">3.0</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><ul><li>As we observed, if the entity property &quot;<code>property:string_enum_example</code>&quot; value is &quot;<code>first</code>&quot;, then the &quot;<code>minecraft:scale</code>&quot; entity component with a scale of 1 is applied to the entity. Otherwise, if the entity property &quot;<code>property:string_enum_example</code>&quot; value is &quot;<code>second</code>&quot;, the entity&#39;s scale is twice as it was. Then, it is similar to how it goes for the <code>third</code> value, with three times from the original scale.</li></ul>',34);l.render=function(p,o,r,l,i,k){const b=n("Label");return s(),a("div",null,[t(b,{color:"orange"},{default:e((()=>[c])),_:1}),u])};export default l;export{r as __pageData};

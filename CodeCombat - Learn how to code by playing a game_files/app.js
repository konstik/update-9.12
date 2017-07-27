(function(){"use strict"
var e=typeof window==="undefined"?global:window
if(typeof e.require==="function")return
var t={}
var r={}
var i={}.hasOwnProperty
var n={}
var o=function(e,t){return e.indexOf(t,e.length-t.length)!==-1}
var s=function(e,t){var r=0
if(t){if(t.indexOf("components/"===0)){r="components/".length}if(t.indexOf("/",r)>0){t=t.substring(r,t.indexOf("/",r))}}var i=n[e+"/index.js"]||n[t+"/deps/"+e+"/index.js"]
if(i){return"components/"+i.substring(0,i.length-".js".length)}return e}
var a=function(){var e=/^\.\.?(\/|$)/
return function(t,r){var i=[],n,o
n=(e.test(r)?t+"/"+r:r).split("/")
for(var s=0,a=n.length;s<a;s++){o=n[s]
if(o===".."){i.pop()}else if(o!=="."&&o!==""){i.push(o)}}return i.join("/")}}()
var l=function(e){return e.split("/").slice(0,-1).join("/")}
var c=function(t){return function(r){var i=a(l(t),r)
return e.require(i,t)}}
var u=function(e,t){var i={id:e,exports:{}}
r[e]=i
t(i.exports,c(e),i)
return i.exports}
var require=function(e,n){var o=a(e,".")
if(n==null)n="/"
o=s(e,n)
if(i.call(r,o))return r[o].exports
if(i.call(t,o))return u(o,t[o])
var l=a(o,"./index")
if(i.call(r,l))return r[l].exports
if(i.call(t,l))return u(l,t[l])
throw new Error('Cannot find module "'+e+'" from '+'"'+n+'"')}
require.alias=function(e,t){n[t]=e}
require.register=require.define=function(e,r){if(typeof e==="object"){for(var n in e){if(i.call(e,n)){t[n]=e[n]}}}else{t[e]=r}}
require.list=function(){var e=[]
for(var r in t){if(i.call(t,r)){e.push(r)}}return e}
require.brunch=true
e.require=require})()
require.register("schemas/concepts",function(e,require,t){var r
r=[{concept:"advanced_strings",name:"",description:"",automatic:"??",deprecated:true},{concept:"algorithms",name:"",description:"",automatic:false,deprecated:true},{concept:"boolean_logic",name:"",description:"",automatic:"",deprecated:true},{concept:"basic_html",name:"",description:"",automatic:"",deprecated:true},{concept:"basic_css",name:"",description:"",automatic:"",deprecated:true},{concept:"basic_web_scripting",name:"",description:"",automatic:"",deprecated:true},{concept:"intermediate_html",name:"",description:"",automatic:"",deprecated:true},{concept:"intermediate_css",name:"",description:"",automatic:"",deprecated:true},{concept:"intermediate_web_scripting",name:"",description:"",automatic:"",deprecated:true},{concept:"advanced_html",name:"",description:"",automatic:"",deprecated:true},{concept:"advanced_css",name:"",description:"",automatic:"",deprecated:true},{concept:"advanced_web_scripting",name:"",description:"",automatic:"",deprecated:true},{concept:"input_handling",name:"",description:"",automatic:"",deprecated:true},{concept:"while_loops",name:"",description:"",automatic:"",deprecated:true},{concept:"advanced_css_rules",name:"Advanced CSS Rules",description:"CSS Rules introduced in WD3+.",automatic:true},{concept:"advanced_css_selectors",name:"Advanced CSS Selectors",description:"CSS Selectors introduced in WD3+.",automatic:true},{concept:"advanced_html_attributes",name:"Advanced HTML Attributes",description:"HTML Attributes introduced in WD3+.",automatic:true},{concept:"advanced_html_tags",name:"Advanced HTML Tags",description:"HTML Tags introduced in WD3+.",automatic:true},{concept:"algorithm_average",name:"Algorithm Average",description:"Summing multiple values and dividing by the number of values.",automatic:false},{concept:"algorithm_find_minmax",name:"Algorithm Find Min/Max",description:"Finding the optimal value out of collection of values.",automatic:false},{concept:"algorithm_search_binary",name:"Algorithm Search Binary",description:"Implementations of the binary search algorithm",automatic:false},{concept:"algorithm_search_graph",name:"Algorithm Search Graph",description:"Implementations of graph search algorithms.",automatic:false},{concept:"algorithm_sort",name:"Algorithm Sort",description:"Sorting an array.",automatic:false},{concept:"algorithm_sum",name:"Algorithm Sum",description:"Summing multiple values.",automatic:false},{concept:"arguments",name:"Arguments",description:"Using arguments when calling a function",automatic:true,tagger:"CallExpression.arguments>*"},{concept:"arithmetic",name:"Arithmetic",description:"Adding, subtracting, multiplication or dividing.",automatic:true,tagger:function(e){return _.some(e.find("BinaryExpression"),function(e){var t,r
return((t=e.operator)==="+"||t==="-"||t==="*"||t==="/")&&((r=e.right)!=null?r.value:void 0)!==1})}},{concept:"array_2d",name:"2D Array",description:"Two-dimensional arrays. Arrays containing arrays.",automatic:true,tagger:"MemberExpression[computed=true].object>MemberExpression[computed=true]"},{concept:"array_index",name:"Array Indexing",description:"Using indexes to access elements of an array.",automatic:false},{concept:"array_iterating",name:"Iterating Over Arrays",description:"Going through elements of an array programmatically.",automatic:false},{concept:"array_literals",name:"Array Literals",description:"Constructing an array using [] notation.",automatic:true,tagger:"ArrayExpression"},{concept:"array_searching",name:"Array Searching",description:"Searching through an array for an element.",automatic:false},{concept:"array_sorting",name:"Array Sorting",description:"Sorting using Array.sort.",automatic:false},{concept:"arrays",name:"Arrays",description:"Anything involving arrays.",automatic:true},{concept:"basic_css_rules",name:"Basic CSS rules",description:"CSS Rules introduced in WD1.",automatic:true},{concept:"basic_css_selectors",name:"Basic CSS selectors",description:"CSS Selectors introduce in WD1.",automatic:true},{concept:"basic_html_attributes",name:"Basic HTML Attributes",description:"HTML Attributes introduced in WD1.",automatic:true},{concept:"basic_html_tags",name:"Basic HTML Tags",description:"HTML Tags introduced in WD1.",automatic:true},{concept:"basic_syntax",name:"Basic Syntax",description:"Writing code of any sort.",automatic:true,tagger:"*"},{concept:"binary",name:"Binary",description:"Implementations of binary, (0b001100, toString(2))",automatic:"Sometimes",tagger:function(e){return _.some(e.find('CallExpression.callee>MemberExpression.property>Identifier[name="toString"]'),function(e){var t
t=e.parent.parent
if(t["arguments"].length!==1){return false}return t.matches("Literal[value=2]")})}},{concept:"boolean_and",name:"Boolean And",description:"Using boolean and/&&.",automatic:true,tagger:'LogicalExpression[operator="&&"]'},{concept:"boolean_equality",name:"Boolean Equality",description:"Using == and !=.",automatic:true,tagger:'BinaryExpression[operator="=="]'},{concept:"boolean_greater_less",name:"Boolean Greater/Less",description:"Using >, >=, <, and <=.",automatic:"Maybe, use in for loops confuses the issue",tagger:'BinaryExpression[operator=">"],BinaryExpression[operator="<"],BinaryExpression[operator=">="],BinaryExpression[operator="<="]'},{concept:"boolean_logic_shortcircuit",name:"Boolean Logic Shortcircuiting",description:"Writing longer if-conditionals with potential failing operations in the conditional. (if a && b.c > 0)",automatic:false},{concept:"boolean_not",name:"Boolean Not",description:"Using boolean not/!.",automatic:"Unsure, depends on if we teach !blah for null checks",tagger:'UnaryyExpression[operator="!"]'},{concept:"boolean_operator_precedence",name:"Boolean Operator Precedence",description:"Chaining booleans together (if (a || b) && c)",automatic:false},{concept:"boolean_or",name:"Boolean Or",description:"Using boolean or/||.",automatic:true,tagger:'LogicalExpression[operator="||"]'},{concept:"bootstrap",name:"Bootstrap",description:"Webpage structure involves Bootstrap in some way.",automatic:true},{concept:"break_statements",name:"Break Statements",description:"Using the break statement.",automatic:true,tagger:"BreakStatement"},{concept:"classes",name:"Classes",description:"Defining a class.",automatic:true},{concept:"continue_statements",name:"Continue Statements",description:"Using the continue statement.",automatic:true,tagger:"ContinueStatement"},{concept:"dom_events",name:"DOM Events",description:"Hooking into DOM events in the browser.",automatic:true},{concept:"dynamic_styling",name:"Dynamic Styling",description:"Styling the page with JavaScript.",automatic:true},{concept:"event_concurrency",name:"Event Concurrency",description:"Running two threads at the same time (hero & pet)",automatic:false},{concept:"event_data",name:"Event Data",description:"Accessing an event handler's parameter's properties.",automatic:false},{concept:"event_handlers",name:"Event Handlers",description:"Using on() to monitor for certain events.",automatic:true},{concept:"for_loops",name:"For Loops",description:"Using a for-loop.",automatic:true,tagger:"ForStatement"},{concept:"for_loops_nested",name:"Nested For Loops",description:"Using a for-loop inside another for-loop.",automatic:true,tagger:"ForStatement ForStatement"},{concept:"for_loops_range",name:"For Loops Range",description:"If the level focuses on ranges outside of 0 to arr.length.",automatic:false},{concept:"functions",name:"Functions",description:"Defining functions.",automatic:true,tagger:"Function"},{concept:"game_ai",name:"Game AI",description:"Scripting AI for units inside Game Dev.",automatic:true},{concept:"game_goals",name:"Game Goals",description:"Setting up goals inside Game Dev.",automatic:true},{concept:"game_spawn",name:"Game Spawn",description:"Spawning units inside Game Dev.",automatic:true},{concept:"graphics",name:"Graphics",description:"Drawing methods (flowers, canvas)",automatic:"Maybe, by detectecting the flower ring is required"},{concept:"graphs",name:"Graphs",description:"Implementations of the graph data structure.",automatic:false},{concept:"heaps",name:"Heaps",description:"Implementations of the heap data structure.",automatic:false},{concept:"if_else_statements",name:"If/Else Statements",description:"Using elif/else if statements.",automatic:true,tagger:"if.alternate>*"},{concept:"if_statements",name:"If Statements",description:"Using if statements.",automatic:true,tagger:"if"},{concept:"if_statements_nested",name:"Nested If Statemnts",description:"Using if statements inside other if statements.",automatic:true,tagger:"if if"},{concept:"indexing",name:"Array Indexes",description:"Accessing specific elements using indexes.",automatic:true,tagger:"MemberExpression[computed=true]"},{concept:"input_handling_flags",name:"Input Handling - Flags",description:"Handling input in the form of flags.",automatic:true},{concept:"input_handling_keyboard",name:"Input Handling - Keyboard",description:"Handling input in the form of keyboards.",automatic:true},{concept:"input_handling_mouse",name:"Input Handling - Mouse",description:"Handling input in the form of the mouse.",automatic:true},{concept:"intermediate_css_rules",name:"Intermediate CSS Rules",description:"CSS Rules introduced in WD2.",automatic:true},{concept:"intermediate_css_selectors",name:"Intermediate CSS Selectors",description:"CSS Selectors introduced in WD2.",automatic:true},{concept:"intermediate_html_attributes",name:"Intermediate HTML Attributes",description:"HTML Attributes introduced in WD2.",automatic:true},{concept:"intermediate_html_tags",name:"Intermediate HTML Tags",description:"HTML Tags introduced in WD2.",automatic:true},{concept:"jquery",name:"jQuery",description:"The level contains $().",automatic:true},{concept:"jquery_animations",name:"jQuery Animations",description:"The level uses $().animate().",automatic:true},{concept:"jquery_filtering",name:"jQuery Element Filtering",description:"The level filters down groups of elements using jQuery methods.",automatic:true},{concept:"jquery_selectors",name:"jQuery Selectors",description:"The level uses jQuery selectors.",automatic:true},{concept:"length",name:"Array Length",description:"If the length of an array or string is checked.",automatic:true,tagger:'MemberExpression.property>Identifier[name="length"]'},{concept:"math_geometry",name:"Geometry",description:"Finding the perimeter, or area of things.",automatic:false},{concept:"math_operations",name:"Math Library Operations",description:"Using Math library operations like Math.sqrt, Math.pow",automatic:true,tagger:"CallExpression>MemberExpression:matches(.object>Identifier[name=Math]).property:matches(>Identifier[name=sqrt],>Identifier[name=pow],>Identifier[name=abs])"},{concept:"math_trigonometry",name:"Trigonometry",description:"Using Math.sin/Math.cos/Math.tan",automatic:true,tagger:"CallExpression>MemberExpression:matches(.object>Identifier[name=Math]).property:matches(>Identifier[name=sin],>Identifier[name=cos],>Identifier[name=tan])"},{concept:"object_literals",name:"Object Literals",description:"Creating Object Literals (Python Dictionaries)",automatic:true,tagger:"ObjectExpression"},{concept:"parameters",name:"Parameters",description:"Functions in this level have parameters.",automatic:"??",tagger:"Function.params>*"},{concept:"property_access",name:"Accessing Properties",description:"An object's properties are accessed (pos, gold)",automatic:true,tagger:":not(CallExpression,AssignmentExpression)>MemberExpression"},{concept:"property_assignment",name:"Assigning Properties",description:"Assigning to an object's properties. (obj.pos.x = 10)",automatic:true,tagger:"AssignmentExpression.left>MemberExpression"},{concept:"queues",name:"Data Structures - Queues",description:"This level focuses on Queue-style data structures.",automatic:false},{concept:"reading_docs",name:"Reading the Docs",description:"This level focuses on reading the documentation.",automatic:false},{concept:"recursion",name:"Recursion",description:"This level teaches about recursion, (calling a function inside itself)",automatic:true},{concept:"return_statements",name:"Return Statements",description:"Using the return statement.",automatic:true,tagger:"ReturnStatement"},{concept:"stacks",name:"Data Structures - Stacks",description:"Implementations of the stack data structure.",automatic:false},{concept:"strings",name:"Strings",description:"Using string literals.",automatic:"Yes, assuming this means string literals.",tagger:function(e){return _.some(e.find("Literal"),function(e){return typeof e.value==="string"})}},{concept:"strings_concatenation",name:"String Concatenation",description:"Using the string concatenation operator +.",automatic:false},{concept:"strings_substrings",name:"Substring",description:"Using substr or substring.",automatic:true,tagger:'CallExpression>MemberExpression>Identifier[name="substr"],CallExpression>MemberExpression>Identifier[name="substring"]'},{concept:"trees",name:"Data Structures - Trees",description:"Implementations of the tree data structure.",automatic:false},{concept:"variables",name:"Variables",description:"Storing data in variables.",automatic:true,tagger:"VariableDeclaration"},{concept:"vectors",name:"Vectors",description:"Using Vectors, like new Vector() or common Vector methods like rotate, magnitude, dot, heading, normalize, and limit",automatic:true,tagger:"Identifier[name=Vector]"},{concept:"while_condition_loops",name:"While Loops with Conditionals",description:"While loops with a breaking conditional.",automatic:true,tagger:"WhileStatement.test>*:not(Literal)"},{concept:"while_loops_simple",name:"While Loops",description:"Simple while-true loops.",automatic:true,tagger:"WhileStatement.test>Literal"},{concept:"while_loops_nested",name:"Nested While Loops",description:"While loops inside other while loops.",automatic:true,tagger:"WhileStatement.body WhileStatement"},{concept:"xy_coordinates",name:"Cartesian Coordinates",description:"This level uses XY coordinates to navigate: any time we use a method .*XY or use variables or properties named x or y",automatic:true,tagger:function(e){if(!(e.find('MemberExpression.object>Identifier[name="y"]').length>0)){return false}if(!(e.find('MemberExpression.object>Identifier[name="x"]').length>0)){return false}return true}},{concept:"place_game_objects",name:"Place game objects",automatic:false},{concept:"construct_mazes",name:"Construct mazes",automatic:false},{concept:"create_playable_game",name:"Create a playable, sharable game project",automatic:false},{concept:"basic_html",name:"Basic HTML",automatic:false},{concept:"basic_css",name:"Basic CSS",automatic:false},{concept:"alter_existing_web_pages",name:"Alter existing web pages",automatic:false},{concept:"create_sharable_web_page",name:"Create a sharable web page",automatic:false},{concept:"basic_input_handling",name:"Basic Input Handling",automatic:false},{concept:"basic_game_ai",name:"Basic Game AI",automatic:false},{concept:"create_playable_game",name:"Create a playable, sharable game project",automatic:false},{concept:"advanced_html",name:"Advanced HTML",automatic:false},{concept:"basic_javascript",name:"Basic JavaScript",automatic:false},{concept:"basic_event_handling",name:"Basic Event Handling",automatic:false},{concept:"create_sharable_interactive_web_page",name:"Create a sharable interactive web page",automatic:false}]
t.exports=r})
require.register("schemas/definitions/bus",function(e,require,t){t.exports={bus:{title:"Bus",id:"bus",$schema:"http://json-schema.org/draft-04/schema#",description:"Bus",type:"object",properties:{joined:{type:["boolean","null"]},players:{type:"object"}},required:["joined","players"],additionalProperties:true}}})
require.register("schemas/definitions/misc",function(e,require,t){t.exports={jQueryEvent:{title:"jQuery Event",id:"jQueryEvent",$schema:"http://json-schema.org/draft-04/schema#",description:"A standard jQuery Event",type:"object",properties:{altKey:{type:"boolean"}},required:[],additionalProperties:true}}})
require.register("schemas/events/campaign_changed_code_language",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"campaign_changed_code_language",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},levelSlug:{type:"string",maxLength:128},codeLanguage:{type:"string"}},required:["user"],additionalProperties:false}})
require.register("schemas/events/change_hero",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"change_hero",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user"],additionalProperties:false}})
require.register("schemas/events/choose_inventory",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"choose_inventory",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user"],additionalProperties:false}})
require.register("schemas/events/classes_guides_loaded",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"classes_guides_loaded",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user"],additionalProperties:false}})
require.register("schemas/events/classes_guides_play_level",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"classes_guides_play_level",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},courseID:{type:"string"},language:{type:"string",description:"Programming language."},levelSlug:{type:"string",maxLength:128}},required:["user","courseID","language","levelSlug"],additionalProperties:false}})
require.register("schemas/events/classes_licenses_contact_us",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"classes_licenses_contact_us",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user"],additionalProperties:false}})
require.register("schemas/events/classes_licenses_loaded",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"classes_licenses_loaded",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user"],additionalProperties:false}})
require.register("schemas/events/classroom_invite_via_email",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"classroom_invite_via_email",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},classroomID:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},emails:{type:"array",items:{type:"string",format:"email"}}},required:["user","classroomID"],additionalProperties:false}})
require.register("schemas/events/clicked_start_level",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"clicked_start_level",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},levelID:{type:"string",maxLength:128}},required:["user","levelID"],additionalProperties:false}})
require.register("schemas/events/confirmed_restart",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"confirmed_restart",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},label:{type:"string"},level:{type:"string"}},required:["user","label","level"],additionalProperties:false}})
require.register("schemas/events/facebook_login",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"facebook_login",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},label:{type:"string"}},required:["user"],additionalProperties:false}})
require.register("schemas/events/finish_help_video",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"finish_help_video",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},ls:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},level:{type:"string"},style:{type:"string"}},required:["user","ls","level"],additionalProperties:false}})
require.register("schemas/events/finished_signup",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"finished_signup",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},label:{type:"string"}},required:["user"],additionalProperties:false}})
require.register("schemas/events/finished_subscription_purchase",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"finished_subscription_purchase",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},value:{type:"number",description:"in cents."}},required:["user","value"],additionalProperties:false}})
require.register("schemas/events/google_login",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"google_login",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},label:{type:"string"}},required:["user"],additionalProperties:false}})
require.register("schemas/events/heard_sprite",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"heard_sprite",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},ls:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},message:{type:"string"}},required:["user","ls"],additionalProperties:false}})
require.register("schemas/events/hint_used",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"hint_used",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},hintCurrent:{type:"integer"},hintCount:{type:"integer"},levelSlug:{type:"string",maxLength:128}},required:["user","levelSlug"],additionalProperties:false}})
require.register("schemas/events/hints_clicked",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"hints_clicked",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},levelSlug:{type:"string",maxLength:128},hintCurrent:{type:"integer"},hintCount:{type:"integer"}},required:["user","levelSlug"],additionalProperties:false}})
require.register("schemas/events/hints_next_clicked",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"hints_next_clicked",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},hintCurrent:{type:"integer"},hintCount:{type:"integer"},levelSlug:{type:"string",maxLength:128},levelID:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user","levelSlug"],additionalProperties:false}})
require.register("schemas/events/hints_previous_clicked",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"hints_previous_clicked",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},hintCurrent:{type:"integer"},hintCount:{type:"integer"},levelSlug:{type:"string",maxLength:128},levelID:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user","levelSlug"],additionalProperties:false}})
require.register("schemas/events/homepage_campaign_continue_playing_cta",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"homepage_campaign_continue_playing_cta",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user"],additionalProperties:false}})
require.register("schemas/events/homepage_classroom_continue_playing_cta",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"homepage_classroom_continue_playing_cta",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user"],additionalProperties:false}})
require.register("schemas/events/homepage_click_learn_more",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"homepage_click_learn_more",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user"],additionalProperties:false}})
require.register("schemas/events/homepage_click_student_button_cta",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"homepage_click_student_button_cta",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user"],additionalProperties:false}})
require.register("schemas/events/homepage_play_now_cta",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"homepage_play_now_cta",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user"],additionalProperties:false}})
require.register("schemas/events/hour_of_code_finish",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"hour_of_code_finish",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user"],additionalProperties:false}})
require.register("schemas/events/identify",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"identify",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},id:{type:"string"},traits:{type:"object",properties:{host:{type:"string"},ageRange:{type:"string",pattern:"^\\d+-\\d+"},lastLevel:{type:"string"},testGroupNumber:{type:"integer"},name:{type:"string"},dateCreated:{type:"string",format:"date-time"},email:{type:"string",format:"email"},anonymous:{type:"boolean"},role:{type:"string"},referrer:{type:"string",format:"url"},hourOfCode:{type:"boolean"},announcesActionAudioGroup:{type:"string"},defaultLanguageGroup:{type:"string"},gender:{enum:["male","female","secret","other","trans"]},yearSubscriptionGroup:{type:"string"},teacher:{type:"boolean"},schoolName:{type:"string"},priority:{type:"string"}},additionalProperties:false}},required:["user"],additionalProperties:false}})
require.register("schemas/events/inventory_play",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"inventory_play",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},level:{type:"string"}},required:["user","level"],additionalProperties:false}})
require.register("schemas/events/joined_classroom",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"joined_classroom",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},classroomName:{type:"string"},classroomID:{type:"string"},classCode:{type:"string"},ownerID:{type:"string"}},required:["user","classroomID","ownerID"],additionalProperties:false}})
require.register("schemas/events/levelloaderror",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"levelloaderror",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},unloaded:{type:"array"}},required:["user","unloaded"],additionalProperties:false}})
require.register("schemas/events/loaded_world_map",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"loaded_world_map",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},label:{type:"string",description:"The map that was loaded i.e. forest"}},required:["user","label"],additionalProperties:false}})
require.register("schemas/events/log_out",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"log_out",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user"],additionalProperties:false}})
require.register("schemas/events/login",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"login",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user"],additionalProperties:false}})
require.register("schemas/events/mine_explored",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"mine_explored",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},engage_action:{type:"string",enum:["campaign_level_click","buy_button_click","notify_check_box_checked","submit_button_click"]}},required:["user","engage_action"],additionalProperties:false}})
require.register("schemas/events/pageview",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"pageview",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},href:{type:"string"},url:{type:"string"}},required:["user"],additionalProperties:false}})
require.register("schemas/events/play_gamedev_level_load",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"play_gamedev_level_load",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},courseID:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},levelSlug:{type:"string",maxLength:128},sessionID:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},levelID:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user","levelSlug","levelID"],additionalProperties:false}})
require.register("schemas/events/play_level_back_to_levels",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"play_level_back_to_levels",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},levelSlug:{type:"string",maxLength:128}},required:["user"],additionalProperties:false}})
require.register("schemas/events/play_level_victory_modal_done",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"play_level_victory_modal_done",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},levelSlug:{type:"string",maxLength:128}},required:["user","levelSlug"],additionalProperties:false}})
require.register("schemas/events/play_level_victory_modal_loaded",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"play_level_victory_modal_loaded",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},levelSlug:{type:"string",maxLength:128}},required:["user","levelSlug"],additionalProperties:false}})
require.register("schemas/events/play_level_victory_modal_next_level",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"play_level_victory_modal_next_level",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},levelSlug:{type:"string",maxLength:128},nextLevelSlug:{type:"string"}},required:["user","levelSlug"],additionalProperties:false}})
require.register("schemas/events/play_now",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"play_now",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user"],additionalProperties:false}})
require.register("schemas/events/purchase_starter_license_modal_opened",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"purchase_starter_license_modal_opened",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user"],additionalProperties:false}})
require.register("schemas/events/purchase_starter_license_pay_now_clicked",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"purchase_starter_license_pay_now_clicked",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user"],additionalProperties:false}})
require.register("schemas/events/required_item_locked",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"required_item_locked",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},levelUnlocked:{type:"boolean"},playerLevel:{type:"integer"},item:{type:"string"},label:{type:"string"},level:{type:"string"}},required:["user","level","item"],additionalProperties:false}})
require.register("schemas/events/restricted_to_students_loaded",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"restricted_to_students_loaded",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user"],additionalProperties:false}})
require.register("schemas/events/restricted_to_teachers_loaded",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"restricted_to_teachers_loaded",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user"],additionalProperties:false}})
require.register("schemas/events/saw_initial_infinite_loop",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"saw_initial_infinite_loop",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},level:{type:"string"},label:{type:"string"}},required:["user"],additionalProperties:false}})
require.register("schemas/events/saw_victory",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"saw_victory",format:"jsonschema",version:"1-0-1"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},ls:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},levelID:{type:"string",maxLength:128},level:{type:"string"},playtime:{type:"integer",minimum:0,maximum:172800}},required:["user","levelID","ls","level"],additionalProperties:false}})
require.register("schemas/events/script_ended",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"script_ended",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},label:{type:"string"},ls:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},levelID:{type:"string",maxLength:128}},required:["user","ls","levelID"],additionalProperties:false}})
require.register("schemas/events/script_started",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"script_started",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},label:{type:"string"},ls:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},levelID:{type:"string",maxLength:128}},required:["user","ls","levelID"],additionalProperties:false}})
require.register("schemas/events/show_announcement_modal",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"show_announcement_modal",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},label:{type:"string"}},required:["user","label"],additionalProperties:false}})
require.register("schemas/events/show_problem_alert",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"show_problem_alert",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},levelID:{type:"string",maxLength:128},ls:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user","levelID","ls"],additionalProperties:false}})
require.register("schemas/events/show_subscription_modal",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"show_subscription_modal",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},label:{type:"string"},level:{type:"string"},levelID:{type:"string",description:"Actually the level slug."}},required:["user","label"],additionalProperties:false}})
require.register("schemas/events/simulate_button_click",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"simulate_button_click",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user"],additionalProperties:false}})
require.register("schemas/events/start_help_video",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"start_help_video",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},ls:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},level:{type:"string"},style:{type:"string"}},required:["user","ls","level"],additionalProperties:false}})
require.register("schemas/events/started_1_year_subscription_purchase",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"started_1_year_subscription_purchase",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user"],additionalProperties:false}})
require.register("schemas/events/started_gem_purchase",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"started_gem_purchase",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},productID:{type:"string"}},required:["user"],additionalProperties:false}})
require.register("schemas/events/started_level",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"started_level",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},ls:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},levelID:{type:"string",maxLength:128}},required:["user","levelID","ls"],additionalProperties:false}})
require.register("schemas/events/started_signup",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"started_signup",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},label:{type:"string"},level:{type:"string"}},required:["user"],additionalProperties:false}})
require.register("schemas/events/started_subscription_purchase",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"started_subscription_purchase",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user"],additionalProperties:false}})
require.register("schemas/events/starter_license_upsell_banner_viewed",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"starter_license_upsell_banner_viewed",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user"],additionalProperties:false}})
require.register("schemas/events/starter_license_upsell_view_opened",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"starter_license_upsell_view_opened",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user"],additionalProperties:false}})
require.register("schemas/events/students_change_hero_started",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"students_change_hero_started",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user"],additionalProperties:false}})
require.register("schemas/events/students_class_course_loaded",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"students_class_course_loaded",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user"],additionalProperties:false}})
require.register("schemas/events/students_class_course_play_level",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"students_class_course_play_level",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},courseInstanceID:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},courseID:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},levelSlug:{type:"string"}},required:["user","levelSlug"],additionalProperties:false}})
require.register("schemas/events/students_continue_course",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"students_continue_course",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},levelSlug:{type:"string",description:"."}},required:["user","levelSlug"],additionalProperties:false}})
require.register("schemas/events/students_join_class_link",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"students_join_class_link",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},classCode:{type:"string"}},required:["user","classCode"],additionalProperties:false}})
require.register("schemas/events/students_join_class_with_code",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"students_join_class_with_code",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},classCode:{type:"string"}},required:["user","classCode"],additionalProperties:false}})
require.register("schemas/events/students_signup_started",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"students_signup_started",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user"],additionalProperties:false}})
require.register("schemas/events/students_view_levels",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"students_view_levels",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},courseInstanceID:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},courseID:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user"],additionalProperties:false}})
require.register("schemas/events/subscription_ask_parent_button_click",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"subscription_ask_parent_button_click",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user"],additionalProperties:false}})
require.register("schemas/events/subscription_parent_hover",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"subscription_parent_hover",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user"],additionalProperties:false}})
require.register("schemas/events/subscription_payment_methods_hover",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"subscription_payment_methods_hover",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user"],additionalProperties:false}})
require.register("schemas/events/teacher_contact",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"teacher_contact",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},licensesNeeded:{type:"number"}},required:["user"],additionalProperties:false}})
require.register("schemas/events/teachers_class_copy_class_code",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"teachers_class_copy_class_code",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},classroomID:{type:"string",pattern:"^[a-z0-9]{24}$"},classCode:{type:"string"}},required:["user","classCode","classroomID"],additionalProperties:false}})
require.register("schemas/events/teachers_class_copy_class_url",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"teachers_class_copy_class_url",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},classroomID:{type:"string",pattern:"^[a-z0-9]{24}$"},url:{type:"string",format:"url"}},required:["user","classroomID","url"],additionalProperties:false}})
require.register("schemas/events/teachers_class_edit_class_started",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"teachers_class_edit_class_started",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},classroomID:{type:"string",pattern:"^[a-z0-9]{24}$"}},required:["user","classroomID"],additionalProperties:false}})
require.register("schemas/events/teachers_class_export_csv",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"teachers_class_export_csv",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},classroomID:{type:"string",pattern:"^[a-z0-9]{24}$"}},required:["user"],additionalProperties:false}})
require.register("schemas/events/teachers_class_loaded",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"teachers_class_loaded",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},classroomID:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user"],additionalProperties:false}})
require.register("schemas/events/teachers_class_students_assign_selected",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"teachers_class_students_assign_selected",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},userID:{type:"string",pattern:"^[a-z0-9]{24}$",description:"User that was removed."},courseID:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},classroomID:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user","courseID","classroomID"],additionalProperties:false}})
require.register("schemas/events/teachers_class_students_edit",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"teachers_class_students_edit",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},classroomID:{type:"string",pattern:"^[a-z0-9]{24}$"}},required:["user","classroomID"],additionalProperties:false}})
require.register("schemas/events/teachers_classes_archived_class",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"teachers_classes_archived_class",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user"],additionalProperties:false}})
require.register("schemas/events/teachers_classes_create_new_class_finished",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"teachers_classes_create_new_class_finished",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user"],additionalProperties:false}})
require.register("schemas/events/teachers_classes_create_new_class_started",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"teachers_classes_create_new_class_started",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user"],additionalProperties:false}})
require.register("schemas/events/teachers_classes_loaded",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"teachers_classes_loaded",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user"],additionalProperties:false}})
require.register("schemas/events/teachers_classes_unarchived_class",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"teachers_classes_unarchived_class",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user"],additionalProperties:false}})
require.register("schemas/events/teachers_convert_account_form_started",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"teachers_convert_account_form_started",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user"],additionalProperties:false}})
require.register("schemas/events/teachers_convert_account_loaded",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"teachers_convert_account_loaded",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user"],additionalProperties:false}})
require.register("schemas/events/teachers_convert_account_submitted",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"teachers_convert_account_submitted",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user"],additionalProperties:false}})
require.register("schemas/events/teachers_create_account_form_started",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"teachers_create_account_form_started",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user"],additionalProperties:false}})
require.register("schemas/events/teachers_create_account_loaded",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"teachers_create_account_loaded",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user"],additionalProperties:false}})
require.register("schemas/events/teachers_create_account_submitted",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"teachers_create_account_submitted",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user"],additionalProperties:false}})
require.register("schemas/events/teachers_request_demo_create_account",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"teachers_request_demo_create_account",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user"],additionalProperties:false}})
require.register("schemas/events/teachers_request_demo_create_account_google",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"teachers_request_demo_create_account_google",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user"],additionalProperties:false}})
require.register("schemas/events/teachers_request_demo_form_started",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"teachers_request_demo_form_started",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user"],additionalProperties:false}})
require.register("schemas/events/teachers_request_demo_form_submitted",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"teachers_request_demo_form_submitted",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user"],additionalProperties:false}})
require.register("schemas/events/teachers_request_demo_loaded",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"teachers_request_demo_loaded",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user"],additionalProperties:false}})
require.register("schemas/events/unsubscribe_end",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"unsubscribe_end",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},message:{type:"string"}},required:["user"],additionalProperties:false}})
require.register("schemas/events/unsubscribe_start",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"unsubscribe_start",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user"],additionalProperties:false}})
require.register("schemas/events/update_teacher",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"update_teacher",format:"jsonschema",version:"1-0-0"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24}},required:["user"],additionalProperties:false}})
require.register("schemas/events/view_load",function(e,require,t){t.exports={$schema:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",self:{vendor:"com.codecombat",name:"view_load",format:"jsonschema",version:"1-0-2"},type:"object",properties:{user:{type:"string",pattern:"^[a-z0-9]{24}$",maxLength:24,minLength:24},totalEncodedBodySize:{type:"number"},totalTransferSize:{type:"number"},cachedResources:{type:"number"},totalResources:{type:"number"},totalTime:{type:"number"},networkTime:{type:"number"},viewId:{type:"string"},firstLoad:{type:"boolean"},tag:{type:"string",maxLength:64}},required:["user"],additionalProperties:false}})
require.register("schemas/i18n_schema",function(e,require,t){var r,i,n
i=require("./schemas")
n=i.generateLanguageCodeArrayRegex()
r={title:"Example Schema",description:"An example schema",type:"object",properties:{text:{title:"Text",description:"A short message to display in the dialogue area. Markdown okay.",type:"string",maxLength:400},i18n:{$ref:"#/definitions/i18n"}},definitions:{i18n:{title:"i18n",description:"The internationalization object",type:"object",patternProperties:{languageCodeArrayRegex:{additionalProperties:false,properties:{properties:{$ref:"#/properties"}},default:{title:"LanguageCode",description:"LanguageDescription"}}}}}}})
require.register("schemas/languages",function(e,require,t){var r,i,n,o,s,a,l,c,u
c=require("../locale/locale")
l=[]
for(r in c){u=c[r]
l.push({code:r,nativeDescription:u.nativeDescription,englishDescription:u.englishDescription})}t.exports.languages=l
t.exports.languageCodes=s=function(){var e,t,r
r=[]
for(e=0,t=l.length;e<t;e++){i=l[e]
r.push(i.code)}return r}()
t.exports.languageCodesLower=a=function(){var e,t,i
i=[]
for(e=0,t=s.length;e<t;e++){r=s[e]
i.push(r.toLowerCase())}return i}()
n={en:"en-US","zh-cn":"zh-HANS","zh-hans-cn":"zh-HANS","zh-sg":"zh-HANS","zh-hans-sg":"zh-HANS","zh-tw":"zh-HANT","zh-hant-tw":"zh-HANT","zh-hk":"zh-HANT","zh-hant-hk":"zh-HANT","zh-mo":"zh-HANT","zh-hant-mo":"zh-HANT"}
t.exports.languageCodeFromAcceptedLanguages=o=function(e){var t,i,o,l,c
c=e!=null?e:[]
for(i=0,l=c.length;i<l;i++){o=c[i]
r=n[o.toLowerCase()]
if(r){return r}t=_.indexOf(a,o)
if(t!==-1){return s[t]}}return"en-US"}})
require.register("schemas/metaschema",function(e,require,t){t.exports={id:"metaschema",displayProperty:"title",$schema:"http://json-schema.org/draft-04/schema#",title:"Schema",description:"Core schema meta-schema",definitions:{schemaArray:{type:"array",minItems:1,items:{$ref:"#"},title:"Array of Schemas",default:[{}]},positiveInteger:{type:"integer",minimum:0,title:"Positive Integer"},positiveIntegerDefault0:{allOf:[{$ref:"#/definitions/positiveInteger"},{default:0}]},simpleTypes:{title:"Single Type",enum:["array","boolean","integer","null","number","object","string"]},stringArray:{type:"array",items:{type:"string"},minItems:1,uniqueItems:true,title:"String Array",default:[""]}},type:"object",properties:{id:{type:"string",format:"uri"},$schema:{type:"string",format:"uri",default:"http://json-schema.org/draft-04/schema#"},title:{type:"string"},description:{type:"string"},default:{},multipleOf:{type:"number",minimum:0,exclusiveMinimum:true},maximum:{type:"number"},exclusiveMaximum:{type:"boolean",default:false},minimum:{type:"number"},exclusiveMinimum:{type:"boolean",default:false},maxLength:{$ref:"#/definitions/positiveInteger"},minLength:{$ref:"#/definitions/positiveIntegerDefault0"},pattern:{type:"string",format:"regex"},additionalItems:{anyOf:[{type:"boolean",default:false},{$ref:"#"}]},items:{anyOf:[{$ref:"#"},{$ref:"#/definitions/schemaArray"}],default:{}},maxItems:{$ref:"#/definitions/positiveInteger"},minItems:{$ref:"#/definitions/positiveIntegerDefault0"},uniqueItems:{type:"boolean",default:false},maxProperties:{$ref:"#/definitions/positiveInteger"},minProperties:{$ref:"#/definitions/positiveIntegerDefault0"},required:{$ref:"#/definitions/stringArray"},additionalProperties:{anyOf:[{type:"boolean",default:true},{$ref:"#"}],default:{}},definitions:{type:"object",additionalProperties:{$ref:"#"},default:{}},properties:{type:"object",additionalProperties:{$ref:"#"},default:{}},patternProperties:{type:"object",additionalProperties:{$ref:"#"},default:{}},dependencies:{type:"object",additionalProperties:{anyOf:[{$ref:"#"},{$ref:"#/definitions/stringArray"}]}},enum:{type:"array",minItems:1,uniqueItems:true,default:[""]},type:{anyOf:[{$ref:"#/definitions/simpleTypes"},{type:"array",items:{$ref:"#/definitions/simpleTypes"},minItems:1,uniqueItems:true,title:"Array of Types",default:["string"]}]},allOf:{$ref:"#/definitions/schemaArray"},anyOf:{$ref:"#/definitions/schemaArray"},oneOf:{$ref:"#/definitions/schemaArray"},not:{$ref:"#"}},dependencies:{exclusiveMaximum:["maximum"],exclusiveMinimum:["minimum"]},default:{}}})
require.register("schemas/models/achievement",function(e,require,t){var r,i,n,o
o=require("./../schemas")
n={title:"Query Operator",type:"object",properties:{$gt:{type:"number"},$gte:{type:"number"},$in:{type:"array"},$lt:{type:"number"},$lte:{type:"number"},$ne:{type:["number","string"]},$nin:{type:"array"},$exists:{type:"boolean"}},additionalProperties:false}
i={title:"Query",type:"object",patternProperties:{"^[-a-zA-Z0-9._]*$":{anyOf:[{$ref:"#/definitions/mongoQueryOperator"},{type:"string"},{type:"object"},{type:"boolean"}]}},properties:{},additionalProperties:false,definitions:{}}
r=o.object()
o.extendNamedProperties(r)
o.extendBasicProperties(r,"achievement")
o.extendSearchableProperties(r)
r["default"]={worth:10,description:"Probably the coolest you'll ever get.",difficulty:1,recalculable:true,function:{}}
_.extend(r.properties,{query:{$ref:"#/definitions/mongoFindQuery"},worth:o.float(),collection:{type:"string"},description:o.shortString(),userField:o.shortString(),related:o.objectId({description:"Related entity"}),icon:{type:"string",format:"image-file",title:"Icon",description:"Image should be a 100x100 transparent png."},category:{enum:["level","ladder","contributor"],description:"For categorizing and display purposes"},difficulty:o.int({description:"The higher the more difficult"}),proportionalTo:{type:"string",description:"For repeatables only. Denotes the field a repeatable achievement needs for its calculations"},recalculable:{type:"boolean",description:"Deprecated: all achievements must be recalculable now. Used to need to be set to true before it is eligible for recalculation."},function:{type:"object",description:"Function that gives total experience for X amount achieved",properties:{kind:{enum:["linear","logarithmic","quadratic","pow"]},parameters:{type:"object",default:{a:1,b:0,c:0},properties:{a:{type:"number"},b:{type:"number"},c:{type:"number"}},additionalProperties:true}},default:{kind:"linear",parameters:{}},required:["kind","parameters"],additionalProperties:false},i18n:{type:"object",format:"i18n",props:["name","description"],description:"Help translate this achievement"},rewards:o.RewardSchema("awarded by this achievement"),hidden:{type:"boolean",description:"Hide achievement from user if true"},updated:o.stringDate({description:"When the achievement was changed in such a way that earned achievements should get updated."})})
_.extend(r,{additionalProperties:false})
r.definitions={}
r.definitions["mongoQueryOperator"]=n
r.definitions["mongoFindQuery"]=i
o.extendTranslationCoverageProperties(r)
o.extendPatchableProperties(r)
t.exports=r})
require.register("schemas/models/analytics_log_event",function(e,require,t){var r,i
i=require("./../schemas")
r=i.object({title:"Analytics Log Event",description:"Analytics event logs."})
_.extend(r.properties,{u:i.objectId({links:[{rel:"extra",href:"/db/user/{($)}"}]}),e:{type:"integer"},p:{type:"object"},user:i.objectId({links:[{rel:"extra",href:"/db/user/{($)}"}]}),event:{type:"string"},properties:{type:"object"}})
i.extendBasicProperties(r,"analytics.log.event")
t.exports=r})
require.register("schemas/models/analytics_perday",function(e,require,t){var r,i
i=require("./../schemas")
r=i.object({title:"Analytics per-day data",description:"Analytics data aggregated into per-day chunks."})
_.extend(r.properties,{d:{type:"string"},e:{type:"integer"},l:{type:"integer"},f:{type:"integer"},fv:{type:"integer"},c:{type:"integer"}})
i.extendBasicProperties(r,"analytics.perday")
t.exports=r})
require.register("schemas/models/analytics_string",function(e,require,t){var r,i
i=require("./../schemas")
r=i.object({title:"Analytics String",description:"Maps strings to number IDs for improved performance."})
_.extend(r.properties,{v:{type:"string"}})
i.extendBasicProperties(r,"analytics.string")
t.exports=r})
require.register("schemas/models/analytics_stripe_invoice",function(e,require,t){var r,i
i=require("./../schemas")
r=i.object({title:"Analytics Stripe Invoice"})
_.extend(r.properties,{_id:{type:"string"},date:{type:"integer"},properties:{type:"object"}})
i.extendBasicProperties(r,"analytics.stripe.invoice")
t.exports=r})
require.register("schemas/models/analytics_users_active",function(e,require,t){var r,i
i=require("./../schemas")
r=i.object({title:"Analytics Users Active",description:"Active users data."})
_.extend(r.properties,{creator:i.objectId({links:[{rel:"extra",href:"/db/user/{($)}"}]}),created:i.date({title:"Created",readOnly:true}),event:{type:"string"}})
i.extendBasicProperties(r,"analytics.users.active")
t.exports=r})
require.register("schemas/models/api-client.schema",function(e,require,t){var r,i
i=require("./../schemas")
r={description:"Third parties who can make API calls, usually on behalf of a user.",type:"object",properties:{secret:{type:"string",description:"hashed version of a secret key that is required for API calls"}}}
i.extendBasicProperties(r,"Client")
i.extendNamedProperties(r)
t.exports=r})
require.register("schemas/models/article",function(e,require,t){var r,i
i=require("./../schemas")
r=i.object()
i.extendNamedProperties(r)
r.properties.body={type:"string",title:"Content",format:"markdown"}
r.properties.i18n={type:"object",title:"i18n",format:"i18n",props:["name","body"]}
i.extendBasicProperties(r,"article")
i.extendSearchableProperties(r)
i.extendVersionedProperties(r,"article")
i.extendTranslationCoverageProperties(r)
i.extendPatchableProperties(r)
t.exports=r})
require.register("schemas/models/branch.schema",function(e,require,t){var r,i
i=require("./../schemas")
r={type:"object",properties:{patches:{type:"array",items:{type:"object"}},updated:i.stringDate(),updatedBy:i.objectId(),updatedByName:{type:"string"}}}
i.extendBasicProperties(r,"branches")
i.extendNamedProperties(r)
t.exports=r})
require.register("schemas/models/campaign.schema",function(e,require,t){var r,i,n,o,s,a,l,c,u,p,d
n=require("./../schemas")
i=require("./level")
r=n.object({default:{type:"hero"}})
n.extendNamedProperties(r)
_.extend(r.properties,{i18n:{type:"object",title:"i18n",format:"i18n",props:["name","fullName","description"]},fullName:{type:"string",title:"Full Name",description:'Ex.: "Kithgard Dungeon"'},description:{type:"string",format:"string",description:"How long it takes and what players learn."},type:n.shortString({title:"Type",description:"What kind of campaign this is.",enum:["hero","course","hidden"]}),ambientSound:n.object({},{mp3:{type:"string",format:"sound-file"},ogg:{type:"string",format:"sound-file"}}),backgroundImage:n.array({},{type:"object",additionalProperties:false,properties:{image:{type:"string",format:"image-file"},width:{type:"number"}}}),backgroundColor:{type:"string"},backgroundColorTransparent:{type:"string"},adjacentCampaigns:{type:"object",format:"campaigns",additionalProperties:{title:"Campaign",type:"object",format:"campaign",properties:{id:{type:"string",format:"hidden"},name:{type:"string",format:"hidden"},description:{type:"string",format:"hidden"},i18n:{type:"object",format:"hidden"},slug:{type:"string",format:"hidden"},position:n.point2d(),rotation:{type:"number",format:"degrees"},color:{type:"string"},showIfUnlocked:{oneOf:[{type:"string",links:[{rel:"db",href:"/db/level/{($)}/version"}],format:"latest-version-original-reference"},{type:"array",items:{type:"string",links:[{rel:"db",href:"/db/level/{($)}/version"}],format:"latest-version-original-reference"}}]}}}},levelsUpdated:n.date(),levels:{type:"object",format:"levels",additionalProperties:{title:"Level",type:"object",format:"level",additionalProperties:false,properties:{rewards:{format:"rewards",type:"array",items:{type:"object",additionalProperties:false,properties:{achievement:{type:"string",links:[{rel:"db",href:"/db/achievement/{{$}}"}],format:"achievement"},item:{type:"string",links:[{rel:"db",href:"/db/thang.type/{($)}/version"}],format:"latest-version-original-reference"},hero:{type:"string",links:[{rel:"db",href:"/db/thang.type/{($)}/version"}],format:"latest-version-original-reference"},level:{type:"string",links:[{rel:"db",href:"/db/level/{($)}/version"}],format:"latest-version-original-reference"},type:{enum:["heroes","items","levels"]}}}},position:n.point2d()}}}})
r.denormalizedLevelProperties=["name","description","i18n","requiresSubscription","replayable","type","kind","slug","original","adventurer","practice","practiceThresholdMinutes","primerLanguage","shareable","adminOnly","disableSpaces","hidesSubmitUntilRun","hidesPlayButton","hidesRunShortcut","hidesHUD","hidesSay","hidesCodeToolbar","hidesRealTimePlayback","backspaceThrottle","lockDefaultCode","moveRightLoopSnippet","realTimeSpeedFactor","autocompleteFontSizePx","requiredGear","restrictedGear","requiredProperties","restrictedProperties","recommendedHealth","concepts","primaryConcepts","picoCTFProblem","campaign","campaignIndex","scoreTypes"]
o=["name","description","i18n","replayable","slug","original","primerLanguage","shareable","concepts","scoreTypes"]
d=r.denormalizedLevelProperties
for(a=0,c=d.length;a<c;a++){p=d[a]
r.properties.levels.additionalProperties.properties[p]=_.cloneDeep(i.properties[p])}for(l=0,u=o.length;l<u;l++){s=o[l]
r.properties.levels.additionalProperties.properties[s].format="hidden"}n.extendBasicProperties(r,"campaign")
n.extendTranslationCoverageProperties(r)
n.extendPatchableProperties(r)
t.exports=r})
require.register("schemas/models/cla_submission",function(e,require,t){var r,i
i=require("./../schemas")
r=i.object({title:"CLA Submission",description:"Recording when a user signed the CLA."})
_.extend(r.properties,{user:i.objectId({links:[{rel:"extra",href:"/db/user/{($)}"}]}),email:i.shortString({format:"email"}),name:{type:"string"},githubUsername:i.shortString(),created:i.date({title:"Created",readOnly:true})})
i.extendBasicProperties(r,"user.remark")
t.exports=r})
require.register("schemas/models/clan.schema",function(e,require,t){var r,i
i=require("./../schemas")
r=i.object({title:"Clan",required:["name","type"]})
i.extendNamedProperties(r)
_.extend(r.properties,{description:{type:"string"},members:i.array({title:"Members"},i.objectId()),ownerID:i.objectId(),type:{type:"string",enum:["public","private"],description:"Controls clan general visibility."},dashboardType:{type:"string",enum:["basic","premium"]}})
i.extendBasicProperties(r,"Clan")
t.exports=r})
require.register("schemas/models/classroom.schema",function(e,require,t){var r,i
i=require("./../schemas")
r=i.object({title:"Classroom",required:["name"]})
i.extendNamedProperties(r)
_.extend(r.properties,{name:{type:"string",minLength:1},members:i.array({title:"Members"},i.objectId()),deletedMembers:i.array({title:"Deleted Members"},i.objectId()),ownerID:i.objectId(),description:{type:"string"},code:i.shortString({title:"Unique code to redeem"}),codeCamel:i.shortString({title:"UpperCamelCase version of code for display purposes"}),aceConfig:{language:{type:"string",enum:["python","javascript"]}},averageStudentExp:{type:"string"},ageRangeMin:{type:"string"},ageRangeMax:{type:"string"},archived:{type:"boolean",default:false,description:'Visual only; determines if the classroom is in the "archived" list of the normal list.'},courses:i.array({title:"Courses"},i.object({title:"Course"},{_id:i.objectId(),levels:i.array({title:"Levels"},i.object({title:"Level"},{practice:{type:"boolean"},practiceThresholdMinutes:{type:"number"},primerLanguage:{type:"string",enum:["javascript","python"]},shareable:{title:"Shareable",type:["string","boolean"],enum:[false,true,"project"],description:"Whether the level is not shareable, shareable, or a sharing-encouraged project level."},type:i.shortString(),original:i.objectId(),name:{type:"string"},slug:{type:"string"}}))})),settings:i.object({title:"Classroom Settings",required:[]},{optionsEditable:{type:"boolean",description:"Allow teacher to use these settings.",default:false},map:{type:"boolean",description:"Classroom map.",default:false},backToMap:{type:"boolean",description:"Go back to the map after victory.",default:true},gems:{type:"boolean",description:"Allow students to earn gems.",default:false},xp:{type:"boolean",description:"Students collect XP and level up.",default:false}})})
i.extendBasicProperties(r,"Classroom")
r.properties.settings.additionalProperties=true
t.exports=r})
require.register("schemas/models/codelog.schema",function(e,require,t){var r,i,n
n=require("./../schemas")
i=n.object({required:["original","majorVersion"],links:[{rel:"db",href:"/db/level/{(original)}/version/{(majorVersion)}"}]},{original:n.objectId(),majorVersion:{type:"integer",minimum:0}})
r={type:"object",properties:{sessionID:n.objectId(),level:i,levelSlug:{type:"string"},userID:n.objectId(),log:{type:"string"},created:n.date()}}
t.exports=r})
require.register("schemas/models/course.schema",function(e,require,t){var r,i
i=require("./../schemas")
r=i.object({title:"Course",required:["name"]})
i.extendNamedProperties(r)
_.extend(r.properties,{i18n:{type:"object",title:"i18n",format:"i18n",props:["name","description"]},campaignID:i.objectId(),concepts:i.array({title:"Programming Concepts",uniqueItems:true},i.concept),description:{type:"string"},duration:{type:"number",description:"Approximate hours of content"},pricePerSeat:{type:"number",description:"Price per seat in USD cents."},free:{type:"boolean"},screenshot:i.path({title:"URL",description:"Link to course screenshot."}),adminOnly:{type:"boolean",description:"Deprecated in favor of releasePhase."},releasePhase:{enum:["beta","released"],description:"How far along the course's development is, determining who sees it."}})
i.extendBasicProperties(r,"Course")
i.extendTranslationCoverageProperties(r)
i.extendPatchableProperties(r)
t.exports=r})
require.register("schemas/models/course_instance.schema",function(e,require,t){var r,i
i=require("./../schemas")
r=i.object({title:"Course Instance"})
_.extend(r.properties,{courseID:i.objectId(),classroomID:i.objectId(),description:{type:"string"},members:i.array({title:"Members"},i.objectId()),name:{type:"string"},ownerID:i.objectId(),prepaidID:i.objectId(),aceConfig:{language:{type:"string",enum:["python","javascript"]}},hourOfCode:{type:"boolean",description:"Deprecated, do not use."}})
i.extendBasicProperties(r,"CourseInstance")
t.exports=r})
require.register("schemas/models/earned_achievement",function(e,require,t){var r,i
i=require("./../schemas")
t.exports=r={type:"object",default:{previouslyAchievedAmount:0},properties:{user:i.objectId({links:[{rel:"extra",href:"/db/user/{($)}"}]}),achievement:i.objectId({links:[{rel:"extra",href:"/db/achievement/{($)}"}]}),collection:{type:"string"},triggeredBy:i.objectId(),achievementName:{type:"string"},created:{type:["date","string","number"]},changed:{type:["date","string","number"]},achievedAmount:{type:"number"},earnedPoints:{type:"number"},previouslyAchievedAmount:{type:"number"},earnedRewards:i.RewardSchema("awarded by this achievement to this user"),notified:{type:"boolean"}}}})
require.register("schemas/models/level",function(e,require,t){var r,i,n,o,s,a,l,c,u,p,d,h,m,g,f,y,v
g=require("./../schemas")
m=require("./thang_component")
d=g.object()
g.extendNamedProperties(d)
d.properties.body={type:"string",title:"Content",description:"The body content of the article, in Markdown.",format:"markdown"}
d.properties.i18n={type:"object",format:"i18n",props:["name","body"],description:"Help translate this article"}
d.displayProperty="name"
y={title:"Side",description:"A side.",type:"string",enum:["left","right","top","bottom"]}
v={title:"Thang",description:"The name of a Thang.",type:"string",maxLength:60,format:"thang"}
f=["boolean","integer","number","null","string"]
r=g.object({title:"Event Prerequisite",format:"event-prereq",description:"Script requires that the value of some property on the event triggering it to meet some prerequisite.",required:["eventProps"]},{eventProps:g.array({default:["thang"],format:"event-value-chain",maxItems:10,title:"Event Property",description:'A chain of keys in the event, like "thang.pos.x" to access event.thang.pos.x.'},g.shortString({title:"Property",description:"A key in the event property key chain."})),equalTo:g.object({type:f,title:"==",description:"Script requires the event's property chain value to be equal to this value."}),notEqualTo:g.object({type:f,title:"!=",description:"Script requires the event's property chain value to *not* be equal to this value."}),greaterThan:{type:"number",title:">",description:"Script requires the event's property chain value to be greater than this value."},greaterThanOrEqualTo:{type:"number",title:">=",description:"Script requires the event's property chain value to be greater or equal to this value."},lessThan:{type:"number",title:"<",description:"Script requires the event's property chain value to be less than this value."},lessThanOrEqualTo:{type:"number",title:"<=",description:"Script requires the event's property chain value to be less than or equal to this value."},containingString:g.shortString({title:"Contains",description:"Script requires the event's property chain value to be a string containing this string."}),notContainingString:g.shortString({title:"Does not contain",description:"Script requires the event's property chain value to *not* be a string containing this string."}),containingRegexp:g.shortString({title:"Contains Regexp",description:"Script requires the event's property chain value to be a string containing this regular expression."}),notContainingRegexp:g.shortString({title:"Does not contain regexp",description:"Script requires the event's property chain value to *not* be a string containing this regular expression."})})
n=g.object({title:"Goal",description:"A goal that the player can accomplish.",required:["name","id"]},{name:g.shortString({title:"Name",description:'Name of the goal that the player will see, like "Defeat eighteen dragons".'}),i18n:{type:"object",format:"i18n",props:["name"],description:"Help translate this goal"},id:g.shortString({title:"ID",description:'Unique identifier for this goal, like "defeat-dragons".',pattern:"^[a-z0-9-]+$"}),worldEndsAfter:{title:"World Ends After",description:"When included, ends the world this many seconds after this goal succeeds or fails.",type:"number",minimum:0,exclusiveMinimum:true,maximum:300,default:3},howMany:{title:"How Many",description:"When included, require only this many of the listed goal targets instead of all of them.",type:"integer",minimum:1},hiddenGoal:{title:"Hidden",description:"Hidden goals don't show up in the goals area for the player until they're failed. (Usually they're obvious, like \"don't die\".)",type:"boolean"},optional:{title:"Optional",description:"Optional goals do not need to be completed for overallStatus to be success.",type:"boolean"},team:g.shortString({title:"Team",description:"Name of the team this goal is for, if it is not for all of the playable teams."}),killThangs:g.array({title:"Kill Thangs",description:"A list of Thang IDs the player should kill, or team names.",uniqueItems:true,minItems:1,default:["ogres"]},v),saveThangs:g.array({title:"Save Thangs",description:"A list of Thang IDs the player should save, or team names",uniqueItems:true,minItems:1,default:["Hero Placeholder"]},v),getToLocations:g.object({title:"Get To Locations",description:'Will be set off when any of the "who" touch any of the "targets"',required:["who","targets"]},{who:g.array({title:"Who",description:"The Thangs who must get to the target locations.",minItems:1},v),targets:g.array({title:"Targets",description:"The target locations to which the Thangs must get.",minItems:1},v)}),getAllToLocations:g.array({title:"Get all to locations",description:'Similar to getToLocations but now a specific "who" can have a specific "target", also must be used with the HowMany property for desired effect',required:["getToLocation"]},g.object({title:"",description:""},{getToLocation:g.object({title:"Get To Locations",description:"TODO: explain",required:["who","targets"]},{who:g.array({title:"Who",description:"The Thangs who must get to the target locations.",minItems:1},v),targets:g.array({title:"Targets",description:"The target locations to which the Thangs must get.",minItems:1},v)})})),keepFromLocations:g.object({title:"Keep From Locations",description:"TODO: explain",required:["who","targets"]},{who:g.array({title:"Who",description:"The Thangs who must not get to the target locations.",minItems:1},v),targets:g.array({title:"Targets",description:"The target locations to which the Thangs must not get.",minItems:1},v)}),keepAllFromLocations:g.array({title:"Keep ALL From Locations",description:'Similar to keepFromLocations but now a specific "who" can have a specific "target", also must be used with the HowMany property for desired effect',required:["keepFromLocation"]},g.object({title:"",description:""},{keepFromLocation:g.object({title:"Keep From Locations",description:"TODO: explain",required:["who","targets"]},{who:g.array({title:"Who",description:"The Thangs who must not get to the target locations.",minItems:1},v),targets:g.array({title:"Targets",description:"The target locations to which the Thangs must not get.",minItems:1},v)})})),leaveOffSides:g.object({title:"Leave Off Sides",description:"Sides of the level to get some Thangs to leave across.",required:["who","sides"]},{who:g.array({title:"Who",description:"The Thangs which must leave off the sides of the level.",minItems:1},v),sides:g.array({title:"Sides",description:"The sides off which the Thangs must leave.",minItems:1},y)}),keepFromLeavingOffSides:g.object({title:"Keep From Leaving Off Sides",description:"Sides of the level to keep some Thangs from leaving across.",required:["who","sides"]},{who:g.array({title:"Who",description:"The Thangs which must not leave off the sides of the level.",minItems:1},v),sides:y},{title:"Sides",description:"The sides off which the Thangs must not leave.",minItems:1},y),collectThangs:g.object({title:"Collect",description:"Thangs that other Thangs must collect.",required:["who","targets"]},{who:g.array({title:"Who",description:"The Thangs which must collect the target items.",minItems:1},v),targets:g.array({title:"Targets",description:"The target items which the Thangs must collect.",minItems:1},v)}),keepFromCollectingThangs:g.object({title:"Keep From Collecting",description:"Thangs that the player must prevent other Thangs from collecting.",required:["who","targets"]},{who:g.array({title:"Who",description:"The Thangs which must not collect the target items.",minItems:1},v),targets:g.array({title:"Targets",description:"The target items which the Thangs must not collect.",minItems:1},v)}),codeProblems:g.array({title:"Code Problems",description:"A list of Thang IDs that should not have any code problems, or team names.",uniqueItems:true,minItems:1,default:["humans"]},v),linesOfCode:{title:"Lines of Code",description:"A mapping of Thang IDs or teams to how many many lines of code should be allowed (well, statements).",type:"object",default:{humans:10},additionalProperties:{type:"integer",description:"How many lines to allow for this Thang."}},html:g.object({title:"HTML",description:"A jQuery selector and what its result should be"},{selector:{type:"string",description:'jQuery selector to run on the user HTML, like "h1:first-child"'},valueChecks:g.array({title:"Value checks",description:"Logical checks on the resulting value for this goal to pass.",format:"event-prereqs"},r)})})
u=g.object({title:"Dialogue Button",description:"A button to be shown to the user with the dialogue.",required:["text"]},{text:{title:"Title",description:"The text that will be on the button",default:"Okay",type:"string",maxLength:30},channel:g.shortString({title:"Channel",format:"event-channel",description:'Channel that this event will be broadcast over, like "level:set-playing".'}),event:{type:"object",title:"Event",description:"Event that will be broadcast when this button is pressed, like {playing: true}."},buttonClass:g.shortString({title:"Button Class",description:'CSS class that will be added to the button, like "btn-primary".'}),i18n:{type:"object",format:"i18n",props:["text"],description:"Help translate this button"}})
c=g.object({title:"Point",description:"An {x, y} coordinate point.",format:"point2d",default:{x:15,y:20}},{x:{title:"x",description:"The x coordinate.",type:"number"},y:{title:"y",description:"The y coordinate.",type:"number"}})
h=g.object({title:"Thang Command",description:"Make a target Thang move or say something, or select/deselect it.",required:["id"],default:{id:"Hero Placeholder"}},{id:v,select:{title:"Select",description:"Select or deselect this Thang.",type:"boolean"},say:g.object({title:"Say",description:"Make this Thang say a message.",required:["text"],default:{mood:"explain"}},{blurb:g.shortString({title:"Blurb",description:"A very short message to display above this Thang's head. Plain text.",maxLength:50}),mood:g.shortString({title:"Mood",description:"The mood with which the Thang speaks.",enum:["explain","debrief","congrats","attack","joke","tip","alarm"]}),text:{title:"Text",description:"A short message to display in the dialogue area. Markdown okay.",type:"string",maxLength:400},sound:g.object({title:"Sound",description:"A dialogue sound file to accompany the message.",required:["mp3","ogg"]},{mp3:g.shortString({title:"MP3",format:"sound-file"}),ogg:g.shortString({title:"OGG",format:"sound-file"}),preload:{title:"Preload",description:"Whether to load this sound file before the level can begin (typically for the first dialogue of a level).",type:"boolean"}}),responses:g.array({title:"Buttons",description:"An array of buttons to include with the dialogue, with which the user can respond."},u),i18n:{type:"object",format:"i18n",props:["blurb","text","sound"],description:"Help translate this message"}}),move:g.object({title:"Move",description:"Tell the Thang to move.",required:["target"],default:{target:{},duration:500}},{target:_.extend(_.cloneDeep(c),{title:"Target",description:"Target point to which the Thang will move.",default:{x:20,y:20}}),duration:{title:"Duration",description:"Number of milliseconds over which to move, or 0 for an instant move.",type:"integer",minimum:0,format:"milliseconds"}})})
l=g.object({title:"Note Group",description:"A group of notes that should be sent out as a result of this script triggering.",displayProperty:"name"},{name:{title:"Name",description:'Short name describing the script, like "Anya greets the player", for your convenience.',type:"string"},dom:g.object({title:"DOM",description:"Manipulate things in the play area DOM, outside of the level area canvas."},{focus:g.shortString({title:"Focus",description:"Set the window focus to this DOM selector string."}),showVictory:{title:"Show Victory",description:"Show the done button and maybe also the victory modal.",enum:[true,"Done Button","Done Button And Modal"]},highlight:g.object({title:"Highlight",description:"Highlight the target DOM selector string with a big arrow."},{target:g.shortString({title:"Target",description:"Target highlight element DOM selector string."}),delay:{type:"integer",minimum:0,title:"Delay",description:"Show the highlight after this many milliseconds. Doesn't affect the dim shade cutout highlight method."},offset:_.extend(_.cloneDeep(c),{title:"Offset",description:"Pointing arrow tip offset in pixels from the default target.",format:null}),rotation:{type:"number",minimum:0,title:"Rotation",description:"Rotation of the pointing arrow, in radians. PI / 2 points left, PI points up, etc.",format:"radians"},sides:g.array({title:"Sides",description:"Which sides of the target element to point at."},{type:"string",enum:["left","right","top","bottom"],title:"Side",description:"A side of the target element to point at."})}),lock:{title:"Lock",description:"Whether the interface should be locked so that the player's focus is on the script, or specific areas to lock.",type:["boolean","array"],items:{type:"string",enum:["surface","editor","palette","hud","playback","playback-hover","level"]}},letterbox:{type:"boolean",title:"Letterbox",description:"Turn letterbox mode on or off. Disables surface and playback controls."}}),playback:g.object({title:"Playback",description:"Control the playback of the level."},{playing:{type:"boolean",title:"Set Playing",description:"Set whether playback is playing or paused."},scrub:g.object({title:"Scrub",description:"Scrub the level playback time to a certain point.",default:{offset:2,duration:1e3,toRatio:.5}},{offset:{type:"integer",title:"Offset",description:"Number of frames by which to adjust the scrub target time."},duration:{type:"integer",title:"Duration",description:"Number of milliseconds over which to scrub time.",minimum:0,format:"milliseconds"},toRatio:{type:"number",title:"To Progress Ratio",description:"Set playback time to a target playback progress ratio.",minimum:0,maximum:1},toTime:{type:"number",title:"To Time",description:"Set playback time to a target playback point, in seconds.",minimum:0},toGoal:g.shortString({title:"To Goal",description:"Set playback time to when this goal was achieved. (TODO: not implemented.)"})})}),script:g.object({title:"Script",description:"Extra configuration for this action group."},{duration:{type:"integer",minimum:0,title:"Duration",description:"How long this script should last in milliseconds. 0 for indefinite.",format:"milliseconds"},skippable:{type:"boolean",title:"Skippable",description:"Whether this script shouldn't bother firing when the player skips past all current scripts."},beforeLoad:{type:"boolean",title:"Before Load",description:"Whether this script should fire before the level is finished loading."}}),sprites:g.array({title:"Sprites",description:"Commands to issue to Sprites on the Surface."},h),surface:g.object({title:"Surface",description:"Commands to issue to the Surface itself."},{focus:g.object({title:"Camera",description:"Focus the camera on a specific point on the Surface.",format:"viewport"},{target:{anyOf:[c,v,{type:"null"}],title:"Target",description:"Where to center the camera view.",default:{x:0,y:0}},zoom:{type:"number",minimum:0,exclusiveMinimum:true,maximum:64,title:"Zoom",description:"What zoom level to use."},duration:{type:"number",minimum:0,title:"Duration",description:"in ms"},bounds:g.array({title:"Boundary",maxItems:2,minItems:2,default:[{x:0,y:0},{x:46,y:39}],format:"bounds"},c),isNewDefault:{type:"boolean",format:"hidden",title:"New Default",description:"Set this as new default zoom once scripts end."}}),highlight:g.object({title:"Highlight",description:"Highlight specific Sprites on the Surface."},{targets:g.array({title:"Targets",description:"Thang IDs of target Sprites to highlight."},v),delay:{type:"integer",minimum:0,title:"Delay",description:"Delay in milliseconds before the highlight appears."}}),lockSelect:{type:"boolean",title:"Lock Select",description:"Whether to lock Sprite selection so that the player can't select/deselect anything."}}),sound:g.object({title:"Sound",description:"Commands to control sound playback."},{suppressSelectionSounds:{type:"boolean",title:"Suppress Selection Sounds",description:"Whether to suppress selection sounds made from clicking on Thangs."},music:g.object({title:"Music",description:"Control music playing"},{play:{title:"Play",type:"boolean"},file:g.shortString({title:"File",enum:["/music/music_level_1","/music/music_level_2","/music/music_level_3","/music/music_level_4","/music/music_level_5"]})})})})
p=g.object({title:"Script",description:"A script fires off a chain of notes to interact with the game when a certain event triggers it.",required:["channel"],default:{channel:"world:won",noteChain:[]}},{id:g.shortString({title:"ID",description:"A unique ID that other scripts can rely on in their Happens After prereqs, for sequencing.",pattern:"^[a-zA-Z 0-9:'\"_!-]+$"}),channel:g.shortString({title:"Event",format:"event-channel",description:'Event channel this script might trigger for, like "world:won".'}),eventPrereqs:g.array({title:"Event Checks",description:"Logical checks on the event for this script to trigger.",format:"event-prereqs"},r),repeats:{title:"Repeats",description:"Whether this script can trigger more than once during a level.",enum:[true,false,"session"]},scriptPrereqs:g.array({title:"Happens After",description:"Scripts that need to fire first."},g.shortString({title:"ID",description:"A unique ID of a script."})),notAfter:g.array({title:"Not After",description:"Do not run this script if any of these scripts have run."},g.shortString({title:"ID",description:"A unique ID of a script."})),noteChain:g.array({title:"Actions",description:"A list of things that happen when this script triggers."},l)})
a=g.object({title:"Thang",description:'Thangs are any units, doodads, or abstract things that you use to build the level. ("Thing" was too confusing to say.)',format:"thang",required:["id","thangType","components"],default:{id:"Boris",thangType:"Soldier",components:[]}},{id:v,thangType:g.objectId({links:[{rel:"db",href:"/db/thang.type/{($)}/version"}],title:"Thang Type",description:"A reference to the original Thang template being configured.",format:"thang-type"}),components:g.array({title:"Components",description:"Thangs are configured by changing the Components attached to them.",uniqueItems:true,format:"thang-components-array"},m)})
s=g.object({title:"System",description:"Configuration for a System that this Level uses.",format:"level-system",required:["original","majorVersion"],default:{majorVersion:0,config:{}},links:[{rel:"db",href:"/db/level.system/{(original)}/version/{(majorVersion)}"}]},{original:g.objectId({title:"Original",description:"A reference to the original System being configured.",format:"hidden"}),config:g.object({title:"Configuration",description:"System-specific configuration properties.",additionalProperties:true,format:"level-system-configuration"}),majorVersion:{title:"Major Version",description:"Which major version of the System is being used.",type:"integer",minimum:0,format:"hidden"}})
i=g.object({title:"Article",description:"Reference to a general documentation article.",required:["original"],format:"latest-version-reference",default:{original:null,majorVersion:0},links:[{rel:"db",href:"/db/article/{(original)}/version/{(majorVersion)}"}]},{original:g.objectId({title:"Original",description:"A reference to the original Article."}),majorVersion:{title:"Major Version",description:"Which major version of the Article is being used.",type:"integer",minimum:0}})
o=g.object({title:"Level",description:"A spectacular level which will delight and educate its stalwart players with the sorcery of coding.",required:["name"],default:{name:"Ineffable Wizardry",description:"This level is indescribably flarmy.",documentation:{},scripts:[],thangs:[],systems:[],victory:{},type:"hero",goals:[{id:"ogres-die",name:"Defeat the ogres.",killThangs:["ogres"],worldEndsAfter:3},{id:"humans-survive",name:"Your hero must survive.",saveThangs:["Hero Placeholder"],howMany:1,worldEndsAfter:3,hiddenGoal:true}],concepts:["basic_syntax"]}})
g.extendNamedProperties(o)
_.extend(o.properties,{description:{title:"Description",description:"A short explanation of what this level is about.",type:"string",maxLength:65536,format:"markdown"},studentPlayInstructions:{title:"Student Play Instructions",description:"Instructions for game dev levels when students play them.",type:"string",maxLength:65536,format:"markdown"},loadingTip:{type:"string",title:"Loading Tip",description:"What to show for this level while it's loading."},documentation:g.object({title:"Documentation",description:"Documentation articles relating to this level.",default:{specificArticles:[],generalArticles:[]}},{specificArticles:g.array({title:"Specific Articles",description:"Specific documentation articles that live only in this level.",uniqueItems:true},d),generalArticles:g.array({title:"General Articles",description:"General documentation articles that can be linked from multiple levels.",uniqueItems:true},i),hints:g.array({title:"Hints",description:"Tips and tricks to help unstick a player for the level.",uniqueItems:true},{type:"object",properties:{body:{type:"string",title:"Content",description:"The body content of the article, in Markdown.",format:"markdown"},i18n:{type:"object",format:"i18n",props:["body"],description:"Help translate this hint"}}}),hintsB:g.array({title:"HintsB",description:"2nd style of hints for a/b testing significant variations",uniqueItems:true},{type:"object",properties:{body:{type:"string",title:"Content",description:"The body content of the article, in Markdown.",format:"markdown"},i18n:{type:"object",format:"i18n",props:["body"],description:"Help translate this hint"}}})}),nextLevel:{type:"object",links:[{rel:"extra",href:"/db/level/{($)}"},{rel:"db",href:"/db/level/{(original)}/version/{(majorVersion)}"}],format:"latest-version-reference",title:"Next Level",description:"Reference to the next level players will play after beating this one."},scripts:g.array({title:"Scripts",description:"An array of scripts that trigger based on what the player does and affect things outside of the core level simulation."},p),thangs:g.array({title:"Thangs",description:"An array of Thangs that make up the level."},a),systems:g.array({title:"Systems",description:"Levels are configured by changing the Systems attached to them.",uniqueItems:true},s),victory:g.object({title:"Victory Screen"},{body:{type:"string",format:"markdown",title:"Body Text",description:"Inserted into the Victory Modal once this level is complete. Tell the player they did a good job and what they accomplished!"},i18n:{type:"object",format:"i18n",props:["body"],description:"Help translate this victory message"}}),i18n:{type:"object",format:"i18n",props:["name","description","loadingTip","studentPlayInstructions"],description:"Help translate this level"},banner:{type:"string",format:"image-file",title:"Banner"},goals:g.array({title:"Goals",description:"An array of goals which are visible to the player and can trigger scripts."},n),type:g.shortString({title:"Type",description:"What type of level this is.",enum:["campaign","ladder","ladder-tutorial","hero","hero-ladder","hero-coop","course","course-ladder","game-dev","web-dev"]}),kind:g.shortString({title:"Kind",description:"Similar to type, but just for our organization.",enum:["demo","usage","mastery","advanced","practice","challenge"]}),terrain:g.terrainString,requiresSubscription:{title:"Requires Subscription",description:"Whether this level is available to subscribers only.",type:"boolean"},tasks:g.array({title:"Tasks",description:"Tasks to be completed for this level."},g.task),helpVideos:g.array({title:"Help Videos"},g.object({default:{style:"eccentric",url:"",free:false}},{style:g.shortString({title:"Style",description:"Like: original, eccentric, scripted, edited, etc."}),free:{type:"boolean",title:"Free",description:"Whether this video is freely available to all players without a subscription."},url:g.url({title:"URL",description:"Link to the video on Vimeo."})})),replayable:{type:"boolean",title:"Replayable",description:"Whether this (hero) level infinitely scales up its difficulty and can be beaten over and over for greater rewards."},buildTime:{type:"number",description:"How long it has taken to build this level."},practice:{type:"boolean"},practiceThresholdMinutes:{type:"number",description:"Players with larger playtimes may be directed to a practice level."},primerLanguage:{type:"string",enum:["javascript","python"],description:"Programming language taught by this level."},shareable:{title:"Shareable",type:["string","boolean"],enum:[false,true,"project"],description:'Whether the level is not shareable (false), shareable (true), or a sharing-encouraged project level ("project"). Make sure to use "project" for project levels so they show up correctly in the Teacher Dashboard.'},adventurer:{type:"boolean"},adminOnly:{type:"boolean"},disableSpaces:{type:["boolean","integer"]},hidesSubmitUntilRun:{type:"boolean"},hidesPlayButton:{type:"boolean"},hidesRunShortcut:{type:"boolean"},hidesHUD:{type:"boolean"},hidesSay:{type:"boolean"},hidesCodeToolbar:{type:"boolean"},hidesRealTimePlayback:{type:"boolean"},backspaceThrottle:{type:"boolean"},lockDefaultCode:{type:["boolean","integer"]},moveRightLoopSnippet:{type:"boolean"},realTimeSpeedFactor:{type:"number"},autocompleteFontSizePx:{type:"number"},requiredCode:g.array({},{type:"string"}),suspectCode:g.array({},{type:"object",properties:{name:{type:"string"},pattern:{type:"string"}}}),requiredGear:{type:"object",title:"Required Gear",description:"Slots that should require one of a set array of items for that slot",additionalProperties:{type:"array",items:{type:"string",links:[{rel:"db",href:"/db/thang.type/{($)}/version"}],format:"latest-version-original-reference"}}},restrictedGear:{type:"object",title:"Restricted Gear",description:"Slots that should restrict all of a set array of items for that slot",additionalProperties:{type:"array",items:{type:"string",links:[{rel:"db",href:"/db/thang.type/{($)}/version"}],format:"latest-version-original-reference"}}},requiredProperties:{type:"array",items:{type:"string"},description:"Names of properties a hero must have equipped to play.",format:"solution-gear",title:"Required Properties"},restrictedProperties:{type:"array",items:{type:"string"},description:"Names of properties a hero must not have equipped to play.",title:"Restricted Properties"},recommendedHealth:{type:"number",minimum:0,exclusiveMinimum:true,description:"If set, will show the recommended health to be able to beat this level with the intended main solution to the player when choosing equipment.",format:"solution-stats",title:"Recommended Health"},allowedHeroes:{type:"array",title:"Allowed Heroes",description:"Which heroes can play this level. For any hero, leave unset.",items:{type:"string",links:[{rel:"db",href:"/db/thang.type/{($)}/version"}],format:"latest-version-original-reference"}},campaign:g.shortString({title:"Campaign",description:'Which campaign this level is part of (like "desert").',format:"hidden"}),campaignIndex:g.int({title:"Campaign Index",description:"The 0-based index of this level in its campaign.",format:"hidden"}),scoreTypes:g.array({title:"Score Types",description:"What metric to show leaderboards for.",uniqueItems:true},g.shortString({title:"Score Type",enum:["time","damage-taken","damage-dealt","gold-collected","difficulty"]})),concepts:g.array({title:"Programming Concepts",description:"Which programming concepts this level covers.",uniqueItems:true,format:"concepts-list"},g.concept),primaryConcepts:g.array({title:"Primary Concepts",description:"The main 1-3 concepts this level focuses on.",uniqueItems:true},g.concept),picoCTFProblem:{type:"string",description:"Associated picoCTF problem ID, if this is a picoCTF level"}})
g.extendBasicProperties(o,"level")
g.extendSearchableProperties(o)
g.extendVersionedProperties(o,"level")
g.extendPermissionsProperties(o,"level")
g.extendPatchableProperties(o)
g.extendTranslationCoverageProperties(o)
t.exports=o})
require.register("schemas/models/level_component",function(e,require,t){var r,i,n,o,s,a,l
s=require("./../schemas")
a=require("./../metaschema")
o="class AttacksSelf extends Component\n  @className: 'AttacksSelf'\n  chooseAction: ->\n    @attack @"
l=["action","ai","alliance","collision","combat","display","event","existence","hearing","inventory","movement","programming","targeting","ui","vision","misc","physics","effect","magic","game"]
n=s.object({title:"Property Documentation",description:"Documentation entry for a property this Component will add to its Thang which other Components might want to also use.",default:{name:"foo",type:"object",description:"The `foo` property can satisfy all the #{spriteName}'s foobar needs. Use it wisely."},required:["name","type","description"]},{name:{type:"string",title:"Name",description:"Name of the property."},i18n:{type:"object",format:"i18n",props:["name","description","context"],description:"Help translate this property"},context:{type:"object",title:"Example template context",additionalProperties:{type:"string"}},codeLanguages:s.array({title:"Specific Code Languages",description:"If present, then only the languages specified will show this documentation. Leave unset for language-independent documentation.",format:"code-languages-array"},s.shortString({title:"Code Language",description:"A specific code language to show this documentation for.",format:"code-language"})),type:s.shortString({title:"Type",description:"Intended type of the property."}),description:{oneOf:[{type:"object",title:"Language Descriptions",description:"Property descriptions by code language.",additionalProperties:{type:"string",description:"Description of the property.",maxLength:1e3,format:"markdown"},format:"code-languages-object",default:{javascript:""}},{title:"Description",type:"string",description:"Description of the property.",maxLength:1e3,format:"markdown"}]},args:s.array({title:"Arguments",description:'If this property has type "function", then provide documentation for any function arguments.'},s.FunctionArgumentSchema),owner:{title:"Owner",type:"string",description:'Owner of the property, like "this" or "Math".'},example:{oneOf:[{type:"object",title:"Language Examples",description:"Examples by code language.",additionalProperties:{type:"string",description:"An example code block.",format:"code"},format:"code-languages-object",default:{javascript:""}},{title:"Example",type:"string",description:"An optional example code block.",format:"javascript"}]},snippets:{type:"object",title:"Snippets",description:"List of snippets for the respective programming languages",additionalProperties:s.codeSnippet,format:"code-languages-object"},returns:s.object({title:"Return Value",description:"Optional documentation of any return value.",required:["type"],default:{type:"null"}},{type:s.shortString({title:"Type",description:"Type of the return value"}),example:{oneOf:[{type:"object",title:"Language Examples",description:"Example return values by code language.",additionalProperties:s.shortString({description:"Example return value.",format:"code"}),format:"code-languages-object",default:{javascript:""}},s.shortString({title:"Example",description:"Example return value"})]},description:{oneOf:[{type:"object",title:"Language Descriptions",description:"Example return values by code language.",additionalProperties:{type:"string",description:"Description of the return value.",maxLength:1e3},format:"code-languages-object",default:{javascript:""}},{title:"Description",type:"string",description:"Description of the return value.",maxLength:1e3}]},i18n:{type:"object",format:"i18n",props:["description"],description:"Help translate this return value"}}),autoCompletePriority:{type:"number",title:"Autocomplete Priority",description:"How important this property is to autocomplete.",minimum:0,default:1},userShouldCaptureReturn:{type:"object",title:"User Should Capture Return",properties:{variableName:{type:"string",title:"Variable Name",description:"Variable name this property is autocompleted into.",default:"result"}}}})
r=s.object({title:"Component Dependency",description:"A Component upon which this Component depends.",required:["original","majorVersion"],format:"latest-version-reference",links:[{rel:"db",href:"/db/level.component/{(original)}/version/{(majorVersion)}"}]},{original:s.objectId({title:"Original",description:"A reference to another Component upon which this Component depends."}),majorVersion:{title:"Major Version",description:"Which major version of the Component this Component needs.",type:"integer",minimum:0}})
i=s.object({title:"Component",description:"A Component which can affect Thang behavior.",required:["system","name","code"],default:{system:"ai",name:"AttacksSelf",description:"This Component makes the Thang attack itself.",code:o,codeLanguage:"coffeescript",dependencies:[],propertyDocumentation:[],configSchema:{}}})
s.extendNamedProperties(i)
i.properties.name.pattern=s.classNamePattern
_.extend(i.properties,{system:{title:"System",description:'The short name of the System this Component belongs to, like "ai".',type:"string",enum:l},description:{title:"Description",description:"A short explanation of what this Component does.",type:"string",maxLength:2e3},codeLanguage:{type:"string",title:"Language",description:"Which programming language this Component is written in.",enum:["coffeescript"]},code:{title:"Code",description:"The code for this Component, as a CoffeeScript class. TODO: add link to documentation for how to write these.",type:"string",format:"coffee"},js:{title:"JavaScript",description:"The transpiled JavaScript code for this Component",type:"string",format:"hidden"},dependencies:s.array({title:"Dependencies",description:"An array of Components upon which this Component depends.",uniqueItems:true},r),propertyDocumentation:s.array({title:"Property Documentation",description:"An array of documentation entries for each notable property this Component will add to its Thang which other Components might want to also use."},n),configSchema:_.extend(a,{title:"Configuration Schema",description:"A schema for validating the arguments that can be passed to this Component as configuration.",default:{type:"object"}}),official:{type:"boolean",title:"Official",description:"Whether this is an official CodeCombat Component."},searchStrings:{type:"string"}})
s.extendBasicProperties(i,"level.component")
s.extendSearchableProperties(i)
s.extendVersionedProperties(i,"level.component")
s.extendPermissionsProperties(i,"level.component")
s.extendPatchableProperties(i)
s.extendTranslationCoverageProperties(i)
t.exports=i})
require.register("schemas/models/level_feedback",function(e,require,t){var r,i,n
n=require("./../schemas")
r=n.object({required:["original","majorVersion"]},{original:n.objectId({}),majorVersion:{type:"integer",minimum:0}})
i=n.object({title:"Feedback",description:"Feedback on a level."})
_.extend(i.properties,{creatorName:{type:"string"},levelName:{type:"string"},levelID:{type:"string"},creator:n.objectId({links:[{rel:"extra",href:"/db/user/{($)}"}]}),created:n.date({title:"Created",readOnly:true}),level:r,rating:{type:"number",minimum:1,maximum:5},review:{type:"string"}})
n.extendBasicProperties(i,"level.feedback")
t.exports=i})
require.register("schemas/models/level_session",function(e,require,t){var r,i,n,o
o=require("./../schemas")
i=o.object({id:o.objectId({links:[{rel:"extra",href:"/db/user/{($)}"}]}),time:{type:"Number"},changes:{type:"Number"}})
r=o.object({required:["original","majorVersion"],links:[{rel:"db",href:"/db/level/{(original)}/version/{(majorVersion)}"}]},{original:o.objectId({}),majorVersion:{type:"integer",minimum:0}})
n=o.object({title:"Session",description:"A single session for a given level.",default:{codeLanguage:"python",submittedCodeLanguage:"python",playtime:0}})
_.extend(n.properties,{browser:{type:"object"},creatorName:{type:"string"},levelName:{type:"string"},levelID:{type:"string"},creator:o.objectId({links:[{rel:"extra",href:"/db/user/{($)}"}]}),created:o.date({title:"Created",readOnly:true}),changed:o.date({title:"Changed",readOnly:true}),dateFirstCompleted:{},team:o.shortString(),level:r,heroConfig:o.HeroConfigSchema,state:o.object({},{complete:{type:"boolean"},scripts:o.object({},{ended:{type:"object",additionalProperties:{type:"number"}},currentScript:{type:["null","string"]},currentScriptOffset:{type:"number"}}),selected:{type:["null","string"]},playing:{type:"boolean"},frame:{type:"number"},thangs:{type:"object",additionalProperties:{title:"Thang",type:"object",properties:{methods:{type:"object",additionalProperties:{title:"Thang Method",type:"object",properties:{metrics:{type:"object"},source:{type:"string"}}}}}}},goalStates:{type:"object",description:"Maps Goal ID on a goal state object",additionalProperties:{title:"Goal State",type:"object",properties:{status:{enum:["failure","incomplete","success"]}}}},submissionCount:{description:"How many times the session has been submitted for real-time playback (can affect the random seed).",type:"integer",minimum:0},difficulty:{description:"The highest difficulty level beaten, for use in increasing-difficulty replayable levels.",type:"integer",minimum:0},lastUnsuccessfulSubmissionTime:o.date({description:"The last time that real-time submission was started without resulting in a win."}),flagHistory:{description:"The history of flag events during the last real-time playback submission.",type:"array",items:o.object({required:["player","color","time","active"]},{player:{type:"string"},team:{type:"string"},color:{type:"string",enum:["green","black","violet"]},time:{type:"number",minimum:0},active:{type:"boolean"},pos:o.object({required:["x","y"]},{x:{type:"number"},y:{type:"number"}}),source:{type:"string",enum:["click"]}})},topScores:o.array({},o.object({},{type:o.shortString({enum:["time","damage-taken","damage-dealt","gold-collected","difficulty"]}),date:o.date({description:"When the submission achieving this score happened."}),score:{type:"number"}}))}),code:{type:"object",additionalProperties:{type:"object",additionalProperties:{type:"string",format:"code",maxLength:1024*128}}},codeLogs:{type:"array"},codeLanguage:{type:"string"},playtime:{type:"number",title:"Playtime",description:"The total playtime on this session in seconds"},teamSpells:{type:"object",additionalProperties:{type:"array"}},players:{type:"object"},chat:{type:"array"},ladderAchievementDifficulty:{type:"integer",minimum:0,description:"What ogre AI difficulty, 0-4, this human session has beaten in a multiplayer arena."},meanStrength:{type:"number"},standardDeviation:{type:"number",minimum:0},totalScore:{type:"number"},submitted:{type:"boolean"},submitDate:o.date({title:"Submitted"}),submittedCode:{type:"object",additionalProperties:{type:"object",additionalProperties:{type:"string",format:"code"}}},submittedCodeLanguage:{type:"string"},isRanking:{type:"boolean",description:"Whether this session is still in the first ranking chain after being submitted."},randomSimulationIndex:{type:"number",description:"A random updated every time the game is randomly simulated for a uniform random distribution of simulations (see #2448).",minimum:0,maximum:1},unsubscribed:{type:"boolean",description:"Whether the player has opted out of receiving email updates about ladder rankings for this session."},numberOfWinsAndTies:{type:"number"},numberOfLosses:{type:"number"},scoreHistory:{type:"array",title:"Score History",description:"A list of objects representing the score history of a session",items:{title:"Score History Point",description:"An array with the format [unix timestamp, totalScore]",type:"array",items:{type:"number"}}},matches:{type:"array",title:"Matches",description:"All of the matches a submitted session has played in its current state.",items:{type:"object",properties:{date:o.date({title:"Date computed",description:"The date a match was computed."}),playtime:{title:"Playtime so far",description:"The total seconds of playtime on this session when the match was computed. Not currently tracked.",type:"number"},metrics:{type:"object",title:"Metrics",description:"Various information about the outcome of a match.",properties:{rank:{title:"Rank",description:"A 0-indexed ranking representing the player's standing in the outcome of a match",type:"number"}}},opponents:{type:"array",title:"Opponents",description:"An array containing information about the opponents' sessions in a given match.",items:{type:"object",properties:{sessionID:{title:"Opponent Session ID",description:"The session ID of an opponent.",type:["object","string","null"]},userID:{title:"Opponent User ID",description:"The user ID of an opponent",type:["object","string","null"]},name:{title:"Opponent name",description:"The name of the opponent",type:["string","null"]},totalScore:{title:"Opponent total score",description:"The totalScore of a user when the match was computed",type:["number","string","null"]},metrics:{type:"object",properties:{rank:{title:"Opponent Rank",description:"The opponent's ranking in a given match",type:"number"}}},codeLanguage:{type:["string","null"],description:"What submittedCodeLanguage the opponent used during the match"}}}},simulator:{type:"object",description:"Holds info on who simulated the match, and with what tools."},randomSeed:{description:"Stores the random seed that was used during this match."}}}},leagues:o.array({description:"Multiplayer data for the league corresponding to Clans and CourseInstances the player is a part of."},o.object({},{leagueID:{type:"string",description:"The _id of a Clan or CourseInstance the user belongs to."},stats:o.object({description:"Multiplayer match statistics corresponding to this entry in the league."}),lastOpponentSubmitDate:o.date({description:"The submitDate of the last league session we selected to play against (for playing through league opponents in order)."})})),isForClassroom:{type:"boolean",title:"Is For Classroom",description:"The level session was created for a user inside a course"}})
n.properties.leagues.items.properties.stats.properties=_.pick(n.properties,"meanStrength","standardDeviation","totalScore","numberOfWinsAndTies","numberOfLosses","scoreHistory","matches")
o.extendBasicProperties(n,"level.session")
o.extendPermissionsProperties(n,"level.session")
t.exports=n})
require.register("schemas/models/level_system",function(e,require,t){var r,i,n,o,s
n=require("./../schemas")
s=require("./../metaschema")
o="class Jitter extends System\n  constructor: (world, config) ->\n    super world, config\n    @idlers = @addRegistry (thang) -> thang.exists and thang.acts and thang.moves and thang.action is 'idle'\n\n  update: ->\n    # We return a simple numeric hash that will combine to a frame hash\n    # help us determine whether this frame has changed in resimulations.\n    hash = 0\n    for thang in @idlers\n      hash += thang.pos.x += 0.5 - Math.random()\n      hash += thang.pos.y += 0.5 - Math.random()\n      thang.hasMoved = true\n    return hash"
r=n.object({title:"System Dependency",description:"A System upon which this System depends.",required:["original","majorVersion"],format:"latest-version-reference",links:[{rel:"db",href:"/db/level.system/{(original)}/version/{(majorVersion)}"}]},{original:n.objectId({title:"Original",description:"A reference to another System upon which this System depends."}),majorVersion:{title:"Major Version",description:"Which major version of the System this System needs.",type:"integer",minimum:0}})
i=n.object({title:"System",description:"A System which can affect Level behavior.",required:["name","code"],default:{name:"JitterSystem",description:"This System makes all idle, movable Thangs jitter around.",code:o,codeLanguage:"coffeescript",dependencies:[],configSchema:{}}})
n.extendNamedProperties(i)
i.properties.name.pattern=n.classNamePattern
_.extend(i.properties,{description:{title:"Description",description:"A short explanation of what this System does.",type:"string",maxLength:2e3},codeLanguage:{type:"string",title:"Language",description:"Which programming language this System is written in.",enum:["coffeescript"]},code:{title:"Code",description:"The code for this System, as a CoffeeScript class. TODO: add link to documentation for how to write these.",type:"string",format:"coffee"},js:{title:"JavaScript",description:"The transpiled JavaScript code for this System",type:"string",format:"hidden"},dependencies:n.array({title:"Dependencies",description:"An array of Systems upon which this System depends.",uniqueItems:true},r),configSchema:_.extend(s,{title:"Configuration Schema",description:"A schema for validating the arguments that can be passed to this System as configuration.",default:{type:"object",additionalProperties:false}}),official:{type:"boolean",title:"Official",description:"Whether this is an official CodeCombat System."}})
n.extendBasicProperties(i,"level.system")
n.extendSearchableProperties(i)
n.extendVersionedProperties(i,"level.system")
n.extendPermissionsProperties(i)
n.extendPatchableProperties(i)
t.exports=i})
require.register("schemas/models/mail_sent",function(e,require,t){var r,i
i=require("./../schemas")
r=i.object({title:"Sent mail",description:"Emails which have been sent through the system"})
_.extend(r.properties,{mailTask:i.objectId({}),user:i.objectId({links:[{rel:"extra",href:"/db/user/{($)}"}]}),sent:i.date({title:"Sent",readOnly:true}),metadata:i.object({},{})})
i.extendBasicProperties(r,"mail.sent")
t.exports=r})
require.register("schemas/models/mandate.schema",function(e,require,t){var r,i
i=require("./../schemas")
t.exports=r={type:"object",additionalProperties:false,default:{simulationThroughputRatio:1,sessionSaveDelay:{registered:{min:4,max:10},anonymous:{min:5,max:15}}},properties:{simulationThroughputRatio:{name:"Simulation Throughput Ratio",description:"0-1 fraction of requests for a match to simulate that should be granted.",type:"number",minimum:0,maximum:1},sessionSaveDelay:{name:"Session Save Delay",description:"How often we save level sessions after code changes--min and max wait in seconds.",type:"object",properties:{registered:{description:"How often to save for registered players.",type:"object",additionalProperties:false,requiredProperties:["min","max"],properties:{min:{type:"number",minimum:1,exclusiveMinimum:true,format:"seconds"},max:{type:"number",minimum:5,exclusiveMinimum:true,format:"seconds"}}},anonymous:{description:"How often to save for anonymous players.",type:"object",additionalProperties:false,requiredProperties:["min","max"],properties:{min:{type:"number",minimum:1,exclusiveMinimum:true,format:"seconds"},max:{type:"number",minimum:5,exclusiveMinimum:true,format:"seconds"}}}}}}}
i.extendBasicProperties(r,"Mandate")})
require.register("schemas/models/o-auth-provider.schema",function(e,require,t){var r,i
i=require("./../schemas")
r={description:"A service which provides OAuth identification, login for our users.",type:"object",properties:{lookupUrlTemplate:{type:"string",description:'A template of the URL for the user resource. Should include "<%= accessToken %>" for string interpolation.'},lookupIdProperty:{type:"string",description:'What property in the response from lookupUrlTemplate to use as the user id. Defaults to "id".'},tokenUrl:{type:"string"},tokenAuth:{type:"object",description:'"auth" argument for requests (see https://github.com/request/request#http-authentication)',properties:{user:{type:"string"},pass:{type:"string"},sendImmediately:{type:"boolean"}}},tokenMethod:{enum:["get","post"]},authorizeUrl:{type:"string"},clientID:{type:"string"},strictSSL:{type:"boolean"},redirectAfterLogin:{type:"string"}}}
i.extendBasicProperties(r,"OAuthProvider")
i.extendNamedProperties(r)
t.exports=r})
require.register("schemas/models/patch",function(e,require,t){var r,i,n
i=require("./../schemas")
n=["achievement","article","campaign","course","level","level_component","level_system","poll","thang_type"]
r=i.object({title:"Patch",required:["target","delta","commitMessage"]},{delta:{title:"Delta",type:["array","object"]},commitMessage:i.shortString({maxLength:500,minLength:1}),creator:i.objectId({links:[{rel:"extra",href:"/db/user/{($)}"}]}),acceptor:i.objectId({links:[{rel:"extra",href:"/db/user/{($)}"}]}),created:i.date({title:"Created",readOnly:true}),status:{enum:["pending","accepted","rejected","withdrawn"]},target:i.object({title:"Target",required:["collection","id"]},{collection:{enum:n},id:i.objectId({title:"Target ID"}),original:i.objectId({title:"Target Original"}),version:{properties:{major:{type:"number",minimum:0},minor:{type:"number",minimum:0}}}}),wasPending:{type:"boolean"},newlyAccepted:{type:"boolean"},reasonNotAutoAccepted:{type:"string"}})
i.extendBasicProperties(r,"patch")
t.exports=r})
require.register("schemas/models/payment.schema",function(e,require,t){var r,i
i=require("./../schemas")
r=i.object({title:"Payment",required:[]},{purchaser:i.objectId({links:[{rel:"extra",href:"/db/user/{($)}"}]}),recipient:i.objectId({links:[{rel:"extra",href:"/db/user/{($)}"}]}),purchaserEmailLower:i.shortString({description:"We may have a purchaser with no account, in which case only this email will be set"}),service:{enum:["stripe","ios","external"]},amount:{type:"integer",description:"Payment in cents."},created:i.date({title:"Created",readOnly:true}),gems:{type:"integer",description:"The number of gems acquired."},productID:{enum:["gems_5","gems_10","gems_20","custom"]},description:{type:"string"},prepaidID:i.objectId(),ios:i.object({title:"iOS IAP Data"},{transactionID:{type:"string"},rawReceipt:{type:"string"},localPrice:{type:"string"}}),stripe:i.object({title:"Stripe Data"},{timestamp:{type:"integer",description:"Unique identifier provided by the client, to guard against duplicate payments."},chargeID:{type:"string"},customerID:{type:"string"},invoiceID:{type:"string"}})})
i.extendBasicProperties(r,"payment")
t.exports=r})
require.register("schemas/models/poll.schema",function(e,require,t){var r,i
i=require("./../schemas")
r=i.object({title:"Poll"})
i.extendNamedProperties(r)
_.extend(r.properties,{description:{type:"string",title:"Description",description:"Optional: extra context or explanation",format:"markdown"},answers:i.array({title:"Answers"},i.object({required:["key","text","i18n","votes"]},{key:i.shortString({title:"Key",description:"Key for recording votes, like 14-to-17",pattern:"^[a-z0-9-]+$"}),text:i.shortString({title:"Text",description:"Answer that the player will see, like 14 - 17.",format:"markdown"}),i18n:{type:"object",title:"i18n",format:"i18n",props:["text"]},votes:{title:"Votes",type:"integer",minimum:0}})),i18n:{type:"object",title:"i18n",format:"i18n",props:["name","description"]},created:i.date({title:"Created",readOnly:true}),priority:{title:"Priority",description:"Lower numbers will show earlier.",type:"integer"},userProperty:i.shortString({pattern:i.identifierPattern,description:"Optional: store the answer inside the User object itself, also, with this property name."})})
i.extendBasicProperties(r,"poll")
i.extendSearchableProperties(r)
i.extendTranslationCoverageProperties(r)
i.extendPatchableProperties(r)
t.exports=r})
require.register("schemas/models/prepaid.schema",function(e,require,t){var r,i
i=require("./../schemas")
r=i.object({title:"Prepaid",required:["type"]},{creator:i.objectId({links:[{rel:"extra",href:"/db/user/{($)}"}]}),clientCreator:i.objectId({links:[{rel:"extra",href:"/db/api-clients/{($)}"}]}),redeemers:i.array({title:"Users who have redeemed this code"},i.object({required:["date","userID"]},{date:i.date({title:"Redeemed date"}),userID:i.objectId({links:[{rel:"extra",href:"/db/user/{($)}"}]}),teacherID:i.objectId({links:[{rel:"extra",href:"/db/user/{($)}"}]},{description:"userID of teacher that applied the license, if not the creator"})})),maxRedeemers:{type:"integer"},code:i.shortString({title:"Unique code to redeem"}),type:{type:"string"},properties:{type:"object"},exhausted:{type:"boolean"},startDate:i.stringDate(),endDate:i.stringDate(),includedCourseIDs:i.array({description:"courseIDs that this prepaid includes access to"},i.objectId()),joiners:i.array({title:"Teachers this Prepaid is shared with"},i.object({required:["userID"]},{userID:i.objectId({links:[{rel:"extra",href:"/db/user/{($)}"}]})}))})
i.extendBasicProperties(r,"prepaid")
t.exports=r})
require.register("schemas/models/product.schema",function(e,require,t){var r,i
i=require("./../schemas")
t.exports=r={type:"object",additionalProperties:false,properties:{name:{type:"string"},amount:{type:"integer",description:"Cost in cents"},gems:{type:"integer",description:"Number of gems awarded"},coupons:{type:"array",items:{type:"object",additionalProperties:false,properties:{code:{type:"string"},amount:{type:"integer",description:"Adjusted cost in cents"}}}}}}
i.extendBasicProperties(r,"Product")})
require.register("schemas/models/purchase.schema",function(e,require,t){var r,i,n
i=require("./../schemas")
n=["level","thang_type"]
r=i.object({title:"Purchase",required:["purchaser","recipient","purchased"]},{purchaser:i.objectId({links:[{rel:"extra",href:"/db/user/{($)}"}]}),recipient:i.objectId({links:[{rel:"extra",href:"/db/user/{($)}"}]}),purchased:i.object({title:"Target",required:["collection","original"]},{collection:{enum:n},original:i.objectId({title:"Target Original"})}),created:i.date({title:"Created",readOnly:true})})
i.extendBasicProperties(r,"patch")
t.exports=r})
require.register("schemas/models/skipped_contact.schema",function(e,require,t){var r,i
i=require("./../schemas")
r=i.object({title:"Skipped Contact"})
_.extend(r,{additionalProperties:true})
i.extendBasicProperties(r,"skipped.contacts")
t.exports=r})
require.register("schemas/models/thang_component",function(e,require,t){var r,i
i=require("./../schemas")
t.exports=r=i.object({title:"Component",description:"Configuration for a Component that this Thang uses.",format:"component-reference",required:["original","majorVersion"],default:{majorVersion:0,config:{}},links:[{rel:"db",href:"/db/level.component/{(original)}/version/{(majorVersion)}"}]},{original:i.objectId({title:"Original",description:"A reference to the original Component being configured.",format:"hidden"}),config:i.object({title:"Configuration",description:"Component-specific configuration properties.",additionalProperties:true,format:"thang-component-configuration"}),majorVersion:{title:"Major Version",description:"Which major version of the Component is being used.",type:"integer",minimum:0,format:"hidden"}})})
require.register("schemas/models/thang_type",function(e,require,t){var r,i,n,o,s,a,l,c,u
u=require("./../schemas")
l=require("./thang_component")
c=u.object({default:{kind:"Misc"}})
u.extendNamedProperties(c)
s=u.object({title:"Shape"},{fc:{type:"string",title:"Fill Color"},lf:{type:"array",title:"Linear Gradient Fill"},rf:{type:"array",title:"Radial Gradient Fill"},ls:{type:"array",title:"Linear Gradient Stroke"},p:{type:"string",title:"Path"},de:{type:"array",title:"Draw Ellipse"},sc:{type:"string",title:"Stroke Color"},ss:{type:"array",title:"Stroke Style"},t:u.array({},{type:"number",title:"Transform"}),m:{type:"string",title:"Mask"}})
i=u.object({format:"container"},{b:u.array({title:"Bounds"},{type:"number"}),c:u.array({title:"Children"},{anyOf:[{type:"string",title:"Shape Child"},u.object({title:"Container Child"}),{gn:{type:"string",title:"Global Name"},t:u.array({},{type:"number"})}]})})
o=u.object({},{bounds:u.array({title:"Bounds"},{type:"number"}),frameBounds:u.array({title:"Frame Bounds"},u.array({title:"Bounds"},{type:"number"})),shapes:u.array({},{bn:{type:"string",title:"Block Name"},gn:{type:"string",title:"Global Name"},im:{type:"boolean",title:"Is Mask"},m:{type:"string",title:"Uses Mask"}}),containers:u.array({},{bn:{type:"string",title:"Block Name"},gn:{type:"string",title:"Global Name"},t:u.array({},{type:"number"}),o:{type:"boolean",title:"Starts Hidden (_off)"},al:{type:"number",title:"Alpha"}}),animations:u.array({},{bn:{type:"string",title:"Block Name"},gn:{type:"string",title:"Global Name"},t:u.array({},{type:"number",title:"Transform"}),a:u.array({title:"Arguments"})}),tweens:u.array({},u.array({title:"Function Chain"},u.object({title:"Function Call"},{n:{type:"string",title:"Name"},a:u.array({title:"Arguments"})}))),graphics:u.array({},{bn:{type:"string",title:"Block Name"},p:{type:"string",title:"Path"}})})
n=u.object({title:"Positions",description:"Customize position offsets."},{registration:u.point2d({title:"Registration Point",description:"Action-specific registration point override."}),torso:u.point2d({title:"Torso Offset",description:"Action-specific torso offset override."}),mouth:u.point2d({title:"Mouth Offset",description:"Action-specific mouth offset override."}),aboveHead:u.point2d({title:"Above Head Offset",description:"Action-specific above-head offset override."})})
r=u.object({},{animation:{type:"string",description:"Raw animation being sourced",format:"raw-animation"},container:{type:"string",description:"Name of the container to show"},relatedActions:u.object({},{begin:{$ref:"#/definitions/action"},end:{$ref:"#/definitions/action"},main:{$ref:"#/definitions/action"},fore:{$ref:"#/definitions/action"},back:{$ref:"#/definitions/action"},side:{$ref:"#/definitions/action"},"?0?011?11?11":{$ref:"#/definitions/action",title:"NW corner"},"?0?11011?11?":{$ref:"#/definitions/action",title:"NE corner, flipped"},"?0?111111111":{$ref:"#/definitions/action",title:"N face"},"?11011011?0?":{$ref:"#/definitions/action",title:"SW corner, top"},"11?11?110?0?":{$ref:"#/definitions/action",title:"SE corner, top, flipped"},"?11011?0????":{$ref:"#/definitions/action",title:"SW corner, bottom"},"11?110?0????":{$ref:"#/definitions/action",title:"SE corner, bottom, flipped"},"?11011?11?11":{$ref:"#/definitions/action",title:"W face"},"11?11011?11?":{$ref:"#/definitions/action",title:"E face, flipped"},"011111111111":{$ref:"#/definitions/action",title:"NW elbow"},110111111111:{$ref:"#/definitions/action",title:"NE elbow, flipped"},"111111111?0?":{$ref:"#/definitions/action",title:"S face, top"},"111111?0????":{$ref:"#/definitions/action",title:"S face, bottom"},111111111011:{$ref:"#/definitions/action",title:"SW elbow, top"},111111111110:{$ref:"#/definitions/action",title:"SE elbow, top, flipped"},"111111011?11":{$ref:"#/definitions/action",title:"SW elbow, bottom"},"11111111011?":{$ref:"#/definitions/action",title:"SE elbow, bottom, flipped"},111111111111:{$ref:"#/definitions/action",title:"Middle"}}),loops:{type:"boolean"},speed:{type:"number"},goesTo:{type:"string",description:"Action (animation?) to which we switch after this animation."},frames:{type:"string",pattern:"^[0-9,]+$",description:"Manually way to specify frames."},framerate:{type:"number",description:"Get this from the HTML output."},positions:n,scale:{title:"Scale",type:"number"},flipX:{title:"Flip X",type:"boolean",description:"Flip this animation horizontally?"},flipY:{title:"Flip Y",type:"boolean",description:"Flip this animation vertically?"}})
a=u.sound({delay:{type:"number"}})
_.extend(c.properties,{raw:u.object({title:"Raw Vector Data",default:{shapes:{},containers:{},animations:{}}},{shapes:u.object({title:"Shapes",additionalProperties:s}),containers:u.object({title:"Containers",additionalProperties:i}),animations:u.object({title:"Animations",additionalProperties:o})}),kind:u.shortString({enum:["Unit","Floor","Wall","Doodad","Misc","Mark","Item","Hero","Missile"],default:"Misc",title:"Kind"}),terrains:u.array({title:"Terrains",description:"If specified, limits this ThangType to levels with matching terrains.",uniqueItems:true},u.terrainString),gems:{type:"integer",minimum:0,title:"Gem Cost",description:"How many gems this item or hero costs."},subscriber:{type:"boolean",title:"Subscriber",description:"This item is for subscribers only."},heroClass:{type:"string",enum:["Warrior","Ranger","Wizard"],title:"Hero Class",description:"What class this is (if a hero) or is restricted to (if an item). Leave undefined for most items."},tier:{type:"number",minimum:0,title:"Tier",description:"What tier (fractional) this item or hero is in."},actions:u.object({title:"Actions",additionalProperties:{$ref:"#/definitions/action"}}),soundTriggers:u.object({title:"Sound Triggers",additionalProperties:u.array({},{$ref:"#/definitions/sound"})},{say:u.object({format:"slug-props",additionalProperties:{$ref:"#/definitions/sound"}},{defaultSimlish:u.array({},{$ref:"#/definitions/sound"}),swearingSimlish:u.array({},{$ref:"#/definitions/sound"})})}),rotationType:{title:"Rotation",type:"string",enum:["isometric","fixed","free"]},matchWorldDimensions:{title:"Match World Dimensions",type:"boolean"},shadow:{title:"Shadow Diameter",type:"number",format:"meters",description:"Shadow diameter in meters"},description:{type:"string",format:"markdown",title:"Description"},layerPriority:{title:"Layer Priority",type:"integer",description:"Within its layer, sprites are sorted by layer priority, then y, then z."},scale:{title:"Scale",type:"number"},spriteType:{enum:["singular","segmented"],title:"Sprite Type"},positions:n,raster:{type:"string",format:"image-file",title:"Raster Image"},rasterIcon:{type:"string",format:"image-file",title:"Raster Image Icon"},containerIcon:{type:"string"},poseImage:{type:"string",format:"image-file",title:"Pose Image"},featureImages:u.object({title:"Hero Doll Images"},{body:{type:"string",format:"image-file",title:"Body"},head:{type:"string",format:"image-file",title:"Head"},hair:{type:"string",format:"image-file",title:"Hair"},thumb:{type:"string",format:"image-file",title:"Thumb"},wizardHand:{type:"string",format:"image-file",title:"Wizard Hand"}}),dollImages:u.object({title:"Paper Doll Images"},{male:{type:"string",format:"image-file",title:"Male"},female:{type:"string",format:"image-file",title:"Female"},maleThumb:{type:"string",format:"image-file",title:"Thumb (Male)"},femaleThumb:{type:"string",format:"image-file",title:"Thumb (Female)"},maleRanger:{type:"string",format:"image-file",title:"Glove (Male Ranger)"},maleRangerThumb:{type:"string",format:"image-file",title:"Thumb (Male Ranger)"},femaleRanger:{type:"string",format:"image-file",title:"Glove (Female Ranger)"},femaleRangerThumb:{type:"string",format:"image-file",title:"Thumb (Female Ranger)"},maleBack:{type:"string",format:"image-file",title:"Male Back"},femaleBack:{type:"string",format:"image-file",title:"Female Back"},pet:{type:"string",format:"image-file",title:"Pet"}}),colorGroups:u.object({title:"Color Groups",additionalProperties:{type:"array",format:"thang-color-group",items:{type:"string"}}}),snap:u.object({title:"Snap",description:"In the level editor, snap positioning to these intervals.",required:["x","y"],default:{x:4,y:4}},{x:{title:"Snap X",type:"number",description:"Snap to this many meters in the x-direction."},y:{title:"Snap Y",type:"number",description:"Snap to this many meters in the y-direction."}}),components:u.array({title:"Components",description:"Thangs are configured by changing the Components attached to them.",uniqueItems:true,format:"thang-components-array"},l),i18n:{type:"object",format:"i18n",props:["name","description","extendedName","unlockLevelName","soundTriggers"],description:"Help translate this ThangType's name and description."},extendedName:{type:"string",title:"Extended Hero Name",description:'The long form of the hero\'s name. Ex.: "Captain Anya Weston".'},unlockLevelName:{type:"string",title:"Unlock Level Name",description:"The name of the level in which the hero is unlocked."},tasks:u.array({title:"Tasks",description:"Tasks to be completed for this ThangType."},u.task),prerenderedSpriteSheetData:u.array({title:"Prerendered SpriteSheet Data"},u.object({title:"SpriteSheet"},{actionNames:{type:"array"},animations:{type:"object",description:"Third EaselJS SpriteSheet animations format",additionalProperties:{description:"EaselJS animation",type:"object",properties:{frames:{type:"array"},next:{type:["string","null"]},speed:{type:"number"}}}},colorConfig:u.object({additionalProperties:u.colorConfig()}),colorLabel:{enum:["red","green","blue"]},frames:{type:"array",description:"Second EaselJS SpriteSheet frames format",items:{type:"array",items:[{type:"number",title:"x"},{type:"number",title:"y"},{type:"number",title:"width"},{type:"number",title:"height"},{type:"number",title:"imageIndex"},{type:"number",title:"regX"},{type:"number",title:"regY"}]}},image:{type:"string",format:"image-file"},resolutionFactor:{type:"number"},spriteType:{enum:["singular","segmented"],title:"Sprite Type"}})),restricted:{type:"string",title:"Restricted",description:"If set, this ThangType will only be accessible by admins and whoever it is restricted to."}})
c.required=[]
c["default"]={raw:{}}
c.definitions={action:r,sound:a}
u.extendBasicProperties(c,"thang.type")
u.extendSearchableProperties(c)
u.extendVersionedProperties(c,"thang.type")
u.extendPatchableProperties(c)
u.extendTranslationCoverageProperties(c)
t.exports=c})
require.register("schemas/models/trial_request.schema",function(e,require,t){var r,i
i=require("./../schemas")
r=i.object({title:"Trial request",required:["type"]})
_.extend(r.properties,{applicant:i.objectId({links:[{rel:"extra",href:"/db/user/{($)}"}]}),created:i.date(),prepaidCode:i.objectId(),reviewDate:i.date({readOnly:true}),reviewer:i.objectId({links:[{rel:"extra",href:"/db/user/{($)}"}]}),properties:{type:"object",description:"Data specific to this request."},status:{type:"string",enum:["submitted","approved","denied"]},type:{type:"string",enum:["course","subscription"]}})
i.extendBasicProperties(r,"TrialRequest")
t.exports=r})
require.register("schemas/models/user-polls-record.schema",function(e,require,t){var r,i
i=require("./../schemas")
r=i.object({title:"UserPollsRecord"})
_.extend(r.properties,{user:i.stringID({links:[{rel:"extra",href:"/db/user/{($)}"}]}),polls:{type:"object",additionalProperties:i.shortString({pattern:"^[a-z0-9-]+$"})},rewards:{type:"object",additionalProperties:i.object({},{random:{type:"number",minimum:0,maximum:1},level:{type:"integer",minimum:1}})},level:{type:"integer",minimum:1,description:"The player level when last saved."},changed:i.date({title:"Changed",readOnly:true})})
i.extendBasicProperties(r,"user-polls-record")
t.exports=r})
require.register("schemas/models/user",function(e,require,t){var r,i,n,o,s,a,l,c,u
i=require("./../schemas")
n=["announcement","tester","level_creator","developer","article_editor","translator","support","notification"]
r=i.object({title:"User",default:{visa:"Authorized to work in the US",music:true,name:"Anonymous",autocastDelay:5e3,emails:{},permissions:[],anonymous:true,points:0,preferredLanguage:"en-US",aceConfig:{},simulatedBy:0,simulatedFor:0,jobProfile:{},earned:{heroes:[],items:[],levels:[],gems:0},purchased:{heroes:[],items:[],levels:[],gems:0}}})
i.extendNamedProperties(r)
s={title:"Phone screened",type:"boolean",description:"Whether the candidate has been phone screened."}
l={title:"School",type:"string",enum:["Top School","Other"]}
o={title:"Location",type:"string",enum:["Bay Area","New York","Other US","International"]}
a={title:"Role",type:"string",enum:["Web Developer","Software Developer","Mobile Developer"]}
c={title:"Seniority",type:"string",enum:["College Student","Recent Grad","Junior","Senior"]}
u=i.shortString({title:"US Work Status",description:"Are you authorized to work in the US, or do you need visa sponsorship? (If you live in Canada or Australia, mark authorized.)",enum:["Authorized to work in the US","Need visa sponsorship"]})
_.extend(r.properties,{email:i.shortString({title:"Email",format:"email"}),emailVerified:{type:"boolean"},iosIdentifierForVendor:i.shortString({format:"hidden"}),firstName:i.shortString({title:"First Name"}),lastName:i.shortString({title:"Last Name"}),gender:{type:"string"},ageRange:{type:"string"},password:i.passwordString,passwordReset:{type:"string"},photoURL:{type:"string",format:"image-file",title:"Profile Picture",description:"Upload a 256x256px or larger image to serve as your profile picture."},facebookID:i.shortString({title:"Facebook ID"}),githubID:{type:"integer",title:"GitHub ID"},gplusID:i.shortString({title:"G+ ID"}),cleverID:i.shortString({title:"Clever ID"}),oAuthIdentities:{description:"List of OAuth identities this user has.",type:"array",items:{description:"A single OAuth identity",type:"object",properties:{provider:i.objectId(),id:{type:"string",description:"The service provider's id for the user"}}}},clientCreator:i.objectId({description:"Client which created this user"}),wizardColor1:i.pct({title:"Wizard Clothes Color"}),volume:i.pct({title:"Volume"}),music:{type:"boolean"},autocastDelay:{type:"integer"},lastLevel:{type:"string"},heroConfig:i.HeroConfigSchema,emailSubscriptions:i.array({uniqueItems:true},{enum:n}),emails:i.object({title:"Email Settings",default:{generalNews:{enabled:true},anyNotes:{enabled:true},recruitNotes:{enabled:true}}},{generalNews:{$ref:"#/definitions/emailSubscription"},adventurerNews:{$ref:"#/definitions/emailSubscription"},ambassadorNews:{$ref:"#/definitions/emailSubscription"},archmageNews:{$ref:"#/definitions/emailSubscription"},artisanNews:{$ref:"#/definitions/emailSubscription"},diplomatNews:{$ref:"#/definitions/emailSubscription"},teacherNews:{$ref:"#/definitions/emailSubscription"},scribeNews:{$ref:"#/definitions/emailSubscription"},anyNotes:{$ref:"#/definitions/emailSubscription"},recruitNotes:{$ref:"#/definitions/emailSubscription"},employerNotes:{$ref:"#/definitions/emailSubscription"},oneTimes:i.array({title:"One-time emails"},i.object({title:"One-time email",required:["type","email"]},{type:i.shortString(),email:i.shortString(),sent:i.date()}))}),permissions:i.array({},i.shortString()),dateCreated:i.date({title:"Date Joined"}),anonymous:{type:"boolean"},testGroupNumber:{type:"integer",minimum:0,maximum:256,exclusiveMaximum:true},mailChimp:{type:"object"},hourOfCode:{type:"boolean"},hourOfCodeComplete:{type:"boolean"},lastIP:{type:"string"},createdOnHost:{type:"string"},emailLower:i.shortString(),nameLower:i.shortString(),passwordHash:{type:"string",maxLength:256},emailHash:{type:"string"},preferredLanguage:{enum:[null].concat(i.getLanguageCodeArray())},signedCLA:i.date({title:"Date Signed the CLA"}),wizard:i.object({},{colorConfig:i.object({additionalProperties:i.colorConfig()})}),aceConfig:i.object({default:{language:"python",keyBindings:"default",invisibles:false,indentGuides:false,behaviors:false,liveCompletion:true}},{language:{type:"string",enum:["python","javascript","coffeescript","clojure","lua","java","io"]},keyBindings:{type:"string",enum:["default","vim","emacs"]},invisibles:{type:"boolean"},indentGuides:{type:"boolean"},behaviors:{type:"boolean"},liveCompletion:{type:"boolean"}}),simulatedBy:{type:"integer",minimum:0},simulatedFor:{type:"integer",minimum:0},jobProfile:i.object({title:"Job Profile",default:{active:false,lookingFor:"Full-time",jobTitle:"Software Developer",city:"Defaultsville, CA",country:"USA",skills:["javascript"],shortDescription:"Programmer seeking to build great software.",longDescription:"* I write great code.\n* You need great code?\n* Great!"}},{lookingFor:{title:"Looking For",type:"string",enum:["Full-time","Part-time","Remote","Contracting","Internship"],description:"What kind of developer position do you want?"},jobTitle:{type:"string",maxLength:50,title:"Desired Job Title",description:'What role are you looking for? Ex.: "Full Stack Engineer", "Front-End Developer", "iOS Developer"'},active:{title:"Open to Offers",type:"boolean",description:"Want interview offers right now?"},updated:i.date({title:"Last Updated",description:"How fresh your profile appears to employers. Profiles go inactive after 4 weeks."}),name:i.shortString({title:"Name",description:'Name you want employers to see, like "Nick Winter".'}),city:i.shortString({title:"City",description:'City you want to work in (or live in now), like "San Francisco" or "Lubbock, TX".',format:"city"}),country:i.shortString({title:"Country",description:'Country you want to work in (or live in now), like "USA" or "France".',format:"country"}),skills:i.array({title:"Skills",description:"Tag relevant developer skills in order of proficiency",maxItems:30,uniqueItems:true},{type:"string",minLength:1,maxLength:50,description:'Ex.: "objective-c", "mongodb", "rails", "android", "javascript"',format:"skill"}),experience:{type:"integer",title:"Years of Experience",minimum:0,description:"How many years of professional experience (getting paid) developing software do you have?"},shortDescription:{type:"string",maxLength:140,title:"Short Description",description:"Who are you, and what are you looking for? 140 characters max."},longDescription:{type:"string",maxLength:600,title:"Description",description:"Describe yourself to potential employers. Keep it short and to the point. We recommend outlining the position that would most interest you. Tasteful markdown okay; 600 characters max.",format:"markdown"},visa:u,work:i.array({title:"Work Experience",description:"List your relevant work experience, most recent first."},i.object({title:"Job",description:"Some work experience you had.",required:["employer","role","duration"]},{employer:i.shortString({title:"Employer",description:"Name of your employer."}),role:i.shortString({title:"Job Title",description:"What was your job title or role?"}),duration:i.shortString({title:"Duration",description:'When did you hold this gig? Ex.: "Feb 2013 - present".'}),description:{type:"string",title:"Description",description:"What did you do there? (140 chars; optional)",maxLength:140}})),education:i.array({title:"Education",description:"List your academic ordeals."},i.object({title:"Ordeal",description:"Some education that befell you.",required:["school","degree","duration"]},{school:i.shortString({title:"School",description:"Name of your school."}),degree:i.shortString({title:"Degree",description:"What was your degree and field of study? Ex. Ph.D. Human-Computer Interaction (incomplete)"}),duration:i.shortString({title:"Dates",description:'When? Ex.: "Aug 2004 - May 2008".'}),description:{type:"string",title:"Description",description:"Highlight anything about this educational experience. (140 chars; optional)",maxLength:140}})),projects:i.array({title:"Projects (Top 3)",description:"Highlight your projects to amaze employers.",maxItems:3},i.object({title:"Project",description:"A project you created.",required:["name","description","picture"],default:{name:"My Project",description:"A project I worked on.",link:"http://example.com",picture:""}},{name:i.shortString({title:"Project Name",description:"What was the project called?"}),description:{type:"string",title:"Description",description:"Briefly describe the project.",maxLength:400,format:"markdown"},picture:{type:"string",title:"Picture",format:"image-file",description:"Upload a 230x115px or larger image showing off the project."},link:i.url({title:"Link",description:"Link to the project."})})),links:i.array({title:"Personal and Social Links",description:"Link any other sites or profiles you want to highlight, like your GitHub, your LinkedIn, or your blog."},i.object({title:"Link",description:"A link to another site you want to highlight, like your GitHub, your LinkedIn, or your blog.",required:["name","link"],default:{link:"http://example.com"}},{name:{type:"string",maxLength:30,title:"Link Name",description:'What are you linking to? Ex: "Personal Website", "GitHub"',format:"link-name"},link:i.url({title:"Link",description:"The URL."})})),photoURL:{type:"string",format:"image-file",title:"Profile Picture",description:"Upload a 256x256px or larger image if you want to show a different profile picture to employers than your normal avatar."},curated:i.object({title:"Curated",required:["shortDescription","mainTag","location","education","workHistory","phoneScreenFilter","schoolFilter","locationFilter","roleFilter","seniorityFilter"]},{shortDescription:{title:"Short description",description:"A sentence or two describing the candidate",type:"string"},mainTag:{title:"Main tag",description:"A main tag to describe this candidate",type:"string"},location:{title:"Location",description:"The CURRENT location of the candidate",type:"string"},education:{title:"Education",description:"The main educational institution of the candidate",type:"string"},workHistory:i.array({title:"Work history",description:"One or two places the candidate has worked",type:"array"},{title:"Workplace",type:"string"}),phoneScreenFilter:s,schoolFilter:l,locationFilter:o,roleFilter:a,seniorityFilter:c,featured:{title:"Featured",type:"boolean",description:"Should this candidate be prominently featured on the site?"}})}),jobProfileApproved:{title:"Job Profile Approved",type:"boolean",description:"Whether your profile has been approved by CodeCombat."},jobProfileApprovedDate:i.date({title:"Approved date",description:"The date that the candidate was approved"}),jobProfileNotes:{type:"string",maxLength:1e3,title:"Our Notes",description:"CodeCombat's notes on the candidate.",format:"markdown"},employerAt:i.shortString({description:"If given employer permissions to view job candidates, for which employer?"}),signedEmployerAgreement:i.object({},{linkedinID:i.shortString({title:"LinkedInID",description:"The user's LinkedIn ID when they signed the contract."}),date:i.date({title:"Date signed employer agreement"}),data:i.object({description:"Cached LinkedIn data slurped from profile.",additionalProperties:true})}),savedEmployerFilterAlerts:i.array({title:"Saved Employer Filter Alerts",description:"Employers can get emailed alerts whenever there are new candidates matching their filters"},i.object({title:"Saved filter set",description:"A saved filter set",required:["phoneScreenFilter","schoolFilter","locationFilter","roleFilter","seniorityFilter","visa"]},{phoneScreenFilter:{title:"Phone screen filter values",type:"array",items:{type:"boolean"}},schoolFilter:{title:"School filter values",type:"array",items:{type:l.type,enum:l["enum"]}},locationFilter:{title:"Location filter values",type:"array",items:{type:o.type,enum:o["enum"]}},roleFilter:{title:"Role filter values",type:"array",items:{type:a.type,enum:a["enum"]}},seniorityFilter:{title:"Seniority filter values",type:"array",items:{type:a.type,enum:c["enum"]}},visa:{title:"Visa filter values",type:"array",items:{type:u.type,enum:u["enum"]}}})),points:{type:"number"},activity:{type:"object",description:"Summary statistics about user activity",additionalProperties:i.activity},stats:i.object({additionalProperties:false},{gamesCompleted:i.int(),articleEdits:i.int(),levelEdits:i.int(),levelSystemEdits:i.int(),levelComponentEdits:i.int(),thangTypeEdits:i.int(),patchesSubmitted:i.int({description:"Amount of patches submitted, not necessarily accepted"}),patchesContributed:i.int({description:"Amount of patches submitted and accepted"}),patchesAccepted:i.int({description:"Amount of patches accepted by the user as owner"}),totalTranslationPatches:i.int(),totalMiscPatches:i.int(),articleTranslationPatches:i.int(),articleMiscPatches:i.int(),levelTranslationPatches:i.int(),levelMiscPatches:i.int(),levelComponentTranslationPatches:i.int(),levelComponentMiscPatches:i.int(),levelSystemTranslationPatches:i.int(),levelSystemMiscPatches:i.int(),thangTypeTranslationPatches:i.int(),thangTypeMiscPatches:i.int(),achievementTranslationPatches:i.int(),achievementMiscPatches:i.int(),pollTranslationPatches:i.int(),pollMiscPatches:i.int(),campaignTranslationPatches:i.int(),campaignMiscPatches:i.int(),courseTranslationPatches:i.int(),courseMiscPatches:i.int(),courseEdits:i.int(),concepts:{type:"object",additionalProperties:i.int(),description:"Number of levels completed using each programming concept."}}),earned:i.RewardSchema("earned by achievements"),purchased:i.RewardSchema("purchased with gems or money"),deleted:{type:"boolean"},dateDeleted:i.date(),spent:{type:"number"},stripeCustomerID:{type:"string"},stripe:i.object({},{customerID:{type:"string"},planID:{enum:["basic"],description:"Determines if a user has or wants to subscribe"},subscriptionID:{type:"string",description:"Determines if a user is subscribed"},token:{type:"string"},couponID:{type:"string"},free:{type:["boolean","string"],format:"date-time",description:"Type string is subscription end date"},prepaidCode:i.shortString({description:"Prepaid code to apply to sub purchase"}),subscribeEmails:i.array({description:"Input for subscribing other users"},i.shortString()),unsubscribeEmail:{type:"string",description:"Input for unsubscribing a sponsored user"},recipients:i.array({title:"Recipient subscriptions owned by this user"},i.object({required:["userID","subscriptionID"]},{userID:i.objectId({description:"User ID of recipient"}),subscriptionID:{type:"string"},couponID:{type:"string"}})),sponsorID:i.objectId({description:"User ID that owns this user's subscription"}),sponsorSubscriptionID:{type:"string",description:"Sponsor aggregate subscription used to pay for all recipient subs"}}),siteref:{type:"string"},referrer:{type:"string"},country:{type:"string"},clans:i.array({},i.objectId()),courseInstances:i.array({},i.objectId()),currentCourse:i.object({},{courseID:i.objectId({}),courseInstanceID:i.objectId({})}),coursePrepaidID:i.objectId({description:"Prepaid which has paid for this user's course access"}),coursePrepaid:{type:"object",properties:{_id:i.objectId(),startDate:i.stringDate(),endDate:i.stringDate(),type:{type:["string","null"]},includedCourseIDs:{type:["array","null"],description:"courseIDs that this prepaid includes access to",items:i.objectId()}}},enrollmentRequestSent:{type:"boolean"},schoolName:{type:"string",description:'Deprecated string. Use "school" object instead.'},role:{type:"string",enum:["advisor","parent","principal","student","superintendent","teacher","technology coordinator"]},birthday:i.stringDate({title:"Birthday"}),lastAchievementChecked:i.stringDate({name:"Last Achievement Checked"}),israelId:{type:"string",description:"ID string used just for il.codecombat.com"},school:{type:"object",description:"Generic property for storing school information. Currently only used by Israel; if/when we use it for other purposes, think about how to keep the data consistent.",properties:{name:{type:"string"},city:{type:"string"},district:{type:"string"},state:{type:"string"},country:{type:"string"}}},lastAnnouncementSeen:{type:"number",description:"The highed announcement modal index displayed to the user."}})
i.extendBasicProperties(r,"user")
r.definitions={emailSubscription:i.object({default:{enabled:true,count:0}},{enabled:{type:"boolean"},lastSent:i.date(),count:{type:"integer"}})}
t.exports=r})
require.register("schemas/models/user_code_problem",function(e,require,t){var r,i
i=require("./../schemas")
r=i.object({title:"User Code Problem",description:"Data for a problem in user code."})
_.extend(r.properties,{creator:i.objectId({links:[{rel:"extra",href:"/db/user/{($)}"}]}),created:i.date({title:"Created",readOnly:true}),code:{type:"string"},codeSnippet:{type:"string"},errHint:{type:"string"},errId:{type:"string"},errLevel:{type:"string"},errMessage:{type:"string"},errMessageNoLineInfo:{type:"string"},errRange:{type:"array"},errType:{type:"string"},language:{type:"string"},levelID:{type:"string"}})
i.extendBasicProperties(r,"user.code.problem")
t.exports=r})
require.register("schemas/models/user_remark",function(e,require,t){var r,i
i=require("./../schemas")
r=i.object({title:"Remark",description:"Remarks on a user, point of contact, tasks."})
_.extend(r.properties,{user:i.objectId({links:[{rel:"extra",href:"/db/user/{($)}"}]}),contact:i.objectId({links:[{rel:"extra",href:"/db/user/{($)}"}]}),created:i.date({title:"Created",readOnly:true}),history:i.array({title:"History",description:"Records of our interactions with the user."},i.object({title:"Record"},{date:i.date({title:"Date"}),content:{title:"Content",type:"string",format:"markdown"}})),tasks:i.array({title:"Tasks",description:"Task entries: when to email the contact about something."},i.object({title:"Task"},{date:i.date({title:"Date"}),action:{title:"Action",type:"string"},status:{title:"Status",description:"The current status of the task",type:"string",enum:["Not started","In progress","Completed"]},notes:{title:"Notes",description:"Notes about the task in progress",type:"string",format:"markdown"}})),userName:{title:"Player Name",type:"string"},contactName:{title:"Contact Name",type:"string"}})
i.extendBasicProperties(r,"user.remark")
t.exports=r})
require.register("schemas/schemas",function(e,require,t){var r,i,n,o,s,a,l,c,u,p,d,h,m,g,f,y
i=require("./languages")
c=require("./concepts")
u=t.exports
a=function(e,t){if(t==null){return e}return _.extend(e,t)}
f="^(ht|f)tp(s?)://[0-9a-zA-Z]([-.w]*[0-9a-zA-Z])*(:(0-9)*)*(/?)([a-zA-Z0-9-.?,'/\\+&%$#_=]*)?$"
h="^/([a-zA-Z0-9-.?,'/\\+&%$#_=]*)?$"
u.object=function(e,t){return a({type:"object",additionalProperties:false,properties:t||{}},e)}
u.array=function(e,t){return a({type:"array",items:t||{}},e)}
u.shortString=function(e){return a({type:"string",maxLength:100},e)}
u.pct=function(e){return a({type:"number",maximum:1,minimum:0},e)}
u.passwordString={type:"string",maxLength:256,minLength:2,title:"Password"}
u.date=function(e){return a({type:["object","string"],format:"date-time"},e)}
u.stringDate=function(e){return a({type:["string"],format:"date-time"},e)}
u.objectId=function(e){return a({type:["object","string"]},e)}
u.stringID=function(e){return a({type:"string",minLength:24,maxLength:24},e)}
u.url=function(e){return a({type:"string",format:"url",pattern:f},e)}
u.path=function(e){return a({type:"string",pattern:h},e)}
u.int=function(e){return a({type:"integer"},e)}
u.float=function(e){return a({type:"number"},e)}
n=u.object({title:"Point",description:"An {x, y} coordinate point.",format:"point2d",required:["x","y"]},{x:{title:"x",description:"The x coordinate.",type:"number",default:15},y:{title:"y",description:"The y coordinate.",type:"number",default:20}})
u.point2d=function(e){return a(_.cloneDeep(n),e)}
o=u.object({format:"sound"},{mp3:{type:"string",format:"sound-file"},ogg:{type:"string",format:"sound-file"}})
u.sound=function(e){var t,r
t=_.cloneDeep(o)
for(r in e){t.properties[r]=e[r]}return t}
r=u.object({format:"color-sound"},{hue:{format:"range",type:"number",minimum:0,maximum:1},saturation:{format:"range",type:"number",minimum:0,maximum:1},lightness:{format:"range",type:"number",minimum:0,maximum:1}})
u.colorConfig=function(e){var t,i
t=_.cloneDeep(r)
for(i in e){t.properties[i]=e[i]}return t}
s=function(e){return{_id:u.objectId({links:[{rel:"self",href:"/db/"+e+"/{($)}"}],format:"hidden"}),__v:{title:"Mongoose Version",format:"hidden"}}}
u.extendBasicProperties=function(e,t){if(e.properties==null){e.properties={}}return _.extend(e.properties,s(t))}
d=function(){return{patches:u.array({title:"Patches"},{_id:u.objectId({links:[{rel:"db",href:"/db/patch/{($)}"}],title:"Patch ID",description:"A reference to the patch."}),status:{enum:["pending","accepted","rejected","cancelled"]}}),allowPatches:{type:"boolean"},watchers:u.array({title:"Watchers"},u.objectId({links:[{rel:"extra",href:"/db/user/{($)}"}]}))}}
u.extendPatchableProperties=function(e){if(e.properties==null){e.properties={}}return _.extend(e.properties,d())}
p=function(){return{name:u.shortString({title:"Name"}),slug:u.shortString({title:"Slug",format:"hidden"})}}
u.extendNamedProperties=function(e){if(e.properties==null){e.properties={}}return _.extend(e.properties,p())}
y=function(e){return{version:{default:{minor:0,major:0,isLatestMajor:true,isLatestMinor:true},format:"version",title:"Version",type:"object",readOnly:true,additionalProperties:false,properties:{major:{type:"number",minimum:0},minor:{type:"number",minimum:0},isLatestMajor:{type:"boolean"},isLatestMinor:{type:"boolean"}}},original:u.objectId({links:[{rel:"extra",href:"/db/"+e+"/{($)}"}],format:"hidden"}),parent:u.objectId({links:[{rel:"extra",href:"/db/"+e+"/{($)}"}],format:"hidden"}),creator:u.objectId({links:[{rel:"extra",href:"/db/user/{($)}"}],format:"hidden"}),created:u.date({title:"Created",readOnly:true}),commitMessage:{type:"string",maxLength:500,title:"Commit Message",readOnly:true}}}
u.extendVersionedProperties=function(e,t){if(e.properties==null){e.properties={}}return _.extend(e.properties,y(t))}
g=function(){return{index:{format:"hidden"}}}
u.extendSearchableProperties=function(e){if(e.properties==null){e.properties={}}return _.extend(e.properties,g())}
m=function(){return{permissions:{type:"array",items:{type:"object",additionalProperties:false,properties:{target:{},access:{type:"string",enum:["read","write","owner"]}}},format:"hidden"}}}
u.extendPermissionsProperties=function(e){if(e.properties==null){e.properties={}}return _.extend(e.properties,m())}
u.generateLanguageCodeArrayRegex=function(){return"^("+i.languageCodes.join("|")+")$"}
u.getLanguageCodeArray=function(){return i.languageCodes}
u.getLanguagesObject=function(){return i}
u.extendTranslationCoverageProperties=function(e){if(e.properties==null){e.properties={}}return e.properties.i18nCoverage={title:"i18n Coverage",type:"array",items:{type:"string"}}}
u.classNamePattern="^[A-Z][A-Za-z0-9]*$"
u.identifierPattern="^[a-z][A-Za-z0-9]*$"
u.constantPattern="^[A-Z0-9_]+$"
u.identifierOrConstantPattern="^([a-z][A-Za-z0-9]*|[A-Z0-9_]+)$"
u.FunctionArgumentSchema=u.object({title:"Function Argument",description:"Documentation entry for a function argument.",default:{name:"target",type:"object",optional:false,example:"this.getNearestEnemy()",description:"The target of this function."},required:["name","type","example","description"]},{name:{type:"string",pattern:u.identifierPattern,title:"Name",description:"Name of the function argument."},i18n:{type:"object",format:"i18n",props:["description"],description:"Help translate this argument"},type:u.shortString({title:"Type",description:"Intended type of the argument."}),optional:{title:"Optional",description:"Whether an argument may be omitted when calling the function",type:"boolean"},example:{oneOf:[{type:"object",title:"Language Examples",description:"Examples by code language.",additionalProperties:u.shortString({description:"Example value for the argument."}),format:"code-languages-object",default:{javascript:"",python:""}},u.shortString({title:"Example",description:"Example value for the argument."})]},description:{oneOf:[{type:"object",title:"Language Descriptions",description:"Example argument descriptions by code language.",additionalProperties:{type:"string",description:"Description of the argument.",maxLength:1e3},format:"code-languages-object",default:{javascript:"",python:""}},{title:"Description",type:"string",description:"Description of the argument.",maxLength:1e3}]},default:{title:"Default",description:"Default value of the argument. (Your code should set this.)",default:null}})
u.codeSnippet=u.object({description:"A language-specific code snippet"},{code:{type:"string",format:"code",title:"Snippet",default:"",description:"Code snippet. Use ${1:defaultValue} syntax to add flexible arguments"},tab:{type:"string",title:"Tab Trigger",description:"Tab completion text. Will be expanded to the snippet if typed and hit tab."}})
u.activity=u.object({description:"Stats on an activity"},{first:u.date(),last:u.date(),count:{type:"integer",minimum:0}})
u.terrainString=u.shortString({enum:["Grass","Dungeon","Indoor","Desert","Mountain","Glacier","Volcano"],title:"Terrain",description:"Which terrain type this is."})
u.HeroConfigSchema=u.object({description:"Which hero the player is using, equipped with what inventory."},{inventory:{type:"object",description:"The inventory of the hero: slots to item ThangTypes.",additionalProperties:u.objectId({description:"An item ThangType."})},thangType:u.objectId({links:[{rel:"db",href:"/db/thang.type/{($)}/version"}],title:"Thang Type",description:"The ThangType of the hero.",format:"thang-type"})})
u.RewardSchema=function(e){if(e==null){e="earned by achievements"}return{type:"object",additionalProperties:false,description:"Rewards "+e+".",properties:{heroes:u.array({uniqueItems:true,description:"Heroes "+e+"."},u.stringID({links:[{rel:"db",href:"/db/thang.type/{($)}/version"}],title:"Hero ThangType",description:"A reference to the earned hero ThangType.",format:"thang-type"})),items:u.array({uniqueItems:true,description:"Items "+e+"."},u.stringID({links:[{rel:"db",href:"/db/thang.type/{($)}/version"}],title:"Item ThangType",description:"A reference to the earned item ThangType.",format:"thang-type"})),levels:u.array({uniqueItems:true,description:"Levels "+e+"."},u.stringID({links:[{rel:"db",href:"/db/level/{($)}/version"}],title:"Level",description:"A reference to the earned Level.",format:"latest-version-original-reference"})),gems:u.float({description:"Gems "+e+"."})}}}
u.task=u.object({title:"Task",description:"A task to be completed",format:"task",default:{name:"TODO",complete:false}},{name:{title:"Name",description:"What must be done?",type:"string"},complete:{title:"Complete",description:"Whether this task is done.",type:"boolean",format:"checkbox"}})
u.concept={type:"string",enum:function(){var e,t,r
r=[]
for(e=0,t=c.length;e<t;e++){l=c[e]
r.push(l.concept)}return r}(),format:"concept"}})
require.register("schemas/subscriptions/auth",function(e,require,t){var r
r=require("schemas/schemas")
t.exports={"auth:me-synced":r.object({required:["me"]},{me:{type:"object"}}),"auth:signed-up":r.object({}),"auth:logging-out":r.object({}),"auth:linkedin-api-loaded":r.object({}),"auth:log-in-with-github":r.object({})}})
require.register("schemas/subscriptions/bus",function(e,require,t){var r
r=require("schemas/schemas")
t.exports={"bus:connecting":r.object({title:"Bus Connecting",description:"Published when a Bus starts connecting"},{bus:{$ref:"bus"}}),"bus:connected":r.object({title:"Bus Connected",description:"Published when a Bus has connected"},{bus:{$ref:"bus"}}),"bus:disconnected":r.object({title:"Bus Disconnected",description:"Published when a Bus has disconnected"},{bus:{$ref:"bus"}}),"bus:new-message":r.object({title:"Message sent",description:"A new message was sent"},{message:{type:"object"},bus:{$ref:"bus"}}),"bus:player-joined":r.object({title:"Player joined",description:"A new player has joined"},{player:{type:"object"},bus:{$ref:"bus"}}),"bus:player-left":r.object({title:"Player left",description:"A player has left"},{player:{type:"object"},bus:{$ref:"bus"}}),"bus:player-states-changed":r.object({title:"Player state changes",description:"State of the players has changed"},{states:{type:"object",additionalProperties:{type:"object"}},bus:{$ref:"bus"}})}})
require.register("schemas/subscriptions/editor",function(e,require,t){var r
r=require("schemas/schemas")
t.exports={"editor:campaign-analytics-modal-closed":r.object({title:"Campaign editor analytics modal closed"},{targetLevelSlug:{type:"string"}}),"editor:view-switched":r.object({title:"Level View Switched",description:"Published whenever the view switches"},{targetURL:{type:"string"}}),"editor:level-component-editing-ended":r.object({required:["component"]},{component:{type:"object"}}),"editor:edit-level-system":r.object({required:["original","majorVersion"]},{original:{type:"string"},majorVersion:{type:"integer",minimum:0}}),"editor:level-system-added":r.object({required:["system"]},{system:{type:"object"}}),"editor:level-system-editing-ended":r.object({required:["system"]},{system:{type:"object"}}),"editor:edit-level-thang":r.object({required:["thangID"]},{thangID:{type:"string"}}),"editor:level-thang-edited":r.object({required:["thangData","oldPath"]},{thangData:{type:"object"},oldPath:{type:"string"}}),"editor:level-thang-done-editing":r.object({required:["thangData","oldPath"]},{thangData:{type:"object"},oldPath:{type:"string"}}),"editor:thangs-edited":r.object({required:["thangs"]},{thangs:r.array({},{type:"object"})}),"editor:level-loaded":r.object({required:["level"]},{level:{type:"object"}}),"level:reload-from-data":r.object({required:["level","supermodel"]},{level:{type:"object"},supermodel:{type:"object"}}),"level:reload-thang-type":r.object({required:["thangType"]},{thangType:{type:"object"}}),"editor:random-terrain-generated":r.object({required:["thangs","terrain"]},{thangs:r.array({},{type:"object"}),terrain:r.terrainString}),"editor:terrain-changed":r.object({required:["terrain"]},{terrain:{oneOf:[r.terrainString,{type:["null","undefined"]}]}}),"editor:thang-type-kind-changed":r.object({required:["kind"]},{kind:{type:"string"}}),"editor:thang-type-color-groups-changed":r.object({required:["colorGroups"]},{colorGroups:{type:"object"}})}})
require.register("schemas/subscriptions/errors",function(e,require,t){var r
r=require("schemas/schemas")
t.exports={"errors:server-error":r.object({required:["response"]},{response:{type:"object"}})}})
require.register("schemas/subscriptions/god",function(e,require,t){var r,i,n
r=require("schemas/schemas")
i={type:"object",additionalProperties:{type:"object",required:["status"],properties:{status:{oneOf:[{type:"null"},{type:"string",enum:["success","failure","incomplete"]}]},keyFrame:{oneOf:[{type:"integer",minimum:0},{type:"string",enum:["end"]}]},team:{type:["null","string","undefined"]}}}}
n=r.object({required:["world","firstWorld","goalStates","team","firstChangedFrame"]},{world:{type:"object"},firstWorld:{type:"boolean"},goalStates:i,team:{type:"string"},firstChangedFrame:{type:"integer",minimum:0},finished:{type:"boolean"},god:{type:"object"}})
t.exports={"god:user-code-problem":r.object({required:["problem","god"]},{god:{type:"object"},problem:{type:"object"}}),"god:non-user-code-problem":r.object({required:["problem","god"]},{god:{type:"object"},problem:{type:"object"}}),"god:infinite-loop":r.object({required:["firstWorld","god"]},{god:{type:"object"},firstWorld:{type:"boolean"},nonUserCodeProblem:{type:"boolean"}}),"god:new-world-created":n,"god:streaming-world-updated":n,"god:new-html-goal-states":r.object({required:["goalStates","overallStatus"]},{goalStates:i,overallStatus:{type:["string","null"],enum:["success","failure","incomplete",null]}}),"god:goals-calculated":r.object({required:["goalStates","god"]},{god:{type:"object"},goalStates:i,preload:{type:"boolean"},overallStatus:{type:["string","null"],enum:["success","failure","incomplete",null]},totalFrames:{type:["integer","undefined"]},lastFrameHash:{type:["number","undefined"]},simulationFrameRate:{type:["number","undefined"]}}),"god:world-load-progress-changed":r.object({required:["progress","god"]},{god:{type:"object"},progress:{type:"number",minimum:0,maximum:1}}),"god:debug-world-load-progress-changed":r.object({required:["progress","god"]},{god:{type:"object"},progress:{type:"number",minimum:0,maximum:1}}),"god:debug-value-return":r.object({required:["key","god"]},{god:{type:"object"},key:{type:"string"},value:{}})}})
require.register("schemas/subscriptions/ipad",function(e,require,t){var r
r=require("schemas/schemas")
t.exports={"ipad:products":r.object({required:["products"]},{products:r.array({},r.object({},{price:{type:"string"},id:{type:"string"}}))}),"ipad:language-chosen":r.object({},{language:{type:"string"}}),"ipad:iap-complete":r.object({},{productID:{type:"string"}}),"ipad:memory-warning":r.object({})}})
require.register("schemas/subscriptions/misc",function(e,require,t){var r
r=require("schemas/schemas")
t.exports={"application:idle-changed":r.object({},{idle:{type:"boolean"},type:{enum:["activity","visibility"]}}),"view-visibility:away":r.object({}),"view-visibility:away-back":r.object({}),"view-visibility:hidden":r.object({}),"view-visibility:visible":r.object({}),"application:error":r.object({},{message:{type:"string"},stack:{type:"string"}}),"audio-player:loaded":r.object({required:["sender"]},{sender:{type:"object"}}),"audio-player:play-sound":r.object({required:["trigger"]},{trigger:{type:"string"},volume:{type:"number",minimum:0,maximum:1}}),"music-player:play-music":r.object({required:["play"]},{play:{type:"boolean"},file:{type:"string"},delay:{type:"integer",minimum:0,format:"milliseconds"}}),"music-player:enter-menu":r.object({required:[]},{terrain:{type:"string"}}),"music-player:exit-menu":r.object({}),"modal:opened":r.object({}),"modal:closed":r.object({}),"modal:open-modal-view":r.object({required:["modalPath"]},{modalPath:{type:"string"}}),"router:navigate":r.object({required:["route"]},{route:{type:"string"},view:{type:"object"},viewClass:{type:["function","string"]},viewArgs:{type:"array"}}),"router:navigated":r.object({required:["route"]},{route:{type:"string"}}),"achievements:new":r.object({required:["earnedAchievements"]},{earnedAchievements:{type:"object"}}),"ladder:game-submitted":r.object({required:["session","level"]},{session:{type:"object"},level:{type:"object"}}),"buy-gems-modal:update-products":{},"buy-gems-modal:purchase-initiated":r.object({required:["productID"]},{productID:{type:"string"}}),"subscribe-modal:subscribed":r.object({}),"stripe:received-token":r.object({required:["token"]},{token:{type:"object",properties:{id:{type:"string"}}}}),"store:item-purchased":r.object({required:["item","itemSlug"]},{item:{type:"object"},itemSlug:{type:"string"}}),"store:hero-purchased":r.object({required:["hero","heroSlug"]},{hero:{type:"object"},heroSlug:{type:"string"}}),"application:service-loaded":r.object({required:["service"]},{service:{type:"string"}}),"test:update":r.object({},{state:{type:"string"}})}})
require.register("schemas/subscriptions/play",function(e,require,t){var r
r=require("schemas/schemas")
t.exports={"level:session-will-save":r.object({required:["session"]},{session:{type:"object"}}),"level:shift-space-pressed":r.object({}),"level:escape-pressed":r.object({}),"level:enable-controls":r.object({},{controls:r.array({},r.shortString())}),"level:disable-controls":r.object({},{controls:r.array({},r.shortString())}),"level:set-letterbox":r.object({},{on:{type:"boolean"}}),"level:started":r.object({}),"level:set-debug":r.object({required:["debug"]},{debug:{type:"boolean"}}),"level:restart":r.object({}),"level:restarted":r.object({}),"level:set-volume":r.object({required:["volume"]},{volume:{type:"number",minimum:0,maximum:1}}),"level:set-time":r.object({},{time:{type:"number",minimum:0},ratio:{type:"number",minimum:0,maximum:1},ratioOffset:{type:"number"},frameOffset:{type:"number"},scrubDuration:{type:"number",minimum:0}}),"level:select-sprite":r.object({},{thangID:{type:["string","null","undefined"]},spellName:{type:["string","null","undefined"]}}),"level:set-playing":r.object({required:["playing"]},{playing:{type:"boolean"}}),"level:team-set":r.object({required:["team"]},{team:r.shortString()}),"level:docs-shown":r.object({}),"level:docs-hidden":r.object({}),"level:flag-color-selected":r.object({},{color:{oneOf:[{type:"null"},{type:"string",enum:["green","black","violet"],description:"The flag color to place next, or omitted/null if deselected."}]},pos:r.object({required:["x","y"]},{x:{type:"number"},y:{type:"number"}})}),"level:flag-updated":r.object({required:["player","color","time","active"]},{player:{type:"string"},team:{type:"string"},color:{type:"string",enum:["green","black","violet"]},time:{type:"number",minimum:0},active:{type:"boolean"},pos:r.object({required:["x","y"]},{x:{type:"number"},y:{type:"number"}}),source:{type:"string",enum:["click","code"]}}),"level:next-game-pressed":r.object({}),"level:loaded":r.object({required:["level"]},{level:{type:"object"},team:{type:["string","null","undefined"]}}),"level:session-loaded":r.object({required:["level","session"]},{level:{type:"object"},session:{type:"object"}}),"level:loading-view-unveiling":r.object({}),"level:loading-view-unveiled":r.object({required:["view"]},{view:{type:"object"}}),"playback:manually-scrubbed":r.object({required:["ratio"]},{ratio:{type:"number",minimum:0,maximum:1}}),"playback:stop-real-time-playback":r.object({}),"playback:real-time-playback-started":r.object({}),"playback:real-time-playback-ended":r.object({}),"playback:ended-changed":r.object({required:["ended"]},{ended:{type:"boolean"}}),"level:toggle-playing":r.object({}),"level:toggle-grid":r.object({}),"level:toggle-debug":r.object({}),"level:toggle-pathfinding":r.object({}),"level:scrub-forward":r.object({}),"level:scrub-back":r.object({}),"level:show-victory":r.object({required:["showModal"]},{showModal:{type:"boolean"},manual:{type:"boolean"}}),"level:highlight-dom":r.object({required:["selector"]},{selector:{type:"string"},delay:{type:["number","null","undefined"]},sides:{type:"array",items:{enum:["left","right","top","bottom"]}},offset:{type:"object"},rotation:{type:"number"}}),"level:end-highlight-dom":r.object({}),"level:focus-dom":r.object({},{selector:{type:"string"}}),"level:lock-select":r.object({},{lock:{type:["boolean","array"]}}),"level:suppress-selection-sounds":r.object({required:["suppress"]},{suppress:{type:"boolean"}}),"goal-manager:new-goal-states":r.object({required:["goalStates","goals","overallStatus","timedOut"]},{goalStates:{type:"object",additionalProperties:{type:"object",required:["status"],properties:{status:{oneOf:[{type:"null"},{type:"string",enum:["success","failure","incomplete"]}]},keyFrame:{oneOf:[{type:"integer",minimum:0},{type:"string",enum:["end"]}]},team:{type:["null","string","undefined"]}}}},goals:r.array({},{type:"object"}),overallStatus:{oneOf:[{type:"null"},{type:"string",enum:["success","failure","incomplete"]}]},timedOut:{type:"boolean"}}),"level:hero-config-changed":r.object({}),"level:hero-selection-updated":r.object({required:["hero"]},{hero:{type:"object"}}),"level:subscription-required":r.object({}),"level:course-membership-required":r.object({}),"level:contact-button-pressed":r.object({title:"Contact Pressed",description:"Dispatched when the contact button is pressed in a level."}),"level:license-required":r.object({})}})
require.register("schemas/subscriptions/scripts",function(e,require,t){var r
r=require("schemas/schemas")
t.exports={"script:end-current-script":r.object({}),"script:reset":r.object({}),"script:ended":r.object({required:["scriptID"]},{scriptID:{type:"string"}}),"script:state-changed":r.object({required:["currentScript","currentScriptOffset"]},{currentScript:{type:["string","null"]},currentScriptOffset:{type:"integer",minimum:0}}),"script:tick":r.object({required:["scriptRunning","noteGroupRunning","scriptStates","timeSinceLastScriptEnded"]},{scriptRunning:{type:"string"},noteGroupRunning:{type:"string"},timeSinceLastScriptEnded:{type:"number"},scriptStates:{type:"object",additionalProperties:r.object({title:"Script State"},{timeSinceLastEnded:{type:"number",minimum:0,description:"seconds since this script ended last"},timeSinceLastTriggered:{type:"number",minimum:0,description:"seconds since this script was triggered last"}})}}),"script:note-group-started":r.object({}),"script:note-group-ended":r.object({})}})
require.register("schemas/subscriptions/surface",function(e,require,t){var r,i
r=require("schemas/schemas")
i=r.object({required:["sprite","thang","originalEvent","canvas"]},{sprite:{type:"object"},thang:{type:"object"},originalEvent:{type:"object"},canvas:{type:"object"}})
t.exports={"camera:dragged":r.object({}),"camera:zoom-in":r.object({}),"camera:zoom-out":r.object({}),"camera:zoom-to":r.object({required:["pos"]},{pos:r.object({required:["x","y"]},{x:{type:"number"},y:{type:"number"}}),duration:{type:"number",minimum:0}}),"camera:zoom-updated":r.object({required:["camera","zoom","surfaceViewport"]},{camera:{type:"object"},zoom:{type:"number",minimum:0,exclusiveMinimum:true},surfaceViewport:{type:"object"},minZoom:{type:"number",minimum:0,exclusiveMinimum:true}}),"camera:set-camera":r.object({},{pos:r.object({required:["x","y"]},{x:{type:"number"},y:{type:"number"}}),thangID:{type:"string"},zoom:{type:"number"},duration:{type:"number",minimum:0},bounds:r.array({maxItems:2,minItems:2},r.object({required:["x","y"]},{x:{type:"number"},y:{type:"number"}}))}),"sprite:speech-updated":r.object({required:["sprite","thang"]},{sprite:{type:"object"},thang:{type:["object","null"]},blurb:{type:["string","null","undefined"]},message:{type:"string"},mood:{type:"string"},responses:{type:["array","null","undefined"]},spriteID:{type:"string"},sound:{type:["null","undefined","object"]}}),"level:sprite-dialogue":r.object({required:["spriteID","message"]},{blurb:{type:["string","null","undefined"]},message:{type:"string"},mood:{type:"string"},responses:{type:["array","null","undefined"]},spriteID:{type:"string"},sound:{type:["null","undefined","object"]}}),"sprite:dialogue-sound-completed":r.object({}),"level:sprite-clear-dialogue":r.object({}),"surface:gold-changed":r.object({required:["team","gold"]},{team:{type:"string"},gold:{type:"number"},goldEarned:{type:"number"}}),"surface:coordinate-selected":r.object({required:["x","y"]},{x:{type:"number"},y:{type:"number"},z:{type:"number"}}),"surface:coordinates-shown":r.object({}),"sprite:loaded":r.object({},{sprite:{type:"object"}}),"surface:choose-point":r.object({required:["point"]},{point:r.object({required:["x","y"]},{x:{type:"number"},y:{type:"number"},z:{type:"number"}})}),"surface:choose-region":r.object({required:["points"]},{points:r.array({minItems:2,maxItems:2},r.object({required:["x","y"]},{x:{type:"number"},y:{type:"number"},z:{type:"number"}}))}),"surface:new-thang-added":r.object({required:["thang","sprite"]},{thang:{type:"object"},sprite:{type:"object"}}),"surface:sprite-selected":r.object({required:["thang","sprite"]},{thang:{type:["object","null","undefined"]},sprite:{type:["object","null","undefined"]},spellName:{type:["string","null","undefined"]},originalEvent:{type:["object","null","undefined"]},worldPos:{type:["object","null","undefined"]}}),"sprite:thang-began-talking":r.object({},{thang:{type:"object"}}),"sprite:thang-finished-talking":r.object({},{thang:{type:"object"}}),"sprite:highlight-sprites":r.object({},{thangIDs:r.array({},{type:"string"}),delay:{type:["number","null","undefined"]}}),"sprite:move":r.object({required:["spriteID","pos"]},{spriteID:{type:"string"},pos:r.object({required:["x","y"]},{x:{type:"number"},y:{type:"number"},z:{type:"number"}}),duration:{type:"number",minimum:0}}),"sprite:mouse-down":i,"sprite:clicked":i,"sprite:double-clicked":i,"sprite:dragged":i,"sprite:mouse-up":i,"surface:frame-changed":r.object({required:["frame","world","progress"]},{frame:{type:"number",minimum:0},world:{type:"object"},progress:{type:"number",minimum:0,maximum:1},selectedThang:{type:["object","null","undefined"]}}),"surface:playback-ended":r.object({}),"surface:playback-restarted":r.object({}),"surface:mouse-moved":r.object({required:["x","y"]},{x:{type:"number"},y:{type:"number"}}),"surface:stage-mouse-down":r.object({required:["onBackground","x","y","originalEvent"]},{onBackground:{type:"boolean"},x:{type:"number"},y:{type:"number"},originalEvent:{type:"object"},worldPos:{type:["object","null","undefined"]}}),"surface:stage-mouse-up":r.object({required:["onBackground","originalEvent"]},{onBackground:{type:"boolean"},x:{type:["number","undefined"]},y:{type:["number","undefined"]},originalEvent:{type:"object"}}),"surface:mouse-scrolled":r.object({required:["deltaX","deltaY","canvas"]},{deltaX:{type:"number"},deltaY:{type:"number"},screenPos:r.object({required:["x","y"]},{x:{type:"number"},y:{type:"number"}}),canvas:{type:"object"}}),"surface:ticked":r.object({required:["dt"]},{dt:{type:"number"}}),"surface:mouse-over":r.object({}),"surface:mouse-out":r.object({}),"sprite:echo-all-wizard-sprites":r.object({required:["payload"]},{payload:r.array({},{type:"object"})}),"self-wizard:created":r.object({required:["sprite"]},{sprite:{type:"object"}}),"self-wizard:target-changed":r.object({required:["sprite"]},{sprite:{type:"object"}}),"surface:flag-appeared":r.object({required:["sprite"]},{sprite:{type:"object"}}),"surface:remove-selected-flag":r.object({}),"surface:remove-flag":r.object({required:["color"]},{color:{type:"string"}})}})
require.register("schemas/subscriptions/tome",function(e,require,t){var r
r=require("schemas/schemas")
t.exports={"tome:cast-spell":r.object({title:"Cast Spell",description:"Published when a spell is cast",required:[]},{spell:{type:"object"},thang:{type:"object"},preload:{type:"boolean"},realTime:{type:"boolean"},justBegin:{type:"boolean"}}),"tome:cast-spells":r.object({title:"Cast Spells",description:"Published when spells are cast",required:["spells","preload","realTime","submissionCount","flagHistory","difficulty","god"]},{spells:{type:"object"},preload:{type:"boolean"},realTime:{type:"boolean"},submissionCount:{type:"integer"},fixedSeed:{type:["integer","undefined"]},flagHistory:{type:"array"},difficulty:{type:"integer"},god:{type:"object"},justBegin:{type:"boolean"}}),"tome:manual-cast":r.object({title:"Manually Cast Spells",description:"Published when you wish to manually recast all spells",required:[]},{realTime:{type:"boolean"}}),"tome:manual-cast-denied":r.object({title:"Manual Cast Denied",description:"Published when player attempts to submit for real-time playback, but must wait after a replayable level failure.",required:["timeUntilResubmit"]},{timeUntilResubmit:{type:"number"}}),"tome:spell-created":r.object({title:"Spell Created",description:"Published after a new spell has been created",required:["spell"]},{spell:{type:"object"}}),"tome:spell-has-changed-significantly-calculation":r.object({title:"Has Changed Significantly Calculation",description:"Let anyone know that the spell has changed significantly.",required:["hasChangedSignificantly"]},{hasChangedSignificantly:{type:"boolean"}}),"tome:spell-debug-property-hovered":r.object({title:"Spell Debug Property Hovered",description:"Published when you hover over a spell property",required:[]},{property:{type:"string"},owner:{type:"string"}}),"tome:spell-debug-value-request":r.object({title:"Spell Debug Value Request",description:"Published when the SpellDebugView wants to retrieve a debug value.",required:["thangID","spellID","variableChain","frame"]},{thangID:{type:"string"},spellID:{type:"string"},variableChain:r.array({},{type:"string"}),frame:{type:"integer",minimum:0}}),"tome:palette-cleared":r.object({title:"Palette Cleared",description:"Published when the spell palette is about to be cleared and recreated."},{thangID:{type:"string"}}),"tome:palette-updated":r.object({title:"Palette Updated",description:"Published when the spell palette has just been updated."},{thangID:{type:"string"},entryGroups:{type:"string"}}),"tome:palette-hovered":r.object({title:"Palette Hovered",description:"Published when you hover over a Thang in the spell palette",required:["thang","prop","entry"]},{thang:{type:"object"},prop:{type:"string"},entry:{type:"object"}}),"tome:palette-pin-toggled":r.object({title:"Palette Pin Toggled",description:"Published when you pin or unpin the spell palette",required:["entry","pinned"]},{entry:{type:"object"},pinned:{type:"boolean"}}),"tome:palette-clicked":r.object({title:"Palette Clicked",description:"Published when you click on the spell palette",required:["thang","prop","entry"]},{thang:{type:"object"},prop:{type:"string"},entry:{type:"object"}}),"tome:spell-statement-index-updated":r.object({title:"Spell Statement Index Updated",description:"Published when the spell index is updated",required:["statementIndex","ace"]},{statementIndex:{type:"integer"},ace:{type:"object"}}),"tome:spell-beautify":r.object({title:"Beautify",description:"Published when you click the 'beautify' button",required:[]},{spell:{type:"object"}}),"tome:spell-step-forward":r.object({title:"Step Forward",description:"Published when you step forward in time"}),"tome:spell-step-backward":r.object({title:"Step Backward",description:"Published when you step backward in time"}),"tome:spell-loaded":r.object({title:"Spell Loaded",description:"Published when a spell is loaded",required:["spell"]},{spell:{type:"object"}}),"tome:spell-changed":r.object({title:"Spell Changed",description:"Published when a spell is changed",required:["spell"]},{spell:{type:"object"}}),"tome:editing-began":r.object({title:"Editing Began",description:"Published when you have begun changing code"}),"tome:editing-ended":r.object({title:"Editing Ended",description:"Published when you have stopped changing code"}),"tome:problems-updated":r.object({title:"Problems Updated",description:"Published when problems have been updated",required:["spell","problems","isCast"]},{spell:{type:"object"},problems:{type:"array"},isCast:{type:"boolean",description:"Whether the code has been Run yet. Sometimes determines if error displays as just annotation or as full banner."}}),"tome:change-language":r.object({title:"Tome Change Language",description:"Published when the Tome should update its programming language",required:["language"]},{language:{type:"string"},reload:{type:"boolean",description:"Whether player code should reload to the default when the language changes."}}),"tome:spell-changed-language":r.object({title:"Spell Changed Language",description:"Published when an individual spell has updated its code language",required:["spell"]},{spell:{type:"object"},language:{type:"string"}}),"tome:comment-my-code":r.object({title:"Comment My Code",description:"Published when we comment out a chunk of your code"}),"tome:change-config":r.object({title:"Change Config",description:"Published when you change your tome settings"}),"tome:update-snippets":r.object({title:"Update Snippets",description:"Published when we need to add autocomplete snippets",required:["propGroups","allDocs"]},{propGroups:{type:"object"},allDocs:{type:"object"},language:{type:"string"}}),"tome:insert-snippet":r.object({title:"Insert Snippet",description:"Published when we need to insert a autocomplete snippet",required:["doc","language","formatted"]},{doc:{type:"object"},language:{type:"string"},formatted:{type:"object"}}),"tome:focus-editor":r.object({title:"Focus Editor",description:"Published whenever we want to give focus back to the editor"}),"tome:toggle-maximize":r.object({title:"Toggle Maximize",description:"Published when we want to make the Tome take up most of the screen"}),"tome:maximize-toggled":r.object({title:"Maximize Toggled",description:"Published when the Tome has changed maximize/minimize state."}),"tome:select-primary-sprite":r.object({title:"Select Primary Sprite",description:"Published to get the most important sprite's code selected."}),"tome:required-code-fragment-deleted":r.object({title:"Required Code Fragment Deleted",description:"Published when a required code fragment is deleted from the sample code.",required:["codeFragment"]},{codeFragment:{type:"string"}}),"tome:suspect-code-fragment-added":r.object({title:"Suspect Code Fragment Added",description:"Published when a suspect code fragment is added to the sample code.",required:["codeFragment"]},{codeFragment:{type:"string"},codeLanguage:{type:"string"}}),"tome:suspect-code-fragment-deleted":r.object({title:"Suspect Code Fragment Deleted",description:"Published when a suspect code fragment is deleted from the sample code.",required:["codeFragment"]},{codeFragment:{type:"string"},codeLanguage:{type:"string"}}),"tome:winnability-updated":r.object({title:"Winnability Updated",description:"When we think we can now win (or can no longer win), we may want to emphasize the submit button versus the run button (or vice versa), so this fires when we get new goal states (even preloaded goal states) suggesting success or failure change.",required:["winnable"]},{winnable:{type:"boolean"},level:{type:"object"}}),"tome:show-problem-alert":r.object({title:"Show Problem Alert",description:"A problem alert needs to be shown.",required:["problem"]},{problem:{type:"object"},lineOffsetPx:{type:["number","undefined"]}}),"tome:hide-problem-alert":r.object({title:"Hide Problem Alert"}),"tome:jiggle-problem-alert":r.object({title:"Jiggle Problem Alert"}),"tome:html-updated":r.object({title:"HTML Updated",required:["html","create"]},{html:{type:"string",description:"The full HTML to display"},create:{type:"boolean",description:"Whether we should (re)create the DOM (as opposed to updating it)"}})}})
require.register("schemas/subscriptions/web-dev",function(e,require,t){var r
r=require("schemas/schemas")
t.exports={"web-dev:error":r.object({title:"Web Dev Error",description:"Published when an uncaught error occurs in the web-dev iFrame",required:[]},{message:{type:"string"},url:{type:"string",description:"URL of the host iFrame"},line:{type:"integer",description:"Line number of the start of the code that threw the exception (relative to its <script> tag!)"},column:{type:"integer",description:"Column number of the start of the code that threw the exception"},error:{type:"string",description:"The .toString of the originally thrown exception"}}),"web-dev:hover-line":r.object({title:"Web-dev Hover Line",description:"Published when the user is hovering over a line of code, for the purposes of highlighting nodes based on the hovered CSS selector"},{row:{type:"integer",description:"The row number of the hovered line (zero-indexed!)"},line:{type:"string",description:"The full line of code that the user is hovering over"},"web-dev:stop-hovering-line":r.object({title:"Stop hovering line",description:"Published when the user is no longer hovering over a line of code with their mouse."})})}})
require.register("schemas/subscriptions/world",function(e,require,t){var r
r=require("schemas/schemas")
t.exports={"world:won":r.object({},{replacedNoteChain:{type:"array"}}),"world:thang-died":r.object({required:["thang","killer"]},{replacedNoteChain:{type:"array"},thang:{type:"object"},killer:{type:"object"},killerHealth:{type:["number","undefined"]},maxHealth:{type:"number"}}),"world:thang-touched-goal":r.object({required:["actor","touched"]},{replacedNoteChain:{type:"array"},thang:{type:"object"},actor:{type:"object"},touched:{type:"object"}}),"world:thang-collected-item":r.object({required:["actor","item"]},{replacedNoteChain:{type:"array"},thang:{type:"object"},actor:{type:"object"},item:{type:"object"}}),"world:thang-finished-plans":r.object({required:["thang"]},{replacedNoteChain:{type:"array"},thang:{type:"object"}}),"world:attacked-when-out-of-range":r.object({required:["thang"]},{replacedNoteChain:{type:"array"},thang:{type:"object"}}),"world:custom-script-trigger":{type:"object"},"world:user-code-problem":r.object({required:["thang","problem"]},{thang:{type:"object"},problem:r.object({required:["message","level","type"]},{userInfo:{type:"object"},message:{type:"string"},level:{type:"string",enum:["info","warning","error"]},type:{type:"string"},error:{type:"object"}})}),"world:lines-of-code-counted":r.object({required:["thang","linesUsed"]},{thang:{type:"object"},linesUsed:{type:"integer"}})}})
require.register("models/Achievement",function(e,require,t){var r,i,n,o=function(e,t){for(var r in t){if(s.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},s={}.hasOwnProperty
i=require("./CocoModel")
n=require("../core/utils")
t.exports=r=function(e){o(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.className="Achievement"
t.schema=require("schemas/models/achievement")
t.prototype.urlRoot="/db/achievement"
t.prototype.editableByArtisans=true
t.prototype.isRepeatable=function(){return this.get("proportionalTo")!=null}
t.prototype.getExpFunction=function(){var e
e=this.get("function",true)
if(e.kind in n.functionCreators){return n.functionCreators[e.kind](e.parameters)}}
t.prototype.save=function(){this.populateI18N()
return t.__super__.save.apply(this,arguments)}
t.styleMapping={1:"achievement-wood",2:"achievement-stone",3:"achievement-silver",4:"achievement-gold",5:"achievement-diamond"}
t.prototype.getStyle=function(){return t.styleMapping[this.get("difficulty",true)]}
t.defaultImageURL="/images/achievements/default.png"
t.prototype.getImageURL=function(){if(this.get("icon")){return"/file/"+this.get("icon")}else{return t.defaultImageURL}}
t.prototype.hasImage=function(){return this.get("icon")!=null}
t.prototype.cacheLockedImage=function(){var e,t,r
if(this.lockedImageURL){return this.lockedImageURL}e=document.createElement("canvas")
r=new Image
r.src=this.getImageURL()
t=$.Deferred()
r.onload=function(i){return function(){var o,s
e.width=r.width
e.height=r.height
o=e.getContext("2d")
o.drawImage(r,0,0)
s=o.getImageData(0,0,e.width,e.height)
s=n.grayscale(s)
o.putImageData(s,0,0)
i.lockedImageURL=e.toDataURL()
return t.resolve(i.lockedImageURL)}}(this)
return t}
t.prototype.getLockedImageURL=function(){return this.lockedImageURL}
t.prototype.i18nName=function(){return n.i18n(this.attributes,"name")}
t.prototype.i18nDescription=function(){return n.i18n(this.attributes,"description")}
return t}(i)})
require.register("models/AnalyticsLogEvent",function(e,require,t){var r,i,n=function(e,t){for(var r in t){if(o.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},o={}.hasOwnProperty
i=require("./CocoModel")
t.exports=r=function(e){n(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.className="AnalyticsLogEvent"
t.schema=require("schemas/models/analytics_log_event")
t.prototype.urlRoot="/db/analytics.log.event"
return t}(i)})
require.register("models/AnalyticsStripeInvoice",function(e,require,t){var r,i,n=function(e,t){for(var r in t){if(o.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},o={}.hasOwnProperty
i=require("./CocoModel")
t.exports=r=function(e){n(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.className="AnalyticsStripeInvoice"
t.schema=require("schemas/models/analytics_stripe_invoice")
t.prototype.urlRoot="/db/analytics.stripe.invoice"
return t}(i)})
require.register("models/Article",function(e,require,t){var r,i,n=function(e,t){for(var r in t){if(o.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},o={}.hasOwnProperty
i=require("./CocoModel")
t.exports=r=function(e){n(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.className="Article"
t.schema=require("schemas/models/article")
t.prototype.urlRoot="/db/article"
t.prototype.saveBackups=true
t.prototype.editableByArtisans=true
return t}(i)})
require.register("models/Branch",function(e,require,t){var r,i,n,o,s=function(e,t){for(var r in t){if(a.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},a={}.hasOwnProperty
n=require("./CocoModel")
o=require("schemas/models/branch.schema")
i=require("collections/CocoCollection")
t.exports=r=function(e){s(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.className="Branch"
t.schema=o
t.prototype.urlRoot="/db/branches"
return t}(n)})
require.register("models/Campaign",function(e,require,t){var r,i,n,o,s,a,l,c=function(e,t){for(var r in t){if(u.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},u={}.hasOwnProperty
n=require("./CocoModel")
a=require("schemas/models/campaign.schema")
o=require("models/Level")
s=require("collections/Levels")
i=require("collections/CocoCollection")
l=require("../core/utils")
t.exports=r=function(e){c(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.className="Campaign"
t.schema=a
t.prototype.urlRoot="/db/campaign"
t.denormalizedLevelProperties=_.keys(_.omit(a.properties.levels.additionalProperties.properties,["position","rewards"]))
t.denormalizedCampaignProperties=["name","i18n","slug"]
t.prototype.initialize=function(e){if(e==null){e={}}this.forceCourseNumbering=e.forceCourseNumbering
return t.__super__.initialize.apply(this,arguments)}
t.prototype.getLevels=function(){var e
e=new s(_.values(this.get("levels")))
e.comparator="campaignIndex"
e.sort()
return e}
t.prototype.getNonLadderLevels=function(){var e
e=new s(_.values(this.get("levels")))
e.reset(e.reject(function(e){return e.isLadder()}))
e.comparator="campaignIndex"
e.sort()
return e}
t.prototype.getLevelNumber=function(e,t){var r,i,n,o,s,a,c
if(!this.levelNumberMap){o=[]
a=this.getLevels().models
for(r=0,i=a.length;r<i;r++){n=a[r]
if(!n.get("original")){continue}s=this.levelIsPractice(n)
o.push({key:n.get("original"),practice:s})}this.levelNumberMap=l.createLevelNumberMap(o)}return(c=this.levelNumberMap[e])!=null?c:t}
t.prototype.levelIsPractice=function(e){if(e.attributes){e=e.attributes}if(this.get("type")==="course"||this.forceCourseNumbering){return e.practice}else{return e.practice&&/ [ABCD]$/.test(e.name)}}
t.prototype.updateI18NCoverage=function(){return t.__super__.updateI18NCoverage.call(this,_.omit(this.attributes,"levels"))}
return t}(n)})
require.register("models/Clan",function(e,require,t){var r,i,n,o=function(e,t){for(var r in t){if(s.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},s={}.hasOwnProperty
i=require("./CocoModel")
n=require("schemas/models/clan.schema")
t.exports=r=function(e){o(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.className="Clan"
t.schema=n
t.prototype.urlRoot="/db/clan"
return t}(i)})
require.register("models/Classroom",function(e,require,t){var r,i,n,o,s,a=function(e,t){return function(){return e.apply(t,arguments)}},l=function(e,t){for(var r in t){if(c.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},c={}.hasOwnProperty,u=[].indexOf||function(e){for(var t=0,r=this.length;t<r;t++){if(t in this&&this[t]===e)return t}return-1}
i=require("./CocoModel")
o=require("schemas/models/classroom.schema")
s=require("../core/utils")
n=require("models/User")
t.exports=r=function(e){l(t,e)
function t(){this.getSetting=a(this.getSetting,this)
return t.__super__.constructor.apply(this,arguments)}t.className="Classroom"
t.schema=o
t.prototype.urlRoot="/db/classroom"
t.prototype.initialize=function(){this.listenTo(this,"change:aceConfig",this.capitalizeLanguageName)
return t.__super__.initialize.apply(this,arguments)}
t.prototype.parse=function(e){if(e._id){return e}else{this.owner=new n(e.owner)
return e.data}}
t.prototype.capitalizeLanguageName=function(){var e,t
e=(t=this.get("aceConfig"))!=null?t.language:void 0
return this.capitalLanguage=s.capitalLanguages[e]}
t.prototype.joinWithCode=function(e,t){var r
r={url:this.urlRoot+"/~/members",type:"POST",data:{code:e},success:function(e){return function(){return e.trigger("join:success")}}(this),error:function(e){return function(){return e.trigger("join:error")}}(this)}
_.extend(r,t)
return this.fetch(r)}
t.prototype.fetchByCode=function(e,t){var r
r={url:_.result(this,"url"),data:{code:e,"with-owner":true}}
_.extend(r,t)
return this.fetch(r)}
t.prototype.getLevelNumber=function(e,t){var r,i,n,o,a,l,c,u,p,d,h,m,g,f
if(!this.levelNumberMap){this.levelNumberMap={}
o=(p=this.get("aceConfig"))!=null?p.language:void 0
h=(d=this.get("courses"))!=null?d:[]
for(i=0,a=h.length;i<a;i++){r=h[i]
u=[]
m=r.levels
for(n=0,l=m.length;n<l;n++){c=m[n]
if(!c.original){continue}if(o!=null&&c.primerLanguage===o){continue}u.push({key:c.original,practice:(g=c.practice)!=null?g:false})}_.assign(this.levelNumberMap,s.createLevelNumberMap(u))}}return(f=this.levelNumberMap[e])!=null?f:t}
t.prototype.removeMember=function(e,t){var r
r={url:_.result(this,"url")+"/members",type:"DELETE",data:{userID:e}}
_.extend(r,t)
return this.fetch(r)}
t.prototype.setStudentPassword=function(e,t,r){var i
i=this.id
return $.ajax({url:"/db/classroom/"+i+"/members/"+e.id+"/reset-password",method:"POST",data:{password:t},success:function(e){return function(){return e.trigger("save-password:success")}}(this),error:function(e){return function(t){return e.trigger("save-password:error",t.responseJSON)}}(this)})}
t.prototype.getLevels=function(e){var t,r,i,n,o,s,a,l,c
if(e==null){e={}}t=require("collections/Levels")
i=this.get("courses")
if(!i){return new t}a=[]
for(n=0,s=i.length;n<s;n++){r=i[n]
if(e.courseID&&e.courseID!==r._id){continue}a.push(r.levels)}l=new t(_.flatten(a))
o=(c=this.get("aceConfig"))!=null?c.language:void 0
if(o){l.remove(l.filter(function(e){return function(e){return e.get("primerLanguage")===o}}(this)))}if(e.withoutLadderLevels){l.remove(l.filter(function(e){return e.isLadder()}))}if(e.projectLevels){l.remove(l.filter(function(e){return e.get("shareable")!=="project"}))}return l}
t.prototype.getLadderLevel=function(e){var t,r,i,n
t=require("collections/Levels")
i=this.get("courses")
r=_.findWhere(i,{_id:e})
if(!r){return}n=new t(r.levels)
return n.find(function(e){return e.isLadder()})}
t.prototype.getProjectLevel=function(e){var t,r,i,n
t=require("collections/Levels")
i=this.get("courses")
r=_.findWhere(i,{_id:e})
if(!r){return}n=new t(r.levels)
return n.find(function(e){return e.isProject()})}
t.prototype.statsForSessions=function(e,t){var r,i,n,o,a,l,c,u,p,d,h,m,g,f,y,v,b,w,k,S,C,x,j,P,T,L,A,q,D,I,E,M
if(!e){return null}e=e.models||e
r=this.getLadderLevel(t)
P=this.getProjectLevel(t)
n=this.getLevels({courseID:t,withoutLadderLevels:true})
v={}
for(c=0,g=e.length;c<g;c++){E=e[c]
v[E.get("level").original]=E}o=-1
m=null
k=0
w=0
d=null
h=null
j=0
b=[]
T=n.models
for(u=p=0,f=T.length;p<f;u=++p){y=T[u]
if(!y.get("practice")){k++}i=false
if(E=v[y.get("original")]){i=(L=E.get("state").complete)!=null?L:false
j+=(A=E.get("playtime"))!=null?A:0
d=y
h=this.getLevelNumber(y.get("original"),u+1)
if(i){o=u}else{m=y
if(!y.get("practice")){w++}}}else if(!y.get("practice")){w++}b.push({practice:(q=y.get("practice"))!=null?q:false,complete:i})}d=m!=null?m:d
S=false
C=0
if(o>=0){a=n.models[o]
l=(D=(I=v[a.get("original")])!=null?I.get("playtime"):void 0)!=null?D:0
S=s.needsPractice(l,a.get("practiceThresholdMinutes"))
C=s.findNextLevel(b,o,S)}x=n.models[C]
if(w===0){x=r}if(x==null){x=_.find(n.models,function(e){var t,r
return!((t=v[e.get("original")])!=null?(r=t.get("state"))!=null?r.complete:void 0:void 0)})}M={levels:{size:k,left:w,done:w===0,numDone:k-w,pctDone:(100*(k-w)/k).toFixed(1)+"%",lastPlayed:d,lastPlayedNumber:h,next:x,first:n.first(),arena:r,project:P},playtime:j}
return M}
t.prototype.fetchForCourseInstance=function(e,t){var r,i
if(t==null){t={}}if(!e){return}r=require("models/CourseInstance")
i=_.isString(e)?new r({_id:e}):e
t=_.extend(t,{url:_.result(i,"url")+"/classroom"})
return this.fetch(t)}
t.prototype.inviteMembers=function(e,t){if(t==null){t={}}if(t.data==null){t.data={}}t.data.emails=e
t.url=this.url()+"/invite-members"
t.type="POST"
return this.fetch(t)}
t.prototype.getSortedCourses=function(){var e
return s.sortCourses((e=this.get("courses"))!=null?e:[])}
t.prototype.updateCourses=function(e){if(e==null){e={}}e.url=this.url()+"/update-courses"
e.type="POST"
return this.fetch(e)}
t.prototype.getSetting=function(e){var r,i
i=this.get("settings")||{}
r=t.schema.properties.settings.properties
if(u.call(Object.keys(i),e)>=0){return i[e]}if(u.call(Object.keys(r),e)>=0){return r[e]["default"]}return false}
return t}(i)})
require.register("models/CocoModel",function(e,require,t){var r,i,n,o,s,a=function(e,t){for(var r in t){if(l.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},l={}.hasOwnProperty,c=[].indexOf||function(e){for(var t=0,r=this.length;t<r;t++){if(t in this&&this[t]===e)return t}return-1}
o=require("core/storage")
i=require("core/deltas")
n=require("locale/locale")
s=require("core/utils")
r=function(e){a(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.idAttribute="_id"
t.prototype.loaded=false
t.prototype.loading=false
t.prototype.saveBackups=false
t.prototype.notyErrors=true
t.schema=null
t.prototype.initialize=function(e,r){var i,n,o
t.__super__.initialize.apply(this,arguments)
if(r==null){r={}}this.setProjection(r.project)
if(!this.constructor.className){console.error(this+" needs a className set.")}this.on("sync",this.onLoaded,this)
this.on("error",this.onError,this)
this.on("add",this.onLoaded,this)
this.saveBackup=_.debounce(this.saveBackup,500)
this.usesVersions=((i=this.schema())!=null?(n=i.properties)!=null?n.version:void 0:void 0)!=null
if((o=window.application)!=null?o.testing:void 0){this.fakeRequests=[]
return this.on("request",function(){return this.fakeRequests.push(jasmine.Ajax.requests.mostRecent())})}}
t.prototype.created=function(){return new Date(parseInt(this.id.substring(0,8),16)*1e3)}
t.prototype.backupKey=function(){if(this.usesVersions){return this.id}else{return this.id}}
t.prototype.setProjection=function(e){var t
if(e===this.project){return}t=this.getURL()
if(!/project=/.test(t)){t+="&project="}if(!/\?/.test(t)){t=t.replace("&","?")}t=t.replace(/project=[^&]*/,"project="+((e!=null?e.join(","):void 0)||""))
if(!(e!=null?e.length:void 0)){t=t.replace(/[&?]project=&/,"&")}if(!(e!=null?e.length:void 0)){t=t.replace(/[&?]project=$/,"")}this.setURL(t)
return this.project=e}
t.prototype.type=function(){return this.constructor.className}
t.prototype.clone=function(e){var r,i,n,o,s
if(e==null){e=true}r=t.__super__.clone.call(this)
r.set($.extend(true,{},e||!this._revertAttributes?this.attributes:this._revertAttributes))
if(this._revertAttributes&&!e){s=_.difference(_.keys(r.attributes),_.keys(this._revertAttributes))
for(i=0,o=s.length;i<o;i++){n=s[i]
r.unset(n)}}return r}
t.prototype.onError=function(e,t){this.loading=false
this.jqxhr=null
if(t.status===402){if(_.contains(t.responseText,"must be enrolled")){return Backbone.Mediator.publish("level:license-required",{})}else if(_.contains(t.responseText,"be in a course")){return Backbone.Mediator.publish("level:course-membership-required",{})}else{return Backbone.Mediator.publish("level:subscription-required",{})}}}
t.prototype.onLoaded=function(){this.loaded=true
this.loading=false
this.jqxhr=null
return this.loadFromBackup()}
t.prototype.getCreationDate=function(){return new Date(parseInt(this.id.slice(0,8),16)*1e3)}
t.prototype.getNormalizedURL=function(){return this.urlRoot+"/"+this.id}
t.prototype.getTranslatedName=function(){return s.i18n(this.attributes,"name")}
t.prototype.attributesWithDefaults=void 0
t.prototype.get=function(e,r){if(r==null){r=false}if(r){if(this.attributesWithDefaults===void 0){this.buildAttributesWithDefaults()}return this.attributesWithDefaults[e]}else{return t.__super__.get.call(this,e)}}
t.prototype.set=function(e,r){var i,n
if(e!=="thangs"){delete this.attributesWithDefaults}i=this.loading||!this.loaded
if(!(i||this._revertAttributes||this.project||(r!=null?r.fromMerge:void 0))){this.markToRevert()}n=t.__super__.set.call(this,e,r)
if(this.saveBackups&&!i){this.saveBackup()}return n}
t.prototype.buildAttributesWithDefaults=function(){var e,t,r,i
r=new Date
e=$.extend(true,{},this.attributes)
i=tv4.freshApi()
i.addSchema("#",this.schema())
i.addSchema("metaschema",require("schemas/metaschema"))
TreemaUtils.populateDefaults(e,this.schema(),i)
this.attributesWithDefaults=e
t=new Date-r
if(t>10){return console.debug("Populated defaults for "+this.type()+(this.attributes.name?" "+this.attributes.name:"")+" in "+t+"ms")}}
t.prototype.loadFromBackup=function(){var e
if(!this.saveBackups){return}e=o.load(this.backupKey())
if(e){this.set(e,{silent:true})
return t.backedUp[this.backupKey()]=this}}
t.prototype.saveBackup=function(){return this.saveBackupNow()}
t.prototype.saveBackupNow=function(){o.save(this.backupKey(),this.attributes)
return t.backedUp[this.backupKey()]=this}
t.backedUp={}
t.prototype.schema=function(){return this.constructor.schema}
t.prototype.getValidationErrors=function(){var e,t
e=_.pick(this.attributes,function(e){return e!==void 0})
t=tv4.validateMultiple(e,this.constructor.schema||{}).errors
if(t!=null?t.length:void 0){return t}}
t.prototype.validate=function(){var e,t,r,i
t=this.getValidationErrors()
if(t!=null?t.length:void 0){if(!application.testing){console.debug("Validation failed for "+this.constructor.className+": '"+(this.get("name")||this)+"'.")
for(r=0,i=t.length;r<i;r++){e=t[r]
console.debug("\t",e.dataPath,":",e.message)}if(typeof console.trace==="function"){console.trace()}}return t}}
t.prototype.save=function(e,r){var i,n,o,s,a
if(r==null){r={}}n=_.cloneDeep(r)
if(r.headers==null){r.headers={}}r.headers["X-Current-Path"]=(o=(s=document.location)!=null?s.pathname:void 0)!=null?o:"unknown"
a=r.success
i=r.error
r.success=function(e){return function(i,n){e.retries=0
e.trigger("save:success",e)
if(a){a(e,n)}if(e._revertAttributes){e.markToRevert()}e.clearBackup()
t.pollAchievements()
return r.success=r.error=null}}(this)
r.error=function(t){return function(o,s){var a,l,c,u,p,d,h
if(s.status===0){if(t.retries==null){t.retries=0}t.retries+=1
if(t.retries>20){p="Your computer or our servers appear to be offline. Please try refreshing."
noty({text:p,layout:"center",type:"error",killer:true})
return}else{p=$.i18n.t("loading_error.connection_failure",{defaultValue:"Connection failed."})
try{noty({text:p,layout:"center",type:"error",killer:true,timeout:3e3})}catch(e){d=e
console.warn("Couldn't even show noty error for",i,"because",d)}return _.delay(u=function(){return t.save(e,n)},3e3)}}if(i){i(t,s)}if(!t.notyErrors){return}c="Error saving "+((h=t.get("name"))!=null?h:t.type())
console.log("going to log an error message")
console.warn(c,s.responseJSON)
if(!(typeof webkit!=="undefined"&&webkit!==null?webkit.messageHandlers:void 0)){try{noty({text:c+": "+s.status+" "+s.statusText+"\n"+s.responseText,layout:"topCenter",type:"error",killer:false,timeout:1e4})}catch(e){d=e
console.warn("Couldn't even show noty error for",i,"because",d)}}return r.success=r.error=null}}(this)
this.trigger("save",this)
return t.__super__.save.call(this,e,r)}
t.prototype.patch=function(e){var t,r,i,n,o,s
if(!this._revertAttributes){return false}if(e==null){e={}}e.patch=true
e.type="PUT"
t={_id:this.id}
n=[]
s=_.keys(this.attributes)
for(r=0,o=s.length;r<o;r++){i=s[r]
if(!_.isEqual(this.attributes[i],this._revertAttributes[i])){t[i]=this.attributes[i]
n.push(i)}}if(!n.length){return}return this.save(t,e)}
t.prototype.fetch=function(e){if(e==null){e={}}if(e.data==null){e.data={}}if(this.project){e.data.project=this.project.join(",")}this.jqxhr=t.__super__.fetch.call(this,e)
this.loading=true
return this.jqxhr}
t.prototype.markToRevert=function(){var e,t,r,i
if(this.type()==="ThangType"){this._revertAttributes=_.clone(this.attributes)
e=this.attributes
t=[]
for(r in e){i=e[r]
if(i&&r!=="raw"){t.push(this._revertAttributes[r]=_.cloneDeep(i))}}return t}else{return this._revertAttributes=$.extend(true,{},this.attributes)}}
t.prototype.revert=function(){this.clear({silent:true})
if(this._revertAttributes){this.set(this._revertAttributes,{silent:true})}return this.clearBackup()}
t.prototype.clearBackup=function(){return o.remove(this.backupKey())}
t.prototype.hasLocalChanges=function(){return this._revertAttributes&&!_.isEqual(this.attributes,this._revertAttributes)}
t.prototype.cloneNewMinorVersion=function(){var e,t
t=_.clone(this.attributes)
e=new this.constructor(t)
return e}
t.prototype.cloneNewMajorVersion=function(){var e
e=this.cloneNewMinorVersion()
e.unset("version")
return e}
t.prototype.isPublished=function(){var e,t,r,i,n
n=(i=this.get("permissions",true))!=null?i:[]
for(e=0,t=n.length;e<t;e++){r=n[e]
if(r.target==="public"&&r.access==="read"){return true}}return false}
t.prototype.publish=function(){if(this.isPublished()){throw new Error("Can't publish what's already-published. Can't kill what's already dead.")}return this.set("permissions",this.get("permissions",true).concat({access:"read",target:"public"}))}
t.isObjectID=function(e){var t
return e.length===24&&((t=e.match(/[a-f0-9]/gi))!=null?t.length:void 0)===24}
t.prototype.hasReadAccess=function(e){var t,r,i,n,o,s
if(e==null){e=me}if(e.isAdmin()){return true}if(e.isArtisan()&&this.editableByArtisans){return true}o=(n=this.get("permissions",true))!=null?n:[]
for(t=0,r=o.length;t<r;t++){i=o[t]
if(i.target==="public"||e.get("_id")===i.target){if((s=i.access)==="owner"||s==="read"){return true}}}return false}
t.prototype.hasWriteAccess=function(e){var t,r,i,n,o,s
if(e==null){e=me}if(e.isAdmin()){return true}if(e.isArtisan()&&this.editableByArtisans){return true}o=(n=this.get("permissions",true))!=null?n:[]
for(t=0,r=o.length;t<r;t++){i=o[t]
if(i.target==="public"||e.get("_id")===i.target){if((s=i.access)==="owner"||s==="write"){return true}}}return false}
t.prototype.getOwner=function(){var e
e=_.find(this.get("permissions",true),{access:"owner"})
return e!=null?e.target:void 0}
t.prototype.getDelta=function(){var e
e=i.makeJSONDiffer()
return e.diff(_.omit(this._revertAttributes,i.DOC_SKIP_PATHS),_.omit(this.attributes,i.DOC_SKIP_PATHS))}
t.prototype.getDeltaWith=function(e){var t
t=i.makeJSONDiffer()
return t.diff(this.attributes,e.attributes)}
t.prototype.applyDelta=function(e){var t,r,i,n,o
n=$.extend(true,{},this.attributes)
try{jsondiffpatch.patch(n,e)}catch(r){t=r
if(!application.testing){console.error("Error applying delta\n",JSON.stringify(e,null,"\t"),"\n\nto attributes\n\n",n)}return false}for(i in n){o=n[i]
if(_.isEqual(o,this.attributes[i])){delete n[i]}}this.set(n)
return true}
t.prototype.getExpandedDelta=function(){var e
e=this.getDelta()
return i.expandDelta(e,this._revertAttributes,this.schema())}
t.prototype.getExpandedDeltaWith=function(e){var t
t=this.getDeltaWith(e)
return i.expandDelta(t,this.attributes,this.schema())}
t.prototype.watch=function(e){if(e==null){e=true}$.ajax(this.urlRoot+"/"+this.id+"/watch",{type:"PUT",data:{on:e}})
return this.watching=function(){return e}}
t.prototype.watching=function(){var e
return e=me.id,c.call(this.get("watchers")||[],e)>=0}
t.prototype.populateI18N=function(e,t,r){var i,n,o,s,a,l,c,u,p,d,h
if(r==null){r=""}d=0
if(e==null){e=$.extend(true,{},this.attributes)}if(t==null){t=this.schema()||{}}if(t.oneOf){t=_.find(t.oneOf,{type:"object"})||t}i=false
if(((u=t.properties)!=null?u.i18n:void 0)&&_.isPlainObject(e)&&e.i18n==null){e.i18n={"-":{"-":"-"}}
d+=1
i=true}if(_.isPlainObject(e)){for(a in e){h=e[a]
c=0
n=(p=t.properties)!=null?p[a]:void 0
if(!n&&_.isObject(t.additionalProperties)){n=t.additionalProperties}if(n){c=this.populateI18N(h,n,r+"/"+a)}if(c&&!r){this.set(a,h)}d+=c}}if(t.items&&_.isArray(e)){for(s=o=0,l=e.length;o<l;s=++o){h=e[s]
d+=this.populateI18N(h,t.items,r+"/"+s)}}if(i&&!r){this.set("i18n",e.i18n)}if(!r){this.updateI18NCoverage()}return d}
t.getReferencedModel=function(e,t){var r,i,n
if(t.links==null){return null}i=_.find(t.links,{rel:"db"})
if(!i){return null}if(i.href.match("thang.type")&&!this.isObjectID(e)){return null}r=i.href
r=r.replace("{(original)}",e.original)
r=r.replace("{(majorVersion)}",""+((n=e.majorVersion)!=null?n:0))
r=r.replace("{($)}",e)
return this.getOrMakeModelFromLink(r)}
t.getOrMakeModelFromLink=function(e){var t,r,i,n,o,s,a,l
n=function(e){return function(){return e}}
a=e.split("/")[2]
s=_.string.classify(a)
l="models/"+s
try{t=require(l)}catch(t){r=t
console.error("could not load model from link path",e,"using path",l)
return}o=new t
o.url=n(e)
return o}
t.prototype.setURL=function(e){var t
t=function(e){return function(){return e}}
this.url=t(e)
return this}
t.prototype.getURL=function(){if(_.isString(this.url)){return this.url}else{return this.url()}}
t.prototype.makePatch=function(){var e,t
e=require("models/Patch")
t={collection:_.string.underscored(this.constructor.className),id:this.id}
if(this.get("original")){t.original=this.get("original")
t.version=this.get("version")}return new e({delta:this.getDelta(),target:t})}
t.pollAchievements=function(){var e,t,r,i
if(application.testing){return}e=require("collections/CocoCollection")
t=require("models/EarnedAchievement")
r=function(e){a(r,e)
function r(){return r.__super__.constructor.apply(this,arguments)}r.prototype.model=t
r.prototype.initialize=function(e){if(e==null){e=require("core/auth").me}return this.url="/db/user/"+e.id+"/achievements?notified=false"}
return r}(e)
i=new r
return i.fetch({success:function(e){if(!_.isEmpty(e.models)){return me.fetch({cache:false,success:function(){return Backbone.Mediator.publish("achievements:new",{earnedAchievements:e})}})}},error:function(){return console.error("Miserably failed to fetch unnotified achievements",arguments)},cache:false})}
t.pollAchievements=_.debounce(t.pollAchievements,500)
t.prototype.updateI18NCoverage=function(e){var t,r,i
t=[]
i={}
if(e==null){e=this.attributes}TreemaUtils.walk(e,this.schema(),null,function(e,r,n){var o,s,a,l,c,u
if(r!=null?r.i18n:void 0){i[e]=r}if(_.string.endsWith(e,"i18n")){s=r
l=e.slice(0,-5)
a=i[l]
u=n.props||[]
u=function(){var e,t,r
r=[]
for(e=0,t=u.length;e<t;e++){c=u[e]
if(a[c]&&(c!=="sound"&&c!=="soundTriggers")){r.push(c)}}return r}()
if(!u.length){return}if("additionalProperties"in s){return}o=_.filter(_.keys(s),function(e){var t
t=s[e]
return t&&_.all(function(){var e,r,i
i=[]
for(e=0,r=u.length;e<r;e++){c=u[e]
i.push(t[c])}return i}())})
return t.push(o)}})
if(!t.length){return}r=_.intersection.apply(_,t)
return this.set("i18nCoverage",r)}
t.prototype.deleteI18NCoverage=function(e){if(e==null){e={}}e.url=this.url()+"/i18n-coverage"
e.type="DELETE"
return $.ajax(e)}
t.prototype.saveNewMinorVersion=function(e,t){if(t==null){t={}}t.url=this.url()+"/new-version"
t.type="POST"
return this.save(e,t)}
t.prototype.saveNewMajorVersion=function(e,t){if(t==null){t={}}e=e||_.omit(this.attributes,"version")
t.url=this.url()+"/new-version"
t.type="POST"
t.patch=true
return this.save(e,t)}
t.prototype.fetchPatchesWithStatus=function(e,t){var r,i
if(e==null){e="pending"}if(t==null){t={}}r=require("../collections/Patches")
i=new r
if(t.data==null){t.data={}}t.data.status=e
t.url=this.urlRoot+"/"+(this.get("original")||this.id)+"/patches"
i.fetch(t)
return i}
t.prototype.stringify=function(){return JSON.stringify(this.toJSON())}
t.prototype.wait=function(e){return new Promise(function(t){return function(r){return t.once(e,r)}}(this))}
t.prototype.fetchLatestVersion=function(e,t){if(t==null){t={}}t.url=_.result(this,"urlRoot")+"/"+e+"/version"
return this.fetch(t)}
return t}(Backbone.Model)
t.exports=r})
require.register("models/CodeLog",function(e,require,t){var r,i,n=function(e,t){for(var r in t){if(o.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},o={}.hasOwnProperty
r=require("./CocoModel")
t.exports=i=function(e){n(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.className="CodeLog"
t.schema=require("schemas/models/codelog.schema")
t.prototype.urlRoot="/db/codelogs"
return t}(r)})
require.register("models/Course",function(e,require,t){var r,i,n,o=function(e,t){for(var r in t){if(s.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},s={}.hasOwnProperty
r=require("./CocoModel")
n=require("schemas/models/course.schema")
t.exports=i=function(e){o(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.className="Course"
t.schema=n
t.prototype.urlRoot="/db/course"
t.prototype.fetchForCourseInstance=function(e,t){var r
r={url:"/db/course_instance/"+e+"/course"}
_.extend(r,t)
return this.fetch(r)}
return t}(r)})
require.register("models/CourseInstance",function(e,require,t){var r,i,n,o=function(e,t){for(var r in t){if(s.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},s={}.hasOwnProperty,a=[].indexOf||function(e){for(var t=0,r=this.length;t<r;t++){if(t in this&&this[t]===e)return t}return-1}
r=require("./CocoModel")
n=require("schemas/models/course_instance.schema")
t.exports=i=function(e){o(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.className="CourseInstance"
t.schema=n
t.prototype.urlRoot="/db/course_instance"
t.prototype.addMember=function(e,t){var r,i
i={method:"POST",url:_.result(this,"url")+"/members",data:{userID:e}}
_.extend(i,t)
r=this.fetch(i)
if(e===me.id){if(!me.get("courseInstances")){me.set("courseInstances",[])}me.get("courseInstances").push(this.id)}return r}
t.prototype.addMembers=function(e,t){var r,i,n
i={method:"POST",url:_.result(this,"url")+"/members",data:{userIDs:e},success:function(t){return function(){return t.trigger("add-members",{userIDs:e})}}(this)}
_.extend(i,t)
r=this.fetch(i)
if(n=me.id,a.call(e,n)>=0){if(!me.get("courseInstances")){me.set("courseInstances",[])}me.get("courseInstances").push(this.id)}return r}
t.prototype.removeMember=function(e,t){var r,i
i={url:_.result(this,"url")+"/members",type:"DELETE",data:{userID:e}}
_.extend(i,t)
r=this.fetch(i)
if(e===me.id){me.set("courseInstances",_.without(me.get("courseInstances"),this.id))}return r}
t.prototype.firstLevelURL=function(){return"/play/level/dungeons-of-kithgard?course="+this.get("courseID")+"&course-instance="+this.id}
t.prototype.hasMember=function(e,t){e=e.id||e
return a.call(this.get("members")||[],e)>=0}
return t}(r)})
require.register("models/EarnedAchievement",function(e,require,t){var r,i,n,o=function(e,t){for(var r in t){if(s.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},s={}.hasOwnProperty
r=require("./CocoModel")
n=require("../core/utils")
t.exports=i=function(e){o(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.className="EarnedAchievement"
t.schema=require("schemas/models/earned_achievement")
t.prototype.urlRoot="/db/earned_achievement"
t.prototype.save=function(){if(this.get("earnedRewards")===null){this.unset("earnedRewards")}return t.__super__.save.apply(this,arguments)}
return t}(r)})
require.register("models/File",function(e,require,t){var r,i,n=function(e,t){for(var r in t){if(o.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},o={}.hasOwnProperty
r=require("./CocoModel")
t.exports=i=function(e){n(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.className="File"
t.schema={}
t.prototype.urlRoot="/db/file"
return t}(r)})
require.register("models/GameUIState",function(e,require,t){var r,i,n=function(e,t){for(var r in t){if(o.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},o={}.hasOwnProperty
r=require("./CocoModel")
t.exports=i=function(e){n(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.className="GameUIState"
t.schema={type:"object",properties:{canDragCamera:{type:"boolean",description:"Serves as a lock to enable or disable camera movement."},selected:{type:"object",description:"Array of selected thangs",properties:{sprite:{description:"Lank instance"},thang:{description:"Thang object generated by the world"}}}}}
t.prototype.defaults=function(){return{selected:[],canDragCamera:true,realTimeInputEvents:new Backbone.Collection}}
return t}(r)})
require.register("models/Level",function(e,require,t){var r,i,n,o,s,a=function(e,t){for(var r in t){if(l.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},l={}.hasOwnProperty,c=[].indexOf||function(e){for(var t=0,r=this.length;t<r;t++){if(t in this&&this[t]===e)return t}return-1},u=[].slice
r=require("./CocoModel")
n=require("./LevelComponent")
o=require("./LevelSystem")
s=require("./ThangType")
t.exports=i=function(e){a(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.className="Level"
t.schema=require("schemas/models/level")
t.levels={"dungeons-of-kithgard":"5411cb3769152f1707be029c","defense-of-plainswood":"541b67f71ccc8eaae19f3c62"}
t.prototype.urlRoot="/db/level"
t.prototype.editableByArtisans=true
t.prototype.serialize=function(e){var t,r,i,a,l,u,p,d,h,m,g,f,y,v,b,_,w,k,S,C,x,j,P
S=e.supermodel,w=e.session,h=e.otherSession,this.headless=e.headless,this.sessionless=e.sessionless,t=(m=e.cached)!=null?m:false
d=this.denormalize(S,w,h)
d.levelComponents=t?this.getCachedLevelComponents(S):$.extend(true,[],function(){var e,t,r,i
r=S.getModels(n)
i=[]
for(e=0,t=r.length;e<t;e++){a=r[e]
i.push(a.attributes)}return i}())
this.sortThangComponents(d.thangs,d.levelComponents,"Level Thang")
this.fillInDefaultComponentConfiguration(d.thangs,d.levelComponents)
C=$.extend(true,[],function(){var e,t,r,i
r=S.getModels(o)
i=[]
for(e=0,t=r.length;e<t;e++){p=r[e]
i.push(p.attributes)}return i}())
d.systems=this.sortSystems(d.systems,C)
this.fillInDefaultSystemConfiguration(d.systems)
j={}
f=(g=d.thangs)!=null?g:[]
for(r=0,l=f.length;r<l;r++){x=f[r]
j[x.thangType]=true}k=[w!=null?(y=w.get("heroConfig"))!=null?y.thangType:void 0:void 0,h!=null?(v=h.get("heroConfig"))!=null?v.thangType:void 0:void 0]
d.thangTypes=[]
b=S.getModels(s)
for(i=0,u=b.length;i<u;i++){P=b[i]
if(j[P.get("original")]||P.get("kind")!=="Hero"&&P.get("kind")!=null&&P.get("components")&&!P.notInLevel||P.get("kind")==="Hero"&&(this.isType("course","course-ladder","game-dev")||(_=P.get("original"),c.call(k,_)>=0))){d.thangTypes.push({original:P.get("original"),name:P.get("name"),components:$.extend(true,[],P.get("components")),kind:P.get("kind")})}}this.sortThangComponents(d.thangTypes,d.levelComponents,"ThangType")
this.fillInDefaultComponentConfiguration(d.thangTypes,d.levelComponents)
if(this.picoCTFProblem){d.picoCTFProblem=this.picoCTFProblem}return d}
t.prototype.cachedLevelComponents=null
t.prototype.getCachedLevelComponents=function(e){var t,r,i,o,s,a,l
if(this.cachedLevelComponents==null){this.cachedLevelComponents={}}s=e.getModels(n)
l=[]
for(r=0,i=s.length;r<i;r++){o=s[r]
if(o.hasLocalChanges()){l.push($.extend(true,{},o.attributes))
continue}if((t=this.cachedLevelComponents)[a=o.id]==null){t[a]=this.cachedLevelComponents[o.id]=$.extend(true,{},o.attributes)}l.push(this.cachedLevelComponents[o.id])}return l}
t.prototype.denormalize=function(e,t,r){var i,n,o,a,l,c,u,p
a=$.extend(true,{},this.attributes)
if(a.thangs&&this.isType("hero","hero-ladder","hero-coop","course","course-ladder","game-dev","web-dev")){u=function(){var t,r,i,n
i=e.getModels(s)
n=[]
for(t=0,r=i.length;t<r;t++){p=i[t]
if(p.get("components")!=null){n.push(p)}}return n}()
c=_.indexBy(u,function(e){return e.get("original")})
l=a.thangs
for(i=0,n=l.length;i<n;i++){o=l[i]
this.denormalizeThang(o,e,t,r,c)}}return a}
t.prototype.denormalizeThang=function(e,t,r,i,o){var a,l,c,u,p,d,h,m,g,f,y,v,b,w,k,S,C,x,j,P,T,L,A,q,D,I,E,M,N,R,O,B,F,V,U,H,z,W
if(e.components==null){e.components=[]}f=/Hero Placeholder/.test(e.id)&&this.isType("hero","hero-ladder","hero-coop")
if(f&&i){if(e.id==="Hero Placeholder 1"&&r.get("team")==="humans"){r=i}else if(e.id==="Hero Placeholder"&&r.get("team")==="ogres"){r=i}}if(f){A={}
q={}
L=o[e.thangType]
if(!L){console.error("Couldn't find placeholder ThangType for the hero!")
f=false}else{I=L.get("components")
for(m=0,w=I.length;m<w;m++){u=I[m]
A[u.original]=u}E=e.components
for(y=0,k=E.length;y<k;y++){z=E[y]
A[z.original]=z}e.components=[]
h=r!=null?(N=r.get("heroConfig"))!=null?N.thangType:void 0:void 0
if(h){e.thangType=h}}}W=o[e.thangType]
l={}
R=e.components
for(v=0,S=R.length;v<S;v++){z=R[v]
l[z.original]=z}O=(W!=null?W.get("components"):void 0)||[]
for(b=0,C=O.length;b<C;b++){p=O[b]
if(x=l[p.original]){c=$.extend(true,{},p.config)
x.config=_.merge(c,x.config)}else{x=$.extend(true,{},p)
e.components.push(x)}if(f&&(P=A[p.original])){q[P.original]=true
T=(B=P.config)!=null?B:{}
if(x.config==null){x.config={}}a=x.config
if(T.pos){if(a.pos==null){a.pos={}}a.pos.x=T.pos.x
a.pos.y=T.pos.y
a.rotation=T.rotation}else if(T.team){a.team=T.team}else if(T.significantProperty){a.significantProperty=T.significantProperty}else if(T.programmableMethods){c=$.extend(true,{},T)
D=(F=a!=null?a.programmableProperties:void 0)!=null?F:[]
c.programmableProperties=_.union(D,(V=c.programmableProperties)!=null?V:[])
x.config=a=_.merge(c,a)}else if(T.extraHUDProperties){a.extraHUDProperties=_.union((U=a.extraHUDProperties)!=null?U:[],T.extraHUDProperties)}else if(T.voiceRange){a.voiceRange=T.voiceRange
a.cooldown=T.cooldown}}}if(f){if(d=_.find(e.components,{original:n.EquipsID})){g=r!=null?(H=r.get("heroConfig"))!=null?H.inventory:void 0:void 0
if(d.config==null){d.config={}}if(g){d.config.inventory=$.extend(true,{},g)}}for(j in A){P=A[j]
if(!q[j]){e.components.push(P)}}}if(/Hero Placeholder/.test(e.id)&&this.isType("course")&&!this.headless&&!this.sessionless&&!window.serverConfig.picoCTF){h=((M=me.get("heroConfig"))!=null?M.thangType:void 0)||s.heroes.captain
if(h){return e.thangType=h}}}
t.prototype.sortSystems=function(e,t){var r,i,n,o,s,a,l,c
o=[[],{}],a=o[0],n=o[1]
c=function(r){var i,o,s,l,u,p
if(r.original in n){return}p=_.find(t,{original:r.original})
if(!p){return console.error("Couldn't find model for original",r.original,"from",t)}l=p.dependencies||[]
for(o=0,s=l.length;o<s;o++){i=l[o]
u=_.find(e,{original:i.original})
c(u)}a.push({model:p,config:$.extend(true,{},r.config)})
return n[r.original]=true}
s=e!=null?e:[]
for(r=0,i=s.length;r<i;r++){l=s[r]
c(l)}return a}
t.prototype.sortThangComponents=function(e,t,r){var i,n,o,s,a,l,u,p,d,h,m,g,f,y,v
p=_.indexBy(t,"original")
n=_.find(t,{name:"Allied"})
i=_.find(t,{name:"Acts"})
h=e!=null?e:[]
g=[]
for(s=0,l=h.length;s<l;s++){y=h[s]
d=_.indexBy(y.components,"original")
f=[]
v=function(e,o){var s,a,l,u,h,m,g,b,_,w,k,S,C,x,j,P
if(c.call(f,e)>=0){return}_=p[e.original]
if(!_){console.error(y.id||y.name,"couldn't find lc for",e,"of",t)}if(!_){return}if(o&&(C=_.name,c.call(o,C)>=0)){return}if(_.name==="Plans"){x=y.components
for(m=0,w=x.length;m<w;m++){l=x[m]
v(l,[_.name,"Programmable"])}}else if(_.name==="Programmable"){j=y.components
for(g=0,k=j.length;g<k;g++){l=j[g]
v(l,[_.name])}}else{P=_.dependencies||[]
for(b=0,S=P.length;b<S;b++){u=P[b]
l=d[u.original]
if(!l){h=p[u.original]
h=(h!=null?h.name:void 0)||u.original
console.error(r,y.id||y.name,"does not have dependent Component",h,"from",_.name)}if(l){v(l)}}if(_.name==="Collides"&&n){if(a=d[n.original]){v(a)}}if(_.name==="Moves"&&i){if(s=d[i.original]){v(s)}}}return f.push(e)}
m=y.components
for(a=0,u=m.length;a<u;a++){o=m[a]
v(o)}g.push(y.components=f)}return g}
t.prototype.fillInDefaultComponentConfiguration=function(e,t){var r,i,o,s,a,l,c,u,p,d,h,m,g
if(this.defaultComponentConfigurations==null){this.defaultComponentConfigurations={}}r=0
p=0
i=0
h=e!=null?e:[]
m=[]
for(a=0,u=h.length;a<u;a++){g=h[a]
m.push(function(){var e,a,u,h,m,f,y
m=g.components||[]
y=[]
for(a=0,u=m.length;a<u;a++){o=m[a]
l=o.original===n.PhysicalID
if(!l&&(s=_.find(this.defaultComponentConfigurations[o.original],function(e){return _.isEqual(o,e.originalComponent)}))){o.config=s.defaultedConfig;++r
continue}if(!(c=_.find(t,{original:o.original}))){continue}if(!l){d=$.extend(true,{},o)}if(o.config==null){o.config={}}TreemaUtils.populateDefaults(o.config,(f=c.configSchema)!=null?f:{},tv4)
this.lastType="component"
this.lastOriginal=o.original
if(!l){if((e=this.defaultComponentConfigurations)[h=o.original]==null){e[h]=[]}this.defaultComponentConfigurations[o.original].push({originalComponent:d,defaultedConfig:o.config});++i}y.push(++p)}return y}.call(this))}return m}
t.prototype.fillInDefaultSystemConfiguration=function(e){var t,r,i,n,o
i=e!=null?e:[]
n=[]
for(t=0,r=i.length;t<r;t++){o=i[t]
if(o.config==null){o.config={}}TreemaUtils.populateDefaults(o.config,o.model.configSchema,tv4)
this.lastType="system"
n.push(this.lastOriginal=o.model.name)}return n}
t.prototype.dimensions=function(){var e,t,r,i,n,o,s,a,l,c,u
u=0
r=0
a=this.get("thangs")||[]
for(i=0,o=a.length;i<o;i++){c=a[i]
l=c.components
for(n=0,s=l.length;n<s;n++){t=l[n]
e=t.config
if(e==null){continue}if(e.width!=null&&e.width>u){u=e.width}if(e.height!=null&&e.height>r){r=e.height}}}return{width:u,height:r}}
t.prototype.isLadder=function(){var e
return((e=this.get("type"))!=null?e.indexOf("ladder"):void 0)>-1}
t.prototype.isProject=function(){return this.get("shareable")==="project"}
t.prototype.isType=function(){var e,t
t=1<=arguments.length?u.call(arguments,0):[]
return e=this.get("type",true),c.call(t,e)>=0}
t.prototype.fetchNextForCourse=function(e,t){var r,i,n,o
n=e.levelOriginalID,i=e.courseInstanceID,r=e.courseID,o=e.sessionID
if(t==null){t={}}if(i){t.url="/db/course_instance/"+i+"/levels/"+n+"/sessions/"+o+"/next"}else{t.url="/db/course/"+r+"/levels/"+n+"/next"}return this.fetch(t)}
t.prototype.getSolutions=function(){var e,t,r,i,n,o,s,a,l,c,u,p
if(!(r=_.find((s=this.get("thangs"))!=null?s:[],{id:"Hero Placeholder"}))){return[]}if(!(o=(a=_.find((l=r.components)!=null?l:[],function(e){var t,r
return(t=e.config)!=null?(r=t.programmableMethods)!=null?r.plan:void 0:void 0}))!=null?a.config.programmableMethods.plan:void 0)){return[]}p=_.cloneDeep((c=o.solutions)!=null?c:[])
for(i=0,n=p.length;i<n;i++){u=p[i]
try{u.source=_.template(u.source)(o.context)}catch(t){e=t
console.error("Problem with template and solution comments for",this.get("slug"),e)}}return p}
t.prototype.getSampleCode=function(){var e,t,r,i,n,o,s,a,l,c,u
if(!(i=_.find((s=this.get("thangs"))!=null?s:[],{id:"Hero Placeholder"}))){return{}}if(!(o=(a=_.find((l=i.components)!=null?l:[],function(e){var t,r
return(t=e.config)!=null?(r=t.programmableMethods)!=null?r.plan:void 0:void 0}))!=null?a.config.programmableMethods.plan:void 0)){return{}}u=_.cloneDeep((c=o.languages)!=null?c:{})
u.javascript=o.source
for(n in u){e=u[n]
try{u[n]=_.template(e)(o.context)}catch(e){t=e
console.error("Problem with template and solution comments for",this.get("slug"),t)}}return u}
return t}(r)})
require.register("models/LevelComponent",function(e,require,t){var r,i,n=function(e,t){for(var r in t){if(o.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},o={}.hasOwnProperty,s=[].indexOf||function(e){for(var t=0,r=this.length;t<r;t++){if(t in this&&this[t]===e)return t}return-1}
r=require("./CocoModel")
t.exports=i=function(e){n(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.className="LevelComponent"
t.schema=require("schemas/models/level_component")
t.EquipsID="53e217d253457600003e3ebb"
t.ItemID="53e12043b82921000051cdf9"
t.AttacksID="524b7ba57fc0f6d519000016"
t.PhysicalID="524b75ad7fc0f6d519000001"
t.ExistsID="524b4150ff92f1f4f8000024"
t.LandID="524b7aff7fc0f6d519000006"
t.CollidesID="524b7b857fc0f6d519000012"
t.PlansID="524b7b517fc0f6d51900000d"
t.ProgrammableID="524b7b5a7fc0f6d51900000e"
t.MovesID="524b7b8c7fc0f6d519000013"
t.MissileID="524cc2593ea855e0ab000142"
t.FindsPathsID="52872b0ead92b98561000002"
t.AttackableID="524b7bab7fc0f6d519000017"
t.prototype.urlRoot="/db/level.component"
t.prototype.editableByArtisans=true
t.prototype.set=function(e,r,i){var n,o
if(_.isObject(e)){o=[e,r],n=o[0],i=o[1]}else{(n={})[e]=r}if("code"in n&&!("js"in n)){n.js=this.compile(n.code)}return t.__super__.set.call(this,n,i)}
t.prototype.onLoaded=function(){t.__super__.onLoaded.call(this)
if(!this.get("js")){return this.set("js",this.compile(this.get("code")))}}
t.prototype.compile=function(e){var t,r,i
if(this.get("codeLanguage")&&this.get("codeLanguage")!=="coffeescript"){return console.error("Can't compile",this.get("codeLanguage"),"-- only CoffeeScript.",this)}try{i=CoffeeScript.compile(e,{bare:true})}catch(e){t=e
i=this.get("js")}return i}
t.prototype.getDependencies=function(e){var t,r,i,n,o,a,l,c,u,p
p=[]
l=this.get("dependencies")||[]
for(i=0,o=l.length;i<o;i++){r=l[i]
t=_.find(e,function(e){return e.get("original")===r.original&&e.get("version").major===r.majorVersion})
c=t.getDependencies(e).concat([t])
for(n=0,a=c.length;n<a;n++){u=c[n]
if(s.call(p,u)<0){p.push(u)}}}return p}
return t}(r)})
require.register("models/LevelFeedback",function(e,require,t){var r,i,n=function(e,t){for(var r in t){if(o.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},o={}.hasOwnProperty
r=require("./CocoModel")
t.exports=i=function(e){n(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.className="LevelFeedback"
t.schema=require("schemas/models/level_feedback")
t.prototype.urlRoot="/db/level.feedback"
return t}(r)})
require.register("models/LevelSession",function(e,require,t){var r,i,n=function(e,t){for(var r in t){if(o.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},o={}.hasOwnProperty
r=require("./CocoModel")
t.exports=i=function(e){n(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.className="LevelSession"
t.schema=require("schemas/models/level_session")
t.prototype.urlRoot="/db/level.session"
t.prototype.initialize=function(){t.__super__.initialize.call(this)
return this.on("sync",function(e){return function(t){var r
r=e.get("state")||{}
if(r.scripts==null){r.scripts={}}return e.set("state",r)}}(this))}
t.prototype.updatePermissions=function(){var e,t
t=this.get("permissions",true)
t=function(){var r,i,n
n=[]
for(r=0,i=t.length;r<i;r++){e=t[r]
if(e.target!=="public"){n.push(e)}}return n}()
return this.set("permissions",t)}
t.prototype.getSourceFor=function(e){var t,r,i
t=this.get("code")
r=e.split("/")
return t!=null?(i=t[r[0]])!=null?i[r[1]]:void 0:void 0}
t.prototype.readyToRank=function(){var e,t,r,i,n,o,s,a,l,c,u
if(!this.get("levelID")){return false}if(!(e=this.get("code"))){return false}if(!(l=this.get("team"))){return false}if(!(t=this.get("submittedCode"))){return true}u=function(){var e,t,r,i
r=this.get("teamSpells")[l]
i=[]
for(e=0,t=r.length;e<t;e++){s=r[e]
i.push(s.split("/"))}return i}.call(this)
for(r=0,n=u.length;r<n;r++){i=u[r]
c=i[0]
a=i[1]
if(e[c][a]!==((o=t[c])!=null?o[a]:void 0)){return true}}return false}
t.prototype.isMultiplayer=function(){return this.get("submittedCodeLanguage")!=null&&this.get("team")!=null}
t.prototype.completed=function(){var e
return((e=this.get("state"))!=null?e.complete:void 0)||this.get("submitted")||false}
t.prototype.shouldAvoidCorruptData=function(e){var t,r,i,n
if(me.team!=="humans"){return false}if(_.string.startsWith((t=(r=(i=e!=null?e.code:void 0)!=null?i:this.get("code"))!=null?(n=r.anya)!=null?n.makeBid:void 0:void 0)!=null?t:"","var __interceptThis")){noty({text:"Not saving session--it's trying to overwrite Anya's code with transpiled output. Please let us know and help us reproduce this bug!",layout:"topCenter",type:"error",killer:false,timeout:12e4})
return true}return false}
t.prototype.save=function(e,r){if(this.shouldAvoidCorruptData(e)){return}return t.__super__.save.call(this,e,r)}
t.prototype.increaseDifficulty=function(e){var t,r,i
i=(t=this.get("state"))!=null?t:{}
i.difficulty=((r=i.difficulty)!=null?r:0)+1
delete i.lastUnsuccessfulSubmissionTime
this.set("state",i)
this.trigger("change-difficulty")
return this.save(null,{success:e})}
t.prototype.timeUntilResubmit=function(){var e,t,r,i
r=(t=this.get("state"))!=null?t:{}
if(!(e=r.lastUnsuccessfulSubmissionTime)){return 0}if(_.isString(e)){e=new Date(e)}i=e-new Date+22*60*60*1e3
if(i>24*60*60*1e3){i=24*60*60*1e3
r.lastUnsuccessfulSubmissionTime=new Date
this.set("state",r)}return i}
t.prototype.recordScores=function(e,t){var r,i,n,o,s,a,l,c,u,p,d,h
if(!e){return}h=this.get("state")
l=(c=h.topScores)!=null?c:[]
o=[]
s=new Date
p=(u=t.get("scoreTypes"))!=null?u:[]
for(r=0,i=p.length;r<i;r++){d=p[r]
a=_.find(l,{type:d})
n=e[d]
if(n==null){o.push(a)
continue}if(d==="time"||d==="damage-taken"){n*=-1}if(a==null||n>a.score){o.push({type:d,date:s,score:n})}else{o.push(a)}}h.topScores=o
return this.set("state",h)}
t.prototype.generateSpellsObject=function(e){var t,r,i,n,o,s,a,l,c,u,p,d
if(e==null){e={}}o=e.level
r=require("lib/aether_utils").createAetherOptions
t=r({functionName:"plan",codeLanguage:this.get("codeLanguage"),skipProtectAPI:(s=e.level)!=null?s.isType("game-dev"):void 0})
p={thang:{id:"Hero Placeholder"},aether:new Aether(t)}
d={"hero-placeholder/plan":{thang:p,name:"plan"}}
u=(a=(l=this.get("code"))!=null?(c=l["hero-placeholder"])!=null?c.plan:void 0:void 0)!=null?a:""
try{p.aether.transpile(u)}catch(e){i=e
console.log("Couldn't transpile!\n"+u+"\n",i)
p.aether.transpile("")}return d}
t.prototype.isFake=function(){return this.id==="A Fake Session ID"}
t.prototype.inLeague=function(e){var t,r,i,n
if(!this.get("leagues")){return false}n=this.get("leagues")
for(t=0,i=n.length;t<i;t++){r=n[t]
if(r.leagueID===e){return true}}return false}
return t}(r)})
require.register("models/LevelSystem",function(e,require,t){var r,i,n,o=function(e,t){for(var r in t){if(s.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},s={}.hasOwnProperty,a=[].indexOf||function(e){for(var t=0,r=this.length;t<r;t++){if(t in this&&this[t]===e)return t}return-1}
r=require("./CocoModel")
n=require("core/SystemNameLoader")
t.exports=i=function(e){o(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.className="LevelSystem"
t.schema=require("schemas/models/level_system")
t.prototype.urlRoot="/db/level.system"
t.prototype.editableByArtisans=true
t.prototype.set=function(e,r,i){var n,o
if(_.isObject(e)){o=[e,r],n=o[0],i=o[1]}else{(n={})[e]=r}if("code"in n&&!("js"in n)){n.js=this.compile(n.code)}return t.__super__.set.call(this,n,i)}
t.prototype.onLoaded=function(){t.__super__.onLoaded.call(this)
if(!this.get("js")){this.set("js",this.compile(this.get("code")))}return n.setName(this)}
t.prototype.compile=function(e){var t,r,i
if(this.get("codeLanguage")&&this.get("codeLanguage")!=="coffeescript"){return console.error("Can't compile",this.get("codeLanguage"),"-- only CoffeeScript.",this)}try{i=CoffeeScript.compile(e,{bare:true})}catch(e){t=e
i=this.get("js")}return i}
t.prototype.getDependencies=function(e){var t,r,i,n,o,s,l,c,u,p
u=[]
s=this.get("dependencies")||[]
for(r=0,n=s.length;r<n;r++){t=s[r]
p=_.find(e,function(e){return e.get("original")===t.original&&e.get("version").major===t.majorVersion})
l=p.getDependencies(e).concat([p])
for(i=0,o=l.length;i<o;i++){c=l[i]
if(a.call(u,c)<0){u.push(c)}}}return u}
return t}(r)})
require.register("models/Mandate",function(e,require,t){var r,i,n=function(e,t){for(var r in t){if(o.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},o={}.hasOwnProperty
r=require("./CocoModel")
t.exports=i=function(e){n(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.className="Mandate"
t.schema=require("schemas/models/mandate.schema")
t.prototype.urlRoot="/db/mandates"
return t}(r)})
require.register("models/Patch",function(e,require,t){var r,i,n=function(e,t){for(var r in t){if(o.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},o={}.hasOwnProperty
r=require("./CocoModel")
t.exports=i=function(e){n(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.className="Patch"
t.schema=require("schemas/models/patch")
t.prototype.urlRoot="/db/patch"
t.prototype.setStatus=function(e,t){if(t==null){t={}}t.url="/db/patch/"+this.id+"/status"
t.type="PUT"
return this.save({status:e},t)}
t.setStatus=function(e,t){return $.ajax("/db/patch/"+e+"/status",{type:"PUT",data:{status:t}})}
return t}(r)})
require.register("models/Payment",function(e,require,t){var r,i,n=function(e,t){for(var r in t){if(o.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},o={}.hasOwnProperty
r=require("./CocoModel")
t.exports=i=function(e){n(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.className="Payment"
t.prototype.urlRoot="/db/payment"
return t}(r)})
require.register("models/Poll",function(e,require,t){var r,i,n,o=function(e,t){for(var r in t){if(s.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},s={}.hasOwnProperty
r=require("./CocoModel")
n=require("schemas/models/poll.schema")
t.exports=i=function(e){o(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.className="Poll"
t.schema=n
t.prototype.urlRoot="/db/poll"
t.prototype.applyDelta=function(e){var r,i,n,o,s,a,l,c,u,p,d,h,m,g,f,y,v,b,w,k,S,C,x
c={}
if(e.i18n){c.i18n=$.extend(true,{},e.i18n)}b=(v=e.answers)!=null?v:{}
for(i in b){r=b[i]
if(c.answers==null){c.answers={}}if(_.isArray(r)){if((o=c.answers)[i]==null){o[i]=[]}for(l=0,m=r.length;l<m;l++){a=r[l]
if(_.isNumber(a)){y=a}else{y=$.extend(true,{},a)
for(d in y){n=parseInt(i.replace("_",""),10)
if(!_.isNaN(n)){f=this.get("answers")[n][d]
u=_.string.startsWith(i,"_")
p=d==="i18n"
if(p&&!u){x=y[d]
w=f!=null?f:{}
for(h in w){g=w[h]
k=g!=null?g:{}
for(S in k){C=k[S]
if(x[h]==null){x[h]={}}if((s=x[h])[S]==null){s[S]=C}}}}else{x=f}y[d]=x}}}c.answers[i].push(y)}}else{c.answers[i]=r
if(r!=null?r.votes:void 0){c.answers[i]=_.omit(r,"votes")}}}return t.__super__.applyDelta.call(this,c)}
return t}(r)})
require.register("models/Prepaid",function(e,require,t){var r,i,n,o,s=function(e,t){for(var r in t){if(a.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},a={}.hasOwnProperty,l=[].indexOf||function(e){for(var t=0,r=this.length;t<r;t++){if(t in this&&this[t]===e)return t}return-1}
r=require("./CocoModel")
o=require("schemas/models/prepaid.schema")
n=require("core/constants").STARTER_LICENSE_COURSE_IDS
t.exports=i=function(e){s(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.className="Prepaid"
t.prototype.urlRoot="/db/prepaid"
t.prototype.openSpots=function(){var e
if(this.get("redeemers")!=null){return this.get("maxRedeemers")-((e=this.get("redeemers"))!=null?e.length:void 0)}return this.get("maxRedeemers")}
t.prototype.usedSpots=function(){return _.size(this.get("redeemers"))}
t.prototype.userHasRedeemed=function(e){var t,r,i,n
n=this.get("redeemers")
for(t=0,r=n.length;t<r;t++){i=n[t]
if(i.userID===e){return i.date}}return null}
t.prototype.initialize=function(){this.listenTo(this,"add",function(){var e
e=this.get("maxRedeemers")
if(_.isString(e)){return this.set("maxRedeemers",parseInt(e))}})
return t.__super__.initialize.apply(this,arguments)}
t.prototype.status=function(){var e,t
e=this.get("endDate")
if(e&&new Date(e)<new Date){return"expired"}t=this.get("startDate")
if(t&&new Date(t)>new Date){return"pending"}if(this.openSpots()<=0){return"empty"}return"available"}
t.prototype.redeem=function(e,t){if(t==null){t={}}t.url=_.result(this,"url")+"/redeemers"
t.type="POST"
if(t.data==null){t.data={}}t.data.userID=e.id||e
return this.fetch(t)}
t.prototype.includesCourse=function(e){var t
t=(typeof e.get==="function"?e.get("name"):void 0)||e
if(this.get("type")==="starter_license"){return l.call(this.get("includedCourseIDs"),t)>=0}else{return true}}
t.prototype.revoke=function(e,t){if(t==null){t={}}t.url=_.result(this,"url")+"/redeemers"
t.type="DELETE"
if(t.data==null){t.data={}}t.data.userID=e.id||e
return this.fetch(t)}
t.prototype.hasBeenUsedByTeacher=function(e){if(this.get("creator")===e&&_.detect(this.get("redeemers"),{teacherID:void 0})){return true}return _.detect(this.get("redeemers"),{teacherID:e})}
return t}(r)})
require.register("models/Product",function(e,require,t){var r,i,n=function(e,t){for(var r in t){if(o.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},o={}.hasOwnProperty
r=require("./CocoModel")
t.exports=i=function(e){n(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.className="Product"
t.schema=require("schemas/models/product.schema")
t.prototype.urlRoot="/db/products"
t.prototype.priceStringNoSymbol=function(){return(this.get("amount")/100).toFixed(2)}
t.prototype.adjustedPriceStringNoSymbol=function(){var e
e=this.get("amount")
if(this.get("coupons")!=null&&this.get("coupons").length>0){e=this.get("coupons")[0].amount}return(e/100).toFixed(2)}
t.prototype.adjustedPrice=function(){var e
e=this.get("amount")
if(this.get("coupons")!=null&&this.get("coupons").length>0){e=this.get("coupons")[0].amount}return e}
t.prototype.purchase=function(e,t){if(t==null){t={}}t.url=_.result(this,"url")+"/purchase"
t.method="POST"
if(t.data==null){t.data={}}t.data.token=e.id
t.data.timestamp=(new Date).getTime()
t.data=JSON.stringify(t.data)
t.contentType="application/json"
return $.ajax(t)}
return t}(r)})
require.register("models/Purchase",function(e,require,t){var r,i,n=function(e,t){for(var r in t){if(o.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},o={}.hasOwnProperty
r=require("./CocoModel")
t.exports=i=function(e){n(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.className="Purchase"
t.prototype.urlRoot="/db/purchase"
t.schema=require("schemas/models/purchase.schema")
t.makeFor=function(e){var r
return r=new t({recipient:me.id,purchaser:me.id,purchased:{original:e.get("original"),collection:_.string.underscored(e.constructor.className)}})}
return t}(r)})
require.register("models/SkippedContact",function(e,require,t){var r,i,n=function(e,t){for(var r in t){if(o.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},o={}.hasOwnProperty
r=require("./CocoModel")
t.exports=i=function(e){n(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.className="SkippedContact"
t.prototype.urlRoot="/db/skipped-contact"
return t}(r)})
require.register("models/State",function(e,require,t){var r,i,n,o=function(e,t){for(var r in t){if(s.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},s={}.hasOwnProperty
r=require("./CocoModel")
n=require("schemas/models/poll.schema")
t.exports=i=function(e){o(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.className="State"
return t}(r)})
require.register("models/StripeCoupon",function(e,require,t){var r,i,n=function(e,t){for(var r in t){if(o.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},o={}.hasOwnProperty
r=require("./CocoModel")
t.exports=i=function(e){n(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.className="StripeCoupon"
t.schema={}
t.prototype.urlRoot="/stripe/coupons"
t.prototype.idAttribute="id"
t.prototype.formatString=function(){var e
e=[this.id]
if(this.get("percent_off")){e.push("("+this.get("percent_off")+"% off)")}else if(this.get("amount_off")){e.push("($"+this.get("amount_off")+" off)")}if(this.get("duration")){e.push("(duration: "+this.get("duration")+")")}if(this.redeem_by){e.push("(redeem by: "+moment(this.get("redeem_by")).format("lll"))}return e.join(" ")}
return t}(r)})
require.register("models/SuperModel",function(e,require,t){var r,i,n,o,s,a=function(e,t){return function(){return e.apply(t,arguments)}},l=function(e,t){for(var r in t){if(c.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},c={}.hasOwnProperty
t.exports=s=function(e){l(t,e)
function t(){this.updateProgress=a(this.updateProgress,this)
this.num=0
this.denom=0
this.progress=0
this.resources={}
this.rid=0
this.maxProgress=1
this.models={}
this.collections={}}t.prototype.report=function(){var e,t,r,i,n
console.info("SuperModel report ------------------------")
console.info(_.values(this.resources).length+" resources.")
n=[]
r=_.values(this.resources)
for(e=0,t=r.length;e<t;e++){i=r[e]
if(!i){continue}console.info("\t",i.name,"loaded",i.isLoaded,i.model)
if(!i.isLoaded){n.push(i)}}return n}
t.prototype.numDuplicates=function(){var e,t
e=function(){var e,r,i,n
i=_.values(this.models)
n=[]
for(e=0,r=i.length;e<r;e++){t=i[e]
n.push(t.get("_id"))}return n}.call(this)
return _.size(e)-_.size(_.unique(e))}
t.prototype.loadModel=function(e,t,r,i){var n,o
if(i==null){i=1}if(_.isNumber(r)){i=r}if(_.isObject(t)){r=t}if(!((r!=null?r.cache:void 0)===false&&t==="opponent_session")){n=this.getModelByURL(e.getURL())}if(n){if(n.loaded){o=this.addModelResource(n,t,r,0)
o.markLoaded()
return o}else{o=this.addModelResource(n,t,r,i)
o.markLoading()
return o}}else{this.registerModel(e)
o=this.addModelResource(e,t,r,i)
if(e.loaded){o.markLoaded()}else{o.load()}return o}}
t.prototype.loadCollection=function(e,t,r,i){var n,o,s,a
if(i==null){i=1}if(_.isNumber(r)){i=r}if(_.isObject(t)){r=t}a=e.getURL()
if(n=this.collections[a]){console.debug("Collection cache hit",a,"already loaded",n.loaded)
if(n.loaded){s=this.addModelResource(n,t,r,0)
s.markLoaded()
return s}else{s=this.addModelResource(n,t,r,i)
s.markLoading()
return s}}else{this.addCollection(e)
o=function(t){if(e.url===t.url){return this.registerCollection(t)}else{console.warn("Sync triggered for collection",t)
console.warn("Yet got other object",t)
return this.listenToOnce(e,"sync",o)}}
this.listenToOnce(e,"sync",o)
s=this.addModelResource(e,t,r,i)
if(!(s.isLoading||s.isLoaded)){s.load()}return s}}
t.prototype.trackModel=function(e,t){var r
r=this.addModelResource(e,"",{},t)
return r.listen()}
t.prototype.trackCollection=function(e,t){var r
r=this.addModelResource(e,"",{},t)
return r.listen()}
t.prototype.trackRequest=function(e,t){var r
if(t==null){t=1}r=new n("",t)
r.jqxhr=e
e.done(function(){return r.markLoaded()})
e.fail(function(){return r.markFailed()})
this.storeResource(r,t)
return e}
t.prototype.trackRequests=function(e,t){var r,i,n,o
if(t==null){t=1}o=[]
for(r=0,n=e.length;r<n;r++){i=e[r]
o.push(this.trackRequest(i,t))}return o}
t.prototype.shouldSaveBackups=function(e){return false}
t.prototype.getModel=function(e,t){var r
if(_.isString(e)){return this.getModelByURL(e)}r=new e({_id:t})
return this.getModelByURL(r.getURL())}
t.prototype.getModelByURL=function(e){if(_.isFunction(e)){e=e()}return this.models[e]||null}
t.prototype.getModelByOriginal=function(e,t,r){if(r==null){r=null}return _.find(this.models,function(i){return i.get("original")===t&&i.constructor.className===e.className&&(!r||r(i))})}
t.prototype.getModelByOriginalAndMajorVersion=function(e,t,r){if(r==null){r=0}return _.find(this.models,function(i){var n
if(!(n=i.get("version"))){return}return i.get("original")===t&&n.major===r&&i.constructor.className===e.className})}
t.prototype.getModels=function(e){var t,r
if(e){return function(){var i,n
i=this.models
n=[]
for(t in i){r=i[t]
if(r.constructor.className===e.className){n.push(r)}}return n}.call(this)}return _.values(this.models)}
t.prototype.registerModel=function(e){return this.models[e.getURL()]=e}
t.prototype.getCollection=function(e){return this.collections[e.getURL()]||e}
t.prototype.addCollection=function(e){var t
t=e.getURL()
if(this.collections[t]!=null&&this.collections[t]!==e){return console.warn("Tried to add Collection '"+t+"' to SuperModel when we already had it.")}return this.registerCollection(e)}
t.prototype.registerCollection=function(e){var t,r,i,n,o,s,a
if(e.isCachable){this.collections[e.getURL()]=e}a=e.models
for(i=n=0,o=a.length;n<o;i=++n){s=a[i]
t=this.getModelByURL(s.getURL())
if(t){r=$.extend(true,{},s.attributes)
t.set(r,{silent:true,fromMerge:true})}else{this.registerModel(s)}}return e}
t.prototype.finished=function(){return this.progress===1||!this.denom||this.failed}
t.prototype.addModelResource=function(e,t,i,n){var o
if(n==null){n=1}if(_.isNumber(i)){n=i}if(_.isObject(t)){i=t}e.saveBackups=e.saveBackups||this.shouldSaveBackups(e)
this.checkName(t)
o=new r(e,t,i,n)
this.storeResource(o,n)
return o}
t.prototype.removeModelResource=function(e){return this.removeResource(_.find(this.resources,function(t){return(t!=null?t.model:void 0)===e}))}
t.prototype.addRequestResource=function(e,t,r){var n
if(r==null){r=1}if(_.isNumber(t)){r=t}if(_.isObject(e)){t=e}this.checkName(e)
n=new i(e,t,r)
this.storeResource(n,r)
return n}
t.prototype.addSomethingResource=function(e,t){var r
if(t==null){t=1}if(_.isNumber(e)){t=e}this.checkName(e)
r=new o(e,t)
this.storeResource(r,t)
return r}
t.prototype.checkName=function(e){}
t.prototype.storeResource=function(e,t){this.rid++
e.rid=this.rid
this.resources[this.rid]=e
this.listenToOnce(e,"loaded",this.onResourceLoaded)
this.listenTo(e,"failed",this.onResourceFailed)
this.denom+=t
if(this.denom){return _.defer(this.updateProgress)}}
t.prototype.removeResource=function(e){if(!this.resources[e.rid]){return}this.resources[e.rid]=null
if(e.isLoaded){--this.num}--this.denom
return _.defer(this.updateProgress)}
t.prototype.onResourceLoaded=function(e){if(!this.resources[e.rid]){return}this.num+=e.value
_.defer(this.updateProgress)
e.clean()
this.stopListening(e,"failed",this.onResourceFailed)
return this.trigger("resource-loaded",e)}
t.prototype.onResourceFailed=function(e){if(!this.resources[e.rid]){return}this.failed=true
this.trigger("failed",{resource:e})
return e.clean()}
t.prototype.updateProgress=function(){var e
e=this.denom?this.num/this.denom:1
e=Math.min(this.maxProgress,e)
if(this.progress>=e){return}this.progress=e
this.trigger("update-progress",this.progress)
if(this.finished()){return this.trigger("loaded-all")}}
t.prototype.setMaxProgress=function(e){this.maxProgress=e}
t.prototype.resetProgress=function(){return this.progress=0}
t.prototype.clearMaxProgress=function(){this.maxProgress=1
return _.defer(this.updateProgress)}
t.prototype.getProgress=function(){return this.progress}
t.prototype.getResource=function(e){return this.resources[e]}
t.prototype.finishLoading=function(){return new Promise(function(e){return function(t,r){if(e.finished()){return t(e)}e.once("failed",function(e){var t,i,n
n=e.resource
t=n.jqxhr
return r({message:((i=t.responseJSON)!=null?i.message:void 0)||t.responseText||"Unknown Error"})})
return e.once("loaded-all",function(){return t(e)})}}(this))}
return t}(Backbone.Model)
n=function(e){l(t,e)
function t(e,t){if(t==null){t=1}this.name=e
this.value=t
this.rid=-1
this.isLoading=false
this.isLoaded=false
this.model=null
this.jqxhr=null}t.prototype.markLoaded=function(){if(this.isLoaded){return}this.trigger("loaded",this)
this.isLoaded=true
return this.isLoading=false}
t.prototype.markFailed=function(){if(this.isLoaded){return}this.trigger("failed",this)
this.isLoaded=this.isLoading=false
return this.isFailed=true}
t.prototype.markLoading=function(){this.isLoaded=this.isFailed=false
return this.isLoading=true}
t.prototype.clean=function(){return this.jqxhr=null}
t.prototype.load=function(){return this}
return t}(Backbone.Model)
r=function(e){l(t,e)
function t(e,r,i,n){t.__super__.constructor.call(this,r,n)
this.model=e
this.fetchOptions=i
this.jqxhr=this.model.jqxhr
this.loadsAttempted=0}t.prototype.load=function(){this.markLoading()
this.fetchModel()
return this}
t.prototype.fetchModel=function(){if(!this.model.loading){this.jqxhr=this.model.fetch(this.fetchOptions)}return this.listen()}
t.prototype.listen=function(){this.listenToOnce(this.model,"sync",function(){return this.markLoaded()})
return this.listenToOnce(this.model,"error",function(){return this.markFailed()})}
t.prototype.clean=function(){this.jqxhr=null
return this.model.jqxhr=null}
return t}(n)
i=function(e){l(t,e)
function t(e,r,i){t.__super__.constructor.call(this,e,i)
this.jqxhrOptions=r}t.prototype.load=function(){this.markLoading()
this.jqxhr=$.ajax(this.jqxhrOptions)
this.jqxhr.done(function(e){return function(){return _.defer(function(){return e.markLoaded()})}}(this))
this.jqxhr.fail(function(e){return function(){return _.defer(function(){return e.markFailed()})}}(this))
return this}
return t}(n)
o=function(e){l(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}return t}(n)})
require.register("models/ThangType",function(e,require,t){var r,i,n,o,s,a,l,c,u,p=function(e,t){return function(){return e.apply(t,arguments)}},d=function(e,t){for(var r in t){if(h.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},h={}.hasOwnProperty,m=[].indexOf||function(e){for(var t=0,r=this.length;t<r;t++){if(t in this&&this[t]===e)return t}return-1}
i=require("./CocoModel")
a=require("lib/sprites/SpriteBuilder")
n=require("./LevelComponent")
r=require("collections/CocoCollection")
u=require("core/utils")
c=[]
t.exports=l=function(e){d(r,e)
function r(){this.onFileUploaded=p(this.onFileUploaded,this)
return r.__super__.constructor.apply(this,arguments)}r.className="ThangType"
r.schema=require("schemas/models/thang_type")
r.heroes={captain:"529ec584c423d4e83b000014",knight:"529ffbf1cf1818f2be000001",samurai:"53e12be0d042f23505c3023b",raider:"55527eb0b8abf4ba1fe9a107",goliath:"55e1a6e876cb0948c96af9f8",guardian:"566a058620de41290036a745",ninja:"52fc0ed77e01835453bd8f6c","forest-archer":"5466d4f2417c8b48a9811e87",trapper:"5466d449417c8b48a9811e83",pixie:"",assassin:"566a2202e132c81f00f38c81",librarian:"52fbf74b7e01835453bd8d8e","potion-master":"52e9adf7427172ae56002172",sorcerer:"52fd1524c7e6cf99160e7bc9",necromancer:"55652fb3b9effa46a1f775fd","master-wizard":"",duelist:"57588f09046caf2e0012ed41",champion:"575848b522179b2800efbfbf","code-ninja":"58192d484954d56144a7062f"}
r.heroClasses={Warrior:["champion","duelist","captain","knight","samurai","raider","goliath","guardian","code-ninja"],Ranger:["ninja","forest-archer","trapper","pixie","assassin"],Wizard:["librarian","potion-master","sorcerer","necromancer","master-wizard"]}
r.items={"simple-boots":"53e237bf53457600003e3f05"}
r.prototype.urlRoot="/db/thang.type"
r.prototype.building={}
r.prototype.editableByArtisans=true
r.defaultActions=["idle","die","move","attack","trick","cast"]
r.heroConfigStats={}
r.prototype.initialize=function(){r.__super__.initialize.call(this)
this.building={}
return this.spriteSheets={}}
r.prototype.resetRawData=function(){return this.set("raw",{shapes:{},containers:{},animations:{}})}
r.prototype.resetSpriteSheetCache=function(){this.buildActions()
this.spriteSheets={}
return this.building={}}
r.prototype.isFullyLoaded=function(){return this.get("actions")||this.get("raster")}
r.prototype.loadRasterImage=function(){var e
if(this.loadingRaster||this.loadedRaster){return}if(!(e=this.get("raster"))){return}this.rasterImage=$("<img src='/file/"+e+"' />")
this.loadingRaster=true
this.rasterImage.one("load",function(e){return function(){e.loadingRaster=false
e.loadedRaster=true
return e.trigger("raster-image-loaded",e)}}(this))
return this.rasterImage.one("error",function(e){return function(){e.loadingRaster=false
return e.trigger("raster-image-load-errored",e)}}(this))}
r.prototype.getActions=function(){if(!this.isFullyLoaded()){return{}}return this.actions||this.buildActions()}
r.prototype.getDefaultActions=function(){var e,t,i,n,o
t=[]
o=_.values(this.getActions())
for(i=0,n=o.length;i<n;i++){e=o[i]
if(!_.any(r.defaultActions,function(t){return _.string.startsWith(e.name,t)})){continue}t.push(e)}return t}
r.prototype.buildActions=function(){var e,t,r,i,n,o,s
if(!this.isFullyLoaded()){return null}this.actions=$.extend(true,{},this.get("actions"))
r=this.actions
for(t in r){e=r[t]
e.name=t
n=(i=e.relatedActions)!=null?i:{}
for(s in n){o=n[s]
o.name=e.name+"_"+s
this.actions[o.name]=o}}return this.actions}
r.prototype.fillOptions=function(e){if(e==null){e={}}e=_.clone(e)
if(e.resolutionFactor==null){e.resolutionFactor=SPRITE_RESOLUTION_FACTOR}if(e.async==null){e.async=false}e.thang=null
return e}
r.prototype.buildSpriteSheet=function(e){var t,r,i
if(!(this.isFullyLoaded()&&this.get("raw"))){return false}this.options=this.fillOptions(e)
t=this.spriteSheetKey(this.options)
if(i=this.spriteSheets[t]){return i}if(this.building[t]){this.options=null
return t}this.t0=(new Date).getTime()
this.initBuild(e)
if(!this.options.portraitOnly){this.addGeneralFrames()}this.addPortrait()
this.building[t]=true
r=this.finishBuild()
return r}
r.prototype.initBuild=function(e){if(!this.actions){this.buildActions()}this.vectorParser=new a(this,e)
this.builder=new createjs.SpriteSheetBuilder
this.builder.padding=2
return this.frames={}}
r.prototype.addPortrait=function(){var e,t,r,i,n,o,s,a,l
if(!this.actions){return}i=this.actions.portrait
if(!i){return}l=i.scale||1
n=(s=i.positions)!=null?s.registration:void 0
o=new createjs.Rectangle((n!=null?n.x:void 0)/l||0,(n!=null?n.y:void 0)/l||0,100/l,100/l)
if(i.animation){r=this.vectorParser.buildMovieClip(i.animation)
r.nominalBounds=r.frameBounds=null
this.builder.addMovieClip(r,o,l)
t=this.builder._animations[i.animation].frames
if(i.frames!=null){t=this.mapFrames(i.frames,t[0])}return this.builder.addAnimation("portrait",t,true)}else if(i.container){a=this.vectorParser.buildContainerFromStore(i.container)
e=this.builder.addFrame(a,o,l)
return this.builder.addAnimation("portrait",[e],false)}}
r.prototype.addGeneralFrames=function(){var e,t,r,i,n,o,s,a,l,c,u,p,d,h,m,g,f,y
n={}
u=this.requiredRawAnimations()
for(o=0,s=u.length;o<s;o++){t=u[o]
l=t.animation
a=this.vectorParser.buildMovieClip(l)
if(!a){continue}this.builder.addMovieClip(a,null,t.scale*this.options.resolutionFactor)
n[t.scale+"_"+l]=this.builder._animations[l].frames}p=this.actions
for(l in p){e=p[l]
if(!e.animation){continue}if(l==="portrait"){continue}y=(d=(h=e.scale)!=null?h:this.get("scale"))!=null?d:1
i=n[y+"_"+e.animation]
if(!i){continue}if(e.frames!=null){i=this.mapFrames(e.frames,i[0])}c=true
if(e.goesTo){c=e.goesTo}if(e.loops===false){c=false}this.builder.addAnimation(l,i,c)}m=this.actions
g=[]
for(l in m){e=m[l]
if(!(e.container&&!e.animation)){continue}if(l==="portrait"){continue}y=this.options.resolutionFactor*(e.scale||this.get("scale")||1)
f=this.vectorParser.buildContainerFromStore(e.container)
if(!f){continue}r=this.builder.addFrame(f,f.bounds,y)
g.push(this.builder.addAnimation(l,[r],false))}return g}
r.prototype.requiredRawAnimations=function(){var e,t,r,i,n,o,s,a,l,c,u
c=[]
a=this.get("actions")
for(s in a){t=a[s]
if(s==="portrait"){continue}r=[t].concat(_.values((l=t.relatedActions)!=null?l:{}))
for(n=0,o=r.length;n<o;n++){e=r[n]
if(!e.animation){continue}u=s==="portrait"?e.scale||1:e.scale||this.get("scale")||1
i={animation:e.animation,scale:u}
i.portrait=s==="portrait"
if(!_.find(c,function(e){return _.isEqual(e,i)})){c.push(i)}}}return c}
r.prototype.mapFrames=function(e,t){var r,i,n,o,s
if(!_.isString(e)){return e}o=e.split(",")
s=[]
for(i=0,n=o.length;i<n;i++){r=o[i]
s.push(parseInt(r,10)+t)}return s}
r.prototype.finishBuild=function(){var e,t
if(_.isEmpty(this.builder._animations)){return}e=this.spriteSheetKey(this.options)
t=null
if(this.options.async){c.push(this.builder)
this.builder.t0=(new Date).getTime()
if(!(c.length>1)){this.builder.buildAsync()}this.builder.on("complete",this.onBuildSpriteSheetComplete,this,true,[this.builder,e,this.options])
this.builder=null
return e}t=this.builder.build()
this.logBuild(this.t0,false,this.options.portraitOnly)
this.spriteSheets[e]=t
this.building[e]=false
this.builder=null
this.options=null
return t}
r.prototype.onBuildSpriteSheetComplete=function(e,t){var r,i,n,o
r=t[0],i=t[1],n=t[2]
this.logBuild(r.t0,true,n.portraitOnly)
c=c.slice(1)
if(c[0]){c[0].t0=(new Date).getTime()}if((o=c[0])!=null){o.buildAsync()}this.spriteSheets[i]=e.target.spriteSheet
this.building[i]=false
this.trigger("build-complete",{key:i,thangType:this})
return this.vectorParser=null}
r.prototype.logBuild=function(e,t,r){var i,n,o
i=t?"Async":"Sync "
r=r?"(Portrait)":""
n=_.string.rpad(this.get("name"),20)
o=_.string.lpad(""+(new Date).getTime()-e,6)
return console.debug("Built sheet:  "+n+" "+o+"ms  "+i+"  "+r)}
r.prototype.spriteSheetKey=function(e){var t,r,i,n,o
t=[]
o=e.colorConfig||{}
for(i in o){r=o[i]
t.push(i+":"+r.hue+"|"+r.saturation+"|"+r.lightness)}t=t.join(",")
n=!!e.portraitOnly
return this.get("name")+" - "+e.resolutionFactor+" - "+t+" - "+n}
r.prototype.getHeroShortName=function(){var e,t,r
e={Assassin:{"en-US":"Ritic"},Captain:{"en-US":"Anya","zh-HANS":"安雅"},Champion:{"en-US":"Ida"},"Master Wizard":{"en-US":"Usara"},Duelist:{"en-US":"Alejandro"},"Forest Archer":{"en-US":"Naria"},Goliath:{"en-US":"Okar"},Guardian:{"en-US":"Illia"},Knight:{"en-US":"Tharin","zh-HANS":"坦林"},Librarian:{"en-US":"Hushbaum"},Necromancer:{"en-US":"Nalfar"},Ninja:{"en-US":"Amara"},Pixie:{"en-US":"Zana"},"Potion Master":{"en-US":"Omarn"},Raider:{"en-US":"Arryn"},Samurai:{"en-US":"Hattori"},"Ian Elliott":{"en-US":"Hattori"},Sorcerer:{"en-US":"Pender"},Trapper:{"en-US":"Senick"},"Code Ninja":{"en-US":"Code Ninja"}}
t=e[this.get("name")]
if(r=t!=null?t[me.get("preferredLanguage",true)]:void 0){return r}return t!=null?t["en-US"]:void 0}
r.prototype.getPortraitImage=function(e,t){var r
if(t==null){t=100}r=this.getPortraitSource(e,t)
if(!r){return null}return $("<img />").attr("src",r)}
r.prototype.getPortraitSource=function(e,t){var r
if(t==null){t=100}if(this.get("rasterIcon")||this.get("raster")){return this.getPortraitURL()}r=this.getPortraitStage(e,t)
return r!=null?r.toDataURL():void 0}
r.prototype.getPortraitStage=function(e,t){var r,i,n,o,s,a,l,c,u,p,d,h,m
if(t==null){t=100}r=$("<canvas width='"+t+"' height='"+t+"'></canvas>")
try{m=new createjs.Stage(r[0])}catch(e){i=e
console.error("Error trying to create "+this.get("name")+" avatar stage:",i,"with window as",window)
return null}if(!this.isFullyLoaded()){return m}o=e
o=_.isString(o)?o:this.spriteSheetKey(this.fillOptions(o))
h=this.spriteSheets[o]
if(!h){s=_.isPlainObject(e)?e:{}
s.portraitOnly=true
h=this.buildSpriteSheet(s)}if(_.isString(h)){return}if(!h){return}d=new createjs.Sprite(h)
a=(l=this.actions.portrait)!=null?(c=l.positions)!=null?c.registration:void 0:void 0
d.regX=(a!=null?a.x:void 0)||0
d.regY=(a!=null?a.y:void 0)||0
d.framerate=(u=(p=this.actions.portrait)!=null?p.framerate:void 0)!=null?u:20
d.gotoAndStop("portrait")
m.addChild(d)
m.update()
m.startTalking=function(){d.gotoAndPlay("portrait")
return
if(this.tick){return}this.tick=function(e){return function(t){return e.update(t)}}(this)
return createjs.Ticker.addEventListener("tick",this.tick)}
m.stopTalking=function(){d.gotoAndStop("portrait")
return
this.update()
createjs.Ticker.removeEventListener("tick",this.tick)
return this.tick=null}
return m}
r.prototype.getVectorPortraitStage=function(e){var t,r,i,n,o,s,l,c
if(e==null){e=100}if(!this.actions){return}t=$("<canvas width='"+e+"' height='"+e+"'></canvas>")
l=new createjs.Stage(t[0])
r=this.actions.portrait
if(!(r&&(r.animation||r.container))){return}o=r.scale||1
c=new a(this,{})
if(r.animation){s=c.buildMovieClip(r.animation)
s.gotoAndStop(0)}else if(r.container){s=c.buildContainerFromStore(r.container)}i=(n=r.positions)!=null?n.registration:void 0
s.regX=(i!=null?i.x:void 0)/o||0
s.regY=(i!=null?i.y:void 0)/o||0
s.scaleX=s.scaleY=o*e/100
l.addChild(s)
l.update()
return l}
r.prototype.uploadGenericPortrait=function(e,t){var r
if(t==null){t=this.getPortraitSource()}if(!(t&&_.string.startsWith(t,"data:"))){return typeof e==="function"?e():void 0}t=t.replace("data:image/png;base64,","").replace(/\ /g,"+")
r={filename:"portrait.png",mimetype:"image/png",path:"db/thang.type/"+this.get("original"),b64png:t,force:"true"}
return $.ajax("/file",{type:"POST",data:r,success:e||this.onFileUploaded})}
r.prototype.onFileUploaded=function(){return console.log("Image uploaded")}
r.loadUniversalWizard=function(){var e,r
if(this.wizardType){return this.wizardType}r="52a00d55cf1818f2be00000b"
e="/db/thang.type/"+r+"/version"
this.wizardType=new t.exports
this.wizardType.url=function(){return e}
this.wizardType.fetch()
return this.wizardType}
r.prototype.getPortraitURL=function(){var e,t
if(e=this.get("rasterIcon")){return"/file/"+e}if(t=this.get("raster")){return"/file/"+t}return"/file/db/thang.type/"+this.get("original")+"/portrait.png"}
r.prototype.getAllowedSlots=function(){var e,t
e=_.find(this.get("components")||[],function(e){return e.original===n.ItemID})
return(e!=null?(t=e.config)!=null?t.slots:void 0:void 0)||["right-hand"]}
r.prototype.getAllowedHeroClasses=function(){var e
if(e=this.get("heroClass")){return[e]}return["Warrior","Ranger","Wizard"]}
r.prototype.getHeroStats=function(){var e,t,r,i,o,s,a,l,c,u,p,d,h,m,g,f,y,v,b,w,k,S,C,x,j,P,T,L
if(!(s=this.get("heroClass"))){return}i=this.get("components")||[]
if(!(o=(v=_.find(i,{original:n.EquipsID}))!=null?v.config:void 0)){return console.warn(this.get("name"),"is not an equipping hero, but you are asking for its hero stats. (Did you project away components?)")}if(!(p=(b=_.find(i,{original:n.MovesID}))!=null?b.config:void 0)){return console.warn(this.get("name"),"is not a moving hero, but you are asking for its hero stats.")}if(!(g=(w=_.find(i,{original:n.ProgrammableID}))!=null?w.config:void 0)){return console.warn(this.get("name"),"is not a Programmable hero, but you are asking for its hero stats.")}if(this.classStatAverages==null){this.classStatAverages={attack:{Warrior:7.5,Ranger:5,Wizard:2.5},health:{Warrior:7.5,Ranger:5,Wizard:3.5}}}L={}
y={attack:(k=o.attackDamageFactor)!=null?k:1,health:(S=o.maxHealthFactor)!=null?S:1,speed:p.maxSpeed}
C=["attack","health"]
for(a=0,l=C.length;a<l;a++){f=C[a]
T=y[f]
if(T<1){r=10-5/T}else{r=T*5}e=this.classStatAverages[f][this.get("heroClass")]
L[f]={relative:Math.round(2*(e-2.5+r/2))/2/10,absolute:T}
m=function(){var e,t
t=[]
for(d=e=1;e<=3;d=++e){t.push($.i18n.t("choose_hero."+f+"_"+d))}return t}()
h=Math.round(T*100)+"%"
t=$.i18n.t("general."+_.string.slugify(this.get("heroClass")))
L[f].description=[m[0],h,m[1],t,m[2]].join(" ")}u=4
c=16
P=c-u
j=y.speed-u
L.speed={relative:Math.round(20*j/P)/2/10,absolute:y.speed,description:$.i18n.t("choose_hero.speed_1")+" "+y.speed+" "+$.i18n.t("choose_hero.speed_2")}
L.skills=function(){var e,t,r,i
r=g.programmableProperties
i=[]
for(e=0,t=r.length;e<t;e++){x=r[e]
if(x!=="say"&&!/(Range|Pos|Radius|Damage)$/.test(x)){i.push(_.string.titleize(_.string.humanize(x)))}}return i}()
return L}
r.prototype.getFrontFacingStats=function(){var e,t,r,i,o,s,a,l,c,u,p,d,h,m,g,f,y,v,b,w,k,S,C,x,j,P
t=this.get("components")||[]
if(!(s=(g=_.find(t,{original:n.ItemID}))!=null?g.config:void 0)){console.warn(this.get("name"),"is not an item, but you are asking for its stats.")
return{props:[],stats:{}}}j={}
m=(f=s.programmableProperties)!=null?f:[]
m=m.concat((y=s.moreProgrammableProperties)!=null?y:[])
m=_.without(m,"canCast","spellNames","spells")
b=(v=s.stats)!=null?v:{}
for(C in b){h=b[C]
j[C]=this.formatStatDisplay(C,h)}k=(w=s.extraHUDProperties)!=null?w:[]
for(o=0,u=k.length;o<u;o++){C=k[o]
if(j[C]==null){j[C]=null}}for(a=0,p=t.length;a<p;a++){e=t[a]
if(!(r=e.config)){continue}for(C in j){P=j[C]
if(!(P==null)){continue}P=r[C]
if(P==null){continue}j[C]=this.formatStatDisplay(C,{setTo:P})
if(C==="attackDamage"){i=(P/(r.cooldown||.5)).toFixed(1)
j[C].display+=" ("+i+" DPS)"}}if(r.programmableSnippets){m=m.concat(r.programmableSnippets)}}for(C in j){P=j[C]
if(P==null){j[C]={name:C,display:"???"}}}x=_.keys(j)
x.sort()
m.sort()
S={}
for(l=0,d=x.length;l<d;l++){c=x[l]
S[c]=j[c]}return{props:m,stats:S}}
r.prototype.formatStatDisplay=function(e,t){var r,i,n,o,s
n={maxHealth:"health",maxSpeed:"speed",healthReplenishRate:"regeneration",attackDamage:"attack",attackRange:"range",shieldDefenseFactor:"blocks",visualRange:"range",throwDamage:"attack",throwRange:"range",bashDamage:"attack",backstabDamage:"backstab"}[e]
if(n){e=$.i18n.t("choose_hero."+n)
o=true}else{e=_.string.humanize(e)
o=false}i=""
if(/(range|radius|distance|vision)$/i.test(e)){i="m"}if(/cooldown$/i.test(e)){i||(i="s")}if(/speed$/i.test(e)){i||(i="m/s")}if(/(regeneration| rate)$/i.test(e)){i||(i="/s")}s=t.setTo
if(/(blocks)$/i.test(e)){i||(i="%")
s=(s*100).toFixed(1)}if(_.isArray(s)){s=s.join(", ")}r=[]
if(s!=null){r.push(""+s+i)}if(t.addend>0){r.push("+"+t.addend+i)}if(t.addend<0){r.push(""+t.addend+i)}if(t.factor!=null&&t.factor!==1){r.push("x"+t.factor)}r=r.join(", ")
r=r.replace(/9001m?/,"Infinity")
return{name:e,display:r,matchedShortName:o}}
r.prototype.isSilhouettedItem=function(){var e,t,r
if(!(this.get("gems")!=null||this.get("tier")!=null)){return console.error("Trying to determine whether "+this.get("name")+" should be a silhouetted item, but it has no gem cost.")}if(this.get("tier")==null){console.info("Add (or make sure you have fetched) a tier for "+this.get("name")+" to more accurately determine whether it is silhouetted.")}r=this.get("tier")
if(r!=null){return this.levelRequiredForItem()>me.level()}t=me.get("points")
e=(t!=null?t:0)*1.5
return this.get("gems")>(100+e)*1.2}
r.prototype.levelRequiredForItem=function(){var e,t,r
if(this.get("tier")==null){return console.error("Trying to determine what level is required for "+this.get("name")+", but it has no tier.")}e=this.get("tier")
r=e/2.5
t=me.constructor.levelForTier(r)
return t}
r.prototype.getContainersForAnimation=function(e,t){var r,i,n,o,s
o=this.get("raw").animations[e]
if(!o){console.error("thang type",this.get("name"),"is missing animation",e,"from action",t)}r=o.containers
s=this.get("raw").animations[e].animations
for(i=0,n=s.length;i<n;i++){e=s[i]
r=r.concat(this.getContainersForAnimation(e.gn,t))}return r}
r.prototype.getContainersForActions=function(e){var t,r,i,n,o,s,a,l,c,u
s={}
i=this.getActions()
for(a=0,c=e.length;a<c;a++){r=e[a]
t=_.find(i,{name:r})
if(t.container){s[t.container]=true}else if(t.animation){n=this.getContainersForAnimation(t.animation,t)
for(l=0,u=n.length;l<u;l++){o=n[l]
s[o.gn]=true}}}return _.keys(s)}
r.prototype.nextForAction=function(e){var t
t=true
if(e.goesTo){t=e.goesTo}if(e.loops===false){t=false}return t}
r.prototype.noRawData=function(){return!this.get("raw")}
r.prototype.initPrerenderedSpriteSheets=function(){var e
if(this.prerenderedSpriteSheets||!(e=this.get("prerenderedSpriteSheetData"))){return}return this.prerenderedSpriteSheets=new s(e)}
r.prototype.getPrerenderedSpriteSheet=function(e,t){var r
if(!this.prerenderedSpriteSheets){return}if(this.noRawData()){return this.prerenderedSpriteSheets.first()}r=this.get("spriteType")||t
return this.prerenderedSpriteSheets.find(function(t){var i,n
if(t.get("spriteType")!==r){return false}n=t.get("colorConfig")
if(_.isEmpty(e)&&_.isEmpty(n)){return true}i=function(e){return _.result(_.result(e,"team"),"hue")}
return i(e)===i(n)})}
r.prototype.getPrerenderedSpriteSheetToLoad=function(){if(!this.prerenderedSpriteSheets){return}if(this.noRawData()){return this.prerenderedSpriteSheets.first()}return this.prerenderedSpriteSheets.find(function(e){return e.needToLoad&&!e.loadedImage})}
r.prototype.onLoaded=function(){var e,t,i,o,s,a,l,c,u,p,d,h,m,g,f,y,v,b,w,k,S,C,x,j,P,T,L,A
r.__super__.onLoaded.call(this)
if(r.heroConfigStats[this.get("original")]){return}i=this.get("components")||[]
if(!i.length){return}if(this.get("gems")==null&&(this.project&&!/gems/.test(this.project)||/project/.test(this.getURL())&&!/gems/.test(this.getURL())||((c=this.collection)!=null?c.project:void 0)&&!/gems/.test((u=this.collection)!=null?u.project:void 0)||/project/.test((w=this.collection)!=null?w.getURL():void 0)&&!/gems/.test((k=this.collection)!=null?k.getURL():void 0))){return}A={gems:this.get("gems")||0}
if(a=(S=_.find(i,{original:n.ItemID}))!=null?S.config:void 0){A.kind="item"
if(L=(C=a.stats)!=null?(x=C.maxSpeed)!=null?x.addend:void 0:void 0){A.speed=L}if(s=(j=a.stats)!=null?(P=j.maxHealth)!=null?P.addend:void 0:void 0){A.health=s}if(t=(T=_.find(i,{original:n.AttacksID}))!=null?T.config:void 0){A.attack=((p=t.attackDamage)!=null?p:3)/((d=t.cooldown)!=null?d:1)}r.heroConfigStats[this.get("original")]=A}else if(o=(h=_.find(i,{original:n.EquipsID}))!=null?h.config:void 0){A.kind="hero"
A.attackMultiplier=(m=o.attackDamageFactor)!=null?m:1
A.healthMultiplier=(g=o.maxHealthFactor)!=null?g:1
if(l=(f=_.find(i,{original:n.MovesID}))!=null?f.config:void 0){A.speed=(y=l.maxSpeed)!=null?y:3.6}if(e=(v=_.find(i,{original:n.AttackableID}))!=null?v.config:void 0){A.baseHealth=(b=e.maxHealth)!=null?b:11}r.heroConfigStats[this.get("original")]=A}return null}
r.calculateStatsForHeroConfig=function(e,t){var i,n,o,s,a,l,c,u,p,d,h
p={}
n=(l=e.thangType)!=null?l:r.heroes.captain
c=_.values(e.inventory).concat([n])
for(o=0,s=c.length;o<s;o++){a=c[o]
p[a]=r.heroConfigStats[a]||"loading"}i=function(e){return function(i){return i.on("sync",function(){p[i.get("original")]=r.heroConfigStats[i.get("original")]
i.off("sync")
i.destroy()
return e.formatStatsForHeroConfig(p,t)})}}(this)
for(a in p){u=p[a]
if(!(u==="loading")){continue}h="/db/thang.type/"+a+"/version?project=original,components,gems"
d=(new r).setURL(h)
i(d)
d.fetch()}return this.formatStatsForHeroConfig(p,t)}
r.formatStatsForHeroConfig=function(e,t){var r,i,n,o,s,a,l
r=_.values(e)
if(m.call(r,"loading")>=0){return}i=_.find(r,{kind:"hero"})
l={health:(s=i.baseHealth)!=null?s:11,speed:0,gems:0}
for(n=0,o=r.length;n<o;n++){a=r[n]
if(a.gems){l.gems+=a.gems}if(a.health){l.health+=a.health*(i.healthMultiplier||1)}if(a.attack){l.attack=a.attack*(i.attackMultiplier||1)}if(a.speed){l.speed+=a.speed}}return t(l)}
return r}(i)
o=function(e){d(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.className="PrerenderedSpriteSheet"
t.prototype.loadImage=function(){var e
if(this.loadingImage){return true}if(this.loadedImage){return false}if(!(e=this.get("image"))){return false}this.image=$("<img src='/file/"+e+"' />")
this.loadingImage=true
this.image.one("load",function(e){return function(){e.loadingImage=false
e.loadedImage=true
e.buildSpriteSheet()
return e.trigger("image-loaded",e)}}(this))
this.image.one("error",function(e){return function(){e.loadingImage=false
return e.trigger("image-load-error",e)}}(this))
return true}
t.prototype.buildSpriteSheet=function(){return this.spriteSheet=new createjs.SpriteSheet({images:[this.image[0]],frames:this.get("frames"),animations:this.get("animations")})}
t.prototype.markToLoad=function(){return this.needToLoad=true}
t.prototype.needToLoad=false
t.prototype.loadedImage=false
t.prototype.loadingImage=false
return t}(i)
s=function(e){d(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.model=o
return t}(r)})
require.register("models/TrialRequest",function(e,require,t){var r,i,n,o=function(e,t){for(var r in t){if(s.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},s={}.hasOwnProperty
r=require("./CocoModel")
n=require("schemas/models/trial_request.schema")
t.exports=i=function(e){o(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.className="TrialRequest"
t.schema=n
t.prototype.urlRoot="/db/trial.request"
t.prototype.nameString=function(){var e,t
e=this.get("properties")
t=_.filter(_.at(e,"name","email"))
return t.join(" / ")}
t.prototype.locationString=function(){var e,t
e=this.get("properties")
t=_.filter(_.at(e,"city","state","country"))
return t.join(" ")}
t.prototype.educationLevelString=function(){var e
e=this.get("properties").educationLevel||[]
return e.join(", ")}
return t}(r)})
require.register("models/User",function(e,require,t){var r,i,n,o,s,a,l,c,u=function(e,t){for(var r in t){if(p.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},p={}.hasOwnProperty,d=[].indexOf||function(e){for(var t=0,r=this.length;t<r;t++){if(t in this&&this[t]===e)return t}return-1}
i="https://www.gravatar.com/"
a={}
r=require("./CocoModel")
o=require("./ThangType")
n=require("./Level")
c=require("core/utils")
t.exports=s=function(e){var t,r,i
u(s,e)
function s(){return s.__super__.constructor.apply(this,arguments)}s.className="User"
s.schema=require("schemas/models/user")
s.prototype.urlRoot="/db/user"
s.prototype.notyErrors=false
s.prototype.isAdmin=function(){return d.call(this.get("permissions",true),"admin")>=0}
s.prototype.isArtisan=function(){return d.call(this.get("permissions",true),"artisan")>=0}
s.prototype.isInGodMode=function(){return d.call(this.get("permissions",true),"godmode")>=0}
s.prototype.isAnonymous=function(){return this.get("anonymous",true)}
s.prototype.displayName=function(){return this.get("name",true)}
s.prototype.broadName=function(){var e,t,r,i,n
if(this.get("deleted")){return"(deleted)"}r=_.filter([this.get("firstName"),this.get("lastName")]).join(" ")
if(r){return r}r=this.get("name")
if(r){return r}n=((i=this.get("email"))!=null?i.split("@"):void 0)||[],t=n[0],e=n[1]
if(t){return t}return"Anonymous"}
s.prototype.getPhotoURL=function(e,t,r){var i,n,o
if(e==null){e=80}if(t==null){t=false}if(r==null){r=false}i=t?(o=this.get("jobProfile"))!=null?o.photoURL:void 0:null
i||(i=this.get("photoURL"))
if(i){n=i.search(/\?/)===-1?"?":"&"
if(i.search("http")!==-1){return""+i+n+"s="+e}return"/file/"+i+n+"s="+e}return"/db/user/"+this.id+"/avatar?s="+e+"&employerPageAvatar="+r}
s.prototype.getRequestVerificationEmailURL=function(){return this.url()+"/request-verify-email"}
s.prototype.getSlugOrID=function(){return this.get("slug")||this.get("_id")}
s.prototype.set=function(){if(arguments[0]==="jobProfileApproved"&&this.get("jobProfileApproved")===false&&!this.get("jobProfileApprovedDate")){this.set("jobProfileApprovedDate",(new Date).toISOString())}return s.__super__.set.apply(this,arguments)}
s.getUnconflictedName=function(e,t){return $.ajax("/auth/name/"+encodeURIComponent(e),{cache:false,success:function(e){return t(e.suggestedName)}})}
s.checkNameConflicts=function(e){return new Promise(function(t,r){return $.ajax("/auth/name/"+encodeURIComponent(e),{cache:false,success:t,error:function(e){return r(e.responseJSON)}})})}
s.checkEmailExists=function(e){return new Promise(function(t,r){return $.ajax("/auth/email/"+encodeURIComponent(e),{cache:false,success:t,error:function(e){return r(e.responseJSON)}})})}
s.prototype.getEnabledEmails=function(){var e,t,r,i
r=this.get("emails",true)
i=[]
for(t in r){e=r[t]
if(e.enabled){i.push(t)}}return i}
s.prototype.setEmailSubscription=function(e,t){var r
r=_.clone(this.get("emails"))||{};(r[e]!=null?r[e]:r[e]={}).enabled=t
return this.set("emails",r)}
s.prototype.isEmailSubscriptionEnabled=function(e){var t
return(t=(this.get("emails")||{})[e])!=null?t.enabled:void 0}
s.prototype.isStudent=function(){return this.get("role")==="student"}
s.prototype.isTeacher=function(){var e
return(e=this.get("role"))==="teacher"||e==="technology coordinator"||e==="advisor"||e==="principal"||e==="superintendent"||e==="parent"}
s.prototype.isSessionless=function(){return Boolean((c.getQueryVariable("dev",false)||me.isTeacher())&&c.getQueryVariable("course",false))}
s.prototype.setRole=function(e,t){var r,i
if(t==null){t=false}r=this.get("role")
if(r===e||r&&!t){return}this.set("role",e)
this.patch()
if((i=application.tracker)!=null){i.updateRole()}return this.get("role")}
t=5
r=100
i=r
s.levelFromExp=function(e){if(e>0){return Math.floor(t*Math.log(1/r*(e+i)))+1}else{return 1}}
s.expForLevel=function(e){if(e>1){return Math.ceil(Math.exp((e-1)/t)*r-i)}else{return 0}}
s.tierFromLevel=function(e){return l[Math.min(e,l.length-1)]}
s.levelForTier=function(e){var t,r,i,n
for(i=t=0,r=l.length;t<r;i=++t){n=l[i]
if(n>=e){return i}}}
s.prototype.level=function(){var e
e=this.get("points")
if(me.isInGodMode()){e=e+1e6}return s.levelFromExp(e)}
s.prototype.tier=function(){return s.tierFromLevel(this.level())}
s.prototype.gems=function(){var e,t,r,i,n,o,s,a
e=(i=(n=this.get("earned"))!=null?n.gems:void 0)!=null?i:0
if(me.isInGodMode()){e=e+1e5}t=(o=(s=this.get("purchased"))!=null?s.gems:void 0)!=null?o:0
r=(a=this.get("spent"))!=null?a:0
return Math.floor(e+t-r)}
s.prototype.heroes=function(){var e,t,r
e=((t=(r=me.get("purchased"))!=null?r.heroes:void 0)!=null?t:[]).concat([o.heroes.captain,o.heroes.knight,o.heroes.champion,o.heroes.duelist])
if(window.serverConfig.codeNinjas){e.push(o.heroes["code-ninja"])}return e}
s.prototype.items=function(){var e,t,r,i
return((r=(i=me.get("earned"))!=null?i.items:void 0)!=null?r:[]).concat((e=(t=me.get("purchased"))!=null?t.items:void 0)!=null?e:[]).concat([o.items["simple-boots"]])}
s.prototype.levels=function(){var e,t,r,i
return((r=(i=me.get("earned"))!=null?i.levels:void 0)!=null?r:[]).concat((e=(t=me.get("purchased"))!=null?t.levels:void 0)!=null?e:[]).concat(n.levels["dungeons-of-kithgard"])}
s.prototype.ownsHero=function(e){return me.isInGodMode()||d.call(this.heroes(),e)>=0}
s.prototype.ownsItem=function(e){return d.call(this.items(),e)>=0}
s.prototype.ownsLevel=function(e){return d.call(this.levels(),e)>=0}
s.prototype.getHeroClasses=function(){var e,t,r,i,n,s,a
i=_.invert(o.heroes)
s=function(){var e,t,n,o
n=this.heroes()
o=[]
for(e=0,t=n.length;e<t;e++){r=n[e]
o.push(i[r])}return o}.call(this)
n=[]
a=o.heroClasses
for(e in a){t=a[e]
if(_.intersection(s,t).length){n.push(e)}}return n}
s.prototype.validate=function(){var e,t,r,i,n,o,a
r=s.__super__.validate.call(this)
if(r&&this._revertAttributes){t=_.pick(this._revertAttributes,function(e){return e!==void 0})
o=tv4.validateMultiple(t,this.constructor.schema||{})
i=function(e){return[e.code.toString(),e.dataPath,e.schemaPath].join(":")}
a=_.map(o.errors,i)
e=_.map(r,i)
n=_.difference(e,a)
if(_.size(n)===0){return}}return r}
s.prototype.getAnnouncesActionAudioGroup=function(){var e
if(this.announcesActionAudioGroup){return this.announcesActionAudioGroup}e=me.get("testGroupNumber")%4
this.announcesActionAudioGroup=function(){switch(e){case 0:return"all-audio"
case 1:return"no-audio"
case 2:return"just-take-damage"
case 3:return"without-take-damage"}}()
if(me.isAdmin()){this.announcesActionAudioGroup="all-audio"}if(!me.isAdmin()){application.tracker.identify({announcesActionAudioGroup:this.announcesActionAudioGroup})}return this.announcesActionAudioGroup}
s.prototype.getCampaignAdsGroup=function(){if(this.campaignAdsGroup){return this.campaignAdsGroup}this.campaignAdsGroup="leaderboard-ads"
if(me.isAdmin()){this.campaignAdsGroup="no-ads"}if(!me.isAdmin()){application.tracker.identify({campaignAdsGroup:this.campaignAdsGroup})}return this.campaignAdsGroup}
s.prototype.getFourthLevelGroup=function(){var e
return"forgetful-gemsmith"
if(this.fourthLevelGroup){return this.fourthLevelGroup}e=me.get("testGroupNumber")%8
this.fourthLevelGroup=function(){switch(e){case 0:case 1:case 2:case 3:return"signs-and-portents"
case 4:case 5:case 6:case 7:return"forgetful-gemsmith"}}()
if(me.isAdmin()){this.fourthLevelGroup="signs-and-portents"}if(!me.isAdmin()){application.tracker.identify({fourthLevelGroup:this.fourthLevelGroup})}return this.fourthLevelGroup}
s.prototype.getVideoTutorialStylesIndex=function(e){if(e==null){e=0}if(!(e>0)){return 0}return me.get("testGroupNumber")%e}
s.prototype.hasSubscription=function(){var e
if(!(e=this.get("stripe"))){return false}if(e.sponsorID){return true}if(e.subscriptionID){return true}if(e.free===true){return true}if(_.isString(e.free)&&new Date<new Date(e.free)){return true}}
s.prototype.isPremium=function(){if(me.isInGodMode()){return true}if(me.isAdmin()){return true}if(me.hasSubscription()){return true}return false}
s.prototype.isForeverPremium=function(){var e
return((e=this.get("stripe"))!=null?e.free:void 0)===true}
s.prototype.isOnPremiumServer=function(){var e,t
if((e=me.get("country"))==="brazil"){return true}if((t=me.get("country"))==="china"&&(me.isPremium()||me.get("stripe"))){return true}return false}
s.prototype.sendVerificationCode=function(e){return $.ajax({method:"POST",url:"/db/user/"+this.id+"/verify/"+e,success:function(e){return function(t){e.set(t)
return e.trigger("email-verify-success")}}(this),error:function(e){return function(){return e.trigger("email-verify-error")}}(this)})}
s.prototype.isEnrolled=function(){return this.prepaidStatus()==="enrolled"}
s.prototype.prepaidStatus=function(){var e
e=this.get("coursePrepaid")
if(!e){return"not-enrolled"}if(!e.endDate){return"enrolled"}if(e.endDate>(new Date).toISOString()){return"enrolled"}else{return"expired"}}
s.prototype.prepaidType=function(){var e
if(!(this.get("coursePrepaid")||this.get("coursePrepaidID"))){return void 0}return((e=this.get("coursePrepaid"))!=null?e.type:void 0)||"course"}
s.prototype.prepaidIncludesCourse=function(e){var t,r,i
if(!(this.get("coursePrepaid")||this.get("coursePrepaidID"))){return false}r=(i=this.get("coursePrepaid"))!=null?i.includedCourseIDs:void 0
t=e.id||e
return!r||d.call(r,t)>=0}
s.prototype.fetchCreatorOfPrepaid=function(e){return this.fetch({url:"/db/prepaid/"+e.id+"/creator"})}
s.prototype.spy=function(e,t){if(t==null){t={}}e=e.id||e
t.url="/auth/spy"
t.type="POST"
if(t.data==null){t.data={}}t.data.user=e
return this.fetch(t)}
s.prototype.stopSpying=function(e){if(e==null){e={}}e.url="/auth/stop-spying"
e.type="POST"
return this.fetch(e)}
s.prototype.logout=function(e){if(e==null){e={}}e.type="POST"
e.url="/auth/logout"
if(typeof FB!=="undefined"&&FB!==null){if(typeof FB.logout==="function"){FB.logout()}}if(e.success==null){e.success=function(){var e
e=_.result(window.currentView,"logoutRedirectURL")
if(e){return window.location=e}else{return window.location.reload()}}}return this.fetch(e)}
s.prototype.signupWithPassword=function(e,t,r,i){var n
if(i==null){i={}}i.url=_.result(this,"url")+"/signup-with-password"
i.type="POST"
if(i.data==null){i.data={}}_.extend(i.data,{name:e,email:t,password:r})
i.contentType="application/json"
i.data=JSON.stringify(i.data)
n=this.fetch(i)
n.then(function(){var e
return(e=window.tracker)!=null?e.trackEvent("Finished Signup",{category:"Signup",label:"CodeCombat"}):void 0})
return n}
s.prototype.signupWithFacebook=function(e,t,r,i){var n
if(i==null){i={}}i.url=_.result(this,"url")+"/signup-with-facebook"
i.type="POST"
if(i.data==null){i.data={}}_.extend(i.data,{name:e,email:t,facebookID:r,facebookAccessToken:application.facebookHandler.token()})
i.contentType="application/json"
i.data=JSON.stringify(i.data)
n=this.fetch(i)
n.then(function(){var e,t
if((e=window.tracker)!=null){e.trackEvent("Facebook Login",{category:"Signup",label:"Facebook"})}return(t=window.tracker)!=null?t.trackEvent("Finished Signup",{category:"Signup",label:"Facebook"}):void 0})
return n}
s.prototype.signupWithGPlus=function(e,t,r,i){var n
if(i==null){i={}}i.url=_.result(this,"url")+"/signup-with-gplus"
i.type="POST"
if(i.data==null){i.data={}}_.extend(i.data,{name:e,email:t,gplusID:r,gplusAccessToken:application.gplusHandler.token()})
i.contentType="application/json"
i.data=JSON.stringify(i.data)
n=this.fetch(i)
n.then(function(){var e,t
if((e=window.tracker)!=null){e.trackEvent("Google Login",{category:"Signup",label:"GPlus"})}return(t=window.tracker)!=null?t.trackEvent("Finished Signup",{category:"Signup",label:"GPlus"}):void 0})
return n}
s.prototype.fetchGPlusUser=function(e,t){if(t==null){t={}}if(t.data==null){t.data={}}t.data.gplusID=e
t.data.gplusAccessToken=application.gplusHandler.token()
return this.fetch(t)}
s.prototype.loginGPlusUser=function(e,t){if(t==null){t={}}t.url="/auth/login-gplus"
t.type="POST"
if(t.data==null){t.data={}}t.data.gplusID=e
t.data.gplusAccessToken=application.gplusHandler.token()
return this.fetch(t)}
s.prototype.fetchFacebookUser=function(e,t){if(t==null){t={}}if(t.data==null){t.data={}}t.data.facebookID=e
t.data.facebookAccessToken=application.facebookHandler.token()
return this.fetch(t)}
s.prototype.loginFacebookUser=function(e,t){if(t==null){t={}}t.url="/auth/login-facebook"
t.type="POST"
if(t.data==null){t.data={}}t.data.facebookID=e
t.data.facebookAccessToken=application.facebookHandler.token()
return this.fetch(t)}
s.prototype.loginPasswordUser=function(e,t,r){if(r==null){r={}}r.url="/auth/login"
r.type="POST"
if(r.data==null){r.data={}}_.extend(r.data,{username:e,password:t})
return this.fetch(r)}
s.prototype.makeCoursePrepaid=function(){var e,t
t=this.get("coursePrepaid")
if(!t){return null}e=require("models/Prepaid")
return new e(t)}
s.prototype.getLeadPriority=function(){var e
e=$.get("/db/user/-/lead-priority")
e.then(function(e){var t
t=e.priority
return application.tracker.identify({priority:t})})
return e}
s.prototype.becomeStudent=function(e){if(e==null){e={}}e.url="/db/user/-/become-student"
e.type="PUT"
return this.fetch(e)}
s.prototype.remainTeacher=function(e){if(e==null){e={}}e.url="/db/user/-/remain-teacher"
e.type="PUT"
return this.fetch(e)}
s.prototype.destudent=function(e){if(e==null){e={}}e.url=_.result(this,"url")+"/destudent"
e.type="POST"
return this.fetch(e)}
s.prototype.deteacher=function(e){if(e==null){e={}}e.url=_.result(this,"url")+"/deteacher"
e.type="POST"
return this.fetch(e)}
s.prototype.checkForNewAchievement=function(e){var t
if(e==null){e={}}e.url=_.result(this,"url")+"/check-for-new-achievement"
e.type="POST"
t=this.fetch(e)
this.loading=false
return t}
s.prototype.finishedAnyLevels=function(){return Boolean((this.get("stats")||{}).gamesCompleted)}
s.prototype.isFromUk=function(){return this.get("country")==="united-kingdom"||this.get("preferredLanguage")==="en-GB"}
s.prototype.isFromIndia=function(){return this.get("country")==="india"}
s.prototype.setToGerman=function(){return _.string.startsWith(this.get("preferredLanguage")||"","de")}
s.prototype.setToSpanish=function(){return _.string.startsWith(this.get("preferredLanguage")||"","es")}
s.prototype.freeOnly=function(){return features.freeOnly&&!me.isPremium()}
s.prototype.sendParentEmail=function(e,t){if(t==null){t={}}if(t.data==null){t.data={}}t.data.type="subscribe modal parent"
t.data.email=e
t.url="/db/user/-/send_one_time_email"
t.method="POST"
return $.ajax(t)}
s.prototype.subscribe=function(e,t){var r,i
if(t==null){t={}}i=_.clone((r=this.get("stripe"))!=null?r:{})
i.planID="basic"
i.token=e.id
this.set({stripe:i})
return me.patch({headers:{"X-Change-Plan":"true"}}).then(function(t){return function(){if(!c.isValidEmail(t.get("email"))){t.set({email:e.email})
me.patch()}return Promise.resolve()}}(this))}
s.prototype.unsubscribe=function(){var e,t
t=_.clone((e=this.get("stripe"))!=null?e:{})
if(!t.planID){return}delete t.planID
this.set({stripe:t})
return me.patch({headers:{"X-Change-Plan":"true"}})}
s.prototype.unsubscribeRecipient=function(e,t){if(t==null){t={}}t.url=_.result(this,"url")+("/stripe/recipients/"+e)
t.method="DELETE"
return $.ajax(t)}
return s}(r)
l=[-1,0,.05,.14,.18,.32,.41,.5,.64,.82,.91,1.04,1.22,1.35,1.48,1.65,1.78,1.96,2.1,2.24,2.38,2.55,2.69,2.86,3.03,3.16,3.29,3.42,3.58,3.74,3.89,4.04,4.19,4.32,4.47,4.64,4.79,4.96,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,10,10.5,11,11.5,12,12.5,13,13.5,14,14.5,15]})
require.register("models/UserCodeProblem",function(e,require,t){var r,i,n=function(e,t){for(var r in t){if(o.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},o={}.hasOwnProperty
r=require("./CocoModel")
t.exports=i=function(e){n(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.className="UserCodeProblem"
t.schema=require("schemas/models/user_code_problem")
t.prototype.urlRoot="/db/user.code.problem"
return t}(r)})
require.register("models/UserPollsRecord",function(e,require,t){var r,i,n,o=function(e,t){for(var r in t){if(s.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},s={}.hasOwnProperty
r=require("./CocoModel")
n=require("schemas/models/user-polls-record.schema")
t.exports=i=function(e){o(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.className="UserPollsRecord"
t.schema=n
t.prototype.urlRoot="/db/user.polls.record"
return t}(r)})
require.register("collections/Achievements",function(e,require,t){var r,i,n,o=function(e,t){for(var r in t){if(s.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},s={}.hasOwnProperty
n=require("collections/CocoCollection")
r=require("models/Achievement")
t.exports=i=function(e){o(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.url="/db/achievement"
t.prototype.model=r
t.prototype.fetchRelatedToLevel=function(e,t){t=_.extend({data:{}},t)
t.data.related=e
return this.fetch(t)}
t.prototype.fetchForCampaign=function(e,t){t=_.extend({data:{}},t)
t.url="/db/campaign/"+e+"/achievements"
return this.fetch(t)}
return t}(n)})
require.register("collections/Branches",function(e,require,t){var r,i,n,o=function(e,t){for(var r in t){if(s.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},s={}.hasOwnProperty
n=require("collections/CocoCollection")
r=require("models/Branch")
t.exports=i=function(e){o(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.url="/db/branches"
t.prototype.model=r
t.prototype.comparator=function(e,t){var r,i
r=e.get("updatedBy")===me.id
i=t.get("updatedBy")===me.id
if(r&&!i){return-1}if(i&&!r){return 1}return new Date(t.get("updated")).getTime()-new Date(e.get("updated")).getTime()}
return t}(n)})
require.register("collections/Campaigns",function(e,require,t){var r,i,n,o=function(e,t){for(var r in t){if(s.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},s={}.hasOwnProperty,a=[].indexOf||function(e){for(var t=0,r=this.length;t<r;t++){if(t in this&&this[t]===e)return t}return-1}
r=require("models/Campaign")
n=require("collections/CocoCollection")
t.exports=i=function(e){o(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.model=r
t.prototype.url="/db/campaign"
t.prototype.initialize=function(e,r){this.options=r!=null?r:{}
this.forceCourseNumbering=this.options.forceCourseNumbering
return t.__super__.initialize.apply(this,arguments)}
t.prototype._prepareModel=function(e,r){e.forceCourseNumbering=this.forceCourseNumbering
return t.__super__._prepareModel.apply(this,arguments)}
t.prototype.fetchByType=function(e,t){if(t==null){t={}}if(t.data==null){t.data={}}t.data.type=e
return this.fetch(t)}
t.prototype.fetchCampaignsAndRelatedLevels=function(e,t){var r,i
if(e==null){e={}}if(t==null){t={}}r=require("collections/Levels")
if(e.data==null){e.data={}}e.data.project="slug"
i=e.exclude||[]
return this.fetch(e).then(function(e){return function(){var n,o,s,l,c,u,p
p=e.filter(function(e){var t
return t=e.get("slug"),a.call(i,t)>=0})
e.remove(p)
if(t.data==null){t.data={}}if((n=t.data).project==null){n.project="thangs,name,slug,campaign,tasks"}l=[]
u=e.models
for(s=0,c=u.length;s<c;s++){o=u[s]
o.levels=new r
l.push(o.levels.fetchForCampaign(o.get("slug"),t))}return $.when.apply($,l)}}(this))}
return t}(n)})
require.register("collections/Classrooms",function(e,require,t){var r,i,n,o=function(e,t){for(var r in t){if(s.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},s={}.hasOwnProperty
r=require("models/Classroom")
n=require("collections/CocoCollection")
t.exports=i=function(e){o(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.model=r
t.prototype.url="/db/classroom"
t.prototype.initialize=function(){this.on("sync",function(e){return function(){var t,r,i,n,o
n=e.models
o=[]
for(r=0,i=n.length;r<i;r++){t=n[r]
o.push(t.capitalizeLanguageName())}return o}}(this))
return t.__super__.initialize.apply(this,arguments)}
t.prototype.fetchMine=function(e){if(e==null){e={}}if(e.data==null){e.data={}}e.data.ownerID=me.id
return this.fetch(e)}
t.prototype.fetchByOwner=function(e,t){if(t==null){t={}}if(t.data==null){t.data={}}t.data.ownerID=e
return this.fetch(t)}
return t}(n)})
require.register("collections/CocoCollection",function(e,require,t){var r,i,n=function(e,t){for(var r in t){if(o.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},o={}.hasOwnProperty
i=require("models/CocoModel")
t.exports=r=function(e){n(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.loaded=false
t.prototype.model=null
t.prototype.initialize=function(e,r){var i
if(r==null){r={}}if(this.model==null){this.model=r.model}if(!this.model){console.error(this.constructor.name,"does not have a model defined. This will not do!")}t.__super__.initialize.call(this,e,r)
this.setProjection(r.project)
if(r.url){this.url=r.url}this.once("sync",function(e){return function(){var t,r,i,n,o
e.loaded=true
n=e.models
o=[]
for(t=0,r=n.length;t<r;t++){i=n[t]
o.push(i.loaded=true)}return o}}(this))
if((i=window.application)!=null?i.testing:void 0){this.fakeRequests=[]
this.on("request",function(){return this.fakeRequests.push(jasmine.Ajax.requests.mostRecent())})}if(r.saveBackups){return this.on("sync",function(){var e,t,r,i,n
i=this.models
n=[]
for(e=0,t=i.length;e<t;e++){r=i[e]
r.saveBackups=true
n.push(r.loadFromBackup())}return n})}}
t.prototype.getURL=function(){if(_.isString(this.url)){return this.url}else{return this.url()}}
t.prototype.fetch=function(e){if(e==null){e={}}if(this.project){if(e.data==null){e.data={}}e.data.project=this.project.join(",")}this.jqxhr=t.__super__.fetch.call(this,e)
this.loading=true
return this.jqxhr}
t.prototype.setProjection=function(e){this.project=e}
t.prototype.stringify=function(){return JSON.stringify(this.toJSON())}
t.prototype.wait=function(e){return new Promise(function(t){return function(r){return t.once(e,r)}}(this))}
return t}(Backbone.Collection)})
require.register("collections/CodeLogs",function(e,require,t){var r,i,n,o=function(e,t){for(var r in t){if(s.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},s={}.hasOwnProperty
r=require("collections/CocoCollection")
i=require("models/CodeLog")
t.exports=n=function(e){o(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.url="/db/codelogs"
t.prototype.model=i
t.prototype.fetchByUserID=function(e,t){if(t==null){t={}}t.url='/db/codelogs?filter[userID]="'+e+'"'
return this.fetch(t)}
t.prototype.fetchBySlug=function(e,t){if(t==null){t={}}t.url='/db/codelogs?filter[levelSlug]="'+e+'"'
return this.fetch(t)}
t.prototype.fetchLatest=function(e){if(e==null){e={}}e.url='/db/codelogs?conditions[sort]="-created"'
return this.fetch(e)}
return t}(r)})
require.register("collections/CourseInstances",function(e,require,t){var r,i,n,o=function(e,t){for(var r in t){if(s.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},s={}.hasOwnProperty
i=require("models/CourseInstance")
r=require("collections/CocoCollection")
t.exports=n=function(e){o(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.model=i
t.prototype.url="/db/course_instance"
t.prototype.fetchByOwner=function(e,t){if(t==null){t={}}e=e.id||e
if(t.data==null){t.data={}}t.data.ownerID=e
return this.fetch(t)}
t.prototype.fetchForClassroom=function(e,t){if(t==null){t={}}e=e.id||e
if(t.data==null){t.data={}}t.data.classroomID=e
return this.fetch(t)}
return t}(r)})
require.register("collections/Courses",function(e,require,t){var r,i,n,o=function(e,t){for(var r in t){if(s.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},s={}.hasOwnProperty
i=require("models/Course")
r=require("collections/CocoCollection")
t.exports=n=function(e){o(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.model=i
t.prototype.url="/db/course"
t.prototype.fetchReleased=function(e){if(e==null){e={}}if(e.data==null){e.data={}}e.data.releasePhase="released"
return this.fetch(e)}
return t}(r)})
require.register("collections/DocumentFiles",function(e,require,t){var r,i,n,o=function(e,t){for(var r in t){if(s.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},s={}.hasOwnProperty
r=require("collections/CocoCollection")
i=require("models/File")
t.exports=n=function(e){o(t,e)
t.prototype.model=i
function t(e){var r
t.__super__.constructor.call(this)
r=e.constructor.prototype.urlRoot
r+="/"+(e.get("original")||e.id)+"/files"
this.url=r}return t}(r)})
require.register("collections/EarnedAchievementCollection",function(e,require,t){var r,i,n,o=function(e,t){for(var r in t){if(s.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},s={}.hasOwnProperty
r=require("collections/CocoCollection")
i=require("models/EarnedAchievement")
t.exports=n=function(e){o(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.model=i
t.prototype.initialize=function(e){this.url="/db/user/"+e+"/achievements"
return t.__super__.initialize.call(this)}
return t}(r)})
require.register("collections/LeaderboardCollection",function(e,require,t){var r,i,n,o=function(e,t){for(var r in t){if(s.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},s={}.hasOwnProperty
r=require("collections/CocoCollection")
n=require("models/LevelSession")
t.exports=i=function(e){o(t,e)
t.prototype.url=""
t.prototype.model=n
function t(e,r){t.__super__.constructor.call(this)
if(r==null){r={}}this.url="/db/level/"+e.get("original")+"."+e.get("version").major+"/leaderboard?"+$.param(r)}return t}(r)})
require.register("collections/LevelComponents",function(e,require,t){var r,i,n,o=function(e,t){for(var r in t){if(s.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},s={}.hasOwnProperty
i=require("models/LevelComponent")
r=require("collections/CocoCollection")
t.exports=n=function(e){o(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.url="/db/level.component"
t.prototype.model=i
return t}(r)})
require.register("collections/LevelSessions",function(e,require,t){var r,i,n,o=function(e,t){for(var r in t){if(s.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},s={}.hasOwnProperty
r=require("collections/CocoCollection")
i=require("models/LevelSession")
t.exports=n=function(e){o(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.url="/db/level.session"
t.prototype.model=i
t.prototype.fetchForCourseInstance=function(e,t){t=_.extend({url:"/db/course_instance/"+e+"/my-course-level-sessions"},t)
return this.fetch(t)}
t.prototype.fetchForClassroomMembers=function(e,t){t=_.extend({url:"/db/classroom/"+e+"/member-sessions"},t)
return this.fetch(t)}
t.prototype.fetchForAllClassroomMembers=function(e,t){var r,i,n,o
if(t==null){t={}}i=10
o=0
n=_.size(e.get("members"))
if(t.data==null){t.data={}}t.data.memberLimit=i
t.remove=false
r=[]
while(o<n){t=_.cloneDeep(t)
t.data.memberSkip=o
r.push(this.fetchForClassroomMembers(e.id,t))
o+=i}return r}
t.prototype.fetchRecentSessions=function(e){if(e==null){e={}}e=_.extend({url:"/db/level.session/-/recent"},e)
return this.fetch(e)}
return t}(r)})
require.register("collections/LevelSystems",function(e,require,t){var r,i,n,o=function(e,t){for(var r in t){if(s.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},s={}.hasOwnProperty
i=require("models/LevelSystem")
r=require("collections/CocoCollection")
t.exports=n=function(e){o(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.url="/db/level.system"
t.prototype.model=i
return t}(r)})
require.register("collections/Levels",function(e,require,t){var r,i,n,o=function(e,t){for(var r in t){if(s.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},s={}.hasOwnProperty
r=require("collections/CocoCollection")
i=require("models/Level")
t.exports=n=function(e){o(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.url="/db/level"
t.prototype.model=i
t.prototype.fetchForClassroom=function(e,t){if(t==null){t={}}t.url="/db/classroom/"+e+"/levels"
return this.fetch(t)}
t.prototype.fetchForClassroomAndCourse=function(e,t,r){if(r==null){r={}}r.url="/db/classroom/"+e+"/courses/"+t+"/levels"
return this.fetch(r)}
t.prototype.fetchForCampaign=function(e,t){if(t==null){t={}}t.url="/db/campaign/"+e+"/levels"
return this.fetch(t)}
return t}(r)})
require.register("collections/Patches",function(e,require,t){var r,i,n,o=function(e,t){for(var r in t){if(s.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},s={}.hasOwnProperty
i=require("models/Patch")
r=require("collections/CocoCollection")
t.exports=n=function(e){o(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.model=i
t.prototype.fetchMineFor=function(e,t){if(t==null){t={}}t.url=_.result(e,"url")+"/patches"
if(t.data==null){t.data={}}t.data.creator=me.id
return this.fetch(t)}
return t}(r)})
require.register("collections/PatchesCollection",function(e,require,t){var r,i,n,o=function(e,t){for(var r in t){if(s.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},s={}.hasOwnProperty
i=require("models/Patch")
r=require("collections/CocoCollection")
t.exports=n=function(e){o(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.model=i
t.prototype.initialize=function(e,r,i,n){var o
this.status=n!=null?n:"pending"
t.__super__.initialize.apply(this,arguments)
o=!i.get("original")?"_id":"original"
return this.url=i.urlRoot+"/"+i.get(o)+"/patches?status="+this.status}
return t}(r)})
require.register("collections/Payments",function(e,require,t){var r,i,n,o=function(e,t){for(var r in t){if(s.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},s={}.hasOwnProperty
i=require("models/Payment")
r=require("collections/CocoCollection")
t.exports=n=function(e){o(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.model=i
t.prototype.url="/db/payment"
t.prototype.fetchByRecipient=function(e,t){if(t==null){t={}}if(t.data==null){t.data={}}t.data.recipient=e
return this.fetch(t)}
return t}(r)})
require.register("collections/Prepaids",function(e,require,t){var r,i,n,o,s=function(e,t){for(var r in t){if(a.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},a={}.hasOwnProperty
r=require("collections/CocoCollection")
i=require("models/Prepaid")
o=function(e){return _.reduce(e,function(e,t){return e+t})}
t.exports=n=function(e){s(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.model=i
t.prototype.url="/db/prepaid"
t.prototype.initialize=function(){return t.__super__.initialize.apply(this,arguments)}
t.prototype.comparator=function(e){return[e.get("type")==="course"?"C":"S",e.get("endDate")].toString()}
t.prototype.totalMaxRedeemers=function(){var e
return o(function(){var t,r,i,n
i=this.models
n=[]
for(t=0,r=i.length;t<r;t++){e=i[t]
n.push(e.get("maxRedeemers"))}return n}.call(this))||0}
t.prototype.totalRedeemers=function(){var e
return o(function(){var t,r,i,n
i=this.models
n=[]
for(t=0,r=i.length;t<r;t++){e=i[t]
n.push(_.size(e.get("redeemers")))}return n}.call(this))||0}
t.prototype.totalAvailable=function(){return Math.max(this.totalMaxRedeemers()-this.totalRedeemers(),0)}
t.prototype.fetchByCreator=function(e,t){if(t==null){t={}}if(t.data==null){t.data={}}t.data.creator=e
return this.fetch(t)}
t.prototype.fetchMineAndShared=function(){return this.fetchByCreator(me.id,{data:{includeShared:true}})}
return t}(r)})
require.register("collections/Products",function(e,require,t){var r,i,n,o,s=function(e,t){for(var r in t){if(a.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},a={}.hasOwnProperty
r=require("./CocoCollection")
i=require("models/Product")
o=require("core/utils")
t.exports=n=function(e){s(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.model=i
t.prototype.url="/db/products"
t.prototype.getByName=function(e){return this.findWhere({name:e})}
t.prototype.getBasicSubscriptionForUser=function(e){var t
if(t=this.findWhere({name:(e!=null?e.get("country"):void 0)+"_basic_subscription"})){return t}else{return this.findWhere({name:"basic_subscription"})}}
return t}(r)})
require.register("collections/RecentlyPlayedCollection",function(e,require,t){var r,i,n,o=function(e,t){for(var r in t){if(s.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},s={}.hasOwnProperty
r=require("./CocoCollection")
i=require("models/LevelSession")
t.exports=n=function(e){o(t,e)
t.prototype.model=i
function t(e,r){this.url="/db/user/"+e+"/recently_played"
t.__super__.constructor.call(this,r)}return t}(r)})
require.register("collections/RelatedAchievementsCollection",function(e,require,t){var r,i,n,o=function(e,t){for(var r in t){if(s.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},s={}.hasOwnProperty
i=require("collections/CocoCollection")
r=require("models/Achievement")
n=function(e){o(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.model=r
t.prototype.initialize=function(e){return this.url="/db/achievement?related="+e}
return t}(i)
t.exports=n})
require.register("collections/SimulatorsLeaderboardCollection",function(e,require,t){var r,i,n,o=function(e,t){for(var r in t){if(s.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},s={}.hasOwnProperty
r=require("collections/CocoCollection")
n=require("models/User")
t.exports=i=function(e){o(t,e)
t.prototype.url=""
t.prototype.model=n
function t(e){t.__super__.constructor.call(this)
if(e==null){e={}}this.url="/db/user/me/simulatorLeaderboard?"+$.param(e)}return t}(r)})
require.register("collections/SkippedContacts",function(e,require,t){var r,i,n,o=function(e,t){for(var r in t){if(s.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},s={}.hasOwnProperty
i=require("models/SkippedContact")
r=require("collections/CocoCollection")
t.exports=n=function(e){o(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.model=i
t.prototype.url="/db/skipped-contact"
return t}(r)})
require.register("collections/StripeCoupons",function(e,require,t){var r,i,n,o=function(e,t){for(var r in t){if(s.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},s={}.hasOwnProperty
i=require("models/StripeCoupon")
r=require("collections/CocoCollection")
t.exports=n=function(e){o(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.model=i
t.prototype.url="/stripe/coupons"
return t}(r)})
require.register("collections/ThangNamesCollection",function(e,require,t){var r,i,n,o=function(e,t){for(var r in t){if(s.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},s={}.hasOwnProperty
n=require("models/ThangType")
r=require("collections/CocoCollection")
t.exports=i=function(e){o(t,e)
t.prototype.url="/db/thang.type/names"
t.prototype.model=n
t.prototype.isCachable=false
function t(e){this.ids=e
t.__super__.constructor.call(this)
this.ids.sort()
if(this.ids.length>55){console.error("Too many ids, we'll likely go over the GET url kind-of-limit of 2000 characters.")}}t.prototype.fetch=function(e){if(e==null){e={}}_.extend(e,{data:{ids:this.ids}})
return t.__super__.fetch.call(this,e)}
return t}(r)})
require.register("collections/ThangTypes",function(e,require,t){var r,i,n,o=function(e,t){for(var r in t){if(s.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},s={}.hasOwnProperty
r=require("collections/CocoCollection")
i=require("models/ThangType")
t.exports=n=function(e){o(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.url="/db/thang.type"
t.prototype.model=i
t.prototype.fetchHeroes=function(){return this.fetch({url:"/db/thang.type?view=heroes"})}
return t}(r)})
require.register("collections/TrialRequests",function(e,require,t){var r,i,n,o=function(e,t){for(var r in t){if(s.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},s={}.hasOwnProperty
r=require("collections/CocoCollection")
i=require("models/TrialRequest")
t.exports=n=function(e){o(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.url="/db/trial.request"
t.prototype.model=i
t.prototype.fetchOwn=function(e){e=_.extend({data:{}},e)
e.data.applicant=me.id
return this.fetch(e)}
t.prototype.fetchByApplicant=function(e){return this.fetch({data:{applicant:e}})}
return t}(r)})
require.register("collections/Users",function(e,require,t){var r,i,n,o=function(e,t){for(var r in t){if(s.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},s={}.hasOwnProperty
i=require("models/User")
r=require("collections/CocoCollection")
t.exports=n=function(e){o(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.model=i
t.prototype.url="/db/user"
t.prototype.fetchForClassroom=function(e,t){var r,i,n,o,s
if(t==null){t={}}if(t.removeDeleted){delete t.removeDeleted
this.listenTo(this,"sync",this.removeDeletedUsers)}r=e.id||e
n=10
s=0
o=_.size(e.get("members"))
t.url="/db/classroom/"+r+"/members"
if(t.data==null){t.data={}}t.data.memberLimit=n
t.remove=false
i=[]
while(s<o){t=_.cloneDeep(t)
t.data.memberSkip=s
i.push(this.fetch(t))
s+=n}return i}
t.prototype.removeDeletedUsers=function(){this.remove(this.filter(function(e){return e.get("deleted")}))
return true}
t.prototype.search=function(e){if(!e){return this.slice()}e=e.toLowerCase()
return this.filter(function(t){var r
return t.broadName().toLowerCase().indexOf(e)>-1||((r=t.get("email"))!=null?r:"").indexOf(e)>-1})}
return t}(r)})
require.register("core/CocoClass",function(e,require,t){var r,i,n,o,s
s=require("./../core/utils")
i=0
o=function(){return"class-scope-"+i++}
n=function(){}
t.exports=r=function(){e.nicks=[]
e.nicksUsed={}
e.remainingNicks=[]
e.nextNick=function(){var e,t,r
if(!this.nicks.length){return(this.name||"CocoClass")+" "+i}this.remainingNicks=this.remainingNicks.length?this.remainingNicks:this.nicks.slice()
e=this.remainingNicks.splice(Math.floor(Math.random()*this.remainingNicks.length),1)[0]
t=0
while(true){r=t?e+" "+t:e
if(!this.nicksUsed[r]){break}t++}this.nicksUsed[r]=true
return r}
e.prototype.subscriptions={}
e.prototype.shortcuts={}
function e(){this.nick=this.constructor.nextNick()
this.subscriptions=s.combineAncestralObject(this,"subscriptions")
this.shortcuts=s.combineAncestralObject(this,"shortcuts")
this.listenToSubscriptions()
this.scope=o()
this.listenToShortcuts()
if(typeof Backbone!=="undefined"&&Backbone!==null){_.extend(this,Backbone.Events)}}e.prototype.destroy=function(){var e
if(typeof this.stopListening==="function"){this.stopListening()}if(typeof this.off==="function"){this.off()}this.unsubscribeAll()
this.stopListeningToShortcuts()
this.constructor.nicksUsed[this.nick]=false
for(e in this){this[e]=void 0}this.destroyed=true
this.off=n
return this.destroy=n}
e.prototype.listenToSubscriptions=function(){var e,t,r,i
if((typeof Backbone!=="undefined"&&Backbone!==null?Backbone.Mediator:void 0)==null){return}r=this.subscriptions
i=[]
for(e in r){t=r[e]
t=s.normalizeFunc(t,this)
i.push(Backbone.Mediator.subscribe(e,t,this))}return i}
e.prototype.addNewSubscription=function(e,t){if((typeof Backbone!=="undefined"&&Backbone!==null?Backbone.Mediator:void 0)==null){return}if(this.destroyed){return}if(this.subscriptions[e]!==void 0){return}t=s.normalizeFunc(t,this)
this.subscriptions[e]=t
return Backbone.Mediator.subscribe(e,t,this)}
e.prototype.unsubscribeAll=function(){var e,t,r,i
if((typeof Backbone!=="undefined"&&Backbone!==null?Backbone.Mediator:void 0)==null){return}r=this.subscriptions
i=[]
for(e in r){t=r[e]
t=s.normalizeFunc(t,this)
i.push(Backbone.Mediator.unsubscribe(e,t,this))}return i}
e.prototype.listenToShortcuts=function(){var e,t,r,i
if(typeof key==="undefined"||key===null){return}t=this.shortcuts
r=[]
for(i in t){e=t[i]
e=s.normalizeFunc(e,this)
r.push(key(i,this.scope,_.bind(e,this)))}return r}
e.prototype.stopListeningToShortcuts=function(){if(typeof key==="undefined"||key===null){return}return key.deleteScope(this.scope)}
e.prototype.playSound=function(e,t){if(t==null){t=1}return Backbone.Mediator.publish("audio-player:play-sound",{trigger:e,volume:t})}
e.prototype.wait=function(e){return new Promise(function(t){return function(r){return t.once(e,r)}}(this))}
return e}()})
require.register("core/ModuleLoader",function(e,require,t){var r,i,n,o,s=function(e,t){return function(){return e.apply(t,arguments)}},a=function(e,t){for(var r in t){if(l.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},l={}.hasOwnProperty
r=require("core/CocoClass")
o=require("locale/locale")
i=false
t.exports=n=n=function(e){a(t,e)
t.WADS=["lib","views/play","views/editor","views/courses"]
function t(){this.onFileLoad=s(this.onFileLoad,this)
var e,r,i,n,a
t.__super__.constructor.call(this)
this.loaded={}
n=window.require.list()
for(r=0,i=n.length;r<i;r++){e=n[r]
this.loaded[e]=true}o.update()
this.queue=new createjs.LoadQueue
this.queue.on("fileload",this.onFileLoad,this)
this.queue.setMaxConnections(5)
a=_.wrap(window.require,function(e,t,r){if(_.string.startsWith(t,"vendor/")){return{}}if(t==="esper"){return window.esper}if(t==="aether"){return window.Aether}if(t==="game-libraries"){return{}}if(t==="ace"){return window.ace}if(t==="tests"){return{}}if(t==="demo-app"){return{}}if(t==="lib/auth"){t="core/auth"}return e(t,r)})
_.extend(a,window.require)
window.require=a
this.updateProgress=_.throttle(_.bind(this.updateProgress,this),700)
this.lastShownProgress=0}t.prototype.load=function(e,r,n){var o,s,a,l,c,u
if(r==null){r=true}$("#module-load-progress").css("opacity",1)
if(r){this.recentPaths=[]
this.recentLoadedBytes=0}l=e
u=_.find(t.WADS,function(t){return _.string.startsWith(e,t)})
if(u){e=u}if(this.loaded[e]){return false}if(u){if(i){console.log("Loading",u," for ",l)}}this.loaded[e]=true
this.recentPaths.push(e)
c="/javascripts/app/"+e+".js"
if(e==="aether"||e==="game-libraries"){c="/javascripts/"+e+".js"}else if(e==="ace"){c="/lib/ace/ace.js"}else if(e==="esper"){try{a=eval
a("'use strict'; let test = WeakMap && (class Test { *gen(a=7) { yield yield * () => true ; } });")
console.log("Modern javascript detected, aw yeah!")
c="/javascripts/esper.modern.js"}catch(e){o=e
console.log("Legacy javascript detected, falling back...",o.message)
c="/javascripts/esper.js"}}if(i){console.debug("Loading js file:",c,"because",n)}this.queue.loadFile({id:e,src:"/"+window.serverConfig.buildInfo.sha+c,type:createjs.LoadQueue.JAVASCRIPT})
return true}
t.prototype.loadLanguage=function(e){var t,r
if(e==null){e="en-US"}r=this.load("locale/"+e)
t=e.slice(0,2)
if(t===e){return r}if(o[t]==null){return r}return this.load("locale/"+t,false)||r}
t.prototype.onFileLoad=function(e){var t,r,n,s,a,l,c,u
if(!/(^vendor)|game-libraries$|aether$|esper$/.test(e.item.id)){r=window.require.list()
n=_(r).filter(function(e){return _.string.endsWith(e,"index")}).map(function(e){return e.slice(0,-6)}).value()
r=r.concat(n)
if(i){console.group("Dependencies",e.item.id)}this.recentLoadedBytes+=e.rawResult.length
t=this.parseDependencies(e.rawResult)
if(i){console.groupEnd()}l=_.difference(t,r)
for(s=0,a=l.length;s<a;s++){c=l[s]
this.load(c,false,"missing module of "+e.item.id)}}if(e.item.id==="ace"){window.ace.config.set("basePath","/lib/ace")}if(_.string.startsWith(e.item.id,"locale")){o.update()}$(e.result).remove()
if(e.item.id==="vendor/treema"){u=require("core/treema-ext")
u.setup()}if(this.queue.progress===1){this.recentPaths.sort()
this.trigger("load-complete")}this.trigger("loaded",e.item)
return this.updateProgress()}
t.prototype.updateProgress=function(){if(this.queue.progress<this.lastShownProgress){return}$("#module-load-progress .progress-bar").css("width",100*this.queue.progress+"%")
if(this.queue.progress===1){return $("#module-load-progress").css("opacity",0)}}
t.prototype.parseDependencies=function(e){var t,r,n,o,s,a,l,c
r=e.match(/(require\(['"](.+?)['"])|(register\(['"].+?['"])/g)||[]
c=null
o=[]
for(s=0,a=r.length;s<a;s++){t=r[s]
if(_.string.startsWith(t,"register")){l=t.slice(10,t.length-1)
if(i){if(c){console.groupEnd()}}c=(l.match(".+/")[0]||"").slice(0,-1)
if(i){console.group("register",c,"("+t+")")}}else{n=t.slice(9,t.length-1)
if(n[0]==="/"){n=n.slice(1)}n=this.expand(c,n)
if(n==="memwatch"){continue}if(_.string.startsWith(n,"ace/")){continue}if(_.string.startsWith(n,"templates/play/modal/announcements")){continue}o.push(n)
if(i){console.debug(n)}}}if(i){console.groupEnd()}return o}
t.prototype.expand=function(e,t){var r,i,n,o,s
s=[]
if(/^\.\.?(\/|$)/.test(t)){o=[e,t].join("/").split("/")}else{o=t.split("/")}for(r=0,i=o.length;r<i;r++){n=o[r]
if(n===".."){s.pop()}else if(n!=="."&&n!==""){s.push(n)}}return s.join("/")}
return t}(r)})
require.register("core/NameLoader",function(e,require,t){var r,i,n,o=function(e,t){return function(){return e.apply(t,arguments)}},s=function(e,t){for(var r in t){if(a.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},a={}.hasOwnProperty
r=require("core/CocoClass")
n={}
i=function(e){s(t,e)
function t(){this.loadedNames=o(this.loadedNames,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.loadNames=function(e){var t,r,i
i=_.uniq(function(){var r,i,o
o=[]
for(r=0,i=e.length;r<i;r++){t=e[r]
if(!n[t]){o.push(t)}}return o}())
if(!i.length){return false}r={url:"/db/user/x/names",type:"POST",data:{ids:i},success:this.loadedNames}
return r}
t.prototype.loadedNames=function(e){return _.extend(n,e)}
t.prototype.getName=function(e){var t,r,i,o,s,a
if(((t=n[e])!=null?t.firstName:void 0)&&((r=n[e])!=null?r.lastName:void 0)){return((i=n[e])!=null?i.firstName:void 0)+" "+((o=n[e])!=null?o.lastName:void 0)}return((s=n[e])!=null?s.firstName:void 0)||((a=n[e])!=null?a.name:void 0)||e}
return t}(r)
t.exports=new i})
require.register("core/ParticleMan",function(e,require,t){var r,i,n,o,s,a,l,c,u=function(e,t){return function(){return e.apply(t,arguments)}},p=function(e,t){for(var r in t){if(d.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},d={}.hasOwnProperty
r=require("core/CocoClass")
l=require("core/utils")
t.exports=i=i=function(e){p(t,e)
function t(){this.render=u(this.render,this)
var e,t
if(!Modernizr.webgl){return this.unsupported=true}try{this.renderer=new THREE.WebGLRenderer({alpha:true})}catch(t){e=t
return this.unsupported=true}$(this.renderer.domElement).addClass("particle-man")
this.scene=new THREE.Scene
this.clock=new THREE.Clock
this.particleGroups=[]}t.prototype.destroy=function(){var e,r,i,n,o,s
this.detach()
this.disposeObject3D(this.scene)
s=((n=this.scene)!=null?(o=n.children)!=null?o.slice():void 0:void 0)||[]
for(r=0,i=s.length;r<i;r++){e=s[r]
this.scene.remove(e)}return t.__super__.destroy.call(this)}
t.prototype.disposeObject3D=function(e){var t,r,i,n,o,s,a,l,c,u
if(!e){return}a=e.children
for(r=0,n=a.length;r<n;r++){t=a[r]
this.disposeObject3D(t)}if((l=e.geometry)!=null){l.dispose()}e.geometry=void 0
if(e.material){u=(c=e.material.materials)!=null?c:[]
for(i=0,o=u.length;i<o;i++){s=u[i]
s.dispose()}e.material.dispose()
e.material=void 0}if(e.texture){e.texture.dispose()
return e.texture=void 0}}
t.prototype.attach=function(e){var t,r,i
this.$el=e
if(this.unsupported){return}i=this.$el.innerWidth()
r=this.$el.innerHeight()
this.aspectRatio=i/r
this.renderer.setSize(i,r)
this.$el.append(this.renderer.domElement)
this.camera=t=new THREE.OrthographicCamera(100*-.5,100*.5,100*.5*this.aspectRatio,100*-.5*this.aspectRatio,0,1e3)
this.camera.position.set(0,0,100)
this.camera.up=new THREE.Vector3(0,1,0)
this.camera.lookAt(new THREE.Vector3(0,0,0))
if(!this.started){this.started=true
return this.render()}}
t.prototype.detach=function(){if(this.unsupported){return}this.renderer.domElement.remove()
return this.started=false}
t.prototype.render=function(){var e,t,r,i,n
if(this.unsupported){return}if(this.destroyed){return}if(!this.started){return}this.renderer.render(this.scene,this.camera)
e=this.clock.getDelta()
n=this.particleGroups
for(r=0,i=n.length;r<i;r++){t=n[r]
t.tick(e)}return requestAnimationFrame(this.render)}
t.prototype.countFPS=function(){var e
if(this.framesRendered==null){this.framesRendered=0}++this.framesRendered
if(this.lastFPS==null){this.lastFPS=new Date}e=new Date
if(e-this.lastFPS>1e3){console.log(this.framesRendered,"fps with",this.particleGroups.length,"particle groups.")
this.framesRendered=0
return this.lastFPS=e}}
t.prototype.addEmitter=function(e,t,r){var i,n,o,s,l
if(r==null){r="level-dungeon-premium"}if(this.unsupported){return}s=$.extend(true,{},a[r])
if(!s.group){return console.error("Couldn't find particle configuration for",r)}s.group.texture=THREE.ImageUtils.loadTexture("/images/common/particles/"+s.group.texture+".png")
l=100
i=this.$el
o=new SPE.Group(s.group)
o.mesh.position.x=l*(-.5+e)
o.mesh.position.y=l*(-.5+t)*this.aspectRatio
n=new SPE.Emitter(s.emitter)
o.addEmitter(n)
this.particleGroups.push(o)
this.scene.add(o.mesh)
return o}
t.prototype.removeEmitter=function(e){if(this.unsupported){return}this.scene.remove(e.mesh)
return this.particleGroups=_.without(this.particleGroups,e)}
t.prototype.removeEmitters=function(){var e,t,r,i,n
if(this.unsupported){return}i=this.particleGroups.slice()
n=[]
for(t=0,r=i.length;t<r;t++){e=i[t]
n.push(this.removeEmitter(e))}return n}
return t}(r)
s=function(e,t,r){return new THREE.Color(l.hslToHex([e,t,r]))}
c=function(e,t,r){return new THREE.Vector3(e,t,r)}
n={group:{texture:"star",maxAge:1.9,radius:.75,hasPerspective:1,colorize:1,transparent:1,alphaTest:.5,depthWrite:false,depthTest:true,blending:THREE.NormalBlending},emitter:{type:"disk",particleCount:100,radius:1,position:c(0,0,0),positionSpread:c(1,0,1),acceleration:c(0,2,0),accelerationSpread:c(0,0,0),velocity:c(0,4,0),velocitySpread:c(2,2,2),sizeStart:6,sizeStartSpread:1,sizeMiddle:4,sizeMiddleSpread:1,sizeEnd:2,sizeEndSpread:1,angleStart:0,angleStartSpread:0,angleMiddle:0,angleMiddleSpread:0,angleEnd:0,angleEndSpread:0,angleAlignVelocity:false,colorStart:s(.55,.75,.75),colorStartSpread:c(.3,.3,.3),colorMiddle:s(.55,.6,.5),colorMiddleSpread:c(.2,.2,.2),colorEnd:s(.55,.5,.25),colorEndSpread:c(.1,.1,.1),opacityStart:1,opacityStartSpread:0,opacityMiddle:.75,opacityMiddleSpread:0,opacityEnd:.25,opacityEndSpread:0,duration:null,alive:1,isStatic:0}}
o=function(e,t){return $.extend(true,{},e,t!=null?t:{})}
a={"level-dungeon-premium":o(n),"level-forest-premium":o(n,{emitter:{colorStart:s(.56,.97,.5),colorMiddle:s(.56,.57,.5),colorEnd:s(.56,.17,.5)}}),"level-desert-premium":o(n,{emitter:{colorStart:s(.56,.97,.5),colorMiddle:s(.56,.57,.5),colorEnd:s(.56,.17,.5)}}),"level-mountain-premium":o(n,{emitter:{colorStart:s(.56,.97,.5),colorMiddle:s(.56,.57,.5),colorEnd:s(.56,.17,.5)}}),"level-glacier-premium":o(n,{emitter:{colorStart:s(.56,.97,.5),colorMiddle:s(.56,.57,.5),colorEnd:s(.56,.17,.5)}}),"level-volcano-premium":o(n,{emitter:{colorStart:s(.56,.97,.5),colorMiddle:s(.56,.57,.5),colorEnd:s(.56,.17,.5)}})}
a["level-dungeon-premium-hero"]=o(a["level-dungeon-premium"],{emitter:{particleCount:200,radius:1.5,acceleration:c(0,4,0),opacityStart:.25,opacityMiddle:.5,opacityEnd:.75}})
a["level-dungeon-gate"]=o(a["level-dungeon-premium"],{emitter:{particleCount:2e3,acceleration:c(0,8,0),colorStart:s(.5,.75,.9),colorMiddle:s(.5,.75,.7),colorEnd:s(.5,.75,.3),colorStartSpread:c(1,1,1),colorMiddleSpread:c(1.5,1.5,1.5),colorEndSpread:c(2.5,2.5,2.5)}})
a["level-dungeon-hero-ladder"]=a["level-dungeon-course-ladder"]=o(a["level-dungeon-premium"],{emitter:{particleCount:200,acceleration:c(0,3,0),colorStart:s(0,.75,.7),colorMiddle:s(0,.75,.5),colorEnd:s(0,.75,.3)}})
a["level-dungeon-replayable"]=a["level-dungeon-replayable-premium"]=o(a["level-dungeon-hero-ladder"],{emitter:{colorStart:s(.17,.75,.7),colorMiddle:s(.17,.75,.5),colorEnd:s(.17,.75,.3)}})
a["level-dungeon-game-dev"]=a["level-dungeon-game-dev-premium"]=o(a["level-dungeon-hero-ladder"],{emitter:{colorStart:s(.7,.75,.7),colorMiddle:s(.7,.75,.5),colorEnd:s(.7,.75,.3)}})
a["level-dungeon-web-dev"]=a["level-dungeon-web-dev-premium"]=o(a["level-dungeon-hero-ladder"],{emitter:{colorStart:s(.7,.25,.7),colorMiddle:s(.7,.25,.5),colorEnd:s(.7,.25,.3)}})
a["level-dungeon-premium-item"]=o(a["level-dungeon-gate"],{emitter:{particleCount:2e3,radius:2.5,acceleration:c(0,8,1),opacityStart:0,opacityMiddle:.5,opacityEnd:.75,colorStart:s(.5,.75,.9),colorMiddle:s(.5,.75,.7),colorEnd:s(.5,.75,.3),colorStartSpread:c(1,1,1),colorMiddleSpread:c(1.5,1.5,1.5),colorEndSpread:c(2.5,2.5,2.5)}})
a["level-forest-premium-hero"]=o(a["level-forest-premium"],{emitter:{particleCount:200,radius:1.5,acceleration:c(0,4,0),opacityStart:.25,opacityMiddle:.5,opacityEnd:.75}})
a["level-forest-gate"]=o(a["level-forest-premium"],{emitter:{particleCount:120,velocity:c(0,8,0),colorStart:s(.56,.97,.3),colorMiddle:s(.56,.57,.3),colorEnd:s(.56,.17,.3),colorStartSpread:c(1,1,1),colorMiddleSpread:c(1.5,1.5,1.5),colorEndSpread:c(2.5,2.5,2.5)}})
a["level-forest-hero-ladder"]=a["level-forest-course-ladder"]=o(a["level-forest-premium"],{emitter:{particleCount:90,velocity:c(0,4,0),colorStart:s(0,.95,.3),colorMiddle:s(0,1,.5),colorEnd:s(0,.75,.1)}})
a["level-forest-replayable"]=a["level-forest-replayable-premium"]=o(a["level-forest-hero-ladder"],{emitter:{colorStart:s(.17,.75,.7),colorMiddle:s(.17,.75,.5),colorEnd:s(.17,.75,.3)}})
a["level-forest-game-dev"]=a["level-forest-game-dev-premium"]=o(a["level-forest-hero-ladder"],{emitter:{colorStart:s(.7,.75,.7),colorMiddle:s(.7,.75,.5),colorEnd:s(.7,.75,.3)}})
a["level-forest-web-dev"]=a["level-forest-web-dev-premium"]=o(a["level-forest-hero-ladder"],{emitter:{colorStart:s(.7,.25,.7),colorMiddle:s(.7,.25,.5),colorEnd:s(.7,.25,.3)}})
a["level-forest-premium-item"]=o(a["level-forest-gate"],{emitter:{particleCount:2e3,radius:2.5,acceleration:c(0,8,1),opacityStart:0,opacityMiddle:.5,opacityEnd:.75,colorStart:s(.5,.75,.9),colorMiddle:s(.5,.75,.7),colorEnd:s(.5,.75,.3),colorStartSpread:c(1,1,1),colorMiddleSpread:c(1.5,1.5,1.5),colorEndSpread:c(2.5,2.5,2.5)}})
a["level-desert-premium-hero"]=o(a["level-desert-premium"],{emitter:{particleCount:200,radius:1.5,acceleration:c(0,4,0),opacityStart:.25,opacityMiddle:.5,opacityEnd:.75}})
a["level-desert-gate"]=o(a["level-desert-premium"],{emitter:{particleCount:120,velocity:c(0,8,0),colorStart:s(.56,.97,.3),colorMiddle:s(.56,.57,.3),colorEnd:s(.56,.17,.3),colorStartSpread:c(1,1,1),colorMiddleSpread:c(1.5,1.5,1.5),colorEndSpread:c(2.5,2.5,2.5)}})
a["level-desert-hero-ladder"]=a["level-desert-course-ladder"]=o(a["level-desert-premium"],{emitter:{particleCount:90,velocity:c(0,4,0),colorStart:s(0,.95,.3),colorMiddle:s(0,1,.5),colorEnd:s(0,.75,.1)}})
a["level-desert-replayable"]=a["level-desert-replayable-premium"]=o(a["level-desert-hero-ladder"],{emitter:{colorStart:s(.17,.75,.7),colorMiddle:s(.17,.75,.5),colorEnd:s(.17,.75,.3)}})
a["level-desert-game-dev"]=a["level-desert-game-dev-premium"]=o(a["level-desert-hero-ladder"],{emitter:{colorStart:s(.7,.75,.7),colorMiddle:s(.7,.75,.5),colorEnd:s(.7,.75,.3)}})
a["level-desert-web-dev"]=a["level-desert-web-dev-premium"]=o(a["level-desert-hero-ladder"],{emitter:{colorStart:s(.7,.25,.7),colorMiddle:s(.7,.25,.5),colorEnd:s(.7,.25,.3)}})
a["level-mountain-premium-hero"]=o(a["level-mountain-premium"],{emitter:{particleCount:200,radius:1.5,acceleration:c(0,4,0),opacityStart:.25,opacityMiddle:.5,opacityEnd:.75}})
a["level-mountain-gate"]=o(a["level-mountain-premium"],{emitter:{particleCount:120,velocity:c(0,8,0),colorStart:s(.56,.97,.3),colorMiddle:s(.56,.57,.3),colorEnd:s(.56,.17,.3),colorStartSpread:c(1,1,1),colorMiddleSpread:c(1.5,1.5,1.5),colorEndSpread:c(2.5,2.5,2.5)}})
a["level-mountain-hero-ladder"]=a["level-mountain-course-ladder"]=o(a["level-mountain-premium"],{emitter:{particleCount:90,velocity:c(0,4,0),colorStart:s(0,.95,.3),colorMiddle:s(0,1,.5),colorEnd:s(0,.75,.1)}})
a["level-mountain-replayable"]=a["level-mountain-replayable-premium"]=o(a["level-mountain-hero-ladder"],{emitter:{colorStart:s(.17,.75,.7),colorMiddle:s(.17,.75,.5),colorEnd:s(.17,.75,.3)}})
a["level-mountain-game-dev"]=a["level-mountain-game-dev-premium"]=o(a["level-mountain-hero-ladder"],{emitter:{colorStart:s(.7,.75,.7),colorMiddle:s(.7,.75,.5),colorEnd:s(.7,.75,.3)}})
a["level-mountain-web-dev"]=a["level-mountain-web-dev-premium"]=o(a["level-mountain-hero-ladder"],{emitter:{colorStart:s(.7,.25,.7),colorMiddle:s(.7,.25,.5),colorEnd:s(.7,.25,.3)}})
a["level-glacier-premium-hero"]=o(a["level-glacier-premium"],{emitter:{particleCount:200,radius:1.5,acceleration:c(0,4,0),opacityStart:.25,opacityMiddle:.5,opacityEnd:.75}})
a["level-glacier-gate"]=o(a["level-glacier-premium"],{emitter:{particleCount:120,velocity:c(0,8,0),colorStart:s(.56,.97,.3),colorMiddle:s(.56,.57,.3),colorEnd:s(.56,.17,.3),colorStartSpread:c(1,1,1),colorMiddleSpread:c(1.5,1.5,1.5),colorEndSpread:c(2.5,2.5,2.5)}})
a["level-glacier-hero-ladder"]=a["level-glacier-course-ladder"]=o(a["level-glacier-premium"],{emitter:{particleCount:90,velocity:c(0,4,0),colorStart:s(0,.95,.3),colorMiddle:s(0,1,.5),colorEnd:s(0,.75,.1)}})
a["level-glacier-replayable"]=a["level-glacier-replayable-premium"]=o(a["level-glacier-hero-ladder"],{emitter:{colorStart:s(.17,.75,.7),colorMiddle:s(.17,.75,.5),colorEnd:s(.17,.75,.3)}})
a["level-glacier-game-dev"]=a["level-glacier-game-dev-premium"]=o(a["level-glacier-hero-ladder"],{emitter:{colorStart:s(.7,.75,.7),colorMiddle:s(.7,.75,.5),colorEnd:s(.7,.75,.3)}})
a["level-glacier-web-dev"]=a["level-glacier-web-dev-premium"]=o(a["level-glacier-hero-ladder"],{emitter:{colorStart:s(.7,.25,.7),colorMiddle:s(.7,.25,.5),colorEnd:s(.7,.25,.3)}})
a["level-volcano-premium-hero"]=o(a["level-volcano-premium"],{emitter:{particleCount:200,radius:1.5,acceleration:c(0,4,0),opacityStart:.25,opacityMiddle:.5,opacityEnd:.75}})
a["level-volcano-gate"]=o(a["level-volcano-premium"],{emitter:{particleCount:120,velocity:c(0,8,0),colorStart:s(.56,.97,.3),colorMiddle:s(.56,.57,.3),colorEnd:s(.56,.17,.3),colorStartSpread:c(1,1,1),colorMiddleSpread:c(1.5,1.5,1.5),colorEndSpread:c(2.5,2.5,2.5)}})
a["level-volcano-hero-ladder"]=o(a["level-volcano-premium"],{emitter:{particleCount:90,velocity:c(0,4,0),colorStart:s(0,.95,.3),colorMiddle:s(0,1,.5),colorEnd:s(0,.75,.1)}})
a["level-volcano-replayable"]=a["level-volcano-replayable-premium"]=o(a["level-volcano-hero-ladder"],{emitter:{colorStart:s(.17,.75,.7),colorMiddle:s(.17,.75,.5),colorEnd:s(.17,.75,.3)}})
a["level-volcano-game-dev"]=a["level-volcano-game-dev-premium"]=o(a["level-volcano-hero-ladder"],{emitter:{colorStart:s(.7,.75,.7),colorMiddle:s(.7,.75,.5),colorEnd:s(.7,.75,.3)}})
a["level-volcano-web-dev"]=a["level-volcano-web-dev-premium"]=o(a["level-volcano-hero-ladder"],{emitter:{colorStart:s(.7,.25,.7),colorMiddle:s(.7,.25,.5),colorEnd:s(.7,.25,.3)}})})
require.register("core/Router",function(e,require,t){var r,i,n,o,s,a=function(e,t){return function(){return e.apply(t,arguments)}},l=function(e,t){for(var r in t){if(c.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},c={}.hasOwnProperty,u=[].slice
n=function(e,t){return function(){return this.routeDirectly(e,arguments,t)}}
o=function(e){return function(){delete window.alreadyLoadedView
return this.navigate(e+document.location.search,{trigger:true,replace:true})}}
s=require("./utils")
i=require("core/ViewLoadTimer")
t.exports=r=function(e){l(t,e)
function t(){this.renderSocialButtons=a(this.renderSocialButtons,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.initialize=function(){this.bind("route",this._trackPageView)
Backbone.Mediator.subscribe("router:navigate",this.onNavigate,this)
return this.initializeSocialMediaServices=_.once(this.initializeSocialMediaServices)}
t.prototype.routes={"":function(){if(window.serverConfig.picoCTF){return this.routeDirectly("play/CampaignView",["picoctf"],{})}if(s.getQueryVariable("hour_of_code")){return this.navigate("/play?hour_of_code=true",{trigger:true,replace:true})}return this.routeDirectly("HomeView",[])},about:n("AboutView"),account:n("account/MainAccountView"),"account/settings":n("account/AccountSettingsRootView"),"account/unsubscribe":n("account/UnsubscribeView"),"account/payments":n("account/PaymentsView"),"account/subscription":n("account/SubscriptionView",{redirectStudents:true,redirectTeachers:true}),"account/invoices":n("account/InvoicesView"),"account/prepaid":n("account/PrepaidView"),admin:n("admin/MainAdminView"),"admin/clas":n("admin/CLAsView"),"admin/classroom-content":n("admin/AdminClassroomContentView"),"admin/classroom-levels":n("admin/AdminClassroomLevelsView"),"admin/classrooms-progress":n("admin/AdminClassroomsProgressView"),"admin/design-elements":n("admin/DesignElementsView"),"admin/files":n("admin/FilesView"),"admin/analytics":n("admin/AnalyticsView"),"admin/analytics/subscriptions":n("admin/AnalyticsSubscriptionsView"),"admin/level-sessions":n("admin/LevelSessionsView"),"admin/school-counts":n("admin/SchoolCountsView"),"admin/school-licenses":n("admin/SchoolLicensesView"),"admin/base":n("admin/BaseView"),"admin/demo-requests":n("admin/DemoRequestsView"),"admin/trial-requests":n("admin/TrialRequestsView"),"admin/user-code-problems":n("admin/UserCodeProblemsView"),"admin/pending-patches":n("admin/PendingPatchesView"),"admin/codelogs":n("admin/CodeLogsView"),"admin/skipped-contacts":n("admin/SkippedContactsView"),"admin/outcomes-report-result":n("admin/OutcomeReportResultView"),"admin/outcomes-report":n("admin/OutcomesReportView"),artisans:n("artisans/ArtisansView"),"artisans/level-tasks":n("artisans/LevelTasksView"),"artisans/solution-problems":n("artisans/SolutionProblemsView"),"artisans/thang-tasks":n("artisans/ThangTasksView"),"artisans/level-concepts":n("artisans/LevelConceptMap"),"artisans/level-guides":n("artisans/LevelGuidesView"),"artisans/student-solutions":n("artisans/StudentSolutionsView"),"artisans/tag-test":n("artisans/TagTestView"),careers:function(){return window.location.href="https://jobs.lever.co/codecombat"},Careers:function(){return window.location.href="https://jobs.lever.co/codecombat"},cla:n("CLAView"),clans:n("clans/ClansView"),"clans/:clanID":n("clans/ClanDetailsView"),community:n("CommunityView"),contribute:n("contribute/MainContributeView"),"contribute/adventurer":n("contribute/AdventurerView"),"contribute/ambassador":n("contribute/AmbassadorView"),"contribute/archmage":n("contribute/ArchmageView"),"contribute/artisan":n("contribute/ArtisanView"),"contribute/diplomat":n("contribute/DiplomatView"),"contribute/scribe":n("contribute/ScribeView"),courses:o("/students"),Courses:o("/students"),"courses/students":o("/students"),"courses/teachers":o("/teachers/classes"),"courses/purchase":o("/teachers/licenses"),"courses/enroll(/:courseID)":o("/teachers/licenses"),"courses/update-account":o("students/update-account"),"courses/:classroomID":function(){return this.navigate("/students/"+arguments[0],{trigger:true,replace:true})},"courses/:courseID/:courseInstanceID":function(){return this.navigate("/students/"+arguments[0]+"/"+arguments[1],{trigger:true,replace:true})},"db/*path":"routeToServer","demo(/*subpath)":n("DemoView"),"docs/components":n("docs/ComponentsDocumentationView"),"docs/systems":n("docs/SystemsDocumentationView"),editor:n("CommunityView"),"editor/achievement":n("editor/achievement/AchievementSearchView"),"editor/achievement/:articleID":n("editor/achievement/AchievementEditView"),"editor/article":n("editor/article/ArticleSearchView"),"editor/article/preview":n("editor/article/ArticlePreviewView"),"editor/article/:articleID":n("editor/article/ArticleEditView"),"editor/level":n("editor/level/LevelSearchView"),"editor/level/:levelID":n("editor/level/LevelEditView"),"editor/thang":n("editor/thang/ThangTypeSearchView"),"editor/thang/:thangID":n("editor/thang/ThangTypeEditView"),"editor/campaign/:campaignID":n("editor/campaign/CampaignEditorView"),"editor/poll":n("editor/poll/PollSearchView"),"editor/poll/:articleID":n("editor/poll/PollEditView"),"editor/thang-tasks":n("editor/ThangTasksView"),"editor/verifier":n("editor/verifier/VerifierView"),"editor/verifier/:levelID":n("editor/verifier/VerifierView"),"editor/course":n("editor/course/CourseSearchView"),"editor/course/:courseID":n("editor/course/CourseEditView"),"file/*path":"routeToServer","github/*path":"routeToServer",hoc:function(){return this.navigate("/play?hour_of_code=true",{trigger:true,replace:true})},home:n("HomeView"),i18n:n("i18n/I18NHomeView"),"i18n/thang/:handle":n("i18n/I18NEditThangTypeView"),"i18n/component/:handle":n("i18n/I18NEditComponentView"),"i18n/level/:handle":n("i18n/I18NEditLevelView"),"i18n/achievement/:handle":n("i18n/I18NEditAchievementView"),"i18n/campaign/:handle":n("i18n/I18NEditCampaignView"),"i18n/poll/:handle":n("i18n/I18NEditPollView"),"i18n/course/:handle":n("i18n/I18NEditCourseView"),identify:n("user/IdentifyView"),"il-signup":n("account/IsraelSignupView"),legal:n("LegalView"),logout:"logout","play(/)":n("play/CampaignView",{redirectStudents:true,redirectTeachers:true}),"play/ladder/:levelID/:leagueType/:leagueID":n("ladder/LadderView"),"play/ladder/:levelID":n("ladder/LadderView"),"play/ladder":n("ladder/MainLadderView"),"play/level/:levelID":n("play/level/PlayLevelView"),"play/game-dev-level/:levelID/:sessionID":n("play/level/PlayGameDevLevelView"),"play/web-dev-level/:levelID/:sessionID":n("play/level/PlayWebDevLevelView"),"play/spectate/:levelID":n("play/SpectateView"),"play/:map":n("play/CampaignView",{redirectTeachers:true}),premium:n("PremiumFeaturesView"),Premium:n("PremiumFeaturesView"),preview:n("HomeView"),privacy:n("PrivacyView"),schools:n("HomeView"),seen:n("HomeView"),SEEN:n("HomeView"),sunburst:n("HomeView"),students:n("courses/CoursesView",{redirectTeachers:true}),"students/update-account":n("courses/CoursesUpdateAccountView",{redirectTeachers:true}),"students/:classroomID":n("courses/ClassroomView",{redirectTeachers:true,studentsOnly:true}),"students/:courseID/:courseInstanceID":n("courses/CourseDetailsView",{redirectTeachers:true,studentsOnly:true}),teachers:o("/teachers/classes"),"teachers/classes":n("courses/TeacherClassesView",{redirectStudents:true,teachersOnly:true}),"teachers/classes/:classroomID/:studentID":n("teachers/TeacherStudentView",{redirectStudents:true,teachersOnly:true}),"teachers/classes/:classroomID":n("courses/TeacherClassView",{redirectStudents:true,teachersOnly:true}),"teachers/courses":n("courses/TeacherCoursesView",{redirectStudents:true}),"teachers/course-solution/:courseID/:language":n("teachers/TeacherCourseSolutionView",{redirectStudents:true}),"teachers/demo":n("teachers/RequestQuoteView",{redirectStudents:true}),"teachers/enrollments":o("/teachers/licenses"),"teachers/licenses":n("courses/EnrollmentsView",{redirectStudents:true,teachersOnly:true}),"teachers/freetrial":n("teachers/RequestQuoteView",{redirectStudents:true}),"teachers/quote":o("/teachers/demo"),"teachers/resources":n("teachers/ResourceHubView",{redirectStudents:true}),"teachers/resources/:name":n("teachers/MarkdownResourceView",{redirectStudents:true}),"teachers/signup":function(){if(me.isAnonymous()){return this.routeDirectly("teachers/CreateTeacherAccountView",[])}if(me.isStudent()&&!me.isAdmin()){return this.navigate("/students",{trigger:true,replace:true})}return this.navigate("/teachers/update-account",{trigger:true,replace:true})},"teachers/starter-licenses":n("teachers/StarterLicenseUpsellView",{redirectStudents:true,teachersOnly:true}),"teachers/update-account":function(){if(me.isAnonymous()){return this.navigate("/teachers/signup",{trigger:true,replace:true})}if(me.isStudent()&&!me.isAdmin()){return this.navigate("/students",{trigger:true,replace:true})}return this.routeDirectly("teachers/ConvertToTeacherAccountView",[])},"test(/*subpath)":n("TestView"),"user/:slugOrID":n("user/MainUserView"),"user/:userID/verify/:verificationCode":n("user/EmailVerifiedView"),"*name/":"removeTrailingSlash","*name":n("NotFoundView")}
t.prototype.routeToServer=function(e){return window.location.href=window.location.href}
t.prototype.removeTrailingSlash=function(e){return this.navigate(e,{trigger:true})}
t.prototype.routeDirectly=function(e,t,r){var o,s,a
if(t==null){t=[]}if(r==null){r={}}if(window.alreadyLoadedView){e=window.alreadyLoadedView}if(!r.recursive){this.viewLoad=new i}if(r.redirectStudents&&me.isStudent()&&!me.isAdmin()){return this.redirectHome()}if(r.redirectTeachers&&me.isTeacher()&&!me.isAdmin()){return this.redirectHome()}if(r.teachersOnly&&!(me.isTeacher()||me.isAdmin())){return this.routeDirectly("teachers/RestrictedToTeachersView")}if(r.studentsOnly&&!(me.isStudent()||me.isAdmin())){return this.routeDirectly("courses/RestrictedToStudentsView")}s=_.result(window.currentView,"onLeaveMessage")
if(s){if(!confirm(s)){return this.navigate(this.path,{replace:true})}else{window.currentView.onLeaveMessage=_.noop}}if(features.playViewsOnly&&!(_.string.startsWith(document.location.pathname,"/play")||document.location.pathname==="/admin")){delete window.alreadyLoadedView
return this.navigate("/play",{trigger:true,replace:true})}if(features.playOnly&&!/^(views)?\/?play/.test(e)){delete window.alreadyLoadedView
e="play/CampaignView"}if(!_.string.startsWith(e,"views/")){e="views/"+e}o=this.tryToLoadModule(e)
if(!o&&application.moduleLoader.load(e)){this.listenToOnce(application.moduleLoader,"load-complete",function(){r.recursive=true
return this.routeDirectly(e,t,r)})
return}if(!o){return n("NotFoundView")}a=function(e,t,r){r.prototype=e.prototype
var i=new r,n=e.apply(i,t)
return Object(n)===n?n:i}(o,[r].concat(u.call(t)),function(){})
a.render()
if(window.alreadyLoadedView){console.log("Need to merge view")
delete window.alreadyLoadedView
this.mergeView(a)}else{this.openView(a)}this.viewLoad.setView(a)
return this.viewLoad.record()}
t.prototype.redirectHome=function(){var e
delete window.alreadyLoadedView
e=function(){switch(false){case!me.isStudent():return"/students"
case!me.isTeacher():return"/teachers"
default:return"/"}}()
return this.navigate(e,{trigger:true,replace:true})}
t.prototype.tryToLoadModule=function(e){var t,r
try{return window.require(e)}catch(r){t=r
if(t.toString().search('Cannot find module "'+e+'" from')===-1){throw t}}}
t.prototype.openView=function(e){this.closeCurrentView()
$("#page-container").empty().append(e.el)
this.activateTab()
return this.didOpenView(e)}
t.prototype.mergeView=function(e){var t
if(e.mergeWithPrerendered==null){return this.openView(e)}t=$("#page-container>div")
e.mergeWithPrerendered(t)
e.setElement(t[0])
return this.didOpenView(e)}
t.prototype.didOpenView=function(e){window.currentView=e
e.afterInsert()
e.didReappear()
this.path=document.location.pathname+document.location.search
console.log("Did-Load-Route")
return this.trigger("did-load-route")}
t.prototype.closeCurrentView=function(){var e,t
if((e=window.currentView)!=null?e.reloadOnClose:void 0){return document.location.reload()}if((t=window.currentModal)!=null){if(typeof t.hide==="function"){t.hide()}}if(window.currentView==null){return}window.currentView.destroy()
$(".popover").popover("hide")
$("#flying-focus").css({top:0,left:0})
return _.delay(function(){$("html")[0].scrollTop=0
return $("body")[0].scrollTop=0},10)}
t.prototype.initializeSocialMediaServices=function(){if(application.testing||application.demoing){return}application.facebookHandler.loadAPI()
application.gplusHandler.loadAPI()
return require("core/services/twitter")()}
t.prototype.renderSocialButtons=function(){var e
this.initializeSocialMediaServices()
$(".share-buttons, .partner-badges").addClass("fade-in").delay(1e4).removeClass("fade-in",5e3)
application.facebookHandler.renderButtons()
application.gplusHandler.renderButtons()
return typeof twttr!=="undefined"&&twttr!==null?(e=twttr.widgets)!=null?typeof e.load==="function"?e.load():void 0:void 0:void 0}
t.prototype.activateTab=function(){var e
e=_.string.words(document.location.pathname.slice(1),"/")[0]
return $("ul.nav li."+e).addClass("active")}
t.prototype._trackPageView=function(){var e
return(e=window.tracker)!=null?e.trackPageView():void 0}
t.prototype.onNavigate=function(e,t){var r,n,o,s
if(t==null){t=false}if(!t){this.viewLoad=new i}if(_.isString(e.viewClass)){r=this.tryToLoadModule(e.viewClass)
if(!r&&application.moduleLoader.load(e.viewClass)){this.listenToOnce(application.moduleLoader,"load-complete",function(){return this.onNavigate(e,true)})
return}e.viewClass=r}o=e.view||e.viewClass
if(e.route===document.location.pathname&&!o){return document.location.reload()}this.navigate(e.route,{trigger:!o})
this._trackPageView()
if(!o){return}if(e.viewClass){n=e.viewArgs||[]
s=function(e,t,r){r.prototype=e.prototype
var i=new r,n=e.apply(i,t)
return Object(n)===n?n:i}(e.viewClass,n,function(){})
s.render()
this.openView(s)
this.viewLoad.setView(s)}else{this.openView(e.view)
this.viewLoad.setView(e.view)}return this.viewLoad.record()}
t.prototype.navigate=function(e,r){t.__super__.navigate.call(this,e,r)
return Backbone.Mediator.publish("router:navigated",{route:e})}
t.prototype.reload=function(){return document.location.reload()}
t.prototype.logout=function(){me.logout()
return this.navigate("/",{trigger:true})}
return t}(Backbone.Router)})
require.register("core/SystemNameLoader",function(e,require,t){var r,i,n,o=function(e,t){for(var r in t){if(s.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},s={}.hasOwnProperty
r=require("./CocoClass")
n={}
i=function(e){o(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.getName=function(e){var t
return(t=n[e])!=null?t.name:void 0}
t.prototype.setName=function(e){return n[e.get("original")]={name:e.get("name")}}
return t}(r)
t.exports=new i})
require.register("core/Tracker",function(e,require,t){var r,i,n,o,s,a,l,c=function(e,t){return function(){return e.apply(t,arguments)}},u=function(e,t){for(var r in t){if(p.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},p={}.hasOwnProperty,d=[].indexOf||function(e){for(var t=0,r=this.length;t<r;t++){if(t in this&&this[t]===e)return t}return-1}
s=require("core/auth").me
i=require("models/SuperModel")
l=require("core/utils")
r=require("core/CocoClass")
o=false
a=["cupboards-of-kithgard"]
t.exports=n=function(e){u(t,e)
t.prototype.subscriptions={"application:service-loaded":"onServiceLoaded"}
function t(){this.trackEventInternal=c(this.trackEventInternal,this)
this.trackSnowplow=c(this.trackSnowplow,this)
this.trackEvent=c(this.trackEvent,this)
t.__super__.constructor.call(this)
if(window.tracker){console.error("Overwrote our Tracker!",window.tracker)}window.tracker=this
this.isProduction=document.location.href.search("codecombat.com")!==-1
this.trackReferrers()
this.supermodel=new i
this.identify()
if(s.get("role")){this.updateRole()}}t.prototype.enableInspectletJS=function(e){var t,r,i
if(d.call(a,e)<0){return this.disableInspectletJS()}r=function(e){return function(){var t
e.identify()
return(t=window.__insp)!=null?t.push(["virtualPage"]):void 0}}(this)
window.__insp=[["wid",2102699786]]
t=document.createElement("script")
t.type="text/javascript"
t.async=true
t.id="inspsync"
t.src=("https:"===document.location.protocol?"https":"http")+"://cdn.inspectlet.com/inspectlet.js"
t.onreadystatechange=function(){if(t.readyState==="complete"){return r()}}
t.onload=r
i=document.getElementsByTagName("script")[0]
return this.inspectletScriptNode=i.parentNode.insertBefore(t,i)}
t.prototype.disableInspectletJS=function(){var e
if(this.inspectletScriptNode){e=document.getElementsByTagName("script")[0]
e.parentNode.removeChild(this.inspectletScriptNode)
this.inspectletScriptNode=null}return delete window.__insp}
t.prototype.trackReferrers=function(){var e,t,r,i
t=new Date-new Date(s.get("dateCreated"))
if(!(t<5*60*1e3)){return}if(s.get("siteref")||s.get("referrer")){return}e=false
if(i=l.getQueryVariable("_r")){s.set("siteref",i)
e=true}if(r=document.referrer){s.set("referrer",r)
e=true}if(e){return s.patch()}}
t.prototype.identify=function(e){var t,r,i,n,a,l
if(e==null){e={}}if(!s){return}if(this.explicitTraits==null){this.explicitTraits={}}for(r in e){l=e[r]
this.explicitTraits[r]=l}n=["email","anonymous","dateCreated","hourOfCode","name","referrer","testGroupNumber","gender","lastLevel","siteref","ageRange","schoolName","coursePrepaidID","role"]
for(t=0,i=n.length;t<i;t++){a=n[t]
if(s.get(a)!=null){if(e[a]==null){e[a]=s.get(a)}}}if(s.isTeacher()){e.teacher=true}e.host=document.location.host
if(o){console.log("Would identify",s.id,e)}if(!((s!=null?s.isAdmin():void 0)&&this.isProduction)){this.trackEventInternal("Identify",{id:s.id,traits:e})}if(!(this.isProduction&&!s.isAdmin())){return}if(typeof _errs!=="undefined"&&_errs!==null){_errs.meta=e}if(typeof __insp!=="undefined"&&__insp!==null){__insp.push(["identify",s.id])}if(typeof __insp!=="undefined"&&__insp!==null){__insp.push(["tagSession",e])}if(typeof mixpanel!=="undefined"&&mixpanel!==null){mixpanel.identify(s.id)}if(typeof mixpanel!=="undefined"&&mixpanel!==null){mixpanel.register(e)}if(s.isTeacher()&&this.segmentLoaded){e.createdAt=s.get("dateCreated")
return analytics.identify(s.id,e)}}
t.prototype.trackPageView=function(e){var t,r,i,n,a,l,c
if(e==null){e=[]}r=function(e){var t
t=[]
return d.call(t,e)>=0||/courses|students|teachers/gi.test(e)}
a=Backbone.history.getFragment()
c="/"+a
if(o){console.log("Would track analytics pageview: "+c+" Mixpanel="+r(a))}if(!((s!=null?s.isAdmin():void 0)&&this.isProduction)){this.trackEventInternal("Pageview",{url:a,href:window.location.href})}if(!(this.isProduction&&!s.isAdmin())){return}if(typeof ga==="function"){ga("send","pageview",c)}if(features.codePlay){if(typeof ga==="function"){ga("codeplay.send","pageview",c)}}window.snowplow("trackPageView")
if(r(a)){if(typeof mixpanel!=="undefined"&&mixpanel!==null){mixpanel.track("page viewed",{"page name":a,url:c})}}if(s.isTeacher()&&this.segmentLoaded){l={}
if(e!=null?e.length:void 0){l.integrations={All:false}
for(t=0,n=e.length;t<n;t++){i=e[t]
l.integrations[i]=true}}return analytics.page(c,{},l)}}
t.prototype.trackEvent=function(e,t,r){var i,n,a,l,c,u
if(t==null){t={}}if(r==null){r=[]}if(o){console.log("Tracking external analytics event:",e,t,r)}if(!(s&&this.isProduction&&!s.isAdmin())){return}this.trackEventInternal(e,_.cloneDeep(t))
this.trackSnowplow(e,_.cloneDeep(t))
if(e!=="View Load"&&e!=="Script Started"&&e!=="Script Ended"&&e!=="Heard Sprite"){i={hitType:"event",eventCategory:(u=t.category)!=null?u:"All",eventAction:e}
if(t.label!=null){i.eventLabel=t.label}if(t.value!=null){i.eventValue=t.value}if(typeof ga==="function"){ga("send",i)}if(features.codePlay){if(typeof ga==="function"){ga("codeplay.send",i)}}}if(typeof __insp!=="undefined"&&__insp!==null){__insp.push(["tagSession",{action:e,properies:t}])}if(d.call(r,"Mixpanel")>=0){if(typeof mixpanel!=="undefined"&&mixpanel!==null){mixpanel.track(e,t)}}if(s.isTeacher()&&this.segmentLoaded){c={}
if(r){c.integrations={All:false}
for(n=0,l=r.length;n<l;n++){a=r[n]
c.integrations[a]=true}}return typeof analytics!=="undefined"&&analytics!==null?analytics.track(e,{},c):void 0}}
t.prototype.trackSnowplow=function(e,t){var r,i,n,o,a
if(e==="Simulator Result"||e==="Started Level Load"||e==="Finished Level Load"){return}if(e==="Clicked Start Level"||e==="Inventory Play"||e==="Heard Sprite"||e==="Started Level"||e==="Saw Victory"||e==="Click Play"||e==="Choose Inventory"||e==="Homepage Loaded"||e==="Change Hero"){delete t.label}o=e.toLowerCase().replace(/[^a-z0-9]+/gi,"_")
t.user=s.id
delete t.category
try{n=require("schemas/events/"+o)}catch(e){console.warn("Schema not found for snowplow action: ",o,t)
return}if(!this.isProduction){i=tv4.validateResult(t,n)
if(!i.valid){a="Snowplow event schema validation failed! See console"
console.log("Snowplow event failure info:",{snowplowAction:o,properties:t,error:i.error})
noty({text:a,layout:"center",type:"error",killer:false,timeout:5e3,dismissQueue:true,maxVisible:3})}}return window.snowplow("trackUnstructEvent",{schema:"iglu:com.codecombat/"+o+"/jsonschema/"+n.self.version,data:t})}
t.prototype.trackEventInternal=function(e,t){var r,i,n,s
if(this.supermodel==null){return}if(e==="Simulator Result"||e==="Started Level Load"||e==="Finished Level Load"||e==="View Load"){return}if(e==="Clicked Start Level"||e==="Inventory Play"||e==="Heard Sprite"||e==="Started Level"||e==="Saw Victory"||e==="Click Play"||e==="Choose Inventory"||e==="Homepage Loaded"||e==="Change Hero"){delete t.category
delete t.label}else if(e==="Loaded World Map"||e==="Started Signup"||e==="Finished Signup"||e==="Login"||e==="Facebook Login"||e==="Google Login"||e==="Show subscription modal"){delete t.category}if(this.explicitTraits!=null){i=this.explicitTraits
for(r in i){s=i[r]
t[r]=s}}if(o){console.log("Tracking internal analytics event:",e,t)}n=this.supermodel.addRequestResource({url:"/db/analytics.log.event/-/log_event",data:{event:e,properties:t},method:"POST"},0)
return n.load()}
t.prototype.trackTiming=function(e,t,r,i){if(!(e>=0&&e<60*60*1e3)){return console.warn("Duration "+e+" invalid for trackTiming call.")}if(o){console.log("Would track timing event:",arguments)}if(!(s&&this.isProduction&&!s.isAdmin())){return}return typeof ga==="function"?ga("send","timing",t,r,e,i):void 0}
t.prototype.updateRole=function(){if(s.isAdmin()){return}if(!s.isTeacher()){return}if(!this.segmentLoaded){return require("core/services/segment")()}return this.identify()}
t.prototype.onServiceLoaded=function(e){if(e.service!=="segment"){return}this.segmentLoaded=true
return this.updateRole()}
return t}(r)})
require.register("core/ViewLoadTimer",function(e,require,t){var r,i,n
i=false
r=false
n=function(){e.firstLoad=true
function e(t){this.view=t
this.firstLoad=e.firstLoad
e.firstLoad=false
if(!(window.performance&&window.performance.now&&window.performance.getEntriesByType)){return}this.t0=this.firstLoad?0:performance.now()}e.prototype.setView=function(e){this.view=e}
e.prototype.record=function(){var e,t,n,o
if(i){console.group("Recording view:",this.view.id)}if(this.firstLoad&&application.loadedStaticPage&&me.isAnonymous()){this.skippingNetworkResources=true
e=[]}else{o=[this.view]
e=[]
while(o.length){t=o.pop()
o=o.concat(_.values(t.subviews))
if(!t.supermodel.finished()){e.push(t.supermodel.finishLoading())}}}if(i){console.log("Network promises:",e.length)}n=this.view.id
return Promise.all(e).then(function(e){return function(){var t,r,n,o,s,a,l,c,u
e.networkLoad=performance.now()
if(e.view.destroyed){return}r=[]
if(i){console.groupCollapsed("Images")
console.groupCollapsed("Skipping")
c=e.view.$("img:not(:visible)")
for(t=0,s=c.length;t<s;t++){n=c[t]
console.log(n.src)}console.groupEnd()}u=e.view.$("img:visible")
for(o=0,a=u.length;o<a;o++){n=u[o]
if(!n.complete){l=new Promise(function(e){if(n.complete){return e()}else{n.onload=e
return n.onerror=e}})
l.imgSrc=n.src
if(i){console.log(n.src)}r.push(l)}}if(i){console.groupEnd()}e.imagesAlreadyLoaded=r.length===0
return Promise.all(r)}}(this)).then(function(e){return function(){var t,o,s,a,l,c,u,p,d,h,m,g,f,y,v
s=performance.now()
if(e.imagesAlreadyLoaded&&e.skippingNetworkResources){l=performance.getEntriesByType("resource").filter(function(e){return _.contains(["img","css"],e.initiatorType)}).map(function(e){return e.responseEnd})
if(i){console.log("Static page measures endTime as",Math.max.apply(Math,l).toFixed(1),"instead of",s.toFixed(1))}s=Math.max.apply(Math,l)}if(e.skippingNetworkResources){u=performance.timing.domInteractive-performance.timing.navigationStart}else{u=e.networkLoad-e.t0}y=s-e.t0
console.log("Saw view load event",n,e.view.id)
if(e.view.destroyed){console.log("Sure did toss that thing.")
window.bored+=y
return}if(!e.view.id){return console.warn("Unknown view at: "+document.location.href+", could not record perf.")}if(!_.isNumber(y)){return console.warn("Got invalid time result for view "+e.view.id+": "+y+", could not record perf.")}m=typeof(t=e.view).getLoadTrackingTag==="function"?t.getLoadTrackingTag():void 0
c="Loaded "+e.view.id+"/"+m+" in: "+y.toFixed(1)+"ms"
if(e.firstLoad){a=performance.getEntriesByType("resource").filter(function(e){return _.string.startsWith(e.name,location.origin)})
g=_.reduce(a,function(e,t){return e+t.encodedBodySize},0)
v=_.reduce(a,function(e,t){return e+t.transferSize},0)
o=_.size(_.filter(a,function(e){return e.transferSize/e.encodedBodySize<.1}))
f=_.size(a)
h={totalEncodedBodySize:g,totalTransferSize:v,cachedResources:o,totalResources:f}}else{h={}}p=_.assign({networkTime:u,totalTime:y,viewId:e.view.id,firstLoad:e.firstLoad},h)
if(m){p.tag=m}if(i){console.log(c)}if(r){noty({text:c,type:"information",timeout:1e3,layout:"topCenter"})}if((d=window.tracker)!=null){d.trackEvent("View Load",p)}if(window.timeSpendWaiting==null){window.timeSpendWaiting=0}return window.timeSpendWaiting+=y}}(this)).then(function(e){return function(){if(i){return console.groupEnd()}}}(this))}
return e}()
t.exports=n})
require.register("core/ViewVisibleTimer",function(e,require,t){var r,i,n,o=function(e,t){for(var r in t){if(s.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},s={}.hasOwnProperty
r=require("core/CocoClass")
n=new Idle({onAway:function(){return Backbone.Mediator.publish("view-visibility:away",{})},onAwayBack:function(){return Backbone.Mediator.publish("view-visibility:away-back",{})},onHidden:function(){return Backbone.Mediator.publish("view-visibility:hidden",{})},onVisible:function(){return Backbone.Mediator.publish("view-visibility:visible",{})},awayTimeout:1e3})
n.start()
i=function(e){o(t,e)
t.prototype.subscriptions={"view-visibility:away":"onAway","view-visibility:away-back":"onAwayBack","view-visibility:hidden":"onHidden","view-visibility:visible":"onVisible"}
function t(){this.running=false
this.awayTimeoutLimit=5*1e3
this.awayTimeoutId=null
this.throttleRate=50
t.__super__.constructor.call(this)}t.prototype.startTimer=function(e){var t,r,i,n
this.featureData=e
i=this.featureData,n=i.viewName,t=i.featureName,r=i.premiumThang
if(!n){throw new Error("No view name!")}if(this.running&&window.performance.now()-this.startTime>this.throttleRate){throw new Error("Starting a timer over another one!")}if(!this.running&&(!this.startTime||window.performance.now()-this.startTime>this.throttleRate)){this.running=true
return this.startTime=window.performance.now()}}
t.prototype.stopTimer=function(e){var t,r,i,n,o,s
r=e!=null?e:{},o=(i=r.subtractTimeout)!=null?i:false,t=(n=r.clearName)!=null?n:false
clearTimeout(this.awayTimeoutId)
if(this.running){this.running=false
this.endTime=o?this.lastActive:window.performance.now()
s=this.endTime-this.startTime
if(s>this.throttleRate){window.tracker.trackEvent("Premium Feature Viewed",{featureData:this.featureData,timeViewed:s})}}if(t){return this.featureData=null}}
t.prototype.markLastActive=function(){return this.lastActive=window.performance.now()}
t.prototype.onAway=function(){var e
this.markLastActive()
e=new Error
if(this.running){return this.awayTimeoutId=setTimeout(function(e){return function(){return e.stopTimer({subtractTimeout:true})}}(this),this.awayTimeoutLimit)}}
t.prototype.onAwayBack=function(){clearTimeout(this.awayTimeoutId)
if(!this.running&&this.featureData){return this.startTimer(this.featureData)}}
t.prototype.onHidden=function(){return this.stopTimer({subtractTimeout:false})}
t.prototype.onVisible=function(){if(this.featureData){return this.startTimer(this.featureData)}}
t.prototype.destroy=function(){this.stopTimer()
return t.__super__.destroy.call(this)}
return t}(r)
t.exports=i})
require.register("core/api/admin",function(e,require,t){var r
r=require("./fetch-json")
t.exports={clearFeatureMode:function(e){return r("/admin/feature-mode",_.assign({},e,{method:"DELETE"}))},setFeatureMode:function(e,t){return r("/admin/feature-mode/"+e,_.assign({},t,{method:"PUT"}))}}})
require.register("core/api/fetch-json",function(e,require,t){var r
r=function(e,t){if(t==null){t={}}if(t.json){if(t.headers==null){t.headers={}}t.headers["content-type"]="application/json"
t.body=JSON.stringify(t.json)
delete t.json}if(t.data){e=e.split("?")[0]+"?"+$.param(t.data)
delete t.data}if(t.credentials==null){t.credentials="same-origin"}return fetch(e,t).then(function(e){var t
t=_.string.startsWith(e.headers.get("content-type"),"application/json")
if(e.status>=400){if(t){return e.json().then(function(e){return Promise.reject(e)})}else{return e.text().then(function(t){return Promise.reject({message:t,code:e.status})})}}if(t){return e.json()}else{return e.text()}})}
t.exports=r})
require.register("core/api/index",function(e,require,t){t.exports={admin:require("./admin"),levelSessions:require("./level-sessions"),prepaids:require("./prepaids"),skippedContacts:require("./skipped-contacts"),trialRequests:require("./trial-requests"),users:require("./users")}})
require.register("core/api/level-sessions",function(e,require,t){var r
r=require("./fetch-json")
t.exports={submitToRank:function(e,t){var i,n
n=e.session,i=e.courseInstanceId
return r("/queue/scoring",_.merge({},t,{method:"POST",json:{session:n,courseInstanceId:i}}))}}})
require.register("core/api/prepaids",function(e,require,t){var r
r=require("./fetch-json")
t.exports={url:function(e,t){if(t){return"/db/prepaid/"+e+"/"+t}else{return"/db/prepaid/"+e}},addJoiner:function(e,t){var i,n
i=e.prepaidID,n=e.userID
if(t==null){t={}}return r(this.url(i,"joiners"),_.assign({},t,{method:"POST",json:{userID:n}}))},fetchJoiners:function(e,t){var i
i=e.prepaidID
if(t==null){t={}}return r(this.url(i,"joiners"))}}})
require.register("core/api/skipped-contacts",function(e,require,t){var r,i
r=require("./fetch-json")
i=require("core/utils")
t.exports={fetchAll:function(e){return r("/db/skipped-contact",e).then(function(e){e.forEach(function(e){var t,r,n
e.email=((t=e.trialRequest)!=null?t.properties.email:void 0)||((r=e.zpContact)!=null?r.email:void 0)
if((n=e.trialRequest)!=null?n.created:void 0){return e.dateCreated=new Date(e.trialRequest.created)}else{return e.dateCreated=i.objectIdToDate(e._id)}})
return e})},put:function(e,t){return r("/db/skipped-contact/"+e._id,_.assign({},t,{method:"PUT",json:e}))}}})
require.register("core/api/trial-requests",function(e,require,t){var r
r=require("./fetch-json")
t.exports={post:function(e,t){return r("/db/trial.request",_.assign({},t,{method:"POST",json:e}))}}})
require.register("core/api/users",function(e,require,t){var r
r=require("./fetch-json")
t.exports={url:function(e,t){if(t){return"/db/user/"+e+"/"+t}else{return"/db/user/"+e}},getByHandle:function(e,t){return r("/db/user/"+e,t)},getByEmail:function(e,t){if(t==null){t={}}return r("/db/user",_.merge({},t,{data:{email:e}}))},signupWithPassword:function(e,t){var i,n,o,s
s=e.userId,n=e.name,i=e.email,o=e.password
if(t==null){t={}}return r(this.url(s,"signup-with-password"),_.assign({},t,{method:"POST",json:{name:n,email:i,password:o}})).then(function(){var e
return(e=window.tracker)!=null?e.trackEvent("Finished Signup",{category:"Signup",label:"CodeCombat"}):void 0})},signupWithFacebook:function(e,t){var i,n,o,s
s=e.userId,o=e.name,i=e.email,n=e.facebookID
if(t==null){t={}}return r(this.url(s,"signup-with-facebook"),_.assign({},t,{method:"POST",json:{name:o,email:i,facebookID:n,facebookAccessToken:application.facebookHandler.token()}})).then(function(){var e,t
if((e=window.tracker)!=null){e.trackEvent("Facebook Login",{category:"Signup",label:"Facebook"})}return(t=window.tracker)!=null?t.trackEvent("Finished Signup",{category:"Signup",label:"Facebook"}):void 0})},signupWithGPlus:function(e,t){var i,n,o,s
s=e.userId,o=e.name,i=e.email,n=e.gplusID
if(t==null){t={}}return r(this.url(s,"signup-with-gplus"),_.assign({},t,{method:"POST",json:{name:o,email:i,gplusID:n,gplusAccessToken:application.gplusHandler.token()}})).then(function(){var e,t
if((e=window.tracker)!=null){e.trackEvent("Google Login",{category:"Signup",label:"GPlus"})}return(t=window.tracker)!=null?t.trackEvent("Finished Signup",{category:"Signup",label:"GPlus"}):void 0})},put:function(e,t){if(t==null){t={}}return r(this.url(e._id),_.assign({},t,{method:"PUT",json:e}))},resetProgress:function(e){var t
if(e==null){e={}}t=require("core/store")
return r(this.url(t.state.me._id,"reset_progress"),_.assign({},e,{method:"POST"}))}}})
require.register("core/application",function(e,require,t){var r,i,n,o,s,a,l,c,u,p,d,h,m,g,f,y=[].indexOf||function(e){for(var t=0,r=this.length;t<r;t++){if(t in this&&this[t]===e)return t}return-1}
o=require("core/social-handlers/FacebookHandler")
s=require("core/social-handlers/GPlusHandler")
a=require("core/social-handlers/GitHubHandler")
l=require("core/ModuleLoader")
h=require("locale/locale")
m=require("core/auth").me
c=require("core/Tracker")
n=require("models/CocoModel")
u=require("core/api")
marked.setOptions({gfm:true,sanitize:true,smartLists:true,breaks:false})
window.SPRITE_RESOLUTION_FACTOR=3
window.SPRITE_PLACEHOLDER_WIDTH=60
p=[219,221,80,83]
f=function(e){var t
if(e.keyCode===8&&!d(e.srcElement||e.target)){return e.preventDefault()}else if((e.ctrlKey||e.metaKey)&&!e.altKey&&(t=e.keyCode,y.call(p,t)>=0)){console.debug("Prevented keystroke",key,e)
return e.preventDefault()}}
d=function(e){var t,r,i,n,o
if(e==null){e=document.activeElement}i=e.tagName.toLowerCase()
o=(t=e.type)!=null?t.toLowerCase():void 0
n=["text","password","file","number","search","url","tel","email","date","month","week","time","datetimelocal"]
return(i==="textarea"||i==="input"&&y.call(n,o)>=0||((r=e.contentEditable)===""||r==="true"))&&!(e.readOnly||e.disabled)}
i=["/images/pages/base/modal_background.png","/images/level/popover_background.png","/images/level/code_palette_wood_background.png","/images/level/code_editor_background_border.png"]
g=function(e){return $(e).each(function(){return $("<img/>")[0].src=this})}
if(window.console==null){window.console={info:function(){},log:function(){},error:function(){},debug:function(){}}}if(console.debug==null){console.debug=console.log}r={initialize:function(){var e,t,r
e=require("core/Router")
this.isProduction=function(){return document.location.href.search("https?://localhost")===-1}
Vue.config.devtools=!this.isProduction()
r=require("core/store")
m.on("change",function(){return r.commit("me/updateUser",m.changedAttributes())})
r.commit("me/updateUser",m.attributes)
r.commit("updateFeatures",features)
this.isIPadApp=(typeof webkit!=="undefined"&&webkit!==null?webkit.messageHandlers:void 0)!=null&&((t=navigator.userAgent)!=null?t.indexOf("CodeCombat-iPad"):void 0)!==-1
if(this.isIPadApp){$("body").addClass("ipad")}if(window.serverConfig.picoCTF){$("body").addClass("picoctf")}if($.browser.msie&&parseInt($.browser.version)===10){$("html").addClass("ie10")}this.tracker=new c
this.facebookHandler=new o
this.gplusHandler=new s
this.githubHandler=new a
this.moduleLoader=new l
this.moduleLoader.loadLanguage(m.get("preferredLanguage",true))
$(document).bind("keydown",f)
g(i)
n.pollAchievements()
if(!m.get("anonymous")){m.on("change:earned",function(e,t){var r,i,n,o,s
if(t==null){t={}}o=(s=e.previous("earned"))!=null?s:{}
if(o.gems!==t.gems){console.log("Gems changed",o.gems,"->",t.gems)}n=_.difference(t.levels,o.levels)
if(n.length){console.log("Levels added",n)}i=_.difference(t.items,o.items)
if(i.length){console.log("Items added",i)}r=_.difference(t.heroes,o.heroes)
if(r.length){return console.log("Heroes added",r)}})
m.on("change:points",function(e,t){return console.log("Points changed",e.previous("points"),"->",t)})
this.checkForNewAchievement()}return $.i18n.init({lng:m.get("preferredLanguage",true),fallbackLng:"en",resStore:h,useDataAttrOptions:true},function(t){return function(r){var i
t.router=new e
i=function(e){return function(){return Backbone.Mediator.publish("application:idle-changed",{idle:t.userIsIdle=e})}}
t.idleTracker=new Idle({onAway:i(true),onAwayBack:i(false),onHidden:i(true),onVisible:i(false),awayTimeout:5*60*1e3})
return t.idleTracker.start()}}(this))},checkForNewAchievement:function(){var e,t
if(m.get("lastAchievementChecked")){t=new Date(m.get("lastAchievementChecked"))}else{t=m.created()}e=moment.duration(new Date-t).asDays()
if(e>1){return m.checkForNewAchievement().then(function(e){return function(){return e.checkForNewAchievement()}}(this))}},featureMode:{useChina:function(){return u.admin.setFeatureMode("china").then(function(){return document.location.reload()})},useCodePlay:function(){return u.admin.setFeatureMode("code-play").then(function(){return document.location.reload()})},usePicoCtf:function(){return u.admin.setFeatureMode("pico-ctf").then(function(){return document.location.reload()})},useBrainPop:function(){return u.admin.setFeatureMode("brain-pop").then(function(){return document.location.reload()})},clear:function(){return u.admin.clearFeatureMode().then(function(){return document.location.reload()})}},loadedStaticPage:window.alreadyLoadedView!=null}
t.exports=r
window.application=r})
require.register("core/auth",function(e,require,t){var r,i,n,o,s,a,l,c,u,p,d
u=require("core/errors"),n=u.backboneFailure,o=u.genericFailure,c=u.parseServerError
i=require("models/User")
p=require("core/storage")
r="beenHereBefore"
s=require("core/utils").getQueryVariable
a=function(){var e
t.exports.me=window.me=new i(window.userObject)
t.exports.me.onLoaded()
d()
if(me&&me.get("testGroupNumber")==null){me.set("testGroupNumber",Math.floor(Math.random()*256))
me.patch()}e=s("preferredLanguage")
if(me&&features.codePlay&&e){me.set("preferredLanguage",e)
me.save()}return Backbone.listenTo(me,"sync",function(){return Backbone.Mediator.publish("auth:me-synced",{me:me})})}
t.exports.logoutUser=function(){var e,t
if(features.codePlay){return}if(typeof FB!=="undefined"&&FB!==null){if(typeof FB.logout==="function"){FB.logout()}}e=function(){var e
e=_.result(currentView,"logoutRedirectURL")
if(e){return window.location=e}else{return window.location.reload()}}
t=$.post("/auth/logout",{},e)
return t.fail(o)}
t.exports.sendRecoveryEmail=function(e,t){if(t==null){t={}}t=_.merge(t,{method:"POST",url:"/auth/reset",data:{email:e}})
return $.ajax(t)}
l=function(e){if(e.volume===me.get("volume")){return}me.set("volume",e.volume)
return me.save()}
Backbone.Mediator.subscribe("level:set-volume",l,t.exports)
d=function(){var e,t
e=p.load(r)
if(e){return}if((t=window.tracker)!=null){t.trackEvent("First Arrived")}return p.save(r,true)}
a()})
require.register("core/components/FlatLayout",function(e,require,t){var r
r=require("core/components/PageErrors")
t.exports={name:"flat-layout",template:require("templates/core/components/flat-layout")(),components:{"page-errors":r},computed:Vuex.mapState({errors:function(e){return e.pageErrors}})}})
require.register("core/components/PageErrors",function(e,require,t){t.exports={name:"page-errors",template:require("templates/core/components/page-errors")(),computed:_.assign(Vuex.mapState({error:function(e){return _.first(e.pageErrors)}}),Vuex.mapGetters("me",["isAnonymous","forumLink"]))}})
require.register("core/constants",function(e,require,t){var r,i,n,o
o=["560f1a9f22961295f9427742","5632661322961295f9428638","5789587aad86a6efb573701e","5789587aad86a6efb573701f"]
r=["560f1a9f22961295f9427742"]
i=75
n=6
t.exports={STARTER_LICENSE_COURSE_IDS:o,FREE_COURSE_IDS:r,MAX_STARTER_LICENSES:i,STARTER_LICENCE_LENGTH_MONTHS:n}})
require.register("core/contact",function(e,require,t){t.exports={sendContactMessage:function(e,t){if(t!=null){t.find(".sending-indicator").show()}return $.post("/contact",e,function(e){if(!t){return}t.find(".sending-indicator").hide()
t.find("#contact-message").val("Thanks!")
return _.delay(function(){t.find("#contact-message").val("")
return t.modal("hide")},1e3)})},send:function(e){if(e==null){e={}}e.type="POST"
e.url="/contact"
return $.ajax(e)},sendParentSignupInstructions:function(e){var t
t=$.ajax("/contact/send-parent-signup-instructions",{method:"POST",data:{parentEmail:e}})
return new Promise(t.then)}}})
require.register("core/d3_utils",function(e,require,t){t.exports.createContiguousDays=function(e,t,r){var i,n,o,s,a,l
if(t==null){t=true}if(r==null){r=0}o=[]
i=new Date
i.setUTCDate(i.getUTCDate()-r)
i.setUTCDate(i.getUTCDate()-e+1)
if(t){i.setUTCDate(i.getUTCDate()-1)}for(s=a=0,l=e;0<=l?a<l:a>l;s=0<=l?++a:--a){n=i.toISOString().substr(0,10)
o.push(n)
i.setUTCDate(i.getUTCDate()+1)}return o}
t.exports.createLineChart=function(e,t,r){var i,n,o,s,a,l,c,u,p,d,h,m,g,f,y,v,b,_,w,k,S,C,x,j,P,T,L,A,q,D,I,E,M,N,R,O
if(!((t!=null?t.length:void 0)>0&&e)){return}w=20
g=35
q=20
N=40
if(!r){r=$(e).width()}i=$(e).height()
f=0
O=0
for(h=0,y=t.length;h<y;h++){b=t[h]
if(b.showYScale){O++}}P=d3.select(e).append("svg").attr("width",r).attr("height",i)
L=r-w*2-N*O
p=i-w*2-q-g*t.length
a=0
l=0
k=function(){var e,t
t=[]
for(d=e=1;e<=5;d=++e){t.push(Math.round(d*p/5))}return t}()
R=d3.scale.linear().range([p,0]).domain([0,p])
P.selectAll(".line").data(k).enter().append("line").attr("x1",w+N*O).attr("y1",function(e){return w+R(e)}).attr("x2",w+N*O+L).attr("y2",function(e){return w+R(e)}).attr("stroke","gray").style("opacity","0.3")
x=[]
for(m=0,v=t.length;m<v;m++){b=t[m]
I=d3.scale.linear().range([0,L]).domain([d3.min(b.points,function(e){return e.x}),d3.max(b.points,function(e){return e.x})])
R=d3.scale.linear().range([p,0]).domain([b.min,b.max])
if(a===0){j=new Date(b.points[0].day)
u=new Date(b.points[b.points.length-1].day)
D=d3.time.scale().domain([j,u]).range([0,L])
A=d3.svg.axis().scale(D)
P.append("g").attr("class","x axis").call(A).selectAll("text").attr("dy",".35em").attr("transform","translate("+(w+N*O)+","+(p+w)+")").style("text-anchor","start")}if(b.showYScale){_=O>1?b.lineColor:"black"
M=d3.scale.linear().range([p,0]).domain([b.min,b.max])
E=d3.svg.axis().scale(R).orient("left")
P.append("g").attr("class","y axis").attr("transform","translate("+(w+N*l)+","+w+")").style("color",_).call(E).selectAll("text").attr("y",0).attr("x",0).attr("fill",_).style("text-anchor","start")
l++}n=Math.floor(a/2)
o=w+(a%2?Math.max(f+w+40,r/2):0)
s=w+p+q+g*n
P.append("line").attr("x1",o).attr("y1",s+g/2).attr("x2",o+40).attr("y2",s+g/2).attr("stroke",b.lineColor).attr("class","key-line")
T=P.append("text").attr("x",o+40+10).attr("y",s+(g+10)/2).attr("fill",b.lineColor).attr("class","key-text").text(b.description).each(function(e,t){if(a%2===0){return f=Math.max(f,this.getComputedTextLength())}})
S=(C=b.pointRadius)!=null?C:2
P.selectAll(".circle").data(b.points).enter().append("circle").attr("transform","translate("+(w+N*O)+","+w+")").attr("cx",function(e){return I(e.x)}).attr("cy",function(e){return R(e.y)}).attr("r",S).attr("fill",b.lineColor).attr("stroke-width",1).attr("class","graph-point").attr("data-pointid",function(e){return""+b.lineID+e.x})
c=d3.svg.line().x(function(e){return I(e.x)}).y(function(e){return R(e.y)}).interpolate("linear")
P.append("path").attr("d",c(b.points)).attr("transform","translate("+(w+N*O)+","+w+")").style("stroke-width",b.strokeWidth).style("stroke",b.lineColor).style("fill","none")
x.push(a++)}return x}})
require.register("core/deltas",function(e,require,t){var r,i,n,o,s,a
r=require("./../core/SystemNameLoader")
t.exports.expandDelta=function(e,t,r){var o,s,a,l,c,u
if(t!=null){u=jsondiffpatch.clone(t)
jsondiffpatch.patch(u,e)}s=n(e)
c=[]
for(a=0,l=s.length;a<l;a++){o=s[a]
c.push(i(o,t,u,r))}return c}
t.exports.flattenDelta=n=function(e,t,r){var i,o,s,a,l
if(t==null){t=null}if(r==null){r=null}if(!e){return[]}if(t==null){t=[]}if(r==null){r=[]}if(_.isArray(e)){return[{dataPath:t,deltaPath:r,o:e}]}l=[]
i=e._t==="a"
for(a in e){o=e[a]
if(a==="_t"){continue}s=i?parseInt(a.replace("_","")):a
l=l.concat(n(o,t.concat([s]),r.concat([a])))}return l}
i=function(e,t,i,n){var o,a,l,c,u,p,d,h,m,g,f,y,v,b,w
e.action="???"
g=e.o
u=[]
f=t
y=i
v=n
b=e.dataPath
for(p=d=0,m=b.length;d<m;p=++d){h=b[p]
l=(v!=null?v.items:void 0)||(v!=null?(w=v.properties)!=null?w[h]:void 0:void 0)||{}
o=f!=null?f[h]:void 0
a=y!=null?y[h]:void 0
c=null
if(a){if(c==null){c=a.name||a.id}}if(c==null){c=r.getName(a!=null?a.original:void 0)}if(l.title){if(c==null){c=""+l.title}}if(c==null){c=_.string.titleize(h)}u.push(c)
f=o
y=a
v=l}if(!o&&a){o=jsondiffpatch.patch(a,jsondiffpatch.reverse(g))}if(_.isArray(g)&&g.length===1){e.action="added"
e.newValue=g[0]}if(_.isArray(g)&&g.length===2){e.action="modified"
e.oldValue=g[0]
e.newValue=g[1]}if(_.isArray(g)&&g.length===3&&g[1]===0&&g[2]===0){e.action="deleted"
e.oldValue=g[0]}if(_.isPlainObject(g)&&g._t==="a"){e.action="modified-array"}if(_.isPlainObject(g)&&g._t!=="a"){e.action="modified-object"}if(_.isArray(g)&&g.length===3&&g[2]===3){e.action="moved-index"
e.destinationIndex=g[1]
e.originalIndex=e.dataPath[e.dataPath.length-1]
e.hash=s(a)}if(_.isArray(g)&&g.length===3&&g[1]===0&&g[2]===2){e.action="text-diff"
e.unidiff=g[0]}e.humanPath=u.join(" :: ")
e.schema=l
e.left=o
e.right=a
return e}
s=function(e){if(e!=null){return e.name||e.id||e._id||JSON.stringify(_.keys(e).sort())}else{return"null"}}
t.exports.makeJSONDiffer=function(){return jsondiffpatch.create({objectHash:s})}
t.exports.getConflicts=function(e,t){var r,i,n,s,a,l,c,u,p,d,h,m,g,f,y,v,b,w,k,S
s=o(e)
w=o(t)
y=_.keys(s).concat(_.keys(w))
r=[]
y.sort()
for(a=l=0,u=y.length;l<u;a=++l){f=y[a]
g=1
while(a+g<y.length){m=y[a+g]
g+=1
if(!_.string.startsWith(m,f)){break}if(!(s[f]||s[m])){continue}if(!(w[f]||w[m])){continue}k=s[f]||s[m]
for(c=0,p=k.length;c<p;c++){n=k[c]
i=n.delta
S=w[f]||w[m]
for(h=0,d=S.length;h<d;h++){b=S[h]
v=b.delta
r.push({headDelta:i,pendingDelta:v})
v.conflict=i
i.conflict=v}}}}if(r.length){return r}}
o=function(e){var t,r,i,n,o,s,a,l,c,u,p
c=[]
for(n=0,s=e.length;n<s;n++){r=e[n]
t=[]
if(r.action==="moved-index"){t.push(r.dataPath.slice(0,r.dataPath.length-1))}else if(((p=r.action)==="deleted"||p==="added")&&_.isNumber(r.dataPath[r.dataPath.length-1])){t.push(r.dataPath.slice(0,r.dataPath.length-1))}else{t.push(r.dataPath)}for(o=0,a=t.length;o<a;o++){u=t[o]
c.push({delta:r,path:function(){var e,t,r
r=[]
for(t=0,e=u.length;t<e;t++){i=u[t]
r.push(i.toString())}return r}().join("/")})}}l=_.groupBy(c,"path")
return l}
t.exports.pruneConflictsFromDelta=function(e,r){var i,n
n=function(){var e,t,n
n=[]
for(e=0,t=r.length;e<t;e++){i=r[e]
n.push(i.pendingDelta)}return n}()
return t.exports.pruneExpandedDeltasFromDelta(e,n)}
t.exports.pruneExpandedDeltasFromDelta=function(e,t){var r,i,n
for(i=0,n=t.length;i<n;i++){r=t[i]
a(e,r.deltaPath)}if(_.isEmpty(e)){return void 0}else{return e}}
a=function(e,t){var r,i
if(t.length===1){if(e[t]!==void 0){return delete e[t]}}else{if(e[t[0]]!==void 0){a(e[t[0]],t.slice(1))}i=function(){var i,n,o,s
o=_.keys(e[t[0]])
s=[]
for(i=0,n=o.length;i<n;i++){r=o[i]
if(r!=="_t"){s.push(r)}}return s}()
if(i.length===0){return delete e[t[0]]}}}
t.exports.DOC_SKIP_PATHS=["_id","version","commitMessage","parent","created","slug","index","__v","patches","creator","js","watchers","levelsUpdated"]})
require.register("core/errors",function(e,require,t){var r,i,n,o,s
n=require("templates/core/error")
r=require("core/forms").applyErrorsToForm
t.exports.parseServerError=function(e){var t,r,i
try{r=JSON.parse(e)||{message:"Unknown error."}}catch(i){t=i
r={message:e||"Unknown error."}}if(_.isArray(r)){r=r[0]}return r}
t.exports.genericFailure=function(e){var s,a,l,c,u,p,d,h
Backbone.Mediator.publish("errors:server-error",{response:e})
if(!e.status){return i()}s=t.exports.parseServerError(e.responseText)
u=s.message
if(s.property){u=s.property+" "+u}console.warn(e.status,e.statusText,s)
a=$(".form:visible:first")
if(a[0]){p=r(a,[s])
h=[]
for(l=0,c=p.length;l<c;l++){s=p[l]
h.push(a.append($('<div class="alert alert-danger"></div>').text(s.message)))}return h}else{d=n({status:e.status,statusText:e.statusText,message:u})
return o(d)}}
t.exports.backboneFailure=function(e,r,i){return t.exports.genericFailure(r)}
t.exports.connectionFailure=i=function(){var e
e=n({status:0,statusText:"Connection Gone",message:"No response from the CoCo servers, captain."})
return o(e)}
t.exports.showNotyNetworkError=function(){var e,t,r
e=_.find(arguments,"promise")
return noty({text:((t=e.responseJSON)!=null?t.message:void 0)||((r=e.responseJSON)!=null?r.errorName:void 0)||"Unknown error",layout:"topCenter",type:"error",timeout:5e3,killer:false,dismissQueue:true})}
o=function(e){$("#modal-wrapper").html(e)
$(".modal:visible").modal("hide")
return $("#modal-error").modal("show")}
s=false
t.exports.onWorkerError=function(){var e
if(!s&&$.browser.msie&&$.browser.versionNumber===11){e="Explorer failure. Reloading..."
s=true
setTimeout(function(){return document.location.reload()},5e3)
return noty({text:e,layout:"topCenter",type:"error"})}}})
require.register("core/forms",function(e,require,t){var r,i
t.exports.formToObject=function(e,t){var r,i,n,o,s,a,l
t=_.extend({trim:true,ignoreEmptyString:true},t)
a={}
i=$("input, textarea, select",e)
for(n=0,o=i.length;n<o;n++){r=i[n]
r=$(r)
if(!(s=r.attr("name"))){continue}if(r.attr("type")==="checkbox"){if(a[s]==null){a[s]=[]}if(r.is(":checked")){a[s].push(r.val())}}else if(r.attr("type")==="radio"){if(!r.is("checked")){continue}a[s]=r.val()}else{l=r.val()||""
if(t.trim){l=_.string.trim(l)}if(l||!t.ignoreEmptyString){a[s]=l}}}return a}
t.exports.objectToForm=function(e,t,r){var i,n,o,s,a,l,c
if(r==null){r={}}r=_.extend({overwriteExisting:false},r)
n=$("input, textarea, select",e)
l=[]
for(o=0,s=n.length;o<s;o++){i=n[o]
i=$(i)
if(!(a=i.attr("name"))){continue}if(t[a]==null){continue}if(i.attr("type")==="checkbox"){c=i.val()
if(_.contains(t[a],c)){l.push(i.attr("checked",true))}else{l.push(void 0)}}else if(i.attr("type")==="radio"){c=i.val()
if(t[a]===c){l.push(i.attr("checked",true))}else{l.push(void 0)}}else{if(r.overwriteExisting||!i.val()){l.push(i.val(t[a]))}else{l.push(void 0)}}}return l}
t.exports.applyErrorsToForm=function(e,t,r){var n,o,s,a,l,c,u
if(r==null){r=false}if(!$.isArray(t)){t=[t]}l=[]
for(o=0,s=t.length;o<s;o++){n=t[o]
if(n.code===tv4.errorCodes.OBJECT_REQUIRED){u=_.last(_.string.words(n.message))
a=$.i18n.t("common.required_field")}else if(n.dataPath){u=n.dataPath.slice(1)
a=n.message}else{a=n.property+" "+n.message+"."
a=a[0].toUpperCase()+a.slice(1)
if(n.formatted){a=n.message}u=n.property}if(n.code===tv4.errorCodes.FORMAT_CUSTOM){c=/Format validation failed \(([^\(\)]+)\)/.exec(a)[1]
if(!_.isEmpty(c)){a=c}}if(n.code===409&&n.property==="email"){a+=' <a class="login-link">Log in?</a>'}if(!i(e,u,a,r)){l.push(n)}}return l}
t.exports.setErrorToField=r=function(e,t,r){var i,n,o,s
if(r==null){r=false}n=e.closest(".form-group")
if(!n.length){return console.error(e," did not contain a form group, so couldn't show message:",t)}s=r?"warning":"error"
i=$(n.find(".help-block, .form-control, input, select, textarea")[0])
n.addClass("has-"+s)
o=$("<span class='help-block "+s+"-help-block'>"+t+"</span>")
if(i.length){return i.before(o)}else{return n.append(o)}}
t.exports.setErrorToProperty=i=function(e,t,i,n){var o
if(n==null){n=false}o=$("[name='"+t+"']",e)
if(!o.length){return console.error(t+" not found in",e,"so couldn't show message:",i)}return r(o,i,n)}
t.exports.scrollToFirstError=function(e){var t
if(e==null){e=$("body")}t=e.find(".has-error, .alert-danger, .error-help-block, .has-warning, .alert-warning, .warning-help-block").filter(":visible").first()
if(t.length){return $("html, body").animate({scrollTop:t.offset().top-20},300)}}
t.exports.clearFormAlerts=function(e){$(".has-error",e).removeClass("has-error")
$(".has-warning",e).removeClass("has-warning")
$(".alert.alert-danger",e).remove()
$(".alert.alert-warning",e).remove()
e.find(".help-block.error-help-block").remove()
return e.find(".help-block.warning-help-block").remove()}
t.exports.updateSelects=function(e){return e.find("select").each(function(e,t){var r
r=$(t).attr("value")
return $(t).val(r)})}
t.exports.validateEmail=function(e){var t
t=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$/i
return t.test(e)}
t.exports.validatePhoneNumber=function(e){var t
t=/^\D*(\d\D*){10,}$/i
return t.test(e)}
t.exports.disableSubmit=function(e,t){var r
if(t==null){t="..."}r=$(e)
r.data("original-text",r.text())
return r.text(t).attr("disabled",true)}
t.exports.enableSubmit=function(e){var t
t=$(e)
return t.text(t.data("original-text")).attr("disabled",false)}})
require.register("core/initialize",function(e,require,t){var r,i,n,o,s,a,l,c,u,p,d,h,m,g,f,y=[].slice,v={}.hasOwnProperty,b=[].indexOf||function(e){for(var t=0,r=this.length;t<r;t++){if(t in this&&this[t]===e)return t}return-1}
Backbone.Mediator.setValidationEnabled(false)
r=null
g=require("./utils")
a=require("locale/locale").installVueI18n
i={auth:require("schemas/subscriptions/auth"),bus:require("schemas/subscriptions/bus"),editor:require("schemas/subscriptions/editor"),errors:require("schemas/subscriptions/errors"),ipad:require("schemas/subscriptions/ipad"),misc:require("schemas/subscriptions/misc"),play:require("schemas/subscriptions/play"),surface:require("schemas/subscriptions/surface"),tome:require("schemas/subscriptions/tome"),god:require("schemas/subscriptions/god"),scripts:require("schemas/subscriptions/scripts"),"web-dev":require("schemas/subscriptions/web-dev"),world:require("schemas/subscriptions/world")}
n={bus:require("schemas/definitions/bus"),misc:require("schemas/definitions/misc")}
s=function(){var e,t
if(r){return}if(!window.userObject._id){e={cache:false}
e.data=_.pick(g.getQueryVariables(),"preferredLanguage")
$.ajax("/auth/whoami",e).then(function(e){window.userObject=e
return s()})
return}r=require("core/application")
m()
f()
d()
t=document.location.pathname
r.testing=_.string.startsWith(t,"/test")
r.demoing=_.string.startsWith(t,"/demo")
p()
r.initialize()
if(!r.isProduction()){l()}Backbone.history.start({pushState:true})
o()
h()
return a()}
t.exports.init=s
o=function(){return $(document).on("click","a[href^='/']",function(e){var t,i,n
t=$(e.currentTarget).attr("href")
i=t.indexOf("sign_out")>=0
if(!i&&!e.altKey&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey){e.preventDefault()
n=t.replace(/^\//,"").replace("#!/","")
r.router.navigate(n,{trigger:true})
return false}})}
p=function(){var e,t,r,o
for(t in n){o=n[t]
Backbone.Mediator.addDefSchemas(o)}for(e in i){o=i[e]
Backbone.Mediator.addChannelSchemas(o)}Backbone.Mediator.setValidationEnabled(document.location.href.search(/codecombat.com/)===-1)
if(false){r=Backbone.Mediator.publish
return Backbone.Mediator.publish=function(){if(!/(tick|frame-changed)/.test(arguments[0])){console.log.apply(console,["Publishing event:"].concat(y.call(arguments)))}return r.apply(Backbone.Mediator,arguments)}}}
h=function(){var e,t
e=require("core/auth").me
t=function(e){e={"zh-HANS":"zh-cn","zh-HANT":"zh-tw"}[e]||e
return moment.lang(e.toLowerCase(),{})}
t(e.get("preferredLanguage",true))
return e.on("change:preferredLanguage",function(e){return t(e.get("preferredLanguage",true))})}
m=function(){if(typeof console==="undefined"||console===null){window.console={info:function(){},log:function(){},error:function(){},debug:function(){}}}if(!console.debug){return console.debug=console.log}}
f=function(){var e,t,r
e=0
t=window.onerror
r=function(t){if(e>=3){return}if(!(me.isAdmin()||document.location.href.search(/codecombat.com/)===-1||document.location.href.search(/\/editor\//)!==-1)){return}++e
if(!(typeof webkit!=="undefined"&&webkit!==null?webkit.messageHandlers:void 0)){return noty({text:t,layout:"topCenter",type:"error",killer:false,timeout:5e3,dismissQueue:true,maxVisible:3,callback:{onClose:function(){return--e}}})}}
window.onerror=function(e,i,n,o,s){var a
if(t){t.apply(window,arguments)}a="Error: "+e+"<br>Check the JS console for more."
r(a)
return Backbone.Mediator.publish("application:error",{message:"Line "+n+" of "+i+":\n"+e})}
return window.addEventListener("unhandledrejection",function(e){var t
if(e.promise){return e.promise["catch"](function(e){var t
t=e.message+"<br>Check the JS console for more."
return r(t)})}else{t=(e.message||e)+"<br>Check the JS console for more."
return r(t)}})}
window.addIPadSubscription=function(e){return window.iPadSubscriptions[e]=true}
window.removeIPadSubscription=function(e){return window.iPadSubscriptions[e]=false}
d=function(){var e,t,r,i,n
if(!(typeof webkit!=="undefined"&&webkit!==null?webkit.messageHandlers:void 0)){return}i=["debug","log","info","warn","error"]
n=[]
for(e=0,t=i.length;e<t;e++){r=i[e]
n.push(function(e){var t
t=console[e]
return console[e]=function(){var r,i,n,o,s,a,l
t.apply(console,arguments)
try{return typeof webkit!=="undefined"&&webkit!==null?(o=webkit.messageHandlers)!=null?(s=o.consoleLogHandler)!=null?s.postMessage({level:e,arguments:function(){var e,t,i,n
n=[]
for(e=0,t=arguments.length;e<t;e++){r=arguments[e]
n.push((i=r!=null?typeof r.toString==="function"?r.toString():void 0:void 0)!=null?i:""+r)}return n}.apply(this,arguments)}):void 0:void 0:void 0}catch(t){i=t
return typeof webkit!=="undefined"&&webkit!==null?(a=webkit.messageHandlers)!=null?(l=a.consoleLogHandler)!=null?l.postMessage({level:e,arguments:["could not post log: "+i]}):void 0:void 0:void 0}}}(r))}return n}
l=function(){$("head").prepend('<link rel="stylesheet" type="text/css" href="/fonts/openSansCondensed.css">')
return $("head").prepend('<link rel="stylesheet" type="text/css" href="/fonts/openSans.css">')}
c=null
window.serializeForIOS=u=function(e,t){var r,i,n,o,s,a
if(t==null){t=3}if(!t){return{}}s=c==null
if(c==null){c=[]}i={}
o=0
for(n in e){if(!v.call(e,n))continue
a=e[n]
if(++o>50){continue}if(!a){i[n]=a}else if(a===window||a.firstElementChild||a.preventDefault){null}else if(b.call(c,a)>=0){null}else if(_.isArray(a)){i[n]=function(){var e,i,n
n=[]
for(e=0,i=a.length;e<i;e++){r=a[e]
n.push(u(r,t-1))}return n}()
c.push(a)}else if(_.isObject(a)){if(a.id&&a.attributes){a=a.attributes}i[n]=u(a,t-1)
c.push(a)}else{i[n]=a}}if(s){c=null}return i}
window.onbeforeunload=function(e){var t
t=_.result(window.currentView,"onLeaveMessage")
if(t){return t}else{}}
$(function(){return s()})})
require.register("core/services/algolia",function(e,require,t){var r
r=algoliasearch("JJM5H2CHJR","50382fc2f7fa69c67e8233ace7cd7c4c")
t.exports={client:r,schoolsIndex:r.initIndex("schools")}})
require.register("core/services/filepicker",function(e,require,t){var r
t.exports=r=function(){return function(e){var t,r,i,n,o,s
if(window.filepicker){return}t=e.createElement("script")
t.type="text/javascript"
t.async=!0
t.src=("https:"===e.location.protocol?"https:":"http:")+"//api.filepicker.io/v1/filepicker.js"
r=e.getElementsByTagName("script")[0]
r.parentNode.insertBefore(t,r)
i={}
i._queue=[]
n="pick,pickMultiple,pickAndStore,read,write,writeUrl,export,convert,store,storeUrl,remove,stat,setKey,constructWidget,makeDropPane".split(",")
o=function(e,t){return function(){t.push([e,arguments])}}
s=0
while(s<n.length){i[n[s]]=o(n[s],i._queue)
s++}i.setKey("AvlkNoldcTOU4PvKi2Xm7z")
window.filepicker=i}(document)}})
require.register("core/services/segment",function(e,require,t){var r
t.exports=r=function(){var e,t,r,i,n
e=window.analytics=window.analytics||[]
if(e.initialize){return}if(e.invoked){return typeof console!=="undefined"&&console!==null?console.error("Segment snippet included twice."):void 0}e.invoked=true
e.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","page","once","off","on"]
e.factory=function(t){return function(){var r
r=Array.prototype.slice.call(arguments)
r.unshift(t)
e.push(r)
return e}}
n=e.methods
for(t=0,r=n.length;t<r;t++){i=n[t]
e[i]=e.factory(i)}e.load=function(e){var t,r
t=document.createElement("script")
t.type="text/javascript"
t.async=true
t.src=(document.location.protocol==="https:"?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+e+"/analytics.min.js"
r=document.getElementsByTagName("script")[0]
r.parentNode.insertBefore(t,r)
Backbone.Mediator.publish("application:service-loaded",{service:"segment"})}
e.SNIPPET_VERSION="3.1.0"
return e.load("yJpJZWBw68fEj0aPSv8ffMMgof5kFnU9")}})
require.register("core/services/stripe",function(e,require,t){var r,i
i=application.isProduction()?"pk_live_27jQZozjDGN1HSUTnSuM578g":"pk_test_zG5UwVu6Ww8YhtE9ZYh0JO6a"
if(me.isAnonymous()){t.exports={openAsync:_.noop}
t.exports.makeNewInstance=_.clone(t.exports)}else if(typeof StripeCheckout==="undefined"||StripeCheckout===null){t.exports={}
console.error("Failure loading StripeCheckout API, returning empty object.")}else{r=function(){var e
e=StripeCheckout.configure({key:i,name:"CodeCombat",email:me.get("email"),image:"https://codecombat.com/images/pages/base/logo_square_250.png",token:function(t){e.trigger("received-token",{token:t})
return Backbone.Mediator.publish("stripe:received-token",{token:t})},locale:"auto"})
e.id=_.uniqueId()
e.openAsync=function(t){var r
r=new Promise(function(t,r){return e.once("received-token",t)})
e.open(t)
return r}
_.extend(e,Backbone.Events)
return e}
t.exports=r()
t.exports.makeNewInstance=r}})
require.register("core/services/twitter",function(e,require,t){var r
t.exports=r=function(){return function(e,t,r){var i,n,o
n=void 0
i=e.getElementsByTagName(t)[0]
o=/^http:/.test(e.location)?"http":"https"
if(!e.getElementById(r)){n=e.createElement(t)
n.id=r
n.src=o+"://platform.twitter.com/widgets.js"
i.parentNode.insertBefore(n,i)}}(document,"script","twitter-wjs")}})
require.register("core/social-handlers/FacebookHandler",function(e,require,t){var r,i,n,o,s,a,l=function(e,t){for(var r in t){if(c.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},c={}.hasOwnProperty
r=require("core/CocoClass")
o=require("core/auth").me
n=require("core/errors").backboneFailure
s=require("core/storage")
a={first_name:"firstName",last_name:"lastName",gender:"gender",email:"email",id:"facebookID"}
t.exports=i=i=function(e){l(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.token=function(){var e
return(e=this.authResponse)!=null?e.accessToken:void 0}
t.prototype.startedLoading=false
t.prototype.apiLoaded=false
t.prototype.connected=false
t.prototype.person=null
t.prototype.fakeAPI=function(){window.FB={login:function(e,t){return e({status:"connected",authResponse:{accessToken:"1234"}})},api:function(e,t,r){return r({first_name:"Mr",last_name:"Bean",id:"abcd",email:"some@email.com"})}}
this.startedLoading=true
return this.apiLoaded=true}
t.prototype.loadAPI=function(e){if(e==null){e={}}if(e.success==null){e.success=_.noop}if(e.context==null){e.context=e}if(this.apiLoaded){e.success.bind(e.context)()}else{this.once("load-api",e.success,e.context)}if(!this.startedLoading){this.startedLoading=true;(function(e){var t,r,i
r=void 0
t="facebook-jssdk"
i=e.getElementsByTagName("script")[0]
if(e.getElementById(t)){return}r=e.createElement("script")
r.id=t
r.async=true
r.src="//connect.facebook.net/en_US/sdk.js"
i.parentNode.insertBefore(r,i)})(document)
return window.fbAsyncInit=function(e){return function(){FB.init({appId:document.location.origin==="http://localhost:3000"?"607435142676437":"148832601965463",channelUrl:document.location.origin+"/channel.html",cookie:true,xfbml:true,version:"v2.8"})
return FB.getLoginStatus(function(t){if(t.status==="connected"){e.connected=true
e.authResponse=t.authResponse
e.trigger("connect",{response:t})}e.apiLoaded=true
return e.trigger("load-api")})}}(this)}}
t.prototype.connect=function(e){if(e==null){e={}}if(e.success==null){e.success=_.noop}if(e.context==null){e.context=e}return FB.login(function(t){return function(r){if(r.status==="connected"){t.connected=true
t.authResponse=r.authResponse
t.trigger("connect",{response:r})
return e.success.bind(e.context)()}}}(this),{scope:"email"})}
t.prototype.loadPerson=function(e){if(e==null){e={}}if(e.success==null){e.success=_.noop}if(e.context==null){e.context=e}return FB.api("/me",{fields:"email,last_name,first_name,gender"},function(t){return function(r){var i,n,o,s
i={}
for(n in a){o=a[n]
s=r[n]
if(s){i[o]=s}}t.trigger("load-person",i)
return e.success.bind(e.context)(i)}}(this))}
t.prototype.renderButtons=function(){var e
if(typeof FB!=="undefined"&&FB!==null?(e=FB.XFBML)!=null?e.parse:void 0:void 0){return setTimeout(FB.XFBML.parse,10)}}
return t}(r)})
require.register("core/social-handlers/GPlusHandler",function(e,require,t){var r,i,n,o,s,a,l,c,u,p,d,h,m=function(e,t){for(var r in t){if(g.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},g={}.hasOwnProperty
r=require("core/CocoClass")
l=require("core/auth").me
o=require("core/errors").backboneFailure
d=require("core/storage")
i="gplusToken"
h={"name.givenName":"firstName","name.familyName":"lastName",gender:"gender",id:"gplusID"}
a="displayName,gender,image,name(familyName,givenName),id"
c="/plus/v1/people/me?fields="+a
u="https://accounts.google.com/o/oauth2/revoke?token="
s="800329290710-j9sivplv2gpcdgkrsis9rff3o417mlfa.apps.googleusercontent.com"
p="https://www.googleapis.com/auth/plus.login email"
t.exports=n=n=function(e){m(t,e)
function t(){this.accessToken=d.load(i,false)
t.__super__.constructor.call(this)}t.prototype.token=function(){var e
return(e=this.accessToken)!=null?e.access_token:void 0}
t.prototype.startedLoading=false
t.prototype.apiLoaded=false
t.prototype.connected=false
t.prototype.person=null
t.prototype.fakeAPI=function(){window.gapi={client:{load:function(e,t,r){return r()},plus:{people:{get:function(){return{execute:function(e){return e({name:{givenName:"Mr",familyName:"Bean"},id:"abcd",emails:[{value:"some@email.com"}]})}}}}}},auth:{authorize:function(e,t){return t({access_token:"1234"})}}}
this.startedLoading=true
return this.apiLoaded=true}
t.prototype.fakeConnect=function(){this.accessToken={access_token:"1234"}
return this.trigger("connect")}
t.prototype.loadAPI=function(e){var t,r
if(e==null){e={}}if(e.success==null){e.success=_.noop}if(e.context==null){e.context=e}if(this.apiLoaded){e.success.bind(e.context)()}else{this.once("load-api",e.success,e.context)}if(!this.startedLoading){t=document.createElement("script")
t.type="text/javascript"
t.async=true
t.src="https://apis.google.com/js/client:platform.js?onload=onGPlusLoaded"
r=document.getElementsByTagName("script")[0]
r.parentNode.insertBefore(t,r)
this.startedLoading=true
return window.onGPlusLoaded=function(e){return function(){var t
e.apiLoaded=true
if(e.accessToken&&l.get("gplusID")){gapi.auth.setToken("token",e.accessToken)
t=e.accessToken.session_state
return gapi.auth.checkSessionState({client_id:s,session_state:t},function(t){e.connected=t
return e.trigger("load-api")})}else{e.connected=false
return e.trigger("load-api")}}}(this)}}
t.prototype.connect=function(e){var t
if(e==null){e={}}if(e.success==null){e.success=_.noop}if(e.context==null){e.context=e}t={client_id:s,scope:"https://www.googleapis.com/auth/plus.login email"}
return gapi.auth.authorize(t,function(t){return function(r){var n,o
if(!r.access_token){return}t.connected=true
try{n=_.omit(r,"g-oauth-window")
d.save(i,n,0)}catch(e){r=e
console.error("Unable to save G+ token key",r)}t.accessToken=r
t.trigger("connect")
return e.success.bind(e.context)()}}(this))}
t.prototype.loadPerson=function(e){if(e==null){e={}}if(e.success==null){e.success=_.noop}if(e.context==null){e.context=e}return gapi.client.load("plus","v1",function(t){return function(){return gapi.client.plus.people.get({userId:"me"}).execute(function(r){var i,n,o,s,a,l,c,u,p
i={}
for(n in h){u=h[n]
a=n.split(".")
p=r
for(o=0,l=a.length;o<l;o++){s=a[o]
p=p[s]}if(p){i[u]=p}}if((c=r.emails)!=null?c.length:void 0){i.email=r.emails[0].value}t.trigger("load-person",i)
return e.success.bind(e.context)(i)})}}(this))}
t.prototype.renderButtons=function(){var e
if((typeof gapi!=="undefined"&&gapi!==null?gapi.plusone:void 0)==null){return false}return typeof(e=gapi.plusone).go==="function"?e.go():void 0}
t.prototype.loadFriends=function(e){var t,r
if(!this.loggedIn){return e()}t=this.accessToken?parseInt(this.accessToken.expires_at)-(new Date).getTime()/1e3:-1
r=function(t){return function(){return gapi.client.request({path:"/plus/v1/people/me/people/visible",callback:e})}}(this)
if(t<0){this.reauthorize()
return this.listenToOnce(this,"logged-in",r)}else{return r()}}
t.prototype.reauthorize=function(){var e
e={client_id:s,scope:p}
return gapi.auth.authorize(e,this.onGPlusLogin)}
return t}(r)})
require.register("core/social-handlers/GitHubHandler",function(e,require,t){var r,i,n,o,s=function(e,t){for(var r in t){if(a.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},a={}.hasOwnProperty
r=require("core/CocoClass")
n=require("core/auth").me
o=require("core/storage")
t.exports=i=function(e){s(t,e)
t.prototype.scopes="user:email"
t.prototype.subscriptions={"auth:log-in-with-github":"commenceGitHubLogin"}
function t(){t.__super__.constructor.apply(this,arguments)
this.clientID=application.isProduction()?"9b405bf5fb84590d1f02":"fd5c9d34eb171131bc87"
this.redirectURI=application.isProduction()?"http://codecombat.com/github/auth_callback":"http://localhost:3000/github/auth_callback"}t.prototype.commenceGitHubLogin=function(e){var t
t={scope:this.scopes,client_id:this.clientID,redirect_uri:this.redirectURI}
return location.href="https://github.com/login/oauth/authorize?"+$.param(t)}
return t}(r)})
require.register("core/storage",function(e,require,t){t.exports.load=function(e,t){var r,i,n,o
if(t==null){t=true}if(t){return lscache.get(e)}n=localStorage.getItem(e)
if(!n){return null}try{o=JSON.parse(n)
return o}catch(t){r=t
console.warn("error loading from storage",e)
return null}}
t.exports.save=function(e,t,r){if(r==null){r=7*24*60}if(r){return lscache.set(e,t,r)}else{return localStorage.setItem(e,JSON.stringify(t))}}
t.exports.remove=function(e,t){if(t==null){t=true}if(t){return lscache.remove(e)}else{return localStorage.removeItem(e)}}})
require.register("core/store/index",function(e,require,t){var r
r=new Vuex.Store({strict:!application.isProduction(),state:{pageErrors:[],localesLoaded:{},features:{}},mutations:{addPageError:function(e,t){return e.pageErrors.push(t)},clearPageErrors:function(e){return e.pageErrors=[]},addLocaleLoaded:function(e,t){var r
r={}
r[t]=true
return e.localesLoaded=_.assign(r,e.localesLoaded)},updateFeatures:function(e,t){return e.features=t}},modules:{me:require("./modules/me")}})
t.exports=r})
require.register("core/store/modules/me",function(e,require,t){var r,i,n,o
o=require("schemas/models/user")
r=require("core/api")
i=_.zipObject(function(){var e,t,r,i
r=_.keys(o.properties)
i=[]
for(e=0,t=r.length;e<t;e++){n=r[e]
i.push([n,null])}return i}())
t.exports={namespaced:true,state:i,getters:{isAnonymous:function(e){return e.anonymous===true},forumLink:function(e){var t,r
r="http://discourse.codecombat.com/"
t=(e.preferredLanguage||"en-US").split("-")[0]
if(t==="zh"||t==="ru"||t==="es"||t==="fr"||t==="pt"||t==="de"||t==="nl"||t==="lt"){r+="c/other-languages/"+t}return r}},mutations:{updateUser:function(e,t){return _.assign(e,$.extend(true,{},t))}},actions:{save:function(e,t){var i,n
i=e.state
n=_.assign({},i,t)
return r.users.put(n).then(function(e){return function(){me.set(t)
return i}}(this))}}}})
require.register("core/treema-ext",function(e,require,t){var r,i,n,o,s,a,l,c,u,p,d,h,m,g,f,y,v,b,w,k,S,C,x,j,P=function(e,t){for(var r in t){if(T.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},T={}.hasOwnProperty,L=function(e,t){return function(){return e.apply(t,arguments)}},A=[].indexOf||function(e){for(var t=0,r=this.length;t<r;t++){if(t in this&&this[t]===e)return t}return-1},q=[].slice
i=require("models/CocoModel")
r=require("collections/CocoCollection")
x=require("core/auth").me
C=require("locale/locale")
j=require("core/utils")
S=function(){if(!window.application.isIPadApp){return require("core/services/filepicker")()}}
l=function(e){P(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.valueClass="treema-date-time"
t.prototype.buildValueForDisplay=function(e,t){return e.text(moment(t).format("llll"))}
t.prototype.buildValueForEditing=function(e){return this.buildValueForEditingSimply(e,null,"date")}
return t}(TreemaNode.nodeMap.string)
k=function(e){P(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.valueClass="treema-version"
t.prototype.buildValueForDisplay=function(e,t){return this.buildValueForDisplaySimply(e,t.major+"."+t.minor)}
return t}(TreemaNode)
y=function(e){P(t,e)
t.prototype.valueClass="treema-markdown treema-multiline treema-ace"
function t(){this.togglePreview=L(this.togglePreview,this)
this.onFileUploaded=L(this.onFileUploaded,this)
this.onFileChosen=L(this.onFileChosen,this)
t.__super__.constructor.apply(this,arguments)
this.workingSchema.aceMode="ace/mode/markdown"
S()}t.prototype.initEditor=function(e){var r
r=$('<div class="buttons"></div>')
e.append(r)
this.addPreviewToggle(r)
this.addImageUpload(r)
t.__super__.initEditor.call(this,e)
return e.append($('<div class="preview"></div>').hide())}
t.prototype.addImageUpload=function(e){if(!(x.isAdmin()||x.isArtisan())){return}return e.append($('<div class="pick-image-button"></div>').append($("<button>Pick Image</button>").addClass("btn btn-sm btn-primary").click(function(e){return function(){return filepicker.pick(e.onFileChosen)}}(this))))}
t.prototype.addPreviewToggle=function(e){return e.append($('<div class="toggle-preview-button"></div>').append($("<button>Toggle Preview</button>").addClass("btn btn-sm btn-primary").click(this.togglePreview)))}
t.prototype.onFileChosen=function(e){var t
t={url:e.url,filename:e.filename,mimetype:e.mimetype,path:this.settings.filePath,force:true}
this.uploadingPath=[this.settings.filePath,e.filename].join("/")
return $.ajax("/file",{type:"POST",data:t,success:this.onFileUploaded})}
t.prototype.onFileUploaded=function(e){return this.editor.insert("!["+e.metadata.name+"](/file/"+this.uploadingPath+")")}
t.prototype.showingPreview=false
t.prototype.togglePreview=function(){var e
e=this.getValEl()
if(this.showingPreview){e.find(".preview").hide()
e.find(".pick-image-button").show()
e.find(".ace_editor").show()}else{e.find(".preview").html(marked(this.data)).show()
e.find(".pick-image-button").hide()
e.find(".ace_editor").hide()}return this.showingPreview=!this.showingPreview}
return t}(TreemaNode.nodeMap.ace)
b=function(e){P(t,e)
t.prototype.valueClass="treema-sound-file"
t.prototype.editable=false
t.prototype.soundCollection="files"
function t(){this.onFileUploaded=L(this.onFileUploaded,this)
this.onFileChosen=L(this.onFileChosen,this)
this.stopFile=L(this.stopFile,this)
this.playFile=L(this.playFile,this)
t.__super__.constructor.apply(this,arguments)
S()}t.prototype.onClick=function(e){if($(e.target).closest(".btn").length){return}return t.__super__.onClick.apply(this,arguments)}
t.prototype.getFiles=function(){var e
return((e=this.settings[this.soundCollection])!=null?e.models:void 0)||[]}
t.prototype.buildValueForDisplay=function(e,t){var r,i,n,o,s,a,l,c,u,p,d,h,m,g,f,y,v,b
d="audio/"+this.keyForParent
h=[d]
if(d==="audio/mp3"){h.push("audio/mpeg")}else if(d==="audio/ogg"){h.push("application/ogg")
h.push("video/ogg")}f=$('<a class="btn btn-primary btn-xs"><span class="glyphicon glyphicon-upload"></span></a>').click(function(e){return function(){return filepicker.pick({mimetypes:h},e.onFileChosen)}}(this))
y=$('<a class="btn btn-primary btn-xs"><span class="glyphicon glyphicon-play"></span></a>').click(this.playFile)
b=$('<a class="btn btn-primary btn-xs"><span class="glyphicon glyphicon-stop"></span></a>').click(this.stopFile)
r=$('<div class="btn-group dropdown"></div>')
i=$("<a></a>").addClass("btn btn-primary btn-xs dropdown-toggle").attr("href","#").append($('<span class="glyphicon glyphicon-chevron-down"></span>')).dropdown()
r.append(i)
p=$('<div class="dropdown-menu"></div>')
s=this.getFiles()
for(l=0,c=s.length;l<c;l++){n=s[l]
if(v=n.get("contentType"),A.call(h,v)<0){continue}g=n.get("metadata").path
o=n.get("filename")
a=[g,o].join("/")
u=$("<li></li>").data("fullPath",a).text(o)
p.append(u)}p.click(function(e){return function(r){e.data=$(r.target).data("fullPath")||t
return e.reset()}}(this))
r.append(p)
e.append(f)
if(t){e.append(y)
e.append(b)}e.append(r)
if(t){g=t.split("/")
m=g[g.length-1]
return e.append($("<span></span>").text(m))}}
t.prototype.reset=function(){this.instance=null
this.flushChanges()
return this.refreshDisplay()}
t.prototype.playFile=function(){var e,t
this.src="/file/"+this.getData()
if(this.instance){return this.instance.play()}else{createjs.Sound.alternateExtensions=["mp3","ogg"]
t=createjs.Sound.registerSound(this.src)
if(t===true){return this.instance=createjs.Sound.play(this.src)}else{e=function(t){return function(r){if(r.src===t.src){t.instance=createjs.Sound.play(r.src)}return createjs.Sound.removeEventListener("fileload",e)}}(this)
return createjs.Sound.addEventListener("fileload",e)}}}
t.prototype.stopFile=function(){var e
return(e=this.instance)!=null?e.stop():void 0}
t.prototype.onFileChosen=function(e){var t
if(!this.settings.filePath){console.error("Need to specify a filePath for this treema",this.getRoot())
throw Error("cannot upload file")}t={url:e.url,filename:e.filename,mimetype:e.mimetype,path:this.settings.filePath,force:true}
this.uploadingPath=[this.settings.filePath,e.filename].join("/")
return $.ajax("/file",{type:"POST",data:t,success:this.onFileUploaded})}
t.prototype.onFileUploaded=function(e){this.data=this.uploadingPath
return this.reset()}
return t}(TreemaNode.nodeMap.string)
u=function(e){P(t,e)
t.prototype.valueClass="treema-image-file"
t.prototype.editable=false
function t(){this.onFileUploaded=L(this.onFileUploaded,this)
this.onFileChosen=L(this.onFileChosen,this)
t.__super__.constructor.apply(this,arguments)
S()}t.prototype.onClick=function(e){if($(e.target).closest(".btn").length){return}return t.__super__.onClick.apply(this,arguments)}
t.prototype.buildValueForDisplay=function(e,t){var r,i
r="image/*"
i=$('<a class="btn btn-sm btn-primary"><span class="glyphicon glyphicon-upload"></span> Upload Picture</a>').click(function(e){return function(){return filepicker.pick({mimetypes:[r]},e.onFileChosen)}}(this))
e.append(i)
if(t){return e.append($("<img />").attr("src","/file/"+t))}}
t.prototype.onFileChosen=function(e){var t
if(!this.settings.filePath){console.error("Need to specify a filePath for this treema",this.getRoot())
throw Error("cannot upload file")}t={url:e.url,filename:e.filename,mimetype:e.mimetype,path:this.settings.filePath,force:true}
this.uploadingPath=[this.settings.filePath,e.filename].join("/")
return $.ajax("/file",{type:"POST",data:t,success:this.onFileUploaded})}
t.prototype.onFileUploaded=function(e){this.data=this.uploadingPath
this.flushChanges()
return this.refreshDisplay()}
return t}(TreemaNode.nodeMap.string)
o=function(e){P(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.childPropertiesAvailable=function(){var e,t,r,i,n
i=_.keys(j.aceEditModes)
n=[]
for(e=0,r=i.length;e<r;e++){t=i[e]
if(this.data[t]==null&&!(t==="javascript"&&this.workingSchema.skipJavaScript)){n.push(t)}}return n}
return t}(TreemaNode.nodeMap.object)
n=function(e){P(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.buildValueForEditing=function(e,r){t.__super__.buildValueForEditing.call(this,e,r)
e.find("input").autocomplete({source:_.keys(j.aceEditModes),minLength:0,delay:0,autoFocus:true})
return e}
return t}(TreemaNode.nodeMap.string)
s=function(e){P(t,e)
function t(){var e,r,i
t.__super__.constructor.apply(this,arguments)
this.workingSchema.aceTabSize=4
if(e=j.aceEditModes[this.keyForParent]){this.workingSchema.aceMode=e}if(e=j.aceEditModes[(r=this.parent)!=null?(i=r.data)!=null?i.language:void 0:void 0]){this.workingSchema.aceMode=e}}t.prototype.initEditor=function(){var e
e=1<=arguments.length?q.call(arguments,0):[]
t.__super__.initEditor.apply(this,e)
return this.editor.setPrintMarginColumn(60)}
return t}(TreemaNode.nodeMap.ace)
a=function(e){P(t,e)
function t(){t.__super__.constructor.apply(this,arguments)
this.workingSchema.aceMode="ace/mode/coffee"
this.workingSchema.aceTabSize=2}return t}(s)
d=function(e){P(t,e)
function t(){t.__super__.constructor.apply(this,arguments)
this.workingSchema.aceMode="ace/mode/javascript"
this.workingSchema.aceTabSize=4}return t}(s)
p=function(e){P(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.findLanguageName=function(e){var t
if(e==="-"){return""}return((t=C[e])!=null?t.nativeDescription:void 0)||e+" Not Found"}
t.prototype.getChildren=function(){var e,r
r=t.__super__.getChildren.apply(this,arguments)
r=function(){var t,i,n
n=[]
for(t=0,i=r.length;t<i;t++){e=r[t]
if(e[0]!=="-"){n.push(e)}}return n}()
return r}
t.prototype.populateData=function(){t.__super__.populateData.call(this)
if(Object.keys(this.data).length===0){return this.data["-"]={"-":"-"}}}
t.prototype.getChildSchema=function(e){var t,r,i,n,o,s,a,l,c,u,p,d,h,m,g,f,y,v,b,_
o={title:this.findLanguageName(e),type:"object",properties:{}}
if(!this.parent){return o}if(this.workingSchema.props==null){console.warn("i18n props array is empty! Filling with all parent properties by default")
this.workingSchema.props=function(){var e,r
e=this.parent.schema.properties
r=[]
for(h in e){t=e[h]
if(h!=="i18n"){r.push(h)}}return r}.call(this)}m=this.workingSchema.props
for(n=0,c=m.length;n<c;n++){s=m[n]
d=(g=this.parent.schema.properties)!=null?g:{}
f=[this.parent.schema.oneOf,this.parent.schema.anyOf]
for(a=0,u=f.length;a<u;a++){i=f[a]
y=i!=null?i:[]
for(l=0,p=y.length;l<p;l++){r=y[l]
b=(v=r!=null?r.properties:void 0)!=null?v:{}
for(h in b){_=b[h]
if(d[h]==null){d[h]=_}}}}o.properties[s]=d[s]}return o}
t.prototype.childPropertiesAvailable=function(){var e,t,r,i,n
i=_.keys(C)
n=[]
for(e=0,r=i.length;e<r;e++){t=i[e]
if(this.data[t]==null){n.push(t)}}return n}
return t}(TreemaNode.nodeMap.object)
h=function(e){P(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}return t}(r)
t.exports.LatestVersionReferenceNode=g=function(e){P(t,e)
t.prototype.searchValueTemplate='<input placeholder="Search" /><div class="treema-search-results"></div>'
t.prototype.valueClass="treema-latest-version"
t.prototype.url="/db/article"
t.prototype.lastTerm=null
function t(){this.search=L(this.search,this)
var e,r,i,n,o
t.__super__.constructor.apply(this,arguments)
i=this.workingSchema.links||[]
r=function(){var t,r,n
n=[]
for(t=0,r=i.length;t<r;t++){e=i[t]
if(e.rel==="db"){n.push(e)}}return n}()[0]
if(!r){return}o=function(){var e,t,i,o
i=r.href.split("/")
o=[]
for(e=0,t=i.length;e<t;e++){n=i[e]
if(n.length){o.push(n)}}return o}()
this.url="/db/"+o[1]
this.model=require("models/"+_.string.classify(o[1]))}t.prototype.buildValueForDisplay=function(e,t){var r
r=t?this.formatDocument(t):"None"
return this.buildValueForDisplaySimply(e,r)}
t.prototype.buildValueForEditing=function(e,t){var r
e.html(this.searchValueTemplate)
r=e.find("input")
r.focus().keyup(this.search)
if(t){return r.attr("placeholder",this.formatDocument(t))}}
t.prototype.buildSearchURL=function(e){return this.url+"?term="+e+"&project=true"}
t.prototype.search=function(){var e
e=this.getValEl().find("input").val()
if(e===this.lastTerm){return}if(this.lastTerm&&!e){this.getSearchResultsEl().empty()}if(!e){return}this.lastTerm=e
this.getSearchResultsEl().empty().append("Searching")
this.collection=new h([],{model:this.model})
this.collection.url=this.buildSearchURL(e)
this.collection.fetch()
return this.collection.once("sync",this.searchCallback,this)}
t.prototype.searchCallback=function(){var e,t,r,i,n,o,s,a
e=this.getSearchResultsEl().detach().empty()
t=true
o=this.collection.models
for(r=0,i=o.length;r<i;r++){n=o[r]
s=$("<div></div>").addClass("treema-search-result-row")
a=this.formatDocument(n)
if(a==null){continue}if(t){s.addClass("treema-search-selected")}t=false
s.text(a)
s.data("value",n)
e.append(s)}if(!this.collection.models.length){e.append($("<div>No results</div>"))}return this.getValEl().append(e)}
t.prototype.getSearchResultsEl=function(){return this.getValEl().find(".treema-search-results")}
t.prototype.getSelectedResultEl=function(){return this.getValEl().find(".treema-search-selected")}
t.prototype.modelToString=function(e){return e.get("name")}
t.prototype.formatDocument=function(e){var t,r,n
if(e instanceof i){return this.modelToString(e)}if(this.settings.supermodel==null){return"Unknown"}r=i.getReferencedModel(this.getData(),this.workingSchema)
t=this.getData()
if(_.isString(t)){if(r.schema().properties.version){r=this.settings.supermodel.getModelByOriginal(r.constructor,t)}else{r=this.settings.supermodel.getModel(r.constructor,t)}}else{r=this.settings.supermodel.getModelByOriginalAndMajorVersion(r.constructor,t.original,t.majorVersion)}if(this.instance&&!r){r=this.instance
this.settings.supermodel.registerModel(r)}if(!r){return"Unknown - "+((n=t.original)!=null?n:t)}return this.modelToString(r)}
t.prototype.saveChanges=function(){var e,t
t=this.getSelectedResultEl()
if(!t.length){return}e=t.data("value")
this.data={original:e.attributes.original,majorVersion:e.attributes.version.major}
return this.instance=e}
t.prototype.onDownArrowPressed=function(e){if(!this.isEditing()){return t.__super__.onDownArrowPressed.apply(this,arguments)}this.navigateSearch(1)
return e.preventDefault()}
t.prototype.onUpArrowPressed=function(e){if(!this.isEditing()){return t.__super__.onUpArrowPressed.apply(this,arguments)}e.preventDefault()
return this.navigateSearch(-1)}
t.prototype.navigateSearch=function(e){var t,r,i
i=this.getSelectedResultEl()
t=e>0?"next":"prev"
r=i[t](".treema-search-result-row")
if(!r.length){return}i.removeClass("treema-search-selected")
return r.addClass("treema-search-selected")}
t.prototype.onClick=function(e){var r
r=$(e.target).closest(".treema-search-result-row")
if(!r.length){return t.__super__.onClick.call(this,e)}this.getSelectedResultEl().removeClass("treema-search-selected")
r.addClass("treema-search-selected")
this.saveChanges()
this.flushChanges()
return this.display()}
t.prototype.shouldTryToRemoveFromParent=function(){var e
if(this.data!=null){return}e=this.getSelectedResultEl()
return!e.length}
return t}(TreemaNode)
t.exports.LatestVersionOriginalReferenceNode=m=function(e){P(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.saveChanges=function(){var e,t
t=this.getSelectedResultEl()
if(!t.length){return}e=t.data("value")
this.data=e.attributes.original
return this.instance=e}
return t}(g)
t.exports.IDReferenceNode=c=function(e){P(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.saveChanges=function(){var e,t
t=this.getSelectedResultEl()
if(!t.length){return}e=t.data("value")
this.data=e.attributes._id
return this.instance=e}
return t}(g)
f=function(e){P(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.buildSearchURL=function(e){return this.url+"?term="+e+"&project=name,system,original,version,dependencies,configSchema,description"}
t.prototype.modelToString=function(e){return e.get("system")+"."+e.get("name")}
t.prototype.canEdit=function(){return!this.getData().original}
return t}(g)
g.prototype.search=_.debounce(g.prototype.search,200)
v=function(e){P(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.getPropertyKey=function(){var e,r
r=t.__super__.getPropertyKey.apply(this,arguments)
if(((e=this.workingSchema.properties)!=null?e[r]:void 0)!=null){return r}return _.string.slugify(r)}
return t}(TreemaNode.nodeMap.object)
w=function(e){P(t,e)
function t(){this.onEditInputBlur=L(this.onEditInputBlur,this)
this.onTaskChanged=L(this.onTaskChanged,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.buildValueForDisplay=function(e){var t
this.taskCheckbox=$('<input type="checkbox">').prop("checked",this.data.complete)
t=$("<span>"+this.data.name+"</span>")
e.append(this.taskCheckbox).append(t)
return this.taskCheckbox.on("change",this.onTaskChanged)}
t.prototype.buildValueForEditing=function(e,t){this.nameInput=this.buildValueForEditingSimply(e,t.name)
return this.nameInput.parent().prepend(this.taskCheckbox)}
t.prototype.onTaskChanged=function(e){this.markAsChanged()
this.saveChanges()
this.flushChanges()
return this.broadcastChanges()}
t.prototype.onEditInputBlur=function(e){this.markAsChanged()
this.saveChanges()
if(this.isValid()){if(this.isEditing()){this.display()}}else{this.nameInput.focus().select()}this.flushChanges()
return this.broadcastChanges()}
t.prototype.saveChanges=function(e){if(this.data==null){this.data={}}if(this.nameInput){this.data.name=this.nameInput.val()}return this.data.complete=Boolean(this.taskCheckbox.prop("checked"))}
t.prototype.destroy=function(){this.taskCheckbox.off()
return t.__super__.destroy.call(this)}
return t}(TreemaNode.nodeMap.string)
t.exports.setup=function(){TreemaNode.setNodeSubclass("date-time",l)
TreemaNode.setNodeSubclass("version",k)
TreemaNode.setNodeSubclass("markdown",y)
TreemaNode.setNodeSubclass("code-languages-object",o)
TreemaNode.setNodeSubclass("code-language",n)
TreemaNode.setNodeSubclass("code",s)
TreemaNode.setNodeSubclass("coffee",a)
TreemaNode.setNodeSubclass("javascript",d)
TreemaNode.setNodeSubclass("image-file",u)
TreemaNode.setNodeSubclass("latest-version-reference",g)
TreemaNode.setNodeSubclass("latest-version-original-reference",m)
TreemaNode.setNodeSubclass("component-reference",f)
TreemaNode.setNodeSubclass("i18n",p)
TreemaNode.setNodeSubclass("sound-file",b)
TreemaNode.setNodeSubclass("slug-props",v)
return TreemaNode.setNodeSubclass("task",w)}})
require.register("core/urls",function(e,require,t){t.exports={playDevLevel:function(e){var t,r,i,n
r=e.level,i=e.session,t=e.course
n=window.location.origin+"/play/"+r.get("type")+"-level/"+r.get("slug")+"/"+i.id
if(t){n+="?course="+t.id}return n},courseArenaLadder:function(e){var t,r
r=e.level,t=e.courseInstance
return"/play/ladder/"+r.get("slug")+"/course/"+t.id},courseLevel:function(e){var t,r,i
r=e.level,t=e.courseInstance
i="/play/level/"+r.get("slug")+"?course="+t.get("courseID")+"&course-instance="+t.id
if(r.get("primerLanguage")){i+="&codeLanguage="+r.get("primerLanguage")}return i},courseWorldMap:function(e){var t,r,i
r=e.course,i=e.courseInstance,t=e.classroom
return"/play/"+r.get("campaignID")+"?course-instance="+i.id}}})
require.register("core/utils",function(e,require,t){var r,i,n,o,s,a,l,c,u,p,d,h,m,g,f,y,v,b,w,k,S,C,x,j,P,T,L,A,q,D,I,E,M,N,R,O,B,F,V,U,H,z,W,G,Y,J,K,Q,X,Z,ee,te,re,ie,ne,oe,se,ae,le,ce,ue=[].indexOf||function(e){for(var t=0,r=this.length;t<r;t++){if(t in this&&this[t]===e)return t}return-1}
o=function(e){var t,r
if(e===null||typeof e!=="object"){return e}r=e.constructor()
for(t in e){r[t]=o(e[t])}return r}
s=function(e,t){var r,i,n,o
r={}
while(e!=null?e[t]:void 0){n=e[t]
for(i in n){o=n[i]
if(r[i]){continue}r[i]=o}if(e.__proto__){e=e.__proto__}else{e=Object.getPrototypeOf(e)}}return r}
l=[{country:"united-states",countryCode:"US"},{country:"china",countryCode:"CN"},{country:"brazil",countryCode:"BR"},{country:"united-kingdom",countryCode:"GB"},{country:"russia",countryCode:"RU"},{country:"australia",countryCode:"AU"},{country:"canada",countryCode:"CA"},{country:"france",countryCode:"FR"},{country:"taiwan",countryCode:"TW"},{country:"ukraine",countryCode:"UA"},{country:"poland",countryCode:"PL"},{country:"spain",countryCode:"ES"},{country:"germany",countryCode:"DE"},{country:"netherlands",countryCode:"NL"},{country:"hungary",countryCode:"HU"},{country:"japan",countryCode:"JP"},{country:"turkey",countryCode:"TR"},{country:"south-africa",countryCode:"ZA"},{country:"indonesia",countryCode:"ID"},{country:"new-zealand",countryCode:"NZ"},{country:"finland",countryCode:"FI"},{country:"south-korea",countryCode:"KR"},{country:"mexico",countryCode:"MX"},{country:"vietnam",countryCode:"VN"},{country:"singapore",countryCode:"SG"},{country:"colombia",countryCode:"CO"},{country:"india",countryCode:"IN"},{country:"thailand",countryCode:"TH"},{country:"belgium",countryCode:"BE"},{country:"sweden",countryCode:"SE"},{country:"denmark",countryCode:"DK"},{country:"czech-republic",countryCode:"CZ"},{country:"hong-kong",countryCode:"HK"},{country:"italy",countryCode:"IT"},{country:"romania",countryCode:"RO"},{country:"belarus",countryCode:"BY"},{country:"norway",countryCode:"NO"},{country:"philippines",countryCode:"PH"},{country:"lithuania",countryCode:"LT"},{country:"argentina",countryCode:"AR"},{country:"malaysia",countryCode:"MY"},{country:"pakistan",countryCode:"PK"},{country:"serbia",countryCode:"RS"},{country:"greece",countryCode:"GR"},{country:"israel",countryCode:"IL"},{country:"portugal",countryCode:"PT"},{country:"slovakia",countryCode:"SK"},{country:"ireland",countryCode:"IE"},{country:"switzerland",countryCode:"CH"},{country:"peru",countryCode:"PE"},{country:"bulgaria",countryCode:"BG"},{country:"venezuela",countryCode:"VE"},{country:"austria",countryCode:"AT"},{country:"croatia",countryCode:"HR"},{country:"saudia-arabia",countryCode:"SA"},{country:"chile",countryCode:"CL"},{country:"united-arab-emirates",countryCode:"AE"},{country:"kazakhstan",countryCode:"KZ"},{country:"estonia",countryCode:"EE"},{country:"iran",countryCode:"IR"},{country:"egypt",countryCode:"EG"},{country:"ecuador",countryCode:"EC"},{country:"slovenia",countryCode:"SI"},{country:"macedonia",countryCode:"MK"}]
u={INTRODUCTION_TO_COMPUTER_SCIENCE:"560f1a9f22961295f9427742",GAME_DEVELOPMENT_1:"5789587aad86a6efb573701e",WEB_DEVELOPMENT_1:"5789587aad86a6efb573701f",COMPUTER_SCIENCE_2:"5632661322961295f9428638",GAME_DEVELOPMENT_2:"57b621e7ad86a6efb5737e64",WEB_DEVELOPMENT_2:"5789587aad86a6efb5737020",COMPUTER_SCIENCE_3:"56462f935afde0c6fd30fc8c",COMPUTER_SCIENCE_4:"56462f935afde0c6fd30fc8d",COMPUTER_SCIENCE_5:"569ed916efa72b0ced971447",COMPUTER_SCIENCE_6:"5817d673e85d1220db624ca4"}
Q=[u.INTRODUCTION_TO_COMPUTER_SCIENCE,u.GAME_DEVELOPMENT_1,u.WEB_DEVELOPMENT_1,u.COMPUTER_SCIENCE_2,u.GAME_DEVELOPMENT_2,u.WEB_DEVELOPMENT_2,u.COMPUTER_SCIENCE_3,u.COMPUTER_SCIENCE_4,u.COMPUTER_SCIENCE_5,u.COMPUTER_SCIENCE_6]
c={}
c[u.INTRODUCTION_TO_COMPUTER_SCIENCE]="CS1"
c[u.GAME_DEVELOPMENT_1]="GD1"
c[u.WEB_DEVELOPMENT_1]="WD1"
c[u.COMPUTER_SCIENCE_2]="CS2"
c[u.GAME_DEVELOPMENT_2]="GD2"
c[u.WEB_DEVELOPMENT_2]="WD2"
c[u.COMPUTER_SCIENCE_3]="CS3"
c[u.COMPUTER_SCIENCE_4]="CS4"
c[u.COMPUTER_SCIENCE_5]="CS5"
c[u.COMPUTER_SCIENCE_6]="CS6"
Z=["578d320d15e2501f00a585bd","5744e3683af6bf590cd27371","5786a472a6c64135009238d3","577d5d4dab818b210046b3bf","58c74b7c3d4a3d2900d43b7e","58c7614a62cc3a1f00442240","58a262520b43652f00dad75e","57869cf7bd31c14400834028","578691f9bd31c1440083251d","58a2712b0b43652f00dae5a4","58c737140ca7852e005deb8a","57586f0a22179b2800efda37"]
te={premiumHeroesCount:"12",totalHeroesCount:"16",premiumLevelsCount:"330",freeLevelsCount:"100"}
J=function(e,t){var r
if(t==null){t={}}if(_.isString(e)){r=t[e]
if(!r){console.error("Could not find method "+e+" in object",t)
return function(e){return function(){return null}}(this)}e=r}return e}
K=function(e){return new Date(parseInt(e.toString().slice(0,8),16)*1e3)}
R=function(e){return rgbToHsl(O(e),N(e),M(e))}
O=function(e){return parseInt(f(e).substring(0,2),16)}
N=function(e){return parseInt(f(e).substring(2,4),16)}
M=function(e){return parseInt(f(e).substring(4,6),16)}
f=function(e){if(e.charAt(0)==="#"){return e.substring(1,7)}else{return e}}
B=function(e){var t
return"#"+function(){var r,i,n,o
n=hslToRgb.apply(null,e)
o=[]
for(r=0,i=n.length;r<i;r++){t=n[r]
o.push(ae(t))}return o}().join("")}
ae=function(e){var t
t=Math.floor(e).toString(16)
if(t.length===1){t="0"+t}return t}
X=function(e){var t
t=location.protocol+"//"+location.hostname+(location.port&&":"+location.port)
return t+e}
b=function(e){var t,r
r=(t=e.match(/<playercode>\n([\s\S]*)\n *<\/playercode>/))!=null?t[1]:void 0
if(r){return se(r)}else{return void 0}}
se=function(e){var t,r,i,n
t=e.split("\n")
r=_.min(_.filter(t.map(function(e){var t,r
return(t=e.match(/^\s*/))!=null?(r=t[0])!=null?r.length:void 0:void 0})))
n=function(){var e,n,o
o=[]
for(e=0,n=t.length;e<n;e++){i=t[e]
o.push(i.substr(r))}return o}().join("\n")
return n}
F=function(e,t,r,i){var n,o,s,a,l,c,u,p,d,h
if(r==null){r=me.get("preferredLanguage",true)}if(i==null){i="en"}l=null
n=null
o=null
s=null
p=/\w+/gi.exec(r)
if(p){a=p[0]}d=e.i18n
for(u in d){c=d[u]
if(u==="-"){continue}if(t in c){h=c[t]}else{continue}if(u===r){return h}if(u===a){l=h}if(u===i){n=h}if(u.indexOf(r)===0&&o==null){o=h}if(u.indexOf(a)===0&&s==null){s=h}}if(l!=null){return l}if(o!=null){return o}if(s!=null){return s}if(n!=null){return n}if(t in e){return e[t]}return null}
x=function(e,t){var r,i,n,o,s
if(!e){throw new Error("Expected an object to match a query against, instead got null")}s=t.split(".")
n=e
for(r=0,i=s.length;r<i;r++){o=s[r]
if(!(o in n)){return void 0}n=n[o]}return n}
H=function(e){var t
return _.isString(e)&&e.length===24&&((t=e.match(/[a-f0-9]/gi))!=null?t.length:void 0)===24}
ie=_.curry(function(e,t){return t=+t.toFixed(e)})
ee=function(e){return function(t){return function(r){if(r>0){return e(t)(r)}else{return 0}}}}
d=function(e){return function(t){return(e.a||1)*t+(e.b||0)}}
g=function(e){return function(t){return(e.a||1)*t*t+(e.b||1)*t+(e.c||0)}}
h=function(e){return function(t){if(t>0){return(e.a||1)*Math.log((e.b||1)*(t+(e.c||0)))+(e.d||0)}else{return 0}}}
m=function(e){return function(t){return(e.a||1)*Math.pow(t,e.b||1)+(e.c||0)}}
C={linear:ee(d),quadratic:ee(g),logarithmic:ee(h),pow:ee(m)}
W=function(e,t,r){var i,n
if(t==null){t=100}if(r==null){r=5e3}n=0
return(i=function(o){if((n+=t)<=r&&!o){return _.delay(function(){return e(i)},t)}})(false)}
E=function(e){var t,r,i,n,o,s,a,l
r=e.data
for(n=o=0,a=r.length;o<=a;n=o+=4){s=r[n]
i=r[n+1]
t=r[n+2]
l=.2126*s+.7152*i+.0722*t
r[n]=r[n+1]=r[n+2]=l}return e}
G=a=function(e,t){var r,i,n,o
if(_.isObject(e)&&_.isObject(t)){o=_.union(Object.keys(e),Object.keys(t))
for(r=0,n=o.length;r<n;r++){i=o[r]
if(!a(e[i],t[i])){return false}}return true}else if(e===t){return true}else{return false}}
I=function(e){var t,r,i,n
if(e==null){e=0}t=new Date
t.setDate(t.getUTCDate()+e)
n=t.getUTCFullYear()
i=t.getUTCMonth()+1
if(i<10){i="0"+i}r=t.getUTCDate()
if(r<10){r="0"+r}return""+n+i+r}
if(typeof document!=="undefined"&&document!==null?document.createElement:void 0){y=document.createElement("div")
y.innerHTML="text"
r=y.textContent==="text"?"textContent":"innerText"
re=function(e,t){var i,n,o
for(n=0,o=e.length;n<o;n++){i=e[n]
i[r]=t}return null}}if(typeof document!=="undefined"&&document!==null?document.createElement:void 0){U=function(e){var t,r
r=e.createElement("div")
t=e.createElement("div")
return function(i){if(!r.id){r.id="injected-css"
r.style.display="none"
e.body.appendChild(r)}t.innerHTML="<br><style>"+i+"</style>"
r.appendChild(t.children[1])}}(document)}ce=function(){return window.navigator.userAgent}
T=function(){return document.location.search}
q=function(){var e,r,i,n,o,s,a,l,c,u
s=t.exports.getDocumentSearchString().substring(1)
o=function(){var e,t,r,i
r=s.split("&")
i=[]
for(e=0,t=r.length;e<t;e++){n=r[e]
i.push(n.split("="))}return i}()
u={}
for(e=0,i=o.length;e<i;e++){a=o[e],r=a[0],c=a[1]
u[r]=(l={true:true,false:false}[c])!=null?l:decodeURIComponent(c)}return u}
A=function(e,t){var r,i
i=q()
return(r=i[e])!=null?r:t}
D=function(e,t,r){var i
if(e==null){e=999}if(t==null){t=0}if(r==null){r=false}if(!(t>0)){return 0}i=r?1:0
if(t<=1-i){return e}else if(t<=11-i){return Math.round((1-i)*e+(t-1+i)*e*.8)}else{return Math.round((1-i)*e+10*e*.8+(t-11+i)*e*.6)}}
j=function(e,t){var r,i
if(t==null){t=20}i=e.reduce(function(e,t){return e+t},0)
if(e.length>2){r=Math.round(i/2)}else{r=parseInt(i)}return t*r}
P=function(){var e
e=[{quote:"The kids love it.",source:"Leo Joseph Tran, Athlos Leadership Academy"},{quote:"My students have been using the site for a couple of weeks and they love it.",source:"Scott Hatfield, Computer Applications Teacher, School Technology Coordinator, Eastside Middle School"},{quote:"Thanks for the captivating site. My eighth graders love it.",source:"Janet Cook, Ansbach Middle/High School"},{quote:"My students have started working on CodeCombat and love it! I love that they are learning coding and problem solving skills without them even knowing it!!",source:"Kristin Huff, Special Education Teacher, Webb City School District"},{quote:"I recently introduced Code Combat to a few of my fifth graders and they are loving it!",source:"Shauna Hamman, Fifth Grade Teacher, Four Peaks Elementary School"},{quote:"Overall I think it's a fantastic service. Variables, arrays, loops, all covered in very fun and imaginative ways. Every kid who has tried it is a fan.",source:"Aibinder Andrew, Technology Teacher"},{quote:"I love what you have created. The kids are so engaged.",source:"Desmond Smith, 4KS Academy"},{quote:"My students love the website and I hope on having content structured around it in the near future.",source:"Michael Leonard, Science Teacher, Clearwater Central Catholic High School"}]
return e[_.random(0,e.length-1)]}
L=function(e,t,r){var i
if(e==null){e=0}if(t==null){t=0}if(r==null){r=0}if(!(t>0&&r>0)){return 0}i=e*t*r
return i}
S=function(e){return"$"+parseFloat(e).toFixed(2)}
oe=function(e){var t
return t=e[0],ue.call("aeiouAEIOU",t)>=0}
w=function(e,t){var r,i,n,o,s,a,l,c,u,p,d,h,m
if(!e){return""}n=t||((u=me.get("aceConfig"))!=null?u.language:void 0)||"python"
o=_.without(["javascript","python","coffeescript","clojure","lua","java","io","html"],n)
r=new RegExp("```("+o.join("|")+")\n[^`]+```\n?","gm")
a=new RegExp("!\\[("+o.join("|")+") - .+?\\]\\(.+?\\)\n?","gm")
e=e.replace(r,"").replace(a,"")
i={python:[["true","True"],["false","False"],["null","None"],["object","dictionary"],["Object","Dictionary"],["array","list"],["Array","List"]],lua:[["null","nil"],["object","table"],["Object","Table"],["array","table"],["Array","Table"]]}
d=(p=i[n])!=null?p:[]
for(l=0,c=d.length;l<c;l++){h=d[l],s=h[0],m=h[1]
e=e.replace(RegExp("`"+s+"`","g"),"`"+m+"`")
if(oe(s)&&!oe(m)){e=e.replace(RegExp("( a|A)n( `"+m+"`)","g"),"$1$2")}if(!oe(s)&&oe(m)){e=e.replace(RegExp("( a|A)( `"+m+"`)","g"),"$1n$2")}}return e}
i={javascript:"ace/mode/javascript",coffeescript:"ace/mode/coffee",python:"ace/mode/python",lua:"ace/mode/lua",java:"ace/mode/java",html:"ace/mode/html"}
V=function(e,t){var r,n,o
r=$(e).text().trim()
n=ace.edit(e)
n.setOptions({maxLines:Infinity})
n.setReadOnly(true)
n.setTheme("ace/theme/textmate")
n.setShowPrintMargin(false)
n.setShowFoldWidgets(false)
n.setHighlightActiveLine(false)
n.setHighlightActiveLine(false)
n.setBehavioursEnabled(false)
n.renderer.setShowGutter(false)
n.setValue(r)
n.clearSelection()
o=n.getSession()
o.setUseWorker(false)
o.setMode(i[t])
o.setWrapLimitRange(null)
o.setUseWrapMode(true)
o.setNewLineMode("unix")
return n}
n={javascript:"JavaScript",coffeescript:"CoffeeScript",python:"Python",java:"Java",lua:"Lua",html:"HTML"}
p=function(e){var t,r,i,n,o,s,a,l
s={}
l=0
a=0
for(t=r=0,i=e.length;r<i;t=++r){n=e[t]
o=t-l+1
if(n.practice){o=t-l+String.fromCharCode("a".charCodeAt(0)+a)
l++
a++}else{a=0}s[n.key]=o}return s}
k=function(e,t,r){var i
i=t
i++
if(r){if(e[t].practice||i<e.length&&e[i].practice){while(i<e.length&&e[i].complete){i++}}else{i--
while(i>=0&&!e[i].practice){i--}if(i>=0){while(i>=0&&e[i].practice){i--}if(i>=0){i++
while(i<e.length&&e[i].practice&&e[i].complete){i++}if(e[i].practice&&!e[i].complete){return i}}}i=t+1
while(i<e.length&&e[i].complete){i++}}}else{while(i<e.length&&(e[i].practice||e[i].complete)){i++}}return i}
Y=function(e,t){if(e==null){e=0}if(t==null){t=5}return e/60>t}
ne=function(e){return _.sortBy(e,function(e){var t,r
t=Q.indexOf((r=e.id)!=null?r:e._id)
if(t===-1){t=9001}return t})}
le=function(){var e,t,r,i,n,o
o={AL:"Alabama",AK:"Alaska",AZ:"Arizona",AR:"Arkansas",CA:"California",CO:"Colorado",CT:"Connecticut",DE:"Delaware",DC:"District of Columbia",FL:"Florida",GA:"Georgia",HI:"Hawaii",ID:"Idaho",IL:"Illinois",IN:"Indiana",IA:"Iowa",KS:"Kansas",KY:"Kentucky",LA:"Louisiana",ME:"Maine",MD:"Maryland",MA:"Massachusetts",MI:"Michigan",MN:"Minnesota",MS:"Mississippi",MO:"Missouri",MT:"Montana",NE:"Nebraska",NV:"Nevada",NH:"New Hampshire",NJ:"New Jersey",NM:"New Mexico",NY:"New York",NC:"North Carolina",ND:"North Dakota",OH:"Ohio",OK:"Oklahoma",OR:"Oregon",PA:"Pennsylvania",RI:"Rhode Island",SC:"South Carolina",SD:"South Dakota",TN:"Tennessee",TX:"Texas",UT:"Utah",VT:"Vermont",VA:"Virginia",WA:"Washington",WV:"West Virginia",WI:"Wisconsin",WY:"Wyoming"}
n=_.invert(o)
r=function(e){e=_.isString(e)?e.trim().toUpperCase().replace(/[^A-Z]/g,""):null
if(o[e]){return e}else{return null}}
t=function(e){return o[r(e)]||null}
i=function(e){var t
if(!_.isString(e)){return null}e=e.trim().toLowerCase().replace(/[^a-z\s]/g,"").replace(/\s+/g," ")
t=e.split(/\s+/)
t=_.map(t,function(e){return e.charAt(0).toUpperCase()+e.slice(1)})
if(t.length>2){t[1]=t[1].toLowerCase()}e=t.join(" ")
if(n[e]){return e}else{return null}}
e=function(e){return n[i(e)]||null}
return{sanitizeStateCode:r,getStateNameByStateCode:t,sanitizeStateName:i,getStateCodeByStateName:e}}()
v=/[A-z0-9._%+-]+@[A-z0-9.-]+\.[A-z]{2,63}/
z=function(e){return v.test(e!=null?e.trim().toLowerCase():void 0)}
t.exports={aceEditModes:i,capitalLanguages:n,clone:o,combineAncestralObject:s,countries:l,courseAcronyms:c,courseIDs:u,createLevelNumberMap:p,extractPlayerCodeTag:b,filterMarkdownCodeLanguages:w,findNextLevel:k,formatDollarValue:S,functionCreators:C,getByPath:x,getCourseBundlePrice:j,getCoursePraise:P,getDocumentSearchString:T,getPrepaidCodeAmount:L,getQueryVariable:A,getQueryVariables:q,getSponsoredSubsAmount:D,getUTCDay:I,grayscale:E,hexToHSL:R,hslToHex:B,i18n:F,initializeACE:V,injectCSS:U,isID:H,keepDoingUntil:W,kindaEqual:G,needsPractice:Y,normalizeFunc:J,objectIdToDate:K,orderedCourseIDs:Q,pathToUrl:X,replaceText:re,round:ie,sortCourses:ne,stripIndentation:se,usStateCodes:le,userAgent:ce,petThangIDs:Z,premiumContent:te,isValidEmail:z}})
require.register("views/core/AchievementPopup",function(e,require,t){var r,i,n,o,s,a=function(e,t){for(var r in t){if(l.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},l={}.hasOwnProperty
n=require("views/core/CocoView")
s=require("templates/core/achievement-popup")
o=require("../../models/User")
r=require("../../models/Achievement")
t.exports=i=function(e){a(t,e)
t.prototype.className="achievement-popup"
t.prototype.template=s
function t(e){this.achievement=e.achievement
this.earnedAchievement=e.earnedAchievement
this.container=e.container||this.getContainer()
this.popup=e.container
if(this.popup==null){this.popup=true}if(this.popup){this.className+=" popup"}t.__super__.constructor.call(this,e)
this.render()}t.prototype.calculateData=function(){var e,t,r,i,n,s,a,l,c,u,p,d,h
r=me.level()
u=r+1
i=o.expForLevel(r)
p=o.expForLevel(u)
h=p-i
a=this.achievement.getExpFunction()
n=me.get("points",true)
if(this.achievement.isRepeatable()){if(this.achievement.isRepeatable()){e=a(this.earnedAchievement.get("previouslyAchievedAmount"))*this.achievement.get("worth")}}else{e=this.achievement.get("worth",true)}d=n-e
l=n-e<i
t=100*(d-i)/h
if(t<0){t=0}c=l?100*(n-i)/h:100*e/h
return s={title:this.achievement.i18nName(),imgURL:this.achievement.getImageURL(),description:this.achievement.i18nDescription(),level:r,currentXP:n,newXP:e,leftXP:p-n,oldXPWidth:t,newXPWidth:c,leftXPWidth:100-c-t}}
t.prototype.getRenderData=function(){var e
e=t.__super__.getRenderData.call(this)
_.extend(e,this.calculateData())
e.style=this.achievement.getStyle()
e.popup=true
e.$=$
return e}
t.prototype.render=function(){var e
t.__super__.render.call(this)
this.container.prepend(this.$el)
if(this.popup){e=function(e){return function(){if(e.destroyed){return}return e.$el.animate({left:-600},function(){e.$el.remove()
return e.destroy()})}}(this)
this.$el.animate({left:0})
this.$el.on("click",e)
if(!$("#editor-achievement-edit-view").length){return _.delay(e,1e4)}}}
t.prototype.getContainer=function(){if(!this.container){this.container=$(".achievement-popup-container")
if(!this.container.length){$("body").append('<div class="achievement-popup-container"></div>')
this.container=$(".achievement-popup-container")}}return this.container}
t.prototype.afterRender=function(){t.__super__.afterRender.call(this)
return _.delay(this.initializeTooltips,1e3)}
t.prototype.initializeTooltips=function(){return $(".progress-bar").addClass("has-tooltip").tooltip()}
return t}(n)})
require.register("views/core/AuthModal",function(e,require,t){var r,i,n,o,s,a,l,c,u,p=function(e,t){return function(){return e.apply(t,arguments)}},d=function(e,t){for(var r in t){if(h.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},h={}.hasOwnProperty
i=require("views/core/ModalView")
u=require("templates/core/auth-modal")
l=require("core/forms")
n=require("models/User")
o=require("core/application")
s=require("core/errors")
t.exports=r=function(e){d(t,e)
function t(){this.onFacebookLoginError=p(this.onFacebookLoginError,this)
this.onGPlusLoginError=p(this.onGPlusLoginError,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.id="auth-modal"
t.prototype.template=u
t.prototype.events={"click #switch-to-signup-btn":"onSignupInstead","submit form":"onSubmitForm","keyup #name":"onNameChange","click #gplus-login-btn":"onClickGPlusLoginButton","click #facebook-login-btn":"onClickFacebookLoginButton","click #close-modal":"hide"}
t.prototype.initialize=function(e){var t
if(e==null){e={}}this.previousFormInputs=e.initialValues||{}
if((t=this.previousFormInputs).emailOrUsername==null){t.emailOrUsername=this.previousFormInputs.email||this.previousFormInputs.username}o.gplusHandler.loadAPI({success:function(e){return function(){return _.defer(function(){return e.$("#gplus-login-btn").attr("disabled",false)})}}(this)})
return o.facebookHandler.loadAPI({success:function(e){return function(){return _.defer(function(){return e.$("#facebook-login-btn").attr("disabled",false)})}}(this)})}
t.prototype.afterRender=function(){t.__super__.afterRender.call(this)
return this.playSound("game-menu-open")}
t.prototype.afterInsert=function(){t.__super__.afterInsert.call(this)
return _.delay(function(e){return function(){return $("input:visible:first",e.$el).focus()}}(this),500)}
t.prototype.onSignupInstead=function(e){var t,r
t=require("./CreateAccountModal")
r=new t({initialValues:l.formToObject(this.$el)})
return currentView.openModalView(r)}
t.prototype.onSubmitForm=function(e){var t,r
this.playSound("menu-button-click")
e.preventDefault()
l.clearFormAlerts(this.$el)
this.$("#unknown-error-alert").addClass("hide")
r=l.formToObject(this.$el)
t=tv4.validateMultiple(r,a)
if(!t.valid){return l.applyErrorsToForm(this.$el,t.errors)}return new Promise(me.loginPasswordUser(r.emailOrUsername,r.password).then).then(function(){if(window.nextURL){return window.location.href=window.nextURL}else{return c()}})["catch"](function(e){return function(t){var r,i
i=false
if(t.status===401){r=t.responseJSON.errorID
if(r==="not-found"){l.setErrorToProperty(e.$el,"emailOrUsername",$.i18n.t("loading_error.not_found"))
i=true}if(r==="wrong-password"){l.setErrorToProperty(e.$el,"password",$.i18n.t("account_settings.wrong_password"))
i=true}}if(!i){return e.$("#unknown-error-alert").removeClass("hide")}}}(this))}
t.prototype.onClickGPlusLoginButton=function(){var e
e=this.$("#gplus-login-btn")
return o.gplusHandler.connect({context:this,success:function(){e.find(".sign-in-blurb").text($.i18n.t("login.logging_in"))
e.attr("disabled",true)
return o.gplusHandler.loadPerson({context:this,success:function(e){var t
t=new n
return t.fetchGPlusUser(e.gplusID,{success:function(t){return function(){return me.loginGPlusUser(e.gplusID,{success:function(){return c()},error:t.onGPlusLoginError})}}(this),error:this.onGPlusLoginError})}})}})}
t.prototype.onGPlusLoginError=function(){var e
e=this.$("#gplus-login-btn")
e.find(".sign-in-blurb").text($.i18n.t("login.sign_in_with_gplus"))
e.attr("disabled",false)
return s.showNotyNetworkError.apply(s,arguments)}
t.prototype.onClickFacebookLoginButton=function(){var e
e=this.$("#facebook-login-btn")
return o.facebookHandler.connect({context:this,success:function(){e.find(".sign-in-blurb").text($.i18n.t("login.logging_in"))
e.attr("disabled",true)
return o.facebookHandler.loadPerson({context:this,success:function(e){var t
t=new n
return t.fetchFacebookUser(e.facebookID,{success:function(t){return function(){return me.loginFacebookUser(e.facebookID,{success:function(){return c()},error:t.onFacebookLoginError})}}(this),error:this.onFacebookLoginError})}})}})}
t.prototype.onFacebookLoginError=function(){var e
e=this.$("#facebook-login-btn")
e.find(".sign-in-blurb").text($.i18n.t("login.sign_in_with_facebook"))
e.attr("disabled",false)
return s.showNotyNetworkError.apply(s,arguments)}
t.prototype.onHidden=function(){t.__super__.onHidden.call(this)
return this.playSound("game-menu-close")}
return t}(i)
a={type:"object",properties:{emailOrUsername:{$or:[n.schema.properties.name,n.schema.properties.email]},password:n.schema.properties.password},required:["emailOrUsername","password"]}
c=function(){if(me.isStudent()&&!me.isAdmin()){o.router.navigate("/students",{trigger:true})}else if(me.isTeacher()&&!me.isAdmin()){o.router.navigate("/teachers/classes",{trigger:true})}return window.location.reload()}})
require.register("views/core/CocoView",function(e,require,t){var r,i,n,o,s,a,l,c,u,p,d,h,m,g,f,y,v,b=function(e,t){return function(){return e.apply(t,arguments)}},w=function(e,t){for(var r in t){if(k.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},k={}.hasOwnProperty,S=[].slice,C=[].indexOf||function(e){for(var t=0,r=this.length;t<r;t++){if(t in this&&this[t]===e)return t}return-1}
n=require("models/SuperModel")
f=require("core/utils")
r=require("core/CocoClass")
d=require("templates/core/loading")
p=require("templates/core/loading-error")
a=require("core/auth")
s=require("core/ViewVisibleTimer")
u=0
y=null
v=null
l=0
h=function(){return"view-scope-"+l++}
c=function(){}
o=require("core/ViewLoadTimer")
t.exports=i=function(e){w(t,e)
t.prototype.cache=false
t.prototype.retainSubviews=false
t.prototype.template=function(){return""}
t.prototype.events={"click #loading-error .login-btn":"onClickLoadingErrorLoginButton","click #loading-error #create-account-btn":"onClickLoadingErrorCreateAccountButton","click #loading-error #logout-btn":"onClickLoadingErrorLogoutButton","click .contact-modal":"onClickContactModal"}
t.prototype.subscriptions={}
t.prototype.shortcuts={}
t.prototype.loadProgress={progress:0}
function t(e){this.animatePointer=b(this.animatePointer,this)
this.modalClosed=b(this.modalClosed,this)
this.updateProgressBar=b(this.updateProgressBar,this)
var r
this.loadProgress=_.cloneDeep(this.loadProgress)
if(this.supermodel==null){this.supermodel=new n}this.options=e
if(e!=null?e.supermodel:void 0){this.supermodel.models=e.supermodel.models
this.supermodel.collections=e.supermodel.collections
this.supermodel.shouldSaveBackups=e.supermodel.shouldSaveBackups}this.subscriptions=f.combineAncestralObject(this,"subscriptions")
this.events=f.combineAncestralObject(this,"events")
this.scope=h()
this.shortcuts=f.combineAncestralObject(this,"shortcuts")
this.subviews={}
this.listenToShortcuts()
this.updateProgressBar=_.debounce(this.updateProgressBar,100)
this.listenTo(this.supermodel,"loaded-all",this.onLoaded)
this.listenTo(this.supermodel,"update-progress",this.updateProgress)
this.listenTo(this.supermodel,"failed",this.onResourceLoadFailed)
this.warnConnectionError=_.throttle(this.warnConnectionError,3e3)
r=this.supermodel
_.defer(function(e){return function(){var t,i
if(r!==e.supermodel&&!e.destroyed){throw new Error(((t=(i=e.constructor)!=null?i.name:void 0)!=null?t:e)+": Supermodel listeners not hooked up! Don't reassign @supermodel; CocoView does that for you.")}}}(this))
t.__super__.constructor.apply(this,arguments)}t.prototype.destroy=function(){var e,t,r,i,n,o
if((r=this.viewVisibleTimer)!=null){r.destroy()}this.stopListening()
this.off()
this.stopListeningToShortcuts()
this.undelegateEvents()
i=this.subviews
for(e in i){o=i[e]
o.destroy()}$("#modal-wrapper .modal").off("hidden.bs.modal",this.modalClosed)
this.$el.find(".has-tooltip, [data-original-title]").tooltip("destroy")
this.endHighlight()
this.getPointer(false).remove()
for(t in this){n=this[t]
this[t]=void 0}this.destroyed=true
this.off=c
this.destroy=c
return $.noty.closeAll()}
t.prototype.trackTimeVisible=function(e){var t
t=(e!=null?e:{}).trackViewLifecycle
if(this.viewVisibleTimer){return}this.viewVisibleTimer=new s
return this.trackViewLifecycle=t}
t.prototype.currentVisiblePremiumFeature=function(){if(this.trackViewLifecycle){return{viewName:this.id}}else{return null}}
t.prototype.updateViewVisibleTimer=function(){var e
if(!this.viewVisibleTimer){return}e=!this.hidden&&!this.destroyed&&this.currentVisiblePremiumFeature()
if(e&&!_.isEqual(e,this.viewVisibleTimer.featureData)){this.viewVisibleTimer.stopTimer({clearName:true})
return this.viewVisibleTimer.startTimer(e)}else if(!e){return this.viewVisibleTimer.stopTimer({clearName:true})}}
t.prototype.destroyAceEditor=function(e){var t
if(!e){return}t=e.getSession()
t.setMode("")
return e.destroy()}
t.prototype.afterInsert=function(){return this.updateViewVisibleTimer()}
t.prototype.willDisappear=function(){var e,t,r
this.undelegateEvents()
this.hidden=true
this.updateViewVisibleTimer()
this.stopListeningToShortcuts()
t=this.subviews
for(e in t){r=t[e]
r.willDisappear()}return $.noty.closeAll()}
t.prototype.didReappear=function(){var e,t,r,i,n
this.delegateEvents()
n=this.hidden
this.hidden=false
this.updateViewVisibleTimer()
if(n){this.listenToShortcuts()}t=this.subviews
r=[]
for(e in t){i=t[e]
r.push(i.didReappear())}return r}
t.prototype.renderSelectors=function(){var e,t,r,i,n,o,s,a,l,c
c=1<=arguments.length?S.call(arguments,0):[]
s=$(this.template(this.getRenderData()))
for(t=r=0,n=c.length;r<n;t=++r){l=c[t]
a=_.zip(this.$el.find(l),s.find(l))
for(i=0,o=a.length;i<o;i++){e=a[i]
$(e[0]).replaceWith($(e[1]))}}this.delegateEvents()
return this.$el.i18n()}
t.prototype.render=function(){var e,r,i,n,o,s
if(!me){return this}if(this.retainSubviews){n=_.values(this.subviews)}else{o=this.subviews
for(e in o){s=o[e]
s.destroy()}}this.subviews={}
t.__super__.render.call(this)
if(_.isString(this.template)){return this.template}this.$el.html(this.template(this.getRenderData()))
if(this.retainSubviews){for(r=0,i=n.length;r<i;r++){s=n[r]
this.insertSubView(s)}}if(!this.supermodel.finished()){this.showLoading()}else{this.hideLoading()}this.afterRender()
this.$el.i18n()
return this}
t.prototype.getRenderData=function(e){if(e==null){e={}}e.isProduction=application.isProduction()
e.me=me
e.pathname=document.location.pathname
e.fbRef=e.pathname.replace(/[^a-zA-Z0-9+\/=\-.:_]/g,"").slice(0,40)||"home"
e.isMobile=this.isMobile()
e.isIE=this.isIE()
e.moment=moment
e.translate=$.i18n.t
e.view=this
e._=_
e.document=document
e.i18n=f.i18n
e.state=this.state
e.serverConfig=window.serverConfig
e.serverSession=window.serverSession
e.features=window.features
return e}
t.prototype.afterRender=function(){return this.renderScrollbar()}
t.prototype.renderScrollbar=function(){return _.defer(function(e){return function(){if(!e.destroyed){return e.$el.find(".nano").nanoScroller()}}}(this))}
t.prototype.updateProgress=function(e){if(e>this.loadProgress.progress){this.loadProgress.progress=e}return this.updateProgressBar(e)}
t.prototype.updateProgressBar=function(e){var t,r
t=parseInt(e*100)+"%"
return(r=this.$el)!=null?r.find(".loading-container .progress-bar").css("width",t):void 0}
t.prototype.onLoaded=function(){return this.render()}
t.prototype.onResourceLoadFailed=function(e){var t,r
t=e.resource
this.stopListening(this.supermodel)
if(((r=t.jqxhr)!=null?r.status:void 0)===402){return}return this.showError(t.jqxhr)}
t.prototype.warnConnectionError=function(){var e
e=$.i18n.t("loading_error.connection_failure",{defaultValue:"Connection failed."})
return noty({text:e,layout:"center",type:"error",killer:true,timeout:3e3})}
t.prototype.onClickContactModal=function(e){var t
if(me.isStudent()){console.error("Student clicked contact modal.")
return}if(me.isTeacher()){if(application.isProduction()){return typeof window.Intercom==="function"?window.Intercom("show"):void 0}else{return alert("Teachers, Intercom widget only available in production.")}}else{t=require("views/core/ContactModal")
return this.openModalView(new t)}}
t.prototype.onClickLoadingErrorLoginButton=function(e){var t
e.stopPropagation()
t=require("views/core/AuthModal")
return this.openModalView(new t)}
t.prototype.onClickLoadingErrorCreateAccountButton=function(e){var t
e.stopPropagation()
t=require("views/core/CreateAccountModal")
return this.openModalView(new t({mode:"signup"}))}
t.prototype.onClickLoadingErrorLogoutButton=function(e){e.stopPropagation()
return a.logoutUser()}
t.lastToggleModalCall=0
t.prototype.toggleModal=function(e){var t,r,i
if($(e.currentTarget).prop("target")==="_blank"){return true}r=$(e.target)
if(r.data("toggle")!=="coco-modal"){return}if(r.attr("disabled")){return}i=r.data("target")
t=require("views/"+i)
e.stopPropagation()
return this.openModalView(new t({supermodel:this.supermodal}))}
t.prototype.openModalView=function(e,t){var r,i
if(t==null){t=false}if(v){return}if(y){v=e
if(t){return}if(y.$el.is(":visible")){return y.hide()}return this.modalClosed(y)}i=new o(e)
e.render()
if(features.codePlay){if(e.id==="create-account-modal"){return document.location.href="//lenovogamestate.com/register/?cocoId="+me.id}if(e.id==="auth-modal"){return document.location.href="//lenovogamestate.com/login/?cocoId="+me.id}}$("#modal-wrapper").removeClass("hide").empty().append(e.el)
e.afterInsert()
y=e
r={show:true,backdrop:e.closesOnClickOutside?true:"static"}
$("#modal-wrapper .modal").modal(r).on("hidden.bs.modal",this.modalClosed)
window.currentModal=e
this.getRootView().stopListeningToShortcuts(true)
Backbone.Mediator.publish("modal:opened",{})
i.record()
return e}
t.prototype.modalClosed=function(){var e
if(y){y.willDisappear()}y.destroy()
y=null
window.currentModal=null
$("#modal-wrapper").addClass("hide")
if(v){e=v
v=null
return this.openModalView(e)}else{this.getRootView().listenToShortcuts(true)
return Backbone.Mediator.publish("modal:closed",{})}}
t.prototype.showLoading=function(e){if(e==null){e=this.$el}e.find(">").addClass("hidden")
e.append(d()).i18n()
return this._lastLoading=e}
t.prototype.hideLoading=function(){if(this._lastLoading==null){return}this._lastLoading.find(".loading-screen").remove()
this._lastLoading.find(">").removeClass("hidden")
return this._lastLoading=null}
t.prototype.showError=function(e){var t
if(this._lastLoading==null){return}t={jqxhr:e,view:this,me:me}
this._lastLoading.find(".loading-screen").replaceWith(p(t))
return this._lastLoading.i18n()}
t.prototype.forumLink=function(){var e,t
t="http://discourse.codecombat.com/"
e=(me.get("preferredLanguage")||"en-US").split("-")[0]
if(e==="zh"||e==="ru"||e==="es"||e==="fr"||e==="pt"||e==="de"||e==="nl"||e==="lt"){t+="c/other-languages/"+e}return t}
t.prototype.showReadOnly=function(){var e
if(me.isAdmin()||me.isArtisan()){return}e=$.i18n.t("editor.read_only_warning2",{defaultValue:"Note: you can't save any edits here, because you're not logged in."})
return noty({text:e,layout:"center",type:"information",killer:true,timeout:5e3})}
t.prototype.enableModalInProgress=function(e){var t
t=e.find(".modal-content")
t.find("> div",e).hide()
return t.find(".wait",e).show()}
t.prototype.disableModalInProgress=function(e){var t
t=e.find(".modal-content")
t.find("> div",e).show()
return t.find(".wait",e).hide()}
t.prototype.addNewSubscription=r.prototype.addNewSubscription
t.prototype.listenToShortcuts=function(e){var t,r,i,n,o,s,a
if(!key){return}r=this.shortcuts
for(o in r){t=r[o]
t=f.normalizeFunc(t,this)
key(o,this.scope,_.bind(t,this))}if(e){i=this.subviews
n=[]
for(a in i){s=i[a]
n.push(s.listenToShortcuts())}return n}}
t.prototype.stopListeningToShortcuts=function(e){var t,r,i,n
if(!key){return}key.deleteScope(this.scope)
if(e){t=this.subviews
r=[]
for(n in t){i=t[n]
r.push(i.stopListeningToShortcuts())}return r}}
t.prototype.insertSubView=function(e,t){var r
if(t==null){t=null}r=this.makeSubViewKey(e)
if(r in this.subviews){this.subviews[r].destroy()}if(t==null){t=this.$el.find("#"+e.id)}if(this.retainSubviews){this.registerSubView(e,r)
if(t[0]){e.setElement(t[0])
e.render()
e.afterInsert()}return e}else{t.after(e.el).remove()
this.registerSubView(e,r)
e.render()
e.afterInsert()
return e}}
t.prototype.registerSubView=function(e,t){t=this.makeSubViewKey(e)
e.parent=this
e.parentKey=t
this.subviews[t]=e
return e}
t.prototype.makeSubViewKey=function(e){var t
t=e.id||e.constructor.name+l++
t=_.string.underscored(t)
return t}
t.prototype.removeSubView=function(e){e.$el.empty()
delete this.subviews[e.parentKey]
return e.destroy()}
t.prototype.highlightElement=function(e,t){var r,i,n,o,s,a,l,c
this.endHighlight()
if(t==null){t={}}if(n=t.delay){delete t.delay
return this.pointerDelayTimeout=_.delay(function(r){return function(){return r.highlightElement(e,t)}}(this),n)}r=this.getPointer()
i=$(e+":visible")
if(parseFloat(i.css("opacity"))===0){return}if(!(s=i.offset())){return}l=s.left+i.outerWidth()*.5
c=s.top+i.outerHeight()*.5
if(t.sides){if(C.call(t.sides,"left")>=0){l=s.left}if(C.call(t.sides,"right")>=0){l=s.left+i.outerWidth()}if(C.call(t.sides,"top")>=0){c=s.top}if(C.call(t.sides,"bottom")>=0){c=s.top+i.outerHeight()}}else{if(s.left>this.$el.outerWidth()*.5){l=s.left}else if(s.left+i.outerWidth()<this.$el.outerWidth()*.5){l=s.left+i.outerWidth()}if(s.top>this.$el.outerWidth()*.5){c=s.top}else if(s.top+i.outerHeight()<this.$el.outerHeight()*.5){c=s.top+i.outerHeight()}}if(t.offset){l+=t.offset.x
c+=t.offset.y}this.pointerRadialDistance=-47
this.pointerRotation=(a=t.rotation)!=null?a:Math.atan2(this.$el.outerWidth()*.5-l,c-this.$el.outerHeight()*.5)
o=Math.max(1,20-me.level())
r.css({opacity:1,transition:"none",transform:"rotate("+this.pointerRotation+"rad) translate(-3px, "+this.pointerRadialDistance+"px) scale("+o+")",top:c-50,left:l-50})
_.defer(function(e){return function(){if(e.destroyed){return}e.animatePointer()
clearInterval(e.pointerInterval)
return e.pointerInterval=setInterval(e.animatePointer,1200)}}(this))
if(t.duration){return this.pointerDurationTimeout=_.delay(function(e){return function(){if(!e.destroyed){return e.endHighlight()}}}(this),t.duration)}}
t.prototype.animatePointer=function(){var e
e=this.getPointer()
e.css({transition:"all 0.6s ease-out",transform:"rotate("+this.pointerRotation+"rad) translate(-3px, "+(this.pointerRadialDistance-50)+"px)"})
return setTimeout(function(t){return function(){return e.css({transition:"all 0.4s ease-in",transform:"rotate("+t.pointerRotation+"rad) translate(-3px, "+t.pointerRadialDistance+"px)"})}}(this),800)}
t.prototype.endHighlight=function(){this.getPointer(false).css({opacity:0,transition:"none",top:"-50px",right:"-50px"})
clearInterval(this.pointerInterval)
clearTimeout(this.pointerDelayTimeout)
clearTimeout(this.pointerDurationTimeout)
return this.pointerInterval=this.pointerDelayTimeout=this.pointerDurationTimeout=null}
t.prototype.getPointer=function(e){var t
if(e==null){e=true}if((t=$(".highlight-pointer[data-cid='"+this.cid+"']"))&&(t.length||!e)){return t}t=$("<img src='/images/level/pointer.png' class='highlight-pointer' data-cid='"+this.cid+"'>")
if(this.$el.parents("#modal-wrapper").length){t.css("z-index",1040)}$("body").append(t)
return t}
t.prototype.getQueryVariable=function(e,r){return t.getQueryVariable(e,r)}
t.getQueryVariable=function(e,t){return f.getQueryVariable(e,t)}
t.prototype.getRootView=function(){var e
e=this
while(e.parent!=null){e=e.parent}return e}
t.prototype.isMobile=function(){var e
e=navigator.userAgent||navigator.vendor||window.opera
return m.test(e)||g.test(e.substr(0,4))}
t.prototype.isIE=function(){return navigator.userAgent.indexOf("MSIE")>0||!!navigator.userAgent.match(/Trident.*rv\:11\./)}
t.prototype.isMac=function(){return navigator.platform.toUpperCase().indexOf("MAC")!==-1}
t.prototype.isIPadApp=function(){var e
if(this._isIPadApp!=null){return this._isIPadApp}return this._isIPadApp=(typeof webkit!=="undefined"&&webkit!==null?webkit.messageHandlers:void 0)!=null&&((e=navigator.userAgent)!=null?e.indexOf("iPad"):void 0)!==-1}
t.prototype.isIPadBrowser=function(){var e
return(typeof navigator!=="undefined"&&navigator!==null?(e=navigator.userAgent)!=null?e.indexOf("iPad"):void 0:void 0)!==-1}
t.prototype.isFirefox=function(){return navigator.userAgent.toLowerCase().indexOf("firefox")!==-1}
t.prototype.initSlider=function(e,t,r){var i
i=e.slider({animate:"fast"})
i.slider("value",t)
i.on("slide",r)
i.on("slidechange",r)
return i}
t.prototype.scrollToLink=function(e,t){var r
if(t==null){t=300}r=$(e).offset().top
return $("html, body").animate({scrollTop:r},t)}
t.prototype.scrollToTop=function(e){if(e==null){e=300}return $("html, body").animate({scrollTop:0},e)}
t.prototype.toggleFullscreen=function(e){var t,r,i,n
r=document.fullscreenElement||document.mozFullScreenElement||document.mozFullscreenElement||document.webkitFullscreenElement||document.msFullscreenElement
t=document.documentElement
if(!r){n=t.requestFullScreen||t.mozRequestFullScreen||t.mozRequestFullscreen||t.msRequestFullscreen||(t.webkitRequestFullscreen?function(){return t.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)}:null)
if(n!=null){n.call(t)}if(n){this.playSound("full-screen-start")}}else{i=document.exitFullscreen||document.mozCancelFullScreen||document.mozCancelFullscreen||document.msExitFullscreen||document.webkitExitFullscreen
if(i!=null){i.call(document)}if(n){this.playSound("full-screen-end")}}}
t.prototype.playSound=function(e,t){if(t==null){t=1}return Backbone.Mediator.publish("audio-player:play-sound",{trigger:e,volume:t})}
t.prototype.tryCopy=function(){var e,t,r
try{return document.execCommand("copy")}catch(t){e=t
r="Oops, unable to copy"
return noty({text:r,layout:"topCenter",type:"error",killer:false})}}
t.prototype.wait=function(e){return new Promise(function(t){return function(r){return t.once(e,r)}}(this))}
t.prototype.onClickTranslatedElement=function(e){var t,r,i,n,o,s,a,l,c,u,p,d,h,m,g,f
if(!((key.ctrl||key.command)&&key.alt)){return}e.preventDefault()
e.stopImmediatePropagation()
p=_.last($(e.currentTarget).data("i18n").split(";")).replace(/\[.*?\]/,"")
t=$.i18n.t(p,{lng:"en"})
f=$.i18n.t(p)
n=require("locale/en")
h=p.split("."),i=h[0],r=h[1]
d=2
c=false
m=n.translation
for(a in m){o=m[a]
for(s in o){l=o[s];++d
if(i===a&&r===s){c=true
break}}if(c){break}d+=2}if(!c){return console.log("Couldn't find "+p+" in app/locale/en.coffee.")}g=me.get("preferredLanguage")||"en"
if(g.split("-")[0]==="en"){g="en"}u="https://github.com/codecombat/codecombat/blob/master/app/locale/"+g+".coffee#L"+d
return window.open(u,{target:"_blank"})}
return t}(Backbone.View)
m=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i
g=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
t.exports=i})
require.register("views/core/ConfirmModal",function(e,require,t){var r,i,n,o=function(e,t){for(var r in t){if(s.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},s={}.hasOwnProperty
i=require("./ModalView")
n=require("templates/core/confirm-modal")
t.exports=r=function(e){o(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.id="confirm-modal"
t.prototype.template=n
t.prototype.closeButton=true
t.prototype.closeOnConfirm=true
t.prototype.events={"click #decline-button":"onClickDecline","click #confirm-button":"onClickConfirm"}
t.prototype.initialize=function(e){return _.assign(this,_.pick(e,"title","body","decline","confirm","closeOnConfirm","closeButton"))}
t.prototype.onClickDecline=function(){return this.trigger("decline")}
t.prototype.onClickConfirm=function(){return this.trigger("confirm")}
return t}(i)})
require.register("views/core/ContactModal",function(e,require,t){var r,i,n,o,s,a,l=function(e,t){for(var r in t){if(c.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},c={}.hasOwnProperty
i=require("views/core/ModalView")
a=require("templates/core/contact")
o=require("core/forms")
s=require("core/contact").sendContactMessage
n={additionalProperties:false,required:["email","message"],properties:{email:{type:"string",maxLength:100,minLength:1,format:"email"},message:{type:"string",minLength:1}}}
t.exports=r=function(e){l(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.id="contact-modal"
t.prototype.template=a
t.prototype.closeButton=true
t.prototype.events={"click #contact-submit-button":"contact"}
t.prototype.contact=function(){var e,t,r
this.playSound("menu-button-click")
o.clearFormAlerts(this.$el)
e=o.formToObject(this.$el)
r=tv4.validateMultiple(e,n)
if(!r.valid){return o.applyErrorsToForm(this.$el,r.errors)}this.populateBrowserData(e)
e=_.merge(e,this.options)
e.country=me.get("country")
if((t=window.tracker)!=null){t.trackEvent("Sent Feedback",{message:e})}s(e,this.$el)
return $.post("/db/user/"+me.id+"/track/contact_codecombat")}
t.prototype.populateBrowserData=function(e){var t,r
if($.browser){e.browser=$.browser.platform+" "+$.browser.name+" "+$.browser.versionNumber}e.screenSize=((t=typeof screen!=="undefined"&&screen!==null?screen.width:void 0)!=null?t:$(window).width())+" x "+((r=typeof screen!=="undefined"&&screen!==null?screen.height:void 0)!=null?r:$(window).height())
return e.screenshotURL=this.screenshotURL}
t.prototype.updateScreenshot=function(){var e
if(!this.screenshotURL){return}e=this.$el.find("#contact-screenshot").removeClass("secret")
e.find("a").prop("href",this.screenshotURL.replace("http://codecombat.com/","/"))
return e.find("img").prop("src",this.screenshotURL.replace("http://codecombat.com/","/"))}
return t}(i)})
require.register("views/core/CreateAccountModal/BasicInfoView",function(e,require,t){var r,i,n,o,s,a,l,c,u=function(e,t){for(var r in t){if(p.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},p={}.hasOwnProperty
n=require("views/core/CocoView")
r=require("views/core/AuthModal")
c=require("templates/core/create-account-modal/basic-info-view")
l=require("core/forms")
a=require("core/errors")
s=require("models/User")
o=require("models/State")
t.exports=i=function(e){u(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.id="basic-info-view"
t.prototype.template=c
t.prototype.events={'change input[name="email"]':"onChangeEmail",'change input[name="name"]':"onChangeName",'change input[name="password"]':"onChangePassword","click .back-button":"onClickBackButton","submit form":"onSubmitForm","click .use-suggested-name-link":"onClickUseSuggestedNameLink","click #facebook-signup-btn":"onClickSsoSignupButton","click #gplus-signup-btn":"onClickSsoSignupButton"}
t.prototype.initialize=function(e){this.signupState=(e!=null?e:{}).signupState
this.state=new o({suggestedNameText:"...",checkEmailState:"standby",checkEmailValue:null,checkEmailPromise:null,checkNameState:"standby",checkNameValue:null,checkNamePromise:null,error:""})
this.listenTo(this.state,"change:checkEmailState",function(){return this.renderSelectors(".email-check")})
this.listenTo(this.state,"change:checkNameState",function(){return this.renderSelectors(".name-check")})
this.listenTo(this.state,"change:error",function(){return this.renderSelectors(".error-area")})
this.listenTo(this.signupState,"change:facebookEnabled",function(){return this.renderSelectors(".auth-network-logins")})
return this.listenTo(this.signupState,"change:gplusEnabled",function(){return this.renderSelectors(".auth-network-logins")})}
t.prototype.updateAuthModalInitialValues=function(e){return this.signupState.set({authModalInitialValues:_.merge(this.signupState.get("authModalInitialValues"),e)},{silent:true})}
t.prototype.onChangeEmail=function(e){this.updateAuthModalInitialValues({email:this.$(e.currentTarget).val()})
return this.checkEmail()}
t.prototype.checkEmail=function(){var e
e=this.$('[name="email"]').val()
if(this.signupState.get("path")!=="student"&&(!_.isEmpty(e)&&e===this.state.get("checkEmailValue"))){return this.state.get("checkEmailPromise")}if(!(e&&l.validateEmail(e))){this.state.set({checkEmailState:"standby",checkEmailValue:e,checkEmailPromise:null})
return Promise.resolve()}this.state.set({checkEmailState:"checking",checkEmailValue:e,checkEmailPromise:s.checkEmailExists(e).then(function(t){return function(r){var i
i=r.exists
if(e!==t.$('[name="email"]').val()){return}if(i){return t.state.set("checkEmailState","exists")}else{return t.state.set("checkEmailState","available")}}}(this))["catch"](function(e){return function(t){e.state.set("checkEmailState","standby")
throw t}}(this))})
return this.state.get("checkEmailPromise")}
t.prototype.onChangeName=function(e){var t
this.updateAuthModalInitialValues({name:this.$(e.currentTarget).val()})
t=l.formToObject(this.$el.find("#basic-info-form")).name
this.$el.find('[for="username-input"] ~ .help-block.error-help-block').remove()
this.$el.find('[for="username-input"]').closest(".form-group").removeClass("has-error")
if(t&&l.validateEmail(t)){l.setErrorToProperty(this.$el,"name",$.i18n.t("signup.name_is_email"))
return}return this.checkName()}
t.prototype.checkName=function(){var e
e=this.$('input[name="name"]').val()
if(e===this.state.get("checkNameValue")){return this.state.get("checkNamePromise")}if(!e){this.state.set({checkNameState:"standby",checkNameValue:e,checkNamePromise:null})
return Promise.resolve()}this.state.set({checkNameState:"checking",checkNameValue:e,checkNamePromise:s.checkNameConflicts(e).then(function(t){return function(r){var i,n,o
n=r.suggestedName,i=r.conflicts
if(e!==t.$('input[name="name"]').val()){return}if(i){o=$.i18n.t("signup.name_taken").replace("{{suggestedName}}",n)
return t.state.set({checkNameState:"exists",suggestedNameText:o})}else{return t.state.set({checkNameState:"available"})}}}(this))["catch"](function(e){return function(t){e.state.set("checkNameState","standby")
throw t}}(this))})
return this.state.get("checkNamePromise")}
t.prototype.onChangePassword=function(e){return this.updateAuthModalInitialValues({password:this.$(e.currentTarget).val()})}
t.prototype.checkBasicInfo=function(e){var t
tv4.addFormat({email:function(e){if(l.validateEmail(e)){return null}else{return{code:tv4.errorCodes.FORMAT_CUSTOM,message:"Please enter a valid email address."}}}})
l.clearFormAlerts(this.$el)
if(e.name&&l.validateEmail(e.name)){l.setErrorToProperty(this.$el,"name",$.i18n.t("signup.name_is_email"))
return false}t=tv4.validateMultiple(e,this.formSchema())
if(!t.valid){l.applyErrorsToForm(this.$("form"),t.errors)}return t.valid}
t.prototype.formSchema=function(){return{type:"object",properties:{email:s.schema.properties.email,name:s.schema.properties.name,password:s.schema.properties.password},required:function(){switch(this.signupState.get("path")){case"student":return["name","password","firstName","lastName"]
case"teacher":return["name","password","email","firstName","lastName"]
default:return["name","password","email"]}}.call(this)}}
t.prototype.onClickBackButton=function(){var e,t,r
if(this.signupState.get("path")==="teacher"){if((e=window.tracker)!=null){e.trackEvent("CreateAccountModal Teacher BasicInfoView Back Clicked",{category:"Teachers"})}}if(this.signupState.get("path")==="student"){if((t=window.tracker)!=null){t.trackEvent("CreateAccountModal Student BasicInfoView Back Clicked",{category:"Students"})}}if(this.signupState.get("path")==="individual"){if((r=window.tracker)!=null){r.trackEvent("CreateAccountModal Individual BasicInfoView Back Clicked",{category:"Individuals"})}}return this.trigger("nav-back")}
t.prototype.onClickUseSuggestedNameLink=function(e){this.$('input[name="name"]').val(this.state.get("suggestedName"))
return l.clearFormAlerts(this.$el.find('input[name="name"]').closest(".form-group").parent())}
t.prototype.onSubmitForm=function(e){var t,r,i,n,o,s
if(this.signupState.get("path")==="teacher"){if((i=window.tracker)!=null){i.trackEvent("CreateAccountModal Teacher BasicInfoView Submit Clicked",{category:"Teachers"})}}if(this.signupState.get("path")==="student"){if((n=window.tracker)!=null){n.trackEvent("CreateAccountModal Student BasicInfoView Submit Clicked",{category:"Students"})}}if(this.signupState.get("path")==="individual"){if((o=window.tracker)!=null){o.trackEvent("CreateAccountModal Individual BasicInfoView Submit Clicked",{category:"Individuals"})}}this.state.unset("error")
e.preventDefault()
r=l.formToObject(e.currentTarget)
s=this.checkBasicInfo(r)
if(!s){return}this.displayFormSubmitting()
t=new Error
return this.checkEmail().then(this.checkName()).then(function(e){return function(){var i,n,o
if(!(((o=e.state.get("checkEmailState"))==="available"||o==="standby")&&e.state.get("checkNameState")==="available")){throw t}i=_.assign({},me.get("emails"))
if(i.generalNews==null){i.generalNews={}}i.generalNews.enabled=e.$("#subscribe-input").is(":checked")&&!_.isEmpty(e.state.get("checkEmailValue"))
me.set("emails",i)
me.set(_.pick(r,"firstName","lastName"))
if(!_.isNaN(e.signupState.get("birthday").getTime())){me.set("birthday",e.signupState.get("birthday").toISOString())}me.set(_.omit(e.signupState.get("ssoAttrs")||{},"email","facebookID","gplusID"))
n=me.save()
if(!n){console.error(me.validationError)
throw new Error("Could not save user")}return new Promise(n.then)}}(this)).then(function(e){return function(){var t,r,i,n,o,s,a,c,u,p
if(e.signupState.get("path")==="teacher"){e.signupState.set({signupForm:_.pick(l.formToObject(e.$el),"firstName","lastName","email","name","password","subscribe")})
e.trigger("signup")
return}if((a=window.tracker)!=null){a.identify()}switch(e.signupState.get("ssoUsed")){case"gplus":c=e.signupState.get("ssoAttrs"),t=c.email,i=c.gplusID
o=l.formToObject(e.$el).name
n=me.signupWithGPlus(o,t,i)
break
case"facebook":u=e.signupState.get("ssoAttrs"),t=u.email,r=u.facebookID
o=l.formToObject(e.$el).name
n=me.signupWithFacebook(o,t,r)
break
default:p=l.formToObject(e.$el),o=p.name,t=p.email,s=p.password
n=me.signupWithPassword(o,t,s)}return new Promise(n.then)}}(this)).then(function(e){return function(){var t,r,i
i=e.signupState.attributes,t=i.classCode,r=i.classroom
if(t&&r){return new Promise(r.joinWithCode(t).then)}}}(this)).then(function(e){return function(){return e.finishSignup()}}(this))["catch"](function(e){return function(r){var i
e.displayFormStandingBy()
if(r===t){}else{console.error("BasicInfoView form submission Promise error:",r)
return e.state.set("error",((i=r.responseJSON)!=null?i.message:void 0)||"Unknown Error")}}}(this))}
t.prototype.finishSignup=function(){var e,t,r
if(this.signupState.get("path")==="teacher"){if((e=window.tracker)!=null){e.trackEvent("CreateAccountModal Teacher BasicInfoView Submit Success",{category:"Teachers"})}}if(this.signupState.get("path")==="student"){if((t=window.tracker)!=null){t.trackEvent("CreateAccountModal Student BasicInfoView Submit Success",{category:"Students"})}}if(this.signupState.get("path")==="individual"){if((r=window.tracker)!=null){r.trackEvent("CreateAccountModal Individual BasicInfoView Submit Success",{category:"Individuals"})}}return this.trigger("signup")}
t.prototype.displayFormSubmitting=function(){this.$("#create-account-btn").text($.i18n.t("signup.creating")).attr("disabled",true)
return this.$("input").attr("disabled",true)}
t.prototype.displayFormStandingBy=function(){this.$("#create-account-btn").text($.i18n.t("login.sign_up")).attr("disabled",false)
return this.$("input").attr("disabled",false)}
t.prototype.onClickSsoSignupButton=function(e){var t,r
e.preventDefault()
r=$(e.currentTarget).data("sso-used")
t=r==="facebook"?application.facebookHandler:application.gplusHandler
return t.connect({context:this,success:function(){return t.loadPerson({context:this,success:function(e){var t
this.signupState.set({ssoAttrs:e})
t=e.email
return s.checkEmailExists(t).then(function(t){return function(i){var n
n=i.exists
t.signupState.set({ssoUsed:r,email:e.email})
if(n){return t.trigger("sso-connect:already-in-use")}else{return t.trigger("sso-connect:new-user")}}}(this))}})}})}
return t}(n)})
require.register("views/core/CreateAccountModal/ChooseAccountTypeView",function(e,require,t){var r,i,n,o=function(e,t){for(var r in t){if(s.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},s={}.hasOwnProperty
i=require("views/core/CocoView")
n=require("templates/core/create-account-modal/choose-account-type-view")
t.exports=r=function(e){o(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.id="choose-account-type-view"
t.prototype.template=n
t.prototype.events={"click .teacher-path-button":function(){return this.trigger("choose-path","teacher")},"click .student-path-button":function(){return this.trigger("choose-path","student")},"click .individual-path-button":function(){return this.trigger("choose-path","individual")}}
return t}(i)})
require.register("views/core/CreateAccountModal/ConfirmationView",function(e,require,t){var r,i,n,o,s,a=function(e,t){for(var r in t){if(l.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},l={}.hasOwnProperty
r=require("views/core/CocoView")
n=require("models/State")
s=require("templates/core/create-account-modal/confirmation-view")
o=require("core/forms")
t.exports=i=function(e){a(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.id="confirmation-view"
t.prototype.template=s
t.prototype.events={"click #start-btn":"onClickStartButton"}
t.prototype.initialize=function(e){this.signupState=(e!=null?e:{}).signupState}
t.prototype.onClickStartButton=function(){var e
e=this.signupState.get("classroom")
if(this.signupState.get("path")==="student"){application.router.navigate("/",{replace:true})
application.router.navigate("/students")}else{application.router.navigate("/play")}return document.location.reload()}
return t}(r)})
require.register("views/core/CreateAccountModal/CoppaDenyView",function(e,require,t){var r,i,n,o,s,a,l=function(e,t){for(var r in t){if(c.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},c={}.hasOwnProperty
r=require("views/core/CocoView")
n=require("models/State")
a=require("templates/core/create-account-modal/coppa-deny-view")
s=require("core/forms")
o=require("core/contact")
t.exports=i=function(e){l(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.id="coppa-deny-view"
t.prototype.template=a
t.prototype.events={"click .send-parent-email-button":"onClickSendParentEmailButton",'change input[name="parentEmail"]':"onChangeParentEmail","click .back-btn":"onClickBackButton"}
t.prototype.initialize=function(e){this.signupState=(e!=null?e:{}).signupState
this.state=new n({parentEmail:""})
return this.listenTo(this.state,"all",_.debounce(this.render))}
t.prototype.onChangeParentEmail=function(e){var t
t=$(e.currentTarget).val()
this.state.set({parentEmail:t},{silent:true})
if(/team@codecombat.com/i.test(t)){return this.state.set({dontUseOurEmailSilly:true})}else{return this.state.set({dontUseOurEmailSilly:false,silent:true})}}
t.prototype.onClickSendParentEmailButton=function(e){var t
e.preventDefault()
this.state.set({parentEmailSending:true})
if((t=window.tracker)!=null){t.trackEvent("CreateAccountModal Student CoppaDenyView Send Clicked",{category:"Students"})}return o.sendParentSignupInstructions(this.state.get("parentEmail")).then(function(e){return function(){return e.state.set({error:false,parentEmailSent:true,parentEmailSending:false})}}(this))["catch"](function(e){return function(){return e.state.set({error:true,parentEmailSent:false,parentEmailSending:false})}}(this))}
t.prototype.onClickBackButton=function(){var e
if(this.signupState.get("path")==="student"){if((e=window.tracker)!=null){e.trackEvent("CreateAccountModal Student CoppaDenyView Back Clicked",{category:"Students"})}}return this.trigger("nav-back")}
return t}(r)})
require.register("views/core/CreateAccountModal/CreateAccountModal",function(e,require,t){var r,i,n,o,s,a,l,c,u,p,d,h,m,g,f,y,v,b,w,k,S,C,x=function(e,t){for(var r in t){if(j.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},j={}.hasOwnProperty
c=require("views/core/ModalView")
r=require("views/core/AuthModal")
n=require("./ChooseAccountTypeView")
u=require("./SegmentCheckView")
s=require("./CoppaDenyView")
i=require("./BasicInfoView")
p=require("./SingleSignOnAlreadyExistsView")
d=require("./SingleSignOnConfirmView")
l=require("./ExtrasView")
o=require("./ConfirmationView")
m=require("./teacher/TeacherSignupComponent")
g=require("./teacher/TeacherSignupStoreModule")
h=require("models/State")
S=require("templates/core/create-account-modal/create-account-modal")
b=require("core/forms")
f=require("models/User")
y=require("core/application")
v=require("core/errors")
C=require("core/utils")
k=require("core/store")
w=require("core/storage")
t.exports=a=function(e){x(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.id="create-account-modal"
t.prototype.template=S
t.prototype.closesOnClickOutside=false
t.prototype.retainSubviews=true
t.prototype.events={"click .login-link":"onClickLoginLink"}
t.prototype.initialize=function(e){var t,r
if(e==null){e={}}t=C.getQueryVariable("_cc",void 0)
this.signupState=new h({path:t?"student":null,screen:t?"segment-check":"choose-account-type",ssoUsed:null,classroom:null,facebookEnabled:y.facebookHandler.apiLoaded,gplusEnabled:y.gplusHandler.apiLoaded,classCode:t,birthday:new Date(""),authModalInitialValues:{},accountCreated:false,signupForm:{subscribe:["on"]}})
r=e.startOnPath
if(r==="student"){this.signupState.set({path:"student",screen:"segment-check"})}if(r==="individual"){this.signupState.set({path:"individual",screen:"segment-check"})}if(r==="teacher"){this.signupState.set({path:"teacher",screen:"basic-info"})}this.listenTo(this.signupState,"all",_.debounce(this.render))
this.listenTo(this.insertSubView(new n),{"choose-path":function(e){var t,r,i
if(e==="teacher"){if((t=window.tracker)!=null){t.trackEvent("Teachers Create Account Loaded",{category:"Teachers"})}return this.signupState.set({path:e,screen:"basic-info"})}else{if(e==="student"){if((r=window.tracker)!=null){r.trackEvent("CreateAccountModal Student Path Clicked",{category:"Students"})}}if(e==="individual"){if((i=window.tracker)!=null){i.trackEvent("CreateAccountModal Individual Path Clicked",{category:"Individuals"})}}return this.signupState.set({path:e,screen:"segment-check"})}}})
this.listenTo(this.insertSubView(new u({signupState:this.signupState})),{"choose-path":function(e){return this.signupState.set({path:e,screen:"segment-check"})},"nav-back":function(){return this.signupState.set({path:null,screen:"choose-account-type"})},"nav-forward":function(e){return this.signupState.set({screen:e||"basic-info"})}})
this.listenTo(this.insertSubView(new s({signupState:this.signupState})),{"nav-back":function(){return this.signupState.set({screen:"segment-check"})}})
this.listenTo(this.insertSubView(new i({signupState:this.signupState})),{"sso-connect:already-in-use":function(){return this.signupState.set({screen:"sso-already-exists"})},"sso-connect:new-user":function(){return this.signupState.set({screen:"sso-confirm"})},"nav-back":function(){if(this.signupState.get("path")==="teacher"){return this.signupState.set({screen:"choose-account-type"})}else{return this.signupState.set({screen:"segment-check"})}},signup:function(){if(this.signupState.get("path")==="student"){return this.signupState.set({screen:"extras",accountCreated:true})}else if(this.signupState.get("path")==="teacher"){k.commit("modal/updateSso",_.pick(this.signupState.attributes,"ssoUsed","ssoAttrs"))
k.commit("modal/updateSignupForm",this.signupState.get("signupForm"))
k.commit("modal/updateTrialRequestProperties",_.pick(this.signupState.get("signupForm"),"firstName","lastName"))
if(w.load("referredBySunburst")){k.commit("modal/updateTrialRequestProperties",{marketingReferrer:"sunburst"})}return this.signupState.set({screen:"teacher-signup-component"})}else{return this.signupState.set({screen:"confirmation",accountCreated:true})}}})
this.listenTo(this.insertSubView(new p({signupState:this.signupState})),{"nav-back":function(){return this.signupState.set({screen:"basic-info"})}})
this.listenTo(this.insertSubView(new d({signupState:this.signupState})),{"nav-back":function(){return this.signupState.set({screen:"basic-info"})},signup:function(){if(this.signupState.get("path")==="student"){return this.signupState.set({screen:"extras",accountCreated:true})}else if(this.signupState.get("path")==="teacher"){k.commit("modal/updateSso",_.pick(this.signupState.attributes,"ssoUsed","ssoAttrs"))
k.commit("modal/updateSignupForm",this.signupState.get("signupForm"))
return this.signupState.set({screen:"teacher-signup-component"})}else{return this.signupState.set({screen:"confirmation",accountCreated:true})}}})
this.listenTo(this.insertSubView(new l({signupState:this.signupState})),{"nav-forward":function(){return this.signupState.set({screen:"confirmation"})}})
this.insertSubView(new o({signupState:this.signupState}))
y.facebookHandler.loadAPI({success:function(e){return function(){if(!e.destroyed){return e.signupState.set({facebookEnabled:true})}}}(this)})
y.gplusHandler.loadAPI({success:function(e){return function(){if(!e.destroyed){return e.signupState.set({gplusEnabled:true})}}}(this)})
this.once("hidden",function(){if(this.signupState.get("accountCreated")&&!y.testing){if(me.isStudent()){y.router.navigate("/students",{trigger:true})}else if(me.isTeacher()){y.router.navigate("/teachers/classes",{trigger:true})}return window.location.reload()}})
return k.registerModule("modal",g)}
t.prototype.afterRender=function(){var e
e=this.$el.find("#teacher-signup-component")
if(!e[0]){return}if(this.teacherSignupComponent){return e.replaceWith(this.teacherSignupComponent.$el)}else{this.teacherSignupComponent=new m({el:e[0],store:k})
return this.teacherSignupComponent.$on("back",function(e){return function(){if(e.signupState.get("ssoUsed")){return e.signupState.set("screen","sso-confirm")}else{return e.signupState.set("screen","basic-info")}}}(this))}}
t.prototype.destroy=function(){if(this.teacherSignupComponent){this.teacherSignupComponent.$destroy()}try{return k.unregisterModule("modal")}catch(e){}}
t.prototype.onClickLoginLink=function(){return this.openModalView(new r({initialValues:this.signupState.get("authModalInitialValues")}))}
return t}(c)})
require.register("views/core/CreateAccountModal/ExtrasView",function(e,require,t){var r,i,n,o,s,a=function(e,t){for(var r in t){if(l.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},l={}.hasOwnProperty
r=require("views/core/CocoView")
n=require("views/core/HeroSelectView")
s=require("templates/core/create-account-modal/extras-view")
o=require("models/State")
t.exports=i=function(e){a(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.id="extras-view"
t.prototype.template=s
t.prototype.retainSubviews=true
t.prototype.events={"click .next-button":function(){var e
if(this.signupState.get("path")==="student"){if((e=window.tracker)!=null){e.trackEvent("CreateAccountModal Student ExtrasView Next Clicked",{category:"Students"})}}return this.trigger("nav-forward")}}
t.prototype.initialize=function(e){this.signupState=(e!=null?e:{}).signupState
return this.insertSubView(new n({showCurrentHero:false,createAccount:true}))}
return t}(r)})
require.register("views/core/CreateAccountModal/SegmentCheckView",function(e,require,t){var r,i,n,o,s,a,l=function(e,t){for(var r in t){if(c.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},c={}.hasOwnProperty
i=require("views/core/CocoView")
a=require("templates/core/create-account-modal/segment-check-view")
s=require("core/forms")
r=require("models/Classroom")
o=require("models/State")
t.exports=n=function(e){l(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.id="segment-check-view"
t.prototype.template=a
t.prototype.events={"click .back-to-account-type":function(){return this.trigger("nav-back")},"input .class-code-input":"onInputClassCode","change .birthday-form-group":"onInputBirthday","submit form.segment-check":"onSubmitSegmentCheck","click .individual-path-button":function(){return this.trigger("choose-path","individual")}}
t.prototype.initialize=function(e){this.signupState=(e!=null?e:{}).signupState
this.checkClassCodeDebounced=_.debounce(this.checkClassCode,1e3)
this.fetchClassByCode=_.memoize(this.fetchClassByCode)
this.classroom=new r
this.state=new o
if(this.signupState.get("classCode")){this.checkClassCode(this.signupState.get("classCode"))}return this.listenTo(this.state,"all",_.debounce(function(){this.renderSelectors(".render")
return this.trigger("special-render")}))}
t.prototype.getClassCode=function(){return this.$(".class-code-input").val()||this.signupState.get("classCode")}
t.prototype.onInputClassCode=function(){var e
this.classroom=new r
s.clearFormAlerts(this.$el)
e=this.getClassCode()
this.signupState.set({classCode:e},{silent:true})
return this.checkClassCodeDebounced()}
t.prototype.checkClassCode=function(){var e
if(this.destroyed){return}e=this.getClassCode()
return this.fetchClassByCode(e).then(function(t){return function(i){if(t.destroyed||t.getClassCode()!==e){return}if(i){t.classroom=i
return t.state.set({classCodeValid:true,segmentCheckValid:true})}else{t.classroom=new r
return t.state.set({classCodeValid:false,segmentCheckValid:false})}}}(this))["catch"](function(e){throw e})}
t.prototype.onInputBirthday=function(){var e,t,r,i,n
n=s.formToObject(this.$("form")),i=n.birthdayYear,r=n.birthdayMonth,t=n.birthdayDay
e=new Date(Date.UTC(i,r-1,t))
this.signupState.set({birthdayYear:i,birthdayMonth:r,birthdayDay:t,birthday:e},{silent:true})
if(!_.isNaN(e.getTime())){return s.clearFormAlerts(this.$el)}}
t.prototype.onSubmitSegmentCheck=function(e){var t,i
e.preventDefault()
if(this.signupState.get("path")==="student"){this.$(".class-code-input").attr("disabled",true)
return this.fetchClassByCode(this.getClassCode()).then(function(e){return function(t){if(e.destroyed){return}if(t){e.signupState.set({classroom:t})
return e.trigger("nav-forward")}else{e.$(".class-code-input").attr("disabled",false)
e.classroom=new r
return e.state.set({classCodeValid:false,segmentCheckValid:false})}}}(this))["catch"](function(e){throw e})}else if(this.signupState.get("path")==="individual"){if(_.isNaN(this.signupState.get("birthday").getTime())){s.clearFormAlerts(this.$el)
i=_.string.titleize($.i18n.t("common.required_field"))
return s.setErrorToProperty(this.$el,"birthdayDay",i)}else{t=((new Date).getTime()-this.signupState.get("birthday").getTime())/365.4/24/60/60/1e3
if(t>13){return this.trigger("nav-forward")}else{return this.trigger("nav-forward","coppa-deny")}}}}
t.prototype.fetchClassByCode=function(e){if(!e){return Promise.resolve()}return new Promise(function(t,i){return(new r).fetchByCode(e,{success:t,error:function(e,r){if(r.status===404){return t()}else{return i(r.responseJSON)}}})})}
return t}(i)})
require.register("views/core/CreateAccountModal/SingleSignOnAlreadyExistsView",function(e,require,t){var r,i,n,o,s,a=function(e,t){for(var r in t){if(l.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},l={}.hasOwnProperty
r=require("views/core/CocoView")
s=require("templates/core/create-account-modal/single-sign-on-already-exists-view")
o=require("core/forms")
n=require("models/User")
t.exports=i=function(e){a(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.id="single-sign-on-already-exists-view"
t.prototype.template=s
t.prototype.events={"click .back-button":"onClickBackButton"}
t.prototype.initialize=function(e){this.signupState=e.signupState}
t.prototype.onClickBackButton=function(){this.signupState.set({ssoUsed:void 0,ssoAttrs:void 0})
return this.trigger("nav-back")}
return t}(r)})
require.register("views/core/CreateAccountModal/SingleSignOnConfirmView",function(e,require,t){var r,i,n,o,s,a,l=function(e,t){for(var r in t){if(c.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},c={}.hasOwnProperty
i=require("views/core/CocoView")
r=require("views/core/CreateAccountModal/BasicInfoView")
a=require("templates/core/create-account-modal/single-sign-on-confirm-view")
s=require("core/forms")
o=require("models/User")
t.exports=n=function(e){l(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.id="single-sign-on-confirm-view"
t.prototype.template=a
t.prototype.events=_.extend({},r.prototype.events,{"click .back-button":"onClickBackButton"})
t.prototype.initialize=function(e){this.signupState=(e!=null?e:{}).signupState
return t.__super__.initialize.apply(this,arguments)}
t.prototype.onClickBackButton=function(){this.signupState.set({ssoUsed:void 0,ssoAttrs:void 0})
return this.trigger("nav-back")}
t.prototype.formSchema=function(){return{type:"object",properties:{name:o.schema.properties.name},required:["name"]}}
return t}(r)})
require.register("views/core/CreateAccountModal/index",function(e,require,t){t.exports=require("views/core/CreateAccountModal/CreateAccountModal")})
require.register("views/core/CreateAccountModal/teacher/DemographicsPanel",function(e,require,t){var r
r=Vue.extend({name:"demographics-panel",template:require("templates/core/create-account-modal/demographics-panel")(),data:function(){var e
e=_.pick(this.$store.state.modal.trialRequestProperties,["numStudents","numStudentsTotal","notes","referrer","educationLevel","otherEducationLevel","otherEducationLevelExplanation"])
return _.assign(e,{showRequired:false})},computed:{educationLevelComplete:function(){if(this.otherEducationLevel&&!this.otherEducationLevelExplanation){return false}return this.educationLevel.length||this.otherEducationLevel}},methods:{clickContinue:function(){var e,t,r
if((e=window.tracker)!=null){e.trackEvent("CreateAccountModal Teacher DemographicsPanel Signup Clicked",{category:"Teachers"})}r=_.pick(this,"numStudents","numStudentsTotal","educationLevelComplete")
if(!_.all(r)){this.showRequired=true
return}this.commitValues()
if((t=window.tracker)!=null){t.trackEvent("CreateAccountModal Teacher DemographicsPanel Signup Success",{category:"Teachers"})}return this.$emit("continue")},commitValues:function(){var e
e=_.pick(this,"numStudents","numStudentsTotal","notes","referrer","educationLevel","otherEducationLevel","otherEducationLevelExplanation")
return this.$store.commit("modal/updateTrialRequestProperties",e)},clickBack:function(){var e
this.commitValues()
if((e=window.tracker)!=null){e.trackEvent("CreateAccountModal Teacher DemographicsPanel Back Clicked",{category:"Teachers"})}return this.$emit("back")}},mounted:function(){return this.$refs.focus.focus()}})
t.exports=r})
require.register("views/core/CreateAccountModal/teacher/NcesSearchInput",function(e,require,t){var r,i,n,o
o=require("core/services/algolia")
r=["district","district_id","district_schools","district_students"]
n=r.concat(["id","name","students","phone"])
i=Vue.extend({name:"nces-search-input",template:require("templates/core/create-account-modal/nces-search-input")(),data:function(){return{mouseOnSuggestion:false,suggestions:[],suggestionIndex:0,filledSuggestion:"",value:this.initialValue}},props:{displayKey:{type:String,default:""},initialValue:{type:String,default:""},name:{type:String,default:""},showRequired:{type:Boolean,default:false},label:{type:String}},methods:{onInput:function(e){var t
t=$(e.currentTarget).val()
this.$emit("updateValue",this.name,t)
return this.searchNces(t)},searchNces:function(e){this.suggestions=[]
this.filledSuggestion=""
return o.schoolsIndex.search(e,{hitsPerPage:5,aroundLatLngViaIP:false}).then(function(t){return function(r){var i
i=r.hits
if(t.value!==e){return}t.suggestions=i
return t.suggestionIndex=0}}(this))},navSearchUp:function(){return this.suggestionIndex=Math.max(0,this.suggestionIndex-1)},navSearchDown:function(){return this.suggestionIndex=Math.min(this.suggestions.length,this.suggestionIndex+1)},navSearchChoose:function(){var e
e=this.suggestions[this.suggestionIndex]
if(!e){return}this.navSearchClear()
return this.$emit("navSearchChoose",this.displayKey,e)},onBlur:function(){return this.navSearchClear()},navSearchClear:function(){return this.suggestions=[]},suggestionHover:function(e){return this.suggestionIndex=e}},watch:{initialValue:function(e){this.value=e}},mounted:function(){return this.$refs.focus.focus()}})
t.exports=i})
require.register("views/core/CreateAccountModal/teacher/SchoolInfoPanel",function(e,require,t){var r,i,n,o,s
i=require("./NcesSearchInput")
s=require("core/services/algolia")
r=["district","district_id","district_schools","district_students"]
n=r.concat(["id","name","students","phone"])
o={name:"school-info-panel",template:require("templates/core/create-account-modal/school-info-panel")(),data:function(){var e,t,r
r=_.zipObject(function(){var e,r,i
i=[]
for(e=0,r=n.length;e<r;e++){t=n[e]
i.push(["nces_"+t,""])}return i}())
e=_.pick(this.$store.state.modal.trialRequestProperties,function(){var e,r,i
i=[]
for(e=0,r=n.length;e<r;e++){t=n[e]
i.push("nces_"+t)}return i}().concat(["organization","district","city","state","country"]))
return _.assign(r,e,{showRequired:false})},components:{"nces-search-input":i},methods:{updateValue:function(e,t){this[e]=t
if(e==="organization"){this.clearSchoolNcesValues()}if(e==="district"){this.clearSchoolNcesValues()
return this.clearDistrictNcesValues()}},clearDistrictNcesValues:function(){var e,t,i,n
n=[]
for(e=0,i=r.length;e<i;e++){t=r[e]
n.push(this["nces_"+t]="")}return n},clearSchoolNcesValues:function(){var e,t,i,o,s
o=_.difference(n,r)
s=[]
for(e=0,i=o.length;e<i;e++){t=o[e]
s.push(this["nces_"+t]="")}return s},applySuggestion:function(e,t){var i,o,s,a,l
if(!t){return}_.assign(this,_.pick(t,"district","city","state"))
if(e==="name"){this.organization=t.name}this.country="USA"
this.clearSchoolNcesValues()
this.clearDistrictNcesValues()
i=e==="name"?n:r
l=[]
for(o=0,a=i.length;o<a;o++){s=i[o]
l.push(this["nces_"+s]=t[s])}return l},commitValues:function(){var e,t,r,i,o
e=_.pick(this,"organization","district","city","state","country")
for(t=0,i=n.length;t<i;t++){r=n[t]
o="nces_"+r
e[o]=this[o].toString()}return this.$store.commit("modal/updateTrialRequestProperties",e)},clickContinue:function(){var e,t,r
if((e=window.tracker)!=null){e.trackEvent("CreateAccountModal Teacher SchoolInfoPanel Continue Clicked",{category:"Teachers"})}r=_.pick(this,"district","city","state","country")
if(!_.all(r)){this.showRequired=true
return}this.commitValues()
if((t=window.tracker)!=null){t.trackEvent("CreateAccountModal Teacher SchoolInfoPanel Continue Success",{category:"Teachers"})}return this.$emit("continue")},clickBack:function(){var e
this.commitValues()
if((e=window.tracker)!=null){e.trackEvent("CreateAccountModal Teacher SchoolInfoPanel Back Clicked",{category:"Teachers"})}return this.$emit("back")}}}
t.exports=o})
require.register("views/core/CreateAccountModal/teacher/SetupAccountPanel",function(e,require,t){var r
r=Vue.extend({name:"setup-account-panel",template:require("templates/core/create-account-modal/setup-account-panel")(),data:function(){return{supportEmail:"<a href='mailto:support@codecombat.com'>support@codecombat.com</a>",saving:true,error:""}},mounted:function(){return this.$store.dispatch("modal/createAccount")["catch"](function(e){return function(t){if(t.i18n){e.error=e.$t(t.i18n)}else{e.error=t.message}if(!e.error){return e.error=e.$t("loading_error.unknown")}}}(this)).then(function(e){return function(){return e.saving=false}}(this))},methods:{clickFinish:function(){var e
if((e=window.tracker)!=null){e.trackEvent("CreateAccountModal Teacher SetupAccountPanel Finish Clicked",{category:"Teachers"})}application.router.navigate("teachers/classes",{trigger:true})
return document.location.reload()},clickBack:function(){var e
if((e=window.tracker)!=null){e.trackEvent("CreateAccountModal Teacher SetupAccountPanel Back Clicked",{category:"Teachers"})}return this.$emit("back")}}})
t.exports=r})
require.register("views/core/CreateAccountModal/teacher/TeacherRolePanel",function(e,require,t){var r,i
i=require("core/forms")
r=Vue.extend({name:"teacher-role-panel",template:require("templates/core/create-account-modal/teacher-role-panel")(),data:function(){var e
e=_.pick(this.$store.state.modal.trialRequestProperties,["phoneNumber","role","purchaserRole"])
return _.assign(e,{showRequired:false})},computed:{validPhoneNumber:function(){return i.validatePhoneNumber(this.phoneNumber)}},methods:{clickContinue:function(){var e,t,r
if((t=window.tracker)!=null){t.trackEvent("CreateAccountModal Teacher TeacherRolePanel Continue Clicked",{category:"Teachers"})}e=_.pick(this,"phoneNumber","role","purchaserRole")
if(!(_.all(e)&&this.validPhoneNumber)){this.showRequired=true
return}this.commitValues()
if((r=window.tracker)!=null){r.trackEvent("CreateAccountModal Teacher TeacherRolePanel Continue Success",{category:"Teachers"})}return this.$emit("continue")},clickBack:function(){var e
this.commitValues()
if((e=window.tracker)!=null){e.trackEvent("CreateAccountModal Teacher TeacherRolePanel Back Clicked",{category:"Teachers"})}return this.$emit("back")},commitValues:function(){var e
e=_.pick(this,"phoneNumber","role","purchaserRole")
return this.$store.commit("modal/updateTrialRequestProperties",e)}},mounted:function(){return this.$refs.focus.focus()}})
t.exports=r})
require.register("views/core/CreateAccountModal/teacher/TeacherSignupComponent",function(e,require,t){var r,i,n,o,s,a
i=require("./SchoolInfoPanel")
o=require("./TeacherRolePanel")
r=require("./DemographicsPanel")
n=require("./SetupAccountPanel")
a=require("./TeacherSignupStoreModule")
t.exports=s=Vue.extend({name:"teacher-signup-component",template:require("templates/core/create-account-modal/teacher-signup-component")(),storeModule:a,created:function(){return this.disableKeyboardClose()},data:function(){return{panelIndex:0,panels:["school-info-panel","teacher-role-panel","demographic-panel","setup-account-panel"],trialRequestAttributes:{}}},computed:{panel:function(){return this.panels[this.panelIndex]}},components:{"school-info-panel":i,"teacher-role-panel":o,"demographic-panel":r,"setup-account-panel":n},methods:{onContinue:function(e){this.trialRequestAttributes=_.assign({},this.trialRequestAttributes,e)
return this.panelIndex+=1},onBack:function(){if(this.panelIndex===0){return this.$emit("back")}else{return this.panelIndex-=1}},disableKeyboardClose:function(){var e,t
e=$("#create-account-modal").data("bs.modal")
if(e!=null){if((t=e.options)!=null){t.keyboard=false}}return e!=null?typeof e.escape==="function"?e.escape():void 0:void 0}}})})
require.register("views/core/CreateAccountModal/teacher/TeacherSignupStoreModule",function(e,require,t){var r,i,n,o,s,a
o=require("core/api")
r=["district","district_id","district_schools","district_students","phone"]
i=r.concat(["id","name","students"])
a=_.zipObject(function(){var e,t,r
r=[]
for(e=0,t=i.length;e<t;e++){s=i[e]
r.push(["nces_"+s,""])}return r}())
t.exports=n={namespaced:true,state:{trialRequestProperties:_.assign(a,{organization:"",district:"",city:"",state:"",country:"",phoneNumber:"",role:"",purchaserRole:"",numStudents:"",numStudentsTotal:"",notes:"",referrer:"",marketingReferrer:"",educationLevel:[],otherEducationLevel:false,otherEducationLevelExplanation:"",siteOrigin:"create teacher",firstName:"",lastName:"",email:""}),signupForm:{name:"",email:"",password:"",firstName:"",lastName:""},ssoAttrs:{email:"",gplusID:"",facebookID:""},ssoUsed:""},mutations:{updateTrialRequestProperties:function(e,t){return _.assign(e.trialRequestProperties,t)},updateSignupForm:function(e,t){return _.assign(e.signupForm,t)},updateSso:function(e,t){var r,i
i=t.ssoUsed,r=t.ssoAttrs
_.assign(e.ssoAttrs,r)
return e.ssoUsed=i}},actions:{createAccount:function(e){var t,r,i,n
n=e.state,t=e.commit,r=e.dispatch,i=e.rootState
return Promise.resolve().then(function(e){return function(){return r("me/save",{role:n.trialRequestProperties.role.toLowerCase()},{root:true})}}(this)).then(function(e){return function(){var e
e=_.cloneDeep(n.trialRequestProperties)
if(e.otherEducationLevel){e.educationLevel.push(e.otherEducationLevelExplanation)}delete e.otherEducationLevel
delete e.otherEducationLevelExplanation
e.email=n.signupForm.email
return o.trialRequests.post({type:"course",properties:e})}}(this)).then(function(e){return function(){var e,t,r
t=_.omit(n.signupForm,function(e){return e===""})
r=_.omit(n.ssoAttrs,function(e){return e===""})
e=_.assign({},t,r,{userId:i.me._id})
if(n.ssoUsed==="gplus"){return o.users.signupWithGPlus(e)}else if(n.ssoUsed==="facebook"){return o.users.signupWithFacebook(e)}else{return o.users.signupWithPassword(e)}}}(this))}}}
t.exports=n})
require.register("views/core/DiplomatSuggestionModal",function(e,require,t){var r,i,n,o,s,a=function(e,t){for(var r in t){if(l.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},l={}.hasOwnProperty
i=require("views/core/ModalView")
s=require("templates/core/diplomat-suggestion")
o=require("core/auth").me
n=require("core/forms")
t.exports=r=function(e){a(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.id="diplomat-suggestion-modal"
t.prototype.template=s
t.prototype.events={"click #subscribe-button":"subscribeAsDiplomat"}
t.prototype.subscribeAsDiplomat=function(){o.setEmailSubscription("diplomatNews",true)
o.patch()
$("#email_translator").prop("checked",1)
this.hide()
noty({text:$.i18n.t("account_settings.saved"),layout:"topCenter",timeout:5e3,type:"information"})
return Backbone.Mediator.publish("router:navigate",{route:"/contribute/diplomat"})}
return t}(i)})
require.register("views/core/HeroSelectView",function(e,require,t){var r,i,n,o,s,a,l,c,u=function(e,t){for(var r in t){if(p.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},p={}.hasOwnProperty
i=require("views/core/CocoView")
c=require("templates/core/hero-select-view")
r=require("models/Classroom")
a=require("collections/ThangTypes")
o=require("models/State")
s=require("models/ThangType")
l=require("models/User")
t.exports=n=function(e){u(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.id="hero-select-view"
t.prototype.template=c
t.prototype.events={"click .hero-option":"onClickHeroOption"}
t.prototype.initialize=function(e){var t,r,i
this.options=e!=null?e:{}
r=s.heroes.captain
t=((i=me.get("heroConfig"))!=null?i.thangType:void 0)||r
this.debouncedRender=_.debounce(this.render,0)
this.state=new o({currentHeroOriginal:t,selectedHeroOriginal:t})
this.heroes=new a({},{project:["original","name","heroClass"]})
this.supermodel.trackRequest(this.heroes.fetchHeroes())
this.listenTo(this.state,"all",function(){return this.debouncedRender()})
return this.listenTo(this.heroes,"all",function(){return this.debouncedRender()})}
t.prototype.onClickHeroOption=function(e){var t
t=$(e.currentTarget).data("hero-original")
this.state.set({selectedHeroOriginal:t})
return this.saveHeroSelection(t)}
t.prototype.saveHeroSelection=function(e){var t,r
if(!me.get("heroConfig")){me.set({heroConfig:{}})}r=_.assign(me.get("heroConfig"),{thangType:e})
me.set({heroConfig:r})
t=this.heroes.findWhere({original:e})
return me.save().then(function(r){return function(){var i,n,o
n="Hero selected"
n+=me.isStudent()?" student":" teacher"
if(r.options.createAccount){n+=" create account"}i=me.isStudent()?"Students":"Teachers"
if((o=window.tracker)!=null){o.trackEvent(n,{category:i,heroOriginal:e},[])}return r.trigger("hero-select:success",t)}}(this))}
return t}(i)})
require.register("views/core/MineModal",function(e,require,t){var r,i,n,o,s=function(e,t){return function(){return e.apply(t,arguments)}},a=function(e,t){for(var r in t){if(l.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},l={}.hasOwnProperty
i=require("views/core/ModalView")
o=require("templates/core/mine-modal")
n=require("collections/Products")
t.exports=r=function(e){a(t,e)
t.prototype.id="mine-modal"
t.prototype.template=o
t.prototype.hasAnimated=false
t.prototype.events={"click #close-modal":"hide","click #buy-now-button":"onBuyNowButtonClick","click #submit-button":"onSubmitButtonClick"}
function t(e){if(e==null){e={}}this.onBuyNowButtonClick=s(this.onBuyNowButtonClick,this)
t.__super__.constructor.call(this,e)
this.products=new n
this.supermodel.loadCollection(this.products,"products")}t.prototype.onLoaded=function(){this.basicProduct=this.products.getBasicSubscriptionForUser(me)
if(this.basicProduct){this.price=(this.basicProduct.get("amount")/100).toFixed(2)}return t.__super__.onLoaded.call(this)}
t.prototype.onBuyNowButtonClick=function(e){var t
if((t=window.tracker)!=null){t.trackEvent("Mine Explored",{engageAction:"buy_button_click"})}$("#buy-now-button").hide()
$("#submit-button").show()
$("#details-header").text("Thanks for your interest")
$("#info-text").hide()
return $("#capacity-text").show()}
t.prototype.onSubmitButtonClick=function(e){var t,r
if($("#notify-me-check:checked").length>0){if((t=window.tracker)!=null){t.trackEvent("Mine Explored",{engageAction:"notify_check_box_click"})}}if((r=window.tracker)!=null){r.trackEvent("Mine Explored",{engageAction:"submit_button_click"})}return this.hide()}
t.prototype.destroy=function(){return $("#modal-wrapper").off("mousemove")}
return t}(i)})
require.register("views/core/ModalView",function(e,require,t){var r,i,n=function(e,t){for(var r in t){if(o.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},o={}.hasOwnProperty
r=require("./CocoView")
t.exports=i=function(e){n(t,e)
t.prototype.className="modal fade"
t.prototype.closeButton=true
t.prototype.closesOnClickOutside=true
t.prototype.modalWidthPercent=null
t.prototype.plain=false
t.prototype.instant=false
t.prototype.template=require("templates/core/modal-base")
t.prototype.events={"click a":"toggleModal","click button":"toggleModal","click li":"toggleModal","click [data-i18n]":"onClickTranslatedElement"}
t.prototype.shortcuts={esc:"onEsc"}
function t(e){if((e!=null?e.instant:void 0)||this.instant){this.className=this.className.replace(" fade","")}if((e!=null?e.closeButton:void 0)!=null){this.closeButton=e.closeButton}if(e!=null?e.modalWidthPercent:void 0){this.modalWidthPercent=e.modalWidthPercent}t.__super__.constructor.apply(this,arguments)
if(this.options==null){this.options={}}}t.prototype.subscriptions={}
t.prototype.afterRender=function(){t.__super__.afterRender.call(this)
if(Backbone.history.fragment==="employers"){$(this.$el).find(".background-wrapper").each(function(){return $(this).addClass("employer-modal-background-wrapper").removeClass("background-wrapper")})}if(this.modalWidthPercent){this.$el.find(".modal-dialog").css({width:this.modalWidthPercent+"%"})}this.$el.on("hide.bs.modal",function(e){return function(){if(!e.hidden){e.onHidden()}return e.hidden=true}}(this))
if(this.plain){return this.$el.find(".background-wrapper").addClass("plain")}}
t.prototype.afterInsert=function(){var e
t.__super__.afterInsert.call(this)
$(document.activeElement).blur()
if(typeof localStorage!=="undefined"&&localStorage!==null?localStorage.showViewNames:void 0){e=this.constructor.name
return setTimeout(function(){return $("title").text(e)},500)}}
t.prototype.showLoading=function(e){if(!e){e=this.$el.find(".modal-body")}return t.__super__.showLoading.call(this,e)}
t.prototype.onEsc=function(){var e,t
if((e=this.$el.data("bs.modal"))!=null?(t=e.options)!=null?t.keyboard:void 0:void 0){return this.hide()}}
t.prototype.hide=function(){this.trigger("hide")
if(!this.destroyed){return this.$el.removeClass("fade").modal("hide")}}
t.prototype.onHidden=function(){return this.trigger("hidden")}
t.prototype.destroy=function(){if(!this.hidden){this.hide()}this.$el.off("hide.bs.modal")
return t.__super__.destroy.call(this)}
return t}(r)})
require.register("views/core/RecoverModal",function(e,require,t){var r,i,n,o,s,a,l=[].slice,c=[].indexOf||function(e){for(var t=0,r=this.length;t<r;t++){if(t in this&&this[t]===e)return t}return-1},u=function(e,t){return function(){return e.apply(t,arguments)}},p=function(e,t){for(var r in t){if(d.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},d={}.hasOwnProperty
r=require("views/core/ModalView")
a=require("templates/core/recover-modal")
o=require("core/forms")
s=require("core/errors").genericFailure
n=function(e,t){return function(){var r,i,n
n=1<=arguments.length?l.call(arguments,0):[]
r=n[0]
if(!((i=r.keyCode,c.call(e,i)>=0)||!r.keyCode)){return}return t.apply(null,n)}}
t.exports=i=function(e){p(t,e)
t.prototype.id="recover-modal"
t.prototype.template=a
t.prototype.events={"click #recover-button":"recoverAccount","keydown input":"recoverAccount"}
t.prototype.subscriptions={"errors:server-error":"onServerError"}
t.prototype.onServerError=function(e){return this.disableModalInProgress(this.$el)}
function t(e){this.successfullyRecovered=u(this.successfullyRecovered,this)
this.recoverAccount=u(this.recoverAccount,this)
this.recoverAccount=n([13],this.recoverAccount)
t.__super__.constructor.call(this,e)}t.prototype.recoverAccount=function(e){var t,r
this.playSound("menu-button-click")
o.clearFormAlerts(this.$el)
t=o.formToObject(this.$el).email
if(!t){return}r=$.post("/auth/reset",{email:t},this.successfullyRecovered)
r.fail(s)
return this.enableModalInProgress(this.$el)}
t.prototype.successfullyRecovered=function(){this.disableModalInProgress(this.$el)
this.$el.find(".modal-body:visible").text($.i18n.t("recover.recovery_sent"))
return this.$el.find(".modal-footer").remove()}
return t}(r)})
require.register("views/core/RootComponent",function(e,require,t){var r,i,n,o,s=function(e,t){for(var r in t){if(a.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},a={}.hasOwnProperty
i=require("./RootView")
o=require("core/store")
n={commit:_.noop,dispatch:_.noop}
t.exports=r=function(e){s(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.VueComponent=null
t.prototype.vuexModule=null
t.prototype.afterRender=function(){if(this.vueComponent){this.$el.find("#site-content-area").replaceWith(this.vueComponent.$el)}else{if(this.vuexModule){if(!_.isFunction(this.vuexModule)){throw new Error("@vuexModule should be a function")}o.registerModule("page",this.vuexModule())}this.vueComponent=new this.VueComponent({el:this.$el.find("#site-content-area")[0],store:o})
window.rootComponent=this.vueComponent}return t.__super__.afterRender.apply(this,arguments)}
t.prototype.destroy=function(){o.unregisterModule("page")
this.vueComponent.$destroy()
return this.vueComponent.$store=n}
return t}(i)})
require.register("views/core/RootView",function(e,require,t){var r,i,n,o,s,a,l,c,u,p,d,h=[].slice,m=[].indexOf||function(e){for(var t=0,r=this.length;t<r;t++){if(t in this&&this[t]===e)return t}return-1},g=function(e,t){for(var r in t){if(f.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},f={}.hasOwnProperty
n=require("./CocoView")
p=require("core/auth"),c=p.logoutUser,u=p.me
l=require("locale/locale")
r=require("models/Achievement")
i=require("views/core/AchievementPopup")
s=require("core/errors")
d=require("core/utils")
a=function(e,t){return function(){var r,i,n
n=1<=arguments.length?h.call(arguments,0):[]
r=n[0]
if(!((i=r.keyCode,m.call(e,i)>=0)||!r.keyCode)){return}return t.apply(null,n)}}
t.exports=o=function(e){g(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.showBackground=true
t.prototype.events={"click #logout-button":"logoutAccount","click #nav-stop-spying-button":"stopSpying","change .language-dropdown":"onLanguageChanged","click .toggle-fullscreen":"toggleFullscreen","click .signup-button":"onClickSignupButton","click .login-button":"onClickLoginButton","click a":"onClickAnchor","click button":"toggleModal","click li":"toggleModal","treema-error":"onTreemaError","click [data-i18n]":"onClickTranslatedElement"}
t.prototype.subscriptions={"achievements:new":"handleNewAchievements","modal:open-modal-view":"onOpenModalView"}
t.prototype.shortcuts={"ctrl+shift+a":"navigateToAdmin"}
t.prototype.showNewAchievement=function(e,t){var r
t.set("notified",true)
t.patch()
if(e.get("collection")==="level.sessions"&&!((r=e.get("query"))!=null?r.team:void 0)){return}if(window.serverConfig.picoCTF){return}if(e.get("hidden")){return}return new i({achievement:e,earnedAchievement:t})}
t.prototype.handleNewAchievements=function(e){return _.each(e.earnedAchievements.models,function(e){return function(t){var i
i=new r({_id:t.get("achievement")})
return i.fetch({success:function(r){return typeof e.showNewAchievement==="function"?e.showNewAchievement(r,t):void 0},cache:false})}}(this))}
t.prototype.logoutAccount=function(){var e,t,r,i
if(window.application.isIPadApp){if(typeof window!=="undefined"&&window!==null){if((e=window.webkit)!=null){if((t=e.messageHandlers)!=null){if((r=t.notification)!=null){r.postMessage({name:"signOut"})}}}}}Backbone.Mediator.publish("auth:logging-out",{})
if(this.id==="home-view"){if((i=window.tracker)!=null){i.trackEvent("Log Out",{category:"Homepage"},["Google Analytics"])}}return c($("#login-email").val())}
t.prototype.stopSpying=function(){return u.stopSpying({success:function(){return document.location.reload()},error:function(){return s.showNotyNetworkError.apply(s,arguments)}})}
t.prototype.onClickSignupButton=function(){var e,t,r,i
e=require("views/core/CreateAccountModal")
switch(this.id){case"home-view":if((t=window.tracker)!=null){t.trackEvent("Started Signup",{category:"Homepage",label:"Homepage"})}break
case"world-map-view":if((r=window.tracker)!=null){r.trackEvent("Started Signup",{category:"World Map",label:"World Map"})}break
default:if((i=window.tracker)!=null){i.trackEvent("Started Signup",{label:this.id})}}return this.openModalView(new e)}
t.prototype.onClickLoginButton=function(){var e,t
e=require("views/core/AuthModal")
if(this.id==="home-view"){if((t=window.tracker)!=null){t.trackEvent("Login",{category:"Homepage"},["Google Analytics"])}}return this.openModalView(new e)}
t.prototype.onClickAnchor=function(e){var t,r,i
if(this.destroyed){return}t=e!=null?(r=e.currentTarget)!=null?r.text:void 0:void 0
if(this.id==="home-view"&&t){if((i=window.tracker)!=null){i.trackEvent(t,{category:"Homepage"},["Google Analytics"])}}return this.toggleModal(e)}
t.prototype.onOpenModalView=function(e){var t
if(!(e.modalPath&&(t=require(e.modalPath)))){return console.error("Couldn't find modalPath "+e.modalPath)}return this.openModalView(new t({}))}
t.prototype.showLoading=function(e){if(e==null){e=this.$el.find("#site-content-area")}return t.__super__.showLoading.call(this,e)}
t.prototype.afterInsert=function(){t.__super__.afterInsert.call(this)
return this.renderScrollbar()}
t.prototype.afterRender=function(){var e
if(this.$el.find("#site-nav").length){this.$el.addClass("site-chrome")
if(this.showBackground){this.$el.addClass("show-background")}}t.__super__.afterRender.apply(this,arguments)
if(location.hash){this.chooseTab(location.hash.replace("#",""))}this.buildLanguages()
$("body").removeClass("is-playing")
if(e=this.getTitle()){e+=" | CodeCombat"}else{e="CodeCombat - Learn how to code by playing a game"}if(typeof localStorage!=="undefined"&&localStorage!==null?localStorage.showViewNames:void 0){e=this.constructor.name}return $("title").text(e)}
t.prototype.getTitle=function(){return""}
t.prototype.chooseTab=function(e){return $("a[href='#"+e+"']",this.$el).tab("show")}
t.prototype.buildLanguages=function(){var e,t
e=this.$el.find(".language-dropdown").empty()
t=u.get("preferredLanguage",true)
this.addLanguagesToSelect(e,t)
return $("body").attr("lang",t)}
t.prototype.addLanguagesToSelect=function(e,t){var r,i,n,o
if(t==null){t=u.get("preferredLanguage",true)}i=_.keys(l)
n=_.filter(i,function(e){return _.find(i,function(t){return t!==e&&t.split("-")[0]===e})})
for(r in l){o=l[r]
if(!(r!=="update"&&r!=="installVueI18n"&&(!(m.call(n,r)>=0)||r===t))){continue}e.append($("<option></option>").val(r).text(o.nativeDescription))
if(r==="fr"){e.append($('<option class="select-dash" disabled="disabled"></option>').text("----------------------------------"))}}return e.val(t)}
t.prototype.onLanguageChanged=function(){var e,t
t=$(".language-dropdown").val()
$.i18n.setLng(t,{})
this.saveLanguage(t)
e=application.moduleLoader.loadLanguage(u.get("preferredLanguage",true))
if(e){return this.listenToOnce(application.moduleLoader,"load-complete",this.onLanguageLoaded)}else{return this.onLanguageLoaded()}}
t.prototype.onLanguageLoaded=function(){var e
this.render()
if(u.get("preferredLanguage").split("-")[0]!=="en"){e=require("views/core/DiplomatSuggestionModal")
return this.openModalView(new e)}}
t.prototype.saveLanguage=function(e){var t
u.set("preferredLanguage",e)
t=u.patch()
if(!t){return}t.error(function(){s=JSON.parse(t.responseText)
return console.warn("Error saving language:",s)})
return t.success(function(e,t,r){})}
t.prototype.isOldBrowser=function(){var e
if($.browser){e=$.browser.versionNumber
if($.browser.mozilla&&e<25){return true}if($.browser.chrome&&e<31){return true}if($.browser.safari&&e<6){return true}}else{console.warn("no more jquery browser version...")}return false}
t.prototype.logoutRedirectURL="/"
t.prototype.navigateToAdmin=function(){if(window.serverSession.amActually||u.isAdmin()){return application.router.navigate("/admin",{trigger:true})}}
t.prototype.onTreemaError=function(e){return noty({text:e.message,layout:"topCenter",type:"error",killer:false,timeout:5e3,dismissQueue:true})}
return t}(n)})
require.register("views/core/SubscribeModal",function(e,require,t){var r,i,n,o,s,a,l,c=function(e,t){for(var r in t){if(u.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},u={}.hasOwnProperty
i=require("views/core/ModalView")
a=require("templates/core/subscribe-modal")
s=require("core/services/stripe")
l=require("core/utils")
r=require("views/core/CreateAccountModal")
n=require("collections/Products")
t.exports=o=function(e){c(t,e)
t.prototype.id="subscribe-modal"
t.prototype.template=a
t.prototype.plain=true
t.prototype.closesOnClickOutside=false
t.prototype.planID="basic"
t.prototype.i18nData=l.premiumContent
t.prototype.events={"click #close-modal":"hide","click .popover-content .parent-send":"onClickParentSendButton","click .email-parent-complete button":"onClickParentEmailCompleteButton","click .purchase-button":"onClickPurchaseButton","click .sale-button":"onClickSaleButton","click .lifetime-button":"onClickLifetimeButton"}
function t(e){var r
if(e==null){e={}}t.__super__.constructor.call(this,e)
this.state="standby"
if(e.products){this.products=e.products
this.onLoaded()}else{this.products=new n
r={}
if(l.getQueryVariable("coupon")!=null){r.coupon=l.getQueryVariable("coupon")}this.supermodel.trackRequest(this.products.fetch({data:r}))}this.trackTimeVisible({trackViewLifecycle:true})}t.prototype.onLoaded=function(){var e
this.yearProduct=this.products.findWhere({name:"year_subscription"})
this.lifetimeProduct=this.products.findWhere({name:"lifetime_subscription"})
if(this.lifetimeProduct==null){this.lifetimeProduct=this.products.findWhere({name:"lifetime_subscription2"})}if(e=this.products.findWhere({name:me.get("country")+"_basic_subscription"})){this.yearProduct=this.products.findWhere({name:me.get("country")+"_year_subscription"})}this.basicProduct=this.products.getBasicSubscriptionForUser(me)
return t.__super__.onLoaded.call(this)}
t.prototype.getRenderData=function(){var e
e=t.__super__.getRenderData.apply(this,arguments)
if(this.basicProduct){e.gems=this.basicProduct.get("gems")
e.basicPrice=(this.basicProduct.get("amount")/100).toFixed(2)}return e}
t.prototype.afterRender=function(){t.__super__.afterRender.call(this)
this.setupParentButtonPopover()
return this.playSound("game-menu-open")}
t.prototype.stripeOptions=function(e){return _.assign({alipay:me.get("country")==="china"||(me.get("preferredLanguage")||"en-US").slice(0,2)==="zh"?true:"auto",alipayReusable:true},e)}
t.prototype.setupParentButtonPopover=function(){var e,t
t=$.i18n.t("subscribe.parent_email_title")
t+='<button type="button" class="close" onclick="$(&#39;.parent-link&#39;).popover(&#39;hide&#39;);">&times;</button>'
e=function(){return $(".parent-link-popover-content").html()}
return this.$el.find(".parent-link").popover({animation:true,html:true,placement:"top",trigger:"click",title:t,content:e,container:this.$el}).on("shown.bs.popover",function(e){return function(){var e
return(e=application.tracker)!=null?e.trackEvent("Subscription ask parent button click"):void 0}}(this))}
t.prototype.onClickParentSendButton=function(e){var t
t=this.$el.find(".popover-content .parent-input").val()
if(!/[\w\.]+@\w+\.\w+/.test(t)){this.$el.find(".popover-content .parent-input").parent().addClass("has-error")
this.$el.find(".popover-content .parent-email-validator").show()
return false}me.sendParentEmail(t)
this.$el.find(".popover-content .email-parent-form").hide()
this.$el.find(".popover-content .email-parent-complete").show()
return false}
t.prototype.onClickParentEmailCompleteButton=function(e){return this.$el.find(".parent-link").popover("hide")}
t.prototype.onClickPurchaseButton=function(e){var t,i
if(!this.basicProduct){return}this.playSound("menu-button-click")
if(me.get("anonymous")){return this.openModalView(new r)}if((i=application.tracker)!=null){i.trackEvent("Started subscription purchase")}t=this.stripeOptions({description:$.i18n.t("subscribe.stripe_description"),amount:this.basicProduct.adjustedPrice()})
this.purchasedAmount=t.amount
return s.makeNewInstance().openAsync(t).then(function(e){return function(t){var r,i
i=t.token
e.state="purchasing"
e.render()
r=me.subscribe(i)
return Promise.resolve(r)}}(this)).then(function(e){return function(){var t
if((t=application.tracker)!=null){t.trackEvent("Finished subscription purchase",{value:e.purchasedAmount})}return e.onSubscriptionSuccess()}}(this))["catch"](function(e){return function(t){if(!t){return}return e.onSubscriptionError(t,"Failed to finish subscription purchase")}}(this))}
t.prototype.makePurchaseOps=function(){var e
e={data:{}}
if(l.getQueryVariable("coupon")!=null){e.data.coupon=l.getQueryVariable("coupon")}return e}
t.prototype.onClickSaleButton=function(){var e,t,i,n
this.playSound("menu-button-click")
if(me.get("anonymous")){return this.openModalView(new r)}if((n=application.tracker)!=null){n.trackEvent("Started 1 year subscription purchase")}e=this.basicProduct.get("amount")*12-this.yearProduct.get("amount")
t=(e/100).toFixed(2)
i=this.stripeOptions({description:$.i18n.t("subscribe.stripe_description_year_sale").replace("{{discount}}",t),amount:this.yearProduct.adjustedPrice()})
this.purchasedAmount=i.amount
return s.makeNewInstance().openAsync(i).then(function(e){return function(t){var r
r=t.token
e.state="purchasing"
e.render()
return Promise.resolve(e.yearProduct.purchase(r,e.makePurchaseOps()))}}(this)).then(function(e){return function(t){var r
if((r=application.tracker)!=null){r.trackEvent("Finished 1 year subscription purchase",{value:e.purchasedAmount})}if((t!=null?t.stripe:void 0)!=null){me.set("stripe",t!=null?t.stripe:void 0)}return e.onSubscriptionSuccess()}}(this))["catch"](function(e){return function(t){if(!t){return}return e.onSubscriptionError(t,"Failed to finish 1 year subscription purchase")}}(this))}
t.prototype.onClickLifetimeButton=function(){var e,t
this.playSound("menu-button-click")
if(me.get("anonymous")){return this.openModalView(new r)}if((t=application.tracker)!=null){t.trackEvent("Start Lifetime Purchase")}e=this.stripeOptions({description:$.i18n.t("subscribe.lifetime"),amount:this.lifetimeProduct.adjustedPrice()})
this.purchasedAmount=e.amount
return s.makeNewInstance().openAsync(e).then(function(e){return function(t){var r
r=t.token
e.state="purchasing"
e.render()
return Promise.resolve(e.lifetimeProduct.purchase(r,e.makePurchaseOps()))}}(this)).then(function(e){return function(t){var r
if((r=application.tracker)!=null){r.trackEvent("Finish Lifetime Purchase",{value:e.purchasedAmount})}if((t!=null?t.stripe:void 0)!=null){me.set("stripe",t!=null?t.stripe:void 0)}return e.onSubscriptionSuccess()}}(this))["catch"](function(e){return function(t){if(!t){return}return e.onSubscriptionError(t,"Fail Lifetime Purchase")}}(this))}
t.prototype.onSubscriptionSuccess=function(){Backbone.Mediator.publish("subscribe-modal:subscribed",{})
this.playSound("victory")
return this.hide()}
t.prototype.onSubscriptionError=function(e,t){var r,i,n,o,s,a,l
i=null
r=null
n=""
if(e instanceof Error){r=e
console.error(r.stack)
n=r.message}else{i=e
n=i.status+": "+(((o=i.responseJSON)!=null?o.message:void 0)||i.responseText)}if((s=application.tracker)!=null){s.trackEvent(t,{status:n,value:this.purchasedAmount})}l=(a=me.get("stripe"))!=null?a:{}
delete l.token
delete l.planID
if((i!=null?i.status:void 0)===402){this.state="declined"}else{this.state="unknown_error"
this.stateMessage=$.i18n.t("loading_error.unknown")}return this.render()}
t.prototype.onHidden=function(){t.__super__.onHidden.call(this)
return this.playSound("game-menu-close")}
return t}(i)})
require.register("locale/locale",function(e,require,t){t.exports={update:function(){var e,t,r,i,n,o,s,a
i=function(){var e,t,r,i
r=window.require.list()
i=[]
for(e=0,t=r.length;e<t;e++){s=r[e]
if(_.string.startsWith(s,"locale/")){i.push(s)}}return i}()
a=require("core/store")
o=[]
for(t=0,r=i.length;t<r;t++){n=i[t]
if(n==="locale/locale"){continue}e=n.replace("locale/","")
a.commit("addLocaleLoaded",e)
o.push(this[e]=require(n))}return o},en:{nativeDescription:"English",englishDescription:"English"},"en-US":{nativeDescription:"English (US)",englishDescription:"English (US)"},"en-GB":{nativeDescription:"English (UK)",englishDescription:"English (UK)"},"zh-HANS":{nativeDescription:"简体中文",englishDescription:"Chinese (Simplified)"},"zh-HANT":{nativeDescription:"繁體中文",englishDescription:"Chinese (Traditional)"},ru:{nativeDescription:"русский",englishDescription:"Russian"},"es-ES":{nativeDescription:"español (ES)",englishDescription:"Spanish (Spain)"},"es-419":{nativeDescription:"español (América Latina)",englishDescription:"Spanish (Latin America)"},fr:{nativeDescription:"français",englishDescription:"French"},ar:{nativeDescription:"العربية",englishDescription:"Arabic"},bg:{nativeDescription:"български език",englishDescription:"Bulgarian"},ca:{nativeDescription:"Català",englishDescription:"Catalan"},cs:{nativeDescription:"čeština",englishDescription:"Czech"},da:{nativeDescription:"dansk",englishDescription:"Danish"},"de-DE":{nativeDescription:"Deutsch (Deutschland)",englishDescription:"German (Germany)"},"de-AT":{nativeDescription:"Deutsch (Österreich)",englishDescription:"German (Austria)"},"de-CH":{nativeDescription:"Deutsch (Schweiz)",englishDescription:"German (Switzerland)"},et:{nativeDescription:"Eesti",englishDescription:"Estonian"},el:{nativeDescription:"Ελληνικά",englishDescription:"Greek"},eo:{nativeDescription:"Esperanto",englishDescription:"Esperanto"},fil:{nativeDescription:"Filipino",englishDescription:"Filipino"},fa:{nativeDescription:"فارسی",englishDescription:"Persian"},gl:{nativeDescription:"Galego",englishDescription:"Galician"},ko:{nativeDescription:"한국어",englishDescription:"Korean"},haw:{nativeDescription:"ʻŌlelo Hawaiʻi",englishDescription:"Hawaiian"},he:{nativeDescription:"עברית",englishDescription:"Hebrew"},hr:{nativeDescription:"hrvatski jezik",englishDescription:"Croatian"},hu:{nativeDescription:"magyar",englishDescription:"Hungarian"},id:{nativeDescription:"Bahasa Indonesia",englishDescription:"Indonesian"},it:{nativeDescription:"Italiano",englishDescription:"Italian"},kk:{nativeDescription:"қазақ тілі",englishDescription:"Kazakh"},lt:{nativeDescription:"lietuvių kalba",englishDescription:"Lithuanian"},mi:{nativeDescription:"te reo Māori",englishDescription:"Māori"},"mk-MK":{nativeDescription:"Македонски",englishDescription:"Macedonian"},hi:{nativeDescription:"मानक हिन्दी",englishDescription:"Hindi"},ms:{nativeDescription:"Bahasa Melayu",englishDescription:"Bahasa Malaysia"},my:{nativeDescription:"မြန်မာစကား",englishDescription:"Myanmar language"},nl:{nativeDescription:"Nederlands",englishDescription:"Dutch"},"nl-BE":{nativeDescription:"Nederlands (België)",englishDescription:"Dutch (Belgium)"},"nl-NL":{nativeDescription:"Nederlands (Nederland)",englishDescription:"Dutch (Netherlands)"},ja:{nativeDescription:"日本語",englishDescription:"Japanese"},nb:{nativeDescription:"Norsk Bokmål",englishDescription:"Norwegian (Bokmål)"},nn:{nativeDescription:"Norsk Nynorsk",englishDescription:"Norwegian (Nynorsk)"},uz:{nativeDescription:"O'zbekcha",englishDescription:"Uzbek"},pl:{nativeDescription:"język polski",englishDescription:"Polish"},"pt-PT":{nativeDescription:"Português (Portugal)",englishDescription:"Portuguese (Portugal)"},"pt-BR":{nativeDescription:"Português (Brasil)",englishDescription:"Portuguese (Brazil)"},ro:{nativeDescription:"limba română",englishDescription:"Romanian"},sr:{nativeDescription:"српски",englishDescription:"Serbian"},sk:{nativeDescription:"slovenčina",englishDescription:"Slovak"},sl:{nativeDescription:"slovenščina",englishDescription:"Slovene"},fi:{nativeDescription:"suomi",englishDescription:"Finnish"},sv:{nativeDescription:"Svenska",englishDescription:"Swedish"},th:{nativeDescription:"ไทย",englishDescription:"Thai"},tr:{nativeDescription:"Türkçe",englishDescription:"Turkish"},uk:{nativeDescription:"українська",englishDescription:"Ukrainian"},ur:{nativeDescription:"اُردُو",englishDescription:"Urdu"},vi:{nativeDescription:"Tiếng Việt",englishDescription:"Vietnamese"},"zh-WUU-HANS":{nativeDescription:"吴语",englishDescription:"Wuu (Simplified)"},"zh-WUU-HANT":{nativeDescription:"吳語",englishDescription:"Wuu (Traditional)"},installVueI18n:function(){var e,t
t=require("core/store")
e={install:function(e,r){var i
i={}
e.util.extend(i,r)
e.t=function(r,n){var o
i={}
o=t.state.me.preferredLanguage||"en"
if(!t.state.localesLoaded[o]){o="en"}if(typeof o==="string"&&o!==""){i.lng=o}e.util.extend(i,n)
return i18n.t(r,i)}
e.prototype.$t=function(r,n){var o,s
i={}
o=t.state.me.preferredLanguage||"en"
if(!t.state.localesLoaded[o]){o="en"}if(typeof o==="string"&&o!==""){i.lng=o}s=this.$options.i18nextNamespace
if(typeof s==="string"&&s!==""){i.ns=s}e.util.extend(i,n)
return i18n.t(r,i)}}}
return Vue.use(e)}}})
require.register("locale/en",function(e,require,t){t.exports={nativeDescription:"English",englishDescription:"English",translation:{new_home:{slogan:"The most engaging game for learning programming.",classroom_edition:"Classroom Edition:",learn_to_code:"Learn to code:",play_now:"Play Now",im_a_teacher:"I'm a Teacher",im_a_student:"I'm a Student",learn_more:"Learn more",classroom_in_a_box:"A classroom in-a-box for teaching computer science.",codecombat_is:"CodeCombat is a platform <strong>for students</strong> to learn computer science while playing through a real game.",our_courses:"Our courses have been specifically playtested <strong>to excel in the classroom</strong>, even by teachers with little to no prior programming experience.",top_screenshots_hint:"Students write code and see their changes update in real-time",designed_with:"Designed with teachers in mind",real_code:"Real, typed code",from_the_first_level:"from the first level",getting_students:"Getting students to typed code as quickly as possible is critical to learning programming syntax and proper structure.",educator_resources:"Educator resources",course_guides:"and course guides",teaching_computer_science:"Teaching computer science does not require a costly degree, because we provide tools to support educators of all backgrounds.",accessible_to:"Accessible to",everyone:"everyone",democratizing:"Democratizing the process of learning coding is at the core of our philosophy. Everyone should be able to learn to code.",forgot_learning:"I think they actually forgot that they were actually learning something.",wanted_to_do:" Coding is something I've always wanted to do, and I never thought I would be able to learn it in school.",why_games:"Why is learning through games important?",games_reward:"Games reward the productive struggle.",encourage:"Gaming is a medium that encourages interaction, discovery, and trial-and-error. A good game challenges the player to master skills over time, which is the same critical process students go through as they learn.",excel:"Games excel at rewarding",struggle:"productive struggle",kind_of_struggle:"the kind of struggle that results in learning that’s engaging and",motivating:"motivating",not_tedious:"not tedious.",gaming_is_good:"Studies suggest gaming is good for children’s brains. (it’s true!)",game_based:"When game-based learning systems are",compared:"compared",conventional:"against conventional assessment methods, the difference is clear: games are better at helping students retain knowledge, concentrate and",perform_at_higher_level:"perform at a higher level of achievement",feedback:"Games also provide real-time feedback that allows students to adjust their solution path and understand concepts more holistically, instead of being limited to just “correct” or “incorrect” answers.",real_game:"A real game, played with real coding.",great_game:"A great game is more than just badges and achievements - it’s about a player’s journey, well-designed puzzles, and the ability to tackle challenges with agency and confidence.",agency:"CodeCombat is a game that gives players that agency and confidence with our robust typed code engine, which helps beginner and advanced students alike write proper, valid code.",request_demo_title:"Get your students started today!",request_demo_subtitle:"Request a demo and get your students started in less than an hour.",get_started_title:"Set up your class today",get_started_subtitle:"Set up a class, add your students, and monitor their progress as they learn computer science.",request_demo:"Request a Demo",setup_a_class:"Set Up a Class",have_an_account:"Have an account?",logged_in_as:"You are currently logged in as",computer_science:"Computer science courses for all ages",show_me_lesson_time:"Show me lesson time estimates for:",curriculum:"Total curriculum hours:",ffa:"Free for all students",lesson_time:"Lesson time:",coming_soon:"More coming soon!",courses_available_in:"Courses are available in JavaScript and Python. Web Development courses utilize HTML, CSS, jQuery, and Bootstrap.",boast:"Boasts riddles that are complex enough to fascinate gamers and coders alike.",winning:"A winning combination of RPG gameplay and programming homework that pulls off making kid-friendly education legitimately enjoyable.",run_class:"Everything you need to run a computer science class in your school today, no CS background required.",goto_classes:"Go to My Classes",view_profile:"View My Profile",view_progress:"View Progress",go_to_courses:"Go to My Courses",want_coco:"Want CodeCombat at your school?"},nav:{play:"Levels",community:"Community",courses:"Courses",blog:"Blog",forum:"Forum",account:"Account",my_account:"My Account",profile:"Profile",home:"Home",contribute:"Contribute",legal:"Legal",privacy:"Privacy",about:"About",contact:"Contact",twitter_follow:"Follow",my_classrooms:"My Classes",my_courses:"My Courses",careers:"Careers",facebook:"Facebook",twitter:"Twitter",create_a_class:"Create a Class",other:"Other",learn_to_code:"Learn to Code!",toggle_nav:"Toggle navigation",jobs:"Jobs",schools:"Schools",get_involved:"Get Involved",open_source:"Open source (GitHub)",support:"Support",faqs:"FAQs",help_pref:"Need help? Email",help_suff:"and we'll get in touch!",resource_hub:"Resource Hub"},modal:{close:"Close",okay:"Okay"},not_found:{page_not_found:"Page not found"},diplomat_suggestion:{title:"Help translate CodeCombat!",sub_heading:"We need your language skills.",pitch_body:"We develop CodeCombat in English, but we already have players all over the world. Many of them want to play in {English} but don't speak English, so if you can speak both, please consider signing up to be a Diplomat and help translate both the CodeCombat website and all the levels into {English}.",missing_translations:"Until we can translate everything into {English}, you'll see English when {English} isn't available.",learn_more:"Learn more about being a Diplomat",subscribe_as_diplomat:"Subscribe as a Diplomat"},play:{play_as:"Play As",compete:"Compete!",spectate:"Spectate",players:"players",hours_played:"hours played",items:"Items",unlock:"Unlock",confirm:"Confirm",owned:"Owned",locked:"Locked",purchasable:"Purchasable",available:"Available",skills_granted:"Skills Granted",heroes:"Heroes",achievements:"Achievements",settings:"Settings",poll:"Poll",next:"Next",change_hero:"Change Hero",buy_gems:"Buy Gems",subscription_required:"Subscription Required",subscribers_only:"Subscribers Only!",subscribe_unlock:"Subscribe to Unlock!",subscriber_heroes:"Subscribe today to immediately unlock Amara, Hushbaum, and Hattori!",subscriber_gems:"Subscribe today to purchase this hero with gems!",anonymous:"Anonymous Player",level_difficulty:"Difficulty: ",play_classroom_version:"Play Classroom Version",campaign_beginner:"Beginner Campaign",awaiting_levels_adventurer_prefix:"We release new levels every week.",awaiting_levels_adventurer:"Sign up as an Adventurer",awaiting_levels_adventurer_suffix:"to be the first to play new levels.",adjust_volume:"Adjust volume",campaign_multiplayer:"Multiplayer Arenas",campaign_multiplayer_description:"... in which you code head-to-head against other players.",brain_pop_done:"You’ve defeated the Ogres with code! You win!",brain_pop_challenge:"Challenge yourself to play again using a different programming language!",replay:"Replay",back_to_classroom:"Back to Classroom"},code:{if:"if",else:"else",elif:"else if",while:"while",loop:"loop",for:"for",break:"break",continue:"continue",pass:"pass",return:"return",then:"then",do:"do",end:"end",function:"function",def:"define",var:"variable",self:"self",hero:"hero",this:"this",or:"or","||":"or",and:"and","&&":"and",not:"not","!":"not","=":"assign","==":"equals","===":"strictly equals","!=":"does not equal","!==":"does not strictly equal",">":"is greater than",">=":"is greater than or equal","<":"is less than","<=":"is less than or equal","*":"multiplied by","/":"divided by","+":"plus","-":"minus","+=":"add and assign","-=":"subtract and assign",True:"True",true:"true",False:"False",false:"false",undefined:"undefined",null:"null",nil:"nil",None:"None"},share_progress_modal:{blurb:"You’re making great progress! Tell your parent how much you've learned with CodeCombat.",email_invalid:"Email address invalid.",form_blurb:"Enter your parent's email below and we’ll show them!",form_label:"Email Address",placeholder:"email address",title:"Excellent Work, Apprentice"},login:{sign_up:"Create Account",email_or_username:"Email or username",log_in:"Log In",logging_in:"Logging In",log_out:"Log Out",forgot_password:"Forgot your password?",authenticate_gplus:"Authenticate Google",load_profile:"Load Google Profile",finishing:"Finishing",sign_in_with_facebook:"Sign in with Facebook",sign_in_with_gplus:"Sign in with Google",signup_switch:"Want to create an account?"},signup:{create_student_header:"Create Student Account",create_teacher_header:"Create Teacher Account",create_individual_header:"Create Individual Account",email_announcements:"Receive announcements about new CodeCombat levels and features!",creating:"Creating Account...",sign_up:"Sign Up",log_in:"log in with password",required:"You need to log in before you can go that way.",login_switch:"Already have an account?",school_name:"School Name and City",optional:"optional",school_name_placeholder:"Example High School, Springfield, IL",connected_gplus_header:"You've successfully connected with Google+!",connected_gplus_p:"Finish signing up so you can log in with your Google+ account.",gplus_exists:"You already have an account associated with Google+!",connected_facebook_header:"You've successfully connected with Facebook!",connected_facebook_p:"Finish signing up so you can log in with your Facebook account.",facebook_exists:"You already have an account associated with Facebook!",hey_students:"Students, enter the class code from your teacher.",birthday:"Birthday",parent_email_blurb:"We know you can't wait to learn programming &mdash; we're excited too! Your parents will receive an email with further instructions on how to create an account for you. Email {{email_link}} if you have any questions.",classroom_not_found:"No classes exist with this Class Code. Check your spelling or ask your teacher for help.",checking:"Checking...",account_exists:"This email is already in use:",sign_in:"Sign in",email_good:"Email looks good!",name_taken:"Username already taken! Try {{suggestedName}}?",name_available:"Username available!",name_is_email:"Username may not be an email",choose_type:"Choose your account type:",teacher_type_1:"Teach programming using CodeCombat!",teacher_type_2:"Set up your class",teacher_type_3:"Access Course Guides",teacher_type_4:"View student progress",signup_as_teacher:"Sign up as a Teacher",student_type_1:"Learn to program while playing an engaging game!",student_type_2:"Play with your class",student_type_3:"Compete in arenas",student_type_4:"Choose your hero!",student_type_5:"Have your Class Code ready!",signup_as_student:"Sign up as a Student",individuals_or_parents:"Individuals & Parents",individual_type:"For players learning to code outside of a class. Parents should sign up for an account here.",signup_as_individual:"Sign up as an Individual",enter_class_code:"Enter your Class Code",enter_birthdate:"Enter your birthdate:",parent_use_birthdate:"Parents, use your own birthdate.",ask_teacher_1:"Ask your teacher for your Class Code.",ask_teacher_2:"Not part of a class? Create an ",ask_teacher_3:"Individual Account",ask_teacher_4:" instead.",about_to_join:"You're about to join:",enter_parent_email:"Enter your parent’s email address:",parent_email_error:"Something went wrong when trying to send the email. Check the email address and try again.",parent_email_sent:"We’ve sent an email with further instructions on how to create an account. Ask your parent to check their inbox.",account_created:"Account Created!",confirm_student_blurb:"Write down your information so that you don't forget it. Your teacher can also help you reset your password at any time.",confirm_individual_blurb:"Write down your login information in case you need it later. Verify your email so you can recover your account if you ever forget your password - check your inbox!",write_this_down:"Write this down:",start_playing:"Start Playing!",sso_connected:"Successfully connected with:",select_your_starting_hero:"Select Your Starting Hero:",you_can_always_change_your_hero_later:"You can always change your hero later.",finish:"Finish",teacher_ready_to_create_class:"You're ready to create your first class!",teacher_students_can_start_now:"Your students will be able to start playing the first course, Introduction to Computer Science, immediately.",teacher_list_create_class:"On the next screen you will be able to create a new class.",teacher_list_add_students:"Add students to the class by clicking the View Class link, then sending your students the Class Code or URL. You can also invite them via email if they have email addresses.",teacher_list_resource_hub_1:"Check out the",teacher_list_resource_hub_2:"Course Guides",teacher_list_resource_hub_3:"for solutions to every level, and the",teacher_list_resource_hub_4:"Resource Hub",teacher_list_resource_hub_5:"for curriculum guides, activities, and more!",teacher_additional_questions:"That’s it! If you need additional help or have questions, reach out to __supportEmail__.",dont_use_our_email_silly:"Don't put our email here! Put your parent's email."},recover:{recover_account_title:"Recover Account",send_password:"Send Recovery Password",recovery_sent:"Recovery email sent."},items:{primary:"Primary",secondary:"Secondary",armor:"Armor",accessories:"Accessories",misc:"Misc",books:"Books"},common:{back:"Back",coming_soon:"Coming soon!",continue:"Continue",next:"Next",default_code:"Default Code",loading:"Loading...",overview:"Overview",solution:"Solution",intro:"Intro",saving:"Saving...",sending:"Sending...",send:"Send",sent:"Sent",cancel:"Cancel",save:"Save",publish:"Publish",create:"Create",fork:"Fork",play:"Play",retry:"Retry",actions:"Actions",info:"Info",help:"Help",watch:"Watch",unwatch:"Unwatch",submit_patch:"Submit Patch",submit_changes:"Submit Changes",save_changes:"Save Changes",required_field:"required",valid_phone:"Enter a valid phone number."},general:{and:"and",name:"Name",date:"Date",body:"Body",version:"Version",pending:"Pending",accepted:"Accepted",rejected:"Rejected",withdrawn:"Withdrawn",accept:"Accept",reject:"Reject",withdraw:"Withdraw",submitter:"Submitter",submitted:"Submitted",commit_msg:"Commit Message",version_history:"Version History",version_history_for:"Version History for: ",select_changes:"Select two changes below to see the difference.",undo_prefix:"Undo",undo_shortcut:"(Ctrl+Z)",redo_prefix:"Redo",redo_shortcut:"(Ctrl+Shift+Z)",play_preview:"Play preview of current level",result:"Result",results:"Results",description:"Description",or:"or",subject:"Subject",email:"Email",password:"Password",confirm_password:"Confirm Password",message:"Message",code:"Code",ladder:"Ladder",when:"When",opponent:"Opponent",rank:"Rank",score:"Score",win:"Win",loss:"Loss",tie:"Tie",easy:"Easy",medium:"Medium",hard:"Hard",player:"Player",player_level:"Level",warrior:"Warrior",ranger:"Ranger",wizard:"Wizard",first_name:"First Name",last_name:"Last Name",last_initial:"Last Initial",username:"Username",contact_us:"Contact Us",close_window:"Close Window",learn_more:"Learn More"},units:{second:"second",seconds:"seconds",minute:"minute",minutes:"minutes",hour:"hour",hours:"hours",day:"day",days:"days",week:"week",weeks:"weeks",month:"month",months:"months",year:"year",years:"years"},play_level:{directions:"Directions",edit_level:"Edit Level",explore_codecombat:"Explore CodeCombat",finished_hoc:"I'm finished with my Hour of Code",get_certificate:"Get your certificate!",level_complete:"Level Complete",completed_level:"Completed Level:",course:"Course:",done:"Done",next_level:"Next Level",next_game:"Next game",languages:"Languages",programming_language:"Programming language",show_menu:"Show game menu",home:"Home",level:"Level",skip:"Skip",game_menu:"Game Menu",restart:"Restart",goals:"Goals",goal:"Goal",running:"Running...",success:"Success!",incomplete:"Incomplete",timed_out:"Ran out of time",failing:"Failing",reload:"Reload",reload_title:"Reload All Code?",reload_really:"Are you sure you want to reload this level back to the beginning?",reload_confirm:"Reload All",test_level:"Test Level",victory:"Victory",victory_title_prefix:"",victory_title_suffix:" Complete",victory_sign_up:"Sign Up to Save Progress",victory_sign_up_poke:"Want to save your code? Create a free account!",victory_rate_the_level:"How fun was this level?",victory_return_to_ladder:"Return to Ladder",victory_saving_progress:"Saving Progress",victory_go_home:"Go Home",victory_review:"Tell us more!",victory_review_placeholder:"How was the level?",victory_hour_of_code_done:"Are You Done?",victory_hour_of_code_done_yes:"Yes, I'm finished with my Hour of Code™!",victory_experience_gained:"XP Gained",victory_gems_gained:"Gems Gained",victory_new_item:"New Item",victory_new_hero:"New Hero",victory_viking_code_school:"Holy smokes, that was a hard level you just beat! If you aren't already a software developer, you should be. You just got fast-tracked for acceptance with Viking Code School, where you can take your skills to the next level and become a professional web developer in 14 weeks.",victory_become_a_viking:"Become a Viking",victory_no_progress_for_teachers:"Progress is not saved for teachers. But, you can add a student account to your classroom for yourself.",tome_cast_button_run:"Run",tome_cast_button_running:"Running",tome_cast_button_ran:"Ran",tome_submit_button:"Submit",tome_reload_method:"Reload original code to restart the level",tome_available_spells:"Available Spells",tome_your_skills:"Your Skills",hints:"Hints",hints_title:"Hint {{number}}",code_saved:"Code Saved",skip_tutorial:"Skip (esc)",keyboard_shortcuts:"Key Shortcuts",loading_start:"Start Level",problem_alert_title:"Fix Your Code",time_current:"Now:",time_total:"Max:",time_goto:"Go to:",non_user_code_problem_title:"Unable to Load Level",infinite_loop_title:"Infinite Loop Detected",infinite_loop_description:"The initial code to build the world never finished running. It's probably either really slow or has an infinite loop. Or there might be a bug. You can either try running this code again or reset the code to the default state. If that doesn't fix it, please let us know.",check_dev_console:"You can also open the developer console to see what might be going wrong.",check_dev_console_link:"(instructions)",infinite_loop_try_again:"Try Again",infinite_loop_reset_level:"Reset Level",infinite_loop_comment_out:"Comment Out My Code",tip_toggle_play:"Toggle play/paused with Ctrl+P.",tip_scrub_shortcut:"Use Ctrl+[ and Ctrl+] to rewind and fast-forward.",tip_guide_exists:"Click the guide, inside game menu (at the top of the page), for useful info.",tip_open_source:"CodeCombat is 100% open source!",tip_tell_friends:"Enjoying CodeCombat? Tell your friends about us!",tip_beta_launch:"CodeCombat launched its beta in October, 2013.",tip_think_solution:"Think of the solution, not the problem.",tip_theory_practice:"In theory, there is no difference between theory and practice. But in practice, there is. - Yogi Berra",tip_error_free:"There are two ways to write error-free programs; only the third one works. - Alan Perlis",tip_debugging_program:"If debugging is the process of removing bugs, then programming must be the process of putting them in. - Edsger W. Dijkstra",tip_forums:"Head over to the forums and tell us what you think!",tip_baby_coders:"In the future, even babies will be Archmages.",tip_morale_improves:"Loading will continue until morale improves.",tip_all_species:"We believe in equal opportunities to learn programming for all species.",tip_reticulating:"Reticulating spines.",tip_harry:"Yer a Wizard, ",tip_great_responsibility:"With great coding skill comes great debug responsibility.",tip_munchkin:"If you don't eat your vegetables, a munchkin will come after you while you're asleep.",tip_binary:"There are only 10 types of people in the world: those who understand binary, and those who don't.",tip_commitment_yoda:"A programmer must have the deepest commitment, the most serious mind. ~ Yoda",tip_no_try:"Do. Or do not. There is no try. - Yoda",tip_patience:"Patience you must have, young Padawan. - Yoda",tip_documented_bug:"A documented bug is not a bug; it is a feature.",tip_impossible:"It always seems impossible until it's done. - Nelson Mandela",tip_talk_is_cheap:"Talk is cheap. Show me the code. - Linus Torvalds",tip_first_language:"The most disastrous thing that you can ever learn is your first programming language. - Alan Kay",tip_hardware_problem:"Q: How many programmers does it take to change a light bulb?  A: None, it's a hardware problem.",tip_hofstadters_law:"Hofstadter's Law: It always takes longer than you expect, even when you take into account Hofstadter's Law.",tip_premature_optimization:"Premature optimization is the root of all evil. - Donald Knuth",tip_brute_force:"When in doubt, use brute force. - Ken Thompson",tip_extrapolation:"There are only two kinds of people: those that can extrapolate from incomplete data...",tip_superpower:"Coding is the closest thing we have to a superpower.",tip_control_destiny:"In real open source, you have the right to control your own destiny. - Linus Torvalds",tip_no_code:"No code is faster than no code.",tip_code_never_lies:"Code never lies, comments sometimes do. — Ron Jeffries",tip_reusable_software:"Before software can be reusable it first has to be usable.",tip_optimization_operator:"Every language has an optimization operator. In most languages that operator is ‘//’",tip_lines_of_code:"Measuring programming progress by lines of code is like measuring aircraft building progress by weight. — Bill Gates",tip_source_code:"I want to change the world but they would not give me the source code.",tip_javascript_java:"Java is to JavaScript what Car is to Carpet. - Chris Heilmann",tip_move_forward:"Whatever you do, keep moving forward. - Martin Luther King Jr.",tip_google:"Have a problem you can't solve? Google it!",tip_adding_evil:"Adding a pinch of evil.",tip_hate_computers:"That's the thing about people who think they hate computers. What they really hate is lousy programmers. - Larry Niven",tip_open_source_contribute:"You can help CodeCombat improve!",tip_recurse:"To iterate is human, to recurse divine. - L. Peter Deutsch",tip_free_your_mind:"You have to let it all go, Neo. Fear, doubt, and disbelief. Free your mind. - Morpheus",tip_strong_opponents:"Even the strongest of opponents always has a weakness. - Itachi Uchiha",tip_paper_and_pen:"Before you start coding, you can always plan with a sheet of paper and a pen.",tip_solve_then_write:"First, solve the problem. Then, write the code. - John Johnson",tip_compiler_ignores_comments:"Sometimes I think that the compiler ignores my comments.",tip_understand_recursion:"The only way to understand recursion is to understand recursion.",tip_life_and_polymorphism:"Open Source is like a totally polymorphic heterogeneous structure: All types are welcome.",tip_mistakes_proof_of_trying:"Mistakes in your code are just proof that you are trying.",tip_adding_orgres:"Rounding up ogres.",tip_sharpening_swords:"Sharpening the swords.",tip_ratatouille:"You must not let anyone define your limits because of where you come from. Your only limit is your soul. - Gusteau, Ratatouille",tip_nemo:"When life gets you down, want to know what you've gotta do? Just keep swimming, just keep swimming. - Dory, Finding Nemo",tip_internet_weather:"Just move to the internet, it's great here. We get to live inside where the weather is always awesome. - John Green",tip_nerds:"Nerds are allowed to love stuff, like jump-up-and-down-in-the-chair-can't-control-yourself love it. - John Green",tip_self_taught:"I taught myself 90% of what I've learned. And that's normal! - Hank Green",tip_luna_lovegood:"Don't worry, you're just as sane as I am. - Luna Lovegood",tip_good_idea:"The best way to have a good idea is to have a lot of ideas. - Linus Pauling",tip_programming_not_about_computers:"Computer Science is no more about computers than astronomy is about telescopes. - Edsger Dijkstra",tip_mulan:"Believe you can, then you will. - Mulan"},play_game_dev_level:{created_by:"Created by {{name}}",restart:"Restart Level",play:"Play Level",play_more_codecombat:"Play More CodeCombat",default_student_instructions:"Click to control your hero and win your game!"},game_menu:{inventory_tab:"Inventory",save_load_tab:"Save/Load",options_tab:"Options",guide_tab:"Guide",guide_video_tutorial:"Video Tutorial",guide_tips:"Tips",multiplayer_tab:"Multiplayer",auth_tab:"Sign Up",inventory_caption:"Equip your hero",choose_hero_caption:"Choose hero, language",save_load_caption:"... and view history",options_caption:"Configure settings",guide_caption:"Docs and tips",multiplayer_caption:"Play with friends!",auth_caption:"Save your progress."},leaderboard:{view_other_solutions:"View Leaderboards",scores:"Scores",top_players:"Top Players by",day:"Today",week:"This Week",all:"All-Time",latest:"Latest",time:"Time",damage_taken:"Damage Taken",damage_dealt:"Damage Dealt",difficulty:"Difficulty",gold_collected:"Gold Collected"},inventory:{equipped_item:"Equipped",required_purchase_title:"Required",available_item:"Available",restricted_title:"Restricted",should_equip:"(double-click to equip)",equipped:"(equipped)",locked:"(locked)",restricted:"(restricted in this level)",equip:"Equip",unequip:"Unequip"},buy_gems:{few_gems:"A few gems",pile_gems:"Pile of gems",chest_gems:"Chest of gems",purchasing:"Purchasing...",declined:"Your card was declined",retrying:"Server error, retrying.",prompt_title:"Not Enough Gems",prompt_body:"Do you want to get more?",prompt_button:"Enter Shop",recovered:"Previous gems purchase recovered. Please refresh the page.",price:"x{{gems}} / mo",buy_premium:"Buy Premium",purchase:"Purchase",purchased:"Purchased"},earn_gems:{prompt_title:"Not Enough Gems",prompt_body:"Keep playing to earn more!"},subscribe:{subscribe_modal_title:"CodeCombat Premium",comparison_blurb:"Become a Master Coder - subscribe to <b>Premium</b> today!",premium_pricing_prefix:"Get Premium for just",premium_pricing_suffix:"and become a master coder.",premium:"Premium",free:"Free",month:"month",must_be_logged:"You must be logged in first. Please create an account or log in from the menu above.",subscribe_title:"Subscribe",unsubscribe:"Unsubscribe",confirm_unsubscribe:"Confirm Unsubscribe",never_mind:"Never Mind, I Still Love You",thank_you_months_prefix:"Thank you for supporting us these last",thank_you_months_suffix:"months.",thank_you:"Thank you for supporting CodeCombat.",sorry_to_see_you_go:"Sorry to see you go! Please let us know what we could have done better.",unsubscribe_feedback_placeholder:"O, what have we done?",parent_button:"Ask your parent",parent_email_description:"We'll email them so they can buy you a CodeCombat subscription.",parent_email_input_invalid:"Email address invalid.",parent_email_input_label:"Parent email address",parent_email_input_placeholder:"Enter parent email",parent_email_send:"Send Email",parent_email_sent:"Email sent!",parent_email_title:"What's your parent's email?",parents:"For Parents",parents_title:"Dear Parent: Your child is learning to code. Will you help them continue?",parents_blurb1:"Your child has played __nLevels__ levels and learned programming basics. Help cultivate their interest and buy them a subscription so they can keep playing.",parents_blurb1a:"Computer programming is an essential skill that your child will undoubtedly use as an adult. By 2020, basic software skills will be needed by 77% of jobs, and software engineers are in high demand across the world. Did you know that Computer Science is the highest-paid university degree?",parents_blurb2:"For ${{price}} USD/mo, your child will get new challenges every week and personal email support from professional programmers.",parents_blurb3:"No Risk: 100% money back guarantee, easy 1-click unsubscribe.",payment_methods:"Payment Methods",payment_methods_title:"Accepted Payment Methods",payment_methods_blurb1:"We currently accept credit cards and Alipay. You can also PayPal {{three_month_price}} USD to nick@codecombat.com with your account email in the memo to purchase three months' subscription and gems, or ${{year_price}} for a year.",payment_methods_blurb2:"If you require an alternate form of payment, please contact",sale_button:"Sale!",sale_button_title:"Save $21 when you purchase a 1 year subscription",stripe_description:"Monthly Subscription",stripe_description_year_sale:"1 Year Subscription (${{discount}} discount)",buy_now:"Buy Now",subscription_required_to_play:"You'll need a subscription to play this level.",unlock_help_videos:"Subscribe to unlock all video tutorials.",personal_sub:"Personal Subscription",loading_info:"Loading subscription information...",managed_by:"Managed by",will_be_cancelled:"Will be cancelled on",currently_free:"You currently have a free subscription",currently_free_until:"You currently have a subscription until",free_subscription:"Free subscription",was_free_until:"You had a free subscription until",managed_subs:"Managed Subscriptions",subscribing:"Subscribing...",current_recipients:"Current Recipients",unsubscribing:"Unsubscribing",subscribe_prepaid:"Click Subscribe to use prepaid code",using_prepaid:"Using prepaid code for monthly subscription",feature_levels:"Access __premiumLevelsCount__ levels available",feature_gems:"Receive __gems__ gems per month",feature_heroes:"Unlock exclusive heroes",feature_games:"Make games for your friends",feature_websites:"Build websites and apps",feature_items:"Equip more powerful items",month_price:"$__price__/mo",lifetime:"Lifetime Subscription",lifetime_price:"$__price__",year_subscription:"Yearly Subscription",year_price:"$__price__/year",kids_message_1:"Kids! We'll send an email to your parents so they can purchase a subscription for you.",kids_message_2:"Ask Your Parent",support_part1:"Need help with payment options? Email",support_part2:"support@codecombat.com",support_part3:"if you have any questions."},announcement:{now_available:"Now available for subscribers!",subscriber:"subscriber",cuddly_companions:"Cuddly Companions!",kindling_name:"Kindling Elemental",kindling_description:"Kindling Elementals just want to keep you warm at night. And during the day. All the time, really.",griffin_name:"Baby Griffin",griffin_description:"Griffins are half eagle, half lion, all adorable.",raven_name:"Raven",raven_description:"Ravens are excellent at gathering shiny bottles full of health for you.",mimic_name:"Mimic",mimic_description:"Mimics can pick up coins for you. Move them on top of coins to increase your gold supply.",cougar_name:"Cougar",cougar_description:"Cougars like to earn a PhD by Purring Happily Daily.",fox_name:"Blue Fox",fox_description:"Blue foxes are very clever and love digging in the dirt and snow!",pugicorn_name:"Pugicorn",pugicorn_description:"Pugicorns are some of the rarest creatures and can cast spells!",wolf_name:"Wolf Pup",wolf_description:"Wolf pups excel in hunting, gathering, and playing a mean game of hide-and-seek!",ball_name:"Red Squeaky Ball",ball_description:"ball.squeak()",collect_pets:"Collect pets for your heroes!",each_pet:"Each pet has a unique helper ability!",upgrade_to_premium:"Become a {{subscriber}} to equip pets.",play_second_kithmaze:"Play {{the_second_kithmaze}} to unlock the Wolf Pup!",the_second_kithmaze:"The Second Kithmaze",keep_playing:"Keep playing to discover the first pet!",coming_soon:"Coming soon",ritic:"Ritic the Cold",ritic_description:"Ritic the Cold. Trapped in Kelvintaph Glacier for countless ages, finally free and ready to tend to the ogres that imprisoned him.",
ice_block:"A block of ice",ice_description:"There appears to be something trapped inside...",blink_name:"Blink",blink_description:"Ritic disappears and reappears in a blink of an eye, leaving nothing but a shadow.",shadowStep_name:"Shadowstep",shadowStep_description:"A master assassin knows how to walk between the shadows.",tornado_name:"Tornado",tornado_description:"It is good to have a reset button when one's cover is blown.",wallOfDarkness_name:"Wall of Darkness",wallOfDarkness_description:"Hide behind a wall of shadows to prevent the gaze of prying eyes."},premium_features:{get_premium:"Get<br>CodeCombat<br>Premium",master_coder:"Become a Master Coder by subscribing today!",subscribe_now:"Subscribe Now",hero_blurb_1:'Get access to __premiumHeroesCount__ super-charged subscriber-only heroes! Harness the unstoppable power of Okar Stompfoot, the deadly precision of Naria of the Leaf, or summon "adorable" skeletons with Nalfar Cryptor.',hero_blurb_2:"Premium Warriors unlock stunning martial skills like Warcry, Stomp, and Hurl Enemy. Or, play as a Ranger, using stealth and bows, throwing knives, traps! Try your skill as a true coding Wizard, and unleash a powerful array of Primordial, Necromantic or Elemental magic!",hero_caption:"Exciting new heroes!",pet_blurb_1:"Pets aren't just adorable companions, they also provide unique functionality and methods. The Baby Griffin can fly over obstacles while helping the hero, the Wolf Pup can fetch potions, and the Cougar can speak!",pet_blurb_2:"Collect all the pets to discover their unique abilities!",pet_caption:"Adopt pets to accompany your hero!",game_dev_blurb:"Learn game scripting and build new levels to share with your friends! Place the items you want, write code for unit logic and behavior, and see if your friends can beat the level!",game_dev_caption:"Design your own games to challenge your friends!",everything_in_premium:"Everything you get in CodeCombat Premium:",list_gems:"Receive bonus gems every month to buy gear, pets, and heroes",list_levels:"Gain access to __premiumLevelsCount__ more levels",list_heroes:"Unlock exclusive heroes, include Ranger and Wizard classes",list_game_dev:"Make and share games with friends",list_web_dev:"Build websites and interactive apps",list_items:"Equip Premium-only items like pets",list_support:"Get Premium support to help you debug tricky code",list_clans:"Create private clans to invite your friends and compete on a group leaderboard"},choose_hero:{choose_hero:"Choose Your Hero",programming_language:"Programming Language",programming_language_description:"Which programming language do you want to use?",default:"Default",experimental:"Experimental",python_blurb:"Simple yet powerful, great for beginners and experts.",javascript_blurb:"The language of the web. (Not the same as Java.)",coffeescript_blurb:"Nicer JavaScript syntax.",lua_blurb:"Game scripting language.",java_blurb:"(Subscriber Only) Android and enterprise.",status:"Status",weapons:"Weapons",weapons_warrior:"Swords - Short Range, No Magic",weapons_ranger:"Crossbows, Guns - Long Range, No Magic",weapons_wizard:"Wands, Staffs - Long Range, Magic",attack:"Damage",health:"Health",speed:"Speed",regeneration:"Regeneration",range:"Range",blocks:"Blocks",backstab:"Backstab",skills:"Skills",attack_1:"Deals",attack_2:"of listed",attack_3:"weapon damage.",health_1:"Gains",health_2:"of listed",health_3:"armor health.",speed_1:"Moves at",speed_2:"meters per second.",available_for_purchase:"Available for Purchase",level_to_unlock:"Level to unlock:",restricted_to_certain_heroes:"Only certain heroes can play this level."},skill_docs:{function:"function",method:"method",snippet:"snippet",number:"number",array:"array",object:"object",string:"string",writable:"writable",read_only:"read-only",action:"Action",spell:"Spell",action_name:"name",action_cooldown:"Takes",action_specific_cooldown:"Cooldown",action_damage:"Damage",action_range:"Range",action_radius:"Radius",action_duration:"Duration",example:"Example",ex:"ex",current_value:"Current Value",default_value:"Default value",parameters:"Parameters",required_parameters:"Required Parameters",optional_parameters:"Optional Parameters",returns:"Returns",granted_by:"Granted by"},save_load:{granularity_saved_games:"Saved",granularity_change_history:"History"},options:{general_options:"General Options",volume_label:"Volume",music_label:"Music",music_description:"Turn background music on/off.",editor_config_title:"Editor Configuration",editor_config_livecompletion_label:"Live Autocompletion",editor_config_livecompletion_description:"Displays autocomplete suggestions while typing.",editor_config_invisibles_label:"Show Invisibles",editor_config_invisibles_description:"Displays invisibles such as spaces or tabs.",editor_config_indentguides_label:"Show Indent Guides",editor_config_indentguides_description:"Displays vertical lines to see indentation better.",editor_config_behaviors_label:"Smart Behaviors",editor_config_behaviors_description:"Autocompletes brackets, braces, and quotes."},about:{main_title:"If you want to learn to program, you need to write (a lot of) code.",main_description:"At CodeCombat, our job is to make sure you're doing that with a smile on your face.",mission_link:"Mission",team_link:"Team",story_link:"Story",press_link:"Press",mission_title:"Our mission: make programming accessible to every student on Earth.",mission_description_1:"<strong>Programming is magic</strong>. It's the ability to create things from pure imagination. We started CodeCombat to give learners the feeling of wizardly power at their fingertips by using <strong>typed code</strong>.",mission_description_2:"As it turns out, that enables them to learn faster too. WAY faster. It's like having a conversation instead of reading a manual. We want to bring that conversation to every school and to <strong>every student</strong>, because everyone should have the chance to learn the magic of programming.",team_title:"Meet the CodeCombat team",team_values:"We value open and respectful dialog, where the best idea wins. Our decisions are grounded in customer research and our process is focused on delivering tangible results for them. Everyone is hands-on, from our CEO to our GitHub contributors, because we value growth and learning in our team.",nick_title:"Cofounder, CEO",nick_blurb:"Motivation Guru",matt_title:"Cofounder, CTO",cat_title:"Game Designer",cat_blurb:"Airbender",scott_title:"Cofounder, Software Engineer",scott_blurb:"Reasonable One",maka_title:"Customer Advocate",maka_blurb:"Storyteller",rob_title:"Software Engineer",rob_blurb:"Codes things and stuff",josh_c_title:"Game Designer",josh_c_blurb:"Designs games",robin_title:"Product Manager",robin_blurb:"Ships things",josh_title:"Game Designer",josh_blurb:"Floor Is Lava",phoenix_title:"Software Engineer",nolan_title:"Territory Manager",elliot_title:"Partnership Manager",elliot_blurb:"Mindreader",lisa_title:"School Specialist",lisa_blurb:"A gritty one",sean_title:"Territory Manager",liz_title:"Territory Manager",retrostyle_title:"Illustration",retrostyle_blurb:"RetroStyle Games",jose_title:"Music",jose_blurb:"Taking Off",community_title:"...and our open-source community",community_subtitle:"Over 500 contributors have helped build CodeCombat, with more joining every week!",community_description_3:"CodeCombat is a",community_description_link_2:"community project",community_description_1:"with hundreds of players volunteering to create levels, contribute to our code to add features, fix bugs, playtest, and even translate the game into 50 languages so far. Employees, contributors and the site gain by sharing ideas and pooling effort, as does the open source community in general. The site is built on numerous open source projects, and we are open sourced to give back to the community and provide code-curious players a familiar project to explore and experiment with. Anyone can join the CodeCombat community! Check out our",community_description_link:"contribute page",community_description_2:"for more info.",number_contributors:"Over 450 contributors have lent their support and time to this project.",story_title:"Our story so far",story_subtitle:"Since 2013, CodeCombat has grown from a mere set of sketches to a living, thriving game.",story_statistic_1a:"5,000,000+",story_statistic_1b:"total players",story_statistic_1c:"have started their programming journey through CodeCombat",story_statistic_2a:"We’ve been translated into over 50 languages — our players hail from",story_statistic_2b:"200+ countries",story_statistic_3a:"Together, they have written",story_statistic_3b:"1 billion lines of code and counting",story_statistic_3c:"across many different programming languages",story_long_way_1:"Though we've come a long way...",story_sketch_caption:"Nick's very first sketch depicting a programming game in action.",story_long_way_2:"we still have much to do before we complete our quest, so...",jobs_title:"Come work with us and help write CodeCombat history!",jobs_subtitle:'Don\'t see a good fit but interested in keeping in touch? See our "Create Your Own" listing.',jobs_benefits:"Employee Benefits",jobs_benefit_4:"Unlimited vacation",jobs_benefit_5:"Professional development and continuing education support – free books and games!",jobs_benefit_6:"Medical (gold), dental, vision, commuter",jobs_benefit_7:"Sit-stand desks for all",jobs_benefit_9:"10-year option exercise window",jobs_benefit_10:"Maternity leave: 10 weeks paid, next 6 @ 55% salary",jobs_benefit_11:"Paternity leave: 10 weeks paid",learn_more:"Learn More",jobs_custom_title:"Create Your Own",jobs_custom_description:"Are you passionate about CodeCombat but don't see a job listed that matches your qualifications? Write us and show how you think you can contribute to our team. We'd love to hear from you!",jobs_custom_contact_1:"Send us a note at",jobs_custom_contact_2:"introducing yourself and we might get in touch in the future!",contact_title:"Press & Contact",contact_subtitle:"Need more information? Get in touch with us at",screenshots_title:"Game Screenshots",screenshots_hint:"(click to view full size)",downloads_title:"Download Assets & Information",about_codecombat:"About CodeCombat",logo:"Logo",screenshots:"Screenshots",character_art:"Character Art",download_all:"Download All",previous:"Previous",location_title:"We're located in downtown SF:"},teachers:{licenses_needed:"Licenses needed"},special_offer:{special_offer:"Special Offer",project_based_title:"Project-Based Courses",project_based_description:"Web and Game Development courses feature shareable final projects.",great_for_clubs_title:"Great for clubs and electives",great_for_clubs_description:"Teachers can purchase up to __maxQuantityStarterLicenses__ Starter Licenses per year.",low_price_title:"Just __starterLicensePrice__ per student",low_price_description:"Starter Licenses are active for __starterLicenseLengthMonths__ months from purchase.",three_great_courses:"Three great courses included in the Starter License:",license_limit_description:"Teachers can purchase up to __maxQuantityStarterLicenses__ Starter Licenses. You have already purchased __quantityAlreadyPurchased__. If you need more, contact __supportEmail__. Starter Licenses are valid for __starterLicenseLengthMonths__ months.",student_starter_license:"Student Starter License",purchase_starter_licenses:"Purchase Starter Licenses",purchase_starter_licenses_to_grant:"Purchase Starter Licenses to grant access to __starterLicenseCourseList__",starter_licenses_can_be_used:"Starter Licenses can be used to assign additional courses immediately after purchase.",pay_now:"Pay Now",we_accept_all_major_credit_cards:"We accept all major credit cards.",cs2_description:"builds on the foundation from Introduction to Computer Science, diving into if-statements, functions, events and more.",wd1_description:"introduces the basics of HTML and CSS while teaching skills needed for students to build their first webpage.",gd1_description:"uses syntax students are already familiar with to show them how to build and share their own playable game levels.",see_an_example_project:"see an example project",get_started_today:"Get started today!",want_all_the_courses:"Want all the courses? Request information on our Full Licenses.",compare_license_types:"Compare License Types:",cs:"Computer Science",wd:"Web Development",wd1:"Web Development 1",gd:"Game Development",gd1:"Game Development 1",maximum_students:"Maximum # of Students",unlimited:"Unlimited",priority_support:"Priority support",yes:"Yes",price_per_student:"__price__ per student",pricing:"Pricing",free:"Free",purchase:"Purchase",courses_prefix:"Courses",courses_suffix:"",course_prefix:"Course",course_suffix:""},teachers_quote:{subtitle:"Get your students started in less than an hour. You'll be able to <strong>create a class, add students, and monitor their progress</strong> as they learn computer science.",email_exists:"User exists with this email.",phone_number:"Phone number",phone_number_help:"Where can we reach you during the workday?",primary_role_label:"Your Primary Role",role_default:"Select Role",primary_role_default:"Select Primary Role",purchaser_role_default:"Select Purchaser Role",tech_coordinator:"Technology coordinator",advisor:"Curriculum Specialist/Advisor",principal:"Principal",superintendent:"Superintendent",parent:"Parent",purchaser_role_label:"Your Purchaser Role",influence_advocate:"Influence/Advocate",evaluate_recommend:"Evaluate/Recommend",approve_funds:"Approve Funds",no_purchaser_role:"No role in purchase decisions",district_label:"District",district_name:"District Name",district_na:"Enter N/A if not applicable",organization_label:"School",school_name:"School Name",city:"City",state:"State",country:"Country",num_students_help:"How many students do you anticipate using CodeCombat with?",num_students_default:"Select Range",education_level_label:"Education Level of Students",education_level_help:"Choose as many as apply.",elementary_school:"Elementary School",high_school:"High School",please_explain:"(please explain)",middle_school:"Middle School",college_plus:"College or higher",referrer:"How did you hear about us?",referrer_help:"For example: from another teacher, a conference, your students, Code.org, etc.",anything_else:"Anything else we should know?",thanks_header:"Request Received!",thanks_sub_header:"Thanks for expressing interest in CodeCombat for your school.",thanks_p:"We'll be in touch soon! If you need to get in contact, you can reach us at:",back_to_classes:"Back to Classes",finish_signup:"Finish creating your teacher account:",finish_signup_p:"Create an account to set up a class, add your students, and monitor their progress as they learn computer science.",signup_with:"Sign up with:",connect_with:"Connect with:",conversion_warning:"WARNING: Your current account is a <em>Student Account</em>. Once you submit this form, your account will be updated to a Teacher Account.",learn_more_modal:"Teacher accounts on CodeCombat have the ability to monitor student progress, assign licenses and manage classrooms. Teacher accounts cannot be a part of a classroom - if you are currently enrolled in a class using this account, you will no longer be able to access it once you update to a Teacher Account.",create_account:"Create a Teacher Account",create_account_subtitle:"Get access to teacher-only tools for using CodeCombat in the classroom.  <strong>Set up a class</strong>, add your students, and <strong>monitor their progress</strong>!",convert_account_title:"Update to Teacher Account",not:"Not"},versions:{save_version_title:"Save New Version",new_major_version:"New Major Version",submitting_patch:"Submitting Patch...",cla_prefix:"To save changes, first you must agree to our",cla_url:"CLA",cla_suffix:".",cla_agree:"I AGREE",owner_approve:"An owner will need to approve it before your changes will become visible."},contact:{contact_us:"Contact CodeCombat",welcome:"Good to hear from you! Use this form to send us email. ",forum_prefix:"For anything public, please try ",forum_page:"our forum",forum_suffix:" instead.",faq_prefix:"There's also a",faq:"FAQ",subscribe_prefix:"If you need help figuring out a level, please",subscribe:"buy a CodeCombat subscription",subscribe_suffix:"and we'll be happy to help you with your code.",subscriber_support:"Since you're a CodeCombat subscriber, your email will get our priority support.",screenshot_included:"Screenshot included.",where_reply:"Where should we reply?",send:"Send Feedback"},account_settings:{title:"Account Settings",not_logged_in:"Log in or create an account to change your settings.",me_tab:"Me",picture_tab:"Picture",delete_account_tab:"Delete Your Account",wrong_email:"Wrong Email",wrong_password:"Wrong Password",upload_picture:"Upload a picture",delete_this_account:"Delete this account permanently",reset_progress_tab:"Reset All Progress",reset_your_progress:"Clear all your progress and start over",god_mode:"God Mode",emails_tab:"Emails",admin:"Admin",manage_subscription:"Click here to manage your subscription.",new_password:"New Password",new_password_verify:"Verify",type_in_email:"Type in your email or username to confirm account deletion.",type_in_email_progress:"Type in your email to confirm deleting your progress.",type_in_password:"Also, type in your password.",email_subscriptions:"Email Subscriptions",email_subscriptions_none:"No Email Subscriptions.",email_announcements:"Announcements",email_announcements_description:"Get emails on the latest news and developments at CodeCombat.",email_notifications:"Notifications",email_notifications_summary:"Controls for personalized, automatic email notifications related to your CodeCombat activity.",email_any_notes:"Any Notifications",email_any_notes_description:"Disable to stop all activity notification emails.",email_news:"News",email_recruit_notes:"Job Opportunities",email_recruit_notes_description:"If you play really well, we may contact you about getting you a (better) job.",contributor_emails:"Contributor Class Emails",contribute_prefix:"We're looking for people to join our party! Check out the ",contribute_page:"contribute page",contribute_suffix:" to find out more.",email_toggle:"Toggle All",error_saving:"Error Saving",saved:"Changes Saved",password_mismatch:"Password does not match.",password_repeat:"Please repeat your password.",file_size_limit:"(max file size: 1MB)"},keyboard_shortcuts:{keyboard_shortcuts:"Keyboard Shortcuts",space:"Space",enter:"Enter",press_enter:"press enter",escape:"Escape",shift:"Shift",run_code:"Run current code.",run_real_time:"Run in real time.",continue_script:"Continue past current script.",skip_scripts:"Skip past all skippable scripts.",toggle_playback:"Toggle play/pause.",scrub_playback:"Scrub back and forward through time.",single_scrub_playback:"Scrub back and forward through time by a single frame.",scrub_execution:"Scrub through current spell execution.",toggle_debug:"Toggle debug display.",toggle_grid:"Toggle grid overlay.",toggle_pathfinding:"Toggle pathfinding overlay.",beautify:"Beautify your code by standardizing its formatting.",maximize_editor:"Maximize/minimize code editor."},community:{main_title:"CodeCombat Community",introduction:"Check out the ways you can get involved below and decide what sounds the most fun. We look forward to working with you!",level_editor_prefix:"Use the CodeCombat",level_editor_suffix:"to create and edit levels. Users have created levels for their classes, friends, hackathons, students, and siblings. If create a new level sounds intimidating you can start by forking one of ours!",thang_editor_prefix:"We call units within the game 'thangs'. Use the",thang_editor_suffix:"to modify the CodeCombat source artwork. Allow units to throw projectiles, alter the direction of an animation, change a unit's hit points, or upload your own vector sprites.",article_editor_prefix:"See a mistake in some of our docs? Want to make some instructions for your own creations? Check out the",article_editor_suffix:"and help CodeCombat players get the most out of their playtime.",find_us:"Find us on these sites",social_github:"Check out all our code on GitHub",social_blog:"Read the CodeCombat blog on Sett",social_discource:"Join the discussion on our Discourse forum",social_facebook:"Like CodeCombat on Facebook",social_twitter:"Follow CodeCombat on Twitter",social_gplus:"Join CodeCombat on Google+",social_slack:"Chat with us in the public CodeCombat Slack channel",contribute_to_the_project:"Contribute to the project"},clans:{clan:"Clan",clans:"Clans",new_name:"New clan name",new_description:"New clan description",make_private:"Make clan private",subs_only:"subscribers only",create_clan:"Create New Clan",private_preview:"Preview",private_clans:"Private Clans",public_clans:"Public Clans",my_clans:"My Clans",clan_name:"Clan Name",name:"Name",chieftain:"Chieftain",edit_clan_name:"Edit Clan Name",edit_clan_description:"Edit Clan Description",edit_name:"edit name",edit_description:"edit description",private:"(private)",summary:"Summary",average_level:"Average Level",average_achievements:"Average Achievements",delete_clan:"Delete Clan",leave_clan:"Leave Clan",join_clan:"Join Clan",invite_1:"Invite:",invite_2:"*Invite players to this Clan by sending them this link.",members:"Members",progress:"Progress",not_started_1:"not started",started_1:"started",complete_1:"complete",exp_levels:"Expand levels",rem_hero:"Remove Hero",status:"Status",complete_2:"Complete",started_2:"Started",not_started_2:"Not Started",view_solution:"Click to view solution.",view_attempt:"Click to view attempt.",latest_achievement:"Latest Achievement",playtime:"Playtime",last_played:"Last played",leagues_explanation:"Play in a league against other clan members in these multiplayer arena instances.",track_concepts1:"Track concepts",track_concepts2a:"learned by each student",track_concepts2b:"learned by each member",track_concepts3a:"Track levels completed for each student",track_concepts3b:"Track levels completed for each member",track_concepts4a:"See your students'",track_concepts4b:"See your members'",track_concepts5:"solutions",track_concepts6a:"Sort students by name or progress",track_concepts6b:"Sort members by name or progress",track_concepts7:"Requires invitation",track_concepts8:"to join",private_require_sub:"Private clans require a subscription to create or join."},courses:{create_new_class:"Create New Class",unnamed_class:"Unnamed Class",edit_settings1:"Edit Class Settings",add_students:"Add Students",stats:"Statistics",total_students:"Total students:",average_time:"Average level play time:",total_time:"Total play time:",average_levels:"Average levels completed:",total_levels:"Total levels completed:",students:"Students",concepts:"Concepts",play_time:"Play time:",completed:"Completed:",enter_emails:"Separate each email address by a line break or commas",send_invites:"Invite Students",number_programming_students:"Number of Programming Students",number_total_students:"Total Students in School/District",enroll:"Enroll",enroll_paid:"Enroll Students in Paid Courses",get_enrollments:"Get More Licenses",change_language:"Change Course Language",keep_using:"Keep Using",switch_to:"Switch To",greetings:"Greetings!",back_classrooms:"Back to my classrooms",back_courses:"Back to my courses",edit_details:"Edit class details",purchase_enrollments:"Purchase Student Licenses",remove_student:"remove student",assign:"Assign",to_assign:"to assign paid courses.",student:"Student",teacher:"Teacher",arena:"Arena",available_levels:"Available Levels",started:"started",complete:"complete",practice:"practice",required:"required",welcome_to_courses:"Adventurers, welcome to Courses!",ready_to_play:"Ready to play?",start_new_game:"Start New Game",play_now_learn_header:"Play now to learn",play_now_learn_1:"basic syntax to control your character",play_now_learn_2:"while loops to solve pesky puzzles",play_now_learn_3:"strings & variables to customize actions",play_now_learn_4:"how to defeat an ogre (important life skills!)",welcome_to_page:"My Student Dashboard",my_classes:"Current Classes",class_added:"Class successfully added!",view_levels:"view all levels in course",join_class:"Join A Class",join_class_2:"Join class",ask_teacher_for_code:"Ask your teacher if you have a CodeCombat class code! If so, enter it below:",enter_c_code:"<Enter Class Code>",join:"Join",joining:"Joining class",course_complete:"Course Complete",play_arena:"Play Arena",view_project:"View Project",start:"Start",last_level:"Last level played",not_you:"Not you?",continue_playing:"Continue Playing",option1_header:"Invite Students by Email",option1_body:"Note: If your students do not have email addresses, they can enter your unique Class Code when creating a Student Account to make email addresses optional.",remove_student1:"Remove Student",are_you_sure:"Are you sure you want to remove this student from this class?",remove_description1:"Student will lose access to this classroom and assigned classes. Progress and gameplay is NOT lost, and the student can be added back to the classroom at any time.",remove_description2:"The activated paid license will not be returned.",keep_student:"Keep Student",removing_user:"Removing user",subtitle:"Review course overviews and levels",changelog:"View latest changes to course levels.",select_language:"Select language",select_level:"Select level",play_level:"Play Level",concepts_covered:"Concepts covered",view_guide_online:"Level Overviews and Solutions",grants_lifetime_access:"Grants access to all Courses.",enrollment_credits_available:"Licenses Available:",language_select:"Select a language",language_cannot_change:"Language cannot be changed once students join a class.",avg_student_exp_label:"Average Student Programming Experience",avg_student_exp_desc:"This will help us understand how to pace courses better.",avg_student_exp_select:"Select the best option",avg_student_exp_none:"No Experience - little to no experience",avg_student_exp_beginner:"Beginner - some exposure or block-based",avg_student_exp_intermediate:"Intermediate - some experience with typed code",avg_student_exp_advanced:"Advanced - extensive experience with typed code",avg_student_exp_varied:"Varied Levels of Experience",student_age_range_label:"Student Age Range",student_age_range_younger:"Younger than 6",student_age_range_older:"Older than 18",student_age_range_to:"to",create_class:"Create Class",class_name:"Class Name",teacher_account_restricted:"Your account is a teacher account and cannot access student content.",account_restricted:"A student account is required to access this page.",update_account_login_title:"Log in to update your account",update_account_title:"Your account needs attention!",update_account_blurb:"Before you can access your classes, choose how you want to use this account.",update_account_current_type:"Current Account Type:",update_account_account_email:"Account Email/Username:",update_account_am_teacher:"I am a teacher",update_account_keep_access:"Keep access to classes I've created",update_account_teachers_can:"Teacher accounts can:",update_account_teachers_can1:"Create/manage/add classes",update_account_teachers_can2:"Assign/enroll students in courses",update_account_teachers_can3:"Unlock all course levels to try out",update_account_teachers_can4:"Access new teacher-only features as we release them",update_account_teachers_warning:"Warning: You will be removed from all classes that you have previously joined and will not be able to play as a student.",update_account_remain_teacher:"Remain a Teacher",update_account_update_teacher:"Update to Teacher",update_account_am_student:"I am a student",update_account_remove_access:"Remove access to classes I have created",update_account_students_can:"Student accounts can:",update_account_students_can1:"Join classes",update_account_students_can2:"Play through courses as a student and track your own progress",update_account_students_can3:"Compete against classmates in arenas",update_account_students_can4:"Access new student-only features as we release them",update_account_students_warning:"Warning: You will not be able to manage any classes that you have previously created or create new classes.",unsubscribe_warning:"Warning: You will be unsubscribed from your monthly subscription.",update_account_remain_student:"Remain a Student",update_account_update_student:"Update to Student",need_a_class_code:"You'll need a Class Code for the class you're joining:",update_account_not_sure:"Not sure which one to choose? Email",update_account_confirm_update_student:"Are you sure you want to update your account to a Student experience?",update_account_confirm_update_student2:"You will not be able to manage any classes that you have previously created or create new classes. Your previously created classes will be removed from CodeCombat and cannot be restored.",instructor:"Instructor: ",youve_been_invited_1:"You've been invited to join ",youve_been_invited_2:", where you'll learn ",youve_been_invited_3:" with your classmates in CodeCombat.",by_joining_1:"By joining ",by_joining_2:"will be able to help reset your password if you forget or lose it. You can also verify your email address so that you can reset the password yourself!",sent_verification:"We've sent a verification email to:",you_can_edit:"You can edit your email address in ",account_settings:"Account Settings",select_your_hero:"Select Your Hero",select_your_hero_description:'You can always change your hero by going to your Courses page and clicking "Change Hero"',select_this_hero:"Select this Hero",current_hero:"Current Hero:",change_hero:"Change Hero",web_dev_language_transition:"All classes program in HTML / JavaScript for this course.  Classes that have been using Python will start with extra JavaScript intro levels to ease the transition.  Classes that are already using JavaScript will skip the intro levels.",course_membership_required_to_play:"You'll need to join a course to play this level.",license_required_to_play:"Ask your teacher to assign a license to you so you can continue to play CodeCombat!"},teacher:{assigning_course:"Assigning course",course_solution:"Course Solution",level_overview_solutions:"Level Overview and Solutions",no_student_assigned:"No students have been assigned this course.",paren_new:"(new)",teacher_dashboard:"Teacher Dashboard",my_classes:"My Classes",courses:"Course Guides",enrollments:"Student Licenses",resources:"Resources",help:"Help",language:"Language",edit_class_settings:"edit class settings",access_restricted:"Account Update Required",teacher_account_required:"A teacher account is required to access this content.",create_teacher_account:"Create Teacher Account",what_is_a_teacher_account:"What's a Teacher Account?",teacher_account_explanation:"A CodeCombat Teacher account allows you to set up classrooms, monitor students’ progress as they work through courses, manage licenses and access resources to aid in your curriculum-building.",current_classes:"Current Classes",archived_classes:"Archived Classes",archived_classes_blurb:"Classes can be archived for future reference. Unarchive a class to view it in the Current Classes list again.",view_class:"view class",archive_class:"archive class",unarchive_class:"unarchive class",unarchive_this_class:"Unarchive this class",no_students_yet:"This class has no students yet.",no_students_yet_view_class:"View class to add students.",try_refreshing:"(You may need to refresh the page)",create_new_class:"Create a New Class",class_overview:"Class Overview",avg_playtime:"Average level playtime",total_playtime:"Total play time",avg_completed:"Average levels completed",total_completed:"Total levels completed",created:"Created",concepts_covered:"Concepts covered",earliest_incomplete:"Earliest incomplete level",latest_complete:"Latest completed level",enroll_student:"Enroll student",apply_license:"Apply License",revoke_license:"Revoke License",course_progress:"Course Progress",
not_applicable:"N/A",edit:"edit",edit_2:"Edit",remove:"remove",latest_completed:"Latest completed:",sort_by:"Sort by",progress:"Progress",completed:"Completed",practice:"Practice",started:"Started",click_to_view_progress:"click to view progress",no_progress:"No progress",not_required:"Not required",select_course:"Select course to view",progress_color_key:"Progress color key:",level_in_progress:"Level in Progress",level_not_started:"Level Not Started",project_or_arena:"Project or Arena",students_not_assigned:"Students who have not been assigned {{courseName}}",course_overview:"Course Overview",copy_class_code:"Copy Class Code",class_code_blurb:"Students can join your class using this Class Code. No email address is required when creating a Student account with this Class Code.",copy_class_url:"Copy Class URL",class_join_url_blurb:"You can also post this unique class URL to a shared webpage.",add_students_manually:"Invite Students by Email",bulk_assign:"Bulk-assign",assigned_msg_1:"{{numberAssigned}} students were assigned {{courseName}}.",assigned_msg_2:"{{numberEnrolled}} licenses were applied.",assigned_msg_3:"You now have {{remainingSpots}} available licenses remaining.",assign_course:"Assign Course",not_assigned_modal_title:"Courses were not assigned",not_assigned_modal_starter_body_1:"This course requires a Starter License. You do not have enough Starter Licenses available to assign this course to all __selected__ selected students.",not_assigned_modal_starter_body_2:"Purchase Starter Licenses to grant access to this course.",not_assigned_modal_full_body_1:"This course requires a Full License. You do not have enough Full Licenses available to assign this course to all __selected__ selected students.",not_assigned_modal_full_body_2:"You only have __numFullLicensesAvailable__ Full Licenses available (__numStudentsWithoutFullLicenses__ students do not currently have a Full License active).",not_assigned_modal_full_body_3:"Please select fewer students, or reach out to __supportEmail__ for assistance.",assign_to_selected_students:"Assign to Selected Students",assigned:"Assigned",enroll_selected_students:"Enroll Selected Students",no_students_selected:"No students were selected.",show_students_from:"Show students from",apply_licenses_to_the_following_students:"Apply Licenses to the Following Students",students_have_licenses:"The following students already have licenses applied:",all_students:"All Students",apply_licenses:"Apply Licenses",not_enough_enrollments:"Not enough licenses available.",enrollments_blurb:"Students are required to have a license to access any content after the first course.",how_to_apply_licenses:"How to Apply Licenses",export_student_progress:"Export Student Progress (CSV)",send_email_to:"Send Recover Password Email to:",email_sent:"Email sent",send_recovery_email:"Send recovery email",enter_new_password_below:"Enter new password below:",change_password:"Change Password",changed:"Changed",available_credits:"Available Licenses",pending_credits:"Pending Licenses",empty_credits:"Exhausted Licenses",license_remaining:"license remaining",licenses_remaining:"licenses remaining",one_license_used:"1 license has been used",num_licenses_used:"__numLicensesUsed__ licenses have been used",starter_licenses:"starter licenses",start_date:"start date:",end_date:"end date:",get_enrollments_blurb:" We'll help you build a solution that meets the needs of your class, school or district.",how_to_apply_licenses_blurb_1:"When a teacher assigns a course to a student for the first time, we’ll automatically apply a license. Use the bulk-assign dropdown in your classroom to assign a course to selected students:",how_to_apply_licenses_blurb_2:"Can I still apply a license without assigning a course?",how_to_apply_licenses_blurb_3:'Yes — go to the License Status tab in your classroom and click "Apply License" to any student who does not have an active license.',request_sent:"Request Sent!",license_status:"License Status",status_expired:"Expired on {{date}}",status_not_enrolled:"Not Enrolled",status_enrolled:"Expires on {{date}}",select_all:"Select All",project:"Project",view_student_project:"View Student Project",view_arena_ladder:"View Arena Ladder",resource_hub:"Resource Hub",getting_started:"Getting Started",educator_faq:"Educator FAQ",educator_faq_desc:"Frequently asked questions about using CodeCombat in your classroom or school.",teacher_getting_started:"Teacher Getting Started Guide",teacher_getting_started_desc:"New to CodeCombat? Download this Teacher Getting Started Guide to set up your account, create your first class, and invite students to the first course.",student_getting_started:"Student Quick Start Guide",student_getting_started_desc:"You can distribute this guide to your students before starting CodeCombat so that they can familiarize themselves with the code editor. This guide can be used for both Python and JavaScript classrooms.",cs1:"Introduction to Computer Science",cs2:"Computer Science 2",cs3:"Computer Science 3",cs4:"Computer Science 4",cs5:"Computer Science 5",cs1_syntax_python:"Course 1 Python Syntax Guide",cs1_syntax_python_desc:"Cheatsheet with references to common Python syntax that students will learn in Introduction to Computer Science.",cs1_syntax_javascript:"Course 1 JavaScript Syntax Guide",cs1_syntax_javascript_desc:"Cheatsheet with references to common JavaScript syntax that students will learn in Introduction to Computer Science.",coming_soon:"Additional guides coming soon!",engineering_cycle_worksheet:"Engineering Cycle Worksheet",engineering_cycle_worksheet_desc:"Use this worksheet to teach students the basics of the engineering cycle: Assess, Design, Implement and Debug. Refer to the completed example worksheet as a guide.",engineering_cycle_worksheet_link:"View example",progress_journal:"Progress Journal",progress_journal_desc:"Encourage students to keep track of their progress via a progress journal.",cs1_curriculum:"Introduction to Computer Science - Curriculum Guide",cs1_curriculum_desc:"Scope and sequence, lesson plans, activities and more for Course 1.",arenas_curriculum:"Arena Levels - Teacher Guide",arenas_curriculum_desc:"Instructions on how to run Wakka Maul, Cross Bones and Power Peak multiplayer arenas with your class.",cs2_curriculum:"Computer Science 2 - Curriculum Guide",cs2_curriculum_desc:"Scope and sequence, lesson plans, activities and more for Course 2.",cs3_curriculum:"Computer Science 3 - Curriculum Guide",cs3_curriculum_desc:"Scope and sequence, lesson plans, activities and more for Course 3.",cs4_curriculum:"Computer Science 4 - Curriculum Guide",cs4_curriculum_desc:"Scope and sequence, lesson plans, activities and more for Course 4.",cs5_curriculum_js:"Computer Science 5 - Curriculum Guide (JavaScript)",cs5_curriculum_desc_js:"Scope and sequence, lesson plans, activities and more for Course 5 classes using JavaScript.",cs5_curriculum_py:"Computer Science 5 - Curriculum Guide (Python)",cs5_curriculum_desc_py:"Scope and sequence, lesson plans, activities and more for Course 5 classes using Python.",cs1_pairprogramming:"Pair Programming Activity",cs1_pairprogramming_desc:"Introduce students to a pair programming exercise that will help them become better listeners and communicators.",gd1:"Game Development 1",gd1_guide:"Game Development 1 - Project Guide",gd1_guide_desc:"Use this to guide your students as they create their first shareable game project in 5 days.",wd1:"Web Development 1",wd1_headlines:"Headlines & Headers Activity",wd1_headlines_example:"View sample solution",wd1_headlines_desc:"Why are paragraph and header tags important? Use this activity to show how well-chosen headers make web pages easier to read. There are many correct solutions to this!",wd1_html_syntax:"HTML Syntax Guide",wd1_html_syntax_desc:"One-page reference for the HTML style students will learn in Web Development 1.",wd1_css_syntax:"CSS Syntax Guide",wd1_css_syntax_desc:"One-page reference for the CSS and Style syntax students will learn in Web Development 1.",wd2:"Web Development 2",wd2_jquery_syntax:"jQuery Functions Syntax Guide",wd2_jquery_syntax_desc:"One-page reference for the jQuery functions students will learn in in Web Development 2.",wd2_quizlet_worksheet:"Quizlet Planning Worksheet",wd2_quizlet_worksheet_instructions:"View instructions & examples",wd2_quizlet_worksheet_desc:"Before your students build their personality quiz project at the end of Web Development 2, they should plan out their quiz questions, outcomes and responses using this worksheet. Teachers can distribute the instructions and examples for students to refer to.",student_overview:"Overview",student_details:"Student Details",student_name:"Student Name",no_name:"No name provided.",no_username:"No username provided.",no_email:"Student has no email address set.",student_profile:"Student Profile",playtime_detail:"Playtime Detail",student_completed:"Student Completed",student_in_progress:"Student in Progress",class_average:"Class Average",not_assigned:"has not been assigned the following courses",playtime_axis:"Playtime in Seconds",levels_axis:"Levels in",student_state:"How is",student_state_2:"doing?",student_good:"is doing well in",student_good_detail:"This student is keeping pace with the class.",student_warn:"might need some help in",student_warn_detail:"This student might need some help with new concepts that have been introduced in this course.",student_great:"is doing great in",student_great_detail:"This student might be a good candidate to help other students working through this course.",full_license:"Full License",starter_license:"Starter License",trial:"Trial",hoc_welcome:"Happy Computer Science Education Week",hoc_intro:"There are three ways for your class to participate in Hour of Code with CodeCombat",hoc_self_led:"Self-Led Gameplay",hoc_self_led_desc:"Students can play through two Hour of Code CodeCombat tutorials on their own",hoc_game_dev:"Game Development",hoc_and:"and",hoc_programming:"JavaScript/Python Programming",hoc_teacher_led:"Teacher-Led Lessons",hoc_teacher_led_desc1:"Download our",hoc_teacher_led_link:"Introduction to Computer Science lesson plans",hoc_teacher_led_desc2:"to introduce your students to programming concepts using offline activities",hoc_group:"Group Gameplay",hoc_group_desc_1:"Teachers can use the lessons in conjunction with our Introduction to Computer Science course to track student progress. See our",hoc_group_link:"Getting Started Guide",hoc_group_desc_2:"for more details",hoc_additional_desc1:"For additional CodeCombat resources and activities, see our",hoc_additional_desc2:"Questions",hoc_additional_contact:"Get in touch",revoke_confirm:"Are you sure you want to revoke a Full License from {{student_name}}? The license will become available to assign to another student.",revoking:"Revoking...",unused_licenses:"You have unused Licenses that allow you to assign students paid courses when they're ready to learn more!",remember_new_courses:"Remember to assign new courses!",more_info:"More Info",how_to_assign_courses:"How to Assign Courses",select_students:"Select Students",select_instructions:"Click the checkbox next to each student you want to assign courses to.",choose_course:"Choose Course",choose_instructions:"Select the course from the dropdown menu you’d like to assign, then click “Assign to Selected Students.”",push_projects:"We recommend assigning Web Development 1 or Game Development 1 after students have finished Introduction to Computer Science! See our {{resource_hub}} for more details on those courses.",teacher_quest:"Teacher's Quest for Success",quests_complete:"Quests Complete",teacher_quest_create_classroom:"Create Classroom",teacher_quest_add_students:"Add Students",teacher_quest_teach_methods:"Help your students learn how to `call methods`.",teacher_quest_teach_methods_step1:"Get 75% of at least one class through the first level, __Dungeons of Kithgard__",teacher_quest_teach_methods_step2:"Print out the [Student Quick Start Guide](http://files.codecombat.com/docs/resources/StudentQuickStartGuide.pdf) in the Resource Hub.",teacher_quest_teach_strings:"Don't string your students along, teach them `strings`.",teacher_quest_teach_strings_step1:"Get 75% of at least one class through __True Names__",teacher_quest_teach_strings_step2:"Use the Teacher Level Selector on [Course Guides](/teachers/courses) page to preview __True Names__.",teacher_quest_teach_loops:"Keep your students in the loop about `loops`.",teacher_quest_teach_loops_step1:"Get 75% of at least one class through __Fire Dancing__.",teacher_quest_teach_loops_step2:"Use the __Loops Activity__ in the [CS1 Curriculum guide](/teachers/resources/cs1) to reinforce this concept.",teacher_quest_teach_variables:"Vary it up with `variables`.",teacher_quest_teach_variables_step1:"Get 75% of at least one class through __Known Enemy__.",teacher_quest_teach_variables_step2:"Encourage collaboration by using the [Pair Programming Activity](/teachers/resources/pair-programming).",teacher_quest_kithgard_gates_100:"Escape the Kithgard Gates with your class.",teacher_quest_kithgard_gates_100_step1:"Get 75% of at least one class through __Kithgard Gates__.",teacher_quest_kithgard_gates_100_step2:"Guide students to think through hard problems using the [Engineering Cycle Worksheet](http://files.codecombat.com/docs/resources/EngineeringCycleWorksheet.pdf).",teacher_quest_wakka_maul_100:"Prepare to duel in Wakka Maul.",teacher_quest_wakka_maul_100_step1:"Get 75% of at least one class to __Wakka Maul__.",teacher_quest_wakka_maul_100_step2:"See the [Arena Guide](/teachers/resources/arenas) in the [Resource Hub](/teachers/resources) for tips on how to run a successful arena day.",teacher_quest_reach_gamedev:"Explore new worlds!",teacher_quest_reach_gamedev_step1:"[Get licenses](/teachers/licenses) so that your students can explore new worlds, like Game Development and Web Development!",teacher_quest_done:"Want your students to learn even more code? Get in touch with our [school specialists](mailto:schools@codecombat.com) today!",teacher_quest_keep_going:"Keep going! Here's what you can do next:",teacher_quest_more:"See all quests",teacher_quest_less:"See fewer quests",refresh_to_update:"(refresh the page to see updates)"},share_licenses:{share_licenses:"Share Licenses",shared_by:"Shared By:",add_teacher_label:"Enter exact teacher email:",add_teacher_button:"Add Teacher",subheader:"You can make your licenses available to other teachers in your organization. Each license can only be used for one student at a time.",teacher_not_found:"Teacher not found. Please make sure this teacher has already created a Teacher Account.",teacher_not_valid:"This is not a valid Teacher Account. Only teacher accounts can share licenses.",already_shared:"You've already shared these licenses with that teacher.",teachers_using_these:"Teachers who can access these licenses:",footer:"When teachers revoke licenses from students, the licenses will be returned to the shared pool for other teachers in this group to use.",you:"(you)",one_license_used:"(1 license used)",licenses_used:"(__licensesUsed__ licenses used)",more_info:"More info"},sharing:{game:"Game",webpage:"Webpage",your_students_preview:"Your students will click here to see their finished projects! Unavailable in teacher preview.",unavailable:"Link sharing not available in teacher preview.",share_game:"Share This Game",share_web:"Share This Webpage",victory_share_prefix:"Share this link to invite your friends & family to",victory_share_game:"play your game level",victory_share_web:"view your webpage",victory_share_suffix:".",victory_course_share_prefix:"This link will let your friends & family",victory_course_share_game:"play the game",victory_course_share_web:"view the webpage",victory_course_share_suffix:"you just created.",copy_url:"Copy URL"},game_dev:{creator:"Creator"},web_dev:{image_gallery_title:"Image Gallery",select_an_image:"Select an image you want to use",scroll_down_for_more_images:"(Scroll down for more images)",copy_the_url:"Copy the URL below",copy_the_url_description:"Useful if you want to replace an existing image.",copy_the_img_tag:"Copy the <img> tag",copy_the_img_tag_description:"Useful if you want to insert a new image.",copy_url:"Copy URL",copy_img:"Copy <img>",how_to_copy_paste:"How to Copy/Paste",copy:"Copy",paste:"Paste",back_to_editing:"Back to Editing"},classes:{archmage_title:"Archmage",archmage_title_description:"(Coder)",archmage_summary:"If you are a developer interested in coding educational games, become an archmage to help us build CodeCombat!",artisan_title:"Artisan",artisan_title_description:"(Level Builder)",artisan_summary:"Build and share levels for you and your friends to play. Become an Artisan to learn the art of teaching others to program.",adventurer_title:"Adventurer",adventurer_title_description:"(Level Playtester)",adventurer_summary:"Get our new levels (even our subscriber content) for free one week early and help us work out bugs before our public release.",scribe_title:"Scribe",scribe_title_description:"(Article Editor)",scribe_summary:"Good code needs good documentation. Write, edit, and improve the docs read by millions of players across the globe.",diplomat_title:"Diplomat",diplomat_title_description:"(Translator)",diplomat_summary:"CodeCombat is localized in 45+ languages by our Diplomats. Help us out and contribute translations.",ambassador_title:"Ambassador",ambassador_title_description:"(Support)",ambassador_summary:"Tame our forum users and provide direction for those with questions. Our ambassadors represent CodeCombat to the world.",teacher_title:"Teacher"},editor:{main_title:"CodeCombat Editors",article_title:"Article Editor",thang_title:"Thang Editor",level_title:"Level Editor",course_title:"Course Editor",achievement_title:"Achievement Editor",poll_title:"Poll Editor",back:"Back",revert:"Revert",revert_models:"Revert Models",pick_a_terrain:"Pick A Terrain",dungeon:"Dungeon",indoor:"Indoor",desert:"Desert",grassy:"Grassy",mountain:"Mountain",glacier:"Glacier",small:"Small",large:"Large",fork_title:"Fork New Version",fork_creating:"Creating Fork...",generate_terrain:"Generate Terrain",more:"More",wiki:"Wiki",live_chat:"Live Chat",thang_main:"Main",thang_spritesheets:"Spritesheets",thang_colors:"Colors",level_some_options:"Some Options?",level_tab_thangs:"Thangs",level_tab_scripts:"Scripts",level_tab_components:"Components",level_tab_systems:"Systems",level_tab_docs:"Documentation",level_tab_thangs_title:"Current Thangs",level_tab_thangs_all:"All",level_tab_thangs_conditions:"Starting Conditions",level_tab_thangs_add:"Add Thangs",level_tab_thangs_search:"Search thangs",add_components:"Add Components",component_configs:"Component Configurations",config_thang:"Double click to configure a thang",delete:"Delete",duplicate:"Duplicate",stop_duplicate:"Stop Duplicate",rotate:"Rotate",level_component_tab_title:"Current Components",level_component_btn_new:"Create New Component",level_systems_tab_title:"Current Systems",level_systems_btn_new:"Create New System",level_systems_btn_add:"Add System",level_components_title:"Back to All Thangs",level_components_type:"Type",level_component_edit_title:"Edit Component",level_component_config_schema:"Config Schema",level_system_edit_title:"Edit System",create_system_title:"Create New System",new_component_title:"Create New Component",new_component_field_system:"System",new_article_title:"Create a New Article",new_thang_title:"Create a New Thang Type",new_level_title:"Create a New Level",new_article_title_login:"Log In to Create a New Article",new_thang_title_login:"Log In to Create a New Thang Type",new_level_title_login:"Log In to Create a New Level",new_achievement_title:"Create a New Achievement",new_achievement_title_login:"Log In to Create a New Achievement",new_poll_title:"Create a New Poll",new_poll_title_login:"Log In to Create a New Poll",article_search_title:"Search Articles Here",thang_search_title:"Search Thang Types Here",level_search_title:"Search Levels Here",achievement_search_title:"Search Achievements",poll_search_title:"Search Polls",read_only_warning2:"Note: you can't save any edits here, because you're not logged in.",no_achievements:"No achievements have been added for this level yet.",achievement_query_misc:"Key achievement off of miscellanea",achievement_query_goals:"Key achievement off of level goals",level_completion:"Level Completion",pop_i18n:"Populate I18N",tasks:"Tasks",clear_storage:"Clear your local changes",add_system_title:"Add Systems to Level",done_adding:"Done Adding"},article:{edit_btn_preview:"Preview",edit_article_title:"Edit Article"},polls:{priority:"Priority"},contribute:{page_title:"Contributing",intro_blurb:"CodeCombat is 100% open source! Hundreds of dedicated players have helped us build the game into what it is today. Join us and write the next chapter in CodeCombat's quest to teach the world to code!",alert_account_message_intro:"Hey there!",alert_account_message:"To subscribe for class emails, you'll need to be logged in first.",archmage_introduction:"One of the best parts about building games is they synthesize so many different things. Graphics, sound, real-time networking, social networking, and of course many of the more common aspects of programming, from low-level database management, and server administration to user facing design and interface building. There's a lot to do, and if you're an experienced programmer with a hankering to really dive into the nitty-gritty of CodeCombat, this class might be for you. We would love to have your help building the best programming game ever.",class_attributes:"Class Attributes",archmage_attribute_1_pref:"Knowledge in ",archmage_attribute_1_suf:", or a desire to learn. Most of our code is in this language. If you're a fan of Ruby or Python, you'll feel right at home. It's JavaScript, but with a nicer syntax.",archmage_attribute_2:"Some experience in programming and personal initiative. We'll help you get oriented, but we can't spend much time training you.",how_to_join:"How To Join",join_desc_1:"Anyone can help out! Just check out our ",join_desc_2:"to get started, and check the box below to mark yourself as a brave Archmage and get the latest news by email. Want to chat about what to do or how to get more deeply involved? ",join_desc_3:", or find us in our ",join_desc_4:"and we'll go from there!",join_url_email:"Email us",join_url_slack:"public Slack channel",archmage_subscribe_desc:"Get emails on new coding opportunities and announcements.",artisan_introduction_pref:"We must construct additional levels! People be clamoring for more content, and we can only build so many ourselves. Right now your workstation is level one; our level editor is barely usable even by its creators, so be wary. If you have visions of campaigns spanning for-loops to",artisan_introduction_suf:", then this class might be for you.",artisan_attribute_1:"Any experience in building content like this would be nice, such as using Blizzard's level editors. But not required!",artisan_attribute_2:"A hankering to do a whole lot of testing and iteration. To make good levels, you need to take it to others and watch them play it, and be prepared to find a lot of things to fix.",artisan_attribute_3:"For the time being, endurance en par with an Adventurer. Our Level Editor is super preliminary and frustrating to use. You have been warned!",artisan_join_desc:"Use the Level Editor in these steps, give or take:",artisan_join_step1:"Read the documentation.",artisan_join_step2:"Create a new level and explore existing levels.",artisan_join_step3:"Find us in our public Slack channel for help.",artisan_join_step4:"Post your levels on the forum for feedback.",artisan_subscribe_desc:"Get emails on level editor updates and announcements.",adventurer_introduction:"Let's be clear about your role: you are the tank. You're going to take heavy damage. We need people to try out brand-new levels and help identify how to make things better. The pain will be enormous; making good games is a long process and no one gets it right the first time. If you can endure and have a high constitution score, then this class might be for you.",adventurer_attribute_1:"A thirst for learning. You want to learn how to code and we want to teach you how to code. You'll probably be doing most of the teaching in this case, though.",adventurer_attribute_2:"Charismatic. Be gentle but articulate about what needs improving, and offer suggestions on how to improve.",adventurer_join_pref:"Either get together with (or recruit!) an Artisan and work with them, or check the box below to receive emails when there are new levels to test. We'll also be posting about levels to review on our networks like",adventurer_forum_url:"our forum",adventurer_join_suf:"so if you prefer to be notified those ways, sign up there!",adventurer_subscribe_desc:"Get emails when there are new levels to test.",scribe_introduction_pref:"CodeCombat isn't just going to be a bunch of levels. It will also include a resource for knowledge, a wiki of programming concepts that levels can hook into. That way rather than each Artisan having to describe in detail what a comparison operator is, they can simply link their level to the Article describing them that is already written for the player's edification. Something along the lines of what the ",scribe_introduction_url_mozilla:"Mozilla Developer Network",scribe_introduction_suf:" has built. If your idea of fun is articulating the concepts of programming in Markdown form, then this class might be for you.",scribe_attribute_1:"Skill in words is pretty much all you need. Not only grammar and spelling, but able to convey complicated ideas to others.",contact_us_url:"Contact Us",scribe_join_description:"tell us a little about yourself, your experience with programming and what sort of things you'd like to write about. We'll go from there!",scribe_subscribe_desc:"Get emails about article writing announcements.",diplomat_introduction_pref:"So, if there's one thing we learned from the ",diplomat_launch_url:"launch in October",diplomat_introduction_suf:"it's that there is sizeable interest in CodeCombat in other countries! We're building a corps of translators eager to turn one set of words into another set of words to get CodeCombat as accessible across the world as possible. If you like getting sneak peeks at upcoming content and getting these levels to your fellow nationals ASAP, then this class might be for you.",diplomat_attribute_1:"Fluency in English and the language you would like to translate to. When conveying complicated ideas, it's important to have a strong grasp in both!",diplomat_i18n_page_prefix:"You can start translating our levels by going to our",diplomat_i18n_page:"translations page",diplomat_i18n_page_suffix:", or our interface and website on GitHub.",diplomat_join_pref_github:"Find your language locale file ",diplomat_github_url:"on GitHub",diplomat_join_suf_github:", edit it online, and submit a pull request. Also, check this box below to keep up-to-date on new internationalization developments!",diplomat_subscribe_desc:"Get emails about i18n developments and levels to translate.",ambassador_introduction:"This is a community we're building, and you are the connections. We've got forums, emails, and social networks with lots of people to talk with and help get acquainted with the game and learn from. If you want to help people get involved and have fun, and get a good feel of the pulse of CodeCombat and where we're going, then this class might be for you.",ambassador_attribute_1:"Communication skills. Be able to identify the problems players are having and help them solve them. Also, keep the rest of us informed about what players are saying, what they like and don't like and want more of!",ambassador_join_desc:"tell us a little about yourself, what you've done and what you'd be interested in doing. We'll go from there!",ambassador_join_note_strong:"Note",ambassador_join_note_desc:"One of our top priorities is to build multiplayer where players having difficulty solving levels can summon higher level wizards to help them. This will be a great way for ambassadors to do their thing. We'll keep you posted!",ambassador_subscribe_desc:"Get emails on support updates and multiplayer developments.",teacher_subscribe_desc:"Get emails on updates and announcements for teachers.",changes_auto_save:"Changes are saved automatically when you toggle checkboxes.",diligent_scribes:"Our Diligent Scribes:",powerful_archmages:"Our Powerful Archmages:",creative_artisans:"Our Creative Artisans:",brave_adventurers:"Our Brave Adventurers:",translating_diplomats:"Our Translating Diplomats:",helpful_ambassadors:"Our Helpful Ambassadors:"},ladder:{my_matches:"My Matches",simulate:"Simulate",simulation_explanation:"By simulating games you can get your game ranked faster!",simulation_explanation_leagues:"You will mainly help simulate games for allied players in your clans and courses.",simulate_games:"Simulate Games!",games_simulated_by:"Games simulated by you:",games_simulated_for:"Games simulated for you:",games_in_queue:"Games currently in the queue:",games_simulated:"Games simulated",games_played:"Games played",ratio:"Ratio",leaderboard:"Leaderboard",battle_as:"Battle as ",summary_your:"Your ",summary_matches:"Matches - ",summary_wins:" Wins, ",summary_losses:" Losses",rank_no_code:"No New Code to Rank",rank_my_game:"Rank My Game!",rank_submitting:"Submitting...",rank_submitted:"Submitted for Ranking",rank_failed:"Failed to Rank",rank_being_ranked:"Game Being Ranked",rank_last_submitted:"submitted ",help_simulate:"Help simulate games?",code_being_simulated:"Your new code is being simulated by other players for ranking. This will refresh as new matches come in.",no_ranked_matches_pre:"No ranked matches for the ",no_ranked_matches_post:" team! Play against some competitors and then come back here to get your game ranked.",choose_opponent:"Choose an Opponent",select_your_language:"Select your language!",tutorial_play:"Play Tutorial",tutorial_recommended:"Recommended if you've never played before",tutorial_skip:"Skip Tutorial",tutorial_not_sure:"Not sure what's going on?",tutorial_play_first:"Play the Tutorial first.",simple_ai:"Simple CPU",warmup:"Warmup",friends_playing:"Friends Playing",log_in_for_friends:"Log in to play with your friends!",social_connect_blurb:"Connect and play against your friends!",invite_friends_to_battle:"Invite your friends to join you in battle!",fight:"Fight!",watch_victory:"Watch your victory",defeat_the:"Defeat the",watch_battle:"Watch the battle",tournament_started:", started",tournament_ends:"Tournament ends",tournament_ended:"Tournament ended",tournament_rules:"Tournament Rules",tournament_blurb:"Write code, collect gold, build armies, crush foes, win prizes, and upgrade your career in our $40,000 Greed tournament! Check out the details",tournament_blurb_criss_cross:"Win bids, construct paths, outwit opponents, grab gems, and upgrade your career in our Criss-Cross tournament! Check out the details",tournament_blurb_zero_sum:"Unleash your coding creativity in both gold gathering and battle tactics in this alpine mirror match between red sorcerer and blue sorcerer. The tournament began on Friday, March 27 and will run until Monday, April 6 at 5PM PDT. Compete for fun and glory! Check out the details",tournament_blurb_ace_of_coders:"Battle it out in the frozen glacier in this domination-style mirror match! The tournament began on Wednesday, September 16 and will run until Wednesday, October 14 at 5PM PDT. Check out the details",tournament_blurb_blog:"on our blog",rules:"Rules",winners:"Winners",league:"League",red_ai:"Red CPU",blue_ai:"Blue CPU",wins:"Wins",humans:"Red",ogres:"Blue"},user:{stats:"Stats",singleplayer_title:"Singleplayer Levels",multiplayer_title:"Multiplayer Levels",achievements_title:"Achievements",last_played:"Last Played",
status:"Status",status_completed:"Completed",status_unfinished:"Unfinished",no_singleplayer:"No Singleplayer games played yet.",no_multiplayer:"No Multiplayer games played yet.",no_achievements:"No Achievements earned yet.",favorite_prefix:"Favorite language is ",favorite_postfix:".",not_member_of_clans:"Not a member of any clans yet."},achievements:{last_earned:"Last Earned",amount_achieved:"Amount",achievement:"Achievement",current_xp_prefix:"",current_xp_postfix:" in total",new_xp_prefix:"",new_xp_postfix:" earned",left_xp_prefix:"",left_xp_infix:" until level ",left_xp_postfix:""},account:{payments:"Payments",prepaid_codes:"Prepaid Codes",purchased:"Purchased",subscription:"Subscription",invoices:"Invoices",service_apple:"Apple",service_web:"Web",paid_on:"Paid On",service:"Service",price:"Price",gems:"Gems",active:"Active",subscribed:"Subscribed",unsubscribed:"Unsubscribed",active_until:"Active Until",cost:"Cost",next_payment:"Next Payment",card:"Card",status_unsubscribed_active:"You're not subscribed and won't be billed, but your account is still active for now.",status_unsubscribed:"Get access to new levels, heroes, items, and bonus gems with a CodeCombat subscription!",not_yet_verified:"Not yet verified.",resend_email:"Resend email",email_sent:"Email sent! Check your inbox.",verifying_email:"Verifying your email address...",successfully_verified:"You've successfully verified your email address!",verify_error:"Something went wrong when verifying your email :("},account_invoices:{amount:"Amount in US dollars",declined:"Your card was declined",invalid_amount:"Please enter a US dollar amount.",not_logged_in:"Log in or create an account to access invoices.",pay:"Pay Invoice",purchasing:"Purchasing...",retrying:"Server error, retrying.",success:"Successfully paid. Thanks!"},account_prepaid:{purchase_code:"Purchase a Subscription Code",purchase_code1:"Subscription Codes can be redeemed to add premium subscription time to one or more accounts for the Home version of CodeCombat.",purchase_code2:"Each CodeCombat account can only redeem a particular Subscription Code once.",purchase_code3:"Subscription Code months will be added to the end of any existing subscription on the account.",purchase_code4:"Subscription Codes are for accounts playing the Home version of CodeCombat, they cannot be used in place of Student Licenses for the Classroom version.",purchase_code5:"For more information on Student Licenses, reach out to",users:"Users",months:"Months",purchase_total:"Total",purchase_button:"Submit Purchase",your_codes:"Your Codes",redeem_codes:"Redeem a Subscription Code",prepaid_code:"Prepaid Code",lookup_code:"Lookup prepaid code",apply_account:"Apply to your account",copy_link:"You can copy the code's link and send it to someone.",quantity:"Quantity",redeemed:"Redeemed",no_codes:"No codes yet!",you_can1:"You can",you_can2:"purchase a prepaid code",you_can3:"that can be applied to your own account or given to others."},loading_error:{could_not_load:"Error loading from server",connection_failure:"Connection Failed",connection_failure_desc:"It doesn’t look like you’re connected to the internet! Check your network connection and then reload this page.",login_required:"Login Required",login_required_desc:"You need to be logged in to access this page.",unauthorized:"You need to be signed in. Do you have cookies disabled?",forbidden:"Forbidden",forbidden_desc:"Oh no, there’s nothing we can show you here! Make sure you’re logged into the correct account, or visit one of the links below to get back to programming!",not_found:"Not Found",not_found_desc:"Hm, there’s nothing here. Visit one of the following links to get back to programming!",not_allowed:"Method not allowed.",timeout:"Server Timeout",conflict:"Resource conflict.",bad_input:"Bad input.",server_error:"Server error.",unknown:"Unknown Error",error:"ERROR",general_desc:"Something went wrong, and it’s probably our fault. Try waiting a bit and then refreshing the page, or visit one of the following links to get back to programming!"},resources:{level:"Level",patch:"Patch",patches:"Patches",system:"System",systems:"Systems",component:"Component",components:"Components",hero:"Hero",campaigns:"Campaigns"},concepts:{advanced_css_rules:"Advanced CSS Rules",advanced_css_selectors:"Advanced CSS Selectors",advanced_html_attributes:"Advanced HTML Attributes",advanced_html_tags:"Advanced HTML Tags",algorithm_average:"Algorithm Average",algorithm_find_minmax:"Algorithm Find Min/Max",algorithm_search_binary:"Algorithm Search Binary",algorithm_search_graph:"Algorithm Search Graph",algorithm_sort:"Algorithm Sort",algorithm_sum:"Algorithm Sum",arguments:"Arguments",arithmetic:"Arithmetic",array_2d:"2D Array",array_index:"Array Indexing",array_iterating:"Iterating Over Arrays",array_literals:"Array Literals",array_searching:"Array Searching",array_sorting:"Array Sorting",arrays:"Arrays",basic_css_rules:"Basic CSS rules",basic_css_selectors:"Basic CSS selectors",basic_html_attributes:"Basic HTML Attributes",basic_html_tags:"Basic HTML Tags",basic_syntax:"Basic Syntax",binary:"Binary",boolean_and:"Boolean And",boolean_equality:"Boolean Equality",boolean_greater_less:"Boolean Greater/Less",boolean_logic_shortcircuit:"Boolean Logic Shortcircuiting",boolean_not:"Boolean Not",boolean_operator_precedence:"Boolean Operator Precedence",boolean_or:"Boolean Or",bootstrap:"Bootstrap",break_statements:"Break Statements",classes:"Classes",continue_statements:"Continue Statements",dom_events:"DOM Events",dynamic_styling:"Dynamic Styling",event_concurrency:"Event Concurrency",event_data:"Event Data",event_handlers:"Event Handlers",for_loops:"For Loops",for_loops_nested:"Nested For Loops",for_loops_range:"For Loops Range",functions:"Functions",game_ai:"Game AI",game_goals:"Game Goals",game_spawn:"Game Spawn",graphics:"Graphics",graphs:"Graphs",heaps:"Heaps",if_else_statements:"If/Else Statements",if_statements:"If Statements",if_statements_nested:"Nested If Statemnts",indexing:"Array Indexes",input_handling_flags:"Input Handling - Flags",input_handling_keyboard:"Input Handling - Keyboard",input_handling_mouse:"Input Handling - Mouse",intermediate_css_rules:"Intermediate CSS Rules",intermediate_css_selectors:"Intermediate CSS Selectors",intermediate_html_attributes:"Intermediate HTML Attributes",intermediate_html_tags:"Intermediate HTML Tags",jquery:"jQuery",jquery_animations:"jQuery Animations",jquery_filtering:"jQuery Element Filtering",jquery_selectors:"jQuery Selectors",length:"Array Length",math_geometry:"Geometry",math_operations:"Math Library Operations",math_trigonometry:"Trigonometry",object_literals:"Object Literals",parameters:"Parameters",property_access:"Accessing Properties",property_assignment:"Assigning Properties",queues:"Data Structures - Queues",reading_docs:"Reading the Docs",recursion:"Recursion",return_statements:"Return Statements",stacks:"Data Structures - Stacks",strings:"Strings",strings_concatenation:"String Concatenation",strings_substrings:"Substring",trees:"Data Structures - Trees",variables:"Variables",vectors:"Vectors",while_condition_loops:"While Loops with Conditionals",while_loops_simple:"While Loops",while_loops_nested:"Nested While Loops",xy_coordinates:"Cartesian Coordinates",advanced_strings:"Advanced Strings",algorithms:"Algorithms",boolean_logic:"Boolean Logic",basic_html:"Basic HTML",basic_css:"Basic CSS",basic_web_scripting:"Basic Web Scripting",intermediate_html:"Intermediate HTML",intermediate_css:"Intermediate CSS",intermediate_web_scripting:"Intermediate Web Scripting",advanced_html:"Advanced HTML",advanced_css:"Advanced CSS",advanced_web_scripting:"Advanced Web Scripting",input_handling:"Input Handling",while_loops:"While Loops",place_game_objects:"Place game objects",construct_mazes:"Construct mazes",create_playable_game:"Create a playable, sharable game project",alter_existing_web_pages:"Alter existing web pages",create_sharable_web_page:"Create a sharable web page",basic_input_handling:"Basic Input Handling",basic_game_ai:"Basic Game AI",basic_javascript:"Basic JavaScript",basic_event_handling:"Basic Event Handling",create_sharable_interactive_web_page:"Create a sharable interactive web page"},delta:{added:"Added",modified:"Modified",not_modified:"Not Modified",deleted:"Deleted",moved_index:"Moved Index",text_diff:"Text Diff",merge_conflict_with:"MERGE CONFLICT WITH",no_changes:"No Changes"},legal:{page_title:"Legal",opensource_intro:"CodeCombat is completely open source.",opensource_description_prefix:"Check out ",github_url:"our GitHub",opensource_description_center:"and help out if you like! CodeCombat is built on dozens of open source projects, and we love them. See ",archmage_wiki_url:"our Archmage wiki",opensource_description_suffix:"for a list of the software that makes this game possible.",practices_title:"Respectful Best Practices",practices_description:"These are our promises to you, the player, in slightly less legalese.",privacy_title:"Privacy",privacy_description:"We will not sell any of your personal information.",security_title:"Security",security_description:"We strive to keep your personal information safe. As an open source project, our site is freely open to anyone to review and improve our security systems.",email_title:"Email",email_description_prefix:"We will not inundate you with spam. Through",email_settings_url:"your email settings",email_description_suffix:"or through links in the emails we send, you can change your preferences and easily unsubscribe at any time.",cost_title:"Cost",cost_description:"CodeCombat is free to play for all of its core levels, with a ${{price}} USD/mo subscription for access to extra level branches and {{gems}} bonus gems per month. You can cancel with a click, and we offer a 100% money-back guarantee.",copyrights_title:"Copyrights and Licenses",contributor_title:"Contributor License Agreement",contributor_description_prefix:"All contributions, both on the site and on our GitHub repository, are subject to our",cla_url:"CLA",contributor_description_suffix:"to which you should agree before contributing.",code_title:"Code - MIT",code_description_prefix:"All code owned by CodeCombat or hosted on codecombat.com, both in the GitHub repository or in the codecombat.com database, is licensed under the",mit_license_url:"MIT license",code_description_suffix:"This includes all code in Systems and Components that are made available by CodeCombat for the purpose of creating levels.",art_title:"Art/Music - Creative Commons ",art_description_prefix:"All common content is available under the",cc_license_url:"Creative Commons Attribution 4.0 International License",art_description_suffix:"Common content is anything made generally available by CodeCombat for the purpose of creating Levels. This includes:",art_music:"Music",art_sound:"Sound",art_artwork:"Artwork",art_sprites:"Sprites",art_other:"Any and all other non-code creative works that are made available when creating Levels.",art_access:"Currently there is no universal, easy system for fetching these assets. In general, fetch them from the URLs as used by the site, contact us for assistance, or help us in extending the site to make these assets more easily accessible.",art_paragraph_1:"For attribution, please name and link to codecombat.com near where the source is used or where appropriate for the medium. For example:",use_list_1:"If used in a movie or another game, include codecombat.com in the credits.",use_list_2:"If used on a website, include a link near the usage, for example underneath an image, or in a general attributions page where you might also mention other Creative Commons works and open source software being used on the site. Something that's already clearly referencing CodeCombat, such as a blog post mentioning CodeCombat, does not need some separate attribution.",art_paragraph_2:"If the content being used is created not by CodeCombat but instead by a user of codecombat.com, attribute them instead, and follow attribution directions provided in that resource's description if there are any.",rights_title:"Rights Reserved",rights_desc:"All rights are reserved for Levels themselves. This includes",rights_scripts:"Scripts",rights_unit:"Unit configuration",rights_writings:"Writings",rights_media:"Media (sounds, music) and any other creative content made specifically for that Level and not made generally available when creating Levels.",rights_clarification:"To clarify, anything that is made available in the Level Editor for the purpose of making levels is under CC, whereas the content created with the Level Editor or uploaded in the course of creation of Levels is not.",nutshell_title:"In a Nutshell",nutshell_description:"Any resources we provide in the Level Editor are free to use as you like for creating Levels. But we reserve the right to restrict distribution of the Levels themselves (that are created on codecombat.com) so that they may be charged for.",canonical:"The English version of this document is the definitive, canonical version. If there are any discrepancies between translations, the English document takes precedence.",third_party_title:"Third Party Services",third_party_description:"CodeCombat uses the following third party services (among others):"},ladder_prizes:{title:"Tournament Prizes",blurb_1:"These prizes will be awarded according to",blurb_2:"the tournament rules",blurb_3:"to the top human and ogre players.",blurb_4:"Two teams means double the prizes!",blurb_5:"(There will be two first place winners, two second-place winners, etc.)",rank:"Rank",prizes:"Prizes",total_value:"Total Value",in_cash:"in cash",custom_wizard:"Custom CodeCombat Wizard",custom_avatar:"Custom CodeCombat avatar",heap:'for six months of "Startup" access',credits:"credits",one_month_coupon:"coupon: choose either Rails or HTML",one_month_discount:"discount, 30% off: choose either Rails or HTML",license:"license",oreilly:"ebook of your choice"},calendar:{year:"Year",day:"Day",month:"Month",january:"January",february:"February",march:"March",april:"April",may:"May",june:"June",july:"July",august:"August",september:"September",october:"October",november:"November",december:"December"},code_play_create_account_modal:{title:"You did it!",body:"You are now on your way to becoming a master coder. Sign up to receive an extra <strong>100 Gems</strong> & you will also be entered for a chance to <strong>win $2,500 & other Lenovo Prizes</strong>.",sign_up:"Sign up & keep coding ▶",victory_sign_up_poke:"Create a free account to save your code & be entered for a chance to win prizes!",victory_sign_up:"Sign up & be entered to <strong>win $2,500</strong>"},server_error:{email_taken:"Email already taken",username_taken:"Username already taken"},esper:{line_no:"Line $1: ",x_not_a_function:"`$1` is not a function",type_error:"TypeError: ",reference_error:"ReferenceError: ",spelling_issues:"Look out for spelling issues: did you mean `$1` instead of `$2`?",capitalization_issues:"Look out for capitalization: `$1` should be `$2`.",py_empty_block:"Empty $1. Put 4 spaces in front of statements inside the $2.",fx_missing_paren:"If you want to call `$1` as function, you need `()`'s",unmatched_token:"Unmatched `$1`.  Every opening `$2` needs a closing `$3` to match it.",unterminated_string:'Unterminated string. Add a matching `"` at the end of your string.'}}}})
require.register("locale/en-US",function(e,require,t){t.exports={nativeDescription:"English (US)",englishDescription:"English (US)",translation:{common:{loading:"Loading..."}}}})
require.register("lib/sprites/SpriteBuilder",function(exports,require,module){var SpriteBuilder,hexToHSL,hslToHex,ref,sum,slice=[].slice
ref=require("core/utils"),hexToHSL=ref.hexToHSL,hslToHex=ref.hslToHex
module.exports=SpriteBuilder=function(){function SpriteBuilder(e,t){var r
this.thangType=e
this.options=t
if(this.options==null){this.options={}}r=this.thangType.get("raw")||{}
this.shapeStore=r.shapes
this.containerStore=r.containers
this.animationStore=r.animations
this.buildColorMaps()}SpriteBuilder.prototype.setOptions=function(e){this.options=e}
SpriteBuilder.prototype.buildMovieClip=function(e,t,r,i,n){var o,s,a,l,c,u,p,d,h,m,g,f,y,v
s=this.animationStore[e]
if(!s){console.error("couldn't find animData from",this.animationStore,"for",e)
return null}m={}
_.extend(m,this.buildMovieClipShapes(s.shapes))
_.extend(m,this.buildMovieClipContainers(s.containers))
_.extend(m,this.buildMovieClipAnimations(s.animations))
_.extend(m,this.buildMovieClipGraphics(s.graphics))
o=new createjs.MovieClip
if(!n){n={}
n[e]=0}o.initialize(t!=null?t:createjs.MovieClip.INDEPENDENT,r!=null?r:0,i!=null?i:true,n)
g=s.tweens
for(u=0,d=g.length;u<d;u++){v=g[u]
y=createjs.Tween
f=false
for(p=0,h=v.length;p<h;p++){c=v[p]
a=_.cloneDeep(c.a)
this.dereferenceArgs(a,m)
if(y[c.n]){y=y[c.n].apply(y,a)}else{f=true
break}}if(!f){o.timeline.addTween(y)}}o.nominalBounds=function(e,t,r){r.prototype=e.prototype
var i=new r,n=e.apply(i,t)
return Object(n)===n?n:i}(createjs.Rectangle,s.bounds,function(){})
if(s.frameBounds){o.frameBounds=function(){var e,t,r,i
r=s.frameBounds
i=[]
for(e=0,t=r.length;e<t;e++){l=r[e]
i.push(function(e,t,r){r.prototype=e.prototype
var i=new r,n=e.apply(i,t)
return Object(n)===n?n:i}(createjs.Rectangle,l,function(){}))}return i}()}return o}
SpriteBuilder.prototype.dereferenceArgs=function(args,locals){var key,val
for(key in args){val=args[key]
if(locals[val]){args[key]=locals[val]}else if(val===null){args[key]={}}else if(_.isString(val)&&val.indexOf("createjs.")===0){args[key]=eval(val)}else if(_.isObject(val)||_.isArray(val)){this.dereferenceArgs(val,locals)}}return args}
SpriteBuilder.prototype.buildMovieClipShapes=function(e){var t,r,i,n,o
n={}
for(t=0,r=e.length;t<r;t++){i=e[t]
if(i.im){o=new createjs.Shape
o._off=true}else{o=this.buildShapeFromStore(i.gn)
if(i.m){o.mask=n[i.m]}}n[i.bn]=o}return n}
SpriteBuilder.prototype.buildMovieClipContainers=function(e){var t,r,i,n,o
o={}
for(r=0,i=e.length;r<i;r++){n=e[r]
t=this.buildContainerFromStore(n.gn)
t.setTransform.apply(t,n.t)
if(n.o!=null){t._off=n.o}if(n.al!=null){t.alpha=n.al}o[n.bn]=t}return o}
SpriteBuilder.prototype.buildMovieClipAnimations=function(e){var t,r,i,n,o
o={}
for(r=0,i=e.length;r<i;r++){n=e[r]
t=this.buildMovieClip.apply(this,[n.gn].concat(slice.call(n.a)))
t.setTransform.apply(t,n.t)
o[n.bn]=t}return o}
SpriteBuilder.prototype.buildMovieClipGraphics=function(e){var t,r,i,n,o
o={}
for(r=0,i=e.length;r<i;r++){n=e[r]
t=(new createjs.Graphics).p(n.p)
o[n.bn]=t}return o}
SpriteBuilder.prototype.buildShapeFromStore=function(e,t){var r,i,n,o,s,a,l
if(t==null){t=false}l=this.shapeStore[e]
a=new createjs.Shape
if(l.lf!=null){(r=a.graphics).lf.apply(r,l.lf)}else if(l.fc!=null){a.graphics.f(this.colorMap[e]||l.fc)}else if(l.rf!=null){(i=a.graphics).rf.apply(i,l.rf)}if(l.ls!=null){(n=a.graphics).ls.apply(n,l.ls)}else if(l.sc!=null){a.graphics.s(l.sc)}if(l.ss!=null){(o=a.graphics).ss.apply(o,l.ss)}if(l.de!=null){(s=a.graphics).de.apply(s,l.de)}if(l.p!=null){a.graphics.p(l.p)}a.setTransform.apply(a,l.t)
return a}
SpriteBuilder.prototype.buildContainerFromStore=function(e){var t,r,i,n,o,s,a
if(!e){console.error("Yo we don't have no containerKey")}n=this.containerStore[e]
i=new createjs.Container
i.initialize()
a=n.c
for(o=0,s=a.length;o<s;o++){r=a[o]
if(_.isString(r)){t=this.buildShapeFromStore(r)}else{if(!r.gn){continue}t=this.buildContainerFromStore(r.gn)
t.setTransform.apply(t,r.t)}i.addChild(t)}i.bounds=function(e,t,r){r.prototype=e.prototype
var i=new r,n=e.apply(i,t)
return Object(n)===n?n:i}(createjs.Rectangle,n.b,function(){})
return i}
SpriteBuilder.prototype.buildColorMaps=function(){var e,t,r,i,n
this.colorMap={}
t=this.thangType.get("colorGroups")
if(_.isEmpty(t)){return}if(!_.size(this.shapeStore)){return}e=this.options.colorConfig
if(!e){return}n=[]
for(i in e){r=e[i]
if(!t[i]){continue}n.push(this.buildColorMapForGroup(t[i],r))}return n}
SpriteBuilder.prototype.buildColorMapForGroup=function(e,t){var r
if(!e.length){return}r=this.initColorMap(e)
this.adjustHuesForColorMap(r,t.hue)
this.adjustValueForColorMap(r,1,t.saturation)
this.adjustValueForColorMap(r,2,t.lightness)
return this.applyColorMap(e,r)}
SpriteBuilder.prototype.initColorMap=function(e){var t,r,i,n,o,s
t={}
for(i=0,n=e.length;i<n;i++){s=e[i]
o=this.shapeStore[s]
if(o.fc==null||t[o.fc]){continue}r=hexToHSL(o.fc)
t[o.fc]=r}return t}
SpriteBuilder.prototype.adjustHuesForColorMap=function(e,t){var r,i,n,o,s,a,l
a=function(){var t
t=[]
for(o in e){s=e[o]
t.push(s[0])}return t}()
if(Math.max(a)-Math.min(a)>.5){a=function(){var e,t,r
if(n<.5){return n+1}else{r=[]
for(e=0,t=a.length;e<t;e++){n=a[e]
r.push(n)}return r}}()}r=sum(a)/a.length
r%=1
if(t==null){t=0}i=t-r
l=[]
for(o in e){s=e[o]
l.push(s[0]=(s[0]+i+1)%1)}return l}
SpriteBuilder.prototype.adjustValueForColorMap=function(e,t,r){var i,n,o,s,a,l
l=function(){var r
r=[]
for(o in e){s=e[o]
r.push(s[t])}return r}()
i=sum(l)/l.length
if(r==null){r=.5}n=r-i
a=[]
for(o in e){s=e[o]
a.push(s[t]=Math.max(0,Math.min(1,s[t]+n)))}return a}
SpriteBuilder.prototype.applyColorMap=function(e,t){var r,i,n,o,s
n=[]
for(r=0,i=e.length;r<i;r++){s=e[r]
o=this.shapeStore[s]
if(o.fc==null||!t[o.fc]){continue}n.push(this.colorMap[s]=hslToHex(t[o.fc]))}return n}
return SpriteBuilder}()
sum=function(e){return _.reduce(e,function(e,t){return e+t})}})
require.register("views/HomeView",function(e,require,t){var r,i,n,o,s,a,l,c,u,p,d,h,m,g=function(e,t){return function(){return e.apply(t,arguments)}},f=function(e,t){for(var r in t){if(y.call(t,r))e[r]=t[r]}function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},y={}.hasOwnProperty
s=require("views/core/RootView")
h=require("templates/home-view")
r=require("collections/CocoCollection")
a=require("models/TrialRequest")
l=require("collections/TrialRequests")
i=require("collections/Courses")
m=require("core/utils")
d=require("core/storage")
p=require("core/auth"),c=p.logoutUser,u=p.me
n=require("views/core/CreateAccountModal/CreateAccountModal")
t.exports=o=function(e){f(t,e)
function t(){this.fitToPage=g(this.fitToPage,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.id="home-view"
t.prototype.className="style-flat"
t.prototype.template=h
t.prototype.events={"click .play-btn":"onClickPlayButton","change #school-level-dropdown":"onChangeSchoolLevelDropdown","click .student-btn":"onClickStudentButton","click .teacher-btn":"onClickTeacherButton","click #learn-more-link":"onClickLearnMoreLink","click .screen-thumbnail":"onClickScreenThumbnail","click #carousel-left":"onLeftPressed","click #carousel-right":"onRightPressed","click .request-demo":"onClickRequestDemo","click .logout-btn":"logoutAccount","click .profile-btn":"onClickViewProfile","click .setup-class-btn":"onClickSetupClass","click .my-classes-btn":"onClickMyClassesButton","click .resource-btn":"onClickResourceButton"}
t.prototype.shortcuts={right:"onRightPressed",left:"onLeftPressed",esc:"onEscapePressed"}
t.prototype.initialize=function(e){var t
this.courses=new i
this.supermodel.trackRequest(this.courses.fetchReleased())
if(u.isTeacher()){this.trialRequests=new l
this.trialRequests.fetchOwn()
this.supermodel.loadCollection(this.trialRequests)}t=false
return this.playURL=u.isStudent()?"/students":t?"/play?hour_of_code=true":"/play"}
t.prototype.onLoaded=function(){var e,r
if((e=this.trialRequests)!=null?e.size():void 0){this.trialRequest=this.trialRequests.first()}this.isTeacherWithDemo=this.trialRequest&&((r=this.trialRequest.get("status"))==="approved"||r==="submitted")
if(/sunburst/.test(location.pathname)&&u.isAnonymous()){d=require("core/storage")
d.save("referredBySunburst",true)
this.openModalView(new n({startOnPath:"teacher"}))}return t.__super__.onLoaded.call(this)}
t.prototype.onClickLearnMoreLink=function(){var e
if((e=window.tracker)!=null){e.trackEvent("Homepage Click Learn More",{category:"Homepage"},[])}return this.scrollToLink("#classroom-in-box-container")}
t.prototype.onClickPlayButton=function(e){var t
return(t=window.tracker)!=null?t.trackEvent($(e.target).data("event-action"),{category:"Homepage"},[]):void 0}
t.prototype.onClickRequestDemo=function(e){var t
this.playSound("menu-button-click")
e.preventDefault()
e.stopImmediatePropagation()
if((t=window.tracker)!=null){t.trackEvent($(e.target).data("event-action"),{category:"Homepage"},[])}if(u.isTeacher()){return application.router.navigate("/teachers/update-account",{trigger:true})}else{return application.router.navigate("/teachers/demo",{trigger:true})}}
t.prototype.onClickSetupClass=function(e){var t
if((t=window.tracker)!=null){t.trackEvent($(e.target).data("event-action"),{category:"Homepage"},[])}return application.router.navigate("/teachers/classes",{trigger:true})}
t.prototype.onClickStudentButton=function(e){var t
if((t=window.tracker)!=null){t.trackEvent($(e.target).data("event-action"),{category:"Homepage"},[])}return this.openModalView(new n({startOnPath:"student"}))}
t.prototype.onClickTeacherButton=function(e){var t
if((t=window.tracker)!=null){t.trackEvent($(e.target).data("event-action"),{category:"Homepage"},[])}return this.openModalView(new n({startOnPath:"teacher"}))}
t.prototype.onClickViewProfile=function(e){var t
e.preventDefault()
return(t=window.tracker)!=null?t.trackEvent($(e.target).data("event-action"),{category:"Homepage"},[]):void 0}
t.prototype.onClickMyClassesButton=function(e){var t
e.preventDefault()
return(t=window.tracker)!=null?t.trackEvent($(e.target).data("event-action"),{category:"Homepage"},[]):void 0}
t.prototype.onClickResourceButton=function(e){var t
e.preventDefault()
return(t=window.tracker)!=null?t.trackEvent($(e.target).data("event-action"),{category:"Homepage"},[]):void 0}
t.prototype.afterRender=function(){this.onChangeSchoolLevelDropdown()
this.$("#screenshot-lightbox").modal()
this.$("#screenshot-carousel").carousel({interval:0,keyboard:false})
$(window).on("resize",this.fitToPage)
this.fitToPage()
setTimeout(this.fitToPage,0)
if(u.isAnonymous()){if(document.location.hash==="#create-account"){this.openModalView(new n)}if(document.location.hash==="#create-account-individual"){this.openModalView(new n({startOnPath:"individual"}))}if(document.location.hash==="#create-account-student"){this.openModalView(new n({startOnPath:"student"}))}if(document.location.hash==="#create-account-teacher"){this.openModalView(new n({startOnPath:"teacher"}))}}return t.__super__.afterRender.call(this)}
t.prototype.destroy=function(){$(window).off("resize",this.fitToPage)
return t.__super__.destroy.call(this)}
t.prototype.logoutAccount=function(){Backbone.Mediator.publish("auth:logging-out",{})
return c()}
t.prototype.onChangeSchoolLevelDropdown=function(e){var t,r
r={elementary:{"introduction-to-computer-science":"2-4","game-development-1":"2-3","web-development-1":"2-3","game-development-2":"2-3","web-development-2":"2-3","computer-science-6":"24-30","computer-science-7":"30-40","computer-science-8":"30-40",default:"16-25",total:"150-215 hours (about two and a half years)"},middle:{"introduction-to-computer-science":"1-3","game-development-1":"1-3","web-development-1":"1-3","game-development-2":"1-3","web-development-2":"1-3","computer-science-6":"12-14","computer-science-7":"14-16","computer-science-8":"14-16",default:"8-12",total:"75-100 hours (about one and a half years)"},high:{"introduction-to-computer-science":"1","game-development-1":"1-2","web-development-1":"1-2","game-development-2":"1-2","web-development-2":"1-2","computer-science-6":"10-12","computer-science-7":"12-16","computer-science-8":"12-16",default:"8-10",total:"65-85 hours (about one year)"}}
t=e?$(e.target).val():"middle"
this.$el.find("#courses-row .course-details").each(function(){var e,i
i=$(this).data("course-slug")
e=r[t][i]||r[t]["default"]
$(this).find(".course-duration .course-hours").text(e)
return $(this).find(".course-duration .unit").text($.i18n.t(e==="1"?"units.hour":"units.hours"))})
return this.$el.find("#semester-duration").text(r[t].total)}
t.prototype.onRightPressed=function(e){var t
if(e.type==="keydown"&&$(document.activeElement).is(".carousel-control")){return}if((t=$("#screenshot-lightbox").data("bs.modal"))!=null?t.isShown:void 0){e.preventDefault()
return $("#screenshot-carousel").carousel("next")}}
t.prototype.onLeftPressed=function(e){var t
if(e.type==="keydown"&&$(document.activeElement).is(".carousel-control")){return}if((t=$("#screenshot-lightbox").data("bs.modal"))!=null?t.isShown:void 0){e.preventDefault()
return $("#screenshot-carousel").carousel("prev")}}
t.prototype.onEscapePressed=function(e){var t
if((t=$("#screenshot-lightbox").data("bs.modal"))!=null?t.isShown:void 0){e.preventDefault()
return $("#screenshot-lightbox").modal("hide")}}
t.prototype.onClickScreenThumbnail=function(e){var t
if(!((t=$("#screenshot-lightbox").data("bs.modal"))!=null?t.isShown:void 0)){e.preventDefault()
return $("#screenshot-carousel").carousel($(e.currentTarget).data("index"))}}
t.prototype.fitToPage=function(){var e,t,r,i,n,o
o=$(window).height()
t=this.$("#learn-more-link").parent()
r=t.offset()
e=o-(r.top+t.height())
n=this.$(".top-spacer").first()
i=parseInt(n.css("height")||0)+e
i=Math.min(Math.max(0,i),170)
return n.css({height:i+"px"})}
t.prototype.mergeWithPrerendered=function(e){return true}
return t}(s)})
require.register("templates/core/achievement-popup",function(e,require,t){var r=function e(t){var r=[]
var i=t||{},n=i.style,o=i.locked,s=i.imgURL,a=i.title,l=i.description,c=i.popup,u=i.level,p=i.$,d=i.currentXP,h=i.newXP,m=i.leftXP,g=i.oldXPWidth,f=i.newXPWidth,y=i.leftXPWidth
var v=n+(o===true?" locked":"")
r.push("<div"+jade.attrs({class:["clearfix","achievement-body",v]},{class:true})+'><div class="achievement-icon"><div class="achievement-image"><img'+jade.attrs({src:s},{src:true})+'/></div></div><div class="achievement-content"><div class="achievement-title">'+jade.escape(null==(jade.interp=a)?"":jade.interp)+'</div><p class="achievement-description">'+jade.escape(null==(jade.interp=l)?"":jade.interp)+"</p>")
if(c){r.push('<div class="progress-wrapper"><span class="user-level">'+jade.escape(null==(jade.interp=u)?"":jade.interp)+'</span><div class="progress-bar-wrapper"><div class="progress">')
var b=p.i18n.t("achievements.current_xp_prefix")+d+" XP"+p.i18n.t("achievements.current_xp_postfix")
var _=p.i18n.t("achievements.new_xp_prefix")+h+" XP"+p.i18n.t("achievements.new_xp_postfix")
var w=p.i18n.t("achievements.left_xp_prefix")+m+" XP"+p.i18n.t("achievements.left_xp_infix")+(u+1)+p.i18n.t("achievements.left_xp_postfix")
r.push("<div"+jade.attrs({style:"width:"+g+"%","data-toggle":"tooltip","data-placement":"top",title:""+b+"",class:["progress-bar","xp-bar-old"]},{style:true,"data-toggle":true,"data-placement":true,title:true})+"></div><div"+jade.attrs({style:"width:"+f+"%","data-toggle":"tooltip",title:""+_+"",class:["progress-bar","xp-bar-new"]},{style:true,"data-toggle":true,title:true})+"></div><div"+jade.attrs({style:"width:"+y+"%","data-toggle":"tooltip",title:""+w+"",class:["progress-bar","xp-bar-left"]},{style:true,"data-toggle":true,title:true})+'></div></div></div><div class="progress-bar-border"></div></div>')}r.push("</div></div>")
return r.join("")}
if(typeof define==="function"&&define.amd){define([],function(){return r})}else if(typeof t==="object"&&t&&t.exports){t.exports=r}else{r}})
require.register("templates/core/auth-modal-gplus-checklist",function(e,require,t){var r=function e(t){var r=[]
var i=t||{},n=i.steps
r.push('<ul class="list-group">');(function(){var e=n
if("number"==typeof e.length){for(var t=0,i=e.length;t<i;t++){var o=e[t]
r.push("<li"+jade.attrs({class:["list-group-item",o.done?"list-group-item-success":"list-group-item-warning"]},{class:true})+"><span"+jade.attrs({"data-i18n":o.i18n},{"data-i18n":true})+"></span>")
if(o.done){r.push('<span class="glyphicon glyphicon-ok pull-right"></span>')}r.push("</li>")}}else{var i=0
for(var t in e){i++
var o=e[t]
r.push("<li"+jade.attrs({class:["list-group-item",o.done?"list-group-item-success":"list-group-item-warning"]},{class:true})+"><span"+jade.attrs({"data-i18n":o.i18n},{"data-i18n":true})+"></span>")
if(o.done){r.push('<span class="glyphicon glyphicon-ok pull-right"></span>')}r.push("</li>")}}}).call(this)
r.push("</ul>")
return r.join("")}
if(typeof define==="function"&&define.amd){define([],function(){return r})}else if(typeof t==="object"&&t&&t.exports){t.exports=r}else{r}})
require.register("templates/core/auth-modal",function(e,require,t){var r=function e(t){var r=[]
var i=t||{},n=i.showRequiredError,o=i.view,s=i.translate
r.push('<div class="modal-dialog"><div class="modal-content"><img src="/images/pages/modal/auth/login-background.png" draggable="false" class="auth-modal-background"/><h1 data-i18n="login.log_in"></h1><div id="close-modal"><span class="glyphicon glyphicon-remove"></span></div></div><div class="auth-form-content">')
if(n){r.push('<div class="alert alert-success"><span data-i18n="signup.required"></span></div>')}r.push('<div id="unknown-error-alert" data-i18n="loading_error.unknown" class="alert alert-danger hide"></div><form class="form"><div class="form-group"><label for="username-or-email-input" class="control-label"><span data-i18n="login.email_or_username"></span>:</label><div class="input-border"><input'+jade.attrs({id:"username-or-email-input",name:"emailOrUsername",value:o.previousFormInputs.email,class:["input-large","form-control"]},{name:true,value:true})+'/></div></div><div class="form-group"><div id="recover-account-wrapper"><a id="link-to-recover" data-toggle="coco-modal" data-target="core/RecoverModal" data-i18n="login.forgot_password"></a></div><label for="password" class="control-label"><span data-i18n="general.password"></span>:</label><div class="input-border"><input'+jade.attrs({id:"password-input",name:"password",type:"password",value:o.previousFormInputs.password,class:["input-large","form-control"]},{name:true,type:true,value:true})+"/></div></div><input"+jade.attrs({id:"login-btn",value:s("login.log_in"),type:"submit",class:["btn","btn-lg","btn-illustrated","btn-block","btn-success"]},{value:true,type:true})+'/></form><div class="wait secret"><h3 data-i18n="login.logging_in"></h3></div></div><div class="auth-network-logins"><!-- GitHub login complete, but the button does not fit in with the design yet. Hidden for now--><!--div.network-login--><!--  btn.btn.btn-sm.github-login-button#github-login-button--><!--    img(src="/images/pages/modal/auth/github_icon.png")--><!--    | GitHub--><button id="facebook-login-btn" disabled="disabled" class="btn btn-primary btn-lg btn-illustrated network-login"><img src="/images/pages/community/logo_facebook.png" draggable="false" class="network-logo"/><span data-i18n="login.sign_in_with_facebook" class="sign-in-blurb"></span></button><button id="gplus-login-btn" disabled="disabled" class="btn btn-danger btn-lg btn-illustrated network-login"><img src="/images/pages/community/logo_g+.png" draggable="false" class="network-logo"/><span data-i18n="login.sign_in_with_gplus" class="sign-in-blurb"></span><div class="gplus-login-wrapper"><div class="gplus-login-button"></div></div></button></div><div class="extra-pane"><div data-i18n="login.signup_switch" class="switch-explanation"></div><div id="switch-to-signup-btn" data-i18n="login.sign_up" class="btn btn-lg btn-illustrated btn-warning"></div></div></div>')
return r.join("")}
if(typeof define==="function"&&define.amd){define([],function(){return r})}else if(typeof t==="object"&&t&&t.exports){t.exports=r}else{r}})
require.register("templates/core/components/flat-layout",function(e,require,t){var r=function e(t){var r=[]
r.push('<div><page-errors v-if="errors.length"></page-errors><slot v-else="v-else"></slot></div>')
return r.join("")}
if(typeof define==="function"&&define.amd){define([],function(){return r})}else if(typeof t==="object"&&t&&t.exports){t.exports=r}else{r}})
require.register("templates/core/components/page-errors",function(e,require,t){var r=function e(t){var r=[]
r.push('<div id="loading-error" class="text-center"><div v-if="error.stack"><h1>{{ $t("loading_error.unknown") }}</h1></div><div v-else-if="error.code === 401"><h1><span class="spr">401:</span><span>{{ $t("loading_error.login_required") }}</span></h1><p>{{ $t("loading_error.login_required_desc") }}</p><button class="login-btn btn btn-primary">{{ $t("login.log_in") }}</button><button id="create-account-btn" class="btn btn-primary">{{ $t("login.sign_up") }}</button></div><!-- 402 currently not in use. TODO: Set it up--><div v-else-if="error.code === 402"><h2>402: Payment Required</h2></div><div v-else-if="error.code === 403"><h1><span class="spr">403:</span><span>{{ $t("loading_error.forbidden") }}</span></h1><p>{{ $t("loading_error.forbidden_desc") }}</p><!-- this should make no diff... but sometimes the server returns 403 when it should return 401--><button id="logout-btn" v-if="isAnonymous" class="btn btn-primary">{{ $t("login.log_out") }}</button></div><div v-else-if="error.code === 404"><h1><span class="spr">404:</span><span>{{ $t(\'loading_error.not_found\') }}</span></h1>')
var i=Math.floor(Math.random()*3)+1
r.push("<img"+jade.attrs({id:"not-found-img",src:"/images/pages/not_found/404_"+i+".png"},{src:true})+'/><p>{{ $t("loading_error.not_found_desc") }}</p></div><div v-else-if="!error.code"><h1>{{ $t("loading_error.connection_failure") }}</h1><p>{{ $t("loading_error.connection_failure_desc") }}</p></div><div v-else-if="error.code === 408"><h1><span class="spr">408:</span><span>{{ $t("loading_error.timeout") }}</span></h1></div><div v-else-if="error.code &gt;= 500 &amp;&amp; error.code &lt;= 599"><h1><span class="spr">{{error.code}}</span><span>{{ $t("loading_error.server_error") }}</span></h1></div><div v-else="v-else"><h1>{{ $t("loading_error.unknown") }}</h1><p>{{ $t("loading_error.general_desc") }}</p></div><div id="links-row" class="row"><div class="col-sm-3"><ul class="list-unstyled"><li><strong>{{ $t("common.help") }}</strong></li><li><a href="/">{{ $t("nav.home") }}</a></li><li><a v-bind:href="forumLink">{{ $t("nav.forum") }}</a></li><li v-if="isAnonymous"><a tabindex="-1" class="contact-modal">{{ $t("nav.contact") }}</a></li><li><a href="/community">{{ $t("nav.community") }}</a></li></ul></div><div class="col-sm-3"><ul class="list-unstyled"><li><strong>{{ $t("courses.students") }}</strong></li><li><a href="/students">{{ $t("nav.learn_to_code") }}</a></li><li v-if="isAnonymous"><a class="login-btn">{{ $t("login.log_in") }}</a></li><li><a href="/students">{{ $t("courses.join_class") }}</a></li></ul></div><div class="col-sm-3"><ul class="list-unstyled"><li v-if="isAnonymous"><a class="login-btn">{{ $t("login.log_in") }}</a></li><li><a href="/teachers/classes">{{ $t("nav.create_a_class") }}</a></li></ul></div><div class="col-sm-3"><ul class="list-unstyled"><li><strong>{{ $t("nav.other") }}</strong></li><li><a href="http://blog.codecombat.com/">{{ $t("nav.blog") }}</a></li><li><a href="https://www.facebook.com/codecombat">{{ $t("nav.facebook") }}</a></li><li><a href="https://twitter.com/codecombat">{{ $t("nav.twitter") }}</a></li></ul></div></div></div>')
return r.join("")}
if(typeof define==="function"&&define.amd){define([],function(){return r})}else if(typeof t==="object"&&t&&t.exports){t.exports=r}else{r}})
require.register("templates/core/confirm-modal",function(e,require,t){var r=function e(t){var r=[]
var i=t||{},n=i.view,o=i.closeOnConfirm
r.push('<div class="modal-dialog"><div class="modal-content style-flat"><div class="modal-header">')
if(n.closeButton){r.push('<div type="button" data-dismiss="modal" aria-hidden="true" class="button close">&times;</div>')}r.push("<h3>"+jade.escape(null==(jade.interp=n.title)?"":jade.interp)+'</h3></div><div class="modal-body"><p>'+(null==(jade.interp=n.body)?"":jade.interp)+'</p></div><div class="modal-body wait secret"><h3>Reticulating Splines...</h3><div class="progress progress-striped active"><div class="progress-bar"></div></div></div><div class="modal-footer"><button id="decline-button" type="button" data-dismiss="modal" class="btn btn-secondary">'+jade.escape(null==(jade.interp=n.decline)?"":jade.interp)+"</button><button"+jade.attrs({id:"confirm-button",type:"button","data-dismiss":o===true?"modal":undefined,class:["btn","btn-primary"]},{type:true,"data-dismiss":true})+">"+jade.escape(null==(jade.interp=n.confirm)?"":jade.interp)+"</button></div></div></div>")
return r.join("")}
if(typeof define==="function"&&define.amd){define([],function(){return r})}else if(typeof t==="object"&&t&&t.exports){t.exports=r}else{r}})
require.register("templates/core/contact",function(e,require,t){var r=function e(t){var r=[]
var i=t||{},n=i.view,o=i.me
r.push('<div class="modal-dialog game"><div class="background-wrapper"><div class="modal-content"><div class="modal-header">')
if(n.closeButton){r.push('<div type="button" data-dismiss="modal" aria-hidden="true" class="button close">&times;</div>')}r.push('<h3 data-i18n="contact.contact_us">Contact CodeCombat...</h3></div><div class="modal-body"><p><span data-i18n="contact.welcome">Good to hear from you! Use this form to send us email. </span><span data-i18n="contact.forum_prefix" class="spl">For anything public, please try </span><a href="http://discourse.codecombat.com/" data-i18n="contact.forum_page">our forum</a><span data-i18n="contact.forum_suffix"> instead.</span><span data-i18n="contact.faq_prefix" class="spl spr">There\'s also a</span><a data-i18n="contact.faq" href="http://discourse.codecombat.com/t/faq-check-before-posting/1027">FAQ</a>.</p>')
if(o.isPremium()){r.push('<p data-i18n="contact.subscriber_support">Since you\'re a CodeCombat subscriber, your email will get our priority support.</p>')}else{r.push('<p><span data-i18n="contact.subscribe_prefix" class="spr">If you need help figuring out a level, please</span><a data-toggle="coco-modal" data-target="core/SubscribeModal" data-i18n="contact.subscribe">buy a CodeCombat subscription</a><span data-i18n="contact.subscribe_suffix" class="spl">and we\'ll be happy to help you with your code.</span></p>')}r.push('<div class="form"><div class="form-group"><label for="contact-email" data-i18n="general.email" class="control-label">Email      </label><input'+jade.attrs({id:"contact-email",name:"email",type:"email",value:""+(o.get("anonymous")?"":o.get("email"))+"","data-i18n":"[placeholder]contact.where_reply",placeholder:"Where should we reply?",class:["form-control"]},{name:true,type:true,value:true,"data-i18n":true,placeholder:true})+'/></div><div class="form-group"><label for="contact-message" data-i18n="general.message" class="control-label">Message      </label><textarea id="contact-message" name="message" rows="8" class="form-control"></textarea></div></div><div id="contact-screenshot" class="secret"><a target="_blank" data-i18n="contact.screenshot_included">Screenshot included.</a><br/><img width="100" class="pull-left"/></div></div><div class="modal-body wait secret"><h3>Reticulating Splines...</h3><div class="progress progress-striped active"><div class="progress-bar"></div></div></div><div class="modal-footer"><span data-i18n="common.sending" class="sending-indicator pull-left secret">Sending...</span><a href="#" data-dismiss="modal" aria-hidden="true" data-i18n="common.cancel" class="btn">Cancel</a><button id="contact-submit-button" data-i18n="contact.send" class="btn btn-primary">Send Feedback</button></div></div></div></div>')
return r.join("")}
if(typeof define==="function"&&define.amd){define([],function(){return r})}else if(typeof t==="object"&&t&&t.exports){t.exports=r}else{r}})
require.register("templates/core/create-account-modal/basic-info-view",function(e,require,t){var r=function e(t){var r=[]
var i=t||{},n=i.view
r.push('<form id="basic-info-form" class="modal-body basic-info">')
var o=n.signupState.get("path")
r.push('<div class="modal-body-content"><div class="auth-network-logins text-center"><h4><span data-i18n="teachers_quote.connect_with"></span></h4><a'+jade.attrs({id:"facebook-signup-btn",disabled:!n.signupState.get("facebookEnabled"),"data-sso-used":"facebook",class:["btn","btn-primary","btn-lg","btn-illustrated","network-login"]},{disabled:true,"data-sso-used":true})+'><img src="/images/pages/modal/auth/facebook_sso_button.png" draggable="false" width="175" height="40" class="network-logo"/><span data-i18n="login.sign_in_with_facebook" class="sign-in-blurb"></span></a><a'+jade.attrs({id:"gplus-signup-btn",disabled:!n.signupState.get("gplusEnabled"),"data-sso-used":"gplus",class:["btn","btn-danger","btn-lg","btn-illustrated","network-login"]},{disabled:true,"data-sso-used":true})+'><img src="/images/pages/modal/auth/gplus_sso_button.png" draggable="false" width="175" height="40" class="network-logo"/><span data-i18n="login.sign_in_with_gplus" class="sign-in-blurb"></span><div class="gplus-login-wrapper"><div class="gplus-login-button"></div></div></a></div><div class="hr-text"><hr/><span data-i18n="general.or"></span></div><div class="form-container">')
if(["student","teacher"].indexOf(n.signupState.get("path"))!==-1){r.push('<div class="row full-name"><div'+jade.attrs({class:["col-xs-offset-3",o==="teacher"?"col-xs-3":"col-xs-5"]},{class:true})+'><div class="form-group"><label for="first-name-input" class="control-label"><span data-i18n="general.first_name"></span></label><input'+jade.attrs({id:"first-name-input",name:"firstName",value:n.signupState.get("signupForm").firstName,class:["form-control","input-lg"]},{name:true,value:true})+"/></div></div><div"+jade.attrs({class:[o==="teacher"?"col-xs-3":"col-xs-4"]},{class:true})+">")
if(n.signupState.get("path")==="teacher"){r.push('<div class="last-name form-group"><label for="last-name-input" class="control-label"><span data-i18n="general.last_name"></span></label><input'+jade.attrs({id:"last-name-input",name:"lastName",value:n.signupState.get("signupForm").lastName,class:["form-control","input-lg"]},{name:true,value:true})+"/></div>")}else{r.push('<div class="last-initial form-group"><label for="last-name-input" class="control-label"><span data-i18n="general.last_initial"></span></label><input'+jade.attrs({id:"last-name-input",name:"lastName",maxlength:"1",value:n.signupState.get("signupForm").lastName,class:["form-control","input-lg"]},{name:true,maxlength:true,value:true})+"/></div>")}r.push("</div></div>")}r.push('<div class="form-group"><div class="row"><div class="col-xs-5 col-xs-offset-3"><label for="email-input" class="control-label"><span data-i18n="share_progress_modal.form_label"></span></label>')
if(n.signupState.get("path")==="student"){r.push('<div class="help-block optional-help-block pull-right"><span data-i18n="signup.optional"></span></div>')}r.push("<input"+jade.attrs({id:"email-input",name:"email",type:"email",value:n.signupState.get("signupForm").email,class:["form-control","input-lg"]},{name:true,type:true,value:true})+'/></div><div class="col-xs-4 email-check fancy-error">')
var s=n.state.get("checkEmailState")
if(s==="checking"){r.push('<span data-i18n="signup.checking" class="small"></span>')}if(s==="exists"){r.push('<span class="small"><span class="text-burgundy glyphicon glyphicon-remove-circle"></span>'+jade.escape(null==(jade.interp=" ")?"":jade.interp)+'<span data-i18n="signup.account_exists"></span>'+jade.escape(null==(jade.interp=" ")?"":jade.interp)+'<a data-i18n="signup.sign_in" class="login-link"></a></span>')}if(s==="available"){r.push('<span class="small"><span class="text-forest glyphicon glyphicon-ok-circle"></span>'+jade.escape(null==(jade.interp=" ")?"":jade.interp)+'<span data-i18n="signup.email_good"></span></span>')}r.push('</div></div></div><div class="form-group"><div class="row"><div class="col-xs-5 col-xs-offset-3"><label for="username-input" class="control-label"><span data-i18n="general.username"></span></label><input'+jade.attrs({id:"username-input",name:"name",value:n.signupState.get("signupForm").name,class:["form-control","input-lg"]},{name:true,value:true})+'/></div><div class="col-xs-4 name-check fancy-error">')
var a=n.state.get("checkNameState")
if(a==="checking"){r.push('<span data-i18n="signup.checking" class="small"></span>')}if(a==="exists"){r.push('<span class="small"><span class="text-burgundy glyphicon glyphicon-remove-circle"></span>'+jade.escape(null==(jade.interp=" ")?"":jade.interp)+"<span>"+jade.escape(null==(jade.interp=n.state.get("suggestedNameText"))?"":jade.interp)+"</span></span>")}if(a==="available"){r.push('<span class="small"><span class="text-forest glyphicon glyphicon-ok-circle"></span>'+jade.escape(null==(jade.interp=" ")?"":jade.interp)+'<span data-i18n="signup.name_available"></span></span>')}r.push('</div></div></div><div class="form-group"><div class="row"><div class="col-xs-5 col-xs-offset-3"><label for="password-input" class="control-label"><span data-i18n="general.password"></span></label><input'+jade.attrs({id:"password-input",name:"password",type:"password",value:n.signupState.get("signupForm").password,class:["form-control","input-lg"]},{name:true,type:true,value:true})+'/></div></div></div><div class="form-group checkbox subscribe"><div class="row"><div class="col-xs-7 col-xs-offset-3"><div class="checkbox"><label><input'+jade.attrs({id:"subscribe-input",type:"checkbox",name:"subscribe",checked:n.signupState.get("signupForm").subscribe[0]==="on"},{type:true,name:true,checked:true})+'/><span data-i18n="signup.email_announcements"></span></label></div></div></div></div><div class="error-area">')
var l=n.state.get("error")
if(l){r.push('<div class="row"><div class="col-xs-7 col-xs-offset-3"></div></div><div class="alert alert-danger">'+jade.escape(null==(jade.interp=l)?"":jade.interp)+"</div>")}r.push('</div></div></div><!-- In reverse order for tabbing purposes--><div class="history-nav-buttons">')
if(n.signupState.get("path")==="teacher"){r.push('<button type="submit" class="next-button btn btn-lg btn-navy"><span data-i18n="common.next"></span></button>')}else{r.push('<button id="create-account-btn" type="submit" class="next-button btn btn-lg btn-navy"><span data-i18n="login.sign_up"></span></button>')}r.push('<button type="button" class="back-button btn btn-lg btn-navy-alt"><span data-i18n="common.back"></span></button></div></form>')
return r.join("")}
if(typeof define==="function"&&define.amd){define([],function(){return r})}else if(typeof t==="object"&&t&&t.exports){t.exports=r}else{r}})
require.register("templates/core/create-account-modal/choose-account-type-view",function(e,require,t){var r=function e(t){var r=[]
r.push('<div class="modal-body-content"><h4 class="choose-type-title"><span data-i18n="signup.choose_type"></span></h4><div class="path-cards"><div class="path-card navy"><div class="card-title"><span data-i18n="courses.teacher"></span></div><div class="card-content"><h6 class="card-description"><span data-i18n="signup.teacher_type_1"></span></h6><ul class="small m-t-1"><li><span data-i18n="signup.teacher_type_2"></span></li><li><span data-i18n="signup.teacher_type_3"></span></li><li><span data-i18n="signup.teacher_type_4"></span></li></ul></div><div class="card-footer"><button class="btn btn-lg btn-navy teacher-path-button"><div class="text-h6"><span data-i18n="signup.signup_as_teacher"></span></div></button></div></div><div class="path-card forest"><div class="card-title"><span data-i18n="courses.student"></span></div><div class="card-content"><h6 class="card-description"><span data-i18n="signup.student_type_1"></span></h6><ul class="small m-t-1"><li><span data-i18n="signup.student_type_2"></span></li><li><span data-i18n="signup.student_type_3"></span></li><li><span data-i18n="signup.student_type_4"></span></li></ul></div><div class="card-footer"><i class="small"><span data-i18n="signup.student_type_5"></span></i><button class="btn btn-lg btn-forest student-path-button"><div class="text-h6"><span data-i18n="signup.signup_as_student"></span></div></button></div></div></div><div class="individual-section"><div class="individual-title"><span data-i18n="signup.individuals_or_parents"></span></div><p class="individual-description small"><span data-i18n="signup.individual_type"></span></p><button class="btn btn-lg btn-navy individual-path-button"><div class="text-h6"><span data-i18n="signup.signup_as_individual"></span></div></button></div></div>')
return r.join("")}
if(typeof define==="function"&&define.amd){define([],function(){return r})}else if(typeof t==="object"&&t&&t.exports){t.exports=r}else{r}})
require.register("templates/core/create-account-modal/confirmation-view",function(e,require,t){var r=function e(t){var r=[]
var i=t||{},n=i.view,o=i.me
r.push('<div class="modal-body"><div class="modal-body-content"><h4 data-i18n="signup.account_created" class="m-y-1"></h4><div class="confirm_container text-center m-y-1">')
if(n.signupState.get("path")==="student"){r.push('<p data-i18n="signup.confirm_student_blurb"></p>')}else{r.push('<p data-i18n="signup.confirm_individual_blurb"></p>')}r.push('</div><div class="signup-info-box-wrapper"><div data-i18n="signup.write_this_down" class="text-burgundy"></div><div class="signup-info-box text-center">')
if(o.get("name")){r.push('<h4><b><span data-i18n="general.username"></span>: '+jade.escape((jade.interp=o.get("name"))==null?"":jade.interp)+"</b></h4>")}if(o.get("email")){r.push("<h5><b>")
var s=n.signupState.get("ssoUsed")
if(s==="facebook"){r.push('<img src="/images/pages/modal/auth/facebook_small.png" class="m-r-1"/>'+jade.escape(null==(jade.interp=o.get("email"))?"":jade.interp))}else if(s==="gplus"){r.push('<img src="/images/pages/modal/auth/gplus_small.png" class="m-r-1"/>'+jade.escape(null==(jade.interp=o.get("email"))?"":jade.interp))}else{r.push('<span data-i18n="general.email"></span>: '+jade.escape((jade.interp=o.get("email"))==null?"":jade.interp)+"")}r.push("</b></h5>")}r.push('</div></div><button id="start-btn" data-i18n="signup.start_playing" class="btn btn-navy btn-lg m-t-3"></button></div></div>')
return r.join("")}
if(typeof define==="function"&&define.amd){define([],function(){return r})}else if(typeof t==="object"&&t&&t.exports){t.exports=r}else{r}})
require.register("templates/core/create-account-modal/coppa-deny-view",function(e,require,t){var r=function e(t){var r=[]
var i=t||{},n=i.view,o=i.state,s=i.translate
r.push('<form class="modal-body coppa-deny"><div class="modal-body-content"><div class="parent-email-input-group form-group">')
if(!n.state.get("parentEmailSent")){r.push('<label for="parent-email-input" class="control-label text-h4"><span data-i18n="signup.enter_parent_email"></span></label><input'+jade.attrs({id:"parent-email-input",type:"email",name:"parentEmail",value:o.get("parentEmail")},{type:true,name:true,value:true})+"/>")
if(o.get("error")){r.push('<p class="small error"><span data-i18n="signup.parent_email_error"></span></p>')}r.push("<p"+jade.attrs({class:["error",o.get("dontUseOurEmailSilly")?"":"hidden"]},{class:true})+'><span data-i18n="signup.dont_use_our_email_silly"></span></p><p class="small parent-email-blurb render"><span>'+(null==(jade.interp=s("signup.parent_email_blurb").replace("{{email_link}}",'<a href="mailto:team@codecombat.com">team@codecombat.com</a>'))?"":jade.interp)+"</span></p>")}if(n.state.get("parentEmailSent")){r.push('<p class="small parent-email-blurb"><span data-i18n="signup.parent_email_sent"></span></p><a href="/play" data-dismiss="modal" class="btn btn-navy btn-lg">Play without saving</a>')}r.push('</div></div><!-- In reverse order for tabbing purposes--><div class="history-nav-buttons"><button'+jade.attrs({type:"submit",disabled:o.get("parentEmailSent")||o.get("parentEmailSending")||o.get("dontUseOurEmailSilly"),class:["send-parent-email-button","btn","btn-lg","btn-navy"]},{type:true,disabled:true})+">")
if(o.get("parentEmailSent")){r.push('<span data-i18n="common.sent"></span>')}else{r.push('<span data-i18n="common.send"></span>')}r.push('</button><button type="button" class="back-btn btn btn-lg btn-navy-alt"><span data-i18n="common.back"></span></button></div></form>')
return r.join("")}
if(typeof define==="function"&&define.amd){define([],function(){return r})}else if(typeof t==="object"&&t&&t.exports){t.exports=r}else{r}})
require.register("templates/core/create-account-modal/create-account-modal",function(e,require,t){var r=function e(t){var r=[]
var i=t||{},n=i.view
var o=function(){var e=this.block,t=this.attributes||{},i=this.escaped||{}
if(n.signupState.get("screen")!=="confirmation"){r.push('<div class="modal-footer-content"><div class="small-details"><span data-i18n="signup.login_switch" class="spr"></span><a class="login-link"><span data-i18n="signup.sign_in"></span></a></div></div>')}}
var s=function(){var e=this.block,t=this.attributes||{},i=this.escaped||{}
r.push("<h3>")
switch(n.signupState.get("path")){case"student":r.push('<span data-i18n="signup.create_student_header"></span>')
break
case"teacher":r.push('<span data-i18n="signup.create_teacher_header"></span>')
break
case"individual":r.push('<span data-i18n="signup.create_individual_header"></span>')
break
default:r.push('<span data-i18n="login.sign_up"></span>')
break}r.push("</h3>")}
r.push('<div class="modal-dialog"><div class="modal-content style-flat"><div'+jade.attrs({class:["modal-header",n.signupState.get("path")]},{class:true})+'><span data-dismiss="modal" aria-hidden="true" class="glyphicon glyphicon-remove button close"></span>')
s()
r.push("</div>")
switch(n.signupState.get("screen")){case"choose-account-type":r.push('<div id="choose-account-type-view"></div>')
break
case"segment-check":r.push('<div id="segment-check-view"></div>')
break
case"basic-info":r.push('<div id="basic-info-view"></div>')
break
case"coppa-deny":r.push('<div id="coppa-deny-view"></div>')
break
case"sso-already-exists":r.push('<div id="single-sign-on-already-exists-view"></div>')
break
case"sso-confirm":r.push('<div id="single-sign-on-confirm-view"></div>')
break
case"extras":r.push('<div id="extras-view"></div>')
break
case"confirmation":r.push('<div id="confirmation-view"></div>')
break
case"teacher-signup-component":r.push('<div id="teacher-signup-component"></div>')
break}r.push("<div"+jade.attrs({class:["modal-footer",n.signupState.get("path")]},{class:true})+">")
o()
r.push("</div></div></div>")
return r.join("")}
if(typeof define==="function"&&define.amd){define([],function(){return r})}else if(typeof t==="object"&&t&&t.exports){t.exports=r}else{r}})
require.register("templates/core/create-account-modal/demographics-panel",function(e,require,t){var r=function e(t){var r=[]
r.push('<div class="demographics-panel text-left"><div class="row"><div class="col-xs-6"><div v-bind:class="{ \'has-error\': showRequired &amp;&amp; !numStudents }" class="form-group"><span class="control-label">{{ $t("courses.number_programming_students") }}</span><div class="help-block small"><em class="text-info">{{ $t("teachers_quote.num_students_help") }}</em></div><select v-model="numStudents" ref="focus" name="numStudents" class="form-control"><option value="">{{ $t("teachers_quote.num_students_default") }}</option><option>1-10</option><option>11-50</option><option>51-100</option><option>101-200</option><option>201-500</option><option>501-1000</option><option>1000+</option></select><strong v-if="showRequired &amp;&amp; !numStudents" class="help-block">{{ $t("common.required_field") }}</strong></div><div v-bind:class="{ \'has-error\': showRequired &amp;&amp; !numStudentsTotal }" class="form-group"><span class="control-label"><span>{{ $t("courses.number_total_students") }}</span></span><select v-model="numStudentsTotal" name="numStudentsTotal" class="form-control"><option value="">{{ $t("teachers_quote.num_students_default") }}</option><option>1-500</option><option>500-1,000</option><option>1,000-5,000</option><option>5,000-10,000</option><option>10,000+</option></select><strong v-if="showRequired &amp;&amp; !numStudentsTotal" class="help-block">{{ $t("common.required_field") }}</strong></div><div v-bind:class="{ \'has-error\': showRequired &amp;&amp; !educationLevelComplete }"><span class="control-label">{{ $t("teachers_quote.education_level_label") }}</span><div class="help-block small"><em class="text-info">{{ $t("teachers_quote.education_level_help") }}</em></div><strong v-if="showRequired &amp;&amp; !educationLevelComplete" class="help-block">{{ $t("common.required_field") }}</strong><div class="checkbox"><label><input type="checkbox" value="Elementary" v-model="educationLevel" name="educationLevel"/><span>{{ $t("teachers_quote.elementary_school") }}</span></label></div><div class="checkbox"><label><input type="checkbox" value="Middle" v-model="educationLevel" name="educationLevel"/><span>{{ $t("teachers_quote.middle_school") }}</span></label></div><div class="checkbox"><label><input type="checkbox" value="High" v-model="educationLevel" name="educationLevel"/><span>{{ $t("teachers_quote.high_school") }}</span></label></div><div class="checkbox"><label><input type="checkbox" value="College+" v-model="educationLevel" name="educationLevel"/><span>{{ $t("teachers_quote.college_plus") }}</span></label></div><div class="checkbox"><label><input id="other-education-level-checkbox" type="checkbox" v-model="otherEducationLevel"/><span class="spr">{{ $t("nav.other") }}</span><span>{{ $t("teachers_quote.please_explain") }}</span></label></div><input id="other-education-level-input" v-model="otherEducationLevelExplanation" class="form-control m-b-2"/></div></div><div class="col-xs-6"><span class="control-label"><span>{{ $t("teachers_quote.anything_else") }}</span><span class="spl text-muted">{{ $t("signup.optional") }}</span></span><textarea rows="8" v-model="notes" class="form-control m-b-2"></textarea><span class="control-label"><span>{{ $t("teachers_quote.referrer") }}</span><span class="spl text-muted">{{ $t("signup.optional") }}</span><div class="help-block small"><em class="text-info">{{ $t("teachers_quote.referrer_help") }}</em></div></span><input id="oreferrer-input" v-model="referrer" class="form-control"/></div></div><!-- In reverse order for tabbing purposes--><div class="history-nav-buttons"><button v-on:click="clickContinue" class="next-button btn btn-lg btn-navy">{{ $t("login.sign_up") }}</button><button type="button" v-on:click="clickBack" class="back-button btn btn-lg btn-navy-alt">{{ $t("common.back") }}</button></div></div>')
return r.join("")}
if(typeof define==="function"&&define.amd){define([],function(){return r})}else if(typeof t==="object"&&t&&t.exports){t.exports=r}else{r}})
require.register("templates/core/create-account-modal/extras-view",function(e,require,t){var r=function e(t){var r=[]
r.push('<div class="modal-body"><div class="modal-body-content"><div class="text-center"><h4 data-i18n="signup.select_your_starting_hero"></h4><div data-i18n="signup.you_can_always_change_your_hero_later" class="small"></div></div><div id="hero-select-view"></div></div><!-- In reverse order for tabbing purposes--><div class="history-nav-buttons"><button type="button" class="next-button btn btn-lg btn-navy"><span data-i18n="common.next"></span></button></div></div>')
return r.join("")}
if(typeof define==="function"&&define.amd){define([],function(){return r})}else if(typeof t==="object"&&t&&t.exports){t.exports=r}else{r}})
require.register("templates/core/create-account-modal/nces-search-input",function(e,require,t){var r=function e(t){var r=[]
r.push('<div v-bind:class="{ \'has-error\': showRequired &amp;&amp; !value }" class="form-group"><span class="control-label">{{ label }}'+jade.escape(null==(jade.interp=" ")?"":jade.interp)+'<strong v-if="showRequired &amp;&amp; !value">{{ $t("common.required_field") }}</strong></span><input v-bind:name="name" v-model="value" v-on:keyup.up="navSearchUp" v-on:keyup.down="navSearchDown" v-on:keyup.enter="navSearchChoose" v-on:keyup.esc.stop="navSearchClear" v-on:blur="onBlur" v-on:input="onInput" ref="focus" autocomplete="off" class="form-control"/><div class="suggestion-wrapper"><div class="list-group"><div v-for="(suggestion, index) in suggestions" v-bind:class="{ active: index === suggestionIndex }" v-on:mouseover="suggestionHover(index)" v-on:click="navSearchChoose" v-on:mousedown.prevent="" class="list-group-item"><div v-if="displayKey === \'name\'" v-html="suggestion._highlightResult.name.value" class="school"></div><div class="district"><span v-html="suggestion._highlightResult.district.value">,</span>'+jade.escape(null==(jade.interp=" ")?"":jade.interp)+'<span v-if="suggestion._highlightResult.city" v-html="suggestion._highlightResult.city.value"></span>'+jade.escape(null==(jade.interp=" ")?"":jade.interp)+'<span v-html="suggestion._highlightResult.state.value"></span></div></div></div></div></div>')
return r.join("")}
if(typeof define==="function"&&define.amd){define([],function(){return r})}else if(typeof t==="object"&&t&&t.exports){t.exports=r}else{r}})
require.register("templates/core/create-account-modal/school-info-panel",function(e,require,t){var r=function e(t){var r=[]
r.push('<div class="school-info-panel"><div class="container-fluid text-left"><div class="row m-y-2"><div class="col-xs-offset-2 col-xs-8"><nces-search-input v-bind:label="$t(&quot;teachers_quote.school_name&quot;)" v-on:navSearchChoose="applySuggestion" name="organization" displayKey="name" v-bind:initialValue="organization" v-on:updateValue="updateValue"></nces-search-input></div></div><div class="row m-y-2"><div class="col-xs-offset-2 col-xs-4"><nces-search-input v-bind:label="$t(&quot;teachers_quote.district_name&quot;)" v-on:navSearchChoose="applySuggestion" name="district" displayKey="district" v-bind:initialValue="district" v-bind:showRequired="showRequired" v-on:updateValue="updateValue"></nces-search-input></div><div class="col-xs-4"><div v-bind:class="{ \'has-error\': showRequired &amp;&amp; !city }" class="form-group"><span class="control-label">{{ $t("teachers_quote.city") }}'+jade.escape(null==(jade.interp=" ")?"":jade.interp)+'<strong v-if="showRequired &amp;&amp; !city">{{ $t("common.required_field") }}</strong></span><input name="city" v-model="city" class="form-control"/></div></div></div><div class="row m-y-2"><div class="col-xs-offset-2 col-xs-4"><div v-bind:class="{ \'has-error\': showRequired &amp;&amp; !state }" class="form-group"><span class="control-label">{{ $t("teachers_quote.state") }}'+jade.escape(null==(jade.interp=" ")?"":jade.interp)+'<strong v-if="showRequired &amp;&amp; !state">{{ $t("common.required_field") }}</strong></span><input name="state" v-model="state" class="form-control"/></div></div><div class="col-xs-4"><div v-bind:class="{ \'has-error\': showRequired &amp;&amp; !country }" class="form-group"><span class="control-label">{{ $t("teachers_quote.country") }}'+jade.escape(null==(jade.interp=" ")?"":jade.interp)+'<strong v-if="showRequired &amp;&amp; !country">{{ $t("common.required_field") }}</strong></span><input name="country" v-model="country" class="form-control"/></div></div></div></div><!-- In reverse order for tabbing purposes--><div class="history-nav-buttons"><button id="create-account-btn" v-on:click="clickContinue" class="next-button btn btn-lg btn-navy">{{ $t("common.next") }}</button><button type="button" v-on:click="clickBack" class="back-button btn btn-lg btn-navy-alt">{{ $t("common.back") }}</button></div></div>')
return r.join("")}
if(typeof define==="function"&&define.amd){define([],function(){return r})}else if(typeof t==="object"&&t&&t.exports){t.exports=r}else{r}})
require.register("templates/core/create-account-modal/segment-check-view",function(e,require,t){var r=function e(t){var r=[]
var i=t||{},n=i.view,o=i._,s=i.state
r.push('<form class="modal-body segment-check"><div class="modal-body-content">')
switch(n.signupState.get("path")){case"student":r.push('<span data-i18n="signup.enter_class_code"></span><div class="class-code-input-group form-group"><input'+jade.attrs({name:"classCode",value:n.signupState.get("classCode"),class:["class-code-input"]},{name:true,value:true})+'/><div class="render">')
if(!o.isEmpty(n.signupState.get("classCode"))){if(s.get("classCodeValid")){r.push('<span class="glyphicon glyphicon-ok-circle class-code-valid-icon"></span>')}else{r.push('<span class="glyphicon glyphicon-remove-circle class-code-valid-icon"></span>')}}r.push('</div></div><p class="render">')
if(o.isEmpty(n.signupState.get("classCode"))){r.push('<span data-i18n="signup.ask_teacher_1"></span>')}else if(s.get("classCodeValid")){r.push('<span data-i18n="signup.about_to_join" class="small"></span><br/><span class="classroom-name">'+jade.escape(null==(jade.interp=n.classroom.get("name"))?"":jade.interp)+'</span><br/><span class="teacher-name">'+jade.escape(null==(jade.interp=n.classroom.owner.get("name"))?"":jade.interp)+"</span>")}else{r.push('<span data-i18n="signup.classroom_not_found"></span>')}if(o.isEmpty(n.signupState.get("classCode"))||!s.get("classCodeValid")){r.push('<br/><span data-i18n="signup.ask_teacher_2" class="spr"></span><a class="individual-path-button"><span data-i18n="signup.ask_teacher_3"></span></a><span data-i18n="signup.ask_teacher_4" class="spl"></span>')}r.push("</p>")
break
case"teacher":r.push("<!-- TODO-->")
break
case"individual":r.push('<div class="birthday-form-group form-group"><span data-i18n="signup.enter_birthdate"></span><div class="input-border"><select id="birthday-month-input" name="birthdayMonth" style="width: 106px; float: left" class="input-large form-control"><option value="" data-i18n="calendar.month"></option>');(function(){var e=["january","february","march","april","may","june","july","august","september","october","november","december"]
if("number"==typeof e.length){for(var t=0,i=e.length;t<i;t++){var o=e[t]
var s=t+1
r.push("<option"+jade.attrs({"data-i18n":"calendar."+o+"",value:s,selected:s==n.signupState.get("birthdayMonth")},{"data-i18n":true,value:true,selected:true})+"></option>")}}else{var i=0
for(var t in e){i++
var o=e[t]
var s=t+1
r.push("<option"+jade.attrs({"data-i18n":"calendar."+o+"",value:s,selected:s==n.signupState.get("birthdayMonth")},{"data-i18n":true,value:true,selected:true})+"></option>")}}}).call(this)
r.push('</select><select id="birthday-day-input" name="birthdayDay" style="width: 75px; float: left" class="input-large form-control"><option value="" data-i18n="calendar.day"></option>');(function(){var e=o.range(1,32)
if("number"==typeof e.length){for(var t=0,i=e.length;t<i;t++){var s=e[t]
r.push("<option"+jade.attrs({selected:s==n.signupState.get("birthdayDay")},{selected:true})+">"+jade.escape((jade.interp=s)==null?"":jade.interp)+"</option>")}}else{var i=0
for(var t in e){i++
var s=e[t]
r.push("<option"+jade.attrs({selected:s==n.signupState.get("birthdayDay")},{selected:true})+">"+jade.escape((jade.interp=s)==null?"":jade.interp)+"</option>")}}}).call(this)
r.push('</select><select id="birthday-year-input" name="birthdayYear" style="width: 90px; float: left" class="input-large form-control"><option value="" data-i18n="calendar.year"></option>')
var a=(new Date).getFullYear();(function(){var e=o.range(a,a-100,-1)
if("number"==typeof e.length){for(var t=0,i=e.length;t<i;t++){var s=e[t]
r.push("<option"+jade.attrs({selected:s==n.signupState.get("birthdayYear")},{selected:true})+">"+jade.escape((jade.interp=s)==null?"":jade.interp)+"</option>")}}else{var i=0
for(var t in e){i++
var s=e[t]
r.push("<option"+jade.attrs({selected:s==n.signupState.get("birthdayYear")},{selected:true})+">"+jade.escape((jade.interp=s)==null?"":jade.interp)+"</option>")}}}).call(this)
r.push('</select></div></div><div data-i18n="signup.parent_use_birthdate" class="parent_birthdate"></div>')
break
default:r.push("<p><span>Sign-up error, please contact </span>"+jade.escape(null==(jade.interp=" ")?"":jade.interp)+'<a href="mailto:support@codecombat.com">support@codecombat.com</a>.</p>')
break}r.push('</div><!-- In reverse order for tabbing purposes--><div class="history-nav-buttons"><button type="submit" class="next-button btn btn-lg btn-navy"><span data-i18n="common.next"></span></button><button type="button" class="back-to-account-type btn btn-lg btn-navy-alt"><span data-i18n="common.back"></span></button></div></form>')
return r.join("")}
if(typeof define==="function"&&define.amd){define([],function(){return r})}else if(typeof t==="object"&&t&&t.exports){t.exports=r}else{r}})
require.register("templates/core/create-account-modal/setup-account-panel",function(e,require,t){var r=function e(t){var r=[]
r.push('<div class="setup-account-panel text-left"><div class="p-a-3"><div v-if="saving" class="text-center">{{ $t("common.saving") }}</div><div v-else-if="error" class="text-center">{{ $t("loading_error.error") }}'+jade.escape(null==(jade.interp=": ")?"":jade.interp)+'{{ error }}</div><div v-else="v-else"><h3 class="text-center">{{ $t("signup.teacher_ready_to_create_class") }}</h3><p class="m-t-3">{{ $t("signup.teacher_students_can_start_now") }}</p><ol><li>{{ $t("signup.teacher_list_create_class") }}</li><li>{{ $t("signup.teacher_list_add_students") }}</li><li><span>{{ $t("signup.teacher_list_resource_hub_1") }}</span>'+jade.escape(null==(jade.interp=" ")?"":jade.interp)+'<a href="/teachers/courses">{{ $t("signup.teacher_list_resource_hub_2") }}</a>'+jade.escape(null==(jade.interp=" ")?"":jade.interp)+'<span>{{ $t("signup.teacher_list_resource_hub_3") }}</span>'+jade.escape(null==(jade.interp=" ")?"":jade.interp)+'<a href="/teachers/resources">{{ $t("signup.teacher_list_resource_hub_4") }}</a>'+jade.escape(null==(jade.interp=" ")?"":jade.interp)+'<span>{{ $t("signup.teacher_list_resource_hub_5") }}</span></li></ol><span v-html="$t(\'signup.teacher_additional_questions\', {supportEmail})"></span></div></div><div class="history-nav-buttons"><button type="button" v-on:click="clickBack" v-if="error" class="back-button btn btn-lg btn-navy-alt">{{ $t("common.back") }}</button><button v-on:click="clickFinish" v-else-if="!saving" class="next-button btn btn-lg btn-navy">{{ $t("signup.finish") }}</button></div></div>')
return r.join("")}
if(typeof define==="function"&&define.amd){define([],function(){return r})}else if(typeof t==="object"&&t&&t.exports){t.exports=r}else{r}})
require.register("templates/core/create-account-modal/single-sign-on-already-exists-view",function(e,require,t){var r=function e(t){var r=[]
var i=t||{},n=i.view
r.push('<div class="modal-body"><div class="modal-body-content">')
if(n.signupState.get("ssoUsed")){r.push('<h4><span data-i18n="signup.account_exists"></span></h4><div class="small"><b><span>'+jade.escape(null==(jade.interp=n.signupState.get("email"))?"":jade.interp)+'</span></b></div><div class="hr-text"><hr/><span data-i18n="common.next"></span></div><button class="login-link btn btn-lg btn-navy"><span data-i18n="login.log_in"></span></button>')}r.push('</div><div class="history-nav-buttons"><button type="button" class="back-button btn btn-lg btn-navy-alt"><span data-i18n="common.back"></span></button></div></div>')
return r.join("")}
if(typeof define==="function"&&define.amd){define([],function(){return r})}else if(typeof t==="object"&&t&&t.exports){t.exports=r}else{r}})
require.register("templates/core/create-account-modal/single-sign-on-confirm-view",function(e,require,t){var r=function e(t){var r=[]
var i=t||{},n=i.view
r.push('<form id="basic-info-form" class="modal-body"><div class="modal-body-content"><h4><span data-i18n="signup.sso_connected"></span></h4><div class="small m-y-1">')
var o=n.signupState.get("ssoUsed")
if(o==="facebook"){r.push('<img src="/images/pages/modal/auth/facebook_small.png"/>')}if(o==="gplus"){r.push('<img src="/images/pages/modal/auth/gplus_small.png"/>')}r.push('<b class="m-x-1"><span>'+jade.escape(null==(jade.interp=n.signupState.get("email"))?"":jade.interp)+'</span></b><span class="glyphicon glyphicon-ok-circle class-code-valid-icon"></span></div><div class="hr-text m-y-3"><hr/><span data-i18n="common.next"></span></div><div class="form-container"><input'+jade.attrs({name:"email",value:n.signupState.get("email"),class:["hidden"]},{name:true,value:true})+'/><div class="form-group"><div class="row"><div class="col-xs-7 col-xs-offset-3"><label for="username-input" class="control-label"><span data-i18n="general.username"></span></label></div><div class="col-xs-5 col-xs-offset-3"><input'+jade.attrs({id:"username-input",name:"name",value:n.signupState.get("signupForm").name,class:["form-control","input-lg"]},{name:true,value:true})+'/></div><div class="col-xs-4 name-check">')
var s=n.state.get("checkNameState")
if(s==="checking"){r.push('<span data-i18n="signup.checking" class="small"></span>')}if(s==="exists"){r.push('<span class="small"><span class="text-burgundy glyphicon glyphicon-remove-circle"></span>'+jade.escape(null==(jade.interp=" ")?"":jade.interp)+"<span>"+jade.escape(null==(jade.interp=n.state.get("suggestedNameText"))?"":jade.interp)+"</span></span>")}if(s==="available"){r.push('<span class="small"><span class="text-forest glyphicon glyphicon-ok-circle"></span>'+jade.escape(null==(jade.interp=" ")?"":jade.interp)+'<span data-i18n="signup.name_available"></span></span>')}r.push('</div></div></div><div class="form-group subscribe"><div class="row"><div class="col-xs-7 col-xs-offset-3"><div class="checkbox"><label><input'+jade.attrs({id:"subscribe-input",type:"checkbox",checked:n.signupState.get("signupForm").subscribe[0]==="on",name:"subscribe"},{type:true,checked:true,name:true})+'/><span data-i18n="signup.email_announcements"></span></label></div></div></div></div></div></div><!-- In reverse order for tabbing purposes--><div class="history-nav-buttons">')
if(n.signupState.get("path")==="teacher"){r.push('<button type="submit" class="next-button btn btn-lg btn-navy"><span data-i18n="common.next"></span></button>')}else{r.push('<button id="create-account-btn" type="submit" class="next-button btn btn-lg btn-navy"><span data-i18n="login.sign_up"></span></button>')}r.push('<button type="button" class="back-button btn btn-lg btn-navy-alt"><span data-i18n="common.back"></span></button></div></form>')
return r.join("")}
if(typeof define==="function"&&define.amd){define([],function(){return r})}else if(typeof t==="object"&&t&&t.exports){t.exports=r}else{r}})
require.register("templates/core/create-account-modal/teacher-role-panel",function(e,require,t){var r=function e(t){var r=[]
r.push('<div class="school-info-panel text-left"><div class="row"><div class="col-xs-offset-3 col-xs-6"><div v-bind:class="{ \'has-error\': showRequired &amp;&amp; (!phoneNumber || !validPhoneNumber) }" class="form-group"><span class="control-label"> \n{{ $t("teachers_quote.phone_number") }}'+jade.escape(null==(jade.interp=" ")?"":jade.interp)+'<strong v-if="showRequired &amp;&amp; !phoneNumber">{{ $t("common.required_field") }}</strong><strong v-if="showRequired &amp;&amp; phoneNumber &amp;&amp; !validPhoneNumber">{{ $t("valid_phone") }}</strong></span><input v-bind:placeholder="$t(\'teachers_quote.phone_number_help\')" v-model="phoneNumber" ref="focus" name="phoneNumber" class="form-control"/></div></div></div><div class="row"><div class="col-xs-offset-3 col-xs-6"><div v-bind:class="{ \'has-error\': showRequired &amp;&amp; !role }" class="form-group"><span class="control-label"> \n{{ $t("teachers_quote.primary_role_label") }}'+jade.escape(null==(jade.interp=" ")?"":jade.interp)+'<strong v-if="showRequired &amp;&amp; !role">{{ $t("common.required_field") }}</strong></span><select v-model="role" name="role" class="form-control"><option value="">{{ $t("teachers_quote.primary_role_default") }}</option><option value="Teacher">{{ $t("courses.teacher") }}</option><option value="Technology coordinator">{{ $t("teachers_quote.tech_coordinator") }}</option><option value="Advisor">{{ $t("teachers_quote.advisor") }}</option><option value="Principal">{{ $t("teachers_quote.principal") }}</option><option value="Superintendent">{{ $t("teachers_quote.superintendent") }}</option><option value="Parent">{{ $t("teachers_quote.parent") }}</option></select></div></div></div><div class="row"><div class="col-xs-offset-3 col-xs-6"><div v-bind:class="{ \'has-error\': showRequired &amp;&amp; !purchaserRole }" class="form-group"><span class="control-label"> \n{{ $t("teachers_quote.purchaser_role_label") }}'+jade.escape(null==(jade.interp=" ")?"":jade.interp)+'<strong v-if="showRequired &amp;&amp; !purchaserRole">{{ $t("common.required_field") }}</strong></span><select v-model="purchaserRole" name="purchaserRole" class="form-control"><option value="">{{ $t("teachers_quote.purchaser_role_default") }}</option><option value="Influence/Advocate">{{ $t("teachers_quote.influence_advocate") }}</option><option value="Evaluate/Recommend">{{ $t("teachers_quote.evaluate_recommend") }}</option><option value="Approve Funds">{{ $t("teachers_quote.approve_funds") }}</option><option value="No role in purchase decisions">{{ $t("teachers_quote.no_purchaser_role") }}</option></select></div></div></div><!-- In reverse order for tabbing purposes--><div class="history-nav-buttons"><button id="create-account-btn" v-on:click="clickContinue" class="next-button btn btn-lg btn-navy">{{ $t("common.next") }}</button><button type="button" v-on:click="clickBack" class="back-button btn btn-lg btn-navy-alt">{{ $t("common.back") }}</button></div></div>')
return r.join("")}
if(typeof define==="function"&&define.amd){define([],function(){return r})}else if(typeof t==="object"&&t&&t.exports){t.exports=r}else{r}})
require.register("templates/core/create-account-modal/teacher-signup-component",function(e,require,t){var r=function e(t){var r=[]
r.push('<component :is="panel" v-on:continue="onContinue" v-on:back="onBack" trial-request-attributes="trialRequestAttributes" class="modal-body teacher-panel"></component>')
return r.join("")}
if(typeof define==="function"&&define.amd){define([],function(){return r})}else if(typeof t==="object"&&t&&t.exports){t.exports=r}else{r}})
require.register("templates/core/diplomat-suggestion",function(e,require,t){var r=function e(t){var r=[]
var i=t||{},n=i.view
r.push('<div class="modal-dialog game"><div class="background-wrapper"><div class="modal-content"><div class="modal-header">')
if(n.closeButton){r.push('<div type="button" data-dismiss="modal" aria-hidden="true" class="button close">&times;</div>')}r.push('<h3 data-i18n="diplomat_suggestion.title">Help translate CodeCombat!</h3></div><div class="modal-body"><h4 data-i18n="diplomat_suggestion.sub_heading">We need your language skills.</h4><p data-i18n="diplomat_suggestion.pitch_body">We develop CodeCombat in English, but we already have players all over the world. Many of them want to play in {English} but don\'t speak English, so if you can speak both, please consider signing up to be a Diplomat and help translate both the CodeCombat website and all the levels into {English}.</p><p data-i18n="diplomat_suggestion.missing_translations">Until we can translate everything into {English}, you\'ll see English when {English} isn\'t available.</p><p><a href="/contribute/diplomat" data-i18n="diplomat_suggestion.learn_more">Learn more about being a Diplomat</a></p></div><div class="modal-body wait secret"><h3>Reticulating Splines...</h3><div class="progress progress-striped active"><div class="progress-bar"></div></div></div><div class="modal-footer"><button id="subscribe-button" data-i18n="diplomat_suggestion.subscribe_as_diplomat" class="btn btn-primary btn-large">Subscribe as a Diplomat</button></div></div></div></div>')
return r.join("")}
if(typeof define==="function"&&define.amd){define([],function(){return r})}else if(typeof t==="object"&&t&&t.exports){t.exports=r}else{r}})
require.register("templates/core/error",function(e,require,t){var r=function e(t){var r=[]
var i=t||{},n=i.status,o=i.statusText,s=i.message
r.push('<div id="modal-error" class="modal fade"><div class="modal-dialog"><div class="modal-header"><div type="button" data-dismiss="modal" aria-hidden="true" class="button close">&times;</div><h3>Error '+jade.escape((jade.interp=n)==null?"":jade.interp)+": "+jade.escape((jade.interp=o)==null?"":jade.interp)+'</h3></div><div class="modal-body"><p>'+jade.escape((jade.interp=s)==null?"":jade.interp)+"</p></div></div></div>")
return r.join("")}
if(typeof define==="function"&&define.amd){define([],function(){return r})}else if(typeof t==="object"&&t&&t.exports){t.exports=r}else{r}})
require.register("templates/core/hero-select-view",function(e,require,t){var r=function e(t){var r=[]
var i=t||{},n=i.state,o=i.view
var s=function(e){var t=this.block,i=this.attributes||{},s=this.escaped||{}
var a=e.get("original")
var l
if(n.get("selectedHeroOriginal")===a){l="selected"}else if(o.options.showCurrentHero&&n.get("currentHeroOriginal")===a){l="current"}else{l=""}r.push("<div"+jade.attrs({"data-hero-original":a,class:["hero-option",l]},{class:true,"data-hero-original":true})+'><div class="hero-avatar"><img'+jade.attrs({src:e.getPortraitURL()},{src:true})+'/></div><div class="text-h5 hero-name"><span>'+jade.escape(null==(jade.interp=e.getHeroShortName())?"":jade.interp)+"</span></div></div>")}
r.push('<div class="hero-list">')
if(o.heroes.loaded){(function(){var e=o.heroes.models
if("number"==typeof e.length){for(var t=0,r=e.length;t<r;t++){var i=e[t]
if(i.get("heroClass")==="Warrior"){s(i)}}}else{var r=0
for(var t in e){r++
var i=e[t]
if(i.get("heroClass")==="Warrior"){s(i)}}}}).call(this)}r.push("</div>")
return r.join("")}
if(typeof define==="function"&&define.amd){define([],function(){return r})}else if(typeof t==="object"&&t&&t.exports){t.exports=r}else{r}})
require.register("templates/core/loading-error",function(e,require,t){var r=function e(t){var r=[]
var i=t||{},n=i.jqxhr,o=i.me,s=i.view
r.push('<div id="loading-error" class="text-center">')
if(!n){r.push('<h1 data-i18n="loading_error.unknown"></h1>')}else if(n.status===401){r.push('<h1><span class="spr">401:</span><span data-i18n="loading_error.login_required"></span></h1><p data-i18n="loading_error.login_required_desc"></p><button data-i18n="login.log_in" class="login-btn btn btn-primary"></button><button id="create-account-btn" data-i18n="login.sign_up" class="btn btn-primary"></button><!-- 402 currently not in use. TODO: Set it up-->')}else if(n.status===402){r.push("<h2>402: Payment Required</h2>")}else if(n.status===403){r.push('<h1><span class="spr">403:</span><span data-i18n="loading_error.forbidden">Forbidden</span></h1><p data-i18n="loading_error.forbidden_desc"></p><!-- this should make no diff... but sometimes the server returns 403 when it should return 401-->')
if(!o.isAnonymous()){r.push('<button id="logout-btn" data-i18n="login.log_out" class="btn btn-primary"></button>')}}else if(n.status===404){r.push('<h1><span class="spr">404:</span><span data-i18n="loading_error.not_found"></span></h1>')
var a=Math.floor(Math.random()*3)+1
r.push("<img"+jade.attrs({id:"not-found-img",src:"/images/pages/not_found/404_"+a+".png"},{src:true})+'/><p data-i18n="loading_error.not_found_desc"></p>')}else if(!n.status){r.push('<h1 data-i18n="loading_error.connection_failure"></h1><p data-i18n="loading_error.connection_failure_desc"></p>')}else{if(n.status===408){r.push('<h1><span class="spr">408:</span><span data-i18n="loading_error.timeout"></span></h1>')}else if(n.status>=500&&n.status<=599){r.push('<h1><span class="spr">'+jade.escape((jade.interp=n.status)==null?"":jade.interp)+':</span><span data-i18n="loading_error.server_error"></span></h1>')}else{r.push('<h1 data-i18n="loading_error.unknown"></h1>')}r.push('<p data-i18n="loading_error.general_desc"></p>')}r.push('<div id="links-row" class="row"><div class="col-sm-3"><ul class="list-unstyled"><li><strong data-i18n="common.help"></strong></li><li><a href="/" data-i18n="nav.home"></a></li><li><a'+jade.attrs({href:s.forumLink(),"data-i18n":"nav.forum"},{href:true,"data-i18n":true})+"></a></li>")
if(!o.isStudent()){r.push('<li><a tabindex="-1" data-i18n="nav.contact" class="contact-modal"></a></li>')}r.push('<li><a href="/community" data-i18n="nav.community"></a></li></ul></div><div class="col-sm-3"><ul class="list-unstyled"><li><strong data-i18n="courses.students"></strong></li><li><a href="/students" data-i18n="nav.learn_to_code"></a></li>')
if(o.isAnonymous()){r.push('<li><a data-i18n="login.log_in" class="login-btn"></a></li>')}r.push('<li><a href="/students" data-i18n="courses.join_class"></a></li></ul></div><div class="col-sm-3"><ul class="list-unstyled">')
if(o.isAnonymous()){r.push('<li><a data-i18n="login.log_in" class="login-btn"></a></li>')}r.push('<li><a href="/teachers/classes" data-i18n="nav.create_a_class"></a></li></ul></div><div class="col-sm-3"><ul class="list-unstyled"><li><strong data-i18n="nav.other"></strong></li><li><a href="http://blog.codecombat.com/" data-i18n="nav.blog"></a></li><li><a href="https://www.facebook.com/codecombat" data-i18n="nav.facebook"></a></li><li><a href="https://twitter.com/codecombat" data-i18n="nav.twitter"></a></li></ul></div></div></div>')
return r.join("")}
if(typeof define==="function"&&define.amd){define([],function(){return r})}else if(typeof t==="object"&&t&&t.exports){t.exports=r}else{r}})
require.register("templates/core/loading",function(e,require,t){var r=function e(t){var r=[]
r.push('<div class="loading-screen loading-container"><h1 data-i18n="common.loading">Loading...</h1><div class="progress"><div class="progress-bar"></div></div><div class="errors"></div></div>')
return r.join("")}
if(typeof define==="function"&&define.amd){define([],function(){return r})}else if(typeof t==="object"&&t&&t.exports){t.exports=r}else{r}})
require.register("templates/core/mine-modal",function(e,require,t){var r=function e(t){var r=[]
var i=t||{},n=i.view
r.push('<!-- DNT--><div class="modal-dialog"><div class="modal-content"><img id="modal-background" src="/images/pages/play/modal/announcement_modal_bg.png"/><h1>Do you like Minecraft?</h1><div id="close-modal"><span class="glyphicon glyphicon-remove"></span></div><div id="mine-content"><div id="image-content"><img id="pickaxe" src="/images/minecraft/icon_stone_pick.png"/><img id="hands" src="/images/minecraft/hans4.png"/></div><div id="text-content"><div id="details-header">Play CodeCombat in Minecraft!</div><br/><div id="info-text"><ul><li>Access a private Minecraft server where you can script the world</li><li>Write code to change the world around you</li><li>Control units to mine, build, and fight for your avatar</li></ul></div><div id="capacity-text"><div>We are not currently accepting additional beta users for CodeCombat Minecraft, but hope to make more available in the future.</div><form id="notify-me-form"><div class="checkbox"><label><!-- NOTE: This needs to be written as HTML or it won\'t pick up contained text--><input id="notify-me-check" type="checkbox"> Yes, please notify me about the CodeCombat Minecraft beta</label></div></form></div><div id="button-container"><button id="buy-now-button" class="btn btn-lg btn-illustrated purchase-button"><span>'+jade.escape(null==(jade.interp="Buy Now $"+(n.price?n.price:"...")+"/")?"":jade.interp)+'</span><span class="no-text-transform">mo</span></button><button id="submit-button" class="btn btn-lg btn-illustrated sale-button">Submit</button></div></div></div></div></div>')
return r.join("")}
if(typeof define==="function"&&define.amd){define([],function(){return r})}else if(typeof t==="object"&&t&&t.exports){t.exports=r}else{r}})
require.register("templates/core/modal-base-flat",function(e,require,t){var r=function e(t){var r=[]
var i=t||{},n=i.view
r.push('<div class="modal-dialog"><div class="modal-content style-flat"><div class="modal-header">')
if(n.closeButton){r.push('<div type="button" data-dismiss="modal" aria-hidden="true" class="button close">&times;</div>')}if(n.options.headerContent){r.push("<h3>"+(null==(jade.interp=n.options.headerContent)?"":jade.interp)+"</h3>")}else{r.push("<h3>man bites God</h3>")}r.push('</div><div class="modal-body">')
if(n.options.bodyContent){r.push("<div>"+(null==(jade.interp=n.options.bodyContent)?"":jade.interp)+"</div>")}else{r.push('<p>Man Bites God are the bad boys of the Melbourne live music and comedy scene. It is like being drowned in a bathtub of harmony.</p><img src="http://www.manbitesgod.com/images/picturecoupleb.jpg"/><img src="http://www.manbitesgod.com/images/manrantb.jpg"/>')}r.push('</div><div class="modal-body wait secret"><h3>Reticulating Splines...</h3><div class="progress progress-striped active"><div class="progress-bar"></div></div></div><div class="modal-footer"><button type="button" data-dismiss="modal" aria-hidden="true" data-i18n="modal.okay" class="btn btn-primary">Okay</button></div></div></div>')
return r.join("")}
if(typeof define==="function"&&define.amd){define([],function(){return r})}else if(typeof t==="object"&&t&&t.exports){t.exports=r}else{r}})
require.register("templates/core/modal-base",function(e,require,t){var r=function e(t){var r=[]
var i=t||{},n=i.view
r.push('<div class="modal-dialog game"><div class="background-wrapper"><div class="modal-content"><div class="modal-header">')
if(n.closeButton){r.push('<div type="button" data-dismiss="modal" aria-hidden="true" class="button close">&times;</div>')}if(n.options.headerContent){r.push("<h3>"+(null==(jade.interp=n.options.headerContent)?"":jade.interp)+"</h3>")}else{r.push("<h3>man bites God</h3>")}r.push('</div><div class="modal-body">')
if(n.options.bodyContent){r.push("<div>"+(null==(jade.interp=n.options.bodyContent)?"":jade.interp)+"</div>")}else{r.push('<p>Man Bites God are the bad boys of the Melbourne live music and comedy scene. It is like being drowned in a bathtub of harmony.</p><img src="http://www.manbitesgod.com/images/picturecoupleb.jpg"/><img src="http://www.manbitesgod.com/images/manrantb.jpg"/>')}r.push('</div><div class="modal-body wait secret"><h3>Reticulating Splines...</h3><div class="progress progress-striped active"><div class="progress-bar"></div></div></div><div class="modal-footer"><button type="button" data-dismiss="modal" aria-hidden="true" data-i18n="modal.okay" class="btn btn-primary">Okay</button></div></div></div></div>')
return r.join("")}
if(typeof define==="function"&&define.amd){define([],function(){return r})}else if(typeof t==="object"&&t&&t.exports){t.exports=r}else{r}})
require.register("templates/core/not-found",function(e,require,t){var r=function e(t){var r=[]
var i=t||{},n=i.features,o=i.me,s=i.view,a=i.serverSession,l=i.usesSocialMedia,c=i.isIE,u=i.fbRef
r.push('<div id="site-nav"><a href="/"><img id="nav-logo" src="/images/pages/base/logo.png" title="CodeCombat - Learn how to code by playing a game" alt="CodeCombat"/></a><div id="site-nav-links"><a href="/"><img id="small-nav-logo" src="/images/pages/base/logo.png" title="CodeCombat - Learn how to code by playing a game" alt="CodeCombat"/></a><a href="/"><span class="glyphicon glyphicon-home"></span></a>')
if(!n.playViewsOnly){r.push('<a href="/about" data-i18n="nav.about"></a>')
if(o.isStudent()){r.push('<a href="/students" data-i18n="nav.my_courses"></a>')}if(o.isTeacher()){r.push('<a href="/teachers/classes" data-i18n="nav.my_classrooms"></a>')}if(!o.isAnonymous()&&!o.isStudent()&&!o.isTeacher()){r.push('<a href="/play" data-i18n="common.play"></a><a'+jade.attrs({href:s.forumLink(),"data-i18n":"nav.forum"},{href:true,"data-i18n":true})+"></a>")}r.push('<a href="/community" data-i18n="nav.community"></a>')
if(o.get("anonymous")===false){r.push('<span class="dropdown"><button href="#" data-toggle="dropdown" class="btn btn-sm header-font dropdown-toggle">')
if(o.get("photoURL")){r.push("<img"+jade.attrs({src:o.getPhotoURL(18),alt:"",class:["account-settings-image"]},{src:true,alt:true})+"/>")}else{r.push('<i class="glyphicon glyphicon-user"></i>')}r.push('<span data-i18n="nav.account" href="/account" class="spl spr"></span><span class="caret"></span></button><ul role="menu" class="dropdown-menu"><li class="user-dropdown-header"><span class="user-level">'+jade.escape(null==(jade.interp=o.level())?"":jade.interp)+"</span><a"+jade.attrs({href:"/user/"+o.getSlugOrID()+""},{href:true})+"><div"+jade.attrs({style:"background-image: url("+o.getPhotoURL()+")",class:["img-circle"]},{style:true})+"></div></a><h3>"+jade.escape(null==(jade.interp=o.broadName())?"":jade.interp)+"</h3></li><li><a"+jade.attrs({href:"/user/"+o.getSlugOrID()+"","data-i18n":"nav.profile"},{href:true,"data-i18n":true})+'></a></li><li><a href="/account/settings" data-i18n="play.settings"></a></li>')
if(o.isAdmin()||!(o.isTeacher()||o.isStudent()||o.freeOnly())){r.push('<li><a href="/account/payments" data-i18n="account.payments"></a></li>')}if(o.isAdmin()||!(o.isTeacher()||o.isStudent()||o.freeOnly())||o.hasSubscription()){r.push('<li><a href="/account/subscription" data-i18n="account.subscription"></a></li>')}if(o.isAdmin()||!(o.isTeacher()||o.isStudent()||o.freeOnly())){r.push('<li><a href="/account/prepaid" data-i18n="account.prepaid_codes"></a></li>')}if(o.isAdmin()){r.push('<li><a href="/admin" data-i18n="account_settings.admin"></a></li>')}if(a&&a.amActually){r.push('<li><a id="nav-stop-spying-button">Stop Spying</a></li>')}if(!n.codePlay){r.push('<li><a id="logout-button" data-i18n="login.log_out"></a></li>')}r.push("</ul></span>")}else{r.push('<button data-i18n="login.sign_up" class="btn btn-sm btn-primary header-font signup-button"></button><button data-i18n="login.log_in" class="btn btn-sm btn-default header-font login-button"></button>')}}r.push('<select class="language-dropdown form-control"></select></div></div><div id="site-content-area"><h1 data-i18n="not_found.page_not_found" class="text-center">Page Not Found</h1>')
var p=Math.floor(Math.random()*3)+1
r.push("<img"+jade.attrs({src:"/images/pages/not_found/404_"+p+".png",class:["not-found-image"]},{src:true,class:true})+'/></div><div class="achievement-corner"></div><div id="site-footer"><img id="footer-background" src="/images/pages/base/nav_background.png"/><div'+jade.attrs({id:"footer-links",class:[n.playViewsOnly?"hide":""]},{class:true})+'><a href="/about" data-i18n="nav.about"></a>')
if(!o.isStudent()){r.push('<a tabindex="-1" data-i18n="nav.contact" class="contact-modal"></a>')}r.push('<a href="http://blog.codecombat.com/" data-i18n="nav.blog"></a><a href="https://jobs.lever.co/codecombat" tabindex="-1" data-i18n="nav.careers"></a><a href="/legal" tabindex="-1" data-i18n="nav.legal"></a><a href="/privacy" tabindex="-1" data-i18n="legal.privacy_title"></a><a href="/contribute" tabindex="-1" data-i18n="nav.contribute"></a>')
if(!o.isStudent()){r.push('<a href="/play/ladder" tabindex="-1" data-i18n="game_menu.multiplayer_tab"></a>')}if(o.isAdmin()){r.push('<a href="/admin">Admin</a>')}if(l){r.push('<div class="share-buttons">')
if(!c){r.push('<div data-href="http://codecombat.com" data-size="medium" class="g-plusone"></div>')}r.push("<div"+jade.attrs({"data-href":"https://www.facebook.com/codecombat","data-send":"false","data-layout":"button_count","data-width":"350","data-show-faces":"true","data-ref":"coco_footer_"+u+"",class:["fb-like"]},{"data-href":true,"data-send":true,"data-layout":true,"data-width":true,"data-show-faces":true,"data-ref":true})+"></div>")
if(!c){r.push('<a href="https://twitter.com/CodeCombat" data-show-count="true" data-show-screen-name="false" data-dnt="true" data-align="right" data-i18n="nav.twitter_follow" class="twitter-follow-button"></a><iframe src="https://ghbtns.com/github-btn.html?user=codecombat&amp;repo=codecombat&amp;type=watch&amp;count=true" allowtransparency="true" frameborder="0" scrolling="0" width="110" height="20" class="github-star-button"></iframe>')}r.push("</div>")}r.push('</div><div id="footer-credits"><span><span>© All Rights Reserved</span><br/><span>CodeCombat 2017</span></span><img id="footer-logo" src="/images/pages/base/logo.png" alt="CodeCombat"/><span><span>Site Design by</span><br/><a href="http://www.fullyillustrated.com/">Fully Illustrated</a></span><!--a.firebase-bade(href="https://www.firebase.com/")  // Not using right now--><!--  img(src="/images/pages/base/firebase.png", alt="Powered by Firebase")--></div></div>')
return r.join("")}
if(typeof define==="function"&&define.amd){define([],function(){return r})}else if(typeof t==="object"&&t&&t.exports){t.exports=r}else{r}})
require.register("templates/core/recover-modal",function(e,require,t){var r=function e(t){var r=[]
var i=t||{},n=i.view
r.push('<div class="modal-dialog game"><div class="background-wrapper"><div class="modal-content"><div class="modal-header">')
if(n.closeButton){r.push('<div type="button" data-dismiss="modal" aria-hidden="true" class="button close">&times;</div>')}r.push('<h3 data-i18n="recover.recover_account_title">Recover Account</h3></div><div class="modal-body"><div class="form"><div class="form-group"><label for="recover-email" data-i18n="general.email" class="control-label">Email     </label><input id="recover-email" name="email" type="email" class="input-large form-control"/></div></div></div><div class="modal-body wait secret"><h3 data-i18n="common.sending">Sending...</h3><div class="progress progress-striped active"><div class="progress-bar"></div></div></div><div class="modal-footer"><button id="recover-button" data-i18n="recover.send_password" class="btn btn-primary btn-large">Send Recovery Password</button></div></div></div></div>')
return r.join("")}
if(typeof define==="function"&&define.amd){define([],function(){return r})}else if(typeof t==="object"&&t&&t.exports){t.exports=r}else{r}})
require.register("templates/core/subscribe-modal",function(e,require,t){var r=function e(t){var r=[]
var i=t||{},n=i.view
r.push('<div class="modal-dialog"><div class="modal-content">')
if(n.state==="purchasing"){r.push('<div data-i18n="buy_gems.purchasing" class="alert alert-info"></div>')}else if(n.state==="retrying"){r.push('<div id="retrying-alert" data-i18n="buy_gems.retrying" class="alert alert-danger"></div>')}else{r.push('<img id="subscribe-background" src="/images/pages/play/modal/subscribe-background-blank.png"/><h1 data-i18n="subscribe.subscribe_modal_title"></h1><div id="close-modal"><span class="glyphicon glyphicon-remove"></span></div><div class="paper-area"><div data-i18n="[html]subscribe.comparison_blurb" class="benefits-header text-center"></div><div class="container-fluid"><div class="row"><div class="col-xs-5 feature-col col-xs-offset-1"><ul><li'+jade.attrs({"data-i18n":"subscribe.feature_levels","data-i18n-options":{premiumLevelsCount:n.i18nData.premiumLevelsCount}},{"data-i18n":true,"data-i18n-options":true})+"></li>")
if(n.basicProduct){r.push("<li"+jade.attrs({"data-i18n":"subscribe.feature_gems","data-i18n-options":{gems:n.basicProduct.get("gems")}},{"data-i18n":true,"data-i18n-options":true})+"></li>")}r.push('<li data-i18n="subscribe.feature_heroes"></li></ul></div><div class="col-xs-5 feature-col"><ul><li data-i18n="subscribe.feature_games"></li><li data-i18n="subscribe.feature_websites"></li><li data-i18n="subscribe.feature_items"></li></ul></div></div><hr/>')
var o=function(e,t){var i=this.block,n=this.attributes||{},o=this.escaped||{}
var s=t.priceStringNoSymbol()
var a=t.adjustedPriceStringNoSymbol()
if(s==a){r.push("<div"+jade.attrs({"data-i18n":e,"data-i18n-options":{price:s},class:["price"]},{"data-i18n":true,"data-i18n-options":true})+"></div>")}else{r.push("<div><span"+jade.attrs({"data-i18n":e,"data-i18n-options":{price:s},class:["old-price"]},{"data-i18n":true,"data-i18n-options":true})+"></span><span"+jade.attrs({"data-i18n":e,"data-i18n-options":{price:a},class:["price"]},{"data-i18n":true,"data-i18n-options":true})+"></span></div>")}}
r.push('<div class="row">')
var s=".col-xs-5"
if(n.basicProduct){r.push('<div class="col-xs-5 option-col col-xs-offset-1"><div data-i18n="subscribe.stripe_description" class="option-header text-center"></div>')
o("subscribe.month_price",n.basicProduct)
r.push('<button data-i18n="premium_features.subscribe_now" class="btn btn-lg btn-illustrated purchase-button"></button></div>')}else{var s=".col-xs-12"}if(n.lifetimeProduct){r.push("<div"+jade.attrs({class:["option-col",s]},{class:true})+'><div data-i18n="subscribe.lifetime" class="option-header text-center"></div>')
o("subscribe.lifetime_price",n.lifetimeProduct)
r.push('<button data-i18n="subscribe.buy_now" class="btn btn-lg btn-illustrated lifetime-button"></button></div>')}if(n.yearProduct){r.push("<div"+jade.attrs({class:["option-col",s]},{class:true})+'><div data-i18n="subscribe.year_subscription" class="option-header text-center"></div>')
o("subscribe.year_price",n.yearProduct)
r.push('<button data-i18n="subscribe.buy_now" class="btn btn-lg btn-illustrated sale-button"></button></div>')}r.push('</div></div><p> <span data-i18n="subscribe.kids_message_1"></span>'+jade.escape(null==(jade.interp=" ")?"":jade.interp)+'<a data-i18n="subscribe.kids_message_2" class="parent-link"></a></p><p><span data-i18n="subscribe.support_part1"></span>'+jade.escape(null==(jade.interp=" ")?"":jade.interp)+'<a href="mailto:support@codecombat.com" data-i18n="subscribe.support_part2"></a>'+jade.escape(null==(jade.interp=" ")?"":jade.interp)+'<span data-i18n="subscribe.support_part3"></span></p></div>')
if(n.state==="declined"){r.push('<div id="declined-alert" class="alert alert-danger alert-dismissible"><span data-i18n="buy_gems.declined"></span><button type="button" data-dismiss="alert" class="close"><span aria-hidden="true">&times;</span></button></div>')}if(n.state==="unknown_error"){r.push('<div id="error-alert" class="alert alert-danger alert-dismissible"><button type="button" data-dismiss="alert" class="close"><span aria-hidden="true">&times;</span></button><p data-i18n="loading_error.unknown"></p><p>'+jade.escape(null==(jade.interp=n.stateMessage)?"":jade.interp)+"</p></div>")}}r.push('<div class="parent-link-popover-content hidden"><div class="email-parent-form"><p data-i18n="subscribe.parent_email_description"></p><form><div class="form-group"><label data-i18n="subscribe.parent_email_input_label"></label><input type="email" data-i18n="[placeholder]subscribe.parent_email_input_placeholder" class="parent-input form-control"/><div data-i18n="subscribe.parent_email_input_invalid" class="parent-email-validator email_invalid"></div></div><button type="submit" data-i18n="subscribe.parent_email_send" class="parent-send btn btn-default"></button></form></div><div class="email-parent-complete"><p data-i18n="subscribe.parent_email_sent"></p><button type="button" onclick="$(\'.parent-link\').popover(\'hide\');" data-i18n="modal.close" class="btn"></button></div></div></div></div>')
return r.join("")}
if(typeof define==="function"&&define.amd){define([],function(){return r})}else if(typeof t==="object"&&t&&t.exports){t.exports=r}else{r}})
require.register("templates/home-view",function(e,require,t){var r=function e(t){var r=[]
var i=t||{},n=i.me,o=i.view,s=i.serverSession,a=i.features,l=i.serverConfig,c=i.i18n
var u=function(){var e=this.block,t=this.attributes||{},i=this.escaped||{}
r.push('<div class="well text-center">')
if(n.isAnonymous()==true){r.push('<h6 id="classroom-edition-header" data-i18n="new_home.classroom_edition"></h6><div><button data-event-action="Homepage Click Teacher Button CTA" data-i18n="new_home.im_a_teacher" class="teacher-btn btn btn-primary btn-lg btn-block"></button></div><div><button data-event-action="Homepage Click Student Button CTA" data-i18n="new_home.im_a_student" class="student-btn btn btn-forest btn-lg btn-block"></button></div><h6 id="learn-to-code-header" data-i18n="new_home.learn_to_code"></h6><a'+jade.attrs({href:o.playURL,"data-event-action":"Homepage Play Now CTA","data-i18n":"new_home.play_now",class:["btn","btn-gold","btn-lg","btn-block","play-btn"]},{href:true,"data-event-action":true,"data-i18n":true})+"></a>")}else{r.push('<h6 id="classroom-edition-header" data-i18n="new_home.logged_in_as"></h6><p class="small userName">'+jade.escape(null==(jade.interp=n.broadName())?"":jade.interp)+"</p>")
if(n.isTeacher()){r.push('<div><a href="/teachers/classes" data-event-action="Homepage Click My Classes CTA" data-i18n="new_home.goto_classes" class="my-classes-btn btn btn-forest btn-lg btn-block"></a></div><div><a href="/teachers/resources" data-event-action="Homepage Click Resource Hub CTA" data-i18n="teacher.resource_hub" class="resource-btn btn btn-primary btn-lg btn-block"></a></div><div>')
if(!o.isTeacherWithDemo){r.push('<h6 data-i18n="new_home.want_coco"></h6><button data-event-action="Homepage Request Demo CTA" data-i18n="new_home.request_demo" class="btn btn-primary btn-lg request-demo"></button>')}r.push("</div>")}else if(n.isStudent()){r.push("<div><a"+jade.attrs({href:o.playURL,"data-event-action":"Homepage Classroom Continue Playing CTA","data-i18n":"courses.continue_playing",class:["btn","btn-forest","btn-lg","btn-block","play-btn"]},{href:true,"data-event-action":true,"data-i18n":true})+"></a></div><div><a"+jade.attrs({href:o.playURL,"data-event-action":"Homepage View Progress CTA","data-i18n":"new_home.go_to_courses",class:["btn","btn-primary","btn-lg","btn-block","play-btn"]},{href:true,"data-event-action":true,"data-i18n":true})+"></a></div>")}else{r.push("<div><a"+jade.attrs({href:o.playURL,"data-event-action":"Homepage Campaign Continue Playing CTA","data-i18n":"courses.continue_playing",class:["btn","btn-forest","btn-lg","btn-block","play-btn"]},{href:true,"data-event-action":true,"data-i18n":true})+"></a></div><div><a"+jade.attrs({href:"/user/"+n.getSlugOrID(),"data-event-action":"Homepage View Profile CTA","data-i18n":"new_home.view_profile",class:["btn","btn-primary","btn-lg","btn-block","profile-btn"]},{href:true,"data-event-action":true,"data-i18n":true})+"></a></div>")}r.push('<p class="small"><span data-i18n="courses.not_you"></span><span>&nbsp;</span><a data-i18n="login.log_out" href="#" class="logout-btn"></a></p>')}r.push("</div>")
if((n.get("preferredLanguage",true)||"en-US").split("-")[0]=="nl"){r.push('<div id="ideal-tickets-well" class="well text-center hidden-xs hidden-sm"><h6>Thuis versie:</h6><a href="http://codecombat.nl/kopen" class="btn btn-purple btn-lg btn-block">Prepaid codes (iDeal)</a></div>')}}
var p=function(){var e=this.block,t=this.attributes||{},i=this.escaped||{}
r.push("<li><a"+jade.attrs({href:"/user/"+n.getSlugOrID()+"","data-i18n":"nav.profile"},{href:true,"data-i18n":true})+'></a></li><li><a href="/account/settings" data-i18n="play.settings"></a></li>')
if(n.isAdmin()||!(n.isTeacher()||n.isStudent()||n.freeOnly())){r.push('<li><a href="/account/payments" data-i18n="account.payments"></a></li>')}if(n.isAdmin()||!(n.isTeacher()||n.isStudent()||n.freeOnly())||n.hasSubscription()){r.push('<li><a href="/account/subscription" data-i18n="account.subscription"></a></li>')}if(n.isAdmin()||!(n.isTeacher()||n.isStudent()||n.freeOnly())){r.push('<li><a href="/account/prepaid" data-i18n="account.prepaid_codes"></a></li>')}if(n.isAdmin()){r.push('<li><a href="/admin" data-i18n="account_settings.admin"></a></li>')}if(s&&s.amActually){r.push('<li><a id="nav-stop-spying-button">Stop Spying</a></li>')}if(!a.codePlay){r.push('<li><a id="logout-button" data-i18n="login.log_out"></a></li>')}}
r.push('<div class="style-flat"><nav id="main-nav" class="navbar navbar-default"><div class="container-fluid container"><div class="row"><div class="col-md-12"><div class="navbar-header"><button data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false" class="navbar-toggle collapsed"><span data-i18n="nav.toggle_nav" class="sr-only"></span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a href="/" class="navbar-brand">')
if(l.codeNinjas){r.push('<img id="logo-img" src="/images/pages/base/logo.png" class="code-ninjas-powered-by"/><img src="/images/pages/base/code-ninjas-logo-right.png" class="code-ninjas-logo"/>')}else{r.push('<img id="logo-img" src="/images/pages/base/logo.png"/>')}r.push('<span class="glyphicon glyphicon-home"></span></a></div>')
if(!l.static){r.push('<div id="navbar-collapse" class="collapse navbar-collapse"><ul class="nav navbar-nav"><li><a href="/about" data-i18n="nav.about"></a></li>')
if(n.isStudent()){r.push('<li><a href="/students" data-i18n="nav.my_courses"></a></li>')}if(!n.isAnonymous()&&n.isTeacher()){r.push('<li><a href="/teachers/classes" data-i18n="nav.my_classrooms"></a></li>')}if(!n.isAnonymous()&&!n.isStudent()&&!n.isTeacher()){r.push('<li><a href="/play" data-i18n="common.play"></a></li><li><a'+jade.attrs({href:o.forumLink(),"data-i18n":"nav.forum"},{href:true,"data-i18n":true})+"></a></li>")}r.push("</ul>")
if(n.isAnonymous()){r.push('<ul class="nav navbar-nav"><li><a id="create-account-link" data-i18n="login.sign_up" class="signup-button"></a></li><li><a id="login-link" data-i18n="login.log_in" class="login-button"></a></li></ul>')}else{r.push('<ul class="nav navbar-nav hidden-md hidden-lg"><li class="disabled"><a><img'+jade.attrs({src:n.getPhotoURL(),class:["img-circle","img-circle-small","m-r-1",n.isTeacher()?"border-navy":""]},{class:true,src:true})+"/><span>"+jade.escape(null==(jade.interp=n.displayName())?"":jade.interp)+"</span></a></li>")
p()
r.push('</ul><ul class="nav navbar-nav"><li class="dropdown hidden-xs hidden-sm"><a href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" class="dropdown-toggle"><img'+jade.attrs({src:n.getPhotoURL(),class:["img-circle","img-circle-small","m-r-1",n.isTeacher()?"border-navy":""]},{class:true,src:true})+'/><span data-i18n="nav.my_account"></span></a><ul class="dropdown-menu"><li class="user-dropdown-header text-center"><span class="user-level">'+jade.escape(null==(jade.interp=n.level())?"":jade.interp)+"</span><a"+jade.attrs({href:"/user/"+n.getSlugOrID()+""},{href:true})+"><img"+jade.attrs({src:n.getPhotoURL(),class:["img-circle",n.isTeacher()?"border-navy":""]},{class:true,src:true})+"/></a><h5>"+jade.escape(null==(jade.interp=n.broadName())?"":jade.interp)+"</h5></li>")
p()
r.push("</ul></li></ul>")}r.push('<ul class="nav navbar-nav"><li><div id="language-dropdown-wrapper"><select class="language-dropdown form-control"></select></div></li></ul></div>')}r.push('</div></div></div></nav><div id="site-content-area"><div id="jumbotron-container-fluid" class="container-fluid alt-image"><div class="container"><div style="height: 160px" class="row hidden-xs top-spacer"></div><div class="row hidden-sm hidden-xs"><div class="col-lg-7 col-md-8"><h1 data-i18n="new_home.slogan"></h1></div><div class="col-lg-3 col-lg-offset-2 col-md-4">')
u()
r.push('</div></div><div class="row hidden-lg hidden-md"><div class="col-lg-7 col-md-8"><h1 data-i18n="new_home.slogan"></h1></div><div class="col"><div style="margin: auto; max-width: 300px">')
u()
r.push('</div></div></div><div id="learn-more-row" class="row"><div class="col-xs-12 text-center"><a id="learn-more-link"><h6 data-i18n="new_home.learn_more"></h6><h2><span class="glyphicon glyphicon-chevron-down"></span></h2></a></div></div></div></div><div id="classroom-in-box-container" class="container"><div id="classroom-in-box-row" class="row"><div class="col-sm-6"><h2 data-i18n="new_home.classroom_in_a_box" class="text-navy"></h2></div><div class="col-sm-6"><p data-i18n="[html]new_home.codecombat_is"></p><p data-i18n="[html]new_home.our_courses"></p></div></div><div class="top-screenshots"><div class="screenshots"><div class="hidden-sm hidden-md hidden-lg"><small data-i18n="new_home.top_screenshots_hint"></small></div><div title="Click to view full size" class="screenshot-grid"><a data-toggle="modal" data-target="#screenshot-lightbox" data-index="0" class="screen-thumbnail"><img src="/images/pages/about/desert.jpg"/></a></div><div class="clearfix hidden-xs"><small data-i18n="new_home.top_screenshots_hint"></small></div></div></div><div id="feature-spread-row" class="row text-center"><h3 data-i18n="new_home.designed_with"></h3><div class="col-sm-4"><img src="/images/pages/home/F1_typedcode.png" class="img-circle"/><h4><span data-i18n="new_home.real_code"></span><br/><span data-i18n="new_home.from_the_first_level"></span></h4><p data-i18n="new_home.getting_students" class="small"></p></div><div class="col-sm-4"><img src="/images/pages/home/F2_teacherguides.png" class="img-circle"/><h4><span data-i18n="new_home.educator_resources"></span><br/><span data-i18n="new_home.course_guides"></span></h4><p data-i18n="new_home.teaching_computer_science" class="small"></p></div><div class="col-sm-4"><img src="/images/pages/home/F3_accessible.png" class="img-circle"/><h4><span data-i18n="new_home.accessible_to"></span><br/><span data-i18n="new_home.everyone"></span></h4><p data-i18n="new_home.democratizing" class="small"></p></div></div><div class="testimonials-rows"><div class="testimonials-filler-left"></div><div class="testimonials-filler-right"></div><div class="row"><div class="col-lg-offset-2 col-lg-7 col-sm-8"><blockquote><h3 data-i18n="new_home.forgot_learning"></h3></blockquote></div><div class="col-lg-2 col-sm-3 text-center"><img src="/images/pages/home/timmaki.png" class="img-circle"/><h6>Tim Maki</h6><div class="small">Director of Technology, Tilton School</div></div></div><div class="row"><div class="col-lg-7 col-sm-8 col-sm-push-4 col-lg-push-3"><blockquote><h3 data-i18n="new_home.wanted_to_do"></h3></blockquote></div><div class="col-lg-2 col-sm-3 col-lg-offset-1 text-center col-sm-pull-8 col-lg-pull-7"><img src="/images/pages/home/dylan.png" class="img-circle"/><h6>Dylan</h6><div class="small">3rd Grader</div></div></div></div><h3 data-i18n="new_home.why_games" class="text-center"></h3><div id="benefit-row-1" class="row"><div id="benefit-graphic-1" class="col-sm-6 col-sm-offset-1 col-sm-push-6"><h2 data-i18n="new_home.games_reward"></h2><img src="/images/pages/home/G1_reward.png"/><div id="benefit-graphic-1-filler"></div></div><div class="col-sm-5 col-sm-pull-6"><p data-i18n="new_home.encourage"></p><p><span data-i18n="new_home.excel" class="spr"></span><span>“</span><a href="http://blog.mindresearch.org/blog/game-based-learning-infographic-strong-math-practices" target="_blank" data-i18n="new_home.struggle"></a><span>” -</span><span data-i18n="new_home.kind_of_struggle" class="spl spr"></span><a href="http://www.gamesandlearning.org/2014/06/09/teachers-on-using-games-in-class/" target="_blank" data-i18n="new_home.motivating"></a><span>,</span><span data-i18n="new_home.not_tedious" class="spl"></span></p></div></div><div id="benefit-row-2" class="row"><div id="benefit-graphic-2" class="col-sm-6"><h2 data-i18n="new_home.gaming_is_good"></h2><img src="/images/pages/home/G2_brains.png"/><div id="benefit-graphic-2-filler"></div></div><div class="col-sm-5 col-sm-offset-1"><p><span data-i18n="new_home.game_based" class="spr"></span><a href="http://schoolsweek.co.uk/gaming-is-good-for-childrens-brains-study-suggests/" target="_blank" data-i18n="new_home.compared"></a><span data-i18n="new_home.conventional" class="spl spr"></span><a href="http://dev.k-12techdecisions.com/article/game_based_learning_is_where_vygotsky_meets_dweck/P3" target="_blank" data-i18n="new_home.perform_at_higher_level"></a><span></span></p><p><span data-i18n="new_home.feedback"></span></p></div></div><div id="benefit-row-3" class="row"><div id="benefit-graphic-3" class="col-sm-6 col-sm-offset-1 col-sm-push-6"><h2 data-i18n="new_home.real_game"></h2><img src="/images/pages/home/G3_game.png"/><div id="benefit-graphic-3-filler"></div></div><div class="col-sm-5 col-sm-pull-6"><p><span data-i18n="new_home.great_game"></span></p><p><span data-i18n="new_home.agency"></span></p></div></div><div class="request-demo-row text-center">')
if(o.isTeacherWithDemo){r.push('<h3 data-i18n="new_home.get_started_title"></h3>')}else{r.push('<h3 data-i18n="new_home.request_demo_title"></h3>')}r.push('<div class="teacher-screenshots"><div class="screenshots"><div class="hidden-sm hidden-md hidden-lg"><small data-i18n="new_home.top_screenshots_hint"></small></div><div title="Click to view full size" class="screenshot-grid"><a data-toggle="modal" data-target="#screenshot-lightbox" data-index="1" class="screen-thumbnail"><img src="/images/pages/about/forest.jpg"/></a><a data-toggle="modal" data-target="#screenshot-lightbox" data-index="2" class="screen-thumbnail"><img src="/images/pages/about/dungeon.jpg"/></a><a data-toggle="modal" data-target="#screenshot-lightbox" data-index="3" class="screen-thumbnail"><img src="/images/pages/about/glacier.jpg"/></a></div><div class="clearfix hidden-xs"><small data-i18n="new_home.top_screenshots_hint"></small></div></div></div>')
if(o.isTeacherWithDemo){r.push('<h4 data-i18n="new_home.get_started_subtitle"></h4><div><button data-event-action="Homepage Setup Class" data-i18n="new_home.setup_a_class" class="btn btn-primary btn-lg setup-class-btn"></button></div>')}else{r.push('<h4 data-i18n="new_home.request_demo_subtitle"></h4><div><button data-event-action="Homepage Request Demo" data-i18n="new_home.request_demo" class="btn btn-primary btn-lg request-demo"></button></div>')
if(n.isAnonymous()){r.push('<div class="have-an-account"><span data-i18n="new_home.have_an_account" class="spr"></span><a data-i18n="login.log_in" class="login-button"></a></div>')}}r.push("</div>")
if(!l.static){r.push('<h3 data-i18n="new_home.computer_science" class="text-center"></h3><h4 class="text-center"><span id="school-level-label" data-i18n="new_home.show_me_lesson_time"></span><select id="school-level-dropdown" class="form-control text-navy"><option value="elementary" data-i18n="teachers_quote.elementary_school"></option><option value="middle" selected="selected" data-i18n="teachers_quote.middle_school"></option><option value="high" data-i18n="teachers_quote.high_school"></option></select></h4><h5 id="total-hours-header" class="text-center"><span data-i18n="new_home.curriculum" class="spr"></span><span id="semester-duration"></span></h5><div id="courses-row" class="row">')
var d={};(function(){var e=o.courses.models
if("number"==typeof e.length){for(var t=0,i=e.length;t<i;t++){var n=e[t]
r.push('<div class="col-md-3 col-sm-4"><div'+jade.attrs({"data-course-slug":n.get("slug"),class:["media","course-details"]},{"data-course-slug":true})+">")
if(t===0){r.push('<div class="free-course"><h6 data-i18n="new_home.ffa"></h6></div>')}r.push("<div"+jade.attrs({title:c(n.attributes,"description"),class:["media-body"]},{title:true})+'><h6 class="course-name">'+jade.escape(null==(jade.interp=c(n.attributes,"name")+":")?"":jade.interp)+'</h6><p class="small">')
var s=0;(function(){var e=n.get("concepts")||[]
if("number"==typeof e.length){for(var t=0,i=e.length;t<i;t++){var o=e[t]
if(d[o])continue
d[o]=true
if(s===3){s+=1
r.push("<span>...</span>")
continue}else if(s>3){continue}else if(s>0){r.push('<span class="spr">,</span>')}s+=1
r.push("<span"+jade.attrs({"data-i18n":"concepts."+o},{"data-i18n":true})+"></span>")}}else{var i=0
for(var t in e){i++
var o=e[t]
if(d[o])continue
d[o]=true
if(s===3){s+=1
r.push("<span>...</span>")
continue}else if(s>3){continue}else if(s>0){r.push('<span class="spr">,</span>')}s+=1
r.push("<span"+jade.attrs({"data-i18n":"concepts."+o},{"data-i18n":true})+"></span>")}}}).call(this)
if(s===0){r.push("<span>"+jade.escape(null==(jade.interp=n.get("description"))?"":jade.interp)+"</span>")}r.push("</p></div><img"+jade.attrs({src:"/images/pages/home/"+n.get("slug")+".png",class:["media-object"]},{src:true})+'/><h6 class="course-duration"><span data-i18n="new_home.lesson_time" class="spr"></span><span class="course-hours">'+jade.escape(null==(jade.interp=n.get("duration")||0)?"":jade.interp)+'</span><span data-i18n="units.hours" class="spl unit"></span></h6></div></div>')}}else{var i=0
for(var t in e){i++
var n=e[t]
r.push('<div class="col-md-3 col-sm-4"><div'+jade.attrs({"data-course-slug":n.get("slug"),class:["media","course-details"]},{"data-course-slug":true})+">")
if(t===0){r.push('<div class="free-course"><h6 data-i18n="new_home.ffa"></h6></div>')}r.push("<div"+jade.attrs({title:c(n.attributes,"description"),class:["media-body"]},{title:true})+'><h6 class="course-name">'+jade.escape(null==(jade.interp=c(n.attributes,"name")+":")?"":jade.interp)+'</h6><p class="small">')
var s=0;(function(){var e=n.get("concepts")||[]
if("number"==typeof e.length){for(var t=0,i=e.length;t<i;t++){var o=e[t]
if(d[o])continue
d[o]=true
if(s===3){s+=1
r.push("<span>...</span>")
continue}else if(s>3){continue}else if(s>0){r.push('<span class="spr">,</span>')}s+=1
r.push("<span"+jade.attrs({"data-i18n":"concepts."+o},{"data-i18n":true})+"></span>")}}else{var i=0
for(var t in e){i++
var o=e[t]
if(d[o])continue
d[o]=true
if(s===3){s+=1
r.push("<span>...</span>")
continue}else if(s>3){continue}else if(s>0){r.push('<span class="spr">,</span>')}s+=1
r.push("<span"+jade.attrs({"data-i18n":"concepts."+o},{"data-i18n":true})+"></span>")}}}).call(this)
if(s===0){r.push("<span>"+jade.escape(null==(jade.interp=n.get("description"))?"":jade.interp)+"</span>")}r.push("</p></div><img"+jade.attrs({src:"/images/pages/home/"+n.get("slug")+".png",class:["media-object"]},{src:true})+'/><h6 class="course-duration"><span data-i18n="new_home.lesson_time" class="spr"></span><span class="course-hours">'+jade.escape(null==(jade.interp=n.get("duration")||0)?"":jade.interp)+'</span><span data-i18n="units.hours" class="spl unit"></span></h6></div></div>')}}}).call(this)
r.push('<div class="col-md-3 col-sm-4"><div class="media disabled"><div class="media-body"><p data-i18n="new_home.coming_soon" class="small"></p></div><img src="/images/pages/home/inprogress.png" class="media-object"/></div></div><div class="clearfix"></div><div class="text-center"><h4><img src="/images/pages/about/new_languages.png"/><div data-i18n="new_home.courses_available_in"></div></h4></div></div>')}r.push('<div class="testimonials-rows"><div class="testimonials-filler-left"></div><div class="testimonials-filler-right"></div><div class="row"><div class="col-lg-offset-2 col-lg-7 col-sm-8"><blockquote><h3 data-i18n="new_home.boast"></h3></blockquote></div><div class="col-lg-2 col-sm-3 text-center"><img src="/images/pages/home/opensource.png" class="img-circle"/><h6>Open Source</h6><div class="small">opensource.com</div></div></div><div class="row"><div class="col-lg-7 col-sm-8 col-sm-push-4 col-lg-push-3"><blockquote><h3 data-i18n="new_home.winning"></h3></blockquote></div><div class="col-lg-2 col-sm-3 col-lg-offset-1 text-center col-sm-pull-8 col-lg-pull-7"><img src="/images/pages/home/pcmag.png" class="img-circle"/><h6>PC Mag</h6><div class="small">pcmag.com</div></div></div></div><div class="request-demo-row text-center"><h3 data-i18n="new_home.run_class"></h3>')
if(o.isTeacherWithDemo){r.push('<div><button data-event-action="Homepage Setup Class Page Bottom" data-i18n="new_home.setup_a_class" class="btn btn-primary btn-lg setup-class-btn"></button></div>')}else{r.push('<div><button data-event-action="Homepage Request Demo Page Bottom" data-i18n="new_home.request_demo" class="btn btn-primary btn-lg request-demo"></button></div>')
if(n.isAnonymous()){r.push('<div class="have-an-account"><span data-i18n="new_home.have_an_account" class="spr"></span><a data-i18n="login.log_in" class="login-button"></a></div>')}}r.push('</div><div id="screenshot-lightbox" data-show="false" class="modal fade"><div class="modal-dialog"><div class="modal-content"><div id="screenshot-carousel" class="carousel"><ol class="carousel-indicators"><li data-target=".screenshot-display" data-slide-to="0" class="active"></li><li data-target=".screenshot-display" data-slide-to="1"></li><li data-target=".screenshot-display" data-slide-to="2"></li><li data-target=".screenshot-display" data-slide-to="3"></li></ol><div class="carousel-inner"><div class="item active"><img id="screenshot-desert" src="/images/pages/about/desert.jpg"/></div><div class="item"><img id="screenshot-forest" src="/images/pages/about/forest.jpg"/></div><div class="item"><img id="screenshot-dungeon" src="/images/pages/about/dungeon.jpg"/></div><div class="item"><img id="screenshot-glacier" src="/images/pages/about/glacier.jpg"/></div></div><a id="carousel-left" href="#screenshot-carousel" role="button" class="left carousel-control"><span aria-hidden="true" class="glyphicon glyphicons-chevron-left glyphicon-chevron-left"></span><span data-i18n="about.previous" class="sr-only"></span></a><a id="carousel-right" href="#screenshot-carousel" role="button" class="right carousel-control"><span aria-hidden="true" class="glyphicon glyphicons-chevron-right glyphicon-chevron-right"></span><span data-i18n="play.next" class="sr-only"></span></a></div></div></div></div></div></div><div class="container-fluid"><div id="footer" class="small"><div class="container"><div class="row"><div class="col-sm-3"><ul class="list-unstyled"><li><strong>CodeCombat</strong></li><li><a href="/about" data-i18n="nav.about"></a></li><li><a href="/about#jobs" data-i18n="nav.jobs"></a></li><li><a href="http://blog.codecombat.com/" data-i18n="nav.blog"></a></li><li><a href="/legal" data-i18n="nav.legal"></a></li><li><a href="/privacy" data-i18n="nav.privacy"></a></li>')
if(a.china){r.push("<li>京ICP备16061132号</li>")}r.push("</ul></div>")
if(!n.isStudent()){r.push('<div class="col-sm-3"><ul class="list-unstyled"><li><strong data-i18n="nav.schools"></strong></li><li><a href="/teachers/resources/faq" data-i18n="teacher.educator_faq"></a></li><li><a href="/teachers/classes" data-i18n="nav.my_classrooms"></a></li><li><a href="/teachers/resources" data-i18n="nav.resource_hub"></a></li><li><a href="/teachers/demo" data-i18n="new_home.request_demo"></a></li></ul></div>')}r.push('<div class="col-sm-3"><ul class="list-unstyled"><li><strong data-i18n="nav.get_involved"></strong></li><li><a href="/community" data-i18n="nav.community"></a></li><li><a href="/contribute" data-i18n="nav.contribute"></a></li>')
if(!n.isStudent()){r.push("<li><a"+jade.attrs({href:o.forumLink(),"data-i18n":"nav.forum"},{href:true,"data-i18n":true})+"></a></li>")}r.push('<li><a href="/play/ladder" data-i18n="game_menu.multiplayer_tab"></a></li><li><a href="https://github.com/codecombat/codecombat" data-i18n="nav.open_source"></a></li></ul></div><div class="col-sm-3"><ul class="list-unstyled"><li><strong data-i18n="nav.support"></strong></li>')
if(!n.isStudent()){r.push('<li><a tabindex="-1" data-i18n="nav.contact" class="contact-modal"></a></li>')}r.push('<li><a href="https://www.facebook.com/codecombat" data-i18n="nav.facebook"></a></li><li><a href="https://twitter.com/codecombat" data-i18n="nav.twitter"></a></li></ul></div></div></div></div><div id="final-footer" class="small text-center">Copyright ©2017 CodeCombat. All Rights Reserved.<br class="hidden-lg hidden-md"/><img src="/images/pages/base/logo.png" alt="CodeCombat"/><br class="hidden-lg hidden-md"/>')
if(!n.isStudent()){r.push('<span data-i18n="nav.help_pref" class="spr"></span>')
var h=(n.get("preferredLanguage",true)||"en-US").split("-")[0]=="nl"?"klantenservice@codecombat.nl":"team@codecombat.com"
r.push("<a"+jade.attrs({href:"mailto:"+h},{href:true})+">"+jade.escape(null==(jade.interp=h)?"":jade.interp)+'</a><span data-i18n="nav.help_suff" class="spl"></span>')}r.push("</div></div></div>")
return r.join("")}
if(typeof define==="function"&&define.amd){define([],function(){return r})}else if(typeof t==="object"&&t&&t.exports){t.exports=r}else{r}})

//# sourceMappingURL=/javascripts/app.js.map
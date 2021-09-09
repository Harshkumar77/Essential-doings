module.exports=function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=2)}([function(e,t){e.exports=require("vscode")},function(e,t,o){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.getLanguageId=t.getMenuChoices=t.getJavaCommand=t.getRustCommand=t.getPythonCommand=t.getCppCommand=t.getCCommand=t.getDefaultLanguageTemplateFileLocation=t.useShortCodeForcesName=t.getDefaultLangPref=t.getFirstTimePref=t.getJavaArgsPref=t.getRustArgsPref=t.getPythonArgsPref=t.getCArgsPref=t.getCppArgsPref=t.getRetainWebviewContextPref=t.getTimeOutPref=t.getIgnoreSTDERRORPref=t.getSaveLocationPref=t.getAutoShowJudgePref=t.updatePreference=void 0;const i=o(0),r=n(o(7)),s=n(o(4)),a=e=>{const t=i.workspace.getConfiguration("cph").get(e);return console.log("Read preference for ",e,t),t};t.updatePreference=(e,t)=>i.workspace.getConfiguration("competitive-programming-helper").update(e,t),t.getAutoShowJudgePref=()=>a("general.autoShowJudge"),t.getSaveLocationPref=()=>a("general.saveLocation"),t.getIgnoreSTDERRORPref=()=>a("general.ignoreSTDERROR"),t.getTimeOutPref=()=>a("general.timeOut")||3e3,t.getRetainWebviewContextPref=()=>a("general.retainWebviewContext"),t.getCppArgsPref=()=>a("language.cpp.Args").split(" ")||[],t.getCArgsPref=()=>a("language.c.Args").split(" ")||[],t.getPythonArgsPref=()=>a("language.python.Args").split(" ")||[],t.getRustArgsPref=()=>a("language.rust.Args").split(" ")||[],t.getJavaArgsPref=()=>a("language.java.Args").split(" ")||[],t.getFirstTimePref=()=>a("general.firstTime")||"true",t.getDefaultLangPref=()=>{const e=a("general.defaultLanguage");return"none"!==e&&" "!=e&&e?e:null},t.useShortCodeForcesName=()=>a("general.useShortCodeForcesName"),t.getDefaultLanguageTemplateFileLocation=()=>{const e=a("general.defaultLanguageTemplateFileLocation");return""===e?null:e},t.getCCommand=()=>a("language.c.Command")||"gcc",t.getCppCommand=()=>a("language.cpp.Command")||"g++",t.getPythonCommand=()=>a("language.python.Command")||"python3",t.getRustCommand=()=>a("language.rust.Command")||"rustc",t.getJavaCommand=()=>a("language.java.Command")||"javac",t.getMenuChoices=()=>a("general.menuChoices").split(" "),t.getLanguageId=e=>{let t=null;switch(s.default.extname(e)){case".cpp":t=a("language.cpp.SubmissionCompiler");break;case".java":t=a("language.java.SubmissionCompiler");break;case".c":t=a("language.c.SubmissionCompiler");break;case".rs":t=a("language.rust.SubmissionCompiler");break;case".py":t=a("language.python.SubmissionCompiler")}if(null==t)return-1;for(const[e,o]of Object.entries(r.default.compilerToId))if(e===t)return o;return console.error("Couldn't find id for compiler "+t),-1}},function(e,t,o){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,o,n){void 0===n&&(n=o),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[o]}})}:function(e,t,o,n){void 0===n&&(n=o),e[n]=t[o]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.hasOwnProperty.call(e,o)&&n(t,e,o);return i(t,e),t},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.activate=t.getJudgeViewProvider=void 0;const a=r(o(0)),l=o(11),u=s(o(14)),c=o(20),d=o(13),g=s(o(21)),m=o(1);let f;t.getJudgeViewProvider=()=>f;t.activate=function(e){console.log("cph: activate() execution started"),global.context=e;const o=a.window.createStatusBarItem(a.StatusBarAlignment.Left,1e3);o.text=" $(run-all)  Run Testcases",o.tooltip="Competitive Programming Helper - Run all testcases or create if none exist.",o.show(),o.command="cph.runTestCases",(e=>{console.log("Registering commands");const t=a.commands.registerCommand("cph.runTestCases",()=>{u.default()}),o=a.commands.registerCommand("extension.runCodeforcesTestcases",()=>{u.default()}),n=a.commands.registerCommand("cph.submitToCodeForces",()=>{d.submitToCodeForces()}),i=a.commands.registerCommand("cph.submitToKattis",()=>{d.submitToKattis()});f=new g.default(e.extensionUri);const r=a.window.registerWebviewViewProvider(g.default.viewType,f,{webviewOptions:{retainContextWhenHidden:m.getRetainWebviewContextPref()}});e.subscriptions.push(r),e.subscriptions.push(t),e.subscriptions.push(o),e.subscriptions.push(n),e.subscriptions.push(i)})(e),l.setupCompanionServer(),c.checkLaunchWebview(),a.workspace.onDidCloseTextDocument(e=>{c.editorClosed(e)}),a.window.onDidChangeActiveTextEditor(e=>{c.editorChanged(e)}),a.window.onDidChangeVisibleTextEditors(e=>{0===e.length&&t.getJudgeViewProvider().extensionToJudgeViewMessage({command:"new-problem",problem:void 0})})}},function(e,t,o){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.saveProblem=t.getProblem=t.getProbSaveLocation=void 0;const i=n(o(4)),r=n(o(8)),s=o(1),a=n(o(18));t.getProbSaveLocation=e=>{const t=s.getSaveLocationPref(),o=i.default.basename(e),n=i.default.dirname(e),r=`.${o}_${a.default.createHash("md5").update(e).digest("hex").substr(0)}.prob`,l=i.default.join(n,".cph");return t&&""!==t?i.default.join(t,r):i.default.join(l,r)},t.getProblem=e=>{const o=t.getProbSaveLocation(e);let n;try{return n=r.default.readFileSync(o).toString(),JSON.parse(n)}catch(e){return null}},t.saveProblem=(e,o)=>{const n=i.default.dirname(e),a=i.default.join(n,".cph");""!==s.getSaveLocationPref()||r.default.existsSync(a)||(console.log("Making .cph folder"),r.default.mkdirSync(a));const l=t.getProbSaveLocation(e);try{r.default.writeFileSync(l,JSON.stringify(o))}catch(e){throw new Error(e)}}},function(e,t){e.exports=require("path")},function(e,t,o){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,o,n){void 0===n&&(n=o),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[o]}})}:function(e,t,o,n){void 0===n&&(n=o),e[n]=t[o]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.hasOwnProperty.call(e,o)&&n(t,e,o);return i(t,e),t},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.getProblemForDocument=t.deleteProblemFile=t.checkUnsupported=t.randomId=t.ocHide=t.ocShow=t.ocWrite=t.ocAppend=t.isCodeforcesUrl=t.isValidLanguage=t.getLanguage=void 0;const a=o(9),l=o(8),u=o(10),c=s(o(4)),d=r(o(0)),g=s(o(7)),m=o(3),f=o(1),p=d.window.createOutputChannel("cph");t.getLanguage=e=>{const t=c.default.extname(e).split(".").pop();let o=void 0;for(const[e,n]of Object.entries(g.default.extensions))n===t&&(o=e);if(void 0===o)throw new Error("Invalid extension");switch(o){case"cpp":return{name:o,args:[...f.getCppArgsPref()],compiler:f.getCppCommand(),skipCompile:!1};case"c":return{name:o,args:[...f.getCArgsPref()],compiler:f.getCCommand(),skipCompile:!1};case"python":return{name:o,args:[...f.getPythonArgsPref()],compiler:f.getPythonCommand(),skipCompile:!0};case"rust":return{name:o,args:[...f.getRustArgsPref()],compiler:f.getRustCommand(),skipCompile:!1};case"java":return{name:o,args:[...f.getJavaArgsPref()],compiler:f.getJavaCommand(),skipCompile:!1}}throw new Error("Invalid State")},t.isValidLanguage=e=>g.default.supportedExtensions.includes(c.default.extname(e).split(".")[1]),t.isCodeforcesUrl=e=>"codeforces.com"===e.hostname,t.ocAppend=e=>{p.append(e)},t.ocWrite=e=>{p.clear(),p.append(e)},t.ocShow=()=>{p.show()},t.ocHide=()=>{p.clear(),p.hide()},t.randomId=()=>Math.floor(Date.now()+100*Math.random()),t.checkUnsupported=e=>!t.isValidLanguage(e)&&(d.window.showErrorMessage("Unsupported file extension. Only these types are valid: "+g.default.supportedExtensions),!0),t.deleteProblemFile=e=>{const t=m.getProbSaveLocation(e);try{"win32"===u.platform()?a.spawn("del",[t]):a.spawn("rm",[t])}catch(e){console.error("Error while deleting problem file ",e)}},t.getProblemForDocument=e=>{if(void 0===e)return;const t=e.fileName,o=m.getProbSaveLocation(t);if(!l.existsSync(o))return;return JSON.parse(l.readFileSync(o).toString())}},function(e,t,o){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,o,n){void 0===n&&(n=o),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[o]}})}:function(e,t,o,n){void 0===n&&(n=o),e[n]=t[o]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.hasOwnProperty.call(e,o)&&n(t,e,o);return i(t,e),t},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.compileFile=t.getBinSaveLocation=t.setOnlineJudgeEnv=void 0;const a=o(5),l=o(9),u=s(o(4)),c=o(1),d=r(o(0)),g=o(2);let m=!1;t.setOnlineJudgeEnv=e=>{m=e,console.log("online judge env:",m)},t.getBinSaveLocation=e=>{const t=a.getLanguage(e);if(t.skipCompile)return e;const o="java"==t.name?"*.class":".bin",n=c.getSaveLocationPref(),i=u.default.parse(e).name+o,r=u.default.dirname(e);return n&&""!==n?u.default.join(n,i):u.default.join(r,i)};t.compileFile=async e=>{console.log("Compilation Started"),await d.workspace.openTextDocument(e).then(e=>e.save()),a.ocHide();const o=a.getLanguage(e);if(o.skipCompile)return Promise.resolve(!0);g.getJudgeViewProvider().extensionToJudgeViewMessage({command:"compiling-start"});const n=((e,o)=>{let n,i=e.args;switch(""===i[0]&&(i=[]),e.name){case"cpp":n=[o,"-o",t.getBinSaveLocation(o),...i,"-D","DEBUG","-D","CPH"],m&&(n.push("-D"),n.push("ONLINE_JUDGE"));break;case"c":n=[o,"-o",t.getBinSaveLocation(o),...i],m&&(n.push("-D"),n.push("ONLINE_JUDGE"));break;case"rust":n=[o,"-o",t.getBinSaveLocation(o),...i];break;case"java":n=[o,"-d",u.default.dirname(t.getBinSaveLocation(o)),...i],m&&(n.push("-D"),n.push("ONLINE_JUDGE"));break;default:n=[]}return n})(o,e);console.log("Compiling with flags",n);return new Promise(e=>{let t;try{t=l.spawn(o.compiler,n)}catch(e){throw d.window.showErrorMessage(`Could not launch the compiler ${o.compiler}. Is it installed?`),e}let i="";t.stderr.on("data",e=>{i+=e}),t.on("error",t=>{console.error(t),a.ocWrite("Errors while compiling:\n"+t.message+`\n\nHint: Is the compiler ${o.compiler} installed? Check the compiler command in cph settings for the current language.`),g.getJudgeViewProvider().extensionToJudgeViewMessage({command:"compiling-stop"}),g.getJudgeViewProvider().extensionToJudgeViewMessage({command:"not-running"}),a.ocShow(),e(!1)}),t.on("exit",t=>{if(1===t||""!==i)return a.ocWrite("Errors while compiling:\n"+i),a.ocShow(),console.error("Compilation failed"),e(!1),g.getJudgeViewProvider().extensionToJudgeViewMessage({command:"compiling-stop"}),void g.getJudgeViewProvider().extensionToJudgeViewMessage({command:"not-running"});console.log("Compilation passed"),g.getJudgeViewProvider().extensionToJudgeViewMessage({command:"compiling-stop"}),e(!0)})})}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={port:27121,timeout:1e4,extensions:{c:"c",cpp:"cpp",python:"py",rust:"rs",java:"java"},compilers:{c:"gcc",cpp:"g++",python:"python",rust:"rustc",java:"javac"},compilerToId:{"GNU G++17 7.3.0":54,"GNU G++14 6.4.0":50,"GNU G++11 5.1.0":42,"GNU G++17 9.2.0 (64 bit, msys 2)":61,"Microsoft Visual C++ 2017":59,"Microsoft Visual C++ 2010":2,"Clang++17 Diagnostics":52,"Java 11.0.6":60,"Java 1.8.0_241":36,"PyPy 3.6 (7.2.0)":41,"Python 3.7.2":31,"PyPy 2.7 (7.2.0)":40,"Python 2.7.15":7,"GNU GCC C11 5.1.0":43,"Rust 1.42.0":49},supportedExtensions:["py","cpp","rs","c","java"],skipCompile:["py"]}},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("child_process")},function(e,t){e.exports=require("os")},function(e,t,o){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,o,n){void 0===n&&(n=o),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[o]}})}:function(e,t,o,n){void 0===n&&(n=o),e[n]=t[o]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.hasOwnProperty.call(e,o)&&n(t,e,o);return i(t,e),t},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.getProblemFileName=t.setupCompanionServer=t.storeSubmitProblem=t.submitKattisProblem=void 0;const a=s(o(17)),l=s(o(7)),u=o(3),c=r(o(0)),d=s(o(4)),g=o(8),m=o(5),f=o(1),p=o(13),h=o(9),v=o(2),b={empty:!0};let w=b;t.submitKattisProblem=e=>{const t=e.srcPath,n=o(10).homedir();let i=n+"/.kattis/submit.py";if("win32"==process.platform){if(!g.existsSync(n+"\\.kattis\\.kattisrc")||!g.existsSync(n+"\\.kattis\\submit.py"))return void c.window.showErrorMessage(`Please ensure .kattisrc and submit.py are present in ${n}\\.kattis\\submit.py`);i=n+"\\.kattis\\submit.py"}else{if(!g.existsSync(n+"/.kattis/.kattisrc")||!g.existsSync(n+"/.kattis/submit.py"))return void c.window.showErrorMessage(`Please ensure .kattisrc and submit.py are present in ${n}/.kattis/submit.py`);i=n+"/.kattis/submit.py"}const r=h.spawn("python",[i,"-f",t]);r.stdin.setDefaultEncoding("utf-8"),r.stdin.write("Y\n"),r.stdin.end(),r.stdout.on("data",(function(t){console.log(t.toString()),v.getJudgeViewProvider().extensionToJudgeViewMessage({command:"new-problem",problem:e})})),r.stderr.on("data",(function(e){console.log(e.tostring()),c.window.showErrorMessage(e)}))},t.storeSubmitProblem=e=>{const t=e.srcPath,o=p.getProblemName(e.url),n=g.readFileSync(t).toString(),i=f.getLanguageId(e.srcPath);w={empty:!1,url:e.url,problemName:o,sourceCode:n,languageId:i},console.log("Stored savedResponse",w)},t.setupCompanionServer=()=>{try{const e=a.default.createServer((e,t)=>{const{headers:o}=e;let n="";e.on("readable",(function(){const t=e.read();t&&null!=t&&t.length>0&&(n+=t)})),e.on("close",(function(){const e=JSON.parse(n);P(e)})),t.write(JSON.stringify(w)),"true"==o["cph-submit"]&&(1!=w.empty&&v.getJudgeViewProvider().extensionToJudgeViewMessage({command:"submit-finished"}),w=b),t.end()});return e.listen(l.default.port),console.log("Companion server listening on port",l.default.port),e}catch(e){console.error("Companion server error :",e)}},t.getProblemFileName=(e,t)=>m.isCodeforcesUrl(new URL(e.url))&&f.useShortCodeForcesName()?`${p.getProblemName(e.url)}.${t}`:(console.log(m.isCodeforcesUrl(new URL(e.url)),f.useShortCodeForcesName()),`${e.name.replace(/\W+/g,"_")}.${t}`);const P=async e=>{var o;null==c.window.activeTextEditor&&v.getJudgeViewProvider().extensionToJudgeViewMessage({command:"new-problem",problem:void 0});const n=null===(o=c.workspace.workspaceFolders)||void 0===o?void 0:o[0].uri.fsPath;if(void 0===n)return void c.window.showInformationMessage("Please open a folder first.");const i=f.getDefaultLangPref();let r,s;if(null==i){const e=new Set(Object.keys(l.default.extensions)),t=f.getMenuChoices().filter(t=>e.has(t)),o=await c.window.showQuickPick(t);if(!o)return void c.window.showInformationMessage("Aborted creation of new file");r=l.default.extensions[o]}else r=l.default.extensions[i];try{s=new URL(e.url)}catch(e){return console.error(e),null}if("open.kattis.com"==s.hostname){const t=e.url.split("/");e.name=t[t.length-1]}const a=t.getProblemFileName(e,r),p=d.default.join(n,a);e.srcPath=p,e.tests=e.tests.map(e=>Object.assign(Object.assign({},e),{id:m.randomId()})),g.existsSync(p)||g.writeFileSync(p,""),u.saveProblem(p,e);const h=await c.workspace.openTextDocument(p);if(i){const e=f.getDefaultLanguageTemplateFileLocation();if(null!==e){if(g.existsSync(e)){const t=g.readFileSync(e).toString();g.writeFileSync(p,t)}else c.window.showErrorMessage("Template file does not exist: "+e)}}await c.window.showTextDocument(h,c.ViewColumn.One),v.getJudgeViewProvider().extensionToJudgeViewMessage({command:"new-problem",problem:e})}},function(e,t,o){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,o,n){void 0===n&&(n=o),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[o]}})}:function(e,t,o,n){void 0===n&&(n=o),e[n]=t[o]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.hasOwnProperty.call(e,o)&&n(t,e,o);return i(t,e),t},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.killRunning=t.deleteBinary=t.runTestCase=void 0;const a=o(9),l=o(10),u=s(o(7)),c=o(1),d=r(o(0)),g=s(o(4)),m=[];t.runTestCase=(e,t,o)=>{console.log("Running testcase",e,t,o);const n={stdout:"",stderr:"",code:null,signal:null,time:0,timeOut:!1},i={timeout:u.default.timeout,env:{DEBUG:"true",CPH:"true"}};let r;const s=setTimeout(()=>{n.timeOut=!0,r.kill()},c.getTimeOutPref());switch("win32"===l.platform()&&"python3"===e.compiler&&(e.compiler="python"),e.name){case"python":r=a.spawn(e.compiler,[t,...e.args],i);break;case"java":{const e=g.default.parse(t).name.slice(0,-1),o=g.default.dirname(t);r=a.spawn("java",["-cp",o,e]);break}default:r=a.spawn(t,i)}r.on("error",t=>{console.error(t),d.window.showErrorMessage(`Could not launch testcase process. Is '${e.compiler}' in your PATH?`)});const f=Date.now();return new Promise(e=>{m.push(r),r.on("exit",(t,o)=>{const i=Date.now();clearTimeout(s),n.code=t,n.signal=o,n.time=i-f,m.pop(),console.log("Run Result:",n),e(n)}),r.stdout.on("data",e=>{n.stdout+=e}),r.stderr.on("data",e=>n.stderr+=e),console.log("Wrote to STDIN");try{r.stdin.write(o)}catch(e){console.error("WRITEERROR",e)}r.stdin.end(),r.on("error",t=>{const o=Date.now();clearTimeout(s),n.code=1,n.signal=t.name,n.time=o-f,m.pop(),console.log("Run Error Result:",n),e(n)})})},t.deleteBinary=(e,t)=>{if(e.skipCompile)console.log("Skipping deletion of binary as it's not a compiled language.");else{console.log("Deleting binary",t);try{"linux"==l.platform()?a.spawn("rm",[t]):a.spawn("del",[t],{shell:!0})}catch(e){console.error("Error while deleting binary",e)}}},t.killRunning=()=>{console.log("Killling binaries"),m.forEach(e=>e.kill())}},function(e,t,o){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,o,n){void 0===n&&(n=o),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[o]}})}:function(e,t,o,n){void 0===n&&(n=o),e[n]=t[o]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.hasOwnProperty.call(e,o)&&n(t,e,o);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.getProblemName=t.submitToCodeForces=t.submitToKattis=void 0;const s=o(3),a=r(o(0)),l=o(11),u=o(2);t.submitToKattis=()=>{var e;const t=null===(e=a.window.activeTextEditor)||void 0===e?void 0:e.document.fileName;if(!t)return void a.window.showErrorMessage("Active editor is not supported for submission");const o=s.getProblem(t);if(!o)return void a.window.showErrorMessage("Failed to parse current code.");let n;try{n=new URL(o.url)}catch(e){return console.error(e),void a.window.showErrorMessage("Not a kattis problem.")}"open.kattis.com"===n.hostname?(l.submitKattisProblem(o),u.getJudgeViewProvider().extensionToJudgeViewMessage({command:"waiting-for-submit"})):a.window.showErrorMessage("Not a kattis problem.")},t.submitToCodeForces=()=>{var e;const t=null===(e=a.window.activeTextEditor)||void 0===e?void 0:e.document.fileName;if(!t)return void a.window.showErrorMessage("Active editor is not supported for submission");const o=s.getProblem(t);if(!o)return void a.window.showErrorMessage("Failed to parse current code.");let n;try{n=new URL(o.url)}catch(e){return console.error(e),void a.window.showErrorMessage("Not a codeforces problem.")}"codeforces.com"===n.hostname?(l.storeSubmitProblem(o),u.getJudgeViewProvider().extensionToJudgeViewMessage({command:"waiting-for-submit"})):a.window.showErrorMessage("Not a codeforces problem.")},t.getProblemName=e=>{const t=e.split("/");let o;return o=t.find(e=>"contest"==e)?t[t.length-3]+t[t.length-1]:t[t.length-2]+t[t.length-1],o}},function(e,t,o){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,o,n){void 0===n&&(n=o),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[o]}})}:function(e,t,o,n){void 0===n&&(n=o),e[n]=t[o]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.hasOwnProperty.call(e,o)&&n(t,e,o);return i(t,e),t},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=r(o(0)),l=o(5),u=o(3),c=o(6),d=s(o(15)),g=s(o(4)),m=o(2);t.default=async()=>{console.log('Running command "runTestCases"');const e=a.window.activeTextEditor;if(void 0===e)return void l.checkUnsupported("");const t=e.document.fileName;if(l.checkUnsupported(t))return;const o=u.getProblem(t);if(!o)return console.log("No problem saved."),void f(e);await c.compileFile(t)?(await e.document.save(),m.getJudgeViewProvider().focus(),m.getJudgeViewProvider().extensionToJudgeViewMessage({command:"new-problem",problem:o}),d.default(o),a.window.showTextDocument(e.document,a.ViewColumn.One)):console.error("Could not compile",t)};const f=async e=>{console.log("Creating local problem");const t=e.document.fileName;if(l.checkUnsupported(t))return;const o={name:"Local: "+g.default.basename(t).split(".")[0],url:t,tests:[{id:l.randomId(),input:"",output:""}],interactive:!1,memoryLimit:1024,timeLimit:3e3,srcPath:t,group:"local",local:!0};console.log(o),u.saveProblem(t,o),m.getJudgeViewProvider().focus(),m.getJudgeViewProvider().extensionToJudgeViewMessage({command:"new-problem",problem:o})}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=o(16),i=o(6),r=o(12),s=o(5),a=o(2);t.default=async e=>{console.log("Run all started",e);if(await i.compileFile(e.srcPath)){for(const t of e.tests)a.getJudgeViewProvider().extensionToJudgeViewMessage({command:"running",id:t.id,problem:e}),await n.runSingleAndSave(e,t.id,!0);console.log("Run all finished"),r.deleteBinary(s.getLanguage(e.srcPath),i.getBinSaveLocation(e.srcPath))}}},function(e,t,o){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,o,n){void 0===n&&(n=o),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[o]}})}:function(e,t,o,n){void 0===n&&(n=o),e[n]=t[o]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.hasOwnProperty.call(e,o)&&n(t,e,o);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.runSingleAndSave=void 0;const s=o(5),a=o(6),l=o(3),u=o(12),c=o(19),d=r(o(0)),g=o(2),m=o(1);t.runSingleAndSave=async(e,t,o=!1)=>{console.log("Run and save started",e,t);const n=e.srcPath,i=s.getLanguage(n),r=a.getBinSaveLocation(n),f=e.tests.findIndex(e=>e.id===t),p=e.tests[f],h=await d.workspace.openTextDocument(n);if(await d.window.showTextDocument(h,d.ViewColumn.One),await h.save(),!p)return void console.error("Invalid id",t,e);if(l.saveProblem(n,e),!o&&!await a.compileFile(n))return void console.error("Failed to compile",e,t);const v=await u.runTestCase(i,r,p.input);o||u.deleteBinary(i,r);const b=!m.getIgnoreSTDERRORPref()&&""!==v.stderr,w=null!==v.code&&0!==v.code||null!==v.signal||b,P=Object.assign(Object.assign({},v),{pass:!w&&c.isResultCorrect(p,v.stdout),id:t});console.log("Testcase judging complete. Result:",P),g.getJudgeViewProvider().extensionToJudgeViewMessage({command:"run-single-result",result:P,problem:e})}},function(e,t){e.exports=require("http")},function(e,t){e.exports=require("crypto")},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getBlankCase=t.isResultCorrect=void 0;const n=o(10);t.isResultCorrect=(e,t)=>{const o=e.output.trim().split("\n"),i=t.trim().split(n.EOL);if(o.length!==i.length)return console.log("Failed precheck",o,i),!1;const r=o.length;for(let e=0;e<r;e++)if(o[e].trim()!==i[e].trim())return console.log("Judge Failed here: ",o[e].trim(),i[e].trim()),!1;return!0},t.getBlankCase=e=>{const t=Date.now();return{id:t,result:null,testcase:{input:"",output:"",id:t}}}},function(e,t,o){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,o,n){void 0===n&&(n=o),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[o]}})}:function(e,t,o,n){void 0===n&&(n=o),e[n]=t[o]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.hasOwnProperty.call(e,o)&&n(t,e,o);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.checkLaunchWebview=t.editorClosed=t.editorChanged=void 0;const s=r(o(0)),a=o(3),l=o(8),u=o(2),c=o(5),d=o(1),g=o(6);t.editorChanged=async e=>{if(console.log("Changed editor to",null==e?void 0:e.document.fileName),void 0===e)return u.getJudgeViewProvider().extensionToJudgeViewMessage({command:"new-problem",problem:void 0}),void g.setOnlineJudgeEnv(!1);if("file"!==e.document.uri.scheme)return;g.setOnlineJudgeEnv(!1);const t=c.getProblemForDocument(e.document);void 0!==t?(d.getAutoShowJudgePref()&&u.getJudgeViewProvider().isViewUninitialized()&&s.commands.executeCommand("cph.judgeView.focus"),console.log("Sent problem @",Date.now()),u.getJudgeViewProvider().extensionToJudgeViewMessage({command:"new-problem",problem:t})):u.getJudgeViewProvider().extensionToJudgeViewMessage({command:"new-problem",problem:void 0})},t.editorClosed=e=>{console.log("Closed editor:",e.uri.fsPath);const t=e.uri.fsPath,o=a.getProbSaveLocation(t);if(!l.existsSync(o))return;const n=JSON.parse(l.readFileSync(o).toString());u.getJudgeViewProvider().problemPath===n.srcPath&&u.getJudgeViewProvider().extensionToJudgeViewMessage({command:"new-problem",problem:void 0})},t.checkLaunchWebview=()=>{const e=s.window.activeTextEditor;e&&t.editorChanged(e)}},function(e,t,o){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,o,n){void 0===n&&(n=o),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[o]}})}:function(e,t,o,n){void 0===n&&(n=o),e[n]=t[o]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.hasOwnProperty.call(e,o)&&n(t,e,o);return i(t,e),t},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=r(o(0)),l=o(11),u=o(12),c=o(3),d=o(5),g=o(16),m=s(o(15)),f=s(o(14)),p=o(1),h=o(6);let v=(()=>{class e{constructor(e){this._extensionUri=e,this.messageBuffer=[],this.focusIfNeeded=e=>{switch(console.log(e.command),e.command){case"waiting-for-submit":case"compiling-start":case"run-all":this.focus()}"new-problem"===e.command&&void 0!==e.problem&&p.getAutoShowJudgePref()&&this.focus()},this.extensionToJudgeViewMessage=async e=>{this.focusIfNeeded(e),this._view&&this._view.visible||this._view&&p.getRetainWebviewContextPref()?(this._view.webview.postMessage(e),"submit-finished"!==e.command&&console.log("View got message",e),"new-problem"===e.command&&(void 0===e.problem?this.problemPath=void 0:this.problemPath=e.problem.srcPath)):"new-problem"!==e.command?(console.log("Pushing to buffer",e.command),this.messageBuffer.push(e)):this.messageBuffer=[]}}isViewUninitialized(){return void 0===this._view}resolveWebviewView(e){this._view=e,e.webview.options={enableScripts:!0,localResourceRoots:[this._extensionUri]},e.webview.html=this._getHtmlForWebview(e.webview),e.webview.onDidReceiveMessage(async e=>{switch(console.log("Got from webview",e),e.command){case"run-single-and-save":{const t=e.problem,o=e.id;g.runSingleAndSave(t,o);break}case"run-all-and-save":{const t=e.problem;m.default(t);break}case"save":c.saveProblem(e.problem.srcPath,e.problem);break;case"kill-running":u.killRunning();break;case"delete-tcs":this.extensionToJudgeViewMessage({command:"new-problem",problem:void 0}),d.deleteProblemFile(e.problem.srcPath);break;case"submitCf":l.storeSubmitProblem(e.problem);break;case"submitKattis":l.submitKattisProblem(e.problem);break;case"online-judge-env":h.setOnlineJudgeEnv(e.value);break;case"get-initial-problem":this.getInitialProblem();break;case"create-local-problem":f.default();break;default:console.error("Unknown event received from webview")}})}getInitialProblem(){var e;const t=null===(e=a.window.activeTextEditor)||void 0===e?void 0:e.document;this.extensionToJudgeViewMessage({command:"new-problem",problem:d.getProblemForDocument(t)}),this.messageBuffer.forEach(e=>{var t;console.log("Restored buffer command",e.command),null===(t=this._view)||void 0===t||t.webview.postMessage(e)}),this.messageBuffer=[]}async focus(){var e,t;console.log("focusing"),this._view?null===(t=(e=this._view).show)||void 0===t||t.call(e,!0):await a.commands.executeCommand("cph.judgeView.focus")}_getHtmlForWebview(e){return`\n            <!DOCTYPE html lang="EN">\n            <html>\n                <head>\n                    <link rel="stylesheet" href="${e.asWebviewUri(a.Uri.joinPath(this._extensionUri,"dist","app.css"))}" />\n                    <link rel="stylesheet" href="${e.asWebviewUri(a.Uri.joinPath(this._extensionUri,"dist","codicon.css"))}" />\n                    <meta charset="UTF-8" />\n                </head>\n                <body>\n                    <div id="app">\n                        An error occurred! Restarting VS Code may solve the\n                        issue. If not, please\n                        <a href="https://github.com/agrawal-d/cph/issues"\n                            >report the bug on GitHub</a\n                        >.\n                    </div>\n                    <script>\n                        // Since the react script takes time to load, the problem is sent to the webview before it has even loaded.\n                        // So, for the initial request, ask for it again.\n                        window.vscodeApi = acquireVsCodeApi();\n                        document.addEventListener(\n                            'DOMContentLoaded',\n                            (event) => {\n                                vscodeApi.postMessage({\n                                    command: 'get-initial-problem',\n                                });\n                                vscodeApi.postMessage({\n                                    command: 'online-judge-env',\n                                    value:false,\n                                });\n                                console.log("Requested initial problem");\n                            },\n                        );\n                    <\/script>\n                    <script src="${e.asWebviewUri(a.Uri.joinPath(this._extensionUri,"dist","frontend.module.js"))}"><\/script>\n                </body>\n            </html>\n        `}}return e.viewType="cph.judgeView",e})();t.default=v}]);
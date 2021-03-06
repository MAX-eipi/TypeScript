/a/lib/tsc.js -w -p /a/b/tsconfig.json
//// [/a/b/file1.ts]
let t = 10;

//// [/a/b/tsconfig.json]
{
                        "compilerOptions": {},
                        "include": ["app/*", "test/**/*", "something"]
                    }

//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }


Output::
>> Screen clear
12:00:15 AM - Starting compilation in watch mode...


error TS18003: No inputs were found in config file '/a/b/tsconfig.json'. Specified 'include' paths were '["app/*","test/**/*","something"]' and 'exclude' paths were '[]'.


12:00:16 AM - Found 1 error. Watching for file changes.


Program root files: []
Program options: {"watch":true,"project":"/a/b/tsconfig.json","configFilePath":"/a/b/tsconfig.json"}
Program files::

No cached semantic diagnostics in the builder::

WatchedFiles::
/a/b/tsconfig.json:
  {"pollingInterval":250}

FsWatches::
/a/b/app:
  {"fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

FsWatchesRecursive::
/a/b/node_modules/@types:
  {"fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/a/b/test:
  {"fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/a/b/something:
  {"fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

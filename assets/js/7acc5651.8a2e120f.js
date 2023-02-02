"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6592],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),i=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=i(n),m=a,h=d["".concat(o,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(h,c(c({ref:t},p),{},{components:n})):r.createElement(h,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var i=2;i<l;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2341:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),c=["components"],s={id:"capsule-exec",title:"Exec syscall in Capsule"},o=void 0,i={unversionedId:"labs/capsule-exec",id:"labs/capsule-exec",title:"Exec syscall in Capsule",description:"Introduction",source:"@site/docs/labs/capsule-exec.md",sourceDirName:"labs",slug:"/labs/capsule-exec",permalink:"/docs/labs/capsule-exec",draft:!1,editUrl:"https://github.com/nervosnetwork/docs-new/tree/develop/website/docs/labs/capsule-exec.md",tags:[],version:"current",frontMatter:{id:"capsule-exec",title:"Exec syscall in Capsule"},sidebar:"defaultSidebar",previous:{title:"Dynamic loading in Capsule",permalink:"/docs/labs/capsule-dynamic-loading-tutorial"},next:{title:"Introduction",permalink:"/docs/labs/introduction"}},p={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Setup the develop environment",id:"setup-the-develop-environment",level:2},{value:"Install capsule",id:"install-capsule",level:3},{value:"Create a project",id:"create-a-project",level:2},{value:"Write echo sub-script",id:"write-echo-sub-script",level:2},{value:"Write exec demo script",id:"write-exec-demo-script",level:2},{value:"Testing",id:"testing",level:2},{value:"Other resources",id:"other-resources",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,c);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0034-vm-syscalls-2/0034-vm-syscalls-2.md#exec"},"Exec")," is a new syscall provided by ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0037-ckb2021/0037-ckb2021.md"},"ckb2021"),". To understand what exec syscall does, we recommend reading ",(0,l.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man3/exec.3.html"},"this article")," first. In short: Exec runs an executable file from specified cell data in the context of an already existing VM, replacing the previous executable. The used cycles do not change, but the code, registers, and memory of the VM are replaced by those of the new program, meaning ",(0,l.kt)("strong",{parentName:"p"},"control flow will never return to the main script"),"."),(0,l.kt)("p",null,"You can imagine exec as a router. When some conditions are met, the main script will completely hand over control to a certain sub-script."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"              \u250c--\x3e if State1 --\x3e Exec(Sub-script1)\nMain script --+--\x3e if State2 --\x3e Exec(Sub-script2)\n              \u2514--\x3e if State3 --\x3e Exec(Sub-script3)\n")),(0,l.kt)("p",null,"Compared with ",(0,l.kt)("a",{parentName:"p",href:"https://docs.nervos.org/docs/labs/capsule-dynamic-loading-tutorial/"},"Dynamic libraries"),", exec has the following significant advantages:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"All sub-scripts are complete scripts. They can be used alone, or they can be called by exec."),(0,l.kt)("li",{parentName:"ul"},"Sub-scripts have a separate 4M memory space."),(0,l.kt)("li",{parentName:"ul"},"Allow passing in arguments.")),(0,l.kt)("p",null,"At the same time Exec has the following limitations:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Never return."),(0,l.kt)("li",{parentName:"ul"},"Hard to exchange data between scripts.")),(0,l.kt)("p",null,"When dynamic libraries and exec syscall both meet your needs, we recommend that you use exec instead of dynamic libraries."),(0,l.kt)("p",null,"In this tutorial, we'll write two scripts in Rust, and exec one script into the other."),(0,l.kt)("h2",{id:"setup-the-develop-environment"},"Setup the develop environment"),(0,l.kt)("h3",{id:"install-capsule"},"Install capsule"),(0,l.kt)("p",null,"The installation steps can refer to ",(0,l.kt)("a",{parentName:"p",href:"https://docs.nervos.org/docs/labs/capsule-dynamic-loading-tutorial#install-capsule"},"here"),"."),(0,l.kt)("h2",{id:"create-a-project"},"Create a project"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ capsule new ckb-exec-demo\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"(click here to view response)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'New project "ckb-exec-demo"\nCreated file "capsule.toml"\nCreated file "deployment.toml"\nCreated file "README.md"\nCreated file "Cargo.toml"\nCreated file ".gitignore"\nInitialized empty Git repository in /tmp/ckb-exec-demo/.git/\nCreated "/tmp/ckb-exec-demo"\nCreated tests\n     Created library `tests` package\nNew contract "ckb-exec-demo"\n     Created binary (application) `ckb-exec-demo` package\nRewrite Cargo.toml\nRewrite capsule.toml\nDone\n'))),(0,l.kt)("p",null,"Let's create the second contract named ",(0,l.kt)("inlineCode",{parentName:"p"},"echo"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ cd ckb-exec-demo\n$ capsule new-contract echo\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"(click here to view response)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'New contract "echo"\n     Created binary (application) `echo` package\nRewrite Cargo.toml\nRewrite capsule.toml\nDone\n'))),(0,l.kt)("h2",{id:"write-echo-sub-script"},"Write echo sub-script"),(0,l.kt)("p",null,"Put the following code into ",(0,l.kt)("inlineCode",{parentName:"p"},"contracts/echo/main.rs"),". As you can see, the script always returns 0 if argc is 0, which means that if the script is used as a alone lock script, anyone can unlock this cell. If echo used as a sub-script of exec, it will parse the first argument and use that as the exit code."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rs"},"use ckb_std::cstr_core::CStr;\n\nfn program_entry(argc: u64, argv: *const *const u8) -> i8 {\n    // This script will always return 0 if used alone.\n    if argc == 0 {\n        return 0;\n    };\n\n    // When calling the script by exec and passing in the arguments.\n    let args = unsafe { core::slice::from_raw_parts(argv, argc as usize) };\n    let arg1 = unsafe { CStr::from_ptr(args[0]) }.to_str().unwrap();\n    let exit = arg1.parse::<i8>().unwrap();\n    return exit;\n}\n")),(0,l.kt)("h2",{id:"write-exec-demo-script"},"Write exec demo script"),(0,l.kt)("p",null,"Put the following code into ",(0,l.kt)("inlineCode",{parentName:"p"},"contracts/ckb-exec-demo/main.rs"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rs"},'use ckb_std::cstr_core::CStr;\nuse ckb_std::{ckb_constants::Source, default_alloc, syscalls::exec};\n\nfn program_entry(_argc: u64, _argv: *const *const u8) -> i8 {\n    let r = exec(\n        0,\n        Source::CellDep,\n        0,\n        0,\n        &[&CStr::from_bytes_with_nul(b"42\\0").unwrap()],\n    );\n    if r != 0 {\n        return 10;\n    }\n    return 0;\n}\n')),(0,l.kt)("p",null,"This script does only one thing: When executing ",(0,l.kt)("inlineCode",{parentName:"p"},"exec(...)"),", CKB-VM will look for the first dep_cell, and execute the code in it."),(0,l.kt)("h2",{id:"testing"},"Testing"),(0,l.kt)("p",null,"We need to deploy the ",(0,l.kt)("inlineCode",{parentName:"p"},"echo")," to a cell, then reference the cell in the testing transaction. Open ",(0,l.kt)("inlineCode",{parentName:"p"},"tests/src/tests.rs"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rs"},'let echo_bin = {\n    let mut buf = Vec::new();\n    File::open("../build/debug/echo")\n        .unwrap()\n        .read_to_end(&mut buf)\n        .expect("read code");\n    Bytes::from(buf)\n};\nlet echo_out_point = context.deploy_cell(echo_bin);\nlet echo_dep = CellDep::new_builder()\n    .out_point(echo_out_point)\n    .build();\n\n// build transaction\nlet tx = TransactionBuilder::default()\n    .input(input)\n    .outputs(outputs)\n    .outputs_data(outputs_data.pack())\n    // reference to echo cell\n    .cell_dep(echo_dep)\n    .build();\n}\n\nlet err = context.verify_tx(&tx, MAX_CYCLES).unwrap_err();\n// check the return code is 42\nassert_script_error(err, 42);\n')),(0,l.kt)("p",null,"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"capsule test"),"."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"(click here to view response)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Finished test [unoptimized + debuginfo] target(s) in 1.71s\n     Running unittests src/lib.rs (target/debug/deps/tests-c051885699f8b848)\nrunning 1 test\ntest tests::test_success ... ok\ntest result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.52s\n"))),(0,l.kt)("h2",{id:"other-resources"},"Other resources"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/mohanson/ckb-exec-demo"},"Full code")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0034-vm-syscalls-2/0034-vm-syscalls-2.md#exec"},"Exec syscall"))),(0,l.kt)("p",null,"In this article, we use the index to locate sub-scripts. If you want to use the script hash to locate, you can refer to our:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/ckb-c-stdlib/blob/8d56515e726c63b7f9811e10914dbe930d1ea134/ckb_syscalls.h#L368-L378"},"C language implementation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/ckb-std/tree/c660da768df85fa2b0fe78673278d49425ce6333/contracts/exec-caller-by-code-hash"},"Rust language implementation"))))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkshop=self.webpackChunkshop||[]).push([[515],{9515:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var n=a(885),s=a(2791),r=a(184),l=function(e){var t=e.item,a=e.handleRemove,n=e.handleEdit;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("tr",{className:"bg-white border-2 border-gray-200",children:[(0,r.jsx)("td",{className:"px-4 py-3",children:t.id}),(0,r.jsx)("td",{className:"px-4 py-3",children:t.username}),(0,r.jsx)("td",{className:"px-4 py-3 qaDetail",children:t.qa}),(0,r.jsx)("td",{className:"px-4 py-3",children:t.phone}),(0,r.jsx)("td",{className:"text-center text-purple-400 cursor-pointer show-modal",children:(0,r.jsx)("button",{onClick:function(){n(t)},children:(0,r.jsx)("span",{class:"material-symbols-outlined",children:"edit"})})}),(0,r.jsx)("td",{className:"text-center text-purple-400 cursor-pointer ",children:(0,r.jsx)("button",{onClick:function(e){window.confirm("\uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")?(alert("\uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),a(t.id)):alert("\ucde8\uc18c\ud569\ub2c8\ub2e4.")},children:(0,r.jsx)("span",{class:"material-symbols-outlined",children:"delete"})})})]})})},c=function(e){var t=e.info,a=e.handleRemove,n=e.handleEdit;return(0,r.jsx)("tbody",{children:t.map((function(e){return(0,r.jsx)(l,{item:e,handleRemove:a,handleEdit:n},e.id)}))})},i=a(4942),o=a(1413),d=function(e){var t=e.onSaveData,a=(0,s.useState)({name:"",qa:"",phone:""}),l=(0,n.Z)(a,2),c=l[0],d=l[1],u=function(e){var t=e.target,a=t.name,n=t.value;d((0,o.Z)((0,o.Z)({},c),{},(0,i.Z)({},a,n)))};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"post",children:(0,r.jsxs)("form",{className:"'text-xl font-bold mt-5 mb-2 text-center'",onSubmit:function(e){e.preventDefault(),t(c),console.timeLog(c),d({name:"",qa:"",phone:""})},children:[(0,r.jsxs)("div",{className:"flex flex-col md:flex-row mb-1",children:[(0,r.jsxs)("label",{htmlFor:"username",className:"w-full flex-1 mx-2 text-xs font-semibold \r text-gray-600 uppercase",children:["\uc774\ub984",(0,r.jsx)("input",{className:"w-full py-3 px-1 mt-1 \r text-gray-800 appearance-none \r border-2 border-gray-100\r focus:text-gray-500 focus:outline-none focus:border-gray-200",required:!0,placeholder:"\uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694",type:"text",name:"username",value:c.username,onChange:u})]}),(0,r.jsxs)("label",{htmlFor:"phone",className:"w-full flex-1 mx-2 text-xs font-semibold \r text-gray-600 uppercase",children:["\uc5f0\ub77d\ucc98",(0,r.jsx)("input",{className:"w-full py-3 px-1 mt-1 \r text-gray-800 appearance-none \r border-2 border-gray-100\r focus:text-gray-500 focus:outline-none focus:border-gray-200",required:!0,placeholder:"\uc5f0\ub77d\ucc98\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",type:"phone",name:"phone",value:c.phone,onChange:u})]})]}),(0,r.jsx)("div",{className:"flex flex-col md:flex-row",children:(0,r.jsxs)("label",{htmlFor:"qa",className:"w-full flex-1 mx-2 text-xs font-semibold \r text-gray-600 uppercase",children:["Q & A",(0,r.jsx)("input",{className:"w-full py-3 px-1 mt-1 \r text-gray-800 appearance-none \r border-2 border-gray-100\r focus:text-gray-500 focus:outline-none focus:border-gray-200\r question",required:!0,placeholder:"\ubb38\uc758\uc0ac\ud56d\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",type:"qa",name:"qa",value:c.qa,onChange:u})]})}),(0,r.jsx)("div",{className:"text-center",children:(0,r.jsx)("button",{className:"bg-blue-400 py-2 text-center px-10 md:px-12 md:py-3 text-white \r rounded text-xl md:text-base mt-4",type:"submit",children:"\uc800\uc7a5"})})]})})})},u=function(e){var t=e.selectedData,a=e.handleCancel,l=e.handleEditSubmit,c=(0,s.useState)(t),d=(0,n.Z)(c,2),u=d[0],x=d[1],m=function(){a()},h=function(e){x((0,o.Z)((0,o.Z)({},u),{},(0,i.Z)({},e.target.name,e.target.value)))};return(0,r.jsx)("div",{className:"h-screen w-full fixed left-0 top-0 flex justify-center items-center \r bg-black bg-opacity-50",children:(0,r.jsxs)("div",{className:"bg-white rounded shadow-lg w-10/12 md:w-1/2",children:[(0,r.jsxs)("div",{className:"border-b px-4 py-2 flex justify-between items-center",children:[(0,r.jsx)("h3",{className:"font-semibold text-lg",children:"\ubb38\uc758\uc0ac\ud56d \uc218\uc815 \ud558\uae30"}),(0,r.jsx)("span",{class:"material-symbols-outlined",onClick:m,children:"close"})]}),(0,r.jsx)("form",{onSubmit:function(e){e.preventDefault(),l(u)},children:(0,r.jsxs)("div",{className:"p-3",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"title",children:"Name"}),(0,r.jsx)("input",{className:"border-2 border-gray-100 ",type:"text",name:"username",value:u.username,onChange:h})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"title",children:"phone"}),(0,r.jsx)("input",{className:"border-2 border-gray-100",type:"text",name:"phone",maxlength:"20",value:u.phone,onChange:h})]}),(0,r.jsxs)("div",{className:"qaBackform",children:[(0,r.jsx)("span",{className:"title ",children:"Q & A"}),(0,r.jsx)("textarea",{className:"border-2 border-gray-100 backform",type:"text",name:"qa",value:u.qa,onChange:h})]}),(0,r.jsxs)("div",{className:"flex justify-end items-center w-100 border-t p-3",children:[(0,r.jsx)("button",{className:"bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white \r mr-1 close-modal",onClick:m,children:"\ucde8\uc18c"}),(0,r.jsx)("button",{type:"submit",className:"bg-blue-600 hover:bg-blue-700 px-3 py-1 \r rounded text-white",children:"\uc218\uc815"})]})]})})]})})},x=a(1044),m=function(){var e=(0,s.useState)([]),t=(0,n.Z)(e,2),a=t[0],l=t[1],i=(0,s.useState)(""),o=(0,n.Z)(i,2),m=o[0],h=o[1],p=(0,s.useState)(!1),f=(0,n.Z)(p,2),b=f[0],j=f[1],y=(0,s.useRef)(11);(0,s.useEffect)((function(){x.ZP.get("https://gist.githubusercontent.com/6bell8/ef6a17fafcf4daf95845740f352faf84/raw/545e0660bfd00cb1ce18f6496bfeb204ab4121b2/contactData.json").then((function(e){return l(e.data)})).catch((function(e){return console.log(e)}))}),[]),a.sort((function(e,t){return t.id-e.id}));var g=function(e){e.id?l(a.map((function(t){return e.id===t.id?{id:e.id,username:e.username,qa:e.qa,email:e.email,phone:e.phone,website:e.website}:t}))):(l((function(t){return t.concat({id:y.current,username:e.username,qa:e.qa,email:e.email,phone:e.phone,website:e.website})})),y.current+=1)};return(0,r.jsxs)("div",{className:"container max-w-screen-lg mx-auto",children:[(0,r.jsx)("div",{className:"text-xl font-bold mt-5 mb-3 text-center",children:"\ubb38\uc758 \uc0ac\ud56d"}),(0,r.jsxs)("table",{className:"min-w-full table-auto text-gray-800",children:[(0,r.jsx)("thead",{className:"justify-between",children:(0,r.jsxs)("tr",{className:"bg-gray-800",children:[(0,r.jsx)("th",{className:"text-gray-300 px-4 py-3",children:"\ubc88\ud638"}),(0,r.jsx)("th",{className:"text-gray-300 px-4 py-3",children:"\uc774\ub984"}),(0,r.jsx)("th",{className:"text-gray-300 px-4 py-3",children:"\ubb38\uc758\uc0ac\ud56d"}),(0,r.jsx)("th",{className:"text-gray-300 px-4 py-3",children:"\uc5f0\ub77d\ucc98"}),(0,r.jsx)("th",{className:"text-gray-300 px-4 py-3",children:"\uc218\uc815"}),(0,r.jsx)("th",{className:"text-gray-300 px-4 py-3",children:"\uc0ad\uc81c"})]})}),(0,r.jsx)(c,{info:a,handleRemove:function(e){l((function(t){return t.filter((function(t){return t.id!==e}))}))},handleEdit:function(e){j(!0);var t={id:e.id,username:e.username,qa:e.qa,email:e.email,phone:e.phone,website:e.website};h(t)}})]}),(0,r.jsx)(d,{onSaveData:g}),b&&(0,r.jsx)(u,{selectedData:m,handleCancel:function(){j(!1)},handleEditSubmit:function(e){g(e),j(!1)}})]})}}}]);
//# sourceMappingURL=515.89eef9b0.chunk.js.map
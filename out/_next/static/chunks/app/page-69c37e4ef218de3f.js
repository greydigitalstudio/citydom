(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7473:function(e,t,i){Promise.resolve().then(i.t.bind(i,4817,23)),Promise.resolve().then(i.bind(i,2153)),Promise.resolve().then(i.bind(i,4686))},2153:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return g}});var l=i(9268),s=i(6006),_=i(9317),r=i(163),a=i.n(r),n=i(6394),o=i.n(n);let c=e=>{let[t,i]=(0,s.useState)(e.options[0].value),_=e=>{let{target:t}=e;i(t.value)};return(0,l.jsxs)("label",{className:a().filter__field,children:[(0,l.jsx)("div",{className:a().filter__field_title,children:e.title}),(0,l.jsx)("select",{className:a().filter__field_item,value:t,onChange:_,children:e.options.map((e,t)=>{let{value:i,label:s}=e;return(0,l.jsx)("option",{value:i,children:s},t)})})]})},d=e=>{let[t,i]=(0,s.useState)(e.value),_=e=>{i(e.target.value)};return(0,l.jsxs)("label",{className:"".concat(a().filter__field," ").concat(a().filter__flexed),children:[(0,l.jsx)("div",{className:a().filter__field_title,children:e.title}),(0,l.jsx)("input",{type:e.type,className:a().filter__field_item,value:t,name:e.name,onChange:_,placeholder:e.placeholder})]})};var m=i(8477),h=i.n(m);let f=e=>{let[t,i]=(0,s.useState)(""),_=e=>{let{target:t}=e;i(t.value)};return(0,l.jsxs)("div",{className:a().filter__field,children:[(0,l.jsx)("div",{className:a().filter__field_title,children:e.title}),(0,l.jsx)("div",{className:h().radio_group,children:e.options.map((e,t)=>{let{value:i,label:s}=e;return(0,l.jsxs)("label",{className:h().radio_group__label,children:[(0,l.jsx)("input",{type:"radio",name:"rooms",value:i,onChange:_}),(0,l.jsx)("div",{className:h().radio_group_item,children:s})]},t)})})]})},C=e=>{let[t,i]=(0,s.useState)(e.from),[_,r]=(0,s.useState)(e.to),n=e=>{i(e.target.value)},o=e=>{r(e.target.value)};return(0,l.jsxs)("div",{className:"".concat(a().filter__field," ").concat(a().filter__flexed),children:[(0,l.jsx)("div",{className:a().filter__field_title,children:e.title}),(0,l.jsxs)("div",{className:a().filter__field_row,children:[(0,l.jsx)("input",{type:e.from_type,value:t,name:e.from_name,onChange:n,placeholder:e.from_placeholder}),"                ",(0,l.jsx)("input",{type:e.to_type,value:_,name:e.to_name,onChange:o,placeholder:e.to_placeholder})]})]})};var u=i(4762),p=i.n(u);let x=e=>{let[t,i]=(0,s.useState)(e.isChecked),_=e=>{console.log(e.target.value),i(!t)};return(0,l.jsx)("div",{className:"".concat(a().filter__field," ").concat(a().filter__flexed," ").concat(e.className),children:(0,l.jsxs)("label",{className:p().filter__switch,children:[(0,l.jsxs)("div",{className:p().filter__switch_left,children:[(0,l.jsx)("input",{type:"checkbox",value:e.value,name:e.name,onChange:_,checked:t}),(0,l.jsx)("div",{className:p().switch,children:(0,l.jsx)("div",{className:p().switch_circle})})]}),(0,l.jsx)("div",{className:p().filter__switch_right,children:e.title})]})})},j=()=>{let[e,t]=(0,s.useState)(!0),i=(0,s.useRef)(null),r=()=>{t(!e),console.log(e)};return(0,l.jsx)("div",{className:a().filter,children:(0,l.jsxs)("div",{className:a().filter__in,children:[(0,l.jsx)("div",{className:a().filter__title,children:"Полный каталог новостроек Тюмени, с планировками ценами и самой полной информацией"}),(0,l.jsxs)("div",{className:a().filter__form,children:[(0,l.jsxs)("div",{className:a().filter__form_section,children:[(0,l.jsxs)("div",{className:a().filter__row,children:[(0,l.jsx)(c,{title:"Город",options:[{value:"moscow",label:"Москва"},{value:"spb",label:"Санкт-Петербург"},{value:"tula",label:"Тула"}]}),(0,l.jsx)(d,{value:"",type:"text",name:"place",title:"Местоположение",placeholder:"Введите район или ЖК"}),(0,l.jsx)(d,{value:"",type:"number",name:"payment",title:"Ваш комфортный платеж по ипотеке",placeholder:"Введите сумму платежа"}),(0,l.jsx)(f,{title:"Ваш комфортный платеж по ипотеке",options:[{value:"studio",label:"Студия"},{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"},{value:"4+",label:"4+"}]})]}),(0,l.jsxs)("div",{className:a().filter__row,children:[(0,l.jsx)(C,{title:"Стоимость, ₽",from_type:"number",from_name:"price_from",from_placeholder:"От",to_type:"number",to_name:"price_to",to_placeholder:"До"}),(0,l.jsx)(C,{title:"Площадь, м2",from_type:"number",from_name:"square_from",from_placeholder:"От",to_type:"number",to_name:"square_to",to_placeholder:"До"}),(0,l.jsx)(C,{title:"Этаж",from_type:"number",from_name:"level_from",from_placeholder:"От",to_type:"number",to_name:"level_to",to_placeholder:"До"}),(0,l.jsx)(C,{title:"Этажей в доме",from_type:"number",from_name:"levelness_from",from_placeholder:"От",to_type:"number",to_name:"levelness_to",to_placeholder:"До"})]}),(0,l.jsxs)("div",{className:a().filter__row,children:[(0,l.jsx)(C,{title:"Площадь кухни, м2",from_type:"number",from_name:"kitchen_square_from",from_placeholder:"От",to_type:"number",to_name:"kitchen_square_to",to_placeholder:"До"}),(0,l.jsx)(C,{title:"Стоимость, ₽",from_type:"number",from_name:"price_from",from_placeholder:"От",to_type:"number",to_name:"price_to",to_placeholder:"До"}),(0,l.jsx)(x,{title:"Многоуровневая",name:"multilevel",value:"multilevel",isChecked:!0}),(0,l.jsx)(x,{title:"Не первый",name:"not_first",value:"not_first",isChecked:!1}),(0,l.jsx)(x,{title:"Не последний",name:"not_last",value:"not_last",isChecked:!1})]})]}),(0,l.jsxs)("div",{className:a().filter__form_opener,onClick:r,children:[(0,l.jsxs)("div",{className:a().filter__form_opener_left,children:[(0,l.jsx)("div",{className:a().filter__form_opener_left_icon,children:(0,l.jsx)(o(),{src:"/opener_left_icon.svg",width:13,height:14,alt:""})}),(0,l.jsx)("div",{className:a().filter__form_opener_left_text,children:"Материалы и отделка"})]}),(0,l.jsx)("div",{className:a().filter__form_opener_middle}),(0,l.jsx)("div",{className:a().filter__form_opener_right,children:(0,l.jsx)(o(),{src:"/opener_right_arrow.svg",width:8,height:4,alt:""})})]}),(0,l.jsx)("div",{className:"".concat(a().filter__form_section," ").concat(e?"":a().filter__form_section_closed),children:(0,l.jsxs)("div",{className:a().filter__columns,children:[(0,l.jsxs)("div",{className:a().filter__column,children:[(0,l.jsx)(x,{title:"Кухня-гостинная",name:"has_kitchen",value:"has_kitchen",isChecked:!1,className:a().filter__switch_mb}),(0,l.jsx)(x,{title:"Витражные окна",name:"vitrage_windows",value:"vitrage_windows",isChecked:!1,className:a().filter__switch_mb}),(0,l.jsx)(x,{title:"Видеонаблюдение",name:"video",value:"video",isChecked:!1,className:a().filter__switch_mb})]}),(0,l.jsxs)("div",{className:a().filter__column,children:[(0,l.jsx)(x,{title:"Без обременения банка",name:"without_bank",value:"without_bank",isChecked:!1,className:a().filter__switch_mb}),(0,l.jsx)(x,{title:"Без несовершеннолетних собственников",name:"without_teenagers",value:"without_teenagers",isChecked:!1,className:a().filter__switch_mb}),(0,l.jsx)(x,{title:"Хайфлет",name:"highflet",value:"highflet",isChecked:!1,className:a().filter__switch_mb})]}),(0,l.jsxs)("div",{className:a().filter__column,children:[(0,l.jsx)(x,{title:"Паркинг",name:"has_parking",value:"has_parking",isChecked:!1,className:a().filter__switch_mb}),(0,l.jsx)(x,{title:"Закрытая территория",name:"closed_territory",value:"closed_territory",isChecked:!1,className:a().filter__switch_mb}),(0,l.jsx)(x,{title:"Рядом школа",name:"school_around",value:"school_around",isChecked:!1,className:a().filter__switch_mb})]})]})}),(0,l.jsx)(_.Z,{nodeRef:i,in:e,timeout:200,classNames:"my-node",children:(0,l.jsx)("div",{ref:i,children:"I'll receive my-node-* classes"})})]})]})})};var g=j},4686:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return b}});var l=i(9268),s=i(6006),_=i(2321),r=i.n(_),a=i(6749),n=i(2601),o=i.n(n);let c=()=>(0,l.jsx)("svg",{width:"21",height:"20",viewBox:"0 0 21 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M11.1011 16.8824L10.738 17.8141L11.1011 16.8824C10.6341 16.7004 10.1159 16.7004 9.64892 16.8824L4.7031 18.8094L5.00747 13.5102C5.0362 13.0098 4.87605 12.5169 4.55872 12.1291L1.19767 8.02079L6.33159 6.67271C6.81632 6.54543 7.23559 6.24081 7.50643 5.81914L10.375 1.35307L13.2436 5.81914C13.5144 6.24081 13.9337 6.54543 14.4184 6.67271L19.5523 8.02079L16.1913 12.1291C15.8739 12.5169 15.7138 13.0098 15.7425 13.5102L16.0469 18.8094L11.1011 16.8824Z",stroke:"white","stroke-width":"2"})}),d=()=>(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"164",height:"24",viewBox:"0 0 164 24",fill:"none",children:(0,l.jsx)("path",{d:"M9.9768 23.7447H0C4.33097 22.4681 7.84055 18.817 8.58727 14.2468C8.58727 13.6596 8.58727 13.0468 8.58727 12.4085V9.5234C9.58289 4.11064 13.9885 0 19.4894 24"})}),m=()=>(0,l.jsxs)("svg",{width:"13",height:"12",viewBox:"0 0 13 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("path",{d:"M1.97363 5.80908L1.97363 11.5591",stroke:"#D8B541","stroke-width":"2","stroke-linejoin":"bevel"}),(0,l.jsx)("path",{d:"M6.97363 4.30908L6.97363 11.5591",stroke:"#D8B541","stroke-width":"2","stroke-linejoin":"bevel"}),(0,l.jsx)("path",{d:"M11.9736 0.309082L11.9736 11.5591",stroke:"#D8B541","stroke-width":"2","stroke-linejoin":"bevel"})]}),h=()=>(0,l.jsxs)("svg",{width:"17",height:"20",viewBox:"0 0 17 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsxs)("g",{"clip-path":"url(#clip0_36_873)",children:[(0,l.jsx)("path",{d:"M8.50006 11.7266C6.45618 11.7266 4.79065 10.0625 4.79065 8.01172C4.79065 5.96094 6.45228 4.29688 8.50006 4.29688C10.5478 4.29688 12.2095 5.96094 12.2095 8.01172C12.2095 10.0625 10.5439 11.7266 8.50006 11.7266ZM8.50006 5.86328C7.3182 5.86328 6.35476 6.82812 6.35476 8.01172C6.35476 9.19531 7.3182 10.1602 8.50006 10.1602C9.68192 10.1602 10.6454 9.19531 10.6454 8.01172C10.6454 6.82812 9.68582 5.86328 8.50006 5.86328Z",fill:"#C4C4C4"}),(0,l.jsx)("path",{d:"M8.5 20L8.00853 19.6016C7.93442 19.5391 6.12847 18.0742 4.29912 15.9727C1.77938 13.0703 0.5 10.4688 0.5 8.23438V8.01172C0.5 3.59375 4.08849 0 8.5 0C12.9115 0 16.5 3.59375 16.5 8.01172V8.23438C16.5 10.4688 15.2206 13.0742 12.697 15.9727C10.8676 18.0742 9.06558 19.543 8.98757 19.6016L8.5 20ZM8.5 1.5625C4.95051 1.5625 2.06021 4.45703 2.06021 8.01172V8.23438C2.06021 12.0117 6.91638 16.582 8.5 17.9688C10.0797 16.582 14.9398 12.0117 14.9398 8.23438V8.01172C14.9398 4.45703 12.0495 1.5625 8.5 1.5625Z",fill:"#C4C4C4"})]}),(0,l.jsx)("defs",{children:(0,l.jsx)("clipPath",{id:"clip0_36_873",children:(0,l.jsx)("rect",{width:"16",height:"20",fill:"white",transform:"translate(0.5)"})})})]}),f=()=>(0,l.jsxs)("svg",{width:"15",height:"12",viewBox:"0 0 15 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsxs)("g",{"clip-path":"url(#clip0_36_855)",children:[(0,l.jsx)("path",{d:"M14.2402 2.45028V4.20944C14.2402 4.53928 14.0433 4.81808 13.7698 4.92017C13.6568 4.96337 13.5402 4.86912 13.5402 4.74347V1.91624C13.5402 1.78666 13.6568 1.69635 13.7698 1.73562C14.0433 1.84164 14.2402 2.12043 14.2402 2.45028Z",fill:"#9AA4AD"}),(0,l.jsx)("path",{d:"M4.14128 9.8246H2.60273C2.5043 9.8246 2.42773 9.74214 2.42773 9.63612V7.94764C2.42773 7.84162 2.5043 7.75916 2.60273 7.75916H4.05013C4.1668 7.75916 4.2543 7.88481 4.21784 8.00261C4.06471 8.5013 4.08659 9.05889 4.29805 9.55366C4.35274 9.68324 4.26888 9.8246 4.14128 9.8246Z",fill:"#9AA4AD"}),(0,l.jsx)("path",{d:"M8.33765 6.65575L7.94025 7.45679C7.90015 7.53925 7.79077 7.54711 7.73973 7.46857C7.5538 7.17407 7.30953 6.93454 6.87932 6.71072C6.7663 6.65182 6.8064 6.47119 6.93036 6.47119H8.23192C8.32307 6.47119 8.37775 6.57329 8.33765 6.65575Z",fill:"#9AA4AD"}),(0,l.jsx)("path",{d:"M12.3736 0.691101C12.2788 0.691101 12.2022 0.765708 12.1949 0.867803C12.184 0.97775 12.1621 1.0877 12.1256 1.19372C12.1111 1.23691 12.1475 1.13875 11.7683 2.14005C11.5897 2.61519 11.1631 2.92147 10.6892 2.92147H7.16731C7.08345 2.92147 7.00689 2.96859 6.96678 3.0432L6.57668 3.75786C6.36887 4.13875 5.98241 4.37827 5.57043 4.37827H4.2798C4.11939 4.37827 4.01001 4.54712 4.05741 4.71204C4.2798 5.44241 4.91782 5.96859 5.66887 5.96859H12.3736C12.76 5.96859 13.0736 5.63089 13.0736 5.21466V1.44503C13.0736 1.0288 12.76 0.691101 12.3736 0.691101ZM10.7439 3.70681H11.4986C11.6262 3.70681 11.7319 3.82068 11.7319 3.95812C11.7319 4.09555 11.6262 4.20943 11.4986 4.20943H10.7439C10.6163 4.20943 10.5105 4.09555 10.5105 3.95812C10.5105 3.82068 10.6163 3.70681 10.7439 3.70681ZM7.82356 3.70681H9.50064C9.62824 3.70681 9.73397 3.82068 9.73397 3.95812C9.73397 4.09555 9.62824 4.20943 9.50064 4.20943H7.82356C7.69595 4.20943 7.59022 4.09555 7.59022 3.95812C7.59022 3.82068 7.69595 3.70681 7.82356 3.70681Z",fill:"#9AA4AD"}),(0,l.jsx)("path",{d:"M1.96107 6.65969V11.2461C1.96107 11.6623 1.64753 12 1.26107 12H0.940234C0.553776 12 0.240234 11.6623 0.240234 11.2461V6.65969C0.240234 6.24346 0.553776 5.90576 0.940234 5.90576H1.26107C1.64753 5.90576 1.96107 6.24346 1.96107 6.65969Z",fill:"#9AA4AD"}),(0,l.jsx)("path",{d:"M6.10272 7.03665C5.26783 7.03665 4.58606 7.77095 4.58606 8.67016C4.58606 9.56938 5.26783 10.3037 6.10272 10.3037C6.93762 10.3037 7.61939 9.56938 7.61939 8.67016C7.61939 7.77095 6.93762 7.03665 6.10272 7.03665ZM6.10272 9.17278C5.84387 9.17278 5.63606 8.94896 5.63606 8.67016C5.63606 8.39136 5.84387 8.16754 6.10272 8.16754C6.36158 8.16754 6.56939 8.39136 6.56939 8.67016C6.56939 8.94896 6.36158 9.17278 6.10272 9.17278Z",fill:"#9AA4AD"}),(0,l.jsx)("path",{d:"M11.6808 1.03665L11.3381 1.94764C11.2287 2.23429 10.9771 2.41885 10.6891 2.41885H6.90108C6.81723 2.41885 6.74067 2.46597 6.70056 2.5445L6.17192 3.50654C6.04796 3.73429 5.81462 3.87958 5.57035 3.87958H4.00994C3.62348 3.87958 3.30994 3.54188 3.30994 3.12565V2.30497C3.30994 1.03272 4.26879 0 5.4464 0H11.0318C11.5276 0 11.8667 0.541885 11.6808 1.03665Z",fill:"#9AA4AD"})]}),(0,l.jsx)("defs",{children:(0,l.jsx)("clipPath",{id:"clip0_36_855",children:(0,l.jsx)("rect",{width:"14",height:"12",fill:"white",transform:"translate(0.240234)"})})})]}),C=()=>(0,l.jsxs)("svg",{width:"15",height:"13",viewBox:"0 0 15 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsxs)("g",{"clip-path":"url(#clip0_36_864)",children:[(0,l.jsx)("path",{d:"M5.78186 7.51111C5.78186 7.99139 5.39176 8.37778 4.90686 8.37778C4.42196 8.37778 4.03186 7.99139 4.03186 7.51111C4.03186 7.03083 4.42196 6.64444 4.90686 6.64444C5.39176 6.64444 5.78186 7.03083 5.78186 7.51111Z",fill:"#9AA4AD"}),(0,l.jsx)("path",{d:"M13.2376 6.045C13.3033 5.47806 13.3652 4.82806 13.3652 4.38389C13.3652 1.19167 9.61003 0 7.24023 0C5.70534 0 4.59336 0.816111 4.22148 1.13389C3.05482 1.19889 1.11523 1.93556 1.11523 4.38389C1.11523 4.83528 1.17721 5.48167 1.24284 6.045C0.652214 6.28333 0.240234 6.85028 0.240234 7.51111C0.240234 8.34528 0.896484 9.02417 1.72044 9.08917C2.51159 11.3606 4.6845 13 7.24023 13C9.79596 13 11.9689 11.3606 12.76 9.08917C13.584 9.02417 14.2402 8.34528 14.2402 7.51111C14.2402 6.85028 13.8283 6.28333 13.2376 6.045ZM12.009 8.56556C12.009 8.56917 12.009 8.56917 12.009 8.56556V8.56917C11.4111 10.6239 9.50065 12.1333 7.24023 12.1333C4.77565 12.1333 2.73034 10.3422 2.34388 8.00222L2.92721 5.98361C3.44857 5.82111 4.61159 5.35889 5.122 4.38028C5.90586 5.11333 7.66315 6.01611 11.5788 6.06306L12.1366 7.99861C12.1038 8.19 12.0637 8.38139 12.009 8.56556Z",fill:"#9AA4AD"}),(0,l.jsx)("path",{d:"M10.4486 7.51111C10.4486 7.99139 10.0585 8.37778 9.57361 8.37778C9.08871 8.37778 8.69861 7.99139 8.69861 7.51111C8.69861 7.03083 9.08871 6.64444 9.57361 6.64444C10.0585 6.64444 10.4486 7.03083 10.4486 7.51111Z",fill:"#9AA4AD"}),(0,l.jsx)("path",{d:"M8.39592 9.65611C7.7579 10.2664 6.72249 10.2664 6.08811 9.65611C5.91311 9.49 5.63603 9.49361 5.46832 9.66695C5.30061 9.84028 5.30426 10.1147 5.47926 10.2808C5.96415 10.7467 6.60217 10.9778 7.2402 10.9778C7.87822 10.9778 8.51624 10.7467 9.00113 10.2808C9.17613 10.1147 9.17978 9.84028 9.01207 9.66695C8.84436 9.49361 8.56728 9.49 8.39592 9.65611Z",fill:"#9AA4AD"})]}),(0,l.jsx)("defs",{children:(0,l.jsx)("clipPath",{id:"clip0_36_864",children:(0,l.jsx)("rect",{width:"14",height:"13",fill:"white",transform:"translate(0.240234)"})})})]}),u=()=>(0,l.jsxs)("svg",{width:"17",height:"12",viewBox:"0 0 17 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("path",{d:"M2.48223 0.0837402C2.32495 0.0837402 2.18136 0.14282 2.07195 0.247851C1.96254 0.352881 1.901 0.497299 1.901 0.641716V9.01135C1.901 9.31988 2.16084 9.56933 2.48223 9.56933C3.83614 9.56933 6.09949 9.84503 7.66538 11.4139V2.65699C7.66538 2.55196 7.63803 2.4535 7.58333 2.37472C6.31147 0.385704 3.84297 0.0837402 2.48223 0.0837402Z",fill:"#9AA4AD"}),(0,l.jsx)("path",{d:"M14.3392 9.01135V0.641716C14.3392 0.490734 14.2777 0.352881 14.1683 0.247851C14.0589 0.14282 13.9153 0.0837402 13.758 0.0837402C12.4041 0.0837402 9.93558 0.385704 8.65005 2.37472C8.59534 2.4535 8.56799 2.55196 8.56799 2.65699V11.4139C10.1339 9.84503 12.3972 9.56933 13.7511 9.56933C14.0794 9.56933 14.3392 9.31988 14.3392 9.01135Z",fill:"#9AA4AD"}),(0,l.jsx)("path",{d:"M15.6657 2.01367H15.2417V9.01135C15.2417 9.79251 14.5784 10.4358 13.7579 10.4358C12.6091 10.4358 10.715 10.6525 9.37476 11.8734C11.6928 11.3286 14.134 11.6831 15.5289 11.985C15.6999 12.0244 15.8845 11.985 16.0212 11.88C16.158 11.775 16.24 11.6174 16.24 11.4467V2.57165C16.2469 2.26312 15.987 2.01367 15.6657 2.01367Z",fill:"#9AA4AD"}),(0,l.jsx)("path",{d:"M1.00518 9.01134V2.01367H0.581225C0.259842 2.01367 0 2.26312 0 2.57165V11.4402C0 11.6108 0.0820552 11.7684 0.218814 11.8734C0.355573 11.9785 0.540197 12.0178 0.711145 11.9785C2.10608 11.6765 4.54723 11.322 6.86529 11.8669C5.52505 10.6459 3.63094 10.4358 2.48217 10.4293C1.66846 10.4358 1.00518 9.79251 1.00518 9.01134Z",fill:"#9AA4AD"})]}),p=()=>(0,l.jsxs)("svg",{width:"14",height:"13",viewBox:"0 0 14 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("g",{"clip-path":"url(#clip0_36_839)",children:(0,l.jsx)("path",{d:"M0.655349 2.54551C0.427036 2.54551 0.240234 2.33533 0.240234 2.07844V0.467066C0.240234 0.21018 0.427036 0 0.655349 0H5.90655C6.13486 0 6.32166 0.21018 6.32166 0.467066V2.07844C6.32166 2.33533 6.13486 2.54551 5.90655 2.54551H0.655349ZM12.8182 2.54551C13.0465 2.54551 13.2333 2.33533 13.2333 2.07844V0.467066C13.2333 0.21018 13.0465 0 12.8182 0H7.567C7.33869 0 7.15189 0.21018 7.15189 0.467066V2.07844C7.15189 2.33533 7.33869 2.54551 7.567 2.54551H12.8182ZM9.36583 6.03293C9.59414 6.03293 9.78095 5.82275 9.78095 5.56587V3.94671C9.78095 3.68982 9.59414 3.47964 9.36583 3.47964H4.11464C3.88632 3.47964 3.69952 3.68982 3.69952 3.94671V5.55808C3.69952 5.81497 3.88632 6.02515 4.11464 6.02515L9.36583 6.03293ZM2.45418 6.03293C2.68249 6.03293 2.86929 5.82275 2.86929 5.56587V3.94671C2.86929 3.68982 2.68249 3.47964 2.45418 3.47964H0.683023C0.45471 3.47964 0.267909 3.68982 0.267909 3.94671V5.55808C0.267909 5.81497 0.45471 6.02515 0.683023 6.02515L2.45418 6.03293ZM12.7905 6.03293C13.0188 6.03293 13.2056 5.82275 13.2056 5.56587V3.94671C13.2056 3.68982 13.0188 3.47964 12.7905 3.47964H11.0263C10.798 3.47964 10.6112 3.68982 10.6112 3.94671V5.55808C10.6112 5.81497 10.798 6.02515 11.0263 6.02515L12.7905 6.03293ZM5.90655 9.51258C6.13486 9.51258 6.32166 9.30239 6.32166 9.04551V7.43413C6.32166 7.17725 6.13486 6.96707 5.90655 6.96707H0.655349C0.427036 6.96707 0.240234 7.17725 0.240234 7.43413V9.04551C0.240234 9.30239 0.427036 9.51258 0.655349 9.51258H5.90655ZM12.8182 9.51258C13.0465 9.51258 13.2333 9.30239 13.2333 9.04551V7.43413C13.2333 7.17725 13.0465 6.96707 12.8182 6.96707H7.567C7.33869 6.96707 7.15189 7.17725 7.15189 7.43413V9.04551C7.15189 9.30239 7.33869 9.51258 7.567 9.51258H12.8182ZM9.36583 12.9922C9.59414 12.9922 9.78095 12.782 9.78095 12.5251V10.9138C9.78095 10.6569 9.59414 10.4467 9.36583 10.4467H4.11464C3.88632 10.4467 3.69952 10.6569 3.69952 10.9138V12.5251C3.69952 12.782 3.88632 12.9922 4.11464 12.9922H9.36583ZM2.45418 12.9922C2.68249 12.9922 2.86929 12.782 2.86929 12.5251V10.9138C2.86929 10.6569 2.68249 10.4467 2.45418 10.4467H0.683023C0.45471 10.4467 0.267909 10.6569 0.267909 10.9138V12.5251C0.267909 12.782 0.45471 12.9922 0.683023 12.9922H2.45418ZM12.7905 12.9922C13.0188 12.9922 13.2056 12.782 13.2056 12.5251V10.9138C13.2056 10.6569 13.0188 10.4467 12.7905 10.4467H11.0263C10.798 10.4467 10.6112 10.6569 10.6112 10.9138V12.5251C10.6112 12.782 10.798 12.9922 11.0263 12.9922H12.7905Z",fill:"#9AA4AD"})}),(0,l.jsx)("defs",{children:(0,l.jsx)("clipPath",{id:"clip0_36_839",children:(0,l.jsx)("rect",{width:"13",height:"13",fill:"white",transform:"translate(0.240234)"})})})]}),x=()=>(0,l.jsxs)("svg",{width:"14",height:"13",viewBox:"0 0 14 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsxs)("g",{"clip-path":"url(#clip0_36_843)",children:[(0,l.jsx)("path",{d:"M6.75039 0C8.23828 0 9.72617 0 11.2191 0C12.4328 0 13.2402 0.807422 13.2402 2.02109C13.2402 5.00703 13.2402 7.99297 13.2402 10.9789C13.2402 12.1926 12.4379 13 11.2242 13C8.23828 13 5.25234 13 2.26641 13C1.04766 13 0.240234 12.1977 0.240234 10.9789C0.240234 7.99297 0.240234 5.00703 0.240234 2.02109C0.240234 0.807422 1.04766 0 2.26133 0C3.75937 0 5.25234 0 6.75039 0ZM5.94805 7.28711C6.075 7.28711 6.16641 7.28711 6.25273 7.28711C6.73516 7.28203 7.21758 7.29727 7.7 7.27187C8.37031 7.23633 8.91875 6.93164 9.325 6.39844C9.87852 5.66719 9.975 4.85977 9.58398 4.03203C9.17266 3.16367 8.45156 2.73711 7.4918 2.72187C6.65391 2.71172 5.81602 2.7168 4.97813 2.7168C4.52617 2.7168 4.42969 2.81836 4.42969 3.27539C4.42969 4.54492 4.42969 5.81445 4.42969 7.08398C4.42969 7.95742 4.42969 8.82578 4.42969 9.69922C4.42969 10.2629 4.50586 10.334 5.0543 10.334C5.16602 10.334 5.27266 10.334 5.38438 10.334C5.85156 10.334 5.94805 10.2375 5.94805 9.77031C5.94805 8.95273 5.94805 8.14023 5.94805 7.28711Z",fill:"#9AA4AD"}),(0,l.jsx)("path",{d:"M5.96326 5.74336C5.96326 5.23555 5.96326 4.7582 5.96326 4.2707C6.56248 4.2707 7.15154 4.24024 7.73552 4.28086C8.07068 4.30625 8.30427 4.68203 8.28904 5.02734C8.27381 5.37774 8.02498 5.71289 7.67966 5.7332C7.11091 5.76875 6.54724 5.74336 5.96326 5.74336Z",fill:"#9AA4AD"})]}),(0,l.jsx)("defs",{children:(0,l.jsx)("clipPath",{id:"clip0_36_843",children:(0,l.jsx)("rect",{width:"13",height:"13",fill:"white",transform:"translate(0.240234)"})})})]}),j=()=>(0,l.jsxs)("svg",{width:"16",height:"14",viewBox:"0 0 16 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsxs)("g",{"clip-path":"url(#clip0_36_827)",children:[(0,l.jsx)("path",{d:"M2.82094 13.5661V3.93195C2.42927 4.20699 1.93761 4.36969 1.41261 4.36969C0.883439 4.36969 0.395939 4.20699 0.00427246 3.93195V13.5661C0.00427246 13.8063 0.212606 14.0039 0.475106 14.0039H2.35844C2.61261 14 2.82094 13.8063 2.82094 13.5661Z",fill:"#9AA4AD"}),(0,l.jsx)("path",{d:"M2.82083 2.18484C2.82083 2.90925 2.1875 3.49419 1.4125 3.49419C0.633333 3.49807 0 2.90925 0 2.18484C0 1.46044 0.633333 0.875488 1.40833 0.875488C2.1875 0.875488 2.82083 1.46044 2.82083 2.18484Z",fill:"#9AA4AD"}),(0,l.jsx)("path",{d:"M14.5917 4.36969C14.0625 4.36969 13.575 4.20699 13.1833 3.93195V13.5661C13.1833 13.8063 13.3917 14.0039 13.6542 14.0039H15.5375C15.7959 14.0039 16.0084 13.8102 16.0084 13.5661V3.93195C15.6084 4.20699 15.1167 4.36969 14.5917 4.36969Z",fill:"#9AA4AD"}),(0,l.jsx)("path",{d:"M16 2.18484C16 2.90925 15.3667 3.49419 14.5917 3.49419C13.8125 3.49419 13.1833 2.90537 13.1833 2.18484C13.1833 1.46044 13.8167 0.875488 14.5917 0.875488C15.3667 0.875488 16 1.46044 16 2.18484Z",fill:"#9AA4AD"}),(0,l.jsx)("path",{d:"M12.2332 1.82845C12.2332 1.58827 12.0248 1.3907 11.7623 1.3907C11.504 1.3907 11.2915 1.58439 11.2915 1.82845V1.95241C11.2207 1.9098 11.154 1.86718 11.0832 1.82457C10.854 1.68511 10.6165 1.53791 10.3457 1.40232V0.794134C10.3457 0.553957 10.1373 0.356392 9.87482 0.356392C9.61649 0.356392 9.40399 0.550083 9.40399 0.794134V1.04593C9.12482 0.97233 8.81232 0.918096 8.45815 0.894853V0.437742C8.46649 0.193691 8.25815 0 7.99982 0C7.74149 0 7.52899 0.193691 7.52899 0.437742V0.89098C7.17482 0.918096 6.86232 0.968456 6.58315 1.04206V0.79026C6.58315 0.550083 6.37482 0.352518 6.11232 0.352518C5.85399 0.352518 5.64149 0.546209 5.64149 0.79026V1.39845C5.37482 1.53403 5.13315 1.68124 4.90399 1.8207C4.83315 1.86331 4.76232 1.90592 4.69565 1.94853V1.82457C4.69565 1.58439 4.48732 1.38683 4.22482 1.38683C3.96232 1.38683 3.75399 1.58052 3.75399 1.82457V13.5584C3.75399 13.7133 3.72482 13.8605 3.67065 13.9961H12.304C12.254 13.8605 12.2248 13.7133 12.2248 13.5584V1.82845H12.2332ZM11.2957 13.1284H10.3498V12.249H11.2957V13.1284ZM9.41232 11.3774H8.46649V8.7471H9.41232V11.3774ZM9.41232 7.87548H8.46649V3.51743C8.83315 3.54842 9.14149 3.61428 9.41232 3.70725V7.87548ZM7.53315 7.87548H6.58732V3.70725C6.85815 3.61428 7.16649 3.54842 7.53315 3.51743V7.87548ZM6.58732 8.7471H7.53315V11.3774H6.58732V8.7471ZM7.53315 12.249V13.1284H6.58732V12.249H7.53315ZM8.46649 12.249H9.41232V13.1284H8.46649V12.249ZM11.2957 11.3774H10.3498V4.16823C10.4207 4.21085 10.4957 4.25733 10.5665 4.29994C10.7915 4.4394 11.029 4.58661 11.2957 4.71832V11.3774ZM10.5707 2.54898C10.7957 2.68843 11.0332 2.83564 11.2998 2.96735V3.6995C11.229 3.65689 11.1623 3.61428 11.0915 3.57167C10.8623 3.43221 10.6248 3.285 10.354 3.14942V2.41339C10.4248 2.45988 10.4957 2.50636 10.5707 2.54898ZM9.41232 1.95628V2.79303C9.13315 2.71942 8.82065 2.66519 8.46649 2.64195V1.76646C8.83732 1.79745 9.14149 1.86331 9.41232 1.95628ZM7.53315 1.76646V2.64195C7.17899 2.66906 6.86649 2.71942 6.58732 2.79303V1.95628C6.85815 1.86331 7.16232 1.79745 7.53315 1.76646ZM4.70399 2.96735C4.97065 2.83177 5.20399 2.68843 5.43315 2.54898C5.50815 2.50249 5.57899 2.45988 5.64982 2.41727V3.15329C5.38315 3.28888 5.14149 3.43608 4.91232 3.57554C4.84149 3.61815 4.77065 3.66076 4.70399 3.70338V2.96735ZM4.70399 4.71832C4.97065 4.58273 5.20399 4.4394 5.43315 4.29994C5.50815 4.25346 5.57899 4.21085 5.64982 4.16823V11.3774H4.70399V4.71832ZM4.70399 12.249H5.64982V13.1284H4.70399V12.249Z",fill:"#9AA4AD"})]}),(0,l.jsx)("defs",{children:(0,l.jsx)("clipPath",{id:"clip0_36_827",children:(0,l.jsx)("rect",{width:"16",height:"14",fill:"white"})})})]});function g(e){let t=new Date(e),i=t.getDate();i<10&&(i="0"+i);let l=t.getMonth()+1;l<10&&(l="0"+l);let s=t.getFullYear();return"".concat(i,".").concat(l,".").concat(s)}let v=e=>{var t;let i="https://files.citidom.com/".concat(null===(t=e.item.photos[0])||void 0===t?void 0:t.name);return i||(i="https://i.ibb.co/xqjdTP8/754678181959064.jpg"),(0,l.jsx)("div",{className:o().item,children:(0,l.jsxs)("div",{className:o().item__in,children:[(0,l.jsxs)("div",{className:o().item__uploaded,children:["Внесён ",g(new Date(e.item.createdAt))]}),(0,l.jsx)("img",{className:o().item__img,src:i,alt:""}),(0,l.jsx)("div",{className:o().item__star,children:(0,l.jsx)(c,{})}),(0,l.jsxs)("div",{className:o().item__someinfo,children:[(0,l.jsx)("div",{className:o().item__someleter,children:"C"}),(0,l.jsx)("div",{className:o().item__somenumber,children:"6,6"})]}),(0,l.jsxs)("div",{className:o().item__cost,children:[(0,l.jsx)("div",{className:o().item__angleLeft,children:(0,l.jsx)(d,{})}),(0,l.jsx)("div",{className:o().item__angleRight,children:(0,l.jsx)(d,{})}),"от ",e.item.minFlatPrice," ₽ \xa0",(0,l.jsx)(m,{})]}),(0,l.jsxs)("div",{className:o().item__row,children:[(0,l.jsxs)("div",{className:o().item__updated,children:["Обновлен: ",g(new Date(e.item.updatedAt))]}),(0,l.jsxs)("div",{className:o().item__flatscount,children:[e.item.flatsCount," ",e.item.flatsCount%100<20&&e.item.flatsCount%100>10?" квартир":e.item.flatsCount%10==1?" квартира":e.item.flatsCount%10<5&&e.item.flatsCount%10>0?" квартиры":" квартир"]})]}),(0,l.jsxs)("div",{className:o().item__address,children:[(0,l.jsx)(h,{})," Адрес"]}),(0,l.jsxs)("div",{className:o().item__row,children:[(0,l.jsxs)("div",{className:o().item__icons,children:[e.item.isProtectedArea&&(0,l.jsx)(j,{}),e.item.hasBesideSchool&&(0,l.jsx)(u,{}),e.item.isClosedArea&&(0,l.jsx)(p,{}),(e.item.hasGroundParking||e.item.hasUndergroundParking||e.item.hasBesidePark)&&(0,l.jsx)(x,{}),e.item.hasCctv&&(0,l.jsx)(f,{}),e.item.hasBesidePreSchool&&(0,l.jsx)(C,{})]}),(0,l.jsx)("div",{className:o().item__quarter,children:e.item.endConstruction})]})]})})};async function w(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{page:1,limit:6},t=await fetch("https://tyumen.citidom.com/housing-estate?page=".concat(e.page,"&limit=").concat(e.limit));return await t.json()}async function N(){let e=await fetch("https://tyumen.citidom.com/housing-estate/map");return await e.json()}let V=()=>{var e;let[t,i]=(0,s.useState)([]),[_,n]=(0,s.useState)({state:!1}),[o,c]=(0,s.useState)({page:1,last:10}),[d,m]=(0,s.useState)(0);return console.log(o),(0,s.useEffect)(()=>{w().then(e=>{e.items.forEach(e=>{e.endConstruction=e.endConstruction.trim();let t=new RegExp(/(1|2|3|4) кв\. \d\d\d\d$/g);t.test(e.endConstruction)?(e.endConstruction=e.endConstruction.match(t)[0],e.endConstruction=e.endConstruction.replace("1 ","I ").replace("2 ","II ").replace("3 ","III ").replace("4 ","IV ")):e.endConstruction="-"}),i(e.items),m(e.count)}),N().then(e=>{let t=[0,0];e.forEach(e=>{t[0]+=parseFloat(e.latitude),t[1]+=parseFloat(e.longitude)}),t[0]/=e.length,t[1]/=e.length,n({state:!0,center:t,zoom:9,items:e.map(e=>({geometry:[parseFloat(e.latitude),parseFloat(e.longitude)],properties:{hintContent:e.title,hintLayout:e.title},options:{preset:"islands#greenCircleDotIcon",hintOpenTimeout:100,hintCloseTimeout:1},id:e.id}))})})},[]),(0,l.jsx)("div",{className:r().results,children:(0,l.jsxs)("div",{className:r().results__in,children:[(0,l.jsxs)("div",{className:r().results__header,children:[(0,l.jsx)("div",{className:r().results__title,children:"Продажа новостроек в Тюмени"}),(0,l.jsx)("div",{className:r().results__select}),(0,l.jsxs)("div",{className:r().results__lighttext,children:["Найдено ",d,d%100<20&&d%100>10?" предложений":d%10==1?" предложение":d%10<5&&d%10>0?" предложения":" предложений"]}),(0,l.jsx)("div",{className:r().results__subtitle,children:"Услуги компании бесплатны"})]}),(0,l.jsxs)("div",{className:r().results__content,children:[(0,l.jsx)("div",{className:r().results__box,children:t.length>0&&t.map(e=>(0,l.jsx)(v,{item:e},e.id))}),_.state&&(0,l.jsx)(a.Yy,{children:(0,l.jsx)(a.D5,{width:"100%",className:r().results__map,defaultState:{center:_.center,zoom:_.zoom},children:(0,l.jsx)(a.LA,{options:{preset:"islands#greenClusterIcons",groupByCoordinates:!1},children:null===(e=_.items)||void 0===e?void 0:e.map(e=>(0,l.jsx)(a.ah,{modules:["geoObject.addon.hint"],geometry:e.geometry,properties:e.properties,options:e.options},e.id))})})})]}),(0,l.jsxs)("div",{className:r().results__pagination,children:[(0,l.jsx)("div",{className:r().results__pagination_item,children:"первая"}),function(e,t,i){console.log(t);let s=[],_=!1,a=!1;for(let n=0;n<e.last;n++){if(n<e.page-2){_||(s.push((0,l.jsx)("div",{id:"page-1",className:r().results__pagination_item,children:"..."})),_=!0);continue}if(n>e.page+2){a||(s.push((0,l.jsx)("div",{id:"page-".concat(e.last),className:r().results__pagination_item,children:"..."})),a=!0);continue}s.push((0,l.jsx)("div",{onClick:e=>{A(e,t,i)},id:"page-".concat(n+1),className:"".concat(r().results__pagination_item).concat(e.page==n+1?" "+r().results__pagination_primary:""),children:n+1}))}return s}(o,i,c),(0,l.jsx)("div",{className:r().results__pagination_item,children:"последняя"})]})]})})};async function A(e,t,i){let l=e.target.id.split("-")[1],s=await w({page:l,limit:6});s.items.forEach(e=>{e.endConstruction=e.endConstruction.trim();let t=new RegExp(/(1|2|3|4) кв\. \d\d\d\d$/g);t.test(e.endConstruction)?(e.endConstruction=e.endConstruction.match(t)[0],e.endConstruction=e.endConstruction.replace("1 ","I ").replace("2 ","II ").replace("3 ","III ").replace("4 ","IV ")):e.endConstruction="-"}),t(s.items),i({page:l,last:s.pagination.end})}var b=V},8477:function(e){e.exports={radio_group:"radio_group_radio_group__5w_Q_",radio_group__label:"radio_group_radio_group__label__iG7Gq",radio_group_item:"radio_group_radio_group_item__SIX11"}},4762:function(e){e.exports={filter__switch:"switch_filter__switch__3U0eF",filter__switch_left:"switch_filter__switch_left__QGlQ5",filter__switch_right:"switch_filter__switch_right__TtcSL",switch:"switch_switch__J8N75",switch_circle:"switch_switch_circle__zi1uW"}},163:function(e){e.exports={filter:"filter_filter__Pl6o7",filter__in:"filter_filter__in__G_Svb",filter__title:"filter_filter__title___aGRB",filter__form_section:"filter_filter__form_section__smlkY",filter__row:"filter_filter__row__WDFeS",filter__field:"filter_filter__field__MWQl_",filter__field_row:"filter_filter__field_row__ZTh_I",filter__flexed:"filter_filter__flexed__BV6fI",filter__field_title:"filter_filter__field_title__s1BCB",filter__field_item:"filter_filter__field_item__WtLuC",filter__form:"filter_filter__form__CVgzm",filter__form_opener:"filter_filter__form_opener__mXd_c",filter__form_opener_left:"filter_filter__form_opener_left__0A1P7",filter__form_opener_left_icon:"filter_filter__form_opener_left_icon__W1Z_F",filter__form_opener_left_text:"filter_filter__form_opener_left_text__YSqDy",filter__form_opener_middle:"filter_filter__form_opener_middle__ruqIl",filter__form_opener_right:"filter_filter__form_opener_right__mP8E_",filter__columns:"filter_filter__columns__sVYSn",filter__column:"filter_filter__column__o6gr2",filter__switch_mb:"filter_filter__switch_mb__tzuqv",filter__form_section_closed:"filter_filter__form_section_closed__RZKcu"}},2601:function(e){e.exports={item:"item_item__V8DuN",item__img:"item_item__img__xxwjc",item__uploaded:"item_item__uploaded__9V2XT",item__star:"item_item__star__6zVqV",item__someinfo:"item_item__someinfo__Wrfp1",item__someleter:"item_item__someleter__XMmI2",item__somenumber:"item_item__somenumber__60YuS",item__cost:"item_item__cost___p9Na",item__angleLeft:"item_item__angleLeft__ygKXa",item__angleRight:"item_item__angleRight__NoCHZ",item__row:"item_item__row__nekDV",item__updated:"item_item__updated__uRGnM",item__flatscount:"item_item__flatscount__tqQAK",item__address:"item_item__address__PgXrA",item__quarter:"item_item__quarter__9Yjkx",item__icons:"item_item__icons__fCPUM"}},2321:function(e){e.exports={results:"results_results__thbIj",results__content:"results_results__content__ae4Hb",results__box:"results_results__box__nE7rP",results__result:"results_results__result__o9q91",results__map:"results_results__map__N4y_c",results__title:"results_results__title__Ns4Xv",results__lighttext:"results_results__lighttext__he2_T",results__subtitle:"results_results__subtitle__ujq9s",results__pagination:"results_results__pagination__1_zQz",results__pagination_item:"results_results__pagination_item__8OLo7",results__pagination_primary:"results_results__pagination_primary__N_qfm"}},4817:function(e){e.exports={wrapper:"page_wrapper__jrOaf",center:"page_center__GvJ9Y",main:"page_main__ibFHK",content:"page_content__rFejU"}}},function(e){e.O(0,[656,398,667,139,744],function(){return e(e.s=7473)}),_N_E=e.O()}]);
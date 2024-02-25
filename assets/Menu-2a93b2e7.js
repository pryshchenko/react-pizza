import{r,j as s,c as p,u as x,L as j,a as f,b as v,P as N,A as w,H as y}from"./index-3d23c2dc.js";const q="_input_11wgu_1",k="_icon_11wgu_35",o={input:q,"input-wrapper":"_input-wrapper_11wgu_27",icon:k},F=r.forwardRef(function({isValid:t=!0,className:a,...n},d){return s.jsxs("div",{className:o["input-wrapper"],children:[s.jsx("input",{ref:d,className:p(o.input,a,{[o.invalid]:t}),...n}),s.jsx("img",{className:o.icon,src:"/search-icon.svg",alt:"Иконка лупы"})]})}),$="_head_3skuk_1",E={head:$},L="_head_qg0dc_1",S="_card_qg0dc_13",b="_footer_qg0dc_27",I="_title_qg0dc_35",P="_description_qg0dc_51",A="_link_qg0dc_67",C="_price_qg0dc_75",M="_currency_qg0dc_103",R="_rating_qg0dc_111",c={head:L,card:S,footer:b,title:I,description:P,link:A,price:C,currency:M,rating:R,"add-to-cart":"_add-to-cart_qg0dc_141"};function z(e){const t=x(),a=n=>{n.preventDefault(),t(f.add(e.id))};return s.jsx(j,{to:`/react-pizza/product/${e.id}`,className:c.link,children:s.jsxs("div",{className:c.card,children:[s.jsxs("div",{className:c.head,style:{backgroundImage:`url('${e.image}')`},children:[s.jsxs("div",{className:c.price,children:[e.price," ",s.jsx("span",{className:c.currency,children:"₽"})]}),s.jsx("button",{className:c["add-to-cart"],onClick:a,children:s.jsx("img",{src:"/cart-button-icon.svg",alt:"Добавить в корзину"})}),s.jsxs("div",{className:c.rating,children:[e.rating," ",s.jsx("img",{src:"/star-icon.svg",alt:"Иконка звезды"})]})]}),s.jsxs("div",{className:c.footer,children:[s.jsx("div",{className:c.title,children:e.name}),s.jsx("div",{className:c.description,children:e.description})]})]})})}const D="_wrapper_1mdrh_1",H={wrapper:D};function X({products:e}){return s.jsx("div",{className:H.wrapper,children:e.map(t=>s.jsx(z,{id:t.id,name:t.name,description:t.ingredients.join(", "),rating:t.rating,price:t.price,image:t.image},t.id))})}function G(){const[e,t]=r.useState([]),[a,n]=r.useState(!1),[d,g]=r.useState(),[u,_]=r.useState();r.useEffect(()=>{h(u)},[u]);const h=async l=>{try{n(!0);const{data:i}=await v.get(`${N}/products`,{params:{name:l}});t(i),n(!1)}catch(i){console.error(i),i instanceof w&&g(i.message),n(!1);return}},m=l=>{_(l.target.value)};return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:E.head,children:[s.jsx(y,{children:"Меню"}),s.jsx(F,{placeholder:"Введите блюдо или состав",onChange:m})]}),s.jsxs("div",{children:[d&&s.jsx(s.Fragment,{children:d}),!a&&e.length>0&&s.jsx(X,{products:e}),a&&s.jsx(s.Fragment,{children:"Загружаем продукты..."}),!a&&e.length===0&&s.jsx(s.Fragment,{children:"Не найдено блюд по запросу"})]})]})}export{G as Menu,G as default};

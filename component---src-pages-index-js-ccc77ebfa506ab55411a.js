(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{159:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(1),s=a.n(i),o=a(167),l=a(164),c=a(183),d=a(160),u=a(184),f=a.n(u),p=function(){return r.a.createElement(d.b,{query:"1987049516",render:function(e){return r.a.createElement(f.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:c})},h=a(77),g=function(e){var t=e.count,a=e.increment;return r.a.createElement("div",null,r.a.createElement("p",null,"Count: ",t),r.a.createElement("button",{onClick:a},"Increment"))};g.propTypes={count:s.a.number.isRequired,increment:s.a.func.isRequired};var m=Object(h.b)(function(e){return{count:e.count}},function(e){return{increment:function(){return e({type:"INCREMENT"})}}})(g);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(l.a,null,r.a.createElement("div",{style:{maxWidth:"300px",margin:"5rem auto 0"}},r.a.createElement(p,null)),r.a.createElement(m,null)))}},160:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),i=a(1),s=a.n(i),o=a(36),l=a.n(o);a.d(t,"a",function(){return l.a});a(163);var c=r.a.createContext({}),d=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},163:function(e,t,a){var n;e.exports=(n=a(165))&&n.default||n},164:function(e,t,a){"use strict";var n=a(161),r=a.n(n),i=a(0),s=a.n(i);function o(){var e=r()(["\n  max-width: 1400px;\n  margin: 0 auto;\n"]);return o=function(){return e},e}var l=a(162).a.div(o());t.a=function(e){var t=e.children;return s.a.createElement(l,null,t)}},165:function(e,t,a){"use strict";a.r(t);a(25);var n=a(0),r=a.n(n),i=a(1),s=a.n(i),o=a(60),l=a(3),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},166:function(e){e.exports={data:{site:{siteMetadata:{title:"Site Name"}}}}},167:function(e,t,a){"use strict";var n=a(161),r=a.n(n),i=a(166),s=a(0),o=a.n(s),l=a(1),c=a.n(l),d=a(168),u=a.n(d),f=a(160),p=a(162),h=a(8),g=a.n(h),m=a(164);function b(){var e=r()(["\n  display: inline-block;\n  margin: 0;\n"]);return b=function(){return e},e}function y(){var e=r()(["\n  justify-content: flex-end;\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n  margin: 0;\n  list-style: none;\n"]);return y=function(){return e},e}function v(){var e=r()(["\n  margin: 0;\n  font-size: 1.8em;\n  line-height: 1em;\n\n  a {\n    color: #2b2b2b;\n\n    &:hover {\n      text-decoration: none;\n    }\n  }\n"]);return v=function(){return e},e}function E(){var e=r()(["\n  display: flex;\n  align-items: center;\n"]);return E=function(){return e},e}function S(){var e=r()(["\n  z-index: 99;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 10px 20px;\n  background-color: white;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);\n"]);return S=function(){return e},e}var w=p.a.header(S()),R=p.a.nav(E()),L=p.a.h1(v()),x=p.a.ul(y()),I=p.a.li(b()),z=function(e){function t(){return e.apply(this,arguments)||this}g()(t,e);var a=t.prototype;return a.componentDidMount=function(){document.documentElement.style.paddingTop=this.refs.header.clientHeight+"px"},a.render=function(){return o.a.createElement(w,{ref:"header"},o.a.createElement(m.a,null,o.a.createElement(R,null,o.a.createElement(L,null,o.a.createElement(f.a,{to:"/"},this.props.siteTitle)),o.a.createElement(x,null,o.a.createElement(I,null,o.a.createElement(f.a,{to:"/posts"},"Posts"))))))},t}(o.a.Component);a(169);function A(){var e=r()(["\n  padding: 20px;\n"]);return A=function(){return e},e}var q=p.a.div(A()),O=function(e){var t=e.children;return o.a.createElement(f.b,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:""},{name:"keywords",content:""}]},o.a.createElement("html",{lang:"en"})),o.a.createElement(z,{siteTitle:e.site.siteMetadata.title}),o.a.createElement(q,null,t))},data:i})};O.propTypes={children:c.a.node.isRequired};t.a=O},183:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/gulp-boilerplate/static/6d91c86c0fde632ba4cd01062fd9ccfa/4465b/gatsby-astronaut.png",srcSet:"/gulp-boilerplate/static/6d91c86c0fde632ba4cd01062fd9ccfa/48d69/gatsby-astronaut.png 75w,\n/gulp-boilerplate/static/6d91c86c0fde632ba4cd01062fd9ccfa/500db/gatsby-astronaut.png 150w,\n/gulp-boilerplate/static/6d91c86c0fde632ba4cd01062fd9ccfa/4465b/gatsby-astronaut.png 300w,\n/gulp-boilerplate/static/6d91c86c0fde632ba4cd01062fd9ccfa/1b440/gatsby-astronaut.png 450w,\n/gulp-boilerplate/static/6d91c86c0fde632ba4cd01062fd9ccfa/8d7dc/gatsby-astronaut.png 600w,\n/gulp-boilerplate/static/6d91c86c0fde632ba4cd01062fd9ccfa/44689/gatsby-astronaut.png 800w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},184:function(e,t,a){"use strict";var n=a(9);t.__esModule=!0,t.default=void 0;var r,i=n(a(8)),s=n(a(37)),o=n(a(83)),l=n(a(61)),c=n(a(0)),d=n(a(1)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},h=new WeakMap;var g=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(h.has(e.target)){var t=h.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),h.delete(e.target),t())}})},{rootMargin:"200px"})),r);return a&&(a.observe(e),h.set(e,t)),function(){a.unobserve(e),h.delete(e)}},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1",d=e.transitionDelay?e.transitionDelay:"0.5s";return"<picture>"+n+"<img "+o+l+a+r+t+s+i+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+d+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=c.default.forwardRef(function(e,t){var a=e.sizes,n=e.srcSet,r=e.src,i=e.style,s=e.onLoad,d=e.onError,u=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:n,src:r},u,{onLoad:s,onError:d,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});b.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var n=!0,r=!1,i=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,r=!0),"undefined"==typeof window&&(n=!1),t.critical&&(n=!0,r=!1);var l=!(t.critical&&!t.fadeIn);return a.state={isVisible:n,imgLoaded:!1,IOSupported:r,fadeIn:i,hasNoScript:l,seenBefore:o},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=g(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,n=e.className,r=e.style,i=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,h=e.fluid,g=e.fixed,y=e.backgroundColor,v=e.Tag,E=e.itemProp,S="boolean"==typeof y?"lightgray":y,w=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,f),R=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),L={title:t,alt:this.state.isVisible?"":a,style:w,className:p};if(h){var x=h;return c.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(x.srcSet)},c.default.createElement(v,{style:{width:"100%",paddingBottom:100/x.aspectRatio+"%"}}),S&&c.default.createElement(v,{title:t,style:{backgroundColor:S,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",right:0,left:0}}),x.base64&&c.default.createElement(b,(0,l.default)({src:x.base64},L)),x.tracedSVG&&c.default.createElement(b,(0,l.default)({src:x.tracedSVG},L)),this.state.isVisible&&c.default.createElement("picture",null,x.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),c.default.createElement(b,{alt:a,title:t,sizes:x.sizes,src:x.src,crossOrigin:this.props.crossOrigin,srcSet:x.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t},x))}}))}if(g){var I=g,z=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:I.width,height:I.height},i);return"inherit"===i.display&&delete z.display,c.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:z,ref:this.handleRef,key:"fixed-"+JSON.stringify(I.srcSet)},S&&c.default.createElement(v,{title:t,style:{backgroundColor:S,width:I.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:I.height}}),I.base64&&c.default.createElement(b,(0,l.default)({src:I.base64},L)),I.tracedSVG&&c.default.createElement(b,(0,l.default)({src:I.tracedSVG},L)),this.state.isVisible&&c.default.createElement("picture",null,I.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),c.default.createElement(b,{alt:a,title:t,width:I.width,height:I.height,sizes:I.sizes,src:I.src,crossOrigin:this.props.crossOrigin,srcSet:I.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t,width:I.width,height:I.height},I))}}))}return null},t}(c.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var v=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),E=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});y.propTypes={resolutions:v,sizes:E,fixed:v,fluid:E,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var S=y;t.default=S}}]);
//# sourceMappingURL=component---src-pages-index-js-ccc77ebfa506ab55411a.js.map
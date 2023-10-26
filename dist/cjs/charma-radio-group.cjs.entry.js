'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6e94f518.js');
const joinClass = require('./joinClass-6bf482bc.js');

const charmaRadioGroupCss = "/*! tailwindcss v3.3.2 | MIT License | https://tailwindcss.com*/*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}html{-webkit-text-size-adjust:100%;font-feature-settings:normal;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}:root{--main-bg-color:#b88d48}*{font-style:\"Nunito Sans', sans-serif\"}:host{all:initial}@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Montserrat:wght@300;400;600&family=Raleway:wght@300;400;500&display=swap\");@import url(\"https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap\");@import url(\"https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200;0,6..12,300;0,6..12,400;0,6..12,500;0,6..12,600;0,6..12,700;1,6..12,200;1,6..12,300;1,6..12,400;1,6..12,500;1,6..12,600;1,6..12,700&display=swap\");.static{position:static}.mb-4{margin-bottom:1rem}.ml-2{margin-left:.5rem}.block{display:block}.flex{display:flex}.h-4{height:1rem}.w-4{width:1rem}.cursor-pointer{cursor:pointer}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.items-center{align-items:center}.gap-5{gap:1.25rem}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.font-body{font-family:Raleway,sans-serif}.text-base{font-size:1rem;line-height:1.5rem}.capitalize{text-transform:capitalize}.text-gray-900{--tw-text-opacity:1;color:rgb(107 107 107/var(--tw-text-opacity))}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.transition-transform{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.focus\\:ring-2:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.focus\\:ring-blue-300:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(147 197 253/var(--tw-ring-opacity))}";

const CharmaRadioGroup = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.valueChange = index.createEvent(this, "valueChange", 7);
    this.handleChange = (event) => {
      this.valueChange.emit(event.target.value);
    };
    this.label = '';
    this.name = 'charma-radio-group';
    this.options = [];
    this.selected = '';
    this.required = true;
    this.error = false;
    this.orientation = 'vertical';
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null, index.h("div", { class: joinClass.joinClass('flex ', this.orientation === 'vertical' ? 'flex-row gap-5' : ' flex-col') }, this.options.map(({ title, value }) => {
      return (index.h("div", { class: "flex items-center mb-4 " }, index.h("input", { onChange: this.handleChange, id: `rb-${title}`, type: "radio", name: `rb-${title}`, value: value, class: "h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300 cursor-pointer font-body text-base transition-transform", checked: this.selected === value }), index.h("label", { htmlFor: `rb-${title}`, class: "font-body text-base text-gray-900 ml-2 block capitalize cursor-pointer" }, title)));
    })))));
  }
};
CharmaRadioGroup.style = charmaRadioGroupCss;

exports.charma_radio_group = CharmaRadioGroup;

//# sourceMappingURL=charma-radio-group.cjs.entry.js.map
var __legacyDecorateClassTS = function (decorators, target, key, desc) {
  var c = arguments.length,
    r =
      c < 3
        ? target
        : desc === null
        ? (desc = Object.getOwnPropertyDescriptor(target, key))
        : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if ((d = decorators[i]))
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// node_modules/xinjs/dist/module.js
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {
    get: v,
    set: s,
    enumerable: true,
    configurable: true,
  });
}
var $parcel$global = globalThis;
var $parcel$modules = {};
var $parcel$inits = {};
var parcelRequire = $parcel$global["parcelRequire1973"];
if (parcelRequire == null) {
  parcelRequire = function (id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module2 = { id, exports: {} };
      $parcel$modules[id] = module2;
      init.call(module2.exports, module2, module2.exports);
      return module2.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = "MODULE_NOT_FOUND";
    throw err;
  };
  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };
  $parcel$global["parcelRequire1973"] = parcelRequire;
}
var parcelRegister = parcelRequire.register;
parcelRegister("3x0mh", function (module, exports) {
  $parcel$export(module.exports, "Blueprint", () => Blueprint);
  $parcel$export(module.exports, "blueprint", () => blueprint);
  $parcel$export(module.exports, "BlueprintLoader", () => BlueprintLoader);
  $parcel$export(module.exports, "blueprintLoader", () => blueprintLoader);
  var $aVpVG = parcelRequire("aVpVG");
  var $lGBgM = parcelRequire("lGBgM");

  class Blueprint extends (0, $aVpVG.Component) {
    async packaged() {
      if (!this.loaded) {
        const { tag, src } = this;
        const imported = await eval(`import('${src}')`);
        const blueprint = imported[this.property];
        this.loaded = (0, $lGBgM.makeComponent)(tag, blueprint);
      }
      return this.loaded;
    }
    constructor() {
      super();
      this.tag = "anon-elt";
      this.src = "";
      this.property = "default";
      this.initAttributes("tag", "src", "property");
    }
  }
  const blueprint = Blueprint.elementCreator({
    tag: "xin-blueprint",
    styleSpec: {
      ":host": {
        display: "none",
      },
    },
  });

  class BlueprintLoader extends (0, $aVpVG.Component) {
    constructor() {
      super();
    }
    async load() {
      const blueprintElements = [
        ...this.querySelectorAll(Blueprint.tagName),
      ].filter((elt) => elt.src);
      const promises = blueprintElements.map((elt) => elt.packaged());
      await Promise.all(promises);
    }
    connectedCallback() {
      super.connectedCallback();
      this.load();
    }
  }
  const blueprintLoader = BlueprintLoader.elementCreator({
    tag: "xin-loader",
    styleSpec: {
      ":host": {
        display: "none",
      },
    },
  });
});
parcelRegister("aVpVG", function (module2, exports2) {
  $parcel$export(
    module2.exports,
    "Component",
    () => $cd387b053feba574$export$16fa2f45be04daa8
  );
  var $2okor = parcelRequire("2okor");
  var $19FSF = parcelRequire("19FSF");
  var $gbrAN = parcelRequire("gbrAN");
  var $9sLMf = parcelRequire("9sLMf");
  var $5JLBr = parcelRequire("5JLBr");
  let $cd387b053feba574$var$anonymousElementCount = 0;
  function $cd387b053feba574$var$anonElementTag() {
    return `custom-elt${($cd387b053feba574$var$anonymousElementCount++).toString(
      36
    )}`;
  }
  let $cd387b053feba574$var$instanceCount = 0;
  const $cd387b053feba574$var$globalStyleSheets = {};
  function $cd387b053feba574$var$setGlobalStyle(tagName, styleSpec) {
    const existing = $cd387b053feba574$var$globalStyleSheets[tagName];
    const processed = (0, $2okor.css)(styleSpec).replace(/:host\b/g, tagName);
    $cd387b053feba574$var$globalStyleSheets[tagName] = existing
      ? existing +
        `
` +
        processed
      : processed;
  }
  function $cd387b053feba574$var$insertGlobalStyles(tagName) {
    if ($cd387b053feba574$var$globalStyleSheets[tagName])
      document.head.append(
        (0, $9sLMf.elements).style(
          {
            id: tagName + "-component",
          },
          $cd387b053feba574$var$globalStyleSheets[tagName]
        )
      );
    delete $cd387b053feba574$var$globalStyleSheets[tagName];
  }

  class $cd387b053feba574$export$16fa2f45be04daa8 extends HTMLElement {
    static {
      this.elements = (0, $9sLMf.elements);
    }
    static {
      this.globalStyleSheets = [];
    }
    static {
      this._tagName = null;
    }
    static get tagName() {
      return this._tagName;
    }
    static StyleNode(styleSpec) {
      console.warn(
        "StyleNode is deprecated, just assign static styleSpec: XinStyleSheet to the class directly"
      );
      return (0, $9sLMf.elements).style((0, $2okor.css)(styleSpec));
    }
    static elementCreator(options = {}) {
      if (this._elementCreator == null) {
        const { tag: tag2, styleSpec } = options;
        let tagName = options != null ? tag2 : null;
        if (tagName == null) {
          if (typeof this.name === "string" && this.name !== "") {
            tagName = (0, $5JLBr.camelToKabob)(this.name);
            if (tagName.startsWith("-")) tagName = tagName.slice(1);
          } else tagName = $cd387b053feba574$var$anonElementTag();
        }
        if (customElements.get(tagName) != null)
          console.warn(`${tagName} is already defined`);
        if (tagName.match(/\w+(-\w+)+/) == null) {
          console.warn(`${tagName} is not a legal tag for a custom-element`);
          tagName = $cd387b053feba574$var$anonElementTag();
        }
        while (customElements.get(tagName) !== undefined)
          tagName = $cd387b053feba574$var$anonElementTag();
        this._tagName = tagName;
        if (styleSpec !== undefined)
          $cd387b053feba574$var$setGlobalStyle(tagName, styleSpec);
        window.customElements.define(tagName, this, options);
        this._elementCreator = (0, $9sLMf.elements)[tagName];
      }
      return this._elementCreator;
    }
    initAttributes(...attributeNames) {
      const attributes = {};
      const attributeValues = {};
      const observer = new MutationObserver((mutationsList) => {
        let triggerRender = false;
        mutationsList.forEach((mutation) => {
          triggerRender = !!(
            mutation.attributeName &&
            attributeNames.includes(
              (0, $5JLBr.kabobToCamel)(mutation.attributeName)
            )
          );
        });
        if (triggerRender && this.queueRender !== undefined)
          this.queueRender(false);
      });
      observer.observe(this, {
        attributes: true,
      });
      attributeNames.forEach((attributeName) => {
        attributes[attributeName] = (0, $19FSF.deepClone)(this[attributeName]);
        const attributeKabob = (0, $5JLBr.camelToKabob)(attributeName);
        Object.defineProperty(this, attributeName, {
          enumerable: false,
          get() {
            if (typeof attributes[attributeName] === "boolean")
              return this.hasAttribute(attributeKabob);
            else {
              if (this.hasAttribute(attributeKabob))
                return typeof attributes[attributeName] === "number"
                  ? parseFloat(this.getAttribute(attributeKabob))
                  : this.getAttribute(attributeKabob);
              else if (attributeValues[attributeName] !== undefined)
                return attributeValues[attributeName];
              else return attributes[attributeName];
            }
          },
          set(value) {
            if (typeof attributes[attributeName] === "boolean") {
              if (value !== this[attributeName]) {
                if (value) this.setAttribute(attributeKabob, "");
                else this.removeAttribute(attributeKabob);
                this.queueRender();
              }
            } else if (typeof attributes[attributeName] === "number") {
              if (value !== parseFloat(this[attributeName])) {
                this.setAttribute(attributeKabob, value);
                this.queueRender();
              }
            } else if (
              typeof value === "object" ||
              `${value}` !== `${this[attributeName]}`
            ) {
              if (
                value === null ||
                value === undefined ||
                typeof value === "object"
              )
                this.removeAttribute(attributeKabob);
              else this.setAttribute(attributeKabob, value);
              this.queueRender();
              attributeValues[attributeName] = value;
            }
          },
        });
      });
    }
    initValue() {
      const valueDescriptor = Object.getOwnPropertyDescriptor(this, "value");
      if (
        valueDescriptor === undefined ||
        valueDescriptor.get !== undefined ||
        valueDescriptor.set !== undefined
      )
        return;
      let value = this.hasAttribute("value")
        ? this.getAttribute("value")
        : (0, $19FSF.deepClone)(this.value);
      delete this.value;
      Object.defineProperty(this, "value", {
        enumerable: false,
        get() {
          return value;
        },
        set(newValue) {
          if (value !== newValue) {
            value = newValue;
            this.queueRender(true);
          }
        },
      });
    }
    get parts() {
      const root = this.shadowRoot != null ? this.shadowRoot : this;
      if (this._parts == null)
        this._parts = new Proxy(
          {},
          {
            get(target, ref) {
              if (target[ref] === undefined) {
                let element = root.querySelector(`[part="${ref}"]`);
                if (element == null) element = root.querySelector(ref);
                if (element == null)
                  throw new Error(`elementRef "${ref}" does not exist!`);
                element.removeAttribute("data-ref");
                target[ref] = element;
              }
              return target[ref];
            },
          }
        );
      return this._parts;
    }
    constructor() {
      super();
      this.content = (0, $9sLMf.elements).slot();
      this._changeQueued = false;
      this._renderQueued = false;
      this._hydrated = false;
      $cd387b053feba574$var$instanceCount += 1;
      this.initAttributes("hidden");
      this.instanceId = `${this.tagName.toLocaleLowerCase()}-${$cd387b053feba574$var$instanceCount}`;
      this._value = (0, $19FSF.deepClone)(this.defaultValue);
    }
    connectedCallback() {
      $cd387b053feba574$var$insertGlobalStyles(this.constructor.tagName);
      this.hydrate();
      if (this.role != null) this.setAttribute("role", this.role);
      if (this.onResize !== undefined) {
        (0, $gbrAN.resizeObserver).observe(this);
        if (this._onResize == null) this._onResize = this.onResize.bind(this);
        this.addEventListener("resize", this._onResize);
      }
      if (this.value != null && this.getAttribute("value") != null)
        this._value = this.getAttribute("value");
      this.queueRender();
    }
    disconnectedCallback() {
      (0, $gbrAN.resizeObserver).unobserve(this);
    }
    queueRender(triggerChangeEvent = false) {
      if (!this._hydrated) return;
      if (!this._changeQueued) this._changeQueued = triggerChangeEvent;
      if (!this._renderQueued) {
        this._renderQueued = true;
        requestAnimationFrame(() => {
          if (this._changeQueued) (0, $gbrAN.dispatch)(this, "change");
          this._changeQueued = false;
          this._renderQueued = false;
          this.render();
        });
      }
    }
    hydrate() {
      if (!this._hydrated) {
        this.initValue();
        const cloneElements = typeof this.content !== "function";
        const _content =
          typeof this.content === "function" ? this.content() : this.content;
        const { styleSpec } = this.constructor;
        let { styleNode } = this.constructor;
        if (styleSpec) {
          styleNode = this.constructor.styleNode = (0, $9sLMf.elements).style(
            (0, $2okor.css)(styleSpec)
          );
          delete this.constructor.styleNode;
        }
        if (this.styleNode) {
          console.warn(
            this,
            "styleNode is deprecrated, use static styleNode or statc styleSpec instead"
          );
          styleNode = this.styleNode;
        }
        if (styleNode) {
          const shadow = this.attachShadow({
            mode: "open",
          });
          shadow.appendChild(styleNode.cloneNode(true));
          (0, $gbrAN.appendContentToElement)(shadow, _content, cloneElements);
        } else if (_content !== null) {
          const existingChildren = [...this.childNodes];
          (0, $gbrAN.appendContentToElement)(this, _content, cloneElements);
          this.isSlotted = this.querySelector("slot,xin-slot") !== undefined;
          const slots = [...this.querySelectorAll("slot")];
          if (slots.length > 0)
            slots.forEach($cd387b053feba574$var$XinSlot.replaceSlot);
          if (existingChildren.length > 0) {
            const slotMap = {
              "": this,
            };
            [...this.querySelectorAll("xin-slot")].forEach((slot) => {
              slotMap[slot.name] = slot;
            });
            existingChildren.forEach((child) => {
              const defaultSlot = slotMap[""];
              const destSlot =
                child instanceof Element ? slotMap[child.slot] : defaultSlot;
              (destSlot !== undefined ? destSlot : defaultSlot).append(child);
            });
          }
        }
        this._hydrated = true;
      }
    }
    render() {}
  }

  class $cd387b053feba574$var$XinSlot extends $cd387b053feba574$export$16fa2f45be04daa8 {
    static replaceSlot(slot) {
      const _slot = document.createElement("xin-slot");
      if (slot.name !== "") _slot.setAttribute("name", slot.name);
      slot.replaceWith(_slot);
    }
    constructor() {
      super();
      this.name = "";
      this.content = null;
      this.initAttributes("name");
    }
  }
  const $cd387b053feba574$export$a0751b4aa1961d4e =
    $cd387b053feba574$var$XinSlot.elementCreator({
      tag: "xin-slot",
    });
});
parcelRegister("2okor", function (module2, exports2) {
  $parcel$export(
    module2.exports,
    "StyleSheet",
    () => $49cee7f7f866c751$export$9d753cd7ae895cce
  );
  $parcel$export(
    module2.exports,
    "css",
    () => $49cee7f7f866c751$export$dbf350e5966cf602
  );
  $parcel$export(
    module2.exports,
    "processProp",
    () => $49cee7f7f866c751$export$4f8a9e649bc1f08b
  );
  $parcel$export(
    module2.exports,
    "initVars",
    () => $49cee7f7f866c751$export$90d0ea046136e3ed
  );
  $parcel$export(
    module2.exports,
    "darkMode",
    () => $49cee7f7f866c751$export$808aaf1b460dc9af
  );
  $parcel$export(
    module2.exports,
    "invertLuminance",
    () => $49cee7f7f866c751$export$8279dba9b7d4e420
  );
  $parcel$export(
    module2.exports,
    "vars",
    () => $49cee7f7f866c751$export$3cb96c9f6c8d16a4
  );
  $parcel$export(
    module2.exports,
    "varDefault",
    () => $49cee7f7f866c751$export$75c0e6adb3e38f31
  );
  var $6Jaab = parcelRequire("6Jaab");
  var $9sLMf = parcelRequire("9sLMf");
  var $5JLBr = parcelRequire("5JLBr");
  function $49cee7f7f866c751$export$9d753cd7ae895cce(id, styleSpec) {
    const element = (0, $9sLMf.elements).style(
      $49cee7f7f866c751$export$dbf350e5966cf602(styleSpec)
    );
    element.id = id;
    document.head.append(element);
  }
  const $49cee7f7f866c751$var$numericProps = [
    "animation-iteration-count",
    "flex",
    "flex-base",
    "flex-grow",
    "flex-shrink",
    "opacity",
    "order",
    "tab-size",
    "widows",
    "z-index",
    "zoom",
  ];
  const $49cee7f7f866c751$export$4f8a9e649bc1f08b = (prop, value) => {
    if (
      typeof value === "number" &&
      !$49cee7f7f866c751$var$numericProps.includes(prop)
    )
      value = `${value}px`;
    if (prop.startsWith("_")) {
      if (prop.startsWith("__")) {
        prop = "--" + prop.substring(2);
        value = `var(${prop}-default, ${value})`;
      } else prop = "--" + prop.substring(1);
    }
    return {
      prop,
      value: String(value),
    };
  };
  const $49cee7f7f866c751$var$renderProp = (indentation, cssProp, value) => {
    if (value === undefined) return "";
    if (value instanceof (0, $6Jaab.Color)) value = value.html;
    const processed = $49cee7f7f866c751$export$4f8a9e649bc1f08b(cssProp, value);
    return `${indentation}  ${processed.prop}: ${processed.value};`;
  };
  const $49cee7f7f866c751$var$renderStatement = (
    key,
    value,
    indentation = ""
  ) => {
    const cssProp = (0, $5JLBr.camelToKabob)(key);
    if (typeof value === "object" && !(value instanceof (0, $6Jaab.Color))) {
      const renderedRule = Object.keys(value).map((innerKey) =>
        $49cee7f7f866c751$var$renderStatement(
          innerKey,
          value[innerKey],
          `${indentation}  `
        )
      ).join(`
`);
      return `${indentation}  ${key} {
${renderedRule}
${indentation}  }`;
    } else return $49cee7f7f866c751$var$renderProp(indentation, cssProp, value);
  };
  const $49cee7f7f866c751$export$dbf350e5966cf602 = (obj, indentation = "") => {
    const selectors = Object.keys(obj).map((selector) => {
      const body = obj[selector];
      if (typeof body === "string") {
        if (selector === "@import") return `@import url('${body}');`;
        throw new Error("top-level string value only allowed for `@import`");
      }
      const rule = Object.keys(body).map((prop) =>
        $49cee7f7f866c751$var$renderStatement(prop, body[prop])
      ).join(`
`);
      return `${indentation}${selector} {
${rule}
}`;
    });
    return selectors.join(`

`);
  };
  const $49cee7f7f866c751$export$90d0ea046136e3ed = (obj) => {
    console.warn("initVars is deprecated. Just use _ and __ prefixes instead.");
    const rule = {};
    for (const key of Object.keys(obj)) {
      const value = obj[key];
      const kabobKey = (0, $5JLBr.camelToKabob)(key);
      rule[`--${kabobKey}`] =
        typeof value === "number" && value !== 0 ? String(value) + "px" : value;
    }
    return rule;
  };
  const $49cee7f7f866c751$export$808aaf1b460dc9af = (obj) => {
    console.warn("darkMode is deprecated. Use inverseLuminance instead.");
    const rule = {};
    for (const key of Object.keys(obj)) {
      let value = obj[key];
      if (
        typeof value === "string" &&
        value.match(/^(#|rgb[a]?\(|hsl[a]?\()/) != null
      ) {
        value = (0, $6Jaab.Color).fromCss(value).inverseLuminance.html;
        rule[`--${(0, $5JLBr.camelToKabob)(key)}`] = value;
      }
    }
    return rule;
  };
  const $49cee7f7f866c751$export$8279dba9b7d4e420 = (map) => {
    const inverted = {};
    for (const key of Object.keys(map)) {
      const value = map[key];
      if (value instanceof (0, $6Jaab.Color))
        inverted[key] = value.inverseLuminance;
      else if (
        typeof value === "string" &&
        value.match(/^(#[0-9a-fA-F]{3}|rgba?\(|hsla?\()/)
      )
        inverted[key] = (0, $6Jaab.Color).fromCss(value).inverseLuminance;
    }
    return inverted;
  };
  const $49cee7f7f866c751$export$3cb96c9f6c8d16a4 = new Proxy(
    {},
    {
      get(target, prop) {
        if (target[prop] == null) {
          prop = prop.replace(/[A-Z]/g, (x) => `-${x.toLocaleLowerCase()}`);
          const [, _varName, , isNegative, scaleText, method] = prop.match(
            /^([^\d_]*)((_)?(\d+)(\w*))?$/
          );
          const varName = `--${_varName}`;
          if (scaleText != null) {
            const scale =
              isNegative == null
                ? Number(scaleText) / 100
                : -Number(scaleText) / 100;
            switch (method) {
              case "b":
                {
                  const baseColor = getComputedStyle(
                    document.body
                  ).getPropertyValue(varName);
                  target[prop] =
                    scale > 0
                      ? (0, $6Jaab.Color).fromCss(baseColor).brighten(scale)
                          .rgba
                      : (0, $6Jaab.Color).fromCss(baseColor).darken(-scale)
                          .rgba;
                }
                break;
              case "s":
                {
                  const baseColor = getComputedStyle(
                    document.body
                  ).getPropertyValue(varName);
                  target[prop] =
                    scale > 0
                      ? (0, $6Jaab.Color).fromCss(baseColor).saturate(scale)
                          .rgba
                      : (0, $6Jaab.Color).fromCss(baseColor).desaturate(-scale)
                          .rgba;
                }
                break;
              case "h":
                {
                  const baseColor = getComputedStyle(
                    document.body
                  ).getPropertyValue(varName);
                  target[prop] = (0, $6Jaab.Color)
                    .fromCss(baseColor)
                    .rotate(scale * 100).rgba;
                  console.log(
                    (0, $6Jaab.Color).fromCss(baseColor).hsla,
                    (0, $6Jaab.Color).fromCss(baseColor).rotate(scale).hsla
                  );
                }
                break;
              case "o":
                {
                  const baseColor = getComputedStyle(
                    document.body
                  ).getPropertyValue(varName);
                  target[prop] = (0, $6Jaab.Color)
                    .fromCss(baseColor)
                    .opacity(scale).rgba;
                }
                break;
              case "":
                target[prop] = `calc(var(${varName}) * ${scale})`;
                break;
              default:
                console.error(method);
                throw new Error(
                  `Unrecognized method ${method} for css variable ${varName}`
                );
            }
          } else target[prop] = `var(${varName})`;
        }
        return target[prop];
      },
    }
  );
  const $49cee7f7f866c751$export$75c0e6adb3e38f31 = new Proxy(
    {},
    {
      get(target, prop) {
        if (target[prop] === undefined) {
          const varName = `--${prop.replace(
            /[A-Z]/g,
            (x) => `-${x.toLocaleLowerCase()}`
          )}`;
          target[prop] = (val) => `var(${varName}, ${val})`;
        }
        return target[prop];
      },
    }
  );
});
parcelRegister("6Jaab", function (module2, exports2) {
  $parcel$export(
    module2.exports,
    "Color",
    () => $72989831e95a2bab$export$892596cec99bc70e
  );
  var $drWRQ = parcelRequire("drWRQ");
  const $72989831e95a2bab$var$bt601 = (r, g, b) => {
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  };
  const $72989831e95a2bab$var$hex2 = (n) =>
    ("00" + Math.round(Number(n)).toString(16)).slice(-2);

  class $72989831e95a2bab$var$HslColor {
    constructor(r, g, b) {
      r /= 255;
      g /= 255;
      b /= 255;
      const l = Math.max(r, g, b);
      const s = l - Math.min(r, g, b);
      const h =
        s !== 0
          ? l === r
            ? (g - b) / s
            : l === g
            ? 2 + (b - r) / s
            : 4 + (r - g) / s
          : 0;
      this.h = 60 * h < 0 ? 60 * h + 360 : 60 * h;
      this.s =
        s !== 0 ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0;
      this.l = (2 * l - s) / 2;
    }
  }
  const $72989831e95a2bab$var$span =
    globalThis.document !== undefined
      ? globalThis.document.createElement("span")
      : undefined;

  class $72989831e95a2bab$export$892596cec99bc70e {
    static fromCss(spec) {
      let converted = spec;
      if ($72989831e95a2bab$var$span instanceof HTMLSpanElement) {
        $72989831e95a2bab$var$span.style.color = spec;
        document.body.appendChild($72989831e95a2bab$var$span);
        converted = getComputedStyle($72989831e95a2bab$var$span).color;
        $72989831e95a2bab$var$span.remove();
      }
      const [r, g, b, a] = converted.match(/[\d.]+/g);
      return new $72989831e95a2bab$export$892596cec99bc70e(
        Number(r),
        Number(g),
        Number(b),
        a == null ? 1 : Number(a)
      );
    }
    static fromHsl(h, s, l, a = 1) {
      return $72989831e95a2bab$export$892596cec99bc70e.fromCss(
        `hsla(${h.toFixed(0)}, ${(s * 100).toFixed(0)}%, ${(l * 100).toFixed(
          0
        )}%, ${a.toFixed(2)})`
      );
    }
    constructor(r, g, b, a = 1) {
      this.r = (0, $drWRQ.clamp)(0, r, 255);
      this.g = (0, $drWRQ.clamp)(0, g, 255);
      this.b = (0, $drWRQ.clamp)(0, b, 255);
      this.a = a !== undefined ? (0, $drWRQ.clamp)(0, a, 1) : (a = 1);
    }
    get inverse() {
      return new $72989831e95a2bab$export$892596cec99bc70e(
        255 - this.r,
        255 - this.g,
        255 - this.b,
        this.a
      );
    }
    get inverseLuminance() {
      const { h, s, l } = this._hsl;
      return $72989831e95a2bab$export$892596cec99bc70e.fromHsl(
        h,
        s,
        1 - l,
        this.a
      );
    }
    get rgb() {
      const { r, g, b } = this;
      return `rgb(${r.toFixed(0)},${g.toFixed(0)},${b.toFixed(0)})`;
    }
    get rgba() {
      const { r, g, b, a } = this;
      return `rgba(${r.toFixed(
        0
      )},${g.toFixed(0)},${b.toFixed(0)},${a.toFixed(2)})`;
    }
    get RGBA() {
      return [this.r / 255, this.g / 255, this.b / 255, this.a];
    }
    get ARGB() {
      return [this.a, this.r / 255, this.g / 255, this.b / 255];
    }
    get _hsl() {
      if (this.hslCached == null)
        this.hslCached = new $72989831e95a2bab$var$HslColor(
          this.r,
          this.g,
          this.b
        );
      return this.hslCached;
    }
    get hsl() {
      const { h, s, l } = this._hsl;
      return `hsl(${h.toFixed(
        0
      )}, ${(s * 100).toFixed(0)}%, ${(l * 100).toFixed(0)}%)`;
    }
    get hsla() {
      const { h, s, l } = this._hsl;
      return `hsla(${h.toFixed(
        0
      )}, ${(s * 100).toFixed(0)}%, ${(l * 100).toFixed(0)}%, ${this.a.toFixed(2)})`;
    }
    get mono() {
      const v = this.brightness * 255;
      return new $72989831e95a2bab$export$892596cec99bc70e(v, v, v);
    }
    get brightness() {
      return $72989831e95a2bab$var$bt601(this.r, this.g, this.b);
    }
    get html() {
      return this.toString();
    }
    toString() {
      return this.a === 1
        ? "#" +
            $72989831e95a2bab$var$hex2(this.r) +
            $72989831e95a2bab$var$hex2(this.g) +
            $72989831e95a2bab$var$hex2(this.b)
        : "#" +
            $72989831e95a2bab$var$hex2(this.r) +
            $72989831e95a2bab$var$hex2(this.g) +
            $72989831e95a2bab$var$hex2(this.b) +
            $72989831e95a2bab$var$hex2(Math.floor(255 * this.a));
    }
    brighten(amount) {
      const { h, s, l } = this._hsl;
      const lClamped = (0, $drWRQ.clamp)(0, l + amount * (1 - l), 1);
      return $72989831e95a2bab$export$892596cec99bc70e.fromHsl(
        h,
        s,
        lClamped,
        this.a
      );
    }
    darken(amount) {
      const { h, s, l } = this._hsl;
      const lClamped = (0, $drWRQ.clamp)(0, l * (1 - amount), 1);
      return $72989831e95a2bab$export$892596cec99bc70e.fromHsl(
        h,
        s,
        lClamped,
        this.a
      );
    }
    saturate(amount) {
      const { h, s, l } = this._hsl;
      const sClamped = (0, $drWRQ.clamp)(0, s + amount * (1 - s), 1);
      return $72989831e95a2bab$export$892596cec99bc70e.fromHsl(
        h,
        sClamped,
        l,
        this.a
      );
    }
    desaturate(amount) {
      const { h, s, l } = this._hsl;
      const sClamped = (0, $drWRQ.clamp)(0, s * (1 - amount), 1);
      return $72989831e95a2bab$export$892596cec99bc70e.fromHsl(
        h,
        sClamped,
        l,
        this.a
      );
    }
    rotate(amount) {
      const { h, s, l } = this._hsl;
      const hClamped = (h + 360 + amount) % 360;
      return $72989831e95a2bab$export$892596cec99bc70e.fromHsl(
        hClamped,
        s,
        l,
        this.a
      );
    }
    opacity(alpha) {
      const { h, s, l } = this._hsl;
      return $72989831e95a2bab$export$892596cec99bc70e.fromHsl(h, s, l, alpha);
    }
    swatch() {
      const { r, g, b, a } = this;
      console.log(
        `%c   %c ${this.html}, rgba(${r}, ${g}, ${b}, ${a}), ${this.hsla}`,
        `background-color: rgba(${r}, ${g}, ${b}, ${a})`,
        "background-color: #eee"
      );
      return this;
    }
    blend(otherColor, t) {
      return new $72989831e95a2bab$export$892596cec99bc70e(
        (0, $drWRQ.lerp)(this.r, otherColor.r, t),
        (0, $drWRQ.lerp)(this.g, otherColor.g, t),
        (0, $drWRQ.lerp)(this.b, otherColor.b, t),
        (0, $drWRQ.lerp)(this.a, otherColor.a, t)
      );
    }
    mix(otherColor, t) {
      const a = this._hsl;
      const b = otherColor._hsl;
      return $72989831e95a2bab$export$892596cec99bc70e.fromHsl(
        (0, $drWRQ.lerp)(a.h, b.h, t),
        (0, $drWRQ.lerp)(a.s, b.s, t),
        (0, $drWRQ.lerp)(a.l, b.l, t),
        (0, $drWRQ.lerp)(this.a, otherColor.a, t)
      );
    }
  }
});
parcelRegister("drWRQ", function (module2, exports2) {
  $parcel$export(
    module2.exports,
    "clamp",
    () => $0e50e8a626908591$export$7d15b64cf5a3a4c4
  );
  $parcel$export(
    module2.exports,
    "lerp",
    () => $0e50e8a626908591$export$3a89f8d6f6bf6c9f
  );
  $parcel$export(
    module2.exports,
    "MoreMath",
    () => $0e50e8a626908591$export$5e0dd9fd5d74e0c5
  );
  const $0e50e8a626908591$export$ba6bc6c220358ed9 = 180 / Math.PI;
  const $0e50e8a626908591$export$1518e1a62333c8a4 = Math.PI / 180;
  function $0e50e8a626908591$export$7d15b64cf5a3a4c4(min, v, max) {
    return v < min ? min : v > max ? max : v;
  }
  function $0e50e8a626908591$export$3a89f8d6f6bf6c9f(a, b, t) {
    t = $0e50e8a626908591$export$7d15b64cf5a3a4c4(0, t, 1);
    return t * (b - a) + a;
  }
  const $0e50e8a626908591$export$5e0dd9fd5d74e0c5 = {
    clamp: $0e50e8a626908591$export$7d15b64cf5a3a4c4,
    lerp: $0e50e8a626908591$export$3a89f8d6f6bf6c9f,
  };
});
parcelRegister("9sLMf", function (module2, exports2) {
  $parcel$export(
    module2.exports,
    "elements",
    () => $9e0c0b8784c80412$export$7a5d735b2ab6389d
  );
  $parcel$export(
    module2.exports,
    "svgElements",
    () => $9e0c0b8784c80412$export$cf20112a1bc148da
  );
  $parcel$export(
    module2.exports,
    "mathML",
    () => $9e0c0b8784c80412$export$8ec252cfdd664597
  );
  var $kCu8Y = parcelRequire("kCu8Y");
  var $buKmK = parcelRequire("buKmK");
  var $5JLBr = parcelRequire("5JLBr");
  var $2okor = parcelRequire("2okor");
  const $9e0c0b8784c80412$var$MATH = "http://www.w3.org/1998/Math/MathML";
  const $9e0c0b8784c80412$var$SVG = "http://www.w3.org/2000/svg";
  const $9e0c0b8784c80412$var$templates = {};
  const $9e0c0b8784c80412$var$create = (tagType, ...contents) => {
    if ($9e0c0b8784c80412$var$templates[tagType] === undefined) {
      const [tag2, namespace] = tagType.split("|");
      if (namespace === undefined)
        $9e0c0b8784c80412$var$templates[tagType] =
          globalThis.document.createElement(tag2);
      else
        $9e0c0b8784c80412$var$templates[tagType] =
          globalThis.document.createElementNS(namespace, tag2);
    }
    const elt = $9e0c0b8784c80412$var$templates[tagType].cloneNode();
    const elementProps = {};
    for (const item of contents)
      if (
        item instanceof Element ||
        item instanceof DocumentFragment ||
        typeof item === "string" ||
        typeof item === "number"
      ) {
        if (elt instanceof HTMLTemplateElement) elt.content.append(item);
        else elt.append(item);
      } else Object.assign(elementProps, item);
    for (const key of Object.keys(elementProps)) {
      const value = elementProps[key];
      if (key === "apply") value(elt);
      else if (key === "style") {
        if (typeof value === "object")
          for (const prop of Object.keys(value)) {
            const processed = (0, $2okor.processProp)(
              (0, $5JLBr.camelToKabob)(prop),
              value[prop]
            );
            if (processed.prop.startsWith("--"))
              elt.style.setProperty(processed.prop, processed.value);
            else elt.style[prop] = processed.value;
          }
        else elt.setAttribute("style", value);
      } else if (key.match(/^on[A-Z]/) != null) {
        const eventType = key.substring(2).toLowerCase();
        (0, $kCu8Y.on)(elt, eventType, value);
      } else if (key === "bind") {
        const binding =
          typeof value.binding === "string"
            ? (0, $buKmK.bindings)[value.binding]
            : value.binding;
        if (binding !== undefined && value.value !== undefined)
          (0, $kCu8Y.bind)(
            elt,
            value.value,
            value.binding instanceof Function
              ? {
                  toDOM: value.binding,
                }
              : value.binding
          );
        else throw new Error(`bad binding`);
      } else if (key.match(/^bind[A-Z]/) != null) {
        const bindingType =
          key.substring(4, 5).toLowerCase() + key.substring(5);
        const binding = (0, $buKmK.bindings)[bindingType];
        if (binding !== undefined) (0, $kCu8Y.bind)(elt, value, binding);
        else
          throw new Error(
            `${key} is not allowed, bindings.${bindingType} is not defined`
          );
      } else if (elt[key] !== undefined) {
        const { MathMLElement } = globalThis;
        if (
          elt instanceof SVGElement ||
          (MathMLElement !== undefined && elt instanceof MathMLElement)
        )
          elt.setAttribute(key, value);
        else elt[key] = value;
      } else {
        const attr = (0, $5JLBr.camelToKabob)(key);
        if (attr === "class")
          value.split(" ").forEach((className) => {
            elt.classList.add(className);
          });
        else if (elt[attr] !== undefined) elt[attr] = value;
        else if (typeof value === "boolean")
          value ? elt.setAttribute(attr, "") : elt.removeAttribute(attr);
        else elt.setAttribute(attr, value);
      }
    }
    return elt;
  };
  const $9e0c0b8784c80412$var$fragment = (...contents) => {
    const frag = globalThis.document.createDocumentFragment();
    for (const item of contents) frag.append(item);
    return frag;
  };
  const $9e0c0b8784c80412$export$7a5d735b2ab6389d = new Proxy(
    {
      fragment: $9e0c0b8784c80412$var$fragment,
    },
    {
      get(target, tagName) {
        tagName = tagName.replace(/[A-Z]/g, (c) => `-${c.toLocaleLowerCase()}`);
        if (target[tagName] === undefined)
          target[tagName] = (...contents) =>
            $9e0c0b8784c80412$var$create(tagName, ...contents);
        return target[tagName];
      },
      set() {
        throw new Error("You may not add new properties to elements");
      },
    }
  );
  const $9e0c0b8784c80412$export$cf20112a1bc148da = new Proxy(
    {
      fragment: $9e0c0b8784c80412$var$fragment,
    },
    {
      get(target, tagName) {
        if (target[tagName] === undefined)
          target[tagName] = (...contents) =>
            $9e0c0b8784c80412$var$create(
              `${tagName}|${$9e0c0b8784c80412$var$SVG}`,
              ...contents
            );
        return target[tagName];
      },
      set() {
        throw new Error("You may not add new properties to elements");
      },
    }
  );
  const $9e0c0b8784c80412$export$8ec252cfdd664597 = new Proxy(
    {
      fragment: $9e0c0b8784c80412$var$fragment,
    },
    {
      get(target, tagName) {
        if (target[tagName] === undefined)
          target[tagName] = (...contents) =>
            $9e0c0b8784c80412$var$create(
              `${tagName}|${$9e0c0b8784c80412$var$MATH}`,
              ...contents
            );
        return target[tagName];
      },
      set() {
        throw new Error("You may not add new properties to elements");
      },
    }
  );
});
parcelRegister("kCu8Y", function (module2, exports2) {
  $parcel$export(
    module2.exports,
    "bind",
    () => $b5796eaeba5c782e$export$2385a24977818dd0
  );
  $parcel$export(
    module2.exports,
    "on",
    () => $b5796eaeba5c782e$export$af631764ddc44097
  );
  var $eppu5 = parcelRequire("eppu5");
  var $5lOGz = parcelRequire("5lOGz");
  var $5hOlm = parcelRequire("5hOlm");
  const {
    document: $b5796eaeba5c782e$var$document,
    MutationObserver: $b5796eaeba5c782e$var$MutationObserver,
  } = globalThis;
  const $b5796eaeba5c782e$export$80bf2f765c31be6a = (element, changedPath) => {
    const dataBindings = (0, $5hOlm.elementToBindings).get(element);
    if (dataBindings == null) return;
    for (const dataBinding of dataBindings) {
      const { binding, options } = dataBinding;
      let { path } = dataBinding;
      const { toDOM } = binding;
      if (toDOM != null) {
        if (path.startsWith("^")) {
          const dataSource = (0, $5hOlm.getListItem)(element);
          if (dataSource != null && dataSource[(0, $5hOlm.XIN_PATH)] != null)
            path = dataBinding.path = `${
              dataSource[(0, $5hOlm.XIN_PATH)]
            }${path.substring(1)}`;
          else {
            console.error(
              `Cannot resolve relative binding ${path}`,
              element,
              "is not part of a list"
            );
            throw new Error(`Cannot resolve relative binding ${path}`);
          }
        }
        if (changedPath == null || path.startsWith(changedPath))
          toDOM(element, (0, $eppu5.xin)[path], options);
      }
    }
  };
  if ($b5796eaeba5c782e$var$MutationObserver != null) {
    const observer = new $b5796eaeba5c782e$var$MutationObserver(
      (mutationsList) => {
        mutationsList.forEach((mutation) => {
          [...mutation.addedNodes].forEach((node) => {
            if (node instanceof Element)
              [...node.querySelectorAll((0, $5hOlm.BOUND_SELECTOR))].forEach(
                (element) => $b5796eaeba5c782e$export$80bf2f765c31be6a(element)
              );
          });
        });
      }
    );
    observer.observe($b5796eaeba5c782e$var$document.body, {
      subtree: true,
      childList: true,
    });
  }
  (0, $eppu5.observe)(
    () => true,
    (changedPath) => {
      const boundElements = $b5796eaeba5c782e$var$document.querySelectorAll(
        (0, $5hOlm.BOUND_SELECTOR)
      );
      for (const element of boundElements)
        $b5796eaeba5c782e$export$80bf2f765c31be6a(element, changedPath);
    }
  );
  const $b5796eaeba5c782e$var$handleChange = (event) => {
    let target = event.target.closest((0, $5hOlm.BOUND_SELECTOR));
    while (target != null) {
      const dataBindings = (0, $5hOlm.elementToBindings).get(target);
      for (const dataBinding of dataBindings) {
        const { binding, path } = dataBinding;
        const { fromDOM } = binding;
        if (fromDOM != null) {
          let value;
          try {
            value = fromDOM(target, dataBinding.options);
          } catch (e) {
            console.error("Cannot get value from", target, "via", dataBinding);
            throw new Error("Cannot obtain value fromDOM");
          }
          if (value != null) {
            const existing = (0, $eppu5.xin)[path];
            if (existing == null) (0, $eppu5.xin)[path] = value;
            else {
              const existingActual =
                existing[(0, $5hOlm.XIN_PATH)] != null
                  ? existing[(0, $5hOlm.XIN_VALUE)]
                  : existing;
              const valueActual =
                value[(0, $5hOlm.XIN_PATH)] != null
                  ? value[(0, $5hOlm.XIN_VALUE)]
                  : value;
              if (existingActual !== valueActual)
                (0, $eppu5.xin)[path] = valueActual;
            }
          }
        }
      }
      target = target.parentElement.closest((0, $5hOlm.BOUND_SELECTOR));
    }
  };
  if (globalThis.document != null) {
    $b5796eaeba5c782e$var$document.body.addEventListener(
      "change",
      $b5796eaeba5c782e$var$handleChange,
      true
    );
    $b5796eaeba5c782e$var$document.body.addEventListener(
      "input",
      $b5796eaeba5c782e$var$handleChange,
      true
    );
  }
  function $b5796eaeba5c782e$export$2385a24977818dd0(
    element,
    what,
    binding,
    options
  ) {
    if (element instanceof DocumentFragment)
      throw new Error("bind cannot bind to a DocumentFragment");
    let path;
    if (
      typeof what === "object" &&
      what[(0, $5hOlm.XIN_PATH)] === undefined &&
      options === undefined
    ) {
      const { value } = what;
      path = typeof value === "string" ? value : value[(0, $5hOlm.XIN_PATH)];
      options = what;
      delete options.value;
    } else path = typeof what === "string" ? what : what[(0, $5hOlm.XIN_PATH)];
    if (path == null)
      throw new Error("bind requires a path or object with xin Proxy");
    const { toDOM } = binding;
    element.classList.add((0, $5hOlm.BOUND_CLASS));
    let dataBindings = (0, $5hOlm.elementToBindings).get(element);
    if (dataBindings == null) {
      dataBindings = [];
      (0, $5hOlm.elementToBindings).set(element, dataBindings);
    }
    dataBindings.push({
      path,
      binding,
      options,
    });
    if (toDOM != null && !path.startsWith("^")) (0, $5lOGz.touch)(path);
    return element;
  }
  const $b5796eaeba5c782e$var$handledEventTypes = new Set();
  const $b5796eaeba5c782e$var$handleBoundEvent = (event) => {
    let target = event?.target.closest((0, $5hOlm.EVENT_SELECTOR));
    let propagationStopped = false;
    const wrappedEvent = new Proxy(event, {
      get(target2, prop) {
        if (prop === "stopPropagation")
          return () => {
            event.stopPropagation();
            propagationStopped = true;
          };
        else {
          const value = target2[prop];
          return typeof value === "function" ? value.bind(target2) : value;
        }
      },
    });
    while (!propagationStopped && target != null) {
      const eventBindings = (0, $5hOlm.elementToHandlers).get(target);
      const handlers = eventBindings[event.type] || [];
      for (const handler of handlers) {
        if (typeof handler === "function") handler(wrappedEvent);
        else {
          const func = (0, $eppu5.xin)[handler];
          if (typeof func === "function") func(wrappedEvent);
          else throw new Error(`no event handler found at path ${handler}`);
        }
        if (propagationStopped) continue;
      }
      target =
        target.parentElement != null
          ? target.parentElement.closest((0, $5hOlm.EVENT_SELECTOR))
          : null;
    }
  };
  const $b5796eaeba5c782e$export$af631764ddc44097 = (
    element,
    eventType,
    eventHandler
  ) => {
    let eventBindings = (0, $5hOlm.elementToHandlers).get(element);
    element.classList.add((0, $5hOlm.EVENT_CLASS));
    if (eventBindings == null) {
      eventBindings = {};
      (0, $5hOlm.elementToHandlers).set(element, eventBindings);
    }
    if (!eventBindings[eventType]) eventBindings[eventType] = [];
    if (!eventBindings[eventType].includes(eventHandler))
      eventBindings[eventType].push(eventHandler);
    if (!$b5796eaeba5c782e$var$handledEventTypes.has(eventType)) {
      $b5796eaeba5c782e$var$handledEventTypes.add(eventType);
      $b5796eaeba5c782e$var$document.body.addEventListener(
        eventType,
        $b5796eaeba5c782e$var$handleBoundEvent,
        true
      );
    }
  };
});
parcelRegister("eppu5", function (module2, exports2) {
  $parcel$export(
    module2.exports,
    "xin",
    () => $547f11326d897190$export$966034e6c6823eb0
  );
  $parcel$export(
    module2.exports,
    "observe",
    () => $547f11326d897190$export$d1203567a167490e
  );
  $parcel$export(
    module2.exports,
    "boxed",
    () => $547f11326d897190$export$fd1b43749dd321e5
  );
  $parcel$export(
    module2.exports,
    "updates",
    () => parcelRequire("5lOGz").updates
  );
  $parcel$export(module2.exports, "touch", () => parcelRequire("5lOGz").touch);
  $parcel$export(
    module2.exports,
    "unobserve",
    () => parcelRequire("5lOGz").unobserve
  );
  $parcel$export(
    module2.exports,
    "observerShouldBeRemoved",
    () => parcelRequire("5lOGz").observerShouldBeRemoved
  );
  var $hv4Z8 = parcelRequire("hv4Z8");
  var $5lOGz = parcelRequire("5lOGz");
  var $aMI8M = parcelRequire("aMI8M");
  var $5hOlm = parcelRequire("5hOlm");
  const $547f11326d897190$var$ARRAY_MUTATIONS = [
    "sort",
    "splice",
    "copyWithin",
    "fill",
    "pop",
    "push",
    "reverse",
    "shift",
    "unshift",
  ];
  const $547f11326d897190$var$registry = {};
  const $547f11326d897190$var$debugPaths = true;
  const $547f11326d897190$var$validPath =
    /^\.?([^.[\](),])+(\.[^.[\](),]+|\[\d+\]|\[[^=[\](),]*=[^[\]()]+\])*$/;
  const $547f11326d897190$export$a678af82bf766611 = (path) =>
    $547f11326d897190$var$validPath.test(path);
  const $547f11326d897190$var$extendPath = (path = "", prop = "") => {
    if (path === "") return prop;
    else {
      if (prop.match(/^\d+$/) !== null || prop.includes("="))
        return `${path}[${prop}]`;
      else return `${path}.${prop}`;
    }
  };
  const $547f11326d897190$var$boxes = {
    string(s) {
      return new String(s);
    },
    boolean(b) {
      return new Boolean(b);
    },
    bigint(b) {
      return b;
    },
    symbol(s) {
      return s;
    },
    number(n) {
      return new Number(n);
    },
  };
  function $547f11326d897190$var$box(x, path) {
    const t = typeof x;
    if (x === undefined || t === "object" || t === "function") return x;
    else
      return new Proxy(
        $547f11326d897190$var$boxes[t](x),
        $547f11326d897190$var$regHandler(path, true)
      );
  }
  const $547f11326d897190$var$regHandler = (path, boxScalars) => ({
    get(target, _prop) {
      if (_prop === (0, $5hOlm.XIN_PATH)) return path;
      else if (_prop === (0, $5hOlm.XIN_VALUE)) {
        while ((0, $5hOlm.xinPath)(target) !== undefined)
          target = (0, $5hOlm.xinValue)(target);
        return target;
      }
      if (typeof _prop === "symbol") return target[_prop];
      let prop = _prop;
      const compoundProp =
        prop.match(/^([^.[]+)\.(.+)$/) ??
        prop.match(/^([^\]]+)(\[.+)/) ??
        prop.match(/^(\[[^\]]+\])\.(.+)$/) ??
        prop.match(/^(\[[^\]]+\])\[(.+)$/);
      if (compoundProp !== null) {
        const [, basePath, subPath] = compoundProp;
        const currentPath = $547f11326d897190$var$extendPath(path, basePath);
        const value = (0, $aMI8M.getByPath)(target, basePath);
        return value !== null && typeof value === "object"
          ? new Proxy(
              value,
              $547f11326d897190$var$regHandler(currentPath, boxScalars)
            )[subPath]
          : value;
      }
      if (prop.startsWith("[") && prop.endsWith("]"))
        prop = prop.substring(1, prop.length - 1);
      if (
        (!Array.isArray(target) && target[prop] !== undefined) ||
        (Array.isArray(target) && prop.includes("="))
      ) {
        let value;
        if (prop.includes("=")) {
          const [idPath, needle] = prop.split("=");
          value = target.find(
            (candidate) =>
              `${(0, $aMI8M.getByPath)(candidate, idPath)}` === needle
          );
        } else value = target[prop];
        if (value !== null && typeof value === "object") {
          const currentPath = $547f11326d897190$var$extendPath(path, prop);
          return new Proxy(
            value,
            $547f11326d897190$var$regHandler(currentPath, boxScalars)
          );
        } else if (typeof value === "function") return value.bind(target);
        else
          return boxScalars
            ? $547f11326d897190$var$box(
                value,
                $547f11326d897190$var$extendPath(path, prop)
              )
            : value;
      } else if (Array.isArray(target)) {
        const value = target[prop];
        return typeof value === "function"
          ? (...items) => {
              const result = Array.prototype[prop].apply(target, items);
              if ($547f11326d897190$var$ARRAY_MUTATIONS.includes(prop))
                (0, $5lOGz.touch)(path);
              return result;
            }
          : typeof value === "object"
          ? new Proxy(
              value,
              $547f11326d897190$var$regHandler(
                $547f11326d897190$var$extendPath(path, prop),
                boxScalars
              )
            )
          : boxScalars
          ? $547f11326d897190$var$box(
              value,
              $547f11326d897190$var$extendPath(path, prop)
            )
          : value;
      } else
        return boxScalars
          ? $547f11326d897190$var$box(
              target[prop],
              $547f11326d897190$var$extendPath(path, prop)
            )
          : target[prop];
    },
    set(_, prop, value) {
      value = (0, $5hOlm.xinValue)(value);
      const fullPath = $547f11326d897190$var$extendPath(path, prop);
      if (
        $547f11326d897190$var$debugPaths &&
        !$547f11326d897190$export$a678af82bf766611(fullPath)
      )
        throw new Error(`setting invalid path ${fullPath}`);
      const existing = (0, $5hOlm.xinValue)(
        $547f11326d897190$export$966034e6c6823eb0[fullPath]
      );
      if (
        existing !== value &&
        (0, $aMI8M.setByPath)($547f11326d897190$var$registry, fullPath, value)
      )
        (0, $5lOGz.touch)(fullPath);
      return true;
    },
  });
  const $547f11326d897190$export$d1203567a167490e = (test, callback) => {
    const func =
      typeof callback === "function"
        ? callback
        : $547f11326d897190$export$966034e6c6823eb0[callback];
    if (typeof func !== "function")
      throw new Error(
        `observe expects a function or path to a function, ${callback} is neither`
      );
    return (0, $5lOGz.observe)(test, func);
  };
  const $547f11326d897190$export$966034e6c6823eb0 = new Proxy(
    $547f11326d897190$var$registry,
    $547f11326d897190$var$regHandler("", false)
  );
  const $547f11326d897190$export$fd1b43749dd321e5 = new Proxy(
    $547f11326d897190$var$registry,
    $547f11326d897190$var$regHandler("", true)
  );
});
parcelRegister("hv4Z8", function (module2, exports2) {
  $parcel$export(
    module2.exports,
    "settings",
    () => $34b63e9d5b96494c$export$a5a6e0b888b2c992
  );
  const $34b63e9d5b96494c$export$a5a6e0b888b2c992 = {
    debug: false,
    perf: false,
  };
});
parcelRegister("5lOGz", function (module2, exports2) {
  $parcel$export(
    module2.exports,
    "observerShouldBeRemoved",
    () => $f0b099915f91bd21$export$253d09664e30b967
  );
  $parcel$export(
    module2.exports,
    "updates",
    () => $f0b099915f91bd21$export$1c2919332513559b
  );
  $parcel$export(
    module2.exports,
    "unobserve",
    () => $f0b099915f91bd21$export$23a2283368c55ea2
  );
  $parcel$export(
    module2.exports,
    "touch",
    () => $f0b099915f91bd21$export$d0b7ea69ab6056df
  );
  $parcel$export(
    module2.exports,
    "observe",
    () => $f0b099915f91bd21$export$d1203567a167490e
  );
  var $5hOlm = parcelRequire("5hOlm");
  var $hv4Z8 = parcelRequire("hv4Z8");
  const $f0b099915f91bd21$export$253d09664e30b967 = Symbol(
    "observer should be removed"
  );
  const $f0b099915f91bd21$export$58bed631278dbc67 = [];
  const $f0b099915f91bd21$var$touchedPaths = [];
  let $f0b099915f91bd21$var$updateTriggered = false;
  let $f0b099915f91bd21$var$updatePromise;
  let $f0b099915f91bd21$var$resolveUpdate;

  class $f0b099915f91bd21$export$c92b1d5f43586026 {
    constructor(test, callback) {
      const callbackDescription =
        typeof callback === "string"
          ? `"${callback}"`
          : `function ${callback.name}`;
      let testDescription;
      if (typeof test === "string") {
        this.test = (t) =>
          typeof t === "string" &&
          t !== "" &&
          (test.startsWith(t) || t.startsWith(test));
        testDescription = `test = "${test}"`;
      } else if (test instanceof RegExp) {
        this.test = test.test.bind(test);
        testDescription = `test = "${test.toString()}"`;
      } else if (test instanceof Function) {
        this.test = test;
        testDescription = `test = function ${test.name}`;
      } else
        throw new Error(
          "expect listener test to be a string, RegExp, or test function"
        );
      this.description = `${testDescription}, ${callbackDescription}`;
      if (typeof callback === "function") this.callback = callback;
      else throw new Error("expect callback to be a path or function");
      $f0b099915f91bd21$export$58bed631278dbc67.push(this);
    }
  }
  const $f0b099915f91bd21$export$1c2919332513559b = async () => {
    if ($f0b099915f91bd21$var$updatePromise === undefined) return;
    await $f0b099915f91bd21$var$updatePromise;
  };
  const $f0b099915f91bd21$var$update = () => {
    if ((0, $hv4Z8.settings).perf) console.time("xin async update");
    const paths = [...$f0b099915f91bd21$var$touchedPaths];
    for (const path of paths)
      $f0b099915f91bd21$export$58bed631278dbc67
        .filter((listener) => {
          let heard;
          try {
            heard = listener.test(path);
          } catch (e) {
            throw new Error(
              `Listener ${listener.description} threw "${e}" at "${path}"`
            );
          }
          if (heard === $f0b099915f91bd21$export$253d09664e30b967) {
            $f0b099915f91bd21$export$23a2283368c55ea2(listener);
            return false;
          }
          return heard;
        })
        .forEach((listener) => {
          let outcome;
          try {
            outcome = listener.callback(path);
          } catch (e) {
            console.error(
              `Listener ${listener.description} threw "${e}" handling "${path}"`
            );
          }
          if (outcome === $f0b099915f91bd21$export$253d09664e30b967)
            $f0b099915f91bd21$export$23a2283368c55ea2(listener);
        });
    $f0b099915f91bd21$var$touchedPaths.splice(0);
    $f0b099915f91bd21$var$updateTriggered = false;
    if (typeof $f0b099915f91bd21$var$resolveUpdate === "function")
      $f0b099915f91bd21$var$resolveUpdate();
    if ((0, $hv4Z8.settings).perf) console.timeEnd("xin async update");
  };
  const $f0b099915f91bd21$export$d0b7ea69ab6056df = (touchable) => {
    const path =
      typeof touchable === "string"
        ? touchable
        : (0, $5hOlm.xinPath)(touchable);
    if (path === undefined) {
      console.error("touch was called on an invalid target", touchable);
      throw new Error("touch was called on an invalid target");
    }
    if ($f0b099915f91bd21$var$updateTriggered === false) {
      $f0b099915f91bd21$var$updatePromise = new Promise((resolve) => {
        $f0b099915f91bd21$var$resolveUpdate = resolve;
      });
      $f0b099915f91bd21$var$updateTriggered = setTimeout(
        $f0b099915f91bd21$var$update
      );
    }
    if (
      $f0b099915f91bd21$var$touchedPaths.find((touchedPath) =>
        path.startsWith(touchedPath)
      ) == null
    )
      $f0b099915f91bd21$var$touchedPaths.push(path);
  };
  const $f0b099915f91bd21$export$d1203567a167490e = (test, callback) => {
    return new $f0b099915f91bd21$export$c92b1d5f43586026(test, callback);
  };
  const $f0b099915f91bd21$export$23a2283368c55ea2 = (listener) => {
    const index = $f0b099915f91bd21$export$58bed631278dbc67.indexOf(listener);
    if (index > -1) $f0b099915f91bd21$export$58bed631278dbc67.splice(index, 1);
    else throw new Error("unobserve failed, listener not found");
  };
});
parcelRegister("5hOlm", function (module2, exports2) {
  $parcel$export(
    module2.exports,
    "BOUND_CLASS",
    () => $e921b0bd4f6415ab$export$c6592bbc1eebb717
  );
  $parcel$export(
    module2.exports,
    "BOUND_SELECTOR",
    () => $e921b0bd4f6415ab$export$4c0223f67078aeac
  );
  $parcel$export(
    module2.exports,
    "EVENT_CLASS",
    () => $e921b0bd4f6415ab$export$6a7099543a9795c7
  );
  $parcel$export(
    module2.exports,
    "EVENT_SELECTOR",
    () => $e921b0bd4f6415ab$export$21d9322c3477441b
  );
  $parcel$export(
    module2.exports,
    "XIN_PATH",
    () => $e921b0bd4f6415ab$export$a3622eb3b5dd592a
  );
  $parcel$export(
    module2.exports,
    "XIN_VALUE",
    () => $e921b0bd4f6415ab$export$bdd0d039ad781534
  );
  $parcel$export(
    module2.exports,
    "xinPath",
    () => $e921b0bd4f6415ab$export$40700dafb97c3799
  );
  $parcel$export(
    module2.exports,
    "xinValue",
    () => $e921b0bd4f6415ab$export$5dcba2d45033d435
  );
  $parcel$export(
    module2.exports,
    "elementToHandlers",
    () => $e921b0bd4f6415ab$export$fe712848e6e66613
  );
  $parcel$export(
    module2.exports,
    "elementToBindings",
    () => $e921b0bd4f6415ab$export$1f922de8d0ecbb7e
  );
  $parcel$export(
    module2.exports,
    "cloneWithBindings",
    () => $e921b0bd4f6415ab$export$fa8cc6a36b1ccd7f
  );
  $parcel$export(
    module2.exports,
    "elementToItem",
    () => $e921b0bd4f6415ab$export$86caed35dd837d06
  );
  $parcel$export(
    module2.exports,
    "getListItem",
    () => $e921b0bd4f6415ab$export$4c309843c07ce679
  );
  var $19FSF = parcelRequire("19FSF");
  const $e921b0bd4f6415ab$export$c6592bbc1eebb717 = "-xin-data";
  const $e921b0bd4f6415ab$export$4c0223f67078aeac = `.${$e921b0bd4f6415ab$export$c6592bbc1eebb717}`;
  const $e921b0bd4f6415ab$export$6a7099543a9795c7 = "-xin-event";
  const $e921b0bd4f6415ab$export$21d9322c3477441b = `.${$e921b0bd4f6415ab$export$6a7099543a9795c7}`;
  const $e921b0bd4f6415ab$export$a3622eb3b5dd592a = Symbol("xin-path");
  const $e921b0bd4f6415ab$export$bdd0d039ad781534 = Symbol("xin-value");
  const $e921b0bd4f6415ab$export$40700dafb97c3799 = (x) => {
    return x[$e921b0bd4f6415ab$export$a3622eb3b5dd592a];
  };
  function $e921b0bd4f6415ab$export$5dcba2d45033d435(x) {
    return typeof x === "object" && x !== null
      ? x[$e921b0bd4f6415ab$export$bdd0d039ad781534] || x
      : x;
  }
  const $e921b0bd4f6415ab$export$fe712848e6e66613 = new WeakMap();
  const $e921b0bd4f6415ab$export$1f922de8d0ecbb7e = new WeakMap();
  const $e921b0bd4f6415ab$export$4cac8128ba61a55f = (element) => {
    return {
      eventBindings: $e921b0bd4f6415ab$export$fe712848e6e66613.get(element),
      dataBindings: $e921b0bd4f6415ab$export$1f922de8d0ecbb7e.get(element),
    };
  };
  const $e921b0bd4f6415ab$export$fa8cc6a36b1ccd7f = (element) => {
    const cloned = element.cloneNode();
    if (cloned instanceof Element) {
      const dataBindings =
        $e921b0bd4f6415ab$export$1f922de8d0ecbb7e.get(element);
      const eventHandlers =
        $e921b0bd4f6415ab$export$fe712848e6e66613.get(element);
      if (dataBindings != null)
        $e921b0bd4f6415ab$export$1f922de8d0ecbb7e.set(
          cloned,
          (0, $19FSF.deepClone)(dataBindings)
        );
      if (eventHandlers != null)
        $e921b0bd4f6415ab$export$fe712848e6e66613.set(
          cloned,
          (0, $19FSF.deepClone)(eventHandlers)
        );
    }
    for (const node of element instanceof HTMLTemplateElement
      ? element.content.childNodes
      : element.childNodes)
      if (node instanceof Element || node instanceof DocumentFragment)
        cloned.appendChild($e921b0bd4f6415ab$export$fa8cc6a36b1ccd7f(node));
      else cloned.appendChild(node.cloneNode());
    return cloned;
  };
  const $e921b0bd4f6415ab$export$86caed35dd837d06 = new WeakMap();
  const $e921b0bd4f6415ab$export$4c309843c07ce679 = (element) => {
    const html = document.body.parentElement;
    while (element.parentElement != null && element.parentElement !== html) {
      const item = $e921b0bd4f6415ab$export$86caed35dd837d06.get(element);
      if (item != null) return item;
      element = element.parentElement;
    }
    return false;
  };
});
parcelRegister("19FSF", function (module2, exports2) {
  $parcel$export(
    module2.exports,
    "deepClone",
    () => $5165f04a46b33615$export$b7d58db314e0ac27
  );
  function $5165f04a46b33615$export$b7d58db314e0ac27(obj) {
    if (obj == null || typeof obj !== "object") return obj;
    if (Array.isArray(obj))
      return obj.map($5165f04a46b33615$export$b7d58db314e0ac27);
    const clone = {};
    for (const key in obj) {
      const val = obj[key];
      if (obj != null && typeof obj === "object")
        clone[key] = $5165f04a46b33615$export$b7d58db314e0ac27(val);
      else clone[key] = val;
    }
    return clone;
  }
});
parcelRegister("aMI8M", function (module2, exports2) {
  $parcel$export(
    module2.exports,
    "getByPath",
    () => $c62be31ef05b0c90$export$44b5bed83342a92f
  );
  $parcel$export(
    module2.exports,
    "setByPath",
    () => $c62be31ef05b0c90$export$f65a19d15516795e
  );
  var $5lDHe = parcelRequire("5lDHe");
  const $c62be31ef05b0c90$var$now36 = () =>
    new Date(parseInt("1000000000", 36) + Date.now())
      .valueOf()
      .toString(36)
      .slice(1);
  let $c62be31ef05b0c90$var$_seq = 0;
  const $c62be31ef05b0c90$var$seq = () =>
    (parseInt("10000", 36) + ++$c62be31ef05b0c90$var$_seq)
      .toString(36)
      .slice(-5);
  const $c62be31ef05b0c90$var$id = () =>
    $c62be31ef05b0c90$var$now36() + $c62be31ef05b0c90$var$seq();
  const $c62be31ef05b0c90$var$_delete_ = {};
  const $c62be31ef05b0c90$var$_newObject_ = {};
  function $c62be31ef05b0c90$export$f5d2dd4cfd729958(path) {
    if (path === "") return [];
    if (Array.isArray(path)) return path;
    else {
      const parts = [];
      while (path.length > 0) {
        let index = path.search(/\[[^\]]+\]/);
        if (index === -1) {
          parts.push(path.split("."));
          break;
        } else {
          const part = path.slice(0, index);
          path = path.slice(index);
          if (part !== "") parts.push(part.split("."));
          index = path.indexOf("]") + 1;
          parts.push(path.slice(1, index - 1));
          if (path.slice(index, index + 1) === ".") index += 1;
          path = path.slice(index);
        }
      }
      return parts;
    }
  }
  const $c62be31ef05b0c90$var$idPathMaps = new WeakMap();
  function $c62be31ef05b0c90$var$buildIdPathValueMap(array, idPath) {
    if ($c62be31ef05b0c90$var$idPathMaps.get(array) === undefined)
      $c62be31ef05b0c90$var$idPathMaps.set(array, {});
    if ($c62be31ef05b0c90$var$idPathMaps.get(array)[idPath] === undefined)
      $c62be31ef05b0c90$var$idPathMaps.get(array)[idPath] = {};
    const map = $c62be31ef05b0c90$var$idPathMaps.get(array)[idPath];
    if (idPath === "_auto_")
      array.forEach((item, idx) => {
        if (item._auto_ === undefined) item._auto_ = $c62be31ef05b0c90$var$id();
        map[item._auto_ + ""] = idx;
      });
    else
      array.forEach((item, idx) => {
        map[$c62be31ef05b0c90$export$44b5bed83342a92f(item, idPath) + ""] = idx;
      });
    return map;
  }
  function $c62be31ef05b0c90$var$getIdPathMap(array, idPath) {
    if (
      $c62be31ef05b0c90$var$idPathMaps.get(array) === undefined ||
      $c62be31ef05b0c90$var$idPathMaps.get(array)[idPath] === undefined
    )
      return $c62be31ef05b0c90$var$buildIdPathValueMap(array, idPath);
    else return $c62be31ef05b0c90$var$idPathMaps.get(array)[idPath];
  }
  function $c62be31ef05b0c90$var$keyToIndex(array, idPath, idValue) {
    idValue = idValue + "";
    let idx = $c62be31ef05b0c90$var$getIdPathMap(array, idPath)[idValue];
    if (
      idx === undefined ||
      $c62be31ef05b0c90$export$44b5bed83342a92f(array[idx], idPath) + "" !==
        idValue
    )
      idx = $c62be31ef05b0c90$var$buildIdPathValueMap(array, idPath)[idValue];
    return idx;
  }
  function $c62be31ef05b0c90$var$byKey(obj, key, valueToInsert) {
    if (obj[key] === undefined && valueToInsert !== undefined)
      obj[key] = valueToInsert;
    return obj[key];
  }
  function $c62be31ef05b0c90$var$byIdPath(
    array,
    idPath,
    idValue,
    valueToInsert
  ) {
    let idx =
      idPath !== ""
        ? $c62be31ef05b0c90$var$keyToIndex(array, idPath, idValue)
        : idValue;
    if (valueToInsert === $c62be31ef05b0c90$var$_delete_) {
      array.splice(idx, 1);
      $c62be31ef05b0c90$var$idPathMaps.delete(array);
      return Symbol("deleted");
    } else if (valueToInsert === $c62be31ef05b0c90$var$_newObject_) {
      if (idPath === "" && array[idx] === undefined) array[idx] = {};
    } else if (valueToInsert !== undefined) {
      if (idx !== undefined) array[idx] = valueToInsert;
      else if (
        idPath !== "" &&
        $c62be31ef05b0c90$export$44b5bed83342a92f(valueToInsert, idPath) +
          "" ===
          idValue + ""
      ) {
        array.push(valueToInsert);
        idx = array.length - 1;
      } else
        throw new Error(`byIdPath insert failed at [${idPath}=${idValue}]`);
    }
    return array[idx];
  }
  function $c62be31ef05b0c90$var$expectArray(obj) {
    if (!Array.isArray(obj))
      throw (0, $5lDHe.makeError)(
        "setByPath failed: expected array, found",
        obj
      );
  }
  function $c62be31ef05b0c90$var$expectObject(obj) {
    if (obj == null || !(obj instanceof Object))
      throw (0, $5lDHe.makeError)(
        "setByPath failed: expected Object, found",
        obj
      );
  }
  function $c62be31ef05b0c90$export$44b5bed83342a92f(obj, path) {
    const parts = $c62be31ef05b0c90$export$f5d2dd4cfd729958(path);
    let found = obj;
    let i, iMax, j, jMax;
    for (i = 0, iMax = parts.length; found !== undefined && i < iMax; i++) {
      const part = parts[i];
      if (Array.isArray(part))
        for (j = 0, jMax = part.length; found !== undefined && j < jMax; j++) {
          const key = part[j];
          found = found[key];
        }
      else {
        if (found.length === 0) {
          found = found[part.slice(1)];
          if (part[0] !== "=") return;
        } else if (part.includes("=")) {
          const [idPath, ...tail] = part.split("=");
          found = $c62be31ef05b0c90$var$byIdPath(found, idPath, tail.join("="));
        } else {
          j = parseInt(part, 10);
          found = found[j];
        }
      }
    }
    return found;
  }
  function $c62be31ef05b0c90$export$f65a19d15516795e(orig, path, val) {
    let obj = orig;
    const parts = $c62be31ef05b0c90$export$f5d2dd4cfd729958(path);
    while (obj != null && parts.length > 0) {
      const part = parts.shift();
      if (typeof part === "string") {
        const equalsOffset = part.indexOf("=");
        if (equalsOffset > -1) {
          if (equalsOffset === 0) $c62be31ef05b0c90$var$expectObject(obj);
          else $c62be31ef05b0c90$var$expectArray(obj);
          const idPath = part.slice(0, equalsOffset);
          const idValue = part.slice(equalsOffset + 1);
          obj = $c62be31ef05b0c90$var$byIdPath(
            obj,
            idPath,
            idValue,
            parts.length > 0 ? $c62be31ef05b0c90$var$_newObject_ : val
          );
          if (parts.length === 0) return true;
        } else {
          $c62be31ef05b0c90$var$expectArray(obj);
          const idx = parseInt(part, 10);
          if (parts.length > 0) obj = obj[idx];
          else {
            if (val !== $c62be31ef05b0c90$var$_delete_) {
              if (obj[idx] === val) return false;
              obj[idx] = val;
            } else obj.splice(idx, 1);
            return true;
          }
        }
      } else if (Array.isArray(part) && part.length > 0) {
        $c62be31ef05b0c90$var$expectObject(obj);
        while (part.length > 0) {
          const key = part.shift();
          if (part.length > 0 || parts.length > 0)
            obj = $c62be31ef05b0c90$var$byKey(
              obj,
              key,
              part.length > 0 ? {} : []
            );
          else {
            if (val !== $c62be31ef05b0c90$var$_delete_) {
              if (obj[key] === val) return false;
              obj[key] = val;
            } else {
              if (!Object.prototype.hasOwnProperty.call(obj, key)) return false;
              delete obj[key];
            }
            return true;
          }
        }
      } else throw new Error(`setByPath failed, bad path ${path}`);
    }
    throw new Error(`setByPath(${orig}, ${path}, ${val}) failed`);
  }
  function $c62be31ef05b0c90$export$102e532907108dad(orig, path) {
    if ($c62be31ef05b0c90$export$44b5bed83342a92f(orig, path) !== null)
      $c62be31ef05b0c90$export$f65a19d15516795e(
        orig,
        path,
        $c62be31ef05b0c90$var$_delete_
      );
  }
});
parcelRegister("5lDHe", function (module2, exports2) {
  $parcel$export(
    module2.exports,
    "makeError",
    () => $31366a4b885eb48b$export$5a4bb2b1c89bdce7
  );
  const $31366a4b885eb48b$var$stringify = (x) => {
    try {
      return JSON.stringify(x);
    } catch (_) {
      return "{has circular references}";
    }
  };
  const $31366a4b885eb48b$export$5a4bb2b1c89bdce7 = (...messages) =>
    new Error(messages.map($31366a4b885eb48b$var$stringify).join(" "));
});
parcelRegister("buKmK", function (module2, exports2) {
  $parcel$export(
    module2.exports,
    "bindings",
    () => $7d9f6326e1d5d994$export$97a1a3e6f39778d2
  );
  var $2dgdI = parcelRequire("2dgdI");
  var $gbrAN = parcelRequire("gbrAN");
  const $7d9f6326e1d5d994$export$97a1a3e6f39778d2 = {
    value: {
      toDOM: (0, $gbrAN.setValue),
      fromDOM(element) {
        return (0, $gbrAN.getValue)(element);
      },
    },
    set: {
      toDOM: (0, $gbrAN.setValue),
    },
    text: {
      toDOM(element, value) {
        element.textContent = value;
      },
    },
    enabled: {
      toDOM(element, value) {
        element.disabled = !value;
      },
    },
    disabled: {
      toDOM(element, value) {
        element.disabled = Boolean(value);
      },
    },
    style: {
      toDOM(element, value) {
        if (typeof value === "object")
          for (const prop of Object.keys(value))
            element.style[prop] = value[prop];
        else if (typeof value === "string")
          element.setAttribute("style", value);
        else throw new Error("style binding expects either a string or object");
      },
    },
    list: {
      toDOM(element, value, options) {
        const listBinding = (0, $2dgdI.getListBinding)(element, options);
        listBinding.update(value);
      },
    },
  };
});
parcelRegister("2dgdI", function (module2, exports2) {
  $parcel$export(
    module2.exports,
    "getListBinding",
    () => $ea2c6a36710de0a8$export$b0eb386be3b9fed8
  );
  var $hv4Z8 = parcelRequire("hv4Z8");
  var $gbrAN = parcelRequire("gbrAN");
  var $9nL7f = parcelRequire("9nL7f");
  var $eppu5 = parcelRequire("eppu5");
  var $5hOlm = parcelRequire("5hOlm");
  const $ea2c6a36710de0a8$var$listBindingRef = Symbol("list-binding");
  const $ea2c6a36710de0a8$var$SLICE_INTERVAL_MS = 16;
  function $ea2c6a36710de0a8$var$updateRelativeBindings(element, path) {
    const boundElements = [
      ...element.querySelectorAll((0, $5hOlm.BOUND_SELECTOR)),
    ];
    if (element.matches((0, $5hOlm.BOUND_SELECTOR)))
      boundElements.unshift(element);
    for (const boundElement of boundElements) {
      const bindings = (0, $5hOlm.elementToBindings).get(boundElement);
      for (const binding of bindings) {
        if (binding.path.startsWith("^"))
          binding.path = `${path}${binding.path.substring(1)}`;
        if (binding.binding.toDOM != null)
          binding.binding.toDOM(boundElement, (0, $eppu5.xin)[binding.path]);
      }
    }
  }

  class $ea2c6a36710de0a8$var$ListBinding {
    constructor(boundElement, options = {}) {
      this._array = [];
      this.boundElement = boundElement;
      this.itemToElement = new WeakMap();
      if (boundElement.children.length !== 1)
        throw new Error(
          "ListBinding expects an element with exactly one child element"
        );
      if (boundElement.children[0] instanceof HTMLTemplateElement) {
        const template = boundElement.children[0];
        if (template.content.children.length !== 1)
          throw new Error(
            "ListBinding expects a template with exactly one child element"
          );
        this.template = (0, $5hOlm.cloneWithBindings)(
          template.content.children[0]
        );
      } else {
        this.template = boundElement.children[0];
        this.template.remove();
      }
      this.listTop = document.createElement("div");
      this.listBottom = document.createElement("div");
      this.boundElement.append(this.listTop);
      this.boundElement.append(this.listBottom);
      this.options = options;
      if (options.virtual != null) {
        (0, $gbrAN.resizeObserver).observe(this.boundElement);
        this._update = (0, $9nL7f.throttle)(() => {
          this.update(this._array, true);
        }, $ea2c6a36710de0a8$var$SLICE_INTERVAL_MS);
        this.boundElement.addEventListener("scroll", this._update);
        this.boundElement.addEventListener("resize", this._update);
      }
    }
    visibleSlice() {
      const { virtual, hiddenProp, visibleProp } = this.options;
      let visibleArray = this._array;
      if (hiddenProp !== undefined)
        visibleArray = visibleArray.filter((item) => item[hiddenProp] !== true);
      if (visibleProp !== undefined)
        visibleArray = visibleArray.filter(
          (item) => item[visibleProp] === true
        );
      let firstItem = 0;
      let lastItem = visibleArray.length - 1;
      let topBuffer = 0;
      let bottomBuffer = 0;
      if (virtual != null) {
        const width = this.boundElement.offsetWidth;
        const height = this.boundElement.offsetHeight;
        const visibleColumns =
          virtual.width != null
            ? Math.max(1, Math.floor(width / virtual.width))
            : 1;
        const visibleRows = Math.ceil(height / virtual.height) + 1;
        const totalRows = Math.ceil(visibleArray.length / visibleColumns);
        const visibleItems = visibleColumns * visibleRows;
        let topRow = Math.floor(this.boundElement.scrollTop / virtual.height);
        if (topRow > totalRows - visibleRows + 1)
          topRow = Math.max(0, totalRows - visibleRows + 1);
        firstItem = topRow * visibleColumns;
        lastItem = firstItem + visibleItems - 1;
        topBuffer = topRow * virtual.height;
        bottomBuffer = Math.max(
          totalRows * virtual.height - height - topBuffer,
          0
        );
      }
      return {
        items: visibleArray,
        firstItem,
        lastItem,
        topBuffer,
        bottomBuffer,
      };
    }
    update(array, isSlice) {
      if (array == null) array = [];
      this._array = array;
      const { hiddenProp, visibleProp } = this.options;
      const arrayPath = (0, $5hOlm.xinPath)(array);
      const slice = this.visibleSlice();
      this.boundElement.classList.toggle(
        "-xin-empty-list",
        slice.items.length === 0
      );
      const previousSlice = this._previousSlice;
      const { firstItem, lastItem, topBuffer, bottomBuffer } = slice;
      if (
        hiddenProp === undefined &&
        visibleProp === undefined &&
        isSlice === true &&
        previousSlice != null &&
        firstItem === previousSlice.firstItem &&
        lastItem === previousSlice.lastItem
      )
        return;
      this._previousSlice = slice;
      let removed = 0;
      let moved = 0;
      let created = 0;
      for (const element of [...this.boundElement.children]) {
        if (element === this.listTop || element === this.listBottom) continue;
        const proxy = (0, $5hOlm.elementToItem).get(element);
        if (proxy == null) element.remove();
        else {
          const idx = slice.items.indexOf(proxy);
          if (idx < firstItem || idx > lastItem) {
            element.remove();
            this.itemToElement.delete(proxy);
            (0, $5hOlm.elementToItem).delete(element);
            removed++;
          }
        }
      }
      this.listTop.style.height = String(topBuffer) + "px";
      this.listBottom.style.height = String(bottomBuffer) + "px";
      const elements = [];
      const { idPath } = this.options;
      for (let i = firstItem; i <= lastItem; i++) {
        const item = slice.items[i];
        if (item === undefined) continue;
        let element = this.itemToElement.get((0, $5hOlm.xinValue)(item));
        if (element == null) {
          created++;
          element = (0, $5hOlm.cloneWithBindings)(this.template);
          if (typeof item === "object") {
            this.itemToElement.set((0, $5hOlm.xinValue)(item), element);
            (0, $5hOlm.elementToItem).set(element, (0, $5hOlm.xinValue)(item));
          }
          this.boundElement.insertBefore(element, this.listBottom);
          if (idPath != null) {
            const idValue = item[idPath];
            const itemPath = `${arrayPath}[${idPath}=${idValue}]`;
            $ea2c6a36710de0a8$var$updateRelativeBindings(element, itemPath);
          } else {
            const itemPath = `${arrayPath}[${i}]`;
            $ea2c6a36710de0a8$var$updateRelativeBindings(element, itemPath);
          }
        }
        elements.push(element);
      }
      let insertionPoint = null;
      for (const element of elements) {
        if (element.previousElementSibling !== insertionPoint) {
          moved++;
          if (insertionPoint?.nextElementSibling != null)
            this.boundElement.insertBefore(
              element,
              insertionPoint.nextElementSibling
            );
          else this.boundElement.insertBefore(element, this.listBottom);
        }
        insertionPoint = element;
      }
      if ((0, $hv4Z8.settings).perf)
        console.log(arrayPath, "updated", {
          removed,
          created,
          moved,
        });
    }
  }
  const $ea2c6a36710de0a8$export$b0eb386be3b9fed8 = (boundElement, options) => {
    let listBinding = boundElement[$ea2c6a36710de0a8$var$listBindingRef];
    if (listBinding === undefined) {
      listBinding = new $ea2c6a36710de0a8$var$ListBinding(
        boundElement,
        options
      );
      boundElement[$ea2c6a36710de0a8$var$listBindingRef] = listBinding;
    }
    return listBinding;
  };
});
parcelRegister("gbrAN", function (module2, exports2) {
  $parcel$export(
    module2.exports,
    "dispatch",
    () => $f314c6851ceb0f9e$export$635e15bbd66f01ea
  );
  $parcel$export(
    module2.exports,
    "setValue",
    () => $f314c6851ceb0f9e$export$80746c6bc6142fc8
  );
  $parcel$export(
    module2.exports,
    "getValue",
    () => $f314c6851ceb0f9e$export$bf7199a9ebcb84a9
  );
  $parcel$export(
    module2.exports,
    "resizeObserver",
    () => $f314c6851ceb0f9e$export$b13421f1ae71d316
  );
  $parcel$export(
    module2.exports,
    "appendContentToElement",
    () => $f314c6851ceb0f9e$export$6bb13967611cdb1
  );
  var $5hOlm = parcelRequire("5hOlm");
  const $f314c6851ceb0f9e$export$635e15bbd66f01ea = (target, type) => {
    const event = new Event(type);
    target.dispatchEvent(event);
  };
  const $f314c6851ceb0f9e$var$valueType = (element) => {
    if (element instanceof HTMLInputElement) return element.type;
    else if (
      element instanceof HTMLSelectElement &&
      element.hasAttribute("multiple")
    )
      return "multi-select";
    else return "other";
  };
  const $f314c6851ceb0f9e$export$80746c6bc6142fc8 = (element, newValue) => {
    switch ($f314c6851ceb0f9e$var$valueType(element)) {
      case "radio":
        element.checked = element.value === newValue;
        break;
      case "checkbox":
        element.checked = !!newValue;
        break;
      case "date":
        element.valueAsDate = new Date(newValue);
        break;
      case "multi-select":
        for (const option of [...element.querySelectorAll("option")])
          option.selected = newValue[option.value];
        break;
      default:
        element.value = newValue;
    }
  };
  const $f314c6851ceb0f9e$export$bf7199a9ebcb84a9 = (element) => {
    switch ($f314c6851ceb0f9e$var$valueType(element)) {
      case "radio": {
        const radio = element.parentElement?.querySelector(
          `[name="${element.name}"]:checked`
        );
        return radio != null ? radio.value : null;
      }
      case "checkbox":
        return element.checked;
      case "date":
        return element.valueAsDate?.toISOString();
      case "multi-select":
        return [...element.querySelectorAll("option")].reduce((map, option) => {
          map[option.value] = option.selected;
          return map;
        }, {});
      default:
        return element.value;
    }
  };
  const { ResizeObserver: $f314c6851ceb0f9e$var$ResizeObserver } = globalThis;
  const $f314c6851ceb0f9e$export$b13421f1ae71d316 =
    $f314c6851ceb0f9e$var$ResizeObserver != null
      ? new $f314c6851ceb0f9e$var$ResizeObserver((entries) => {
          for (const entry of entries) {
            const element = entry.target;
            $f314c6851ceb0f9e$export$635e15bbd66f01ea(element, "resize");
          }
        })
      : {
          observe() {},
          unobserve() {},
        };
  const $f314c6851ceb0f9e$export$6bb13967611cdb1 = (
    elt,
    content,
    cloneElements = true
  ) => {
    if (elt != null && content != null) {
      if (typeof content === "string") elt.textContent = content;
      else if (Array.isArray(content))
        content.forEach((node) => {
          elt.append(
            node instanceof Node && cloneElements
              ? (0, $5hOlm.cloneWithBindings)(node)
              : node
          );
        });
      else if (content instanceof Node)
        elt.append(
          cloneElements ? (0, $5hOlm.cloneWithBindings)(content) : content
        );
      else throw new Error("expect text content or document node");
    }
  };
});
parcelRegister("9nL7f", function (module2, exports2) {
  $parcel$export(
    module2.exports,
    "debounce",
    () => $fb7e454a17657925$export$61fc7d43ac8f84b0
  );
  $parcel$export(
    module2.exports,
    "throttle",
    () => $fb7e454a17657925$export$de363e709c412c8a
  );
  const $fb7e454a17657925$export$61fc7d43ac8f84b0 = (
    origFn,
    minInterval = 250
  ) => {
    let debounceId;
    return (...args) => {
      if (debounceId !== undefined) clearTimeout(debounceId);
      debounceId = setTimeout(() => {
        origFn(...args);
      }, minInterval);
    };
  };
  const $fb7e454a17657925$export$de363e709c412c8a = (
    origFn,
    minInterval = 250
  ) => {
    let debounceId;
    let previousCall = Date.now() - minInterval;
    let inFlight = false;
    return (...args) => {
      clearTimeout(debounceId);
      debounceId = setTimeout(async () => {
        origFn(...args);
        previousCall = Date.now();
      }, minInterval);
      if (!inFlight && Date.now() - previousCall >= minInterval) {
        inFlight = true;
        try {
          origFn(...args);
          previousCall = Date.now();
        } finally {
          inFlight = false;
        }
      }
    };
  };
});
parcelRegister("5JLBr", function (module2, exports2) {
  $parcel$export(
    module2.exports,
    "camelToKabob",
    () => $bed4bed3dcfb6f9a$export$87ae551bf60f4bb
  );
  $parcel$export(
    module2.exports,
    "kabobToCamel",
    () => $bed4bed3dcfb6f9a$export$fd322201efdc650f
  );
  function $bed4bed3dcfb6f9a$export$87ae551bf60f4bb(s) {
    return s.replace(/[A-Z]/g, (c) => {
      return `-${c.toLocaleLowerCase()}`;
    });
  }
  function $bed4bed3dcfb6f9a$export$fd322201efdc650f(s) {
    return s.replace(/-([a-z])/g, (_, c) => {
      return c.toLocaleUpperCase();
    });
  }
});
parcelRegister("lGBgM", function (module2, exports2) {
  $parcel$export(
    module2.exports,
    "makeComponent",
    () => $cf96335958b9d6da$export$3bc26eec1cc2439f
  );
  var $6Jaab = parcelRequire("6Jaab");
  var $aVpVG2 = parcelRequire("aVpVG");
  var $2okor = parcelRequire("2okor");
  var $9sLMf = parcelRequire("9sLMf");
  var $aNHSH = parcelRequire("aNHSH");
  const $cf96335958b9d6da$export$7564cc5630cf4caa = {};
  function $cf96335958b9d6da$export$3bc26eec1cc2439f(tag2, blueprint2) {
    const { type, styleSpec } = blueprint2(tag2, {
      Color: $6Jaab.Color,
      Component: $aVpVG2.Component,
      elements: $9sLMf.elements,
      svgElements: $9sLMf.svgElements,
      mathML: $9sLMf.mathML,
      varDefault: $2okor.varDefault,
      vars: $2okor.vars,
      xinProxy: $aNHSH.xinProxy,
    });
    const packagedComponent = {
      type,
      creator: type.elementCreator({
        tag: tag2,
        styleSpec,
      }),
    };
    $cf96335958b9d6da$export$7564cc5630cf4caa[tag2] = packagedComponent;
    return packagedComponent;
  }
});
parcelRegister("aNHSH", function (module2, exports2) {
  $parcel$export(
    module2.exports,
    "xinProxy",
    () => $7bb234cc8fd49201$export$95a552d2395ab4c4
  );
  var $eppu5 = parcelRequire("eppu5");
  function $7bb234cc8fd49201$export$95a552d2395ab4c4(obj, boxScalars = false) {
    const registered = {};
    Object.keys(obj).forEach((key) => {
      (0, $eppu5.xin)[key] = obj[key];
      registered[key] = boxScalars
        ? (0, $eppu5.boxed)[key]
        : (0, $eppu5.xin)[key];
    });
    return registered;
  }
});
var $kCu8Y = parcelRequire("kCu8Y");
var $buKmK = parcelRequire("buKmK");
var $2okor = parcelRequire("2okor");
var $6Jaab = parcelRequire("6Jaab");
var $aVpVG2 = parcelRequire("aVpVG");
var $9sLMf = parcelRequire("9sLMf");
var $eppu5 = parcelRequire("eppu5");
var $5hOlm = parcelRequire("5hOlm");
var $9nL7f = parcelRequire("9nL7f");
var $4c651860c5272284$export$93b87f7746612069 = (test = () => true) => {
  const savedState = localStorage.getItem("xin-state");
  if (savedState != null) {
    const state = JSON.parse(savedState);
    for (const key of Object.keys(state).filter(test))
      if ((0, $eppu5.xin)[key] !== undefined)
        Object.assign((0, $eppu5.xin)[key], state[key]);
      else (0, $eppu5.xin)[key] = state[key];
  }
  const saveState = (0, $9nL7f.debounce)(() => {
    const obj = {};
    const state = (0, $eppu5.xin)[(0, $5hOlm.XIN_VALUE)];
    for (const key of Object.keys(state).filter(test)) obj[key] = state[key];
    localStorage.setItem("xin-state", JSON.stringify(obj));
    console.log("xin state saved to localStorage");
  }, 500);
  (0, $eppu5.observe)(test, saveState);
};
var $5hOlm = parcelRequire("5hOlm");
var $lGBgM2 = parcelRequire("lGBgM");
var $drWRQ = parcelRequire("drWRQ");
var $hv4Z8 = parcelRequire("hv4Z8");
var $9nL7f = parcelRequire("9nL7f");
var $eppu5 = parcelRequire("eppu5");
var $5lOGz = parcelRequire("5lOGz");
parcelRequire("3x0mh");
var $526cc5d62ff194fb$exports = {};
var $aNHSH = parcelRequire("aNHSH");
var $b5796eaeba5c782e$export$2385a24977818dd0 = parcelRequire("kCu8Y").bind;
var $b5796eaeba5c782e$export$af631764ddc44097 = parcelRequire("kCu8Y").on;
var $7d9f6326e1d5d994$export$97a1a3e6f39778d2 = parcelRequire("buKmK").bindings;
var $49cee7f7f866c751$export$dbf350e5966cf602 = parcelRequire("2okor").css;
var $49cee7f7f866c751$export$8279dba9b7d4e420 =
  parcelRequire("2okor").invertLuminance;
var $49cee7f7f866c751$export$808aaf1b460dc9af = parcelRequire("2okor").darkMode;
var $49cee7f7f866c751$export$90d0ea046136e3ed = parcelRequire("2okor").initVars;
var $49cee7f7f866c751$export$3cb96c9f6c8d16a4 = parcelRequire("2okor").vars;
var $49cee7f7f866c751$export$75c0e6adb3e38f31 =
  parcelRequire("2okor").varDefault;
var $49cee7f7f866c751$export$9d753cd7ae895cce =
  parcelRequire("2okor").StyleSheet;
var $72989831e95a2bab$export$892596cec99bc70e = parcelRequire("6Jaab").Color;
var $cd387b053feba574$export$16fa2f45be04daa8 =
  parcelRequire("aVpVG").Component;
var $9e0c0b8784c80412$export$7a5d735b2ab6389d = parcelRequire("9sLMf").elements;
var $9e0c0b8784c80412$export$cf20112a1bc148da =
  parcelRequire("9sLMf").svgElements;
var $9e0c0b8784c80412$export$8ec252cfdd664597 = parcelRequire("9sLMf").mathML;
var $e921b0bd4f6415ab$export$4c309843c07ce679 =
  parcelRequire("5hOlm").getListItem;
var $e921b0bd4f6415ab$export$40700dafb97c3799 = parcelRequire("5hOlm").xinPath;
var $e921b0bd4f6415ab$export$5dcba2d45033d435 = parcelRequire("5hOlm").xinValue;
var $cf96335958b9d6da$export$3bc26eec1cc2439f =
  parcelRequire("lGBgM").makeComponent;
var $0e50e8a626908591$export$5e0dd9fd5d74e0c5 = parcelRequire("drWRQ").MoreMath;
var $34b63e9d5b96494c$export$a5a6e0b888b2c992 = parcelRequire("hv4Z8").settings;
var $fb7e454a17657925$export$de363e709c412c8a = parcelRequire("9nL7f").throttle;
var $fb7e454a17657925$export$61fc7d43ac8f84b0 = parcelRequire("9nL7f").debounce;
var $547f11326d897190$export$966034e6c6823eb0 = parcelRequire("eppu5").xin;
var $547f11326d897190$export$d1203567a167490e = parcelRequire("eppu5").observe;
var $f0b099915f91bd21$export$23a2283368c55ea2 =
  parcelRequire("5lOGz").unobserve;
var $f0b099915f91bd21$export$d0b7ea69ab6056df = parcelRequire("5lOGz").touch;
var $f0b099915f91bd21$export$253d09664e30b967 =
  parcelRequire("5lOGz").observerShouldBeRemoved;
var $f0b099915f91bd21$export$1c2919332513559b = parcelRequire("5lOGz").updates;
var $7bb234cc8fd49201$export$95a552d2395ab4c4 = parcelRequire("aNHSH").xinProxy;
var Blueprint2 = parcelRequire("3x0mh").Blueprint;
var blueprint2 = parcelRequire("3x0mh").blueprint;
var BlueprintLoader2 = parcelRequire("3x0mh").BlueprintLoader;
var blueprintLoader2 = parcelRequire("3x0mh").blueprintLoader;
var $db8c79eba3148e96$exports = parcelRequire("3x0mh")["*"];

// node_modules/@lit/reactive-element/css-tag.js
var t = globalThis;
var e =
  t.ShadowRoot &&
  (t.ShadyCSS === undefined || t.ShadyCSS.nativeShadow) &&
  "adoptedStyleSheets" in Document.prototype &&
  "replace" in CSSStyleSheet.prototype;
var s = Symbol();
var o = new WeakMap();

class n {
  constructor(t2, e2, o2) {
    if (((this._$cssResult$ = true), o2 !== s))
      throw Error(
        "CSSResult is not constructable. Use `unsafeCSS` or `css` instead."
      );
    (this.cssText = t2), (this.t = e2);
  }
  get styleSheet() {
    let t2 = this.o;
    const s2 = this.t;
    if (e && t2 === undefined) {
      const e2 = s2 !== undefined && s2.length === 1;
      e2 && (t2 = o.get(s2)),
        t2 === undefined &&
          ((this.o = t2 = new CSSStyleSheet()).replaceSync(this.cssText),
          e2 && o.set(s2, t2));
    }
    return t2;
  }
  toString() {
    return this.cssText;
  }
}
var r = (t2) => new n(typeof t2 == "string" ? t2 : t2 + "", undefined, s);
var i = (t2, ...e2) => {
  const o2 =
    t2.length === 1
      ? t2[0]
      : e2.reduce(
          (e3, s2, o3) =>
            e3 +
            ((t3) => {
              if (t3._$cssResult$ === true) return t3.cssText;
              if (typeof t3 == "number") return t3;
              throw Error(
                "Value passed to 'css' function must be a 'css' function result: " +
                  t3 +
                  ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."
              );
            })(s2) +
            t2[o3 + 1],
          t2[0]
        );
  return new n(o2, t2, s);
};
var S = (s2, o2) => {
  if (e)
    s2.adoptedStyleSheets = o2.map((t2) =>
      t2 instanceof CSSStyleSheet ? t2 : t2.styleSheet
    );
  else
    for (const e2 of o2) {
      const o3 = document.createElement("style"),
        n2 = t.litNonce;
      n2 !== undefined && o3.setAttribute("nonce", n2),
        (o3.textContent = e2.cssText),
        s2.appendChild(o3);
    }
};
var c = e
  ? (t2) => t2
  : (t2) =>
      t2 instanceof CSSStyleSheet
        ? ((t3) => {
            let e2 = "";
            for (const s2 of t3.cssRules) e2 += s2.cssText;
            return r(e2);
          })(t2)
        : t2;

// node_modules/@lit/reactive-element/reactive-element.js
var {
  is: i2,
  defineProperty: e2,
  getOwnPropertyDescriptor: r2,
  getOwnPropertyNames: h,
  getOwnPropertySymbols: o2,
  getPrototypeOf: n2,
} = Object;
var a = globalThis;
var c2 = a.trustedTypes;
var l = c2 ? c2.emptyScript : "";
var p = a.reactiveElementPolyfillSupport;
var d = (t2, s2) => t2;
var u = {
  toAttribute(t2, s2) {
    switch (s2) {
      case Boolean:
        t2 = t2 ? l : null;
        break;
      case Object:
      case Array:
        t2 = t2 == null ? t2 : JSON.stringify(t2);
    }
    return t2;
  },
  fromAttribute(t2, s2) {
    let i3 = t2;
    switch (s2) {
      case Boolean:
        i3 = t2 !== null;
        break;
      case Number:
        i3 = t2 === null ? null : Number(t2);
        break;
      case Object:
      case Array:
        try {
          i3 = JSON.parse(t2);
        } catch (t3) {
          i3 = null;
        }
    }
    return i3;
  },
};
var f = (t2, s2) => !i2(t2, s2);
var y = {
  attribute: true,
  type: String,
  converter: u,
  reflect: false,
  hasChanged: f,
};
(Symbol.metadata ??= Symbol("metadata")),
  (a.litPropertyMetadata ??= new WeakMap());

class b extends HTMLElement {
  static addInitializer(t2) {
    this._$Ei(), (this.l ??= []).push(t2);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t2, s2 = y) {
    if (
      (s2.state && (s2.attribute = false),
      this._$Ei(),
      this.elementProperties.set(t2, s2),
      !s2.noAccessor)
    ) {
      const i3 = Symbol(),
        r3 = this.getPropertyDescriptor(t2, i3, s2);
      r3 !== undefined && e2(this.prototype, t2, r3);
    }
  }
  static getPropertyDescriptor(t2, s2, i3) {
    const { get: e3, set: h2 } = r2(this.prototype, t2) ?? {
      get() {
        return this[s2];
      },
      set(t3) {
        this[s2] = t3;
      },
    };
    return {
      get() {
        return e3?.call(this);
      },
      set(s3) {
        const r3 = e3?.call(this);
        h2.call(this, s3), this.requestUpdate(t2, r3, i3);
      },
      configurable: true,
      enumerable: true,
    };
  }
  static getPropertyOptions(t2) {
    return this.elementProperties.get(t2) ?? y;
  }
  static _$Ei() {
    if (this.hasOwnProperty(d("elementProperties"))) return;
    const t2 = n2(this);
    t2.finalize(),
      t2.l !== undefined && (this.l = [...t2.l]),
      (this.elementProperties = new Map(t2.elementProperties));
  }
  static finalize() {
    if (this.hasOwnProperty(d("finalized"))) return;
    if (
      ((this.finalized = true),
      this._$Ei(),
      this.hasOwnProperty(d("properties")))
    ) {
      const t3 = this.properties,
        s2 = [...h(t3), ...o2(t3)];
      for (const i3 of s2) this.createProperty(i3, t3[i3]);
    }
    const t2 = this[Symbol.metadata];
    if (t2 !== null) {
      const s2 = litPropertyMetadata.get(t2);
      if (s2 !== undefined)
        for (const [t3, i3] of s2) this.elementProperties.set(t3, i3);
    }
    this._$Eh = new Map();
    for (const [t3, s2] of this.elementProperties) {
      const i3 = this._$Eu(t3, s2);
      i3 !== undefined && this._$Eh.set(i3, t3);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(s2) {
    const i3 = [];
    if (Array.isArray(s2)) {
      const e3 = new Set(s2.flat(1 / 0).reverse());
      for (const s3 of e3) i3.unshift(c(s3));
    } else s2 !== undefined && i3.push(c(s2));
    return i3;
  }
  static _$Eu(t2, s2) {
    const i3 = s2.attribute;
    return i3 === false
      ? undefined
      : typeof i3 == "string"
      ? i3
      : typeof t2 == "string"
      ? t2.toLowerCase()
      : undefined;
  }
  constructor() {
    super(),
      (this._$Ep = undefined),
      (this.isUpdatePending = false),
      (this.hasUpdated = false),
      (this._$Em = null),
      this._$Ev();
  }
  _$Ev() {
    (this._$ES = new Promise((t2) => (this.enableUpdating = t2))),
      (this._$AL = new Map()),
      this._$E_(),
      this.requestUpdate(),
      this.constructor.l?.forEach((t2) => t2(this));
  }
  addController(t2) {
    (this._$EO ??= new Set()).add(t2),
      this.renderRoot !== undefined && this.isConnected && t2.hostConnected?.();
  }
  removeController(t2) {
    this._$EO?.delete(t2);
  }
  _$E_() {
    const t2 = new Map(),
      s2 = this.constructor.elementProperties;
    for (const i3 of s2.keys())
      this.hasOwnProperty(i3) && (t2.set(i3, this[i3]), delete this[i3]);
    t2.size > 0 && (this._$Ep = t2);
  }
  createRenderRoot() {
    const t2 =
      this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return S(t2, this.constructor.elementStyles), t2;
  }
  connectedCallback() {
    (this.renderRoot ??= this.createRenderRoot()),
      this.enableUpdating(true),
      this._$EO?.forEach((t2) => t2.hostConnected?.());
  }
  enableUpdating(t2) {}
  disconnectedCallback() {
    this._$EO?.forEach((t2) => t2.hostDisconnected?.());
  }
  attributeChangedCallback(t2, s2, i3) {
    this._$AK(t2, i3);
  }
  _$EC(t2, s2) {
    const i3 = this.constructor.elementProperties.get(t2),
      e3 = this.constructor._$Eu(t2, i3);
    if (e3 !== undefined && i3.reflect === true) {
      const r3 = (
        i3.converter?.toAttribute !== undefined ? i3.converter : u
      ).toAttribute(s2, i3.type);
      (this._$Em = t2),
        r3 == null ? this.removeAttribute(e3) : this.setAttribute(e3, r3),
        (this._$Em = null);
    }
  }
  _$AK(t2, s2) {
    const i3 = this.constructor,
      e3 = i3._$Eh.get(t2);
    if (e3 !== undefined && this._$Em !== e3) {
      const t3 = i3.getPropertyOptions(e3),
        r3 =
          typeof t3.converter == "function"
            ? { fromAttribute: t3.converter }
            : t3.converter?.fromAttribute !== undefined
            ? t3.converter
            : u;
      (this._$Em = e3),
        (this[e3] = r3.fromAttribute(s2, t3.type)),
        (this._$Em = null);
    }
  }
  requestUpdate(t2, s2, i3) {
    if (t2 !== undefined) {
      if (
        ((i3 ??= this.constructor.getPropertyOptions(t2)),
        !(i3.hasChanged ?? f)(this[t2], s2))
      )
        return;
      this.P(t2, s2, i3);
    }
    this.isUpdatePending === false && (this._$ES = this._$ET());
  }
  P(t2, s2, i3) {
    this._$AL.has(t2) || this._$AL.set(t2, s2),
      i3.reflect === true &&
        this._$Em !== t2 &&
        (this._$Ej ??= new Set()).add(t2);
  }
  async _$ET() {
    this.isUpdatePending = true;
    try {
      await this._$ES;
    } catch (t3) {
      Promise.reject(t3);
    }
    const t2 = this.scheduleUpdate();
    return t2 != null && (await t2), !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (((this.renderRoot ??= this.createRenderRoot()), this._$Ep)) {
        for (const [t4, s3] of this._$Ep) this[t4] = s3;
        this._$Ep = undefined;
      }
      const t3 = this.constructor.elementProperties;
      if (t3.size > 0)
        for (const [s3, i3] of t3)
          i3.wrapped !== true ||
            this._$AL.has(s3) ||
            this[s3] === undefined ||
            this.P(s3, this[s3], i3);
    }
    let t2 = false;
    const s2 = this._$AL;
    try {
      (t2 = this.shouldUpdate(s2)),
        t2
          ? (this.willUpdate(s2),
            this._$EO?.forEach((t3) => t3.hostUpdate?.()),
            this.update(s2))
          : this._$EU();
    } catch (s3) {
      throw ((t2 = false), this._$EU(), s3);
    }
    t2 && this._$AE(s2);
  }
  willUpdate(t2) {}
  _$AE(t2) {
    this._$EO?.forEach((t3) => t3.hostUpdated?.()),
      this.hasUpdated || ((this.hasUpdated = true), this.firstUpdated(t2)),
      this.updated(t2);
  }
  _$EU() {
    (this._$AL = new Map()), (this.isUpdatePending = false);
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t2) {
    return true;
  }
  update(t2) {
    (this._$Ej &&= this._$Ej.forEach((t3) => this._$EC(t3, this[t3]))),
      this._$EU();
  }
  updated(t2) {}
  firstUpdated(t2) {}
}
(b.elementStyles = []),
  (b.shadowRootOptions = { mode: "open" }),
  (b[d("elementProperties")] = new Map()),
  (b[d("finalized")] = new Map()),
  p?.({ ReactiveElement: b }),
  (a.reactiveElementVersions ??= []).push("2.0.4");

// node_modules/lit-html/lit-html.js
var t2 = globalThis;
var i3 = t2.trustedTypes;
var s2 = i3
  ? i3.createPolicy("lit-html", { createHTML: (t3) => t3 })
  : undefined;
var e3 = "$lit$";
var h2 = `lit$${Math.random().toFixed(9).slice(2)}$`;
var o3 = "?" + h2;
var n3 = `<${o3}>`;
var r3 = document;
var l2 = () => r3.createComment("");
var c3 = (t3) =>
  t3 === null || (typeof t3 != "object" && typeof t3 != "function");
var a2 = Array.isArray;
var u2 = (t3) => a2(t3) || typeof t3?.[Symbol.iterator] == "function";
var d2 = `[ \t
\f\r]`;
var f2 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var v = /-->/g;
var _ = />/g;
var m = RegExp(
  `>|${d2}(?:([^\\s"'>=/]+)(${d2}*=${d2}*(?:[^ \t
\f\r"'\`<>=]|("|')|))|$)`,
  "g"
);
var p2 = /'/g;
var g = /"/g;
var $ = /^(?:script|style|textarea|title)$/i;
var y2 =
  (t3) =>
  (i4, ...s3) => ({ _$litType$: t3, strings: i4, values: s3 });
var x = y2(1);
var b2 = y2(2);
var w = y2(3);
var T = Symbol.for("lit-noChange");
var E = Symbol.for("lit-nothing");
var A = new WeakMap();
var C = r3.createTreeWalker(r3, 129);
function P(t3, i4) {
  if (!a2(t3) || !t3.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return s2 !== undefined ? s2.createHTML(i4) : i4;
}
var V = (t3, i4) => {
  const s3 = t3.length - 1,
    o4 = [];
  let r4,
    l3 = i4 === 2 ? "<svg>" : i4 === 3 ? "<math>" : "",
    c4 = f2;
  for (let i5 = 0; i5 < s3; i5++) {
    const s4 = t3[i5];
    let a3,
      u3,
      d3 = -1,
      y3 = 0;
    for (
      ;
      y3 < s4.length && ((c4.lastIndex = y3), (u3 = c4.exec(s4)), u3 !== null);

    )
      (y3 = c4.lastIndex),
        c4 === f2
          ? u3[1] === "!--"
            ? (c4 = v)
            : u3[1] !== undefined
            ? (c4 = _)
            : u3[2] !== undefined
            ? ($.test(u3[2]) && (r4 = RegExp("</" + u3[2], "g")), (c4 = m))
            : u3[3] !== undefined && (c4 = m)
          : c4 === m
          ? u3[0] === ">"
            ? ((c4 = r4 ?? f2), (d3 = -1))
            : u3[1] === undefined
            ? (d3 = -2)
            : ((d3 = c4.lastIndex - u3[2].length),
              (a3 = u3[1]),
              (c4 = u3[3] === undefined ? m : u3[3] === '"' ? g : p2))
          : c4 === g || c4 === p2
          ? (c4 = m)
          : c4 === v || c4 === _
          ? (c4 = f2)
          : ((c4 = m), (r4 = undefined));
    const x2 = c4 === m && t3[i5 + 1].startsWith("/>") ? " " : "";
    l3 +=
      c4 === f2
        ? s4 + n3
        : d3 >= 0
        ? (o4.push(a3), s4.slice(0, d3) + e3 + s4.slice(d3) + h2 + x2)
        : s4 + h2 + (d3 === -2 ? i5 : x2);
  }
  return [
    P(
      t3,
      l3 + (t3[s3] || "<?>") + (i4 === 2 ? "</svg>" : i4 === 3 ? "</math>" : "")
    ),
    o4,
  ];
};

class N {
  constructor({ strings: t3, _$litType$: s3 }, n4) {
    let r4;
    this.parts = [];
    let c4 = 0,
      a3 = 0;
    const u3 = t3.length - 1,
      d3 = this.parts,
      [f3, v2] = V(t3, s3);
    if (
      ((this.el = N.createElement(f3, n4)),
      (C.currentNode = this.el.content),
      s3 === 2 || s3 === 3)
    ) {
      const t4 = this.el.content.firstChild;
      t4.replaceWith(...t4.childNodes);
    }
    for (; (r4 = C.nextNode()) !== null && d3.length < u3; ) {
      if (r4.nodeType === 1) {
        if (r4.hasAttributes())
          for (const t4 of r4.getAttributeNames())
            if (t4.endsWith(e3)) {
              const i4 = v2[a3++],
                s4 = r4.getAttribute(t4).split(h2),
                e4 = /([.?@])?(.*)/.exec(i4);
              d3.push({
                type: 1,
                index: c4,
                name: e4[2],
                strings: s4,
                ctor:
                  e4[1] === "." ? H : e4[1] === "?" ? I : e4[1] === "@" ? L : k,
              }),
                r4.removeAttribute(t4);
            } else
              t4.startsWith(h2) &&
                (d3.push({ type: 6, index: c4 }), r4.removeAttribute(t4));
        if ($.test(r4.tagName)) {
          const t4 = r4.textContent.split(h2),
            s4 = t4.length - 1;
          if (s4 > 0) {
            r4.textContent = i3 ? i3.emptyScript : "";
            for (let i4 = 0; i4 < s4; i4++)
              r4.append(t4[i4], l2()),
                C.nextNode(),
                d3.push({ type: 2, index: ++c4 });
            r4.append(t4[s4], l2());
          }
        }
      } else if (r4.nodeType === 8)
        if (r4.data === o3) d3.push({ type: 2, index: c4 });
        else {
          let t4 = -1;
          for (; (t4 = r4.data.indexOf(h2, t4 + 1)) !== -1; )
            d3.push({ type: 7, index: c4 }), (t4 += h2.length - 1);
        }
      c4++;
    }
  }
  static createElement(t3, i4) {
    const s3 = r3.createElement("template");
    return (s3.innerHTML = t3), s3;
  }
}
function S2(t3, i4, s3 = t3, e4) {
  if (i4 === T) return i4;
  let h3 = e4 !== undefined ? s3._$Co?.[e4] : s3._$Cl;
  const o4 = c3(i4) ? undefined : i4._$litDirective$;
  return (
    h3?.constructor !== o4 &&
      (h3?._$AO?.(false),
      o4 === undefined
        ? (h3 = undefined)
        : ((h3 = new o4(t3)), h3._$AT(t3, s3, e4)),
      e4 !== undefined ? ((s3._$Co ??= [])[e4] = h3) : (s3._$Cl = h3)),
    h3 !== undefined && (i4 = S2(t3, h3._$AS(t3, i4.values), h3, e4)),
    i4
  );
}

class M {
  constructor(t3, i4) {
    (this._$AV = []),
      (this._$AN = undefined),
      (this._$AD = t3),
      (this._$AM = i4);
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t3) {
    const {
        el: { content: i4 },
        parts: s3,
      } = this._$AD,
      e4 = (t3?.creationScope ?? r3).importNode(i4, true);
    C.currentNode = e4;
    let h3 = C.nextNode(),
      o4 = 0,
      n4 = 0,
      l3 = s3[0];
    for (; l3 !== undefined; ) {
      if (o4 === l3.index) {
        let i5;
        l3.type === 2
          ? (i5 = new R(h3, h3.nextSibling, this, t3))
          : l3.type === 1
          ? (i5 = new l3.ctor(h3, l3.name, l3.strings, this, t3))
          : l3.type === 6 && (i5 = new z(h3, this, t3)),
          this._$AV.push(i5),
          (l3 = s3[++n4]);
      }
      o4 !== l3?.index && ((h3 = C.nextNode()), o4++);
    }
    return (C.currentNode = r3), e4;
  }
  p(t3) {
    let i4 = 0;
    for (const s3 of this._$AV)
      s3 !== undefined &&
        (s3.strings !== undefined
          ? (s3._$AI(t3, s3, i4), (i4 += s3.strings.length - 2))
          : s3._$AI(t3[i4])),
        i4++;
  }
}

class R {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t3, i4, s3, e4) {
    (this.type = 2),
      (this._$AH = E),
      (this._$AN = undefined),
      (this._$AA = t3),
      (this._$AB = i4),
      (this._$AM = s3),
      (this.options = e4),
      (this._$Cv = e4?.isConnected ?? true);
  }
  get parentNode() {
    let t3 = this._$AA.parentNode;
    const i4 = this._$AM;
    return i4 !== undefined && t3?.nodeType === 11 && (t3 = i4.parentNode), t3;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t3, i4 = this) {
    (t3 = S2(this, t3, i4)),
      c3(t3)
        ? t3 === E || t3 == null || t3 === ""
          ? (this._$AH !== E && this._$AR(), (this._$AH = E))
          : t3 !== this._$AH && t3 !== T && this._(t3)
        : t3._$litType$ !== undefined
        ? this.$(t3)
        : t3.nodeType !== undefined
        ? this.T(t3)
        : u2(t3)
        ? this.k(t3)
        : this._(t3);
  }
  O(t3) {
    return this._$AA.parentNode.insertBefore(t3, this._$AB);
  }
  T(t3) {
    this._$AH !== t3 && (this._$AR(), (this._$AH = this.O(t3)));
  }
  _(t3) {
    this._$AH !== E && c3(this._$AH)
      ? (this._$AA.nextSibling.data = t3)
      : this.T(r3.createTextNode(t3)),
      (this._$AH = t3);
  }
  $(t3) {
    const { values: i4, _$litType$: s3 } = t3,
      e4 =
        typeof s3 == "number"
          ? this._$AC(t3)
          : (s3.el === undefined &&
              (s3.el = N.createElement(P(s3.h, s3.h[0]), this.options)),
            s3);
    if (this._$AH?._$AD === e4) this._$AH.p(i4);
    else {
      const t4 = new M(e4, this),
        s4 = t4.u(this.options);
      t4.p(i4), this.T(s4), (this._$AH = t4);
    }
  }
  _$AC(t3) {
    let i4 = A.get(t3.strings);
    return i4 === undefined && A.set(t3.strings, (i4 = new N(t3))), i4;
  }
  k(t3) {
    a2(this._$AH) || ((this._$AH = []), this._$AR());
    const i4 = this._$AH;
    let s3,
      e4 = 0;
    for (const h3 of t3)
      e4 === i4.length
        ? i4.push((s3 = new R(this.O(l2()), this.O(l2()), this, this.options)))
        : (s3 = i4[e4]),
        s3._$AI(h3),
        e4++;
    e4 < i4.length &&
      (this._$AR(s3 && s3._$AB.nextSibling, e4), (i4.length = e4));
  }
  _$AR(t3 = this._$AA.nextSibling, i4) {
    for (this._$AP?.(false, true, i4); t3 && t3 !== this._$AB; ) {
      const i5 = t3.nextSibling;
      t3.remove(), (t3 = i5);
    }
  }
  setConnected(t3) {
    this._$AM === undefined && ((this._$Cv = t3), this._$AP?.(t3));
  }
}

class k {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t3, i4, s3, e4, h3) {
    (this.type = 1),
      (this._$AH = E),
      (this._$AN = undefined),
      (this.element = t3),
      (this.name = i4),
      (this._$AM = e4),
      (this.options = h3),
      s3.length > 2 || s3[0] !== "" || s3[1] !== ""
        ? ((this._$AH = Array(s3.length - 1).fill(new String())),
          (this.strings = s3))
        : (this._$AH = E);
  }
  _$AI(t3, i4 = this, s3, e4) {
    const h3 = this.strings;
    let o4 = false;
    if (h3 === undefined)
      (t3 = S2(this, t3, i4, 0)),
        (o4 = !c3(t3) || (t3 !== this._$AH && t3 !== T)),
        o4 && (this._$AH = t3);
    else {
      const e5 = t3;
      let n4, r4;
      for (t3 = h3[0], n4 = 0; n4 < h3.length - 1; n4++)
        (r4 = S2(this, e5[s3 + n4], i4, n4)),
          r4 === T && (r4 = this._$AH[n4]),
          (o4 ||= !c3(r4) || r4 !== this._$AH[n4]),
          r4 === E ? (t3 = E) : t3 !== E && (t3 += (r4 ?? "") + h3[n4 + 1]),
          (this._$AH[n4] = r4);
    }
    o4 && !e4 && this.j(t3);
  }
  j(t3) {
    t3 === E
      ? this.element.removeAttribute(this.name)
      : this.element.setAttribute(this.name, t3 ?? "");
  }
}

class H extends k {
  constructor() {
    super(...arguments), (this.type = 3);
  }
  j(t3) {
    this.element[this.name] = t3 === E ? undefined : t3;
  }
}

class I extends k {
  constructor() {
    super(...arguments), (this.type = 4);
  }
  j(t3) {
    this.element.toggleAttribute(this.name, !!t3 && t3 !== E);
  }
}

class L extends k {
  constructor(t3, i4, s3, e4, h3) {
    super(t3, i4, s3, e4, h3), (this.type = 5);
  }
  _$AI(t3, i4 = this) {
    if ((t3 = S2(this, t3, i4, 0) ?? E) === T) return;
    const s3 = this._$AH,
      e4 =
        (t3 === E && s3 !== E) ||
        t3.capture !== s3.capture ||
        t3.once !== s3.once ||
        t3.passive !== s3.passive,
      h3 = t3 !== E && (s3 === E || e4);
    e4 && this.element.removeEventListener(this.name, this, s3),
      h3 && this.element.addEventListener(this.name, this, t3),
      (this._$AH = t3);
  }
  handleEvent(t3) {
    typeof this._$AH == "function"
      ? this._$AH.call(this.options?.host ?? this.element, t3)
      : this._$AH.handleEvent(t3);
  }
}

class z {
  constructor(t3, i4, s3) {
    (this.element = t3),
      (this.type = 6),
      (this._$AN = undefined),
      (this._$AM = i4),
      (this.options = s3);
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t3) {
    S2(this, t3);
  }
}
var j = t2.litHtmlPolyfillSupport;
j?.(N, R), (t2.litHtmlVersions ??= []).push("3.2.1");
var B = (t3, i4, s3) => {
  const e4 = s3?.renderBefore ?? i4;
  let h3 = e4._$litPart$;
  if (h3 === undefined) {
    const t4 = s3?.renderBefore ?? null;
    e4._$litPart$ = h3 = new R(
      i4.insertBefore(l2(), t4),
      t4,
      undefined,
      s3 ?? {}
    );
  }
  return h3._$AI(t3), h3;
};
// node_modules/lit-element/lit-element.js
class r4 extends b {
  constructor() {
    super(...arguments),
      (this.renderOptions = { host: this }),
      (this._$Do = undefined);
  }
  createRenderRoot() {
    const t3 = super.createRenderRoot();
    return (this.renderOptions.renderBefore ??= t3.firstChild), t3;
  }
  update(t3) {
    const s3 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
      super.update(t3),
      (this._$Do = B(s3, this.renderRoot, this.renderOptions));
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(true);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(false);
  }
  render() {
    return T;
  }
}
(r4._$litElement$ = true),
  (r4["finalized"] = true),
  globalThis.litElementHydrateSupport?.({ LitElement: r4 });
var i4 = globalThis.litElementPolyfillSupport;
i4?.({ LitElement: r4 });
(globalThis.litElementVersions ??= []).push("4.1.1");
// node_modules/@lit/reactive-element/decorators/custom-element.js
var t3 = (t4) => (e4, o4) => {
  o4 !== undefined
    ? o4.addInitializer(() => {
        customElements.define(t4, e4);
      })
    : customElements.define(t4, e4);
};
// node_modules/@lit/reactive-element/decorators/property.js
var o4 = {
  attribute: true,
  type: String,
  converter: u,
  reflect: false,
  hasChanged: f,
};
var r5 = (t4 = o4, e4, r6) => {
  const { kind: n4, metadata: i5 } = r6;
  let s3 = globalThis.litPropertyMetadata.get(i5);
  if (
    (s3 === undefined &&
      globalThis.litPropertyMetadata.set(i5, (s3 = new Map())),
    s3.set(r6.name, t4),
    n4 === "accessor")
  ) {
    const { name: o5 } = r6;
    return {
      set(r7) {
        const n5 = e4.get.call(this);
        e4.set.call(this, r7), this.requestUpdate(o5, n5, t4);
      },
      init(e5) {
        return e5 !== undefined && this.P(o5, undefined, t4), e5;
      },
    };
  }
  if (n4 === "setter") {
    const { name: o5 } = r6;
    return function (r7) {
      const n5 = this[o5];
      e4.call(this, r7), this.requestUpdate(o5, n5, t4);
    };
  }
  throw Error("Unsupported decorator location: " + n4);
};
function n4(t4) {
  return (e4, o5) =>
    typeof o5 == "object"
      ? r5(t4, e4, o5)
      : ((t5, e5, o6) => {
          const r6 = e5.hasOwnProperty(o6);
          return (
            e5.constructor.createProperty(
              o6,
              r6 ? { ...t5, wrapped: true } : t5
            ),
            r6 ? Object.getOwnPropertyDescriptor(e5, o6) : undefined
          );
        })(t4, e4, o5);
}
// node_modules/@lit/reactive-element/decorators/state.js
function r6(r7) {
  return n4({ ...r7, state: true, attribute: false });
}
// client/util/price-range.ts
class PriceRangeImpl {
  _min;
  _max;
  _range;
  constructor(min, max) {
    this._min = min;
    this._max = max;
    this._range = max - min;
  }
  get min() {
    return this._min;
  }
  get max() {
    return this._max;
  }
  get range() {
    return this._range;
  }
  adjust(deltaY, zoomCenter) {
    const rangeAdjustment = this._range * 0.005 * deltaY;
    const newRange = Math.max(this._range - rangeAdjustment, 0.0001);
    const rangeDifference = this._range - newRange;
    this._min += rangeDifference * (1 + zoomCenter);
    this._max -= rangeDifference * (1 - zoomCenter);
    this._range = newRange;
  }
  shift(amount) {
    this._min += amount;
    this._max += amount;
  }
  setMin(min) {
    this._min = min;
    this._range = this._max - this._min;
  }
  setMax(max) {
    this._max = max;
    this._range = this._max - this._min;
  }
}

// server/services/price-data/price-history-model.ts
function getAllGranularities() {
  return [
    "ONE_MINUTE",
    "FIVE_MINUTE",
    "FIFTEEN_MINUTE",
    "THIRTY_MINUTE",
    "ONE_HOUR",
    "TWO_HOUR",
    "SIX_HOUR",
    "ONE_DAY",
  ];
}
function granularityLabel(granularity) {
  const labels = new Map([
    ["ONE_MINUTE", "1m"],
    ["FIVE_MINUTE", "5m"],
    ["FIFTEEN_MINUTE", "15m"],
    ["THIRTY_MINUTE", "30m"],
    ["ONE_HOUR", "1h"],
    ["TWO_HOUR", "2h"],
    ["SIX_HOUR", "6h"],
    ["ONE_DAY", "1d"],
  ]);
  return labels.get(String(granularity)) ?? String(granularity);
}
var GRANULARITY_TO_MS = new Map([
  ["ONE_MINUTE", 60 * 1000],
  ["FIVE_MINUTE", 5 * 60 * 1000],
  ["FIFTEEN_MINUTE", 15 * 60 * 1000],
  ["THIRTY_MINUTE", 30 * 60 * 1000],
  ["ONE_HOUR", 60 * 60 * 1000],
  ["TWO_HOUR", 2 * 60 * 60 * 1000],
  ["SIX_HOUR", 6 * 60 * 60 * 1000],
  ["ONE_DAY", 24 * 60 * 60 * 1000],
]);
function asGranularity(granularity) {
  return typeof granularity === "string" ? granularity : granularity + "";
}
function granularityToMs(granularity) {
  if (!GRANULARITY_TO_MS.has(asGranularity(granularity))) {
    throw new Error(`Unknown granularity: '${granularity}'`);
  }
  return GRANULARITY_TO_MS.get(asGranularity(granularity)) ?? 60 * 60 * 1000;
}
function numCandlesInRange(granularity, startTimestamp, endTimestamp) {
  return Math.ceil(
    (endTimestamp - startTimestamp) / granularityToMs(granularity)
  );
}

class SimplePriceHistory {
  granularity;
  candles;
  candlesSortedByTimestamp;
  constructor(granularity, candles) {
    this.granularity = asGranularity(granularity);
    this.candles = candles;
    this.candlesSortedByTimestamp = Array.from(this.candles.entries()).sort(
      ([timestampA], [timestampB]) => timestampA - timestampB
    );
  }
  getCandle(timestamp) {
    const intervalMs =
      GRANULARITY_TO_MS.get(this.granularity) ?? 60 * 60 * 1000;
    let left = 0;
    let right = this.candlesSortedByTimestamp.length - 1;
    let closestIndex = -1;
    let minDiff = Infinity;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const [candleTime] = this.candlesSortedByTimestamp[mid];
      const diff = Math.abs(candleTime - timestamp);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = mid;
      }
      if (candleTime === timestamp) {
        break;
      } else if (candleTime < timestamp) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return minDiff < intervalMs
      ? this.candlesSortedByTimestamp[closestIndex][1]
      : undefined;
  }
  getGranularity() {
    return this.granularity;
  }
  isCandleAvailable(timestamp) {
    return this.getCandle(timestamp) !== undefined;
  }
  getCandlesSorted() {
    return this.candlesSortedByTimestamp;
  }
  getTimestampsSorted() {
    return this.candlesSortedByTimestamp.map(([timestamp]) => timestamp);
  }
  get numCandles() {
    return this.candlesSortedByTimestamp.length;
  }
  get startTimestamp() {
    return this.candlesSortedByTimestamp[0][0];
  }
  get endTimestamp() {
    if (this.candlesSortedByTimestamp.length === 0) {
      return 0;
    }
    return this.candlesSortedByTimestamp[
      this.candlesSortedByTimestamp.length - 1
    ][0];
  }
  get length() {
    return this.candlesSortedByTimestamp.length;
  }
  getCandles() {
    return this.candles;
  }
  getCandlesInRange(startTimestamp, endTimestamp) {
    const startIdx = this.findNearestCandleIndex(startTimestamp);
    const endIdx = this.findNearestCandleIndex(endTimestamp);
    return this.candlesSortedByTimestamp.slice(
      Math.max(0, startIdx),
      Math.min(endIdx + 1, this.candlesSortedByTimestamp.length)
    );
  }
  findNearestCandleIndex(timestamp) {
    let left = 0;
    let right = this.candlesSortedByTimestamp.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const [candleTime] = this.candlesSortedByTimestamp[mid];
      if (candleTime === timestamp) {
        return mid;
      }
      if (candleTime < timestamp) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    if (left >= this.candlesSortedByTimestamp.length) {
      return this.candlesSortedByTimestamp.length - 1;
    }
    if (right < 0) {
      return 0;
    }
    const [leftTime] = this.candlesSortedByTimestamp[left];
    const [rightTime] = this.candlesSortedByTimestamp[right];
    return Math.abs(timestamp - leftTime) < Math.abs(timestamp - rightTime)
      ? left
      : right;
  }
  getPriceRange(startTimestamp, endTimestamp) {
    const candlesInRange = this.getCandlesInRange(startTimestamp, endTimestamp);
    let minPrice = Infinity;
    let maxPrice = -Infinity;
    for (const [_2, candle] of candlesInRange) {
      minPrice = Math.min(minPrice, candle.low);
      maxPrice = Math.max(maxPrice, candle.high);
    }
    return new PriceRangeImpl(minPrice, maxPrice);
  }
  get granularityMs() {
    return GRANULARITY_TO_MS.get(`${this.granularity}`) ?? 60 * 60 * 1000;
  }
  setLiveCandle(candle) {
    console.log("Live: Setting live candle to price history:", candle);
    if (this.candles.size === 0) {
      return false;
    }
    if (candle.granularity.valueOf() !== this.granularity) {
      console.log(
        "Live: Ignoring candle with different granularity:",
        candle.granularity,
        this.granularity
      );
      return false;
    }
    if (candle.timestamp < this.endTimestamp) {
      console.log(
        "Live: Ignoring candle before end timestamp:",
        candle.timestamp,
        this.endTimestamp
      );
      return false;
    }
    const existingCandle = this.getCandle(candle.timestamp);
    if (existingCandle) {
      console.log(
        "Live: Existing candle:",
        new Date(existingCandle?.timestamp)
      );
      console.log("Live: New live candle:", new Date(candle.timestamp));
    }
    if (existingCandle) {
      const newCandle = {
        timestamp: candle.timestamp,
        open: existingCandle.open,
        high: Math.max(existingCandle.high, candle.high, candle.close),
        low: Math.min(existingCandle.low, candle.low, candle.close),
        close: candle.close,
        volume: candle.volume,
        live: true,
        granularity: this.granularity,
      };
      this.candles.set(newCandle.timestamp, newCandle);
      const index = this.findNearestCandleIndex(existingCandle.timestamp);
      this.candlesSortedByTimestamp[index] = [newCandle.timestamp, newCandle];
    } else {
      const newCandle = {
        ...candle,
        granularity: this.granularity,
      };
      this.candles.set(newCandle.timestamp, newCandle);
      this.candlesSortedByTimestamp.push([newCandle.timestamp, newCandle]);
      this.candlesSortedByTimestamp.sort(([a3], [b3]) => a3 - b3);
    }
    console.log("Live: Updated candle:", this.getCandle(candle.timestamp));
    return true;
  }
  getGaps(startTimestamp, endTimestamp) {
    const granularityMs = this.granularityMs;
    const numSteps = Math.ceil((endTimestamp - startTimestamp) / granularityMs);
    return Array.from({ length: numSteps }).reduce((gaps, _2, i5) => {
      const currentTimestamp = startTimestamp + i5 * granularityMs;
      const nextTimestamp = currentTimestamp + granularityMs;
      if (!this.isCandleAvailable(currentTimestamp)) {
        gaps.push({ start: currentTimestamp, end: nextTimestamp });
      }
      return gaps;
    }, []);
  }
}

// client/util/chart-util.ts
var dpr = window.devicePixelRatio ?? 1;
var timeToX = (availableWidth, timeRange) => (timestamp) => {
  const timePosition =
    (timestamp - timeRange.start) / (timeRange.end - timeRange.start);
  return timePosition * availableWidth;
};
var priceToY = (availableHeight, priceRange) => (price) => {
  const percentage =
    (price - priceRange.start) / (priceRange.end - priceRange.start);
  const y3 = (1 - percentage) * availableHeight;
  return y3 / dpr;
};
function iterateTimeline({
  callback,
  granularity,
  viewportStartTimestamp,
  viewportEndTimestamp,
  canvasWidth,
  interval: intervalProp,
  alignToLocalTime = true,
}) {
  const interval = intervalProp ?? granularityToMs(granularity);
  const timeToX2 = (timestamp) => {
    const timePosition =
      (timestamp - viewportStartTimestamp) /
      (viewportEndTimestamp - viewportStartTimestamp);
    return timePosition * canvasWidth;
  };
  let firstTimestamp = Math.floor(viewportStartTimestamp / interval) * interval;
  if (granularity === "SIX_HOUR" || alignToLocalTime) {
    firstTimestamp = getLocalAlignedTimestamp(
      viewportStartTimestamp,
      granularity === "SIX_HOUR" ? 6 : interval / (60 * 60 * 1000)
    );
    while (firstTimestamp > viewportStartTimestamp - interval) {
      firstTimestamp -= interval;
    }
  }
  for (
    let timestamp = firstTimestamp;
    timestamp <= viewportEndTimestamp + interval;
    timestamp += interval
  ) {
    const ts =
      granularity === "SIX_HOUR" || alignToLocalTime
        ? getLocalAlignedTimestamp(
            timestamp,
            granularity === "SIX_HOUR" ? 6 : interval / (60 * 60 * 1000)
          )
        : timestamp;
    const x2 = timeToX2(ts);
    callback(x2, ts);
  }
}
function formatTime(date) {
  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  });
}
function formatDate(date) {
  return date.toLocaleDateString([], {
    month: "numeric",
    day: "numeric",
  });
}
function canvasYToPrice(y3, canvas, priceRange) {
  const availableHeight = canvas.height / dpr;
  const percentage = 1 - y3 / availableHeight;
  return priceRange.min + percentage * (priceRange.max - priceRange.min);
}
function drawTimeLabel(
  ctx,
  time,
  x2,
  y3,
  backgroundColor = "#eee",
  textColor = "#000"
) {
  const dpr2 = window.devicePixelRatio ?? 1;
  const timeText = formatTime(new Date(time));
  const padding = 6 * dpr2;
  const textMetrics = ctx.measureText(timeText);
  const rectWidth = textMetrics.width + padding;
  const rectHeight =
    textMetrics.actualBoundingBoxAscent +
    textMetrics.actualBoundingBoxDescent +
    padding;
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(x2 - rectWidth / 2, y3 - rectHeight / 2, rectWidth, rectHeight);
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = textColor;
  ctx.fillText(timeText, x2, y3);
}
function getLocalAlignedTimestamp(timestamp, intervalHours) {
  const date = new Date(timestamp);
  const offsetHours = date.getTimezoneOffset() / 60;
  const localHours = date.getUTCHours() - offsetHours;
  const alignedHours = Math.floor(localHours / intervalHours) * intervalHours;
  return new Date(
    Date.UTC(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
      alignedHours + offsetHours
    )
  ).getTime();
}
function getTimelineMarks(date, granularity) {
  let tickMark = false;
  let dateChange = false;
  const localDate = new Date(date.getTime());
  if (
    granularity !== "ONE_DAY" &&
    localDate.getHours() === 0 &&
    localDate.getMinutes() === 0
  ) {
    dateChange = true;
  }
  switch (granularity) {
    case "ONE_MINUTE":
      tickMark = localDate.getMinutes() % 15 === 0;
      break;
    case "FIVE_MINUTE":
      tickMark = localDate.getMinutes() % 30 === 0;
      break;
    case "FIFTEEN_MINUTE":
      tickMark = localDate.getMinutes() === 0;
      break;
    case "THIRTY_MINUTE":
      tickMark = localDate.getHours() % 4 === 0 && localDate.getMinutes() === 0;
      break;
    case "ONE_HOUR":
      tickMark = localDate.getHours() % 12 === 0;
      break;
    case "TWO_HOUR":
      tickMark = localDate.getHours() % 12 === 0;
      break;
    case "SIX_HOUR":
      const alignedTimestamp = getLocalAlignedTimestamp(date.getTime(), 6);
      const candlesSinceMidnight = Math.floor(
        (date.getTime() - getLocalAlignedTimestamp(date.getTime(), 24)) /
          (6 * 60 * 60 * 1000)
      );
      tickMark =
        candlesSinceMidnight % 4 === 0 && alignedTimestamp === date.getTime();
      dateChange =
        candlesSinceMidnight === 0 && alignedTimestamp === date.getTime();
      break;
    case "ONE_DAY":
      tickMark = false;
      dateChange = localDate.getDate() % 4 === 0;
      break;
    default:
      tickMark = localDate.getHours() % 12 === 0;
  }
  return { tickMark, dateChange };
}
function getCandleInterval(granularity) {
  return granularityToMs(granularity);
}

// client/util/price-util.ts
function formatPrice(price) {
  if (!price) return "0";
  if (price > 1000) {
    return price.toLocaleString("en-US", { maximumFractionDigits: 0 });
  }
  return price.toFixed(2);
}
function getPriceStep(priceRange) {
  const magnitude = Math.floor(Math.log10(priceRange));
  const normalizedRange = priceRange / Math.pow(10, magnitude);
  let step;
  if (normalizedRange >= 5) {
    step = 4;
  } else {
    step = 2;
  }
  return step * Math.pow(10, magnitude - 1);
}

// client/components/chart/grid.ts
class HairlineGrid {
  draw(context) {
    const {
      ctx,
      chartCanvas: canvas,
      data,
      priceRange,
      viewportStartTimestamp,
      viewportEndTimestamp,
    } = context;
    const dpr2 = window.devicePixelRatio ?? 1;
    const priceY = priceToY(canvas.height, {
      start: priceRange.min,
      end: priceRange.max,
    });
    const gridColor = getComputedStyle(document.documentElement)
      .getPropertyValue("--color-background-secondary-rgb")
      .trim();
    ctx.strokeStyle = `rgba(${gridColor}, 0.3)`;
    ctx.setLineDash([3, 3]);
    ctx.lineWidth = 0.5;
    iterateTimeline({
      callback: (x2, timestamp) => {
        const { tickMark: tickkMark, dateChange } = getTimelineMarks(
          new Date(timestamp),
          data.getGranularity()
        );
        const doDraw =
          data.getGranularity() === "ONE_DAY" ? dateChange : tickkMark;
        if (doDraw && x2 >= 0 && x2 <= canvas.width) {
          ctx.beginPath();
          ctx.moveTo(x2, 0);
          ctx.lineTo(x2, canvas.height / dpr2);
          ctx.stroke();
        }
      },
      granularity: data.getGranularity(),
      viewportStartTimestamp,
      viewportEndTimestamp,
      canvasWidth: canvas.width / dpr2,
    });
    const priceStep = getPriceStep(priceRange.range);
    const firstPriceGridLine =
      Math.floor(priceRange.min / priceStep) * priceStep;
    for (
      let price = firstPriceGridLine;
      price <= priceRange.max + priceStep;
      price += priceStep
    ) {
      const y3 = priceY(price);
      if (y3 >= 0 && y3 <= canvas.height / dpr2) {
        ctx.beginPath();
        ctx.moveTo(0, y3);
        ctx.lineTo(canvas.width / dpr2, y3);
        ctx.stroke();
      }
    }
  }
  destroy() {}
}

// client/components/chart/drawing-strategy.ts
class CandlestickStrategy {
  grid = new HairlineGrid();
  FIXED_GAP_WIDTH = 2;
  MIN_CANDLE_WIDTH = 1;
  MAX_CANDLE_WIDTH = 500;
  animationFrameId = null;
  drawGrid(context) {
    this.grid.draw(context);
  }
  draw(context) {
    this.drawCandles(context);
  }
  drawCandles(context) {
    const {
      ctx,
      chartCanvas: canvas,
      data,
      axisMappings: { priceToY: priceToY2 },
      viewportStartTimestamp,
      viewportEndTimestamp,
    } = context;
    const dpr2 = window.devicePixelRatio ?? 1;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.drawGrid(context);
    ctx.save();
    const timeSpan = viewportEndTimestamp - viewportStartTimestamp;
    const candleCount = Math.ceil(timeSpan / data.granularityMs);
    const availableWidth = canvas.width / dpr2;
    const totalGapWidth = ((candleCount - 1) * this.FIXED_GAP_WIDTH) / dpr2;
    const spaceForCandles = availableWidth - totalGapWidth;
    const candleWidth = Math.max(
      this.MIN_CANDLE_WIDTH,
      Math.min(this.MAX_CANDLE_WIDTH, spaceForCandles / candleCount)
    );
    iterateTimeline({
      callback: (x2, timestamp) => {
        const candle = data.getCandle(timestamp);
        if (!candle) return;
        if (
          `${candle.granularity}` !==
          `${$547f11326d897190$export$966034e6c6823eb0["state.granularity"]}`
        ) {
          throw new Error(
            `CandlestickStrategy: Candle granularity does not match state granularity: ${candle.granularity} !== ${$547f11326d897190$export$966034e6c6823eb0["state.granularity"]}`
          );
        }
        const candleX = x2 - candleWidth / 2;
        ctx.beginPath();
        ctx.strokeStyle =
          candle.close > candle.open
            ? getComputedStyle(document.documentElement)
                .getPropertyValue("--color-accent-1")
                .trim()
            : getComputedStyle(document.documentElement)
                .getPropertyValue("--color-error")
                .trim();
        ctx.setLineDash([]);
        ctx.lineWidth = 1;
        const highY = priceToY2(candle.high);
        const lowY = priceToY2(candle.low);
        const wickX = candleX + candleWidth / 2;
        ctx.moveTo(wickX, highY);
        ctx.lineTo(wickX, lowY);
        ctx.stroke();
        const openY = priceToY2(candle.open);
        const closeY = priceToY2(candle.close);
        const bodyHeight = Math.abs(closeY - openY);
        const bodyTop = Math.min(closeY, openY);
        ctx.fillStyle =
          candle.close > candle.open
            ? getComputedStyle(document.documentElement)
                .getPropertyValue("--color-accent-1")
                .trim()
            : getComputedStyle(document.documentElement)
                .getPropertyValue("--color-error")
                .trim();
        ctx.fillRect(candleX, bodyTop, candleWidth, bodyHeight);
      },
      granularity: data.getGranularity(),
      viewportStartTimestamp,
      viewportEndTimestamp,
      canvasWidth: canvas.width / dpr2,
      interval: data.granularityMs,
      alignToLocalTime: false,
    });
    ctx.restore();
  }
  destroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    this.grid.destroy();
  }
}

// client/components/chart/canvas-base.ts
class CanvasBase extends r4 {
  canvas = null;
  ctx = null;
  resizeObserver = null;
  constructor() {
    super();
    this.id = this.getId();
  }
  render() {
    return x`<canvas id="${this.id}"></canvas>`;
  }
  firstUpdated() {
    const bindListeners = (canvas) => {
      this.bindEventListeners(canvas);
    };
    requestAnimationFrame(() => {
      this.canvas = this.renderRoot.querySelector("canvas");
      if (!this.canvas) {
        console.error("No canvas found in renderRoot");
        return;
      }
      this.ctx = this.canvas.getContext("2d");
      if (!this.ctx) {
        console.error("Failed to get 2d context");
        return;
      }
      const rect = this.getBoundingClientRect();
      const dpr2 = window.devicePixelRatio ?? 1;
      console.log("Setting up canvas with:", {
        id: this.id,
        rect,
        dpr: dpr2,
        width: rect.width * dpr2,
        height: rect.height * dpr2,
      });
      this.canvas.width = rect.width * dpr2;
      this.canvas.height = rect.height * dpr2;
      this.canvas.style.width = `${rect.width}px`;
      this.canvas.style.height = `${rect.height}px`;
      if (this.ctx) {
        this.ctx.scale(dpr2, dpr2);
      }
      bindListeners(this.canvas);
      this.draw();
      if (this.useResizeObserver()) {
        this.resizeObserver = new ResizeObserver((entries) => {
          for (let entry of entries) {
            if (entry.target === this) {
              const { width, height } = entry.contentRect;
              this.resize(width, height);
            }
          }
        });
        this.resizeObserver.observe(this);
      }
    });
  }
  useResizeObserver() {
    return false;
  }
  bindEventListeners(_2) {}
  resize(width, height) {
    console.log("CanvasBase: resize", { id: this.id, width, height });
    if (width === 0 || height === 0) {
      console.warn("Invalid dimensions received:", width, height);
      return;
    }
    if (!this.canvas || !this.ctx) {
      console.warn("Canvas or context not found");
      return;
    }
    const dpr2 = window.devicePixelRatio ?? 1;
    this.canvas.style.width = `${width}px`;
    this.canvas.width = width * dpr2;
    this.canvas.style.height = `${height}px`;
    this.canvas.height = height * dpr2;
    this.ctx.resetTransform();
    this.ctx.scale(dpr2, dpr2);
    this.draw();
  }
  draw() {}
}

// client/components/chart/chart.ts
class CandlestickChart extends CanvasBase {
  constructor() {
    super(...arguments);
    this._options = {
      candleWidth: 7,
      candleGap: 2,
      minCandleWidth: 2,
      maxCandleWidth: 100,
    };
  }
  _state = null;
  _padding = { top: 0, right: 0, bottom: 0, left: 0 };
  drawingStrategy = new CandlestickStrategy();
  getId() {
    return "candlestick-chart";
  }
  set options(options) {
    this._options = options;
  }
  set padding(padding) {
    this._padding = padding;
  }
  set state(state2) {
    console.log("CandlestickChart: Setting state", state2);
    this._state = state2;
  }
  async firstUpdated() {
    super.firstUpdated();
    await new Promise((resolve) => setTimeout(resolve, 0));
    this.dispatchEvent(
      new CustomEvent("chart-ready", {
        bubbles: true,
        composed: true,
      })
    );
  }
  drawWithContext(context) {
    if (!this.ctx || !this.canvas) {
      console.warn("Cannot draw chart:", {
        hasContext: !!this.ctx,
        hasCanvas: !!this.canvas,
        dataSize: context.data.length,
      });
      return;
    }
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawingStrategy.draw(context);
  }
  draw() {
    if (!this._state) return;
    const context = {
      ctx: this.ctx,
      chartCanvas: this.canvas,
      data: this._state.priceHistory,
      options: this._options,
      viewportStartTimestamp: this._state.timeRange.start,
      viewportEndTimestamp: this._state.timeRange.end,
      priceRange: this._state.priceRange,
      axisMappings: {
        timeToX: timeToX(this.canvas.width, this._state.timeRange),
        priceToY: priceToY(this.canvas.height, {
          start: this._state.priceRange.min,
          end: this._state.priceRange.max,
        }),
      },
    };
    this.drawWithContext(context);
  }
  resize(width, height) {
    super.resize(width, height);
    $547f11326d897190$export$966034e6c6823eb0["state.canvasWidth"] = width;
    $547f11326d897190$export$966034e6c6823eb0["state.canvasHeight"] = height;
  }
  calculateVisibleCandles() {
    if (!this.canvas) return 0;
    const availableWidth =
      this.canvas.width - this._padding.left - this._padding.right;
    const totalCandleWidth =
      this._options.candleWidth + this._options.candleGap;
    return Math.floor(
      availableWidth / (totalCandleWidth * window.devicePixelRatio)
    );
  }
}
__legacyDecorateClassTS(
  [n4({ type: Object })],
  CandlestickChart.prototype,
  "_options",
  undefined
);
__legacyDecorateClassTS(
  [n4({ type: Object })],
  CandlestickChart.prototype,
  "options",
  null
);
__legacyDecorateClassTS(
  [n4({ type: Object })],
  CandlestickChart.prototype,
  "padding",
  null
);
__legacyDecorateClassTS(
  [n4({ type: Object })],
  CandlestickChart.prototype,
  "state",
  null
);
CandlestickChart = __legacyDecorateClassTS(
  [t3("candlestick-chart")],
  CandlestickChart
);

// client/components/chart/timeline.ts
var dpr2 = window.devicePixelRatio ?? 1;

class Timeline extends CanvasBase {
  isDragging = false;
  lastX = 0;
  timeRange = { start: 0, end: 0 };
  animationFrameId = null;
  getId() {
    return "chart-timeline";
  }
  useResizeObserver() {
    return true;
  }
  connectedCallback() {
    super.connectedCallback();
    $547f11326d897190$export$d1203567a167490e("state.timeRange", (path) => {
      this.timeRange = $547f11326d897190$export$966034e6c6823eb0[path];
      this.draw();
    });
  }
  draw() {
    if (!this.canvas || !this.ctx) {
      return;
    }
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    this.animationFrameId = requestAnimationFrame(() => {
      const viewportStartTimestamp = this.timeRange.start;
      const viewportEndTimestamp = this.timeRange.end;
      const canvasWidth = this.canvas.width / dpr2;
      const state2 = $547f11326d897190$export$966034e6c6823eb0["state"];
      const ctx = this.ctx;
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      ctx.font = `${6 * dpr2}px Arial`;
      ctx.fillStyle = getComputedStyle(document.documentElement)
        .getPropertyValue("--color-background-secondary")
        .trim();
      ctx.textAlign = "center";
      ctx.textBaseline = "top";
      iterateTimeline({
        callback: (x2, timestamp) => {
          const date = new Date(timestamp);
          const { tickMark, dateChange } = getTimelineMarks(
            date,
            state2.granularity
          );
          if (tickMark) {
            ctx.beginPath();
            ctx.strokeStyle = getComputedStyle(document.documentElement)
              .getPropertyValue("--color-background-secondary")
              .trim();
            ctx.moveTo(x2, 0);
            ctx.lineTo(x2, 5 * dpr2);
            ctx.stroke();
            const timeLabel = formatTime(date);
            ctx.fillText(timeLabel, x2, 1 * dpr2);
          }
          if (dateChange) {
            const dateLabel = formatDate(date);
            ctx.fillText(dateLabel, x2, 10 * dpr2);
          }
        },
        granularity: state2.granularity,
        viewportStartTimestamp,
        viewportEndTimestamp,
        canvasWidth,
      });
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }
  bindEventListeners(canvas) {
    canvas.addEventListener("mousedown", this.handleDragStart);
    canvas.addEventListener("mousemove", this.handleDragMove);
    canvas.addEventListener("mouseup", this.handleDragEnd);
    canvas.addEventListener("mouseleave", this.handleDragEnd);
    canvas.addEventListener("wheel", this.handleWheel);
  }
  handleDragStart = (e5) => {
    this.isDragging = true;
    this.lastX = e5.clientX;
  };
  handleDragMove = (e5) => {
    if (!this.isDragging) return;
    const deltaX = e5.clientX - this.lastX;
    this.dispatchZoom(deltaX, e5.clientX, false);
    this.lastX = e5.clientX;
  };
  handleWheel = (e5) => {
    e5.preventDefault();
    const isTrackpad = Math.abs(e5.deltaX) !== 0 || Math.abs(e5.deltaY) < 50;
    const delta = e5.deltaX !== 0 ? e5.deltaX : e5.deltaY;
    this.dispatchZoom(delta, e5.clientX, isTrackpad);
  };
  dispatchZoom(deltaX, clientX, isTrackpad) {
    this.dispatchEvent(
      new CustomEvent("timeline-zoom", {
        detail: {
          deltaX,
          clientX,
          rect: this.getBoundingClientRect(),
          isTrackpad,
        },
        bubbles: true,
        composed: true,
      })
    );
  }
  handleDragEnd = () => {
    this.isDragging = false;
  };
}
Timeline = __legacyDecorateClassTS([t3("chart-timeline")], Timeline);

// client/components/chart/price-axis.ts
class PriceAxis extends CanvasBase {
  currentPrice = 0;
  priceRange = new PriceRangeImpl(0, 0);
  isDragging = false;
  lastY = 0;
  liveCandle = null;
  countdownInterval = null;
  timeLeft = "";
  getId() {
    return "price-axis";
  }
  firstUpdated() {
    super.firstUpdated();
    this.priceRange =
      $547f11326d897190$export$966034e6c6823eb0["state.priceRange"];
    console.log("PriceAxis: priceRange", this.priceRange);
    $547f11326d897190$export$d1203567a167490e("state.liveCandle", (path) => {
      console.log(
        "PriceAxis: liveCandle changed",
        $547f11326d897190$export$966034e6c6823eb0[path]
      );
      this.liveCandle = $547f11326d897190$export$966034e6c6823eb0[path];
      this.currentPrice = this.liveCandle.close;
      this.startCountdown();
      this.draw();
    });
    $547f11326d897190$export$d1203567a167490e("state.priceRange", (path) => {
      console.log(
        "PriceAxis: priceRange changed",
        $547f11326d897190$export$966034e6c6823eb0[path]
      );
      this.priceRange = $547f11326d897190$export$966034e6c6823eb0[path];
      this.draw();
    });
  }
  useResizeObserver() {
    return true;
  }
  draw() {
    if (!this.canvas || !this.ctx) return;
    const dpr3 = window.devicePixelRatio ?? 1;
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    const priceY = priceToY(this.canvas.height, {
      start: this.priceRange.min,
      end: this.priceRange.max,
    });
    const priceStep = getPriceStep(this.priceRange.range);
    const firstPriceGridLine =
      Math.floor(this.priceRange.min / priceStep) * priceStep;
    const fontFamily = getComputedStyle(document.documentElement)
      .getPropertyValue("--font-primary")
      .trim();
    ctx.font = `${10}px ${fontFamily}`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    for (
      let price = firstPriceGridLine;
      price <= this.priceRange.max + priceStep;
      price += priceStep
    ) {
      const y3 = priceY(price);
      if (y3 >= 0 && y3 <= this.canvas.height / dpr3) {
        const priceText = formatPrice(price);
        const labelWidth = PRICEAXIS_WIDTH;
        const labelHeight = 20 / dpr3;
        ctx.fillStyle = getComputedStyle(document.documentElement)
          .getPropertyValue("--color-primary-dark")
          .trim();
        ctx.fillRect(0, y3 - labelHeight / 2, labelWidth, labelHeight);
        ctx.fillStyle = "#666";
        ctx.fillText(priceText, labelWidth / 2, y3);
      }
    }
    this.drawLivePriceLabel(ctx, priceY);
  }
  drawLivePriceLabel(ctx, priceY) {
    if (!this.liveCandle) return;
    const isBearish = this.liveCandle.close < this.liveCandle.open;
    const priceColor = isBearish
      ? getComputedStyle(document.documentElement)
          .getPropertyValue("--color-error")
          .trim()
      : getComputedStyle(document.documentElement)
          .getPropertyValue("--color-accent-1")
          .trim();
    const textColor = getComputedStyle(document.documentElement)
      .getPropertyValue("--color-accent-2")
      .trim();
    const priceYPos = priceY(this.currentPrice);
    const labelWidth = PRICEAXIS_WIDTH;
    const labelHeight = 30;
    const cornerRadius = 4;
    ctx.beginPath();
    ctx.roundRect(
      0,
      priceYPos - labelHeight / 2,
      labelWidth,
      labelHeight,
      cornerRadius
    );
    ctx.fillStyle = getComputedStyle(document.documentElement)
      .getPropertyValue("--color-primary-dark")
      .trim();
    ctx.fill();
    ctx.strokeStyle = priceColor;
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.fillStyle = textColor;
    ctx.fillText(formatPrice(this.currentPrice), labelWidth / 2, priceYPos - 6);
    ctx.fillStyle = getComputedStyle(document.documentElement)
      .getPropertyValue("--color-background-secondary")
      .trim();
    ctx.fillText(this.timeLeft, labelWidth / 2, priceYPos + 6);
  }
  bindEventListeners(canvas) {
    canvas.addEventListener("mousedown", this.handleDragStart);
    canvas.addEventListener("mousemove", this.handleDragMove);
    canvas.addEventListener("mouseup", this.handleDragEnd);
    canvas.addEventListener("mouseleave", this.handleDragEnd);
    canvas.addEventListener("wheel", this.handleWheel);
  }
  handleDragStart = (e5) => {
    this.isDragging = true;
    this.lastY = e5.clientY;
  };
  handleDragMove = (e5) => {
    if (!this.isDragging) return;
    const deltaY = e5.clientY - this.lastY;
    this.dispatchZoom(-deltaY, false);
    this.lastY = e5.clientY;
  };
  handleWheel = (e5) => {
    e5.preventDefault();
    const isTrackpad =
      Math.abs(e5.deltaX) !== 0 || Math.abs(e5.deltaY) < this.canvas.width;
    this.dispatchZoom(e5.deltaY, isTrackpad);
  };
  dispatchZoom(deltaY, isTrackpad) {
    this.dispatchEvent(
      new CustomEvent("price-axis-zoom", {
        detail: {
          deltaY,
          isTrackpad,
        },
        bubbles: true,
        composed: true,
      })
    );
  }
  handleDragEnd = () => {
    this.isDragging = false;
  };
  formatTimeLeft(msLeft) {
    const totalSeconds = Math.floor(msLeft / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const granularityMs = granularityToMs(
      $547f11326d897190$export$966034e6c6823eb0["state.granularity"]
    );
    const showHours = granularityMs >= 24 * 60 * 60 * 1000;
    if (showHours) {
      return `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    } else {
      return `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
    }
  }
  updateCountdown() {
    if (!this.liveCandle) return;
    const now = Date.now();
    const granularityMs = granularityToMs(
      $547f11326d897190$export$966034e6c6823eb0["state.granularity"]
    );
    const currentPeriodStart = Math.floor(now / granularityMs) * granularityMs;
    const currentPeriodEnd = currentPeriodStart + granularityMs;
    const msLeft = currentPeriodEnd - now;
    this.timeLeft = this.formatTimeLeft(msLeft);
    if (msLeft <= 1000) {
      const state2 = $547f11326d897190$export$966034e6c6823eb0["state"];
      console.log("PriceAxis: dispatching fetch-next-candle event");
      this.dispatchEvent(
        new CustomEvent("fetch-next-candle", {
          detail: {
            granularity: state2.granularity,
            timeRange: {
              start: state2.timeRange.end + 1000,
              end: state2.timeRange.end + granularityMs * 2,
            },
          },
          bubbles: true,
          composed: true,
        })
      );
    }
    if (!this.ctx || !this.canvas) return;
    const priceY = priceToY(this.canvas.height, {
      start: this.priceRange.min,
      end: this.priceRange.max,
    });
    this.drawLivePriceLabel(this.ctx, priceY);
  }
  startCountdown() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
    this.updateCountdown();
    this.countdownInterval = window.setInterval(
      () => this.updateCountdown(),
      1000
    );
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }
}
PriceAxis = __legacyDecorateClassTS([t3("price-axis")], PriceAxis);

// client/components/chart/live-decorators.ts
class LiveDecorators extends CanvasBase {
  currentPrice = 0;
  priceRange = new PriceRangeImpl(0, 0);
  liveCandle = null;
  firstUpdated() {
    super.firstUpdated();
    this.priceRange =
      $547f11326d897190$export$966034e6c6823eb0["state.priceRange"];
    $547f11326d897190$export$d1203567a167490e("state.liveCandle", (path) => {
      console.log(
        "LiveDecorators: liveCandle changed",
        $547f11326d897190$export$966034e6c6823eb0[path]
      );
      this.liveCandle = $547f11326d897190$export$966034e6c6823eb0[path];
      this.currentPrice = this.liveCandle.close;
      this.draw();
    });
    $547f11326d897190$export$d1203567a167490e("state.priceRange", (path) => {
      console.log(
        "LiveDecorators: priceRange changed",
        $547f11326d897190$export$966034e6c6823eb0[path]
      );
      this.priceRange = $547f11326d897190$export$966034e6c6823eb0[path];
      this.draw();
    });
  }
  useResizeObserver() {
    return true;
  }
  getId() {
    return "live-decorators";
  }
  draw() {
    console.log("LiveDecorators: draw");
    if (!this.canvas || !this.ctx) return;
    const width = this.canvas.width;
    const height = this.canvas.height;
    this.ctx.clearRect(0, 0, width, height);
    const priceY = priceToY(height, {
      start: this.priceRange.min,
      end: this.priceRange.max,
    });
    const isBearish = this.liveCandle
      ? this.liveCandle.close < this.liveCandle.open
      : false;
    this.ctx.strokeStyle = isBearish
      ? getComputedStyle(document.documentElement)
          .getPropertyValue("--color-error")
          .trim()
      : getComputedStyle(document.documentElement)
          .getPropertyValue("--color-accent-1")
          .trim();
    this.ctx.lineWidth = 1;
    this.ctx.beginPath();
    this.ctx.moveTo(0, priceY(this.currentPrice));
    this.ctx.lineTo(width, priceY(this.currentPrice));
    this.ctx.stroke();
  }
  static styles = i`
    :host {
      width: 100%;
      height: 100%;
    }
  `;
}
LiveDecorators = __legacyDecorateClassTS(
  [t3("live-decorators")],
  LiveDecorators
);

// client/components/chart/crosshairs.ts
class Crosshairs extends CanvasBase {
  mouseX = -1;
  mouseY = -1;
  cursorPrice = 0;
  cursorTime = 0;
  snappedX = -1;
  getId() {
    return "chart-crosshairs";
  }
  useResizeObserver() {
    return true;
  }
  firstUpdated() {
    super.firstUpdated();
    $547f11326d897190$export$d1203567a167490e("state.timeRange", () =>
      this.draw()
    );
    $547f11326d897190$export$d1203567a167490e("state.priceRange", () =>
      this.draw()
    );
  }
  handleMouseMove = (event) => {
    if (!this.canvas) return;
    const chartArea = this.parentElement;
    const chart = chartArea?.querySelector("candlestick-chart");
    const rect = chart?.getBoundingClientRect();
    if (!rect) {
      console.error("Crosshairs: chart not found");
      return;
    }
    const chartWidth =
      $547f11326d897190$export$966034e6c6823eb0["state.canvasWidth"];
    const state2 = $547f11326d897190$export$966034e6c6823eb0["state"];
    const timeRange = state2.timeRange;
    const priceRange = state2.priceRange;
    this.mouseX = event.clientX - rect.left;
    this.mouseY = event.clientY - rect.top;
    const timeSpan = timeRange.end - timeRange.start;
    const mouseTime = timeRange.start + (this.mouseX / chartWidth) * timeSpan;
    const interval = granularityToMs(state2.granularity);
    const firstTimestamp = Math.floor(timeRange.start / interval) * interval;
    const intervalsSinceMidnight = Math.round(
      (mouseTime - firstTimestamp) / interval
    );
    const snappedTime = firstTimestamp + intervalsSinceMidnight * interval;
    this.cursorTime =
      state2.granularity === "SIX_HOUR"
        ? getLocalAlignedTimestamp(snappedTime, 6)
        : snappedTime;
    const timePosition = (this.cursorTime - timeRange.start) / timeSpan;
    this.snappedX = timePosition * chartWidth;
    this.cursorPrice = canvasYToPrice(this.mouseY, chart.canvas, priceRange);
    this.draw();
  };
  bindEventListeners(_2) {
    document.addEventListener("mousemove", this.handleMouseMove);
    this.canvas?.addEventListener("mouseleave", this.handleMouseLeave);
  }
  handleMouseLeave = () => {
    this.mouseX = -1;
    this.mouseY = -1;
    this.draw();
  };
  draw() {
    if (!this.canvas || !this.ctx || this.mouseX < 0 || this.mouseY < 0) {
      this.ctx?.clearRect(
        0,
        0,
        this.canvas?.width || 0,
        this.canvas?.height || 0
      );
      return;
    }
    const ctx = this.ctx;
    const dpr3 = window.devicePixelRatio || 1;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.beginPath();
    ctx.setLineDash([2, 2]);
    ctx.strokeStyle = getComputedStyle(document.documentElement)
      .getPropertyValue("--color-primary")
      .trim();
    ctx.lineWidth = 1;
    ctx.moveTo(0, this.mouseY);
    ctx.lineTo(this.canvas.width, this.mouseY);
    ctx.stroke();
    if (
      this.snappedX >= 0 &&
      this.snappedX <= this.canvas.width / dpr3 - PRICEAXIS_WIDTH
    ) {
      ctx.beginPath();
      ctx.moveTo(this.snappedX, 0);
      ctx.lineTo(this.snappedX, this.canvas.height);
      ctx.stroke();
    }
    ctx.setLineDash([]);
    const textColor = getComputedStyle(document.documentElement)
      .getPropertyValue("--color-accent-2")
      .trim();
    const backgroundColor = getComputedStyle(document.documentElement)
      .getPropertyValue("--color-primary-dark")
      .trim();
    const borderColor = getComputedStyle(document.documentElement)
      .getPropertyValue("--color-primary")
      .trim();
    const fontFamily = getComputedStyle(document.documentElement)
      .getPropertyValue("--font-primary")
      .trim();
    ctx.font = `${10}px ${fontFamily}`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const labelWidth = PRICEAXIS_WIDTH;
    const labelHeight = 20;
    const labelX = this.canvas.width / dpr3 - labelWidth;
    const labelY = this.mouseY;
    const cornerRadius = 4;
    ctx.beginPath();
    ctx.roundRect(
      labelX,
      labelY - labelHeight / 2,
      labelWidth,
      labelHeight,
      cornerRadius
    );
    ctx.fillStyle = backgroundColor;
    ctx.fill();
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.fillStyle = textColor;
    ctx.fillText(
      formatPrice(this.cursorPrice),
      labelX + labelWidth / 2,
      labelY
    );
    drawTimeLabel(
      ctx,
      this.cursorTime,
      this.snappedX,
      this.canvas.height / dpr3 - 5 * dpr3,
      getComputedStyle(document.documentElement)
        .getPropertyValue("--color-background-secondary")
        .trim(),
      getComputedStyle(document.documentElement)
        .getPropertyValue("--color-primary-dark")
        .trim()
    );
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("mousemove", this.handleMouseMove);
    this.canvas?.removeEventListener("mouseleave", this.handleMouseLeave);
  }
}
Crosshairs = __legacyDecorateClassTS([t3("chart-crosshairs")], Crosshairs);

// client/components/common/button.ts
class Button extends r4 {
  constructor() {
    super(...arguments);
    this.label = "";
    this.value = "";
  }
  render() {
    return x`
      <button class="button">
        <span class="button-label">${this.label}</span>
        <span class="button-value">${this.value}</span>
      </button>
    `;
  }
  static styles = i`
    .button {
      cursor: pointer;
      transition: all 0.2s ease;
      background: rgba(24, 26, 27, 0.9);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 4px;
      padding: 6px 0;
      font-size: 14px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      width: 100px;
      box-shadow: -1px -1px 4px rgba(0, 0, 0, 0.3),
        1px -1px 4px rgba(0, 0, 0, 0.3), -1px 1px 4px rgba(0, 0, 0, 0.3),
        1px 1px 4px rgba(0, 0, 0, 0.3),
        -1px -1px 2px var(--color-accent-1, rgba(255, 255, 255, 0.05)),
        1px -1px 2px var(--color-accent-1, rgba(255, 255, 255, 0.05)),
        -1px 1px 2px var(--color-accent-1, rgba(255, 255, 255, 0.05)),
        1px 1px 2px var(--color-accent-1, rgba(255, 255, 255, 0.05));
      backdrop-filter: blur(8px);
    }

    .button:hover {
      border-color: var(--color-accent-1);
      background: rgba(24, 26, 27, 0.95);
      box-shadow: -1px -1px 6px rgba(0, 0, 0, 0.4),
        1px -1px 6px rgba(0, 0, 0, 0.4), -1px 1px 6px rgba(0, 0, 0, 0.4),
        1px 1px 6px rgba(0, 0, 0, 0.4),
        -1px -1px 4px var(--color-accent-1, rgba(255, 255, 255, 0.1)),
        1px -1px 4px var(--color-accent-1, rgba(255, 255, 255, 0.1)),
        -1px 1px 4px var(--color-accent-1, rgba(255, 255, 255, 0.1)),
        1px 1px 4px var(--color-accent-1, rgba(255, 255, 255, 0.1));
    }

    .button-label {
      font-size: 11px;
      color: var(--color-background-secondary);
      text-transform: uppercase;
    }

    .button-value {
      color: var(--color-accent-2);
    }
  `;
}
__legacyDecorateClassTS(
  [n4({ type: String })],
  Button.prototype,
  "label",
  undefined
);
__legacyDecorateClassTS(
  [n4({ type: String })],
  Button.prototype,
  "value",
  undefined
);
Button = __legacyDecorateClassTS([t3("spot-button")], Button);

// client/components/chart/toolbar/product-select.ts
class ProductSelect extends r4 {
  constructor() {
    super(...arguments);
    this.products = [];
    this.selectedProduct = "";
    this.isOpen = false;
    this.searchQuery = "";
    this.selectedTab = "Crypto";
    this.selectedIndex = -1;
  }
  updated(changedProperties) {
    if (changedProperties.has("isOpen") && this.isOpen) {
      const input = this.renderRoot.querySelector("input");
      if (input) {
        input.focus();
      }
    }
  }
  handleKeyDown = (e5) => {
    if (!this.isOpen) return;
    e5.stopPropagation();
    const products = this.filteredProducts;
    switch (e5.key) {
      case "ArrowDown":
        e5.preventDefault();
        this.selectedIndex = Math.min(
          this.selectedIndex + 1,
          products.length - 1
        );
        this.scrollToSelected();
        break;
      case "ArrowUp":
        e5.preventDefault();
        this.selectedIndex = Math.max(this.selectedIndex - 1, 0);
        this.scrollToSelected();
        break;
      case "Enter":
        e5.preventDefault();
        if (this.selectedIndex >= 0 && this.selectedIndex < products.length) {
          this.handleProductSelect(products[this.selectedIndex]);
        }
        break;
      case "Escape":
        e5.preventDefault();
        this.handleClose();
        break;
    }
  };
  scrollToSelected() {
    const selectedElement = this.renderRoot.querySelector(
      ".result-item.selected"
    );
    const resultsContainer = this.renderRoot.querySelector(".results");
    if (selectedElement && resultsContainer) {
      const containerRect = resultsContainer.getBoundingClientRect();
      const elementRect = selectedElement.getBoundingClientRect();
      const padding = 40;
      if (elementRect.bottom > containerRect.bottom - padding) {
        resultsContainer.scrollTop +=
          elementRect.bottom - containerRect.bottom + padding;
      } else if (elementRect.top < containerRect.top + padding) {
        resultsContainer.scrollTop -=
          containerRect.top - elementRect.top + padding;
      }
    }
  }
  handleOpen() {
    this.isOpen = true;
    this.selectedIndex = 0;
  }
  handleClose() {
    this.isOpen = false;
    this.searchQuery = "";
    this.selectedIndex = -1;
  }
  handleSearch(e5) {
    this.searchQuery = e5.target.value;
    this.selectedIndex = 0;
  }
  handleProductSelect(product) {
    const symbol = `${product.baseCurrency}-${product.quoteCurrency}`;
    this.selectedProduct = symbol;
    this.dispatchEvent(
      new CustomEvent("product-changed", {
        detail: { product: symbol },
        bubbles: true,
        composed: true,
      })
    );
    this.handleClose();
  }
  get filteredProducts() {
    return this.products.filter((product) => {
      const searchLower = this.searchQuery.toLowerCase();
      return (
        product.baseCurrency.toLowerCase().includes(searchLower) ||
        product.quoteCurrency.toLowerCase().includes(searchLower) ||
        `${product.baseCurrency}-${product.quoteCurrency}`
          .toLowerCase()
          .includes(searchLower)
      );
    });
  }
  highlightMatches(text) {
    if (!this.searchQuery) return text;
    const searchLower = this.searchQuery.toLowerCase();
    const textLower = text.toLowerCase();
    const index = textLower.indexOf(searchLower);
    if (index === -1) return text;
    return x`${text.slice(0, index)}<span class="highlight"
        >${text.slice(index, index + this.searchQuery.length)}</span
      >${text.slice(index + this.searchQuery.length)}`;
  }
  get resultsContent() {
    if (this.selectedTab === "Stocks" || this.selectedTab === "Forex") {
      return x`
        <div class="coming-soon">
          <div class="coming-soon-message">${this.selectedTab} coming soon</div>
        </div>
      `;
    }
    return x`
      <div class="results">
        ${this.filteredProducts.map(
          (product, index) => x`
            <div
              class="result-item ${
                index === this.selectedIndex ? "selected" : ""
              }"
              @click=${() => this.handleProductSelect(product)}
              @mouseover=${() => (this.selectedIndex = index)}
            >
              <div class="symbol">
                ${this.highlightMatches(
                  `${product.baseCurrency}-${product.quoteCurrency}`
                )}
              </div>
              <div class="exchange">Coinbase</div>
            </div>
          `
        )}
      </div>
    `;
  }
  openWithSearch(initialChar) {
    this.isOpen = true;
    this.searchQuery = initialChar;
    this.selectedIndex = 0;
  }
  render() {
    return x`
      <div class="product-select">
        <spot-button
          @click=${this.handleOpen}
          label="Symbol"
          .value=${this.selectedProduct || "Select Symbol"}
        ></spot-button>

        ${
          this.isOpen
            ? x`
              <div class="modal-backdrop">
                <div class="modal" tabindex="0">
                  <div class="modal-header">
                    <h2>Symbol Search</h2>
                    <button class="close-button" @click=${this.handleClose}>
                      ×
                    </button>
                  </div>

                  <div class="search-container">
                    <input
                      type="text"
                      placeholder="Search"
                      .value=${this.searchQuery}
                      @input=${this.handleSearch}
                      @keydown=${this.handleKeyDown}
                      autofocus
                    />
                  </div>

                  <div class="tabs">
                    <button
                      class=${this.selectedTab === "All" ? "active" : ""}
                      @click=${() => (this.selectedTab = "All")}
                    >
                      All
                    </button>
                    <button
                      class=${this.selectedTab === "Stocks" ? "active" : ""}
                      @click=${() => (this.selectedTab = "Stocks")}
                    >
                      Stocks
                    </button>
                    <button
                      class=${this.selectedTab === "Crypto" ? "active" : ""}
                      @click=${() => (this.selectedTab = "Crypto")}
                    >
                      Crypto
                    </button>
                    <button
                      class=${this.selectedTab === "Forex" ? "active" : ""}
                      @click=${() => (this.selectedTab = "Forex")}
                    >
                      Forex
                    </button>
                  </div>

                  <div class="filter-row">
                    <select class="source-select" disabled>
                      <option>All sources</option>
                      <option selected>Coinbase</option>
                    </select>
                    <div class="coming-soon-badge">
                      More exchanges coming soon
                    </div>
                  </div>

                  ${this.resultsContent}
                </div>
              </div>
            `
            : E
        }
      </div>
    `;
  }
  static styles = i`
    .product-select {
      position: relative;
      display: inline-block;
    }

    .modal-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--color-modal-backdrop);
      display: flex;
      justify-content: center;
      align-items: flex-start;
      padding-top: 100px;
      z-index: 1000;
      isolation: isolate;
    }

    .modal {
      position: relative;
      z-index: 1001;
      background: var(--color-primary-dark-50);
      border-radius: 8px;
      width: 500px;
      max-width: 90vw;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
      border: 1px solid var(--color-background-secondary-20);
    }

    .modal::before {
      content: "";
      position: absolute;
      inset: 0;
      background: var(--color-primary-dark-50);
      border-radius: inherit;
      z-index: -1;
    }

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px;
      border-bottom: 1px solid var(--color-background-secondary-20);
      background: var(--color-primary-dark-98);
    }

    .modal-header h2 {
      margin: 0;
      color: var(--color-accent-2);
      font-size: 18px;
    }

    .close-button {
      background: none;
      border: none;
      color: var(--color-accent-2);
      font-size: 24px;
      cursor: pointer;
      padding: 0;
    }

    .close-button:hover {
      color: var(--color-accent-1);
    }

    .search-container {
      padding: 16px;
      border-bottom: 1px solid var(--color-background-secondary-20);
      background: var(--color-primary-dark-98);
    }

    input {
      width: calc(100% - 32px);
      padding: 8px;
      border-radius: 4px;
      font-size: 14px;
      border: 1px solid var(--color-background-secondary-30);
      background: var(--color-primary-dark-98);
      color: var(--color-accent-2);
    }

    input:focus {
      outline: none;
      border-color: var(--color-accent-1);
      box-shadow: 0 0 0 2px var(--color-accent-1);
    }

    .tabs {
      display: flex;
      padding: 8px 16px;
      gap: 8px;
      border-bottom: 1px solid var(--color-background-secondary-20);
      background: var(--color-primary-dark-98);
    }

    .tabs button {
      padding: 4px 12px;
      border: none;
      background: none;
      color: var(--color-accent-2);
      cursor: pointer;
      border-radius: 4px;
    }

    .tabs button:hover {
      background: var(--color-background-secondary);
    }

    .tabs button.active {
      background: var(--color-accent-1);
      color: var(--color-primary-dark);
    }

    .filter-row {
      display: flex;
      align-items: center;
      padding: 8px 16px;
      gap: 8px;
      border-bottom: 1px solid var(--color-background-secondary-20);
      background: var(--color-primary-dark-98);
    }

    .source-select {
      padding: 4px 8px;
      border-radius: 4px;
      border: 1px solid var(--color-background-secondary-30);
      background: var(--color-primary-dark-98);
      color: var(--color-accent-2);
    }

    .coming-soon-badge {
      font-size: 12px;
      color: var(--color-background-secondary);
    }

    .results {
      max-height: 300px;
      overflow-y: auto;
      scroll-behavior: smooth;
      scrollbar-width: thin;
      scrollbar-color: var(--color-background-secondary)
        var(--color-primary-dark-98);
      background: var(--color-primary-dark-98);
    }

    .results::-webkit-scrollbar {
      width: 8px;
    }

    .results::-webkit-scrollbar-track {
      background: var(--color-primary-dark-98);
    }

    .results::-webkit-scrollbar-thumb {
      background-color: var(--color-background-secondary);
      border-radius: 4px;
      border: 2px solid var(--color-primary-dark);
    }

    .result-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 16px;
      cursor: pointer;
      color: var(--color-accent-2);
      transition: background-color 0.2s ease;
    }

    .result-item:hover:not(.selected) {
      background: rgba(var(--color-background-secondary-rgb), 0.2);
    }

    .result-item.selected {
      background: rgba(var(--color-background-secondary-rgb), 0.3);
    }

    .symbol {
      font-weight: bold;
    }

    .exchange {
      color: var(--color-background-secondary);
      font-size: 14px;
    }

    .highlight {
      background: var(--color-accent-1);
      color: var(--color-primary-dark);
      padding: 0 2px;
      border-radius: 2px;
    }

    .coming-soon {
      padding: 32px;
      text-align: center;
      color: var(--color-background-secondary);
    }

    .coming-soon-message {
      font-size: 18px;
      margin-bottom: 8px;
    }
  `;
}
__legacyDecorateClassTS(
  [n4({ type: Array })],
  ProductSelect.prototype,
  "products",
  undefined
);
__legacyDecorateClassTS(
  [n4({ type: String })],
  ProductSelect.prototype,
  "selectedProduct",
  undefined
);
__legacyDecorateClassTS([r6()], ProductSelect.prototype, "isOpen", undefined);
__legacyDecorateClassTS(
  [r6()],
  ProductSelect.prototype,
  "searchQuery",
  undefined
);
__legacyDecorateClassTS(
  [r6()],
  ProductSelect.prototype,
  "selectedTab",
  undefined
);
__legacyDecorateClassTS(
  [r6()],
  ProductSelect.prototype,
  "selectedIndex",
  undefined
);
ProductSelect = __legacyDecorateClassTS([t3("product-select")], ProductSelect);

// client/components/chart/price-info.ts
class PriceInfo extends r4 {
  constructor() {
    super(...arguments);
    this.symbol = "";
    this.symbols = [];
    this.granularity =
      $547f11326d897190$export$966034e6c6823eb0["state.granularity"] ??
      "ONE_HOUR";
    this.liveCandle = null;
    this.isGranularityDropdownOpen = false;
    this._state = $547f11326d897190$export$966034e6c6823eb0["state"];
  }
  firstUpdated() {
    $547f11326d897190$export$d1203567a167490e("state.liveCandle", () => {
      this.liveCandle = $e921b0bd4f6415ab$export$5dcba2d45033d435(
        $547f11326d897190$export$966034e6c6823eb0["state.liveCandle"]
      );
    });
    $547f11326d897190$export$d1203567a167490e("state.granularity", () => {
      this.granularity = $e921b0bd4f6415ab$export$5dcba2d45033d435(
        $547f11326d897190$export$966034e6c6823eb0["state.granularity"]
      );
    });
    $547f11326d897190$export$d1203567a167490e("state.symbol", () => {
      this.symbol = $e921b0bd4f6415ab$export$5dcba2d45033d435(
        $547f11326d897190$export$966034e6c6823eb0["state.symbol"]
      );
    });
    $547f11326d897190$export$d1203567a167490e("state", () => {
      this._state = $547f11326d897190$export$966034e6c6823eb0["state"];
    });
    document.addEventListener("click", this.handleClickOutside);
    document.addEventListener("keydown", this.handleKeyPress);
    document.addEventListener("click", this.handleClickOutside);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("click", this.handleClickOutside);
  }
  handleClickOutside = (e5) => {
    const path = e5.composedPath();
    const dropdownEl = this.renderRoot.querySelector(".granularity-dropdown");
    const timeframeEl = this.renderRoot.querySelector(".timeframe-button");
    if (!path.includes(dropdownEl) && !path.includes(timeframeEl)) {
      this.isGranularityDropdownOpen = false;
    }
  };
  handleKeyPress = (e5) => {
    if (e5.metaKey || e5.ctrlKey || e5.altKey || e5.shiftKey) {
      return;
    }
    if (e5.key.length === 1 && e5.key.match(/[a-zA-Z]/)) {
      e5.preventDefault();
      const productSelect = this.renderRoot.querySelector("product-select");
      if (productSelect) {
        productSelect.openWithSearch(e5.key);
      }
    }
  };
  handleGranularityChange(newGranularity) {
    const currentTimeRange = this._state.timeRange;
    const candleCount = this._state.priceHistory.getCandlesInRange(
      currentTimeRange.start,
      currentTimeRange.end
    ).length;
    const newGranularityMs = granularityToMs(newGranularity);
    const MAX_CANDLES = 300;
    const newTimeSpan = candleCount * newGranularityMs;
    const candidateTimeRange = {
      start: currentTimeRange.end - newTimeSpan,
      end: currentTimeRange.end,
    };
    const newCandleCount = numCandlesInRange(
      newGranularity,
      candidateTimeRange.start,
      candidateTimeRange.end
    );
    const finalCandleCount = Math.min(newCandleCount, MAX_CANDLES);
    const newEnd =
      Math.min(currentTimeRange.end, new Date().getTime()) +
      newGranularityMs * 2;
    const newTimeRange = {
      start: newEnd - finalCandleCount * newGranularityMs,
      end: newEnd,
    };
    this._state.timeRange = newTimeRange;
    this._state.granularity = newGranularity;
    this.isGranularityDropdownOpen = false;
  }
  handleProductChange(e5) {
    this._state.symbol = e5.detail.product;
  }
  render() {
    const isBearish = this.liveCandle
      ? this.liveCandle.close < this.liveCandle.open
      : false;
    const priceValueColor = isBearish
      ? "var(--color-error)"
      : "var(--color-accent-1)";
    const [close, open, low, high] = ["close", "open", "low", "high"].map(
      (price) =>
        this.liveCandle?.[price]
          ? `$${formatPrice(this.liveCandle[price])}`
          : "..."
    );
    return x`
      <div class="price-info">
        <div class="metadata-group">
          <div class="price-item">
            <product-select
              .products=${this.symbols}
              .selectedProduct=${this.symbol}
              @product-changed=${this.handleProductChange}
            ></product-select>
          </div>
          <div class="price-item" style="position: relative;">
            <spot-button
              class="timeframe-button"
              label="Time Frame"
              .value=${granularityLabel(this.granularity)}
              @click=${() =>
                (this.isGranularityDropdownOpen =
                  !this.isGranularityDropdownOpen)}
            ></spot-button>
            ${
              this.isGranularityDropdownOpen
                ? x`
                  <div class="granularity-dropdown">
                    ${getAllGranularities().map(
                      (g2) => x`
                        <div
                          class="granularity-option ${
                            g2 === this.granularity ? "selected" : ""
                          }"
                          @click=${() => this.handleGranularityChange(g2)}
                        >
                          ${granularityLabel(g2)}
                        </div>
                      `
                    )}
                  </div>
                `
                : ""
            }
          </div>
        </div>
        <div class="price-group">
          <div class="price-item">
            <span class="price-label">Open</span>
            <span class="price-value" style="color: ${priceValueColor}"
              >${open}</span
            >
          </div>
          <div class="price-item">
            <span class="price-label">High</span>
            <span class="price-value" style="color: ${priceValueColor}"
              >${high}</span
            >
          </div>
          <div class="price-item">
            <span class="price-label">Low</span>
            <span class="price-value" style="color: ${priceValueColor}"
              >${low}</span
            >
          </div>
          <div class="price-item">
            <span class="price-label">Close</span>
            <span class="price-value" style="color: ${priceValueColor}"
              >${close}</span
            >
          </div>
        </div>
      </div>
    `;
  }
  static styles = i`
    :host {
      display: block;
      min-width: 160px;
      max-width: 100%;
      white-space: normal;
      font-family: var(--font-primary);
    }

    .price-info {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      align-items: center;
      width: 100%;
      justify-content: space-between;
    }

    .metadata-group {
      display: flex;
      gap: 12px;
      align-items: center;
      flex: 0 auto;
      min-width: 0;
    }

    .price-group {
      display: flex;
      gap: 36px;
      align-items: center;
      flex: 0 auto;
      justify-content: flex-end;
      min-width: 0;
    }

    .price-item {
      display: flex;
      flex-direction: column;
      gap: 4px;
      min-width: 100px;
      flex: 1;
    }

    .price-label {
      color: rgba(255, 255, 255, 0.5);
      text-transform: uppercase;
      font-size: 11px;
      font-weight: 500;
      font-family: var(--font-secondary);
    }

    .price-value {
      font-size: 13px;
      font-weight: 500;
      overflow: hidden;
      text-overflow: ellipsis;
      min-width: 80px;
    }

    @media (max-width: 767px) {
      .price-info {
        flex-direction: column;
        align-items: stretch;
        gap: 12px;
      }

      .metadata-group {
        display: flex;
        gap: 8px;
        min-width: 0;
      }

      .price-group {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
        min-width: 0;
      }

      .price-item {
        flex-direction: row;
        align-items: center;
        gap: 8px;
        flex: 0;
        min-width: unset;
      }

      .price-label {
        min-width: 60px;
      }

      .price-value {
        flex: 1;
        min-width: unset;
      }
    }

    .granularity-dropdown {
      position: absolute;
      top: 100%;
      left: 0;
      margin-top: 4px;
      background: rgb(24, 26, 27);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 4px;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3),
        0 0 8px rgba(255, 255, 255, 0.05);
      z-index: 1000;
      min-width: 120px;
    }

    .granularity-option {
      padding: 8px 12px;
      cursor: pointer;
      transition: background-color 0.2s ease;
      color: var(--color-background-secondary);
    }

    .granularity-option:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    .granularity-option.selected {
      background: rgba(255, 255, 255, 0.15);
      color: var(--color-accent-1);
    }
  `;
}
__legacyDecorateClassTS(
  [n4({ type: String })],
  PriceInfo.prototype,
  "symbol",
  undefined
);
__legacyDecorateClassTS(
  [n4({ type: Array })],
  PriceInfo.prototype,
  "symbols",
  undefined
);
__legacyDecorateClassTS(
  [n4({ type: String })],
  PriceInfo.prototype,
  "granularity",
  undefined
);
__legacyDecorateClassTS([r6()], PriceInfo.prototype, "liveCandle", undefined);
__legacyDecorateClassTS(
  [r6()],
  PriceInfo.prototype,
  "isGranularityDropdownOpen",
  undefined
);
__legacyDecorateClassTS([r6()], PriceInfo.prototype, "_state", undefined);
PriceInfo = __legacyDecorateClassTS([t3("price-info")], PriceInfo);

// client/components/chart/volume-chart.ts
class VolumeChart extends CanvasBase {
  FIXED_GAP_WIDTH = 2;
  MIN_BAR_WIDTH = 1;
  MAX_BAR_WIDTH = 500;
  _state = null;
  getId() {
    return "volume-chart";
  }
  useResizeObserver() {
    return true;
  }
  firstUpdated() {
    super.firstUpdated();
    $547f11326d897190$export$d1203567a167490e("state", () => {
      this._state = $547f11326d897190$export$966034e6c6823eb0["state"];
      this.draw();
    });
    $547f11326d897190$export$d1203567a167490e("state.liveCandle", () => {
      console.log(
        "VolumeChart: received live candle",
        $547f11326d897190$export$966034e6c6823eb0["state.liveCandle"]
      );
      this._state = $547f11326d897190$export$966034e6c6823eb0["state"];
      this.draw();
    });
  }
  draw() {
    if (!this.canvas || !this.ctx || !this._state) return;
    const ctx = this.ctx;
    const dpr3 = window.devicePixelRatio ?? 1;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    const candles = this._state.priceHistory.getCandlesInRange(
      this._state.timeRange.start,
      this._state.timeRange.end
    );
    if (!candles || candles.length === 0) {
      return;
    }
    const maxVolume = Math.max(
      1,
      ...candles.map(([_2, candle]) => candle?.volume || 0)
    );
    const volumeScale = this.canvas.height / dpr3 / maxVolume;
    const timeSpan = this._state.timeRange.end - this._state.timeRange.start;
    const candleCount = Math.ceil(
      timeSpan / this._state.priceHistory.granularityMs
    );
    const availableWidth = this.canvas.width / dpr3;
    const totalGapWidth = ((candleCount - 1) * this.FIXED_GAP_WIDTH) / dpr3;
    const spaceForBars = availableWidth - totalGapWidth;
    const barWidth = Math.max(
      this.MIN_BAR_WIDTH,
      Math.min(this.MAX_BAR_WIDTH, spaceForBars / candleCount)
    );
    iterateTimeline({
      callback: (x2, timestamp) => {
        const candle = this._state.priceHistory.getCandle(timestamp);
        if (!candle || typeof candle.volume === "undefined") {
          console.log("VolumeChart: skipping candle", candle);
          return;
        }
        if (candle.live) {
          console.log("VolumeChart: drawing live candle volume", candle);
        }
        const volumeHeight = (candle.volume || 0) * volumeScale;
        if (volumeHeight <= 0) return;
        const y3 = this.canvas.height / dpr3 - volumeHeight;
        ctx.fillStyle =
          candle.close >= candle.open
            ? `${getComputedStyle(document.documentElement)
                .getPropertyValue("--color-accent-1")
                .trim()}80`
            : `${getComputedStyle(document.documentElement)
                .getPropertyValue("--color-error")
                .trim()}80`;
        ctx.fillRect(x2 - barWidth / 2, y3, barWidth, volumeHeight);
      },
      granularity: this._state.priceHistory.getGranularity(),
      viewportStartTimestamp: this._state.timeRange.start,
      viewportEndTimestamp: this._state.timeRange.end,
      canvasWidth: this.canvas.width / dpr3,
      interval: this._state.priceHistory.granularityMs,
      alignToLocalTime: false,
    });
  }
}
VolumeChart = __legacyDecorateClassTS([t3("volume-chart")], VolumeChart);

// client/components/chart/logo.ts
class ChartLogo extends r4 {
  render() {
    return x`
      <div class="logo-container">
        ${b2`
        <svg width="200" height="30" viewBox="0 0 2385 451" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M557.692 258.271L588.865 246.338C595.1 269.167 613.284 282.656 638.741 282.656C664.199 282.656 679.266 270.723 679.266 252.045C679.266 199.123 567.564 221.952 567.564 146.72C567.564 112.476 593.541 88.0907 638.222 88.0907C676.148 88.0907 701.086 106.25 709.399 134.787L678.227 146.72C671.992 125.966 658.484 116.627 636.663 116.627C613.284 116.627 600.295 128.042 600.295 144.126C600.295 194.453 712.516 170.068 712.516 251.007C712.516 287.326 682.902 311.193 635.624 311.193C596.139 311.193 567.044 291.996 557.692 258.271Z" fill="white"/>
            <path d="M908.903 226.104C908.903 274.875 874.614 311.713 827.855 311.713C803.956 311.713 785.252 302.374 772.263 286.29V363.597H739.013V144.127H769.666V170.069C782.654 151.909 802.917 141.014 828.374 141.014C875.653 141.014 908.903 177.852 908.903 226.623V226.104ZM876.172 226.104C876.172 193.417 853.832 169.55 823.698 169.55C793.565 169.55 770.705 192.898 770.705 226.104C770.705 259.31 792.006 282.658 823.698 282.658C855.39 282.658 876.172 258.791 876.172 226.104Z" fill="white"/>
            <path d="M927.088 226.101C927.088 176.811 962.936 140.492 1013.33 140.492C1063.73 140.492 1100.1 176.811 1100.1 226.101C1100.1 275.391 1064.25 311.71 1013.33 311.71C962.417 311.71 927.088 274.872 927.088 226.101ZM1066.85 226.101C1066.85 192.895 1045.54 169.547 1013.33 169.547C981.12 169.547 959.819 192.895 959.819 226.101C959.819 259.307 981.64 282.136 1013.33 282.136C1045.02 282.136 1066.85 258.788 1066.85 226.101Z" fill="white"/>
            <path d="M1136.46 250.485V172.139H1107.37V143.603H1123.48C1133.87 143.603 1138.54 138.415 1138.54 127.519V101.058H1170.75V143.603H1216.47V172.139H1169.2V247.372C1169.2 268.125 1180.11 279.021 1199.85 279.021H1218.03V308.076H1193.09C1156.21 308.076 1136.46 285.766 1136.46 251.003V250.485Z" fill="white"/>
            <path d="M1294.41 200.161C1294.41 134.268 1341.17 88.0907 1402.99 88.0907C1456.5 88.0907 1489.24 119.74 1502.22 157.616L1470.53 170.587C1460.66 139.456 1438.32 119.74 1402.47 119.74C1359.35 119.74 1328.18 152.427 1328.18 200.161C1328.18 247.894 1359.87 280.581 1403.51 280.581C1438.84 280.581 1460.66 261.384 1470.53 229.735L1502.22 242.706C1489.24 281.619 1456.5 312.23 1403.51 312.23C1340.65 312.23 1294.41 266.054 1294.41 200.679V200.161Z" fill="white"/>
            <path d="M1686.66 144.124V308.078H1656.01V281.099C1643.54 300.296 1623.8 311.71 1597.82 311.71C1550.54 311.71 1516.77 274.872 1516.77 226.101C1516.77 177.33 1551.06 142.568 1597.82 142.568C1623.28 142.568 1643.54 152.945 1656.01 171.623V144.124H1686.66ZM1654.45 225.582C1654.45 192.377 1633.15 169.029 1601.97 169.029C1571.84 169.029 1549.5 193.414 1549.5 225.582C1549.5 257.751 1571.84 282.136 1601.97 282.136C1632.11 282.136 1654.45 258.788 1654.45 225.582Z" fill="white"/>
            <path d="M1874.73 206.904V308.078H1842V213.13C1842 186.15 1825.9 170.066 1799.4 170.066C1774.98 170.066 1756.8 188.226 1756.28 208.46V308.078H1723.03V144.124H1754.2V164.878C1765.63 150.35 1784.33 140.492 1808.23 140.492C1849.28 140.492 1874.21 166.953 1874.21 206.904H1874.73Z" fill="white"/>
            <path d="M2052.94 144.126L1988 308.08H1950.07L1885.13 144.126H1919.42L1968.78 276.431L2018.13 144.126H2052.42H2052.94Z" fill="white"/>
            <path d="M2225.95 144.124V308.078H2195.29V281.099C2182.82 300.296 2163.08 311.71 2137.1 311.71C2089.83 311.71 2056.05 274.872 2056.05 226.101C2056.05 177.33 2090.34 142.568 2137.1 142.568C2162.56 142.568 2182.82 152.945 2195.29 171.623V144.124H2225.95ZM2194.25 225.582C2194.25 192.377 2172.95 169.029 2141.78 169.029C2111.65 169.029 2089.31 193.414 2089.31 225.582C2089.31 257.751 2111.65 282.136 2141.78 282.136C2171.91 282.136 2194.25 258.788 2194.25 225.582Z" fill="white"/>
            <path d="M2248.81 270.721L2278.94 259.307C2284.14 275.391 2298.17 284.73 2318.95 284.73C2337.13 284.73 2349.08 276.947 2349.08 263.458C2349.08 227.658 2256.6 243.742 2256.6 187.707C2256.6 158.652 2281.02 140.492 2318.43 140.492C2349.08 140.492 2371.42 152.944 2378.69 175.254L2348.56 186.669C2343.37 173.179 2332.97 166.953 2317.91 166.953C2301.28 166.953 2291.93 174.217 2291.93 186.15C2291.93 219.875 2384.41 201.197 2384.41 261.382C2384.41 293.55 2358.43 312.229 2318.43 312.229C2283.62 312.229 2258.16 297.701 2249.33 271.24L2248.81 270.721Z" fill="white"/>
            <path d="M421.444 0.919434C409.458 0.919434 399.68 10.3694 399.68 22.3393C399.68 34.3092 409.458 44.0742 421.444 44.0742C433.43 44.0742 443.208 34.3092 443.208 22.3393C443.208 10.3694 433.43 0.919434 421.444 0.919434ZM421.444 39.6642C411.981 39.6642 404.096 31.7893 404.096 22.3393C404.096 12.8894 411.981 5.32941 421.444 5.32941C430.907 5.32941 438.792 12.8894 438.792 22.3393C438.792 31.7893 430.907 39.6642 421.444 39.6642Z" fill="white"/>
            <path d="M426.175 24.8564C426.175 24.8564 427.436 23.9114 428.067 23.2814C428.698 22.0214 429.329 20.4464 429.329 18.5564C429.329 17.6114 429.013 16.3514 428.698 15.4064C428.383 14.4614 427.752 13.5164 426.805 12.8864C425.859 12.2564 424.913 11.6264 423.651 11.6264H422.705L422.074 11.3114H413.242V33.3613H417.027V25.8013H422.074L425.544 33.3613H430.275L426.175 24.8564ZM424.913 20.1314C424.913 20.1314 424.597 20.7614 424.282 21.0764C423.967 21.3914 423.651 21.7064 423.02 21.7064C423.02 21.7064 422.81 21.8114 422.389 22.0214H417.027V15.4064H423.02C423.02 15.4064 423.967 15.7214 424.282 16.0364C424.597 16.3514 424.913 16.6664 424.913 17.2964C425.228 17.6114 425.228 18.2414 425.228 18.5564C425.228 19.1864 425.228 19.5014 424.913 20.1314Z" fill="white"/>
            <path d="M81.789 176.806L0.220703 129.592L222.066 0.919006L444.818 128.739L388.188 161.945L222.066 66.8119L114.001 129.592L138.939 143.601L222.066 95.3483L445.68 224.613L389.049 257.3L222.066 161.241L114.001 224.021L282.333 321.045L225.183 354.25L0.220703 224.021L81.789 176.806Z" fill="white"/>
            <path d="M445.469 321.564L222.585 450.237L0.871094 320.397L57.5013 287.71H58.0209L222.585 384.863L332.208 321.564L164.915 224.54L221.545 191.853L445.469 321.564Z" fill="white"/>
        </svg>
        `}
      </div>
    `;
  }
  static styles = i`
    :host {
      display: block;
      position: absolute;
      bottom: 8px;
      left: 8px;
      z-index: 3;
      opacity: 0.8;
      transition: opacity 0.2s ease;
      color: var(--color-accent-2);
    }

    :host(:hover) {
      opacity: 1;
    }

    .logo-container {
      width: 200px;
      height: 30px;
    }
  `;
}
ChartLogo = __legacyDecorateClassTS([t3("chart-logo")], ChartLogo);

// client/components/chart/chart-container.ts
var BUFFER_MULTIPLIER = 1;
var TIMELINE_HEIGHT = 40;
var PRICEAXIS_WIDTH = 70;

class ChartContainer extends r4 {
  isDragging = false;
  lastX = 0;
  lastY = 0;
  resizeObserver;
  lastTouchDistance = 0;
  isZooming = false;
  chart = null;
  padding = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  };
  ZOOM_FACTOR = 0.005;
  constructor() {
    super();
    this._state = {
      priceRange: new PriceRangeImpl(0, 0),
      priceHistory: new SimplePriceHistory("ONE_HOUR", new Map()),
      timeRange: { start: 0, end: 0 },
      liveCandle: null,
      canvasWidth: 0,
      canvasHeight: 0,
      symbol: "BTC-USD",
      granularity: "ONE_HOUR",
    };
    this.products = [];
    this.options = {
      candleWidth: 7,
      candleGap: 2,
      minCandleWidth: 2,
      maxCandleWidth: 100,
    };
    console.log("ChartContainer: Constructor called");
  }
  connectedCallback() {
    super.connectedCallback();
    console.log("ChartContainer: Connected to DOM");
  }
  set startTimestamp(startTimestamp) {
    this._state.timeRange.start = startTimestamp;
  }
  set endTimestamp(endTimestamp) {
    this._state.timeRange.end = endTimestamp;
  }
  firstUpdated() {
    console.log("ChartContainer: First update completed");
    const chartContainer = this.renderRoot.querySelector(".chart");
    if (chartContainer) {
      const computedStyle = getComputedStyle(chartContainer);
      const height = parseFloat(computedStyle.height);
      const width = parseFloat(computedStyle.width);
      if (height > 0 && width > 0) {
        this.handleResize(width, height);
      }
      this.resizeObserver = new ResizeObserver((entries) => {
        const entry = entries[0];
        if (entry) {
          const { width: width2, height: height2 } = entry.contentRect;
          this.handleResize(width2, height2);
        }
      });
      this.resizeObserver.observe(chartContainer);
    }
    const chartElement = this.renderRoot.querySelector("candlestick-chart");
    console.log("chartElement", chartElement);
    this.chart = chartElement;
    if (chartElement) {
      chartElement.addEventListener("mousedown", this.handleDragStart);
      chartElement.addEventListener("mousemove", this.handleDragMove);
      chartElement.addEventListener("mouseup", this.handleDragEnd);
      chartElement.addEventListener("mouseleave", this.handleDragEnd);
      chartElement.addEventListener("wheel", this.handleWheel);
      chartElement.addEventListener("touchstart", this.handleTouchStart);
      chartElement.addEventListener("touchmove", this.handleTouchMove);
      chartElement.addEventListener("touchend", this.handleTouchEnd);
      chartElement.addEventListener("touchcancel", this.handleTouchEnd);
    }
    if (this.chart) {
      this.chart.addEventListener("chart-ready", (e5) => {
        console.log("ChartContainer: Chart ready event received", e5.detail);
        this.dispatchEvent(
          new CustomEvent("chart-ready", {
            detail: e5.detail,
            bubbles: true,
            composed: true,
          })
        );
      });
    }
    window.addEventListener("timeline-zoom", this.handleTimelineZoom);
    window.addEventListener("price-axis-zoom", this.handlePriceAxisZoom);
    this.setupFocusHandler();
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    this.draw();
  }
  draw() {
    if (!this.chart || !this.chart.canvas) return;
    const context = {
      ctx: this.chart.ctx,
      chartCanvas: this.chart.canvas,
      data: this._state.priceHistory,
      options: this.calculateCandleOptions(),
      viewportStartTimestamp: this._state.timeRange.start,
      viewportEndTimestamp: this._state.timeRange.end,
      priceRange: this._state.priceRange,
      axisMappings: {
        timeToX: timeToX(this.chart.canvas.width, this._state.timeRange),
        priceToY: priceToY(this.chart.canvas.height, {
          start: this._state.priceRange.min,
          end: this._state.priceRange.max,
        }),
      },
    };
    console.log("ChartContainer: Drawing chart", context);
    this.chart.drawWithContext(context);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.resizeObserver?.disconnect();
    window.removeEventListener("timeline-zoom", this.handleTimelineZoom);
    window.removeEventListener("focus", this.handleWindowFocus);
  }
  set state(state2) {
    console.log("ChartContainer: Setting state", {
      min: state2.priceRange.min,
      max: state2.priceRange.max,
    });
    this._state = state2;
  }
  render() {
    return x`
      <div class="container">
        <div class="price-info">
          <price-info
            .product=${this._state.liveCandle?.productId}
            .symbols=${this.products}
          ></price-info>
        </div>
        <div class="chart-area">
          <div class="chart">
            <candlestick-chart></candlestick-chart>
          </div>
          <div class="volume-chart">
            <volume-chart></volume-chart>
          </div>

          <live-decorators></live-decorators>
          <chart-crosshairs></chart-crosshairs>
          <div class="price-axis-container">
            <price-axis></price-axis>
          </div>
          <div class="timeline-container">
            <chart-timeline></chart-timeline>
          </div>
          <chart-logo></chart-logo>
        </div>
      </div>
    `;
  }
  handleResize(width, height) {
    if (!this.chart) return;
    if (!this._state?.granularity) return;
    if (this._state.priceHistory.getCandles().size === 0) {
      this.chart.resize(width, height);
      return;
    }
    if (this._state.timeRange.end === 0) {
      return;
    }
    this.chart.resize(width, height);
    const visibleCandles = this.calculateVisibleCandles();
    const newStartTimestamp =
      this._state.timeRange.end -
      visibleCandles * getCandleInterval(this._state.granularity);
    if (
      newStartTimestamp > 0 &&
      newStartTimestamp < this._state.timeRange.end
    ) {
      this._state.timeRange = {
        start: newStartTimestamp,
        end: this._state.timeRange.end,
      };
      this.draw();
    }
  }
  handleDragStart = (e5) => {
    this.isDragging = true;
    this.lastX = e5.clientX;
    this.lastY = e5.clientY;
  };
  handleDragMove = (e5) => {
    if (!this.isDragging) return;
    const deltaX = e5.clientX - this.lastX;
    const deltaY = e5.clientY - this.lastY;
    this.handlePan(deltaX);
    this.handleVerticalPan(deltaY);
    this.lastX = e5.clientX;
    this.lastY = e5.clientY;
  };
  handleDragEnd = () => {
    this.isDragging = false;
  };
  handleWheel = (e5) => {
    e5.preventDefault();
    const isTrackpad = Math.abs(e5.deltaX) !== 0 || Math.abs(e5.deltaY) < 50;
    this.handlePan(e5.deltaX, isTrackpad);
    this.handleVerticalPan(e5.deltaY, isTrackpad);
  };
  handlePan(deltaX, isTrackpad = false) {
    if (!this.chart) return;
    const timeRange = this._state.timeRange.end - this._state.timeRange.start;
    const viewportWidth =
      this.chart.canvas.width / (window.devicePixelRatio ?? 1);
    const timePerPixel = timeRange / viewportWidth;
    const adjustedDelta = isTrackpad ? -deltaX : deltaX;
    const timeShift = Math.round(adjustedDelta * timePerPixel);
    if (timeShift === 0) return;
    const newStart = this._state.timeRange.start - timeShift;
    const newEnd = newStart + timeRange;
    this._state.timeRange = { start: newStart, end: newEnd };
    this.draw();
    const visibleTimeRange = timeRange;
    const bufferZone = visibleTimeRange * BUFFER_MULTIPLIER;
    const direction = timeShift > 0 ? "backward" : "forward";
    const needMoreData =
      (direction === "backward" &&
        newStart <
          Number(this._state.priceHistory.startTimestamp) + bufferZone) ||
      (direction === "forward" &&
        newEnd > Number(this._state.priceHistory.endTimestamp) - bufferZone);
    if (needMoreData) {
      this.dispatchRefetch(timeShift > 0 ? "backward" : "forward");
    }
  }
  handleVerticalPan(deltaY, isTrackpad = false) {
    if (!this.chart || !this._state.priceRange) return;
    const availableHeight =
      this.chart.canvas.height / (window.devicePixelRatio ?? 1);
    const pricePerPixel = this._state.priceRange.range / availableHeight;
    const sensitivity = 1.5;
    const adjustedDelta = (isTrackpad ? -deltaY : deltaY) * sensitivity;
    const priceShift = adjustedDelta * pricePerPixel;
    if (priceShift === 0) return;
    this._state.priceRange.shift(priceShift);
    $f0b099915f91bd21$export$d0b7ea69ab6056df("state.priceRange");
    this.draw();
  }
  dispatchRefetch(direction) {
    const FETCH_BATCH_SIZE = 200;
    const timeRange =
      direction === "backward"
        ? {
            start:
              Number(this._state.priceHistory.startTimestamp) -
              FETCH_BATCH_SIZE * granularityToMs(this._state.granularity),
            end: Number(this._state.priceHistory.startTimestamp),
          }
        : {
            start: Number(this._state.priceHistory.endTimestamp),
            end:
              Number(this._state.priceHistory.endTimestamp) +
              FETCH_BATCH_SIZE * granularityToMs(this._state.granularity),
          };
    this.dispatchEvent(
      new CustomEvent("chart-pan", {
        detail: {
          direction,
          timeRange,
          visibleCandles: this.calculateVisibleCandles(),
          needMoreData: true,
          bubbles: true,
          composed: true,
        },
      })
    );
  }
  calculateVisibleCandles() {
    if (!this.chart) return 0;
    const availableWidth =
      this.chart.canvas.width - this.padding.left - this.padding.right;
    const totalCandleWidth = this.options.candleWidth + this.options.candleGap;
    return Math.floor(
      availableWidth / (totalCandleWidth * window.devicePixelRatio)
    );
  }
  handleTimelineZoom = (event) => {
    const { deltaX, clientX, rect, isTrackpad } = event.detail;
    const zoomMultiplier = isTrackpad ? 1 : 0.1;
    const timeRange = this._state.timeRange.end - this._state.timeRange.start;
    const zoomCenter = (clientX - rect.left) / rect.width;
    const timeAdjustment =
      timeRange * this.ZOOM_FACTOR * deltaX * zoomMultiplier;
    const newTimeRange = Math.max(
      timeRange - timeAdjustment,
      getCandleInterval(this._state.granularity) * 10
    );
    const rangeDifference = timeRange - newTimeRange;
    const newStart = this._state.timeRange.start + rangeDifference * zoomCenter;
    const newEnd =
      this._state.timeRange.end - rangeDifference * (1 - zoomCenter);
    if (newEnd - newStart < getCandleInterval(this._state.granularity) * 10) {
      const center = (newStart + newEnd) / 2;
      const minHalfRange = getCandleInterval(this._state.granularity) * 5;
      this._state.timeRange = {
        start: center - minHalfRange,
        end: center + minHalfRange,
      };
    } else {
      this._state.timeRange = { start: newStart, end: newEnd };
    }
    this.draw();
    const bufferTimeRange = newTimeRange * BUFFER_MULTIPLIER;
    const needMoreData =
      this._state.timeRange.start <
        this._state.priceHistory.startTimestamp + bufferTimeRange ||
      this._state.timeRange.end >
        this._state.priceHistory.endTimestamp - bufferTimeRange;
    if (needMoreData) {
      this.dispatchRefetch(deltaX > 0 ? "backward" : "forward");
    }
  };
  calculateCandleOptions() {
    if (!this.chart) return this.options;
    if (!this.chart.canvas) {
      console.warn(
        "ChartContainer: No canvas found, returning default options"
      );
      return this.options;
    }
    const timeRange = this._state.timeRange.end - this._state.timeRange.start;
    const numCandles = timeRange / getCandleInterval(this._state.granularity);
    const availableWidth =
      this.chart.canvas.width / (window.devicePixelRatio ?? 1) -
      this.padding.left -
      this.padding.right;
    const idealCandleWidth = (availableWidth / numCandles) * 0.9;
    const idealGapWidth = (availableWidth / numCandles) * 0.1;
    const candleWidth =
      Math.max(
        this.options.minCandleWidth,
        Math.min(this.options.maxCandleWidth, idealCandleWidth)
      ) / (window.devicePixelRatio ?? 1);
    const candleGap = Math.max(1, idealGapWidth);
    return {
      ...this.options,
      candleWidth,
      candleGap,
    };
  }
  handlePriceAxisZoom = (event) => {
    const { deltaY, isTrackpad } = event.detail;
    const zoomCenter = 0.5;
    const zoomMultiplier = isTrackpad ? 0.5 : 0.1;
    this._state.priceRange.adjust(deltaY * zoomMultiplier, zoomCenter);
    $f0b099915f91bd21$export$d0b7ea69ab6056df("state.priceRange");
    this.draw();
  };
  updateLiveCandle(liveCandle) {
    const isSuccess = this._state.priceHistory.setLiveCandle({
      timestamp: liveCandle.timestamp * 1000,
      open: liveCandle.open,
      high: liveCandle.high,
      low: liveCandle.low,
      close: liveCandle.close,
      granularity: this._state.granularity,
      volume: liveCandle.volume,
      live: true,
    });
    if (isSuccess) {
      this.draw();
    }
    return isSuccess;
  }
  panTimeline(movementSeconds, durationSeconds = 1) {
    if (!this.chart) return;
    const durationMs = durationSeconds * 1000;
    const FRAMES_PER_SECOND = 60;
    const totalFrames = (durationMs / 1000) * FRAMES_PER_SECOND;
    let currentFrame = 0;
    const startRange = { ...this._state.timeRange };
    const candleInterval = getCandleInterval(this._state.granularity);
    const numCandles = Math.abs(movementSeconds / (candleInterval / 1000));
    const movementMs = numCandles * candleInterval;
    const targetRange = {
      start:
        startRange.start - (movementSeconds > 0 ? movementMs : -movementMs),
      end: startRange.end - (movementSeconds > 0 ? movementMs : -movementMs),
    };
    console.log("ChartContainer: Panning timeline", {
      movementSeconds,
      candleInterval,
      numCandles,
      movementMs,
      startRange,
      targetRange,
    });
    const animate = () => {
      currentFrame++;
      const progress = currentFrame / totalFrames;
      const easeProgress = this.easeInOutCubic(progress);
      const newTimeRange = {
        start:
          startRange.start +
          (targetRange.start - startRange.start) * easeProgress,
        end: startRange.end + (targetRange.end - startRange.end) * easeProgress,
      };
      this._state.timeRange = newTimeRange;
      $f0b099915f91bd21$export$d0b7ea69ab6056df("state.timeRange");
      this.draw();
      if (currentFrame < totalFrames) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }
  easeInOutCubic(x2) {
    return x2 < 0.5 ? 4 * x2 * x2 * x2 : 1 - Math.pow(-2 * x2 + 2, 3) / 2;
  }
  setupFocusHandler() {
    window.addEventListener("focus", this.handleWindowFocus);
    document.addEventListener(
      "visibilitychange",
      this.handleVisibilityChange.bind(this)
    );
  }
  handleWindowFocus = () => {
    this.draw();
  };
  handleVisibilityChange() {
    if (document.visibilityState === "visible") {
      this.draw();
    }
  }
  handleTouchStart = (e5) => {
    e5.preventDefault();
    this.isDragging = true;
    if (e5.touches.length === 2) {
      this.isZooming = true;
      this.lastTouchDistance = Math.hypot(
        e5.touches[0].clientX - e5.touches[1].clientX,
        e5.touches[0].clientY - e5.touches[1].clientY
      );
    } else if (e5.touches.length === 1) {
      this.lastX = e5.touches[0].clientX;
      this.lastY = e5.touches[0].clientY;
    }
  };
  handleTouchMove = (e5) => {
    e5.preventDefault();
    if (!this.isDragging) return;
    if (e5.touches.length === 2 && this.isZooming) {
      const currentDistance = Math.hypot(
        e5.touches[0].clientX - e5.touches[1].clientX,
        e5.touches[0].clientY - e5.touches[1].clientY
      );
      const deltaDistance = currentDistance - this.lastTouchDistance;
      const zoomSensitivity = 0.5;
      const isZoomingIn = deltaDistance > 0;
      const centerX = (e5.touches[0].clientX + e5.touches[1].clientX) / 2;
      const rect = e5.target.getBoundingClientRect();
      const adjustedDelta = deltaDistance * zoomSensitivity;
      this.dispatchEvent(
        new CustomEvent("timeline-zoom", {
          detail: {
            deltaX: isZoomingIn ? -adjustedDelta : adjustedDelta,
            clientX: centerX,
            rect,
            isTrackpad: true,
          },
          bubbles: true,
          composed: true,
        })
      );
      this.lastTouchDistance = currentDistance;
    } else if (e5.touches.length === 1) {
      const deltaX = e5.touches[0].clientX - this.lastX;
      const deltaY = e5.touches[0].clientY - this.lastY;
      this.handlePan(deltaX);
      this.handleVerticalPan(deltaY);
      this.lastX = e5.touches[0].clientX;
      this.lastY = e5.touches[0].clientY;
    }
  };
  handleTouchEnd = () => {
    this.isDragging = false;
    this.isZooming = false;
  };
  static styles = i`
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }

    .container {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      background-color: var(--color-primary-dark);
      gap: 8px;
    }

    .toolbar-top {
      position: absolute;
      top: 8px;
      left: 8px;
      z-index: 7;
      background: transparent;
      width: fit-content;
    }

    .price-info {
      flex: 0 0 auto;
      background: var(--color-primary-dark);
      border-radius: 12px;
      margin: 8px 8px 0 8px;
      padding: 12px 16px;
      border: 1px solid rgba(143, 143, 143, 0.2);
    }

    .chart-area {
      flex: 1;
      position: relative;
      background: var(--color-primary-dark);
      overflow: hidden;
      pointer-events: auto;
      border-radius: 12px;
      margin: 0 8px 8px 8px;
      border: 1px solid rgba(143, 143, 143, 0.2);
    }

    .chart {
      position: relative;
      width: calc(100% - ${PRICEAXIS_WIDTH}px);
      height: var(--spotcanvas-chart-height, calc(100% - ${TIMELINE_HEIGHT}px));
      pointer-events: auto;
    }

    .volume-chart {
      position: absolute;
      bottom: ${TIMELINE_HEIGHT}px;
      left: 0;
      width: calc(100% - ${PRICEAXIS_WIDTH}px);
      height: 25%;
      pointer-events: none;
      z-index: 2;
      background: none;
    }

    volume-chart {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      background: none;
    }

    .price-axis-container,
    .timeline-container {
      position: absolute;
      background: var(--color-primary-dark);
      z-index: 4;
    }

    .price-axis-container {
      right: 0;
      top: 0;
      width: ${PRICEAXIS_WIDTH}px;
      height: var(--spotcanvas-chart-height, 100%);
    }

    chart-timeline {
      display: block;
      width: 100%;
      height: 100%;
      pointer-events: auto;
    }

    .timeline-container {
      bottom: 0;
      left: 0px;
      width: calc(100% - ${PRICEAXIS_WIDTH}px);
      height: ${TIMELINE_HEIGHT}px;
      pointer-events: auto;
    }

    candlestick-chart {
      position: absolute;
      top: 0;
      left: 0;
      width: calc(100% - ${PRICEAXIS_WIDTH}px);
      height: var(--spotcanvas-chart-height, calc(100% - ${TIMELINE_HEIGHT}px));
      pointer-events: auto;
      z-index: 1;
      cursor: crosshair;
    }

    candlestick-chart:active {
      cursor: grabbing;
    }

    live-decorators {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: calc(100% - ${PRICEAXIS_WIDTH}px);
      height: var(--spotcanvas-chart-height, calc(100% - ${TIMELINE_HEIGHT}px));
      pointer-events: none;
      z-index: 6;
    }

    chart-crosshairs {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 5;
      pointer-events: none;
    }

    chart-crosshairs > * {
      pointer-events: all;
    }

    price-axis {
      display: block;
      width: 100%;
      height: var(--spotcanvas-chart-height, calc(100% - ${TIMELINE_HEIGHT}px));
    }

    chart-logo {
      position: absolute;
      bottom: ${TIMELINE_HEIGHT + 8}px;
      left: 8px;
      z-index: 7;
    }
  `;
}
__legacyDecorateClassTS([r6()], ChartContainer.prototype, "_state", undefined);
__legacyDecorateClassTS(
  [n4({ type: Array })],
  ChartContainer.prototype,
  "products",
  undefined
);
__legacyDecorateClassTS(
  [n4({ type: Object })],
  ChartContainer.prototype,
  "options",
  undefined
);
__legacyDecorateClassTS(
  [n4({ type: Object })],
  ChartContainer.prototype,
  "state",
  null
);
ChartContainer = __legacyDecorateClassTS(
  [t3("chart-container")],
  ChartContainer
);

// client/candle-repository.ts
class CandleRepository {
  candles = new Map();
  API_BASE_URL;
  bufferedRanges = new Map();
  pendingFetches = new Set();
  constructor(apiBaseUrl) {
    this.API_BASE_URL = apiBaseUrl;
  }
  getKey(symbol, granularity) {
    return `${symbol}:${granularity}`;
  }
  getRangeKey(symbol, granularity, timeRange) {
    return `${symbol}:${granularity}:${Math.floor(
      Number(timeRange.start)
    )}:${Math.ceil(Number(timeRange.end))}`;
  }
  async fetchCandles(options) {
    const { symbol, granularity, timeRange } = options;
    const key = this.getKey(symbol, granularity);
    const rangeKey = this.getRangeKey(symbol, granularity, timeRange);
    if (!this.candles.has(key)) {
      this.candles.set(key, new Map());
    }
    const symbolBufferedRange = this.bufferedRanges.get(key);
    if (symbolBufferedRange) {
      const isWithinBuffer =
        Math.floor(Number(timeRange.start)) >=
          Math.floor(Number(symbolBufferedRange.start)) &&
        Math.ceil(Number(timeRange.end)) <=
          Math.ceil(Number(symbolBufferedRange.end));
      if (isWithinBuffer) {
        console.log(`Repository: Range already buffered for ${key}`, {
          requested: { start: timeRange.start, end: timeRange.end },
          buffered: {
            start: symbolBufferedRange.start,
            end: symbolBufferedRange.end,
          },
        });
        return this.candles.get(key);
      }
    }
    if (this.pendingFetches.has(rangeKey)) {
      console.log(`Repository: Fetch already pending for range ${rangeKey}`);
      return this.candles.get(key);
    }
    try {
      this.pendingFetches.add(rangeKey);
      const rangeCandles = await this.fetchRange(
        symbol,
        granularity,
        timeRange
      );
      const minStartInResult = Math.min(...rangeCandles.keys());
      const maxEndInResult = Math.max(...rangeCandles.keys());
      const updatedBufferRange = symbolBufferedRange
        ? {
            start: Math.min(
              minStartInResult,
              Number(symbolBufferedRange.start)
            ),
            end: Math.max(maxEndInResult, Number(symbolBufferedRange.end)),
          }
        : timeRange;
      this.bufferedRanges.set(key, updatedBufferRange);
      const existingCandles = this.candles.get(key);
      this.candles.set(key, new Map([...existingCandles, ...rangeCandles]));
      console.log(`Repository: Fetched candles for ${key}:`, {
        requested: {
          start: new Date(timeRange.start),
          end: new Date(timeRange.end),
        },
        received: rangeCandles.size,
        total: this.candles.get(key).size,
      });
      return this.candles.get(key);
    } finally {
      this.pendingFetches.delete(rangeKey);
    }
  }
  getCandles(symbol, granularity) {
    const key = this.getKey(symbol, granularity);
    return this.candles.get(key) || new Map();
  }
  async fetchRange(symbol, granularity, range) {
    try {
      if (Number(range.end) <= Number(range.start)) {
        console.error("Invalid time range:", {
          start: new Date(range.start),
          end: new Date(range.end),
        });
        return new Map();
      }
      const response = await fetch(
        `${this.API_BASE_URL}/api/candles?` +
          new URLSearchParams({
            symbol,
            granularity: granularity ?? "ONE_HOUR",
            start: range.start.toString(),
            end: range.end.toString(),
          })
      );
      console.log("Repository: Fetch response:", response);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return new Map(
        Object.entries(data).map(([timestamp, value]) => [
          Number(timestamp),
          value,
        ])
      );
    } catch (error) {
      console.error("Error fetching candles:", error);
      return new Map();
    }
  }
}

// node_modules/@firebase/util/dist/index.esm2017.js
var stringToByteArray$1 = function (str) {
  const out = [];
  let p3 = 0;
  for (let i5 = 0; i5 < str.length; i5++) {
    let c4 = str.charCodeAt(i5);
    if (c4 < 128) {
      out[p3++] = c4;
    } else if (c4 < 2048) {
      out[p3++] = (c4 >> 6) | 192;
      out[p3++] = (c4 & 63) | 128;
    } else if (
      (c4 & 64512) === 55296 &&
      i5 + 1 < str.length &&
      (str.charCodeAt(i5 + 1) & 64512) === 56320
    ) {
      c4 = 65536 + ((c4 & 1023) << 10) + (str.charCodeAt(++i5) & 1023);
      out[p3++] = (c4 >> 18) | 240;
      out[p3++] = ((c4 >> 12) & 63) | 128;
      out[p3++] = ((c4 >> 6) & 63) | 128;
      out[p3++] = (c4 & 63) | 128;
    } else {
      out[p3++] = (c4 >> 12) | 224;
      out[p3++] = ((c4 >> 6) & 63) | 128;
      out[p3++] = (c4 & 63) | 128;
    }
  }
  return out;
};
var byteArrayToString = function (bytes) {
  const out = [];
  let pos = 0,
    c4 = 0;
  while (pos < bytes.length) {
    const c1 = bytes[pos++];
    if (c1 < 128) {
      out[c4++] = String.fromCharCode(c1);
    } else if (c1 > 191 && c1 < 224) {
      const c22 = bytes[pos++];
      out[c4++] = String.fromCharCode(((c1 & 31) << 6) | (c22 & 63));
    } else if (c1 > 239 && c1 < 365) {
      const c22 = bytes[pos++];
      const c32 = bytes[pos++];
      const c42 = bytes[pos++];
      const u3 =
        (((c1 & 7) << 18) |
          ((c22 & 63) << 12) |
          ((c32 & 63) << 6) |
          (c42 & 63)) -
        65536;
      out[c4++] = String.fromCharCode(55296 + (u3 >> 10));
      out[c4++] = String.fromCharCode(56320 + (u3 & 1023));
    } else {
      const c22 = bytes[pos++];
      const c32 = bytes[pos++];
      out[c4++] = String.fromCharCode(
        ((c1 & 15) << 12) | ((c22 & 63) << 6) | (c32 & 63)
      );
    }
  }
  return out.join("");
};
var base64 = {
  byteToCharMap_: null,
  charToByteMap_: null,
  byteToCharMapWebSafe_: null,
  charToByteMapWebSafe_: null,
  ENCODED_VALS_BASE:
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz" + "0123456789",
  get ENCODED_VALS() {
    return this.ENCODED_VALS_BASE + "+/=";
  },
  get ENCODED_VALS_WEBSAFE() {
    return this.ENCODED_VALS_BASE + "-_.";
  },
  HAS_NATIVE_SUPPORT: typeof atob === "function",
  encodeByteArray(input, webSafe) {
    if (!Array.isArray(input)) {
      throw Error("encodeByteArray takes an array as a parameter");
    }
    this.init_();
    const byteToCharMap = webSafe
      ? this.byteToCharMapWebSafe_
      : this.byteToCharMap_;
    const output = [];
    for (let i5 = 0; i5 < input.length; i5 += 3) {
      const byte1 = input[i5];
      const haveByte2 = i5 + 1 < input.length;
      const byte2 = haveByte2 ? input[i5 + 1] : 0;
      const haveByte3 = i5 + 2 < input.length;
      const byte3 = haveByte3 ? input[i5 + 2] : 0;
      const outByte1 = byte1 >> 2;
      const outByte2 = ((byte1 & 3) << 4) | (byte2 >> 4);
      let outByte3 = ((byte2 & 15) << 2) | (byte3 >> 6);
      let outByte4 = byte3 & 63;
      if (!haveByte3) {
        outByte4 = 64;
        if (!haveByte2) {
          outByte3 = 64;
        }
      }
      output.push(
        byteToCharMap[outByte1],
        byteToCharMap[outByte2],
        byteToCharMap[outByte3],
        byteToCharMap[outByte4]
      );
    }
    return output.join("");
  },
  encodeString(input, webSafe) {
    if (this.HAS_NATIVE_SUPPORT && !webSafe) {
      return btoa(input);
    }
    return this.encodeByteArray(stringToByteArray$1(input), webSafe);
  },
  decodeString(input, webSafe) {
    if (this.HAS_NATIVE_SUPPORT && !webSafe) {
      return atob(input);
    }
    return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
  },
  decodeStringToByteArray(input, webSafe) {
    this.init_();
    const charToByteMap = webSafe
      ? this.charToByteMapWebSafe_
      : this.charToByteMap_;
    const output = [];
    for (let i5 = 0; i5 < input.length; ) {
      const byte1 = charToByteMap[input.charAt(i5++)];
      const haveByte2 = i5 < input.length;
      const byte2 = haveByte2 ? charToByteMap[input.charAt(i5)] : 0;
      ++i5;
      const haveByte3 = i5 < input.length;
      const byte3 = haveByte3 ? charToByteMap[input.charAt(i5)] : 64;
      ++i5;
      const haveByte4 = i5 < input.length;
      const byte4 = haveByte4 ? charToByteMap[input.charAt(i5)] : 64;
      ++i5;
      if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
        throw new DecodeBase64StringError();
      }
      const outByte1 = (byte1 << 2) | (byte2 >> 4);
      output.push(outByte1);
      if (byte3 !== 64) {
        const outByte2 = ((byte2 << 4) & 240) | (byte3 >> 2);
        output.push(outByte2);
        if (byte4 !== 64) {
          const outByte3 = ((byte3 << 6) & 192) | byte4;
          output.push(outByte3);
        }
      }
    }
    return output;
  },
  init_() {
    if (!this.byteToCharMap_) {
      this.byteToCharMap_ = {};
      this.charToByteMap_ = {};
      this.byteToCharMapWebSafe_ = {};
      this.charToByteMapWebSafe_ = {};
      for (let i5 = 0; i5 < this.ENCODED_VALS.length; i5++) {
        this.byteToCharMap_[i5] = this.ENCODED_VALS.charAt(i5);
        this.charToByteMap_[this.byteToCharMap_[i5]] = i5;
        this.byteToCharMapWebSafe_[i5] = this.ENCODED_VALS_WEBSAFE.charAt(i5);
        this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i5]] = i5;
        if (i5 >= this.ENCODED_VALS_BASE.length) {
          this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i5)] = i5;
          this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i5)] = i5;
        }
      }
    }
  },
};

class DecodeBase64StringError extends Error {
  constructor() {
    super(...arguments);
    this.name = "DecodeBase64StringError";
  }
}
var base64Encode = function (str) {
  const utf8Bytes = stringToByteArray$1(str);
  return base64.encodeByteArray(utf8Bytes, true);
};
var base64urlEncodeWithoutPadding = function (str) {
  return base64Encode(str).replace(/\./g, "");
};
var base64Decode = function (str) {
  try {
    return base64.decodeString(str, true);
  } catch (e5) {
    console.error("base64Decode failed: ", e5);
  }
  return null;
};
function getGlobal() {
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw new Error("Unable to locate global object.");
}
var getDefaultsFromGlobal = () => getGlobal().__FIREBASE_DEFAULTS__;
var getDefaultsFromEnvVariable = () => {
  if (typeof process === "undefined" || typeof process.env === "undefined") {
    return;
  }
  const defaultsJsonString = process.env.__FIREBASE_DEFAULTS__;
  if (defaultsJsonString) {
    return JSON.parse(defaultsJsonString);
  }
};
var getDefaultsFromCookie = () => {
  if (typeof document === "undefined") {
    return;
  }
  let match;
  try {
    match = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
  } catch (e5) {
    return;
  }
  const decoded = match && base64Decode(match[1]);
  return decoded && JSON.parse(decoded);
};
var getDefaults = () => {
  try {
    return (
      getDefaultsFromGlobal() ||
      getDefaultsFromEnvVariable() ||
      getDefaultsFromCookie()
    );
  } catch (e5) {
    console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e5}`);
    return;
  }
};
var getDefaultEmulatorHost = (productName) => {
  var _a, _b;
  return (_b =
    (_a = getDefaults()) === null || _a === undefined
      ? undefined
      : _a.emulatorHosts) === null || _b === undefined
    ? undefined
    : _b[productName];
};
var getDefaultEmulatorHostnameAndPort = (productName) => {
  const host = getDefaultEmulatorHost(productName);
  if (!host) {
    return;
  }
  const separatorIndex = host.lastIndexOf(":");
  if (separatorIndex <= 0 || separatorIndex + 1 === host.length) {
    throw new Error(`Invalid host ${host} with no separate hostname and port!`);
  }
  const port = parseInt(host.substring(separatorIndex + 1), 10);
  if (host[0] === "[") {
    return [host.substring(1, separatorIndex - 1), port];
  } else {
    return [host.substring(0, separatorIndex), port];
  }
};
var getDefaultAppConfig = () => {
  var _a;
  return (_a = getDefaults()) === null || _a === undefined
    ? undefined
    : _a.config;
};
class Deferred {
  constructor() {
    this.reject = () => {};
    this.resolve = () => {};
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
  wrapCallback(callback) {
    return (error, value) => {
      if (error) {
        this.reject(error);
      } else {
        this.resolve(value);
      }
      if (typeof callback === "function") {
        this.promise.catch(() => {});
        if (callback.length === 1) {
          callback(error);
        } else {
          callback(error, value);
        }
      }
    };
  }
}
function createMockUserToken(token, projectId) {
  if (token.uid) {
    throw new Error(
      'The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.'
    );
  }
  const header = {
    alg: "none",
    type: "JWT",
  };
  const project = projectId || "demo-project";
  const iat = token.iat || 0;
  const sub = token.sub || token.user_id;
  if (!sub) {
    throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
  }
  const payload = Object.assign(
    {
      iss: `https://securetoken.google.com/${project}`,
      aud: project,
      iat,
      exp: iat + 3600,
      auth_time: iat,
      sub,
      user_id: sub,
      firebase: {
        sign_in_provider: "custom",
        identities: {},
      },
    },
    token
  );
  const signature = "";
  return [
    base64urlEncodeWithoutPadding(JSON.stringify(header)),
    base64urlEncodeWithoutPadding(JSON.stringify(payload)),
    signature,
  ].join(".");
}
function getUA() {
  if (
    typeof navigator !== "undefined" &&
    typeof navigator["userAgent"] === "string"
  ) {
    return navigator["userAgent"];
  } else {
    return "";
  }
}
function isNode() {
  var _a;
  const forceEnvironment =
    (_a = getDefaults()) === null || _a === undefined
      ? undefined
      : _a.forceEnvironment;
  if (forceEnvironment === "node") {
    return true;
  } else if (forceEnvironment === "browser") {
    return false;
  }
  try {
    return (
      Object.prototype.toString.call(global.process) === "[object process]"
    );
  } catch (e5) {
    return false;
  }
}
function isSafari() {
  return (
    !isNode() &&
    !!navigator.userAgent &&
    navigator.userAgent.includes("Safari") &&
    !navigator.userAgent.includes("Chrome")
  );
}
function isIndexedDBAvailable() {
  try {
    return typeof indexedDB === "object";
  } catch (e5) {
    return false;
  }
}
function validateIndexedDBOpenable() {
  return new Promise((resolve, reject) => {
    try {
      let preExist = true;
      const DB_CHECK_NAME =
        "validate-browser-context-for-indexeddb-analytics-module";
      const request = self.indexedDB.open(DB_CHECK_NAME);
      request.onsuccess = () => {
        request.result.close();
        if (!preExist) {
          self.indexedDB.deleteDatabase(DB_CHECK_NAME);
        }
        resolve(true);
      };
      request.onupgradeneeded = () => {
        preExist = false;
      };
      request.onerror = () => {
        var _a;
        reject(
          ((_a = request.error) === null || _a === undefined
            ? undefined
            : _a.message) || ""
        );
      };
    } catch (error) {
      reject(error);
    }
  });
}
var ERROR_NAME = "FirebaseError";

class FirebaseError extends Error {
  constructor(code, message, customData) {
    super(message);
    this.code = code;
    this.customData = customData;
    this.name = ERROR_NAME;
    Object.setPrototypeOf(this, FirebaseError.prototype);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ErrorFactory.prototype.create);
    }
  }
}

class ErrorFactory {
  constructor(service, serviceName, errors) {
    this.service = service;
    this.serviceName = serviceName;
    this.errors = errors;
  }
  create(code, ...data) {
    const customData = data[0] || {};
    const fullCode = `${this.service}/${code}`;
    const template = this.errors[code];
    const message = template ? replaceTemplate(template, customData) : "Error";
    const fullMessage = `${this.serviceName}: ${message} (${fullCode}).`;
    const error = new FirebaseError(fullCode, fullMessage, customData);
    return error;
  }
}
function replaceTemplate(template, data) {
  return template.replace(PATTERN, (_2, key) => {
    const value = data[key];
    return value != null ? String(value) : `<${key}?>`;
  });
}
var PATTERN = /\{\$([^}]+)}/g;
function deepEqual(a3, b3) {
  if (a3 === b3) {
    return true;
  }
  const aKeys = Object.keys(a3);
  const bKeys = Object.keys(b3);
  for (const k2 of aKeys) {
    if (!bKeys.includes(k2)) {
      return false;
    }
    const aProp = a3[k2];
    const bProp = b3[k2];
    if (isObject(aProp) && isObject(bProp)) {
      if (!deepEqual(aProp, bProp)) {
        return false;
      }
    } else if (aProp !== bProp) {
      return false;
    }
  }
  for (const k2 of bKeys) {
    if (!aKeys.includes(k2)) {
      return false;
    }
  }
  return true;
}
function isObject(thing) {
  return thing !== null && typeof thing === "object";
}
var MAX_VALUE_MILLIS = 4 * 60 * 60 * 1000;
function getModularInstance(service) {
  if (service && service._delegate) {
    return service._delegate;
  } else {
    return service;
  }
}

// node_modules/@firebase/component/dist/esm/index.esm2017.js
class Component {
  constructor(name, instanceFactory, type) {
    this.name = name;
    this.instanceFactory = instanceFactory;
    this.type = type;
    this.multipleInstances = false;
    this.serviceProps = {};
    this.instantiationMode = "LAZY";
    this.onInstanceCreated = null;
  }
  setInstantiationMode(mode) {
    this.instantiationMode = mode;
    return this;
  }
  setMultipleInstances(multipleInstances) {
    this.multipleInstances = multipleInstances;
    return this;
  }
  setServiceProps(props) {
    this.serviceProps = props;
    return this;
  }
  setInstanceCreatedCallback(callback) {
    this.onInstanceCreated = callback;
    return this;
  }
}
var DEFAULT_ENTRY_NAME = "[DEFAULT]";

class Provider {
  constructor(name, container) {
    this.name = name;
    this.container = container;
    this.component = null;
    this.instances = new Map();
    this.instancesDeferred = new Map();
    this.instancesOptions = new Map();
    this.onInitCallbacks = new Map();
  }
  get(identifier) {
    const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
    if (!this.instancesDeferred.has(normalizedIdentifier)) {
      const deferred = new Deferred();
      this.instancesDeferred.set(normalizedIdentifier, deferred);
      if (
        this.isInitialized(normalizedIdentifier) ||
        this.shouldAutoInitialize()
      ) {
        try {
          const instance = this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier,
          });
          if (instance) {
            deferred.resolve(instance);
          }
        } catch (e5) {}
      }
    }
    return this.instancesDeferred.get(normalizedIdentifier).promise;
  }
  getImmediate(options) {
    var _a;
    const normalizedIdentifier = this.normalizeInstanceIdentifier(
      options === null || options === undefined ? undefined : options.identifier
    );
    const optional =
      (_a =
        options === null || options === undefined
          ? undefined
          : options.optional) !== null && _a !== undefined
        ? _a
        : false;
    if (
      this.isInitialized(normalizedIdentifier) ||
      this.shouldAutoInitialize()
    ) {
      try {
        return this.getOrInitializeService({
          instanceIdentifier: normalizedIdentifier,
        });
      } catch (e5) {
        if (optional) {
          return null;
        } else {
          throw e5;
        }
      }
    } else {
      if (optional) {
        return null;
      } else {
        throw Error(`Service ${this.name} is not available`);
      }
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(component) {
    if (component.name !== this.name) {
      throw Error(
        `Mismatching Component ${component.name} for Provider ${this.name}.`
      );
    }
    if (this.component) {
      throw Error(`Component for ${this.name} has already been provided`);
    }
    this.component = component;
    if (!this.shouldAutoInitialize()) {
      return;
    }
    if (isComponentEager(component)) {
      try {
        this.getOrInitializeService({ instanceIdentifier: DEFAULT_ENTRY_NAME });
      } catch (e5) {}
    }
    for (const [
      instanceIdentifier,
      instanceDeferred,
    ] of this.instancesDeferred.entries()) {
      const normalizedIdentifier =
        this.normalizeInstanceIdentifier(instanceIdentifier);
      try {
        const instance = this.getOrInitializeService({
          instanceIdentifier: normalizedIdentifier,
        });
        instanceDeferred.resolve(instance);
      } catch (e5) {}
    }
  }
  clearInstance(identifier = DEFAULT_ENTRY_NAME) {
    this.instancesDeferred.delete(identifier);
    this.instancesOptions.delete(identifier);
    this.instances.delete(identifier);
  }
  async delete() {
    const services = Array.from(this.instances.values());
    await Promise.all([
      ...services
        .filter((service) => "INTERNAL" in service)
        .map((service) => service.INTERNAL.delete()),
      ...services
        .filter((service) => "_delete" in service)
        .map((service) => service._delete()),
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(identifier = DEFAULT_ENTRY_NAME) {
    return this.instances.has(identifier);
  }
  getOptions(identifier = DEFAULT_ENTRY_NAME) {
    return this.instancesOptions.get(identifier) || {};
  }
  initialize(opts = {}) {
    const { options = {} } = opts;
    const normalizedIdentifier = this.normalizeInstanceIdentifier(
      opts.instanceIdentifier
    );
    if (this.isInitialized(normalizedIdentifier)) {
      throw Error(
        `${this.name}(${normalizedIdentifier}) has already been initialized`
      );
    }
    if (!this.isComponentSet()) {
      throw Error(`Component ${this.name} has not been registered yet`);
    }
    const instance = this.getOrInitializeService({
      instanceIdentifier: normalizedIdentifier,
      options,
    });
    for (const [
      instanceIdentifier,
      instanceDeferred,
    ] of this.instancesDeferred.entries()) {
      const normalizedDeferredIdentifier =
        this.normalizeInstanceIdentifier(instanceIdentifier);
      if (normalizedIdentifier === normalizedDeferredIdentifier) {
        instanceDeferred.resolve(instance);
      }
    }
    return instance;
  }
  onInit(callback, identifier) {
    var _a;
    const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
    const existingCallbacks =
      (_a = this.onInitCallbacks.get(normalizedIdentifier)) !== null &&
      _a !== undefined
        ? _a
        : new Set();
    existingCallbacks.add(callback);
    this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
    const existingInstance = this.instances.get(normalizedIdentifier);
    if (existingInstance) {
      callback(existingInstance, normalizedIdentifier);
    }
    return () => {
      existingCallbacks.delete(callback);
    };
  }
  invokeOnInitCallbacks(instance, identifier) {
    const callbacks = this.onInitCallbacks.get(identifier);
    if (!callbacks) {
      return;
    }
    for (const callback of callbacks) {
      try {
        callback(instance, identifier);
      } catch (_a) {}
    }
  }
  getOrInitializeService({ instanceIdentifier, options = {} }) {
    let instance = this.instances.get(instanceIdentifier);
    if (!instance && this.component) {
      instance = this.component.instanceFactory(this.container, {
        instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
        options,
      });
      this.instances.set(instanceIdentifier, instance);
      this.instancesOptions.set(instanceIdentifier, options);
      this.invokeOnInitCallbacks(instance, instanceIdentifier);
      if (this.component.onInstanceCreated) {
        try {
          this.component.onInstanceCreated(
            this.container,
            instanceIdentifier,
            instance
          );
        } catch (_a) {}
      }
    }
    return instance || null;
  }
  normalizeInstanceIdentifier(identifier = DEFAULT_ENTRY_NAME) {
    if (this.component) {
      return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
    } else {
      return identifier;
    }
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function normalizeIdentifierForFactory(identifier) {
  return identifier === DEFAULT_ENTRY_NAME ? undefined : identifier;
}
function isComponentEager(component) {
  return component.instantiationMode === "EAGER";
}

class ComponentContainer {
  constructor(name) {
    this.name = name;
    this.providers = new Map();
  }
  addComponent(component) {
    const provider = this.getProvider(component.name);
    if (provider.isComponentSet()) {
      throw new Error(
        `Component ${component.name} has already been registered with ${this.name}`
      );
    }
    provider.setComponent(component);
  }
  addOrOverwriteComponent(component) {
    const provider = this.getProvider(component.name);
    if (provider.isComponentSet()) {
      this.providers.delete(component.name);
    }
    this.addComponent(component);
  }
  getProvider(name) {
    if (this.providers.has(name)) {
      return this.providers.get(name);
    }
    const provider = new Provider(name, this);
    this.providers.set(name, provider);
    return provider;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}

// node_modules/@firebase/logger/dist/esm/index.esm2017.js
var instances = [];
var LogLevel;
(function (LogLevel2) {
  LogLevel2[(LogLevel2["DEBUG"] = 0)] = "DEBUG";
  LogLevel2[(LogLevel2["VERBOSE"] = 1)] = "VERBOSE";
  LogLevel2[(LogLevel2["INFO"] = 2)] = "INFO";
  LogLevel2[(LogLevel2["WARN"] = 3)] = "WARN";
  LogLevel2[(LogLevel2["ERROR"] = 4)] = "ERROR";
  LogLevel2[(LogLevel2["SILENT"] = 5)] = "SILENT";
})(LogLevel || (LogLevel = {}));
var levelStringToEnum = {
  debug: LogLevel.DEBUG,
  verbose: LogLevel.VERBOSE,
  info: LogLevel.INFO,
  warn: LogLevel.WARN,
  error: LogLevel.ERROR,
  silent: LogLevel.SILENT,
};
var defaultLogLevel = LogLevel.INFO;
var ConsoleMethod = {
  [LogLevel.DEBUG]: "log",
  [LogLevel.VERBOSE]: "log",
  [LogLevel.INFO]: "info",
  [LogLevel.WARN]: "warn",
  [LogLevel.ERROR]: "error",
};
var defaultLogHandler = (instance, logType, ...args) => {
  if (logType < instance.logLevel) {
    return;
  }
  const now = new Date().toISOString();
  const method = ConsoleMethod[logType];
  if (method) {
    console[method](`[${now}]  ${instance.name}:`, ...args);
  } else {
    throw new Error(
      `Attempted to log a message with an invalid logType (value: ${logType})`
    );
  }
};

class Logger {
  constructor(name) {
    this.name = name;
    this._logLevel = defaultLogLevel;
    this._logHandler = defaultLogHandler;
    this._userLogHandler = null;
    instances.push(this);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(val) {
    if (!(val in LogLevel)) {
      throw new TypeError(`Invalid value "${val}" assigned to \`logLevel\``);
    }
    this._logLevel = val;
  }
  setLogLevel(val) {
    this._logLevel = typeof val === "string" ? levelStringToEnum[val] : val;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(val) {
    if (typeof val !== "function") {
      throw new TypeError("Value assigned to `logHandler` must be a function");
    }
    this._logHandler = val;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(val) {
    this._userLogHandler = val;
  }
  debug(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.DEBUG, ...args);
    this._logHandler(this, LogLevel.DEBUG, ...args);
  }
  log(...args) {
    this._userLogHandler &&
      this._userLogHandler(this, LogLevel.VERBOSE, ...args);
    this._logHandler(this, LogLevel.VERBOSE, ...args);
  }
  info(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.INFO, ...args);
    this._logHandler(this, LogLevel.INFO, ...args);
  }
  warn(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.WARN, ...args);
    this._logHandler(this, LogLevel.WARN, ...args);
  }
  error(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.ERROR, ...args);
    this._logHandler(this, LogLevel.ERROR, ...args);
  }
}
// node_modules/idb/build/wrap-idb-value.js
var instanceOfAny = (object, constructors) =>
  constructors.some((c4) => object instanceof c4);
var idbProxyableTypes;
var cursorAdvanceMethods;
function getIdbProxyableTypes() {
  return (
    idbProxyableTypes ||
    (idbProxyableTypes = [
      IDBDatabase,
      IDBObjectStore,
      IDBIndex,
      IDBCursor,
      IDBTransaction,
    ])
  );
}
function getCursorAdvanceMethods() {
  return (
    cursorAdvanceMethods ||
    (cursorAdvanceMethods = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
var cursorRequestMap = new WeakMap();
var transactionDoneMap = new WeakMap();
var transactionStoreNamesMap = new WeakMap();
var transformCache = new WeakMap();
var reverseTransformCache = new WeakMap();
function promisifyRequest(request) {
  const promise = new Promise((resolve, reject) => {
    const unlisten = () => {
      request.removeEventListener("success", success);
      request.removeEventListener("error", error);
    };
    const success = () => {
      resolve(wrap(request.result));
      unlisten();
    };
    const error = () => {
      reject(request.error);
      unlisten();
    };
    request.addEventListener("success", success);
    request.addEventListener("error", error);
  });
  promise
    .then((value) => {
      if (value instanceof IDBCursor) {
        cursorRequestMap.set(value, request);
      }
    })
    .catch(() => {});
  reverseTransformCache.set(promise, request);
  return promise;
}
function cacheDonePromiseForTransaction(tx) {
  if (transactionDoneMap.has(tx)) return;
  const done = new Promise((resolve, reject) => {
    const unlisten = () => {
      tx.removeEventListener("complete", complete);
      tx.removeEventListener("error", error);
      tx.removeEventListener("abort", error);
    };
    const complete = () => {
      resolve();
      unlisten();
    };
    const error = () => {
      reject(tx.error || new DOMException("AbortError", "AbortError"));
      unlisten();
    };
    tx.addEventListener("complete", complete);
    tx.addEventListener("error", error);
    tx.addEventListener("abort", error);
  });
  transactionDoneMap.set(tx, done);
}
var idbProxyTraps = {
  get(target, prop, receiver) {
    if (target instanceof IDBTransaction) {
      if (prop === "done") return transactionDoneMap.get(target);
      if (prop === "objectStoreNames") {
        return target.objectStoreNames || transactionStoreNamesMap.get(target);
      }
      if (prop === "store") {
        return receiver.objectStoreNames[1]
          ? undefined
          : receiver.objectStore(receiver.objectStoreNames[0]);
      }
    }
    return wrap(target[prop]);
  },
  set(target, prop, value) {
    target[prop] = value;
    return true;
  },
  has(target, prop) {
    if (
      target instanceof IDBTransaction &&
      (prop === "done" || prop === "store")
    ) {
      return true;
    }
    return prop in target;
  },
};
function replaceTraps(callback) {
  idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
  if (
    func === IDBDatabase.prototype.transaction &&
    !("objectStoreNames" in IDBTransaction.prototype)
  ) {
    return function (storeNames, ...args) {
      const tx = func.call(unwrap(this), storeNames, ...args);
      transactionStoreNamesMap.set(
        tx,
        storeNames.sort ? storeNames.sort() : [storeNames]
      );
      return wrap(tx);
    };
  }
  if (getCursorAdvanceMethods().includes(func)) {
    return function (...args) {
      func.apply(unwrap(this), args);
      return wrap(cursorRequestMap.get(this));
    };
  }
  return function (...args) {
    return wrap(func.apply(unwrap(this), args));
  };
}
function transformCachableValue(value) {
  if (typeof value === "function") return wrapFunction(value);
  if (value instanceof IDBTransaction) cacheDonePromiseForTransaction(value);
  if (instanceOfAny(value, getIdbProxyableTypes()))
    return new Proxy(value, idbProxyTraps);
  return value;
}
function wrap(value) {
  if (value instanceof IDBRequest) return promisifyRequest(value);
  if (transformCache.has(value)) return transformCache.get(value);
  const newValue = transformCachableValue(value);
  if (newValue !== value) {
    transformCache.set(value, newValue);
    reverseTransformCache.set(newValue, value);
  }
  return newValue;
}
var unwrap = (value) => reverseTransformCache.get(value);

// node_modules/idb/build/index.js
function openDB(
  name,
  version,
  { blocked, upgrade, blocking, terminated } = {}
) {
  const request = indexedDB.open(name, version);
  const openPromise = wrap(request);
  if (upgrade) {
    request.addEventListener("upgradeneeded", (event) => {
      upgrade(
        wrap(request.result),
        event.oldVersion,
        event.newVersion,
        wrap(request.transaction),
        event
      );
    });
  }
  if (blocked) {
    request.addEventListener("blocked", (event) =>
      blocked(event.oldVersion, event.newVersion, event)
    );
  }
  openPromise
    .then((db) => {
      if (terminated) db.addEventListener("close", () => terminated());
      if (blocking) {
        db.addEventListener("versionchange", (event) =>
          blocking(event.oldVersion, event.newVersion, event)
        );
      }
    })
    .catch(() => {});
  return openPromise;
}
var readMethods = ["get", "getKey", "getAll", "getAllKeys", "count"];
var writeMethods = ["put", "add", "delete", "clear"];
var cachedMethods = new Map();
function getMethod(target, prop) {
  if (
    !(
      target instanceof IDBDatabase &&
      !(prop in target) &&
      typeof prop === "string"
    )
  ) {
    return;
  }
  if (cachedMethods.get(prop)) return cachedMethods.get(prop);
  const targetFuncName = prop.replace(/FromIndex$/, "");
  const useIndex = prop !== targetFuncName;
  const isWrite = writeMethods.includes(targetFuncName);
  if (
    !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) ||
    !(isWrite || readMethods.includes(targetFuncName))
  ) {
    return;
  }
  const method = async function (storeName, ...args) {
    const tx = this.transaction(storeName, isWrite ? "readwrite" : "readonly");
    let target2 = tx.store;
    if (useIndex) target2 = target2.index(args.shift());
    return (
      await Promise.all([target2[targetFuncName](...args), isWrite && tx.done])
    )[0];
  };
  cachedMethods.set(prop, method);
  return method;
}
replaceTraps((oldTraps) => ({
  ...oldTraps,
  get: (target, prop, receiver) =>
    getMethod(target, prop) || oldTraps.get(target, prop, receiver),
  has: (target, prop) =>
    !!getMethod(target, prop) || oldTraps.has(target, prop),
}));

// node_modules/@firebase/app/dist/esm/index.esm2017.js
class PlatformLoggerServiceImpl {
  constructor(container) {
    this.container = container;
  }
  getPlatformInfoString() {
    const providers = this.container.getProviders();
    return providers
      .map((provider) => {
        if (isVersionServiceProvider(provider)) {
          const service = provider.getImmediate();
          return `${service.library}/${service.version}`;
        } else {
          return null;
        }
      })
      .filter((logString) => logString)
      .join(" ");
  }
}
function isVersionServiceProvider(provider) {
  const component = provider.getComponent();
  return (
    (component === null || component === undefined
      ? undefined
      : component.type) === "VERSION"
  );
}
var name$q = "@firebase/app";
var version$1 = "0.10.15";
var logger = new Logger("@firebase/app");
var name$p = "@firebase/app-compat";
var name$o = "@firebase/analytics-compat";
var name$n = "@firebase/analytics";
var name$m = "@firebase/app-check-compat";
var name$l = "@firebase/app-check";
var name$k = "@firebase/auth";
var name$j = "@firebase/auth-compat";
var name$i = "@firebase/database";
var name$h = "@firebase/data-connect";
var name$g = "@firebase/database-compat";
var name$f = "@firebase/functions";
var name$e = "@firebase/functions-compat";
var name$d = "@firebase/installations";
var name$c = "@firebase/installations-compat";
var name$b = "@firebase/messaging";
var name$a = "@firebase/messaging-compat";
var name$9 = "@firebase/performance";
var name$8 = "@firebase/performance-compat";
var name$7 = "@firebase/remote-config";
var name$6 = "@firebase/remote-config-compat";
var name$5 = "@firebase/storage";
var name$4 = "@firebase/storage-compat";
var name$3 = "@firebase/firestore";
var name$2 = "@firebase/vertexai";
var name$1 = "@firebase/firestore-compat";
var name = "firebase";
var version = "11.0.1";
var DEFAULT_ENTRY_NAME2 = "[DEFAULT]";
var PLATFORM_LOG_STRING = {
  [name$q]: "fire-core",
  [name$p]: "fire-core-compat",
  [name$n]: "fire-analytics",
  [name$o]: "fire-analytics-compat",
  [name$l]: "fire-app-check",
  [name$m]: "fire-app-check-compat",
  [name$k]: "fire-auth",
  [name$j]: "fire-auth-compat",
  [name$i]: "fire-rtdb",
  [name$h]: "fire-data-connect",
  [name$g]: "fire-rtdb-compat",
  [name$f]: "fire-fn",
  [name$e]: "fire-fn-compat",
  [name$d]: "fire-iid",
  [name$c]: "fire-iid-compat",
  [name$b]: "fire-fcm",
  [name$a]: "fire-fcm-compat",
  [name$9]: "fire-perf",
  [name$8]: "fire-perf-compat",
  [name$7]: "fire-rc",
  [name$6]: "fire-rc-compat",
  [name$5]: "fire-gcs",
  [name$4]: "fire-gcs-compat",
  [name$3]: "fire-fst",
  [name$1]: "fire-fst-compat",
  [name$2]: "fire-vertex",
  "fire-js": "fire-js",
  [name]: "fire-js-all",
};
var _apps = new Map();
var _serverApps = new Map();
var _components = new Map();
function _addComponent(app, component) {
  try {
    app.container.addComponent(component);
  } catch (e5) {
    logger.debug(
      `Component ${component.name} failed to register with FirebaseApp ${app.name}`,
      e5
    );
  }
}
function _registerComponent(component) {
  const componentName = component.name;
  if (_components.has(componentName)) {
    logger.debug(
      `There were multiple attempts to register component ${componentName}.`
    );
    return false;
  }
  _components.set(componentName, component);
  for (const app of _apps.values()) {
    _addComponent(app, component);
  }
  for (const serverApp of _serverApps.values()) {
    _addComponent(serverApp, component);
  }
  return true;
}
function _getProvider(app, name2) {
  const heartbeatController = app.container
    .getProvider("heartbeat")
    .getImmediate({ optional: true });
  if (heartbeatController) {
    heartbeatController.triggerHeartbeat();
  }
  return app.container.getProvider(name2);
}
var ERRORS = {
  ["no-app"]:
    "No Firebase App '{$appName}' has been created - " +
    "call initializeApp() first",
  ["bad-app-name"]: "Illegal App name: '{$appName}'",
  ["duplicate-app"]:
    "Firebase App named '{$appName}' already exists with different options or config",
  ["app-deleted"]: "Firebase App named '{$appName}' already deleted",
  ["server-app-deleted"]: "Firebase Server App has been deleted",
  ["no-options"]:
    "Need to provide options, when not being deployed to hosting via source.",
  ["invalid-app-argument"]:
    "firebase.{$appName}() takes either no argument or a " +
    "Firebase App instance.",
  ["invalid-log-argument"]:
    "First argument to `onLog` must be null or a function.",
  ["idb-open"]:
    "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
  ["idb-get"]:
    "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
  ["idb-set"]:
    "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
  ["idb-delete"]:
    "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
  ["finalization-registry-not-supported"]:
    "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
  ["invalid-server-app-environment"]:
    "FirebaseServerApp is not for use in browser environments.",
};
var ERROR_FACTORY = new ErrorFactory("app", "Firebase", ERRORS);

class FirebaseAppImpl {
  constructor(options, config, container) {
    this._isDeleted = false;
    this._options = Object.assign({}, options);
    this._config = Object.assign({}, config);
    this._name = config.name;
    this._automaticDataCollectionEnabled =
      config.automaticDataCollectionEnabled;
    this._container = container;
    this.container.addComponent(new Component("app", () => this, "PUBLIC"));
  }
  get automaticDataCollectionEnabled() {
    this.checkDestroyed();
    return this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(val) {
    this.checkDestroyed();
    this._automaticDataCollectionEnabled = val;
  }
  get name() {
    this.checkDestroyed();
    return this._name;
  }
  get options() {
    this.checkDestroyed();
    return this._options;
  }
  get config() {
    this.checkDestroyed();
    return this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(val) {
    this._isDeleted = val;
  }
  checkDestroyed() {
    if (this.isDeleted) {
      throw ERROR_FACTORY.create("app-deleted", { appName: this._name });
    }
  }
}
var SDK_VERSION = version;
function initializeApp(_options, rawConfig = {}) {
  let options = _options;
  if (typeof rawConfig !== "object") {
    const name3 = rawConfig;
    rawConfig = { name: name3 };
  }
  const config = Object.assign(
    { name: DEFAULT_ENTRY_NAME2, automaticDataCollectionEnabled: false },
    rawConfig
  );
  const name2 = config.name;
  if (typeof name2 !== "string" || !name2) {
    throw ERROR_FACTORY.create("bad-app-name", {
      appName: String(name2),
    });
  }
  options || (options = getDefaultAppConfig());
  if (!options) {
    throw ERROR_FACTORY.create("no-options");
  }
  const existingApp = _apps.get(name2);
  if (existingApp) {
    if (
      deepEqual(options, existingApp.options) &&
      deepEqual(config, existingApp.config)
    ) {
      return existingApp;
    } else {
      throw ERROR_FACTORY.create("duplicate-app", { appName: name2 });
    }
  }
  const container = new ComponentContainer(name2);
  for (const component of _components.values()) {
    container.addComponent(component);
  }
  const newApp = new FirebaseAppImpl(options, config, container);
  _apps.set(name2, newApp);
  return newApp;
}
function getApp(name2 = DEFAULT_ENTRY_NAME2) {
  const app = _apps.get(name2);
  if (!app && name2 === DEFAULT_ENTRY_NAME2 && getDefaultAppConfig()) {
    return initializeApp();
  }
  if (!app) {
    throw ERROR_FACTORY.create("no-app", { appName: name2 });
  }
  return app;
}
function registerVersion(libraryKeyOrName, version2, variant) {
  var _a;
  let library =
    (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== undefined
      ? _a
      : libraryKeyOrName;
  if (variant) {
    library += `-${variant}`;
  }
  const libraryMismatch = library.match(/\s|\//);
  const versionMismatch = version2.match(/\s|\//);
  if (libraryMismatch || versionMismatch) {
    const warning = [
      `Unable to register library "${library}" with version "${version2}":`,
    ];
    if (libraryMismatch) {
      warning.push(
        `library name "${library}" contains illegal characters (whitespace or "/")`
      );
    }
    if (libraryMismatch && versionMismatch) {
      warning.push("and");
    }
    if (versionMismatch) {
      warning.push(
        `version name "${version2}" contains illegal characters (whitespace or "/")`
      );
    }
    logger.warn(warning.join(" "));
    return;
  }
  _registerComponent(
    new Component(
      `${library}-version`,
      () => ({ library, version: version2 }),
      "VERSION"
    )
  );
}
var DB_NAME = "firebase-heartbeat-database";
var DB_VERSION = 1;
var STORE_NAME = "firebase-heartbeat-store";
var dbPromise = null;
function getDbPromise() {
  if (!dbPromise) {
    dbPromise = openDB(DB_NAME, DB_VERSION, {
      upgrade: (db, oldVersion) => {
        switch (oldVersion) {
          case 0:
            try {
              db.createObjectStore(STORE_NAME);
            } catch (e5) {
              console.warn(e5);
            }
        }
      },
    }).catch((e5) => {
      throw ERROR_FACTORY.create("idb-open", {
        originalErrorMessage: e5.message,
      });
    });
  }
  return dbPromise;
}
async function readHeartbeatsFromIndexedDB(app) {
  try {
    const db = await getDbPromise();
    const tx = db.transaction(STORE_NAME);
    const result = await tx.objectStore(STORE_NAME).get(computeKey(app));
    await tx.done;
    return result;
  } catch (e5) {
    if (e5 instanceof FirebaseError) {
      logger.warn(e5.message);
    } else {
      const idbGetError = ERROR_FACTORY.create("idb-get", {
        originalErrorMessage:
          e5 === null || e5 === undefined ? undefined : e5.message,
      });
      logger.warn(idbGetError.message);
    }
  }
}
async function writeHeartbeatsToIndexedDB(app, heartbeatObject) {
  try {
    const db = await getDbPromise();
    const tx = db.transaction(STORE_NAME, "readwrite");
    const objectStore = tx.objectStore(STORE_NAME);
    await objectStore.put(heartbeatObject, computeKey(app));
    await tx.done;
  } catch (e5) {
    if (e5 instanceof FirebaseError) {
      logger.warn(e5.message);
    } else {
      const idbGetError = ERROR_FACTORY.create("idb-set", {
        originalErrorMessage:
          e5 === null || e5 === undefined ? undefined : e5.message,
      });
      logger.warn(idbGetError.message);
    }
  }
}
function computeKey(app) {
  return `${app.name}!${app.options.appId}`;
}
var MAX_HEADER_BYTES = 1024;
var STORED_HEARTBEAT_RETENTION_MAX_MILLIS = 30 * 24 * 60 * 60 * 1000;

class HeartbeatServiceImpl {
  constructor(container) {
    this.container = container;
    this._heartbeatsCache = null;
    const app = this.container.getProvider("app").getImmediate();
    this._storage = new HeartbeatStorageImpl(app);
    this._heartbeatsCachePromise = this._storage.read().then((result) => {
      this._heartbeatsCache = result;
      return result;
    });
  }
  async triggerHeartbeat() {
    var _a, _b;
    try {
      const platformLogger = this.container
        .getProvider("platform-logger")
        .getImmediate();
      const agent = platformLogger.getPlatformInfoString();
      const date = getUTCDateString();
      if (
        ((_a = this._heartbeatsCache) === null || _a === undefined
          ? undefined
          : _a.heartbeats) == null
      ) {
        this._heartbeatsCache = await this._heartbeatsCachePromise;
        if (
          ((_b = this._heartbeatsCache) === null || _b === undefined
            ? undefined
            : _b.heartbeats) == null
        ) {
          return;
        }
      }
      if (
        this._heartbeatsCache.lastSentHeartbeatDate === date ||
        this._heartbeatsCache.heartbeats.some(
          (singleDateHeartbeat) => singleDateHeartbeat.date === date
        )
      ) {
        return;
      } else {
        this._heartbeatsCache.heartbeats.push({ date, agent });
      }
      this._heartbeatsCache.heartbeats =
        this._heartbeatsCache.heartbeats.filter((singleDateHeartbeat) => {
          const hbTimestamp = new Date(singleDateHeartbeat.date).valueOf();
          const now = Date.now();
          return now - hbTimestamp <= STORED_HEARTBEAT_RETENTION_MAX_MILLIS;
        });
      return this._storage.overwrite(this._heartbeatsCache);
    } catch (e5) {
      logger.warn(e5);
    }
  }
  async getHeartbeatsHeader() {
    var _a;
    try {
      if (this._heartbeatsCache === null) {
        await this._heartbeatsCachePromise;
      }
      if (
        ((_a = this._heartbeatsCache) === null || _a === undefined
          ? undefined
          : _a.heartbeats) == null ||
        this._heartbeatsCache.heartbeats.length === 0
      ) {
        return "";
      }
      const date = getUTCDateString();
      const { heartbeatsToSend, unsentEntries } = extractHeartbeatsForHeader(
        this._heartbeatsCache.heartbeats
      );
      const headerString = base64urlEncodeWithoutPadding(
        JSON.stringify({ version: 2, heartbeats: heartbeatsToSend })
      );
      this._heartbeatsCache.lastSentHeartbeatDate = date;
      if (unsentEntries.length > 0) {
        this._heartbeatsCache.heartbeats = unsentEntries;
        await this._storage.overwrite(this._heartbeatsCache);
      } else {
        this._heartbeatsCache.heartbeats = [];
        this._storage.overwrite(this._heartbeatsCache);
      }
      return headerString;
    } catch (e5) {
      logger.warn(e5);
      return "";
    }
  }
}
function getUTCDateString() {
  const today = new Date();
  return today.toISOString().substring(0, 10);
}
function extractHeartbeatsForHeader(
  heartbeatsCache,
  maxSize = MAX_HEADER_BYTES
) {
  const heartbeatsToSend = [];
  let unsentEntries = heartbeatsCache.slice();
  for (const singleDateHeartbeat of heartbeatsCache) {
    const heartbeatEntry = heartbeatsToSend.find(
      (hb) => hb.agent === singleDateHeartbeat.agent
    );
    if (!heartbeatEntry) {
      heartbeatsToSend.push({
        agent: singleDateHeartbeat.agent,
        dates: [singleDateHeartbeat.date],
      });
      if (countBytes(heartbeatsToSend) > maxSize) {
        heartbeatsToSend.pop();
        break;
      }
    } else {
      heartbeatEntry.dates.push(singleDateHeartbeat.date);
      if (countBytes(heartbeatsToSend) > maxSize) {
        heartbeatEntry.dates.pop();
        break;
      }
    }
    unsentEntries = unsentEntries.slice(1);
  }
  return {
    heartbeatsToSend,
    unsentEntries,
  };
}

class HeartbeatStorageImpl {
  constructor(app) {
    this.app = app;
    this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
  }
  async runIndexedDBEnvironmentCheck() {
    if (!isIndexedDBAvailable()) {
      return false;
    } else {
      return validateIndexedDBOpenable()
        .then(() => true)
        .catch(() => false);
    }
  }
  async read() {
    const canUseIndexedDB = await this._canUseIndexedDBPromise;
    if (!canUseIndexedDB) {
      return { heartbeats: [] };
    } else {
      const idbHeartbeatObject = await readHeartbeatsFromIndexedDB(this.app);
      if (
        idbHeartbeatObject === null || idbHeartbeatObject === undefined
          ? undefined
          : idbHeartbeatObject.heartbeats
      ) {
        return idbHeartbeatObject;
      } else {
        return { heartbeats: [] };
      }
    }
  }
  async overwrite(heartbeatsObject) {
    var _a;
    const canUseIndexedDB = await this._canUseIndexedDBPromise;
    if (!canUseIndexedDB) {
      return;
    } else {
      const existingHeartbeatsObject = await this.read();
      return writeHeartbeatsToIndexedDB(this.app, {
        lastSentHeartbeatDate:
          (_a = heartbeatsObject.lastSentHeartbeatDate) !== null &&
          _a !== undefined
            ? _a
            : existingHeartbeatsObject.lastSentHeartbeatDate,
        heartbeats: heartbeatsObject.heartbeats,
      });
    }
  }
  async add(heartbeatsObject) {
    var _a;
    const canUseIndexedDB = await this._canUseIndexedDBPromise;
    if (!canUseIndexedDB) {
      return;
    } else {
      const existingHeartbeatsObject = await this.read();
      return writeHeartbeatsToIndexedDB(this.app, {
        lastSentHeartbeatDate:
          (_a = heartbeatsObject.lastSentHeartbeatDate) !== null &&
          _a !== undefined
            ? _a
            : existingHeartbeatsObject.lastSentHeartbeatDate,
        heartbeats: [
          ...existingHeartbeatsObject.heartbeats,
          ...heartbeatsObject.heartbeats,
        ],
      });
    }
  }
}
function countBytes(heartbeatsCache) {
  return base64urlEncodeWithoutPadding(
    JSON.stringify({ version: 2, heartbeats: heartbeatsCache })
  ).length;
}
function registerCoreComponents(variant) {
  _registerComponent(
    new Component(
      "platform-logger",
      (container) => new PlatformLoggerServiceImpl(container),
      "PRIVATE"
    )
  );
  _registerComponent(
    new Component(
      "heartbeat",
      (container) => new HeartbeatServiceImpl(container),
      "PRIVATE"
    )
  );
  registerVersion(name$q, version$1, variant);
  registerVersion(name$q, version$1, "esm2017");
  registerVersion("fire-js", "");
}
registerCoreComponents("");

// node_modules/@firebase/webchannel-wrapper/dist/bloom-blob/esm/bloom_blob_es2018.js
var commonjsGlobal =
  typeof globalThis !== "undefined"
    ? globalThis
    : typeof window !== "undefined"
    ? window
    : typeof global !== "undefined"
    ? global
    : typeof self !== "undefined"
    ? self
    : {};
var bloom_blob_es2018 = {};
var Integer;
var Md5;
(function () {
  var h3;
  function k2(f3, a3) {
    function c4() {}
    c4.prototype = a3.prototype;
    f3.D = a3.prototype;
    f3.prototype = new c4();
    f3.prototype.constructor = f3;
    f3.C = function (d3, e5, g2) {
      for (
        var b3 = Array(arguments.length - 2), r7 = 2;
        r7 < arguments.length;
        r7++
      )
        b3[r7 - 2] = arguments[r7];
      return a3.prototype[e5].apply(d3, b3);
    };
  }
  function l3() {
    this.blockSize = -1;
  }
  function m2() {
    this.blockSize = -1;
    this.blockSize = 64;
    this.g = Array(4);
    this.B = Array(this.blockSize);
    this.o = this.h = 0;
    this.s();
  }
  k2(m2, l3);
  m2.prototype.s = function () {
    this.g[0] = 1732584193;
    this.g[1] = 4023233417;
    this.g[2] = 2562383102;
    this.g[3] = 271733878;
    this.o = this.h = 0;
  };
  function n5(f3, a3, c4) {
    c4 || (c4 = 0);
    var d3 = Array(16);
    if (typeof a3 === "string")
      for (var e5 = 0; 16 > e5; ++e5)
        d3[e5] =
          a3.charCodeAt(c4++) |
          (a3.charCodeAt(c4++) << 8) |
          (a3.charCodeAt(c4++) << 16) |
          (a3.charCodeAt(c4++) << 24);
    else
      for (e5 = 0; 16 > e5; ++e5)
        d3[e5] =
          a3[c4++] | (a3[c4++] << 8) | (a3[c4++] << 16) | (a3[c4++] << 24);
    a3 = f3.g[0];
    c4 = f3.g[1];
    e5 = f3.g[2];
    var g2 = f3.g[3];
    var b3 = (a3 + (g2 ^ (c4 & (e5 ^ g2))) + d3[0] + 3614090360) & 4294967295;
    a3 = c4 + (((b3 << 7) & 4294967295) | (b3 >>> 25));
    b3 = (g2 + (e5 ^ (a3 & (c4 ^ e5))) + d3[1] + 3905402710) & 4294967295;
    g2 = a3 + (((b3 << 12) & 4294967295) | (b3 >>> 20));
    b3 = (e5 + (c4 ^ (g2 & (a3 ^ c4))) + d3[2] + 606105819) & 4294967295;
    e5 = g2 + (((b3 << 17) & 4294967295) | (b3 >>> 15));
    b3 = (c4 + (a3 ^ (e5 & (g2 ^ a3))) + d3[3] + 3250441966) & 4294967295;
    c4 = e5 + (((b3 << 22) & 4294967295) | (b3 >>> 10));
    b3 = (a3 + (g2 ^ (c4 & (e5 ^ g2))) + d3[4] + 4118548399) & 4294967295;
    a3 = c4 + (((b3 << 7) & 4294967295) | (b3 >>> 25));
    b3 = (g2 + (e5 ^ (a3 & (c4 ^ e5))) + d3[5] + 1200080426) & 4294967295;
    g2 = a3 + (((b3 << 12) & 4294967295) | (b3 >>> 20));
    b3 = (e5 + (c4 ^ (g2 & (a3 ^ c4))) + d3[6] + 2821735955) & 4294967295;
    e5 = g2 + (((b3 << 17) & 4294967295) | (b3 >>> 15));
    b3 = (c4 + (a3 ^ (e5 & (g2 ^ a3))) + d3[7] + 4249261313) & 4294967295;
    c4 = e5 + (((b3 << 22) & 4294967295) | (b3 >>> 10));
    b3 = (a3 + (g2 ^ (c4 & (e5 ^ g2))) + d3[8] + 1770035416) & 4294967295;
    a3 = c4 + (((b3 << 7) & 4294967295) | (b3 >>> 25));
    b3 = (g2 + (e5 ^ (a3 & (c4 ^ e5))) + d3[9] + 2336552879) & 4294967295;
    g2 = a3 + (((b3 << 12) & 4294967295) | (b3 >>> 20));
    b3 = (e5 + (c4 ^ (g2 & (a3 ^ c4))) + d3[10] + 4294925233) & 4294967295;
    e5 = g2 + (((b3 << 17) & 4294967295) | (b3 >>> 15));
    b3 = (c4 + (a3 ^ (e5 & (g2 ^ a3))) + d3[11] + 2304563134) & 4294967295;
    c4 = e5 + (((b3 << 22) & 4294967295) | (b3 >>> 10));
    b3 = (a3 + (g2 ^ (c4 & (e5 ^ g2))) + d3[12] + 1804603682) & 4294967295;
    a3 = c4 + (((b3 << 7) & 4294967295) | (b3 >>> 25));
    b3 = (g2 + (e5 ^ (a3 & (c4 ^ e5))) + d3[13] + 4254626195) & 4294967295;
    g2 = a3 + (((b3 << 12) & 4294967295) | (b3 >>> 20));
    b3 = (e5 + (c4 ^ (g2 & (a3 ^ c4))) + d3[14] + 2792965006) & 4294967295;
    e5 = g2 + (((b3 << 17) & 4294967295) | (b3 >>> 15));
    b3 = (c4 + (a3 ^ (e5 & (g2 ^ a3))) + d3[15] + 1236535329) & 4294967295;
    c4 = e5 + (((b3 << 22) & 4294967295) | (b3 >>> 10));
    b3 = (a3 + (e5 ^ (g2 & (c4 ^ e5))) + d3[1] + 4129170786) & 4294967295;
    a3 = c4 + (((b3 << 5) & 4294967295) | (b3 >>> 27));
    b3 = (g2 + (c4 ^ (e5 & (a3 ^ c4))) + d3[6] + 3225465664) & 4294967295;
    g2 = a3 + (((b3 << 9) & 4294967295) | (b3 >>> 23));
    b3 = (e5 + (a3 ^ (c4 & (g2 ^ a3))) + d3[11] + 643717713) & 4294967295;
    e5 = g2 + (((b3 << 14) & 4294967295) | (b3 >>> 18));
    b3 = (c4 + (g2 ^ (a3 & (e5 ^ g2))) + d3[0] + 3921069994) & 4294967295;
    c4 = e5 + (((b3 << 20) & 4294967295) | (b3 >>> 12));
    b3 = (a3 + (e5 ^ (g2 & (c4 ^ e5))) + d3[5] + 3593408605) & 4294967295;
    a3 = c4 + (((b3 << 5) & 4294967295) | (b3 >>> 27));
    b3 = (g2 + (c4 ^ (e5 & (a3 ^ c4))) + d3[10] + 38016083) & 4294967295;
    g2 = a3 + (((b3 << 9) & 4294967295) | (b3 >>> 23));
    b3 = (e5 + (a3 ^ (c4 & (g2 ^ a3))) + d3[15] + 3634488961) & 4294967295;
    e5 = g2 + (((b3 << 14) & 4294967295) | (b3 >>> 18));
    b3 = (c4 + (g2 ^ (a3 & (e5 ^ g2))) + d3[4] + 3889429448) & 4294967295;
    c4 = e5 + (((b3 << 20) & 4294967295) | (b3 >>> 12));
    b3 = (a3 + (e5 ^ (g2 & (c4 ^ e5))) + d3[9] + 568446438) & 4294967295;
    a3 = c4 + (((b3 << 5) & 4294967295) | (b3 >>> 27));
    b3 = (g2 + (c4 ^ (e5 & (a3 ^ c4))) + d3[14] + 3275163606) & 4294967295;
    g2 = a3 + (((b3 << 9) & 4294967295) | (b3 >>> 23));
    b3 = (e5 + (a3 ^ (c4 & (g2 ^ a3))) + d3[3] + 4107603335) & 4294967295;
    e5 = g2 + (((b3 << 14) & 4294967295) | (b3 >>> 18));
    b3 = (c4 + (g2 ^ (a3 & (e5 ^ g2))) + d3[8] + 1163531501) & 4294967295;
    c4 = e5 + (((b3 << 20) & 4294967295) | (b3 >>> 12));
    b3 = (a3 + (e5 ^ (g2 & (c4 ^ e5))) + d3[13] + 2850285829) & 4294967295;
    a3 = c4 + (((b3 << 5) & 4294967295) | (b3 >>> 27));
    b3 = (g2 + (c4 ^ (e5 & (a3 ^ c4))) + d3[2] + 4243563512) & 4294967295;
    g2 = a3 + (((b3 << 9) & 4294967295) | (b3 >>> 23));
    b3 = (e5 + (a3 ^ (c4 & (g2 ^ a3))) + d3[7] + 1735328473) & 4294967295;
    e5 = g2 + (((b3 << 14) & 4294967295) | (b3 >>> 18));
    b3 = (c4 + (g2 ^ (a3 & (e5 ^ g2))) + d3[12] + 2368359562) & 4294967295;
    c4 = e5 + (((b3 << 20) & 4294967295) | (b3 >>> 12));
    b3 = (a3 + (c4 ^ e5 ^ g2) + d3[5] + 4294588738) & 4294967295;
    a3 = c4 + (((b3 << 4) & 4294967295) | (b3 >>> 28));
    b3 = (g2 + (a3 ^ c4 ^ e5) + d3[8] + 2272392833) & 4294967295;
    g2 = a3 + (((b3 << 11) & 4294967295) | (b3 >>> 21));
    b3 = (e5 + (g2 ^ a3 ^ c4) + d3[11] + 1839030562) & 4294967295;
    e5 = g2 + (((b3 << 16) & 4294967295) | (b3 >>> 16));
    b3 = (c4 + (e5 ^ g2 ^ a3) + d3[14] + 4259657740) & 4294967295;
    c4 = e5 + (((b3 << 23) & 4294967295) | (b3 >>> 9));
    b3 = (a3 + (c4 ^ e5 ^ g2) + d3[1] + 2763975236) & 4294967295;
    a3 = c4 + (((b3 << 4) & 4294967295) | (b3 >>> 28));
    b3 = (g2 + (a3 ^ c4 ^ e5) + d3[4] + 1272893353) & 4294967295;
    g2 = a3 + (((b3 << 11) & 4294967295) | (b3 >>> 21));
    b3 = (e5 + (g2 ^ a3 ^ c4) + d3[7] + 4139469664) & 4294967295;
    e5 = g2 + (((b3 << 16) & 4294967295) | (b3 >>> 16));
    b3 = (c4 + (e5 ^ g2 ^ a3) + d3[10] + 3200236656) & 4294967295;
    c4 = e5 + (((b3 << 23) & 4294967295) | (b3 >>> 9));
    b3 = (a3 + (c4 ^ e5 ^ g2) + d3[13] + 681279174) & 4294967295;
    a3 = c4 + (((b3 << 4) & 4294967295) | (b3 >>> 28));
    b3 = (g2 + (a3 ^ c4 ^ e5) + d3[0] + 3936430074) & 4294967295;
    g2 = a3 + (((b3 << 11) & 4294967295) | (b3 >>> 21));
    b3 = (e5 + (g2 ^ a3 ^ c4) + d3[3] + 3572445317) & 4294967295;
    e5 = g2 + (((b3 << 16) & 4294967295) | (b3 >>> 16));
    b3 = (c4 + (e5 ^ g2 ^ a3) + d3[6] + 76029189) & 4294967295;
    c4 = e5 + (((b3 << 23) & 4294967295) | (b3 >>> 9));
    b3 = (a3 + (c4 ^ e5 ^ g2) + d3[9] + 3654602809) & 4294967295;
    a3 = c4 + (((b3 << 4) & 4294967295) | (b3 >>> 28));
    b3 = (g2 + (a3 ^ c4 ^ e5) + d3[12] + 3873151461) & 4294967295;
    g2 = a3 + (((b3 << 11) & 4294967295) | (b3 >>> 21));
    b3 = (e5 + (g2 ^ a3 ^ c4) + d3[15] + 530742520) & 4294967295;
    e5 = g2 + (((b3 << 16) & 4294967295) | (b3 >>> 16));
    b3 = (c4 + (e5 ^ g2 ^ a3) + d3[2] + 3299628645) & 4294967295;
    c4 = e5 + (((b3 << 23) & 4294967295) | (b3 >>> 9));
    b3 = (a3 + (e5 ^ (c4 | ~g2)) + d3[0] + 4096336452) & 4294967295;
    a3 = c4 + (((b3 << 6) & 4294967295) | (b3 >>> 26));
    b3 = (g2 + (c4 ^ (a3 | ~e5)) + d3[7] + 1126891415) & 4294967295;
    g2 = a3 + (((b3 << 10) & 4294967295) | (b3 >>> 22));
    b3 = (e5 + (a3 ^ (g2 | ~c4)) + d3[14] + 2878612391) & 4294967295;
    e5 = g2 + (((b3 << 15) & 4294967295) | (b3 >>> 17));
    b3 = (c4 + (g2 ^ (e5 | ~a3)) + d3[5] + 4237533241) & 4294967295;
    c4 = e5 + (((b3 << 21) & 4294967295) | (b3 >>> 11));
    b3 = (a3 + (e5 ^ (c4 | ~g2)) + d3[12] + 1700485571) & 4294967295;
    a3 = c4 + (((b3 << 6) & 4294967295) | (b3 >>> 26));
    b3 = (g2 + (c4 ^ (a3 | ~e5)) + d3[3] + 2399980690) & 4294967295;
    g2 = a3 + (((b3 << 10) & 4294967295) | (b3 >>> 22));
    b3 = (e5 + (a3 ^ (g2 | ~c4)) + d3[10] + 4293915773) & 4294967295;
    e5 = g2 + (((b3 << 15) & 4294967295) | (b3 >>> 17));
    b3 = (c4 + (g2 ^ (e5 | ~a3)) + d3[1] + 2240044497) & 4294967295;
    c4 = e5 + (((b3 << 21) & 4294967295) | (b3 >>> 11));
    b3 = (a3 + (e5 ^ (c4 | ~g2)) + d3[8] + 1873313359) & 4294967295;
    a3 = c4 + (((b3 << 6) & 4294967295) | (b3 >>> 26));
    b3 = (g2 + (c4 ^ (a3 | ~e5)) + d3[15] + 4264355552) & 4294967295;
    g2 = a3 + (((b3 << 10) & 4294967295) | (b3 >>> 22));
    b3 = (e5 + (a3 ^ (g2 | ~c4)) + d3[6] + 2734768916) & 4294967295;
    e5 = g2 + (((b3 << 15) & 4294967295) | (b3 >>> 17));
    b3 = (c4 + (g2 ^ (e5 | ~a3)) + d3[13] + 1309151649) & 4294967295;
    c4 = e5 + (((b3 << 21) & 4294967295) | (b3 >>> 11));
    b3 = (a3 + (e5 ^ (c4 | ~g2)) + d3[4] + 4149444226) & 4294967295;
    a3 = c4 + (((b3 << 6) & 4294967295) | (b3 >>> 26));
    b3 = (g2 + (c4 ^ (a3 | ~e5)) + d3[11] + 3174756917) & 4294967295;
    g2 = a3 + (((b3 << 10) & 4294967295) | (b3 >>> 22));
    b3 = (e5 + (a3 ^ (g2 | ~c4)) + d3[2] + 718787259) & 4294967295;
    e5 = g2 + (((b3 << 15) & 4294967295) | (b3 >>> 17));
    b3 = (c4 + (g2 ^ (e5 | ~a3)) + d3[9] + 3951481745) & 4294967295;
    f3.g[0] = (f3.g[0] + a3) & 4294967295;
    f3.g[1] =
      (f3.g[1] + (e5 + (((b3 << 21) & 4294967295) | (b3 >>> 11)))) & 4294967295;
    f3.g[2] = (f3.g[2] + e5) & 4294967295;
    f3.g[3] = (f3.g[3] + g2) & 4294967295;
  }
  m2.prototype.u = function (f3, a3) {
    a3 === undefined && (a3 = f3.length);
    for (
      var c4 = a3 - this.blockSize, d3 = this.B, e5 = this.h, g2 = 0;
      g2 < a3;

    ) {
      if (e5 == 0) for (; g2 <= c4; ) n5(this, f3, g2), (g2 += this.blockSize);
      if (typeof f3 === "string")
        for (; g2 < a3; ) {
          if (((d3[e5++] = f3.charCodeAt(g2++)), e5 == this.blockSize)) {
            n5(this, d3);
            e5 = 0;
            break;
          }
        }
      else
        for (; g2 < a3; )
          if (((d3[e5++] = f3[g2++]), e5 == this.blockSize)) {
            n5(this, d3);
            e5 = 0;
            break;
          }
    }
    this.h = e5;
    this.o += a3;
  };
  m2.prototype.v = function () {
    var f3 = Array(
      (56 > this.h ? this.blockSize : 2 * this.blockSize) - this.h
    );
    f3[0] = 128;
    for (var a3 = 1; a3 < f3.length - 8; ++a3) f3[a3] = 0;
    var c4 = 8 * this.o;
    for (a3 = f3.length - 8; a3 < f3.length; ++a3)
      (f3[a3] = c4 & 255), (c4 /= 256);
    this.u(f3);
    f3 = Array(16);
    for (a3 = c4 = 0; 4 > a3; ++a3)
      for (var d3 = 0; 32 > d3; d3 += 8) f3[c4++] = (this.g[a3] >>> d3) & 255;
    return f3;
  };
  function p3(f3, a3) {
    var c4 = q;
    return Object.prototype.hasOwnProperty.call(c4, f3)
      ? c4[f3]
      : (c4[f3] = a3(f3));
  }
  function t4(f3, a3) {
    this.h = a3;
    for (var c4 = [], d3 = true, e5 = f3.length - 1; 0 <= e5; e5--) {
      var g2 = f3[e5] | 0;
      (d3 && g2 == a3) || ((c4[e5] = g2), (d3 = false));
    }
    this.g = c4;
  }
  var q = {};
  function u3(f3) {
    return -128 <= f3 && 128 > f3
      ? p3(f3, function (a3) {
          return new t4([a3 | 0], 0 > a3 ? -1 : 0);
        })
      : new t4([f3 | 0], 0 > f3 ? -1 : 0);
  }
  function v2(f3) {
    if (isNaN(f3) || !isFinite(f3)) return w2;
    if (0 > f3) return x2(v2(-f3));
    for (var a3 = [], c4 = 1, d3 = 0; f3 >= c4; d3++)
      (a3[d3] = (f3 / c4) | 0), (c4 *= 4294967296);
    return new t4(a3, 0);
  }
  function y3(f3, a3) {
    if (f3.length == 0) throw Error("number format error: empty string");
    a3 = a3 || 10;
    if (2 > a3 || 36 < a3) throw Error("radix out of range: " + a3);
    if (f3.charAt(0) == "-") return x2(y3(f3.substring(1), a3));
    if (0 <= f3.indexOf("-"))
      throw Error('number format error: interior "-" character');
    for (
      var c4 = v2(Math.pow(a3, 8)), d3 = w2, e5 = 0;
      e5 < f3.length;
      e5 += 8
    ) {
      var g2 = Math.min(8, f3.length - e5),
        b3 = parseInt(f3.substring(e5, e5 + g2), a3);
      8 > g2
        ? ((g2 = v2(Math.pow(a3, g2))), (d3 = d3.j(g2).add(v2(b3))))
        : ((d3 = d3.j(c4)), (d3 = d3.add(v2(b3))));
    }
    return d3;
  }
  var w2 = u3(0),
    z2 = u3(1),
    A2 = u3(16777216);
  h3 = t4.prototype;
  h3.m = function () {
    if (B2(this)) return -x2(this).m();
    for (var f3 = 0, a3 = 1, c4 = 0; c4 < this.g.length; c4++) {
      var d3 = this.i(c4);
      f3 += (0 <= d3 ? d3 : 4294967296 + d3) * a3;
      a3 *= 4294967296;
    }
    return f3;
  };
  h3.toString = function (f3) {
    f3 = f3 || 10;
    if (2 > f3 || 36 < f3) throw Error("radix out of range: " + f3);
    if (C2(this)) return "0";
    if (B2(this)) return "-" + x2(this).toString(f3);
    for (var a3 = v2(Math.pow(f3, 6)), c4 = this, d3 = ""; ; ) {
      var e5 = D(c4, a3).g;
      c4 = F(c4, e5.j(a3));
      var g2 = ((0 < c4.g.length ? c4.g[0] : c4.h) >>> 0).toString(f3);
      c4 = e5;
      if (C2(c4)) return g2 + d3;
      for (; 6 > g2.length; ) g2 = "0" + g2;
      d3 = g2 + d3;
    }
  };
  h3.i = function (f3) {
    return 0 > f3 ? 0 : f3 < this.g.length ? this.g[f3] : this.h;
  };
  function C2(f3) {
    if (f3.h != 0) return false;
    for (var a3 = 0; a3 < f3.g.length; a3++) if (f3.g[a3] != 0) return false;
    return true;
  }
  function B2(f3) {
    return f3.h == -1;
  }
  h3.l = function (f3) {
    f3 = F(this, f3);
    return B2(f3) ? -1 : C2(f3) ? 0 : 1;
  };
  function x2(f3) {
    for (var a3 = f3.g.length, c4 = [], d3 = 0; d3 < a3; d3++)
      c4[d3] = ~f3.g[d3];
    return new t4(c4, ~f3.h).add(z2);
  }
  h3.abs = function () {
    return B2(this) ? x2(this) : this;
  };
  h3.add = function (f3) {
    for (
      var a3 = Math.max(this.g.length, f3.g.length), c4 = [], d3 = 0, e5 = 0;
      e5 <= a3;
      e5++
    ) {
      var g2 = d3 + (this.i(e5) & 65535) + (f3.i(e5) & 65535),
        b3 = (g2 >>> 16) + (this.i(e5) >>> 16) + (f3.i(e5) >>> 16);
      d3 = b3 >>> 16;
      g2 &= 65535;
      b3 &= 65535;
      c4[e5] = (b3 << 16) | g2;
    }
    return new t4(c4, c4[c4.length - 1] & -2147483648 ? -1 : 0);
  };
  function F(f3, a3) {
    return f3.add(x2(a3));
  }
  h3.j = function (f3) {
    if (C2(this) || C2(f3)) return w2;
    if (B2(this)) return B2(f3) ? x2(this).j(x2(f3)) : x2(x2(this).j(f3));
    if (B2(f3)) return x2(this.j(x2(f3)));
    if (0 > this.l(A2) && 0 > f3.l(A2)) return v2(this.m() * f3.m());
    for (
      var a3 = this.g.length + f3.g.length, c4 = [], d3 = 0;
      d3 < 2 * a3;
      d3++
    )
      c4[d3] = 0;
    for (d3 = 0; d3 < this.g.length; d3++)
      for (var e5 = 0; e5 < f3.g.length; e5++) {
        var g2 = this.i(d3) >>> 16,
          b3 = this.i(d3) & 65535,
          r7 = f3.i(e5) >>> 16,
          E2 = f3.i(e5) & 65535;
        c4[2 * d3 + 2 * e5] += b3 * E2;
        G(c4, 2 * d3 + 2 * e5);
        c4[2 * d3 + 2 * e5 + 1] += g2 * E2;
        G(c4, 2 * d3 + 2 * e5 + 1);
        c4[2 * d3 + 2 * e5 + 1] += b3 * r7;
        G(c4, 2 * d3 + 2 * e5 + 1);
        c4[2 * d3 + 2 * e5 + 2] += g2 * r7;
        G(c4, 2 * d3 + 2 * e5 + 2);
      }
    for (d3 = 0; d3 < a3; d3++) c4[d3] = (c4[2 * d3 + 1] << 16) | c4[2 * d3];
    for (d3 = a3; d3 < 2 * a3; d3++) c4[d3] = 0;
    return new t4(c4, 0);
  };
  function G(f3, a3) {
    for (; (f3[a3] & 65535) != f3[a3]; )
      (f3[a3 + 1] += f3[a3] >>> 16), (f3[a3] &= 65535), a3++;
  }
  function H2(f3, a3) {
    this.g = f3;
    this.h = a3;
  }
  function D(f3, a3) {
    if (C2(a3)) throw Error("division by zero");
    if (C2(f3)) return new H2(w2, w2);
    if (B2(f3)) return (a3 = D(x2(f3), a3)), new H2(x2(a3.g), x2(a3.h));
    if (B2(a3)) return (a3 = D(f3, x2(a3))), new H2(x2(a3.g), a3.h);
    if (30 < f3.g.length) {
      if (B2(f3) || B2(a3))
        throw Error("slowDivide_ only works with positive integers.");
      for (var c4 = z2, d3 = a3; 0 >= d3.l(f3); ) (c4 = I2(c4)), (d3 = I2(d3));
      var e5 = J(c4, 1),
        g2 = J(d3, 1);
      d3 = J(d3, 2);
      for (c4 = J(c4, 2); !C2(d3); ) {
        var b3 = g2.add(d3);
        0 >= b3.l(f3) && ((e5 = e5.add(c4)), (g2 = b3));
        d3 = J(d3, 1);
        c4 = J(c4, 1);
      }
      a3 = F(f3, e5.j(a3));
      return new H2(e5, a3);
    }
    for (e5 = w2; 0 <= f3.l(a3); ) {
      c4 = Math.max(1, Math.floor(f3.m() / a3.m()));
      d3 = Math.ceil(Math.log(c4) / Math.LN2);
      d3 = 48 >= d3 ? 1 : Math.pow(2, d3 - 48);
      g2 = v2(c4);
      for (b3 = g2.j(a3); B2(b3) || 0 < b3.l(f3); )
        (c4 -= d3), (g2 = v2(c4)), (b3 = g2.j(a3));
      C2(g2) && (g2 = z2);
      e5 = e5.add(g2);
      f3 = F(f3, b3);
    }
    return new H2(e5, f3);
  }
  h3.A = function (f3) {
    return D(this, f3).h;
  };
  h3.and = function (f3) {
    for (
      var a3 = Math.max(this.g.length, f3.g.length), c4 = [], d3 = 0;
      d3 < a3;
      d3++
    )
      c4[d3] = this.i(d3) & f3.i(d3);
    return new t4(c4, this.h & f3.h);
  };
  h3.or = function (f3) {
    for (
      var a3 = Math.max(this.g.length, f3.g.length), c4 = [], d3 = 0;
      d3 < a3;
      d3++
    )
      c4[d3] = this.i(d3) | f3.i(d3);
    return new t4(c4, this.h | f3.h);
  };
  h3.xor = function (f3) {
    for (
      var a3 = Math.max(this.g.length, f3.g.length), c4 = [], d3 = 0;
      d3 < a3;
      d3++
    )
      c4[d3] = this.i(d3) ^ f3.i(d3);
    return new t4(c4, this.h ^ f3.h);
  };
  function I2(f3) {
    for (var a3 = f3.g.length + 1, c4 = [], d3 = 0; d3 < a3; d3++)
      c4[d3] = (f3.i(d3) << 1) | (f3.i(d3 - 1) >>> 31);
    return new t4(c4, f3.h);
  }
  function J(f3, a3) {
    var c4 = a3 >> 5;
    a3 %= 32;
    for (var d3 = f3.g.length - c4, e5 = [], g2 = 0; g2 < d3; g2++)
      e5[g2] =
        0 < a3
          ? (f3.i(g2 + c4) >>> a3) | (f3.i(g2 + c4 + 1) << (32 - a3))
          : f3.i(g2 + c4);
    return new t4(e5, f3.h);
  }
  m2.prototype.digest = m2.prototype.v;
  m2.prototype.reset = m2.prototype.s;
  m2.prototype.update = m2.prototype.u;
  Md5 = bloom_blob_es2018.Md5 = m2;
  t4.prototype.add = t4.prototype.add;
  t4.prototype.multiply = t4.prototype.j;
  t4.prototype.modulo = t4.prototype.A;
  t4.prototype.compare = t4.prototype.l;
  t4.prototype.toNumber = t4.prototype.m;
  t4.prototype.toString = t4.prototype.toString;
  t4.prototype.getBits = t4.prototype.i;
  t4.fromNumber = v2;
  t4.fromString = y3;
  Integer = bloom_blob_es2018.Integer = t4;
}).apply(
  typeof commonjsGlobal !== "undefined"
    ? commonjsGlobal
    : typeof self !== "undefined"
    ? self
    : typeof window !== "undefined"
    ? window
    : {}
);

// node_modules/@firebase/webchannel-wrapper/dist/webchannel-blob/esm/webchannel_blob_es2018.js
var commonjsGlobal2 =
  typeof globalThis !== "undefined"
    ? globalThis
    : typeof window !== "undefined"
    ? window
    : typeof global !== "undefined"
    ? global
    : typeof self !== "undefined"
    ? self
    : {};
var webchannel_blob_es2018 = {};
var XhrIo;
var FetchXmlHttpFactory;
var WebChannel;
var EventType;
var ErrorCode;
var Stat;
var Event2;
var getStatEventTarget;
var createWebChannelTransport;
(function () {
  var h3,
    aa =
      typeof Object.defineProperties == "function"
        ? Object.defineProperty
        : function (a3, b3, c4) {
            if (a3 == Array.prototype || a3 == Object.prototype) return a3;
            a3[b3] = c4.value;
            return a3;
          };
  function ba(a3) {
    a3 = [
      typeof globalThis == "object" && globalThis,
      a3,
      typeof window == "object" && window,
      typeof self == "object" && self,
      typeof commonjsGlobal2 == "object" && commonjsGlobal2,
    ];
    for (var b3 = 0; b3 < a3.length; ++b3) {
      var c4 = a3[b3];
      if (c4 && c4.Math == Math) return c4;
    }
    throw Error("Cannot find global object");
  }
  var ca = ba(this);
  function da(a3, b3) {
    if (b3)
      a: {
        var c4 = ca;
        a3 = a3.split(".");
        for (var d3 = 0; d3 < a3.length - 1; d3++) {
          var e5 = a3[d3];
          if (!(e5 in c4)) break a;
          c4 = c4[e5];
        }
        a3 = a3[a3.length - 1];
        d3 = c4[a3];
        b3 = b3(d3);
        b3 != d3 &&
          b3 != null &&
          aa(c4, a3, { configurable: true, writable: true, value: b3 });
      }
  }
  function ea(a3, b3) {
    a3 instanceof String && (a3 += "");
    var c4 = 0,
      d3 = false,
      e5 = {
        next: function () {
          if (!d3 && c4 < a3.length) {
            var f3 = c4++;
            return { value: b3(f3, a3[f3]), done: false };
          }
          d3 = true;
          return { done: true, value: undefined };
        },
      };
    e5[Symbol.iterator] = function () {
      return e5;
    };
    return e5;
  }
  da("Array.prototype.values", function (a3) {
    return a3
      ? a3
      : function () {
          return ea(this, function (b3, c4) {
            return c4;
          });
        };
  });
  var fa = fa || {},
    k2 = this || self;
  function ha(a3) {
    var b3 = typeof a3;
    b3 = b3 != "object" ? b3 : a3 ? (Array.isArray(a3) ? "array" : b3) : "null";
    return b3 == "array" || (b3 == "object" && typeof a3.length == "number");
  }
  function n5(a3) {
    var b3 = typeof a3;
    return (b3 == "object" && a3 != null) || b3 == "function";
  }
  function ia(a3, b3, c4) {
    return a3.call.apply(a3.bind, arguments);
  }
  function ja(a3, b3, c4) {
    if (!a3) throw Error();
    if (2 < arguments.length) {
      var d3 = Array.prototype.slice.call(arguments, 2);
      return function () {
        var e5 = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(e5, d3);
        return a3.apply(b3, e5);
      };
    }
    return function () {
      return a3.apply(b3, arguments);
    };
  }
  function p3(a3, b3, c4) {
    p3 =
      Function.prototype.bind &&
      Function.prototype.bind.toString().indexOf("native code") != -1
        ? ia
        : ja;
    return p3.apply(null, arguments);
  }
  function ka(a3, b3) {
    var c4 = Array.prototype.slice.call(arguments, 1);
    return function () {
      var d3 = c4.slice();
      d3.push.apply(d3, arguments);
      return a3.apply(this, d3);
    };
  }
  function r7(a3, b3) {
    function c4() {}
    c4.prototype = b3.prototype;
    a3.aa = b3.prototype;
    a3.prototype = new c4();
    a3.prototype.constructor = a3;
    a3.Qb = function (d3, e5, f3) {
      for (
        var g2 = Array(arguments.length - 2), m2 = 2;
        m2 < arguments.length;
        m2++
      )
        g2[m2 - 2] = arguments[m2];
      return b3.prototype[e5].apply(d3, g2);
    };
  }
  function la(a3) {
    const b3 = a3.length;
    if (0 < b3) {
      const c4 = Array(b3);
      for (let d3 = 0; d3 < b3; d3++) c4[d3] = a3[d3];
      return c4;
    }
    return [];
  }
  function ma(a3, b3) {
    for (let c4 = 1; c4 < arguments.length; c4++) {
      const d3 = arguments[c4];
      if (ha(d3)) {
        const e5 = a3.length || 0,
          f3 = d3.length || 0;
        a3.length = e5 + f3;
        for (let g2 = 0; g2 < f3; g2++) a3[e5 + g2] = d3[g2];
      } else a3.push(d3);
    }
  }

  class na {
    constructor(a3, b3) {
      this.i = a3;
      this.j = b3;
      this.h = 0;
      this.g = null;
    }
    get() {
      let a3;
      0 < this.h
        ? (this.h--, (a3 = this.g), (this.g = a3.next), (a3.next = null))
        : (a3 = this.i());
      return a3;
    }
  }
  function t4(a3) {
    return /^[\s\xa0]*$/.test(a3);
  }
  function u3() {
    var a3 = k2.navigator;
    return a3 && (a3 = a3.userAgent) ? a3 : "";
  }
  function oa(a3) {
    oa[" "](a3);
    return a3;
  }
  oa[" "] = function () {};
  var pa =
    u3().indexOf("Gecko") != -1 &&
    !(
      u3().toLowerCase().indexOf("webkit") != -1 && u3().indexOf("Edge") == -1
    ) &&
    !(u3().indexOf("Trident") != -1 || u3().indexOf("MSIE") != -1) &&
    u3().indexOf("Edge") == -1;
  function qa(a3, b3, c4) {
    for (const d3 in a3) b3.call(c4, a3[d3], d3, a3);
  }
  function ra(a3, b3) {
    for (const c4 in a3) b3.call(undefined, a3[c4], c4, a3);
  }
  function sa(a3) {
    const b3 = {};
    for (const c4 in a3) b3[c4] = a3[c4];
    return b3;
  }
  const ta =
    "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
      " "
    );
  function ua(a3, b3) {
    let c4, d3;
    for (let e5 = 1; e5 < arguments.length; e5++) {
      d3 = arguments[e5];
      for (c4 in d3) a3[c4] = d3[c4];
      for (let f3 = 0; f3 < ta.length; f3++)
        (c4 = ta[f3]),
          Object.prototype.hasOwnProperty.call(d3, c4) && (a3[c4] = d3[c4]);
    }
  }
  function va(a3) {
    var b3 = 1;
    a3 = a3.split(":");
    const c4 = [];
    for (; 0 < b3 && a3.length; ) c4.push(a3.shift()), b3--;
    a3.length && c4.push(a3.join(":"));
    return c4;
  }
  function wa(a3) {
    k2.setTimeout(() => {
      throw a3;
    }, 0);
  }
  function xa() {
    var a3 = za;
    let b3 = null;
    a3.g &&
      ((b3 = a3.g),
      (a3.g = a3.g.next),
      a3.g || (a3.h = null),
      (b3.next = null));
    return b3;
  }

  class Aa {
    constructor() {
      this.h = this.g = null;
    }
    add(a3, b3) {
      const c4 = Ba.get();
      c4.set(a3, b3);
      this.h ? (this.h.next = c4) : (this.g = c4);
      this.h = c4;
    }
  }
  var Ba = new na(
    () => new Ca(),
    (a3) => a3.reset()
  );

  class Ca {
    constructor() {
      this.next = this.g = this.h = null;
    }
    set(a3, b3) {
      this.h = a3;
      this.g = b3;
      this.next = null;
    }
    reset() {
      this.next = this.g = this.h = null;
    }
  }
  let x2,
    y3 = false,
    za = new Aa(),
    Ea = () => {
      const a3 = k2.Promise.resolve(undefined);
      x2 = () => {
        a3.then(Da);
      };
    };
  var Da = () => {
    for (var a3; (a3 = xa()); ) {
      try {
        a3.h.call(a3.g);
      } catch (c4) {
        wa(c4);
      }
      var b3 = Ba;
      b3.j(a3);
      100 > b3.h && (b3.h++, (a3.next = b3.g), (b3.g = a3));
    }
    y3 = false;
  };
  function z2() {
    this.s = this.s;
    this.C = this.C;
  }
  z2.prototype.s = false;
  z2.prototype.ma = function () {
    this.s || ((this.s = true), this.N());
  };
  z2.prototype.N = function () {
    if (this.C) for (; this.C.length; ) this.C.shift()();
  };
  function A2(a3, b3) {
    this.type = a3;
    this.g = this.target = b3;
    this.defaultPrevented = false;
  }
  A2.prototype.h = function () {
    this.defaultPrevented = true;
  };
  var Fa = (function () {
    if (!k2.addEventListener || !Object.defineProperty) return false;
    var a3 = false,
      b3 = Object.defineProperty({}, "passive", {
        get: function () {
          a3 = true;
        },
      });
    try {
      const c4 = () => {};
      k2.addEventListener("test", c4, b3);
      k2.removeEventListener("test", c4, b3);
    } catch (c4) {}
    return a3;
  })();
  function C2(a3, b3) {
    A2.call(this, a3 ? a3.type : "");
    this.relatedTarget = this.g = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = false;
    this.state = null;
    this.pointerId = 0;
    this.pointerType = "";
    this.i = null;
    if (a3) {
      var c4 = (this.type = a3.type),
        d3 =
          a3.changedTouches && a3.changedTouches.length
            ? a3.changedTouches[0]
            : null;
      this.target = a3.target || a3.srcElement;
      this.g = b3;
      if ((b3 = a3.relatedTarget)) {
        if (pa) {
          a: {
            try {
              oa(b3.nodeName);
              var e5 = true;
              break a;
            } catch (f3) {}
            e5 = false;
          }
          e5 || (b3 = null);
        }
      } else
        c4 == "mouseover"
          ? (b3 = a3.fromElement)
          : c4 == "mouseout" && (b3 = a3.toElement);
      this.relatedTarget = b3;
      d3
        ? ((this.clientX = d3.clientX !== undefined ? d3.clientX : d3.pageX),
          (this.clientY = d3.clientY !== undefined ? d3.clientY : d3.pageY),
          (this.screenX = d3.screenX || 0),
          (this.screenY = d3.screenY || 0))
        : ((this.clientX = a3.clientX !== undefined ? a3.clientX : a3.pageX),
          (this.clientY = a3.clientY !== undefined ? a3.clientY : a3.pageY),
          (this.screenX = a3.screenX || 0),
          (this.screenY = a3.screenY || 0));
      this.button = a3.button;
      this.key = a3.key || "";
      this.ctrlKey = a3.ctrlKey;
      this.altKey = a3.altKey;
      this.shiftKey = a3.shiftKey;
      this.metaKey = a3.metaKey;
      this.pointerId = a3.pointerId || 0;
      this.pointerType =
        typeof a3.pointerType === "string"
          ? a3.pointerType
          : Ga[a3.pointerType] || "";
      this.state = a3.state;
      this.i = a3;
      a3.defaultPrevented && C2.aa.h.call(this);
    }
  }
  r7(C2, A2);
  var Ga = { 2: "touch", 3: "pen", 4: "mouse" };
  C2.prototype.h = function () {
    C2.aa.h.call(this);
    var a3 = this.i;
    a3.preventDefault ? a3.preventDefault() : (a3.returnValue = false);
  };
  var D = "closure_listenable_" + ((1e6 * Math.random()) | 0);
  var Ha = 0;
  function Ia(a3, b3, c4, d3, e5) {
    this.listener = a3;
    this.proxy = null;
    this.src = b3;
    this.type = c4;
    this.capture = !!d3;
    this.ha = e5;
    this.key = ++Ha;
    this.da = this.fa = false;
  }
  function Ja(a3) {
    a3.da = true;
    a3.listener = null;
    a3.proxy = null;
    a3.src = null;
    a3.ha = null;
  }
  function Ka(a3) {
    this.src = a3;
    this.g = {};
    this.h = 0;
  }
  Ka.prototype.add = function (a3, b3, c4, d3, e5) {
    var f3 = a3.toString();
    a3 = this.g[f3];
    a3 || ((a3 = this.g[f3] = []), this.h++);
    var g2 = La(a3, b3, d3, e5);
    -1 < g2
      ? ((b3 = a3[g2]), c4 || (b3.fa = false))
      : ((b3 = new Ia(b3, this.src, f3, !!d3, e5)), (b3.fa = c4), a3.push(b3));
    return b3;
  };
  function Ma(a3, b3) {
    var c4 = b3.type;
    if (c4 in a3.g) {
      var d3 = a3.g[c4],
        e5 = Array.prototype.indexOf.call(d3, b3, undefined),
        f3;
      (f3 = 0 <= e5) && Array.prototype.splice.call(d3, e5, 1);
      f3 && (Ja(b3), a3.g[c4].length == 0 && (delete a3.g[c4], a3.h--));
    }
  }
  function La(a3, b3, c4, d3) {
    for (var e5 = 0; e5 < a3.length; ++e5) {
      var f3 = a3[e5];
      if (!f3.da && f3.listener == b3 && f3.capture == !!c4 && f3.ha == d3)
        return e5;
    }
    return -1;
  }
  var Na = "closure_lm_" + ((1e6 * Math.random()) | 0),
    Oa = {};
  function Qa(a3, b3, c4, d3, e5) {
    if (d3 && d3.once) return Ra(a3, b3, c4, d3, e5);
    if (Array.isArray(b3)) {
      for (var f3 = 0; f3 < b3.length; f3++) Qa(a3, b3[f3], c4, d3, e5);
      return null;
    }
    c4 = Sa(c4);
    return a3 && a3[D]
      ? a3.K(b3, c4, n5(d3) ? !!d3.capture : !!d3, e5)
      : Ta(a3, b3, c4, false, d3, e5);
  }
  function Ta(a3, b3, c4, d3, e5, f3) {
    if (!b3) throw Error("Invalid event type");
    var g2 = n5(e5) ? !!e5.capture : !!e5,
      m2 = Ua(a3);
    m2 || (a3[Na] = m2 = new Ka(a3));
    c4 = m2.add(b3, c4, d3, g2, f3);
    if (c4.proxy) return c4;
    d3 = Va();
    c4.proxy = d3;
    d3.src = a3;
    d3.listener = c4;
    if (a3.addEventListener)
      Fa || (e5 = g2),
        e5 === undefined && (e5 = false),
        a3.addEventListener(b3.toString(), d3, e5);
    else if (a3.attachEvent) a3.attachEvent(Wa(b3.toString()), d3);
    else if (a3.addListener && a3.removeListener) a3.addListener(d3);
    else throw Error("addEventListener and attachEvent are unavailable.");
    return c4;
  }
  function Va() {
    function a3(c4) {
      return b3.call(a3.src, a3.listener, c4);
    }
    const b3 = Xa;
    return a3;
  }
  function Ra(a3, b3, c4, d3, e5) {
    if (Array.isArray(b3)) {
      for (var f3 = 0; f3 < b3.length; f3++) Ra(a3, b3[f3], c4, d3, e5);
      return null;
    }
    c4 = Sa(c4);
    return a3 && a3[D]
      ? a3.L(b3, c4, n5(d3) ? !!d3.capture : !!d3, e5)
      : Ta(a3, b3, c4, true, d3, e5);
  }
  function Ya(a3, b3, c4, d3, e5) {
    if (Array.isArray(b3))
      for (var f3 = 0; f3 < b3.length; f3++) Ya(a3, b3[f3], c4, d3, e5);
    else
      ((d3 = n5(d3) ? !!d3.capture : !!d3), (c4 = Sa(c4)), a3 && a3[D])
        ? ((a3 = a3.i),
          (b3 = String(b3).toString()),
          b3 in a3.g &&
            ((f3 = a3.g[b3]),
            (c4 = La(f3, c4, d3, e5)),
            -1 < c4 &&
              (Ja(f3[c4]),
              Array.prototype.splice.call(f3, c4, 1),
              f3.length == 0 && (delete a3.g[b3], a3.h--))))
        : a3 &&
          (a3 = Ua(a3)) &&
          ((b3 = a3.g[b3.toString()]),
          (a3 = -1),
          b3 && (a3 = La(b3, c4, d3, e5)),
          (c4 = -1 < a3 ? b3[a3] : null) && Za(c4));
  }
  function Za(a3) {
    if (typeof a3 !== "number" && a3 && !a3.da) {
      var b3 = a3.src;
      if (b3 && b3[D]) Ma(b3.i, a3);
      else {
        var { type: c4, proxy: d3 } = a3;
        b3.removeEventListener
          ? b3.removeEventListener(c4, d3, a3.capture)
          : b3.detachEvent
          ? b3.detachEvent(Wa(c4), d3)
          : b3.addListener && b3.removeListener && b3.removeListener(d3);
        (c4 = Ua(b3))
          ? (Ma(c4, a3), c4.h == 0 && ((c4.src = null), (b3[Na] = null)))
          : Ja(a3);
      }
    }
  }
  function Wa(a3) {
    return a3 in Oa ? Oa[a3] : (Oa[a3] = "on" + a3);
  }
  function Xa(a3, b3) {
    if (a3.da) a3 = true;
    else {
      b3 = new C2(b3, this);
      var c4 = a3.listener,
        d3 = a3.ha || a3.src;
      a3.fa && Za(a3);
      a3 = c4.call(d3, b3);
    }
    return a3;
  }
  function Ua(a3) {
    a3 = a3[Na];
    return a3 instanceof Ka ? a3 : null;
  }
  var $a = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
  function Sa(a3) {
    if (typeof a3 === "function") return a3;
    a3[$a] ||
      (a3[$a] = function (b3) {
        return a3.handleEvent(b3);
      });
    return a3[$a];
  }
  function E2() {
    z2.call(this);
    this.i = new Ka(this);
    this.M = this;
    this.F = null;
  }
  r7(E2, z2);
  E2.prototype[D] = true;
  E2.prototype.removeEventListener = function (a3, b3, c4, d3) {
    Ya(this, a3, b3, c4, d3);
  };
  function F(a3, b3) {
    var c4,
      d3 = a3.F;
    if (d3) for (c4 = []; d3; d3 = d3.F) c4.push(d3);
    a3 = a3.M;
    d3 = b3.type || b3;
    if (typeof b3 === "string") b3 = new A2(b3, a3);
    else if (b3 instanceof A2) b3.target = b3.target || a3;
    else {
      var e5 = b3;
      b3 = new A2(d3, a3);
      ua(b3, e5);
    }
    e5 = true;
    if (c4)
      for (var f3 = c4.length - 1; 0 <= f3; f3--) {
        var g2 = (b3.g = c4[f3]);
        e5 = ab(g2, d3, true, b3) && e5;
      }
    g2 = b3.g = a3;
    e5 = ab(g2, d3, true, b3) && e5;
    e5 = ab(g2, d3, false, b3) && e5;
    if (c4)
      for (f3 = 0; f3 < c4.length; f3++)
        (g2 = b3.g = c4[f3]), (e5 = ab(g2, d3, false, b3) && e5);
  }
  E2.prototype.N = function () {
    E2.aa.N.call(this);
    if (this.i) {
      var a3 = this.i,
        c4;
      for (c4 in a3.g) {
        for (var d3 = a3.g[c4], e5 = 0; e5 < d3.length; e5++) Ja(d3[e5]);
        delete a3.g[c4];
        a3.h--;
      }
    }
    this.F = null;
  };
  E2.prototype.K = function (a3, b3, c4, d3) {
    return this.i.add(String(a3), b3, false, c4, d3);
  };
  E2.prototype.L = function (a3, b3, c4, d3) {
    return this.i.add(String(a3), b3, true, c4, d3);
  };
  function ab(a3, b3, c4, d3) {
    b3 = a3.i.g[String(b3)];
    if (!b3) return true;
    b3 = b3.concat();
    for (var e5 = true, f3 = 0; f3 < b3.length; ++f3) {
      var g2 = b3[f3];
      if (g2 && !g2.da && g2.capture == c4) {
        var m2 = g2.listener,
          q = g2.ha || g2.src;
        g2.fa && Ma(a3.i, g2);
        e5 = m2.call(q, d3) !== false && e5;
      }
    }
    return e5 && !d3.defaultPrevented;
  }
  function bb(a3, b3, c4) {
    if (typeof a3 === "function") c4 && (a3 = p3(a3, c4));
    else if (a3 && typeof a3.handleEvent == "function")
      a3 = p3(a3.handleEvent, a3);
    else throw Error("Invalid listener argument");
    return 2147483647 < Number(b3) ? -1 : k2.setTimeout(a3, b3 || 0);
  }
  function cb(a3) {
    a3.g = bb(() => {
      a3.g = null;
      a3.i && ((a3.i = false), cb(a3));
    }, a3.l);
    const b3 = a3.h;
    a3.h = null;
    a3.m.apply(null, b3);
  }

  class eb extends z2 {
    constructor(a3, b3) {
      super();
      this.m = a3;
      this.l = b3;
      this.h = null;
      this.i = false;
      this.g = null;
    }
    j(a3) {
      this.h = arguments;
      this.g ? (this.i = true) : cb(this);
    }
    N() {
      super.N();
      this.g &&
        (k2.clearTimeout(this.g),
        (this.g = null),
        (this.i = false),
        (this.h = null));
    }
  }
  function G(a3) {
    z2.call(this);
    this.h = a3;
    this.g = {};
  }
  r7(G, z2);
  var fb = [];
  function gb(a3) {
    qa(
      a3.g,
      function (b3, c4) {
        this.g.hasOwnProperty(c4) && Za(b3);
      },
      a3
    );
    a3.g = {};
  }
  G.prototype.N = function () {
    G.aa.N.call(this);
    gb(this);
  };
  G.prototype.handleEvent = function () {
    throw Error("EventHandler.handleEvent not implemented");
  };
  var hb = k2.JSON.stringify;
  var ib = k2.JSON.parse;
  var jb = class {
    stringify(a3) {
      return k2.JSON.stringify(a3, undefined);
    }
    parse(a3) {
      return k2.JSON.parse(a3, undefined);
    }
  };
  function kb() {}
  kb.prototype.h = null;
  function lb(a3) {
    return a3.h || (a3.h = a3.i());
  }
  function mb() {}
  var H2 = { OPEN: "a", kb: "b", Ja: "c", wb: "d" };
  function nb() {
    A2.call(this, "d");
  }
  r7(nb, A2);
  function ob() {
    A2.call(this, "c");
  }
  r7(ob, A2);
  var I2 = {},
    pb = null;
  function qb() {
    return (pb = pb || new E2());
  }
  I2.La = "serverreachability";
  function rb(a3) {
    A2.call(this, I2.La, a3);
  }
  r7(rb, A2);
  function J(a3) {
    const b3 = qb();
    F(b3, new rb(b3));
  }
  I2.STAT_EVENT = "statevent";
  function sb(a3, b3) {
    A2.call(this, I2.STAT_EVENT, a3);
    this.stat = b3;
  }
  r7(sb, A2);
  function K(a3) {
    const b3 = qb();
    F(b3, new sb(b3, a3));
  }
  I2.Ma = "timingevent";
  function tb(a3, b3) {
    A2.call(this, I2.Ma, a3);
    this.size = b3;
  }
  r7(tb, A2);
  function ub(a3, b3) {
    if (typeof a3 !== "function")
      throw Error("Fn must not be null and must be a function");
    return k2.setTimeout(function () {
      a3();
    }, b3);
  }
  function vb() {
    this.g = true;
  }
  vb.prototype.xa = function () {
    this.g = false;
  };
  function wb(a3, b3, c4, d3, e5, f3) {
    a3.info(function () {
      if (a3.g)
        if (f3) {
          var g2 = "";
          for (var m2 = f3.split("&"), q = 0; q < m2.length; q++) {
            var l3 = m2[q].split("=");
            if (1 < l3.length) {
              var v2 = l3[0];
              l3 = l3[1];
              var w2 = v2.split("_");
              g2 =
                2 <= w2.length && w2[1] == "type"
                  ? g2 + (v2 + "=" + l3 + "&")
                  : g2 + (v2 + "=redacted&");
            }
          }
        } else g2 = null;
      else g2 = f3;
      return (
        "XMLHTTP REQ (" +
        d3 +
        ") [attempt " +
        e5 +
        "]: " +
        b3 +
        `
` +
        c4 +
        `
` +
        g2
      );
    });
  }
  function xb(a3, b3, c4, d3, e5, f3, g2) {
    a3.info(function () {
      return (
        "XMLHTTP RESP (" +
        d3 +
        ") [ attempt " +
        e5 +
        "]: " +
        b3 +
        `
` +
        c4 +
        `
` +
        f3 +
        " " +
        g2
      );
    });
  }
  function L2(a3, b3, c4, d3) {
    a3.info(function () {
      return "XMLHTTP TEXT (" + b3 + "): " + yb(a3, c4) + (d3 ? " " + d3 : "");
    });
  }
  function zb(a3, b3) {
    a3.info(function () {
      return "TIMEOUT: " + b3;
    });
  }
  vb.prototype.info = function () {};
  function yb(a3, b3) {
    if (!a3.g) return b3;
    if (!b3) return null;
    try {
      var c4 = JSON.parse(b3);
      if (c4) {
        for (a3 = 0; a3 < c4.length; a3++)
          if (Array.isArray(c4[a3])) {
            var d3 = c4[a3];
            if (!(2 > d3.length)) {
              var e5 = d3[1];
              if (Array.isArray(e5) && !(1 > e5.length)) {
                var f3 = e5[0];
                if (f3 != "noop" && f3 != "stop" && f3 != "close")
                  for (var g2 = 1; g2 < e5.length; g2++) e5[g2] = "";
              }
            }
          }
      }
      return hb(c4);
    } catch (m2) {
      return b3;
    }
  }
  var Ab = {
    NO_ERROR: 0,
    gb: 1,
    tb: 2,
    sb: 3,
    nb: 4,
    rb: 5,
    ub: 6,
    Ia: 7,
    TIMEOUT: 8,
    xb: 9,
  };
  var Bb = {
    lb: "complete",
    Hb: "success",
    Ja: "error",
    Ia: "abort",
    zb: "ready",
    Ab: "readystatechange",
    TIMEOUT: "timeout",
    vb: "incrementaldata",
    yb: "progress",
    ob: "downloadprogress",
    Pb: "uploadprogress",
  };
  var Cb;
  function Db() {}
  r7(Db, kb);
  Db.prototype.g = function () {
    return new XMLHttpRequest();
  };
  Db.prototype.i = function () {
    return {};
  };
  Cb = new Db();
  function M2(a3, b3, c4, d3) {
    this.j = a3;
    this.i = b3;
    this.l = c4;
    this.R = d3 || 1;
    this.U = new G(this);
    this.I = 45000;
    this.H = null;
    this.o = false;
    this.m = this.A = this.v = this.L = this.F = this.S = this.B = null;
    this.D = [];
    this.g = null;
    this.C = 0;
    this.s = this.u = null;
    this.X = -1;
    this.J = false;
    this.O = 0;
    this.M = null;
    this.W = this.K = this.T = this.P = false;
    this.h = new Eb();
  }
  function Eb() {
    this.i = null;
    this.g = "";
    this.h = false;
  }
  var Fb = {},
    Gb = {};
  function Hb(a3, b3, c4) {
    a3.L = 1;
    a3.v = Ib(N2(b3));
    a3.m = c4;
    a3.P = true;
    Jb(a3, null);
  }
  function Jb(a3, b3) {
    a3.F = Date.now();
    Kb(a3);
    a3.A = N2(a3.v);
    var { A: c4, R: d3 } = a3;
    Array.isArray(d3) || (d3 = [String(d3)]);
    Lb(c4.i, "t", d3);
    a3.C = 0;
    c4 = a3.j.J;
    a3.h = new Eb();
    a3.g = Mb(a3.j, c4 ? b3 : null, !a3.m);
    0 < a3.O && (a3.M = new eb(p3(a3.Y, a3, a3.g), a3.O));
    b3 = a3.U;
    c4 = a3.g;
    d3 = a3.ca;
    var e5 = "readystatechange";
    Array.isArray(e5) || (e5 && (fb[0] = e5.toString()), (e5 = fb));
    for (var f3 = 0; f3 < e5.length; f3++) {
      var g2 = Qa(c4, e5[f3], d3 || b3.handleEvent, false, b3.h || b3);
      if (!g2) break;
      b3.g[g2.key] = g2;
    }
    b3 = a3.H ? sa(a3.H) : {};
    a3.m
      ? (a3.u || (a3.u = "POST"),
        (b3["Content-Type"] = "application/x-www-form-urlencoded"),
        a3.g.ea(a3.A, a3.u, a3.m, b3))
      : ((a3.u = "GET"), a3.g.ea(a3.A, a3.u, null, b3));
    J();
    wb(a3.i, a3.u, a3.A, a3.l, a3.R, a3.m);
  }
  M2.prototype.ca = function (a3) {
    a3 = a3.target;
    const b3 = this.M;
    b3 && P2(a3) == 3 ? b3.j() : this.Y(a3);
  };
  M2.prototype.Y = function (a3) {
    try {
      if (a3 == this.g)
        a: {
          const w2 = P2(this.g);
          var b3 = this.g.Ba();
          const O = this.g.Z();
          if (
            !(3 > w2) &&
            (w2 != 3 || (this.g && (this.h.h || this.g.oa() || Nb(this.g))))
          ) {
            this.J || w2 != 4 || b3 == 7 || (b3 == 8 || 0 >= O ? J(3) : J(2));
            Ob(this);
            var c4 = this.g.Z();
            this.X = c4;
            b: if (Pb(this)) {
              var d3 = Nb(this.g);
              a3 = "";
              var e5 = d3.length,
                f3 = P2(this.g) == 4;
              if (!this.h.i) {
                if (typeof TextDecoder === "undefined") {
                  Q(this);
                  Qb(this);
                  var g2 = "";
                  break b;
                }
                this.h.i = new k2.TextDecoder();
              }
              for (b3 = 0; b3 < e5; b3++)
                (this.h.h = true),
                  (a3 += this.h.i.decode(d3[b3], {
                    stream: !(f3 && b3 == e5 - 1),
                  }));
              d3.length = 0;
              this.h.g += a3;
              this.C = 0;
              g2 = this.h.g;
            } else g2 = this.g.oa();
            this.o = c4 == 200;
            xb(this.i, this.u, this.A, this.l, this.R, w2, c4);
            if (this.o) {
              if (this.T && !this.K) {
                b: {
                  if (this.g) {
                    var m2,
                      q = this.g;
                    if (
                      (m2 = q.g
                        ? q.g.getResponseHeader("X-HTTP-Initial-Response")
                        : null) &&
                      !t4(m2)
                    ) {
                      var l3 = m2;
                      break b;
                    }
                  }
                  l3 = null;
                }
                if ((c4 = l3))
                  L2(
                    this.i,
                    this.l,
                    c4,
                    "Initial handshake response via X-HTTP-Initial-Response"
                  ),
                    (this.K = true),
                    Rb(this, c4);
                else {
                  this.o = false;
                  this.s = 3;
                  K(12);
                  Q(this);
                  Qb(this);
                  break a;
                }
              }
              if (this.P) {
                c4 = true;
                let B2;
                for (; !this.J && this.C < g2.length; )
                  if (((B2 = Sb(this, g2)), B2 == Gb)) {
                    w2 == 4 && ((this.s = 4), K(14), (c4 = false));
                    L2(this.i, this.l, null, "[Incomplete Response]");
                    break;
                  } else if (B2 == Fb) {
                    this.s = 4;
                    K(15);
                    L2(this.i, this.l, g2, "[Invalid Chunk]");
                    c4 = false;
                    break;
                  } else L2(this.i, this.l, B2, null), Rb(this, B2);
                Pb(this) &&
                  this.C != 0 &&
                  ((this.h.g = this.h.g.slice(this.C)), (this.C = 0));
                w2 != 4 ||
                  g2.length != 0 ||
                  this.h.h ||
                  ((this.s = 1), K(16), (c4 = false));
                this.o = this.o && c4;
                if (!c4)
                  L2(this.i, this.l, g2, "[Invalid Chunked Response]"),
                    Q(this),
                    Qb(this);
                else if (0 < g2.length && !this.W) {
                  this.W = true;
                  var v2 = this.j;
                  v2.g == this &&
                    v2.ba &&
                    !v2.M &&
                    (v2.j.info(
                      "Great, no buffering proxy detected. Bytes received: " +
                        g2.length
                    ),
                    Tb(v2),
                    (v2.M = true),
                    K(11));
                }
              } else L2(this.i, this.l, g2, null), Rb(this, g2);
              w2 == 4 && Q(this);
              this.o &&
                !this.J &&
                (w2 == 4 ? Ub(this.j, this) : ((this.o = false), Kb(this)));
            } else
              Vb(this.g),
                c4 == 400 && 0 < g2.indexOf("Unknown SID")
                  ? ((this.s = 3), K(12))
                  : ((this.s = 0), K(13)),
                Q(this),
                Qb(this);
          }
        }
    } catch (w2) {
    } finally {
    }
  };
  function Pb(a3) {
    return a3.g ? a3.u == "GET" && a3.L != 2 && a3.j.Ca : false;
  }
  function Sb(a3, b3) {
    var c4 = a3.C,
      d3 = b3.indexOf(
        `
`,
        c4
      );
    if (d3 == -1) return Gb;
    c4 = Number(b3.substring(c4, d3));
    if (isNaN(c4)) return Fb;
    d3 += 1;
    if (d3 + c4 > b3.length) return Gb;
    b3 = b3.slice(d3, d3 + c4);
    a3.C = d3 + c4;
    return b3;
  }
  M2.prototype.cancel = function () {
    this.J = true;
    Q(this);
  };
  function Kb(a3) {
    a3.S = Date.now() + a3.I;
    Wb(a3, a3.I);
  }
  function Wb(a3, b3) {
    if (a3.B != null) throw Error("WatchDog timer not null");
    a3.B = ub(p3(a3.ba, a3), b3);
  }
  function Ob(a3) {
    a3.B && (k2.clearTimeout(a3.B), (a3.B = null));
  }
  M2.prototype.ba = function () {
    this.B = null;
    const a3 = Date.now();
    0 <= a3 - this.S
      ? (zb(this.i, this.A),
        this.L != 2 && (J(), K(17)),
        Q(this),
        (this.s = 2),
        Qb(this))
      : Wb(this, this.S - a3);
  };
  function Qb(a3) {
    a3.j.G == 0 || a3.J || Ub(a3.j, a3);
  }
  function Q(a3) {
    Ob(a3);
    var b3 = a3.M;
    b3 && typeof b3.ma == "function" && b3.ma();
    a3.M = null;
    gb(a3.U);
    a3.g && ((b3 = a3.g), (a3.g = null), b3.abort(), b3.ma());
  }
  function Rb(a3, b3) {
    try {
      var c4 = a3.j;
      if (c4.G != 0 && (c4.g == a3 || Xb(c4.h, a3))) {
        if (!a3.K && Xb(c4.h, a3) && c4.G == 3) {
          try {
            var d3 = c4.Da.g.parse(b3);
          } catch (l3) {
            d3 = null;
          }
          if (Array.isArray(d3) && d3.length == 3) {
            var e5 = d3;
            if (e5[0] == 0)
              a: {
                if (!c4.u) {
                  if (c4.g)
                    if (c4.g.F + 3000 < a3.F) Yb(c4), Zb(c4);
                    else break a;
                  $b(c4);
                  K(18);
                }
              }
            else
              (c4.za = e5[1]),
                0 < c4.za - c4.T &&
                  37500 > e5[2] &&
                  c4.F &&
                  c4.v == 0 &&
                  !c4.C &&
                  (c4.C = ub(p3(c4.Za, c4), 6000));
            if (1 >= ac(c4.h) && c4.ca) {
              try {
                c4.ca();
              } catch (l3) {}
              c4.ca = undefined;
            }
          } else R2(c4, 11);
        } else if (((a3.K || c4.g == a3) && Yb(c4), !t4(b3)))
          for (e5 = c4.Da.g.parse(b3), b3 = 0; b3 < e5.length; b3++) {
            let l3 = e5[b3];
            c4.T = l3[0];
            l3 = l3[1];
            if (c4.G == 2)
              if (l3[0] == "c") {
                c4.K = l3[1];
                c4.ia = l3[2];
                const v2 = l3[3];
                v2 != null && ((c4.la = v2), c4.j.info("VER=" + c4.la));
                const w2 = l3[4];
                w2 != null && ((c4.Aa = w2), c4.j.info("SVER=" + c4.Aa));
                const O = l3[5];
                O != null &&
                  typeof O === "number" &&
                  0 < O &&
                  ((d3 = 1.5 * O),
                  (c4.L = d3),
                  c4.j.info("backChannelRequestTimeoutMs_=" + d3));
                d3 = c4;
                const B2 = a3.g;
                if (B2) {
                  const ya = B2.g
                    ? B2.g.getResponseHeader("X-Client-Wire-Protocol")
                    : null;
                  if (ya) {
                    var f3 = d3.h;
                    f3.g ||
                      (ya.indexOf("spdy") == -1 &&
                        ya.indexOf("quic") == -1 &&
                        ya.indexOf("h2") == -1) ||
                      ((f3.j = f3.l),
                      (f3.g = new Set()),
                      f3.h && (bc(f3, f3.h), (f3.h = null)));
                  }
                  if (d3.D) {
                    const db = B2.g
                      ? B2.g.getResponseHeader("X-HTTP-Session-Id")
                      : null;
                    db && ((d3.ya = db), S3(d3.I, d3.D, db));
                  }
                }
                c4.G = 3;
                c4.l && c4.l.ua();
                c4.ba &&
                  ((c4.R = Date.now() - a3.F),
                  c4.j.info("Handshake RTT: " + c4.R + "ms"));
                d3 = c4;
                var g2 = a3;
                d3.qa = cc(d3, d3.J ? d3.ia : null, d3.W);
                if (g2.K) {
                  dc(d3.h, g2);
                  var m2 = g2,
                    q = d3.L;
                  q && (m2.I = q);
                  m2.B && (Ob(m2), Kb(m2));
                  d3.g = g2;
                } else ec(d3);
                0 < c4.i.length && fc(c4);
              } else (l3[0] != "stop" && l3[0] != "close") || R2(c4, 7);
            else
              c4.G == 3 &&
                (l3[0] == "stop" || l3[0] == "close"
                  ? l3[0] == "stop"
                    ? R2(c4, 7)
                    : gc(c4)
                  : l3[0] != "noop" && c4.l && c4.l.ta(l3),
                (c4.v = 0));
          }
      }
      J(4);
    } catch (l3) {}
  }
  var hc = class {
    constructor(a3, b3) {
      this.g = a3;
      this.map = b3;
    }
  };
  function ic(a3) {
    this.l = a3 || 10;
    k2.PerformanceNavigationTiming
      ? ((a3 = k2.performance.getEntriesByType("navigation")),
        (a3 =
          0 < a3.length &&
          (a3[0].nextHopProtocol == "hq" || a3[0].nextHopProtocol == "h2")))
      : (a3 = !!(
          k2.chrome &&
          k2.chrome.loadTimes &&
          k2.chrome.loadTimes() &&
          k2.chrome.loadTimes().wasFetchedViaSpdy
        ));
    this.j = a3 ? this.l : 1;
    this.g = null;
    1 < this.j && (this.g = new Set());
    this.h = null;
    this.i = [];
  }
  function jc(a3) {
    return a3.h ? true : a3.g ? a3.g.size >= a3.j : false;
  }
  function ac(a3) {
    return a3.h ? 1 : a3.g ? a3.g.size : 0;
  }
  function Xb(a3, b3) {
    return a3.h ? a3.h == b3 : a3.g ? a3.g.has(b3) : false;
  }
  function bc(a3, b3) {
    a3.g ? a3.g.add(b3) : (a3.h = b3);
  }
  function dc(a3, b3) {
    a3.h && a3.h == b3
      ? (a3.h = null)
      : a3.g && a3.g.has(b3) && a3.g.delete(b3);
  }
  ic.prototype.cancel = function () {
    this.i = kc(this);
    if (this.h) this.h.cancel(), (this.h = null);
    else if (this.g && this.g.size !== 0) {
      for (const a3 of this.g.values()) a3.cancel();
      this.g.clear();
    }
  };
  function kc(a3) {
    if (a3.h != null) return a3.i.concat(a3.h.D);
    if (a3.g != null && a3.g.size !== 0) {
      let b3 = a3.i;
      for (const c4 of a3.g.values()) b3 = b3.concat(c4.D);
      return b3;
    }
    return la(a3.i);
  }
  function lc(a3) {
    if (a3.V && typeof a3.V == "function") return a3.V();
    if (
      (typeof Map !== "undefined" && a3 instanceof Map) ||
      (typeof Set !== "undefined" && a3 instanceof Set)
    )
      return Array.from(a3.values());
    if (typeof a3 === "string") return a3.split("");
    if (ha(a3)) {
      for (var b3 = [], c4 = a3.length, d3 = 0; d3 < c4; d3++) b3.push(a3[d3]);
      return b3;
    }
    b3 = [];
    c4 = 0;
    for (d3 in a3) b3[c4++] = a3[d3];
    return b3;
  }
  function mc(a3) {
    if (a3.na && typeof a3.na == "function") return a3.na();
    if (!a3.V || typeof a3.V != "function") {
      if (typeof Map !== "undefined" && a3 instanceof Map)
        return Array.from(a3.keys());
      if (!(typeof Set !== "undefined" && a3 instanceof Set)) {
        if (ha(a3) || typeof a3 === "string") {
          var b3 = [];
          a3 = a3.length;
          for (var c4 = 0; c4 < a3; c4++) b3.push(c4);
          return b3;
        }
        b3 = [];
        c4 = 0;
        for (const d3 in a3) b3[c4++] = d3;
        return b3;
      }
    }
  }
  function nc(a3, b3) {
    if (a3.forEach && typeof a3.forEach == "function")
      a3.forEach(b3, undefined);
    else if (ha(a3) || typeof a3 === "string")
      Array.prototype.forEach.call(a3, b3, undefined);
    else
      for (var c4 = mc(a3), d3 = lc(a3), e5 = d3.length, f3 = 0; f3 < e5; f3++)
        b3.call(undefined, d3[f3], c4 && c4[f3], a3);
  }
  var oc = RegExp(
    "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
  );
  function pc(a3, b3) {
    if (a3) {
      a3 = a3.split("&");
      for (var c4 = 0; c4 < a3.length; c4++) {
        var d3 = a3[c4].indexOf("="),
          e5 = null;
        if (0 <= d3) {
          var f3 = a3[c4].substring(0, d3);
          e5 = a3[c4].substring(d3 + 1);
        } else f3 = a3[c4];
        b3(f3, e5 ? decodeURIComponent(e5.replace(/\+/g, " ")) : "");
      }
    }
  }
  function T2(a3) {
    this.g = this.o = this.j = "";
    this.s = null;
    this.m = this.l = "";
    this.h = false;
    if (a3 instanceof T2) {
      this.h = a3.h;
      qc(this, a3.j);
      this.o = a3.o;
      this.g = a3.g;
      rc(this, a3.s);
      this.l = a3.l;
      var b3 = a3.i;
      var c4 = new sc();
      c4.i = b3.i;
      b3.g && ((c4.g = new Map(b3.g)), (c4.h = b3.h));
      tc(this, c4);
      this.m = a3.m;
    } else
      a3 && (b3 = String(a3).match(oc))
        ? ((this.h = false),
          qc(this, b3[1] || "", true),
          (this.o = uc(b3[2] || "")),
          (this.g = uc(b3[3] || "", true)),
          rc(this, b3[4]),
          (this.l = uc(b3[5] || "", true)),
          tc(this, b3[6] || "", true),
          (this.m = uc(b3[7] || "")))
        : ((this.h = false), (this.i = new sc(null, this.h)));
  }
  T2.prototype.toString = function () {
    var a3 = [],
      b3 = this.j;
    b3 && a3.push(vc(b3, wc, true), ":");
    var c4 = this.g;
    if (c4 || b3 == "file")
      a3.push("//"),
        (b3 = this.o) && a3.push(vc(b3, wc, true), "@"),
        a3.push(
          encodeURIComponent(String(c4)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")
        ),
        (c4 = this.s),
        c4 != null && a3.push(":", String(c4));
    if ((c4 = this.l))
      this.g && c4.charAt(0) != "/" && a3.push("/"),
        a3.push(vc(c4, c4.charAt(0) == "/" ? xc : yc, true));
    (c4 = this.i.toString()) && a3.push("?", c4);
    (c4 = this.m) && a3.push("#", vc(c4, zc));
    return a3.join("");
  };
  function N2(a3) {
    return new T2(a3);
  }
  function qc(a3, b3, c4) {
    a3.j = c4 ? uc(b3, true) : b3;
    a3.j && (a3.j = a3.j.replace(/:$/, ""));
  }
  function rc(a3, b3) {
    if (b3) {
      b3 = Number(b3);
      if (isNaN(b3) || 0 > b3) throw Error("Bad port number " + b3);
      a3.s = b3;
    } else a3.s = null;
  }
  function tc(a3, b3, c4) {
    b3 instanceof sc
      ? ((a3.i = b3), Ac(a3.i, a3.h))
      : (c4 || (b3 = vc(b3, Bc)), (a3.i = new sc(b3, a3.h)));
  }
  function S3(a3, b3, c4) {
    a3.i.set(b3, c4);
  }
  function Ib(a3) {
    S3(
      a3,
      "zx",
      Math.floor(2147483648 * Math.random()).toString(36) +
        Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(
          36
        )
    );
    return a3;
  }
  function uc(a3, b3) {
    return a3
      ? b3
        ? decodeURI(a3.replace(/%25/g, "%2525"))
        : decodeURIComponent(a3)
      : "";
  }
  function vc(a3, b3, c4) {
    return typeof a3 === "string"
      ? ((a3 = encodeURI(a3).replace(b3, Cc)),
        c4 && (a3 = a3.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
        a3)
      : null;
  }
  function Cc(a3) {
    a3 = a3.charCodeAt(0);
    return "%" + ((a3 >> 4) & 15).toString(16) + (a3 & 15).toString(16);
  }
  var wc = /[#\/\?@]/g,
    yc = /[#\?:]/g,
    xc = /[#\?]/g,
    Bc = /[#\?@]/g,
    zc = /#/g;
  function sc(a3, b3) {
    this.h = this.g = null;
    this.i = a3 || null;
    this.j = !!b3;
  }
  function U(a3) {
    a3.g ||
      ((a3.g = new Map()),
      (a3.h = 0),
      a3.i &&
        pc(a3.i, function (b3, c4) {
          a3.add(decodeURIComponent(b3.replace(/\+/g, " ")), c4);
        }));
  }
  h3 = sc.prototype;
  h3.add = function (a3, b3) {
    U(this);
    this.i = null;
    a3 = V2(this, a3);
    var c4 = this.g.get(a3);
    c4 || this.g.set(a3, (c4 = []));
    c4.push(b3);
    this.h += 1;
    return this;
  };
  function Dc(a3, b3) {
    U(a3);
    b3 = V2(a3, b3);
    a3.g.has(b3) &&
      ((a3.i = null), (a3.h -= a3.g.get(b3).length), a3.g.delete(b3));
  }
  function Ec(a3, b3) {
    U(a3);
    b3 = V2(a3, b3);
    return a3.g.has(b3);
  }
  h3.forEach = function (a3, b3) {
    U(this);
    this.g.forEach(function (c4, d3) {
      c4.forEach(function (e5) {
        a3.call(b3, e5, d3, this);
      }, this);
    }, this);
  };
  h3.na = function () {
    U(this);
    const a3 = Array.from(this.g.values()),
      b3 = Array.from(this.g.keys()),
      c4 = [];
    for (let d3 = 0; d3 < b3.length; d3++) {
      const e5 = a3[d3];
      for (let f3 = 0; f3 < e5.length; f3++) c4.push(b3[d3]);
    }
    return c4;
  };
  h3.V = function (a3) {
    U(this);
    let b3 = [];
    if (typeof a3 === "string")
      Ec(this, a3) && (b3 = b3.concat(this.g.get(V2(this, a3))));
    else {
      a3 = Array.from(this.g.values());
      for (let c4 = 0; c4 < a3.length; c4++) b3 = b3.concat(a3[c4]);
    }
    return b3;
  };
  h3.set = function (a3, b3) {
    U(this);
    this.i = null;
    a3 = V2(this, a3);
    Ec(this, a3) && (this.h -= this.g.get(a3).length);
    this.g.set(a3, [b3]);
    this.h += 1;
    return this;
  };
  h3.get = function (a3, b3) {
    if (!a3) return b3;
    a3 = this.V(a3);
    return 0 < a3.length ? String(a3[0]) : b3;
  };
  function Lb(a3, b3, c4) {
    Dc(a3, b3);
    0 < c4.length &&
      ((a3.i = null), a3.g.set(V2(a3, b3), la(c4)), (a3.h += c4.length));
  }
  h3.toString = function () {
    if (this.i) return this.i;
    if (!this.g) return "";
    const a3 = [],
      b3 = Array.from(this.g.keys());
    for (var c4 = 0; c4 < b3.length; c4++) {
      var d3 = b3[c4];
      const f3 = encodeURIComponent(String(d3)),
        g2 = this.V(d3);
      for (d3 = 0; d3 < g2.length; d3++) {
        var e5 = f3;
        g2[d3] !== "" && (e5 += "=" + encodeURIComponent(String(g2[d3])));
        a3.push(e5);
      }
    }
    return (this.i = a3.join("&"));
  };
  function V2(a3, b3) {
    b3 = String(b3);
    a3.j && (b3 = b3.toLowerCase());
    return b3;
  }
  function Ac(a3, b3) {
    b3 &&
      !a3.j &&
      (U(a3),
      (a3.i = null),
      a3.g.forEach(function (c4, d3) {
        var e5 = d3.toLowerCase();
        d3 != e5 && (Dc(this, d3), Lb(this, e5, c4));
      }, a3));
    a3.j = b3;
  }
  function Fc(a3, b3) {
    const c4 = new vb();
    if (k2.Image) {
      const d3 = new Image();
      d3.onload = ka(W, c4, "TestLoadImage: loaded", true, b3, d3);
      d3.onerror = ka(W, c4, "TestLoadImage: error", false, b3, d3);
      d3.onabort = ka(W, c4, "TestLoadImage: abort", false, b3, d3);
      d3.ontimeout = ka(W, c4, "TestLoadImage: timeout", false, b3, d3);
      k2.setTimeout(function () {
        if (d3.ontimeout) d3.ontimeout();
      }, 1e4);
      d3.src = a3;
    } else b3(false);
  }
  function Gc(a3, b3) {
    const c4 = new vb(),
      d3 = new AbortController(),
      e5 = setTimeout(() => {
        d3.abort();
        W(c4, "TestPingServer: timeout", false, b3);
      }, 1e4);
    fetch(a3, { signal: d3.signal })
      .then((f3) => {
        clearTimeout(e5);
        f3.ok
          ? W(c4, "TestPingServer: ok", true, b3)
          : W(c4, "TestPingServer: server error", false, b3);
      })
      .catch(() => {
        clearTimeout(e5);
        W(c4, "TestPingServer: error", false, b3);
      });
  }
  function W(a3, b3, c4, d3, e5) {
    try {
      e5 &&
        ((e5.onload = null),
        (e5.onerror = null),
        (e5.onabort = null),
        (e5.ontimeout = null)),
        d3(c4);
    } catch (f3) {}
  }
  function Hc() {
    this.g = new jb();
  }
  function Ic(a3, b3, c4) {
    const d3 = c4 || "";
    try {
      nc(a3, function (e5, f3) {
        let g2 = e5;
        n5(e5) && (g2 = hb(e5));
        b3.push(d3 + f3 + "=" + encodeURIComponent(g2));
      });
    } catch (e5) {
      throw (b3.push(d3 + "type=" + encodeURIComponent("_badmap")), e5);
    }
  }
  function Jc(a3) {
    this.l = a3.Ub || null;
    this.j = a3.eb || false;
  }
  r7(Jc, kb);
  Jc.prototype.g = function () {
    return new Kc(this.l, this.j);
  };
  Jc.prototype.i = (function (a3) {
    return function () {
      return a3;
    };
  })({});
  function Kc(a3, b3) {
    E2.call(this);
    this.D = a3;
    this.o = b3;
    this.m = undefined;
    this.status = this.readyState = 0;
    this.responseType =
      this.responseText =
      this.response =
      this.statusText =
        "";
    this.onreadystatechange = null;
    this.u = new Headers();
    this.h = null;
    this.B = "GET";
    this.A = "";
    this.g = false;
    this.v = this.j = this.l = null;
  }
  r7(Kc, E2);
  h3 = Kc.prototype;
  h3.open = function (a3, b3) {
    if (this.readyState != 0)
      throw (this.abort(), Error("Error reopening a connection"));
    this.B = a3;
    this.A = b3;
    this.readyState = 1;
    Lc(this);
  };
  h3.send = function (a3) {
    if (this.readyState != 1)
      throw (this.abort(), Error("need to call open() first. "));
    this.g = true;
    const b3 = {
      headers: this.u,
      method: this.B,
      credentials: this.m,
      cache: undefined,
    };
    a3 && (b3.body = a3);
    (this.D || k2)
      .fetch(new Request(this.A, b3))
      .then(this.Sa.bind(this), this.ga.bind(this));
  };
  h3.abort = function () {
    this.response = this.responseText = "";
    this.u = new Headers();
    this.status = 0;
    this.j && this.j.cancel("Request was aborted.").catch(() => {});
    1 <= this.readyState &&
      this.g &&
      this.readyState != 4 &&
      ((this.g = false), Mc(this));
    this.readyState = 0;
  };
  h3.Sa = function (a3) {
    if (
      this.g &&
      ((this.l = a3),
      this.h ||
        ((this.status = this.l.status),
        (this.statusText = this.l.statusText),
        (this.h = a3.headers),
        (this.readyState = 2),
        Lc(this)),
      this.g && ((this.readyState = 3), Lc(this), this.g))
    )
      if (this.responseType === "arraybuffer")
        a3.arrayBuffer().then(this.Qa.bind(this), this.ga.bind(this));
      else if (typeof k2.ReadableStream !== "undefined" && "body" in a3) {
        this.j = a3.body.getReader();
        if (this.o) {
          if (this.responseType)
            throw Error(
              'responseType must be empty for "streamBinaryChunks" mode responses.'
            );
          this.response = [];
        } else
          (this.response = this.responseText = ""),
            (this.v = new TextDecoder());
        Nc(this);
      } else a3.text().then(this.Ra.bind(this), this.ga.bind(this));
  };
  function Nc(a3) {
    a3.j.read().then(a3.Pa.bind(a3)).catch(a3.ga.bind(a3));
  }
  h3.Pa = function (a3) {
    if (this.g) {
      if (this.o && a3.value) this.response.push(a3.value);
      else if (!this.o) {
        var b3 = a3.value ? a3.value : new Uint8Array(0);
        if ((b3 = this.v.decode(b3, { stream: !a3.done })))
          this.response = this.responseText += b3;
      }
      a3.done ? Mc(this) : Lc(this);
      this.readyState == 3 && Nc(this);
    }
  };
  h3.Ra = function (a3) {
    this.g && ((this.response = this.responseText = a3), Mc(this));
  };
  h3.Qa = function (a3) {
    this.g && ((this.response = a3), Mc(this));
  };
  h3.ga = function () {
    this.g && Mc(this);
  };
  function Mc(a3) {
    a3.readyState = 4;
    a3.l = null;
    a3.j = null;
    a3.v = null;
    Lc(a3);
  }
  h3.setRequestHeader = function (a3, b3) {
    this.u.append(a3, b3);
  };
  h3.getResponseHeader = function (a3) {
    return this.h ? this.h.get(a3.toLowerCase()) || "" : "";
  };
  h3.getAllResponseHeaders = function () {
    if (!this.h) return "";
    const a3 = [],
      b3 = this.h.entries();
    for (var c4 = b3.next(); !c4.done; )
      (c4 = c4.value), a3.push(c4[0] + ": " + c4[1]), (c4 = b3.next());
    return a3.join(`\r
`);
  };
  function Lc(a3) {
    a3.onreadystatechange && a3.onreadystatechange.call(a3);
  }
  Object.defineProperty(Kc.prototype, "withCredentials", {
    get: function () {
      return this.m === "include";
    },
    set: function (a3) {
      this.m = a3 ? "include" : "same-origin";
    },
  });
  function Oc(a3) {
    let b3 = "";
    qa(a3, function (c4, d3) {
      b3 += d3;
      b3 += ":";
      b3 += c4;
      b3 += `\r
`;
    });
    return b3;
  }
  function Pc(a3, b3, c4) {
    a: {
      for (d3 in c4) {
        var d3 = false;
        break a;
      }
      d3 = true;
    }
    d3 ||
      ((c4 = Oc(c4)),
      typeof a3 === "string"
        ? c4 != null && encodeURIComponent(String(c4))
        : S3(a3, b3, c4));
  }
  function X(a3) {
    E2.call(this);
    this.headers = new Map();
    this.o = a3 || null;
    this.h = false;
    this.v = this.g = null;
    this.D = "";
    this.m = 0;
    this.l = "";
    this.j = this.B = this.u = this.A = false;
    this.I = null;
    this.H = "";
    this.J = false;
  }
  r7(X, E2);
  var Qc = /^https?$/i,
    Rc = ["POST", "PUT"];
  h3 = X.prototype;
  h3.Ha = function (a3) {
    this.J = a3;
  };
  h3.ea = function (a3, b3, c4, d3) {
    if (this.g)
      throw Error(
        "[goog.net.XhrIo] Object is active with another request=" +
          this.D +
          "; newUri=" +
          a3
      );
    b3 = b3 ? b3.toUpperCase() : "GET";
    this.D = a3;
    this.l = "";
    this.m = 0;
    this.A = false;
    this.h = true;
    this.g = this.o ? this.o.g() : Cb.g();
    this.v = this.o ? lb(this.o) : lb(Cb);
    this.g.onreadystatechange = p3(this.Ea, this);
    try {
      (this.B = true), this.g.open(b3, String(a3), true), (this.B = false);
    } catch (f3) {
      Sc(this, f3);
      return;
    }
    a3 = c4 || "";
    c4 = new Map(this.headers);
    if (d3)
      if (Object.getPrototypeOf(d3) === Object.prototype)
        for (var e5 in d3) c4.set(e5, d3[e5]);
      else if (typeof d3.keys === "function" && typeof d3.get === "function")
        for (const f3 of d3.keys()) c4.set(f3, d3.get(f3));
      else throw Error("Unknown input type for opt_headers: " + String(d3));
    d3 = Array.from(c4.keys()).find((f3) => f3.toLowerCase() == "content-type");
    e5 = k2.FormData && a3 instanceof k2.FormData;
    !(0 <= Array.prototype.indexOf.call(Rc, b3, undefined)) ||
      d3 ||
      e5 ||
      c4.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    for (const [f3, g2] of c4) this.g.setRequestHeader(f3, g2);
    this.H && (this.g.responseType = this.H);
    "withCredentials" in this.g &&
      this.g.withCredentials !== this.J &&
      (this.g.withCredentials = this.J);
    try {
      Tc(this), (this.u = true), this.g.send(a3), (this.u = false);
    } catch (f3) {
      Sc(this, f3);
    }
  };
  function Sc(a3, b3) {
    a3.h = false;
    a3.g && ((a3.j = true), a3.g.abort(), (a3.j = false));
    a3.l = b3;
    a3.m = 5;
    Uc(a3);
    Vc(a3);
  }
  function Uc(a3) {
    a3.A || ((a3.A = true), F(a3, "complete"), F(a3, "error"));
  }
  h3.abort = function (a3) {
    this.g &&
      this.h &&
      ((this.h = false),
      (this.j = true),
      this.g.abort(),
      (this.j = false),
      (this.m = a3 || 7),
      F(this, "complete"),
      F(this, "abort"),
      Vc(this));
  };
  h3.N = function () {
    this.g &&
      (this.h &&
        ((this.h = false), (this.j = true), this.g.abort(), (this.j = false)),
      Vc(this, true));
    X.aa.N.call(this);
  };
  h3.Ea = function () {
    this.s || (this.B || this.u || this.j ? Wc(this) : this.bb());
  };
  h3.bb = function () {
    Wc(this);
  };
  function Wc(a3) {
    if (
      a3.h &&
      typeof fa != "undefined" &&
      (!a3.v[1] || P2(a3) != 4 || a3.Z() != 2)
    ) {
      if (a3.u && P2(a3) == 4) bb(a3.Ea, 0, a3);
      else if ((F(a3, "readystatechange"), P2(a3) == 4)) {
        a3.h = false;
        try {
          const g2 = a3.Z();
          a: switch (g2) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
              var b3 = true;
              break a;
            default:
              b3 = false;
          }
          var c4;
          if (!(c4 = b3)) {
            var d3;
            if ((d3 = g2 === 0)) {
              var e5 = String(a3.D).match(oc)[1] || null;
              !e5 &&
                k2.self &&
                k2.self.location &&
                (e5 = k2.self.location.protocol.slice(0, -1));
              d3 = !Qc.test(e5 ? e5.toLowerCase() : "");
            }
            c4 = d3;
          }
          if (c4) F(a3, "complete"), F(a3, "success");
          else {
            a3.m = 6;
            try {
              var f3 = 2 < P2(a3) ? a3.g.statusText : "";
            } catch (m2) {
              f3 = "";
            }
            a3.l = f3 + " [" + a3.Z() + "]";
            Uc(a3);
          }
        } finally {
          Vc(a3);
        }
      }
    }
  }
  function Vc(a3, b3) {
    if (a3.g) {
      Tc(a3);
      const c4 = a3.g,
        d3 = a3.v[0] ? () => {} : null;
      a3.g = null;
      a3.v = null;
      b3 || F(a3, "ready");
      try {
        c4.onreadystatechange = d3;
      } catch (e5) {}
    }
  }
  function Tc(a3) {
    a3.I && (k2.clearTimeout(a3.I), (a3.I = null));
  }
  h3.isActive = function () {
    return !!this.g;
  };
  function P2(a3) {
    return a3.g ? a3.g.readyState : 0;
  }
  h3.Z = function () {
    try {
      return 2 < P2(this) ? this.g.status : -1;
    } catch (a3) {
      return -1;
    }
  };
  h3.oa = function () {
    try {
      return this.g ? this.g.responseText : "";
    } catch (a3) {
      return "";
    }
  };
  h3.Oa = function (a3) {
    if (this.g) {
      var b3 = this.g.responseText;
      a3 && b3.indexOf(a3) == 0 && (b3 = b3.substring(a3.length));
      return ib(b3);
    }
  };
  function Nb(a3) {
    try {
      if (!a3.g) return null;
      if ("response" in a3.g) return a3.g.response;
      switch (a3.H) {
        case "":
        case "text":
          return a3.g.responseText;
        case "arraybuffer":
          if ("mozResponseArrayBuffer" in a3.g)
            return a3.g.mozResponseArrayBuffer;
      }
      return null;
    } catch (b3) {
      return null;
    }
  }
  function Vb(a3) {
    const b3 = {};
    a3 = (a3.g && 2 <= P2(a3) ? a3.g.getAllResponseHeaders() || "" : "")
      .split(`\r
`);
    for (let d3 = 0; d3 < a3.length; d3++) {
      if (t4(a3[d3])) continue;
      var c4 = va(a3[d3]);
      const e5 = c4[0];
      c4 = c4[1];
      if (typeof c4 !== "string") continue;
      c4 = c4.trim();
      const f3 = b3[e5] || [];
      b3[e5] = f3;
      f3.push(c4);
    }
    ra(b3, function (d3) {
      return d3.join(", ");
    });
  }
  h3.Ba = function () {
    return this.m;
  };
  h3.Ka = function () {
    return typeof this.l === "string" ? this.l : String(this.l);
  };
  function Xc(a3, b3, c4) {
    return c4 && c4.internalChannelParams
      ? c4.internalChannelParams[a3] || b3
      : b3;
  }
  function Yc(a3) {
    this.Aa = 0;
    this.i = [];
    this.j = new vb();
    this.ia =
      this.qa =
      this.I =
      this.W =
      this.g =
      this.ya =
      this.D =
      this.H =
      this.m =
      this.S =
      this.o =
        null;
    this.Ya = this.U = 0;
    this.Va = Xc("failFast", false, a3);
    this.F = this.C = this.u = this.s = this.l = null;
    this.X = true;
    this.za = this.T = -1;
    this.Y = this.v = this.B = 0;
    this.Ta = Xc("baseRetryDelayMs", 5000, a3);
    this.cb = Xc("retryDelaySeedMs", 1e4, a3);
    this.Wa = Xc("forwardChannelMaxRetries", 2, a3);
    this.wa = Xc("forwardChannelRequestTimeoutMs", 20000, a3);
    this.pa = (a3 && a3.xmlHttpFactory) || undefined;
    this.Xa = (a3 && a3.Tb) || undefined;
    this.Ca = (a3 && a3.useFetchStreams) || false;
    this.L = undefined;
    this.J = (a3 && a3.supportsCrossDomainXhr) || false;
    this.K = "";
    this.h = new ic(a3 && a3.concurrentRequestLimit);
    this.Da = new Hc();
    this.P = (a3 && a3.fastHandshake) || false;
    this.O = (a3 && a3.encodeInitMessageHeaders) || false;
    this.P && this.O && (this.O = false);
    this.Ua = (a3 && a3.Rb) || false;
    a3 && a3.xa && this.j.xa();
    a3 && a3.forceLongPolling && (this.X = false);
    this.ba = (!this.P && this.X && a3 && a3.detectBufferingProxy) || false;
    this.ja = undefined;
    a3 &&
      a3.longPollingTimeout &&
      0 < a3.longPollingTimeout &&
      (this.ja = a3.longPollingTimeout);
    this.ca = undefined;
    this.R = 0;
    this.M = false;
    this.ka = this.A = null;
  }
  h3 = Yc.prototype;
  h3.la = 8;
  h3.G = 1;
  h3.connect = function (a3, b3, c4, d3) {
    K(0);
    this.W = a3;
    this.H = b3 || {};
    c4 && d3 !== undefined && ((this.H.OSID = c4), (this.H.OAID = d3));
    this.F = this.X;
    this.I = cc(this, null, this.W);
    fc(this);
  };
  function gc(a3) {
    Zc(a3);
    if (a3.G == 3) {
      var b3 = a3.U++,
        c4 = N2(a3.I);
      S3(c4, "SID", a3.K);
      S3(c4, "RID", b3);
      S3(c4, "TYPE", "terminate");
      $c(a3, c4);
      b3 = new M2(a3, a3.j, b3);
      b3.L = 2;
      b3.v = Ib(N2(c4));
      c4 = false;
      if (k2.navigator && k2.navigator.sendBeacon)
        try {
          c4 = k2.navigator.sendBeacon(b3.v.toString(), "");
        } catch (d3) {}
      !c4 && k2.Image && ((new Image().src = b3.v), (c4 = true));
      c4 || ((b3.g = Mb(b3.j, null)), b3.g.ea(b3.v));
      b3.F = Date.now();
      Kb(b3);
    }
    ad(a3);
  }
  function Zb(a3) {
    a3.g && (Tb(a3), a3.g.cancel(), (a3.g = null));
  }
  function Zc(a3) {
    Zb(a3);
    a3.u && (k2.clearTimeout(a3.u), (a3.u = null));
    Yb(a3);
    a3.h.cancel();
    a3.s && (typeof a3.s === "number" && k2.clearTimeout(a3.s), (a3.s = null));
  }
  function fc(a3) {
    if (!jc(a3.h) && !a3.s) {
      a3.s = true;
      var b3 = a3.Ga;
      x2 || Ea();
      y3 || (x2(), (y3 = true));
      za.add(b3, a3);
      a3.B = 0;
    }
  }
  function bd(a3, b3) {
    if (ac(a3.h) >= a3.h.j - (a3.s ? 1 : 0)) return false;
    if (a3.s) return (a3.i = b3.D.concat(a3.i)), true;
    if (a3.G == 1 || a3.G == 2 || a3.B >= (a3.Va ? 0 : a3.Wa)) return false;
    a3.s = ub(p3(a3.Ga, a3, b3), cd(a3, a3.B));
    a3.B++;
    return true;
  }
  h3.Ga = function (a3) {
    if (this.s)
      if (((this.s = null), this.G == 1)) {
        if (!a3) {
          this.U = Math.floor(1e5 * Math.random());
          a3 = this.U++;
          const e5 = new M2(this, this.j, a3);
          let f3 = this.o;
          this.S && (f3 ? ((f3 = sa(f3)), ua(f3, this.S)) : (f3 = this.S));
          this.m !== null || this.O || ((e5.H = f3), (f3 = null));
          if (this.P)
            a: {
              var b3 = 0;
              for (var c4 = 0; c4 < this.i.length; c4++) {
                b: {
                  var d3 = this.i[c4];
                  if (
                    "__data__" in d3.map &&
                    ((d3 = d3.map.__data__), typeof d3 === "string")
                  ) {
                    d3 = d3.length;
                    break b;
                  }
                  d3 = undefined;
                }
                if (d3 === undefined) break;
                b3 += d3;
                if (4096 < b3) {
                  b3 = c4;
                  break a;
                }
                if (b3 === 4096 || c4 === this.i.length - 1) {
                  b3 = c4 + 1;
                  break a;
                }
              }
              b3 = 1000;
            }
          else b3 = 1000;
          b3 = dd(this, e5, b3);
          c4 = N2(this.I);
          S3(c4, "RID", a3);
          S3(c4, "CVER", 22);
          this.D && S3(c4, "X-HTTP-Session-Id", this.D);
          $c(this, c4);
          f3 &&
            (this.O
              ? (b3 =
                  "headers=" + encodeURIComponent(String(Oc(f3))) + "&" + b3)
              : this.m && Pc(c4, this.m, f3));
          bc(this.h, e5);
          this.Ua && S3(c4, "TYPE", "init");
          this.P
            ? (S3(c4, "$req", b3),
              S3(c4, "SID", "null"),
              (e5.T = true),
              Hb(e5, c4, null))
            : Hb(e5, c4, b3);
          this.G = 2;
        }
      } else
        this.G == 3 &&
          (a3 ? ed(this, a3) : this.i.length == 0 || jc(this.h) || ed(this));
  };
  function ed(a3, b3) {
    var c4;
    b3 ? (c4 = b3.l) : (c4 = a3.U++);
    const d3 = N2(a3.I);
    S3(d3, "SID", a3.K);
    S3(d3, "RID", c4);
    S3(d3, "AID", a3.T);
    $c(a3, d3);
    a3.m && a3.o && Pc(d3, a3.m, a3.o);
    c4 = new M2(a3, a3.j, c4, a3.B + 1);
    a3.m === null && (c4.H = a3.o);
    b3 && (a3.i = b3.D.concat(a3.i));
    b3 = dd(a3, c4, 1000);
    c4.I = Math.round(0.5 * a3.wa) + Math.round(0.5 * a3.wa * Math.random());
    bc(a3.h, c4);
    Hb(c4, d3, b3);
  }
  function $c(a3, b3) {
    a3.H &&
      qa(a3.H, function (c4, d3) {
        S3(b3, d3, c4);
      });
    a3.l &&
      nc({}, function (c4, d3) {
        S3(b3, d3, c4);
      });
  }
  function dd(a3, b3, c4) {
    c4 = Math.min(a3.i.length, c4);
    var d3 = a3.l ? p3(a3.l.Na, a3.l, a3) : null;
    a: {
      var e5 = a3.i;
      let f3 = -1;
      for (;;) {
        const g2 = ["count=" + c4];
        f3 == -1
          ? 0 < c4
            ? ((f3 = e5[0].g), g2.push("ofs=" + f3))
            : (f3 = 0)
          : g2.push("ofs=" + f3);
        let m2 = true;
        for (let q = 0; q < c4; q++) {
          let l3 = e5[q].g;
          const v2 = e5[q].map;
          l3 -= f3;
          if (0 > l3) (f3 = Math.max(0, e5[q].g - 100)), (m2 = false);
          else
            try {
              Ic(v2, g2, "req" + l3 + "_");
            } catch (w2) {
              d3 && d3(v2);
            }
        }
        if (m2) {
          d3 = g2.join("&");
          break a;
        }
      }
    }
    a3 = a3.i.splice(0, c4);
    b3.D = a3;
    return d3;
  }
  function ec(a3) {
    if (!a3.g && !a3.u) {
      a3.Y = 1;
      var b3 = a3.Fa;
      x2 || Ea();
      y3 || (x2(), (y3 = true));
      za.add(b3, a3);
      a3.v = 0;
    }
  }
  function $b(a3) {
    if (a3.g || a3.u || 3 <= a3.v) return false;
    a3.Y++;
    a3.u = ub(p3(a3.Fa, a3), cd(a3, a3.v));
    a3.v++;
    return true;
  }
  h3.Fa = function () {
    this.u = null;
    fd(this);
    if (this.ba && !(this.M || this.g == null || 0 >= this.R)) {
      var a3 = 2 * this.R;
      this.j.info("BP detection timer enabled: " + a3);
      this.A = ub(p3(this.ab, this), a3);
    }
  };
  h3.ab = function () {
    this.A &&
      ((this.A = null),
      this.j.info("BP detection timeout reached."),
      this.j.info("Buffering proxy detected and switch to long-polling!"),
      (this.F = false),
      (this.M = true),
      K(10),
      Zb(this),
      fd(this));
  };
  function Tb(a3) {
    a3.A != null && (k2.clearTimeout(a3.A), (a3.A = null));
  }
  function fd(a3) {
    a3.g = new M2(a3, a3.j, "rpc", a3.Y);
    a3.m === null && (a3.g.H = a3.o);
    a3.g.O = 0;
    var b3 = N2(a3.qa);
    S3(b3, "RID", "rpc");
    S3(b3, "SID", a3.K);
    S3(b3, "AID", a3.T);
    S3(b3, "CI", a3.F ? "0" : "1");
    !a3.F && a3.ja && S3(b3, "TO", a3.ja);
    S3(b3, "TYPE", "xmlhttp");
    $c(a3, b3);
    a3.m && a3.o && Pc(b3, a3.m, a3.o);
    a3.L && (a3.g.I = a3.L);
    var c4 = a3.g;
    a3 = a3.ia;
    c4.L = 1;
    c4.v = Ib(N2(b3));
    c4.m = null;
    c4.P = true;
    Jb(c4, a3);
  }
  h3.Za = function () {
    this.C != null && ((this.C = null), Zb(this), $b(this), K(19));
  };
  function Yb(a3) {
    a3.C != null && (k2.clearTimeout(a3.C), (a3.C = null));
  }
  function Ub(a3, b3) {
    var c4 = null;
    if (a3.g == b3) {
      Yb(a3);
      Tb(a3);
      a3.g = null;
      var d3 = 2;
    } else if (Xb(a3.h, b3)) (c4 = b3.D), dc(a3.h, b3), (d3 = 1);
    else return;
    if (a3.G != 0) {
      if (b3.o)
        if (d3 == 1) {
          c4 = b3.m ? b3.m.length : 0;
          b3 = Date.now() - b3.F;
          var e5 = a3.B;
          d3 = qb();
          F(d3, new tb(d3, c4));
          fc(a3);
        } else ec(a3);
      else if (
        ((e5 = b3.s),
        e5 == 3 ||
          (e5 == 0 && 0 < b3.X) ||
          !((d3 == 1 && bd(a3, b3)) || (d3 == 2 && $b(a3))))
      )
        switch (
          (c4 && 0 < c4.length && ((b3 = a3.h), (b3.i = b3.i.concat(c4))), e5)
        ) {
          case 1:
            R2(a3, 5);
            break;
          case 4:
            R2(a3, 10);
            break;
          case 3:
            R2(a3, 6);
            break;
          default:
            R2(a3, 2);
        }
    }
  }
  function cd(a3, b3) {
    let c4 = a3.Ta + Math.floor(Math.random() * a3.cb);
    a3.isActive() || (c4 *= 2);
    return c4 * b3;
  }
  function R2(a3, b3) {
    a3.j.info("Error code " + b3);
    if (b3 == 2) {
      var c4 = p3(a3.fb, a3),
        d3 = a3.Xa;
      const e5 = !d3;
      d3 = new T2(d3 || "//www.google.com/images/cleardot.gif");
      (k2.location && k2.location.protocol == "http") || qc(d3, "https");
      Ib(d3);
      e5 ? Fc(d3.toString(), c4) : Gc(d3.toString(), c4);
    } else K(2);
    a3.G = 0;
    a3.l && a3.l.sa(b3);
    ad(a3);
    Zc(a3);
  }
  h3.fb = function (a3) {
    a3
      ? (this.j.info("Successfully pinged google.com"), K(2))
      : (this.j.info("Failed to ping google.com"), K(1));
  };
  function ad(a3) {
    a3.G = 0;
    a3.ka = [];
    if (a3.l) {
      const b3 = kc(a3.h);
      if (b3.length != 0 || a3.i.length != 0)
        ma(a3.ka, b3),
          ma(a3.ka, a3.i),
          (a3.h.i.length = 0),
          la(a3.i),
          (a3.i.length = 0);
      a3.l.ra();
    }
  }
  function cc(a3, b3, c4) {
    var d3 = c4 instanceof T2 ? N2(c4) : new T2(c4);
    if (d3.g != "") b3 && (d3.g = b3 + "." + d3.g), rc(d3, d3.s);
    else {
      var e5 = k2.location;
      d3 = e5.protocol;
      b3 = b3 ? b3 + "." + e5.hostname : e5.hostname;
      e5 = +e5.port;
      var f3 = new T2(null);
      d3 && qc(f3, d3);
      b3 && (f3.g = b3);
      e5 && rc(f3, e5);
      c4 && (f3.l = c4);
      d3 = f3;
    }
    c4 = a3.D;
    b3 = a3.ya;
    c4 && b3 && S3(d3, c4, b3);
    S3(d3, "VER", a3.la);
    $c(a3, d3);
    return d3;
  }
  function Mb(a3, b3, c4) {
    if (b3 && !a3.J)
      throw Error("Can't create secondary domain capable XhrIo object.");
    b3 = a3.Ca && !a3.pa ? new X(new Jc({ eb: c4 })) : new X(a3.pa);
    b3.Ha(a3.J);
    return b3;
  }
  h3.isActive = function () {
    return !!this.l && this.l.isActive(this);
  };
  function gd() {}
  h3 = gd.prototype;
  h3.ua = function () {};
  h3.ta = function () {};
  h3.sa = function () {};
  h3.ra = function () {};
  h3.isActive = function () {
    return true;
  };
  h3.Na = function () {};
  function hd() {}
  hd.prototype.g = function (a3, b3) {
    return new Y(a3, b3);
  };
  function Y(a3, b3) {
    E2.call(this);
    this.g = new Yc(b3);
    this.l = a3;
    this.h = (b3 && b3.messageUrlParams) || null;
    a3 = (b3 && b3.messageHeaders) || null;
    b3 &&
      b3.clientProtocolHeaderRequired &&
      (a3
        ? (a3["X-Client-Protocol"] = "webchannel")
        : (a3 = { "X-Client-Protocol": "webchannel" }));
    this.g.o = a3;
    a3 = (b3 && b3.initMessageHeaders) || null;
    b3 &&
      b3.messageContentType &&
      (a3
        ? (a3["X-WebChannel-Content-Type"] = b3.messageContentType)
        : (a3 = { "X-WebChannel-Content-Type": b3.messageContentType }));
    b3 &&
      b3.va &&
      (a3
        ? (a3["X-WebChannel-Client-Profile"] = b3.va)
        : (a3 = { "X-WebChannel-Client-Profile": b3.va }));
    this.g.S = a3;
    (a3 = b3 && b3.Sb) && !t4(a3) && (this.g.m = a3);
    this.v = (b3 && b3.supportsCrossDomainXhr) || false;
    this.u = (b3 && b3.sendRawJson) || false;
    (b3 = b3 && b3.httpSessionIdParam) &&
      !t4(b3) &&
      ((this.g.D = b3),
      (a3 = this.h),
      a3 !== null && b3 in a3 && ((a3 = this.h), b3 in a3 && delete a3[b3]));
    this.j = new Z(this);
  }
  r7(Y, E2);
  Y.prototype.m = function () {
    this.g.l = this.j;
    this.v && (this.g.J = true);
    this.g.connect(this.l, this.h || undefined);
  };
  Y.prototype.close = function () {
    gc(this.g);
  };
  Y.prototype.o = function (a3) {
    var b3 = this.g;
    if (typeof a3 === "string") {
      var c4 = {};
      c4.__data__ = a3;
      a3 = c4;
    } else this.u && ((c4 = {}), (c4.__data__ = hb(a3)), (a3 = c4));
    b3.i.push(new hc(b3.Ya++, a3));
    b3.G == 3 && fc(b3);
  };
  Y.prototype.N = function () {
    this.g.l = null;
    delete this.j;
    gc(this.g);
    delete this.g;
    Y.aa.N.call(this);
  };
  function id(a3) {
    nb.call(this);
    a3.__headers__ &&
      ((this.headers = a3.__headers__),
      (this.statusCode = a3.__status__),
      delete a3.__headers__,
      delete a3.__status__);
    var b3 = a3.__sm__;
    if (b3) {
      a: {
        for (const c4 in b3) {
          a3 = c4;
          break a;
        }
        a3 = undefined;
      }
      if ((this.i = a3))
        (a3 = this.i), (b3 = b3 !== null && a3 in b3 ? b3[a3] : undefined);
      this.data = b3;
    } else this.data = a3;
  }
  r7(id, nb);
  function jd() {
    ob.call(this);
    this.status = 1;
  }
  r7(jd, ob);
  function Z(a3) {
    this.g = a3;
  }
  r7(Z, gd);
  Z.prototype.ua = function () {
    F(this.g, "a");
  };
  Z.prototype.ta = function (a3) {
    F(this.g, new id(a3));
  };
  Z.prototype.sa = function (a3) {
    F(this.g, new jd());
  };
  Z.prototype.ra = function () {
    F(this.g, "b");
  };
  hd.prototype.createWebChannel = hd.prototype.g;
  Y.prototype.send = Y.prototype.o;
  Y.prototype.open = Y.prototype.m;
  Y.prototype.close = Y.prototype.close;
  createWebChannelTransport = webchannel_blob_es2018.createWebChannelTransport =
    function () {
      return new hd();
    };
  getStatEventTarget = webchannel_blob_es2018.getStatEventTarget = function () {
    return qb();
  };
  Event2 = webchannel_blob_es2018.Event = I2;
  Stat = webchannel_blob_es2018.Stat = {
    mb: 0,
    pb: 1,
    qb: 2,
    Jb: 3,
    Ob: 4,
    Lb: 5,
    Mb: 6,
    Kb: 7,
    Ib: 8,
    Nb: 9,
    PROXY: 10,
    NOPROXY: 11,
    Gb: 12,
    Cb: 13,
    Db: 14,
    Bb: 15,
    Eb: 16,
    Fb: 17,
    ib: 18,
    hb: 19,
    jb: 20,
  };
  Ab.NO_ERROR = 0;
  Ab.TIMEOUT = 8;
  Ab.HTTP_ERROR = 6;
  ErrorCode = webchannel_blob_es2018.ErrorCode = Ab;
  Bb.COMPLETE = "complete";
  EventType = webchannel_blob_es2018.EventType = Bb;
  mb.EventType = H2;
  H2.OPEN = "a";
  H2.CLOSE = "b";
  H2.ERROR = "c";
  H2.MESSAGE = "d";
  E2.prototype.listen = E2.prototype.K;
  WebChannel = webchannel_blob_es2018.WebChannel = mb;
  FetchXmlHttpFactory = webchannel_blob_es2018.FetchXmlHttpFactory = Jc;
  X.prototype.listenOnce = X.prototype.L;
  X.prototype.getLastError = X.prototype.Ka;
  X.prototype.getLastErrorCode = X.prototype.Ba;
  X.prototype.getStatus = X.prototype.Z;
  X.prototype.getResponseJson = X.prototype.Oa;
  X.prototype.getResponseText = X.prototype.oa;
  X.prototype.send = X.prototype.ea;
  X.prototype.setWithCredentials = X.prototype.Ha;
  XhrIo = webchannel_blob_es2018.XhrIo = X;
}).apply(
  typeof commonjsGlobal2 !== "undefined"
    ? commonjsGlobal2
    : typeof self !== "undefined"
    ? self
    : typeof window !== "undefined"
    ? window
    : {}
);

// node_modules/@firebase/firestore/dist/index.esm2017.js
var w2 = "@firebase/firestore";

class User {
  constructor(e5) {
    this.uid = e5;
  }
  isAuthenticated() {
    return this.uid != null;
  }
  toKey() {
    return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
  }
  isEqual(e5) {
    return e5.uid === this.uid;
  }
}
(User.UNAUTHENTICATED = new User(null)),
  (User.GOOGLE_CREDENTIALS = new User("google-credentials-uid")),
  (User.FIRST_PARTY = new User("first-party-uid")),
  (User.MOCK_USER = new User("mock-user"));
var S3 = "11.0.0";
var b3 = new Logger("@firebase/firestore");
function __PRIVATE_getLogLevel() {
  return b3.logLevel;
}
function __PRIVATE_logDebug(e5, ...t4) {
  if (b3.logLevel <= LogLevel.DEBUG) {
    const n5 = t4.map(__PRIVATE_argToString);
    b3.debug(`Firestore (${S3}): ${e5}`, ...n5);
  }
}
function __PRIVATE_logError(e5, ...t4) {
  if (b3.logLevel <= LogLevel.ERROR) {
    const n5 = t4.map(__PRIVATE_argToString);
    b3.error(`Firestore (${S3}): ${e5}`, ...n5);
  }
}
function __PRIVATE_logWarn(e5, ...t4) {
  if (b3.logLevel <= LogLevel.WARN) {
    const n5 = t4.map(__PRIVATE_argToString);
    b3.warn(`Firestore (${S3}): ${e5}`, ...n5);
  }
}
function __PRIVATE_argToString(e5) {
  if (typeof e5 == "string") return e5;
  try {
    return (function __PRIVATE_formatJSON(e6) {
      return JSON.stringify(e6);
    })(e5);
  } catch (t4) {
    return e5;
  }
}
function fail(e5 = "Unexpected state") {
  const t4 = `FIRESTORE (${S3}) INTERNAL ASSERTION FAILED: ` + e5;
  throw (__PRIVATE_logError(t4), new Error(t4));
}
function __PRIVATE_hardAssert(e5, t4) {
  e5 || fail();
}
function __PRIVATE_debugCast(e5, t4) {
  return e5;
}
var D = {
  OK: "ok",
  CANCELLED: "cancelled",
  UNKNOWN: "unknown",
  INVALID_ARGUMENT: "invalid-argument",
  DEADLINE_EXCEEDED: "deadline-exceeded",
  NOT_FOUND: "not-found",
  ALREADY_EXISTS: "already-exists",
  PERMISSION_DENIED: "permission-denied",
  UNAUTHENTICATED: "unauthenticated",
  RESOURCE_EXHAUSTED: "resource-exhausted",
  FAILED_PRECONDITION: "failed-precondition",
  ABORTED: "aborted",
  OUT_OF_RANGE: "out-of-range",
  UNIMPLEMENTED: "unimplemented",
  INTERNAL: "internal",
  UNAVAILABLE: "unavailable",
  DATA_LOSS: "data-loss",
};

class FirestoreError extends FirebaseError {
  constructor(e5, t4) {
    super(e5, t4),
      (this.code = e5),
      (this.message = t4),
      (this.toString = () =>
        `${this.name}: [code=${this.code}]: ${this.message}`);
  }
}

class __PRIVATE_Deferred {
  constructor() {
    this.promise = new Promise((e5, t4) => {
      (this.resolve = e5), (this.reject = t4);
    });
  }
}

class __PRIVATE_OAuthToken {
  constructor(e5, t4) {
    (this.user = t4),
      (this.type = "OAuth"),
      (this.headers = new Map()),
      this.headers.set("Authorization", `Bearer ${e5}`);
  }
}

class __PRIVATE_EmptyAuthCredentialsProvider {
  getToken() {
    return Promise.resolve(null);
  }
  invalidateToken() {}
  start(e5, t4) {
    e5.enqueueRetryable(() => t4(User.UNAUTHENTICATED));
  }
  shutdown() {}
}

class __PRIVATE_EmulatorAuthCredentialsProvider {
  constructor(e5) {
    (this.token = e5), (this.changeListener = null);
  }
  getToken() {
    return Promise.resolve(this.token);
  }
  invalidateToken() {}
  start(e5, t4) {
    (this.changeListener = t4), e5.enqueueRetryable(() => t4(this.token.user));
  }
  shutdown() {
    this.changeListener = null;
  }
}

class __PRIVATE_FirebaseAuthCredentialsProvider {
  constructor(e5) {
    (this.t = e5),
      (this.currentUser = User.UNAUTHENTICATED),
      (this.i = 0),
      (this.forceRefresh = false),
      (this.auth = null);
  }
  start(e5, t4) {
    __PRIVATE_hardAssert(this.o === undefined);
    let n5 = this.i;
    const __PRIVATE_guardedChangeListener = (e6) =>
      this.i !== n5 ? ((n5 = this.i), t4(e6)) : Promise.resolve();
    let r7 = new __PRIVATE_Deferred();
    this.o = () => {
      this.i++,
        (this.currentUser = this.u()),
        r7.resolve(),
        (r7 = new __PRIVATE_Deferred()),
        e5.enqueueRetryable(() =>
          __PRIVATE_guardedChangeListener(this.currentUser)
        );
    };
    const __PRIVATE_awaitNextToken = () => {
        const t5 = r7;
        e5.enqueueRetryable(async () => {
          await t5.promise,
            await __PRIVATE_guardedChangeListener(this.currentUser);
        });
      },
      __PRIVATE_registerAuth = (e6) => {
        __PRIVATE_logDebug("FirebaseAuthCredentialsProvider", "Auth detected"),
          (this.auth = e6),
          this.o &&
            (this.auth.addAuthTokenListener(this.o),
            __PRIVATE_awaitNextToken());
      };
    this.t.onInit((e6) => __PRIVATE_registerAuth(e6)),
      setTimeout(() => {
        if (!this.auth) {
          const e6 = this.t.getImmediate({
            optional: true,
          });
          e6
            ? __PRIVATE_registerAuth(e6)
            : (__PRIVATE_logDebug(
                "FirebaseAuthCredentialsProvider",
                "Auth not yet detected"
              ),
              r7.resolve(),
              (r7 = new __PRIVATE_Deferred()));
        }
      }, 0),
      __PRIVATE_awaitNextToken();
  }
  getToken() {
    const e5 = this.i,
      t4 = this.forceRefresh;
    return (
      (this.forceRefresh = false),
      this.auth
        ? this.auth
            .getToken(t4)
            .then((t5) =>
              this.i !== e5
                ? (__PRIVATE_logDebug(
                    "FirebaseAuthCredentialsProvider",
                    "getToken aborted due to token change."
                  ),
                  this.getToken())
                : t5
                ? (__PRIVATE_hardAssert(typeof t5.accessToken == "string"),
                  new __PRIVATE_OAuthToken(t5.accessToken, this.currentUser))
                : null
            )
        : Promise.resolve(null)
    );
  }
  invalidateToken() {
    this.forceRefresh = true;
  }
  shutdown() {
    this.auth && this.o && this.auth.removeAuthTokenListener(this.o),
      (this.o = undefined);
  }
  u() {
    const e5 = this.auth && this.auth.getUid();
    return (
      __PRIVATE_hardAssert(e5 === null || typeof e5 == "string"), new User(e5)
    );
  }
}

class __PRIVATE_FirstPartyToken {
  constructor(e5, t4, n5) {
    (this.l = e5),
      (this.h = t4),
      (this.P = n5),
      (this.type = "FirstParty"),
      (this.user = User.FIRST_PARTY),
      (this.I = new Map());
  }
  T() {
    return this.P ? this.P() : null;
  }
  get headers() {
    this.I.set("X-Goog-AuthUser", this.l);
    const e5 = this.T();
    return (
      e5 && this.I.set("Authorization", e5),
      this.h && this.I.set("X-Goog-Iam-Authorization-Token", this.h),
      this.I
    );
  }
}

class __PRIVATE_FirstPartyAuthCredentialsProvider {
  constructor(e5, t4, n5) {
    (this.l = e5), (this.h = t4), (this.P = n5);
  }
  getToken() {
    return Promise.resolve(
      new __PRIVATE_FirstPartyToken(this.l, this.h, this.P)
    );
  }
  start(e5, t4) {
    e5.enqueueRetryable(() => t4(User.FIRST_PARTY));
  }
  shutdown() {}
  invalidateToken() {}
}

class AppCheckToken {
  constructor(e5) {
    (this.value = e5),
      (this.type = "AppCheck"),
      (this.headers = new Map()),
      e5 &&
        e5.length > 0 &&
        this.headers.set("x-firebase-appcheck", this.value);
  }
}

class __PRIVATE_FirebaseAppCheckTokenProvider {
  constructor(e5) {
    (this.A = e5),
      (this.forceRefresh = false),
      (this.appCheck = null),
      (this.R = null);
  }
  start(e5, t4) {
    __PRIVATE_hardAssert(this.o === undefined);
    const onTokenChanged = (e6) => {
      e6.error != null &&
        __PRIVATE_logDebug(
          "FirebaseAppCheckTokenProvider",
          `Error getting App Check token; using placeholder token instead. Error: ${e6.error.message}`
        );
      const n5 = e6.token !== this.R;
      return (
        (this.R = e6.token),
        __PRIVATE_logDebug(
          "FirebaseAppCheckTokenProvider",
          `Received ${n5 ? "new" : "existing"} token.`
        ),
        n5 ? t4(e6.token) : Promise.resolve()
      );
    };
    this.o = (t5) => {
      e5.enqueueRetryable(() => onTokenChanged(t5));
    };
    const __PRIVATE_registerAppCheck = (e6) => {
      __PRIVATE_logDebug("FirebaseAppCheckTokenProvider", "AppCheck detected"),
        (this.appCheck = e6),
        this.o && this.appCheck.addTokenListener(this.o);
    };
    this.A.onInit((e6) => __PRIVATE_registerAppCheck(e6)),
      setTimeout(() => {
        if (!this.appCheck) {
          const e6 = this.A.getImmediate({
            optional: true,
          });
          e6
            ? __PRIVATE_registerAppCheck(e6)
            : __PRIVATE_logDebug(
                "FirebaseAppCheckTokenProvider",
                "AppCheck not yet detected"
              );
        }
      }, 0);
  }
  getToken() {
    const e5 = this.forceRefresh;
    return (
      (this.forceRefresh = false),
      this.appCheck
        ? this.appCheck
            .getToken(e5)
            .then((e6) =>
              e6
                ? (__PRIVATE_hardAssert(typeof e6.token == "string"),
                  (this.R = e6.token),
                  new AppCheckToken(e6.token))
                : null
            )
        : Promise.resolve(null)
    );
  }
  invalidateToken() {
    this.forceRefresh = true;
  }
  shutdown() {
    this.appCheck && this.o && this.appCheck.removeTokenListener(this.o),
      (this.o = undefined);
  }
}
function __PRIVATE_randomBytes(e5) {
  const t4 = typeof self != "undefined" && (self.crypto || self.msCrypto),
    n5 = new Uint8Array(e5);
  if (t4 && typeof t4.getRandomValues == "function") t4.getRandomValues(n5);
  else for (let t5 = 0; t5 < e5; t5++) n5[t5] = Math.floor(256 * Math.random());
  return n5;
}

class __PRIVATE_AutoId {
  static newId() {
    const e5 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      t4 = Math.floor(256 / e5.length) * e5.length;
    let n5 = "";
    for (; n5.length < 20; ) {
      const r7 = __PRIVATE_randomBytes(40);
      for (let i5 = 0; i5 < r7.length; ++i5)
        n5.length < 20 && r7[i5] < t4 && (n5 += e5.charAt(r7[i5] % e5.length));
    }
    return n5;
  }
}
function __PRIVATE_primitiveComparator(e5, t4) {
  return e5 < t4 ? -1 : e5 > t4 ? 1 : 0;
}
function __PRIVATE_arrayEquals(e5, t4, n5) {
  return e5.length === t4.length && e5.every((e6, r7) => n5(e6, t4[r7]));
}
class Timestamp {
  constructor(e5, t4) {
    if (((this.seconds = e5), (this.nanoseconds = t4), t4 < 0))
      throw new FirestoreError(
        D.INVALID_ARGUMENT,
        "Timestamp nanoseconds out of range: " + t4
      );
    if (t4 >= 1e9)
      throw new FirestoreError(
        D.INVALID_ARGUMENT,
        "Timestamp nanoseconds out of range: " + t4
      );
    if (e5 < -62135596800)
      throw new FirestoreError(
        D.INVALID_ARGUMENT,
        "Timestamp seconds out of range: " + e5
      );
    if (e5 >= 253402300800)
      throw new FirestoreError(
        D.INVALID_ARGUMENT,
        "Timestamp seconds out of range: " + e5
      );
  }
  static now() {
    return Timestamp.fromMillis(Date.now());
  }
  static fromDate(e5) {
    return Timestamp.fromMillis(e5.getTime());
  }
  static fromMillis(e5) {
    const t4 = Math.floor(e5 / 1000),
      n5 = Math.floor(1e6 * (e5 - 1000 * t4));
    return new Timestamp(t4, n5);
  }
  toDate() {
    return new Date(this.toMillis());
  }
  toMillis() {
    return 1000 * this.seconds + this.nanoseconds / 1e6;
  }
  _compareTo(e5) {
    return this.seconds === e5.seconds
      ? __PRIVATE_primitiveComparator(this.nanoseconds, e5.nanoseconds)
      : __PRIVATE_primitiveComparator(this.seconds, e5.seconds);
  }
  isEqual(e5) {
    return e5.seconds === this.seconds && e5.nanoseconds === this.nanoseconds;
  }
  toString() {
    return (
      "Timestamp(seconds=" +
      this.seconds +
      ", nanoseconds=" +
      this.nanoseconds +
      ")"
    );
  }
  toJSON() {
    return {
      seconds: this.seconds,
      nanoseconds: this.nanoseconds,
    };
  }
  valueOf() {
    const e5 = this.seconds - -62135596800;
    return (
      String(e5).padStart(12, "0") +
      "." +
      String(this.nanoseconds).padStart(9, "0")
    );
  }
}

class SnapshotVersion {
  constructor(e5) {
    this.timestamp = e5;
  }
  static fromTimestamp(e5) {
    return new SnapshotVersion(e5);
  }
  static min() {
    return new SnapshotVersion(new Timestamp(0, 0));
  }
  static max() {
    return new SnapshotVersion(new Timestamp(253402300799, 999999999));
  }
  compareTo(e5) {
    return this.timestamp._compareTo(e5.timestamp);
  }
  isEqual(e5) {
    return this.timestamp.isEqual(e5.timestamp);
  }
  toMicroseconds() {
    return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1000;
  }
  toString() {
    return "SnapshotVersion(" + this.timestamp.toString() + ")";
  }
  toTimestamp() {
    return this.timestamp;
  }
}

class BasePath {
  constructor(e5, t4, n5) {
    t4 === undefined ? (t4 = 0) : t4 > e5.length && fail(),
      n5 === undefined ? (n5 = e5.length - t4) : n5 > e5.length - t4 && fail(),
      (this.segments = e5),
      (this.offset = t4),
      (this.len = n5);
  }
  get length() {
    return this.len;
  }
  isEqual(e5) {
    return BasePath.comparator(this, e5) === 0;
  }
  child(e5) {
    const t4 = this.segments.slice(this.offset, this.limit());
    return (
      e5 instanceof BasePath
        ? e5.forEach((e6) => {
            t4.push(e6);
          })
        : t4.push(e5),
      this.construct(t4)
    );
  }
  limit() {
    return this.offset + this.length;
  }
  popFirst(e5) {
    return (
      (e5 = e5 === undefined ? 1 : e5),
      this.construct(this.segments, this.offset + e5, this.length - e5)
    );
  }
  popLast() {
    return this.construct(this.segments, this.offset, this.length - 1);
  }
  firstSegment() {
    return this.segments[this.offset];
  }
  lastSegment() {
    return this.get(this.length - 1);
  }
  get(e5) {
    return this.segments[this.offset + e5];
  }
  isEmpty() {
    return this.length === 0;
  }
  isPrefixOf(e5) {
    if (e5.length < this.length) return false;
    for (let t4 = 0; t4 < this.length; t4++)
      if (this.get(t4) !== e5.get(t4)) return false;
    return true;
  }
  isImmediateParentOf(e5) {
    if (this.length + 1 !== e5.length) return false;
    for (let t4 = 0; t4 < this.length; t4++)
      if (this.get(t4) !== e5.get(t4)) return false;
    return true;
  }
  forEach(e5) {
    for (let t4 = this.offset, n5 = this.limit(); t4 < n5; t4++)
      e5(this.segments[t4]);
  }
  toArray() {
    return this.segments.slice(this.offset, this.limit());
  }
  static comparator(e5, t4) {
    const n5 = Math.min(e5.length, t4.length);
    for (let r7 = 0; r7 < n5; r7++) {
      const n6 = e5.get(r7),
        i5 = t4.get(r7);
      if (n6 < i5) return -1;
      if (n6 > i5) return 1;
    }
    return e5.length < t4.length ? -1 : e5.length > t4.length ? 1 : 0;
  }
}

class ResourcePath extends BasePath {
  construct(e5, t4, n5) {
    return new ResourcePath(e5, t4, n5);
  }
  canonicalString() {
    return this.toArray().join("/");
  }
  toString() {
    return this.canonicalString();
  }
  toUriEncodedString() {
    return this.toArray().map(encodeURIComponent).join("/");
  }
  static fromString(...e5) {
    const t4 = [];
    for (const n5 of e5) {
      if (n5.indexOf("//") >= 0)
        throw new FirestoreError(
          D.INVALID_ARGUMENT,
          `Invalid segment (${n5}). Paths must not contain // in them.`
        );
      t4.push(...n5.split("/").filter((e6) => e6.length > 0));
    }
    return new ResourcePath(t4);
  }
  static emptyPath() {
    return new ResourcePath([]);
  }
}
var v2 = /^[_a-zA-Z][_a-zA-Z0-9]*$/;

class FieldPath$1 extends BasePath {
  construct(e5, t4, n5) {
    return new FieldPath$1(e5, t4, n5);
  }
  static isValidIdentifier(e5) {
    return v2.test(e5);
  }
  canonicalString() {
    return this.toArray()
      .map(
        (e5) => (
          (e5 = e5.replace(/\\/g, "\\\\").replace(/`/g, "\\`")),
          FieldPath$1.isValidIdentifier(e5) || (e5 = "`" + e5 + "`"),
          e5
        )
      )
      .join(".");
  }
  toString() {
    return this.canonicalString();
  }
  isKeyField() {
    return this.length === 1 && this.get(0) === "__name__";
  }
  static keyField() {
    return new FieldPath$1(["__name__"]);
  }
  static fromServerFormat(e5) {
    const t4 = [];
    let n5 = "",
      r7 = 0;
    const __PRIVATE_addCurrentSegment = () => {
      if (n5.length === 0)
        throw new FirestoreError(
          D.INVALID_ARGUMENT,
          `Invalid field path (${e5}). Paths must not be empty, begin with '.', end with '.', or contain '..'`
        );
      t4.push(n5), (n5 = "");
    };
    let i5 = false;
    for (; r7 < e5.length; ) {
      const t5 = e5[r7];
      if (t5 === "\\") {
        if (r7 + 1 === e5.length)
          throw new FirestoreError(
            D.INVALID_ARGUMENT,
            "Path has trailing escape character: " + e5
          );
        const t6 = e5[r7 + 1];
        if (t6 !== "\\" && t6 !== "." && t6 !== "`")
          throw new FirestoreError(
            D.INVALID_ARGUMENT,
            "Path has invalid escape sequence: " + e5
          );
        (n5 += t6), (r7 += 2);
      } else
        t5 === "`"
          ? ((i5 = !i5), r7++)
          : t5 !== "." || i5
          ? ((n5 += t5), r7++)
          : (__PRIVATE_addCurrentSegment(), r7++);
    }
    if ((__PRIVATE_addCurrentSegment(), i5))
      throw new FirestoreError(
        D.INVALID_ARGUMENT,
        "Unterminated ` in path: " + e5
      );
    return new FieldPath$1(t4);
  }
  static emptyPath() {
    return new FieldPath$1([]);
  }
}

class DocumentKey {
  constructor(e5) {
    this.path = e5;
  }
  static fromPath(e5) {
    return new DocumentKey(ResourcePath.fromString(e5));
  }
  static fromName(e5) {
    return new DocumentKey(ResourcePath.fromString(e5).popFirst(5));
  }
  static empty() {
    return new DocumentKey(ResourcePath.emptyPath());
  }
  get collectionGroup() {
    return this.path.popLast().lastSegment();
  }
  hasCollectionId(e5) {
    return this.path.length >= 2 && this.path.get(this.path.length - 2) === e5;
  }
  getCollectionGroup() {
    return this.path.get(this.path.length - 2);
  }
  getCollectionPath() {
    return this.path.popLast();
  }
  isEqual(e5) {
    return e5 !== null && ResourcePath.comparator(this.path, e5.path) === 0;
  }
  toString() {
    return this.path.toString();
  }
  static comparator(e5, t4) {
    return ResourcePath.comparator(e5.path, t4.path);
  }
  static isDocumentKey(e5) {
    return e5.length % 2 == 0;
  }
  static fromSegments(e5) {
    return new DocumentKey(new ResourcePath(e5.slice()));
  }
}

class FieldIndex {
  constructor(e5, t4, n5, r7) {
    (this.indexId = e5),
      (this.collectionGroup = t4),
      (this.fields = n5),
      (this.indexState = r7);
  }
}
FieldIndex.UNKNOWN_ID = -1;
function __PRIVATE_newIndexOffsetSuccessorFromReadTime(e5, t4) {
  const n5 = e5.toTimestamp().seconds,
    r7 = e5.toTimestamp().nanoseconds + 1,
    i5 = SnapshotVersion.fromTimestamp(
      r7 === 1e9 ? new Timestamp(n5 + 1, 0) : new Timestamp(n5, r7)
    );
  return new IndexOffset(i5, DocumentKey.empty(), t4);
}
function __PRIVATE_newIndexOffsetFromDocument(e5) {
  return new IndexOffset(e5.readTime, e5.key, -1);
}

class IndexOffset {
  constructor(e5, t4, n5) {
    (this.readTime = e5), (this.documentKey = t4), (this.largestBatchId = n5);
  }
  static min() {
    return new IndexOffset(SnapshotVersion.min(), DocumentKey.empty(), -1);
  }
  static max() {
    return new IndexOffset(SnapshotVersion.max(), DocumentKey.empty(), -1);
  }
}
function __PRIVATE_indexOffsetComparator(e5, t4) {
  let n5 = e5.readTime.compareTo(t4.readTime);
  return n5 !== 0
    ? n5
    : ((n5 = DocumentKey.comparator(e5.documentKey, t4.documentKey)),
      n5 !== 0
        ? n5
        : __PRIVATE_primitiveComparator(e5.largestBatchId, t4.largestBatchId));
}
var C2 =
  "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";

class PersistenceTransaction {
  constructor() {
    this.onCommittedListeners = [];
  }
  addOnCommittedListener(e5) {
    this.onCommittedListeners.push(e5);
  }
  raiseOnCommittedEvent() {
    this.onCommittedListeners.forEach((e5) => e5());
  }
}
async function __PRIVATE_ignoreIfPrimaryLeaseLoss(e5) {
  if (e5.code !== D.FAILED_PRECONDITION || e5.message !== C2) throw e5;
  __PRIVATE_logDebug("LocalStore", "Unexpectedly lost primary lease");
}

class PersistencePromise {
  constructor(e5) {
    (this.nextCallback = null),
      (this.catchCallback = null),
      (this.result = undefined),
      (this.error = undefined),
      (this.isDone = false),
      (this.callbackAttached = false),
      e5(
        (e6) => {
          (this.isDone = true),
            (this.result = e6),
            this.nextCallback && this.nextCallback(e6);
        },
        (e6) => {
          (this.isDone = true),
            (this.error = e6),
            this.catchCallback && this.catchCallback(e6);
        }
      );
  }
  catch(e5) {
    return this.next(undefined, e5);
  }
  next(e5, t4) {
    return (
      this.callbackAttached && fail(),
      (this.callbackAttached = true),
      this.isDone
        ? this.error
          ? this.wrapFailure(t4, this.error)
          : this.wrapSuccess(e5, this.result)
        : new PersistencePromise((n5, r7) => {
            (this.nextCallback = (t5) => {
              this.wrapSuccess(e5, t5).next(n5, r7);
            }),
              (this.catchCallback = (e6) => {
                this.wrapFailure(t4, e6).next(n5, r7);
              });
          })
    );
  }
  toPromise() {
    return new Promise((e5, t4) => {
      this.next(e5, t4);
    });
  }
  wrapUserFunction(e5) {
    try {
      const t4 = e5();
      return t4 instanceof PersistencePromise
        ? t4
        : PersistencePromise.resolve(t4);
    } catch (e6) {
      return PersistencePromise.reject(e6);
    }
  }
  wrapSuccess(e5, t4) {
    return e5
      ? this.wrapUserFunction(() => e5(t4))
      : PersistencePromise.resolve(t4);
  }
  wrapFailure(e5, t4) {
    return e5
      ? this.wrapUserFunction(() => e5(t4))
      : PersistencePromise.reject(t4);
  }
  static resolve(e5) {
    return new PersistencePromise((t4, n5) => {
      t4(e5);
    });
  }
  static reject(e5) {
    return new PersistencePromise((t4, n5) => {
      n5(e5);
    });
  }
  static waitFor(e5) {
    return new PersistencePromise((t4, n5) => {
      let r7 = 0,
        i5 = 0,
        s3 = false;
      e5.forEach((e6) => {
        ++r7,
          e6.next(
            () => {
              ++i5, s3 && i5 === r7 && t4();
            },
            (e7) => n5(e7)
          );
      }),
        (s3 = true),
        i5 === r7 && t4();
    });
  }
  static or(e5) {
    let t4 = PersistencePromise.resolve(false);
    for (const n5 of e5)
      t4 = t4.next((e6) => (e6 ? PersistencePromise.resolve(e6) : n5()));
    return t4;
  }
  static forEach(e5, t4) {
    const n5 = [];
    return (
      e5.forEach((e6, r7) => {
        n5.push(t4.call(this, e6, r7));
      }),
      this.waitFor(n5)
    );
  }
  static mapArray(e5, t4) {
    return new PersistencePromise((n5, r7) => {
      const i5 = e5.length,
        s3 = new Array(i5);
      let o5 = 0;
      for (let _2 = 0; _2 < i5; _2++) {
        const a3 = _2;
        t4(e5[a3]).next(
          (e6) => {
            (s3[a3] = e6), ++o5, o5 === i5 && n5(s3);
          },
          (e6) => r7(e6)
        );
      }
    });
  }
  static doWhile(e5, t4) {
    return new PersistencePromise((n5, r7) => {
      const process2 = () => {
        e5() === true
          ? t4().next(() => {
              process2();
            }, r7)
          : n5();
      };
      process2();
    });
  }
}
function __PRIVATE_getAndroidVersion(e5) {
  const t4 = e5.match(/Android ([\d.]+)/i),
    n5 = t4 ? t4[1].split(".").slice(0, 2).join(".") : "-1";
  return Number(n5);
}
function __PRIVATE_isIndexedDbTransactionError(e5) {
  return e5.name === "IndexedDbTransactionError";
}
class __PRIVATE_ListenSequence {
  constructor(e5, t4) {
    (this.previousValue = e5),
      t4 &&
        ((t4.sequenceNumberHandler = (e6) => this.ie(e6)),
        (this.se = (e6) => t4.writeSequenceNumber(e6)));
  }
  ie(e5) {
    return (
      (this.previousValue = Math.max(e5, this.previousValue)),
      this.previousValue
    );
  }
  next() {
    const e5 = ++this.previousValue;
    return this.se && this.se(e5), e5;
  }
}
__PRIVATE_ListenSequence.oe = -1;
function __PRIVATE_isNullOrUndefined(e5) {
  return e5 == null;
}
function __PRIVATE_isNegativeZero(e5) {
  return e5 === 0 && 1 / e5 == -1 / 0;
}
function __PRIVATE_encodeResourcePath(e5) {
  let t4 = "";
  for (let n5 = 0; n5 < e5.length; n5++)
    t4.length > 0 && (t4 = __PRIVATE_encodeSeparator(t4)),
      (t4 = __PRIVATE_encodeSegment(e5.get(n5), t4));
  return __PRIVATE_encodeSeparator(t4);
}
function __PRIVATE_encodeSegment(e5, t4) {
  let n5 = t4;
  const r7 = e5.length;
  for (let t5 = 0; t5 < r7; t5++) {
    const r8 = e5.charAt(t5);
    switch (r8) {
      case "\x00":
        n5 += "\x01\x10";
        break;
      case "\x01":
        n5 += "\x01\x11";
        break;
      default:
        n5 += r8;
    }
  }
  return n5;
}
function __PRIVATE_encodeSeparator(e5) {
  return e5 + "\x01\x01";
}
var H2 = [
  ...[
    ...[
      ...[
        ...[
          "mutationQueues",
          "mutations",
          "documentMutations",
          "remoteDocuments",
          "targets",
          "owner",
          "targetGlobal",
          "targetDocuments",
        ],
        "clientMetadata",
      ],
      "remoteDocumentGlobal",
    ],
    "collectionParents",
  ],
  "bundles",
  "namedQueries",
];
var J = [...H2, "documentOverlays"];
var Y = [
  "mutationQueues",
  "mutations",
  "documentMutations",
  "remoteDocumentsV14",
  "targets",
  "owner",
  "targetGlobal",
  "targetDocuments",
  "clientMetadata",
  "remoteDocumentGlobal",
  "collectionParents",
  "bundles",
  "namedQueries",
  "documentOverlays",
];
var Z = Y;
var X = [...Z, "indexConfiguration", "indexState", "indexEntries"];
var te = [...X, "globals"];
function __PRIVATE_objectSize(e5) {
  let t4 = 0;
  for (const n5 in e5) Object.prototype.hasOwnProperty.call(e5, n5) && t4++;
  return t4;
}
function forEach(e5, t4) {
  for (const n5 in e5)
    Object.prototype.hasOwnProperty.call(e5, n5) && t4(n5, e5[n5]);
}
function isEmpty(e5) {
  for (const t4 in e5)
    if (Object.prototype.hasOwnProperty.call(e5, t4)) return false;
  return true;
}

class SortedMap {
  constructor(e5, t4) {
    (this.comparator = e5), (this.root = t4 || LLRBNode.EMPTY);
  }
  insert(e5, t4) {
    return new SortedMap(
      this.comparator,
      this.root
        .insert(e5, t4, this.comparator)
        .copy(null, null, LLRBNode.BLACK, null, null)
    );
  }
  remove(e5) {
    return new SortedMap(
      this.comparator,
      this.root
        .remove(e5, this.comparator)
        .copy(null, null, LLRBNode.BLACK, null, null)
    );
  }
  get(e5) {
    let t4 = this.root;
    for (; !t4.isEmpty(); ) {
      const n5 = this.comparator(e5, t4.key);
      if (n5 === 0) return t4.value;
      n5 < 0 ? (t4 = t4.left) : n5 > 0 && (t4 = t4.right);
    }
    return null;
  }
  indexOf(e5) {
    let t4 = 0,
      n5 = this.root;
    for (; !n5.isEmpty(); ) {
      const r7 = this.comparator(e5, n5.key);
      if (r7 === 0) return t4 + n5.left.size;
      r7 < 0 ? (n5 = n5.left) : ((t4 += n5.left.size + 1), (n5 = n5.right));
    }
    return -1;
  }
  isEmpty() {
    return this.root.isEmpty();
  }
  get size() {
    return this.root.size;
  }
  minKey() {
    return this.root.minKey();
  }
  maxKey() {
    return this.root.maxKey();
  }
  inorderTraversal(e5) {
    return this.root.inorderTraversal(e5);
  }
  forEach(e5) {
    this.inorderTraversal((t4, n5) => (e5(t4, n5), false));
  }
  toString() {
    const e5 = [];
    return (
      this.inorderTraversal((t4, n5) => (e5.push(`${t4}:${n5}`), false)),
      `{${e5.join(", ")}}`
    );
  }
  reverseTraversal(e5) {
    return this.root.reverseTraversal(e5);
  }
  getIterator() {
    return new SortedMapIterator(this.root, null, this.comparator, false);
  }
  getIteratorFrom(e5) {
    return new SortedMapIterator(this.root, e5, this.comparator, false);
  }
  getReverseIterator() {
    return new SortedMapIterator(this.root, null, this.comparator, true);
  }
  getReverseIteratorFrom(e5) {
    return new SortedMapIterator(this.root, e5, this.comparator, true);
  }
}

class SortedMapIterator {
  constructor(e5, t4, n5, r7) {
    (this.isReverse = r7), (this.nodeStack = []);
    let i5 = 1;
    for (; !e5.isEmpty(); )
      if (((i5 = t4 ? n5(e5.key, t4) : 1), t4 && r7 && (i5 *= -1), i5 < 0))
        e5 = this.isReverse ? e5.left : e5.right;
      else {
        if (i5 === 0) {
          this.nodeStack.push(e5);
          break;
        }
        this.nodeStack.push(e5), (e5 = this.isReverse ? e5.right : e5.left);
      }
  }
  getNext() {
    let e5 = this.nodeStack.pop();
    const t4 = {
      key: e5.key,
      value: e5.value,
    };
    if (this.isReverse)
      for (e5 = e5.left; !e5.isEmpty(); )
        this.nodeStack.push(e5), (e5 = e5.right);
    else
      for (e5 = e5.right; !e5.isEmpty(); )
        this.nodeStack.push(e5), (e5 = e5.left);
    return t4;
  }
  hasNext() {
    return this.nodeStack.length > 0;
  }
  peek() {
    if (this.nodeStack.length === 0) return null;
    const e5 = this.nodeStack[this.nodeStack.length - 1];
    return {
      key: e5.key,
      value: e5.value,
    };
  }
}

class LLRBNode {
  constructor(e5, t4, n5, r7, i5) {
    (this.key = e5),
      (this.value = t4),
      (this.color = n5 != null ? n5 : LLRBNode.RED),
      (this.left = r7 != null ? r7 : LLRBNode.EMPTY),
      (this.right = i5 != null ? i5 : LLRBNode.EMPTY),
      (this.size = this.left.size + 1 + this.right.size);
  }
  copy(e5, t4, n5, r7, i5) {
    return new LLRBNode(
      e5 != null ? e5 : this.key,
      t4 != null ? t4 : this.value,
      n5 != null ? n5 : this.color,
      r7 != null ? r7 : this.left,
      i5 != null ? i5 : this.right
    );
  }
  isEmpty() {
    return false;
  }
  inorderTraversal(e5) {
    return (
      this.left.inorderTraversal(e5) ||
      e5(this.key, this.value) ||
      this.right.inorderTraversal(e5)
    );
  }
  reverseTraversal(e5) {
    return (
      this.right.reverseTraversal(e5) ||
      e5(this.key, this.value) ||
      this.left.reverseTraversal(e5)
    );
  }
  min() {
    return this.left.isEmpty() ? this : this.left.min();
  }
  minKey() {
    return this.min().key;
  }
  maxKey() {
    return this.right.isEmpty() ? this.key : this.right.maxKey();
  }
  insert(e5, t4, n5) {
    let r7 = this;
    const i5 = n5(e5, r7.key);
    return (
      (r7 =
        i5 < 0
          ? r7.copy(null, null, null, r7.left.insert(e5, t4, n5), null)
          : i5 === 0
          ? r7.copy(null, t4, null, null, null)
          : r7.copy(null, null, null, null, r7.right.insert(e5, t4, n5))),
      r7.fixUp()
    );
  }
  removeMin() {
    if (this.left.isEmpty()) return LLRBNode.EMPTY;
    let e5 = this;
    return (
      e5.left.isRed() || e5.left.left.isRed() || (e5 = e5.moveRedLeft()),
      (e5 = e5.copy(null, null, null, e5.left.removeMin(), null)),
      e5.fixUp()
    );
  }
  remove(e5, t4) {
    let n5,
      r7 = this;
    if (t4(e5, r7.key) < 0)
      r7.left.isEmpty() ||
        r7.left.isRed() ||
        r7.left.left.isRed() ||
        (r7 = r7.moveRedLeft()),
        (r7 = r7.copy(null, null, null, r7.left.remove(e5, t4), null));
    else {
      if (
        (r7.left.isRed() && (r7 = r7.rotateRight()),
        r7.right.isEmpty() ||
          r7.right.isRed() ||
          r7.right.left.isRed() ||
          (r7 = r7.moveRedRight()),
        t4(e5, r7.key) === 0)
      ) {
        if (r7.right.isEmpty()) return LLRBNode.EMPTY;
        (n5 = r7.right.min()),
          (r7 = r7.copy(n5.key, n5.value, null, null, r7.right.removeMin()));
      }
      r7 = r7.copy(null, null, null, null, r7.right.remove(e5, t4));
    }
    return r7.fixUp();
  }
  isRed() {
    return this.color;
  }
  fixUp() {
    let e5 = this;
    return (
      e5.right.isRed() && !e5.left.isRed() && (e5 = e5.rotateLeft()),
      e5.left.isRed() && e5.left.left.isRed() && (e5 = e5.rotateRight()),
      e5.left.isRed() && e5.right.isRed() && (e5 = e5.colorFlip()),
      e5
    );
  }
  moveRedLeft() {
    let e5 = this.colorFlip();
    return (
      e5.right.left.isRed() &&
        ((e5 = e5.copy(null, null, null, null, e5.right.rotateRight())),
        (e5 = e5.rotateLeft()),
        (e5 = e5.colorFlip())),
      e5
    );
  }
  moveRedRight() {
    let e5 = this.colorFlip();
    return (
      e5.left.left.isRed() && ((e5 = e5.rotateRight()), (e5 = e5.colorFlip())),
      e5
    );
  }
  rotateLeft() {
    const e5 = this.copy(null, null, LLRBNode.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, e5, null);
  }
  rotateRight() {
    const e5 = this.copy(null, null, LLRBNode.RED, this.left.right, null);
    return this.left.copy(null, null, this.color, null, e5);
  }
  colorFlip() {
    const e5 = this.left.copy(null, null, !this.left.color, null, null),
      t4 = this.right.copy(null, null, !this.right.color, null, null);
    return this.copy(null, null, !this.color, e5, t4);
  }
  checkMaxDepth() {
    const e5 = this.check();
    return Math.pow(2, e5) <= this.size + 1;
  }
  check() {
    if (this.isRed() && this.left.isRed()) throw fail();
    if (this.right.isRed()) throw fail();
    const e5 = this.left.check();
    if (e5 !== this.right.check()) throw fail();
    return e5 + (this.isRed() ? 0 : 1);
  }
}
(LLRBNode.EMPTY = null), (LLRBNode.RED = true), (LLRBNode.BLACK = false);
LLRBNode.EMPTY = new (class LLRBEmptyNode {
  constructor() {
    this.size = 0;
  }
  get key() {
    throw fail();
  }
  get value() {
    throw fail();
  }
  get color() {
    throw fail();
  }
  get left() {
    throw fail();
  }
  get right() {
    throw fail();
  }
  copy(e5, t4, n5, r7, i5) {
    return this;
  }
  insert(e5, t4, n5) {
    return new LLRBNode(e5, t4);
  }
  remove(e5, t4) {
    return this;
  }
  isEmpty() {
    return true;
  }
  inorderTraversal(e5) {
    return false;
  }
  reverseTraversal(e5) {
    return false;
  }
  minKey() {
    return null;
  }
  maxKey() {
    return null;
  }
  isRed() {
    return false;
  }
  checkMaxDepth() {
    return true;
  }
  check() {
    return 0;
  }
})();

class SortedSet {
  constructor(e5) {
    (this.comparator = e5), (this.data = new SortedMap(this.comparator));
  }
  has(e5) {
    return this.data.get(e5) !== null;
  }
  first() {
    return this.data.minKey();
  }
  last() {
    return this.data.maxKey();
  }
  get size() {
    return this.data.size;
  }
  indexOf(e5) {
    return this.data.indexOf(e5);
  }
  forEach(e5) {
    this.data.inorderTraversal((t4, n5) => (e5(t4), false));
  }
  forEachInRange(e5, t4) {
    const n5 = this.data.getIteratorFrom(e5[0]);
    for (; n5.hasNext(); ) {
      const r7 = n5.getNext();
      if (this.comparator(r7.key, e5[1]) >= 0) return;
      t4(r7.key);
    }
  }
  forEachWhile(e5, t4) {
    let n5;
    for (
      n5 =
        t4 !== undefined
          ? this.data.getIteratorFrom(t4)
          : this.data.getIterator();
      n5.hasNext();

    ) {
      if (!e5(n5.getNext().key)) return;
    }
  }
  firstAfterOrEqual(e5) {
    const t4 = this.data.getIteratorFrom(e5);
    return t4.hasNext() ? t4.getNext().key : null;
  }
  getIterator() {
    return new SortedSetIterator(this.data.getIterator());
  }
  getIteratorFrom(e5) {
    return new SortedSetIterator(this.data.getIteratorFrom(e5));
  }
  add(e5) {
    return this.copy(this.data.remove(e5).insert(e5, true));
  }
  delete(e5) {
    return this.has(e5) ? this.copy(this.data.remove(e5)) : this;
  }
  isEmpty() {
    return this.data.isEmpty();
  }
  unionWith(e5) {
    let t4 = this;
    return (
      t4.size < e5.size && ((t4 = e5), (e5 = this)),
      e5.forEach((e6) => {
        t4 = t4.add(e6);
      }),
      t4
    );
  }
  isEqual(e5) {
    if (!(e5 instanceof SortedSet)) return false;
    if (this.size !== e5.size) return false;
    const t4 = this.data.getIterator(),
      n5 = e5.data.getIterator();
    for (; t4.hasNext(); ) {
      const e6 = t4.getNext().key,
        r7 = n5.getNext().key;
      if (this.comparator(e6, r7) !== 0) return false;
    }
    return true;
  }
  toArray() {
    const e5 = [];
    return (
      this.forEach((t4) => {
        e5.push(t4);
      }),
      e5
    );
  }
  toString() {
    const e5 = [];
    return (
      this.forEach((t4) => e5.push(t4)), "SortedSet(" + e5.toString() + ")"
    );
  }
  copy(e5) {
    const t4 = new SortedSet(this.comparator);
    return (t4.data = e5), t4;
  }
}

class SortedSetIterator {
  constructor(e5) {
    this.iter = e5;
  }
  getNext() {
    return this.iter.getNext().key;
  }
  hasNext() {
    return this.iter.hasNext();
  }
}
class FieldMask {
  constructor(e5) {
    (this.fields = e5), e5.sort(FieldPath$1.comparator);
  }
  static empty() {
    return new FieldMask([]);
  }
  unionWith(e5) {
    let t4 = new SortedSet(FieldPath$1.comparator);
    for (const e6 of this.fields) t4 = t4.add(e6);
    for (const n5 of e5) t4 = t4.add(n5);
    return new FieldMask(t4.toArray());
  }
  covers(e5) {
    for (const t4 of this.fields) if (t4.isPrefixOf(e5)) return true;
    return false;
  }
  isEqual(e5) {
    return __PRIVATE_arrayEquals(this.fields, e5.fields, (e6, t4) =>
      e6.isEqual(t4)
    );
  }
}

class __PRIVATE_Base64DecodeError extends Error {
  constructor() {
    super(...arguments), (this.name = "Base64DecodeError");
  }
}
class ByteString {
  constructor(e5) {
    this.binaryString = e5;
  }
  static fromBase64String(e5) {
    const t4 = (function __PRIVATE_decodeBase64(e6) {
      try {
        return atob(e6);
      } catch (e7) {
        throw typeof DOMException != "undefined" && e7 instanceof DOMException
          ? new __PRIVATE_Base64DecodeError("Invalid base64 string: " + e7)
          : e7;
      }
    })(e5);
    return new ByteString(t4);
  }
  static fromUint8Array(e5) {
    const t4 = (function __PRIVATE_binaryStringFromUint8Array(e6) {
      let t5 = "";
      for (let n5 = 0; n5 < e6.length; ++n5) t5 += String.fromCharCode(e6[n5]);
      return t5;
    })(e5);
    return new ByteString(t4);
  }
  [Symbol.iterator]() {
    let e5 = 0;
    return {
      next: () =>
        e5 < this.binaryString.length
          ? {
              value: this.binaryString.charCodeAt(e5++),
              done: false,
            }
          : {
              value: undefined,
              done: true,
            },
    };
  }
  toBase64() {
    return (function __PRIVATE_encodeBase64(e5) {
      return btoa(e5);
    })(this.binaryString);
  }
  toUint8Array() {
    return (function __PRIVATE_uint8ArrayFromBinaryString(e5) {
      const t4 = new Uint8Array(e5.length);
      for (let n5 = 0; n5 < e5.length; n5++) t4[n5] = e5.charCodeAt(n5);
      return t4;
    })(this.binaryString);
  }
  approximateByteSize() {
    return 2 * this.binaryString.length;
  }
  compareTo(e5) {
    return __PRIVATE_primitiveComparator(this.binaryString, e5.binaryString);
  }
  isEqual(e5) {
    return this.binaryString === e5.binaryString;
  }
}
ByteString.EMPTY_BYTE_STRING = new ByteString("");
var ne = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function __PRIVATE_normalizeTimestamp(e5) {
  if ((__PRIVATE_hardAssert(!!e5), typeof e5 == "string")) {
    let t4 = 0;
    const n5 = ne.exec(e5);
    if ((__PRIVATE_hardAssert(!!n5), n5[1])) {
      let e6 = n5[1];
      (e6 = (e6 + "000000000").substr(0, 9)), (t4 = Number(e6));
    }
    const r7 = new Date(e5);
    return {
      seconds: Math.floor(r7.getTime() / 1000),
      nanos: t4,
    };
  }
  return {
    seconds: __PRIVATE_normalizeNumber(e5.seconds),
    nanos: __PRIVATE_normalizeNumber(e5.nanos),
  };
}
function __PRIVATE_normalizeNumber(e5) {
  return typeof e5 == "number" ? e5 : typeof e5 == "string" ? Number(e5) : 0;
}
function __PRIVATE_normalizeByteString(e5) {
  return typeof e5 == "string"
    ? ByteString.fromBase64String(e5)
    : ByteString.fromUint8Array(e5);
}
function __PRIVATE_isServerTimestamp(e5) {
  var t4, n5;
  return (
    ((n5 = (
      ((t4 = e5 == null ? undefined : e5.mapValue) === null || t4 === undefined
        ? undefined
        : t4.fields) || {}
    ).__type__) === null || n5 === undefined
      ? undefined
      : n5.stringValue) === "server_timestamp"
  );
}
function __PRIVATE_getPreviousValue(e5) {
  const t4 = e5.mapValue.fields.__previous_value__;
  return __PRIVATE_isServerTimestamp(t4) ? __PRIVATE_getPreviousValue(t4) : t4;
}
function __PRIVATE_getLocalWriteTime(e5) {
  const t4 = __PRIVATE_normalizeTimestamp(
    e5.mapValue.fields.__local_write_time__.timestampValue
  );
  return new Timestamp(t4.seconds, t4.nanos);
}

class DatabaseInfo {
  constructor(e5, t4, n5, r7, i5, s3, o5, _2, a3) {
    (this.databaseId = e5),
      (this.appId = t4),
      (this.persistenceKey = n5),
      (this.host = r7),
      (this.ssl = i5),
      (this.forceLongPolling = s3),
      (this.autoDetectLongPolling = o5),
      (this.longPollingOptions = _2),
      (this.useFetchStreams = a3);
  }
}

class DatabaseId {
  constructor(e5, t4) {
    (this.projectId = e5), (this.database = t4 || "(default)");
  }
  static empty() {
    return new DatabaseId("", "");
  }
  get isDefaultDatabase() {
    return this.database === "(default)";
  }
  isEqual(e5) {
    return (
      e5 instanceof DatabaseId &&
      e5.projectId === this.projectId &&
      e5.database === this.database
    );
  }
}
var re = {
  mapValue: {
    fields: {
      __type__: {
        stringValue: "__max__",
      },
    },
  },
};
function __PRIVATE_typeOrder(e5) {
  return "nullValue" in e5
    ? 0
    : "booleanValue" in e5
    ? 1
    : "integerValue" in e5 || "doubleValue" in e5
    ? 2
    : "timestampValue" in e5
    ? 3
    : "stringValue" in e5
    ? 5
    : "bytesValue" in e5
    ? 6
    : "referenceValue" in e5
    ? 7
    : "geoPointValue" in e5
    ? 8
    : "arrayValue" in e5
    ? 9
    : "mapValue" in e5
    ? __PRIVATE_isServerTimestamp(e5)
      ? 4
      : __PRIVATE_isMaxValue(e5)
      ? 9007199254740991
      : __PRIVATE_isVectorValue(e5)
      ? 10
      : 11
    : fail();
}
function __PRIVATE_valueEquals(e5, t4) {
  if (e5 === t4) return true;
  const n5 = __PRIVATE_typeOrder(e5);
  if (n5 !== __PRIVATE_typeOrder(t4)) return false;
  switch (n5) {
    case 0:
    case 9007199254740991:
      return true;
    case 1:
      return e5.booleanValue === t4.booleanValue;
    case 4:
      return __PRIVATE_getLocalWriteTime(e5).isEqual(
        __PRIVATE_getLocalWriteTime(t4)
      );
    case 3:
      return (function __PRIVATE_timestampEquals(e6, t5) {
        if (
          typeof e6.timestampValue == "string" &&
          typeof t5.timestampValue == "string" &&
          e6.timestampValue.length === t5.timestampValue.length
        )
          return e6.timestampValue === t5.timestampValue;
        const n6 = __PRIVATE_normalizeTimestamp(e6.timestampValue),
          r7 = __PRIVATE_normalizeTimestamp(t5.timestampValue);
        return n6.seconds === r7.seconds && n6.nanos === r7.nanos;
      })(e5, t4);
    case 5:
      return e5.stringValue === t4.stringValue;
    case 6:
      return (function __PRIVATE_blobEquals(e6, t5) {
        return __PRIVATE_normalizeByteString(e6.bytesValue).isEqual(
          __PRIVATE_normalizeByteString(t5.bytesValue)
        );
      })(e5, t4);
    case 7:
      return e5.referenceValue === t4.referenceValue;
    case 8:
      return (function __PRIVATE_geoPointEquals(e6, t5) {
        return (
          __PRIVATE_normalizeNumber(e6.geoPointValue.latitude) ===
            __PRIVATE_normalizeNumber(t5.geoPointValue.latitude) &&
          __PRIVATE_normalizeNumber(e6.geoPointValue.longitude) ===
            __PRIVATE_normalizeNumber(t5.geoPointValue.longitude)
        );
      })(e5, t4);
    case 2:
      return (function __PRIVATE_numberEquals(e6, t5) {
        if ("integerValue" in e6 && "integerValue" in t5)
          return (
            __PRIVATE_normalizeNumber(e6.integerValue) ===
            __PRIVATE_normalizeNumber(t5.integerValue)
          );
        if ("doubleValue" in e6 && "doubleValue" in t5) {
          const n6 = __PRIVATE_normalizeNumber(e6.doubleValue),
            r7 = __PRIVATE_normalizeNumber(t5.doubleValue);
          return n6 === r7
            ? __PRIVATE_isNegativeZero(n6) === __PRIVATE_isNegativeZero(r7)
            : isNaN(n6) && isNaN(r7);
        }
        return false;
      })(e5, t4);
    case 9:
      return __PRIVATE_arrayEquals(
        e5.arrayValue.values || [],
        t4.arrayValue.values || [],
        __PRIVATE_valueEquals
      );
    case 10:
    case 11:
      return (function __PRIVATE_objectEquals(e6, t5) {
        const n6 = e6.mapValue.fields || {},
          r7 = t5.mapValue.fields || {};
        if (__PRIVATE_objectSize(n6) !== __PRIVATE_objectSize(r7)) return false;
        for (const e7 in n6)
          if (
            n6.hasOwnProperty(e7) &&
            (r7[e7] === undefined || !__PRIVATE_valueEquals(n6[e7], r7[e7]))
          )
            return false;
        return true;
      })(e5, t4);
    default:
      return fail();
  }
}
function __PRIVATE_arrayValueContains(e5, t4) {
  return (
    (e5.values || []).find((e6) => __PRIVATE_valueEquals(e6, t4)) !== undefined
  );
}
function __PRIVATE_valueCompare(e5, t4) {
  if (e5 === t4) return 0;
  const n5 = __PRIVATE_typeOrder(e5),
    r7 = __PRIVATE_typeOrder(t4);
  if (n5 !== r7) return __PRIVATE_primitiveComparator(n5, r7);
  switch (n5) {
    case 0:
    case 9007199254740991:
      return 0;
    case 1:
      return __PRIVATE_primitiveComparator(e5.booleanValue, t4.booleanValue);
    case 2:
      return (function __PRIVATE_compareNumbers(e6, t5) {
        const n6 = __PRIVATE_normalizeNumber(e6.integerValue || e6.doubleValue),
          r8 = __PRIVATE_normalizeNumber(t5.integerValue || t5.doubleValue);
        return n6 < r8
          ? -1
          : n6 > r8
          ? 1
          : n6 === r8
          ? 0
          : isNaN(n6)
          ? isNaN(r8)
            ? 0
            : -1
          : 1;
      })(e5, t4);
    case 3:
      return __PRIVATE_compareTimestamps(e5.timestampValue, t4.timestampValue);
    case 4:
      return __PRIVATE_compareTimestamps(
        __PRIVATE_getLocalWriteTime(e5),
        __PRIVATE_getLocalWriteTime(t4)
      );
    case 5:
      return __PRIVATE_primitiveComparator(e5.stringValue, t4.stringValue);
    case 6:
      return (function __PRIVATE_compareBlobs(e6, t5) {
        const n6 = __PRIVATE_normalizeByteString(e6),
          r8 = __PRIVATE_normalizeByteString(t5);
        return n6.compareTo(r8);
      })(e5.bytesValue, t4.bytesValue);
    case 7:
      return (function __PRIVATE_compareReferences(e6, t5) {
        const n6 = e6.split("/"),
          r8 = t5.split("/");
        for (let e7 = 0; e7 < n6.length && e7 < r8.length; e7++) {
          const t6 = __PRIVATE_primitiveComparator(n6[e7], r8[e7]);
          if (t6 !== 0) return t6;
        }
        return __PRIVATE_primitiveComparator(n6.length, r8.length);
      })(e5.referenceValue, t4.referenceValue);
    case 8:
      return (function __PRIVATE_compareGeoPoints(e6, t5) {
        const n6 = __PRIVATE_primitiveComparator(
          __PRIVATE_normalizeNumber(e6.latitude),
          __PRIVATE_normalizeNumber(t5.latitude)
        );
        if (n6 !== 0) return n6;
        return __PRIVATE_primitiveComparator(
          __PRIVATE_normalizeNumber(e6.longitude),
          __PRIVATE_normalizeNumber(t5.longitude)
        );
      })(e5.geoPointValue, t4.geoPointValue);
    case 9:
      return __PRIVATE_compareArrays(e5.arrayValue, t4.arrayValue);
    case 10:
      return (function __PRIVATE_compareVectors(e6, t5) {
        var n6, r8, i5, s3;
        const o5 = e6.fields || {},
          _2 = t5.fields || {},
          a3 =
            (n6 = o5.value) === null || n6 === undefined
              ? undefined
              : n6.arrayValue,
          u3 =
            (r8 = _2.value) === null || r8 === undefined
              ? undefined
              : r8.arrayValue,
          c4 = __PRIVATE_primitiveComparator(
            ((i5 = a3 == null ? undefined : a3.values) === null ||
            i5 === undefined
              ? undefined
              : i5.length) || 0,
            ((s3 = u3 == null ? undefined : u3.values) === null ||
            s3 === undefined
              ? undefined
              : s3.length) || 0
          );
        if (c4 !== 0) return c4;
        return __PRIVATE_compareArrays(a3, u3);
      })(e5.mapValue, t4.mapValue);
    case 11:
      return (function __PRIVATE_compareMaps(e6, t5) {
        if (e6 === re.mapValue && t5 === re.mapValue) return 0;
        if (e6 === re.mapValue) return 1;
        if (t5 === re.mapValue) return -1;
        const n6 = e6.fields || {},
          r8 = Object.keys(n6),
          i5 = t5.fields || {},
          s3 = Object.keys(i5);
        r8.sort(), s3.sort();
        for (let e7 = 0; e7 < r8.length && e7 < s3.length; ++e7) {
          const t6 = __PRIVATE_primitiveComparator(r8[e7], s3[e7]);
          if (t6 !== 0) return t6;
          const o5 = __PRIVATE_valueCompare(n6[r8[e7]], i5[s3[e7]]);
          if (o5 !== 0) return o5;
        }
        return __PRIVATE_primitiveComparator(r8.length, s3.length);
      })(e5.mapValue, t4.mapValue);
    default:
      throw fail();
  }
}
function __PRIVATE_compareTimestamps(e5, t4) {
  if (typeof e5 == "string" && typeof t4 == "string" && e5.length === t4.length)
    return __PRIVATE_primitiveComparator(e5, t4);
  const n5 = __PRIVATE_normalizeTimestamp(e5),
    r7 = __PRIVATE_normalizeTimestamp(t4),
    i5 = __PRIVATE_primitiveComparator(n5.seconds, r7.seconds);
  return i5 !== 0 ? i5 : __PRIVATE_primitiveComparator(n5.nanos, r7.nanos);
}
function __PRIVATE_compareArrays(e5, t4) {
  const n5 = e5.values || [],
    r7 = t4.values || [];
  for (let e6 = 0; e6 < n5.length && e6 < r7.length; ++e6) {
    const t5 = __PRIVATE_valueCompare(n5[e6], r7[e6]);
    if (t5) return t5;
  }
  return __PRIVATE_primitiveComparator(n5.length, r7.length);
}
function canonicalId(e5) {
  return __PRIVATE_canonifyValue(e5);
}
function __PRIVATE_canonifyValue(e5) {
  return "nullValue" in e5
    ? "null"
    : "booleanValue" in e5
    ? "" + e5.booleanValue
    : "integerValue" in e5
    ? "" + e5.integerValue
    : "doubleValue" in e5
    ? "" + e5.doubleValue
    : "timestampValue" in e5
    ? (function __PRIVATE_canonifyTimestamp(e6) {
        const t4 = __PRIVATE_normalizeTimestamp(e6);
        return `time(${t4.seconds},${t4.nanos})`;
      })(e5.timestampValue)
    : "stringValue" in e5
    ? e5.stringValue
    : "bytesValue" in e5
    ? (function __PRIVATE_canonifyByteString(e6) {
        return __PRIVATE_normalizeByteString(e6).toBase64();
      })(e5.bytesValue)
    : "referenceValue" in e5
    ? (function __PRIVATE_canonifyReference(e6) {
        return DocumentKey.fromName(e6).toString();
      })(e5.referenceValue)
    : "geoPointValue" in e5
    ? (function __PRIVATE_canonifyGeoPoint(e6) {
        return `geo(${e6.latitude},${e6.longitude})`;
      })(e5.geoPointValue)
    : "arrayValue" in e5
    ? (function __PRIVATE_canonifyArray(e6) {
        let t4 = "[",
          n5 = true;
        for (const r7 of e6.values || [])
          n5 ? (n5 = false) : (t4 += ","), (t4 += __PRIVATE_canonifyValue(r7));
        return t4 + "]";
      })(e5.arrayValue)
    : "mapValue" in e5
    ? (function __PRIVATE_canonifyMap(e6) {
        const t4 = Object.keys(e6.fields || {}).sort();
        let n5 = "{",
          r7 = true;
        for (const i5 of t4)
          r7 ? (r7 = false) : (n5 += ","),
            (n5 += `${i5}:${__PRIVATE_canonifyValue(e6.fields[i5])}`);
        return n5 + "}";
      })(e5.mapValue)
    : fail();
}
function __PRIVATE_estimateByteSize(e5) {
  switch (__PRIVATE_typeOrder(e5)) {
    case 0:
    case 1:
      return 4;
    case 2:
      return 8;
    case 3:
    case 8:
      return 16;
    case 4:
      const t4 = __PRIVATE_getPreviousValue(e5);
      return t4 ? 16 + __PRIVATE_estimateByteSize(t4) : 16;
    case 5:
      return 2 * e5.stringValue.length;
    case 6:
      return __PRIVATE_normalizeByteString(e5.bytesValue).approximateByteSize();
    case 7:
      return e5.referenceValue.length;
    case 9:
      return (function __PRIVATE_estimateArrayByteSize(e6) {
        return (e6.values || []).reduce(
          (e7, t5) => e7 + __PRIVATE_estimateByteSize(t5),
          0
        );
      })(e5.arrayValue);
    case 10:
    case 11:
      return (function __PRIVATE_estimateMapByteSize(e6) {
        let t5 = 0;
        return (
          forEach(e6.fields, (e7, n5) => {
            t5 += e7.length + __PRIVATE_estimateByteSize(n5);
          }),
          t5
        );
      })(e5.mapValue);
    default:
      throw fail();
  }
}
function isInteger(e5) {
  return !!e5 && "integerValue" in e5;
}
function isArray(e5) {
  return !!e5 && "arrayValue" in e5;
}
function __PRIVATE_isNullValue(e5) {
  return !!e5 && "nullValue" in e5;
}
function __PRIVATE_isNanValue(e5) {
  return !!e5 && "doubleValue" in e5 && isNaN(Number(e5.doubleValue));
}
function __PRIVATE_isMapValue(e5) {
  return !!e5 && "mapValue" in e5;
}
function __PRIVATE_isVectorValue(e5) {
  var t4, n5;
  return (
    ((n5 = (
      ((t4 = e5 == null ? undefined : e5.mapValue) === null || t4 === undefined
        ? undefined
        : t4.fields) || {}
    ).__type__) === null || n5 === undefined
      ? undefined
      : n5.stringValue) === "__vector__"
  );
}
function __PRIVATE_deepClone(e5) {
  if (e5.geoPointValue)
    return {
      geoPointValue: Object.assign({}, e5.geoPointValue),
    };
  if (e5.timestampValue && typeof e5.timestampValue == "object")
    return {
      timestampValue: Object.assign({}, e5.timestampValue),
    };
  if (e5.mapValue) {
    const t4 = {
      mapValue: {
        fields: {},
      },
    };
    return (
      forEach(
        e5.mapValue.fields,
        (e6, n5) => (t4.mapValue.fields[e6] = __PRIVATE_deepClone(n5))
      ),
      t4
    );
  }
  if (e5.arrayValue) {
    const t4 = {
      arrayValue: {
        values: [],
      },
    };
    for (let n5 = 0; n5 < (e5.arrayValue.values || []).length; ++n5)
      t4.arrayValue.values[n5] = __PRIVATE_deepClone(e5.arrayValue.values[n5]);
    return t4;
  }
  return Object.assign({}, e5);
}
function __PRIVATE_isMaxValue(e5) {
  return (
    (((e5.mapValue || {}).fields || {}).__type__ || {}).stringValue ===
    "__max__"
  );
}
class ObjectValue {
  constructor(e5) {
    this.value = e5;
  }
  static empty() {
    return new ObjectValue({
      mapValue: {},
    });
  }
  field(e5) {
    if (e5.isEmpty()) return this.value;
    {
      let t4 = this.value;
      for (let n5 = 0; n5 < e5.length - 1; ++n5)
        if (
          ((t4 = (t4.mapValue.fields || {})[e5.get(n5)]),
          !__PRIVATE_isMapValue(t4))
        )
          return null;
      return (t4 = (t4.mapValue.fields || {})[e5.lastSegment()]), t4 || null;
    }
  }
  set(e5, t4) {
    this.getFieldsMap(e5.popLast())[e5.lastSegment()] = __PRIVATE_deepClone(t4);
  }
  setAll(e5) {
    let t4 = FieldPath$1.emptyPath(),
      n5 = {},
      r7 = [];
    e5.forEach((e6, i6) => {
      if (!t4.isImmediateParentOf(i6)) {
        const e7 = this.getFieldsMap(t4);
        this.applyChanges(e7, n5, r7),
          (n5 = {}),
          (r7 = []),
          (t4 = i6.popLast());
      }
      e6
        ? (n5[i6.lastSegment()] = __PRIVATE_deepClone(e6))
        : r7.push(i6.lastSegment());
    });
    const i5 = this.getFieldsMap(t4);
    this.applyChanges(i5, n5, r7);
  }
  delete(e5) {
    const t4 = this.field(e5.popLast());
    __PRIVATE_isMapValue(t4) &&
      t4.mapValue.fields &&
      delete t4.mapValue.fields[e5.lastSegment()];
  }
  isEqual(e5) {
    return __PRIVATE_valueEquals(this.value, e5.value);
  }
  getFieldsMap(e5) {
    let t4 = this.value;
    t4.mapValue.fields ||
      (t4.mapValue = {
        fields: {},
      });
    for (let n5 = 0; n5 < e5.length; ++n5) {
      let r7 = t4.mapValue.fields[e5.get(n5)];
      (__PRIVATE_isMapValue(r7) && r7.mapValue.fields) ||
        ((r7 = {
          mapValue: {
            fields: {},
          },
        }),
        (t4.mapValue.fields[e5.get(n5)] = r7)),
        (t4 = r7);
    }
    return t4.mapValue.fields;
  }
  applyChanges(e5, t4, n5) {
    forEach(t4, (t5, n6) => (e5[t5] = n6));
    for (const t5 of n5) delete e5[t5];
  }
  clone() {
    return new ObjectValue(__PRIVATE_deepClone(this.value));
  }
}
class MutableDocument {
  constructor(e5, t4, n5, r7, i5, s3, o5) {
    (this.key = e5),
      (this.documentType = t4),
      (this.version = n5),
      (this.readTime = r7),
      (this.createTime = i5),
      (this.data = s3),
      (this.documentState = o5);
  }
  static newInvalidDocument(e5) {
    return new MutableDocument(
      e5,
      0,
      SnapshotVersion.min(),
      SnapshotVersion.min(),
      SnapshotVersion.min(),
      ObjectValue.empty(),
      0
    );
  }
  static newFoundDocument(e5, t4, n5, r7) {
    return new MutableDocument(e5, 1, t4, SnapshotVersion.min(), n5, r7, 0);
  }
  static newNoDocument(e5, t4) {
    return new MutableDocument(
      e5,
      2,
      t4,
      SnapshotVersion.min(),
      SnapshotVersion.min(),
      ObjectValue.empty(),
      0
    );
  }
  static newUnknownDocument(e5, t4) {
    return new MutableDocument(
      e5,
      3,
      t4,
      SnapshotVersion.min(),
      SnapshotVersion.min(),
      ObjectValue.empty(),
      2
    );
  }
  convertToFoundDocument(e5, t4) {
    return (
      !this.createTime.isEqual(SnapshotVersion.min()) ||
        (this.documentType !== 2 && this.documentType !== 0) ||
        (this.createTime = e5),
      (this.version = e5),
      (this.documentType = 1),
      (this.data = t4),
      (this.documentState = 0),
      this
    );
  }
  convertToNoDocument(e5) {
    return (
      (this.version = e5),
      (this.documentType = 2),
      (this.data = ObjectValue.empty()),
      (this.documentState = 0),
      this
    );
  }
  convertToUnknownDocument(e5) {
    return (
      (this.version = e5),
      (this.documentType = 3),
      (this.data = ObjectValue.empty()),
      (this.documentState = 2),
      this
    );
  }
  setHasCommittedMutations() {
    return (this.documentState = 2), this;
  }
  setHasLocalMutations() {
    return (
      (this.documentState = 1), (this.version = SnapshotVersion.min()), this
    );
  }
  setReadTime(e5) {
    return (this.readTime = e5), this;
  }
  get hasLocalMutations() {
    return this.documentState === 1;
  }
  get hasCommittedMutations() {
    return this.documentState === 2;
  }
  get hasPendingWrites() {
    return this.hasLocalMutations || this.hasCommittedMutations;
  }
  isValidDocument() {
    return this.documentType !== 0;
  }
  isFoundDocument() {
    return this.documentType === 1;
  }
  isNoDocument() {
    return this.documentType === 2;
  }
  isUnknownDocument() {
    return this.documentType === 3;
  }
  isEqual(e5) {
    return (
      e5 instanceof MutableDocument &&
      this.key.isEqual(e5.key) &&
      this.version.isEqual(e5.version) &&
      this.documentType === e5.documentType &&
      this.documentState === e5.documentState &&
      this.data.isEqual(e5.data)
    );
  }
  mutableCopy() {
    return new MutableDocument(
      this.key,
      this.documentType,
      this.version,
      this.readTime,
      this.createTime,
      this.data.clone(),
      this.documentState
    );
  }
  toString() {
    return `Document(${this.key}, ${this.version}, ${JSON.stringify(
      this.data.value
    )}, {createTime: ${this.createTime}}), {documentType: ${
      this.documentType
    }}), {documentState: ${this.documentState}})`;
  }
}

class Bound {
  constructor(e5, t4) {
    (this.position = e5), (this.inclusive = t4);
  }
}
function __PRIVATE_boundCompareToDocument(e5, t4, n5) {
  let r7 = 0;
  for (let i5 = 0; i5 < e5.position.length; i5++) {
    const s3 = t4[i5],
      o5 = e5.position[i5];
    if (s3.field.isKeyField())
      r7 = DocumentKey.comparator(
        DocumentKey.fromName(o5.referenceValue),
        n5.key
      );
    else {
      r7 = __PRIVATE_valueCompare(o5, n5.data.field(s3.field));
    }
    if ((s3.dir === "desc" && (r7 *= -1), r7 !== 0)) break;
  }
  return r7;
}
function __PRIVATE_boundEquals(e5, t4) {
  if (e5 === null) return t4 === null;
  if (t4 === null) return false;
  if (
    e5.inclusive !== t4.inclusive ||
    e5.position.length !== t4.position.length
  )
    return false;
  for (let n5 = 0; n5 < e5.position.length; n5++) {
    if (!__PRIVATE_valueEquals(e5.position[n5], t4.position[n5])) return false;
  }
  return true;
}

class OrderBy {
  constructor(e5, t4 = "asc") {
    (this.field = e5), (this.dir = t4);
  }
}
function __PRIVATE_orderByEquals(e5, t4) {
  return e5.dir === t4.dir && e5.field.isEqual(t4.field);
}

class Filter {}

class FieldFilter extends Filter {
  constructor(e5, t4, n5) {
    super(), (this.field = e5), (this.op = t4), (this.value = n5);
  }
  static create(e5, t4, n5) {
    return e5.isKeyField()
      ? t4 === "in" || t4 === "not-in"
        ? this.createKeyFieldInFilter(e5, t4, n5)
        : new __PRIVATE_KeyFieldFilter(e5, t4, n5)
      : t4 === "array-contains"
      ? new __PRIVATE_ArrayContainsFilter(e5, n5)
      : t4 === "in"
      ? new __PRIVATE_InFilter(e5, n5)
      : t4 === "not-in"
      ? new __PRIVATE_NotInFilter(e5, n5)
      : t4 === "array-contains-any"
      ? new __PRIVATE_ArrayContainsAnyFilter(e5, n5)
      : new FieldFilter(e5, t4, n5);
  }
  static createKeyFieldInFilter(e5, t4, n5) {
    return t4 === "in"
      ? new __PRIVATE_KeyFieldInFilter(e5, n5)
      : new __PRIVATE_KeyFieldNotInFilter(e5, n5);
  }
  matches(e5) {
    const t4 = e5.data.field(this.field);
    return this.op === "!="
      ? t4 !== null &&
          this.matchesComparison(__PRIVATE_valueCompare(t4, this.value))
      : t4 !== null &&
          __PRIVATE_typeOrder(this.value) === __PRIVATE_typeOrder(t4) &&
          this.matchesComparison(__PRIVATE_valueCompare(t4, this.value));
  }
  matchesComparison(e5) {
    switch (this.op) {
      case "<":
        return e5 < 0;
      case "<=":
        return e5 <= 0;
      case "==":
        return e5 === 0;
      case "!=":
        return e5 !== 0;
      case ">":
        return e5 > 0;
      case ">=":
        return e5 >= 0;
      default:
        return fail();
    }
  }
  isInequality() {
    return ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op) >= 0;
  }
  getFlattenedFilters() {
    return [this];
  }
  getFilters() {
    return [this];
  }
}

class CompositeFilter extends Filter {
  constructor(e5, t4) {
    super(), (this.filters = e5), (this.op = t4), (this.ae = null);
  }
  static create(e5, t4) {
    return new CompositeFilter(e5, t4);
  }
  matches(e5) {
    return __PRIVATE_compositeFilterIsConjunction(this)
      ? this.filters.find((t4) => !t4.matches(e5)) === undefined
      : this.filters.find((t4) => t4.matches(e5)) !== undefined;
  }
  getFlattenedFilters() {
    return (
      this.ae !== null ||
        (this.ae = this.filters.reduce(
          (e5, t4) => e5.concat(t4.getFlattenedFilters()),
          []
        )),
      this.ae
    );
  }
  getFilters() {
    return Object.assign([], this.filters);
  }
}
function __PRIVATE_compositeFilterIsConjunction(e5) {
  return e5.op === "and";
}
function __PRIVATE_compositeFilterIsFlatConjunction(e5) {
  return (
    __PRIVATE_compositeFilterIsFlat(e5) &&
    __PRIVATE_compositeFilterIsConjunction(e5)
  );
}
function __PRIVATE_compositeFilterIsFlat(e5) {
  for (const t4 of e5.filters) if (t4 instanceof CompositeFilter) return false;
  return true;
}
function __PRIVATE_canonifyFilter(e5) {
  if (e5 instanceof FieldFilter)
    return (
      e5.field.canonicalString() + e5.op.toString() + canonicalId(e5.value)
    );
  if (__PRIVATE_compositeFilterIsFlatConjunction(e5))
    return e5.filters.map((e6) => __PRIVATE_canonifyFilter(e6)).join(",");
  {
    const t4 = e5.filters.map((e6) => __PRIVATE_canonifyFilter(e6)).join(",");
    return `${e5.op}(${t4})`;
  }
}
function __PRIVATE_filterEquals(e5, t4) {
  return e5 instanceof FieldFilter
    ? (function __PRIVATE_fieldFilterEquals(e6, t5) {
        return (
          t5 instanceof FieldFilter &&
          e6.op === t5.op &&
          e6.field.isEqual(t5.field) &&
          __PRIVATE_valueEquals(e6.value, t5.value)
        );
      })(e5, t4)
    : e5 instanceof CompositeFilter
    ? (function __PRIVATE_compositeFilterEquals(e6, t5) {
        if (
          t5 instanceof CompositeFilter &&
          e6.op === t5.op &&
          e6.filters.length === t5.filters.length
        ) {
          return e6.filters.reduce(
            (e7, n5, r7) => e7 && __PRIVATE_filterEquals(n5, t5.filters[r7]),
            true
          );
        }
        return false;
      })(e5, t4)
    : void fail();
}
function __PRIVATE_stringifyFilter(e5) {
  return e5 instanceof FieldFilter
    ? (function __PRIVATE_stringifyFieldFilter(e6) {
        return `${e6.field.canonicalString()} ${e6.op} ${canonicalId(
          e6.value
        )}`;
      })(e5)
    : e5 instanceof CompositeFilter
    ? (function __PRIVATE_stringifyCompositeFilter(e6) {
        return (
          e6.op.toString() +
          " {" +
          e6.getFilters().map(__PRIVATE_stringifyFilter).join(" ,") +
          "}"
        );
      })(e5)
    : "Filter";
}

class __PRIVATE_KeyFieldFilter extends FieldFilter {
  constructor(e5, t4, n5) {
    super(e5, t4, n5), (this.key = DocumentKey.fromName(n5.referenceValue));
  }
  matches(e5) {
    const t4 = DocumentKey.comparator(e5.key, this.key);
    return this.matchesComparison(t4);
  }
}

class __PRIVATE_KeyFieldInFilter extends FieldFilter {
  constructor(e5, t4) {
    super(e5, "in", t4),
      (this.keys = __PRIVATE_extractDocumentKeysFromArrayValue("in", t4));
  }
  matches(e5) {
    return this.keys.some((t4) => t4.isEqual(e5.key));
  }
}

class __PRIVATE_KeyFieldNotInFilter extends FieldFilter {
  constructor(e5, t4) {
    super(e5, "not-in", t4),
      (this.keys = __PRIVATE_extractDocumentKeysFromArrayValue("not-in", t4));
  }
  matches(e5) {
    return !this.keys.some((t4) => t4.isEqual(e5.key));
  }
}
function __PRIVATE_extractDocumentKeysFromArrayValue(e5, t4) {
  var n5;
  return (
    ((n5 = t4.arrayValue) === null || n5 === undefined
      ? undefined
      : n5.values) || []
  ).map((e6) => DocumentKey.fromName(e6.referenceValue));
}

class __PRIVATE_ArrayContainsFilter extends FieldFilter {
  constructor(e5, t4) {
    super(e5, "array-contains", t4);
  }
  matches(e5) {
    const t4 = e5.data.field(this.field);
    return (
      isArray(t4) && __PRIVATE_arrayValueContains(t4.arrayValue, this.value)
    );
  }
}

class __PRIVATE_InFilter extends FieldFilter {
  constructor(e5, t4) {
    super(e5, "in", t4);
  }
  matches(e5) {
    const t4 = e5.data.field(this.field);
    return (
      t4 !== null && __PRIVATE_arrayValueContains(this.value.arrayValue, t4)
    );
  }
}

class __PRIVATE_NotInFilter extends FieldFilter {
  constructor(e5, t4) {
    super(e5, "not-in", t4);
  }
  matches(e5) {
    if (
      __PRIVATE_arrayValueContains(this.value.arrayValue, {
        nullValue: "NULL_VALUE",
      })
    )
      return false;
    const t4 = e5.data.field(this.field);
    return (
      t4 !== null && !__PRIVATE_arrayValueContains(this.value.arrayValue, t4)
    );
  }
}

class __PRIVATE_ArrayContainsAnyFilter extends FieldFilter {
  constructor(e5, t4) {
    super(e5, "array-contains-any", t4);
  }
  matches(e5) {
    const t4 = e5.data.field(this.field);
    return (
      !(!isArray(t4) || !t4.arrayValue.values) &&
      t4.arrayValue.values.some((e6) =>
        __PRIVATE_arrayValueContains(this.value.arrayValue, e6)
      )
    );
  }
}

class __PRIVATE_TargetImpl {
  constructor(
    e5,
    t4 = null,
    n5 = [],
    r7 = [],
    i5 = null,
    s3 = null,
    o5 = null
  ) {
    (this.path = e5),
      (this.collectionGroup = t4),
      (this.orderBy = n5),
      (this.filters = r7),
      (this.limit = i5),
      (this.startAt = s3),
      (this.endAt = o5),
      (this.ue = null);
  }
}
function __PRIVATE_newTarget(
  e5,
  t4 = null,
  n5 = [],
  r7 = [],
  i5 = null,
  s3 = null,
  o5 = null
) {
  return new __PRIVATE_TargetImpl(e5, t4, n5, r7, i5, s3, o5);
}
function __PRIVATE_canonifyTarget(e5) {
  const t4 = __PRIVATE_debugCast(e5);
  if (t4.ue === null) {
    let e6 = t4.path.canonicalString();
    t4.collectionGroup !== null && (e6 += "|cg:" + t4.collectionGroup),
      (e6 += "|f:"),
      (e6 += t4.filters.map((e7) => __PRIVATE_canonifyFilter(e7)).join(",")),
      (e6 += "|ob:"),
      (e6 += t4.orderBy
        .map((e7) =>
          (function __PRIVATE_canonifyOrderBy(e8) {
            return e8.field.canonicalString() + e8.dir;
          })(e7)
        )
        .join(",")),
      __PRIVATE_isNullOrUndefined(t4.limit) ||
        ((e6 += "|l:"), (e6 += t4.limit)),
      t4.startAt &&
        ((e6 += "|lb:"),
        (e6 += t4.startAt.inclusive ? "b:" : "a:"),
        (e6 += t4.startAt.position.map((e7) => canonicalId(e7)).join(","))),
      t4.endAt &&
        ((e6 += "|ub:"),
        (e6 += t4.endAt.inclusive ? "a:" : "b:"),
        (e6 += t4.endAt.position.map((e7) => canonicalId(e7)).join(","))),
      (t4.ue = e6);
  }
  return t4.ue;
}
function __PRIVATE_targetEquals(e5, t4) {
  if (e5.limit !== t4.limit) return false;
  if (e5.orderBy.length !== t4.orderBy.length) return false;
  for (let n5 = 0; n5 < e5.orderBy.length; n5++)
    if (!__PRIVATE_orderByEquals(e5.orderBy[n5], t4.orderBy[n5])) return false;
  if (e5.filters.length !== t4.filters.length) return false;
  for (let n5 = 0; n5 < e5.filters.length; n5++)
    if (!__PRIVATE_filterEquals(e5.filters[n5], t4.filters[n5])) return false;
  return (
    e5.collectionGroup === t4.collectionGroup &&
    !!e5.path.isEqual(t4.path) &&
    !!__PRIVATE_boundEquals(e5.startAt, t4.startAt) &&
    __PRIVATE_boundEquals(e5.endAt, t4.endAt)
  );
}
function __PRIVATE_targetIsDocumentTarget(e5) {
  return (
    DocumentKey.isDocumentKey(e5.path) &&
    e5.collectionGroup === null &&
    e5.filters.length === 0
  );
}
class __PRIVATE_QueryImpl {
  constructor(
    e5,
    t4 = null,
    n5 = [],
    r7 = [],
    i5 = null,
    s3 = "F",
    o5 = null,
    _2 = null
  ) {
    (this.path = e5),
      (this.collectionGroup = t4),
      (this.explicitOrderBy = n5),
      (this.filters = r7),
      (this.limit = i5),
      (this.limitType = s3),
      (this.startAt = o5),
      (this.endAt = _2),
      (this.ce = null),
      (this.le = null),
      (this.he = null),
      this.startAt,
      this.endAt;
  }
}
function __PRIVATE_newQuery(e5, t4, n5, r7, i5, s3, o5, _2) {
  return new __PRIVATE_QueryImpl(e5, t4, n5, r7, i5, s3, o5, _2);
}
function __PRIVATE_newQueryForPath(e5) {
  return new __PRIVATE_QueryImpl(e5);
}
function __PRIVATE_queryMatchesAllDocuments(e5) {
  return (
    e5.filters.length === 0 &&
    e5.limit === null &&
    e5.startAt == null &&
    e5.endAt == null &&
    (e5.explicitOrderBy.length === 0 ||
      (e5.explicitOrderBy.length === 1 &&
        e5.explicitOrderBy[0].field.isKeyField()))
  );
}
function __PRIVATE_isCollectionGroupQuery(e5) {
  return e5.collectionGroup !== null;
}
function __PRIVATE_queryNormalizedOrderBy(e5) {
  const t4 = __PRIVATE_debugCast(e5);
  if (t4.ce === null) {
    t4.ce = [];
    const e6 = new Set();
    for (const n6 of t4.explicitOrderBy)
      t4.ce.push(n6), e6.add(n6.field.canonicalString());
    const n5 =
        t4.explicitOrderBy.length > 0
          ? t4.explicitOrderBy[t4.explicitOrderBy.length - 1].dir
          : "asc",
      r7 = (function __PRIVATE_getInequalityFilterFields(e7) {
        let t5 = new SortedSet(FieldPath$1.comparator);
        return (
          e7.filters.forEach((e8) => {
            e8.getFlattenedFilters().forEach((e9) => {
              e9.isInequality() && (t5 = t5.add(e9.field));
            });
          }),
          t5
        );
      })(t4);
    r7.forEach((r8) => {
      e6.has(r8.canonicalString()) ||
        r8.isKeyField() ||
        t4.ce.push(new OrderBy(r8, n5));
    }),
      e6.has(FieldPath$1.keyField().canonicalString()) ||
        t4.ce.push(new OrderBy(FieldPath$1.keyField(), n5));
  }
  return t4.ce;
}
function __PRIVATE_queryToTarget(e5) {
  const t4 = __PRIVATE_debugCast(e5);
  return (
    t4.le ||
      (t4.le = __PRIVATE__queryToTarget(
        t4,
        __PRIVATE_queryNormalizedOrderBy(e5)
      )),
    t4.le
  );
}
function __PRIVATE__queryToTarget(e5, t4) {
  if (e5.limitType === "F")
    return __PRIVATE_newTarget(
      e5.path,
      e5.collectionGroup,
      t4,
      e5.filters,
      e5.limit,
      e5.startAt,
      e5.endAt
    );
  {
    t4 = t4.map((e6) => {
      const t5 = e6.dir === "desc" ? "asc" : "desc";
      return new OrderBy(e6.field, t5);
    });
    const n5 = e5.endAt
        ? new Bound(e5.endAt.position, e5.endAt.inclusive)
        : null,
      r7 = e5.startAt
        ? new Bound(e5.startAt.position, e5.startAt.inclusive)
        : null;
    return __PRIVATE_newTarget(
      e5.path,
      e5.collectionGroup,
      t4,
      e5.filters,
      e5.limit,
      n5,
      r7
    );
  }
}
function __PRIVATE_queryWithLimit(e5, t4, n5) {
  return new __PRIVATE_QueryImpl(
    e5.path,
    e5.collectionGroup,
    e5.explicitOrderBy.slice(),
    e5.filters.slice(),
    t4,
    n5,
    e5.startAt,
    e5.endAt
  );
}
function __PRIVATE_queryEquals(e5, t4) {
  return (
    __PRIVATE_targetEquals(
      __PRIVATE_queryToTarget(e5),
      __PRIVATE_queryToTarget(t4)
    ) && e5.limitType === t4.limitType
  );
}
function __PRIVATE_canonifyQuery(e5) {
  return `${__PRIVATE_canonifyTarget(__PRIVATE_queryToTarget(e5))}|lt:${
    e5.limitType
  }`;
}
function __PRIVATE_stringifyQuery(e5) {
  return `Query(target=${(function __PRIVATE_stringifyTarget(e6) {
    let t4 = e6.path.canonicalString();
    return (
      e6.collectionGroup !== null &&
        (t4 += " collectionGroup=" + e6.collectionGroup),
      e6.filters.length > 0 &&
        (t4 += `, filters: [${e6.filters
          .map((e7) => __PRIVATE_stringifyFilter(e7))
          .join(", ")}]`),
      __PRIVATE_isNullOrUndefined(e6.limit) || (t4 += ", limit: " + e6.limit),
      e6.orderBy.length > 0 &&
        (t4 += `, orderBy: [${e6.orderBy
          .map((e7) =>
            (function __PRIVATE_stringifyOrderBy(e8) {
              return `${e8.field.canonicalString()} (${e8.dir})`;
            })(e7)
          )
          .join(", ")}]`),
      e6.startAt &&
        ((t4 += ", startAt: "),
        (t4 += e6.startAt.inclusive ? "b:" : "a:"),
        (t4 += e6.startAt.position.map((e7) => canonicalId(e7)).join(","))),
      e6.endAt &&
        ((t4 += ", endAt: "),
        (t4 += e6.endAt.inclusive ? "a:" : "b:"),
        (t4 += e6.endAt.position.map((e7) => canonicalId(e7)).join(","))),
      `Target(${t4})`
    );
  })(__PRIVATE_queryToTarget(e5))}; limitType=${e5.limitType})`;
}
function __PRIVATE_queryMatches(e5, t4) {
  return (
    t4.isFoundDocument() &&
    (function __PRIVATE_queryMatchesPathAndCollectionGroup(e6, t5) {
      const n5 = t5.key.path;
      return e6.collectionGroup !== null
        ? t5.key.hasCollectionId(e6.collectionGroup) && e6.path.isPrefixOf(n5)
        : DocumentKey.isDocumentKey(e6.path)
        ? e6.path.isEqual(n5)
        : e6.path.isImmediateParentOf(n5);
    })(e5, t4) &&
    (function __PRIVATE_queryMatchesOrderBy(e6, t5) {
      for (const n5 of __PRIVATE_queryNormalizedOrderBy(e6))
        if (!n5.field.isKeyField() && t5.data.field(n5.field) === null)
          return false;
      return true;
    })(e5, t4) &&
    (function __PRIVATE_queryMatchesFilters(e6, t5) {
      for (const n5 of e6.filters) if (!n5.matches(t5)) return false;
      return true;
    })(e5, t4) &&
    (function __PRIVATE_queryMatchesBounds(e6, t5) {
      if (
        e6.startAt &&
        !(function __PRIVATE_boundSortsBeforeDocument(e7, t6, n5) {
          const r7 = __PRIVATE_boundCompareToDocument(e7, t6, n5);
          return e7.inclusive ? r7 <= 0 : r7 < 0;
        })(e6.startAt, __PRIVATE_queryNormalizedOrderBy(e6), t5)
      )
        return false;
      if (
        e6.endAt &&
        !(function __PRIVATE_boundSortsAfterDocument(e7, t6, n5) {
          const r7 = __PRIVATE_boundCompareToDocument(e7, t6, n5);
          return e7.inclusive ? r7 >= 0 : r7 > 0;
        })(e6.endAt, __PRIVATE_queryNormalizedOrderBy(e6), t5)
      )
        return false;
      return true;
    })(e5, t4)
  );
}
function __PRIVATE_queryCollectionGroup(e5) {
  return (
    e5.collectionGroup ||
    (e5.path.length % 2 == 1
      ? e5.path.lastSegment()
      : e5.path.get(e5.path.length - 2))
  );
}
function __PRIVATE_newQueryComparator(e5) {
  return (t4, n5) => {
    let r7 = false;
    for (const i5 of __PRIVATE_queryNormalizedOrderBy(e5)) {
      const e6 = __PRIVATE_compareDocs(i5, t4, n5);
      if (e6 !== 0) return e6;
      r7 = r7 || i5.field.isKeyField();
    }
    return 0;
  };
}
function __PRIVATE_compareDocs(e5, t4, n5) {
  const r7 = e5.field.isKeyField()
    ? DocumentKey.comparator(t4.key, n5.key)
    : (function __PRIVATE_compareDocumentsByField(e6, t5, n6) {
        const r8 = t5.data.field(e6),
          i5 = n6.data.field(e6);
        return r8 !== null && i5 !== null
          ? __PRIVATE_valueCompare(r8, i5)
          : fail();
      })(e5.field, t4, n5);
  switch (e5.dir) {
    case "asc":
      return r7;
    case "desc":
      return -1 * r7;
    default:
      return fail();
  }
}

class ObjectMap {
  constructor(e5, t4) {
    (this.mapKeyFn = e5),
      (this.equalsFn = t4),
      (this.inner = {}),
      (this.innerSize = 0);
  }
  get(e5) {
    const t4 = this.mapKeyFn(e5),
      n5 = this.inner[t4];
    if (n5 !== undefined) {
      for (const [t5, r7] of n5) if (this.equalsFn(t5, e5)) return r7;
    }
  }
  has(e5) {
    return this.get(e5) !== undefined;
  }
  set(e5, t4) {
    const n5 = this.mapKeyFn(e5),
      r7 = this.inner[n5];
    if (r7 === undefined)
      return (this.inner[n5] = [[e5, t4]]), void this.innerSize++;
    for (let n6 = 0; n6 < r7.length; n6++)
      if (this.equalsFn(r7[n6][0], e5)) return void (r7[n6] = [e5, t4]);
    r7.push([e5, t4]), this.innerSize++;
  }
  delete(e5) {
    const t4 = this.mapKeyFn(e5),
      n5 = this.inner[t4];
    if (n5 === undefined) return false;
    for (let r7 = 0; r7 < n5.length; r7++)
      if (this.equalsFn(n5[r7][0], e5))
        return (
          n5.length === 1 ? delete this.inner[t4] : n5.splice(r7, 1),
          this.innerSize--,
          true
        );
    return false;
  }
  forEach(e5) {
    forEach(this.inner, (t4, n5) => {
      for (const [t5, r7] of n5) e5(t5, r7);
    });
  }
  isEmpty() {
    return isEmpty(this.inner);
  }
  size() {
    return this.innerSize;
  }
}
var oe = new SortedMap(DocumentKey.comparator);
function __PRIVATE_mutableDocumentMap() {
  return oe;
}
var _e = new SortedMap(DocumentKey.comparator);
function documentMap(...e5) {
  let t4 = _e;
  for (const n5 of e5) t4 = t4.insert(n5.key, n5);
  return t4;
}
function __PRIVATE_convertOverlayedDocumentMapToDocumentMap(e5) {
  let t4 = _e;
  return e5.forEach((e6, n5) => (t4 = t4.insert(e6, n5.overlayedDocument))), t4;
}
function __PRIVATE_newOverlayMap() {
  return __PRIVATE_newDocumentKeyMap();
}
function __PRIVATE_newMutationMap() {
  return __PRIVATE_newDocumentKeyMap();
}
function __PRIVATE_newDocumentKeyMap() {
  return new ObjectMap(
    (e5) => e5.toString(),
    (e5, t4) => e5.isEqual(t4)
  );
}
var ae = new SortedMap(DocumentKey.comparator);
var ue = new SortedSet(DocumentKey.comparator);
function __PRIVATE_documentKeySet(...e5) {
  let t4 = ue;
  for (const n5 of e5) t4 = t4.add(n5);
  return t4;
}
var ce = new SortedSet(__PRIVATE_primitiveComparator);
function __PRIVATE_targetIdSet() {
  return ce;
}
function __PRIVATE_toDouble(e5, t4) {
  if (e5.useProto3Json) {
    if (isNaN(t4))
      return {
        doubleValue: "NaN",
      };
    if (t4 === 1 / 0)
      return {
        doubleValue: "Infinity",
      };
    if (t4 === -1 / 0)
      return {
        doubleValue: "-Infinity",
      };
  }
  return {
    doubleValue: __PRIVATE_isNegativeZero(t4) ? "-0" : t4,
  };
}
function __PRIVATE_toInteger(e5) {
  return {
    integerValue: "" + e5,
  };
}
class TransformOperation {
  constructor() {
    this._ = undefined;
  }
}
function __PRIVATE_applyTransformOperationToLocalView(e5, t4, n5) {
  return e5 instanceof __PRIVATE_ServerTimestampTransform
    ? (function serverTimestamp$1(e6, t5) {
        const n6 = {
          fields: {
            __type__: {
              stringValue: "server_timestamp",
            },
            __local_write_time__: {
              timestampValue: {
                seconds: e6.seconds,
                nanos: e6.nanoseconds,
              },
            },
          },
        };
        return (
          t5 &&
            __PRIVATE_isServerTimestamp(t5) &&
            (t5 = __PRIVATE_getPreviousValue(t5)),
          t5 && (n6.fields.__previous_value__ = t5),
          {
            mapValue: n6,
          }
        );
      })(n5, t4)
    : e5 instanceof __PRIVATE_ArrayUnionTransformOperation
    ? __PRIVATE_applyArrayUnionTransformOperation(e5, t4)
    : e5 instanceof __PRIVATE_ArrayRemoveTransformOperation
    ? __PRIVATE_applyArrayRemoveTransformOperation(e5, t4)
    : (function __PRIVATE_applyNumericIncrementTransformOperationToLocalView(
        e6,
        t5
      ) {
        const n6 = __PRIVATE_computeTransformOperationBaseValue(e6, t5),
          r7 = asNumber(n6) + asNumber(e6.Pe);
        return isInteger(n6) && isInteger(e6.Pe)
          ? __PRIVATE_toInteger(r7)
          : __PRIVATE_toDouble(e6.serializer, r7);
      })(e5, t4);
}
function __PRIVATE_applyTransformOperationToRemoteDocument(e5, t4, n5) {
  return e5 instanceof __PRIVATE_ArrayUnionTransformOperation
    ? __PRIVATE_applyArrayUnionTransformOperation(e5, t4)
    : e5 instanceof __PRIVATE_ArrayRemoveTransformOperation
    ? __PRIVATE_applyArrayRemoveTransformOperation(e5, t4)
    : n5;
}
function __PRIVATE_computeTransformOperationBaseValue(e5, t4) {
  return e5 instanceof __PRIVATE_NumericIncrementTransformOperation
    ? (function __PRIVATE_isNumber(e6) {
        return (
          isInteger(e6) ||
          (function __PRIVATE_isDouble(e7) {
            return !!e7 && "doubleValue" in e7;
          })(e6)
        );
      })(t4)
      ? t4
      : {
          integerValue: 0,
        }
    : null;
}

class __PRIVATE_ServerTimestampTransform extends TransformOperation {}

class __PRIVATE_ArrayUnionTransformOperation extends TransformOperation {
  constructor(e5) {
    super(), (this.elements = e5);
  }
}
function __PRIVATE_applyArrayUnionTransformOperation(e5, t4) {
  const n5 = __PRIVATE_coercedFieldValuesArray(t4);
  for (const t5 of e5.elements)
    n5.some((e6) => __PRIVATE_valueEquals(e6, t5)) || n5.push(t5);
  return {
    arrayValue: {
      values: n5,
    },
  };
}

class __PRIVATE_ArrayRemoveTransformOperation extends TransformOperation {
  constructor(e5) {
    super(), (this.elements = e5);
  }
}
function __PRIVATE_applyArrayRemoveTransformOperation(e5, t4) {
  let n5 = __PRIVATE_coercedFieldValuesArray(t4);
  for (const t5 of e5.elements)
    n5 = n5.filter((e6) => !__PRIVATE_valueEquals(e6, t5));
  return {
    arrayValue: {
      values: n5,
    },
  };
}

class __PRIVATE_NumericIncrementTransformOperation extends TransformOperation {
  constructor(e5, t4) {
    super(), (this.serializer = e5), (this.Pe = t4);
  }
}
function asNumber(e5) {
  return __PRIVATE_normalizeNumber(e5.integerValue || e5.doubleValue);
}
function __PRIVATE_coercedFieldValuesArray(e5) {
  return isArray(e5) && e5.arrayValue.values
    ? e5.arrayValue.values.slice()
    : [];
}
function __PRIVATE_fieldTransformEquals(e5, t4) {
  return (
    e5.field.isEqual(t4.field) &&
    (function __PRIVATE_transformOperationEquals(e6, t5) {
      return (e6 instanceof __PRIVATE_ArrayUnionTransformOperation &&
        t5 instanceof __PRIVATE_ArrayUnionTransformOperation) ||
        (e6 instanceof __PRIVATE_ArrayRemoveTransformOperation &&
          t5 instanceof __PRIVATE_ArrayRemoveTransformOperation)
        ? __PRIVATE_arrayEquals(e6.elements, t5.elements, __PRIVATE_valueEquals)
        : e6 instanceof __PRIVATE_NumericIncrementTransformOperation &&
          t5 instanceof __PRIVATE_NumericIncrementTransformOperation
        ? __PRIVATE_valueEquals(e6.Pe, t5.Pe)
        : e6 instanceof __PRIVATE_ServerTimestampTransform &&
          t5 instanceof __PRIVATE_ServerTimestampTransform;
    })(e5.transform, t4.transform)
  );
}
class Precondition {
  constructor(e5, t4) {
    (this.updateTime = e5), (this.exists = t4);
  }
  static none() {
    return new Precondition();
  }
  static exists(e5) {
    return new Precondition(undefined, e5);
  }
  static updateTime(e5) {
    return new Precondition(e5);
  }
  get isNone() {
    return this.updateTime === undefined && this.exists === undefined;
  }
  isEqual(e5) {
    return (
      this.exists === e5.exists &&
      (this.updateTime
        ? !!e5.updateTime && this.updateTime.isEqual(e5.updateTime)
        : !e5.updateTime)
    );
  }
}
function __PRIVATE_preconditionIsValidForDocument(e5, t4) {
  return e5.updateTime !== undefined
    ? t4.isFoundDocument() && t4.version.isEqual(e5.updateTime)
    : e5.exists === undefined || e5.exists === t4.isFoundDocument();
}

class Mutation {}
function __PRIVATE_calculateOverlayMutation(e5, t4) {
  if (!e5.hasLocalMutations || (t4 && t4.fields.length === 0)) return null;
  if (t4 === null)
    return e5.isNoDocument()
      ? new __PRIVATE_DeleteMutation(e5.key, Precondition.none())
      : new __PRIVATE_SetMutation(e5.key, e5.data, Precondition.none());
  {
    const n5 = e5.data,
      r7 = ObjectValue.empty();
    let i5 = new SortedSet(FieldPath$1.comparator);
    for (let e6 of t4.fields)
      if (!i5.has(e6)) {
        let t5 = n5.field(e6);
        t5 === null &&
          e6.length > 1 &&
          ((e6 = e6.popLast()), (t5 = n5.field(e6))),
          t5 === null ? r7.delete(e6) : r7.set(e6, t5),
          (i5 = i5.add(e6));
      }
    return new __PRIVATE_PatchMutation(
      e5.key,
      r7,
      new FieldMask(i5.toArray()),
      Precondition.none()
    );
  }
}
function __PRIVATE_mutationApplyToRemoteDocument(e5, t4, n5) {
  e5 instanceof __PRIVATE_SetMutation
    ? (function __PRIVATE_setMutationApplyToRemoteDocument(e6, t5, n6) {
        const r7 = e6.value.clone(),
          i5 = __PRIVATE_serverTransformResults(
            e6.fieldTransforms,
            t5,
            n6.transformResults
          );
        r7.setAll(i5),
          t5.convertToFoundDocument(n6.version, r7).setHasCommittedMutations();
      })(e5, t4, n5)
    : e5 instanceof __PRIVATE_PatchMutation
    ? (function __PRIVATE_patchMutationApplyToRemoteDocument(e6, t5, n6) {
        if (!__PRIVATE_preconditionIsValidForDocument(e6.precondition, t5))
          return void t5.convertToUnknownDocument(n6.version);
        const r7 = __PRIVATE_serverTransformResults(
            e6.fieldTransforms,
            t5,
            n6.transformResults
          ),
          i5 = t5.data;
        i5.setAll(__PRIVATE_getPatch(e6)),
          i5.setAll(r7),
          t5.convertToFoundDocument(n6.version, i5).setHasCommittedMutations();
      })(e5, t4, n5)
    : (function __PRIVATE_deleteMutationApplyToRemoteDocument(e6, t5, n6) {
        t5.convertToNoDocument(n6.version).setHasCommittedMutations();
      })(0, t4, n5);
}
function __PRIVATE_mutationApplyToLocalView(e5, t4, n5, r7) {
  return e5 instanceof __PRIVATE_SetMutation
    ? (function __PRIVATE_setMutationApplyToLocalView(e6, t5, n6, r8) {
        if (!__PRIVATE_preconditionIsValidForDocument(e6.precondition, t5))
          return n6;
        const i5 = e6.value.clone(),
          s3 = __PRIVATE_localTransformResults(e6.fieldTransforms, r8, t5);
        return (
          i5.setAll(s3),
          t5.convertToFoundDocument(t5.version, i5).setHasLocalMutations(),
          null
        );
      })(e5, t4, n5, r7)
    : e5 instanceof __PRIVATE_PatchMutation
    ? (function __PRIVATE_patchMutationApplyToLocalView(e6, t5, n6, r8) {
        if (!__PRIVATE_preconditionIsValidForDocument(e6.precondition, t5))
          return n6;
        const i5 = __PRIVATE_localTransformResults(e6.fieldTransforms, r8, t5),
          s3 = t5.data;
        if (
          (s3.setAll(__PRIVATE_getPatch(e6)),
          s3.setAll(i5),
          t5.convertToFoundDocument(t5.version, s3).setHasLocalMutations(),
          n6 === null)
        )
          return null;
        return n6
          .unionWith(e6.fieldMask.fields)
          .unionWith(e6.fieldTransforms.map((e7) => e7.field));
      })(e5, t4, n5, r7)
    : (function __PRIVATE_deleteMutationApplyToLocalView(e6, t5, n6) {
        if (__PRIVATE_preconditionIsValidForDocument(e6.precondition, t5))
          return (
            t5.convertToNoDocument(t5.version).setHasLocalMutations(), null
          );
        return n6;
      })(e5, t4, n5);
}
function __PRIVATE_mutationEquals(e5, t4) {
  return (
    e5.type === t4.type &&
    !!e5.key.isEqual(t4.key) &&
    !!e5.precondition.isEqual(t4.precondition) &&
    !!(function __PRIVATE_fieldTransformsAreEqual(e6, t5) {
      return (
        (e6 === undefined && t5 === undefined) ||
        (!(!e6 || !t5) &&
          __PRIVATE_arrayEquals(e6, t5, (e7, t6) =>
            __PRIVATE_fieldTransformEquals(e7, t6)
          ))
      );
    })(e5.fieldTransforms, t4.fieldTransforms) &&
    (e5.type === 0
      ? e5.value.isEqual(t4.value)
      : e5.type !== 1 ||
        (e5.data.isEqual(t4.data) && e5.fieldMask.isEqual(t4.fieldMask)))
  );
}

class __PRIVATE_SetMutation extends Mutation {
  constructor(e5, t4, n5, r7 = []) {
    super(),
      (this.key = e5),
      (this.value = t4),
      (this.precondition = n5),
      (this.fieldTransforms = r7),
      (this.type = 0);
  }
  getFieldMask() {
    return null;
  }
}

class __PRIVATE_PatchMutation extends Mutation {
  constructor(e5, t4, n5, r7, i5 = []) {
    super(),
      (this.key = e5),
      (this.data = t4),
      (this.fieldMask = n5),
      (this.precondition = r7),
      (this.fieldTransforms = i5),
      (this.type = 1);
  }
  getFieldMask() {
    return this.fieldMask;
  }
}
function __PRIVATE_getPatch(e5) {
  const t4 = new Map();
  return (
    e5.fieldMask.fields.forEach((n5) => {
      if (!n5.isEmpty()) {
        const r7 = e5.data.field(n5);
        t4.set(n5, r7);
      }
    }),
    t4
  );
}
function __PRIVATE_serverTransformResults(e5, t4, n5) {
  const r7 = new Map();
  __PRIVATE_hardAssert(e5.length === n5.length);
  for (let i5 = 0; i5 < n5.length; i5++) {
    const s3 = e5[i5],
      o5 = s3.transform,
      _2 = t4.data.field(s3.field);
    r7.set(
      s3.field,
      __PRIVATE_applyTransformOperationToRemoteDocument(o5, _2, n5[i5])
    );
  }
  return r7;
}
function __PRIVATE_localTransformResults(e5, t4, n5) {
  const r7 = new Map();
  for (const i5 of e5) {
    const e6 = i5.transform,
      s3 = n5.data.field(i5.field);
    r7.set(i5.field, __PRIVATE_applyTransformOperationToLocalView(e6, s3, t4));
  }
  return r7;
}

class __PRIVATE_DeleteMutation extends Mutation {
  constructor(e5, t4) {
    super(),
      (this.key = e5),
      (this.precondition = t4),
      (this.type = 2),
      (this.fieldTransforms = []);
  }
  getFieldMask() {
    return null;
  }
}
class MutationBatch {
  constructor(e5, t4, n5, r7) {
    (this.batchId = e5),
      (this.localWriteTime = t4),
      (this.baseMutations = n5),
      (this.mutations = r7);
  }
  applyToRemoteDocument(e5, t4) {
    const n5 = t4.mutationResults;
    for (let t5 = 0; t5 < this.mutations.length; t5++) {
      const r7 = this.mutations[t5];
      if (r7.key.isEqual(e5.key)) {
        __PRIVATE_mutationApplyToRemoteDocument(r7, e5, n5[t5]);
      }
    }
  }
  applyToLocalView(e5, t4) {
    for (const n5 of this.baseMutations)
      n5.key.isEqual(e5.key) &&
        (t4 = __PRIVATE_mutationApplyToLocalView(
          n5,
          e5,
          t4,
          this.localWriteTime
        ));
    for (const n5 of this.mutations)
      n5.key.isEqual(e5.key) &&
        (t4 = __PRIVATE_mutationApplyToLocalView(
          n5,
          e5,
          t4,
          this.localWriteTime
        ));
    return t4;
  }
  applyToLocalDocumentSet(e5, t4) {
    const n5 = __PRIVATE_newMutationMap();
    return (
      this.mutations.forEach((r7) => {
        const i5 = e5.get(r7.key),
          s3 = i5.overlayedDocument;
        let o5 = this.applyToLocalView(s3, i5.mutatedFields);
        o5 = t4.has(r7.key) ? null : o5;
        const _2 = __PRIVATE_calculateOverlayMutation(s3, o5);
        _2 !== null && n5.set(r7.key, _2),
          s3.isValidDocument() || s3.convertToNoDocument(SnapshotVersion.min());
      }),
      n5
    );
  }
  keys() {
    return this.mutations.reduce(
      (e5, t4) => e5.add(t4.key),
      __PRIVATE_documentKeySet()
    );
  }
  isEqual(e5) {
    return (
      this.batchId === e5.batchId &&
      __PRIVATE_arrayEquals(this.mutations, e5.mutations, (e6, t4) =>
        __PRIVATE_mutationEquals(e6, t4)
      ) &&
      __PRIVATE_arrayEquals(this.baseMutations, e5.baseMutations, (e6, t4) =>
        __PRIVATE_mutationEquals(e6, t4)
      )
    );
  }
}
class Overlay {
  constructor(e5, t4) {
    (this.largestBatchId = e5), (this.mutation = t4);
  }
  getKey() {
    return this.mutation.key;
  }
  isEqual(e5) {
    return e5 !== null && this.mutation === e5.mutation;
  }
  toString() {
    return `Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`;
  }
}
class ExistenceFilter {
  constructor(e5, t4) {
    (this.count = e5), (this.unchangedNames = t4);
  }
}
var le;
var he;
function __PRIVATE_mapCodeFromRpcCode(e5) {
  if (e5 === undefined)
    return __PRIVATE_logError("GRPC error has no .code"), D.UNKNOWN;
  switch (e5) {
    case le.OK:
      return D.OK;
    case le.CANCELLED:
      return D.CANCELLED;
    case le.UNKNOWN:
      return D.UNKNOWN;
    case le.DEADLINE_EXCEEDED:
      return D.DEADLINE_EXCEEDED;
    case le.RESOURCE_EXHAUSTED:
      return D.RESOURCE_EXHAUSTED;
    case le.INTERNAL:
      return D.INTERNAL;
    case le.UNAVAILABLE:
      return D.UNAVAILABLE;
    case le.UNAUTHENTICATED:
      return D.UNAUTHENTICATED;
    case le.INVALID_ARGUMENT:
      return D.INVALID_ARGUMENT;
    case le.NOT_FOUND:
      return D.NOT_FOUND;
    case le.ALREADY_EXISTS:
      return D.ALREADY_EXISTS;
    case le.PERMISSION_DENIED:
      return D.PERMISSION_DENIED;
    case le.FAILED_PRECONDITION:
      return D.FAILED_PRECONDITION;
    case le.ABORTED:
      return D.ABORTED;
    case le.OUT_OF_RANGE:
      return D.OUT_OF_RANGE;
    case le.UNIMPLEMENTED:
      return D.UNIMPLEMENTED;
    case le.DATA_LOSS:
      return D.DATA_LOSS;
    default:
      return fail();
  }
}
((he = le || (le = {}))[(he.OK = 0)] = "OK"),
  (he[(he.CANCELLED = 1)] = "CANCELLED"),
  (he[(he.UNKNOWN = 2)] = "UNKNOWN"),
  (he[(he.INVALID_ARGUMENT = 3)] = "INVALID_ARGUMENT"),
  (he[(he.DEADLINE_EXCEEDED = 4)] = "DEADLINE_EXCEEDED"),
  (he[(he.NOT_FOUND = 5)] = "NOT_FOUND"),
  (he[(he.ALREADY_EXISTS = 6)] = "ALREADY_EXISTS"),
  (he[(he.PERMISSION_DENIED = 7)] = "PERMISSION_DENIED"),
  (he[(he.UNAUTHENTICATED = 16)] = "UNAUTHENTICATED"),
  (he[(he.RESOURCE_EXHAUSTED = 8)] = "RESOURCE_EXHAUSTED"),
  (he[(he.FAILED_PRECONDITION = 9)] = "FAILED_PRECONDITION"),
  (he[(he.ABORTED = 10)] = "ABORTED"),
  (he[(he.OUT_OF_RANGE = 11)] = "OUT_OF_RANGE"),
  (he[(he.UNIMPLEMENTED = 12)] = "UNIMPLEMENTED"),
  (he[(he.INTERNAL = 13)] = "INTERNAL"),
  (he[(he.UNAVAILABLE = 14)] = "UNAVAILABLE"),
  (he[(he.DATA_LOSS = 15)] = "DATA_LOSS");
var Pe = null;
function __PRIVATE_newTextEncoder() {
  return new TextEncoder();
}
var Ie = new Integer([4294967295, 4294967295], 0);
function __PRIVATE_getMd5HashValue(e5) {
  const t4 = __PRIVATE_newTextEncoder().encode(e5),
    n5 = new Md5();
  return n5.update(t4), new Uint8Array(n5.digest());
}
function __PRIVATE_get64BitUints(e5) {
  const t4 = new DataView(e5.buffer),
    n5 = t4.getUint32(0, true),
    r7 = t4.getUint32(4, true),
    i5 = t4.getUint32(8, true),
    s3 = t4.getUint32(12, true);
  return [new Integer([n5, r7], 0), new Integer([i5, s3], 0)];
}

class BloomFilter {
  constructor(e5, t4, n5) {
    if (
      ((this.bitmap = e5),
      (this.padding = t4),
      (this.hashCount = n5),
      t4 < 0 || t4 >= 8)
    )
      throw new __PRIVATE_BloomFilterError(`Invalid padding: ${t4}`);
    if (n5 < 0)
      throw new __PRIVATE_BloomFilterError(`Invalid hash count: ${n5}`);
    if (e5.length > 0 && this.hashCount === 0)
      throw new __PRIVATE_BloomFilterError(`Invalid hash count: ${n5}`);
    if (e5.length === 0 && t4 !== 0)
      throw new __PRIVATE_BloomFilterError(
        `Invalid padding when bitmap length is 0: ${t4}`
      );
    (this.Ie = 8 * e5.length - t4), (this.Te = Integer.fromNumber(this.Ie));
  }
  Ee(e5, t4, n5) {
    let r7 = e5.add(t4.multiply(Integer.fromNumber(n5)));
    return (
      r7.compare(Ie) === 1 &&
        (r7 = new Integer([r7.getBits(0), r7.getBits(1)], 0)),
      r7.modulo(this.Te).toNumber()
    );
  }
  de(e5) {
    return (this.bitmap[Math.floor(e5 / 8)] & (1 << e5 % 8)) != 0;
  }
  mightContain(e5) {
    if (this.Ie === 0) return false;
    const t4 = __PRIVATE_getMd5HashValue(e5),
      [n5, r7] = __PRIVATE_get64BitUints(t4);
    for (let e6 = 0; e6 < this.hashCount; e6++) {
      const t5 = this.Ee(n5, r7, e6);
      if (!this.de(t5)) return false;
    }
    return true;
  }
  static create(e5, t4, n5) {
    const r7 = e5 % 8 == 0 ? 0 : 8 - (e5 % 8),
      i5 = new Uint8Array(Math.ceil(e5 / 8)),
      s3 = new BloomFilter(i5, r7, t4);
    return n5.forEach((e6) => s3.insert(e6)), s3;
  }
  insert(e5) {
    if (this.Ie === 0) return;
    const t4 = __PRIVATE_getMd5HashValue(e5),
      [n5, r7] = __PRIVATE_get64BitUints(t4);
    for (let e6 = 0; e6 < this.hashCount; e6++) {
      const t5 = this.Ee(n5, r7, e6);
      this.Ae(t5);
    }
  }
  Ae(e5) {
    const t4 = Math.floor(e5 / 8),
      n5 = e5 % 8;
    this.bitmap[t4] |= 1 << n5;
  }
}

class __PRIVATE_BloomFilterError extends Error {
  constructor() {
    super(...arguments), (this.name = "BloomFilterError");
  }
}

class RemoteEvent {
  constructor(e5, t4, n5, r7, i5) {
    (this.snapshotVersion = e5),
      (this.targetChanges = t4),
      (this.targetMismatches = n5),
      (this.documentUpdates = r7),
      (this.resolvedLimboDocuments = i5);
  }
  static createSynthesizedRemoteEventForCurrentChange(e5, t4, n5) {
    const r7 = new Map();
    return (
      r7.set(
        e5,
        TargetChange.createSynthesizedTargetChangeForCurrentChange(e5, t4, n5)
      ),
      new RemoteEvent(
        SnapshotVersion.min(),
        r7,
        new SortedMap(__PRIVATE_primitiveComparator),
        __PRIVATE_mutableDocumentMap(),
        __PRIVATE_documentKeySet()
      )
    );
  }
}

class TargetChange {
  constructor(e5, t4, n5, r7, i5) {
    (this.resumeToken = e5),
      (this.current = t4),
      (this.addedDocuments = n5),
      (this.modifiedDocuments = r7),
      (this.removedDocuments = i5);
  }
  static createSynthesizedTargetChangeForCurrentChange(e5, t4, n5) {
    return new TargetChange(
      n5,
      t4,
      __PRIVATE_documentKeySet(),
      __PRIVATE_documentKeySet(),
      __PRIVATE_documentKeySet()
    );
  }
}

class __PRIVATE_DocumentWatchChange {
  constructor(e5, t4, n5, r7) {
    (this.Re = e5),
      (this.removedTargetIds = t4),
      (this.key = n5),
      (this.Ve = r7);
  }
}

class __PRIVATE_ExistenceFilterChange {
  constructor(e5, t4) {
    (this.targetId = e5), (this.me = t4);
  }
}

class __PRIVATE_WatchTargetChange {
  constructor(e5, t4, n5 = ByteString.EMPTY_BYTE_STRING, r7 = null) {
    (this.state = e5),
      (this.targetIds = t4),
      (this.resumeToken = n5),
      (this.cause = r7);
  }
}

class __PRIVATE_TargetState {
  constructor() {
    (this.fe = 0),
      (this.ge = __PRIVATE_snapshotChangesMap()),
      (this.pe = ByteString.EMPTY_BYTE_STRING),
      (this.ye = false),
      (this.we = true);
  }
  get current() {
    return this.ye;
  }
  get resumeToken() {
    return this.pe;
  }
  get Se() {
    return this.fe !== 0;
  }
  get be() {
    return this.we;
  }
  De(e5) {
    e5.approximateByteSize() > 0 && ((this.we = true), (this.pe = e5));
  }
  ve() {
    let e5 = __PRIVATE_documentKeySet(),
      t4 = __PRIVATE_documentKeySet(),
      n5 = __PRIVATE_documentKeySet();
    return (
      this.ge.forEach((r7, i5) => {
        switch (i5) {
          case 0:
            e5 = e5.add(r7);
            break;
          case 2:
            t4 = t4.add(r7);
            break;
          case 1:
            n5 = n5.add(r7);
            break;
          default:
            fail();
        }
      }),
      new TargetChange(this.pe, this.ye, e5, t4, n5)
    );
  }
  Ce() {
    (this.we = false), (this.ge = __PRIVATE_snapshotChangesMap());
  }
  Fe(e5, t4) {
    (this.we = true), (this.ge = this.ge.insert(e5, t4));
  }
  Me(e5) {
    (this.we = true), (this.ge = this.ge.remove(e5));
  }
  xe() {
    this.fe += 1;
  }
  Oe() {
    (this.fe -= 1), __PRIVATE_hardAssert(this.fe >= 0);
  }
  Ne() {
    (this.we = true), (this.ye = true);
  }
}

class __PRIVATE_WatchChangeAggregator {
  constructor(e5) {
    (this.Le = e5),
      (this.Be = new Map()),
      (this.ke = __PRIVATE_mutableDocumentMap()),
      (this.qe = __PRIVATE_documentTargetMap()),
      (this.Qe = new SortedMap(__PRIVATE_primitiveComparator));
  }
  Ke(e5) {
    for (const t4 of e5.Re)
      e5.Ve && e5.Ve.isFoundDocument()
        ? this.$e(t4, e5.Ve)
        : this.Ue(t4, e5.key, e5.Ve);
    for (const t4 of e5.removedTargetIds) this.Ue(t4, e5.key, e5.Ve);
  }
  We(e5) {
    this.forEachTarget(e5, (t4) => {
      const n5 = this.Ge(t4);
      switch (e5.state) {
        case 0:
          this.ze(t4) && n5.De(e5.resumeToken);
          break;
        case 1:
          n5.Oe(), n5.Se || n5.Ce(), n5.De(e5.resumeToken);
          break;
        case 2:
          n5.Oe(), n5.Se || this.removeTarget(t4);
          break;
        case 3:
          this.ze(t4) && (n5.Ne(), n5.De(e5.resumeToken));
          break;
        case 4:
          this.ze(t4) && (this.je(t4), n5.De(e5.resumeToken));
          break;
        default:
          fail();
      }
    });
  }
  forEachTarget(e5, t4) {
    e5.targetIds.length > 0
      ? e5.targetIds.forEach(t4)
      : this.Be.forEach((e6, n5) => {
          this.ze(n5) && t4(n5);
        });
  }
  He(e5) {
    const t4 = e5.targetId,
      n5 = e5.me.count,
      r7 = this.Je(t4);
    if (r7) {
      const i5 = r7.target;
      if (__PRIVATE_targetIsDocumentTarget(i5))
        if (n5 === 0) {
          const e6 = new DocumentKey(i5.path);
          this.Ue(
            t4,
            e6,
            MutableDocument.newNoDocument(e6, SnapshotVersion.min())
          );
        } else __PRIVATE_hardAssert(n5 === 1);
      else {
        const r8 = this.Ye(t4);
        if (r8 !== n5) {
          const n6 = this.Ze(e5),
            i6 = n6 ? this.Xe(n6, e5, r8) : 1;
          if (i6 !== 0) {
            this.je(t4);
            const e6 =
              i6 === 2
                ? "TargetPurposeExistenceFilterMismatchBloom"
                : "TargetPurposeExistenceFilterMismatch";
            this.Qe = this.Qe.insert(t4, e6);
          }
          Pe == null ||
            Pe.et(
              (function __PRIVATE_createExistenceFilterMismatchInfoForTestingHooks(
                e6,
                t5,
                n7,
                r9,
                i7
              ) {
                var s3, o5, _2, a3, u3, c4;
                const l3 = {
                    localCacheCount: e6,
                    existenceFilterCount: t5.count,
                    databaseId: n7.database,
                    projectId: n7.projectId,
                  },
                  h3 = t5.unchangedNames;
                h3 &&
                  (l3.bloomFilter = {
                    applied: i7 === 0,
                    hashCount:
                      (s3 = h3 == null ? undefined : h3.hashCount) !== null &&
                      s3 !== undefined
                        ? s3
                        : 0,
                    bitmapLength:
                      (a3 =
                        (_2 =
                          (o5 = h3 == null ? undefined : h3.bits) === null ||
                          o5 === undefined
                            ? undefined
                            : o5.bitmap) === null || _2 === undefined
                          ? undefined
                          : _2.length) !== null && a3 !== undefined
                        ? a3
                        : 0,
                    padding:
                      (c4 =
                        (u3 = h3 == null ? undefined : h3.bits) === null ||
                        u3 === undefined
                          ? undefined
                          : u3.padding) !== null && c4 !== undefined
                        ? c4
                        : 0,
                    mightContain: (e7) => {
                      var t6;
                      return (
                        (t6 = r9 == null ? undefined : r9.mightContain(e7)) !==
                          null &&
                        t6 !== undefined &&
                        t6
                      );
                    },
                  });
                return l3;
              })(r8, e5.me, this.Le.tt(), n6, i6)
            );
        }
      }
    }
  }
  Ze(e5) {
    const t4 = e5.me.unchangedNames;
    if (!t4 || !t4.bits) return null;
    const {
      bits: { bitmap: n5 = "", padding: r7 = 0 },
      hashCount: i5 = 0,
    } = t4;
    let s3, o5;
    try {
      s3 = __PRIVATE_normalizeByteString(n5).toUint8Array();
    } catch (e6) {
      if (e6 instanceof __PRIVATE_Base64DecodeError)
        return (
          __PRIVATE_logWarn(
            "Decoding the base64 bloom filter in existence filter failed (" +
              e6.message +
              "); ignoring the bloom filter and falling back to full re-query."
          ),
          null
        );
      throw e6;
    }
    try {
      o5 = new BloomFilter(s3, r7, i5);
    } catch (e6) {
      return (
        __PRIVATE_logWarn(
          e6 instanceof __PRIVATE_BloomFilterError
            ? "BloomFilter error: "
            : "Applying bloom filter failed: ",
          e6
        ),
        null
      );
    }
    return o5.Ie === 0 ? null : o5;
  }
  Xe(e5, t4, n5) {
    return t4.me.count === n5 - this.nt(e5, t4.targetId) ? 0 : 2;
  }
  nt(e5, t4) {
    const n5 = this.Le.getRemoteKeysForTarget(t4);
    let r7 = 0;
    return (
      n5.forEach((n6) => {
        const i5 = this.Le.tt(),
          s3 = `projects/${i5.projectId}/databases/${
            i5.database
          }/documents/${n6.path.canonicalString()}`;
        e5.mightContain(s3) || (this.Ue(t4, n6, null), r7++);
      }),
      r7
    );
  }
  rt(e5) {
    const t4 = new Map();
    this.Be.forEach((n6, r8) => {
      const i5 = this.Je(r8);
      if (i5) {
        if (n6.current && __PRIVATE_targetIsDocumentTarget(i5.target)) {
          const t5 = new DocumentKey(i5.target.path);
          this.ke.get(t5) !== null ||
            this.it(r8, t5) ||
            this.Ue(r8, t5, MutableDocument.newNoDocument(t5, e5));
        }
        n6.be && (t4.set(r8, n6.ve()), n6.Ce());
      }
    });
    let n5 = __PRIVATE_documentKeySet();
    this.qe.forEach((e6, t5) => {
      let r8 = true;
      t5.forEachWhile((e7) => {
        const t6 = this.Je(e7);
        return (
          !t6 ||
          t6.purpose === "TargetPurposeLimboResolution" ||
          ((r8 = false), false)
        );
      }),
        r8 && (n5 = n5.add(e6));
    }),
      this.ke.forEach((t5, n6) => n6.setReadTime(e5));
    const r7 = new RemoteEvent(e5, t4, this.Qe, this.ke, n5);
    return (
      (this.ke = __PRIVATE_mutableDocumentMap()),
      (this.qe = __PRIVATE_documentTargetMap()),
      (this.Qe = new SortedMap(__PRIVATE_primitiveComparator)),
      r7
    );
  }
  $e(e5, t4) {
    if (!this.ze(e5)) return;
    const n5 = this.it(e5, t4.key) ? 2 : 0;
    this.Ge(e5).Fe(t4.key, n5),
      (this.ke = this.ke.insert(t4.key, t4)),
      (this.qe = this.qe.insert(t4.key, this.st(t4.key).add(e5)));
  }
  Ue(e5, t4, n5) {
    if (!this.ze(e5)) return;
    const r7 = this.Ge(e5);
    this.it(e5, t4) ? r7.Fe(t4, 1) : r7.Me(t4),
      (this.qe = this.qe.insert(t4, this.st(t4).delete(e5))),
      n5 && (this.ke = this.ke.insert(t4, n5));
  }
  removeTarget(e5) {
    this.Be.delete(e5);
  }
  Ye(e5) {
    const t4 = this.Ge(e5).ve();
    return (
      this.Le.getRemoteKeysForTarget(e5).size +
      t4.addedDocuments.size -
      t4.removedDocuments.size
    );
  }
  xe(e5) {
    this.Ge(e5).xe();
  }
  Ge(e5) {
    let t4 = this.Be.get(e5);
    return t4 || ((t4 = new __PRIVATE_TargetState()), this.Be.set(e5, t4)), t4;
  }
  st(e5) {
    let t4 = this.qe.get(e5);
    return (
      t4 ||
        ((t4 = new SortedSet(__PRIVATE_primitiveComparator)),
        (this.qe = this.qe.insert(e5, t4))),
      t4
    );
  }
  ze(e5) {
    const t4 = this.Je(e5) !== null;
    return (
      t4 ||
        __PRIVATE_logDebug(
          "WatchChangeAggregator",
          "Detected inactive target",
          e5
        ),
      t4
    );
  }
  Je(e5) {
    const t4 = this.Be.get(e5);
    return t4 && t4.Se ? null : this.Le.ot(e5);
  }
  je(e5) {
    this.Be.set(e5, new __PRIVATE_TargetState());
    this.Le.getRemoteKeysForTarget(e5).forEach((t4) => {
      this.Ue(e5, t4, null);
    });
  }
  it(e5, t4) {
    return this.Le.getRemoteKeysForTarget(e5).has(t4);
  }
}
function __PRIVATE_documentTargetMap() {
  return new SortedMap(DocumentKey.comparator);
}
function __PRIVATE_snapshotChangesMap() {
  return new SortedMap(DocumentKey.comparator);
}
var Te = (() => {
  const e5 = {
    asc: "ASCENDING",
    desc: "DESCENDING",
  };
  return e5;
})();
var Ee = (() => {
  const e5 = {
    "<": "LESS_THAN",
    "<=": "LESS_THAN_OR_EQUAL",
    ">": "GREATER_THAN",
    ">=": "GREATER_THAN_OR_EQUAL",
    "==": "EQUAL",
    "!=": "NOT_EQUAL",
    "array-contains": "ARRAY_CONTAINS",
    in: "IN",
    "not-in": "NOT_IN",
    "array-contains-any": "ARRAY_CONTAINS_ANY",
  };
  return e5;
})();
var de = (() => {
  const e5 = {
    and: "AND",
    or: "OR",
  };
  return e5;
})();

class JsonProtoSerializer {
  constructor(e5, t4) {
    (this.databaseId = e5), (this.useProto3Json = t4);
  }
}
function __PRIVATE_toInt32Proto(e5, t4) {
  return e5.useProto3Json || __PRIVATE_isNullOrUndefined(t4)
    ? t4
    : {
        value: t4,
      };
}
function toTimestamp(e5, t4) {
  if (e5.useProto3Json) {
    return `${new Date(1000 * t4.seconds)
      .toISOString()
      .replace(/\.\d*/, "")
      .replace("Z", "")}.${("000000000" + t4.nanoseconds).slice(-9)}Z`;
  }
  return {
    seconds: "" + t4.seconds,
    nanos: t4.nanoseconds,
  };
}
function __PRIVATE_toBytes(e5, t4) {
  return e5.useProto3Json ? t4.toBase64() : t4.toUint8Array();
}
function __PRIVATE_fromVersion(e5) {
  return (
    __PRIVATE_hardAssert(!!e5),
    SnapshotVersion.fromTimestamp(
      (function fromTimestamp(e6) {
        const t4 = __PRIVATE_normalizeTimestamp(e6);
        return new Timestamp(t4.seconds, t4.nanos);
      })(e5)
    )
  );
}
function __PRIVATE_toResourceName(e5, t4) {
  return __PRIVATE_toResourcePath(e5, t4).canonicalString();
}
function __PRIVATE_toResourcePath(e5, t4) {
  const n5 = (function __PRIVATE_fullyQualifiedPrefixPath(e6) {
    return new ResourcePath([
      "projects",
      e6.projectId,
      "databases",
      e6.database,
    ]);
  })(e5).child("documents");
  return t4 === undefined ? n5 : n5.child(t4);
}
function __PRIVATE_fromResourceName(e5) {
  const t4 = ResourcePath.fromString(e5);
  return __PRIVATE_hardAssert(__PRIVATE_isValidResourceName(t4)), t4;
}
function fromName(e5, t4) {
  const n5 = __PRIVATE_fromResourceName(t4);
  if (n5.get(1) !== e5.databaseId.projectId)
    throw new FirestoreError(
      D.INVALID_ARGUMENT,
      "Tried to deserialize key from different project: " +
        n5.get(1) +
        " vs " +
        e5.databaseId.projectId
    );
  if (n5.get(3) !== e5.databaseId.database)
    throw new FirestoreError(
      D.INVALID_ARGUMENT,
      "Tried to deserialize key from different database: " +
        n5.get(3) +
        " vs " +
        e5.databaseId.database
    );
  return new DocumentKey(__PRIVATE_extractLocalPathFromResourceName(n5));
}
function __PRIVATE_toQueryPath(e5, t4) {
  return __PRIVATE_toResourceName(e5.databaseId, t4);
}
function __PRIVATE_fromQueryPath(e5) {
  const t4 = __PRIVATE_fromResourceName(e5);
  return t4.length === 4
    ? ResourcePath.emptyPath()
    : __PRIVATE_extractLocalPathFromResourceName(t4);
}
function __PRIVATE_getEncodedDatabaseId(e5) {
  return new ResourcePath([
    "projects",
    e5.databaseId.projectId,
    "databases",
    e5.databaseId.database,
  ]).canonicalString();
}
function __PRIVATE_extractLocalPathFromResourceName(e5) {
  return (
    __PRIVATE_hardAssert(e5.length > 4 && e5.get(4) === "documents"),
    e5.popFirst(5)
  );
}
function __PRIVATE_fromWatchChange(e5, t4) {
  let n5;
  if ("targetChange" in t4) {
    t4.targetChange;
    const r7 = (function __PRIVATE_fromWatchTargetChangeState(e6) {
        return e6 === "NO_CHANGE"
          ? 0
          : e6 === "ADD"
          ? 1
          : e6 === "REMOVE"
          ? 2
          : e6 === "CURRENT"
          ? 3
          : e6 === "RESET"
          ? 4
          : fail();
      })(t4.targetChange.targetChangeType || "NO_CHANGE"),
      i5 = t4.targetChange.targetIds || [],
      s3 = (function __PRIVATE_fromBytes(e6, t5) {
        return e6.useProto3Json
          ? (__PRIVATE_hardAssert(t5 === undefined || typeof t5 == "string"),
            ByteString.fromBase64String(t5 || ""))
          : (__PRIVATE_hardAssert(
              t5 === undefined ||
                t5 instanceof Buffer ||
                t5 instanceof Uint8Array
            ),
            ByteString.fromUint8Array(t5 || new Uint8Array()));
      })(e5, t4.targetChange.resumeToken),
      o5 = t4.targetChange.cause,
      _2 =
        o5 &&
        (function __PRIVATE_fromRpcStatus(e6) {
          const t5 =
            e6.code === undefined
              ? D.UNKNOWN
              : __PRIVATE_mapCodeFromRpcCode(e6.code);
          return new FirestoreError(t5, e6.message || "");
        })(o5);
    n5 = new __PRIVATE_WatchTargetChange(r7, i5, s3, _2 || null);
  } else if ("documentChange" in t4) {
    t4.documentChange;
    const r7 = t4.documentChange;
    r7.document, r7.document.name, r7.document.updateTime;
    const i5 = fromName(e5, r7.document.name),
      s3 = __PRIVATE_fromVersion(r7.document.updateTime),
      o5 = r7.document.createTime
        ? __PRIVATE_fromVersion(r7.document.createTime)
        : SnapshotVersion.min(),
      _2 = new ObjectValue({
        mapValue: {
          fields: r7.document.fields,
        },
      }),
      a3 = MutableDocument.newFoundDocument(i5, s3, o5, _2),
      u3 = r7.targetIds || [],
      c4 = r7.removedTargetIds || [];
    n5 = new __PRIVATE_DocumentWatchChange(u3, c4, a3.key, a3);
  } else if ("documentDelete" in t4) {
    t4.documentDelete;
    const r7 = t4.documentDelete;
    r7.document;
    const i5 = fromName(e5, r7.document),
      s3 = r7.readTime
        ? __PRIVATE_fromVersion(r7.readTime)
        : SnapshotVersion.min(),
      o5 = MutableDocument.newNoDocument(i5, s3),
      _2 = r7.removedTargetIds || [];
    n5 = new __PRIVATE_DocumentWatchChange([], _2, o5.key, o5);
  } else if ("documentRemove" in t4) {
    t4.documentRemove;
    const r7 = t4.documentRemove;
    r7.document;
    const i5 = fromName(e5, r7.document),
      s3 = r7.removedTargetIds || [];
    n5 = new __PRIVATE_DocumentWatchChange([], s3, i5, null);
  } else {
    if (!("filter" in t4)) return fail();
    {
      t4.filter;
      const e6 = t4.filter;
      e6.targetId;
      const { count: r7 = 0, unchangedNames: i5 } = e6,
        s3 = new ExistenceFilter(r7, i5),
        o5 = e6.targetId;
      n5 = new __PRIVATE_ExistenceFilterChange(o5, s3);
    }
  }
  return n5;
}
function __PRIVATE_toDocumentsTarget(e5, t4) {
  return {
    documents: [__PRIVATE_toQueryPath(e5, t4.path)],
  };
}
function __PRIVATE_toQueryTarget(e5, t4) {
  const n5 = {
      structuredQuery: {},
    },
    r7 = t4.path;
  let i5;
  t4.collectionGroup !== null
    ? ((i5 = r7),
      (n5.structuredQuery.from = [
        {
          collectionId: t4.collectionGroup,
          allDescendants: true,
        },
      ]))
    : ((i5 = r7.popLast()),
      (n5.structuredQuery.from = [
        {
          collectionId: r7.lastSegment(),
        },
      ])),
    (n5.parent = __PRIVATE_toQueryPath(e5, i5));
  const s3 = (function __PRIVATE_toFilters(e6) {
    if (e6.length === 0) return;
    return __PRIVATE_toFilter(CompositeFilter.create(e6, "and"));
  })(t4.filters);
  s3 && (n5.structuredQuery.where = s3);
  const o5 = (function __PRIVATE_toOrder(e6) {
    if (e6.length === 0) return;
    return e6.map((e7) =>
      (function __PRIVATE_toPropertyOrder(e8) {
        return {
          field: __PRIVATE_toFieldPathReference(e8.field),
          direction: __PRIVATE_toDirection(e8.dir),
        };
      })(e7)
    );
  })(t4.orderBy);
  o5 && (n5.structuredQuery.orderBy = o5);
  const _2 = __PRIVATE_toInt32Proto(e5, t4.limit);
  return (
    _2 !== null && (n5.structuredQuery.limit = _2),
    t4.startAt &&
      (n5.structuredQuery.startAt = (function __PRIVATE_toStartAtCursor(e6) {
        return {
          before: e6.inclusive,
          values: e6.position,
        };
      })(t4.startAt)),
    t4.endAt &&
      (n5.structuredQuery.endAt = (function __PRIVATE_toEndAtCursor(e6) {
        return {
          before: !e6.inclusive,
          values: e6.position,
        };
      })(t4.endAt)),
    {
      _t: n5,
      parent: i5,
    }
  );
}
function __PRIVATE_convertQueryTargetToQuery(e5) {
  let t4 = __PRIVATE_fromQueryPath(e5.parent);
  const n5 = e5.structuredQuery,
    r7 = n5.from ? n5.from.length : 0;
  let i5 = null;
  if (r7 > 0) {
    __PRIVATE_hardAssert(r7 === 1);
    const e6 = n5.from[0];
    e6.allDescendants
      ? (i5 = e6.collectionId)
      : (t4 = t4.child(e6.collectionId));
  }
  let s3 = [];
  n5.where &&
    (s3 = (function __PRIVATE_fromFilters(e6) {
      const t5 = __PRIVATE_fromFilter(e6);
      if (
        t5 instanceof CompositeFilter &&
        __PRIVATE_compositeFilterIsFlatConjunction(t5)
      )
        return t5.getFilters();
      return [t5];
    })(n5.where));
  let o5 = [];
  n5.orderBy &&
    (o5 = (function __PRIVATE_fromOrder(e6) {
      return e6.map((e7) =>
        (function __PRIVATE_fromPropertyOrder(e8) {
          return new OrderBy(
            __PRIVATE_fromFieldPathReference(e8.field),
            (function __PRIVATE_fromDirection(e9) {
              switch (e9) {
                case "ASCENDING":
                  return "asc";
                case "DESCENDING":
                  return "desc";
                default:
                  return;
              }
            })(e8.direction)
          );
        })(e7)
      );
    })(n5.orderBy));
  let _2 = null;
  n5.limit &&
    (_2 = (function __PRIVATE_fromInt32Proto(e6) {
      let t5;
      return (
        (t5 = typeof e6 == "object" ? e6.value : e6),
        __PRIVATE_isNullOrUndefined(t5) ? null : t5
      );
    })(n5.limit));
  let a3 = null;
  n5.startAt &&
    (a3 = (function __PRIVATE_fromStartAtCursor(e6) {
      const t5 = !!e6.before,
        n6 = e6.values || [];
      return new Bound(n6, t5);
    })(n5.startAt));
  let u3 = null;
  return (
    n5.endAt &&
      (u3 = (function __PRIVATE_fromEndAtCursor(e6) {
        const t5 = !e6.before,
          n6 = e6.values || [];
        return new Bound(n6, t5);
      })(n5.endAt)),
    __PRIVATE_newQuery(t4, i5, o5, s3, _2, "F", a3, u3)
  );
}
function __PRIVATE_toListenRequestLabels(e5, t4) {
  const n5 = (function __PRIVATE_toLabel(e6) {
    switch (e6) {
      case "TargetPurposeListen":
        return null;
      case "TargetPurposeExistenceFilterMismatch":
        return "existence-filter-mismatch";
      case "TargetPurposeExistenceFilterMismatchBloom":
        return "existence-filter-mismatch-bloom";
      case "TargetPurposeLimboResolution":
        return "limbo-document";
      default:
        return fail();
    }
  })(t4.purpose);
  return n5 == null
    ? null
    : {
        "goog-listen-tags": n5,
      };
}
function __PRIVATE_fromFilter(e5) {
  return e5.unaryFilter !== undefined
    ? (function __PRIVATE_fromUnaryFilter(e6) {
        switch (e6.unaryFilter.op) {
          case "IS_NAN":
            const t4 = __PRIVATE_fromFieldPathReference(e6.unaryFilter.field);
            return FieldFilter.create(t4, "==", {
              doubleValue: NaN,
            });
          case "IS_NULL":
            const n5 = __PRIVATE_fromFieldPathReference(e6.unaryFilter.field);
            return FieldFilter.create(n5, "==", {
              nullValue: "NULL_VALUE",
            });
          case "IS_NOT_NAN":
            const r7 = __PRIVATE_fromFieldPathReference(e6.unaryFilter.field);
            return FieldFilter.create(r7, "!=", {
              doubleValue: NaN,
            });
          case "IS_NOT_NULL":
            const i5 = __PRIVATE_fromFieldPathReference(e6.unaryFilter.field);
            return FieldFilter.create(i5, "!=", {
              nullValue: "NULL_VALUE",
            });
          default:
            return fail();
        }
      })(e5)
    : e5.fieldFilter !== undefined
    ? (function __PRIVATE_fromFieldFilter(e6) {
        return FieldFilter.create(
          __PRIVATE_fromFieldPathReference(e6.fieldFilter.field),
          (function __PRIVATE_fromOperatorName(e7) {
            switch (e7) {
              case "EQUAL":
                return "==";
              case "NOT_EQUAL":
                return "!=";
              case "GREATER_THAN":
                return ">";
              case "GREATER_THAN_OR_EQUAL":
                return ">=";
              case "LESS_THAN":
                return "<";
              case "LESS_THAN_OR_EQUAL":
                return "<=";
              case "ARRAY_CONTAINS":
                return "array-contains";
              case "IN":
                return "in";
              case "NOT_IN":
                return "not-in";
              case "ARRAY_CONTAINS_ANY":
                return "array-contains-any";
              default:
                return fail();
            }
          })(e6.fieldFilter.op),
          e6.fieldFilter.value
        );
      })(e5)
    : e5.compositeFilter !== undefined
    ? (function __PRIVATE_fromCompositeFilter(e6) {
        return CompositeFilter.create(
          e6.compositeFilter.filters.map((e7) => __PRIVATE_fromFilter(e7)),
          (function __PRIVATE_fromCompositeOperatorName(e7) {
            switch (e7) {
              case "AND":
                return "and";
              case "OR":
                return "or";
              default:
                return fail();
            }
          })(e6.compositeFilter.op)
        );
      })(e5)
    : fail();
}
function __PRIVATE_toDirection(e5) {
  return Te[e5];
}
function __PRIVATE_toOperatorName(e5) {
  return Ee[e5];
}
function __PRIVATE_toCompositeOperatorName(e5) {
  return de[e5];
}
function __PRIVATE_toFieldPathReference(e5) {
  return {
    fieldPath: e5.canonicalString(),
  };
}
function __PRIVATE_fromFieldPathReference(e5) {
  return FieldPath$1.fromServerFormat(e5.fieldPath);
}
function __PRIVATE_toFilter(e5) {
  return e5 instanceof FieldFilter
    ? (function __PRIVATE_toUnaryOrFieldFilter(e6) {
        if (e6.op === "==") {
          if (__PRIVATE_isNanValue(e6.value))
            return {
              unaryFilter: {
                field: __PRIVATE_toFieldPathReference(e6.field),
                op: "IS_NAN",
              },
            };
          if (__PRIVATE_isNullValue(e6.value))
            return {
              unaryFilter: {
                field: __PRIVATE_toFieldPathReference(e6.field),
                op: "IS_NULL",
              },
            };
        } else if (e6.op === "!=") {
          if (__PRIVATE_isNanValue(e6.value))
            return {
              unaryFilter: {
                field: __PRIVATE_toFieldPathReference(e6.field),
                op: "IS_NOT_NAN",
              },
            };
          if (__PRIVATE_isNullValue(e6.value))
            return {
              unaryFilter: {
                field: __PRIVATE_toFieldPathReference(e6.field),
                op: "IS_NOT_NULL",
              },
            };
        }
        return {
          fieldFilter: {
            field: __PRIVATE_toFieldPathReference(e6.field),
            op: __PRIVATE_toOperatorName(e6.op),
            value: e6.value,
          },
        };
      })(e5)
    : e5 instanceof CompositeFilter
    ? (function __PRIVATE_toCompositeFilter(e6) {
        const t4 = e6.getFilters().map((e7) => __PRIVATE_toFilter(e7));
        if (t4.length === 1) return t4[0];
        return {
          compositeFilter: {
            op: __PRIVATE_toCompositeOperatorName(e6.op),
            filters: t4,
          },
        };
      })(e5)
    : fail();
}
function __PRIVATE_isValidResourceName(e5) {
  return (
    e5.length >= 4 && e5.get(0) === "projects" && e5.get(2) === "databases"
  );
}

class TargetData {
  constructor(
    e5,
    t4,
    n5,
    r7,
    i5 = SnapshotVersion.min(),
    s3 = SnapshotVersion.min(),
    o5 = ByteString.EMPTY_BYTE_STRING,
    _2 = null
  ) {
    (this.target = e5),
      (this.targetId = t4),
      (this.purpose = n5),
      (this.sequenceNumber = r7),
      (this.snapshotVersion = i5),
      (this.lastLimboFreeSnapshotVersion = s3),
      (this.resumeToken = o5),
      (this.expectedCount = _2);
  }
  withSequenceNumber(e5) {
    return new TargetData(
      this.target,
      this.targetId,
      this.purpose,
      e5,
      this.snapshotVersion,
      this.lastLimboFreeSnapshotVersion,
      this.resumeToken,
      this.expectedCount
    );
  }
  withResumeToken(e5, t4) {
    return new TargetData(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      t4,
      this.lastLimboFreeSnapshotVersion,
      e5,
      null
    );
  }
  withExpectedCount(e5) {
    return new TargetData(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      this.snapshotVersion,
      this.lastLimboFreeSnapshotVersion,
      this.resumeToken,
      e5
    );
  }
  withLastLimboFreeSnapshotVersion(e5) {
    return new TargetData(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      this.snapshotVersion,
      e5,
      this.resumeToken,
      this.expectedCount
    );
  }
}

class __PRIVATE_LocalSerializer {
  constructor(e5) {
    this.ct = e5;
  }
}
function __PRIVATE_fromBundledQuery(e5) {
  const t4 = __PRIVATE_convertQueryTargetToQuery({
    parent: e5.parent,
    structuredQuery: e5.structuredQuery,
  });
  return e5.limitType === "LAST"
    ? __PRIVATE_queryWithLimit(t4, t4.limit, "L")
    : t4;
}
class __PRIVATE_FirestoreIndexValueWriter {
  constructor() {}
  It(e5, t4) {
    this.Tt(e5, t4), t4.Et();
  }
  Tt(e5, t4) {
    if ("nullValue" in e5) this.dt(t4, 5);
    else if ("booleanValue" in e5)
      this.dt(t4, 10), t4.At(e5.booleanValue ? 1 : 0);
    else if ("integerValue" in e5)
      this.dt(t4, 15), t4.At(__PRIVATE_normalizeNumber(e5.integerValue));
    else if ("doubleValue" in e5) {
      const n5 = __PRIVATE_normalizeNumber(e5.doubleValue);
      isNaN(n5)
        ? this.dt(t4, 13)
        : (this.dt(t4, 15),
          __PRIVATE_isNegativeZero(n5) ? t4.At(0) : t4.At(n5));
    } else if ("timestampValue" in e5) {
      let n5 = e5.timestampValue;
      this.dt(t4, 20),
        typeof n5 == "string" && (n5 = __PRIVATE_normalizeTimestamp(n5)),
        t4.Rt(`${n5.seconds || ""}`),
        t4.At(n5.nanos || 0);
    } else if ("stringValue" in e5) this.Vt(e5.stringValue, t4), this.ft(t4);
    else if ("bytesValue" in e5)
      this.dt(t4, 30),
        t4.gt(__PRIVATE_normalizeByteString(e5.bytesValue)),
        this.ft(t4);
    else if ("referenceValue" in e5) this.yt(e5.referenceValue, t4);
    else if ("geoPointValue" in e5) {
      const n5 = e5.geoPointValue;
      this.dt(t4, 45), t4.At(n5.latitude || 0), t4.At(n5.longitude || 0);
    } else
      "mapValue" in e5
        ? __PRIVATE_isMaxValue(e5)
          ? this.dt(t4, Number.MAX_SAFE_INTEGER)
          : __PRIVATE_isVectorValue(e5)
          ? this.wt(e5.mapValue, t4)
          : (this.St(e5.mapValue, t4), this.ft(t4))
        : "arrayValue" in e5
        ? (this.bt(e5.arrayValue, t4), this.ft(t4))
        : fail();
  }
  Vt(e5, t4) {
    this.dt(t4, 25), this.Dt(e5, t4);
  }
  Dt(e5, t4) {
    t4.Rt(e5);
  }
  St(e5, t4) {
    const n5 = e5.fields || {};
    this.dt(t4, 55);
    for (const e6 of Object.keys(n5)) this.Vt(e6, t4), this.Tt(n5[e6], t4);
  }
  wt(e5, t4) {
    var n5, r7;
    const i5 = e5.fields || {};
    this.dt(t4, 53);
    const s3 = "value",
      o5 =
        ((r7 =
          (n5 = i5[s3].arrayValue) === null || n5 === undefined
            ? undefined
            : n5.values) === null || r7 === undefined
          ? undefined
          : r7.length) || 0;
    this.dt(t4, 15),
      t4.At(__PRIVATE_normalizeNumber(o5)),
      this.Vt(s3, t4),
      this.Tt(i5[s3], t4);
  }
  bt(e5, t4) {
    const n5 = e5.values || [];
    this.dt(t4, 50);
    for (const e6 of n5) this.Tt(e6, t4);
  }
  yt(e5, t4) {
    this.dt(t4, 37);
    DocumentKey.fromName(e5).path.forEach((e6) => {
      this.dt(t4, 60), this.Dt(e6, t4);
    });
  }
  dt(e5, t4) {
    e5.At(t4);
  }
  ft(e5) {
    e5.At(2);
  }
}
__PRIVATE_FirestoreIndexValueWriter.vt =
  new __PRIVATE_FirestoreIndexValueWriter();
class __PRIVATE_MemoryIndexManager {
  constructor() {
    this.un = new __PRIVATE_MemoryCollectionParentIndex();
  }
  addToCollectionParentIndex(e5, t4) {
    return this.un.add(t4), PersistencePromise.resolve();
  }
  getCollectionParents(e5, t4) {
    return PersistencePromise.resolve(this.un.getEntries(t4));
  }
  addFieldIndex(e5, t4) {
    return PersistencePromise.resolve();
  }
  deleteFieldIndex(e5, t4) {
    return PersistencePromise.resolve();
  }
  deleteAllFieldIndexes(e5) {
    return PersistencePromise.resolve();
  }
  createTargetIndexes(e5, t4) {
    return PersistencePromise.resolve();
  }
  getDocumentsMatchingTarget(e5, t4) {
    return PersistencePromise.resolve(null);
  }
  getIndexType(e5, t4) {
    return PersistencePromise.resolve(0);
  }
  getFieldIndexes(e5, t4) {
    return PersistencePromise.resolve([]);
  }
  getNextCollectionGroupToUpdate(e5) {
    return PersistencePromise.resolve(null);
  }
  getMinOffset(e5, t4) {
    return PersistencePromise.resolve(IndexOffset.min());
  }
  getMinOffsetFromCollectionGroup(e5, t4) {
    return PersistencePromise.resolve(IndexOffset.min());
  }
  updateCollectionGroup(e5, t4, n5) {
    return PersistencePromise.resolve();
  }
  updateIndexEntries(e5, t4) {
    return PersistencePromise.resolve();
  }
}

class __PRIVATE_MemoryCollectionParentIndex {
  constructor() {
    this.index = {};
  }
  add(e5) {
    const t4 = e5.lastSegment(),
      n5 = e5.popLast(),
      r7 = this.index[t4] || new SortedSet(ResourcePath.comparator),
      i5 = !r7.has(n5);
    return (this.index[t4] = r7.add(n5)), i5;
  }
  has(e5) {
    const t4 = e5.lastSegment(),
      n5 = e5.popLast(),
      r7 = this.index[t4];
    return r7 && r7.has(n5);
  }
  getEntries(e5) {
    return (this.index[e5] || new SortedSet(ResourcePath.comparator)).toArray();
  }
}
var Ae = new Uint8Array(0);
var Re = {
  didRun: false,
  sequenceNumbersCollected: 0,
  targetsRemoved: 0,
  documentsRemoved: 0,
};

class LruParams {
  constructor(e5, t4, n5) {
    (this.cacheSizeCollectionThreshold = e5),
      (this.percentileToCollect = t4),
      (this.maximumSequenceNumbersToCollect = n5);
  }
  static withCacheSize(e5) {
    return new LruParams(
      e5,
      LruParams.DEFAULT_COLLECTION_PERCENTILE,
      LruParams.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT
    );
  }
}
(LruParams.DEFAULT_COLLECTION_PERCENTILE = 10),
  (LruParams.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1000),
  (LruParams.DEFAULT = new LruParams(
    41943040,
    LruParams.DEFAULT_COLLECTION_PERCENTILE,
    LruParams.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT
  )),
  (LruParams.DISABLED = new LruParams(-1, 0, 0));
class __PRIVATE_TargetIdGenerator {
  constructor(e5) {
    this.Ln = e5;
  }
  next() {
    return (this.Ln += 2), this.Ln;
  }
  static Bn() {
    return new __PRIVATE_TargetIdGenerator(0);
  }
  static kn() {
    return new __PRIVATE_TargetIdGenerator(-1);
  }
}
function __PRIVATE_bufferEntryComparator([e5, t4], [n5, r7]) {
  const i5 = __PRIVATE_primitiveComparator(e5, n5);
  return i5 === 0 ? __PRIVATE_primitiveComparator(t4, r7) : i5;
}

class __PRIVATE_RollingSequenceNumberBuffer {
  constructor(e5) {
    (this.Un = e5),
      (this.buffer = new SortedSet(__PRIVATE_bufferEntryComparator)),
      (this.Wn = 0);
  }
  Gn() {
    return ++this.Wn;
  }
  zn(e5) {
    const t4 = [e5, this.Gn()];
    if (this.buffer.size < this.Un) this.buffer = this.buffer.add(t4);
    else {
      const e6 = this.buffer.last();
      __PRIVATE_bufferEntryComparator(t4, e6) < 0 &&
        (this.buffer = this.buffer.delete(e6).add(t4));
    }
  }
  get maxValue() {
    return this.buffer.last()[0];
  }
}

class __PRIVATE_LruScheduler {
  constructor(e5, t4, n5) {
    (this.garbageCollector = e5),
      (this.asyncQueue = t4),
      (this.localStore = n5),
      (this.jn = null);
  }
  start() {
    this.garbageCollector.params.cacheSizeCollectionThreshold !== -1 &&
      this.Hn(60000);
  }
  stop() {
    this.jn && (this.jn.cancel(), (this.jn = null));
  }
  get started() {
    return this.jn !== null;
  }
  Hn(e5) {
    __PRIVATE_logDebug(
      "LruGarbageCollector",
      `Garbage collection scheduled in ${e5}ms`
    ),
      (this.jn = this.asyncQueue.enqueueAfterDelay(
        "lru_garbage_collection",
        e5,
        async () => {
          this.jn = null;
          try {
            await this.localStore.collectGarbage(this.garbageCollector);
          } catch (e6) {
            __PRIVATE_isIndexedDbTransactionError(e6)
              ? __PRIVATE_logDebug(
                  "LruGarbageCollector",
                  "Ignoring IndexedDB error during garbage collection: ",
                  e6
                )
              : await __PRIVATE_ignoreIfPrimaryLeaseLoss(e6);
          }
          await this.Hn(300000);
        }
      ));
  }
}

class __PRIVATE_LruGarbageCollectorImpl {
  constructor(e5, t4) {
    (this.Jn = e5), (this.params = t4);
  }
  calculateTargetCount(e5, t4) {
    return this.Jn.Yn(e5).next((e6) => Math.floor((t4 / 100) * e6));
  }
  nthSequenceNumber(e5, t4) {
    if (t4 === 0)
      return PersistencePromise.resolve(__PRIVATE_ListenSequence.oe);
    const n5 = new __PRIVATE_RollingSequenceNumberBuffer(t4);
    return this.Jn.forEachTarget(e5, (e6) => n5.zn(e6.sequenceNumber))
      .next(() => this.Jn.Zn(e5, (e6) => n5.zn(e6)))
      .next(() => n5.maxValue);
  }
  removeTargets(e5, t4, n5) {
    return this.Jn.removeTargets(e5, t4, n5);
  }
  removeOrphanedDocuments(e5, t4) {
    return this.Jn.removeOrphanedDocuments(e5, t4);
  }
  collect(e5, t4) {
    return this.params.cacheSizeCollectionThreshold === -1
      ? (__PRIVATE_logDebug(
          "LruGarbageCollector",
          "Garbage collection skipped; disabled"
        ),
        PersistencePromise.resolve(Re))
      : this.getCacheSize(e5).next((n5) =>
          n5 < this.params.cacheSizeCollectionThreshold
            ? (__PRIVATE_logDebug(
                "LruGarbageCollector",
                `Garbage collection skipped; Cache size ${n5} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`
              ),
              Re)
            : this.Xn(e5, t4)
        );
  }
  getCacheSize(e5) {
    return this.Jn.getCacheSize(e5);
  }
  Xn(e5, t4) {
    let n5, r7, i5, s3, o5, a3, u3;
    const c4 = Date.now();
    return this.calculateTargetCount(e5, this.params.percentileToCollect)
      .next(
        (t5) => (
          t5 > this.params.maximumSequenceNumbersToCollect
            ? (__PRIVATE_logDebug(
                "LruGarbageCollector",
                `Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t5}`
              ),
              (r7 = this.params.maximumSequenceNumbersToCollect))
            : (r7 = t5),
          (s3 = Date.now()),
          this.nthSequenceNumber(e5, r7)
        )
      )
      .next(
        (r8) => ((n5 = r8), (o5 = Date.now()), this.removeTargets(e5, n5, t4))
      )
      .next(
        (t5) => (
          (i5 = t5), (a3 = Date.now()), this.removeOrphanedDocuments(e5, n5)
        )
      )
      .next((e6) => {
        if (((u3 = Date.now()), __PRIVATE_getLogLevel() <= LogLevel.DEBUG)) {
          __PRIVATE_logDebug(
            "LruGarbageCollector",
            `LRU Garbage Collection
\tCounted targets in ${s3 - c4}ms
\tDetermined least recently used ${r7} in ` +
              (o5 - s3) +
              `ms
` +
              `\tRemoved ${i5} targets in ` +
              (a3 - o5) +
              `ms
` +
              `\tRemoved ${e6} documents in ` +
              (u3 - a3) +
              `ms
` +
              `Total Duration: ${u3 - c4}ms`
          );
        }
        return PersistencePromise.resolve({
          didRun: true,
          sequenceNumbersCollected: r7,
          targetsRemoved: i5,
          documentsRemoved: e6,
        });
      });
  }
}
function __PRIVATE_newLruGarbageCollector(e5, t4) {
  return new __PRIVATE_LruGarbageCollectorImpl(e5, t4);
}
class RemoteDocumentChangeBuffer {
  constructor() {
    (this.changes = new ObjectMap(
      (e5) => e5.toString(),
      (e5, t4) => e5.isEqual(t4)
    )),
      (this.changesApplied = false);
  }
  addEntry(e5) {
    this.assertNotApplied(), this.changes.set(e5.key, e5);
  }
  removeEntry(e5, t4) {
    this.assertNotApplied(),
      this.changes.set(
        e5,
        MutableDocument.newInvalidDocument(e5).setReadTime(t4)
      );
  }
  getEntry(e5, t4) {
    this.assertNotApplied();
    const n5 = this.changes.get(t4);
    return n5 !== undefined
      ? PersistencePromise.resolve(n5)
      : this.getFromCache(e5, t4);
  }
  getEntries(e5, t4) {
    return this.getAllFromCache(e5, t4);
  }
  apply(e5) {
    return (
      this.assertNotApplied(),
      (this.changesApplied = true),
      this.applyChanges(e5)
    );
  }
  assertNotApplied() {}
}
class OverlayedDocument {
  constructor(e5, t4) {
    (this.overlayedDocument = e5), (this.mutatedFields = t4);
  }
}

class LocalDocumentsView {
  constructor(e5, t4, n5, r7) {
    (this.remoteDocumentCache = e5),
      (this.mutationQueue = t4),
      (this.documentOverlayCache = n5),
      (this.indexManager = r7);
  }
  getDocument(e5, t4) {
    let n5 = null;
    return this.documentOverlayCache
      .getOverlay(e5, t4)
      .next((r7) => ((n5 = r7), this.remoteDocumentCache.getEntry(e5, t4)))
      .next(
        (e6) => (
          n5 !== null &&
            __PRIVATE_mutationApplyToLocalView(
              n5.mutation,
              e6,
              FieldMask.empty(),
              Timestamp.now()
            ),
          e6
        )
      );
  }
  getDocuments(e5, t4) {
    return this.remoteDocumentCache
      .getEntries(e5, t4)
      .next((t5) =>
        this.getLocalViewOfDocuments(e5, t5, __PRIVATE_documentKeySet()).next(
          () => t5
        )
      );
  }
  getLocalViewOfDocuments(e5, t4, n5 = __PRIVATE_documentKeySet()) {
    const r7 = __PRIVATE_newOverlayMap();
    return this.populateOverlays(e5, r7, t4).next(() =>
      this.computeViews(e5, t4, r7, n5).next((e6) => {
        let t5 = documentMap();
        return (
          e6.forEach((e7, n6) => {
            t5 = t5.insert(e7, n6.overlayedDocument);
          }),
          t5
        );
      })
    );
  }
  getOverlayedDocuments(e5, t4) {
    const n5 = __PRIVATE_newOverlayMap();
    return this.populateOverlays(e5, n5, t4).next(() =>
      this.computeViews(e5, t4, n5, __PRIVATE_documentKeySet())
    );
  }
  populateOverlays(e5, t4, n5) {
    const r7 = [];
    return (
      n5.forEach((e6) => {
        t4.has(e6) || r7.push(e6);
      }),
      this.documentOverlayCache.getOverlays(e5, r7).next((e6) => {
        e6.forEach((e7, n6) => {
          t4.set(e7, n6);
        });
      })
    );
  }
  computeViews(e5, t4, n5, r7) {
    let i5 = __PRIVATE_mutableDocumentMap();
    const s3 = __PRIVATE_newDocumentKeyMap(),
      o5 = (function __PRIVATE_newOverlayedDocumentMap() {
        return __PRIVATE_newDocumentKeyMap();
      })();
    return (
      t4.forEach((e6, t5) => {
        const o6 = n5.get(t5.key);
        r7.has(t5.key) &&
        (o6 === undefined || o6.mutation instanceof __PRIVATE_PatchMutation)
          ? (i5 = i5.insert(t5.key, t5))
          : o6 !== undefined
          ? (s3.set(t5.key, o6.mutation.getFieldMask()),
            __PRIVATE_mutationApplyToLocalView(
              o6.mutation,
              t5,
              o6.mutation.getFieldMask(),
              Timestamp.now()
            ))
          : s3.set(t5.key, FieldMask.empty());
      }),
      this.recalculateAndSaveOverlays(e5, i5).next(
        (e6) => (
          e6.forEach((e7, t5) => s3.set(e7, t5)),
          t4.forEach((e7, t5) => {
            var n6;
            return o5.set(
              e7,
              new OverlayedDocument(
                t5,
                (n6 = s3.get(e7)) !== null && n6 !== undefined ? n6 : null
              )
            );
          }),
          o5
        )
      )
    );
  }
  recalculateAndSaveOverlays(e5, t4) {
    const n5 = __PRIVATE_newDocumentKeyMap();
    let r7 = new SortedMap((e6, t5) => e6 - t5),
      i5 = __PRIVATE_documentKeySet();
    return this.mutationQueue
      .getAllMutationBatchesAffectingDocumentKeys(e5, t4)
      .next((e6) => {
        for (const i6 of e6)
          i6.keys().forEach((e7) => {
            const s3 = t4.get(e7);
            if (s3 === null) return;
            let o5 = n5.get(e7) || FieldMask.empty();
            (o5 = i6.applyToLocalView(s3, o5)), n5.set(e7, o5);
            const _2 = (r7.get(i6.batchId) || __PRIVATE_documentKeySet()).add(
              e7
            );
            r7 = r7.insert(i6.batchId, _2);
          });
      })
      .next(() => {
        const s3 = [],
          o5 = r7.getReverseIterator();
        for (; o5.hasNext(); ) {
          const r8 = o5.getNext(),
            _2 = r8.key,
            a3 = r8.value,
            u3 = __PRIVATE_newMutationMap();
          a3.forEach((e6) => {
            if (!i5.has(e6)) {
              const r9 = __PRIVATE_calculateOverlayMutation(
                t4.get(e6),
                n5.get(e6)
              );
              r9 !== null && u3.set(e6, r9), (i5 = i5.add(e6));
            }
          }),
            s3.push(this.documentOverlayCache.saveOverlays(e5, _2, u3));
        }
        return PersistencePromise.waitFor(s3);
      })
      .next(() => n5);
  }
  recalculateAndSaveOverlaysForDocumentKeys(e5, t4) {
    return this.remoteDocumentCache
      .getEntries(e5, t4)
      .next((t5) => this.recalculateAndSaveOverlays(e5, t5));
  }
  getDocumentsMatchingQuery(e5, t4, n5, r7) {
    return (function __PRIVATE_isDocumentQuery$1(e6) {
      return (
        DocumentKey.isDocumentKey(e6.path) &&
        e6.collectionGroup === null &&
        e6.filters.length === 0
      );
    })(t4)
      ? this.getDocumentsMatchingDocumentQuery(e5, t4.path)
      : __PRIVATE_isCollectionGroupQuery(t4)
      ? this.getDocumentsMatchingCollectionGroupQuery(e5, t4, n5, r7)
      : this.getDocumentsMatchingCollectionQuery(e5, t4, n5, r7);
  }
  getNextDocuments(e5, t4, n5, r7) {
    return this.remoteDocumentCache
      .getAllFromCollectionGroup(e5, t4, n5, r7)
      .next((i5) => {
        const s3 =
          r7 - i5.size > 0
            ? this.documentOverlayCache.getOverlaysForCollectionGroup(
                e5,
                t4,
                n5.largestBatchId,
                r7 - i5.size
              )
            : PersistencePromise.resolve(__PRIVATE_newOverlayMap());
        let o5 = -1,
          _2 = i5;
        return s3.next((t5) =>
          PersistencePromise.forEach(
            t5,
            (t6, n6) => (
              o5 < n6.largestBatchId && (o5 = n6.largestBatchId),
              i5.get(t6)
                ? PersistencePromise.resolve()
                : this.remoteDocumentCache.getEntry(e5, t6).next((e6) => {
                    _2 = _2.insert(t6, e6);
                  })
            )
          )
            .next(() => this.populateOverlays(e5, t5, i5))
            .next(() =>
              this.computeViews(e5, _2, t5, __PRIVATE_documentKeySet())
            )
            .next((e6) => ({
              batchId: o5,
              changes: __PRIVATE_convertOverlayedDocumentMapToDocumentMap(e6),
            }))
        );
      });
  }
  getDocumentsMatchingDocumentQuery(e5, t4) {
    return this.getDocument(e5, new DocumentKey(t4)).next((e6) => {
      let t5 = documentMap();
      return e6.isFoundDocument() && (t5 = t5.insert(e6.key, e6)), t5;
    });
  }
  getDocumentsMatchingCollectionGroupQuery(e5, t4, n5, r7) {
    const i5 = t4.collectionGroup;
    let s3 = documentMap();
    return this.indexManager.getCollectionParents(e5, i5).next((o5) =>
      PersistencePromise.forEach(o5, (o6) => {
        const _2 = (function __PRIVATE_asCollectionQueryAtPath(e6, t5) {
          return new __PRIVATE_QueryImpl(
            t5,
            null,
            e6.explicitOrderBy.slice(),
            e6.filters.slice(),
            e6.limit,
            e6.limitType,
            e6.startAt,
            e6.endAt
          );
        })(t4, o6.child(i5));
        return this.getDocumentsMatchingCollectionQuery(e5, _2, n5, r7).next(
          (e6) => {
            e6.forEach((e7, t5) => {
              s3 = s3.insert(e7, t5);
            });
          }
        );
      }).next(() => s3)
    );
  }
  getDocumentsMatchingCollectionQuery(e5, t4, n5, r7) {
    let i5;
    return this.documentOverlayCache
      .getOverlaysForCollection(e5, t4.path, n5.largestBatchId)
      .next(
        (s3) => (
          (i5 = s3),
          this.remoteDocumentCache.getDocumentsMatchingQuery(e5, t4, n5, i5, r7)
        )
      )
      .next((e6) => {
        i5.forEach((t5, n7) => {
          const r8 = n7.getKey();
          e6.get(r8) === null &&
            (e6 = e6.insert(r8, MutableDocument.newInvalidDocument(r8)));
        });
        let n6 = documentMap();
        return (
          e6.forEach((e7, r8) => {
            const s3 = i5.get(e7);
            s3 !== undefined &&
              __PRIVATE_mutationApplyToLocalView(
                s3.mutation,
                r8,
                FieldMask.empty(),
                Timestamp.now()
              ),
              __PRIVATE_queryMatches(t4, r8) && (n6 = n6.insert(e7, r8));
          }),
          n6
        );
      });
  }
}

class __PRIVATE_MemoryBundleCache {
  constructor(e5) {
    (this.serializer = e5), (this.hr = new Map()), (this.Pr = new Map());
  }
  getBundleMetadata(e5, t4) {
    return PersistencePromise.resolve(this.hr.get(t4));
  }
  saveBundleMetadata(e5, t4) {
    return (
      this.hr.set(
        t4.id,
        (function __PRIVATE_fromBundleMetadata(e6) {
          return {
            id: e6.id,
            version: e6.version,
            createTime: __PRIVATE_fromVersion(e6.createTime),
          };
        })(t4)
      ),
      PersistencePromise.resolve()
    );
  }
  getNamedQuery(e5, t4) {
    return PersistencePromise.resolve(this.Pr.get(t4));
  }
  saveNamedQuery(e5, t4) {
    return (
      this.Pr.set(
        t4.name,
        (function __PRIVATE_fromProtoNamedQuery(e6) {
          return {
            name: e6.name,
            query: __PRIVATE_fromBundledQuery(e6.bundledQuery),
            readTime: __PRIVATE_fromVersion(e6.readTime),
          };
        })(t4)
      ),
      PersistencePromise.resolve()
    );
  }
}

class __PRIVATE_MemoryDocumentOverlayCache {
  constructor() {
    (this.overlays = new SortedMap(DocumentKey.comparator)),
      (this.Ir = new Map());
  }
  getOverlay(e5, t4) {
    return PersistencePromise.resolve(this.overlays.get(t4));
  }
  getOverlays(e5, t4) {
    const n5 = __PRIVATE_newOverlayMap();
    return PersistencePromise.forEach(t4, (t5) =>
      this.getOverlay(e5, t5).next((e6) => {
        e6 !== null && n5.set(t5, e6);
      })
    ).next(() => n5);
  }
  saveOverlays(e5, t4, n5) {
    return (
      n5.forEach((n6, r7) => {
        this.ht(e5, t4, r7);
      }),
      PersistencePromise.resolve()
    );
  }
  removeOverlaysForBatchId(e5, t4, n5) {
    const r7 = this.Ir.get(n5);
    return (
      r7 !== undefined &&
        (r7.forEach((e6) => (this.overlays = this.overlays.remove(e6))),
        this.Ir.delete(n5)),
      PersistencePromise.resolve()
    );
  }
  getOverlaysForCollection(e5, t4, n5) {
    const r7 = __PRIVATE_newOverlayMap(),
      i5 = t4.length + 1,
      s3 = new DocumentKey(t4.child("")),
      o5 = this.overlays.getIteratorFrom(s3);
    for (; o5.hasNext(); ) {
      const e6 = o5.getNext().value,
        s4 = e6.getKey();
      if (!t4.isPrefixOf(s4.path)) break;
      s4.path.length === i5 &&
        e6.largestBatchId > n5 &&
        r7.set(e6.getKey(), e6);
    }
    return PersistencePromise.resolve(r7);
  }
  getOverlaysForCollectionGroup(e5, t4, n5, r7) {
    let i5 = new SortedMap((e6, t5) => e6 - t5);
    const s3 = this.overlays.getIterator();
    for (; s3.hasNext(); ) {
      const e6 = s3.getNext().value;
      if (e6.getKey().getCollectionGroup() === t4 && e6.largestBatchId > n5) {
        let t5 = i5.get(e6.largestBatchId);
        t5 === null &&
          ((t5 = __PRIVATE_newOverlayMap()),
          (i5 = i5.insert(e6.largestBatchId, t5))),
          t5.set(e6.getKey(), e6);
      }
    }
    const o5 = __PRIVATE_newOverlayMap(),
      _2 = i5.getIterator();
    for (; _2.hasNext(); ) {
      if (
        (_2.getNext().value.forEach((e6, t5) => o5.set(e6, t5)),
        o5.size() >= r7)
      )
        break;
    }
    return PersistencePromise.resolve(o5);
  }
  ht(e5, t4, n5) {
    const r7 = this.overlays.get(n5.key);
    if (r7 !== null) {
      const e6 = this.Ir.get(r7.largestBatchId).delete(n5.key);
      this.Ir.set(r7.largestBatchId, e6);
    }
    this.overlays = this.overlays.insert(n5.key, new Overlay(t4, n5));
    let i5 = this.Ir.get(t4);
    i5 === undefined &&
      ((i5 = __PRIVATE_documentKeySet()), this.Ir.set(t4, i5)),
      this.Ir.set(t4, i5.add(n5.key));
  }
}

class __PRIVATE_MemoryGlobalsCache {
  constructor() {
    this.sessionToken = ByteString.EMPTY_BYTE_STRING;
  }
  getSessionToken(e5) {
    return PersistencePromise.resolve(this.sessionToken);
  }
  setSessionToken(e5, t4) {
    return (this.sessionToken = t4), PersistencePromise.resolve();
  }
}

class __PRIVATE_ReferenceSet {
  constructor() {
    (this.Tr = new SortedSet(__PRIVATE_DocReference.Er)),
      (this.dr = new SortedSet(__PRIVATE_DocReference.Ar));
  }
  isEmpty() {
    return this.Tr.isEmpty();
  }
  addReference(e5, t4) {
    const n5 = new __PRIVATE_DocReference(e5, t4);
    (this.Tr = this.Tr.add(n5)), (this.dr = this.dr.add(n5));
  }
  Rr(e5, t4) {
    e5.forEach((e6) => this.addReference(e6, t4));
  }
  removeReference(e5, t4) {
    this.Vr(new __PRIVATE_DocReference(e5, t4));
  }
  mr(e5, t4) {
    e5.forEach((e6) => this.removeReference(e6, t4));
  }
  gr(e5) {
    const t4 = new DocumentKey(new ResourcePath([])),
      n5 = new __PRIVATE_DocReference(t4, e5),
      r7 = new __PRIVATE_DocReference(t4, e5 + 1),
      i5 = [];
    return (
      this.dr.forEachInRange([n5, r7], (e6) => {
        this.Vr(e6), i5.push(e6.key);
      }),
      i5
    );
  }
  pr() {
    this.Tr.forEach((e5) => this.Vr(e5));
  }
  Vr(e5) {
    (this.Tr = this.Tr.delete(e5)), (this.dr = this.dr.delete(e5));
  }
  yr(e5) {
    const t4 = new DocumentKey(new ResourcePath([])),
      n5 = new __PRIVATE_DocReference(t4, e5),
      r7 = new __PRIVATE_DocReference(t4, e5 + 1);
    let i5 = __PRIVATE_documentKeySet();
    return (
      this.dr.forEachInRange([n5, r7], (e6) => {
        i5 = i5.add(e6.key);
      }),
      i5
    );
  }
  containsKey(e5) {
    const t4 = new __PRIVATE_DocReference(e5, 0),
      n5 = this.Tr.firstAfterOrEqual(t4);
    return n5 !== null && e5.isEqual(n5.key);
  }
}

class __PRIVATE_DocReference {
  constructor(e5, t4) {
    (this.key = e5), (this.wr = t4);
  }
  static Er(e5, t4) {
    return (
      DocumentKey.comparator(e5.key, t4.key) ||
      __PRIVATE_primitiveComparator(e5.wr, t4.wr)
    );
  }
  static Ar(e5, t4) {
    return (
      __PRIVATE_primitiveComparator(e5.wr, t4.wr) ||
      DocumentKey.comparator(e5.key, t4.key)
    );
  }
}

class __PRIVATE_MemoryMutationQueue {
  constructor(e5, t4) {
    (this.indexManager = e5),
      (this.referenceDelegate = t4),
      (this.mutationQueue = []),
      (this.Sr = 1),
      (this.br = new SortedSet(__PRIVATE_DocReference.Er));
  }
  checkEmpty(e5) {
    return PersistencePromise.resolve(this.mutationQueue.length === 0);
  }
  addMutationBatch(e5, t4, n5, r7) {
    const i5 = this.Sr;
    this.Sr++,
      this.mutationQueue.length > 0 &&
        this.mutationQueue[this.mutationQueue.length - 1];
    const s3 = new MutationBatch(i5, t4, n5, r7);
    this.mutationQueue.push(s3);
    for (const t5 of r7)
      (this.br = this.br.add(new __PRIVATE_DocReference(t5.key, i5))),
        this.indexManager.addToCollectionParentIndex(e5, t5.key.path.popLast());
    return PersistencePromise.resolve(s3);
  }
  lookupMutationBatch(e5, t4) {
    return PersistencePromise.resolve(this.Dr(t4));
  }
  getNextMutationBatchAfterBatchId(e5, t4) {
    const n5 = t4 + 1,
      r7 = this.vr(n5),
      i5 = r7 < 0 ? 0 : r7;
    return PersistencePromise.resolve(
      this.mutationQueue.length > i5 ? this.mutationQueue[i5] : null
    );
  }
  getHighestUnacknowledgedBatchId() {
    return PersistencePromise.resolve(
      this.mutationQueue.length === 0 ? -1 : this.Sr - 1
    );
  }
  getAllMutationBatches(e5) {
    return PersistencePromise.resolve(this.mutationQueue.slice());
  }
  getAllMutationBatchesAffectingDocumentKey(e5, t4) {
    const n5 = new __PRIVATE_DocReference(t4, 0),
      r7 = new __PRIVATE_DocReference(t4, Number.POSITIVE_INFINITY),
      i5 = [];
    return (
      this.br.forEachInRange([n5, r7], (e6) => {
        const t5 = this.Dr(e6.wr);
        i5.push(t5);
      }),
      PersistencePromise.resolve(i5)
    );
  }
  getAllMutationBatchesAffectingDocumentKeys(e5, t4) {
    let n5 = new SortedSet(__PRIVATE_primitiveComparator);
    return (
      t4.forEach((e6) => {
        const t5 = new __PRIVATE_DocReference(e6, 0),
          r7 = new __PRIVATE_DocReference(e6, Number.POSITIVE_INFINITY);
        this.br.forEachInRange([t5, r7], (e7) => {
          n5 = n5.add(e7.wr);
        });
      }),
      PersistencePromise.resolve(this.Cr(n5))
    );
  }
  getAllMutationBatchesAffectingQuery(e5, t4) {
    const n5 = t4.path,
      r7 = n5.length + 1;
    let i5 = n5;
    DocumentKey.isDocumentKey(i5) || (i5 = i5.child(""));
    const s3 = new __PRIVATE_DocReference(new DocumentKey(i5), 0);
    let o5 = new SortedSet(__PRIVATE_primitiveComparator);
    return (
      this.br.forEachWhile((e6) => {
        const t5 = e6.key.path;
        return (
          !!n5.isPrefixOf(t5) &&
          (t5.length === r7 && (o5 = o5.add(e6.wr)), true)
        );
      }, s3),
      PersistencePromise.resolve(this.Cr(o5))
    );
  }
  Cr(e5) {
    const t4 = [];
    return (
      e5.forEach((e6) => {
        const n5 = this.Dr(e6);
        n5 !== null && t4.push(n5);
      }),
      t4
    );
  }
  removeMutationBatch(e5, t4) {
    __PRIVATE_hardAssert(this.Fr(t4.batchId, "removed") === 0),
      this.mutationQueue.shift();
    let n5 = this.br;
    return PersistencePromise.forEach(t4.mutations, (r7) => {
      const i5 = new __PRIVATE_DocReference(r7.key, t4.batchId);
      return (
        (n5 = n5.delete(i5)),
        this.referenceDelegate.markPotentiallyOrphaned(e5, r7.key)
      );
    }).next(() => {
      this.br = n5;
    });
  }
  On(e5) {}
  containsKey(e5, t4) {
    const n5 = new __PRIVATE_DocReference(t4, 0),
      r7 = this.br.firstAfterOrEqual(n5);
    return PersistencePromise.resolve(t4.isEqual(r7 && r7.key));
  }
  performConsistencyCheck(e5) {
    return this.mutationQueue.length, PersistencePromise.resolve();
  }
  Fr(e5, t4) {
    return this.vr(e5);
  }
  vr(e5) {
    if (this.mutationQueue.length === 0) return 0;
    return e5 - this.mutationQueue[0].batchId;
  }
  Dr(e5) {
    const t4 = this.vr(e5);
    if (t4 < 0 || t4 >= this.mutationQueue.length) return null;
    return this.mutationQueue[t4];
  }
}

class __PRIVATE_MemoryRemoteDocumentCacheImpl {
  constructor(e5) {
    (this.Mr = e5),
      (this.docs = (function __PRIVATE_documentEntryMap() {
        return new SortedMap(DocumentKey.comparator);
      })()),
      (this.size = 0);
  }
  setIndexManager(e5) {
    this.indexManager = e5;
  }
  addEntry(e5, t4) {
    const n5 = t4.key,
      r7 = this.docs.get(n5),
      i5 = r7 ? r7.size : 0,
      s3 = this.Mr(t4);
    return (
      (this.docs = this.docs.insert(n5, {
        document: t4.mutableCopy(),
        size: s3,
      })),
      (this.size += s3 - i5),
      this.indexManager.addToCollectionParentIndex(e5, n5.path.popLast())
    );
  }
  removeEntry(e5) {
    const t4 = this.docs.get(e5);
    t4 && ((this.docs = this.docs.remove(e5)), (this.size -= t4.size));
  }
  getEntry(e5, t4) {
    const n5 = this.docs.get(t4);
    return PersistencePromise.resolve(
      n5 ? n5.document.mutableCopy() : MutableDocument.newInvalidDocument(t4)
    );
  }
  getEntries(e5, t4) {
    let n5 = __PRIVATE_mutableDocumentMap();
    return (
      t4.forEach((e6) => {
        const t5 = this.docs.get(e6);
        n5 = n5.insert(
          e6,
          t5
            ? t5.document.mutableCopy()
            : MutableDocument.newInvalidDocument(e6)
        );
      }),
      PersistencePromise.resolve(n5)
    );
  }
  getDocumentsMatchingQuery(e5, t4, n5, r7) {
    let i5 = __PRIVATE_mutableDocumentMap();
    const s3 = t4.path,
      o5 = new DocumentKey(s3.child("")),
      _2 = this.docs.getIteratorFrom(o5);
    for (; _2.hasNext(); ) {
      const {
        key: e6,
        value: { document: o6 },
      } = _2.getNext();
      if (!s3.isPrefixOf(e6.path)) break;
      e6.path.length > s3.length + 1 ||
        __PRIVATE_indexOffsetComparator(
          __PRIVATE_newIndexOffsetFromDocument(o6),
          n5
        ) <= 0 ||
        ((r7.has(o6.key) || __PRIVATE_queryMatches(t4, o6)) &&
          (i5 = i5.insert(o6.key, o6.mutableCopy())));
    }
    return PersistencePromise.resolve(i5);
  }
  getAllFromCollectionGroup(e5, t4, n5, r7) {
    fail();
  }
  Or(e5, t4) {
    return PersistencePromise.forEach(this.docs, (e6) => t4(e6));
  }
  newChangeBuffer(e5) {
    return new __PRIVATE_MemoryRemoteDocumentChangeBuffer(this);
  }
  getSize(e5) {
    return PersistencePromise.resolve(this.size);
  }
}

class __PRIVATE_MemoryRemoteDocumentChangeBuffer extends RemoteDocumentChangeBuffer {
  constructor(e5) {
    super(), (this.cr = e5);
  }
  applyChanges(e5) {
    const t4 = [];
    return (
      this.changes.forEach((n5, r7) => {
        r7.isValidDocument()
          ? t4.push(this.cr.addEntry(e5, r7))
          : this.cr.removeEntry(n5);
      }),
      PersistencePromise.waitFor(t4)
    );
  }
  getFromCache(e5, t4) {
    return this.cr.getEntry(e5, t4);
  }
  getAllFromCache(e5, t4) {
    return this.cr.getEntries(e5, t4);
  }
}

class __PRIVATE_MemoryTargetCache {
  constructor(e5) {
    (this.persistence = e5),
      (this.Nr = new ObjectMap(
        (e6) => __PRIVATE_canonifyTarget(e6),
        __PRIVATE_targetEquals
      )),
      (this.lastRemoteSnapshotVersion = SnapshotVersion.min()),
      (this.highestTargetId = 0),
      (this.Lr = 0),
      (this.Br = new __PRIVATE_ReferenceSet()),
      (this.targetCount = 0),
      (this.kr = __PRIVATE_TargetIdGenerator.Bn());
  }
  forEachTarget(e5, t4) {
    return this.Nr.forEach((e6, n5) => t4(n5)), PersistencePromise.resolve();
  }
  getLastRemoteSnapshotVersion(e5) {
    return PersistencePromise.resolve(this.lastRemoteSnapshotVersion);
  }
  getHighestSequenceNumber(e5) {
    return PersistencePromise.resolve(this.Lr);
  }
  allocateTargetId(e5) {
    return (
      (this.highestTargetId = this.kr.next()),
      PersistencePromise.resolve(this.highestTargetId)
    );
  }
  setTargetsMetadata(e5, t4, n5) {
    return (
      n5 && (this.lastRemoteSnapshotVersion = n5),
      t4 > this.Lr && (this.Lr = t4),
      PersistencePromise.resolve()
    );
  }
  Kn(e5) {
    this.Nr.set(e5.target, e5);
    const t4 = e5.targetId;
    t4 > this.highestTargetId &&
      ((this.kr = new __PRIVATE_TargetIdGenerator(t4)),
      (this.highestTargetId = t4)),
      e5.sequenceNumber > this.Lr && (this.Lr = e5.sequenceNumber);
  }
  addTargetData(e5, t4) {
    return this.Kn(t4), (this.targetCount += 1), PersistencePromise.resolve();
  }
  updateTargetData(e5, t4) {
    return this.Kn(t4), PersistencePromise.resolve();
  }
  removeTargetData(e5, t4) {
    return (
      this.Nr.delete(t4.target),
      this.Br.gr(t4.targetId),
      (this.targetCount -= 1),
      PersistencePromise.resolve()
    );
  }
  removeTargets(e5, t4, n5) {
    let r7 = 0;
    const i5 = [];
    return (
      this.Nr.forEach((s3, o5) => {
        o5.sequenceNumber <= t4 &&
          n5.get(o5.targetId) === null &&
          (this.Nr.delete(s3),
          i5.push(this.removeMatchingKeysForTargetId(e5, o5.targetId)),
          r7++);
      }),
      PersistencePromise.waitFor(i5).next(() => r7)
    );
  }
  getTargetCount(e5) {
    return PersistencePromise.resolve(this.targetCount);
  }
  getTargetData(e5, t4) {
    const n5 = this.Nr.get(t4) || null;
    return PersistencePromise.resolve(n5);
  }
  addMatchingKeys(e5, t4, n5) {
    return this.Br.Rr(t4, n5), PersistencePromise.resolve();
  }
  removeMatchingKeys(e5, t4, n5) {
    this.Br.mr(t4, n5);
    const r7 = this.persistence.referenceDelegate,
      i5 = [];
    return (
      r7 &&
        t4.forEach((t5) => {
          i5.push(r7.markPotentiallyOrphaned(e5, t5));
        }),
      PersistencePromise.waitFor(i5)
    );
  }
  removeMatchingKeysForTargetId(e5, t4) {
    return this.Br.gr(t4), PersistencePromise.resolve();
  }
  getMatchingKeysForTargetId(e5, t4) {
    const n5 = this.Br.yr(t4);
    return PersistencePromise.resolve(n5);
  }
  containsKey(e5, t4) {
    return PersistencePromise.resolve(this.Br.containsKey(t4));
  }
}

class __PRIVATE_MemoryPersistence {
  constructor(e5, t4) {
    (this.qr = {}),
      (this.overlays = {}),
      (this.Qr = new __PRIVATE_ListenSequence(0)),
      (this.Kr = false),
      (this.Kr = true),
      (this.$r = new __PRIVATE_MemoryGlobalsCache()),
      (this.referenceDelegate = e5(this)),
      (this.Ur = new __PRIVATE_MemoryTargetCache(this));
    (this.indexManager = new __PRIVATE_MemoryIndexManager()),
      (this.remoteDocumentCache =
        (function __PRIVATE_newMemoryRemoteDocumentCache(e6) {
          return new __PRIVATE_MemoryRemoteDocumentCacheImpl(e6);
        })((e6) => this.referenceDelegate.Wr(e6))),
      (this.serializer = new __PRIVATE_LocalSerializer(t4)),
      (this.Gr = new __PRIVATE_MemoryBundleCache(this.serializer));
  }
  start() {
    return Promise.resolve();
  }
  shutdown() {
    return (this.Kr = false), Promise.resolve();
  }
  get started() {
    return this.Kr;
  }
  setDatabaseDeletedListener() {}
  setNetworkEnabled() {}
  getIndexManager(e5) {
    return this.indexManager;
  }
  getDocumentOverlayCache(e5) {
    let t4 = this.overlays[e5.toKey()];
    return (
      t4 ||
        ((t4 = new __PRIVATE_MemoryDocumentOverlayCache()),
        (this.overlays[e5.toKey()] = t4)),
      t4
    );
  }
  getMutationQueue(e5, t4) {
    let n5 = this.qr[e5.toKey()];
    return (
      n5 ||
        ((n5 = new __PRIVATE_MemoryMutationQueue(t4, this.referenceDelegate)),
        (this.qr[e5.toKey()] = n5)),
      n5
    );
  }
  getGlobalsCache() {
    return this.$r;
  }
  getTargetCache() {
    return this.Ur;
  }
  getRemoteDocumentCache() {
    return this.remoteDocumentCache;
  }
  getBundleCache() {
    return this.Gr;
  }
  runTransaction(e5, t4, n5) {
    __PRIVATE_logDebug("MemoryPersistence", "Starting transaction:", e5);
    const r7 = new __PRIVATE_MemoryTransaction(this.Qr.next());
    return (
      this.referenceDelegate.zr(),
      n5(r7)
        .next((e6) => this.referenceDelegate.jr(r7).next(() => e6))
        .toPromise()
        .then((e6) => (r7.raiseOnCommittedEvent(), e6))
    );
  }
  Hr(e5, t4) {
    return PersistencePromise.or(
      Object.values(this.qr).map((n5) => () => n5.containsKey(e5, t4))
    );
  }
}

class __PRIVATE_MemoryTransaction extends PersistenceTransaction {
  constructor(e5) {
    super(), (this.currentSequenceNumber = e5);
  }
}

class __PRIVATE_MemoryEagerDelegate {
  constructor(e5) {
    (this.persistence = e5),
      (this.Jr = new __PRIVATE_ReferenceSet()),
      (this.Yr = null);
  }
  static Zr(e5) {
    return new __PRIVATE_MemoryEagerDelegate(e5);
  }
  get Xr() {
    if (this.Yr) return this.Yr;
    throw fail();
  }
  addReference(e5, t4, n5) {
    return (
      this.Jr.addReference(n5, t4),
      this.Xr.delete(n5.toString()),
      PersistencePromise.resolve()
    );
  }
  removeReference(e5, t4, n5) {
    return (
      this.Jr.removeReference(n5, t4),
      this.Xr.add(n5.toString()),
      PersistencePromise.resolve()
    );
  }
  markPotentiallyOrphaned(e5, t4) {
    return this.Xr.add(t4.toString()), PersistencePromise.resolve();
  }
  removeTarget(e5, t4) {
    this.Jr.gr(t4.targetId).forEach((e6) => this.Xr.add(e6.toString()));
    const n5 = this.persistence.getTargetCache();
    return n5
      .getMatchingKeysForTargetId(e5, t4.targetId)
      .next((e6) => {
        e6.forEach((e7) => this.Xr.add(e7.toString()));
      })
      .next(() => n5.removeTargetData(e5, t4));
  }
  zr() {
    this.Yr = new Set();
  }
  jr(e5) {
    const t4 = this.persistence.getRemoteDocumentCache().newChangeBuffer();
    return PersistencePromise.forEach(this.Xr, (n5) => {
      const r7 = DocumentKey.fromPath(n5);
      return this.ei(e5, r7).next((e6) => {
        e6 || t4.removeEntry(r7, SnapshotVersion.min());
      });
    }).next(() => ((this.Yr = null), t4.apply(e5)));
  }
  updateLimboDocument(e5, t4) {
    return this.ei(e5, t4).next((e6) => {
      e6 ? this.Xr.delete(t4.toString()) : this.Xr.add(t4.toString());
    });
  }
  Wr(e5) {
    return 0;
  }
  ei(e5, t4) {
    return PersistencePromise.or([
      () => PersistencePromise.resolve(this.Jr.containsKey(t4)),
      () => this.persistence.getTargetCache().containsKey(e5, t4),
      () => this.persistence.Hr(e5, t4),
    ]);
  }
}

class __PRIVATE_MemoryLruDelegate {
  constructor(e5, t4) {
    (this.persistence = e5),
      (this.ti = new ObjectMap(
        (e6) => __PRIVATE_encodeResourcePath(e6.path),
        (e6, t5) => e6.isEqual(t5)
      )),
      (this.garbageCollector = __PRIVATE_newLruGarbageCollector(this, t4));
  }
  static Zr(e5, t4) {
    return new __PRIVATE_MemoryLruDelegate(e5, t4);
  }
  zr() {}
  jr(e5) {
    return PersistencePromise.resolve();
  }
  forEachTarget(e5, t4) {
    return this.persistence.getTargetCache().forEachTarget(e5, t4);
  }
  Yn(e5) {
    const t4 = this.er(e5);
    return this.persistence
      .getTargetCache()
      .getTargetCount(e5)
      .next((e6) => t4.next((t5) => e6 + t5));
  }
  er(e5) {
    let t4 = 0;
    return this.Zn(e5, (e6) => {
      t4++;
    }).next(() => t4);
  }
  Zn(e5, t4) {
    return PersistencePromise.forEach(this.ti, (n5, r7) =>
      this.nr(e5, n5, r7).next((e6) =>
        e6 ? PersistencePromise.resolve() : t4(r7)
      )
    );
  }
  removeTargets(e5, t4, n5) {
    return this.persistence.getTargetCache().removeTargets(e5, t4, n5);
  }
  removeOrphanedDocuments(e5, t4) {
    let n5 = 0;
    const r7 = this.persistence.getRemoteDocumentCache(),
      i5 = r7.newChangeBuffer();
    return r7
      .Or(e5, (r8) =>
        this.nr(e5, r8, t4).next((e6) => {
          e6 || (n5++, i5.removeEntry(r8, SnapshotVersion.min()));
        })
      )
      .next(() => i5.apply(e5))
      .next(() => n5);
  }
  markPotentiallyOrphaned(e5, t4) {
    return (
      this.ti.set(t4, e5.currentSequenceNumber), PersistencePromise.resolve()
    );
  }
  removeTarget(e5, t4) {
    const n5 = t4.withSequenceNumber(e5.currentSequenceNumber);
    return this.persistence.getTargetCache().updateTargetData(e5, n5);
  }
  addReference(e5, t4, n5) {
    return (
      this.ti.set(n5, e5.currentSequenceNumber), PersistencePromise.resolve()
    );
  }
  removeReference(e5, t4, n5) {
    return (
      this.ti.set(n5, e5.currentSequenceNumber), PersistencePromise.resolve()
    );
  }
  updateLimboDocument(e5, t4) {
    return (
      this.ti.set(t4, e5.currentSequenceNumber), PersistencePromise.resolve()
    );
  }
  Wr(e5) {
    let t4 = e5.key.toString().length;
    return (
      e5.isFoundDocument() && (t4 += __PRIVATE_estimateByteSize(e5.data.value)),
      t4
    );
  }
  nr(e5, t4, n5) {
    return PersistencePromise.or([
      () => this.persistence.Hr(e5, t4),
      () => this.persistence.getTargetCache().containsKey(e5, t4),
      () => {
        const e6 = this.ti.get(t4);
        return PersistencePromise.resolve(e6 !== undefined && e6 > n5);
      },
    ]);
  }
  getCacheSize(e5) {
    return this.persistence.getRemoteDocumentCache().getSize(e5);
  }
}
class __PRIVATE_LocalViewChanges {
  constructor(e5, t4, n5, r7) {
    (this.targetId = e5), (this.fromCache = t4), (this.$i = n5), (this.Ui = r7);
  }
  static Wi(e5, t4) {
    let n5 = __PRIVATE_documentKeySet(),
      r7 = __PRIVATE_documentKeySet();
    for (const e6 of t4.docChanges)
      switch (e6.type) {
        case 0:
          n5 = n5.add(e6.doc.key);
          break;
        case 1:
          r7 = r7.add(e6.doc.key);
      }
    return new __PRIVATE_LocalViewChanges(e5, t4.fromCache, n5, r7);
  }
}

class QueryContext {
  constructor() {
    this._documentReadCount = 0;
  }
  get documentReadCount() {
    return this._documentReadCount;
  }
  incrementDocumentReadCount(e5) {
    this._documentReadCount += e5;
  }
}

class __PRIVATE_QueryEngine {
  constructor() {
    (this.Gi = false),
      (this.zi = false),
      (this.ji = 100),
      (this.Hi =
        (function __PRIVATE_getDefaultRelativeIndexReadCostPerDocument() {
          return isSafari()
            ? 8
            : __PRIVATE_getAndroidVersion(getUA()) > 0
            ? 6
            : 4;
        })());
  }
  initialize(e5, t4) {
    (this.Ji = e5), (this.indexManager = t4), (this.Gi = true);
  }
  getDocumentsMatchingQuery(e5, t4, n5, r7) {
    const i5 = {
      result: null,
    };
    return this.Yi(e5, t4)
      .next((e6) => {
        i5.result = e6;
      })
      .next(() => {
        if (!i5.result)
          return this.Zi(e5, t4, r7, n5).next((e6) => {
            i5.result = e6;
          });
      })
      .next(() => {
        if (i5.result) return;
        const n6 = new QueryContext();
        return this.Xi(e5, t4, n6).next((r8) => {
          if (((i5.result = r8), this.zi)) return this.es(e5, t4, n6, r8.size);
        });
      })
      .next(() => i5.result);
  }
  es(e5, t4, n5, r7) {
    return n5.documentReadCount < this.ji
      ? (__PRIVATE_getLogLevel() <= LogLevel.DEBUG &&
          __PRIVATE_logDebug(
            "QueryEngine",
            "SDK will not create cache indexes for query:",
            __PRIVATE_stringifyQuery(t4),
            "since it only creates cache indexes for collection contains",
            "more than or equal to",
            this.ji,
            "documents"
          ),
        PersistencePromise.resolve())
      : (__PRIVATE_getLogLevel() <= LogLevel.DEBUG &&
          __PRIVATE_logDebug(
            "QueryEngine",
            "Query:",
            __PRIVATE_stringifyQuery(t4),
            "scans",
            n5.documentReadCount,
            "local documents and returns",
            r7,
            "documents as results."
          ),
        n5.documentReadCount > this.Hi * r7
          ? (__PRIVATE_getLogLevel() <= LogLevel.DEBUG &&
              __PRIVATE_logDebug(
                "QueryEngine",
                "The SDK decides to create cache indexes for query:",
                __PRIVATE_stringifyQuery(t4),
                "as using cache indexes may help improve performance."
              ),
            this.indexManager.createTargetIndexes(
              e5,
              __PRIVATE_queryToTarget(t4)
            ))
          : PersistencePromise.resolve());
  }
  Yi(e5, t4) {
    if (__PRIVATE_queryMatchesAllDocuments(t4))
      return PersistencePromise.resolve(null);
    let n5 = __PRIVATE_queryToTarget(t4);
    return this.indexManager.getIndexType(e5, n5).next((r7) =>
      r7 === 0
        ? null
        : (t4.limit !== null &&
            r7 === 1 &&
            ((t4 = __PRIVATE_queryWithLimit(t4, null, "F")),
            (n5 = __PRIVATE_queryToTarget(t4))),
          this.indexManager.getDocumentsMatchingTarget(e5, n5).next((r8) => {
            const i5 = __PRIVATE_documentKeySet(...r8);
            return this.Ji.getDocuments(e5, i5).next((r9) =>
              this.indexManager.getMinOffset(e5, n5).next((n6) => {
                const s3 = this.ts(t4, r9);
                return this.ns(t4, s3, i5, n6.readTime)
                  ? this.Yi(e5, __PRIVATE_queryWithLimit(t4, null, "F"))
                  : this.rs(e5, s3, t4, n6);
              })
            );
          }))
    );
  }
  Zi(e5, t4, n5, r7) {
    return __PRIVATE_queryMatchesAllDocuments(t4) ||
      r7.isEqual(SnapshotVersion.min())
      ? PersistencePromise.resolve(null)
      : this.Ji.getDocuments(e5, n5).next((i5) => {
          const s3 = this.ts(t4, i5);
          return this.ns(t4, s3, n5, r7)
            ? PersistencePromise.resolve(null)
            : (__PRIVATE_getLogLevel() <= LogLevel.DEBUG &&
                __PRIVATE_logDebug(
                  "QueryEngine",
                  "Re-using previous result from %s to execute query: %s",
                  r7.toString(),
                  __PRIVATE_stringifyQuery(t4)
                ),
              this.rs(
                e5,
                s3,
                t4,
                __PRIVATE_newIndexOffsetSuccessorFromReadTime(r7, -1)
              ).next((e6) => e6));
        });
  }
  ts(e5, t4) {
    let n5 = new SortedSet(__PRIVATE_newQueryComparator(e5));
    return (
      t4.forEach((t5, r7) => {
        __PRIVATE_queryMatches(e5, r7) && (n5 = n5.add(r7));
      }),
      n5
    );
  }
  ns(e5, t4, n5, r7) {
    if (e5.limit === null) return false;
    if (n5.size !== t4.size) return true;
    const i5 = e5.limitType === "F" ? t4.last() : t4.first();
    return !!i5 && (i5.hasPendingWrites || i5.version.compareTo(r7) > 0);
  }
  Xi(e5, t4, n5) {
    return (
      __PRIVATE_getLogLevel() <= LogLevel.DEBUG &&
        __PRIVATE_logDebug(
          "QueryEngine",
          "Using full collection scan to execute query:",
          __PRIVATE_stringifyQuery(t4)
        ),
      this.Ji.getDocumentsMatchingQuery(e5, t4, IndexOffset.min(), n5)
    );
  }
  rs(e5, t4, n5, r7) {
    return this.Ji.getDocumentsMatchingQuery(e5, n5, r7).next(
      (e6) => (
        t4.forEach((t5) => {
          e6 = e6.insert(t5.key, t5);
        }),
        e6
      )
    );
  }
}

class __PRIVATE_LocalStoreImpl {
  constructor(e5, t4, n5, r7) {
    (this.persistence = e5),
      (this.ss = t4),
      (this.serializer = r7),
      (this.os = new SortedMap(__PRIVATE_primitiveComparator)),
      (this._s = new ObjectMap(
        (e6) => __PRIVATE_canonifyTarget(e6),
        __PRIVATE_targetEquals
      )),
      (this.us = new Map()),
      (this.cs = e5.getRemoteDocumentCache()),
      (this.Ur = e5.getTargetCache()),
      (this.Gr = e5.getBundleCache()),
      this.ls(n5);
  }
  ls(e5) {
    (this.documentOverlayCache = this.persistence.getDocumentOverlayCache(e5)),
      (this.indexManager = this.persistence.getIndexManager(e5)),
      (this.mutationQueue = this.persistence.getMutationQueue(
        e5,
        this.indexManager
      )),
      (this.localDocuments = new LocalDocumentsView(
        this.cs,
        this.mutationQueue,
        this.documentOverlayCache,
        this.indexManager
      )),
      this.cs.setIndexManager(this.indexManager),
      this.ss.initialize(this.localDocuments, this.indexManager);
  }
  collectGarbage(e5) {
    return this.persistence.runTransaction(
      "Collect garbage",
      "readwrite-primary",
      (t4) => e5.collect(t4, this.os)
    );
  }
}
function __PRIVATE_newLocalStore(e5, t4, n5, r7) {
  return new __PRIVATE_LocalStoreImpl(e5, t4, n5, r7);
}
async function __PRIVATE_localStoreHandleUserChange(e5, t4) {
  const n5 = __PRIVATE_debugCast(e5);
  return await n5.persistence.runTransaction(
    "Handle user change",
    "readonly",
    (e6) => {
      let r7;
      return n5.mutationQueue
        .getAllMutationBatches(e6)
        .next(
          (i5) => (
            (r7 = i5), n5.ls(t4), n5.mutationQueue.getAllMutationBatches(e6)
          )
        )
        .next((t5) => {
          const i5 = [],
            s3 = [];
          let o5 = __PRIVATE_documentKeySet();
          for (const e7 of r7) {
            i5.push(e7.batchId);
            for (const t6 of e7.mutations) o5 = o5.add(t6.key);
          }
          for (const e7 of t5) {
            s3.push(e7.batchId);
            for (const t6 of e7.mutations) o5 = o5.add(t6.key);
          }
          return n5.localDocuments.getDocuments(e6, o5).next((e7) => ({
            hs: e7,
            removedBatchIds: i5,
            addedBatchIds: s3,
          }));
        });
    }
  );
}
function __PRIVATE_localStoreGetLastRemoteSnapshotVersion(e5) {
  const t4 = __PRIVATE_debugCast(e5);
  return t4.persistence.runTransaction(
    "Get last remote snapshot version",
    "readonly",
    (e6) => t4.Ur.getLastRemoteSnapshotVersion(e6)
  );
}
function __PRIVATE_localStoreApplyRemoteEventToLocalCache(e5, t4) {
  const n5 = __PRIVATE_debugCast(e5),
    r7 = t4.snapshotVersion;
  let i5 = n5.os;
  return n5.persistence
    .runTransaction("Apply remote event", "readwrite-primary", (e6) => {
      const s3 = n5.cs.newChangeBuffer({
        trackRemovals: true,
      });
      i5 = n5.os;
      const o5 = [];
      t4.targetChanges.forEach((s4, _3) => {
        const a4 = i5.get(_3);
        if (!a4) return;
        o5.push(
          n5.Ur.removeMatchingKeys(e6, s4.removedDocuments, _3).next(() =>
            n5.Ur.addMatchingKeys(e6, s4.addedDocuments, _3)
          )
        );
        let u3 = a4.withSequenceNumber(e6.currentSequenceNumber);
        t4.targetMismatches.get(_3) !== null
          ? (u3 = u3
              .withResumeToken(
                ByteString.EMPTY_BYTE_STRING,
                SnapshotVersion.min()
              )
              .withLastLimboFreeSnapshotVersion(SnapshotVersion.min()))
          : s4.resumeToken.approximateByteSize() > 0 &&
            (u3 = u3.withResumeToken(s4.resumeToken, r7)),
          (i5 = i5.insert(_3, u3)),
          (function __PRIVATE_shouldPersistTargetData(e7, t5, n6) {
            if (e7.resumeToken.approximateByteSize() === 0) return true;
            if (
              t5.snapshotVersion.toMicroseconds() -
                e7.snapshotVersion.toMicroseconds() >=
              300000000
            )
              return true;
            return (
              n6.addedDocuments.size +
                n6.modifiedDocuments.size +
                n6.removedDocuments.size >
              0
            );
          })(a4, u3, s4) && o5.push(n5.Ur.updateTargetData(e6, u3));
      });
      let _2 = __PRIVATE_mutableDocumentMap(),
        a3 = __PRIVATE_documentKeySet();
      if (
        (t4.documentUpdates.forEach((r8) => {
          t4.resolvedLimboDocuments.has(r8) &&
            o5.push(
              n5.persistence.referenceDelegate.updateLimboDocument(e6, r8)
            );
        }),
        o5.push(
          __PRIVATE_populateDocumentChangeBuffer(
            e6,
            s3,
            t4.documentUpdates
          ).next((e7) => {
            (_2 = e7.Ps), (a3 = e7.Is);
          })
        ),
        !r7.isEqual(SnapshotVersion.min()))
      ) {
        const t5 = n5.Ur.getLastRemoteSnapshotVersion(e6).next((t6) =>
          n5.Ur.setTargetsMetadata(e6, e6.currentSequenceNumber, r7)
        );
        o5.push(t5);
      }
      return PersistencePromise.waitFor(o5)
        .next(() => s3.apply(e6))
        .next(() => n5.localDocuments.getLocalViewOfDocuments(e6, _2, a3))
        .next(() => _2);
    })
    .then((e6) => ((n5.os = i5), e6));
}
function __PRIVATE_populateDocumentChangeBuffer(e5, t4, n5) {
  let r7 = __PRIVATE_documentKeySet(),
    i5 = __PRIVATE_documentKeySet();
  return (
    n5.forEach((e6) => (r7 = r7.add(e6))),
    t4.getEntries(e5, r7).next((e6) => {
      let r8 = __PRIVATE_mutableDocumentMap();
      return (
        n5.forEach((n6, s3) => {
          const o5 = e6.get(n6);
          s3.isFoundDocument() !== o5.isFoundDocument() && (i5 = i5.add(n6)),
            s3.isNoDocument() && s3.version.isEqual(SnapshotVersion.min())
              ? (t4.removeEntry(n6, s3.readTime), (r8 = r8.insert(n6, s3)))
              : !o5.isValidDocument() ||
                s3.version.compareTo(o5.version) > 0 ||
                (s3.version.compareTo(o5.version) === 0 && o5.hasPendingWrites)
              ? (t4.addEntry(s3), (r8 = r8.insert(n6, s3)))
              : __PRIVATE_logDebug(
                  "LocalStore",
                  "Ignoring outdated watch update for ",
                  n6,
                  ". Current version:",
                  o5.version,
                  " Watch version:",
                  s3.version
                );
        }),
        {
          Ps: r8,
          Is: i5,
        }
      );
    })
  );
}
function __PRIVATE_localStoreAllocateTarget(e5, t4) {
  const n5 = __PRIVATE_debugCast(e5);
  return n5.persistence
    .runTransaction("Allocate target", "readwrite", (e6) => {
      let r7;
      return n5.Ur.getTargetData(e6, t4).next((i5) =>
        i5
          ? ((r7 = i5), PersistencePromise.resolve(r7))
          : n5.Ur.allocateTargetId(e6).next(
              (i6) => (
                (r7 = new TargetData(
                  t4,
                  i6,
                  "TargetPurposeListen",
                  e6.currentSequenceNumber
                )),
                n5.Ur.addTargetData(e6, r7).next(() => r7)
              )
            )
      );
    })
    .then((e6) => {
      const r7 = n5.os.get(e6.targetId);
      return (
        (r7 === null || e6.snapshotVersion.compareTo(r7.snapshotVersion) > 0) &&
          ((n5.os = n5.os.insert(e6.targetId, e6)), n5._s.set(t4, e6.targetId)),
        e6
      );
    });
}
async function __PRIVATE_localStoreReleaseTarget(e5, t4, n5) {
  const r7 = __PRIVATE_debugCast(e5),
    i5 = r7.os.get(t4),
    s3 = n5 ? "readwrite" : "readwrite-primary";
  try {
    n5 ||
      (await r7.persistence.runTransaction("Release target", s3, (e6) =>
        r7.persistence.referenceDelegate.removeTarget(e6, i5)
      ));
  } catch (e6) {
    if (!__PRIVATE_isIndexedDbTransactionError(e6)) throw e6;
    __PRIVATE_logDebug(
      "LocalStore",
      `Failed to update sequence numbers for target ${t4}: ${e6}`
    );
  }
  (r7.os = r7.os.remove(t4)), r7._s.delete(i5.target);
}
function __PRIVATE_localStoreExecuteQuery(e5, t4, n5) {
  const r7 = __PRIVATE_debugCast(e5);
  let i5 = SnapshotVersion.min(),
    s3 = __PRIVATE_documentKeySet();
  return r7.persistence.runTransaction("Execute query", "readwrite", (e6) =>
    (function __PRIVATE_localStoreGetTargetData(e7, t5, n6) {
      const r8 = __PRIVATE_debugCast(e7),
        i6 = r8._s.get(n6);
      return i6 !== undefined
        ? PersistencePromise.resolve(r8.os.get(i6))
        : r8.Ur.getTargetData(t5, n6);
    })(r7, e6, __PRIVATE_queryToTarget(t4))
      .next((t5) => {
        if (t5)
          return (
            (i5 = t5.lastLimboFreeSnapshotVersion),
            r7.Ur.getMatchingKeysForTargetId(e6, t5.targetId).next((e7) => {
              s3 = e7;
            })
          );
      })
      .next(() =>
        r7.ss.getDocumentsMatchingQuery(
          e6,
          t4,
          n5 ? i5 : SnapshotVersion.min(),
          n5 ? s3 : __PRIVATE_documentKeySet()
        )
      )
      .next(
        (e7) => (
          __PRIVATE_setMaxReadTime(r7, __PRIVATE_queryCollectionGroup(t4), e7),
          {
            documents: e7,
            Ts: s3,
          }
        )
      )
  );
}
function __PRIVATE_setMaxReadTime(e5, t4, n5) {
  let r7 = e5.us.get(t4) || SnapshotVersion.min();
  n5.forEach((e6, t5) => {
    t5.readTime.compareTo(r7) > 0 && (r7 = t5.readTime);
  }),
    e5.us.set(t4, r7);
}
class __PRIVATE_LocalClientState {
  constructor() {
    this.activeTargetIds = __PRIVATE_targetIdSet();
  }
  fs(e5) {
    this.activeTargetIds = this.activeTargetIds.add(e5);
  }
  gs(e5) {
    this.activeTargetIds = this.activeTargetIds.delete(e5);
  }
  Vs() {
    const e5 = {
      activeTargetIds: this.activeTargetIds.toArray(),
      updateTimeMs: Date.now(),
    };
    return JSON.stringify(e5);
  }
}
class __PRIVATE_MemorySharedClientState {
  constructor() {
    (this.so = new __PRIVATE_LocalClientState()),
      (this.oo = {}),
      (this.onlineStateHandler = null),
      (this.sequenceNumberHandler = null);
  }
  addPendingMutation(e5) {}
  updateMutationState(e5, t4, n5) {}
  addLocalQueryTarget(e5, t4 = true) {
    return t4 && this.so.fs(e5), this.oo[e5] || "not-current";
  }
  updateQueryState(e5, t4, n5) {
    this.oo[e5] = t4;
  }
  removeLocalQueryTarget(e5) {
    this.so.gs(e5);
  }
  isLocalQueryTarget(e5) {
    return this.so.activeTargetIds.has(e5);
  }
  clearQueryState(e5) {
    delete this.oo[e5];
  }
  getAllActiveQueryTargets() {
    return this.so.activeTargetIds;
  }
  isActiveQueryTarget(e5) {
    return this.so.activeTargetIds.has(e5);
  }
  start() {
    return (this.so = new __PRIVATE_LocalClientState()), Promise.resolve();
  }
  handleUserChange(e5, t4, n5) {}
  setOnlineState(e5) {}
  shutdown() {}
  writeSequenceNumber(e5) {}
  notifyBundleLoaded(e5) {}
}

class __PRIVATE_NoopConnectivityMonitor {
  _o(e5) {}
  shutdown() {}
}

class __PRIVATE_BrowserConnectivityMonitor {
  constructor() {
    (this.ao = () => this.uo()),
      (this.co = () => this.lo()),
      (this.ho = []),
      this.Po();
  }
  _o(e5) {
    this.ho.push(e5);
  }
  shutdown() {
    window.removeEventListener("online", this.ao),
      window.removeEventListener("offline", this.co);
  }
  Po() {
    window.addEventListener("online", this.ao),
      window.addEventListener("offline", this.co);
  }
  uo() {
    __PRIVATE_logDebug(
      "ConnectivityMonitor",
      "Network connectivity changed: AVAILABLE"
    );
    for (const e5 of this.ho) e5(0);
  }
  lo() {
    __PRIVATE_logDebug(
      "ConnectivityMonitor",
      "Network connectivity changed: UNAVAILABLE"
    );
    for (const e5 of this.ho) e5(1);
  }
  static D() {
    return (
      typeof window != "undefined" &&
      window.addEventListener !== undefined &&
      window.removeEventListener !== undefined
    );
  }
}
var me = null;
function __PRIVATE_generateUniqueDebugId() {
  return (
    me === null
      ? (me = (function __PRIVATE_generateInitialUniqueDebugId() {
          return 268435456 + Math.round(2147483648 * Math.random());
        })())
      : me++,
    "0x" + me.toString(16)
  );
}
var fe = {
  BatchGetDocuments: "batchGet",
  Commit: "commit",
  RunQuery: "runQuery",
  RunAggregationQuery: "runAggregationQuery",
};

class __PRIVATE_StreamBridge {
  constructor(e5) {
    (this.Io = e5.Io), (this.To = e5.To);
  }
  Eo(e5) {
    this.Ao = e5;
  }
  Ro(e5) {
    this.Vo = e5;
  }
  mo(e5) {
    this.fo = e5;
  }
  onMessage(e5) {
    this.po = e5;
  }
  close() {
    this.To();
  }
  send(e5) {
    this.Io(e5);
  }
  yo() {
    this.Ao();
  }
  wo() {
    this.Vo();
  }
  So(e5) {
    this.fo(e5);
  }
  bo(e5) {
    this.po(e5);
  }
}
var ge = "WebChannelConnection";

class __PRIVATE_WebChannelConnection extends class __PRIVATE_RestConnection {
  constructor(e5) {
    (this.databaseInfo = e5), (this.databaseId = e5.databaseId);
    const t4 = e5.ssl ? "https" : "http",
      n5 = encodeURIComponent(this.databaseId.projectId),
      r7 = encodeURIComponent(this.databaseId.database);
    (this.Do = t4 + "://" + e5.host),
      (this.vo = `projects/${n5}/databases/${r7}`),
      (this.Co =
        this.databaseId.database === "(default)"
          ? `project_id=${n5}`
          : `project_id=${n5}&database_id=${r7}`);
  }
  get Fo() {
    return false;
  }
  Mo(e5, t4, n5, r7, i5) {
    const s3 = __PRIVATE_generateUniqueDebugId(),
      o5 = this.xo(e5, t4.toUriEncodedString());
    __PRIVATE_logDebug("RestConnection", `Sending RPC '${e5}' ${s3}:`, o5, n5);
    const _2 = {
      "google-cloud-resource-prefix": this.vo,
      "x-goog-request-params": this.Co,
    };
    return (
      this.Oo(_2, r7, i5),
      this.No(e5, o5, _2, n5).then(
        (t5) => (
          __PRIVATE_logDebug(
            "RestConnection",
            `Received RPC '${e5}' ${s3}: `,
            t5
          ),
          t5
        ),
        (t5) => {
          throw (
            (__PRIVATE_logWarn(
              "RestConnection",
              `RPC '${e5}' ${s3} failed with error: `,
              t5,
              "url: ",
              o5,
              "request:",
              n5
            ),
            t5)
          );
        }
      )
    );
  }
  Lo(e5, t4, n5, r7, i5, s3) {
    return this.Mo(e5, t4, n5, r7, i5);
  }
  Oo(e5, t4, n5) {
    (e5["X-Goog-Api-Client"] = (function __PRIVATE_getGoogApiClientValue() {
      return "gl-js/ fire/" + S3;
    })()),
      (e5["Content-Type"] = "text/plain"),
      this.databaseInfo.appId &&
        (e5["X-Firebase-GMPID"] = this.databaseInfo.appId),
      t4 && t4.headers.forEach((t5, n6) => (e5[n6] = t5)),
      n5 && n5.headers.forEach((t5, n6) => (e5[n6] = t5));
  }
  xo(e5, t4) {
    const n5 = fe[e5];
    return `${this.Do}/v1/${t4}:${n5}`;
  }
  terminate() {}
} {
  constructor(e5) {
    super(e5),
      (this.forceLongPolling = e5.forceLongPolling),
      (this.autoDetectLongPolling = e5.autoDetectLongPolling),
      (this.useFetchStreams = e5.useFetchStreams),
      (this.longPollingOptions = e5.longPollingOptions);
  }
  No(e5, t4, n5, r7) {
    const i5 = __PRIVATE_generateUniqueDebugId();
    return new Promise((s3, o5) => {
      const _2 = new XhrIo();
      _2.setWithCredentials(true),
        _2.listenOnce(EventType.COMPLETE, () => {
          try {
            switch (_2.getLastErrorCode()) {
              case ErrorCode.NO_ERROR:
                const t5 = _2.getResponseJson();
                __PRIVATE_logDebug(
                  ge,
                  `XHR for RPC '${e5}' ${i5} received:`,
                  JSON.stringify(t5)
                ),
                  s3(t5);
                break;
              case ErrorCode.TIMEOUT:
                __PRIVATE_logDebug(ge, `RPC '${e5}' ${i5} timed out`),
                  o5(
                    new FirestoreError(D.DEADLINE_EXCEEDED, "Request time out")
                  );
                break;
              case ErrorCode.HTTP_ERROR:
                const n6 = _2.getStatus();
                if (
                  (__PRIVATE_logDebug(
                    ge,
                    `RPC '${e5}' ${i5} failed with status:`,
                    n6,
                    "response text:",
                    _2.getResponseText()
                  ),
                  n6 > 0)
                ) {
                  let e6 = _2.getResponseJson();
                  Array.isArray(e6) && (e6 = e6[0]);
                  const t6 = e6 == null ? undefined : e6.error;
                  if (t6 && t6.status && t6.message) {
                    const e7 =
                      (function __PRIVATE_mapCodeFromHttpResponseErrorStatus(
                        e8
                      ) {
                        const t7 = e8.toLowerCase().replace(/_/g, "-");
                        return Object.values(D).indexOf(t7) >= 0
                          ? t7
                          : D.UNKNOWN;
                      })(t6.status);
                    o5(new FirestoreError(e7, t6.message));
                  } else
                    o5(
                      new FirestoreError(
                        D.UNKNOWN,
                        "Server responded with status " + _2.getStatus()
                      )
                    );
                } else
                  o5(new FirestoreError(D.UNAVAILABLE, "Connection failed."));
                break;
              default:
                fail();
            }
          } finally {
            __PRIVATE_logDebug(ge, `RPC '${e5}' ${i5} completed.`);
          }
        });
      const a3 = JSON.stringify(r7);
      __PRIVATE_logDebug(ge, `RPC '${e5}' ${i5} sending request:`, r7),
        _2.send(t4, "POST", a3, n5, 15);
    });
  }
  Bo(e5, t4, n5) {
    const r7 = __PRIVATE_generateUniqueDebugId(),
      i5 = [this.Do, "/", "google.firestore.v1.Firestore", "/", e5, "/channel"],
      s3 = createWebChannelTransport(),
      o5 = getStatEventTarget(),
      _2 = {
        httpSessionIdParam: "gsessionid",
        initMessageHeaders: {},
        messageUrlParams: {
          database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`,
        },
        sendRawJson: true,
        supportsCrossDomainXhr: true,
        internalChannelParams: {
          forwardChannelRequestTimeoutMs: 600000,
        },
        forceLongPolling: this.forceLongPolling,
        detectBufferingProxy: this.autoDetectLongPolling,
      },
      a3 = this.longPollingOptions.timeoutSeconds;
    a3 !== undefined && (_2.longPollingTimeout = Math.round(1000 * a3)),
      this.useFetchStreams && (_2.useFetchStreams = true),
      this.Oo(_2.initMessageHeaders, t4, n5),
      (_2.encodeInitMessageHeaders = true);
    const u3 = i5.join("");
    __PRIVATE_logDebug(ge, `Creating RPC '${e5}' stream ${r7}: ${u3}`, _2);
    const c4 = s3.createWebChannel(u3, _2);
    let l3 = false,
      h3 = false;
    const P2 = new __PRIVATE_StreamBridge({
        Io: (t5) => {
          h3
            ? __PRIVATE_logDebug(
                ge,
                `Not sending because RPC '${e5}' stream ${r7} is closed:`,
                t5
              )
            : (l3 ||
                (__PRIVATE_logDebug(
                  ge,
                  `Opening RPC '${e5}' stream ${r7} transport.`
                ),
                c4.open(),
                (l3 = true)),
              __PRIVATE_logDebug(ge, `RPC '${e5}' stream ${r7} sending:`, t5),
              c4.send(t5));
        },
        To: () => c4.close(),
      }),
      __PRIVATE_unguardedEventListen = (e6, t5, n6) => {
        e6.listen(t5, (e7) => {
          try {
            n6(e7);
          } catch (e8) {
            setTimeout(() => {
              throw e8;
            }, 0);
          }
        });
      };
    return (
      __PRIVATE_unguardedEventListen(c4, WebChannel.EventType.OPEN, () => {
        h3 ||
          (__PRIVATE_logDebug(ge, `RPC '${e5}' stream ${r7} transport opened.`),
          P2.yo());
      }),
      __PRIVATE_unguardedEventListen(c4, WebChannel.EventType.CLOSE, () => {
        h3 ||
          ((h3 = true),
          __PRIVATE_logDebug(ge, `RPC '${e5}' stream ${r7} transport closed`),
          P2.So());
      }),
      __PRIVATE_unguardedEventListen(c4, WebChannel.EventType.ERROR, (t5) => {
        h3 ||
          ((h3 = true),
          __PRIVATE_logWarn(
            ge,
            `RPC '${e5}' stream ${r7} transport errored:`,
            t5
          ),
          P2.So(
            new FirestoreError(
              D.UNAVAILABLE,
              "The operation could not be completed"
            )
          ));
      }),
      __PRIVATE_unguardedEventListen(c4, WebChannel.EventType.MESSAGE, (t5) => {
        var n6;
        if (!h3) {
          const i6 = t5.data[0];
          __PRIVATE_hardAssert(!!i6);
          const s4 = i6,
            o6 =
              s4.error ||
              ((n6 = s4[0]) === null || n6 === undefined
                ? undefined
                : n6.error);
          if (o6) {
            __PRIVATE_logDebug(
              ge,
              `RPC '${e5}' stream ${r7} received error:`,
              o6
            );
            const t6 = o6.status;
            let n7 = (function __PRIVATE_mapCodeFromRpcStatus(e6) {
                const t7 = le[e6];
                if (t7 !== undefined) return __PRIVATE_mapCodeFromRpcCode(t7);
              })(t6),
              i7 = o6.message;
            n7 === undefined &&
              ((n7 = D.INTERNAL),
              (i7 =
                "Unknown error status: " + t6 + " with message " + o6.message)),
              (h3 = true),
              P2.So(new FirestoreError(n7, i7)),
              c4.close();
          } else
            __PRIVATE_logDebug(ge, `RPC '${e5}' stream ${r7} received:`, i6),
              P2.bo(i6);
        }
      }),
      __PRIVATE_unguardedEventListen(o5, Event2.STAT_EVENT, (t5) => {
        t5.stat === Stat.PROXY
          ? __PRIVATE_logDebug(
              ge,
              `RPC '${e5}' stream ${r7} detected buffering proxy`
            )
          : t5.stat === Stat.NOPROXY &&
            __PRIVATE_logDebug(
              ge,
              `RPC '${e5}' stream ${r7} detected no buffering proxy`
            );
      }),
      setTimeout(() => {
        P2.wo();
      }, 0),
      P2
    );
  }
}
function getDocument() {
  return typeof document != "undefined" ? document : null;
}
function __PRIVATE_newSerializer(e5) {
  return new JsonProtoSerializer(e5, true);
}

class __PRIVATE_ExponentialBackoff {
  constructor(e5, t4, n5 = 1000, r7 = 1.5, i5 = 60000) {
    (this.ui = e5),
      (this.timerId = t4),
      (this.ko = n5),
      (this.qo = r7),
      (this.Qo = i5),
      (this.Ko = 0),
      (this.$o = null),
      (this.Uo = Date.now()),
      this.reset();
  }
  reset() {
    this.Ko = 0;
  }
  Wo() {
    this.Ko = this.Qo;
  }
  Go(e5) {
    this.cancel();
    const t4 = Math.floor(this.Ko + this.zo()),
      n5 = Math.max(0, Date.now() - this.Uo),
      r7 = Math.max(0, t4 - n5);
    r7 > 0 &&
      __PRIVATE_logDebug(
        "ExponentialBackoff",
        `Backing off for ${r7} ms (base delay: ${this.Ko} ms, delay with jitter: ${t4} ms, last attempt: ${n5} ms ago)`
      ),
      (this.$o = this.ui.enqueueAfterDelay(
        this.timerId,
        r7,
        () => ((this.Uo = Date.now()), e5())
      )),
      (this.Ko *= this.qo),
      this.Ko < this.ko && (this.Ko = this.ko),
      this.Ko > this.Qo && (this.Ko = this.Qo);
  }
  jo() {
    this.$o !== null && (this.$o.skipDelay(), (this.$o = null));
  }
  cancel() {
    this.$o !== null && (this.$o.cancel(), (this.$o = null));
  }
  zo() {
    return (Math.random() - 0.5) * this.Ko;
  }
}

class __PRIVATE_PersistentStream {
  constructor(e5, t4, n5, r7, i5, s3, o5, _2) {
    (this.ui = e5),
      (this.Ho = n5),
      (this.Jo = r7),
      (this.connection = i5),
      (this.authCredentialsProvider = s3),
      (this.appCheckCredentialsProvider = o5),
      (this.listener = _2),
      (this.state = 0),
      (this.Yo = 0),
      (this.Zo = null),
      (this.Xo = null),
      (this.stream = null),
      (this.e_ = 0),
      (this.t_ = new __PRIVATE_ExponentialBackoff(e5, t4));
  }
  n_() {
    return this.state === 1 || this.state === 5 || this.r_();
  }
  r_() {
    return this.state === 2 || this.state === 3;
  }
  start() {
    (this.e_ = 0), this.state !== 4 ? this.auth() : this.i_();
  }
  async stop() {
    this.n_() && (await this.close(0));
  }
  s_() {
    (this.state = 0), this.t_.reset();
  }
  o_() {
    this.r_() &&
      this.Zo === null &&
      (this.Zo = this.ui.enqueueAfterDelay(this.Ho, 60000, () => this.__()));
  }
  a_(e5) {
    this.u_(), this.stream.send(e5);
  }
  async __() {
    if (this.r_()) return this.close(0);
  }
  u_() {
    this.Zo && (this.Zo.cancel(), (this.Zo = null));
  }
  c_() {
    this.Xo && (this.Xo.cancel(), (this.Xo = null));
  }
  async close(e5, t4) {
    this.u_(),
      this.c_(),
      this.t_.cancel(),
      this.Yo++,
      e5 !== 4
        ? this.t_.reset()
        : t4 && t4.code === D.RESOURCE_EXHAUSTED
        ? (__PRIVATE_logError(t4.toString()),
          __PRIVATE_logError(
            "Using maximum backoff delay to prevent overloading the backend."
          ),
          this.t_.Wo())
        : t4 &&
          t4.code === D.UNAUTHENTICATED &&
          this.state !== 3 &&
          (this.authCredentialsProvider.invalidateToken(),
          this.appCheckCredentialsProvider.invalidateToken()),
      this.stream !== null &&
        (this.l_(), this.stream.close(), (this.stream = null)),
      (this.state = e5),
      await this.listener.mo(t4);
  }
  l_() {}
  auth() {
    this.state = 1;
    const e5 = this.h_(this.Yo),
      t4 = this.Yo;
    Promise.all([
      this.authCredentialsProvider.getToken(),
      this.appCheckCredentialsProvider.getToken(),
    ]).then(
      ([e6, n5]) => {
        this.Yo === t4 && this.P_(e6, n5);
      },
      (t5) => {
        e5(() => {
          const e6 = new FirestoreError(
            D.UNKNOWN,
            "Fetching auth token failed: " + t5.message
          );
          return this.I_(e6);
        });
      }
    );
  }
  P_(e5, t4) {
    const n5 = this.h_(this.Yo);
    (this.stream = this.T_(e5, t4)),
      this.stream.Eo(() => {
        n5(() => this.listener.Eo());
      }),
      this.stream.Ro(() => {
        n5(
          () => (
            (this.state = 2),
            (this.Xo = this.ui.enqueueAfterDelay(
              this.Jo,
              1e4,
              () => (this.r_() && (this.state = 3), Promise.resolve())
            )),
            this.listener.Ro()
          )
        );
      }),
      this.stream.mo((e6) => {
        n5(() => this.I_(e6));
      }),
      this.stream.onMessage((e6) => {
        n5(() => (++this.e_ == 1 ? this.E_(e6) : this.onNext(e6)));
      });
  }
  i_() {
    (this.state = 5),
      this.t_.Go(async () => {
        (this.state = 0), this.start();
      });
  }
  I_(e5) {
    return (
      __PRIVATE_logDebug("PersistentStream", `close with error: ${e5}`),
      (this.stream = null),
      this.close(4, e5)
    );
  }
  h_(e5) {
    return (t4) => {
      this.ui.enqueueAndForget(() =>
        this.Yo === e5
          ? t4()
          : (__PRIVATE_logDebug(
              "PersistentStream",
              "stream callback skipped by getCloseGuardedDispatcher."
            ),
            Promise.resolve())
      );
    };
  }
}

class __PRIVATE_PersistentListenStream extends __PRIVATE_PersistentStream {
  constructor(e5, t4, n5, r7, i5, s3) {
    super(
      e5,
      "listen_stream_connection_backoff",
      "listen_stream_idle",
      "health_check_timeout",
      t4,
      n5,
      r7,
      s3
    ),
      (this.serializer = i5);
  }
  T_(e5, t4) {
    return this.connection.Bo("Listen", e5, t4);
  }
  E_(e5) {
    return this.onNext(e5);
  }
  onNext(e5) {
    this.t_.reset();
    const t4 = __PRIVATE_fromWatchChange(this.serializer, e5),
      n5 = (function __PRIVATE_versionFromListenResponse(e6) {
        if (!("targetChange" in e6)) return SnapshotVersion.min();
        const t5 = e6.targetChange;
        return t5.targetIds && t5.targetIds.length
          ? SnapshotVersion.min()
          : t5.readTime
          ? __PRIVATE_fromVersion(t5.readTime)
          : SnapshotVersion.min();
      })(e5);
    return this.listener.d_(t4, n5);
  }
  A_(e5) {
    const t4 = {};
    (t4.database = __PRIVATE_getEncodedDatabaseId(this.serializer)),
      (t4.addTarget = (function __PRIVATE_toTarget(e6, t5) {
        let n6;
        const r7 = t5.target;
        if (
          ((n6 = __PRIVATE_targetIsDocumentTarget(r7)
            ? {
                documents: __PRIVATE_toDocumentsTarget(e6, r7),
              }
            : {
                query: __PRIVATE_toQueryTarget(e6, r7)._t,
              }),
          (n6.targetId = t5.targetId),
          t5.resumeToken.approximateByteSize() > 0)
        ) {
          n6.resumeToken = __PRIVATE_toBytes(e6, t5.resumeToken);
          const r8 = __PRIVATE_toInt32Proto(e6, t5.expectedCount);
          r8 !== null && (n6.expectedCount = r8);
        } else if (t5.snapshotVersion.compareTo(SnapshotVersion.min()) > 0) {
          n6.readTime = toTimestamp(e6, t5.snapshotVersion.toTimestamp());
          const r8 = __PRIVATE_toInt32Proto(e6, t5.expectedCount);
          r8 !== null && (n6.expectedCount = r8);
        }
        return n6;
      })(this.serializer, e5));
    const n5 = __PRIVATE_toListenRequestLabels(this.serializer, e5);
    n5 && (t4.labels = n5), this.a_(t4);
  }
  R_(e5) {
    const t4 = {};
    (t4.database = __PRIVATE_getEncodedDatabaseId(this.serializer)),
      (t4.removeTarget = e5),
      this.a_(t4);
  }
}
class __PRIVATE_DatastoreImpl extends class Datastore {} {
  constructor(e5, t4, n5, r7) {
    super(),
      (this.authCredentials = e5),
      (this.appCheckCredentials = t4),
      (this.connection = n5),
      (this.serializer = r7),
      (this.y_ = false);
  }
  w_() {
    if (this.y_)
      throw new FirestoreError(
        D.FAILED_PRECONDITION,
        "The client has already been terminated."
      );
  }
  Mo(e5, t4, n5, r7) {
    return (
      this.w_(),
      Promise.all([
        this.authCredentials.getToken(),
        this.appCheckCredentials.getToken(),
      ])
        .then(([i5, s3]) =>
          this.connection.Mo(e5, __PRIVATE_toResourcePath(t4, n5), r7, i5, s3)
        )
        .catch((e6) => {
          throw e6.name === "FirebaseError"
            ? (e6.code === D.UNAUTHENTICATED &&
                (this.authCredentials.invalidateToken(),
                this.appCheckCredentials.invalidateToken()),
              e6)
            : new FirestoreError(D.UNKNOWN, e6.toString());
        })
    );
  }
  Lo(e5, t4, n5, r7, i5) {
    return (
      this.w_(),
      Promise.all([
        this.authCredentials.getToken(),
        this.appCheckCredentials.getToken(),
      ])
        .then(([s3, o5]) =>
          this.connection.Lo(
            e5,
            __PRIVATE_toResourcePath(t4, n5),
            r7,
            s3,
            o5,
            i5
          )
        )
        .catch((e6) => {
          throw e6.name === "FirebaseError"
            ? (e6.code === D.UNAUTHENTICATED &&
                (this.authCredentials.invalidateToken(),
                this.appCheckCredentials.invalidateToken()),
              e6)
            : new FirestoreError(D.UNKNOWN, e6.toString());
        })
    );
  }
  terminate() {
    (this.y_ = true), this.connection.terminate();
  }
}

class __PRIVATE_OnlineStateTracker {
  constructor(e5, t4) {
    (this.asyncQueue = e5),
      (this.onlineStateHandler = t4),
      (this.state = "Unknown"),
      (this.S_ = 0),
      (this.b_ = null),
      (this.D_ = true);
  }
  v_() {
    this.S_ === 0 &&
      (this.C_("Unknown"),
      (this.b_ = this.asyncQueue.enqueueAfterDelay(
        "online_state_timeout",
        1e4,
        () => (
          (this.b_ = null),
          this.F_("Backend didn't respond within 10 seconds."),
          this.C_("Offline"),
          Promise.resolve()
        )
      )));
  }
  M_(e5) {
    this.state === "Online"
      ? this.C_("Unknown")
      : (this.S_++,
        this.S_ >= 1 &&
          (this.x_(),
          this.F_(
            `Connection failed 1 times. Most recent error: ${e5.toString()}`
          ),
          this.C_("Offline")));
  }
  set(e5) {
    this.x_(), (this.S_ = 0), e5 === "Online" && (this.D_ = false), this.C_(e5);
  }
  C_(e5) {
    e5 !== this.state && ((this.state = e5), this.onlineStateHandler(e5));
  }
  F_(e5) {
    const t4 = `Could not reach Cloud Firestore backend. ${e5}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
    this.D_
      ? (__PRIVATE_logError(t4), (this.D_ = false))
      : __PRIVATE_logDebug("OnlineStateTracker", t4);
  }
  x_() {
    this.b_ !== null && (this.b_.cancel(), (this.b_ = null));
  }
}

class __PRIVATE_RemoteStoreImpl {
  constructor(e5, t4, n5, r7, i5) {
    (this.localStore = e5),
      (this.datastore = t4),
      (this.asyncQueue = n5),
      (this.remoteSyncer = {}),
      (this.O_ = []),
      (this.N_ = new Map()),
      (this.L_ = new Set()),
      (this.B_ = []),
      (this.k_ = i5),
      this.k_._o((e6) => {
        n5.enqueueAndForget(async () => {
          __PRIVATE_canUseNetwork(this) &&
            (__PRIVATE_logDebug(
              "RemoteStore",
              "Restarting streams for network reachability change."
            ),
            await (async function __PRIVATE_restartNetwork(e7) {
              const t5 = __PRIVATE_debugCast(e7);
              t5.L_.add(4),
                await __PRIVATE_disableNetworkInternal(t5),
                t5.q_.set("Unknown"),
                t5.L_.delete(4),
                await __PRIVATE_enableNetworkInternal(t5);
            })(this));
        });
      }),
      (this.q_ = new __PRIVATE_OnlineStateTracker(n5, r7));
  }
}
async function __PRIVATE_enableNetworkInternal(e5) {
  if (__PRIVATE_canUseNetwork(e5)) for (const t4 of e5.B_) await t4(true);
}
async function __PRIVATE_disableNetworkInternal(e5) {
  for (const t4 of e5.B_) await t4(false);
}
function __PRIVATE_remoteStoreListen(e5, t4) {
  const n5 = __PRIVATE_debugCast(e5);
  n5.N_.has(t4.targetId) ||
    (n5.N_.set(t4.targetId, t4),
    __PRIVATE_shouldStartWatchStream(n5)
      ? __PRIVATE_startWatchStream(n5)
      : __PRIVATE_ensureWatchStream(n5).r_() &&
        __PRIVATE_sendWatchRequest(n5, t4));
}
function __PRIVATE_remoteStoreUnlisten(e5, t4) {
  const n5 = __PRIVATE_debugCast(e5),
    r7 = __PRIVATE_ensureWatchStream(n5);
  n5.N_.delete(t4),
    r7.r_() && __PRIVATE_sendUnwatchRequest(n5, t4),
    n5.N_.size === 0 &&
      (r7.r_() ? r7.o_() : __PRIVATE_canUseNetwork(n5) && n5.q_.set("Unknown"));
}
function __PRIVATE_sendWatchRequest(e5, t4) {
  if (
    (e5.Q_.xe(t4.targetId),
    t4.resumeToken.approximateByteSize() > 0 ||
      t4.snapshotVersion.compareTo(SnapshotVersion.min()) > 0)
  ) {
    const n5 = e5.remoteSyncer.getRemoteKeysForTarget(t4.targetId).size;
    t4 = t4.withExpectedCount(n5);
  }
  __PRIVATE_ensureWatchStream(e5).A_(t4);
}
function __PRIVATE_sendUnwatchRequest(e5, t4) {
  e5.Q_.xe(t4), __PRIVATE_ensureWatchStream(e5).R_(t4);
}
function __PRIVATE_startWatchStream(e5) {
  (e5.Q_ = new __PRIVATE_WatchChangeAggregator({
    getRemoteKeysForTarget: (t4) => e5.remoteSyncer.getRemoteKeysForTarget(t4),
    ot: (t4) => e5.N_.get(t4) || null,
    tt: () => e5.datastore.serializer.databaseId,
  })),
    __PRIVATE_ensureWatchStream(e5).start(),
    e5.q_.v_();
}
function __PRIVATE_shouldStartWatchStream(e5) {
  return (
    __PRIVATE_canUseNetwork(e5) &&
    !__PRIVATE_ensureWatchStream(e5).n_() &&
    e5.N_.size > 0
  );
}
function __PRIVATE_canUseNetwork(e5) {
  return __PRIVATE_debugCast(e5).L_.size === 0;
}
function __PRIVATE_cleanUpWatchStreamState(e5) {
  e5.Q_ = undefined;
}
async function __PRIVATE_onWatchStreamConnected(e5) {
  e5.q_.set("Online");
}
async function __PRIVATE_onWatchStreamOpen(e5) {
  e5.N_.forEach((t4, n5) => {
    __PRIVATE_sendWatchRequest(e5, t4);
  });
}
async function __PRIVATE_onWatchStreamClose(e5, t4) {
  __PRIVATE_cleanUpWatchStreamState(e5),
    __PRIVATE_shouldStartWatchStream(e5)
      ? (e5.q_.M_(t4), __PRIVATE_startWatchStream(e5))
      : e5.q_.set("Unknown");
}
async function __PRIVATE_onWatchStreamChange(e5, t4, n5) {
  if (
    (e5.q_.set("Online"),
    t4 instanceof __PRIVATE_WatchTargetChange && t4.state === 2 && t4.cause)
  )
    try {
      await (async function __PRIVATE_handleTargetError(e6, t5) {
        const n6 = t5.cause;
        for (const r7 of t5.targetIds)
          e6.N_.has(r7) &&
            (await e6.remoteSyncer.rejectListen(r7, n6),
            e6.N_.delete(r7),
            e6.Q_.removeTarget(r7));
      })(e5, t4);
    } catch (n6) {
      __PRIVATE_logDebug(
        "RemoteStore",
        "Failed to remove targets %s: %s ",
        t4.targetIds.join(","),
        n6
      ),
        await __PRIVATE_disableNetworkUntilRecovery(e5, n6);
    }
  else if (
    (t4 instanceof __PRIVATE_DocumentWatchChange
      ? e5.Q_.Ke(t4)
      : t4 instanceof __PRIVATE_ExistenceFilterChange
      ? e5.Q_.He(t4)
      : e5.Q_.We(t4),
    !n5.isEqual(SnapshotVersion.min()))
  )
    try {
      const t5 = await __PRIVATE_localStoreGetLastRemoteSnapshotVersion(
        e5.localStore
      );
      n5.compareTo(t5) >= 0 &&
        (await (function __PRIVATE_raiseWatchSnapshot(e6, t6) {
          const n6 = e6.Q_.rt(t6);
          return (
            n6.targetChanges.forEach((n7, r7) => {
              if (n7.resumeToken.approximateByteSize() > 0) {
                const i5 = e6.N_.get(r7);
                i5 && e6.N_.set(r7, i5.withResumeToken(n7.resumeToken, t6));
              }
            }),
            n6.targetMismatches.forEach((t7, n7) => {
              const r7 = e6.N_.get(t7);
              if (!r7) return;
              e6.N_.set(
                t7,
                r7.withResumeToken(
                  ByteString.EMPTY_BYTE_STRING,
                  r7.snapshotVersion
                )
              ),
                __PRIVATE_sendUnwatchRequest(e6, t7);
              const i5 = new TargetData(r7.target, t7, n7, r7.sequenceNumber);
              __PRIVATE_sendWatchRequest(e6, i5);
            }),
            e6.remoteSyncer.applyRemoteEvent(n6)
          );
        })(e5, n5));
    } catch (t5) {
      __PRIVATE_logDebug("RemoteStore", "Failed to raise snapshot:", t5),
        await __PRIVATE_disableNetworkUntilRecovery(e5, t5);
    }
}
async function __PRIVATE_disableNetworkUntilRecovery(e5, t4, n5) {
  if (!__PRIVATE_isIndexedDbTransactionError(t4)) throw t4;
  e5.L_.add(1),
    await __PRIVATE_disableNetworkInternal(e5),
    e5.q_.set("Offline"),
    n5 ||
      (n5 = () =>
        __PRIVATE_localStoreGetLastRemoteSnapshotVersion(e5.localStore)),
    e5.asyncQueue.enqueueRetryable(async () => {
      __PRIVATE_logDebug("RemoteStore", "Retrying IndexedDB access"),
        await n5(),
        e5.L_.delete(1),
        await __PRIVATE_enableNetworkInternal(e5);
    });
}
async function __PRIVATE_remoteStoreHandleCredentialChange(e5, t4) {
  const n5 = __PRIVATE_debugCast(e5);
  n5.asyncQueue.verifyOperationInProgress(),
    __PRIVATE_logDebug("RemoteStore", "RemoteStore received new credentials");
  const r7 = __PRIVATE_canUseNetwork(n5);
  n5.L_.add(3),
    await __PRIVATE_disableNetworkInternal(n5),
    r7 && n5.q_.set("Unknown"),
    await n5.remoteSyncer.handleCredentialChange(t4),
    n5.L_.delete(3),
    await __PRIVATE_enableNetworkInternal(n5);
}
async function __PRIVATE_remoteStoreApplyPrimaryState(e5, t4) {
  const n5 = __PRIVATE_debugCast(e5);
  t4
    ? (n5.L_.delete(2), await __PRIVATE_enableNetworkInternal(n5))
    : t4 ||
      (n5.L_.add(2),
      await __PRIVATE_disableNetworkInternal(n5),
      n5.q_.set("Unknown"));
}
function __PRIVATE_ensureWatchStream(e5) {
  return (
    e5.K_ ||
      ((e5.K_ = (function __PRIVATE_newPersistentWatchStream(e6, t4, n5) {
        const r7 = __PRIVATE_debugCast(e6);
        return (
          r7.w_(),
          new __PRIVATE_PersistentListenStream(
            t4,
            r7.connection,
            r7.authCredentials,
            r7.appCheckCredentials,
            r7.serializer,
            n5
          )
        );
      })(e5.datastore, e5.asyncQueue, {
        Eo: __PRIVATE_onWatchStreamConnected.bind(null, e5),
        Ro: __PRIVATE_onWatchStreamOpen.bind(null, e5),
        mo: __PRIVATE_onWatchStreamClose.bind(null, e5),
        d_: __PRIVATE_onWatchStreamChange.bind(null, e5),
      })),
      e5.B_.push(async (t4) => {
        t4
          ? (e5.K_.s_(),
            __PRIVATE_shouldStartWatchStream(e5)
              ? __PRIVATE_startWatchStream(e5)
              : e5.q_.set("Unknown"))
          : (await e5.K_.stop(), __PRIVATE_cleanUpWatchStreamState(e5));
      })),
    e5.K_
  );
}
class DelayedOperation {
  constructor(e5, t4, n5, r7, i5) {
    (this.asyncQueue = e5),
      (this.timerId = t4),
      (this.targetTimeMs = n5),
      (this.op = r7),
      (this.removalCallback = i5),
      (this.deferred = new __PRIVATE_Deferred()),
      (this.then = this.deferred.promise.then.bind(this.deferred.promise)),
      this.deferred.promise.catch((e6) => {});
  }
  get promise() {
    return this.deferred.promise;
  }
  static createAndSchedule(e5, t4, n5, r7, i5) {
    const s3 = Date.now() + n5,
      o5 = new DelayedOperation(e5, t4, s3, r7, i5);
    return o5.start(n5), o5;
  }
  start(e5) {
    this.timerHandle = setTimeout(() => this.handleDelayElapsed(), e5);
  }
  skipDelay() {
    return this.handleDelayElapsed();
  }
  cancel(e5) {
    this.timerHandle !== null &&
      (this.clearTimeout(),
      this.deferred.reject(
        new FirestoreError(
          D.CANCELLED,
          "Operation cancelled" + (e5 ? ": " + e5 : "")
        )
      ));
  }
  handleDelayElapsed() {
    this.asyncQueue.enqueueAndForget(() =>
      this.timerHandle !== null
        ? (this.clearTimeout(),
          this.op().then((e5) => this.deferred.resolve(e5)))
        : Promise.resolve()
    );
  }
  clearTimeout() {
    this.timerHandle !== null &&
      (this.removalCallback(this),
      clearTimeout(this.timerHandle),
      (this.timerHandle = null));
  }
}
function __PRIVATE_wrapInUserErrorIfRecoverable(e5, t4) {
  if (
    (__PRIVATE_logError("AsyncQueue", `${t4}: ${e5}`),
    __PRIVATE_isIndexedDbTransactionError(e5))
  )
    return new FirestoreError(D.UNAVAILABLE, `${t4}: ${e5}`);
  throw e5;
}

class DocumentSet {
  constructor(e5) {
    (this.comparator = e5
      ? (t4, n5) => e5(t4, n5) || DocumentKey.comparator(t4.key, n5.key)
      : (e6, t4) => DocumentKey.comparator(e6.key, t4.key)),
      (this.keyedMap = documentMap()),
      (this.sortedSet = new SortedMap(this.comparator));
  }
  static emptySet(e5) {
    return new DocumentSet(e5.comparator);
  }
  has(e5) {
    return this.keyedMap.get(e5) != null;
  }
  get(e5) {
    return this.keyedMap.get(e5);
  }
  first() {
    return this.sortedSet.minKey();
  }
  last() {
    return this.sortedSet.maxKey();
  }
  isEmpty() {
    return this.sortedSet.isEmpty();
  }
  indexOf(e5) {
    const t4 = this.keyedMap.get(e5);
    return t4 ? this.sortedSet.indexOf(t4) : -1;
  }
  get size() {
    return this.sortedSet.size;
  }
  forEach(e5) {
    this.sortedSet.inorderTraversal((t4, n5) => (e5(t4), false));
  }
  add(e5) {
    const t4 = this.delete(e5.key);
    return t4.copy(
      t4.keyedMap.insert(e5.key, e5),
      t4.sortedSet.insert(e5, null)
    );
  }
  delete(e5) {
    const t4 = this.get(e5);
    return t4
      ? this.copy(this.keyedMap.remove(e5), this.sortedSet.remove(t4))
      : this;
  }
  isEqual(e5) {
    if (!(e5 instanceof DocumentSet)) return false;
    if (this.size !== e5.size) return false;
    const t4 = this.sortedSet.getIterator(),
      n5 = e5.sortedSet.getIterator();
    for (; t4.hasNext(); ) {
      const e6 = t4.getNext().key,
        r7 = n5.getNext().key;
      if (!e6.isEqual(r7)) return false;
    }
    return true;
  }
  toString() {
    const e5 = [];
    return (
      this.forEach((t4) => {
        e5.push(t4.toString());
      }),
      e5.length === 0
        ? "DocumentSet ()"
        : `DocumentSet (
  ` +
          e5.join(`  
`) +
          `
)`
    );
  }
  copy(e5, t4) {
    const n5 = new DocumentSet();
    return (
      (n5.comparator = this.comparator),
      (n5.keyedMap = e5),
      (n5.sortedSet = t4),
      n5
    );
  }
}

class __PRIVATE_DocumentChangeSet {
  constructor() {
    this.W_ = new SortedMap(DocumentKey.comparator);
  }
  track(e5) {
    const t4 = e5.doc.key,
      n5 = this.W_.get(t4);
    n5
      ? e5.type !== 0 && n5.type === 3
        ? (this.W_ = this.W_.insert(t4, e5))
        : e5.type === 3 && n5.type !== 1
        ? (this.W_ = this.W_.insert(t4, {
            type: n5.type,
            doc: e5.doc,
          }))
        : e5.type === 2 && n5.type === 2
        ? (this.W_ = this.W_.insert(t4, {
            type: 2,
            doc: e5.doc,
          }))
        : e5.type === 2 && n5.type === 0
        ? (this.W_ = this.W_.insert(t4, {
            type: 0,
            doc: e5.doc,
          }))
        : e5.type === 1 && n5.type === 0
        ? (this.W_ = this.W_.remove(t4))
        : e5.type === 1 && n5.type === 2
        ? (this.W_ = this.W_.insert(t4, {
            type: 1,
            doc: n5.doc,
          }))
        : e5.type === 0 && n5.type === 1
        ? (this.W_ = this.W_.insert(t4, {
            type: 2,
            doc: e5.doc,
          }))
        : fail()
      : (this.W_ = this.W_.insert(t4, e5));
  }
  G_() {
    const e5 = [];
    return (
      this.W_.inorderTraversal((t4, n5) => {
        e5.push(n5);
      }),
      e5
    );
  }
}

class ViewSnapshot {
  constructor(e5, t4, n5, r7, i5, s3, o5, _2, a3) {
    (this.query = e5),
      (this.docs = t4),
      (this.oldDocs = n5),
      (this.docChanges = r7),
      (this.mutatedKeys = i5),
      (this.fromCache = s3),
      (this.syncStateChanged = o5),
      (this.excludesMetadataChanges = _2),
      (this.hasCachedResults = a3);
  }
  static fromInitialDocuments(e5, t4, n5, r7, i5) {
    const s3 = [];
    return (
      t4.forEach((e6) => {
        s3.push({
          type: 0,
          doc: e6,
        });
      }),
      new ViewSnapshot(
        e5,
        t4,
        DocumentSet.emptySet(t4),
        s3,
        n5,
        r7,
        true,
        false,
        i5
      )
    );
  }
  get hasPendingWrites() {
    return !this.mutatedKeys.isEmpty();
  }
  isEqual(e5) {
    if (
      !(
        this.fromCache === e5.fromCache &&
        this.hasCachedResults === e5.hasCachedResults &&
        this.syncStateChanged === e5.syncStateChanged &&
        this.mutatedKeys.isEqual(e5.mutatedKeys) &&
        __PRIVATE_queryEquals(this.query, e5.query) &&
        this.docs.isEqual(e5.docs) &&
        this.oldDocs.isEqual(e5.oldDocs)
      )
    )
      return false;
    const t4 = this.docChanges,
      n5 = e5.docChanges;
    if (t4.length !== n5.length) return false;
    for (let e6 = 0; e6 < t4.length; e6++)
      if (t4[e6].type !== n5[e6].type || !t4[e6].doc.isEqual(n5[e6].doc))
        return false;
    return true;
  }
}

class __PRIVATE_QueryListenersInfo {
  constructor() {
    (this.z_ = undefined), (this.j_ = []);
  }
  H_() {
    return this.j_.some((e5) => e5.J_());
  }
}

class __PRIVATE_EventManagerImpl {
  constructor() {
    (this.queries = __PRIVATE_newQueriesObjectMap()),
      (this.onlineState = "Unknown"),
      (this.Y_ = new Set());
  }
  terminate() {
    (function __PRIVATE_errorAllTargets(e5, t4) {
      const n5 = __PRIVATE_debugCast(e5),
        r7 = n5.queries;
      (n5.queries = __PRIVATE_newQueriesObjectMap()),
        r7.forEach((e6, n6) => {
          for (const e7 of n6.j_) e7.onError(t4);
        });
    })(this, new FirestoreError(D.ABORTED, "Firestore shutting down"));
  }
}
function __PRIVATE_newQueriesObjectMap() {
  return new ObjectMap(
    (e5) => __PRIVATE_canonifyQuery(e5),
    __PRIVATE_queryEquals
  );
}
async function __PRIVATE_eventManagerListen(e5, t4) {
  const n5 = __PRIVATE_debugCast(e5);
  let r7 = 3;
  const i5 = t4.query;
  let s3 = n5.queries.get(i5);
  s3
    ? !s3.H_() && t4.J_() && (r7 = 2)
    : ((s3 = new __PRIVATE_QueryListenersInfo()), (r7 = t4.J_() ? 0 : 1));
  try {
    switch (r7) {
      case 0:
        s3.z_ = await n5.onListen(i5, true);
        break;
      case 1:
        s3.z_ = await n5.onListen(i5, false);
        break;
      case 2:
        await n5.onFirstRemoteStoreListen(i5);
    }
  } catch (e6) {
    const n6 = __PRIVATE_wrapInUserErrorIfRecoverable(
      e6,
      `Initialization of query '${__PRIVATE_stringifyQuery(t4.query)}' failed`
    );
    return void t4.onError(n6);
  }
  if ((n5.queries.set(i5, s3), s3.j_.push(t4), t4.Z_(n5.onlineState), s3.z_)) {
    t4.X_(s3.z_) && __PRIVATE_raiseSnapshotsInSyncEvent(n5);
  }
}
async function __PRIVATE_eventManagerUnlisten(e5, t4) {
  const n5 = __PRIVATE_debugCast(e5),
    r7 = t4.query;
  let i5 = 3;
  const s3 = n5.queries.get(r7);
  if (s3) {
    const e6 = s3.j_.indexOf(t4);
    e6 >= 0 &&
      (s3.j_.splice(e6, 1),
      s3.j_.length === 0
        ? (i5 = t4.J_() ? 0 : 1)
        : !s3.H_() && t4.J_() && (i5 = 2));
  }
  switch (i5) {
    case 0:
      return n5.queries.delete(r7), n5.onUnlisten(r7, true);
    case 1:
      return n5.queries.delete(r7), n5.onUnlisten(r7, false);
    case 2:
      return n5.onLastRemoteStoreUnlisten(r7);
    default:
      return;
  }
}
function __PRIVATE_eventManagerOnWatchChange(e5, t4) {
  const n5 = __PRIVATE_debugCast(e5);
  let r7 = false;
  for (const e6 of t4) {
    const t5 = e6.query,
      i5 = n5.queries.get(t5);
    if (i5) {
      for (const t6 of i5.j_) t6.X_(e6) && (r7 = true);
      i5.z_ = e6;
    }
  }
  r7 && __PRIVATE_raiseSnapshotsInSyncEvent(n5);
}
function __PRIVATE_eventManagerOnWatchError(e5, t4, n5) {
  const r7 = __PRIVATE_debugCast(e5),
    i5 = r7.queries.get(t4);
  if (i5) for (const e6 of i5.j_) e6.onError(n5);
  r7.queries.delete(t4);
}
function __PRIVATE_raiseSnapshotsInSyncEvent(e5) {
  e5.Y_.forEach((e6) => {
    e6.next();
  });
}
var pe;
var ye;
((ye = pe || (pe = {})).ea = "default"), (ye.Cache = "cache");

class __PRIVATE_QueryListener {
  constructor(e5, t4, n5) {
    (this.query = e5),
      (this.ta = t4),
      (this.na = false),
      (this.ra = null),
      (this.onlineState = "Unknown"),
      (this.options = n5 || {});
  }
  X_(e5) {
    if (!this.options.includeMetadataChanges) {
      const t5 = [];
      for (const n5 of e5.docChanges) n5.type !== 3 && t5.push(n5);
      e5 = new ViewSnapshot(
        e5.query,
        e5.docs,
        e5.oldDocs,
        t5,
        e5.mutatedKeys,
        e5.fromCache,
        e5.syncStateChanged,
        true,
        e5.hasCachedResults
      );
    }
    let t4 = false;
    return (
      this.na
        ? this.ia(e5) && (this.ta.next(e5), (t4 = true))
        : this.sa(e5, this.onlineState) && (this.oa(e5), (t4 = true)),
      (this.ra = e5),
      t4
    );
  }
  onError(e5) {
    this.ta.error(e5);
  }
  Z_(e5) {
    this.onlineState = e5;
    let t4 = false;
    return (
      this.ra &&
        !this.na &&
        this.sa(this.ra, e5) &&
        (this.oa(this.ra), (t4 = true)),
      t4
    );
  }
  sa(e5, t4) {
    if (!e5.fromCache) return true;
    if (!this.J_()) return true;
    const n5 = t4 !== "Offline";
    return (
      (!this.options._a || !n5) &&
      (!e5.docs.isEmpty() || e5.hasCachedResults || t4 === "Offline")
    );
  }
  ia(e5) {
    if (e5.docChanges.length > 0) return true;
    const t4 = this.ra && this.ra.hasPendingWrites !== e5.hasPendingWrites;
    return (
      !(!e5.syncStateChanged && !t4) &&
      this.options.includeMetadataChanges === true
    );
  }
  oa(e5) {
    (e5 = ViewSnapshot.fromInitialDocuments(
      e5.query,
      e5.docs,
      e5.mutatedKeys,
      e5.fromCache,
      e5.hasCachedResults
    )),
      (this.na = true),
      this.ta.next(e5);
  }
  J_() {
    return this.options.source !== pe.Cache;
  }
}
class __PRIVATE_AddedLimboDocument {
  constructor(e5) {
    this.key = e5;
  }
}

class __PRIVATE_RemovedLimboDocument {
  constructor(e5) {
    this.key = e5;
  }
}

class __PRIVATE_View {
  constructor(e5, t4) {
    (this.query = e5),
      (this.Ta = t4),
      (this.Ea = null),
      (this.hasCachedResults = false),
      (this.current = false),
      (this.da = __PRIVATE_documentKeySet()),
      (this.mutatedKeys = __PRIVATE_documentKeySet()),
      (this.Aa = __PRIVATE_newQueryComparator(e5)),
      (this.Ra = new DocumentSet(this.Aa));
  }
  get Va() {
    return this.Ta;
  }
  ma(e5, t4) {
    const n5 = t4 ? t4.fa : new __PRIVATE_DocumentChangeSet(),
      r7 = t4 ? t4.Ra : this.Ra;
    let i5 = t4 ? t4.mutatedKeys : this.mutatedKeys,
      s3 = r7,
      o5 = false;
    const _2 =
        this.query.limitType === "F" && r7.size === this.query.limit
          ? r7.last()
          : null,
      a3 =
        this.query.limitType === "L" && r7.size === this.query.limit
          ? r7.first()
          : null;
    if (
      (e5.inorderTraversal((e6, t5) => {
        const u3 = r7.get(e6),
          c4 = __PRIVATE_queryMatches(this.query, t5) ? t5 : null,
          l3 = !!u3 && this.mutatedKeys.has(u3.key),
          h3 =
            !!c4 &&
            (c4.hasLocalMutations ||
              (this.mutatedKeys.has(c4.key) && c4.hasCommittedMutations));
        let P2 = false;
        if (u3 && c4) {
          u3.data.isEqual(c4.data)
            ? l3 !== h3 &&
              (n5.track({
                type: 3,
                doc: c4,
              }),
              (P2 = true))
            : this.ga(u3, c4) ||
              (n5.track({
                type: 2,
                doc: c4,
              }),
              (P2 = true),
              ((_2 && this.Aa(c4, _2) > 0) || (a3 && this.Aa(c4, a3) < 0)) &&
                (o5 = true));
        } else
          !u3 && c4
            ? (n5.track({
                type: 0,
                doc: c4,
              }),
              (P2 = true))
            : u3 &&
              !c4 &&
              (n5.track({
                type: 1,
                doc: u3,
              }),
              (P2 = true),
              (_2 || a3) && (o5 = true));
        P2 &&
          (c4
            ? ((s3 = s3.add(c4)), (i5 = h3 ? i5.add(e6) : i5.delete(e6)))
            : ((s3 = s3.delete(e6)), (i5 = i5.delete(e6))));
      }),
      this.query.limit !== null)
    )
      for (; s3.size > this.query.limit; ) {
        const e6 = this.query.limitType === "F" ? s3.last() : s3.first();
        (s3 = s3.delete(e6.key)),
          (i5 = i5.delete(e6.key)),
          n5.track({
            type: 1,
            doc: e6,
          });
      }
    return {
      Ra: s3,
      fa: n5,
      ns: o5,
      mutatedKeys: i5,
    };
  }
  ga(e5, t4) {
    return (
      e5.hasLocalMutations && t4.hasCommittedMutations && !t4.hasLocalMutations
    );
  }
  applyChanges(e5, t4, n5, r7) {
    const i5 = this.Ra;
    (this.Ra = e5.Ra), (this.mutatedKeys = e5.mutatedKeys);
    const s3 = e5.fa.G_();
    s3.sort(
      (e6, t5) =>
        (function __PRIVATE_compareChangeType(e7, t6) {
          const order = (e8) => {
            switch (e8) {
              case 0:
                return 1;
              case 2:
              case 3:
                return 2;
              case 1:
                return 0;
              default:
                return fail();
            }
          };
          return order(e7) - order(t6);
        })(e6.type, t5.type) || this.Aa(e6.doc, t5.doc)
    ),
      this.pa(n5),
      (r7 = r7 != null && r7);
    const o5 = t4 && !r7 ? this.ya() : [],
      _2 = this.da.size === 0 && this.current && !r7 ? 1 : 0,
      a3 = _2 !== this.Ea;
    if (((this.Ea = _2), s3.length !== 0 || a3)) {
      return {
        snapshot: new ViewSnapshot(
          this.query,
          e5.Ra,
          i5,
          s3,
          e5.mutatedKeys,
          _2 === 0,
          a3,
          false,
          !!n5 && n5.resumeToken.approximateByteSize() > 0
        ),
        wa: o5,
      };
    }
    return {
      wa: o5,
    };
  }
  Z_(e5) {
    return this.current && e5 === "Offline"
      ? ((this.current = false),
        this.applyChanges(
          {
            Ra: this.Ra,
            fa: new __PRIVATE_DocumentChangeSet(),
            mutatedKeys: this.mutatedKeys,
            ns: false,
          },
          false
        ))
      : {
          wa: [],
        };
  }
  Sa(e5) {
    return (
      !this.Ta.has(e5) &&
      !!this.Ra.has(e5) &&
      !this.Ra.get(e5).hasLocalMutations
    );
  }
  pa(e5) {
    e5 &&
      (e5.addedDocuments.forEach((e6) => (this.Ta = this.Ta.add(e6))),
      e5.modifiedDocuments.forEach((e6) => {}),
      e5.removedDocuments.forEach((e6) => (this.Ta = this.Ta.delete(e6))),
      (this.current = e5.current));
  }
  ya() {
    if (!this.current) return [];
    const e5 = this.da;
    (this.da = __PRIVATE_documentKeySet()),
      this.Ra.forEach((e6) => {
        this.Sa(e6.key) && (this.da = this.da.add(e6.key));
      });
    const t4 = [];
    return (
      e5.forEach((e6) => {
        this.da.has(e6) || t4.push(new __PRIVATE_RemovedLimboDocument(e6));
      }),
      this.da.forEach((n5) => {
        e5.has(n5) || t4.push(new __PRIVATE_AddedLimboDocument(n5));
      }),
      t4
    );
  }
  ba(e5) {
    (this.Ta = e5.Ts), (this.da = __PRIVATE_documentKeySet());
    const t4 = this.ma(e5.documents);
    return this.applyChanges(t4, true);
  }
  Da() {
    return ViewSnapshot.fromInitialDocuments(
      this.query,
      this.Ra,
      this.mutatedKeys,
      this.Ea === 0,
      this.hasCachedResults
    );
  }
}

class __PRIVATE_QueryView {
  constructor(e5, t4, n5) {
    (this.query = e5), (this.targetId = t4), (this.view = n5);
  }
}

class LimboResolution {
  constructor(e5) {
    (this.key = e5), (this.va = false);
  }
}

class __PRIVATE_SyncEngineImpl {
  constructor(e5, t4, n5, r7, i5, s3) {
    (this.localStore = e5),
      (this.remoteStore = t4),
      (this.eventManager = n5),
      (this.sharedClientState = r7),
      (this.currentUser = i5),
      (this.maxConcurrentLimboResolutions = s3),
      (this.Ca = {}),
      (this.Fa = new ObjectMap(
        (e6) => __PRIVATE_canonifyQuery(e6),
        __PRIVATE_queryEquals
      )),
      (this.Ma = new Map()),
      (this.xa = new Set()),
      (this.Oa = new SortedMap(DocumentKey.comparator)),
      (this.Na = new Map()),
      (this.La = new __PRIVATE_ReferenceSet()),
      (this.Ba = {}),
      (this.ka = new Map()),
      (this.qa = __PRIVATE_TargetIdGenerator.kn()),
      (this.onlineState = "Unknown"),
      (this.Qa = undefined);
  }
  get isPrimaryClient() {
    return this.Qa === true;
  }
}
async function __PRIVATE_syncEngineListen(e5, t4, n5 = true) {
  const r7 = __PRIVATE_ensureWatchCallbacks(e5);
  let i5;
  const s3 = r7.Fa.get(t4);
  return (
    s3
      ? (r7.sharedClientState.addLocalQueryTarget(s3.targetId),
        (i5 = s3.view.Da()))
      : (i5 = await __PRIVATE_allocateTargetAndMaybeListen(r7, t4, n5, true)),
    i5
  );
}
async function __PRIVATE_triggerRemoteStoreListen(e5, t4) {
  const n5 = __PRIVATE_ensureWatchCallbacks(e5);
  await __PRIVATE_allocateTargetAndMaybeListen(n5, t4, true, false);
}
async function __PRIVATE_allocateTargetAndMaybeListen(e5, t4, n5, r7) {
  const i5 = await __PRIVATE_localStoreAllocateTarget(
      e5.localStore,
      __PRIVATE_queryToTarget(t4)
    ),
    s3 = i5.targetId,
    o5 = e5.sharedClientState.addLocalQueryTarget(s3, n5);
  let _2;
  return (
    r7 &&
      (_2 = await __PRIVATE_initializeViewAndComputeSnapshot(
        e5,
        t4,
        s3,
        o5 === "current",
        i5.resumeToken
      )),
    e5.isPrimaryClient && n5 && __PRIVATE_remoteStoreListen(e5.remoteStore, i5),
    _2
  );
}
async function __PRIVATE_initializeViewAndComputeSnapshot(e5, t4, n5, r7, i5) {
  e5.Ka = (t5, n6, r8) =>
    (async function __PRIVATE_applyDocChanges(e6, t6, n7, r9) {
      let i6 = t6.view.ma(n7);
      i6.ns &&
        (i6 = await __PRIVATE_localStoreExecuteQuery(
          e6.localStore,
          t6.query,
          false
        ).then(({ documents: e7 }) => t6.view.ma(e7, i6)));
      const s4 = r9 && r9.targetChanges.get(t6.targetId),
        o6 = r9 && r9.targetMismatches.get(t6.targetId) != null,
        _3 = t6.view.applyChanges(i6, e6.isPrimaryClient, s4, o6);
      return __PRIVATE_updateTrackedLimbos(e6, t6.targetId, _3.wa), _3.snapshot;
    })(e5, t5, n6, r8);
  const s3 = await __PRIVATE_localStoreExecuteQuery(e5.localStore, t4, true),
    o5 = new __PRIVATE_View(t4, s3.Ts),
    _2 = o5.ma(s3.documents),
    a3 = TargetChange.createSynthesizedTargetChangeForCurrentChange(
      n5,
      r7 && e5.onlineState !== "Offline",
      i5
    ),
    u3 = o5.applyChanges(_2, e5.isPrimaryClient, a3);
  __PRIVATE_updateTrackedLimbos(e5, n5, u3.wa);
  const c4 = new __PRIVATE_QueryView(t4, n5, o5);
  return (
    e5.Fa.set(t4, c4),
    e5.Ma.has(n5) ? e5.Ma.get(n5).push(t4) : e5.Ma.set(n5, [t4]),
    u3.snapshot
  );
}
async function __PRIVATE_syncEngineUnlisten(e5, t4, n5) {
  const r7 = __PRIVATE_debugCast(e5),
    i5 = r7.Fa.get(t4),
    s3 = r7.Ma.get(i5.targetId);
  if (s3.length > 1)
    return (
      r7.Ma.set(
        i5.targetId,
        s3.filter((e6) => !__PRIVATE_queryEquals(e6, t4))
      ),
      void r7.Fa.delete(t4)
    );
  if (r7.isPrimaryClient) {
    r7.sharedClientState.removeLocalQueryTarget(i5.targetId);
    r7.sharedClientState.isActiveQueryTarget(i5.targetId) ||
      (await __PRIVATE_localStoreReleaseTarget(
        r7.localStore,
        i5.targetId,
        false
      )
        .then(() => {
          r7.sharedClientState.clearQueryState(i5.targetId),
            n5 && __PRIVATE_remoteStoreUnlisten(r7.remoteStore, i5.targetId),
            __PRIVATE_removeAndCleanupTarget(r7, i5.targetId);
        })
        .catch(__PRIVATE_ignoreIfPrimaryLeaseLoss));
  } else
    __PRIVATE_removeAndCleanupTarget(r7, i5.targetId),
      await __PRIVATE_localStoreReleaseTarget(r7.localStore, i5.targetId, true);
}
async function __PRIVATE_triggerRemoteStoreUnlisten(e5, t4) {
  const n5 = __PRIVATE_debugCast(e5),
    r7 = n5.Fa.get(t4),
    i5 = n5.Ma.get(r7.targetId);
  n5.isPrimaryClient &&
    i5.length === 1 &&
    (n5.sharedClientState.removeLocalQueryTarget(r7.targetId),
    __PRIVATE_remoteStoreUnlisten(n5.remoteStore, r7.targetId));
}
async function __PRIVATE_syncEngineApplyRemoteEvent(e5, t4) {
  const n5 = __PRIVATE_debugCast(e5);
  try {
    const e6 = await __PRIVATE_localStoreApplyRemoteEventToLocalCache(
      n5.localStore,
      t4
    );
    t4.targetChanges.forEach((e7, t5) => {
      const r7 = n5.Na.get(t5);
      r7 &&
        (__PRIVATE_hardAssert(
          e7.addedDocuments.size +
            e7.modifiedDocuments.size +
            e7.removedDocuments.size <=
            1
        ),
        e7.addedDocuments.size > 0
          ? (r7.va = true)
          : e7.modifiedDocuments.size > 0
          ? __PRIVATE_hardAssert(r7.va)
          : e7.removedDocuments.size > 0 &&
            (__PRIVATE_hardAssert(r7.va), (r7.va = false)));
    }),
      await __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(n5, e6, t4);
  } catch (e6) {
    await __PRIVATE_ignoreIfPrimaryLeaseLoss(e6);
  }
}
function __PRIVATE_syncEngineApplyOnlineStateChange(e5, t4, n5) {
  const r7 = __PRIVATE_debugCast(e5);
  if ((r7.isPrimaryClient && n5 === 0) || (!r7.isPrimaryClient && n5 === 1)) {
    const e6 = [];
    r7.Fa.forEach((n6, r8) => {
      const i5 = r8.view.Z_(t4);
      i5.snapshot && e6.push(i5.snapshot);
    }),
      (function __PRIVATE_eventManagerOnOnlineStateChange(e7, t5) {
        const n6 = __PRIVATE_debugCast(e7);
        n6.onlineState = t5;
        let r8 = false;
        n6.queries.forEach((e8, n7) => {
          for (const e9 of n7.j_) e9.Z_(t5) && (r8 = true);
        }),
          r8 && __PRIVATE_raiseSnapshotsInSyncEvent(n6);
      })(r7.eventManager, t4),
      e6.length && r7.Ca.d_(e6),
      (r7.onlineState = t4),
      r7.isPrimaryClient && r7.sharedClientState.setOnlineState(t4);
  }
}
async function __PRIVATE_syncEngineRejectListen(e5, t4, n5) {
  const r7 = __PRIVATE_debugCast(e5);
  r7.sharedClientState.updateQueryState(t4, "rejected", n5);
  const i5 = r7.Na.get(t4),
    s3 = i5 && i5.key;
  if (s3) {
    let e6 = new SortedMap(DocumentKey.comparator);
    e6 = e6.insert(
      s3,
      MutableDocument.newNoDocument(s3, SnapshotVersion.min())
    );
    const n6 = __PRIVATE_documentKeySet().add(s3),
      i6 = new RemoteEvent(
        SnapshotVersion.min(),
        new Map(),
        new SortedMap(__PRIVATE_primitiveComparator),
        e6,
        n6
      );
    await __PRIVATE_syncEngineApplyRemoteEvent(r7, i6),
      (r7.Oa = r7.Oa.remove(s3)),
      r7.Na.delete(t4),
      __PRIVATE_pumpEnqueuedLimboResolutions(r7);
  } else
    await __PRIVATE_localStoreReleaseTarget(r7.localStore, t4, false)
      .then(() => __PRIVATE_removeAndCleanupTarget(r7, t4, n5))
      .catch(__PRIVATE_ignoreIfPrimaryLeaseLoss);
}
function __PRIVATE_removeAndCleanupTarget(e5, t4, n5 = null) {
  e5.sharedClientState.removeLocalQueryTarget(t4);
  for (const r7 of e5.Ma.get(t4)) e5.Fa.delete(r7), n5 && e5.Ca.$a(r7, n5);
  if ((e5.Ma.delete(t4), e5.isPrimaryClient)) {
    e5.La.gr(t4).forEach((t5) => {
      e5.La.containsKey(t5) || __PRIVATE_removeLimboTarget(e5, t5);
    });
  }
}
function __PRIVATE_removeLimboTarget(e5, t4) {
  e5.xa.delete(t4.path.canonicalString());
  const n5 = e5.Oa.get(t4);
  n5 !== null &&
    (__PRIVATE_remoteStoreUnlisten(e5.remoteStore, n5),
    (e5.Oa = e5.Oa.remove(t4)),
    e5.Na.delete(n5),
    __PRIVATE_pumpEnqueuedLimboResolutions(e5));
}
function __PRIVATE_updateTrackedLimbos(e5, t4, n5) {
  for (const r7 of n5)
    if (r7 instanceof __PRIVATE_AddedLimboDocument)
      e5.La.addReference(r7.key, t4), __PRIVATE_trackLimboChange(e5, r7);
    else if (r7 instanceof __PRIVATE_RemovedLimboDocument) {
      __PRIVATE_logDebug(
        "SyncEngine",
        "Document no longer in limbo: " + r7.key
      ),
        e5.La.removeReference(r7.key, t4);
      e5.La.containsKey(r7.key) || __PRIVATE_removeLimboTarget(e5, r7.key);
    } else fail();
}
function __PRIVATE_trackLimboChange(e5, t4) {
  const n5 = t4.key,
    r7 = n5.path.canonicalString();
  e5.Oa.get(n5) ||
    e5.xa.has(r7) ||
    (__PRIVATE_logDebug("SyncEngine", "New document in limbo: " + n5),
    e5.xa.add(r7),
    __PRIVATE_pumpEnqueuedLimboResolutions(e5));
}
function __PRIVATE_pumpEnqueuedLimboResolutions(e5) {
  for (; e5.xa.size > 0 && e5.Oa.size < e5.maxConcurrentLimboResolutions; ) {
    const t4 = e5.xa.values().next().value;
    e5.xa.delete(t4);
    const n5 = new DocumentKey(ResourcePath.fromString(t4)),
      r7 = e5.qa.next();
    e5.Na.set(r7, new LimboResolution(n5)),
      (e5.Oa = e5.Oa.insert(n5, r7)),
      __PRIVATE_remoteStoreListen(
        e5.remoteStore,
        new TargetData(
          __PRIVATE_queryToTarget(__PRIVATE_newQueryForPath(n5.path)),
          r7,
          "TargetPurposeLimboResolution",
          __PRIVATE_ListenSequence.oe
        )
      );
  }
}
async function __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(e5, t4, n5) {
  const r7 = __PRIVATE_debugCast(e5),
    i5 = [],
    s3 = [],
    o5 = [];
  r7.Fa.isEmpty() ||
    (r7.Fa.forEach((e6, _2) => {
      o5.push(
        r7.Ka(_2, t4, n5).then((e7) => {
          var t5;
          if ((e7 || n5) && r7.isPrimaryClient) {
            const i6 = e7
              ? !e7.fromCache
              : (t5 =
                  n5 == null
                    ? undefined
                    : n5.targetChanges.get(_2.targetId)) === null ||
                t5 === undefined
              ? undefined
              : t5.current;
            r7.sharedClientState.updateQueryState(
              _2.targetId,
              i6 ? "current" : "not-current"
            );
          }
          if (e7) {
            i5.push(e7);
            const t6 = __PRIVATE_LocalViewChanges.Wi(_2.targetId, e7);
            s3.push(t6);
          }
        })
      );
    }),
    await Promise.all(o5),
    r7.Ca.d_(i5),
    await (async function __PRIVATE_localStoreNotifyLocalViewChanges(e6, t5) {
      const n6 = __PRIVATE_debugCast(e6);
      try {
        await n6.persistence.runTransaction(
          "notifyLocalViewChanges",
          "readwrite",
          (e7) =>
            PersistencePromise.forEach(t5, (t6) =>
              PersistencePromise.forEach(t6.$i, (r8) =>
                n6.persistence.referenceDelegate.addReference(
                  e7,
                  t6.targetId,
                  r8
                )
              ).next(() =>
                PersistencePromise.forEach(t6.Ui, (r8) =>
                  n6.persistence.referenceDelegate.removeReference(
                    e7,
                    t6.targetId,
                    r8
                  )
                )
              )
            )
        );
      } catch (e7) {
        if (!__PRIVATE_isIndexedDbTransactionError(e7)) throw e7;
        __PRIVATE_logDebug(
          "LocalStore",
          "Failed to update sequence numbers: " + e7
        );
      }
      for (const e7 of t5) {
        const t6 = e7.targetId;
        if (!e7.fromCache) {
          const e8 = n6.os.get(t6),
            r8 = e8.snapshotVersion,
            i6 = e8.withLastLimboFreeSnapshotVersion(r8);
          n6.os = n6.os.insert(t6, i6);
        }
      }
    })(r7.localStore, s3));
}
async function __PRIVATE_syncEngineHandleCredentialChange(e5, t4) {
  const n5 = __PRIVATE_debugCast(e5);
  if (!n5.currentUser.isEqual(t4)) {
    __PRIVATE_logDebug("SyncEngine", "User change. New user:", t4.toKey());
    const e6 = await __PRIVATE_localStoreHandleUserChange(n5.localStore, t4);
    (n5.currentUser = t4),
      (function __PRIVATE_rejectOutstandingPendingWritesCallbacks(e7, t5) {
        e7.ka.forEach((e8) => {
          e8.forEach((e9) => {
            e9.reject(new FirestoreError(D.CANCELLED, t5));
          });
        }),
          e7.ka.clear();
      })(
        n5,
        "'waitForPendingWrites' promise is rejected due to a user change."
      ),
      n5.sharedClientState.handleUserChange(
        t4,
        e6.removedBatchIds,
        e6.addedBatchIds
      ),
      await __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(n5, e6.hs);
  }
}
function __PRIVATE_syncEngineGetRemoteKeysForTarget(e5, t4) {
  const n5 = __PRIVATE_debugCast(e5),
    r7 = n5.Na.get(t4);
  if (r7 && r7.va) return __PRIVATE_documentKeySet().add(r7.key);
  {
    let e6 = __PRIVATE_documentKeySet();
    const r8 = n5.Ma.get(t4);
    if (!r8) return e6;
    for (const t5 of r8) {
      const r9 = n5.Fa.get(t5);
      e6 = e6.unionWith(r9.view.Va);
    }
    return e6;
  }
}
function __PRIVATE_ensureWatchCallbacks(e5) {
  const t4 = __PRIVATE_debugCast(e5);
  return (
    (t4.remoteStore.remoteSyncer.applyRemoteEvent =
      __PRIVATE_syncEngineApplyRemoteEvent.bind(null, t4)),
    (t4.remoteStore.remoteSyncer.getRemoteKeysForTarget =
      __PRIVATE_syncEngineGetRemoteKeysForTarget.bind(null, t4)),
    (t4.remoteStore.remoteSyncer.rejectListen =
      __PRIVATE_syncEngineRejectListen.bind(null, t4)),
    (t4.Ca.d_ = __PRIVATE_eventManagerOnWatchChange.bind(
      null,
      t4.eventManager
    )),
    (t4.Ca.$a = __PRIVATE_eventManagerOnWatchError.bind(null, t4.eventManager)),
    t4
  );
}
class __PRIVATE_MemoryOfflineComponentProvider {
  constructor() {
    (this.kind = "memory"), (this.synchronizeTabs = false);
  }
  async initialize(e5) {
    (this.serializer = __PRIVATE_newSerializer(e5.databaseInfo.databaseId)),
      (this.sharedClientState = this.Wa(e5)),
      (this.persistence = this.Ga(e5)),
      await this.persistence.start(),
      (this.localStore = this.za(e5)),
      (this.gcScheduler = this.ja(e5, this.localStore)),
      (this.indexBackfillerScheduler = this.Ha(e5, this.localStore));
  }
  ja(e5, t4) {
    return null;
  }
  Ha(e5, t4) {
    return null;
  }
  za(e5) {
    return __PRIVATE_newLocalStore(
      this.persistence,
      new __PRIVATE_QueryEngine(),
      e5.initialUser,
      this.serializer
    );
  }
  Ga(e5) {
    return new __PRIVATE_MemoryPersistence(
      __PRIVATE_MemoryEagerDelegate.Zr,
      this.serializer
    );
  }
  Wa(e5) {
    return new __PRIVATE_MemorySharedClientState();
  }
  async terminate() {
    var e5, t4;
    (e5 = this.gcScheduler) === null || e5 === undefined || e5.stop(),
      (t4 = this.indexBackfillerScheduler) === null ||
        t4 === undefined ||
        t4.stop(),
      this.sharedClientState.shutdown(),
      await this.persistence.shutdown();
  }
}
__PRIVATE_MemoryOfflineComponentProvider.provider = {
  build: () => new __PRIVATE_MemoryOfflineComponentProvider(),
};

class __PRIVATE_LruGcMemoryOfflineComponentProvider extends __PRIVATE_MemoryOfflineComponentProvider {
  constructor(e5) {
    super(), (this.cacheSizeBytes = e5);
  }
  ja(e5, t4) {
    __PRIVATE_hardAssert(
      this.persistence.referenceDelegate instanceof __PRIVATE_MemoryLruDelegate
    );
    const n5 = this.persistence.referenceDelegate.garbageCollector;
    return new __PRIVATE_LruScheduler(n5, e5.asyncQueue, t4);
  }
  Ga(e5) {
    const t4 =
      this.cacheSizeBytes !== undefined
        ? LruParams.withCacheSize(this.cacheSizeBytes)
        : LruParams.DEFAULT;
    return new __PRIVATE_MemoryPersistence(
      (e6) => __PRIVATE_MemoryLruDelegate.Zr(e6, t4),
      this.serializer
    );
  }
}
class OnlineComponentProvider {
  async initialize(e5, t4) {
    this.localStore ||
      ((this.localStore = e5.localStore),
      (this.sharedClientState = e5.sharedClientState),
      (this.datastore = this.createDatastore(t4)),
      (this.remoteStore = this.createRemoteStore(t4)),
      (this.eventManager = this.createEventManager(t4)),
      (this.syncEngine = this.createSyncEngine(t4, !e5.synchronizeTabs)),
      (this.sharedClientState.onlineStateHandler = (e6) =>
        __PRIVATE_syncEngineApplyOnlineStateChange(this.syncEngine, e6, 1)),
      (this.remoteStore.remoteSyncer.handleCredentialChange =
        __PRIVATE_syncEngineHandleCredentialChange.bind(null, this.syncEngine)),
      await __PRIVATE_remoteStoreApplyPrimaryState(
        this.remoteStore,
        this.syncEngine.isPrimaryClient
      ));
  }
  createEventManager(e5) {
    return (function __PRIVATE_newEventManager() {
      return new __PRIVATE_EventManagerImpl();
    })();
  }
  createDatastore(e5) {
    const t4 = __PRIVATE_newSerializer(e5.databaseInfo.databaseId),
      n5 = (function __PRIVATE_newConnection(e6) {
        return new __PRIVATE_WebChannelConnection(e6);
      })(e5.databaseInfo);
    return (function __PRIVATE_newDatastore(e6, t5, n6, r7) {
      return new __PRIVATE_DatastoreImpl(e6, t5, n6, r7);
    })(e5.authCredentials, e5.appCheckCredentials, n5, t4);
  }
  createRemoteStore(e5) {
    return (function __PRIVATE_newRemoteStore(e6, t4, n5, r7, i5) {
      return new __PRIVATE_RemoteStoreImpl(e6, t4, n5, r7, i5);
    })(
      this.localStore,
      this.datastore,
      e5.asyncQueue,
      (e6) =>
        __PRIVATE_syncEngineApplyOnlineStateChange(this.syncEngine, e6, 0),
      (function __PRIVATE_newConnectivityMonitor() {
        return __PRIVATE_BrowserConnectivityMonitor.D()
          ? new __PRIVATE_BrowserConnectivityMonitor()
          : new __PRIVATE_NoopConnectivityMonitor();
      })()
    );
  }
  createSyncEngine(e5, t4) {
    return (function __PRIVATE_newSyncEngine(e6, t5, n5, r7, i5, s3, o5) {
      const _2 = new __PRIVATE_SyncEngineImpl(e6, t5, n5, r7, i5, s3);
      return o5 && (_2.Qa = true), _2;
    })(
      this.localStore,
      this.remoteStore,
      this.eventManager,
      this.sharedClientState,
      e5.initialUser,
      e5.maxConcurrentLimboResolutions,
      t4
    );
  }
  async terminate() {
    var e5, t4;
    await (async function __PRIVATE_remoteStoreShutdown(e6) {
      const t5 = __PRIVATE_debugCast(e6);
      __PRIVATE_logDebug("RemoteStore", "RemoteStore shutting down."),
        t5.L_.add(5),
        await __PRIVATE_disableNetworkInternal(t5),
        t5.k_.shutdown(),
        t5.q_.set("Unknown");
    })(this.remoteStore),
      (e5 = this.datastore) === null || e5 === undefined || e5.terminate(),
      (t4 = this.eventManager) === null || t4 === undefined || t4.terminate();
  }
}
OnlineComponentProvider.provider = {
  build: () => new OnlineComponentProvider(),
};
class __PRIVATE_AsyncObserver {
  constructor(e5) {
    (this.observer = e5), (this.muted = false);
  }
  next(e5) {
    this.muted || (this.observer.next && this.Ya(this.observer.next, e5));
  }
  error(e5) {
    this.muted ||
      (this.observer.error
        ? this.Ya(this.observer.error, e5)
        : __PRIVATE_logError(
            "Uncaught Error in snapshot listener:",
            e5.toString()
          ));
  }
  Za() {
    this.muted = true;
  }
  Ya(e5, t4) {
    setTimeout(() => {
      this.muted || e5(t4);
    }, 0);
  }
}
class FirestoreClient {
  constructor(e5, t4, n5, r7, i5) {
    (this.authCredentials = e5),
      (this.appCheckCredentials = t4),
      (this.asyncQueue = n5),
      (this.databaseInfo = r7),
      (this.user = User.UNAUTHENTICATED),
      (this.clientId = __PRIVATE_AutoId.newId()),
      (this.authCredentialListener = () => Promise.resolve()),
      (this.appCheckCredentialListener = () => Promise.resolve()),
      (this._uninitializedComponentsProvider = i5),
      this.authCredentials.start(n5, async (e6) => {
        __PRIVATE_logDebug("FirestoreClient", "Received user=", e6.uid),
          await this.authCredentialListener(e6),
          (this.user = e6);
      }),
      this.appCheckCredentials.start(
        n5,
        (e6) => (
          __PRIVATE_logDebug(
            "FirestoreClient",
            "Received new app check token=",
            e6
          ),
          this.appCheckCredentialListener(e6, this.user)
        )
      );
  }
  get configuration() {
    return {
      asyncQueue: this.asyncQueue,
      databaseInfo: this.databaseInfo,
      clientId: this.clientId,
      authCredentials: this.authCredentials,
      appCheckCredentials: this.appCheckCredentials,
      initialUser: this.user,
      maxConcurrentLimboResolutions: 100,
    };
  }
  setCredentialChangeListener(e5) {
    this.authCredentialListener = e5;
  }
  setAppCheckTokenChangeListener(e5) {
    this.appCheckCredentialListener = e5;
  }
  terminate() {
    this.asyncQueue.enterRestrictedMode();
    const e5 = new __PRIVATE_Deferred();
    return (
      this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
        try {
          this._onlineComponents && (await this._onlineComponents.terminate()),
            this._offlineComponents &&
              (await this._offlineComponents.terminate()),
            this.authCredentials.shutdown(),
            this.appCheckCredentials.shutdown(),
            e5.resolve();
        } catch (t4) {
          const n5 = __PRIVATE_wrapInUserErrorIfRecoverable(
            t4,
            "Failed to shutdown persistence"
          );
          e5.reject(n5);
        }
      }),
      e5.promise
    );
  }
}
async function __PRIVATE_setOfflineComponentProvider(e5, t4) {
  e5.asyncQueue.verifyOperationInProgress(),
    __PRIVATE_logDebug(
      "FirestoreClient",
      "Initializing OfflineComponentProvider"
    );
  const n5 = e5.configuration;
  await t4.initialize(n5);
  let r7 = n5.initialUser;
  e5.setCredentialChangeListener(async (e6) => {
    r7.isEqual(e6) ||
      (await __PRIVATE_localStoreHandleUserChange(t4.localStore, e6),
      (r7 = e6));
  }),
    t4.persistence.setDatabaseDeletedListener(() => e5.terminate()),
    (e5._offlineComponents = t4);
}
async function __PRIVATE_setOnlineComponentProvider(e5, t4) {
  e5.asyncQueue.verifyOperationInProgress();
  const n5 = await __PRIVATE_ensureOfflineComponents(e5);
  __PRIVATE_logDebug("FirestoreClient", "Initializing OnlineComponentProvider"),
    await t4.initialize(n5, e5.configuration),
    e5.setCredentialChangeListener((e6) =>
      __PRIVATE_remoteStoreHandleCredentialChange(t4.remoteStore, e6)
    ),
    e5.setAppCheckTokenChangeListener((e6, n6) =>
      __PRIVATE_remoteStoreHandleCredentialChange(t4.remoteStore, n6)
    ),
    (e5._onlineComponents = t4);
}
async function __PRIVATE_ensureOfflineComponents(e5) {
  if (!e5._offlineComponents)
    if (e5._uninitializedComponentsProvider) {
      __PRIVATE_logDebug(
        "FirestoreClient",
        "Using user provided OfflineComponentProvider"
      );
      try {
        await __PRIVATE_setOfflineComponentProvider(
          e5,
          e5._uninitializedComponentsProvider._offline
        );
      } catch (t4) {
        const n5 = t4;
        if (
          !(function __PRIVATE_canFallbackFromIndexedDbError(e6) {
            return e6.name === "FirebaseError"
              ? e6.code === D.FAILED_PRECONDITION || e6.code === D.UNIMPLEMENTED
              : !(
                  typeof DOMException != "undefined" &&
                  e6 instanceof DOMException
                ) ||
                  e6.code === 22 ||
                  e6.code === 20 ||
                  e6.code === 11;
          })(n5)
        )
          throw n5;
        __PRIVATE_logWarn(
          "Error using user provided cache. Falling back to memory cache: " + n5
        ),
          await __PRIVATE_setOfflineComponentProvider(
            e5,
            new __PRIVATE_MemoryOfflineComponentProvider()
          );
      }
    } else
      __PRIVATE_logDebug(
        "FirestoreClient",
        "Using default OfflineComponentProvider"
      ),
        await __PRIVATE_setOfflineComponentProvider(
          e5,
          new __PRIVATE_LruGcMemoryOfflineComponentProvider(undefined)
        );
  return e5._offlineComponents;
}
async function __PRIVATE_ensureOnlineComponents(e5) {
  return (
    e5._onlineComponents ||
      (e5._uninitializedComponentsProvider
        ? (__PRIVATE_logDebug(
            "FirestoreClient",
            "Using user provided OnlineComponentProvider"
          ),
          await __PRIVATE_setOnlineComponentProvider(
            e5,
            e5._uninitializedComponentsProvider._online
          ))
        : (__PRIVATE_logDebug(
            "FirestoreClient",
            "Using default OnlineComponentProvider"
          ),
          await __PRIVATE_setOnlineComponentProvider(
            e5,
            new OnlineComponentProvider()
          ))),
    e5._onlineComponents
  );
}
async function __PRIVATE_getEventManager(e5) {
  const t4 = await __PRIVATE_ensureOnlineComponents(e5),
    n5 = t4.eventManager;
  return (
    (n5.onListen = __PRIVATE_syncEngineListen.bind(null, t4.syncEngine)),
    (n5.onUnlisten = __PRIVATE_syncEngineUnlisten.bind(null, t4.syncEngine)),
    (n5.onFirstRemoteStoreListen = __PRIVATE_triggerRemoteStoreListen.bind(
      null,
      t4.syncEngine
    )),
    (n5.onLastRemoteStoreUnlisten = __PRIVATE_triggerRemoteStoreUnlisten.bind(
      null,
      t4.syncEngine
    )),
    n5
  );
}
function __PRIVATE_firestoreClientGetDocumentViaSnapshotListener(
  e5,
  t4,
  n5 = {}
) {
  const r7 = new __PRIVATE_Deferred();
  return (
    e5.asyncQueue.enqueueAndForget(async () =>
      (function __PRIVATE_readDocumentViaSnapshotListener(e6, t5, n6, r8, i5) {
        const s3 = new __PRIVATE_AsyncObserver({
            next: (_2) => {
              s3.Za(),
                t5.enqueueAndForget(() =>
                  __PRIVATE_eventManagerUnlisten(e6, o5)
                );
              const a3 = _2.docs.has(n6);
              !a3 && _2.fromCache
                ? i5.reject(
                    new FirestoreError(
                      D.UNAVAILABLE,
                      "Failed to get document because the client is offline."
                    )
                  )
                : a3 && _2.fromCache && r8 && r8.source === "server"
                ? i5.reject(
                    new FirestoreError(
                      D.UNAVAILABLE,
                      'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)'
                    )
                  )
                : i5.resolve(_2);
            },
            error: (e7) => i5.reject(e7),
          }),
          o5 = new __PRIVATE_QueryListener(
            __PRIVATE_newQueryForPath(n6.path),
            s3,
            {
              includeMetadataChanges: true,
              _a: true,
            }
          );
        return __PRIVATE_eventManagerListen(e6, o5);
      })(await __PRIVATE_getEventManager(e5), e5.asyncQueue, t4, n5, r7)
    ),
    r7.promise
  );
}
function __PRIVATE_cloneLongPollingOptions(e5) {
  const t4 = {};
  return (
    e5.timeoutSeconds !== undefined && (t4.timeoutSeconds = e5.timeoutSeconds),
    t4
  );
}
var we = new Map();
function __PRIVATE_validateNonEmptyArgument(e5, t4, n5) {
  if (!n5)
    throw new FirestoreError(
      D.INVALID_ARGUMENT,
      `Function ${e5}() cannot be called with an empty ${t4}.`
    );
}
function __PRIVATE_validateIsNotUsedTogether(e5, t4, n5, r7) {
  if (t4 === true && r7 === true)
    throw new FirestoreError(
      D.INVALID_ARGUMENT,
      `${e5} and ${n5} cannot be used together.`
    );
}
function __PRIVATE_validateDocumentPath(e5) {
  if (!DocumentKey.isDocumentKey(e5))
    throw new FirestoreError(
      D.INVALID_ARGUMENT,
      `Invalid document reference. Document references must have an even number of segments, but ${e5} has ${e5.length}.`
    );
}
function __PRIVATE_valueDescription(e5) {
  if (e5 === undefined) return "undefined";
  if (e5 === null) return "null";
  if (typeof e5 == "string")
    return (
      e5.length > 20 && (e5 = `${e5.substring(0, 20)}...`), JSON.stringify(e5)
    );
  if (typeof e5 == "number" || typeof e5 == "boolean") return "" + e5;
  if (typeof e5 == "object") {
    if (e5 instanceof Array) return "an array";
    {
      const t4 = (function __PRIVATE_tryGetCustomObjectType(e6) {
        if (e6.constructor) return e6.constructor.name;
        return null;
      })(e5);
      return t4 ? `a custom ${t4} object` : "an object";
    }
  }
  return typeof e5 == "function" ? "a function" : fail();
}
function __PRIVATE_cast(e5, t4) {
  if (("_delegate" in e5 && (e5 = e5._delegate), !(e5 instanceof t4))) {
    if (t4.name === e5.constructor.name)
      throw new FirestoreError(
        D.INVALID_ARGUMENT,
        "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?"
      );
    {
      const n5 = __PRIVATE_valueDescription(e5);
      throw new FirestoreError(
        D.INVALID_ARGUMENT,
        `Expected type '${t4.name}', but it was: ${n5}`
      );
    }
  }
  return e5;
}
class FirestoreSettingsImpl {
  constructor(e5) {
    var t4, n5;
    if (e5.host === undefined) {
      if (e5.ssl !== undefined)
        throw new FirestoreError(
          D.INVALID_ARGUMENT,
          "Can't provide ssl option if host option is not set"
        );
      (this.host = "firestore.googleapis.com"), (this.ssl = true);
    } else
      (this.host = e5.host),
        (this.ssl = (t4 = e5.ssl) === null || t4 === undefined || t4);
    if (
      ((this.credentials = e5.credentials),
      (this.ignoreUndefinedProperties = !!e5.ignoreUndefinedProperties),
      (this.localCache = e5.localCache),
      e5.cacheSizeBytes === undefined)
    )
      this.cacheSizeBytes = 41943040;
    else {
      if (e5.cacheSizeBytes !== -1 && e5.cacheSizeBytes < 1048576)
        throw new FirestoreError(
          D.INVALID_ARGUMENT,
          "cacheSizeBytes must be at least 1048576"
        );
      this.cacheSizeBytes = e5.cacheSizeBytes;
    }
    __PRIVATE_validateIsNotUsedTogether(
      "experimentalForceLongPolling",
      e5.experimentalForceLongPolling,
      "experimentalAutoDetectLongPolling",
      e5.experimentalAutoDetectLongPolling
    ),
      (this.experimentalForceLongPolling = !!e5.experimentalForceLongPolling),
      this.experimentalForceLongPolling
        ? (this.experimentalAutoDetectLongPolling = false)
        : e5.experimentalAutoDetectLongPolling === undefined
        ? (this.experimentalAutoDetectLongPolling = true)
        : (this.experimentalAutoDetectLongPolling =
            !!e5.experimentalAutoDetectLongPolling),
      (this.experimentalLongPollingOptions = __PRIVATE_cloneLongPollingOptions(
        (n5 = e5.experimentalLongPollingOptions) !== null && n5 !== undefined
          ? n5
          : {}
      )),
      (function __PRIVATE_validateLongPollingOptions(e6) {
        if (e6.timeoutSeconds !== undefined) {
          if (isNaN(e6.timeoutSeconds))
            throw new FirestoreError(
              D.INVALID_ARGUMENT,
              `invalid long polling timeout: ${e6.timeoutSeconds} (must not be NaN)`
            );
          if (e6.timeoutSeconds < 5)
            throw new FirestoreError(
              D.INVALID_ARGUMENT,
              `invalid long polling timeout: ${e6.timeoutSeconds} (minimum allowed value is 5)`
            );
          if (e6.timeoutSeconds > 30)
            throw new FirestoreError(
              D.INVALID_ARGUMENT,
              `invalid long polling timeout: ${e6.timeoutSeconds} (maximum allowed value is 30)`
            );
        }
      })(this.experimentalLongPollingOptions),
      (this.useFetchStreams = !!e5.useFetchStreams);
  }
  isEqual(e5) {
    return (
      this.host === e5.host &&
      this.ssl === e5.ssl &&
      this.credentials === e5.credentials &&
      this.cacheSizeBytes === e5.cacheSizeBytes &&
      this.experimentalForceLongPolling === e5.experimentalForceLongPolling &&
      this.experimentalAutoDetectLongPolling ===
        e5.experimentalAutoDetectLongPolling &&
      (function __PRIVATE_longPollingOptionsEqual(e6, t4) {
        return e6.timeoutSeconds === t4.timeoutSeconds;
      })(
        this.experimentalLongPollingOptions,
        e5.experimentalLongPollingOptions
      ) &&
      this.ignoreUndefinedProperties === e5.ignoreUndefinedProperties &&
      this.useFetchStreams === e5.useFetchStreams
    );
  }
}

class Firestore$1 {
  constructor(e5, t4, n5, r7) {
    (this._authCredentials = e5),
      (this._appCheckCredentials = t4),
      (this._databaseId = n5),
      (this._app = r7),
      (this.type = "firestore-lite"),
      (this._persistenceKey = "(lite)"),
      (this._settings = new FirestoreSettingsImpl({})),
      (this._settingsFrozen = false),
      (this._terminateTask = "notTerminated");
  }
  get app() {
    if (!this._app)
      throw new FirestoreError(
        D.FAILED_PRECONDITION,
        "Firestore was not initialized using the Firebase SDK. 'app' is not available"
      );
    return this._app;
  }
  get _initialized() {
    return this._settingsFrozen;
  }
  get _terminated() {
    return this._terminateTask !== "notTerminated";
  }
  _setSettings(e5) {
    if (this._settingsFrozen)
      throw new FirestoreError(
        D.FAILED_PRECONDITION,
        "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object."
      );
    (this._settings = new FirestoreSettingsImpl(e5)),
      e5.credentials !== undefined &&
        (this._authCredentials =
          (function __PRIVATE_makeAuthCredentialsProvider(e6) {
            if (!e6) return new __PRIVATE_EmptyAuthCredentialsProvider();
            switch (e6.type) {
              case "firstParty":
                return new __PRIVATE_FirstPartyAuthCredentialsProvider(
                  e6.sessionIndex || "0",
                  e6.iamToken || null,
                  e6.authTokenFactory || null
                );
              case "provider":
                return e6.client;
              default:
                throw new FirestoreError(
                  D.INVALID_ARGUMENT,
                  "makeAuthCredentialsProvider failed due to invalid credential type"
                );
            }
          })(e5.credentials));
  }
  _getSettings() {
    return this._settings;
  }
  _freezeSettings() {
    return (this._settingsFrozen = true), this._settings;
  }
  _delete() {
    return (
      this._terminateTask === "notTerminated" &&
        (this._terminateTask = this._terminate()),
      this._terminateTask
    );
  }
  async _restart() {
    this._terminateTask === "notTerminated"
      ? await this._terminate()
      : (this._terminateTask = "notTerminated");
  }
  toJSON() {
    return {
      app: this._app,
      databaseId: this._databaseId,
      settings: this._settings,
    };
  }
  _terminate() {
    return (
      (function __PRIVATE_removeComponents(e5) {
        const t4 = we.get(e5);
        t4 &&
          (__PRIVATE_logDebug("ComponentProvider", "Removing Datastore"),
          we.delete(e5),
          t4.terminate());
      })(this),
      Promise.resolve()
    );
  }
}
function connectFirestoreEmulator(e5, t4, n5, r7 = {}) {
  var i5;
  const s3 = (e5 = __PRIVATE_cast(e5, Firestore$1))._getSettings(),
    o5 = `${t4}:${n5}`;
  if (
    (s3.host !== "firestore.googleapis.com" &&
      s3.host !== o5 &&
      __PRIVATE_logWarn(
        "Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."
      ),
    e5._setSettings(
      Object.assign(Object.assign({}, s3), {
        host: o5,
        ssl: false,
      })
    ),
    r7.mockUserToken)
  ) {
    let t5, n6;
    if (typeof r7.mockUserToken == "string")
      (t5 = r7.mockUserToken), (n6 = User.MOCK_USER);
    else {
      t5 = createMockUserToken(
        r7.mockUserToken,
        (i5 = e5._app) === null || i5 === undefined
          ? undefined
          : i5.options.projectId
      );
      const s4 = r7.mockUserToken.sub || r7.mockUserToken.user_id;
      if (!s4)
        throw new FirestoreError(
          D.INVALID_ARGUMENT,
          "mockUserToken must contain 'sub' or 'user_id' field!"
        );
      n6 = new User(s4);
    }
    e5._authCredentials = new __PRIVATE_EmulatorAuthCredentialsProvider(
      new __PRIVATE_OAuthToken(t5, n6)
    );
  }
}

class Query {
  constructor(e5, t4, n5) {
    (this.converter = t4),
      (this._query = n5),
      (this.type = "query"),
      (this.firestore = e5);
  }
  withConverter(e5) {
    return new Query(this.firestore, e5, this._query);
  }
}

class DocumentReference {
  constructor(e5, t4, n5) {
    (this.converter = t4),
      (this._key = n5),
      (this.type = "document"),
      (this.firestore = e5);
  }
  get _path() {
    return this._key.path;
  }
  get id() {
    return this._key.path.lastSegment();
  }
  get path() {
    return this._key.path.canonicalString();
  }
  get parent() {
    return new CollectionReference(
      this.firestore,
      this.converter,
      this._key.path.popLast()
    );
  }
  withConverter(e5) {
    return new DocumentReference(this.firestore, e5, this._key);
  }
}

class CollectionReference extends Query {
  constructor(e5, t4, n5) {
    super(e5, t4, __PRIVATE_newQueryForPath(n5)),
      (this._path = n5),
      (this.type = "collection");
  }
  get id() {
    return this._query.path.lastSegment();
  }
  get path() {
    return this._query.path.canonicalString();
  }
  get parent() {
    const e5 = this._path.popLast();
    return e5.isEmpty()
      ? null
      : new DocumentReference(this.firestore, null, new DocumentKey(e5));
  }
  withConverter(e5) {
    return new CollectionReference(this.firestore, e5, this._path);
  }
}
function doc(e5, t4, ...n5) {
  if (
    ((e5 = getModularInstance(e5)),
    arguments.length === 1 && (t4 = __PRIVATE_AutoId.newId()),
    __PRIVATE_validateNonEmptyArgument("doc", "path", t4),
    e5 instanceof Firestore$1)
  ) {
    const r7 = ResourcePath.fromString(t4, ...n5);
    return (
      __PRIVATE_validateDocumentPath(r7),
      new DocumentReference(e5, null, new DocumentKey(r7))
    );
  }
  {
    if (!(e5 instanceof DocumentReference || e5 instanceof CollectionReference))
      throw new FirestoreError(
        D.INVALID_ARGUMENT,
        "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore"
      );
    const r7 = e5._path.child(ResourcePath.fromString(t4, ...n5));
    return (
      __PRIVATE_validateDocumentPath(r7),
      new DocumentReference(
        e5.firestore,
        e5 instanceof CollectionReference ? e5.converter : null,
        new DocumentKey(r7)
      )
    );
  }
}
class __PRIVATE_AsyncQueueImpl {
  constructor(e5 = Promise.resolve()) {
    (this.Pu = []),
      (this.Iu = false),
      (this.Tu = []),
      (this.Eu = null),
      (this.du = false),
      (this.Au = false),
      (this.Ru = []),
      (this.t_ = new __PRIVATE_ExponentialBackoff(this, "async_queue_retry")),
      (this.Vu = () => {
        const e6 = getDocument();
        e6 &&
          __PRIVATE_logDebug(
            "AsyncQueue",
            "Visibility state changed to " + e6.visibilityState
          ),
          this.t_.jo();
      }),
      (this.mu = e5);
    const t4 = getDocument();
    t4 &&
      typeof t4.addEventListener == "function" &&
      t4.addEventListener("visibilitychange", this.Vu);
  }
  get isShuttingDown() {
    return this.Iu;
  }
  enqueueAndForget(e5) {
    this.enqueue(e5);
  }
  enqueueAndForgetEvenWhileRestricted(e5) {
    this.fu(), this.gu(e5);
  }
  enterRestrictedMode(e5) {
    if (!this.Iu) {
      (this.Iu = true), (this.Au = e5 || false);
      const t4 = getDocument();
      t4 &&
        typeof t4.removeEventListener == "function" &&
        t4.removeEventListener("visibilitychange", this.Vu);
    }
  }
  enqueue(e5) {
    if ((this.fu(), this.Iu)) return new Promise(() => {});
    const t4 = new __PRIVATE_Deferred();
    return this.gu(() =>
      this.Iu && this.Au
        ? Promise.resolve()
        : (e5().then(t4.resolve, t4.reject), t4.promise)
    ).then(() => t4.promise);
  }
  enqueueRetryable(e5) {
    this.enqueueAndForget(() => (this.Pu.push(e5), this.pu()));
  }
  async pu() {
    if (this.Pu.length !== 0) {
      try {
        await this.Pu[0](), this.Pu.shift(), this.t_.reset();
      } catch (e5) {
        if (!__PRIVATE_isIndexedDbTransactionError(e5)) throw e5;
        __PRIVATE_logDebug(
          "AsyncQueue",
          "Operation failed with retryable error: " + e5
        );
      }
      this.Pu.length > 0 && this.t_.Go(() => this.pu());
    }
  }
  gu(e5) {
    const t4 = this.mu.then(
      () => (
        (this.du = true),
        e5()
          .catch((e6) => {
            (this.Eu = e6), (this.du = false);
            const t5 = (function __PRIVATE_getMessageOrStack(e7) {
              let t6 = e7.message || "";
              e7.stack &&
                (t6 = e7.stack.includes(e7.message)
                  ? e7.stack
                  : e7.message +
                    `
` +
                    e7.stack);
              return t6;
            })(e6);
            throw (__PRIVATE_logError("INTERNAL UNHANDLED ERROR: ", t5), e6);
          })
          .then((e6) => ((this.du = false), e6))
      )
    );
    return (this.mu = t4), t4;
  }
  enqueueAfterDelay(e5, t4, n5) {
    this.fu(), this.Ru.indexOf(e5) > -1 && (t4 = 0);
    const r7 = DelayedOperation.createAndSchedule(this, e5, t4, n5, (e6) =>
      this.yu(e6)
    );
    return this.Tu.push(r7), r7;
  }
  fu() {
    this.Eu && fail();
  }
  verifyOperationInProgress() {}
  async wu() {
    let e5;
    do {
      (e5 = this.mu), await e5;
    } while (e5 !== this.mu);
  }
  Su(e5) {
    for (const t4 of this.Tu) if (t4.timerId === e5) return true;
    return false;
  }
  bu(e5) {
    return this.wu().then(() => {
      this.Tu.sort((e6, t4) => e6.targetTimeMs - t4.targetTimeMs);
      for (const t4 of this.Tu)
        if ((t4.skipDelay(), e5 !== "all" && t4.timerId === e5)) break;
      return this.wu();
    });
  }
  Du(e5) {
    this.Ru.push(e5);
  }
  yu(e5) {
    const t4 = this.Tu.indexOf(e5);
    this.Tu.splice(t4, 1);
  }
}
function __PRIVATE_isPartialObserver(e5) {
  return (function __PRIVATE_implementsAnyMethods(e6, t4) {
    if (typeof e6 != "object" || e6 === null) return false;
    const n5 = e6;
    for (const e7 of t4)
      if (e7 in n5 && typeof n5[e7] == "function") return true;
    return false;
  })(e5, ["next", "error", "complete"]);
}
class Firestore extends Firestore$1 {
  constructor(e5, t4, n5, r7) {
    super(e5, t4, n5, r7),
      (this.type = "firestore"),
      (this._queue = new __PRIVATE_AsyncQueueImpl()),
      (this._persistenceKey =
        (r7 == null ? undefined : r7.name) || "[DEFAULT]");
  }
  async _terminate() {
    if (this._firestoreClient) {
      const e5 = this._firestoreClient.terminate();
      (this._queue = new __PRIVATE_AsyncQueueImpl(e5)),
        (this._firestoreClient = undefined),
        await e5;
    }
  }
}
function getFirestore(t4, n5) {
  const r7 = typeof t4 == "object" ? t4 : getApp(),
    i5 = typeof t4 == "string" ? t4 : n5 || "(default)",
    s3 = _getProvider(r7, "firestore").getImmediate({
      identifier: i5,
    });
  if (!s3._initialized) {
    const e5 = getDefaultEmulatorHostnameAndPort("firestore");
    e5 && connectFirestoreEmulator(s3, ...e5);
  }
  return s3;
}
function ensureFirestoreConfigured(e5) {
  if (e5._terminated)
    throw new FirestoreError(
      D.FAILED_PRECONDITION,
      "The client has already been terminated."
    );
  return (
    e5._firestoreClient || __PRIVATE_configureFirestore(e5), e5._firestoreClient
  );
}
function __PRIVATE_configureFirestore(e5) {
  var t4, n5, r7;
  const i5 = e5._freezeSettings(),
    s3 = (function __PRIVATE_makeDatabaseInfo(e6, t5, n6, r8) {
      return new DatabaseInfo(
        e6,
        t5,
        n6,
        r8.host,
        r8.ssl,
        r8.experimentalForceLongPolling,
        r8.experimentalAutoDetectLongPolling,
        __PRIVATE_cloneLongPollingOptions(r8.experimentalLongPollingOptions),
        r8.useFetchStreams
      );
    })(
      e5._databaseId,
      ((t4 = e5._app) === null || t4 === undefined
        ? undefined
        : t4.options.appId) || "",
      e5._persistenceKey,
      i5
    );
  e5._componentsProvider ||
    (((n5 = i5.localCache) === null || n5 === undefined
      ? undefined
      : n5._offlineComponentProvider) &&
      ((r7 = i5.localCache) === null || r7 === undefined
        ? undefined
        : r7._onlineComponentProvider) &&
      (e5._componentsProvider = {
        _offline: i5.localCache._offlineComponentProvider,
        _online: i5.localCache._onlineComponentProvider,
      })),
    (e5._firestoreClient = new FirestoreClient(
      e5._authCredentials,
      e5._appCheckCredentials,
      e5._queue,
      s3,
      e5._componentsProvider &&
        (function __PRIVATE_buildComponentProvider(e6) {
          const t5 = e6 == null ? undefined : e6._online.build();
          return {
            _offline: e6 == null ? undefined : e6._offline.build(t5),
            _online: t5,
          };
        })(e5._componentsProvider)
    ));
}
class Bytes {
  constructor(e5) {
    this._byteString = e5;
  }
  static fromBase64String(e5) {
    try {
      return new Bytes(ByteString.fromBase64String(e5));
    } catch (e6) {
      throw new FirestoreError(
        D.INVALID_ARGUMENT,
        "Failed to construct data from Base64 string: " + e6
      );
    }
  }
  static fromUint8Array(e5) {
    return new Bytes(ByteString.fromUint8Array(e5));
  }
  toBase64() {
    return this._byteString.toBase64();
  }
  toUint8Array() {
    return this._byteString.toUint8Array();
  }
  toString() {
    return "Bytes(base64: " + this.toBase64() + ")";
  }
  isEqual(e5) {
    return this._byteString.isEqual(e5._byteString);
  }
}

class FieldPath {
  constructor(...e5) {
    for (let t4 = 0; t4 < e5.length; ++t4)
      if (e5[t4].length === 0)
        throw new FirestoreError(
          D.INVALID_ARGUMENT,
          "Invalid field name at argument $(i + 1). Field names must not be empty."
        );
    this._internalPath = new FieldPath$1(e5);
  }
  isEqual(e5) {
    return this._internalPath.isEqual(e5._internalPath);
  }
}
class GeoPoint {
  constructor(e5, t4) {
    if (!isFinite(e5) || e5 < -90 || e5 > 90)
      throw new FirestoreError(
        D.INVALID_ARGUMENT,
        "Latitude must be a number between -90 and 90, but was: " + e5
      );
    if (!isFinite(t4) || t4 < -180 || t4 > 180)
      throw new FirestoreError(
        D.INVALID_ARGUMENT,
        "Longitude must be a number between -180 and 180, but was: " + t4
      );
    (this._lat = e5), (this._long = t4);
  }
  get latitude() {
    return this._lat;
  }
  get longitude() {
    return this._long;
  }
  isEqual(e5) {
    return this._lat === e5._lat && this._long === e5._long;
  }
  toJSON() {
    return {
      latitude: this._lat,
      longitude: this._long,
    };
  }
  _compareTo(e5) {
    return (
      __PRIVATE_primitiveComparator(this._lat, e5._lat) ||
      __PRIVATE_primitiveComparator(this._long, e5._long)
    );
  }
}

class VectorValue {
  constructor(e5) {
    this._values = (e5 || []).map((e6) => e6);
  }
  toArray() {
    return this._values.map((e5) => e5);
  }
  isEqual(e5) {
    return (function __PRIVATE_isPrimitiveArrayEqual(e6, t4) {
      if (e6.length !== t4.length) return false;
      for (let n5 = 0; n5 < e6.length; ++n5)
        if (e6[n5] !== t4[n5]) return false;
      return true;
    })(this._values, e5._values);
  }
}
var De = new RegExp("[~\\*/\\[\\]]");
function __PRIVATE_fieldPathFromDotSeparatedString(e5, t4, n5) {
  if (t4.search(De) >= 0)
    throw __PRIVATE_createError(
      `Invalid field path (${t4}). Paths must not contain '~', '*', '/', '[', or ']'`,
      e5,
      false,
      undefined,
      n5
    );
  try {
    return new FieldPath(...t4.split("."))._internalPath;
  } catch (r7) {
    throw __PRIVATE_createError(
      `Invalid field path (${t4}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
      e5,
      false,
      undefined,
      n5
    );
  }
}
function __PRIVATE_createError(e5, t4, n5, r7, i5) {
  const s3 = r7 && !r7.isEmpty(),
    o5 = i5 !== undefined;
  let _2 = `Function ${t4}() called with invalid data`;
  n5 && (_2 += " (via `toFirestore()`)"), (_2 += ". ");
  let a3 = "";
  return (
    (s3 || o5) &&
      ((a3 += " (found"),
      s3 && (a3 += ` in field ${r7}`),
      o5 && (a3 += ` in document ${i5}`),
      (a3 += ")")),
    new FirestoreError(D.INVALID_ARGUMENT, _2 + e5 + a3)
  );
}
class DocumentSnapshot$1 {
  constructor(e5, t4, n5, r7, i5) {
    (this._firestore = e5),
      (this._userDataWriter = t4),
      (this._key = n5),
      (this._document = r7),
      (this._converter = i5);
  }
  get id() {
    return this._key.path.lastSegment();
  }
  get ref() {
    return new DocumentReference(this._firestore, this._converter, this._key);
  }
  exists() {
    return this._document !== null;
  }
  data() {
    if (this._document) {
      if (this._converter) {
        const e5 = new QueryDocumentSnapshot$1(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          null
        );
        return this._converter.fromFirestore(e5);
      }
      return this._userDataWriter.convertValue(this._document.data.value);
    }
  }
  get(e5) {
    if (this._document) {
      const t4 = this._document.data.field(
        __PRIVATE_fieldPathFromArgument("DocumentSnapshot.get", e5)
      );
      if (t4 !== null) return this._userDataWriter.convertValue(t4);
    }
  }
}

class QueryDocumentSnapshot$1 extends DocumentSnapshot$1 {
  data() {
    return super.data();
  }
}
function __PRIVATE_fieldPathFromArgument(e5, t4) {
  return typeof t4 == "string"
    ? __PRIVATE_fieldPathFromDotSeparatedString(e5, t4)
    : t4 instanceof FieldPath
    ? t4._internalPath
    : t4._delegate._internalPath;
}
function __PRIVATE_validateHasExplicitOrderByForLimitToLast(e5) {
  if (e5.limitType === "L" && e5.explicitOrderBy.length === 0)
    throw new FirestoreError(
      D.UNIMPLEMENTED,
      "limitToLast() queries require specifying at least one orderBy() clause"
    );
}
class AbstractUserDataWriter {
  convertValue(e5, t4 = "none") {
    switch (__PRIVATE_typeOrder(e5)) {
      case 0:
        return null;
      case 1:
        return e5.booleanValue;
      case 2:
        return __PRIVATE_normalizeNumber(e5.integerValue || e5.doubleValue);
      case 3:
        return this.convertTimestamp(e5.timestampValue);
      case 4:
        return this.convertServerTimestamp(e5, t4);
      case 5:
        return e5.stringValue;
      case 6:
        return this.convertBytes(__PRIVATE_normalizeByteString(e5.bytesValue));
      case 7:
        return this.convertReference(e5.referenceValue);
      case 8:
        return this.convertGeoPoint(e5.geoPointValue);
      case 9:
        return this.convertArray(e5.arrayValue, t4);
      case 11:
        return this.convertObject(e5.mapValue, t4);
      case 10:
        return this.convertVectorValue(e5.mapValue);
      default:
        throw fail();
    }
  }
  convertObject(e5, t4) {
    return this.convertObjectMap(e5.fields, t4);
  }
  convertObjectMap(e5, t4 = "none") {
    const n5 = {};
    return (
      forEach(e5, (e6, r7) => {
        n5[e6] = this.convertValue(r7, t4);
      }),
      n5
    );
  }
  convertVectorValue(e5) {
    var t4, n5, r7;
    const i5 =
      (r7 =
        (n5 =
          (t4 = e5.fields) === null || t4 === undefined
            ? undefined
            : t4.value.arrayValue) === null || n5 === undefined
          ? undefined
          : n5.values) === null || r7 === undefined
        ? undefined
        : r7.map((e6) => __PRIVATE_normalizeNumber(e6.doubleValue));
    return new VectorValue(i5);
  }
  convertGeoPoint(e5) {
    return new GeoPoint(
      __PRIVATE_normalizeNumber(e5.latitude),
      __PRIVATE_normalizeNumber(e5.longitude)
    );
  }
  convertArray(e5, t4) {
    return (e5.values || []).map((e6) => this.convertValue(e6, t4));
  }
  convertServerTimestamp(e5, t4) {
    switch (t4) {
      case "previous":
        const n5 = __PRIVATE_getPreviousValue(e5);
        return n5 == null ? null : this.convertValue(n5, t4);
      case "estimate":
        return this.convertTimestamp(__PRIVATE_getLocalWriteTime(e5));
      default:
        return null;
    }
  }
  convertTimestamp(e5) {
    const t4 = __PRIVATE_normalizeTimestamp(e5);
    return new Timestamp(t4.seconds, t4.nanos);
  }
  convertDocumentKey(e5, t4) {
    const n5 = ResourcePath.fromString(e5);
    __PRIVATE_hardAssert(__PRIVATE_isValidResourceName(n5));
    const r7 = new DatabaseId(n5.get(1), n5.get(3)),
      i5 = new DocumentKey(n5.popFirst(5));
    return (
      r7.isEqual(t4) ||
        __PRIVATE_logError(
          `Document ${i5} contains a document reference within a different database (${r7.projectId}/${r7.database}) which is not supported. It will be treated as a reference in the current database (${t4.projectId}/${t4.database}) instead.`
        ),
      i5
    );
  }
}
class SnapshotMetadata {
  constructor(e5, t4) {
    (this.hasPendingWrites = e5), (this.fromCache = t4);
  }
  isEqual(e5) {
    return (
      this.hasPendingWrites === e5.hasPendingWrites &&
      this.fromCache === e5.fromCache
    );
  }
}

class DocumentSnapshot extends DocumentSnapshot$1 {
  constructor(e5, t4, n5, r7, i5, s3) {
    super(e5, t4, n5, r7, s3),
      (this._firestore = e5),
      (this._firestoreImpl = e5),
      (this.metadata = i5);
  }
  exists() {
    return super.exists();
  }
  data(e5 = {}) {
    if (this._document) {
      if (this._converter) {
        const t4 = new QueryDocumentSnapshot(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          this.metadata,
          null
        );
        return this._converter.fromFirestore(t4, e5);
      }
      return this._userDataWriter.convertValue(
        this._document.data.value,
        e5.serverTimestamps
      );
    }
  }
  get(e5, t4 = {}) {
    if (this._document) {
      const n5 = this._document.data.field(
        __PRIVATE_fieldPathFromArgument("DocumentSnapshot.get", e5)
      );
      if (n5 !== null)
        return this._userDataWriter.convertValue(n5, t4.serverTimestamps);
    }
  }
}

class QueryDocumentSnapshot extends DocumentSnapshot {
  data(e5 = {}) {
    return super.data(e5);
  }
}

class QuerySnapshot {
  constructor(e5, t4, n5, r7) {
    (this._firestore = e5),
      (this._userDataWriter = t4),
      (this._snapshot = r7),
      (this.metadata = new SnapshotMetadata(r7.hasPendingWrites, r7.fromCache)),
      (this.query = n5);
  }
  get docs() {
    const e5 = [];
    return this.forEach((t4) => e5.push(t4)), e5;
  }
  get size() {
    return this._snapshot.docs.size;
  }
  get empty() {
    return this.size === 0;
  }
  forEach(e5, t4) {
    this._snapshot.docs.forEach((n5) => {
      e5.call(
        t4,
        new QueryDocumentSnapshot(
          this._firestore,
          this._userDataWriter,
          n5.key,
          n5,
          new SnapshotMetadata(
            this._snapshot.mutatedKeys.has(n5.key),
            this._snapshot.fromCache
          ),
          this.query.converter
        )
      );
    });
  }
  docChanges(e5 = {}) {
    const t4 = !!e5.includeMetadataChanges;
    if (t4 && this._snapshot.excludesMetadataChanges)
      throw new FirestoreError(
        D.INVALID_ARGUMENT,
        "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot()."
      );
    return (
      (this._cachedChanges &&
        this._cachedChangesIncludeMetadataChanges === t4) ||
        ((this._cachedChanges = (function __PRIVATE_changesFromSnapshot(
          e6,
          t5
        ) {
          if (e6._snapshot.oldDocs.isEmpty()) {
            let t6 = 0;
            return e6._snapshot.docChanges.map((n5) => {
              const r7 = new QueryDocumentSnapshot(
                e6._firestore,
                e6._userDataWriter,
                n5.doc.key,
                n5.doc,
                new SnapshotMetadata(
                  e6._snapshot.mutatedKeys.has(n5.doc.key),
                  e6._snapshot.fromCache
                ),
                e6.query.converter
              );
              return (
                n5.doc,
                {
                  type: "added",
                  doc: r7,
                  oldIndex: -1,
                  newIndex: t6++,
                }
              );
            });
          }
          {
            let n5 = e6._snapshot.oldDocs;
            return e6._snapshot.docChanges
              .filter((e7) => t5 || e7.type !== 3)
              .map((t6) => {
                const r7 = new QueryDocumentSnapshot(
                  e6._firestore,
                  e6._userDataWriter,
                  t6.doc.key,
                  t6.doc,
                  new SnapshotMetadata(
                    e6._snapshot.mutatedKeys.has(t6.doc.key),
                    e6._snapshot.fromCache
                  ),
                  e6.query.converter
                );
                let i5 = -1,
                  s3 = -1;
                return (
                  t6.type !== 0 &&
                    ((i5 = n5.indexOf(t6.doc.key)),
                    (n5 = n5.delete(t6.doc.key))),
                  t6.type !== 1 &&
                    ((n5 = n5.add(t6.doc)), (s3 = n5.indexOf(t6.doc.key))),
                  {
                    type: __PRIVATE_resultChangeType(t6.type),
                    doc: r7,
                    oldIndex: i5,
                    newIndex: s3,
                  }
                );
              });
          }
        })(this, t4)),
        (this._cachedChangesIncludeMetadataChanges = t4)),
      this._cachedChanges
    );
  }
}
function __PRIVATE_resultChangeType(e5) {
  switch (e5) {
    case 0:
      return "added";
    case 2:
    case 3:
      return "modified";
    case 1:
      return "removed";
    default:
      return fail();
  }
}
function getDoc(e5) {
  e5 = __PRIVATE_cast(e5, DocumentReference);
  const t4 = __PRIVATE_cast(e5.firestore, Firestore);
  return __PRIVATE_firestoreClientGetDocumentViaSnapshotListener(
    ensureFirestoreConfigured(t4),
    e5._key
  ).then((n5) => __PRIVATE_convertToDocSnapshot(t4, e5, n5));
}

class __PRIVATE_ExpUserDataWriter extends AbstractUserDataWriter {
  constructor(e5) {
    super(), (this.firestore = e5);
  }
  convertBytes(e5) {
    return new Bytes(e5);
  }
  convertReference(e5) {
    const t4 = this.convertDocumentKey(e5, this.firestore._databaseId);
    return new DocumentReference(this.firestore, null, t4);
  }
}
function onSnapshot(e5, ...t4) {
  var n5, r7, i5;
  e5 = getModularInstance(e5);
  let s3 = {
      includeMetadataChanges: false,
      source: "default",
    },
    o5 = 0;
  typeof t4[o5] != "object" ||
    __PRIVATE_isPartialObserver(t4[o5]) ||
    ((s3 = t4[o5]), o5++);
  const _2 = {
    includeMetadataChanges: s3.includeMetadataChanges,
    source: s3.source,
  };
  if (__PRIVATE_isPartialObserver(t4[o5])) {
    const e6 = t4[o5];
    (t4[o5] =
      (n5 = e6.next) === null || n5 === undefined ? undefined : n5.bind(e6)),
      (t4[o5 + 1] =
        (r7 = e6.error) === null || r7 === undefined ? undefined : r7.bind(e6)),
      (t4[o5 + 2] =
        (i5 = e6.complete) === null || i5 === undefined
          ? undefined
          : i5.bind(e6));
  }
  let a3, u3, c4;
  if (e5 instanceof DocumentReference)
    (u3 = __PRIVATE_cast(e5.firestore, Firestore)),
      (c4 = __PRIVATE_newQueryForPath(e5._key.path)),
      (a3 = {
        next: (n6) => {
          t4[o5] && t4[o5](__PRIVATE_convertToDocSnapshot(u3, e5, n6));
        },
        error: t4[o5 + 1],
        complete: t4[o5 + 2],
      });
  else {
    const n6 = __PRIVATE_cast(e5, Query);
    (u3 = __PRIVATE_cast(n6.firestore, Firestore)), (c4 = n6._query);
    const r8 = new __PRIVATE_ExpUserDataWriter(u3);
    (a3 = {
      next: (e6) => {
        t4[o5] && t4[o5](new QuerySnapshot(u3, r8, n6, e6));
      },
      error: t4[o5 + 1],
      complete: t4[o5 + 2],
    }),
      __PRIVATE_validateHasExplicitOrderByForLimitToLast(e5._query);
  }
  return (function __PRIVATE_firestoreClientListen(e6, t5, n6, r8) {
    const i6 = new __PRIVATE_AsyncObserver(r8),
      s4 = new __PRIVATE_QueryListener(t5, i6, n6);
    return (
      e6.asyncQueue.enqueueAndForget(async () =>
        __PRIVATE_eventManagerListen(await __PRIVATE_getEventManager(e6), s4)
      ),
      () => {
        i6.Za(),
          e6.asyncQueue.enqueueAndForget(async () =>
            __PRIVATE_eventManagerUnlisten(
              await __PRIVATE_getEventManager(e6),
              s4
            )
          );
      }
    );
  })(ensureFirestoreConfigured(u3), c4, _2, a3);
}
function __PRIVATE_convertToDocSnapshot(e5, t4, n5) {
  const r7 = n5.docs.get(t4._key),
    i5 = new __PRIVATE_ExpUserDataWriter(e5);
  return new DocumentSnapshot(
    e5,
    i5,
    t4._key,
    r7,
    new SnapshotMetadata(n5.hasPendingWrites, n5.fromCache),
    t4.converter
  );
}
var Ce = new WeakMap();
(function __PRIVATE_registerFirestore(e5, t4 = true) {
  (function __PRIVATE_setSDKVersion(e6) {
    S3 = e6;
  })(SDK_VERSION),
    _registerComponent(
      new Component(
        "firestore",
        (e6, { instanceIdentifier: n5, options: r7 }) => {
          const i5 = e6.getProvider("app").getImmediate(),
            s3 = new Firestore(
              new __PRIVATE_FirebaseAuthCredentialsProvider(
                e6.getProvider("auth-internal")
              ),
              new __PRIVATE_FirebaseAppCheckTokenProvider(
                e6.getProvider("app-check-internal")
              ),
              (function __PRIVATE_databaseIdFromApp(e7, t5) {
                if (
                  !Object.prototype.hasOwnProperty.apply(e7.options, [
                    "projectId",
                  ])
                )
                  throw new FirestoreError(
                    D.INVALID_ARGUMENT,
                    '"projectId" not provided in firebase.initializeApp.'
                  );
                return new DatabaseId(e7.options.projectId, t5);
              })(i5, n5),
              i5
            );
          return (
            (r7 = Object.assign(
              {
                useFetchStreams: t4,
              },
              r7
            )),
            s3._setSettings(r7),
            s3
          );
        },
        "PUBLIC"
      ).setMultipleInstances(true)
    ),
    registerVersion(w2, "4.7.4", e5),
    registerVersion(w2, "4.7.4", "esm2017");
})();
// client/api/live-candle-subscription.ts
class LiveCandleSubscription {
  firestore;
  _unsubscribe = null;
  _lastUpdateTime = Date.now();
  _monitorInterval = null;
  _currentSymbol = null;
  _currentGranularity = null;
  _currentCallback = null;
  TIMEOUT_MS = 30000;
  _lastCheckTime = Date.now();
  constructor(firestore2) {
    this.firestore = firestore2;
    if (typeof document !== "undefined") {
      document.addEventListener(
        "visibilitychange",
        this.handleVisibilityChange.bind(this)
      );
    }
  }
  handleVisibilityChange() {
    if (document.visibilityState === "visible") {
      const now = Date.now();
      const timeSinceLastCheck = now - this._lastCheckTime;
      console.log(
        `Live: Page became visible after ${timeSinceLastCheck}ms, reconnecting...`
      );
      this.reconnect();
    }
  }
  checkConnection() {
    const timeSinceLastUpdate = Date.now() - this._lastUpdateTime;
    if (timeSinceLastUpdate > this.TIMEOUT_MS) {
      console.log(
        `Live: No updates for ${timeSinceLastUpdate}ms, reconnecting...`
      );
      this.reconnect();
    }
    this._lastCheckTime = Date.now();
  }
  startMonitoring() {
    this.stopMonitoring();
    this._lastCheckTime = Date.now();
    this._monitorInterval = setInterval(() => {
      this.checkConnection();
    }, 5000);
  }
  stopMonitoring() {
    if (this._monitorInterval) {
      clearInterval(this._monitorInterval);
      this._monitorInterval = null;
    }
  }
  reconnect() {
    console.log("Live: reconnect()", {
      _currentSymbol: this._currentSymbol,
      _currentGranularity: this._currentGranularity,
      _currentCallback: this._currentCallback,
    });
    if (
      this._currentSymbol &&
      this._currentGranularity &&
      this._currentCallback !== null
    ) {
      this.subscribe(
        this._currentSymbol,
        this._currentGranularity,
        this._currentCallback
      );
    }
  }
  subscribe(symbol, granularity, onUpdate) {
    console.log(
      `Live: subscribing to exchanges/coinbase/products/${symbol}/intervals/${granularity}`
    );
    this.unsubscribe();
    this._currentSymbol = symbol;
    this._currentGranularity = granularity;
    this._currentCallback = onUpdate;
    this._lastUpdateTime = Date.now();
    const docRef = doc(
      this.firestore,
      `exchanges/coinbase/products/${symbol}/intervals/${granularity}`
    );
    this._unsubscribe = onSnapshot(
      docRef,
      (snapshot) => {
        this._lastUpdateTime = Date.now();
        console.log("Live: Received snapshot:", snapshot.exists(), snapshot.id);
        if (snapshot.exists()) {
          const data = snapshot.data();
          const candle = {
            ...data,
            lastUpdate:
              data.lastUpdate instanceof Date
                ? data.lastUpdate
                : new Date(data.lastUpdate),
          };
          onUpdate(candle);
        } else {
          console.log(
            `Live: Document exchanges/coinbase/products/${symbol}/intervals/${granularity} does not exist`
          );
        }
      },
      (error) => {
        console.error(
          "Live: Error in live candle subscription:",
          error.code,
          error.message
        );
        setTimeout(() => this.reconnect(), 1000);
      }
    );
    this.startMonitoring();
  }
  unsubscribe() {
    if (this._unsubscribe) {
      this._unsubscribe();
      this._unsubscribe = null;
    }
    this.stopMonitoring();
    if (typeof document !== "undefined") {
      document.removeEventListener(
        "visibilitychange",
        this.handleVisibilityChange.bind(this)
      );
    }
  }
}

// client/api/firestore-client.ts
class FirestoreClient2 {
  firestore;
  constructor(firestore2) {
    this.firestore = firestore2;
    this.firestore = firestore2;
  }
  async getProducts(exchange, status) {
    try {
      const exchangesDoc = await getDoc(
        doc(this.firestore, "trading_pairs/exchanges")
      );
      if (!exchangesDoc.exists()) {
        console.error("Exchanges document not found");
        return [];
      }
      const data = exchangesDoc.data();
      const productsMap = data[exchange] || {};
      return Object.entries(productsMap)
        .filter(([_2, product]) => product.status === status)
        .map(([productId, product]) => ({
          id: productId,
          baseCurrency: product.base_currency,
          quoteCurrency: product.quote_currency,
          status: product.status,
          minSize: Number(product.min_size),
          maxSize: Number(product.max_size),
          lastUpdated: new Date(product.last_updated),
        }));
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  }
}

// client/config.ts
var config = {
  apiBaseUrl:
    { API_BASE_URL: "https://chart-api.spotcanvas.com" }.API_BASE_URL ||
    "http://localhost:8080",
};

// client/app.ts
class App {
  firestore;
  chartContainer = null;
  API_BASE_URL = config.apiBaseUrl;
  candleRepository;
  pendingFetches = new Set();
  liveCandleSubscription;
  state;
  firestoreClient;
  constructor(firestore2, state2) {
    this.firestore = firestore2;
    this.state = state2;
    this.chartContainer = document.querySelector("chart-container");
    this.candleRepository = new CandleRepository(this.API_BASE_URL);
    this.liveCandleSubscription = new LiveCandleSubscription(this.firestore);
    this.firestoreClient = new FirestoreClient2(this.firestore);
    this.initialize();
  }
  async initialize() {
    if (!this.chartContainer) {
      console.error("Chart container component not found");
      return;
    }
    this.chartContainer.addEventListener("chart-ready", this.handleChartReady);
    this.chartContainer.addEventListener("chart-pan", this.handlePan);
    this.chartContainer.addEventListener(
      "fetch-next-candle",
      this.handleFetchNextCandle
    );
    this.startLiveCandleSubscription("BTC-USD", "ONE_HOUR");
  }
  getInitialTimeRange() {
    const now = Date.now();
    const hourInMs = 60 * 60 * 1000;
    return {
      end: now + hourInMs,
      start: now - 300 * hourInMs,
    };
  }
  handleChartReady = async (event) => {
    console.log("handleChartReady event:", event);
    const timeRange = this.getInitialTimeRange();
    console.log("Initial fetch params:", {
      timeRange: {
        start: new Date(timeRange.start),
        end: new Date(timeRange.end),
      },
    });
    const candles = await this.candleRepository.fetchCandles({
      symbol: $547f11326d897190$export$966034e6c6823eb0["state.symbol"],
      granularity:
        $547f11326d897190$export$966034e6c6823eb0["state.granularity"],
      timeRange,
    });
    if (candles.size > 0) {
      console.log("Initial data fetched, number of candles:", candles.size);
      this.state.priceHistory = new SimplePriceHistory(
        $547f11326d897190$export$966034e6c6823eb0["state.granularity"],
        new Map(candles.entries())
      );
      const visibleCandles = this.chartContainer.calculateVisibleCandles();
      const timestamps = Array.from(candles.keys()).sort((a3, b4) => a3 - b4);
      const viewportEndTimestamp = timestamps[timestamps.length - 1];
      const viewportStartTimestamp =
        viewportEndTimestamp -
        visibleCandles * getCandleInterval(this.state.granularity);
      this.chartContainer.endTimestamp = viewportEndTimestamp;
      this.chartContainer.startTimestamp = viewportStartTimestamp;
      this.state.timeRange = {
        start: viewportStartTimestamp,
        end: viewportEndTimestamp,
      };
      this.state.priceRange = this.state.priceHistory.getPriceRange(
        viewportStartTimestamp,
        viewportEndTimestamp
      );
      console.log("App: priceRange", this.state.priceRange);
      if (this.chartContainer) {
        this.chartContainer.state = this.state;
      }
      const products = await this.firestoreClient.getProducts(
        "coinbase",
        "online"
      );
      console.log("App: products", products);
      this.chartContainer.products = products;
    }
    $547f11326d897190$export$d1203567a167490e("state.symbol", (_2) => {
      this.refetchData();
    });
    $547f11326d897190$export$d1203567a167490e("state.granularity", (_2) => {
      this.refetchData();
    });
    setTimeout(() => {
      const candleInterval = getCandleInterval(this.state.granularity);
      this.chartContainer.panTimeline(-1 * (candleInterval / 1000), 0.5);
    }, 1000);
  };
  async refetchData() {
    const newCandles = await this.fetchData(
      this.state.symbol,
      this.state.granularity,
      this.state.timeRange
    );
    if (newCandles) {
      this.state.priceHistory = new SimplePriceHistory(
        this.state.granularity,
        newCandles
      );
      this.state.priceRange = this.state.priceHistory.getPriceRange(
        this.state.timeRange.start,
        this.state.timeRange.end
      );
      this.chartContainer.state = this.state;
      this.chartContainer.draw();
      this.startLiveCandleSubscription(
        this.state.symbol,
        this.state.granularity
      );
    }
  }
  handlePan = async (event) => {
    console.log("handlePan event:", event);
    if (!this.chartContainer) return;
    const { timeRange, needMoreData } = event.detail;
    if (needMoreData && timeRange) {
      const rangeKey = `${timeRange.start}-${timeRange.end}`;
      if (this.pendingFetches.has(rangeKey)) {
        console.log("Already fetching range:", timeRange);
        return;
      }
      const newCandles = await this.fetchData(
        this.state.symbol,
        this.state.granularity,
        timeRange
      );
      if (newCandles) {
        this.state.priceHistory = new SimplePriceHistory(
          this.state.granularity,
          newCandles
        );
        this.chartContainer.state = this.state;
      }
    }
  };
  handleFetchNextCandle = async (event) => {
    console.log("handling fetch-next-candle event:", event);
    const { granularity, timeRange } = event.detail;
    const newCandles = await this.fetchData(
      this.state.symbol,
      granularity,
      timeRange
    );
    if (newCandles) {
      console.log("App: fetch-next-candle newCandles", newCandles);
      this.state.priceHistory = new SimplePriceHistory(granularity, newCandles);
      this.chartContainer.state = this.state;
    }
  };
  async fetchData(symbol, granularity, timeRange) {
    const candleCount = numCandlesInRange(
      granularity,
      timeRange.start,
      timeRange.end
    );
    const MAX_CANDLES = 300;
    const adjustedTimeRange =
      candleCount > MAX_CANDLES
        ? {
            start: timeRange.end - MAX_CANDLES * granularityToMs(granularity),
            end: timeRange.end,
          }
        : timeRange;
    const rangeKey = `${symbol}-${granularity}-${adjustedTimeRange.start}-${adjustedTimeRange.end}`;
    if (this.pendingFetches.has(rangeKey)) {
      console.log("App: Already fetching range:", timeRange, symbol);
      return Promise.resolve(null);
    }
    try {
      this.pendingFetches.add(rangeKey);
      console.log("App: fetching time range:", timeRange, symbol);
      this.state.loading = true;
      const candles = await this.candleRepository.fetchCandles({
        symbol,
        granularity,
        timeRange: adjustedTimeRange,
      });
      this.state.loading = false;
      return candles;
    } finally {
      this.pendingFetches.delete(rangeKey);
    }
  }
  startLiveCandleSubscription(symbol, granularity) {
    this.liveCandleSubscription.subscribe(
      symbol,
      granularity,
      async (liveCandle) => {
        if (this.chartContainer?.updateLiveCandle(liveCandle)) {
          this.state.liveCandle = liveCandle;
        }
      }
    );
  }
  async fetchGaps() {
    const gaps = this.state.priceHistory.getGaps(
      this.state.timeRange.start,
      this.state.timeRange.end
    );
    if (gaps.length === 0) {
      return;
    }
    console.log("App: gaps:", gaps);
    const results = await Promise.all(
      gaps.map((gap) =>
        this.fetchData(this.state.symbol, this.state.granularity, gap)
      )
    );
    const newCandles = results.pop();
    console.log("App: newCandles for gaps", newCandles);
    this.state.priceHistory = new SimplePriceHistory(
      this.state.granularity,
      new Map(newCandles)
    );
    if (this.chartContainer) {
      this.chartContainer.state = this.state;
    }
  }
  cleanup() {
    this.liveCandleSubscription.unsubscribe();
  }
}

// node_modules/firebase/app/dist/esm/index.esm.js
var name2 = "firebase";
var version2 = "11.0.1";
registerVersion(name2, version2, "app");

// client/index.ts
var chartState = {
  priceRange: new PriceRangeImpl(0, 100),
  priceHistory: new SimplePriceHistory("ONE_HOUR", new Map()),
  timeRange: { start: 0, end: 0 },
  liveCandle: null,
  canvasWidth: 0,
  canvasHeight: 0,
  symbol: "BTC-USD",
  granularity: "ONE_HOUR",
  loading: false,
};
var { state: state2 } = $7bb234cc8fd49201$export$95a552d2395ab4c4(
  {
    state: chartState,
  },
  true
);
window.app = state2;
var firebaseConfig = {
  projectId: "spotcanvas-prod",
  apiKey: "AIzaSyB6H5Fy06K_iiOjpJdU9xaR57Kia31ribM",
  authDomain: "spotcanvas-prod.firebaseapp.com",
};
var firebaseApp = initializeApp(firebaseConfig);
var firestore2 = getFirestore(firebaseApp);
window.addEventListener("DOMContentLoaded", () => {
  const chartApp = new App(firestore2, state2);
  window.addEventListener("pagehide", () => {
    chartApp.cleanup();
  });
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      chartApp.cleanup();
    }
    if (document.visibilityState === "visible") {
      chartApp.fetchGaps();
    }
  });
});
var container = document.querySelector(".chart-container");
if (container) {
  const chartContainerElement =
    $9e0c0b8784c80412$export$7a5d735b2ab6389d.chartContainer();
  chartContainerElement.state = state2;
  container.append(chartContainerElement);
}

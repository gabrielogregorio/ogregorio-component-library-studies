import React, { useState, useCallback, useEffect } from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/*! tailwindcss v3.3.2 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}html{-webkit-text-size-adjust:100%;font-feature-settings:normal;font-family:Helvetica,Roboto,Arial,sans-serif;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:Fira Code,ui-monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.static{position:static}.absolute{position:absolute}.relative{position:relative}.left-0{left:0}.top-0{top:0}.z-10{z-index:10}.z-20{z-index:20}.mb-\\[0\\.625rem\\]{margin-bottom:.625rem}.mb-\\[0px\\]{margin-bottom:0}.mb-\\[1rem\\]{margin-bottom:1rem}.mb-\\[21px\\]{margin-bottom:21px}.ml-\\[0\\.375rem\\]{margin-left:.375rem}.ml-\\[0\\.688rem\\]{margin-left:.688rem}.ml-\\[0\\.938rem\\]{margin-left:.938rem}.ml-\\[0px\\]{margin-left:0}.ml-\\[1\\.25rem\\]{margin-left:1.25rem}.ml-\\[1\\.75rem\\]{margin-left:1.75rem}.ml-\\[1rem\\]{margin-left:1rem}.mr-\\[0\\.375rem\\]{margin-right:.375rem}.mr-\\[0\\.625rem\\]{margin-right:.625rem}.mt-\\[0\\.625rem\\]{margin-top:.625rem}.flex{display:flex}.h-\\[0\\.063rem\\]{height:.063rem}.h-\\[15rem\\]{height:15rem}.h-\\[1rem\\]{height:1rem}.h-\\[5rem\\]{height:5rem}.h-auto{height:auto}.h-full{height:100%}.h-screen{height:100vh}.max-h-\\[100vh\\]{max-height:100vh}.min-h-\\[100vh\\]{min-height:100vh}.w-\\[0\\.063rem\\]{width:.063rem}.w-\\[0\\.5rem\\]{width:.5rem}.w-full{width:100%}.w-screen{width:100vw}.min-w-\\[100vw\\]{min-width:100vw}.max-w-\\[100vw\\]{max-width:100vw}.flex-1{flex:1 1 0%}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.animate-fadeIn{animation:fadeIn .2s ease-in-out}@keyframes fadeInDrop{0%{-webkit-backdrop-filter:blur(0);;backdrop-filter:blur(0);}to{-webkit-backdrop-filter:blur(30px);;backdrop-filter:blur(30px);}}.animate-fadeInDrop{animation:fadeInDrop .2s ease-in-out forwards}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-6{gap:1.5rem}.overflow-y-auto{overflow-y:auto}.whitespace-nowrap{white-space:nowrap}.break-words{overflow-wrap:break-word}.border{border-width:1px}.border-transparent{border-color:transparent}.bg-black\\/80{background-color:rgba(0,0,0,.8)}.bg-white\\/20{background-color:hsla(0,0%,100%,.2)}.bg-white\\/60{background-color:hsla(0,0%,100%,.6)}.object-cover{-o-object-fit:cover;object-fit:cover}.px-\\[0\\.875rem\\]{padding-left:.875rem;padding-right:.875rem}.px-\\[2rem\\]{padding-left:2rem;padding-right:2rem}.px-\\[70px\\]{padding-left:70px;padding-right:70px}.py-\\[0\\.438rem\\]{padding-bottom:.438rem;padding-top:.438rem}.py-\\[0\\.625rem\\]{padding-bottom:.625rem;padding-top:.625rem}.pb-\\[1rem\\]{padding-bottom:1rem}.pb-\\[50px\\]{padding-bottom:50px}.pt-\\[4\\.4rem\\]{padding-top:4.4rem}.pt-\\[70px\\]{padding-top:70px}.text-left{text-align:left}.font-roboto-Condensed{font-family:Roboto Condensed,sans-serif}.text-\\[1\\.25rem\\]{font-size:1.25rem}.text-\\[1\\.75rem\\]{font-size:1.75rem}.text-\\[1rem\\]{font-size:1rem}.text-\\[28px\\]{font-size:28px}.font-bold{font-weight:700}.font-normal{font-weight:400}.tracking-\\[10\\%\\]{letter-spacing:10%}.tracking-\\[5\\%\\]{letter-spacing:5%}.tracking-\\[7\\%\\]{letter-spacing:7%}.tracking-\\[9\\%\\]{letter-spacing:9%}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.text-white\\/40{color:hsla(0,0%,100%,.4)}.text-white\\/60{color:hsla(0,0%,100%,.6)}.line-through{text-decoration-line:line-through}.transition-all{transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-200{transition-duration:.2s}@import url(\"https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap\");@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\");.hover\\:border-white\\/60:hover{border-color:hsla(0,0%,100%,.6)}.hover\\:bg-black\\/30:hover{background-color:rgba(0,0,0,.3)}.group:hover .group-hover\\:text-white,.hover\\:text-white:hover{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}";
styleInject(css_248z,{"insertAt":"top"});

const ItemMainMenu = ({
  onClick,
  content
}) => {
  return React.createElement("button", {
    onClick: onClick,
    type: "button",
    className: "font-roboto-Condensed text-[1.25rem] tracking-[5%] mt-[0.625rem] mb-[0px] px-[0.875rem] py-[0.438rem] border border-transparent hover:border-white/60 text-white hover:bg-black/30"
  }, content);
};

const Button = ({
  iconLeft,
  iconRight,
  content,
  onClick,
  isRisked = false,
  isDisabled = false
}) => {
  const styleNormalAndDisabled = isDisabled ? 'text-white/40' : 'text-white';
  const styleIsRisked = isRisked ? 'line-through text-white/40' : styleNormalAndDisabled;
  return React.createElement("button", {
    onClick: () => {
      if (!isDisabled) {
        onClick();
      }
    },
    disabled: isDisabled,
    type: "button",
    className: `font-roboto-Condensed text-[1rem] tracking-[9%] mb-[0px] px-[0.875rem] py-[0.438rem] border border-transparent hover:border-white/60 hover:bg-black/30 flex items-center justify-center ${styleIsRisked}`
  }, iconLeft ? React.createElement("span", {
    className: "mr-[0.375rem]"
  }, iconLeft) : undefined, React.createElement("span", null, content), iconRight ? React.createElement("span", {
    className: "ml-[0.375rem]"
  }, iconRight) : undefined);
};

const ItemSimpleMenu = ({
  content,
  level = '0',
  isSelected = false,
  onClick
}) => {
  const marginByLevel = {
    '0': 'ml-[0px]',
    '1': 'ml-[1.75rem]'
  };
  const styleIsSelected = isSelected ? 'text-white' : 'text-white/60';
  return React.createElement("button", {
    type: "button",
    onClick: onClick,
    className: `font-roboto-Condensed text-[1.25rem] tracking-[5%] mb-[0px] px-[0.875rem] py-[0.438rem] border border-transparent hover:border-white/60 hover:text-white hover:bg-black/30 ${marginByLevel[level]} ${styleIsSelected}`
  }, content);
};

const Breadcrumb = ({
  screenTitle,
  onReturn
}) => {
  return React.createElement("div", {
    className: "flex justify-center items-center w-full"
  }, React.createElement("button", {
    onClick: () => onReturn(),
    type: "button",
    className: "text-[1.75rem] font-roboto-Condensed tracking-[10%] text-white/60 hover:text-white whitespace-nowrap"
  }, "IN\u00CDCIO"), React.createElement("div", {
    className: "ml-[1rem] w-[0.063rem] h-[1rem] bg-white/60"
  }), React.createElement("p", {
    className: "ml-[1rem] text-white text-[28px] tracking-[10%] font-normal whitespace-nowrap"
  }, screenTitle), React.createElement("div", {
    className: "ml-[1.25rem] h-[0.063rem] w-full bg-white/60"
  }));
};
const ReturnScreen = ({
  onReturn
}) => {
  return React.createElement("div", {
    className: "w-full"
  }, React.createElement("div", {
    className: "mb-[1rem] h-[0.063rem] w-full bg-white/60"
  }), React.createElement(Button, {
    iconLeft: React.createElement("svg", {
      width: "14",
      height: "14",
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      d: "M14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14C5.14349 14 3.36301 13.2625 2.05025 11.9497C0.737497 10.637 0 8.85652 0 7C0 5.14349 0.737497 3.36301 2.05025 2.05025C3.36301 0.737497 5.14349 0 7 0C8.85652 0 10.637 0.737497 11.9497 2.05025C13.2625 3.36301 14 5.14349 14 7ZM8.85117 9.97773C9.05898 9.86289 9.1875 9.64141 9.1875 9.40625V4.59375C9.1875 4.35586 9.05898 4.13711 8.85117 4.02227C8.64336 3.90742 8.3918 3.91016 8.18672 4.03594L4.24922 6.44219C4.05508 6.5625 3.93477 6.77305 3.93477 7.00273C3.93477 7.23242 4.05508 7.44297 4.24922 7.56328L8.18672 9.96953C8.38906 10.0926 8.64336 10.098 8.85117 9.9832V9.97773Z",
      fill: "white"
    })),
    content: "VOLTAR",
    onClick: onReturn
  }));
};
const LayoutScreen = ({
  children,
  bg,
  screenTitle,
  onReturn
}) => {
  return React.createElement("div", {
    className: "relative min-h-[100vh] min-w-[100vw] max-h-[100vh] max-w-[100vw] h-full w-full"
  }, React.createElement("div", {
    className: "absolute h-screen w-screen top-0 left-0 z-10"
  }, React.createElement("img", {
    src: bg,
    className: "min-w-[100vw] min-h-[100vh] max-w-[100vw] max-h-[100vh] object-cover w-full h-full",
    alt: ""
  })), React.createElement("div", {
    className: "absolute min-h-[100vh] min-w-[100vw] max-h-[100vh] max-w-[100vw] top-0 left-0 z-20 bg-black/80 animate-fadeInDrop transition-all duration-200 flex flex-col pt-[70px] px-[70px] pb-[50px]"
  }, React.createElement(Breadcrumb, {
    screenTitle: screenTitle,
    onReturn: onReturn
  }), React.createElement("div", {
    className: "flex-1 flex gap-6 animate-fadeIn pt-[4.4rem] pb-[1rem] w-full scrollbar overflow-y-auto"
  }, children), React.createElement(ReturnScreen, {
    onReturn: onReturn
  })));
};

const Text = ({
  content
}) => {
  return React.createElement("p", {
    className: "font-roboto-Condensed font-normal mb-[0.625rem] text-[1rem] text-white tracking-[7%] text-left"
  }, content);
};

const LinkExternal = ({
  href,
  icon,
  content,
  level = '0'
}) => {
  const marginByLevel = {
    '0': 'ml-[0px]',
    '1': 'ml-[1.75rem]'
  };
  return React.createElement("a", {
    target: "_blank",
    rel: "noreferrer",
    href: href,
    className: `break-words flex items-center py-[0.625rem] group ${marginByLevel[level]}`
  }, icon ? React.createElement("span", {
    className: "mr-[0.625rem]"
  }, icon) : undefined, React.createElement("span", {
    className: "font-roboto-Condensed text-[1rem] tracking-[5%] text-white/60 group-hover:text-white"
  }, content), React.createElement("span", {
    className: "ml-[0.688rem]"
  }, React.createElement("svg", {
    width: "8",
    height: "8",
    viewBox: "0 0 8 8",
    className: "w-[0.5rem] h-auto",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    d: "M6.85714 0C7.4875 0 8 0.5125 8 1.14286V6.85714C8 7.4875 7.4875 8 6.85714 8H1.14286C0.5125 8 0 7.4875 0 6.85714V1.14286C0 0.5125 0.5125 0 1.14286 0H6.85714ZM5.71429 5.025V2.57143C5.71429 2.41429 5.58571 2.28571 5.42857 2.28571H2.975C2.75179 2.28571 2.57143 2.46607 2.57143 2.68929C2.57143 2.79643 2.61429 2.9 2.68929 2.975L3.28571 3.57143L2.10179 4.75536C2.03571 4.82143 2 4.90893 2 5C2 5.09107 2.03571 5.17857 2.10179 5.24464L2.75714 5.9C2.82143 5.96429 2.90893 6.00179 3.00179 6.00179C3.09464 6.00179 3.18036 5.96607 3.24643 5.9L4.42857 4.71429L5.025 5.31071C5.1 5.38571 5.20357 5.42857 5.31071 5.42857C5.53393 5.42857 5.71429 5.24821 5.71429 5.025Z",
    fill: "white",
    "fill-opacity": "0.72"
  }))));
};

const TitleSimpleMenu = ({
  content
}) => {
  return React.createElement("div", {
    className: "w-full flex justify-between items-center mb-[21px]"
  }, React.createElement("button", {
    type: "button",
    className: "text-white font-roboto-Condensed font-normal text-[1.25rem] tracking-[5%] mb-[0px] text-left"
  }, content), React.createElement("div", {
    className: "flex-1 ml-[0.938rem] h-[0.063rem] w-full bg-white/20"
  }));
};

const TitleText = ({
  content
}) => {
  return React.createElement("p", {
    className: "font-roboto-Condensed font-bold text-[1rem] text-white tracking-[7%] "
  }, content);
};

const GridDefault = ({
  left,
  right
}) => {
  return React.createElement("div", {
    className: "flex flex-1 w-full"
  }, React.createElement("div", {
    className: "flex-1 overflow-y-auto scrollbar"
  }, React.createElement("div", null, left), React.createElement("div", {
    className: "h-[5rem]"
  })), React.createElement("div", {
    className: "flex-1 overflow-y-auto scrollbar px-[2rem]"
  }, React.createElement("div", null, right), React.createElement("div", {
    className: "h-[15rem]"
  })));
};

const FirstLevelMenu = ({
  children
}) => {
  return React.createElement("div", {
    className: "ml-[1.75rem]"
  }, children);
};

const useAudio = src => {
  const audioItem = new Audio(src);
  console.log('SRC ITEMS ', src);
  const play = () => {
    audioItem.volume = 0.2;
    audioItem.play();
  };
  return {
    play
  };
};

const TIME_IN_MS = 2000;
const useCopyToClipboard = () => {
  const [isCopied, setCopied] = useState(false);
  const copy = useCallback(text => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), TIME_IN_MS);
    })
    // eslint-disable-next-line no-console
    .catch(err => console.error('Error on copy text ', err));
  }, []);
  return {
    isCopied,
    copy
  };
};

const useHandleKeyboard = onPressKey => {
  useEffect(() => {
    const handleKeyDown = event => {
      onPressKey(event.key);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
};

const useOutsideClick = ref => {
  const [clickedOutside, setClickedOutside] = useState(false);
  useEffect(() => {
    const handleClickOutside = event => {
      const referencesContainTarget = () => !(ref.current && ref.current.contains(event.target));
      const clickedOutsideReference = ref.current && referencesContainTarget() || false;
      setClickedOutside(clickedOutsideReference);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref.current]);
  return {
    clickedOutside
  };
};

/* eslint-disable no-console */
const useReadFromClipboard = () => {
  const readClipboard = useCallback(async () => {
    return navigator.clipboard.readText().then(text => text).catch(err => {
      console.error('Could not read clipboard: ', err);
      return '';
    });
  }, []);
  return {
    readClipboard
  };
};

function brlToNumber(input) {
  let onlyNumbersAndSemiColons = input.replace(/[^0-9,]/g, '');
  onlyNumbersAndSemiColons = onlyNumbersAndSemiColons.replace(',', '.');
  const valor = Number(onlyNumbersAndSemiColons);
  if (Number.isNaN(valor)) {
    throw new Error(`A input is not valid, '${input}'`);
  }
  return valor;
}

const generateId = () => {
  return new Date().getTime().toString();
};

class StorageService {
  static setItem(key, value) {
    localStorage.setItem(key, value);
  }
  static getItem(key) {
    return localStorage.getItem(key) || undefined;
  }
  static removeItem(key) {
    localStorage.removeItem(key);
  }
  static clear() {
    localStorage.clear();
  }
  static getItemAndParse(key) {
    try {
      const item = localStorage.getItem(key) || undefined;
      if (item === undefined) {
        return undefined;
      }
      return JSON.parse(item);
    } catch (error) {
      return undefined;
    }
  }
}

const downloadFile = (content, filename, blobOptions) => {
  try {
    const dataBlob = new Blob([content], blobOptions);
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.download = filename;
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
    return true;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error on download file ${error}`);
    return false;
  }
};

export { Button, FirstLevelMenu, GridDefault, ItemMainMenu, ItemSimpleMenu, LayoutScreen, LinkExternal, StorageService, Text, TitleSimpleMenu, TitleText, brlToNumber, downloadFile, generateId, useAudio, useCopyToClipboard, useHandleKeyboard, useOutsideClick, useReadFromClipboard };
//# sourceMappingURL=ogregorio-component-library-studies.esm.js.map

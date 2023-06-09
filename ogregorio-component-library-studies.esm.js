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

var css_248z = "/*! tailwindcss v3.3.2 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}html{-webkit-text-size-adjust:100%;font-feature-settings:normal;font-family:Helvetica,Roboto,Arial,sans-serif;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:Fira Code,ui-monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.mx-\\[24px\\]{margin-left:24px;margin-right:24px}.ml-\\[120px\\]{margin-left:120px}.ml-\\[160px\\]{margin-left:160px}.ml-\\[200px\\]{margin-left:200px}.ml-\\[40px\\]{margin-left:40px}.ml-\\[48px\\]{margin-left:48px}.ml-\\[80px\\]{margin-left:80px}.mt-\\[12px\\]{margin-top:12px}.mt-\\[26px\\]{margin-top:26px}.flex{display:flex}.h-\\[25px\\]{height:25px}.h-\\[2px\\]{height:2px}.w-\\[2px\\]{width:2px}.flex-1{flex:1 1 0%}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.animate-fadeIn{animation:fadeIn .2s ease-in-out}.items-center{align-items:center}.bg-white\\/70{background-color:hsla(0,0%,100%,.7)}.text-left{text-align:left}.font-roboto{font-family:Roboto,sans-serif}.text-\\[1rem\\]{font-size:1rem}.text-\\[24px\\]{font-size:24px}.text-\\[26px\\]{font-size:26px}.text-\\[28px\\]{font-size:28px}.text-\\[2rem\\]{font-size:2rem}.text-\\[32px\\]{font-size:32px}.font-normal{font-weight:400}.tracking-\\[0\\%\\]{letter-spacing:0}.tracking-\\[10\\%\\]{letter-spacing:10%}.tracking-\\[12\\%\\]{letter-spacing:12%}.tracking-\\[5\\%\\]{letter-spacing:5%}.tracking-\\[7\\%\\]{letter-spacing:7%}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.text-white\\/70{color:hsla(0,0%,100%,.7)}.line-through{text-decoration-line:line-through}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-150,.transition-all{transition-duration:.15s}@import url(\"https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap\");@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\");.group:hover .group-hover\\:text-white,.hover\\:text-white:hover{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}";
styleInject(css_248z,{"insertAt":"top"});

var TextVariantEnum;
(function (TextVariantEnum) {
  TextVariantEnum["default"] = "font-roboto-Condensed font-normal text-[2rem] tracking-[0%]";
  TextVariantEnum["titleBreacrumb"] = "font-roboto-Condensed font-normal text-[32px] tracking-[10%]";
  TextVariantEnum["button"] = "font-roboto-Condensed font-normal text-[24px] tracking-[10%]";
  TextVariantEnum["mainMenu"] = "font-roboto-Condensed font-normal text-[28px] tracking-[7%]";
  TextVariantEnum["basicItemMenu"] = "font-roboto-Condensed font-normal text-[28px] tracking-[5%]";
  TextVariantEnum["textTitle"] = "font-roboto-Condensed font-normal text-[26px] tracking-[12%]";
  TextVariantEnum["textDescription"] = "font-roboto-Condensed font-normal text-[24px] tracking-[12%]";
})(TextVariantEnum || (TextVariantEnum = {}));
const Text = ({
  children,
  variant = TextVariantEnum.default,
  isActive = false,
  isDone = false
}) => {
  const styleOnActive = isActive ? 'text-white' : 'text-white/70';
  const styleIsDone = isDone ? 'line-through ' : '';
  return React.createElement("span", {
    className: `${styleOnActive} ${styleIsDone} hover:text-white group-hover:text-white transition-all text-left duration-150 ${variant}`
  }, children);
};

const ButtonWithSound = ({
  content,
  isActive = false,
  isDone = false,
  onClick = () => {},
  variant = undefined
}) => {
  // const clickSound = useAudio(ClickSound);
  // const hoverSound = useAudio(HoverSound);
  const handleMouseEnter = () => {
    // hoverSound.play();
  };
  const handleClick = () => {
    onClick();
    // clickSound.play();
  };

  return React.createElement("button", {
    onMouseEnter: handleMouseEnter,
    onClick: handleClick,
    type: "button"
  }, React.createElement(Text, {
    variant: variant,
    isActive: isActive,
    isDone: isDone
  }, content));
};

const Breadcrumb = ({
  content,
  onReturns = () => {}
}) => {
  return React.createElement("div", {
    className: "flex items-center animate-fadeIn"
  }, React.createElement(ButtonWithSound, {
    onClick: () => onReturns(),
    variant: TextVariantEnum.titleBreacrumb,
    content: "INICIO"
  }), React.createElement("div", {
    className: "h-[25px] w-[2px] bg-white/70 mx-[24px]"
  }), React.createElement(Text, {
    variant: TextVariantEnum.titleBreacrumb
  }, content), React.createElement("div", {
    className: "flex-1 bg-white/70 h-[2px] ml-[48px]"
  }));
};

const NavigationLevel = ({
  children,
  level
}) => {
  const styleLevels = {
    1: 'ml-[40px]',
    2: 'ml-[80px]',
    3: 'ml-[120px]',
    4: 'ml-[160px]',
    5: 'ml-[200px]'
  };
  return React.createElement("div", {
    className: styleLevels[level]
  }, children);
};

const NavigationSpace = ({
  children = undefined
}) => {
  return React.createElement("div", {
    className: "mt-[26px]"
  }, children);
};

const TextLarge = ({
  children
}) => {
  return React.createElement("p", {
    className: "text-white font-roboto text-[1rem] font-normal mt-[12px] text-left"
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

export { Breadcrumb, ButtonWithSound, NavigationLevel, NavigationSpace, Text, TextLarge, TextVariantEnum, useAudio, useCopyToClipboard, useHandleKeyboard, useOutsideClick, useReadFromClipboard };
//# sourceMappingURL=ogregorio-component-library-studies.esm.js.map

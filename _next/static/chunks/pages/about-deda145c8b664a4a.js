(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[521],{

/***/ 10512:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/about",
      function () {
        return __webpack_require__(24384);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 51099:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/media/cl-min.7fec9986.jpg","height":140,"width":140,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAAL/2gAMAwEAAhADEAAAAKBT/8QAHRAAAgEEAwAAAAAAAAAAAAAAAQMFAAIEEhQzQv/aAAgBAQABPwBrIsSKMrmoAO6zfv6A66//xAAXEQADAQAAAAAAAAAAAAAAAAAAAkFx/9oACAECAQE/AFun/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAJCIf/aAAgBAwEBPwB4yT//2Q==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 64892:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(14924);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85050);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61953);
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(47937);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60313);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(326);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21023);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20784);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(29630);












const drawerWidth = 240;
const navItems = [
    {
        label: "SHOP",
        href: "https://mvphub.app/",
        isShop: true
    },
    {
        label: "BLOG",
        href: "/blog"
    },
    {
        label: "ABOUT",
        href: "/about"
    }
];
const styles = {
    navLink: {
        color: "black",
        fontFamily: "Raleway",
        textDecoration: "none"
    },
    aboutLink: {
        marginLeft: 15
    },
    learn: {
        backgroundColor: "#0069d9",
        color: "white",
        padding: 10,
        borderRadius: 2
    },
    menuLinkItem: {
        color: "black",
        fontFamily: "Raleway",
        textDecoration: "none",
        paddingBottom: 20
    }
};
class NavbarFixed extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }
    resize() {
        this.setState({
            isMobile: window.innerWidth <= 760
        });
    }
    handleStateChange(state) {
        this.setState({
            menuOpen: state.isOpen
        });
    }
    closeMenu() {
        this.setState({
            menuOpen: false
        });
    }
    toggleMenu() {
        this.setState({
            menuOpen: !this.state.menuOpen
        });
    }
    renderIconElementRight() {
        const { showRightItems  } = this.props;
        if (!showRightItems) return null;
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            sx: {
                display: {
                    xs: "none",
                    sm: "block"
                }
            },
            children: navItems.map((item)=>{
                if (item.isShop) {
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: item.href,
                        target: "_blank",
                        style: {
                            ...styles.navLink,
                            ...styles.learn
                        },
                        children: item.label
                    }, item.href);
                } else {
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: item.href,
                        style: {
                            ...styles.navLink,
                            ...styles.aboutLink
                        },
                        children: item.label
                    }, item.href);
                }
            })
        });
    }
    renderTitle() {
        const { title , canGoBack , backToUrl  } = this.props;
        const toUrl = backToUrl || "/";
        let newTitle = title;
        const nameColor = "#0069d9";
        if (title === "CHIN LOONG TAN") {
            newTitle = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                        style: {
                            color: nameColor
                        },
                        children: "CHIN LOONG"
                    }),
                    " TAN"
                ]
            });
        }
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: toUrl,
            style: styles.navLink,
            className: "",
            children: newTitle
        });
    }
    renderIconElementLeft() {
        const { canGoBack , backToUrl , onPress  } = this.props;
        if (!canGoBack) {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                "aria-label": "open drawer",
                edge: "start",
                onClick: ()=>this.handleDrawerToggle(),
                sx: {
                    mr: 2,
                    display: {
                        sm: "none"
                    }
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
            });
        }
        if (onPress) {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                // color="inherit"
                "aria-label": "back",
                edge: "start",
                onClick: onPress,
                sx: {
                    color: "black"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
            });
        }
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: backToUrl,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                // color="inherit"
                "aria-label": "back",
                edge: "start",
                // onClick={onPress}
                sx: {
                    color: "black"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
            })
        });
    }
    render() {
        const { backToUrl , canGoBack  } = this.props;
        const { window: window1  } = this.props;
        const container = window1 !== undefined ? ()=>window1().document.body : undefined;
        const drawer = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            onClick: ()=>this.handleDrawerToggle(),
            sx: {
                textAlign: "center"
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                style: {
                    listStyle: "none",
                    marginTop: 20,
                    padding: 0
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                        className: "uppercase py-1",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/",
                            children: "Home"
                        })
                    }),
                    navItems.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                            className: "uppercase py-1",
                            children: !!item.isShop ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: item.href,
                                target: "_blank",
                                children: item.label
                            }, item.href) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: item.href,
                                children: item.label
                            }, item.href)
                        }, item.href))
                ]
            })
        });
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "custom-nav",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                sx: {
                    display: "flex"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        component: "nav",
                        style: {
                            backgroundColor: "white"
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            children: [
                                this.renderIconElementLeft(),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    variant: "h6",
                                    component: "div",
                                    sx: {
                                        flexGrow: 1,
                                        display: {
                                            sm: "block"
                                        }
                                    },
                                    children: this.renderTitle()
                                }),
                                this.renderIconElementRight()
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        component: "nav",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP, {
                            container: container,
                            variant: "temporary",
                            open: this.state.mobileOpen,
                            onClose: ()=>this.handleDrawerToggle(),
                            ModalProps: {
                                keepMounted: true
                            },
                            sx: {
                                display: {
                                    xs: "block",
                                    sm: "none"
                                },
                                "& .MuiDrawer-paper": {
                                    boxSizing: "border-box",
                                    width: drawerWidth
                                }
                            },
                            children: drawer
                        })
                    })
                ]
            })
        });
    }
    constructor(...args){
        super(...args);
        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(this, "state", {
            menuOpen: false,
            isMobile: false,
            mobileOpen: false
        });
        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(this, "handleDrawerToggle", ()=>{
            // setMobileOpen(!mobileOpen);
            this.setState({
                mobileOpen: !this.state.mobileOpen
            });
        });
    }
}
/* harmony default export */ __webpack_exports__["Z"] = (NavbarFixed);


/***/ }),

/***/ 24384:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ about_About; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/components/NavbarFixed/index.js
var NavbarFixed = __webpack_require__(64892);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/AboutMe/index.js



const AboutMe_images = {
    avatar: __webpack_require__(51099)
};
const styles = {
    container: {},
    content: {
        maxWidth: 640,
        marginTop: 10
    }
};
class About extends react.Component {
    render() {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "flex flex-col items-center py-8 px-4",
            style: styles.container,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "avatar-container",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)((image_default()), {
                        alt: "avatar",
                        src: AboutMe_images.avatar,
                        style: {
                            width: 120,
                            height: 120,
                            borderRadius: 120
                        }
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    style: styles.content,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                        "Hi, I'm Chin Loong, a React Native developer from Klang, Malaysia.",
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                        "With a passion for coding and a focus on delivering high-quality applications, I have been honing my skills in mobile app development for more than 6 years.",
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                        "As a React Native developer, I specialize in building mobile applications for iOS and Android platforms, leveraging the latest technologies to deliver seamless user experiences.",
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                        "In my previous roles, I have worked on a wide range of projects, including e-commerce apps, social networking platforms, and healthcare applications. My experience in working with cross-functional teams and agile methodologies has equipped me with the ability to collaborate effectively with designers, project managers, and other developers to deliver successful projects.",
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                        "Aside from coding, I enjoy staying up-to-date with the latest technologies and exploring new coding techniques. When I'm not coding, you can find me exploring new places or trying out new cuisines. I am always eager to take on new challenges and push the limits of what's possible with mobile app development.",
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                        "Finally, welcome to my website where I blog about app development with React Native."
                    ]
                })
            ]
        });
    }
}
/* harmony default export */ var AboutMe = (About);

;// CONCATENATED MODULE: ./src/pages/about.js




function about_About() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "blog-posts content",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(NavbarFixed/* default */.Z, {
                title: "ABOUT",
                canGoBack: true,
                backToUrl: "/"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(AboutMe, {})
        ]
    });
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [856,675,774,888,179], function() { return __webpack_exec__(10512); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
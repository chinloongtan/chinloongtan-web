(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[918],{

/***/ 63131:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/apps/ktmbuddy/privacy-policy",
      function () {
        return __webpack_require__(90778);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 1573:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14924);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75980);
/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_utils_GA__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35102);
/* harmony import */ var _lib_constants_me__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94382);






// const brandColors = {
//   linkedIn: '#0077B5',
//   facebook: '#3b5998',
// };
const myLinkedIn = "https://www.linkedin.com/in/chinloongtan";
class Footer extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    render() {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
            className: "p-4 md:p-8 lg:p-16",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", {
                            className: "text-xl mb-4",
                            children: "Contact me via:"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            href: myLinkedIn,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            onClick: ()=>_lib_utils_GA__WEBPACK_IMPORTED_MODULE_3__/* ["default"].trackLinkEvent */ .Z.trackLinkEvent(myLinkedIn),
                            style: {
                                color: "white"
                            },
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    name: "linkedin-square",
                                    // size="2x"
                                    style: {
                                        width: 45,
                                        fontSize: 35,
                                        color: "white"
                                    }
                                }),
                                "chinloongtan"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: "",
                            style: {
                                marginBottom: 0,
                                color: "white"
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                href: _lib_constants_me__WEBPACK_IMPORTED_MODULE_4__/* ["default"].mailto */ .Z.mailto,
                                onClick: ()=>_lib_utils_GA__WEBPACK_IMPORTED_MODULE_3__/* ["default"].trackLinkEvent */ .Z.trackLinkEvent("contactEmail"),
                                style: {
                                    color: "white"
                                },
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        name: "envelope-open-o",
                                        // size="2x"
                                        style: {
                                            width: 45,
                                            fontSize: 30,
                                            color: "white",
                                            marginTop: 15,
                                            marginBottom: 15
                                        }
                                    }),
                                    _lib_constants_me__WEBPACK_IMPORTED_MODULE_4__/* ["default"].email */ .Z.email
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mt-6 md:mt-16",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", {
                            className: "text-xl mb-4",
                            children: "Or Buy Me A Coffee:"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            href: "https://www.buymeacoffee.com/chinloongtan",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            onClick: ()=>_lib_utils_GA__WEBPACK_IMPORTED_MODULE_3__/* ["default"].trackLinkEvent */ .Z.trackLinkEvent("https://www.buymeacoffee.com/chinloongtan"),
                            style: {
                                color: "white"
                            },
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    name: "coffee",
                                    style: {
                                        width: 45,
                                        fontSize: 30,
                                        color: "white"
                                    }
                                }),
                                "chinloongtan"
                            ]
                        })
                    ]
                })
            ]
        });
    }
    constructor(...args){
        super(...args);
        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(this, "state", {
            isLinkedInActive: false,
            isFacebookActive: false
        });
    }
}
/* harmony default export */ __webpack_exports__["Z"] = (Footer);


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

/***/ 94382:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
const email = "me@chinloongtan.com";
/* harmony default export */ __webpack_exports__["Z"] = ({
    email,
    mailto: "mailto:".concat(email, "?body=Hi Chin Loong,\n")
});


/***/ }),

/***/ 35102:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_ga4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49089);

react_ga4__WEBPACK_IMPORTED_MODULE_0__/* ["default"].initialize */ .ZP.initialize("G-2J1P67RRYC");
const GA = {
    trackLinkEvent () {
        let label = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
        react_ga4__WEBPACK_IMPORTED_MODULE_0__/* ["default"].event */ .ZP.event({
            category: "Link",
            action: "click",
            label
        });
    }
};
/* harmony default export */ __webpack_exports__["Z"] = (GA);


/***/ }),

/***/ 90778:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ privacy_policy; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/components/Footer/index.js
var Footer = __webpack_require__(1573);
// EXTERNAL MODULE: ./src/components/NavbarFixed/index.js
var NavbarFixed = __webpack_require__(64892);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
var head_default = /*#__PURE__*/__webpack_require__.n(head);
;// CONCATENATED MODULE: ./src/components/KTMbuddy/PrivacyPolicy.js





class App extends react.Component {
    render() {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            id: "app",
            className: "content",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("title", {
                            children: "KTM Buddy Privacy Policy"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                            name: "title",
                            content: "KTM Buddy Privacy Policy"
                        }, "title"),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                            name: "description",
                            content: ""
                        }, "description")
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(NavbarFixed/* default */.Z, {
                    title: "KTM Buddy - Privacy Policy"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    style: {
                        padding: "20px"
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "c0",
                            id: "h.gjdgxs",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "c2 c5 c6",
                                children: "Privacy Policy"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "c0",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "c5 c7",
                                children: "General"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                            className: "c0",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "c3",
                                    children: "Respecting and protecting our customers’ privacy and personal data is important to the KTMBuddy ("
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "c5",
                                    children: "“we”"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "c3",
                                    children: "\xa0or\xa0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "c5",
                                    children: "“us”"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                    className: "c3",
                                    children: [
                                        "). This Privacy Policy will help you to understand how we collect, use and safeguard your personal data in our interactions with you.\xa0",
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                        'Throughout this Privacy Policy, the term "personal data" means any data relating directly or indirectly to you, from which it is practicable for your identity to be directly or indirectly ascertained, and in a form in which access to or processing of the data is practicable.\xa0',
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                        "By visiting KTM Buddy, (the\xa0"
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "c5",
                                    children: "“Mobile App”"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                    className: "c1 c2",
                                    children: [
                                        ") or providing us with your personal data via other means, you agree that we will collect, use and store your personal data in accordance with this Privacy Policy, as amended from time to time. This Privacy Policy is incorporated into and forms part of our Terms and Conditions.\xa0",
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                        "We regularly review this Privacy Policy and may from time to time revise it by updating this page. By continuing to use our services through the Mobile App after any amendments to this Privacy Policy, you are agreeing to this Privacy Policy as revised, so please visit this page periodically for updates.",
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {})
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "c0",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "c7 c5",
                                children: "Your Personal Information and How We Use It"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "c0",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                className: "c1 c2",
                                children: [
                                    "Collection of your Personal Data",
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                    "We collect, use and store your personal data to ensure we can provide various services to you and offer you a personal experience online. This may occur on our Mobile App or via other means. We will keep your personal data confidential at all times and only collect, use and store it in accordance with this Privacy Policy.\xa0",
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                    "Different types of personal data may be collected by us on our Mobile App.",
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {})
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "c0",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "c7 c5",
                                children: "Use of Your Personal Data"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                            className: "c0",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "c3",
                                    children: "We use the personal data you provide to us for the following purposes (and any purposes directly related to these purposes) (collectively, the\xa0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "c5",
                                    children: "“Purposes”"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "c1 c2",
                                    children: "):"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                            className: "c9 lst-kix_list_1-0 start",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                    className: "c8",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "c1 c2",
                                        children: "To provide our services to you (including assessing any application for and administration of such services). This includes responding to any questions you may have, assessing your applications with us for any of our services."
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                    className: "c8",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "c1 c2",
                                        children: "To match your personal data with information you provided to us via other means; and"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                    className: "c8",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "c1 c2",
                                        children: "To analyse trends and usage with us (whether on an individualised or aggregated basis), which helps us better understand how you and our collective customer base access and use our Mobile App and services, for the purposes of improving our services and responding to customer desires and preferences. For these purposes, we will use personal data about your gender, age, interests, geographical location, site usage and other personal data."
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "c10",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "c1 c2"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "c0",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "c7 c5",
                                children: "Collection of Anonymous Data from You"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "c0",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                className: "c1 c2",
                                children: [
                                    "Separately, we may collect certain other data from you on our Mobile App:\xa0",
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                    "We automatically collect data relating to your online session to provide our services to you, to gather statistical information on our server’s usage and to help us better meet your demands and expectations.",
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                    "We also use functionality that sets a unique identifier to track your use of our Mobile App across multiple devices so that your sessions are reported on our system as a single user rather than as multiple users.\xa0",
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {})
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "c0",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "c7 c5",
                                children: "Ads"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "c0",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                className: "c1 c2",
                                children: [
                                    "We will display ads from third party provider, including but not limited to Admob, Google AdSense. As a result of ads serving, cookies or ther technologies may be used to collect information.",
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {})
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "c0",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "c7 c5",
                                children: "Our Contact Details"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "c0",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "c1 c2",
                                children: "If you wish to contact us regarding this Privacy Policy (including in relation to any of your rights under this Privacy Policy or any other questions you may have), please contact our Privacy Officer via:\xa0"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                            className: "c9 lst-kix_list_5-0 start",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                className: "c11",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "c1",
                                        children: "email, to "
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "c3",
                                        children: "me@chinloongtan.com"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "c0 c13",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "c1 c2"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "c4",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "c1 c2"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Footer/* default */.Z, {})
            ]
        });
    }
}
/* harmony default export */ var PrivacyPolicy = (App);

;// CONCATENATED MODULE: ./src/pages/apps/ktmbuddy/privacy-policy.js



const KTMBuddy = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(PrivacyPolicy, {});
};
/* harmony default export */ var privacy_policy = (KTMBuddy);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [856,674,774,888,179], function() { return __webpack_exec__(63131); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
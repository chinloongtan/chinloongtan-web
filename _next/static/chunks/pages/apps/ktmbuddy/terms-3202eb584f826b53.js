(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[547],{

/***/ 12102:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/apps/ktmbuddy/terms",
      function () {
        return __webpack_require__(33980);
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

/***/ 33980:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ terms; }
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
;// CONCATENATED MODULE: ./src/components/KTMbuddy/Terms.js





class App extends react.Component {
    render() {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            id: "app",
            className: "content",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("title", {
                            children: "KTM Buddy Terms of Use"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                            name: "title",
                            content: "KTM Buddy Terms of Use"
                        }, "title"),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                            name: "description",
                            content: ""
                        }, "description")
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(NavbarFixed/* default */.Z, {
                    title: "KTM Buddy - Terms of Use"
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
                                children: "Terms of Use"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "c0",
                            children: 'This mobile app ("KTMBuddy", the “Mobile App”), is available to you on the condition that you accept without modification the terms, conditions and notices contained herein. Please read these terms and conditions carefully before using the Mobile App. By using the Mobile App or any part of it, including purchasing products and services, you agree that you have read these terms and conditions and that you accept and agree to be bound by them.'
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "c0",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "c7 c5",
                                children: "Definitions"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "c0",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "c3",
                                children: "The following defined terms have the following meanings within the terms and conditions:"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                            className: "c9 lst-kix_list_1-0 start",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                    className: "c8",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "c1 c2",
                                        children: '"Mobile App" means the KTMBuddy.'
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                    className: "c8",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "c1 c2",
                                        children: '"Service" means the timetable browsing and any other future features or experiences we provide, including the use of applications and software.'
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                    className: "c8",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "c1 c2",
                                        children: '"Message(s)" means any communications between the Parties transmitted by any of the following means: through the Mobile App, Customer Services Hotline, emails, Online Instant Chat, and Online Enquiry Form.'
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
                                children: "General"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                            className: "c9 lst-kix_list_1-0 start",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                    className: "c8",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "c1 c2",
                                        children: "The Mobile App is a operated to provide timetable information for commuters using the KTM train transportation in Malaysia."
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                    className: "c8",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "c1 c2",
                                        children: "All information displayed are available on KTMB Berhad official website."
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "c0",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "c7 c5",
                                children: "Liability"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                            className: "c9 lst-kix_list_1-0 start",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                    className: "c8",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "c1 c2",
                                        children: "We acts merely as a provider, providing an application allowing you to check train timetable. We therefore has no control whatsoever over the availability, quality, legality, safety or accuracy of the time display."
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                    className: "c8",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "c1 c2",
                                        children: "We are not responsible and shall not be liable for any hyperlink to any other website. "
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                    className: "c8",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "c1 c2",
                                        children: "We shall not be liable in any way for any damages, losses, costs, expenses, liabilities or compensation, whether direct or indirect, which arise from or are in connection with your access and use of the Mobile App."
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "c0",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "c7 c5",
                                children: "Data Protection"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                            className: "c0",
                            children: [
                                "When using the Mobile App, you agree that we can store, process and use the data you provide. We are committed to safeguarding the privacy of all individuals with respect to their personal data. We therefore make sure that our policies and practices in relation to the collection, use, retention, transfer and access of personal data comply with the requirements of the Personal Data Protection Act 2010 under the laws of Malaysia. Please refer to our Privacy Policy.",
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                "In case of any dispute between the Parties in respect of or in connection with these terms and conditions, our determination shall be final and binding."
                            ]
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
/* harmony default export */ var Terms = (App);

;// CONCATENATED MODULE: ./src/pages/apps/ktmbuddy/terms.js



const KTMBuddy = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Terms, {});
};
/* harmony default export */ var terms = (KTMBuddy);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [856,674,774,888,179], function() { return __webpack_exec__(12102); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
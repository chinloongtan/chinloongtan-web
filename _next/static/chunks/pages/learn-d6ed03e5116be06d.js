(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[128],{

/***/ 92036:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/learn",
      function () {
        return __webpack_require__(14013);
      }
    ]);
    if(false) {}
  

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

/***/ 14013:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ About; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/components/NavbarFixed/index.js
var NavbarFixed = __webpack_require__(64892);
// EXTERNAL MODULE: ./node_modules/@swc/helpers/src/_define_property.mjs
var _define_property = __webpack_require__(14924);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Learn/index.js




const styles = {
    container: {
        display: "flex",
        flexDirection: "column"
    },
    content: {
        color: "white",
        display: "flex",
        flex: 1,
        alignItems: "center"
    },
    rocket: {},
    flexify: {},
    form: {
        paddingTop: 40
    }
};
class Landing extends react.Component {
    renderForm() {
        if (this.state.subscribed) {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "col-12 col-sm-7",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    style: {
                        paddingBottom: 10
                    },
                    className: "form-group",
                    style: styles.form,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("i", {
                            className: "fa fa-check-circle fa-fw fa-1x",
                            style: {
                                color: "#4BB543",
                                paddingRight: 10
                            }
                        }),
                        "Subscribed"
                    ]
                })
            });
        } else {
            return /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                className: "col-12 col-sm-7",
                id: "form",
                style: styles.form,
                onSubmit: (e)=>{
                    const email = e.target.elements["email"].value;
                    const resetForm = ()=>{
                        document.getElementById("form").reset();
                    };
                    fetch("https://fu4yuz4nk8.execute-api.ap-southeast-1.amazonaws.com/default/chinloongtan-web-lambda", {
                        method: "POST",
                        body: JSON.stringify({
                            email: email
                        }),
                        mode: "no-cors"
                    }).then(()=>{
                        resetForm();
                        this.setState({
                            subscribed: true
                        });
                    }).catch(()=>{
                        resetForm();
                    });
                    e.preventDefault();
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "form-group",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                            type: "email",
                            name: "email",
                            className: "",
                            id: "emailInput",
                            "aria-describedby": "emailHelp",
                            placeholder: "me@email.com"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                        type: "submit",
                        className: "submit-btn",
                        children: "Notify Me"
                    })
                ]
            });
        }
    }
    render() {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "background container-fluid",
            style: styles.container,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "content",
                style: styles.content,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "row content-row",
                    style: styles.flexify,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "col-12 col-sm-7 col-md-7",
                            style: styles.rocket,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                style: {
                                    background: "transparent"
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    style: {
                                        margin: "0 auto",
                                        // maxWidth: 960,
                                        paddingTop: 20,
                                        paddingBottom: 20
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                        style: {
                                            margin: 0
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                            href: "/",
                                            style: {
                                                color: "white",
                                                textDecoration: "none"
                                            },
                                            children: "React Native Push Start"
                                        })
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "col-12 col-sm-7 col-md-7",
                            style: styles.flexify,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    children: "Get started building apps with React Native."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    children: "From web to mobile app developer."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    children: "It has to start somewhere."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    children: "(Coming soon)"
                                })
                            ]
                        }),
                        this.renderForm()
                    ]
                })
            })
        });
    }
    constructor(...args){
        super(...args);
        (0,_define_property/* default */.Z)(this, "state", {
            subscribed: false
        });
    }
}
/* harmony default export */ var Learn = (Landing);

;// CONCATENATED MODULE: ./src/pages/learn.js




function About() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "blog-posts content",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(NavbarFixed/* default */.Z, {
                title: "LEARN REACT NATIVE",
                canGoBack: true,
                backToUrl: "/"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Learn, {})
        ]
    });
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [856,774,888,179], function() { return __webpack_exec__(92036); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
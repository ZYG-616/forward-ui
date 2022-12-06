'use strict';

const path = require('path');

const projRoot = path.resolve(__dirname, "..", "..", "..");
const pkgRoot = path.resolve(projRoot, "packages");
const compRoot = path.resolve(pkgRoot, "components");
const themeRoot = path.resolve(pkgRoot, "theme-chalk");
const hookRoot = path.resolve(pkgRoot, "hooks");
const localeRoot = path.resolve(pkgRoot, "locale");
const directiveRoot = path.resolve(pkgRoot, "directives");
const epRoot = path.resolve(pkgRoot, "element-plus");
const utilRoot = path.resolve(pkgRoot, "utils");
const buildRoot = path.resolve(projRoot, "internal", "build");
const docsDirName = "docs";
const docRoot = path.resolve(projRoot, docsDirName);
const vpRoot = path.resolve(docRoot, ".vitepress");
const buildOutput = path.resolve(projRoot, "dist");
const epOutput = path.resolve(buildOutput, "element-plus");
const projPackage = path.resolve(projRoot, "package.json");
const compPackage = path.resolve(compRoot, "package.json");
const themePackage = path.resolve(themeRoot, "package.json");
const hookPackage = path.resolve(hookRoot, "package.json");
const localePackage = path.resolve(localeRoot, "package.json");
const directivePackage = path.resolve(directiveRoot, "package.json");
const epPackage = path.resolve(epRoot, "package.json");
const utilPackage = path.resolve(utilRoot, "package.json");
const docPackage = path.resolve(docRoot, "package.json");

exports.buildOutput = buildOutput;
exports.buildRoot = buildRoot;
exports.compPackage = compPackage;
exports.compRoot = compRoot;
exports.directivePackage = directivePackage;
exports.directiveRoot = directiveRoot;
exports.docPackage = docPackage;
exports.docRoot = docRoot;
exports.docsDirName = docsDirName;
exports.epOutput = epOutput;
exports.epPackage = epPackage;
exports.epRoot = epRoot;
exports.hookPackage = hookPackage;
exports.hookRoot = hookRoot;
exports.localePackage = localePackage;
exports.localeRoot = localeRoot;
exports.pkgRoot = pkgRoot;
exports.projPackage = projPackage;
exports.projRoot = projRoot;
exports.themePackage = themePackage;
exports.themeRoot = themeRoot;
exports.utilPackage = utilPackage;
exports.utilRoot = utilRoot;
exports.vpRoot = vpRoot;

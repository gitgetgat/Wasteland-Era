"use strict";
exports.__esModule = true;
exports.FormulaType = exports.EffectTarget = exports.EffectType = exports.PropertyEffectCategory = exports.EquipmentCategory = exports.Season = exports.EffectScenario = exports.PropertyType = void 0;
// 类型type
var PropertyType;
(function (PropertyType) {
    PropertyType["HP"] = "hp";
    PropertyType["ATK"] = "atk";
    PropertyType["DEF"] = "def";
    PropertyType["ATKSPD"] = "atkSpd";
    PropertyType["VAMP"] = "vamp";
    PropertyType["CRITRATE"] = "critRate";
    PropertyType["CRITDMG"] = "critDmg";
    PropertyType["DODGE"] = "dodge";
    PropertyType["COLLECTION_VOLUME"] = "collectionVolume";
})(PropertyType = exports.PropertyType || (exports.PropertyType = {}));
// 效果场景type
var EffectScenario;
(function (EffectScenario) {
    EffectScenario["NORMAL"] = "normal";
    EffectScenario["COMBAT"] = "combat";
    EffectScenario["HUNT"] = "hunt";
    EffectScenario["COLLECT"] = "collect";
    EffectScenario["RESEARCH"] = "research";
})(EffectScenario = exports.EffectScenario || (exports.EffectScenario = {}));
// 效果场景type
var Season;
(function (Season) {
    Season["SPRING"] = "spring";
    Season["SUMMER"] = "summer";
    Season["FALL"] = "fall";
    Season["WINTER"] = "winter";
})(Season = exports.Season || (exports.Season = {}));
// 装备部位type
var EquipmentCategory;
(function (EquipmentCategory) {
    EquipmentCategory["WEAPON"] = "Weapon";
    EquipmentCategory["ARMOR"] = "Armor";
    EquipmentCategory["SHIELD"] = "Shield";
    EquipmentCategory["HELMET"] = "Helmet";
    EquipmentCategory["BOOT"] = "boot";
    EquipmentCategory["BELT"] = "belt";
    EquipmentCategory["CLOAK"] = "cloak";
    EquipmentCategory["RING_1"] = "ring_1";
    EquipmentCategory["RING_2"] = "ring_2";
})(EquipmentCategory = exports.EquipmentCategory || (exports.EquipmentCategory = {}));
// 属性效果类别type
var PropertyEffectCategory;
(function (PropertyEffectCategory) {
    PropertyEffectCategory["BUFF"] = "buff";
    PropertyEffectCategory["DEBUFF"] = "debuff";
    PropertyEffectCategory["NORMAL"] = "normal";
})(PropertyEffectCategory = exports.PropertyEffectCategory || (exports.PropertyEffectCategory = {}));
// 效果类别type
var EffectType;
(function (EffectType) {
    EffectType["IMMEDIATE"] = "immediate";
    EffectType["CONTINUED"] = "continued";
})(EffectType = exports.EffectType || (exports.EffectType = {}));
// 效果目标type
var EffectTarget;
(function (EffectTarget) {
    EffectTarget["PLAYER"] = "player";
    EffectTarget["ENEMY"] = "enemy";
    EffectTarget["BUILDING"] = "building";
    EffectTarget["TEAM"] = "team";
})(EffectTarget = exports.EffectTarget || (exports.EffectTarget = {}));
// 配方类型
var FormulaType;
(function (FormulaType) {
    FormulaType["EQUIPMENT"] = "equipment";
    FormulaType["DRUGS"] = "drugs";
    FormulaType["ITEM"] = "item";
    FormulaType["SKILL"] = "skill";
    FormulaType["BLUEPRINT"] = "blueprint";
    FormulaType["DISHES"] = "dishes";
})(FormulaType = exports.FormulaType || (exports.FormulaType = {}));

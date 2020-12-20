import { Localization } from "expo";
import i18n from "i18n-js";
import strings from "./Tarnslations.json";
import { I18nManager } from "react-native";
i18n.fallbacks = true;
i18n.translations = strings;
//i18n.locale = Localization.locale;

export const t = string => {
  return i18n.t(string);
};

export const getCurrentLanguage = () => i18n.locale.substring(0, 2);
export const isRtl = () => I18nManager.isRTL;

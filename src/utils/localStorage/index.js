// import { ILanguage, IThemeName } from "src/services/interfaces/global.interfaces";

const ACCOUNT = "ACCOUNT";
const TOKEN = "TOKEN";
const LANGUAGE = "LANGUAGE";
const THEME = "THEME";
const ACCOUNT_LOGIN = "ACCOUNT_LOGIN";
const MENU = "MENU";
const AUTH_UUID = "AUTH_UUID";

/****************************START**************************/
/*                          Acccount                       */

export function localSaveAccount(params) {
  return localStorage.setItem(ACCOUNT, params);
}

export function localGetAccount() {
  return localStorage.getItem(ACCOUNT);
}

export function localRemoveAccount() {
  return localStorage.removeItem(ACCOUNT);
}

/**************************** END **************************/

/****************************START**************************/
/*                           Token                         */

export function localSaveToken(params) {
  return localStorage.setItem(TOKEN, params);
}

export function localGetToken() {
  return localStorage.getItem(TOKEN);
}

export function localRemoveToken() {
  return localStorage.removeItem(TOKEN);
}

/**************************** END **************************/

/****************************START**************************/
/*                         Language                        */

export function localSaveLanguage(params) {
  return localStorage.setItem(LANGUAGE, params);
}

export function localGetLangage() {
  //string
  let localLanguage = localStorage.getItem(LANGUAGE);
  let result = "en";
  //convert to type light or dark
  if (localLanguage === "fr" || localLanguage === "vi") {
    result = localLanguage;
  }
  return result;
}

export function localRemoveLanguage() {
  return localStorage.removeItem(LANGUAGE);
}

/**************************** END **************************/

/****************************START**************************/
/*                           Theme                         */

export function localSaveTheme(params) {
  return localStorage.setItem(THEME, params);
}

export function localGetTheme() {
  //string
  let localTheme = localStorage.getItem(THEME);
  let result = "light";
  //convert to type light or dark
  if (localTheme === "light" || localTheme === "dark") {
    result = localTheme;
  }
  return result;
}

export function localRemoveTheme() {
  return localStorage.removeItem(THEME);
}

/**************************** END **************************/

/****************************START**************************/
/*                      Acccount Login                     */

export function localSaveFormLogin(params) {
  return localStorage.setItem(ACCOUNT_LOGIN, params);
}

export function localGetFormLogin() {
  return localStorage.getItem(ACCOUNT_LOGIN);
}

export function localRemoveFormLogin() {
  return localStorage.removeItem(ACCOUNT_LOGIN);
}

/**************************** END **************************/

export function localSaveMenu(params) {
  return localStorage.setItem(MENU, params);
}

export function localGetMenu() {
  return localStorage.getItem(MENU);
}

export function localRemoveMenu() {
  return localStorage.removeItem(MENU);
}

export function localSaveAuthUUID(params) {
  return localStorage.setItem(AUTH_UUID, params);
}

export function localGetAuthUUID() {
  return localStorage.getItem(AUTH_UUID);
}

export function localRemoveAuthUUID() {
  return localStorage.removeItem(AUTH_UUID);
}

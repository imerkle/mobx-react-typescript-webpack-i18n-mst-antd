import { History } from 'history';
import { RouterStore } from './RouterStore';
import { LanguageStore } from './LanguageStore';
import { STORE_ROUTER, STORE_LANGUAGE } from 'app/constants';

export function createStores(history: History) {
  const routerStore = new RouterStore(history);
  const languageStore = LanguageStore.create({language: "en"});
  return {
    [STORE_ROUTER]: routerStore,
    [STORE_LANGUAGE]: languageStore,
  };
}

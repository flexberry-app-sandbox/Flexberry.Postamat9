import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISPostamat9ЛогистикаLForm from './forms/i-i-s-postamat9-логистика-l';
import IISPostamat9ПользовательLForm from './forms/i-i-s-postamat9-пользователь-l';
import IISPostamat9ПостаматLForm from './forms/i-i-s-postamat9-постамат-l';
import IISPostamat9СлужбаДоставкиLForm from './forms/i-i-s-postamat9-служба-доставки-l';
import IISPostamat9ТранзакцияLForm from './forms/i-i-s-postamat9-транзакция-l';
import IISPostamat9ХранениеLForm from './forms/i-i-s-postamat9-хранение-l';
import IISPostamat9ЛогистикаEForm from './forms/i-i-s-postamat9-логистика-e';
import IISPostamat9ПользовательEForm from './forms/i-i-s-postamat9-пользователь-e';
import IISPostamat9ПостаматEForm from './forms/i-i-s-postamat9-постамат-e';
import IISPostamat9СлужбаДоставкиEForm from './forms/i-i-s-postamat9-служба-доставки-e';
import IISPostamat9ТранзакцияEForm from './forms/i-i-s-postamat9-транзакция-e';
import IISPostamat9ХранениеEForm from './forms/i-i-s-postamat9-хранение-e';
import IISPostamat9ЛогистикаModel from './models/i-i-s-postamat9-логистика';
import IISPostamat9ПользовательModel from './models/i-i-s-postamat9-пользователь';
import IISPostamat9ПостаматModel from './models/i-i-s-postamat9-постамат';
import IISPostamat9ПосылкаModel from './models/i-i-s-postamat9-посылка';
import IISPostamat9СлужбаДоставкиModel from './models/i-i-s-postamat9-служба-доставки';
import IISPostamat9ТранзакцияModel from './models/i-i-s-postamat9-транзакция';
import IISPostamat9ХранениеModel from './models/i-i-s-postamat9-хранение';
import IISPostamat9ЯчейкаModel from './models/i-i-s-postamat9-ячейка';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-postamat9-логистика': IISPostamat9ЛогистикаModel,
    'i-i-s-postamat9-пользователь': IISPostamat9ПользовательModel,
    'i-i-s-postamat9-постамат': IISPostamat9ПостаматModel,
    'i-i-s-postamat9-посылка': IISPostamat9ПосылкаModel,
    'i-i-s-postamat9-служба-доставки': IISPostamat9СлужбаДоставкиModel,
    'i-i-s-postamat9-транзакция': IISPostamat9ТранзакцияModel,
    'i-i-s-postamat9-хранение': IISPostamat9ХранениеModel,
    'i-i-s-postamat9-ячейка': IISPostamat9ЯчейкаModel
  },

  'application-name': 'Postamat9',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Postamat9',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Postamat9',
          title: 'Postamat9'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        postamat9: {
          caption: 'Postamat9',
          title: 'Postamat9',
          'i-i-s-postamat9-логистика-l': {
            caption: 'Логистика',
            title: ''
          },
          'i-i-s-postamat9-служба-доставки-l': {
            caption: 'Служба доставки',
            title: ''
          },
          'i-i-s-postamat9-постамат-l': {
            caption: 'Постамат',
            title: ''
          },
          'i-i-s-postamat9-пользователь-l': {
            caption: 'Пользователь',
            title: ''
          },
          'i-i-s-postamat9-хранение-l': {
            caption: 'Хранение',
            title: ''
          },
          'i-i-s-postamat9-транзакция-l': {
            caption: 'Транзакция',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-postamat9-логистика-l': IISPostamat9ЛогистикаLForm,
    'i-i-s-postamat9-пользователь-l': IISPostamat9ПользовательLForm,
    'i-i-s-postamat9-постамат-l': IISPostamat9ПостаматLForm,
    'i-i-s-postamat9-служба-доставки-l': IISPostamat9СлужбаДоставкиLForm,
    'i-i-s-postamat9-транзакция-l': IISPostamat9ТранзакцияLForm,
    'i-i-s-postamat9-хранение-l': IISPostamat9ХранениеLForm,
    'i-i-s-postamat9-логистика-e': IISPostamat9ЛогистикаEForm,
    'i-i-s-postamat9-пользователь-e': IISPostamat9ПользовательEForm,
    'i-i-s-postamat9-постамат-e': IISPostamat9ПостаматEForm,
    'i-i-s-postamat9-служба-доставки-e': IISPostamat9СлужбаДоставкиEForm,
    'i-i-s-postamat9-транзакция-e': IISPostamat9ТранзакцияEForm,
    'i-i-s-postamat9-хранение-e': IISPostamat9ХранениеEForm
  },

});

export default translations;

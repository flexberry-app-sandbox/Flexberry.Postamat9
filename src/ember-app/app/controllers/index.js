import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.postamat9.caption'),
          title: i18n.t('forms.application.sitemap.postamat9.title'),
          children: [{
            link: 'i-i-s-postamat9-логистика-l',
            caption: i18n.t('forms.application.sitemap.postamat9.i-i-s-postamat9-логистика-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat9.i-i-s-postamat9-логистика-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-postamat9-служба-доставки-l',
            caption: i18n.t('forms.application.sitemap.postamat9.i-i-s-postamat9-служба-доставки-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat9.i-i-s-postamat9-служба-доставки-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-postamat9-постамат-l',
            caption: i18n.t('forms.application.sitemap.postamat9.i-i-s-postamat9-постамат-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat9.i-i-s-postamat9-постамат-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-postamat9-пользователь-l',
            caption: i18n.t('forms.application.sitemap.postamat9.i-i-s-postamat9-пользователь-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat9.i-i-s-postamat9-пользователь-l.title'),
            children: null
          }, {
            link: 'i-i-s-postamat9-хранение-l',
            caption: i18n.t('forms.application.sitemap.postamat9.i-i-s-postamat9-хранение-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat9.i-i-s-postamat9-хранение-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-postamat9-транзакция-l',
            caption: i18n.t('forms.application.sitemap.postamat9.i-i-s-postamat9-транзакция-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat9.i-i-s-postamat9-транзакция-l.title'),
            icon: 'list',
            children: null
          }]
        }
      ]
    };
  }),
})
import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-postamat9-логистика-l');
  this.route('i-i-s-postamat9-логистика-e',
  { path: 'i-i-s-postamat9-логистика-e/:id' });
  this.route('i-i-s-postamat9-логистика-e.new',
  { path: 'i-i-s-postamat9-логистика-e/new' });
  this.route('i-i-s-postamat9-пользователь-l');
  this.route('i-i-s-postamat9-пользователь-e',
  { path: 'i-i-s-postamat9-пользователь-e/:id' });
  this.route('i-i-s-postamat9-пользователь-e.new',
  { path: 'i-i-s-postamat9-пользователь-e/new' });
  this.route('i-i-s-postamat9-постамат-l');
  this.route('i-i-s-postamat9-постамат-e',
  { path: 'i-i-s-postamat9-постамат-e/:id' });
  this.route('i-i-s-postamat9-постамат-e.new',
  { path: 'i-i-s-postamat9-постамат-e/new' });
  this.route('i-i-s-postamat9-служба-доставки-l');
  this.route('i-i-s-postamat9-служба-доставки-e',
  { path: 'i-i-s-postamat9-служба-доставки-e/:id' });
  this.route('i-i-s-postamat9-служба-доставки-e.new',
  { path: 'i-i-s-postamat9-служба-доставки-e/new' });
  this.route('i-i-s-postamat9-транзакция-l');
  this.route('i-i-s-postamat9-транзакция-e',
  { path: 'i-i-s-postamat9-транзакция-e/:id' });
  this.route('i-i-s-postamat9-транзакция-e.new',
  { path: 'i-i-s-postamat9-транзакция-e/new' });
  this.route('i-i-s-postamat9-хранение-l');
  this.route('i-i-s-postamat9-хранение-e',
  { path: 'i-i-s-postamat9-хранение-e/:id' });
  this.route('i-i-s-postamat9-хранение-e.new',
  { path: 'i-i-s-postamat9-хранение-e/new' });
});

export default Router;

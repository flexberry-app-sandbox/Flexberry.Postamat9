import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-postamat9-пользователь', 'Unit | Model | i-i-s-postamat9-пользователь', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-postamat9-логистика',
    'model:i-i-s-postamat9-пользователь',
    'model:i-i-s-postamat9-постамат',
    'model:i-i-s-postamat9-посылка',
    'model:i-i-s-postamat9-служба-доставки',
    'model:i-i-s-postamat9-транзакция',
    'model:i-i-s-postamat9-хранение',
    'model:i-i-s-postamat9-ячейка',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});

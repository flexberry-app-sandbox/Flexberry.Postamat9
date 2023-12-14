import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-postamat9-постамат', 'Unit | Serializer | i-i-s-postamat9-постамат', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-postamat9-постамат',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-postamat9-оплата',
    'transform:i-i-s-postamat9-состояние',
    'transform:i-i-s-postamat9-статус',
    'transform:i-i-s-postamat9-статусы',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});

import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СтатусEnum from '../enums/i-i-s-postamat9-статус';

export default FlexberryEnum.extend({
  enum: СтатусEnum,
  sourceType: 'IIS.Postamat9.Статус'
});

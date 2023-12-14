package Postamat9.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Postamat9.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: СлужбаДоставки
 */
@Entity(name = "IISPostamat9СлужбаДоставки")
@Table(schema = "public", name = "СлужбаДоставки")
public class SluzhbaDostavki {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Номер")
    private Integer номер;

    @Column(name = "Наименвоание")
    private String наименвоание;

    @Column(name = "Адрес")
    private String адрес;

    @Column(name = "НомерТелефона")
    private Integer номертелефона;


    public SluzhbaDostavki() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомер() {
      return номер;
    }

    public void setНомер(Integer номер) {
      this.номер = номер;
    }

    public String getНаименвоание() {
      return наименвоание;
    }

    public void setНаименвоание(String наименвоание) {
      this.наименвоание = наименвоание;
    }

    public String getАдрес() {
      return адрес;
    }

    public void setАдрес(String адрес) {
      this.адрес = адрес;
    }

    public Integer getНомерТелефона() {
      return номертелефона;
    }

    public void setНомерТелефона(Integer номертелефона) {
      this.номертелефона = номертелефона;
    }


}
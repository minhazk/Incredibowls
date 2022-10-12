import 'intl';
import 'intl/locale-data/jsonp/en';

const dateFormatter = new Intl.DateTimeFormat(undefined, {
    dateStyle: 'medium',
});

const getShortDate = date => {
    return dateFormatter.format(date).slice(0, -5);
};

export { getShortDate };

import 'intl';
import 'intl/locale-data/jsonp/en';

const getShortDate = date => {
    return new Intl.DateTimeFormat(undefined, {
        dateStyle: 'medium',
    })
        .format(date)
        .slice(0, -5);
};

const getLongDate = date => {
    return new Intl.DateTimeFormat(undefined, {
        dateStyle: 'long',
    }).format(date);
};

export { getShortDate, getLongDate };

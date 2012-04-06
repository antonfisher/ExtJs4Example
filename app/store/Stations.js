Ext.define('App.store.Stations', {
    extend: 'Ext.data.Store',

    model: 'App.model.Station',

//    proxy: {
//        type: 'ajax',
//        url: 'data/stations-list.json',
//        reader: {
//            type: 'json',
//            root: 'data'
//        }
//    }

    proxy: {
        type: 'localstorage',
        id  : 'stations-list'
    }

});


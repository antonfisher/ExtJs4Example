Ext.define('App.store.Songs', {
    extend: 'Ext.data.Store',

    model: 'App.model.Song',

    proxy: {
        type: 'ajax',
        url: 'data/songs-list.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    }

});


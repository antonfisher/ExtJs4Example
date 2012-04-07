Ext.define('App.store.Albums', {
    extend: 'Ext.data.Store',

    model: 'App.model.Album',

//    data: {
//        data: [
//            {id: '1', name: 'One', description: 'Memory store'},
//            {id: '2', name: 'Two', description: 'Memory store'}
//        ]
//    },
//    proxy: {
//        type: 'memory',
//        reader: {
//            type: 'json',
//            root: 'data'
//        }
//    }

//    proxy: {
//        type: 'localstorage',
//        id  : 'albums-list'
//    }

    proxy: {
        type: 'ajax',
        url: 'data/albums-list.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    }

});


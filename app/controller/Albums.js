Ext.define('App.controller.Albums', {
    extend: 'Ext.app.Controller',

    views: [
        'albums.AlbumsList'
    ],

    stores: [
        'Albums'
    ],

    models: [
        'Album'
    ],

    init: function() {
//        this.getAlbumsStore().add({"name": "One", "description": "Localstorage store"});
//        this.getAlbumsStore().add({"name": "Two", "description": "Localstorage store"});
//        this.getAlbumsStore().sync();

        this.getAlbumsStore().load();

        this.control({
            'albums-AlbumsList': {
                selectionchange: this.onAlbumSelect
            }
        });
    },

    onAlbumSelect: function(selModel, selection) {
        console.log('Albums.onAlbumSelect()', this, arguments);

        this.application.fireEvent('applicationAlbumSelect', selection[0]);
    }

});


Ext.define('App.controller.Songs', {
    extend: 'Ext.app.Controller',

    views: [
        'songs.SongsList'
    ],

    stores: [
        'Songs'
    ],

    models: [
        'Song'
    ],

    refs: [
        {ref: 'songsList', selector: '#songs-SongsList-html'}
    ],

    init: function() {
        this.application.on({
            applicationAlbumSelect: this.onAlbumSelect,
            scope: this
        });
    },

    onAlbumSelect: function(album) {
        console.log('Songs.onAlbumSelect()', this, album);

        this.getSongsStore().clearFilter();
        this.getSongsStore().load().filter([
            {property: "id_album", value: album.get('id')}
        ]);
    }

});


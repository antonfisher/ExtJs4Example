Ext.define('App.view.albums.AlbumsList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.albums-AlbumsList',

    store: 'Albums',

    title: 'Albums',

    columns: [
        {header: 'Id',          dataIndex: 'id',          flex:1},
        {header: 'Name',        dataIndex: 'name',        flex:2},
        {header: 'Description', dataIndex: 'description', flex:2}
    ],

    height: 300,
    width: 400

});


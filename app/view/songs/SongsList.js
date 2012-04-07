Ext.define('App.view.songs.SongsList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.songs-SongsList',

    store: 'Songs',

    title: 'Songs',

    columns: [
        {header: 'Id',       dataIndex: 'id',       flex:1},
        {header: 'Artist',   dataIndex: 'artist',   flex:2, editor: 'textfield'},
        {header: 'Title',    dataIndex: 'title',    flex:2, editor: 'textfield'},
        {header: 'Date',     dataIndex: 'date',     flex:1, editor: {xtype: 'datefield', format: 'Y-m-d',}},
        {header: 'id_album', dataIndex: 'id_aldum', flex:1, hidden: true}
    ],

    plugins: [
        Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 2
        })
    ]

});


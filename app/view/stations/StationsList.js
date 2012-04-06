Ext.define('App.view.stations.StationsList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.stations-StationsList',

    store: 'Stations',

    title: 'Stations',

    columns: [
        {header: 'Id',          dataIndex: 'id',          flex:1},
        {header: 'Name',        dataIndex: 'name',        flex:2},
        {header: 'Description', dataIndex: 'description', flex:2}
    ],

    height: 300,
    width: 400

});


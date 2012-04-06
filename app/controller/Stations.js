Ext.define('App.controller.Stations', {
    extend: 'Ext.app.Controller',

    views: [
        //'station.NewStation',
        'stations.StationsList'
    ],

    stores: [
        //'SearchResult',
        'Stations'
    ],

    models: [
        'Station'
    ],

    init: function() {
        this.getStationsStore().removeAll(true);
        this.getStationsStore().sync();
        this.getStationsStore().load();

        this.getStationsStore().add({"name": "One", "description": "One Description"});
        this.getStationsStore().add({"name": "Two", "description": "Two Description"});
        this.getStationsStore().sync();

        //this.getStationsStore().load();
        console.log(this.getStationsStore());

//        this.control({
//            'stationslist': {
//                selectionchange: this.onStationSelect
//            },
//            'newstation': {
//                select: this.onNewStationSelect
//            }
//        });
    }

});


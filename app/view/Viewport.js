Ext.define('App.view.Viewport', {
    extend: 'Ext.container.Viewport',

    layout: 'border',

    initComponent: function() {
        this.items = [
            {
                region: 'north',
                height: 70,
                layout: {
                    type: 'hbox',
                    align: 'stretch'
                },
                defaults: {
                    padding: 5
                },
                items: [
                    {
                        html: '-barcamp-internet-radio-',
                        width: 250
                    },{
                        flex: 1,
                        html: '-control-buttons-'
                    },{
                        html: '-search-',
                        width: 250
                    }
                ]
            },{
                region: 'west',
                xtype: 'container',
                width: 250,
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                items: [
                    {
                        xtype: 'albums-AlbumsList',
                        padding: 5,
                        flex: 1,
                        html: '+albums-AlbumsList+'
                    },{
                        html: '-ad-',
                        padding: 5,
                        height: 100
                    }
                ]
            },{
                region: 'center',
                padding: 5,
                xtype: 'songs-SongsList',
                html: '+songs-SongsList+'
            }
        ];

        this.callParent();
    }

});


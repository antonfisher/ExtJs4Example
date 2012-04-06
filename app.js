Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'Ext':  'extjs/src',
        'App':  'js/app'
    }
});

Ext.application({
    name: 'App',
    appFolder: 'app',

    controllers: [
        'Stations'//, 'Song'
    ],

    autoCreateViewport: true,

    launch: function() {
        // This is fired as soon as the page is ready
    }

});


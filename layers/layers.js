var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OpenStreetMap_3 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OpenStreetMap_4 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_MapzenGlobalTerrain_5 = new ol.layer.Tile({
            'title': 'Mapzen Global Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png'
            })
        });

        var lyr_OpenStreetMap_6 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_populaion_provinces_7 = new ol.format.GeoJSON();
var features_populaion_provinces_7 = format_populaion_provinces_7.readFeatures(json_populaion_provinces_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_populaion_provinces_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_populaion_provinces_7.addFeatures(features_populaion_provinces_7);
var lyr_populaion_provinces_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_populaion_provinces_7, 
                style: style_populaion_provinces_7,
                popuplayertitle: 'populaion_provinces',
                interactive: true,
                title: '<img src="styles/legend/populaion_provinces_7.png" /> populaion_provinces'
            });
var format_Ports_Maroc_Coordonnees_QGIS1_8 = new ol.format.GeoJSON();
var features_Ports_Maroc_Coordonnees_QGIS1_8 = format_Ports_Maroc_Coordonnees_QGIS1_8.readFeatures(json_Ports_Maroc_Coordonnees_QGIS1_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ports_Maroc_Coordonnees_QGIS1_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ports_Maroc_Coordonnees_QGIS1_8.addFeatures(features_Ports_Maroc_Coordonnees_QGIS1_8);
var lyr_Ports_Maroc_Coordonnees_QGIS1_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ports_Maroc_Coordonnees_QGIS1_8, 
                style: style_Ports_Maroc_Coordonnees_QGIS1_8,
                popuplayertitle: 'Ports_Maroc_Coordonnees_QGIS (1)',
                interactive: true,
                title: '<img src="styles/legend/Ports_Maroc_Coordonnees_QGIS1_8.png" /> Ports_Maroc_Coordonnees_QGIS (1)'
            });
var format_portsports_maroc_coordonnees_qgis_1_9 = new ol.format.GeoJSON();
var features_portsports_maroc_coordonnees_qgis_1_9 = format_portsports_maroc_coordonnees_qgis_1_9.readFeatures(json_portsports_maroc_coordonnees_qgis_1_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_portsports_maroc_coordonnees_qgis_1_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_portsports_maroc_coordonnees_qgis_1_9.addFeatures(features_portsports_maroc_coordonnees_qgis_1_9);
var lyr_portsports_maroc_coordonnees_qgis_1_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_portsports_maroc_coordonnees_qgis_1_9, 
                style: style_portsports_maroc_coordonnees_qgis_1_9,
                popuplayertitle: 'ports — ports_maroc_coordonnees_qgis_1',
                interactive: true,
                title: '<img src="styles/legend/portsports_maroc_coordonnees_qgis_1_9.png" /> ports — ports_maroc_coordonnees_qgis_1'
            });
var format_amp_10 = new ol.format.GeoJSON();
var features_amp_10 = format_amp_10.readFeatures(json_amp_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_amp_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_amp_10.addFeatures(features_amp_10);
var lyr_amp_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_amp_10, 
                style: style_amp_10,
                popuplayertitle: 'amp',
                interactive: true,
                title: '<img src="styles/legend/amp_10.png" /> amp'
            });

lyr_OSMStandard_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_OpenStreetMap_3.setVisible(true);lyr_OpenStreetMap_4.setVisible(true);lyr_MapzenGlobalTerrain_5.setVisible(true);lyr_OpenStreetMap_6.setVisible(true);lyr_populaion_provinces_7.setVisible(true);lyr_Ports_Maroc_Coordonnees_QGIS1_8.setVisible(true);lyr_portsports_maroc_coordonnees_qgis_1_9.setVisible(true);lyr_amp_10.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_OpenStreetMap_1,lyr_OpenStreetMap_2,lyr_OpenStreetMap_3,lyr_OpenStreetMap_4,lyr_MapzenGlobalTerrain_5,lyr_OpenStreetMap_6,lyr_populaion_provinces_7,lyr_Ports_Maroc_Coordonnees_QGIS1_8,lyr_portsports_maroc_coordonnees_qgis_1_9,lyr_amp_10];
lyr_populaion_provinces_7.set('fieldAliases', {'Code_Provi': 'Code_Provi', 'Superficie': 'Superficie', 'nom': 'nom', 'Marocains_': 'Marocains_', 'Etrangers_': 'Etrangers_', 'Menages_': 'Menages_', 'nom_arabe': 'nom_arabe', 'Population': 'Population', });
lyr_Ports_Maroc_Coordonnees_QGIS1_8.set('fieldAliases', {'Port': 'Port', 'Longitude': 'Longitude', 'Latitude,,': 'Latitude,,', });
lyr_portsports_maroc_coordonnees_qgis_1_9.set('fieldAliases', {'fid': 'fid', 'Port': 'Port', 'Longitude': 'Longitude', 'Latitude,,': 'Latitude,,', });
lyr_amp_10.set('fieldAliases', {'id': 'id', });
lyr_populaion_provinces_7.set('fieldImages', {'Code_Provi': 'TextEdit', 'Superficie': 'TextEdit', 'nom': 'TextEdit', 'Marocains_': 'TextEdit', 'Etrangers_': 'TextEdit', 'Menages_': 'TextEdit', 'nom_arabe': 'TextEdit', 'Population': 'TextEdit', });
lyr_Ports_Maroc_Coordonnees_QGIS1_8.set('fieldImages', {'Port': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude,,': 'TextEdit', });
lyr_portsports_maroc_coordonnees_qgis_1_9.set('fieldImages', {'fid': 'TextEdit', 'Port': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude,,': 'TextEdit', });
lyr_amp_10.set('fieldImages', {'id': 'TextEdit', });
lyr_populaion_provinces_7.set('fieldLabels', {'Code_Provi': 'no label', 'Superficie': 'no label', 'nom': 'no label', 'Marocains_': 'no label', 'Etrangers_': 'no label', 'Menages_': 'no label', 'nom_arabe': 'no label', 'Population': 'no label', });
lyr_Ports_Maroc_Coordonnees_QGIS1_8.set('fieldLabels', {'Port': 'no label', 'Longitude': 'no label', 'Latitude,,': 'no label', });
lyr_portsports_maroc_coordonnees_qgis_1_9.set('fieldLabels', {'fid': 'no label', 'Port': 'no label', 'Longitude': 'no label', 'Latitude,,': 'no label', });
lyr_amp_10.set('fieldLabels', {'id': 'no label', });
lyr_amp_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
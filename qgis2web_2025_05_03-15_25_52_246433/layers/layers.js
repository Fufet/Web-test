var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_toromanmiamimussaramiami1tracks_1 = new ol.format.GeoJSON();
var features_toromanmiamimussaramiami1tracks_1 = format_toromanmiamimussaramiami1tracks_1.readFeatures(json_toromanmiamimussaramiami1tracks_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_toromanmiamimussaramiami1tracks_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_toromanmiamimussaramiami1tracks_1.addFeatures(features_toromanmiamimussaramiami1tracks_1);
var lyr_toromanmiamimussaramiami1tracks_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_toromanmiamimussaramiami1tracks_1, 
                style: style_toromanmiamimussaramiami1tracks_1,
                popuplayertitle: 'toroman-miami-mussara-miami (1) — tracks',
                interactive: false,
                title: '<img src="styles/legend/toromanmiamimussaramiami1tracks_1.png" /> toroman-miami-mussara-miami (1) — tracks'
            });
var format_pallaresosermitasantantonidepaduaalbinyanapallaresos1tracks_2 = new ol.format.GeoJSON();
var features_pallaresosermitasantantonidepaduaalbinyanapallaresos1tracks_2 = format_pallaresosermitasantantonidepaduaalbinyanapallaresos1tracks_2.readFeatures(json_pallaresosermitasantantonidepaduaalbinyanapallaresos1tracks_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pallaresosermitasantantonidepaduaalbinyanapallaresos1tracks_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pallaresosermitasantantonidepaduaalbinyanapallaresos1tracks_2.addFeatures(features_pallaresosermitasantantonidepaduaalbinyanapallaresos1tracks_2);
var lyr_pallaresosermitasantantonidepaduaalbinyanapallaresos1tracks_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pallaresosermitasantantonidepaduaalbinyanapallaresos1tracks_2, 
                style: style_pallaresosermitasantantonidepaduaalbinyanapallaresos1tracks_2,
                popuplayertitle: 'pallaresos-ermita-sant-antoni-de-padua-albinyana-pallaresos (1) — tracks',
                interactive: false,
                title: '<img src="styles/legend/pallaresosermitasantantonidepaduaalbinyanapallaresos1tracks_2.png" /> pallaresos-ermita-sant-antoni-de-padua-albinyana-pallaresos (1) — tracks'
            });
var format_20240623montroigtivissamoradebre3castillosmiravettracks_3 = new ol.format.GeoJSON();
var features_20240623montroigtivissamoradebre3castillosmiravettracks_3 = format_20240623montroigtivissamoradebre3castillosmiravettracks_3.readFeatures(json_20240623montroigtivissamoradebre3castillosmiravettracks_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20240623montroigtivissamoradebre3castillosmiravettracks_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20240623montroigtivissamoradebre3castillosmiravettracks_3.addFeatures(features_20240623montroigtivissamoradebre3castillosmiravettracks_3);
var lyr_20240623montroigtivissamoradebre3castillosmiravettracks_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_20240623montroigtivissamoradebre3castillosmiravettracks_3, 
                style: style_20240623montroigtivissamoradebre3castillosmiravettracks_3,
                popuplayertitle: '2024-06-23-mont-roig-tivissa-mora-debre-3-castillos-miravet- — tracks',
                interactive: false,
                title: '<img src="styles/legend/20240623montroigtivissamoradebre3castillosmiravettracks_3.png" /> 2024-06-23-mont-roig-tivissa-mora-debre-3-castillos-miravet- — tracks'
            });
var format_latorredefontaubellatracks_4 = new ol.format.GeoJSON();
var features_latorredefontaubellatracks_4 = format_latorredefontaubellatracks_4.readFeatures(json_latorredefontaubellatracks_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_latorredefontaubellatracks_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_latorredefontaubellatracks_4.addFeatures(features_latorredefontaubellatracks_4);
var lyr_latorredefontaubellatracks_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_latorredefontaubellatracks_4, 
                style: style_latorredefontaubellatracks_4,
                popuplayertitle: 'la-torre-de-fontaubella — tracks',
                interactive: false,
                title: '<img src="styles/legend/latorredefontaubellatracks_4.png" /> la-torre-de-fontaubella — tracks'
            });
var format_Inicidelaruta_5 = new ol.format.GeoJSON();
var features_Inicidelaruta_5 = format_Inicidelaruta_5.readFeatures(json_Inicidelaruta_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Inicidelaruta_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Inicidelaruta_5.addFeatures(features_Inicidelaruta_5);
cluster_Inicidelaruta_5 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Inicidelaruta_5
});
var lyr_Inicidelaruta_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Inicidelaruta_5, 
                style: style_Inicidelaruta_5,
                popuplayertitle: 'Inici de la ruta',
                interactive: true,
                title: '<img src="styles/legend/Inicidelaruta_5.png" /> Inici de la ruta'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_toromanmiamimussaramiami1tracks_1.setVisible(true);lyr_pallaresosermitasantantonidepaduaalbinyanapallaresos1tracks_2.setVisible(true);lyr_20240623montroigtivissamoradebre3castillosmiravettracks_3.setVisible(true);lyr_latorredefontaubellatracks_4.setVisible(true);lyr_Inicidelaruta_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_toromanmiamimussaramiami1tracks_1,lyr_pallaresosermitasantantonidepaduaalbinyanapallaresos1tracks_2,lyr_20240623montroigtivissamoradebre3castillosmiravettracks_3,lyr_latorredefontaubellatracks_4,lyr_Inicidelaruta_5];
lyr_toromanmiamimussaramiami1tracks_1.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_pallaresosermitasantantonidepaduaalbinyanapallaresos1tracks_2.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_20240623montroigtivissamoradebre3castillosmiravettracks_3.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_latorredefontaubellatracks_4.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Inicidelaruta_5.set('fieldAliases', {'id': 'id', 'titol': 'titol', 'desc': 'desc', 'img': 'img', 'info': 'info', });
lyr_toromanmiamimussaramiami1tracks_1.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_pallaresosermitasantantonidepaduaalbinyanapallaresos1tracks_2.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_20240623montroigtivissamoradebre3castillosmiravettracks_3.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_latorredefontaubellatracks_4.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_Inicidelaruta_5.set('fieldImages', {'id': 'TextEdit', 'titol': 'TextEdit', 'desc': 'TextEdit', 'img': 'TextEdit', 'info': '', });
lyr_toromanmiamimussaramiami1tracks_1.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_pallaresosermitasantantonidepaduaalbinyanapallaresos1tracks_2.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_20240623montroigtivissamoradebre3castillosmiravettracks_3.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_latorredefontaubellatracks_4.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Inicidelaruta_5.set('fieldLabels', {'id': 'hidden field', 'titol': 'no label', 'desc': 'no label', 'img': 'no label', 'info': 'no label', });
lyr_Inicidelaruta_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
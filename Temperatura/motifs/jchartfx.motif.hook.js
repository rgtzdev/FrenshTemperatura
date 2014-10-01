(function(){var f=window.cfx,b=window.sfx;f.motif="hook";var h=b["gauge.templates"];if(void 0!=h){h.hookDashBorder='<T><T.R><s K="plotMargin">targetChart</s></T.R><C><B F="{B F}" S="{B S}"><g><g.RD><RD H="32"/><RD H="*"/></g.RD><C><B><B.F><L S="0,0" E="0,1" ><G C="#99FDFDFD" O="0"/><G C="#99F2F2F3" O="1"/></L></B.F><TextBlock M="8,0" Text="{B Title}" VerticalAlignment="Center" HorizontalAlignment="Left" Foreground="{Binding Class=DashboardTitle.fill}" FontFamily="{Binding Class=DashboardTitle.font-family}" FontSize="11" FontWeight="Bold"/></B></C><B g.R="1" F="{B F}"><C N="targetChart" M="4"/></B></g></B></C></T>';
h.hookRadialDashBorder='<T><T.R><s K="ratio">2</s><s K="startLocation">205</s><s K="endLocation">335</s><s K="yCenter">1</s></T.R></T>';h.hookRadialIndicator='<T><T.R><s K="ratio">0.15</s><s K="yPivot">0.135</s></T.R><V VW="13" VH="86"><g><P F="{B F}" D="M8.819,68.433V-5h-5v73.583C1.568,69.605,0,71.867,0,74.5c0,3.59,2.91,6.5,6.5,6.5s6.5-2.91,6.5-6.5C13,71.728,11.262,69.368,8.819,68.433z"/></g></V></T>';h.hookRadialBar='<T><C M="0"><P D="{B G}" F="{B F}"/></C></T>';h.hookRadialCap="RadialCapDefault";
h.hookRadialGlare="<T/>";h.hookLinearDashBorder="<T/>";h.hookLinearGlare="<T/>";h.hookLinearBar='<T><C M="0"><B F="{B F}" S="{N}"/></C></T>';h.hookLinearFiller="LinearFillerSimple";var k=new f.gauge.Palette;k.setColors(["#C7C7C9","#FFFFFF","#808080","#F0F0F0","#4994D0","#376F9C","#4994D0","#376F9C","#4A4A4A","#4A4A4A","#4A4A4A","#CCCCCC","#A4A4A4",null,"#EB4F54","#B13C3F",null,"#F6921E","#B96E17",null,"#70B27C","#54865D",null,"#4A4A4A","#4A4A4A","#919395","#919395","#808080","#4A4A4A","#EB4F54","#F6921E",
"#70B27C","#586356","#FEFEFE","#A3A3A3"]);f.gauge.Palette.setDefaultPalette(k)}b=b["vector.templates"];void 0!=b&&(b["DashboardTitle.fill"]="0,#919395",b["DashboardTitle.font-family"]="1,Arial,helvetica,sans-serif",b["AxisY_Text.fill"]="0,#4A4A4A",b.hookBorder='<T><T.R><s K="plotMargin">targetChart</s><Th K="externalMargin">16</Th><Th K="internalRectMargin">2</Th><T K="internalRect"><B CR="6" F="{B F}" S="{B S}" CP="0.5"/></T><T K="internal"><Line S="{B S}" X1="{B X1}" X2="{B X2}" Y1="{B Y1}" Y2="{B Y2}"/></T></T.R><C><B F="{B F}" S="{B S}" ><g><g.RD><RD H="32"/><RD H="*"/></g.RD><C><B><B.F><L S="0,0" E="0,1" ><G C="#99FDFDFD" O="0"/><G C="#99F2F2F3" O="1"/></L></B.F><TextBlock M="8,0" Text="{B Title}" FontFamily="{Binding Class=DashboardTitle.font-family}" FontSize="11" FontWeight="Bold" VerticalAlignment="Center" HorizontalAlignment="Left" Foreground="{Binding Class=DashboardTitle.fill}"/></B></C><B g.R="1" F="{B F}"><C N="targetChart" M="0,0,0,4"/></B></g></B></C></T>',
b.hookBar='<T><C M="0"><B C.Top="2" C.Left="2" F="#55AAAAAA" S="{N}"/><B F="{B F}" S="{B S}"/></C></T>',b.hookGantt=b.hookBar,b.hookEqualizer='<T><T.R><T K="off"><B F="{B F}"/></T></T.R><C M="0"><B C.Top="2" C.Left="2" F="#55AAAAAA"/><B F="{B F}"/></C></T>',b.hookArea='<T><T.R><D K="cfxDefStrokeThickness">3</D><L K="opacityMask" S="0,0" E="0,1"><G O="0" C="#FFFFFFFF"/><G O="1" C="#00FFFFFF"/></L></T.R><C><S P="{B FM}"><Po P="{B P}" S.V="0"><Po.F><L E="0,1" S="0,0"><G C="{B FC}" A="0.3" O="0"/><G C="{B FC}" A="0.3" O="1"/></L></Po.F></Po><Po P="{B P}" F="{B F}" OM="{S opacityMask}"/></S><Pl P="{B PT}" S="{B S}" ST="{B ST}"/></C></T>',
b.hookLine="LineDefault",b.hookCurveArea='<T><T.R><D K="cfxDefStrokeThickness">3</D><L K="opacityMask" S="0,0" E="0,1"><G O="0" C="#FFFFFFFF"/><G O="1" C="#00FFFFFF"/></L></T.R><C><S P="{B FM}"><P D="{B G}" S.V="0"><P.F><L E="0,1" S="0,0"><G C="{B FC}" A="0.3" O="0"/><G C="{B FC}" A="0.3" O="1"/></L></P.F></P><P D="{B G}" F="{B F}" OM="{S opacityMask}"/></S><P D="{B GT}" S="{B S}" ST="{B ST}" O="true"/></C></T>',b.hookCurve="CurveDefault",b.hookBubble='<T><C><E C.Top="2" C.Left="2" F="#55AAAAAA"/><E F="{B F}" S="{B S}"/></C></T>',
b.hookDoughnut='<T><T.R><T K="cfxRay"><Line X1="{B X1}" Y1="{B Y1}" X2="{B X2}" Y2="{B Y2}" S="#FFFFFF" ST="1"/></T></T.R><P D="{B G}" F="{B F}" S="{B S}"/></T>',b.hookPie=b.hookDoughnut,b.hookTreeMap='<T><C M="1"><B M="0,3,0,0" F="#66999999"/><B M="0,0,3,3" F="{B F}" S="{B S}"/></C></T>',b.hookFunnel='<T><C><Po C.Left="2" C.Top="2" P="{B P}" F="#66999999"/><Po P="{B P}" F="{B F}" S="{B S}"/></C></T>',b.hookPyramid=b.hookFunnel,b.hookOverlayBubble=b.hookBubble,b.hookSparklineLine=b.hookLine,b.hookSparklineBar=
b.hookBar,b.hookSparklineArea=b.hookArea,b.hookBullet='<T><T.R><T K="templateLine"><Line X1="{B X1}" X2="{B X2}" Y1="{B Y1}" Y2="{B Y2}" S="{B S}" ST="3"/></T></T.R><C><r C.Top="2" C.Left="2" F="#55AAAAAA" S="{N}"/><r F="{B F}" S="{B S}"/></C></T>',b.hookRose='<T><C><P C.Top="2" C.Left="2" D="{B G}" F="#55AAAAAA"/><P D="{B G}" F="{B F}" S="{B S}"/></C></T>',b=new f.Palette,b.setColors("#4994D0 #70B27C #F6921E #EB4F54 #A962A6 #986C41 #CC527B #AAAAAA #A2BC26 #75ADFE #EC922C #C3C3C3 #E14D57 #5290E9 #04A48C #FBB617 #FFFFFF #F0F0F0 #00000000 #C7C7C9 #E8E8E8 #F8F8F8 #EB4F54 #94C59D #4A4A4A #666666 #00000000 #A7A7A7 #00000000 #6E6E6E #00000000 #FEFEFE #4A4A4A #F8F8F8 #4A4A4A #F8F8F8 #A9A9A9 #ECECEC #ffffff #586356 #FEFEFE #A3A3A3".split(" ")),
f.Chart.setDefaultPalette(b));var g=function(){};f.motifs.hook=g;g.getStyleInfo=function(a){var e="";if(a!==void 0){a=a[0];a!==void 0&&(e=a[0])}a={isGroup:false};a.name=e;a.isSingle=false;a.isBullet=false;a.sections=[];if(e!=void 0){e=e.toUpperCase();if(e.indexOf("SINGLE")>=0){a.isSingle=true;a.name=""}if(e.indexOf("GROUP")>=0){a.isGroup=true;a.name="";a.name=""}if(e.indexOf("BULLET")>=0){a.isBullet=true;a.name=""}if(e.indexOf("SECTIONS")>=0){var c,d;c=e.indexOf("SECTIONS");d=e.indexOf(":",c);if(d>
0){c=d;d=e.indexOf("-",c);e=d>=0?e.substring(c+1,d):e.substring(c+1,e.length);a.sections=e.split(",",100)}a.name=""}}return a};g.global=function(a){a.setFont("8pt Arial");a.getToolTips().setBorderTemplate('<T xmlns:x="a"><T.R><mc K="multConverter"/></T.R><C Padding="12"><B S="{B S}" ST="2" F="{B F}" A="0.85" CP="0.4" CR="8" Padding="4,4,4,0"><DockPanel N="container" Orientation="Vertical"><TextBlock Text="{B Title}" FontSize="{B FontSize, Converter={S multConverter},ConverterParameter=0.8}" V="{B TitleVisible}" HorizontalAlignment="Right" FontWeight="Bold" M="3,0,3,0"/><B H="1" S="{B Foreground}" ST="1" M="0,0,0,4" V="{B TitleVisible}"/></DockPanel></B></C></T>')};
g.radial=function(a,e){g.global(a);var c=g.getStyleInfo(e);c.name!=null&&a.setStyle(c.name);var d=a.getMainScale();d.getBar().setTemplate(h.hookRadialBar);if(c.name=="progress")d.setThickness(0.85);else{d.setThickness(1.3);d.setPosition(-0.1);d.getBar().setVisible(true);c=d.getCap();c.setSize(0.015);c.setTemplate("RadialCapPlain");c.setVisible(false);c=a.getMainIndicator();c.setSize(0.8);c.setPosition(0.05);d=d.getTickmarks();d.getMajor().setVisible(false);d.getMedium().setVisible(false);a.setFont("8pt Arial");
d=new f.gauge.Title;a.getTitles().add(d);d=new f.gauge.Title;d.setDock(f.gauge.DockArea.Bottom);d.setText("%v");d.setTag("TitleLarge");d.setFont("40pt Arial");a.getTitles().add(d)}};g.linear=function(a,e){g.global(a);var c=a.getMainScale(),d=c.getBar();d.setVisible(true);d.setTemplate(h.hookLinearBar);c.getTickmarks().getMedium().setVisible(false);c.setThickness(0.7);var b=a.getMainIndicator(),i=g.getStyleInfo(e);if(i.isGroup){a.getBorder().setTemplate("<T/>");a.getDashboardBorder().setTemplate("<T/>")}if(i.isBullet){c.setThickness(0.9);
c.setPosition(0);b.setSize(0.25);b.setPosition(0.475);b.setTitle("Current");b=new f.gauge.Marker;b.setSize(0.4);b.setPosition(0.6);b.setTitle("Target");b.setTemplate("MarkerThinRectangle");c.getIndicators().add(b);a.getDefaultAttributes().setSectionThickness(d.getThickness());a.getDefaultAttributes().setSectionPosition(d.getPosition())}if(i.sections.length>0){for(var d=0,j,b=0;b<i.sections.length;b++){j=i.sections[b];c=new f.gauge.ScaleSection;c.setFrom(d);c.setTo(j);a.getMainScale().getSections().add(c);
d=j}a.getMainScale().setMax(j)}};g.vert=function(a,b){g.linear(a,b)};g.horz=function(a,b){g.linear(a,b);g.getStyleInfo(b).isBullet||a.getMainScale().setThickness(0.5)};g.chart=function(a,b){var c="";if(b!==void 0){var d=b[0];d!==void 0&&(c=d[0])}if(c!=void 0){c=c.toUpperCase();c=="GROUP"&&a.getBorder().setTemplate("<T/>")}c=a.getAxisX().getGrids();c.getMinor().setTickMark(f.TickMark.None);c.getMajor().setTickMark(f.TickMark.Outside);a.getAllSeries().setMarkerStyle(f.MarkerStyle.Filled);a.getAllSeries().getBorder().setUseForLines(false);
a.setAxesStyle(f.AxesStyle.Math);a.setFont("8pt Arial");a.getToolTips().setBorderTemplate('<T xmlns:x="a"><T.R><mc K="multConverter"/></T.R><C Padding="12"><B S="{B ItemFillS}" ST="2" F="{B F}" A="0.85" CP="0.4" CR="8" Padding="4,4,4,0"><DockPanel N="container" Orientation="Vertical"><TextBlock Text="{B Title}" FontSize="{B FontSize, Converter={S multConverter},ConverterParameter=0.8}" V="{B TitleVisible}" HorizontalAlignment="Right" FontWeight="Bold" M="3,0,3,0"/><B H="1" S="{B Foreground}" ST="1" M="0,0,0,4" V="{B TitleVisible}"/></DockPanel></B></C></T>')};
g.map=function(a){a.setShowAdditionalLayers(false);var b=new f.maps.MapLayer;b.setPath("@main");var c=b.getShadow();c.setXOffset(3);c.setYOffset(3);c.setColor("#4C444444");c.setBlur(2);a.getLayers().add(b)};g.heatmap=function(a){a=a.getGradientStops();a.getItem(0).setColor("#4994D0");a.getItem(1).setColor("#70B27C")};g.equalizer=function(a){var b=new f.equalizer.EqualizerItem;b.setColor("#70B27C");b.setCount(2);a.getTopItems().add(b);b=new f.equalizer.EqualizerItem;b.setColor("#F6921E");b.setCount(1);
a.getTopItems().add(b);a.setOffColor("#33C8C8C8")};g.trend=function(a,b){a.getSecondaryValues().setAlphaForeground(1);a.getDelta().setVisible(false);a.getPercentChange().setVisible(false);a.getReference().setVisible(true);a.getPercentChange().setVisible(true);a.getIndicator().setStyle(f.gauge.IndicatorStyle.TriangleVertical);a.getIndicator().setPosition(f.gauge.IndicatorPosition.Primary);a.getSecondaryValues().setSeparatorWidth(0);var c="";if(b!==void 0){var d=b[0];d!==void 0&&(c=d[0])}if(c!=void 0){if(c.toUpperCase().indexOf("SINGLE")>=
0){a.getDelta().setVisible(false);a.getPercentChange().setVisible(false);a.getIndicator().setVisible(false);a.getReference().setVisible(false)}c.toUpperCase().indexOf("GROUP")>=0&&a.getBorder().setTemplate("<T/>")}};g.border=function(){}})();

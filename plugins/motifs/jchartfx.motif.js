(function(){var h=window.cfx,d=window.sfx;h.motif="jchartfx";var e=d["gauge.templates"];void 0!=e&&(e.jchartfxDashBorder='<T><T.R><s K="plotMargin">targetChart</s></T.R><g><g.CD><CD W="6"/><CD W="*"/><CD W="6"/></g.CD><g.RD><RD H="6"/><RD H="*"/><RD H="12"/></g.RD><B g.C="1" g.R="1" CR="27" F="#000000" S="#33000000" A="0.25" ST="2"><B.BE><BBE R="3" OffsetY="2" Merge="true" Source="SourceAlpha"/></B.BE></B><B g.C="1" g.R="1" CR="24" S="{N}" F="{B F}"><g><g.RD><RD H="Auto"/><RD H="*"/></g.RD><B F="{B F}" CR="30" CP="1"><TextBlock M="10" Text="{B Title}" VerticalAlignment="Center" HorizontalAlignment="Center" Foreground="{Binding Class=DashboardTitle.fill}" FontFamily="{Binding Class=DashboardTitle.font-family}" FontSize="11" FontWeight="Normal"/></B><B g.R="1" F="{B F}" CR="30" CP="1"><C N="targetChart" M="8,4,8,12"/></B></g></B><B M="2" g.C="1" g.R="1" CR="24" S="#FFFFFF" ST="5"/><B M="2" g.C="1" g.R="1" CR="24" S="#00000000" ST="5"><B.F><R><R.RT><TG><TS CX="0.40" CY="0.5" SX="4.91" SY="3.11"/><TT X="0.60" Y="0.54"/></TG></R.RT><G C="#CCFFFFFF" O="0"/><G C="#00FFFFFF" O="0.5276"/><G C="#33000000" O="1"/></R></B.F></B></g></T>',
e.jchartfxRadialDashBorder='<T><T.R><Th K="borderFactor">0.02</Th></T.R><V VW="100" VH="100"><C><E W="100" H="100" F="{B S}"/><E C.Left="1" C.Top="1" W="98" H="98" F="{B F}"/></C></V></T>',e.jchartfxRadialIndicator="RadialIndicatorDefault",e.jchartfxRadialCap="RadialCapDefault",e.jchartfxRadialGlare="RadialGlareDefault",e.jchartfxLinearDashBorder="LinearDashBorderDefault",e.jchartfxLinearBorder="LinearBorderDefault",e.jchartfxLinearGlare="<T/>",e.jchartfxLinearFiller="LinearFillerDefault");d=d["vector.templates"];
void 0!=d&&(d["DashboardTitle.fill"]="0,#0296B1",d["DashboardTitle.font-family"]="1,Arial",d["AxisY_Text.fill"]="0,#666666",d.jchartfxBorder='<T><T.R><Th K="externalMargin">16</Th><Th K="internalRectMargin">2</Th><s K="plotMargin">targetChart</s><T K="internalRect"><B CR="6" F="{B F}" S="{B S}" CP="0.5"/></T><T K="internal"><Line S="{B S}" X1="{B X1}" X2="{B X2}" Y1="{B Y1}" Y2="{B Y2}"/></T></T.R><g><g.CD><CD W="6"/><CD W="*"/><CD W="6"/></g.CD><g.RD><RD H="6"/><RD H="*"/><RD H="12"/></g.RD><B g.C="1" g.R="1" CR="27" F="#000000" S="#33000000" A="0.25" ST="2"><B.BE><BBE R="3" OffsetY="2" Merge="true" Source="SourceAlpha"/></B.BE></B><B g.C="1" g.R="1" CR="24" F="{B F}" S="{N}"><g><g.RD><RD H="Auto"/><RD H="*"/></g.RD><B F="{B F}" CR="30" CP="1"><TextBlock M="10,10,10,0" Text="{B Title}" VerticalAlignment="Center" HorizontalAlignment="Center" Foreground="{Binding Class=DashboardTitle.fill}" FontFamily="{Binding Class=DashboardTitle.font-family}" FontSize="11" FontWeight="Normal"/></B><B g.R="1" F="{B F}" CR="30" CP="1"><C N="targetChart" M="8,0,8,8"/></B></g></B><B M="2" g.C="1" g.R="1" CR="24" S="#FFFFFF" ST="5"/><B M="2" g.C="1" g.R="1" CR="24" S="#00000000" ST="5"><B.F><R><R.RT><TG><TS CX="0.40" CY="0.5" SX="4.91" SY="3.11"/><TT X="0.60" Y="0.54"/></TG></R.RT><G C="#CCFFFFFF" O="0"/><G C="#00FFFFFF" O="0.5276"/><G C="#33000000" O="1"/></R></B.F></B></g></T>');
var b=function(){};h.motifs.jchartfx=b;b.getStyleInfo=function(a){var c="";if(a!==void 0){a=a[0];a!==void 0&&(c=a[0])}a={isGroup:false};a.name=c;a.isSingle=false;a.isBullet=false;a.sections=[];if(c!=void 0){c=c.toUpperCase();if(c.indexOf("SINGLE")>=0){a.isSingle=true;a.name=""}if(c.indexOf("GROUP")>=0){a.isGroup=true;a.name="";a.name=""}if(c.indexOf("BULLET")>=0){a.isBullet=true;a.name=""}if(c.indexOf("SECTIONS")>=0){var f,b;f=c.indexOf("SECTIONS");b=c.indexOf(":",f);if(b>0){f=b;b=c.indexOf("-",f);
c=b>=0?c.substring(f+1,b):c.substring(f+1,c.length);a.sections=c.split(",",100)}a.name=""}}return a};b.global=function(a){a.setFont("8pt Arial");a.setResizeableFont(false)};b.radial=function(a,c){b.global(a);var f=b.getStyleInfo(c);b.applySections(f,a);f.name!=null&&a.setStyle(f.name)};b.linear=function(a,c){b.global(a);var f=a.getMainScale();f.getTickmarks();var e=f.getBar(),g=a.getMainIndicator(),d=b.getStyleInfo(c);if(d.isGroup){a.getBorder().setTemplate("<T/>");a.getDashboardBorder().setTemplate("<T/>")}if(d.isBullet){f.setThickness(0.9);
f.setPosition(0);g.setSize(0.25);g.setPosition(0.475);g.setTitle("Current");g=new h.gauge.Marker;g.setSize(0.4);g.setPosition(0.6);g.setTitle("Target");g.setTemplate("MarkerThinRectangle");f.getIndicators().add(g);a.getDefaultAttributes().setSectionThickness(e.getThickness());a.getDefaultAttributes().setSectionPosition(e.getPosition())}b.applySections(d,a)};b.vert=function(a,c){b.linear(a,c)};b.horz=function(a,c){b.linear(a,c)};b.applySections=function(a,c){if(a.sections.length>0){for(var b,e=0,g,
d=0;d<a.sections.length;d++){g=a.sections[d];b=new h.gauge.ScaleSection;b.setFrom(e);b.setTo(g);c.getMainScale().getSections().add(b);e=g}c.getMainScale().setMax(g)}};b.chart=function(a,c){var b="";if(c!==void 0){var d=c[0];d!==void 0&&(b=d[0])}if(b!=void 0){b=b.toUpperCase();b=="GROUP"&&a.getBorder().setTemplate("<T/>")}};b.map=function(a){a.setShowAdditionalLayers(false)};b.heatmap=function(a){a=a.getGradientStops();a.getItem(0).setColor("#57ACDA");a.getItem(1).setColor("#93E24E")};b.equalizer=
function(a){a.setRoundnessRatio(0);var b=new h.equalizer.EqualizerItem;b.setColor("#F89553");b.setCount(2);a.getTopItems().add(b);b=new h.equalizer.EqualizerItem;b.setColor("#F5D34A");b.setCount(1);a.getTopItems().add(b);a.setOffColor("#33DBDBD9")};b.trend=function(a,c){var d=b.getStyleInfo(c);if(d.isSingle){a.getDelta().setVisible(false);a.getPercentChange().setVisible(false);a.getIndicator().setVisible(false)}d.isGroup&&a.getBorder().setTemplate("<T/>")};b.border=function(){}})();

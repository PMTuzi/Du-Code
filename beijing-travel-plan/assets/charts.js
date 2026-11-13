// 预算构成图表 — 京华纪行
(function () {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var accent2 = style.getPropertyValue('--accent2').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var bg = style.getPropertyValue('--bg').trim();
  var fontFamily = style.getPropertyValue('--font').trim();

  var chart = echarts.init(document.getElementById('chart-budget'), null, { renderer: 'svg' });

  chart.setOption({
    animation: false,
    color: [accent, accent2, accent + 'a6', accent2 + 'a6', muted],
    tooltip: {
      trigger: 'item',
      appendToBody: true,
      backgroundColor: bg,
      borderColor: rule,
      textStyle: { color: ink, fontFamily: fontFamily, fontSize: 14 },
      formatter: '{b}<br/>¥{c} 元 · 占比 {d}%'
    },
    title: {
      text: '¥2800',
      subtext: '人均 · 五天四晚',
      left: 'center',
      top: '40%',
      textStyle: { color: accent, fontSize: 34, fontWeight: 700, fontFamily: fontFamily },
      subtextStyle: { color: muted, fontSize: 14, fontFamily: fontFamily },
      itemGap: 6
    },
    legend: {
      bottom: 0,
      left: 'center',
      itemWidth: 12,
      itemHeight: 12,
      itemGap: 22,
      icon: 'roundRect',
      textStyle: { color: muted, fontSize: 14, fontFamily: fontFamily }
    },
    series: [
      {
        name: '预算构成',
        type: 'pie',
        radius: ['44%', '68%'],
        center: ['50%', '46%'],
        avoidLabelOverlap: true,
        itemStyle: { borderColor: bg, borderWidth: 3, borderRadius: 6 },
        label: {
          color: ink,
          fontFamily: fontFamily,
          fontSize: 14,
          formatter: '{b}\n¥{c}'
        },
        labelLine: { lineStyle: { color: rule }, length: 18, length2: 14 },
        emphasis: { scale: false },
        data: [
          { value: 1200, name: '住宿' },
          { value: 750, name: '餐饮' },
          { value: 400, name: '门票' },
          { value: 300, name: '弹性杂项' },
          { value: 150, name: '市内交通' }
        ]
      }
    ]
  });

  window.addEventListener('resize', function () { chart.resize(); });
})();

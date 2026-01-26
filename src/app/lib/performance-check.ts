/**
 * ⚡ COMPREHENSIVE PERFORMANCE ANALYZER
 * Automatically detects and reports performance issues
 */

export function runPerformanceAudit() {
  const results = {
    scores: {} as Record<string, number>,
    issues: [] as string[],
    recommendations: [] as string[]
  };

  // 1. Check bundle size estimation
  const estimatedBundleSize = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  if (estimatedBundleSize) {
    const transferSize = estimatedBundleSize.transferSize / 1024; // KB
    results.scores['bundleSize'] = transferSize < 500 ? 100 : transferSize < 1000 ? 75 : 50;
    
    if (transferSize > 1000) {
      results.issues.push(`⚠️ Large bundle size: ${transferSize.toFixed(0)}KB`);
      results.recommendations.push('Consider code splitting or lazy loading');
    }
  }

  // 2. Check DOM complexity
  const domNodes = document.querySelectorAll('*').length;
  results.scores['domComplexity'] = domNodes < 1500 ? 100 : domNodes < 3000 ? 75 : 50;
  
  if (domNodes > 3000) {
    results.issues.push(`⚠️ High DOM complexity: ${domNodes} nodes`);
    results.recommendations.push('Reduce DOM nodes, use virtualization for long lists');
  }

  // 3. Check memory usage (if available)
  if ((performance as any).memory) {
    const memoryMB = (performance as any).memory.usedJSHeapSize / (1024 * 1024);
    results.scores['memory'] = memoryMB < 50 ? 100 : memoryMB < 100 ? 75 : 50;
    
    if (memoryMB > 100) {
      results.issues.push(`⚠️ High memory usage: ${memoryMB.toFixed(0)}MB`);
      results.recommendations.push('Check for memory leaks, clean up event listeners');
    }
  }

  // 4. Check render performance
  const paintEntries = performance.getEntriesByType('paint');
  const fcp = paintEntries.find(e => e.name === 'first-contentful-paint');
  if (fcp) {
    const fcpTime = fcp.startTime;
    results.scores['fcp'] = fcpTime < 1500 ? 100 : fcpTime < 2500 ? 75 : 50;
    
    if (fcpTime > 2500) {
      results.issues.push(`⚠️ Slow First Contentful Paint: ${fcpTime.toFixed(0)}ms`);
      results.recommendations.push('Optimize critical rendering path, reduce render-blocking resources');
    }
  }

  // 5. Check for expensive re-renders
  const longTasks = performance.getEntriesByType('longtask');
  if (longTasks.length > 0) {
    results.scores['responsiveness'] = longTasks.length < 5 ? 75 : 50;
    results.issues.push(`⚠️ Detected ${longTasks.length} long tasks (>50ms)`);
    results.recommendations.push('Break up long JavaScript tasks, use Web Workers for heavy computations');
  }

  // Calculate overall score
  const scoreValues = Object.values(results.scores);
  const overallScore = scoreValues.reduce((a, b) => a + b, 0) / scoreValues.length;

  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('⚡ PERFORMANCE AUDIT REPORT');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`📊 Overall Score: ${overallScore.toFixed(0)}/100`);
  console.log('\n📈 Individual Scores:');
  Object.entries(results.scores).forEach(([key, score]) => {
    const emoji = score >= 90 ? '🟢' : score >= 70 ? '🟡' : '🔴';
    console.log(`  ${emoji} ${key}: ${score.toFixed(0)}/100`);
  });
  
  if (results.issues.length > 0) {
    console.log('\n⚠️  Issues Found:');
    results.issues.forEach(issue => console.log(`  ${issue}`));
  }
  
  if (results.recommendations.length > 0) {
    console.log('\n💡 Recommendations:');
    results.recommendations.forEach(rec => console.log(`  • ${rec}`));
  }
  
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  return { overallScore, ...results };
}

// Auto-run audit in development after page load
if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.DEV) {
  window.addEventListener('load', () => {
    setTimeout(() => {
      runPerformanceAudit();
    }, 2000);
  });
}
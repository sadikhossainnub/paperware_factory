// 🌐 Language Integration Checker for Paperware
// Checks if Bangla (and other languages) are properly integrated across all pages

import { translations } from './translations';

export interface LanguageCoverage {
  page: string;
  hasBangla: boolean;
  missingKeys: string[];
  coveragePercent: number;
}

/**
 * 📊 Check language coverage for a specific page
 */
export function checkPageLanguageCoverage(
  pageKeys: string[],
  lang: string = 'BN'
): LanguageCoverage {
  const langData = translations[lang] || {};
  const enData = translations['EN'] || {};
  
  const missingKeys: string[] = [];
  let translatedCount = 0;
  
  pageKeys.forEach(key => {
    if (langData[key] && langData[key] !== enData[key]) {
      translatedCount++;
    } else {
      missingKeys.push(key);
    }
  });
  
  const coveragePercent = Math.round((translatedCount / pageKeys.length) * 100);
  
  return {
    page: 'current',
    hasBangla: coveragePercent > 0,
    missingKeys,
    coveragePercent
  };
}

/**
 * 🔍 Comprehensive language audit
 */
export function performLanguageAudit() {
  const pages = {
    home: [
      'home', 'hero_title', 'hero_subtitle_1', 'hero_subtitle_2',
      'explore_products', 'e_brochure', 'factory_status',
      'our_legacy', 'who_we_really_are', 'why_choose'
    ],
    products: [
      'all_products', 'featured_creations', 'category',
      'technical_specs', 'request_quote', 'back_to_catalog'
    ],
    sustainability: [
      'sustainability', 'live_impact', 'plastic_prevented',
      'renewable_energy', 'water_recycled', 'fsc_certified'
    ],
    contact: [
      'contact', 'contact_title', 'contact_subtitle',
      'head_office', 'factory_address', 'init_connection'
    ],
    about: [
      'about', 'about_text_1', 'about_text_2',
      'full_story', 'years_quality'
    ],
    clients: [
      'clients', 'global_network', 'building_legacies',
      'showing_partners', 'nationwide_reach'
    ],
    export: [
      'global_export_intel', 'seamless_logistics',
      'start_export_inquiry', 'initialize_export_request'
    ],
    manufacturing: [
      'manufacturing', 'factory_live', 'machinery',
      'material_lab', 'production_status'
    ]
  };
  
  const results: Record<string, LanguageCoverage> = {};
  
  Object.entries(pages).forEach(([pageName, keys]) => {
    results[pageName] = checkPageLanguageCoverage(keys);
  });
  
  return results;
}

/**
 * 📈 Generate language coverage report
 */
export function generateLanguageReport(): string {
  const audit = performLanguageAudit();
  const BN = translations.BN || {};
  const EN = translations.EN || {};
  
  let report = '🌐 LANGUAGE INTEGRATION REPORT - PAPERWARE\n';
  report += '=' .repeat(60) + '\n\n';
  
  // Overall statistics
  const totalKeys = Object.keys(EN).length;
  const translatedKeys = Object.keys(BN).filter(key => 
    BN[key] && BN[key] !== EN[key]
  ).length;
  const overallCoverage = Math.round((translatedKeys / totalKeys) * 100);
  
  report += `📊 OVERALL STATISTICS:\n`;
  report += `   Total Translation Keys: ${totalKeys}\n`;
  report += `   Bangla Translated: ${translatedKeys}\n`;
  report += `   Coverage: ${overallCoverage}%\n`;
  report += `   Status: ${overallCoverage > 80 ? '✅ EXCELLENT' : overallCoverage > 50 ? '⚠️  GOOD' : '❌ NEEDS WORK'}\n\n`;
  
  // Page-by-page breakdown
  report += `📄 PAGE-BY-PAGE COVERAGE:\n`;
  report += '-'.repeat(60) + '\n';
  
  Object.entries(audit).forEach(([page, coverage]) => {
    const status = coverage.coveragePercent === 100 ? '✅' : 
                   coverage.coveragePercent > 70 ? '⚠️ ' : '❌';
    
    report += `${status} ${page.toUpperCase()}: ${coverage.coveragePercent}%\n`;
    
    if (coverage.missingKeys.length > 0 && coverage.missingKeys.length < 10) {
      report += `   Missing: ${coverage.missingKeys.join(', ')}\n`;
    }
  });
  
  report += '\n' + '='.repeat(60) + '\n';
  report += `\n✨ RECOMMENDATIONS:\n`;
  
  if (overallCoverage < 100) {
    report += `   1. Complete remaining ${totalKeys - translatedKeys} translations\n`;
    report += `   2. Review auto-translated content for accuracy\n`;
    report += `   3. Add cultural context where needed\n`;
  } else {
    report += `   ✅ All pages have complete Bangla translation!\n`;
  }
  
  return report;
}

/**
 * 🎯 Check if a specific key has Bangla translation
 */
export function hasBanglaTranslation(key: string): boolean {
  const BN = translations.BN || {};
  const EN = translations.EN || {};
  
  return BN[key] && BN[key] !== EN[key];
}

/**
 * 📝 Get translation status summary
 */
export function getTranslationSummary() {
  const EN = translations.EN || {};
  const BN = translations.BN || {};
  
  const totalKeys = Object.keys(EN).length;
  const banglaKeys = Object.keys(BN).filter(key => 
    BN[key] && BN[key] !== EN[key]
  ).length;
  
  const otherLanguages = Object.keys(translations).filter(
    lang => lang !== 'EN' && lang !== 'BN'
  );
  
  return {
    totalKeys,
    banglaKeys,
    banglaPercentage: Math.round((banglaKeys / totalKeys) * 100),
    availableLanguages: Object.keys(translations).length,
    otherLanguages,
    status: banglaKeys === totalKeys ? 'complete' : 
            banglaKeys > totalKeys * 0.8 ? 'good' : 
            banglaKeys > totalKeys * 0.5 ? 'fair' : 'poor'
  };
}

/**
 * 🔧 Auto-fix missing translations (placeholder)
 */
export function suggestMissingTranslations(): Record<string, string[]> {
  const audit = performLanguageAudit();
  const suggestions: Record<string, string[]> = {};
  
  Object.entries(audit).forEach(([page, coverage]) => {
    if (coverage.missingKeys.length > 0) {
      suggestions[page] = coverage.missingKeys;
    }
  });
  
  return suggestions;
}

/**
 * 🌍 Available languages list
 */
export function getAvailableLanguages() {
  return Object.keys(translations).map(code => ({
    code,
    name: getLanguageName(code),
    isComplete: checkLanguageCompleteness(code)
  }));
}

function getLanguageName(code: string): string {
  const names: Record<string, string> = {
    'EN': 'English',
    'BN': 'বাংলা (Bangla)',
    'AR': 'العربية (Arabic)',
    'TR': 'Türkçe (Turkish)',
    'DE': 'Deutsch (German)',
    'FR': 'Français (French)',
    'ES': 'Español (Spanish)',
    'ZH': '中文 (Chinese)',
    'HI': 'हिन्दी (Hindi)',
    'RU': 'Русский (Russian)',
    'JA': '日本語 (Japanese)',
    'KO': '한국어 (Korean)',
    'FA': 'فارسی (Persian)',
    'IT': 'Italiano (Italian)',
    'PT': 'Português (Portuguese)',
    'UR': 'اردو (Urdu)',
    'VN': 'Tiếng Việt (Vietnamese)',
    'TH': 'ไทย (Thai)',
    'ID': 'Bahasa Indonesia',
    'NL': 'Nederlands (Dutch)',
    'PL': 'Polski (Polish)',
    'SV': 'Svenska (Swedish)',
    'EL': 'Ελληνικά (Greek)',
    'MS': 'Bahasa Melayu (Malay)',
    'AF': 'Afrikaans',
    'AK': 'Akan'
  };
  
  return names[code] || code;
}

function checkLanguageCompleteness(code: string): boolean {
  const lang = translations[code] || {};
  const en = translations.EN || {};
  
  const totalKeys = Object.keys(en).length;
  const translatedKeys = Object.keys(lang).filter(key => 
    lang[key] && lang[key] !== en[key]
  ).length;
  
  return translatedKeys > totalKeys * 0.9; // 90% threshold
}

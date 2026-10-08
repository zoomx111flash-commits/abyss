/* ============================================================
   ABYSS · Language System
   ============================================================ */

(function(){
  "use strict";

  const TRANSLATIONS = {
    en: {
      'login.title': 'ABYSS',
      'login.subtitle': 'Hidden Network',
      'login.operator': 'Operator ID',
      'login.passphrase': 'Passphrase',
      'login.authenticate': 'Authenticate',
      'login.awaiting': 'Awaiting credentials',
      'login.enter_id': 'Enter your operator id',
      'login.enter_pass': 'Enter your passphrase',
      'login.secure_channel': 'Secure Channel',
      'login.decrypting': 'Decrypting...',
      'login.access_granted': 'Access granted',
      'login.invalid': 'Invalid credentials',
      'login.unknown': 'Unknown operator',
      'login.wrong_pass': 'Invalid passphrase',
      'login.too_many': 'Too many attempts',
      'login.required': 'Credentials required',
      'login.locked': 'ABYSS LOCKED',
      'login.suspended': 'Account suspended',

      'dash.title': 'Command Center',
      'dash.exit': 'Exit',
      'dash.add_section': 'Add New Section',
      'dash.icon': 'Icon',
      'dash.name': 'Name',
      'dash.description': 'Description',
      'dash.url': 'URL (optional)',
      'dash.add': 'Add Section',

      'chat.title': 'General Chat',
      'chat.channel': 'Encrypted Channel',
      'chat.type_message': 'Type a message...',
      'chat.send': 'Send',
      'chat.no_messages': 'No messages yet',
      'chat.remove': 'Remove',
      'chat.loading': 'Loading messages...',

      'files.title': 'File Vault',
      'files.upload_zone': 'Upload Zone',
      'files.click_drop': 'Click or Drop Images',
      'files.stored_info': 'Stored on ImgBB · Unlimited',
      'files.contents': 'Vault Contents',
      'files.no_files': 'No files yet',
      'files.open': 'Open',
      'files.files': 'files',

      'accounts.title': 'Account Registry',
      'accounts.operators': 'Operators',
      'accounts.no_name': '(no name set)',
      'accounts.set': 'Set',
      'accounts.edit': 'Edit',
      'accounts.view': 'View',
      'accounts.set_real': 'Set Real Name',
      'accounts.real_name': 'Real Name',
      'accounts.save': 'Save',
      'accounts.cancel': 'Cancel',
      'accounts.accounts': 'accounts',

      'admin.title': 'Command Center',
      'admin.restricted': 'Restricted',
      'admin.enter_code': 'Enter command code',
      'admin.unlock': 'Unlock',
      'admin.verifying': 'Verifying...',
      'admin.granted': 'Access granted',
      'admin.invalid_code': 'Invalid command code',
      'admin.master': 'Master Commands',
      'admin.wipe': 'Wipe Entire Chat',
      'admin.wipe_desc': 'delete all chat messages',
      'admin.lock': 'Lock The Abyss',
      'admin.lock_desc': 'block everyone except Devil-0',
      'admin.unlock_abyss': 'Unlock The Abyss',
      'admin.unlock_desc': 'allow everyone back in',
      'admin.suspend': 'Suspend User',
      'admin.suspend_desc': 'hide all sections from user',
      'admin.unsuspend': 'Unsuspend User',
      'admin.unsuspend_desc': 'restore a suspended user',
      'admin.registry': 'Operators Registry',
      'admin.owner': 'Owner',
      'admin.active': 'Active',
      'admin.locked': 'Locked',
      'admin.confirm': 'Confirm',
      'admin.cancel': 'Cancel',
      'admin.select_op': 'Select Operator',

      'dm.title': 'Direct Messages',
      'dm.favorites': 'Favorites',
      'dm.all': 'All',
      'dm.search': 'Search contacts...',
      'dm.select_chat': 'Select a contact to start chatting',
      'dm.type_message': 'Type a message...',
      'dm.send': 'Send',
      'dm.no_messages': 'No messages yet',
      'dm.you': 'YOU',

      'settings.title': 'Settings',
      'settings.language': 'Language',
      'settings.theme': 'Theme',
      'settings.saved': 'Saved',
      'settings.back': '← Back',

      'common.back': 'Back',
      'common.close': 'Close',
      'common.cancel': 'Cancel',
      'common.save': 'Save',
      'common.delete': 'Delete',
      'common.confirm': 'Confirm'
    },

    ar: {
      'login.title': 'الهاوية',
      'login.subtitle': 'الشبكة المخفية',
      'login.operator': 'معرف المشغل',
      'login.passphrase': 'كلمة المرور',
      'login.authenticate': 'تسجيل الدخول',
      'login.awaiting': 'في انتظار البيانات',
      'login.enter_id': 'اكتب معرف المشغل',
      'login.enter_pass': 'اكتب كلمة المرور',
      'login.secure_channel': 'قناة آمنة',
      'login.decrypting': 'جارٍ فك التشفير...',
      'login.access_granted': 'تم منح الوصول',
      'login.invalid': 'بيانات غير صحيحة',
      'login.unknown': 'مشغل غير معروف',
      'login.wrong_pass': 'كلمة مرور خاطئة',
      'login.too_many': 'محاولات كثيرة جداً',
      'login.required': 'البيانات مطلوبة',
      'login.locked': 'الهاوية مقفلة',
      'login.suspended': 'الحساب معلّق',

      'dash.title': 'مركز التحكم',
      'dash.exit': 'خروج',
      'dash.add_section': 'إضافة قسم جديد',
      'dash.icon': 'الأيقونة',
      'dash.name': 'الاسم',
      'dash.description': 'الوصف',
      'dash.url': 'الرابط (اختياري)',
      'dash.add': 'إضافة قسم',

      'chat.title': 'الشات العام',
      'chat.channel': 'القناة المشفرة',
      'chat.type_message': 'اكتب رسالة...',
      'chat.send': 'إرسال',
      'chat.no_messages': 'لا توجد رسائل بعد',
      'chat.remove': 'إزالة',
      'chat.loading': 'جارٍ التحميل...',

      'files.title': 'خزنة الملفات',
      'files.upload_zone': 'منطقة الرفع',
      'files.click_drop': 'اضغط أو اسحب الصور',
      'files.stored_info': 'محفوظة على ImgBB · بلا حدود',
      'files.contents': 'محتويات الخزنة',
      'files.no_files': 'لا توجد ملفات بعد',
      'files.open': 'فتح',
      'files.files': 'ملفات',

      'accounts.title': 'سجل الحسابات',
      'accounts.operators': 'المشغلون',
      'accounts.no_name': '(لا يوجد اسم)',
      'accounts.set': 'تعيين',
      'accounts.edit': 'تعديل',
      'accounts.view': 'عرض',
      'accounts.set_real': 'تعيين الاسم الحقيقي',
      'accounts.real_name': 'الاسم الحقيقي',
      'accounts.save': 'حفظ',
      'accounts.cancel': 'إلغاء',
      'accounts.accounts': 'حسابات',

      'admin.title': 'مركز التحكم',
      'admin.restricted': 'مقيّد',
      'admin.enter_code': 'أدخل رمز الدخول',
      'admin.unlock': 'فتح',
      'admin.verifying': 'جارٍ التحقق...',
      'admin.granted': 'تم منح الوصول',
      'admin.invalid_code': 'رمز غير صحيح',
      'admin.master': 'الأوامر الرئيسية',
      'admin.wipe': 'مسح الشات بالكامل',
      'admin.wipe_desc': 'حذف كل الرسائل',
      'admin.lock': 'قفل الهاوية',
      'admin.lock_desc': 'حجب الجميع ما عدا Devil-0',
      'admin.unlock_abyss': 'فتح الهاوية',
      'admin.unlock_desc': 'السماح للجميع بالدخول',
      'admin.suspend': 'تعليق مستخدم',
      'admin.suspend_desc': 'إخفاء الأقسام عن المستخدم',
      'admin.unsuspend': 'إلغاء تعليق مستخدم',
      'admin.unsuspend_desc': 'إعادة مستخدم معلّق',
      'admin.registry': 'سجل المشغلين',
      'admin.owner': 'المالك',
      'admin.active': 'نشط',
      'admin.locked': 'مقفل',
      'admin.confirm': 'تأكيد',
      'admin.cancel': 'إلغاء',
      'admin.select_op': 'اختر مشغل',

      'dm.title': 'الرسائل الخاصة',
      'dm.favorites': 'المفضلة',
      'dm.all': 'الكل',
      'dm.search': 'ابحث في جهات الاتصال...',
      'dm.select_chat': 'اختر جهة اتصال لبدء المحادثة',
      'dm.type_message': 'اكتب رسالة...',
      'dm.send': 'إرسال',
      'dm.no_messages': 'لا توجد رسائل بعد',
      'dm.you': 'أنت',

      'settings.title': 'الإعدادات',
      'settings.language': 'اللغة',
      'settings.theme': 'الثيم',
      'settings.saved': 'تم الحفظ',
      'settings.back': '← رجوع',

      'common.back': 'رجوع',
      'common.close': 'إغلاق',
      'common.cancel': 'إلغاء',
      'common.save': 'حفظ',
      'common.delete': 'حذف',
      'common.confirm': 'تأكيد'
    }
  };

  function getLang(){
    return localStorage.getItem('abyss_lang') || 'en';
  }

  function setLang(lang){
    if (!TRANSLATIONS[lang]) return;
    localStorage.setItem('abyss_lang', lang);
    applyLang();
  }

  function t(key){
    const lang = getLang();
    return (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || key;
  }

  function applyLang(){
    const lang = getLang();
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach(function(el){
      const key = el.getAttribute('data-i18n');
      const translation = t(key);
      if (translation !== key){
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA'){
          el.placeholder = translation;
        } else {
          el.textContent = translation;
        }
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el){
      const key = el.getAttribute('data-i18n-placeholder');
      const translation = t(key);
      if (translation !== key){
        el.placeholder = translation;
      }
    });

    window.dispatchEvent(new CustomEvent('langChanged', { detail: { lang: lang } }));
  }

  applyLang();

  window.AbyssLang = {
    t: t,
    getLang: getLang,
    setLang: setLang,
    apply: applyLang,
    translations: TRANSLATIONS
  };
})();

/* ============================================
   碧蓝海岸 · Azure Coast Travel
   Bilingual support, scroll animations
   ============================================ */
(function() {
  'use strict';

  // ============================================
  // I18N — 中英双语词条
  // ============================================
  const i18n = {
    zh: {
      brand: '碧蓝海岸',
      nav_dest: '目的地', nav_tours: '行程', nav_exp: '体验',
      nav_hotels: '住宿', nav_guide: '攻略', nav_gallery: '图集',
      hero_suptitle: '探索世界的海岸线',
      hero_title: '让每一次旅行<br>都成为<em>永恒</em>',
      hero_subtitle: '从碧蓝的海水到金色的沙滩，从隐秘的港湾到壮丽的悬崖——我们带你发现地球上最美的海岸',
      hero_btn_tours: '探索行程', hero_btn_dest: '热门目的地',
      search_placeholder_dest: '选择目的地', search_placeholder_date: '输入日期或关键词',
      search_btn: '搜索',
      scroll: '向下探索',
      label_dest: '热门目的地',
      dest_title: '精选旅行目的地',
      dest_desc: '从热带天堂到地中海明珠，每一处都是值得造访的绝美海岸',
      badge_hot: '热门', badge_luxury: '奢华',
      dest_sanya_desc: '中国最美的热带海滨城市，拥有洁白细腻的沙滩和清澈温暖的海水。亚龙湾、海棠湾等顶级海湾等你探索。',
      dest_bali_desc: '众神之岛，融合了绝美的海滩、梯田与文化遗迹。乌布的艺术气息和库塔的冲浪文化同样迷人。',
      dest_santorini_desc: '蓝白相间的梦幻岛屿，爱琴海上最璀璨的明珠。标志性的蓝顶教堂和壮丽的火山口日落令人陶醉。',
      dest_maldives_desc: '印度洋上的人间天堂，环礁环绕的碧蓝泻湖与奢华水上别墅。全球顶级潜水胜地，与鲸鲨同游的终极梦想。',
      tag_beach: '海滩', tag_diving: '潜水', tag_resort: '度假村',
      tag_culture: '文化', tag_surfing: '冲浪', tag_yoga: '瑜伽',
      tag_sunset: '日落', tag_romantic: '浪漫', tag_wine: '美酒',
      tag_overwater: '水上屋', tag_snorkeling: '浮潜', tag_spa: '水疗',
      label_tours: '精选行程',
      tours_title: '策划你的完美假期',
      tours_desc: '由资深旅行设计师精心打造的行程方案，让每一段旅程都成为难忘的回忆',
      btn_detail: '查看详情',
      tour_01_title: '马尔代夫 · 梦幻环礁之旅',
      tour_01_desc: '入住顶级水上别墅，与海龟和蝠鲼共游，在私人沙滩上享受烛光晚餐。',
      tour_02_title: '希腊 · 爱琴海浪漫之旅',
      tour_02_desc: '漫步蓝白小镇，在伊亚欣赏世界最美日落，品味地道的希腊美食与美酒。',
      tour_03_title: '巴厘岛 · 灵性与冲浪之旅',
      tour_03_desc: '探访乌布稻田与神庙，体验冲浪课程和传统SPA，感受巴厘岛的文化与自然。',
      label_exp: '特色体验',
      exp_title: '超越旅行的体验',
      exp_desc: '不只是观光，让每一次旅行都成为独特的生命体验',
      exp_01_title: '深海潜水', exp_01_desc: '探索五彩斑斓的珊瑚礁，与海龟、蝠鲼和鲸鲨共游，感受海洋的壮丽与神秘。',
      exp_02_title: '冲浪体验', exp_02_desc: '从初学者到进阶者，在世界级浪点跟随专业教练学习，征服海浪的快感无与伦比。',
      exp_03_title: '海滨瑜伽', exp_03_desc: '在日出时分的海滩上，伴随海浪声进行身心合一的瑜伽冥想，找回内心的平静。',
      exp_04_title: '美酒品鉴', exp_04_desc: '在悬崖顶端的酒庄品尝当地佳酿，欣赏壮阔海景，让味蕾与视觉同享盛宴。',
      label_hotels: '精选住宿',
      hotels_title: '每一晚都是享受',
      hotels_desc: '从奢华度假村到精品民宿，为你甄选最优质的滨海住宿',
      type_luxury: '奢华度假村', type_overwater: '水上别墅',
      hotel_01_name: '碧海蓝天度假村',
      hotel_01_loc: '📍 三亚 · 亚龙湾',
      hotel_01_desc: '坐拥私人海滩，每间客房都面朝大海。无边际泳池与热带花园相映成趣，提供世界级的水疗体验。',
      hotel_02_name: '珊瑚海水上别墅',
      hotel_02_loc: '📍 马尔代夫 · 南环礁',
      hotel_02_desc: '建在碧蓝泻湖之上的奢华别墅，透明玻璃地板可观赏海底世界。私人甲板直通大海，感受被海洋包围的奇妙。',
      btn_book: '预订',
      label_guide: '旅行攻略',
      guide_title: '出行前必读',
      guide_desc: '实用的旅行贴士让您的海岸之旅更加轻松愉快',
      guide_01_title: '最佳出行时间',
      guide_01_desc: '不同海岸目的地的气候各异。热带地区11月至次年4月为旱季，地中海沿岸5月至9月阳光充沛。合理规划时间避开台风和雨季，才能享受完美假期。',
      guide_02_title: '出行准备清单',
      guide_02_desc: '防晒用品、泳装、防水袋、浮潜装备、轻便衣物、急救药品、旅行保险缺一不可。别忘了检查护照有效期和签证要求，提前兑换当地货币。',
      guide_03_title: '当地美食推荐',
      guide_03_desc: '在海岛旅行不可错过新鲜捕捞的海鲜盛宴。从泰国的冬阴功到希腊的海鲜拼盘，从巴厘岛的脏鸭餐到海南的文昌鸡，让味蕾随风景一起旅行。',
      label_reviews: '旅友评价',
      reviews_title: '听听他们的故事',
      reviews_desc: '来自真实旅行者的心声，分享碧蓝海岸带来的美好回忆',
      review_01_text: '"马尔代夫的水上别墅简直像是做梦一样！早上醒来就能透过玻璃地板看到鱼群游过。碧蓝海岸的行程安排非常周到，从接机到送机全程无忧，强烈推荐！"',
      review_01_role: '蜜月旅行者 · 上海',
      review_02_text: '"圣托里尼的日落真的太震撼了！碧蓝海岸安排的私人摄影师帮我们拍了很多照片，每一张都像明信片一样。伊亚小镇的蓝顶教堂和悬崖餐厅让人终身难忘。"',
      review_02_role: '蜜月旅行者 · 北京',
      review_03_text: '"在巴厘岛学冲浪是我做过最酷的事！教练非常耐心，第三天就能站在浪板上了。乌布的稻田徒步和猴子森林也超好玩，这是一次充满冒险与放松的完美假期。"',
      review_03_role: '自由旅行者 · 广州',
      label_gallery: '精彩图集',
      gallery_title: '海岸掠影',
      gallery_desc: '用镜头记录这个世界最美丽的角落，每一帧都是壁纸级别',
      gallery_01: '热带海滩', gallery_02: '海岸日落',
      gallery_03: '珊瑚秘境', gallery_04: '蔚蓝海岸', gallery_05: '天堂沙滩',
      newsletter_title: '开启你的海岸之旅',
      newsletter_desc: '订阅我们的旅行通讯，获取最新目的地推荐、独家优惠和旅行灵感。每月精选，直抵你的邮箱。',
      newsletter_placeholder: '输入你的邮箱地址',
      newsletter_btn: '立即订阅',
      footer_tagline: '探索世界最美的海岸线，创造属于你的旅行故事。',
      footer_explore: '探索', footer_service: '服务',
      footer_about: '关于我们', footer_contact: '联系我们',
      footer_faq: '常见问题', footer_privacy: '隐私政策',
      footer_contact_title: '联系方式',
      footer_address: '上海市黄浦区南京东路100号',
      footer_copyright: '© 2026 碧蓝海岸 Azure Coast Travel. All rights reserved.',
    },
    en: {
      brand: 'Azure Coast',
      nav_dest: 'Destinations', nav_tours: 'Tours', nav_exp: 'Experiences',
      nav_hotels: 'Hotels', nav_guide: 'Guide', nav_gallery: 'Gallery',
      hero_suptitle: 'Explore the World\'s Coastlines',
      hero_title: 'Make Every Journey<br><em>Eternal</em>',
      hero_subtitle: 'From azure waters to golden sands, from hidden coves to majestic cliffs — we take you to the world\'s most beautiful shores.',
      hero_btn_tours: 'Explore Tours', hero_btn_dest: 'Destinations',
      search_placeholder_dest: 'Choose destination', search_placeholder_date: 'Date or keyword',
      search_btn: 'Search',
      scroll: 'Scroll to explore',
      label_dest: 'Popular Destinations',
      dest_title: 'Curated Destinations',
      dest_desc: 'From tropical paradises to Mediterranean gems, every destination is a story waiting to be discovered.',
      badge_hot: 'Hot', badge_luxury: 'Luxury',
      dest_sanya_desc: 'China\'s most beautiful tropical coastal city, with pristine white sand beaches and crystal-clear warm waters.',
      dest_bali_desc: 'Island of the Gods, blending stunning beaches, rice terraces, and rich cultural heritage.',
      dest_santorini_desc: 'A dreamy blue-and-white island, the brightest pearl of the Aegean Sea with iconic sunsets.',
      dest_maldives_desc: 'Heaven on Earth in the Indian Ocean — atoll-fringed turquoise lagoons and luxury overwater villas.',
      tag_beach: 'Beach', tag_diving: 'Diving', tag_resort: 'Resort',
      tag_culture: 'Culture', tag_surfing: 'Surfing', tag_yoga: 'Yoga',
      tag_sunset: 'Sunset', tag_romantic: 'Romantic', tag_wine: 'Wine',
      tag_overwater: 'Overwater', tag_snorkeling: 'Snorkeling', tag_spa: 'Spa',
      label_tours: 'Featured Tours',
      tours_title: 'Plan Your Perfect Getaway',
      tours_desc: 'Expertly crafted itineraries by seasoned travel designers for unforgettable journeys.',
      btn_detail: 'View Details',
      tour_01_title: 'Maldives · Dream Atoll Escape',
      tour_01_desc: 'Stay in premium overwater villas, swim with sea turtles and manta rays.',
      tour_02_title: 'Greece · Romantic Aegean Voyage',
      tour_02_desc: 'Stroll through blue-and-white towns, watch world-famous sunsets in Oia.',
      tour_03_title: 'Bali · Spirit & Surf Adventure',
      tour_03_desc: 'Explore Ubud\'s rice terraces and temples, learn to surf and enjoy traditional spa.',
      label_exp: 'Experiences',
      exp_title: 'Beyond Ordinary Travel',
      exp_desc: 'Transform every trip into a unique life experience.',
      exp_01_title: 'Deep Sea Diving', exp_01_desc: 'Explore vibrant coral reefs and swim with sea turtles, manta rays, and whale sharks.',
      exp_02_title: 'Surfing', exp_02_desc: 'Learn from pro coaches at world-class waves. The thrill of conquering the ocean is unmatched.',
      exp_03_title: 'Beach Yoga', exp_03_desc: 'Find inner peace with sunrise yoga on the beach, accompanied by the sound of waves.',
      exp_04_title: 'Wine Tasting', exp_04_desc: 'Savor local vintages at cliff-top vineyards with breathtaking ocean views.',
      label_hotels: 'Accommodations',
      hotels_title: 'Every Night Matters',
      hotels_desc: 'From luxury resorts to boutique hotels, we curate the finest coastal stays.',
      type_luxury: 'Luxury Resort', type_overwater: 'Overwater Villa',
      hotel_01_name: 'Azure Bay Resort',
      hotel_01_loc: '📍 Sanya · Yalong Bay',
      hotel_01_desc: 'Private beach access, ocean-view rooms, infinity pool, and world-class spa services.',
      hotel_02_name: 'Coral Sea Overwater Villa',
      hotel_02_loc: '📍 Maldives · South Atoll',
      hotel_02_desc: 'Luxury villas on turquoise lagoons with glass floors, private decks, and direct ocean access.',
      btn_book: 'Book Now',
      label_guide: 'Travel Guide',
      guide_title: 'Before You Go',
      guide_desc: 'Practical tips to make your coastal journey smooth and enjoyable.',
      guide_01_title: 'Best Time to Travel',
      guide_01_desc: 'Tropical destinations are best from November to April. Mediterranean coasts shine from May to September. Plan ahead for perfect weather.',
      guide_02_title: 'Packing Checklist',
      guide_02_desc: 'Sunscreen, swimwear, waterproof bags, snorkel gear, light clothing, first-aid kit, travel insurance. Don\'t forget your passport!',
      guide_03_title: 'Local Cuisine',
      guide_03_desc: 'Fresh seafood feasts await at every destination. From Thai tom yum to Greek seafood platters, let your taste buds travel too.',
      label_reviews: 'Testimonials',
      reviews_title: 'Hear Their Stories',
      reviews_desc: 'Real travelers share their unforgettable Azure Coast experiences.',
      review_01_text: '"The overwater villa in the Maldives was like a dream! Waking up to fish swimming under the glass floor was magical. Everything was perfectly arranged."',
      review_01_role: 'Honeymooner · Shanghai',
      review_02_text: '"The Santorini sunset was breathtaking! The private photographer arranged by Azure Coast captured stunning photos. Truly unforgettable."',
      review_02_role: 'Honeymooner · Beijing',
      review_03_text: '"Learning to surf in Bali was the coolest thing ever! Patient instructors, perfect waves, beautiful rice terraces. The perfect adventure!"',
      review_03_role: 'Solo Traveler · Guangzhou',
      label_gallery: 'Gallery',
      gallery_title: 'Coastal Impressions',
      gallery_desc: 'Capturing the world\'s most beautiful corners through the lens.',
      gallery_01: 'Tropical Beach', gallery_02: 'Coastal Sunset',
      gallery_03: 'Coral Paradise', gallery_04: 'Azure Shore', gallery_05: 'Heavenly Sands',
      newsletter_title: 'Start Your Coastal Journey',
      newsletter_desc: 'Subscribe for destination inspiration, exclusive deals, and travel tips delivered monthly to your inbox.',
      newsletter_placeholder: 'Enter your email address',
      newsletter_btn: 'Subscribe Now',
      footer_tagline: 'Discover the world\'s most beautiful coastlines and create your travel story.',
      footer_explore: 'Explore', footer_service: 'Service',
      footer_about: 'About Us', footer_contact: 'Contact Us',
      footer_faq: 'FAQ', footer_privacy: 'Privacy Policy',
      footer_contact_title: 'Contact Info',
      footer_address: '100 East Nanjing Rd, Huangpu, Shanghai',
      footer_copyright: '© 2026 Azure Coast Travel. All rights reserved.',
    }
  };
  // ============================================
  // DOM refs
  // ============================================
  const header = document.getElementById('header');
  const langToggle = document.getElementById('langToggle');
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  let currentLang = 'zh';

  // ============================================
  // LANGUAGE SWITCH
  // ============================================
  function setLang(lang) {
    currentLang = lang;
    const langData = i18n[lang];
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (langData[key]) el.innerHTML = langData[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (langData[key]) el.placeholder = langData[key];
    });

    document.querySelectorAll('.lang-option').forEach(el => {
      el.classList.toggle('active', el.dataset.lang === lang);
    });

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.content = lang === 'zh'
        ? '碧蓝海岸 — 探索世界最美的海岸线，发现属于你的旅行故事。'
        : 'Azure Coast Travel — Discover the world\'s most beautiful coastlines.';
    }
  }

  langToggle.addEventListener('click', () => {
    setLang(currentLang === 'zh' ? 'en' : 'zh');
  });

  // ============================================
  // MOBILE MENU
  // ============================================
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });

  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mainNav.classList.remove('open'));
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) mainNav.classList.remove('open');
  });

  // ============================================
  // HEADER SCROLL EFFECT
  // ============================================
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 80) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    lastScroll = scrollY;
  });

  // ============================================
  // SCROLL REVEAL — Intersection Observer
  // ============================================
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -60px 0px', threshold: 0.08 });

  revealEls.forEach(el => revealObserver.observe(el));

  // ============================================
  // SMOOTH SCROLL for anchor links
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ============================================
  // INIT
  // ============================================
  setLang('zh');

})();

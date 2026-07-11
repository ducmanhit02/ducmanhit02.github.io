const toast = document.querySelector("[data-toast]");
    const modalLayer = document.querySelector("[data-modal-layer]");
    const modalTitle = document.querySelector("[data-modal-title]");
    const modalTag = document.querySelector("[data-modal-tag]");
    const modalDesc = document.querySelector("[data-modal-desc]");
    const modalList = document.querySelector("[data-modal-list]");
    const modalChips = document.querySelector("[data-modal-chips]");
    const clockNode = document.querySelector("[data-clock]");
    const dateNode = document.querySelector("[data-date]");
    const lunarNode = document.querySelector("[data-lunar]");
    const heroClockNode = document.querySelector("[data-hero-clock]");
    const heroDateNode = document.querySelector("[data-hero-date]");
    const heroLunarNode = document.querySelector("[data-hero-lunar]");
    const heroCanChiNode = document.querySelector("[data-hero-canchi]");
    const dailyFocusNode = document.querySelector("[data-daily-focus]");
    const syncStateNode = document.querySelector("[data-sync-state]");
    const timeSourceNode = document.querySelector("[data-time-source]");
    const floatingMenu = document.querySelector("[data-floating-menu]");
    const floatingToggle = document.querySelector("[data-floating-toggle]");
    const ideaNoteNode = document.querySelector("[data-idea-note]");

    const modalData = {
      profile: {
        tag: "Profile snapshot",
        title: "Nông Đức Mạnh",
        desc: "Một hồ sơ phù hợp với các team cần người đa nhiệm giữa marketing, thiết kế, website và quảng cáo số.",
        bullets: [
          "Khoảng 5 năm kinh nghiệm thực chiến trong thiết kế và marketing.",
          "Có thể tham gia từ khâu lên ý tưởng, sản xuất hình ảnh, quản trị nội dung đến đo lường hiệu quả.",
          "Ưu tiên sản phẩm truyền thông rõ mục tiêu, đẹp, dễ hiểu và có khả năng chuyển đổi."
        ],
        chips: ["Marketing", "Graphic Design", "Website", "Ads", "E-commerce"]
      },
      design: {
        tag: "Design system",
        title: "Graphic Design",
        desc: "Tập trung vào hình ảnh thương hiệu có tính ứng dụng: đẹp, rõ thông điệp, triển khai được trên nhiều kênh.",
        bullets: [
          "Thiết kế banner, poster, standee, catalogue, brochure và social post.",
          "Dựng key visual theo chiến dịch, giữ tính đồng bộ giữa online và offline.",
          "Chỉnh sửa ảnh, dựng thumbnail, xử lý visual cho landing page và quảng cáo."
        ],
        chips: ["Photoshop", "Illustrator", "Social Design", "KV", "Ấn phẩm"]
      },
      social: {
        tag: "Content engine",
        title: "Social Media",
        desc: "Xây dựng nhịp nội dung đều, có chủ đề rõ, bám insight và giữ được giọng thương hiệu.",
        bullets: [
          "Lên kế hoạch nội dung cho Facebook, Instagram, TikTok và YouTube.",
          "Viết caption, đề xuất format, nghiên cứu xu hướng và hành vi khách hàng.",
          "Theo dõi tương tác để điều chỉnh nội dung qua từng giai đoạn."
        ],
        chips: ["Content Plan", "Insight", "Fanpage", "TikTok", "YouTube"]
      },
      web: {
        tag: "Web commerce",
        title: "Website & E-commerce",
        desc: "Kết nối tư duy thiết kế với vận hành bán hàng: sản phẩm rõ, hành trình dễ hiểu, thao tác gọn.",
        bullets: [
          "Quản trị website bán hàng, cập nhật sản phẩm và nội dung.",
          "Thiết kế landing page, tối ưu bố cục, CTA, UI/UX và SEO cơ bản.",
          "Theo dõi hiệu suất website, hỗ trợ khách hàng và xử lý nội dung vận hành."
        ],
        chips: ["Landing Page", "UI/UX", "SEO Basic", "HTML/CSS", "E-commerce"]
      },
      ads: {
        tag: "Performance",
        title: "Digital Advertising",
        desc: "Thiết lập và tối ưu quảng cáo với góc nhìn kết hợp giữa creative, ngân sách và dữ liệu.",
        bullets: [
          "Thiết lập Facebook Ads, Google Ads, remarketing và nhóm chiến dịch cơ bản.",
          "Theo dõi KPI, đọc performance và đề xuất vòng tối ưu tiếp theo.",
          "Kết hợp hình ảnh, thông điệp và landing page để tăng hiệu quả chuyển đổi."
        ],
        chips: ["Meta Ads", "Google Ads", "KPI", "Remarketing", "Conversion"]
      },
      "brand-assets": {
        tag: "Selected output",
        title: "Bộ hình ảnh chiến dịch",
        desc: "Một bộ visual tốt giúp chiến dịch nhìn chuyên nghiệp ngay từ lần chạm đầu tiên.",
        bullets: [
          "Định hướng hình ảnh chính, màu nhấn, style chữ và bố cục lặp lại.",
          "Triển khai banner, poster, standee, social post và hình ảnh website.",
          "Giữ tính nhận diện nhất quán khi chuyển qua nhiều kích thước."
        ],
        chips: ["Key Visual", "Banner", "Poster", "Standee"]
      },
      "content-system": {
        tag: "Selected output",
        title: "Lịch nội dung mạng xã hội",
        desc: "Nội dung tốt cần nhịp đăng rõ, chủ đề có lớp lang và đo được phản ứng của người xem.",
        bullets: [
          "Lập calendar theo tuần/tháng, chia nhóm nội dung theo mục tiêu.",
          "Viết nội dung, đề xuất format visual, theo dõi tương tác.",
          "Điều chỉnh tuyến bài theo xu hướng và dữ liệu thực tế."
        ],
        chips: ["Calendar", "Caption", "Insight", "Trend"]
      },
      "landing-page": {
        tag: "Selected output",
        title: "Landing page bán hàng",
        desc: "Landing page cần làm rõ giá trị, giảm ma sát và đưa người xem tới hành động nhanh hơn.",
        bullets: [
          "Sắp xếp thông tin theo luồng: vấn đề, lợi ích, sản phẩm, bằng chứng, CTA.",
          "Thiết kế hình ảnh, section sản phẩm và nội dung bán hàng.",
          "Tối ưu bố cục để đọc tốt trên cả desktop và mobile."
        ],
        chips: ["UX Flow", "CTA", "Product", "Mobile"]
      },
      "ad-creative": {
        tag: "Selected output",
        title: "Creative cho quảng cáo",
        desc: "Creative quảng cáo cần thu hút nhanh, rõ thông điệp và đủ biến thể để test.",
        bullets: [
          "Thiết kế nhiều hướng visual cho cùng một thông điệp.",
          "Tối ưu thumbnail, headline, layout và điểm nhấn sản phẩm.",
          "Đọc performance để giữ lại hướng hiệu quả và cải thiện vòng sau."
        ],
        chips: ["A/B Test", "Creative", "Headline", "Performance"]
      }
    };

    const insightData = {
      campaign: {
        title: "Triển khai chiến dịch gọn và rõ",
        text: "Nhận brief, tách mục tiêu, đề xuất hướng nội dung, dựng visual và theo dõi chỉ số để tối ưu qua từng vòng."
      },
      design: {
        title: "Biến ý tưởng thành hình ảnh dùng được",
        text: "Từ social post đến landing page, ưu tiên bố cục rõ, nhận diện ổn định và đủ linh hoạt cho nhiều kích thước."
      },
      growth: {
        title: "Kết nối creative với hiệu quả kinh doanh",
        text: "Không chỉ làm đẹp, mỗi asset đều được nhìn theo mục tiêu tương tác, traffic, chuyển đổi hoặc hỗ trợ bán hàng."
      }
    };

    const dailyFocus = [
      "Dọn insight, lên lịch nội dung",
      "Chốt thông điệp chính",
      "Thiết kế visual chủ lực",
      "Đo số liệu, tối ưu nội dung",
      "Kiểm tra landing page",
      "Tăng tốc creative quảng cáo",
      "Tổng kết và chuẩn bị tuần mới",
      "Viết lại headline cho gọn hơn",
      "Test một layout social mới",
      "Chọn 3 chỉ số cần theo dõi"
    ];

    const ideaPrompts = [
      "Làm một mini-series 5 bài: vấn đề, giải pháp, bằng chứng, hậu trường, lời mời hành động.",
      "Tạo 3 biến thể banner cùng thông điệp nhưng khác điểm nhấn: giá trị, cảm xúc, kết quả.",
      "Biến phần FAQ thành nội dung ngắn cho social để kéo traffic về landing page.",
      "Dùng một case nhỏ trước-sau để chứng minh tư duy thiết kế và tối ưu chuyển đổi.",
      "Làm checklist 7 điểm cho landing page bán hàng rồi dùng nó làm bài chia sẻ chuyên môn.",
      "Tạo một bộ thumbnail thống nhất style để fanpage nhìn chuyên nghiệp hơn trong 7 ngày."
    ];

    const timeSources = [
      {
        name: "TimeAPI.io",
        url: "https://timeapi.io/api/Time/current/zone?timeZone=Asia/Ho_Chi_Minh",
        parse(data) {
          if (!data || typeof data.year !== "number") return null;
          const ms = typeof data.milliSeconds === "number" ? data.milliSeconds : 0;
          return Date.UTC(data.year, data.month - 1, data.day, data.hour - 7, data.minute, data.seconds, ms);
        }
      },
      {
        name: "WorldTimeAPI",
        url: "https://worldtimeapi.org/api/timezone/Asia/Ho_Chi_Minh",
        parse(data) {
          if (data && typeof data.unixtime === "number") return data.unixtime * 1000;
          if (data && data.datetime) {
            const parsed = Date.parse(data.datetime);
            return Number.isNaN(parsed) ? null : parsed;
          }
          return null;
        }
      }
    ];

    let syncedClock = null;
    let syncingTime = false;
    let manualFocus = null;

    function showToast(message) {
      if (!toast) return;
      toast.textContent = message;
      toast.classList.add("is-visible");
      clearTimeout(showToast.timer);
      showToast.timer = setTimeout(() => toast.classList.remove("is-visible"), 2200);
    }

    function setSyncState(text, mode = "pending") {
      if (syncStateNode) {
        syncStateNode.textContent = text;
        syncStateNode.dataset.mode = mode;
      }
    }

    function setIdeaPrompt() {
      if (!ideaNoteNode) return;
      const current = ideaNoteNode.textContent.trim();
      const next = ideaPrompts.find((item) => item !== current) || ideaPrompts[0];
      const randomIndex = Math.floor(Math.random() * ideaPrompts.length);
      const randomPrompt = ideaPrompts[randomIndex] === current ? next : ideaPrompts[randomIndex];
      ideaNoteNode.textContent = randomPrompt;
      showToast("Đã tạo một gợi ý ý tưởng mới");
    }

    function shuffleDailyFocus() {
      const current = dailyFocusNode ? dailyFocusNode.textContent.trim() : "";
      const pool = dailyFocus.filter((item) => item !== current);
      manualFocus = pool[Math.floor(Math.random() * pool.length)] || dailyFocus[0];
      if (dailyFocusNode) dailyFocusNode.textContent = manualFocus;
      showToast("Đã đổi gợi ý hôm nay");
    }

    function setTimeSource(text) {
      if (timeSourceNode) timeSourceNode.textContent = text;
    }

    function getSyncedNow() {
      if (!syncedClock) return null;
      return new Date(syncedClock.epochMs + performance.now() - syncedClock.syncedAt);
    }

    async function syncWebTime() {
      if (syncingTime) return;
      syncingTime = true;
      if (!syncedClock) {
        setSyncState("Đang đồng bộ", "pending");
        setTimeSource("Đang lấy thời gian từ web...");
      }

      for (const source of timeSources) {
        try {
          const response = await fetch(source.url, { cache: "no-store" });
          if (!response.ok) throw new Error(`HTTP ${response.status}`);
          const data = await response.json();
          const epochMs = source.parse(data);
          if (!Number.isFinite(epochMs)) throw new Error("Invalid time payload");
          syncedClock = {
            epochMs,
            source: source.name,
            syncedAt: performance.now()
          };
          setSyncState("Đồng bộ web", "ok");
          updateClock();
          const syncedAt = getSyncedNow();
          const syncText = syncedAt
            ? new Intl.DateTimeFormat("vi-VN", {
                timeZone: "Asia/Ho_Chi_Minh",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false
              }).format(syncedAt)
            : "--:--:--";
          setTimeSource(`Nguồn: ${source.name} • cập nhật ${syncText}`);
          syncingTime = false;
          return;
        } catch (error) {
          // Try the next public time source before reporting a sync issue.
        }
      }

      syncingTime = false;
      setSyncState("Mất kết nối web", "error");
      setTimeSource("Chưa đồng bộ được thời gian web. Kiểm tra kết nối mạng rồi tải lại trang.");
    }

    function INT(value) {
      return Math.floor(value);
    }

    function jdFromDate(dd, mm, yy) {
      const a = INT((14 - mm) / 12);
      const y = yy + 4800 - a;
      const m = mm + 12 * a - 3;
      let jd = dd + INT((153 * m + 2) / 5) + 365 * y + INT(y / 4) - INT(y / 100) + INT(y / 400) - 32045;
      if (jd < 2299161) {
        jd = dd + INT((153 * m + 2) / 5) + 365 * y + INT(y / 4) - 32083;
      }
      return jd;
    }

    function newMoon(k) {
      const time = k / 1236.85;
      const time2 = time * time;
      const time3 = time2 * time;
      const degree = Math.PI / 180;
      let jd = 2415020.75933 + 29.53058868 * k + 0.0001178 * time2 - 0.000000155 * time3;
      jd += 0.00033 * Math.sin((166.56 + 132.87 * time - 0.009173 * time2) * degree);
      const meanSun = 359.2242 + 29.10535608 * k - 0.0000333 * time2 - 0.00000347 * time3;
      const meanMoon = 306.0253 + 385.81691806 * k + 0.0107306 * time2 + 0.00001236 * time3;
      const moonLatitude = 21.2964 + 390.67050646 * k - 0.0016528 * time2 - 0.00000239 * time3;
      let correction = (0.1734 - 0.000393 * time) * Math.sin(meanSun * degree) + 0.0021 * Math.sin(2 * meanSun * degree);
      correction -= 0.4068 * Math.sin(meanMoon * degree) + 0.0161 * Math.sin(2 * meanMoon * degree);
      correction -= 0.0004 * Math.sin(3 * meanMoon * degree);
      correction += 0.0104 * Math.sin(2 * moonLatitude * degree) - 0.0051 * Math.sin((meanSun + meanMoon) * degree);
      correction -= 0.0074 * Math.sin((meanSun - meanMoon) * degree);
      correction += 0.0004 * Math.sin((2 * moonLatitude + meanSun) * degree);
      correction -= 0.0004 * Math.sin((2 * moonLatitude - meanSun) * degree);
      correction -= 0.0006 * Math.sin((2 * moonLatitude + meanMoon) * degree);
      correction += 0.0010 * Math.sin((2 * moonLatitude - meanMoon) * degree);
      correction += 0.0005 * Math.sin((2 * meanMoon + meanSun) * degree);
      const deltaT = time < -11
        ? 0.001 + 0.000839 * time + 0.0002261 * time2 - 0.00000845 * time3 - 0.000000081 * time * time3
        : -0.000278 + 0.000265 * time + 0.000262 * time2;
      return jd + correction - deltaT;
    }

    function sunLongitude(jdn) {
      const time = (jdn - 2451545.0) / 36525;
      const time2 = time * time;
      const degree = Math.PI / 180;
      const meanAnomaly = 357.52910 + 35999.05030 * time - 0.0001559 * time2 - 0.00000048 * time * time2;
      const meanLongitude = 280.46645 + 36000.76983 * time + 0.0003032 * time2;
      let delta = (1.914600 - 0.004817 * time - 0.000014 * time2) * Math.sin(degree * meanAnomaly);
      delta += (0.019993 - 0.000101 * time) * Math.sin(degree * 2 * meanAnomaly) + 0.000290 * Math.sin(degree * 3 * meanAnomaly);
      let longitude = (meanLongitude + delta) * degree;
      longitude -= Math.PI * 2 * INT(longitude / (Math.PI * 2));
      return longitude;
    }

    function getSunLongitude(dayNumber, timeZone) {
      return INT(sunLongitude(dayNumber - 0.5 - timeZone / 24) / Math.PI * 6);
    }

    function getNewMoonDay(k, timeZone) {
      return INT(newMoon(k) + 0.5 + timeZone / 24);
    }

    function getLunarMonth11(yy, timeZone) {
      const off = jdFromDate(31, 12, yy) - 2415021;
      const k = INT(off / 29.530588853);
      let nm = getNewMoonDay(k, timeZone);
      const sunLong = getSunLongitude(nm, timeZone);
      if (sunLong >= 9) nm = getNewMoonDay(k - 1, timeZone);
      return nm;
    }

    function getLeapMonthOffset(a11, timeZone) {
      const k = INT((a11 - 2415021.076998695) / 29.530588853 + 0.5);
      let last = 0;
      let i = 1;
      let arc = getSunLongitude(getNewMoonDay(k + i, timeZone), timeZone);
      do {
        last = arc;
        i += 1;
        arc = getSunLongitude(getNewMoonDay(k + i, timeZone), timeZone);
      } while (arc !== last && i < 14);
      return i - 1;
    }

    function convertSolarToLunar(dd, mm, yy, timeZone = 7) {
      const dayNumber = jdFromDate(dd, mm, yy);
      const k = INT((dayNumber - 2415021.076998695) / 29.530588853);
      let monthStart = getNewMoonDay(k + 1, timeZone);
      if (monthStart > dayNumber) monthStart = getNewMoonDay(k, timeZone);
      let a11 = getLunarMonth11(yy, timeZone);
      let b11 = a11;
      let lunarYear;
      if (a11 >= monthStart) {
        lunarYear = yy;
        a11 = getLunarMonth11(yy - 1, timeZone);
      } else {
        lunarYear = yy + 1;
        b11 = getLunarMonth11(yy + 1, timeZone);
      }
      const lunarDay = dayNumber - monthStart + 1;
      const diff = INT((monthStart - a11) / 29);
      let lunarLeap = false;
      let lunarMonth = diff + 11;
      if (b11 - a11 > 365) {
        const leapMonthDiff = getLeapMonthOffset(a11, timeZone);
        if (diff >= leapMonthDiff) {
          lunarMonth = diff + 10;
          if (diff === leapMonthDiff) lunarLeap = true;
        }
      }
      if (lunarMonth > 12) lunarMonth -= 12;
      if (lunarMonth >= 11 && diff < 4) lunarYear -= 1;
      return { day: lunarDay, month: lunarMonth, year: lunarYear, leap: lunarLeap };
    }

    function formatCanChi(year) {
      const can = ["Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ", "Canh", "Tân", "Nhâm", "Quý"];
      const chi = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];
      return `${can[(year + 6) % 10]} ${chi[(year + 8) % 12]}`;
    }

    function getVietnamDateParts(date) {
      const parts = new Intl.DateTimeFormat("en-CA", {
        timeZone: "Asia/Ho_Chi_Minh",
        year: "numeric",
        month: "numeric",
        day: "numeric"
      }).formatToParts(date);
      const map = Object.fromEntries(parts.map((part) => [part.type, part.value]));
      return {
        day: Number(map.day),
        month: Number(map.month),
        year: Number(map.year)
      };
    }

    function updateClock() {
      const now = getSyncedNow();
      if (!now) {
        if (clockNode) clockNode.textContent = "--:--:--";
        if (heroClockNode) heroClockNode.textContent = "--:--:--";
        return;
      }
      const solar = getVietnamDateParts(now);
      const lunar = convertSolarToLunar(solar.day, solar.month, solar.year, 7);
      const timeText = new Intl.DateTimeFormat("vi-VN", {
        timeZone: "Asia/Ho_Chi_Minh",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      }).format(now);
      const dateText = new Intl.DateTimeFormat("vi-VN", {
        timeZone: "Asia/Ho_Chi_Minh",
        weekday: "short",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      }).format(now);
      const lunarText = `Âm ${lunar.day}/${lunar.month}${lunar.leap ? " nhuận" : ""}`;
      const canChiText = formatCanChi(lunar.year);

      if (clockNode) {
        clockNode.textContent = timeText;
      }
      if (dateNode) {
        dateNode.textContent = dateText;
      }
      const year = document.querySelector("#year");
      if (year) {
        year.textContent = String(solar.year);
      }
      if (lunarNode) {
        lunarNode.textContent = `${lunarText} - ${canChiText}`;
      }
      if (heroClockNode) {
        heroClockNode.textContent = timeText;
      }
      if (heroDateNode) {
        heroDateNode.textContent = dateText;
      }
      if (heroLunarNode) {
        heroLunarNode.textContent = lunarText;
      }
      if (heroCanChiNode) {
        heroCanChiNode.textContent = canChiText;
      }
      if (dailyFocusNode) {
        const weekday = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Ho_Chi_Minh",
          weekday: "short"
        }).format(now);
        const weekdayMap = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
        dailyFocusNode.textContent = manualFocus || dailyFocus[weekdayMap[weekday] ?? 0];
      }
    }

    function openModal(key) {
      const data = modalData[key];
      if (!data || !modalLayer) return;
      modalTag.textContent = data.tag;
      modalTitle.textContent = data.title;
      modalDesc.textContent = data.desc;
      modalList.textContent = "";
      modalChips.textContent = "";
      data.bullets.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        modalList.appendChild(li);
      });
      data.chips.forEach((item) => {
        const chip = document.createElement("span");
        chip.className = "tag";
        chip.textContent = item;
        modalChips.appendChild(chip);
      });
      modalLayer.classList.add("is-open");
      modalLayer.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      const closeButton = modalLayer.querySelector(".modal-close");
      if (closeButton) closeButton.focus({ preventScroll: true });
    }

    function closeModal() {
      if (!modalLayer) return;
      modalLayer.classList.remove("is-open");
      modalLayer.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }

    async function copyText(text) {
      let copied = false;
      try {
        if (navigator.clipboard) {
          await navigator.clipboard.writeText(text);
          copied = true;
        }
      } catch (error) {
        copied = false;
      }

      if (!copied) {
        try {
          const input = document.createElement("textarea");
          input.value = text;
          input.setAttribute("readonly", "");
          input.style.position = "fixed";
          input.style.left = "-9999px";
          document.body.appendChild(input);
          input.select();
          copied = document.execCommand("copy");
          input.remove();
        } catch (error) {
          copied = false;
        }
      }

      if (copied) {
        showToast(`Đã copy: ${text}`);
      } else {
        showToast(`Clipboard bị chặn, nội dung: ${text}`);
      }
    }

    document.addEventListener("click", (event) => {
      const floatToggle = event.target.closest("[data-floating-toggle]");
      if (floatToggle && floatingMenu) {
        event.preventDefault();
        const isOpen = floatingMenu.classList.toggle("is-open");
        floatToggle.setAttribute("aria-expanded", String(isOpen));
        return;
      }

      const floatingLink = event.target.closest(".float-menu-panel a");
      if (floatingLink && floatingMenu && floatingToggle) {
        floatingMenu.classList.remove("is-open");
        floatingToggle.setAttribute("aria-expanded", "false");
      } else if (floatingMenu && floatingToggle && !event.target.closest("[data-floating-menu]")) {
        floatingMenu.classList.remove("is-open");
        floatingToggle.setAttribute("aria-expanded", "false");
      }

      const modalTrigger = event.target.closest("[data-modal]");
      if (modalTrigger) {
        event.preventDefault();
        openModal(modalTrigger.dataset.modal);
        return;
      }

      const copyTrigger = event.target.closest("[data-copy]");
      if (copyTrigger) {
        event.preventDefault();
        copyText(copyTrigger.dataset.copy);
        return;
      }

      if (event.target.closest("[data-modal-close]")) {
        event.preventDefault();
        closeModal();
        return;
      }

      if (event.target.closest("[data-idea]")) {
        event.preventDefault();
        setIdeaPrompt();
        return;
      }

      if (event.target.closest("[data-focus-shuffle]")) {
        event.preventDefault();
        shuffleDailyFocus();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeModal();
        if (floatingMenu && floatingToggle) {
          floatingMenu.classList.remove("is-open");
          floatingToggle.setAttribute("aria-expanded", "false");
        }
      }
      const trigger = event.target.closest('[data-modal][role="button"]');
      if (trigger && (event.key === "Enter" || event.key === " ")) {
        event.preventDefault();
        openModal(trigger.dataset.modal);
      }
    });

    document.querySelectorAll(".insight-tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        const key = tab.dataset.insightKey;
        const data = insightData[key];
        if (!data) return;
        document.querySelectorAll(".insight-tab").forEach((item) => item.classList.toggle("is-active", item === tab));
        const title = document.querySelector("[data-insight-title]");
        const text = document.querySelector("[data-insight-text]");
        if (title) title.textContent = data.title;
        if (text) text.textContent = data.text;
      });
    });

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll(".reveal").forEach((node) => revealObserver.observe(node));

    const sections = [...document.querySelectorAll("main section[id]")];
    const navLinks = [...document.querySelectorAll(".nav-links a, .float-menu-panel a")];

    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    }, { rootMargin: "-42% 0px -48% 0px", threshold: 0 });

    sections.forEach((section) => navObserver.observe(section));

    updateClock();
    syncWebTime();
    setInterval(updateClock, 1000);
    setInterval(syncWebTime, 5 * 60 * 1000);

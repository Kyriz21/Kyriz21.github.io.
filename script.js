/* =====================================================
       KONFIGURASI PROFIL (SILAKAN SESUAIKAN SEBELUM PUBLISH)
       ===================================================== */
    const PORTFOLIO = {
      name: "Rahmad Rizky Fauzi",
      email: "rahmadrizkyfauzi@email.com", // Ganti dengan alamat email aslimu
      linkedin: "https://www.linkedin.com/", // Masukkan URL profil LinkedIn aslimu
      github: "https://github.com/",         // Masukkan URL profil GitHub aslimu
      instagram: ""                          // Opsional: isi jika ingin menampilkan Instagram
    };

    /* Data Studi Kasus Proyek untuk Modal Interaktif */
    const PROJECT_ORDER = ["proj-data", "proj-hr", "proj-ops", "proj-web"];
    const PROJECT_DETAILS = {
      "proj-data": {
        category: "01 / DATA ANALYTICS & BI",
        title: "Executive Data & Reporting Dashboard",
        metrics: [
          { val: "Faster", label: "Waktu penyusunan laporan bulanan" },
          { val: "100%", label: "Standardisasi format input data" },
          { val: "Real-time", label: "Visualisasi metrik & indikator" }
        ],
        challenge: "Data operasional yang tersebar di banyak file membuat proses rekapitulasi bulanan memakan waktu lama dan rentan terhadap ketidakkonsistenan format penulisan.",
        solution: "Merancang struktur tabel sumber yang terstandarisasi (Single Source of Truth), menerapkan tahapan Data Cleaning, dan menghubungkannya ke dashboard visual menggunakan Power BI & Excel Pivot.",
        output: "Memudahkan pemangku kepentingan dalam membaca ringkasan eksekutif, memantau tren secara langsung, dan mempercepat pengambilan keputusan berbasis data.",
        deliverables: ["Skema Master Tabel Bersih", "Visualisasi KPI Interaktif", "Rekapitulasi Pivot Otomatis", "Dokumentasi Panduan Update"],
        tags: ["Power BI", "Microsoft Excel", "Data Cleaning", "KPI Visualization", "Dashboard Design"]
      },
      "proj-hr": {
        category: "02 / HR & PEOPLE OPERATIONS",
        title: "Sistem Pemantauan Data & Kontrak SDM",
        metrics: [
          { val: "Terpusat", label: "Basis data profil & status pegawai" },
          { val: "Auto-Alert", label: "Indikator pengingat masa kontrak" },
          { val: "Rapi", label: "Dokumentasi rekrutmen & SK" }
        ],
        challenge: "Pengelolaan administrasi SDM membutuhkan ketelitian tinggi dalam memantau masa berakhirnya kontrak kerja, kelengkapan berkas rekrutmen, serta perubahan status kepegawaian.",
        solution: "Membangun sistem pelacakan berbasis spreadsheet terstruktur dengan formula kondisional otomatis untuk memberi peringatan dini sebelum masa kontrak berakhir, serta indeks pengarsipan dokumen.",
        output: "Meminimalkan risiko keterlambatan perpanjangan kontrak kerja dan mempercepat pencarian riwayat dokumen kepegawaian saat dibutuhkan.",
        deliverables: ["Database Induk Kepegawaian", "Early-Warning Masa Kontrak", "Tracker Tahapan Rekrutmen", "Indeks Arsip SK & Dokumen"],
        tags: ["HR Administration", "Contract Tracking", "Recruitment Flow", "Data Integrity"]
      },
      "proj-ops": {
        category: "03 / BUSINESS OPERATIONS",
        title: "Digital Workflow & Document Tracker",
        metrics: [
          { val: "3 Tahap", label: "Input -> Proses -> Output Jelas" },
          { val: "Minim Error", label: "Validasi otomatis saat input" },
          { val: "Kolaboratif", label: "Dapat diakses lintas tim" }
        ],
        challenge: "Pencatatan surat keluar-masuk dan progres dokumen antar-unit sering kali sulit dilacak statusnya jika hanya mengandalkan pencatatan manual yang tidak terhubung.",
        solution: "Mengeksplorasi penggunaan Google Sheets dengan fitur Data Validation, filter status otomatis, dan template pelaporan yang seragam.",
        output: "Alur administrasi menjadi lebih transparan; setiap anggota tim dapat mengetahui posisi dan status tindak lanjut dokumen secara instan.",
        deliverables: ["Template Log Surat & Dokumen", "Sistem Validasi Input Data", "Dashboard Status Tindak Lanjut", "SOP Alur Administrasi Unit"],
        tags: ["Google Sheets", "Workflow Automation", "Document Control", "SOP Digitalization"]
      },
      "proj-web": {
        category: "04 / DIGITAL TOOLS & SYSTEMS",
        title: "Portal Informasi & Kanal Digital Unit",
        metrics: [
          { val: "Responsif", label: "Optimal di Mobile & Desktop" },
          { val: "Terstruktur", label: "Arsitektur informasi ramah pengguna" },
          { val: "Modern UI", label: "Akses cepat ke informasi layanan" }
        ],
        challenge: "Informasi layanan unit dan pengumuman penting perlu disajikan secara rapi di kanal digital agar sivitas maupun pengunjung tidak kesulitan mencari panduan administrasi.",
        solution: "Memanfaatkan keahlian Teknik Informatika (HTML, CSS, JavaScript, dan manajemen CMS) untuk menata tata letak konten, memperbarui informasi berkala, dan menjaga estetika visual web.",
        output: "Meningkatkan keterbacaan informasi publik dan menghadirkan citra unit kerja yang profesional serta adaptif terhadap teknologi.",
        deliverables: ["Antarmuka Web Responsif", "Manajemen Konten & Publikasi", "Struktur Navigasi Layanan", "Optimasi Aksesibilitas Halaman"],
        tags: ["HTML5 & CSS3", "JavaScript", "Web Content Management", "UI/UX Layout"]
      }
    };

    /* Data untuk Simulator Fokus & Output Kerja */
    const LAB_DATA = {
      data: {
        kpi: "98.5%",
        label: "TINGKAT KONSISTENSI STRUKTUR DATA",
        desc: "Mengubah data mentah dari berbagai sumber menjadi laporan bersih dan terukur yang siap disajikan kepada manajemen.",
        deliverable: "<strong>Output Utama:</strong> Dashboard KPI, Pivot Otomatis, Rekapitulasi Berkala",
        bars: [
          { name: "Data Cleaning & Standardisasi Format", pct: 96 },
          { name: "Penyusunan Laporan & Pivot (Excel / Sheets)", pct: 94 },
          { name: "Visualisasi Dashboard & Grafik (Power BI)", pct: 88 }
        ]
      },
      hr: {
        kpi: "100%",
        label: "KETERTIBAN ADMINISTRASI & DOKUMEN SDM",
        desc: "Menjaga akurasi database kepegawaian, pemantauan kontrak kerja, serta kelancaran koordinasi proses rekrutmen di lingkungan institusi.",
        deliverable: "<strong>Output Utama:</strong> Database Pegawai, Tracker Kontrak, Arsip Rekrutmen & SK",
        bars: [
          { name: "Pengelolaan Database & Profil Kepegawaian", pct: 95 },
          { name: "Administrasi Rekrutmen & Dokumentasi Kontrak", pct: 92 },
          { name: "Kepatuhan SOP & Kerahasiaan Informasi SDM", pct: 98 }
        ]
      },
      ops: {
        kpi: "3x Lebih Cepat",
        label: "EFISIENSI PENCARIAN & PELACAKAN DOKUMEN",
        desc: "Menggabungkan logika Teknik Informatika dengan kebutuhan operasional untuk menyederhanakan pekerjaan administratif berulang.",
        deliverable: "<strong>Output Utama:</strong> Template Spreadsheet Pintar, Portal Web Unit, Dokumentasi Alur",
        bars: [
          { name: "Perancangan Alur Kerja & Template Digital", pct: 93 },
          { name: "Pengembangan Web & Pengelolaan Kanal Informasi", pct: 89 },
          { name: "Koordinasi Lintas Unit & Pelaporan Operasional", pct: 94 }
        ]
      }
    };

    const $ = (selector, root = document) => root.querySelector(selector);
    const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

    // 1. Live Samarinda Clock (WITA / UTC+8)
    const localTimeEl = $("#localTime");
    function updateSamarindaClock() {
      if (!localTimeEl) return;
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat("id-ID", {
          timeZone: "Asia/Makassar",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false
        });
        localTimeEl.textContent = `${formatter.format(now)} WITA`;
      } catch (e) {
        localTimeEl.textContent = "WITA (UTC+8)";
      }
    }
    updateSamarindaClock();
    setInterval(updateSamarindaClock, 30000);

    // 2. Mobile Navigation
    const menuToggle = $("#menuToggle");
    const mainNav = $("#mainNav");
    menuToggle?.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Buka menu" : "Tutup menu");
      mainNav.classList.toggle("open", !isOpen);
    });
    $$("#mainNav a, #mainNav button").forEach(link =>
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        menuToggle?.setAttribute("aria-expanded", "false");
        menuToggle?.setAttribute("aria-label", "Buka menu");
      })
    );
    window.addEventListener("resize", () => {
      if (window.innerWidth > 880 && mainNav?.classList.contains("open")) {
        mainNav.classList.remove("open");
        menuToggle?.setAttribute("aria-expanded", "false");
      }
    });

    // 3. Theme Switch (Dark / Light)
    const themeToggle = $("#themeToggle");
    const savedTheme = localStorage.getItem("rahmad-portfolio-theme");
    if (savedTheme === "light") document.body.classList.add("light-theme");
    themeToggle?.addEventListener("click", () => {
      document.body.classList.toggle("light-theme");
      const isLight = document.body.classList.contains("light-theme");
      localStorage.setItem("rahmad-portfolio-theme", isLight ? "light" : "dark");
      showToast(isLight ? "Tema Terang diaktifkan." : "Tema Gelap diaktifkan.");
    });

    // 4. Scroll Progress, Sticky Header Shadow & ScrollSpy Navigation
    const progressBar = $("#scrollProgress");
    const headerWrap = $("#headerWrap");
    const floatingTopBtn = $("#floatingTopBtn");
    const sections = $$("main section[id]");
    const navLinks = $$(".main-nav a[data-nav]");

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? (scrollY / scrollable) * 100 : 0;
      if (progressBar) progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;

      if (headerWrap) {
        headerWrap.classList.toggle("scrolled", scrollY > 20);
      }
      if (floatingTopBtn) {
        floatingTopBtn.classList.toggle("visible", scrollY > 450);
      }

      // ScrollSpy
      let currentSection = "";
      sections.forEach(sec => {
        const top = sec.offsetTop - 160;
        const height = sec.offsetHeight;
        if (scrollY >= top && scrollY < top + height) {
          currentSection = sec.getAttribute("id");
        }
      });
      navLinks.forEach(link => {
        link.classList.toggle("active-link", link.dataset.nav === currentSection);
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    floatingTopBtn?.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // 5. Interactive Hero Mouse Parallax (Preserves CSS Rotation) & Card Spotlight
    const heroArt = $("#heroArt");
    const parallaxLayers = $$("[data-depth]", heroArt);
    window.addEventListener("mousemove", e => {
      if (window.innerWidth < 960 || !heroArt) return;
      const x = (window.innerWidth / 2 - e.clientX);
      const y = (window.innerHeight / 2 - e.clientY);
      parallaxLayers.forEach(layer => {
        const depth = parseFloat(layer.dataset.depth || "0.04");
        layer.style.setProperty("--px", `${(x * depth).toFixed(1)}px`);
        layer.style.setProperty("--py", `${(y * depth).toFixed(1)}px`);
      });
    });

    $$(".project-card").forEach(card => {
      card.addEventListener("mousemove", e => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
        card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
      });
    });

    $("#artCoreTrigger")?.addEventListener("click", () => {
      $("#work")?.scrollIntoView({ behavior: "smooth" });
    });

    // 6. Interactive Capability Matrix (Simulator)
    const labTabs = $$(".lab-tab");
    const labBarsContainer = $("#labBarsContainer");
    function renderLab(key) {
      const item = LAB_DATA[key];
      if (!item || !labBarsContainer) return;
      $("#labKpiValue").textContent = item.kpi;
      $("#labKpiLabel").textContent = item.label;
      $("#labDescription").textContent = item.desc;
      $("#labDeliverable").innerHTML = item.deliverable;

      labBarsContainer.innerHTML = item.bars
        .map(b => `
          <div class="lab-bar-item">
            <div class="lab-bar-top"><span>${b.name}</span><b>${b.pct}%</b></div>
            <div class="lab-bar-track"><div class="lab-bar-fill" style="width: 0%" data-target="${b.pct}%"></div></div>
          </div>
        `)
        .join("");

      requestAnimationFrame(() => {
        setTimeout(() => {
          $$(".lab-bar-fill", labBarsContainer).forEach(fill => {
            fill.style.width = fill.dataset.target;
          });
        }, 30);
      });
    }
    labTabs.forEach(tab => {
      tab.addEventListener("click", () => {
        labTabs.forEach(t => {
          const active = t === tab;
          t.classList.toggle("active", active);
          t.setAttribute("aria-selected", String(active));
        });
        renderLab(tab.dataset.lab);
      });
    });
    renderLab("data");

    // 7. FAQ Accordion
    $$(".faq-question").forEach(btn => {
      btn.addEventListener("click", () => {
        const item = btn.closest(".faq-item");
        const answer = $(".faq-answer", item);
        const isOpen = item.classList.contains("open");

        $$(".faq-item").forEach(other => {
          other.classList.remove("open");
          $(".faq-question", other)?.setAttribute("aria-expanded", "false");
          const otherAns = $(".faq-answer", other);
          if (otherAns) otherAns.style.maxHeight = "0px";
        });

        if (!isOpen) {
          item.classList.add("open");
          btn.setAttribute("aria-expanded", "true");
          if (answer) answer.style.maxHeight = `${answer.scrollHeight + 24}px`;
        }
      });
    });

    // 8. Scroll Reveal Animations & Project Filters
    const revealItems = $$(".reveal");
    if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      revealItems.forEach(item => observer.observe(item));
    } else {
      revealItems.forEach(item => item.classList.add("is-visible"));
    }

    // Project Filters
    const filterButtons = $$(".filter-btn");
    const projectCards = $$(".project-card");
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        const filter = button.dataset.filter;
        filterButtons.forEach(item => {
          const active = item === button;
          item.classList.toggle("active", active);
          item.setAttribute("aria-pressed", String(active));
        });
        projectCards.forEach(card => {
          const visible = filter === "all" || card.dataset.category === filter;
          card.classList.toggle("is-hidden", !visible);
        });
      });
    });

    // 9. Modal Management (Case Study, Quick Message, Command Palette)
    const projectModal = $("#projectModal");
    const messageModal = $("#messageModal");
    const cmdModal = $("#cmdModal");
    let currentProjectId = "proj-data";

    function openModal(modalEl) {
      if (!modalEl) return;
      closeAllModals();
      modalEl.classList.add("is-open");
      modalEl.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }
    function closeAllModals() {
      $$(".modal-backdrop.is-open").forEach(m => {
        m.classList.remove("is-open");
        m.setAttribute("aria-hidden", "true");
      });
      document.body.style.overflow = "";
    }

    $$("[data-close-modal]").forEach(btn => btn.addEventListener("click", closeAllModals));
    $$(".modal-backdrop").forEach(backdrop => {
      backdrop.addEventListener("click", e => {
        if (e.target === backdrop) closeAllModals();
      });
    });
    window.addEventListener("keydown", e => {
      if (e.key === "Escape") closeAllModals();
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openModal(cmdModal);
      }
    });

    function populateProjectModal(id) {
      const data = PROJECT_DETAILS[id];
      if (!data) return;
      currentProjectId = id;

      $("#modalCategory").textContent = data.category;
      $("#modalTitle").textContent = data.title;
      $("#modalChallenge").textContent = data.challenge;
      $("#modalSolution").textContent = data.solution;
      $("#modalOutput").textContent = data.output;

      $("#modalMetrics").innerHTML = data.metrics
        .map(m => `<div class="modal-metric-box"><strong>${m.val}</strong><span>${m.label}</span></div>`)
        .join("");

      $("#modalDeliverables").innerHTML = (data.deliverables || [])
        .map(d => `<div><b>✓</b> <span>${d}</span></div>`)
        .join("");

      $("#modalTags").innerHTML = data.tags.map(t => `<span>${t}</span>`).join("");
    }

    projectCards.forEach(card => {
      const triggerOpen = () => {
        populateProjectModal(card.dataset.projectId);
        openModal(projectModal);
      };

      card.addEventListener("click", triggerOpen);
      card.addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          triggerOpen();
        }
      });
    });

    $("#prevProjBtn")?.addEventListener("click", () => {
      const idx = PROJECT_ORDER.indexOf(currentProjectId);
      const prevIdx = (idx - 1 + PROJECT_ORDER.length) % PROJECT_ORDER.length;
      populateProjectModal(PROJECT_ORDER[prevIdx]);
    });
    $("#nextProjBtn")?.addEventListener("click", () => {
      const idx = PROJECT_ORDER.indexOf(currentProjectId);
      const nextIdx = (idx + 1) % PROJECT_ORDER.length;
      populateProjectModal(PROJECT_ORDER[nextIdx]);
    });

    // Command Palette & Quick Message Triggers
    $("#openCmdBtn")?.addEventListener("click", () => openModal(cmdModal));
    $("#openQuickMsgBtn")?.addEventListener("click", () => openModal(messageModal));
    $("#heroQuickContact")?.addEventListener("click", () => openModal(messageModal));

    $$(".cmd-item").forEach(btn => {
      btn.addEventListener("click", () => {
        const action = btn.dataset.cmd;
        closeAllModals();
        if (action === "msg") openModal(messageModal);
        if (action === "copy-email") copyTextToClipboard(targetEmail, `Alamat email (${targetEmail}) berhasil disalin!`);
        if (action === "projects") $("#work")?.scrollIntoView({ behavior: "smooth" });
        if (action === "experience") $("#experience")?.scrollIntoView({ behavior: "smooth" });
        if (action === "theme") themeToggle?.click();
      });
    });

    // 10. Toast Helper & Clipboard Copy Fallback
    const toast = $("#toast");
    let toastTimer;
    function showToast(message) {
      if (!toast) return;
      toast.textContent = message;
      toast.classList.add("show");
      window.clearTimeout(toastTimer);
      toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2800);
    }

    function copyTextToClipboard(text, successMessage) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text)
          .then(() => showToast(successMessage))
          .catch(() => fallbackCopy(text, successMessage));
      } else {
        fallbackCopy(text, successMessage);
      }
    }

    function fallbackCopy(text, successMessage) {
      const tempInput = document.createElement("textarea");
      tempInput.value = text;
      tempInput.style.position = "fixed";
      tempInput.style.opacity = "0";
      document.body.appendChild(tempInput);
      tempInput.select();
      try {
        document.execCommand("copy");
        showToast(successMessage);
      } catch (err) {
        showToast("Berhasil disalin ke clipboard!");
      }
      document.body.removeChild(tempInput);
    }

    // 11. Contact & Quick Message Form Logic
    const copyEmailBtn = $("#copyEmail");
    const contactHint = $("#contactHint");
    const targetEmail = PORTFOLIO.email.trim() || "rahmadrizkyfauzi@email.com";

    if (contactHint) {
      contactHint.innerHTML = `Email aktif: <code>${targetEmail}</code> · Siap berdiskusi untuk kolaborasi maupun peluang karier.`;
    }

    copyEmailBtn?.addEventListener("click", () => {
      copyTextToClipboard(targetEmail, `Alamat email (${targetEmail}) berhasil disalin!`);
    });

    const quickMessageForm = $("#quickMessageForm");
    quickMessageForm?.addEventListener("submit", e => {
      e.preventDefault();
      const name = $("#senderName").value.trim();
      const subject = $("#senderSubject").value;
      const msg = $("#senderMessage").value.trim();
      const fullSubject = encodeURIComponent(`[Portofolio Web] ${subject} — ${name}`);
      const fullBody = encodeURIComponent(`Halo Rahmad,\n\nSaya ${name}.\n\n${msg}\n\nSalam,\n${name}`);
      window.location.href = `mailto:${targetEmail}?subject=${fullSubject}&body=${fullBody}`;
      closeAllModals();
      showToast("Membuka aplikasi email kamu...");
    });

    $("#copyFormattedMsg")?.addEventListener("click", () => {
      const name = $("#senderName").value.trim() || "[Nama Anda]";
      const subject = $("#senderSubject").value;
      const msg = $("#senderMessage").value.trim() || "[Pesan Anda]";
      const formatted = `Kepada: ${targetEmail}\nSubjek: ${subject} — ${name}\n\nHalo Rahmad,\n${msg}`;
      copyTextToClipboard(formatted, "Format pesan berhasil disalin ke clipboard!");
    });

    // 12. Render Social Links
    const contactSocials = $("#contactSocials");
    if (contactSocials) {
      contactSocials.innerHTML = "";
      [
        ["LinkedIn", PORTFOLIO.linkedin],
        ["GitHub", PORTFOLIO.github],
        ["Instagram", PORTFOLIO.instagram],
        ["Email Langsung", `mailto:${targetEmail}`]
      ].forEach(([label, url]) => {
        if (!url || !url.trim()) return;
        const link = document.createElement("a");
        link.href = url.trim();
        link.textContent = `${label} ↗`;
        if (!url.startsWith("mailto:")) {
          link.target = "_blank";
          link.rel = "noopener noreferrer";
        }
        contactSocials.appendChild(link);
      });
    }

    // 13. Current Year in Footer
    const yearNow = $("#yearNow");
    if (yearNow) yearNow.textContent = new Date().getFullYear();

// Default Seeding Quotes (12 total, 3 for each category)
const DEFAULT_QUOTES = [
    {
        id: "q1",
        category: "movie",
        source: "영화 '쿵푸팬더'",
        author: "우구웨이 대사",
        body: "어제는 역사고, 내일은 미스터리이며, 오늘은 선물이다. 그래서 오늘을 '프레젠트(Present)'라고 부른다.",
        likes: 12
    },
    {
        id: "q2",
        category: "movie",
        source: "영화 '라라랜드'",
        author: "세바스찬",
        body: "사람들은 다른 사람들의 열정에 끌리게 되어 있어. 자신이 잊은 걸 상기시켜 주니까.",
        likes: 24
    },
    {
        id: "q3",
        category: "movie",
        source: "영화 '죽은 시인의 사회'",
        author: "존 키팅",
        body: "카르페 디엠. 오늘을 즐겨라. 너희들의 삶을 특별하게 만들어라.",
        likes: 38
    },
    {
        id: "q4",
        category: "drama",
        source: "드라마 '눈이 부시게'",
        author: "혜자",
        body: "내 삶은 때론 불행했고 때론 행복했습니다. 삶이 한낱 꿈에 불과하다지만 그럼에도 살아서 좋았습니다.",
        likes: 42
    },
    {
        id: "q5",
        category: "drama",
        source: "드라마 '미스터 션샤인'",
        author: "유진 초이",
        body: "울지 마시오. 이것은 나의 역사이자 나의 러브스토리요. 소풍 같던 날들, 고마웠소.",
        likes: 31
    },
    {
        id: "q6",
        category: "drama",
        source: "드라마 '멜로가 체질'",
        author: "임진주",
        body: "사는 게 그런 건가. 좋았던 시간의 기억 약간을 가지고 힘들 수밖에 없는 대부분의 시간을 버텨내는 것.",
        likes: 29
    },
    {
        id: "q7",
        category: "book",
        source: "소설 '데미안'",
        author: "헤르만 헤세",
        body: "새는 알에서 나오려고 투쟁한다. 알은 세계다. 태어나려는 자는 하나의 세계를 깨뜨려야 한다.",
        likes: 56
    },
    {
        id: "q8",
        category: "book",
        source: "동화 '어린 왕자'",
        author: "생텍쥐페리",
        body: "네 장미꽃을 온통 중요하게 만든 것은 바로 네가 네 장미꽃을 위해 허비한 시간이야.",
        likes: 47
    },
    {
        id: "q9",
        category: "book",
        source: "에세이 '태도에 관하여'",
        author: "임경선",
        body: "누군가를 사랑한다는 것은 그 사람의 불완전함을 기꺼이 껴안겠다는 거대한 결심이다.",
        likes: 35
    },
    {
        id: "q10",
        category: "quote",
        source: "아인슈타인 명언",
        author: "알베르트 아인슈타인",
        body: "어제로부터 배우고, 오늘을 위해 살며, 내일을 바라보라. 가장 중요한 것은 질문을 멈추지 않는 것이다.",
        likes: 40
    },
    {
        id: "q11",
        category: "quote",
        source: "넬슨 만델라 명언",
        author: "넬슨 만델라",
        body: "가장 위대한 영광은 한 번도 넘어지지 않는 데 있는 것이 아니라, 넘어질 때마다 다시 일어서는 데 있다.",
        likes: 33
    },
    {
        id: "q12",
        category: "quote",
        source: "앙리 마티스 명언",
        author: "앙리 마티스",
        body: "창조성에는 용기가 필요하다. 당신이 보는 세상의 아름다움을 두려워하지 말라.",
        likes: 27
    },
    {
        id: "q13",
        category: "lyrics",
        source: "아이유 '밤편지'",
        author: "아이유",
        body: "이 밤 그날의 반딧불을 당신의 창 가까이 보낼게요. 음 사랑한다는 말이에요.",
        likes: 39
    },
    {
        id: "q14",
        category: "lyrics",
        source: "정준일 '안아줘'",
        author: "정준일",
        body: "내 곁에 있어줘 내게 머물러줘 네 손을 잡은 날 놓치지 말아줘.",
        likes: 28
    }
];

// SVG Icons Constants
const HEART_OUTLINE = `<svg viewBox="0 0 24 24"><path d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z"/></svg>`;
const HEART_FILLED = `<svg viewBox="0 0 24 24"><path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.42 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.42 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/></svg>`;
const COPY_ICON = `<svg viewBox="0 0 24 24"><path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 21,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"/></svg>`;
const SUN_ICON = `<svg viewBox="0 0 24 24"><path d="M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2A1,1 0 0,1 13,3V5A1,1 0 0,1 11,5V3A1,1 0 0,1 12,2M12,19A1,1 0 0,1 13,20V22A1,1 0 0,1 11,22V20A1,1 0 0,1 12,19M2,12A1,1 0 0,1 3,11H5A1,1 0 0,1 5,13H3A1,1 0 0,1 2,12M19,12A1,1 0 0,1 20,11H22A1,1 0 0,1 22,13H20A1,1 0 0,1 19,12M6.34,5.66A1,1 0 0,1 7.76,5.66L9.17,7.07A1,1 0 0,1 7.76,8.49L6.34,7.07A1,1 0 0,1 6.34,5.66M14.83,14.17A1,1 0 0,1 16.24,14.17L17.66,15.59A1,1 0 0,1 16.24,17A1,1 0 0,1 14.83,15.59L14.83,14.17M5.66,17.66A1,1 0 0,1 5.66,16.24L7.07,14.83A1,1 0 0,1 8.49,16.24L7.07,17.66A1,1 0 0,1 5.66,17.66M14.17,7.76A1,1 0 0,1 15.59,6.34L17,7.76A1,1 0 0,1 15.59,9.17L14.17,7.76Z"/></svg>`;
const MOON_ICON = `<svg viewBox="0 0 24 24"><path d="M12,18C11.11,18 10.26,17.8 9.5,17.45C11.56,16.5 13,14.42 13,12C13,9.58 11.56,7.5 9.5,6.55C10.26,6.2 11.11,6 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z"/></svg>`;

// State Management
let quotes = [];
let likedQuoteIds = [];
let currentFilter = 'all';
let searchQuery = '';
let currentActiveQuote = null;

// Audio State
let audioCtx = null;
let synthNodes = [];
let activeSoundType = 'none'; // 'none' | 'rain' | 'waves' | 'fire'

// Font config in focus mode
let baseFontSize = 24; // in px

// DOM Elements
const quotesGrid = document.getElementById('quotesGrid');
const feedStats = document.getElementById('feedStats');
const genreTabs = document.getElementById('genreTabs');
const searchInput = document.getElementById('searchInput');

// Modal Elements
const registerModal = document.getElementById('registerModal');
const closeRegisterModalBtn = document.getElementById('closeRegisterModalBtn');
const quoteForm = document.getElementById('quoteForm');
const categoryGrid = document.getElementById('categoryGrid');
const quoteCategoryInput = document.getElementById('quoteCategory');
const quoteBodyInput = document.getElementById('quoteBody');

// Wizard State
let currentWizardStep = 1;

// Theme Elements
const themeToggleBtn = document.getElementById('themeToggleBtn');

// Focus Mode Elements
const focusOverlay = document.getElementById('focusOverlay');
const exitFocusBtn = document.getElementById('exitFocusBtn');
const focusCategoryBadge = document.getElementById('focusCategoryBadge');
const focusQuoteText = document.getElementById('focusQuoteText');
const focusQuoteMeta = document.getElementById('focusQuoteMeta');
const quoteSheet = document.getElementById('quoteSheet');
const focusCopyBtn = document.getElementById('focusCopyBtn');

// Focus Toolbar Buttons
const fontMyeongjoBtn = document.getElementById('fontMyeongjoBtn');
const fontGothicBtn = document.getElementById('fontGothicBtn');
const fontSizeDecBtn = document.getElementById('fontSizeDecBtn');
const fontSizeIncBtn = document.getElementById('fontSizeIncBtn');
const paperBlankBtn = document.getElementById('paperBlankBtn');
const paperLinedBtn = document.getElementById('paperLinedBtn');
const paperGridBtn = document.getElementById('paperGridBtn');

// Workspace Elements
const typingInput = document.getElementById('typingInput');
const textComparer = document.getElementById('textComparer');
const progressPercent = document.getElementById('progressPercent');
const progressBarFill = document.getElementById('progressBarFill');
const matchRateScore = document.getElementById('matchRateScore');
const typingPlayground = document.getElementById('typingPlayground');
const typingSuccessMsg = document.getElementById('typingSuccessMsg');
const resetTypingBtn = document.getElementById('resetTypingBtn');

// Sound Buttons
const soundBtns = document.querySelectorAll('.sound-btn');
const volumeSlider = document.getElementById('volumeSlider');

// Toast Element
const toast = document.getElementById('toast');

// --- Initialization ---
function init() {
    // 1. Load theme preference
    const savedTheme = localStorage.getItem('mindful_theme') || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    // 2. Load likes mapping
    likedQuoteIds = JSON.parse(localStorage.getItem('mindful_liked_ids')) || [];

    // 3. Load or Seed quotes
    const savedQuotes = localStorage.getItem('mindful_quotes');
    if (savedQuotes) {
        quotes = JSON.parse(savedQuotes);
    } else {
        quotes = [...DEFAULT_QUOTES];
        localStorage.setItem('mindful_quotes', JSON.stringify(quotes));
    }

    // 4. Register Event Listeners
    setupEventListeners();

    // 5. Render Feed
    renderFeed();
}

// --- Event Listeners Setup ---
function setupEventListeners() {
    // Logo reload
    document.getElementById('logoLink').addEventListener('click', (e) => {
        e.preventDefault();
        searchInput.value = '';
        searchQuery = '';
        currentFilter = 'all';
        setActiveTab('all');
        renderFeed();
    });

    // Theme toggle click
    themeToggleBtn.addEventListener('click', toggleTheme);

    // Search input
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        renderFeed();
    });

    // Filter tabs
    genreTabs.addEventListener('click', (e) => {
        const tab = e.target.closest('.tab-btn');
        if (!tab) return;
        currentFilter = tab.dataset.genre;
        setActiveTab(currentFilter);
        renderFeed();
    });

    // Modal triggers
    document.querySelectorAll('.btn-register-trigger').forEach(btn => {
        btn.addEventListener('click', openModal);
    });
    closeRegisterModalBtn.addEventListener('click', closeModal);
    document.querySelectorAll('.cancel-register-btn').forEach(btn => {
        btn.addEventListener('click', closeModal);
    });
    registerModal.addEventListener('click', (e) => {
        if (e.target === registerModal) closeModal();
    });

    // Wizard navigation
    document.querySelectorAll('.next-step-btn').forEach(btn => {
        btn.addEventListener('click', () => navigateWizard(1));
    });
    document.querySelectorAll('.prev-step-btn').forEach(btn => {
        btn.addEventListener('click', () => navigateWizard(-1));
    });

    // Category Grid Selection
    categoryGrid.addEventListener('click', (e) => {
        const card = e.target.closest('.category-card');
        if (!card) return;
        
        categoryGrid.querySelectorAll('.category-card').forEach(el => el.classList.remove('selected'));
        card.classList.add('selected');
        quoteCategoryInput.value = card.dataset.value;
        
        // Auto advance to step 2 after selecting a category
        setTimeout(() => {
            if (currentWizardStep === 1) {
                navigateWizard(1);
            }
        }, 300);
    });

    // Char count update for body textarea
    quoteBodyInput.addEventListener('input', (e) => {
        document.getElementById('charCount').textContent = e.target.value.length;
    });

    // Register Form Submit
    quoteForm.addEventListener('submit', handleFormSubmit);

    // Focus Overlay Exit
    exitFocusBtn.addEventListener('click', exitFocusMode);
    
    // Copy in Focus Mode
    focusCopyBtn.addEventListener('click', () => {
        if (currentActiveQuote) {
            copyToClipboard(`${currentActiveQuote.body}\n— ${currentActiveQuote.source} ${currentActiveQuote.author ? `, ${currentActiveQuote.author}` : ''}`);
        }
    });

    // Font Style Buttons
    fontMyeongjoBtn.addEventListener('click', () => {
        fontGothicBtn.classList.remove('active');
        fontMyeongjoBtn.classList.add('active');
        quoteSheet.classList.remove('font-gothic');
        quoteSheet.classList.add('font-myeongjo');
    });

    fontGothicBtn.addEventListener('click', () => {
        fontMyeongjoBtn.classList.remove('active');
        fontGothicBtn.classList.add('active');
        quoteSheet.classList.remove('font-myeongjo');
        quoteSheet.classList.add('font-gothic');
    });

    // Font Size Buttons
    fontSizeDecBtn.addEventListener('click', () => {
        if (baseFontSize > 16) {
            baseFontSize -= 2;
            focusQuoteText.style.fontSize = `${baseFontSize}px`;
        }
    });

    fontSizeIncBtn.addEventListener('click', () => {
        if (baseFontSize < 36) {
            baseFontSize += 2;
            focusQuoteText.style.fontSize = `${baseFontSize}px`;
        }
    });

    // Paper template buttons
    paperBlankBtn.addEventListener('click', () => setPaperStyle('blank'));
    paperLinedBtn.addEventListener('click', () => setPaperStyle('lined'));
    paperGridBtn.addEventListener('click', () => setPaperStyle('grid'));

    // Sound selection
    soundBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const soundType = btn.dataset.sound;
            setAmbientSound(soundType);
        });
    });

    // Volume Slider
    volumeSlider.addEventListener('input', (e) => {
        const vol = parseFloat(e.target.value);
        setVolume(vol);
    });

    // Typing notepad listener
    typingInput.addEventListener('input', updateTypingComparison);
    
    // Reset typing button
    resetTypingBtn.addEventListener('click', resetTypingWorkspace);
}

// --- Theme Management ---
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('mindful_theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    themeToggleBtn.innerHTML = theme === 'dark' ? SUN_ICON : MOON_ICON;
}

// --- Feed Rendering & Filtering ---
function renderFeed() {
    // Apply filters
    let filtered = quotes.filter(q => {
        // Genre filter
        const genreMatch = currentFilter === 'all' || q.category === currentFilter;
        // Search filter
        const textMatch = !searchQuery || 
            q.body.toLowerCase().includes(searchQuery) || 
            q.source.toLowerCase().includes(searchQuery) ||
            (q.author && q.author.toLowerCase().includes(searchQuery));
        
        return genreMatch && textMatch;
    });

    // Sort: newest first
    filtered.sort((a, b) => b.id.localeCompare(a.id));

    // Update statistics
    feedStats.textContent = `총 ${filtered.length}개의 글귀가 있습니다.`;

    // Clear grid
    quotesGrid.innerHTML = '';

    if (filtered.length === 0) {
        quotesGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 4rem 2rem; color: var(--text-muted); font-family: var(--font-serif);">
                <svg viewBox="0 0 24 24" style="width: 48px; height: 48px; fill: currentColor; margin-bottom: 1rem; opacity: 0.5;">
                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M19 19H5V5H19V19M11.5 8C12.3 8 13 8.7 13 9.5V11H11.5V9.5H10V11H8.5V9.5C8.5 8.7 9.2 8 10 8H11.5M15.5 13C16.3 13 17 13.7 17 14.5V16H15.5V14.5H14V16H12.5V14.5C12.5 13.7 13.2 13 14 13H15.5Z"/>
                </svg>
                <p>일치하는 글귀를 찾을 수 없습니다.</p>
                <p style="font-size: 0.85rem; margin-top: 0.5rem; font-family: var(--font-sans);">검색어를 변경하거나 우측 상단에서 새로운 글귀를 등록해 보세요.</p>
            </div>
        `;
        return;
    }

    // Render cards
    filtered.forEach(q => {
        const isLiked = likedQuoteIds.includes(q.id);
        const card = document.createElement('div');
        card.className = 'quote-card';
        
        // Map category translation
        const categoryLabels = {
            movie: '영화',
            drama: '드라마',
            book: '도서',
            lyrics: '가사',
            quote: '명언'
        };

        card.innerHTML = `
            <div class="card-header">
                <span class="category-tag ${q.category}">${categoryLabels[q.category]}</span>
                <span class="quote-author">${q.author || '익명'}</span>
            </div>
            <div class="card-body">
                <blockquote class="quote-text">${escapeHTML(q.body)}</blockquote>
            </div>
            <div class="card-footer">
                <span class="quote-source" title="${q.source}">${escapeHTML(q.source)}</span>
                <div class="card-actions">
                    <button class="action-btn like-btn ${isLiked ? 'active' : ''}" data-id="${q.id}" title="공감하기">
                        ${isLiked ? HEART_FILLED : HEART_OUTLINE}
                        <span class="like-count">${q.likes}</span>
                    </button>
                    <button class="action-btn copy-btn" data-id="${q.id}" title="복사하기">
                        ${COPY_ICON}
                    </button>
                </div>
            </div>
        `;

        // Card Click (Opens Focus Mode)
        card.addEventListener('click', (e) => {
            // If clicking interactive buttons, do not open focus overlay
            if (e.target.closest('.card-actions') || e.target.closest('.action-btn')) {
                return;
            }
            openFocusMode(q);
        });

        // Like Button Click Handler
        const likeBtn = card.querySelector('.like-btn');
        likeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleLike(q.id, likeBtn);
        });

        // Copy Button Click Handler
        const copyBtn = card.querySelector('.copy-btn');
        copyBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const textToCopy = `${q.body}\n— ${q.source} ${q.author ? `, ${q.author}` : ''}`;
            copyToClipboard(textToCopy);
        });

        quotesGrid.appendChild(card);
    });
}

function setActiveTab(genre) {
    genreTabs.querySelectorAll('.tab-btn').forEach(btn => {
        if (btn.dataset.genre === genre) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// --- Like Management ---
function toggleLike(quoteId, likeBtnEl) {
    const idx = quotes.findIndex(q => q.id === quoteId);
    if (idx === -1) return;

    const countSpan = likeBtnEl.querySelector('.like-count');
    const isLiked = likedQuoteIds.includes(quoteId);

    if (isLiked) {
        // Unlike
        likedQuoteIds = likedQuoteIds.filter(id => id !== quoteId);
        quotes[idx].likes = Math.max(0, quotes[idx].likes - 1);
        likeBtnEl.classList.remove('active');
        likeBtnEl.querySelector('svg').outerHTML = HEART_OUTLINE;
    } else {
        // Like
        likedQuoteIds.push(quoteId);
        quotes[idx].likes += 1;
        likeBtnEl.classList.add('active');
        likeBtnEl.querySelector('svg').outerHTML = HEART_FILLED;
    }

    countSpan.textContent = quotes[idx].likes;

    // Sync to local storage
    localStorage.setItem('mindful_quotes', JSON.stringify(quotes));
    localStorage.setItem('mindful_liked_ids', JSON.stringify(likedQuoteIds));
}

// --- Modal Handlers (Register Quote) ---
function openModal() {
    // Initialize wizard step
    currentWizardStep = 1;
    updateWizardUI();
    
    registerModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // lock scroll
}

function closeModal() {
    registerModal.classList.remove('active');
    document.body.style.overflow = ''; // unlock scroll
    quoteForm.reset();
    
    // Reset category selection to default (movie)
    categoryGrid.querySelectorAll('.category-card').forEach(el => el.classList.remove('selected'));
    categoryGrid.querySelector('[data-value="movie"]').classList.add('selected');
    quoteCategoryInput.value = 'movie';
    
    // Reset char count
    document.getElementById('charCount').textContent = '0';
}

function navigateWizard(direction) {
    if (direction === 1) {
        // Validation before moving next
        if (currentWizardStep === 2) {
            const source = document.getElementById('quoteSource').value.trim();
            if (!source) {
                showToast('출처를 입력해 주세요.');
                return;
            }
        }
    }
    
    currentWizardStep += direction;
    updateWizardUI();
}

function updateWizardUI() {
    // Hide all steps, show active
    document.querySelectorAll('.wizard-step').forEach(step => {
        step.classList.remove('active');
        if (parseInt(step.dataset.step) === currentWizardStep) {
            step.classList.add('active');
        }
    });
    
    // Update wizard progress indicator
    const progressIndicator = document.getElementById('wizardStepIndicator');
    const progressBarFill = document.getElementById('wizardProgressBarFill');
    
    if (currentWizardStep <= 3) {
        progressIndicator.style.display = 'block';
        progressBarFill.parentElement.style.display = 'block';
        progressIndicator.textContent = `${currentWizardStep}단계 / 3단계`;
        progressBarFill.style.width = `${(currentWizardStep / 3) * 100}%`;
    } else {
        progressIndicator.style.display = 'none';
        progressBarFill.parentElement.style.display = 'none';
    }
}

function handleFormSubmit(e) {
    e.preventDefault();

    const category = quoteCategoryInput.value;
    const source = document.getElementById('quoteSource').value.trim();
    const author = document.getElementById('quoteAuthor').value.trim() || '익명';
    const body = quoteBodyInput.value.trim();

    if (!source || !body) {
        showToast('출처와 내용을 모두 작성해 주세요.');
        return;
    }

    const newQuote = {
        id: 'q_' + Date.now(),
        category,
        source,
        author,
        body,
        likes: 0
    };

    // Save to beginning of array
    quotes.unshift(newQuote);
    localStorage.setItem('mindful_quotes', JSON.stringify(quotes));

    // Advance to success screen
    currentWizardStep = 4;
    updateWizardUI();

    // Close modal automatically after delay
    setTimeout(() => {
        closeModal();
        renderFeed();
        showToast('글귀가 따뜻하게 등록되었습니다.');
    }, 1800);
}

// --- Focus Mode (Zoom & Transcription) ---
function openFocusMode(quoteObj) {
    currentActiveQuote = quoteObj;
    
    // Configure badge details
    const categoryLabels = {
        movie: '영화',
        drama: '드라마',
        book: '도서',
        lyrics: '가사',
        quote: '명언'
    };
    
    focusCategoryBadge.className = `focus-category ${quoteObj.category}`;
    focusCategoryBadge.textContent = categoryLabels[quoteObj.category];
    
    // Reset view font sizes and options
    baseFontSize = 24;
    focusQuoteText.style.fontSize = `${baseFontSize}px`;
    
    // Set text contents
    focusQuoteText.textContent = quoteObj.body;
    focusQuoteMeta.textContent = `${quoteObj.source} ${quoteObj.author ? `— ${quoteObj.author}` : ''}`;
    
    // Load text in workspace
    resetTypingWorkspace();
    
    // Display focus overlay
    focusOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Highlight active toolbar options
    setPaperStyle('blank'); // default style
    fontGothicBtn.classList.remove('active');
    fontMyeongjoBtn.classList.add('active');
    quoteSheet.className = 'quote-sheet sheet-blank font-myeongjo';
}

function exitFocusMode() {
    focusOverlay.classList.remove('active');
    document.body.style.overflow = '';
    
    // Stop ambient noise immediately
    setAmbientSound('none');
}

function setPaperStyle(style) {
    // Update toolbar active class
    paperBlankBtn.classList.remove('active');
    paperLinedBtn.classList.remove('active');
    paperGridBtn.classList.remove('active');
    
    quoteSheet.classList.remove('sheet-blank', 'sheet-lined', 'sheet-grid');
    
    if (style === 'blank') {
        paperBlankBtn.classList.add('active');
        quoteSheet.classList.add('sheet-blank');
    } else if (style === 'lined') {
        paperLinedBtn.classList.add('active');
        quoteSheet.classList.add('sheet-lined');
    } else if (style === 'grid') {
        paperGridBtn.classList.add('active');
        quoteSheet.classList.add('sheet-grid');
    }
}

// --- Digital Transcription Logic ---
function resetTypingWorkspace() {
    if (!currentActiveQuote) return;
    
    // Show typing playground, hide success msg
    typingPlayground.style.display = 'flex';
    typingSuccessMsg.classList.remove('active');
    
    typingInput.value = '';
    typingInput.maxLength = currentActiveQuote.body.length;
    
    // Populate text comparer template spans
    const targetText = currentActiveQuote.body;
    textComparer.innerHTML = '';
    
    for (let i = 0; i < targetText.length; i++) {
        const charSpan = document.createElement('span');
        const targetChar = targetText[i];
        
        charSpan.className = 'pending';
        charSpan.textContent = targetChar;
        
        if (targetChar === '\n') {
            textComparer.appendChild(document.createElement('br'));
        } else {
            textComparer.appendChild(charSpan);
        }
    }
    
    // Reset HUD
    progressBarFill.style.width = '0%';
    progressPercent.textContent = '0%';
    matchRateScore.textContent = '0% 일치';
}

function updateTypingComparison() {
    if (!currentActiveQuote) return;
    
    const targetText = currentActiveQuote.body;
    const typedText = typingInput.value;
    
    // Clear out comparer
    textComparer.innerHTML = '';
    
    let correctCount = 0;
    
    for (let i = 0; i < targetText.length; i++) {
        const targetChar = targetText[i];
        const charSpan = document.createElement('span');
        
        if (i < typedText.length) {
            const typedChar = typedText[i];
            if (typedChar === targetChar) {
                charSpan.className = 'correct';
                charSpan.textContent = targetChar;
                correctCount++;
            } else {
                charSpan.className = 'incorrect';
                charSpan.textContent = targetChar; // show the target char but highlighted as mismatch
            }
        } else {
            charSpan.className = 'pending';
            charSpan.textContent = targetChar;
        }
        
        if (targetChar === '\n') {
            textComparer.appendChild(document.createElement('br'));
        } else {
            textComparer.appendChild(charSpan);
        }
    }
    
    // Calc progress
    const progressVal = Math.min(100, Math.round((typedText.length / targetText.length) * 100));
    progressBarFill.style.width = `${progressVal}%`;
    progressPercent.textContent = `${progressVal}%`;
    
    // Calc matching accuracy
    let matchRate = 0;
    if (typedText.length > 0) {
        matchRate = Math.round((correctCount / typedText.length) * 100);
    }
    matchRateScore.textContent = `${matchRate}% 일치`;
    
    // Trigger Success on exact match
    if (typedText === targetText) {
        setTimeout(() => {
            // Visual fade / hide playground
            typingPlayground.style.display = 'none';
            typingSuccessMsg.classList.add('active');
        }, 300);
    }
}

// --- Synthesized Ambient Audio (Web Audio API) ---
function initAudio() {
    if (!audioCtx) {
        try {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.warn("Web Audio API is not supported in this browser.", e);
        }
    }
}

function stopAmbientSound() {
    synthNodes.forEach(node => {
        try {
            node.stop();
        } catch(e) {}
        try {
            node.disconnect();
        } catch(e) {}
    });
    synthNodes = [];
}

function createNoiseBuffer(type) {
    if (!audioCtx) return null;
    
    const sampleRate = audioCtx.sampleRate;
    const bufferSize = 2 * sampleRate; // 2 seconds loop
    const buffer = audioCtx.createBuffer(1, bufferSize, sampleRate);
    const data = buffer.getChannelData(0);
    
    if (type === 'white') {
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }
    } else if (type === 'pink') {
        // Paul Kellet's refined pink noise approximation
        let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
        for (let i = 0; i < bufferSize; i++) {
            const white = Math.random() * 2 - 1;
            b0 = 0.99886 * b0 + white * 0.0555179;
            b1 = 0.99332 * b1 + white * 0.0750759;
            b2 = 0.96900 * b2 + white * 0.1538520;
            b3 = 0.86650 * b3 + white * 0.3104856;
            b4 = 0.55000 * b4 + white * 0.5329522;
            b5 = -0.7616 * b5 - white * 0.0168980;
            data[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
            data[i] *= 0.11; // normal scaling
            b6 = white * 0.115926;
        }
    } else if (type === 'brown') {
        // Brown noise integration
        let lastOut = 0.0;
        for (let i = 0; i < bufferSize; i++) {
            const white = Math.random() * 2 - 1;
            data[i] = (lastOut + (0.02 * white)) / 1.02;
            lastOut = data[i];
            data[i] *= 3.5; // normal scaling
        }
    }
    
    return buffer;
}

function setAmbientSound(soundType) {
    activeSoundType = soundType;
    
    // Toggle active state in buttons
    soundBtns.forEach(btn => {
        if (btn.dataset.sound === soundType) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Stop current sound nodes
    stopAmbientSound();

    if (soundType === 'none') {
        return;
    }

    initAudio();
    if (!audioCtx) return;

    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }

    const masterVolume = parseFloat(volumeSlider.value);

    try {
        if (soundType === 'rain') {
            // White Noise with rain filters
            const buffer = createNoiseBuffer('white');
            const source = audioCtx.createBufferSource();
            source.buffer = buffer;
            source.loop = true;

            const lpFilter = audioCtx.createBiquadFilter();
            lpFilter.type = 'lowpass';
            lpFilter.frequency.value = 550; // soft rain rumble

            const peakFilter = audioCtx.createBiquadFilter();
            peakFilter.type = 'peaking';
            peakFilter.frequency.value = 1800;
            peakFilter.Q.value = 1.5;
            peakFilter.gain.value = -8; // reduce harsh mid hiss

            const gainNode = audioCtx.createGain();
            gainNode.gain.value = masterVolume * 0.6; // adjust overall comfort level

            source.connect(lpFilter);
            lpFilter.connect(peakFilter);
            peakFilter.connect(gainNode);
            gainNode.connect(audioCtx.destination);

            source.start();
            synthNodes.push(source, lpFilter, peakFilter, gainNode);

        } else if (soundType === 'waves') {
            // Pink Noise with wave swell modulation
            const buffer = createNoiseBuffer('pink');
            const source = audioCtx.createBufferSource();
            source.buffer = buffer;
            source.loop = true;

            const lpFilter = audioCtx.createBiquadFilter();
            lpFilter.type = 'lowpass';
            lpFilter.frequency.value = 350; // low ocean rumble

            const gainNode = audioCtx.createGain();
            gainNode.gain.value = masterVolume * 0.4;

            // Low frequency modulator to swell the waves
            const lfo = audioCtx.createOscillator();
            lfo.type = 'sine';
            lfo.frequency.value = 0.08; // 12.5 seconds wave swell cycle

            const lfoGain = audioCtx.createGain();
            lfoGain.gain.value = masterVolume * 0.3; // depth

            lfo.connect(lfoGain);
            lfoGain.connect(gainNode.gain);

            source.connect(lpFilter);
            lpFilter.connect(gainNode);
            gainNode.connect(audioCtx.destination);

            source.start();
            lfo.start();

            synthNodes.push(source, lpFilter, gainNode, lfo, lfoGain);

        } else if (soundType === 'fire') {
            // Brown Noise + periodic transient crackles
            const rumbleBuffer = createNoiseBuffer('brown');
            const rumbleSource = audioCtx.createBufferSource();
            rumbleSource.buffer = rumbleBuffer;
            rumbleSource.loop = true;

            const rumbleLp = audioCtx.createBiquadFilter();
            rumbleLp.type = 'lowpass';
            rumbleLp.frequency.value = 100; // very low fire rumble

            const rumbleGain = audioCtx.createGain();
            rumbleGain.gain.value = masterVolume * 0.8;

            rumbleSource.connect(rumbleLp);
            rumbleLp.connect(rumbleGain);
            rumbleGain.connect(audioCtx.destination);

            rumbleSource.start();
            synthNodes.push(rumbleSource, rumbleLp, rumbleGain);

            // Pop trigger logic
            let crackleInterval = setInterval(() => {
                if (Math.random() < 0.28 && audioCtx && audioCtx.state !== 'suspended') {
                    // Trigger tiny crackle pop
                    try {
                        const popSource = audioCtx.createBufferSource();
                        popSource.buffer = createNoiseBuffer('white');

                        const bpFilter = audioCtx.createBiquadFilter();
                        bpFilter.type = 'bandpass';
                        bpFilter.frequency.value = 1200 + Math.random() * 3000;
                        bpFilter.Q.value = 6.0;

                        const popGain = audioCtx.createGain();
                        const now = audioCtx.currentTime;
                        popGain.gain.setValueAtTime(0, now);
                        popGain.gain.linearRampToValueAtTime(masterVolume * (0.05 + Math.random() * 0.15), now + 0.001);
                        popGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.01 + Math.random() * 0.02);

                        popSource.connect(bpFilter);
                        bpFilter.connect(popGain);
                        popGain.connect(audioCtx.destination);

                        popSource.start(now);
                        popSource.stop(now + 0.04);
                    } catch(e) {}
                }
            }, 140);

            synthNodes.push({
                stop: () => clearInterval(crackleInterval),
                disconnect: () => {}
            });
        }
    } catch (err) {
        console.error("Failed to run Web Audio synthesizers", err);
    }
}

function setVolume(volume) {
    if (activeSoundType === 'none' || synthNodes.length === 0) return;
    
    // We adjust the gain nodes dynamically in the active synthNodes array
    // Gain nodes are usually the 3rd or last element in the array
    try {
        if (activeSoundType === 'rain') {
            const gainNode = synthNodes[3]; // source, lpFilter, peakFilter, gainNode
            if (gainNode && gainNode.gain) gainNode.gain.value = volume * 0.6;
        } else if (activeSoundType === 'waves') {
            const gainNode = synthNodes[2]; // source, lpFilter, gainNode, lfo, lfoGain
            const lfoGain = synthNodes[4];
            if (gainNode && gainNode.gain) gainNode.gain.value = volume * 0.4;
            if (lfoGain && lfoGain.gain) lfoGain.gain.value = volume * 0.3;
        } else if (activeSoundType === 'fire') {
            const rumbleGain = synthNodes[2]; // rumbleSource, rumbleLp, rumbleGain, PopInterval
            if (rumbleGain && rumbleGain.gain) rumbleGain.gain.value = volume * 0.8;
        }
    } catch (e) {
        console.warn("Could not dynamically set volume", e);
    }
}

// --- Utilities ---
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showToast('글귀가 클립보드에 고이 담겼습니다.');
        }).catch(err => {
            fallbackCopy(text);
        });
    } else {
        fallbackCopy(text);
    }
}

function fallbackCopy(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed'; // prevent scroll
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        document.execCommand('copy');
        showToast('글귀가 클립보드에 고이 담겼습니다.');
    } catch (err) {
        showToast('글귀 복사에 실패했습니다.');
    }
    document.body.removeChild(textArea);
}

function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}

function escapeHTML(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// Run Initialization on DOM Load
window.addEventListener('DOMContentLoaded', init);

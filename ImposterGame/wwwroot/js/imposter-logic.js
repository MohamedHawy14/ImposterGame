// Seed Data - 100 items per category in Egyptian dialect
const seedData = {
    'حيوانات': [
        'أسد', 'نمر', 'فيل', 'زرافة', 'قرد', 'نسناس', 'غزال', 'جمل', 'حصان', 'حمار',
        'بقرة', 'جاموسة', 'خروف', 'معزة', 'جدي', 'عجل', 'كلب', 'قطة', 'أرنب', 'فأر',
        'هامستر', 'خنزير', 'ذئب', 'ثعلب', 'ضبع', 'دب', 'باندا', 'كنغر', 'سنجاب', 'قنفذ',
        'سلحفاة', 'تمساح', 'برص', 'سحلية', 'ثعبان', 'حرباية', 'ضفدعة', 'عقرب', 'عنكبوت', 'صرصور',
        'نملة', 'نحلة', 'دبانة', 'ناموسة', 'دبور', 'فراشة', 'جرادة', 'برغوث', 'قملة', 'خنفساء',
        'عصفور', 'حمامة', 'يمامة', 'غراب', 'بومة', 'صقر', 'نسر', 'ببغاء', 'هدهد', 'طاووس',
        'دجاجة (فرخة)', 'ديك', 'كتكوت', 'بطة', 'وزة', 'ديك رومي', 'نعامة', 'بجعة', 'لقلق', 'هدهد',
        'سمكة', 'قرش', 'دولفين', 'حوت', 'أخطبوط', 'قنديل البحر', 'كابوريا', 'جمبري', 'استاكوزا', 'سبيط',
        'ترسة', 'كلب بحر', 'سبع بحر', 'سيد قشطة', 'خرتيت', 'وحيد القرن', 'حمار وحشي', 'غوريلا', 'شمبانزي', 'أورانجوتان',
        'خفاش', 'بومة', 'غراب', 'بجعة', 'فلامنجو', 'بطريق', 'نعامة', 'سمان', 'حداية', 'باشق'
    ],
    'ملابس': [
        'قميص كاجوال', 'بنطلون جينز', 'تيشيرت نص كم', 'جاكيت جلد', 'بدلة فرح', 'فستان سواريه', 'جيبة بليسيه', 'بلوزة شيفون', 'هودي شتوي', 'سويت شيرت',
        'بنطلون قماش', 'شورت بحر', 'ترينج رياضي', 'جاكيت نفخ', 'بالطو طويل', 'بلوفر صوف', 'قميص كاروهات', 'كرافتة', 'سديري', 'بيجاما ستان',
        'شرابات قطن', 'جزمة كلاسيك', 'كوتشي فلات', 'صندل صيفي', 'شبشب حمام', 'كعب عالي', 'بوت طويل', 'هاف بوت', 'لكلوك شتوي', 'سليبر',
        'كاب (كابيتشو)', 'ايس كاب', 'برنيطة صيف', 'كوفية صوف', 'جوانتي جلد', 'نظارة شمس', 'ساعة يد', 'سلسلة دهب', 'خاتم فضة', 'حلق لولي',
        'حزام جلد', 'محفظة جيب', 'شنطة كروس', 'شنطة ضهر', 'شنطة سفر', 'مناديل قماش', 'طرحة جيل', 'باندانا', 'خمار', 'عباية بيتي',
        'جلباب رجالي', 'إسدال صلاة', 'قفطان', 'برنص حمام', 'مايوه', 'بوركيني', 'قميص نوم', 'روب شتوي', 'كلسون (تحتاني)', 'فانلة حمالات',
        'بوكسر', 'شراب كولون', 'شراب ضاغط', 'بنطلون باجي', 'بنطلون شارلستون', 'فيست صوف', 'كارديجان طويل', 'جاكيت جينز', 'قميص جينز', 'جيبة صك',
        'خوذة موتوسيكل', 'قميص بولو', 'بنطلون ليجن', 'شال فلسطيني', 'عقال (للتمثيل)', 'طاقية صوف', 'طربوش (للضحك)', 'خلخال', 'بروش', 'توكة شعر',
        'طقم داخلي', 'مريلة مطبخ', 'بالطو دكتور', 'أفرول شغل', 'يونيفورم مدرسة', 'قميص مشجر', 'بنطلون مقطع', 'جزمة سيفتي', 'كروكس', 'بلغة صعيدي',
        'ببيونة', 'مشبك كرافتة', 'ساعة سمارت', 'نظارة نظر', 'شنطة مكياج', 'حمالات بنطلون', 'قميص أبيض', 'بدلة غطس', 'فستان فرح', 'طرحة عروسة'
    ],
    'أكلات': [
        'كشري مصري', 'حواوشي', 'فتة باللحمة', 'ملوخية', 'ممبار', 'كبدة إسكندراني', 'سجق شرقي', 'كفتة مشوية', 'طعمية (فلافل)', 'فول مدمس',
        'مسقعة', 'كوارع', 'فتة كوارع', 'ممبار بوبس', 'ورق عنب', 'كرنب', 'كوسة محشية', 'باذنجان محشي', 'فلفل محشي', 'أرنب بالملوخية',
        'دجاج مشوي', 'حمام محشي', 'بط بالبرتقال', 'كباب حلة', 'شيش طاووق', 'طاجن لسان عصفور', 'طاجن عكاوي', 'بامية باللحمة', 'بسلة بالجزر', 'قلقاس بالسلق',
        'صينية بطاطس بالفراخ', 'أرز معمر', 'أرز بشعرية', 'صيادية سمك', 'سمك بلطي مقلي', 'سمك بوري مشوي', 'جمبري مشوي', 'سبيط مقلي (كاليماري)', 'كابوريا', 'جندوفلي',
        'رنجة', 'فسيخ', 'سردين مملح', 'مخ بانيه', 'كبدة وقوانص', 'شكشوكة', 'بصارة', 'مخلل مشكل', 'باذنجان مخلل', 'سلطة طحينة',
        'سلطة بابا غنوج', 'جبنة قديمة بمش', 'فطير مشلتت', 'عسل أسود وطحينة', 'جبنة بيضاء بالطماطم', 'بيض بالبسطرمة', 'تونا بالبصل', 'كبدة جملي', 'كرشة', 'فشة',
        'شوربة عدس', 'شوربة كوارع', 'شوربة حمام', 'شوربة سي فود', 'شوربة لسان عصفور', 'مكرونة بشاميل', 'مكرونة نجرسكو', 'مكرونة وايت صوص', 'كشري إسكندراني (عدس أصفر)', 'مبكبكة',
        'كانيلوني', 'لازانيا باللحمة', 'سمبوسك بالجبنة', 'كبيبة', 'كنافة بالمانجو', 'بسبوسة بالسمن البلدي', 'أم علي', 'أرز بلبن', 'مهلبية', 'قمر الدين',
        'لقمة القاضي (زلابية)', 'بلح الشام', 'صوابع زينب', 'عاشورة', 'كسكسي بالسكر', 'غزل البنات', 'حلاوة طحينية', 'مفتقة', 'فريك باللحمة', 'كشك مصري',
        'شاورما مصري', 'فتة شاورما', 'ساندوتش كفتة', 'ساندوتش سجق', 'ساندوتش بطاطس سوري', 'ساندوتش حلاوة بالقشطة', 'ساندوتش مربى بالزبدة', 'بليلة باللبن', 'كوز ذرة مشوي', 'ترمس'
    ],
    'مهن': [
        'دكتور', 'مهندس', 'مدرس', 'محامي', 'محاسب', 'ضابط شرطة', 'عسكري', 'طيار', 'ممرض', 'صيدلي',
        'حلاق', 'نجار', 'سباك', 'كهربائي', 'نقاش', 'مبلط', 'بنا', 'نجار مسلح', 'حداد', 'خياط',
        'جزار', 'بقال', 'خضري', 'فاكهاني', 'حلواني', 'خباز', 'لبان', 'عطار', 'كوافير', 'سائق تاكسي',
        'سائق ميكروباص', 'سائق توكتوك', 'طيار دليفري', 'سائق لوري', 'كابتن كريم', 'ميكانيكي', 'سمكري', 'سروجي', 'كهربائي سيارات', 'بنزيناتي',
        'طباخ', 'شيف بيتزا', 'معلم شاورما', 'نادل (جرسون)', 'كاشير', 'مدير مطعم', 'باريستا', 'عامل نظافة', 'ساعي', 'فراش',
        'غفير', 'بودي جارد', 'سايس', 'بواب', 'مكوجي', 'جزماتي', 'منجد', 'استرججي', 'لحام', 'خراط',
        'صحفي', 'مذيع', 'مصور', 'مخرج', 'ممثل', 'مغني', 'عازف', 'رسام', 'خطاط', 'نحات',
        'مبرمج', 'مهندس ديكور', 'مصمم جرافيك', 'يوتيوبر', 'بلوجر', 'محرك عرائس', 'ساحر', 'لاعب كورة', 'مدرب جيم', 'حكم كورة',
        'مأذون', 'إمام مسجد', 'قسيس', 'أمين مكتبة', 'موظف بنك', 'موظف بريد', 'خدمة عملاء', 'مندوب مبيعات', 'عقارات (سمسار)', 'محصل كهرباء',
        'بيطري', 'فلاح', 'صياد سمك', 'غطاس', 'طيار حربي', 'قاضي', 'رجل إطفاء', 'مسعف', 'عامل دليفري', 'منقذ شواطئ'
    ],
    'أفلام': [
        'تيتو', 'السلم والثعبان', 'ميدو مشاكل', 'الباشا تلميذ', 'فول الصين العظيم', 'أبو علي', 'ملاكي إسكندرية', 'ظرف طارق', 'جعلتني مجرماً', 'مطبات صناعية',
        'كده رضا', 'آسف على الإزعاج', 'الجزيرة', 'إبراهيم الأبيض', 'بدل فاقد', 'ولاد رزق', 'الفيل الأزرق', 'هيبتا', 'تراب الماس', 'كيرة والجن',
        'لف ودوران', 'إكس لارج', 'بلبل حيران', 'أمير البحار', 'مرجان أحمد مرجان', 'رمضان مبروك أبو العلمين', 'يا أنا يا خالتي', 'صعيدي في الجامعة الأمريكية', 'الناظر', 'عبود على الحدود',
        '55 إسعاف', 'حرامية في كي جي تو', 'حرامية في تايلاند', 'سهر الليالي', 'سيد العاطفي', 'بوحة', 'اللمبي', 'اللي بالي بالك', 'عوكل', 'كتكوت',
        'كركر', 'بوشكاش', 'اللمبي 8 جيجا', 'طباخ الريس', 'دكان شحاتة', 'حين ميسرة', 'الريس عمر حرب', 'كباريه', 'الفرح', 'ساعة ونص',
        'واحد صحيح', 'الحفلة', 'المصلحة', 'تصبح على خير', 'من 30 سنة', 'هروب اضطراري', 'كازابلانكا', 'الممر', 'العارف', 'الجريمة',
        'واحد تاني', 'عمهم', 'بحبك', 'مش أنا', 'الفلوس', 'البدلة', 'تصبح على خير', 'أهواك', 'عمر وسلمى', 'كابتن هيما', 'نور عيني',
        'سمير وشهير وبهير', 'بنات العم', 'الحرب العالمية الثالثة', 'حملة فريزر', 'قلب أمه', 'نادي الرجال السري', 'البعض لا يذهب للمأذون مرتين', 'وقفة رجالة', 'الإنس والنمس', 'البعض لا يذهب للمأذون مرتين',
        'ممنوع الاقتراب أو التصوير', 'جحيم في الهند', 'ليلة هنا وسرور', 'لص بغداد', 'واحد كابوتشينو', 'حاحا وتفاحة', 'عسل أسود', 'بلبل حيران', 'سمير أبو النيل', 'سيدني',
        'الدادة دودي', 'الثلاثة يشتغلونها', 'أمن دولت', 'جيران السعد', 'حصل خير', 'عمر وسلمى 3', 'يانا يا هو', 'بوشكاش', 'شبه منحرف', 'طير إنت'
    ]
};

// Get random word from all categories (عشوائي)
function getRandomWordFromAll() {
    const allCategories = ['حيوانات', 'ملابس', 'أكلات', 'مهن', 'أفلام'];
    const randomCategory = allCategories[Math.floor(Math.random() * allCategories.length)];
    const words = seedData[randomCategory];
    return words[Math.floor(Math.random() * words.length)];
}

// Game State
let gameState = {
    players: [],
    scores: {},
    selectedCategory: null,
    lastWord: null,
    imposterHistory: [], // Track last 10 imposters for smart random selection
    currentRound: {
        imposter: null,
        category: null,
        word: null,
        roles: {},
        votes: {},
        currentPlayerIndex: 0,
        imposterGuess: null,
        imposterGuessedCorrectly: false
    }
};

let roleRevealed = false;
let countdownTimer = null;
let imposterTimer = null;
let imposterTimeLeft = 40;

// Initialize from LocalStorage
function loadGameState() {
    const saved = localStorage.getItem('imposterGameState');
    if (saved) {
        const parsed = JSON.parse(saved);
        gameState = { ...gameState, ...parsed };
        // Ensure imposterHistory exists
        if (!gameState.imposterHistory) {
            gameState.imposterHistory = [];
        }
        // Migrate old recentImposters to imposterHistory if needed
        if (parsed.recentImposters && parsed.recentImposters.length > 0) {
            gameState.imposterHistory = [...parsed.recentImposters, ...(gameState.imposterHistory || [])].slice(0, 10);
        }
    if (gameState.players && gameState.players.length > 0) {
        renderPlayerList();
    }
    }
}

// Save to LocalStorage
function saveGameState() {
    localStorage.setItem('imposterGameState', JSON.stringify(gameState));
}

// Show Toast Notification
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.remove('hide');
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
        toast.classList.add('hide');
        setTimeout(() => {
            toast.classList.remove('hide');
        }, 300);
    }, 3000);
}

// Show Minimum Players Modal
function showMinimumPlayersModal() {
    const modal = document.getElementById('minPlayersModal');
    const backdrop = document.getElementById('minPlayersModalBackdrop');
    if (modal && backdrop) {
        modal.classList.add('show');
        backdrop.classList.add('show');
    }
}

// Close Minimum Players Modal
function closeMinimumPlayersModal() {
    const modal = document.getElementById('minPlayersModal');
    const backdrop = document.getElementById('minPlayersModalBackdrop');
    if (modal && backdrop) {
        modal.classList.remove('show');
        backdrop.classList.remove('show');
    }
}

// Show Terms Modal
function showTermsModal() {
    const modal = document.getElementById('termsModal');
    const backdrop = document.getElementById('termsModalBackdrop');
    if (modal && backdrop) {
        modal.classList.add('show');
        backdrop.classList.add('show');
    }
}

// Close Terms Modal
function closeTermsModal() {
    const modal = document.getElementById('termsModal');
    const backdrop = document.getElementById('termsModalBackdrop');
    if (modal && backdrop) {
        modal.classList.remove('show');
        backdrop.classList.remove('show');
    }
}

// Add Player
function addPlayer() {
    const input = document.getElementById('playerNameInput');
    const name = input.value.trim();
    
    if (!name) {
        showToast('عفواً، يجب كتابة اسم اللاعب!');
        return;
    }

    if (gameState.players.includes(name)) {
        showToast('هذا الاسم موجود بالفعل!');
        return;
    }

    gameState.players.push(name);
    if (!gameState.scores[name]) {
        gameState.scores[name] = 0;
    }
    
    input.value = '';
    renderPlayerList();
    saveGameState();
}

// Render Player List
function renderPlayerList() {
    const list = document.getElementById('playerList');
    list.innerHTML = '';
    
    gameState.players.forEach((player, index) => {
        const li = document.createElement('li');
        li.className = 'player-item';
        li.innerHTML = `
            <span>${player}</span>
            <button class="btn-remove" onclick="removePlayer(${index})">حذف</button>
        `;
        list.appendChild(li);
    });
}

// Remove Player
function removePlayer(index) {
    gameState.players.splice(index, 1);
    renderPlayerList();
    saveGameState();
}

// Back to Setup
function backToSetup() {
    hideAllScreens();
    document.getElementById('setupScreen').classList.add('active');
}

// Start Game
function startGame() {
    if (gameState.players.length < 3) {
        showMinimumPlayersModal();
        return;
    }

    // Reset round state
    gameState.currentRound = {
        imposter: null,
        category: null,
        word: null,
        roles: {},
        votes: {},
        currentPlayerIndex: 0,
        imposterGuess: null,
        imposterGuessedCorrectly: false
    };

    // Reset category selection
    gameState.selectedCategory = null;
    gameState.lastWord = null;

    saveGameState();
    showCategorySelection();
}

// Show Category Selection Screen
function showCategorySelection() {
    hideAllScreens();
    document.getElementById('categorySelectionScreen').classList.add('active');
}

// Select Category
function selectCategory(category) {
    // Store selected category
    gameState.selectedCategory = category;
    saveGameState();
    
    // Start a new round with this category
    startNewRound();
}

// Start New Round (with category persistence and smart random imposter selection)
function startNewRound() {
    if (!gameState.selectedCategory) {
        showCategorySelection();
        return;
    }

    // Reset round state
    gameState.currentRound = {
        imposter: null,
        category: null,
        word: null,
        roles: {},
        votes: {},
        currentPlayerIndex: 0,
        imposterGuess: null,
        imposterGuessedCorrectly: false
    };

    // Smart Random Imposter Selection Algorithm
    let imposter;
    
    // Get last 10 rounds history (for max 3 occurrences check)
    const last10Rounds = gameState.imposterHistory.slice(-10);
    
    // Get last 2 rounds (for consecutive limit check)
    const last2Rounds = gameState.imposterHistory.slice(-2);
    
    // Filter eligible players based on rules:
    // a) Haven't been imposter in the last 2 consecutive rounds
    // b) Haven't appeared more than 3 times in the last 10 rounds
    const eligiblePlayers = gameState.players.filter(player => {
        // Check consecutive limit: not in last 2 rounds
        const isConsecutive = last2Rounds.includes(player);
        if (isConsecutive) {
            return false;
        }
        
        // Check max occurrences: count how many times player appears in last 10 rounds
        const occurrences = last10Rounds.filter(p => p === player).length;
        if (occurrences >= 3) {
            return false;
        }
        
        return true;
    });
    
    // Pick random player from eligible list
    if (eligiblePlayers.length > 0) {
        // Highly random selection from eligible players
        const randomIndex = Math.floor(Math.random() * eligiblePlayers.length);
        imposter = eligiblePlayers[randomIndex];
    } else {
        // Rare case: all players hit limits, pick any random except the very last imposter
        const lastImposter = gameState.imposterHistory.length > 0 
            ? gameState.imposterHistory[gameState.imposterHistory.length - 1] 
            : null;
        
        const fallbackPlayers = lastImposter 
            ? gameState.players.filter(p => p !== lastImposter)
            : gameState.players;
        
        if (fallbackPlayers.length > 0) {
            const randomIndex = Math.floor(Math.random() * fallbackPlayers.length);
            imposter = fallbackPlayers[randomIndex];
        } else {
            // Absolute fallback: if only one player exists, pick them
            imposter = gameState.players[0];
        }
    }
    
    // Update imposter history (keep last 10)
    gameState.imposterHistory.push(imposter);
    if (gameState.imposterHistory.length > 10) {
        gameState.imposterHistory.shift();
    }
    
    gameState.currentRound.imposter = imposter;

    // Select random word from selected category, avoiding repetition
    let word;
    let wordAttempts = 0;
    
    if (gameState.selectedCategory === 'عشوائي') {
        word = getRandomWordFromAll();
    } else {
        const words = seedData[gameState.selectedCategory];
        do {
            word = words[Math.floor(Math.random() * words.length)];
            wordAttempts++;
            if (words.length === 1 || wordAttempts > 10) break;
        } while (word === gameState.lastWord && words.length > 1);
    }
    
    gameState.lastWord = word;
    gameState.currentRound.category = gameState.selectedCategory;
    gameState.currentRound.word = word;

    // Assign roles
    gameState.players.forEach(player => {
        if (player === gameState.currentRound.imposter) {
            gameState.currentRound.roles[player] = 'أنت الامبوستر';
        } else {
            gameState.currentRound.roles[player] = `${gameState.selectedCategory}: ${word}`;
        }
    });

    saveGameState();
    showRoleReveal();
}

// Change Category
function changeCategory() {
    gameState.selectedCategory = null;
    gameState.lastWord = null;
    saveGameState();
    showCategorySelection();
}

// Show Role Reveal Screen
function showRoleReveal() {
    hideAllScreens();
    document.getElementById('roleRevealScreen').classList.add('active');
    gameState.currentRound.currentPlayerIndex = 0;
    roleRevealed = false;
    showNextPlayerRole();
}

// Show Next Player Role
function showNextPlayerRole() {
    const playerIndex = gameState.currentRound.currentPlayerIndex;
    if (playerIndex >= gameState.players.length) {
        showQuestionStarterScreen();
        return;
    }

    const player = gameState.players[playerIndex];
    document.getElementById('currentPlayerName').textContent = player;
    document.getElementById('roleDisplay').textContent = '';
    document.getElementById('roleDisplay').classList.add('hidden');
    document.getElementById('nextPlayerBtn').style.display = 'none';
    roleRevealed = false;
}

// Toggle Role Display
function toggleRole() {
    const player = gameState.players[gameState.currentRound.currentPlayerIndex];
    const role = gameState.currentRound.roles[player];
    const roleDisplay = document.getElementById('roleDisplay');
    
    if (!roleRevealed) {
        roleDisplay.textContent = role;
        roleDisplay.classList.remove('hidden');
        
        if (role === 'أنت الامبوستر') {
            roleDisplay.classList.add('imposter');
        } else {
            roleDisplay.classList.remove('imposter');
        }
        
        roleRevealed = true;
        document.getElementById('nextPlayerBtn').style.display = 'block';
    } else {
        roleDisplay.classList.add('hidden');
        roleRevealed = false;
        document.getElementById('nextPlayerBtn').style.display = 'none';
    }
}

// Next Player
function nextPlayer() {
    gameState.currentRound.currentPlayerIndex++;
    showNextPlayerRole();
}

// Show Question Starter Screen
function showQuestionStarterScreen() {
    hideAllScreens();
    document.getElementById('questionStarterScreen').classList.add('active');
    
    // Randomly pick a player (not the imposter) to start asking questions
    const nonImposterPlayers = gameState.players.filter(p => p !== gameState.currentRound.imposter);
    const randomIndex = Math.floor(Math.random() * nonImposterPlayers.length);
    const starterPlayer = nonImposterPlayers[randomIndex];
    
    // Store starter player in game state for reference
    gameState.currentRound.starterPlayer = starterPlayer;
    
    // Display the starter player
    document.getElementById('questionStarterName').textContent = starterPlayer;
    document.getElementById('questionStarterText').textContent = `اللاعب ${starterPlayer} هو اللي هيبدأ يسأل!`;
    
    saveGameState();
}

// Start Voting (called from Question Starter Screen)
function startVoting() {
    showVotingScreen();
}

// Show Voting Screen
function showVotingScreen() {
    hideAllScreens();
    document.getElementById('votingScreen').classList.add('active');
    gameState.currentRound.currentPlayerIndex = 0;
    gameState.currentRound.votes = {};
    showNextVoter();
}

// Show Next Voter
function showNextVoter() {
    const playerIndex = gameState.currentRound.currentPlayerIndex;
    if (playerIndex >= gameState.players.length) {
        showSuspenseScreen();
        return;
    }

    const player = gameState.players[playerIndex];
    document.getElementById('votingPlayerName').textContent = `دور ${player}`;
    
    const votingList = document.getElementById('votingList');
    votingList.innerHTML = '';
    
    gameState.players.forEach(voteTarget => {
        if (voteTarget !== player) {
            const li = document.createElement('li');
            li.className = 'voting-item';
            li.textContent = voteTarget;
            li.onclick = () => {
                castVote(player, voteTarget);
                // Remove focus/active state immediately (iPhone fix)
                li.blur();
                li.style.outline = 'none';
                setTimeout(() => {
                    li.style.transform = '';
                    li.style.background = '';
                }, 100);
            };
            votingList.appendChild(li);
        }
    });
}

// Cast Vote
function castVote(voter, target) {
    gameState.currentRound.votes[voter] = target;
    saveGameState();
    
    gameState.currentRound.currentPlayerIndex++;
    showNextVoter();
}

// Show Suspense Screen (5-second countdown)
function showSuspenseScreen() {
    hideAllScreens();
    document.getElementById('suspenseScreen').classList.add('active');
    
    let countdown = 5;
    const countdownElement = document.getElementById('suspenseCountdown');
    const pulseElement = document.getElementById('suspensePulse');
    
    if (countdownElement) {
        countdownElement.textContent = countdown;
    }
    
    countdownTimer = setInterval(() => {
        countdown--;
        if (countdown > 0) {
            if (countdownElement) {
                countdownElement.textContent = countdown;
            }
            if (pulseElement) {
                pulseElement.classList.add('pulse');
                setTimeout(() => {
                    if (pulseElement) pulseElement.classList.remove('pulse');
                }, 500);
            }
        } else {
            clearInterval(countdownTimer);
            if (countdownElement) {
                countdownElement.textContent = '0';
            }
            setTimeout(() => {
                showImposterReveal();
            }, 500);
        }
    }, 1000);
}

// Show Imposter Reveal
function showImposterReveal() {
    hideAllScreens();
    document.getElementById('imposterRevealScreen').classList.add('active');
    
    const imposter = gameState.currentRound.imposter;
    document.getElementById('imposterRevealName').textContent = imposter;
    
    // After showing reveal, go to Imposter's Last Chance
    setTimeout(() => {
        showImpostersLastChance();
    }, 2000);
}

// Show Imposter's Last Chance Screen
function showImpostersLastChance() {
    hideAllScreens();
    document.getElementById('impostersLastChanceScreen').classList.add('active');
    
    const imposter = gameState.currentRound.imposter;
    document.getElementById('imposterNameDisplay').textContent = imposter;
    
    // Get 10 random words from current category (one is correct)
    const correctWord = gameState.currentRound.word;
    let words = [];
    
    if (gameState.selectedCategory === 'عشوائي') {
        // For random category, get words from all categories
        const allWords = [];
        Object.values(seedData).forEach(categoryWords => {
            allWords.push(...categoryWords);
        });
        words = [...new Set(allWords)].filter(w => w !== correctWord);
    } else {
        words = seedData[gameState.selectedCategory].filter(w => w !== correctWord);
    }
    
    // Shuffle and take 9 random words
    const shuffled = words.sort(() => 0.5 - Math.random());
    const randomWords = shuffled.slice(0, 9);
    
    // Add correct word and shuffle again
    randomWords.push(correctWord);
    const finalWords = randomWords.sort(() => 0.5 - Math.random());
    
    // Display words
    const wordsContainer = document.getElementById('imposterWordsContainer');
    wordsContainer.innerHTML = '';
    
    finalWords.forEach((word, index) => {
        const btn = document.createElement('button');
        btn.className = 'imposter-word-btn';
        btn.textContent = word;
        btn.onclick = () => selectImposterWord(word, correctWord);
        wordsContainer.appendChild(btn);
    });
    
    // Start 40-second countdown
    imposterTimeLeft = 40;
    updateImposterTimer();
    
    imposterTimer = setInterval(() => {
        imposterTimeLeft--;
        updateImposterTimer();
        
        if (imposterTimeLeft <= 0) {
            clearInterval(imposterTimer);
            // Time's up, automatically submit with null
            submitImposterGuess(null);
        }
    }, 1000);
}

// Update Imposter Timer Display
function updateImposterTimer() {
    const timerElement = document.getElementById('imposterTimer');
    if (timerElement) {
        timerElement.textContent = imposterTimeLeft;
        
        // Change color as time runs out
        if (imposterTimeLeft <= 10) {
            timerElement.classList.add('timer-warning');
        } else {
            timerElement.classList.remove('timer-warning');
        }
    }
}

// Select Imposter Word
function selectImposterWord(selectedWord, correctWord) {
    clearInterval(imposterTimer);
    submitImposterGuess(selectedWord);
}

// Submit Imposter Guess (called manually or on timeout)
function submitImposterGuess(selectedWord) {
    clearInterval(imposterTimer);
    
    if (selectedWord === null) {
        // Time ran out or no guess
        gameState.currentRound.imposterGuess = null;
        gameState.currentRound.imposterGuessedCorrectly = false;
    } else {
        // Player selected a word
        const correctWord = gameState.currentRound.word;
        gameState.currentRound.imposterGuess = selectedWord;
        gameState.currentRound.imposterGuessedCorrectly = (selectedWord === correctWord);
        
        // Highlight selected word
        document.querySelectorAll('.imposter-word-btn').forEach(btn => {
            if (btn.textContent === selectedWord) {
                if (selectedWord === correctWord) {
                    btn.classList.add('correct-guess');
                } else {
                    btn.classList.add('wrong-guess');
                }
            }
        });
    }
    
    saveGameState();
    
    // Show result briefly (only if word was selected, otherwise go straight to results)
    if (selectedWord !== null) {
        setTimeout(() => {
            showFinalResults();
        }, 1500);
    } else {
        showFinalResults();
    }
}

// Show Final Results
function showFinalResults() {
    if (countdownTimer) clearInterval(countdownTimer);
    if (imposterTimer) clearInterval(imposterTimer);
    
    hideAllScreens();
    document.getElementById('resultsScreen').classList.add('active');
    
    const imposter = gameState.currentRound.imposter;
    document.getElementById('imposterReveal').textContent = `الامبوستر الحقيقي كان: ${imposter}`;
    
    // Display voting results
    const votingResultsDiv = document.getElementById('votingResults');
    votingResultsDiv.innerHTML = '<ul class="voting-results-list">';
    
    gameState.players.forEach(player => {
        const vote = gameState.currentRound.votes[player] || 'لم يصوت';
        const li = document.createElement('li');
        li.className = 'voting-results-item';
        li.innerHTML = `<span>${player} صوت لـ: ${vote}</span>`;
        votingResultsDiv.querySelector('ul').appendChild(li);
    });
    
    votingResultsDiv.innerHTML += '</ul>';
    
    // Calculate scores with FINAL logic
    // Count wrong votes: votes from non-imposter players who voted for someone other than the imposter
    let wrongVoteCount = 0;
    gameState.players.forEach(player => {
        if (player !== imposter) {
            const vote = gameState.currentRound.votes[player];
            if (vote && vote !== imposter) {
                wrongVoteCount++;
            }
        }
    });
    
    // Award points
    gameState.players.forEach(player => {
        if (player === imposter) {
            // Imposter gets +5 for each wrong vote (each non-imposter player who voted wrong)
            gameState.scores[player] += (wrongVoteCount * 5);
            
            // Imposter gets +10 if they guessed correctly
            if (gameState.currentRound.imposterGuessedCorrectly) {
                gameState.scores[player] += 10;
            }
        } else {
            // Player gets +10 for correct vote (voting for the imposter)
            if (gameState.currentRound.votes[player] === imposter) {
                gameState.scores[player] += 10;
            }
        }
    });
    
    // Display scores
    const scoresTableBody = document.getElementById('scoresTableBody');
    scoresTableBody.innerHTML = '';
    
    const sortedPlayers = [...gameState.players].sort((a, b) => gameState.scores[b] - gameState.scores[a]);
    
    sortedPlayers.forEach(player => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${player}</td>
            <td>${gameState.scores[player]}</td>
        `;
        scoresTableBody.appendChild(tr);
    });
    
    // Show imposter guess result
    const guessResult = document.getElementById('imposterGuessResult');
    if (guessResult) {
        if (gameState.currentRound.imposterGuessedCorrectly) {
            // Imposter guessed correctly
            guessResult.textContent = `🎉 ${imposter} خمن الكلمة الصحيحة! (+10 نقاط)`;
            guessResult.className = 'guess-result correct';
            guessResult.style.display = 'block';
        } else {
            // Imposter failed to guess or time ran out
            guessResult.textContent = `❌ ${imposter} لم يخمن الكلمة الصحيحة`;
            guessResult.className = 'guess-result wrong';
            guessResult.style.display = 'block';
        }
    }
    
    saveGameState();
}

// New Round (uses same category)
function newRound() {
    if (!gameState.selectedCategory) {
        showCategorySelection();
        return;
    }
    startNewRound();
}

// Hide All Screens
function hideAllScreens() {
    document.querySelectorAll('.game-screen').forEach(screen => {
        screen.classList.remove('active');
    });
}

// Show Reset Modal
function resetGame() {
    const modal = document.getElementById('resetModal');
    const backdrop = document.getElementById('resetModalBackdrop');
    modal.classList.add('show');
    backdrop.classList.add('show');
}

// Confirm Reset
function confirmReset() {
    // Clear LocalStorage
    localStorage.removeItem('imposterGameState');
    
    // Reset game state
    gameState = {
        players: [],
        scores: {},
        selectedCategory: null,
        lastWord: null,
        imposterHistory: [],
        currentRound: {
            imposter: null,
            category: null,
            word: null,
            roles: {},
            votes: {},
            currentPlayerIndex: 0,
            imposterGuess: null,
            imposterGuessedCorrectly: false
        }
    };
    
    // Clear UI
    document.getElementById('playerList').innerHTML = '';
    document.getElementById('playerNameInput').value = '';
    
    // Hide modal
    cancelReset();
    
    // Show setup screen
    hideAllScreens();
    document.getElementById('setupScreen').classList.add('active');
    
    // Show success toast
    showToast('تم تصفير اللعبة بنجاح');
}

// Cancel Reset
function cancelReset() {
    const modal = document.getElementById('resetModal');
    const backdrop = document.getElementById('resetModalBackdrop');
    modal.classList.remove('show');
    backdrop.classList.remove('show');
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Allow Enter key to add player
    const playerInput = document.getElementById('playerNameInput');
    if (playerInput) {
        playerInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                addPlayer();
            }
        });
    }

    // Close modals when clicking backdrop
    const resetBackdrop = document.getElementById('resetModalBackdrop');
    if (resetBackdrop) {
        resetBackdrop.addEventListener('click', cancelReset);
    }
    
    const minPlayersBackdrop = document.getElementById('minPlayersModalBackdrop');
    if (minPlayersBackdrop) {
        minPlayersBackdrop.addEventListener('click', closeMinimumPlayersModal);
    }

    // Initialize game state
    loadGameState();
});

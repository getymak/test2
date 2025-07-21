// 移动端问卷应用 - 基于原有app.js的移动端优化版本

// 问卷数据 (基于Excel文件的标准评分体系)
const questionnaire = {
    ability: [
        {
            id: 1,
            title: "您目前的可投资产规模占总资产的比例大约是多少？",
            category: "风险承受能力",
            icon: "fa-wallet",
            subFeature: "风险抵御能力",
            options: [
                { text: "80%以上", score: 10.00 },
                { text: "60%-80%", score: 7.50 },
                { text: "40%-60%", score: 5.00 },
                { text: "20%-40%", score: 2.50 },
                { text: "20%以下", score: 0.00 }
            ]
        },
        {
            id: 2,
            title: "您的主要收入来源是?",
            category: "风险承受能力",
            icon: "fa-chart-line",
            subFeature: "风险抵御能力",
            options: [
                { text: "多元化收入来源，包括工资、投资收益、租金等", score: 10.00 },
                { text: "稳定的工资收入加上少量其他收入", score: 7.50 },
                { text: "主要依靠稳定的工资收入", score: 5.00 },
                { text: "收入不太稳定，主要靠项目或佣金", score: 2.50 },
                { text: "收入很不稳定或主要依靠他人", score: 0.00 }
            ]
        },
        {
            id: 3,
            title: "基于当前的家庭资产负债情况，在保持生活财务不受影响的前提下，您认为可投资产可接受的最大亏损值是多少？",
            category: "风险承受能力",
            icon: "fa-exclamation-triangle",
            subFeature: "风险抵御能力",
            options: [
                { text: "50%以上", score: 10.00 },
                { text: "30%-50%", score: 7.50 },
                { text: "20%-30%", score: 5.00 },
                { text: "10%-20%", score: 2.50 },
                { text: "10%以下", score: 0.00 }
            ]
        },
        {
            id: 4,
            title: "您是否有固定的月度储蓄？",
            category: "风险承受能力",
            icon: "fa-piggy-bank",
            subFeature: "应急能力",
            options: [
                { text: "有，且储蓄率很高（收入的30%以上）", score: 10.00 },
                { text: "有，储蓄率较高（收入的20%-30%）", score: 7.50 },
                { text: "有，储蓄率适中（收入的10%-20%）", score: 5.00 },
                { text: "有，但储蓄率较低（收入的10%以下）", score: 2.50 },
                { text: "没有固定储蓄", score: 0.00 }
            ]
        },
        {
            id: 5,
            title: "如果您突然失去主要收入来源，您能维持现有生活水平多久？",
            category: "风险承受能力",
            icon: "fa-shield-alt",
            subFeature: "应急能力",
            options: [
                { text: "12个月以上", score: 10.00 },
                { text: "6-12个月", score: 7.50 },
                { text: "3-6个月", score: 5.00 },
                { text: "1-3个月", score: 2.50 },
                { text: "不到1个月", score: 0.00 }
            ]
        },
        {
            id: 6,
            title: "您认为自己的投资知识和经验如何？",
            category: "风险承受能力",
            icon: "fa-graduation-cap",
            subFeature: "投资能力",
            options: [
                { text: "非常丰富，有10年以上投资经验，熟悉各种投资工具", score: 10.00 },
                { text: "比较丰富，有5-10年投资经验，了解多种投资工具", score: 7.50 },
                { text: "一般，有2-5年投资经验，了解基本投资工具", score: 5.00 },
                { text: "较少，有1-2年投资经验，只了解少数投资工具", score: 2.50 },
                { text: "很少或没有投资经验", score: 0.00 }
            ]
        },
        {
            id: 7,
            title: "您是否有过投资失败的经历，如有遭受的损失是多少？",
            category: "风险承受能力",
            icon: "fa-chart-line-down",
            subFeature: "投资能力",
            options: [
                { text: "有过重大损失（50%以上），但从中学到了宝贵经验", score: 10.00 },
                { text: "有过较大损失（30%-50%），积累了一定经验", score: 7.50 },
                { text: "有过中等损失（20%-30%），有一定教训", score: 5.00 },
                { text: "有过小额损失（20%以下），经验有限", score: 2.50 },
                { text: "没有投资失败经历或没有投资经验", score: 0.00 }
            ]
        },
        {
            id: 8,
            title: "您目前的债务负担如何？",
            category: "风险承受能力",
            icon: "fa-credit-card",
            subFeature: "债务状况",
            options: [
                { text: "无债务或债务很少", score: 10.00 },
                { text: "有房贷等长期低息债务，负债率合理", score: 7.50 },
                { text: "有一定债务，包括信用卡债务等", score: 5.00 },
                { text: "债务较重，还款压力较大", score: 2.50 },
                { text: "债务很重，还款压力很大", score: 0.00 }
            ]
        },
        {
            id: 9,
            title: "您对家庭财务规划的态度是？",
            category: "风险承受能力",
            icon: "fa-calculator",
            subFeature: "财务规划",
            options: [
                { text: "有详细的长期财务规划，定期评估和调整", score: 10.00 },
                { text: "有基本的财务规划和明确目标", score: 7.50 },
                { text: "偶尔会做一些财务规划", score: 5.00 },
                { text: "很少做财务规划，主要是随机应变", score: 2.50 },
                { text: "从不做财务规划", score: 0.00 }
            ]
        },
        {
            id: 10,
            title: "您是否有为子女教育或退休等未来目标做了财务准备？",
            category: "风险承受能力",
            icon: "fa-bullseye",
            subFeature: "财务规划",
            options: [
                { text: "有充分的财务准备，已制定详细计划并在执行", score: 10.00 },
                { text: "有一定的财务准备，正在积极规划", score: 7.50 },
                { text: "有初步的财务准备，但计划不够详细", score: 5.00 },
                { text: "有考虑但还没有具体行动", score: 2.50 },
                { text: "没有考虑过或没有能力准备", score: 0.00 }
            ]
        }
    ],
    attitude: [
        {
            id: 11,
            title: "当市场大幅下跌时，您的第一反应是？",
            category: "风险承受态度",
            icon: "fa-arrow-down",
            subFeature: "风险情绪",
            options: [
                { text: "认为是买入机会，会增加投资", score: 10.00 },
                { text: "保持冷静，继续按计划投资", score: 7.50 },
                { text: "观望等待，暂停新的投资", score: 5.00 },
                { text: "感到担心，考虑减少投资", score: 2.50 },
                { text: "非常恐慌，立即卖出所有投资", score: 0.00 }
            ]
        },
        {
            id: 12,
            title: "您更偏好哪种投资方式？",
            category: "风险承受态度",
            icon: "fa-balance-scale",
            subFeature: "风险态度",
            options: [
                { text: "高风险高收益的投资，如股票、期货等", score: 10.00 },
                { text: "中高风险的投资，如股票基金、混合基金", score: 7.50 },
                { text: "中等风险的投资，如平衡型基金", score: 5.00 },
                { text: "低风险的投资，如债券基金、银行理财", score: 2.50 },
                { text: "无风险的投资，如银行存款、国债", score: 0.00 }
            ]
        },
        {
            id: 13,
            title: "您如何看待投资中的\"不可能三角\"（即高收益、低风险、高流动性三者难以同时兼得）？",
            category: "风险承受态度",
            icon: "fa-triangle-exclamation",
            subFeature: "风险认知",
            options: [
                { text: "完全理解投资中的不可能三角，即高收益、低风险和高流动性三者不可能同时存在。我接受为了追求高收益可能需要承担更高的风险或牺牲流动性。", score: 10.00 },
                { text: "认同投资中存在一个不可能三角，通常需要在三者之间做出权衡。我认为明智的投资是在风险和收益之间找到合适的平衡点。", score: 7.50 },
                { text: "对投资中的不可能三角有一定的了解，但我认为通过精心选择和分散投资，可以在一定程度上缓解这个三角的约束。", score: 5.00 },
                { text: "不太相信投资中的不可能三角。认为通过正确的市场分析和时机把握，有可能找到同时具备高收益、低风险和高流动性的投资机会。", score: 2.50 },
                { text: "不同意投资中的不可能三角理论。相信市场上存在能够同时提供高收益、低风险和高流动性的投资产品，只是需要更多的研究和发现。", score: 0.00 }
            ]
        },
        {
            id: 14,
            title: "您如何看待时间周期与投资回报的联系？",
            category: "风险承受态度",
            icon: "fa-hourglass-half",
            subFeature: "风险认知",
            options: [
                { text: "深信投资回报与时间周期紧密相关，长期投资能够降低波动风险并提高获得稳定回报的可能性。", score: 10.00 },
                { text: "认为投资回报与时间周期有较强的联系，长期投资通常比短期投资更有可能获得较好的收益。", score: 7.50 },
                { text: "对时间周期与投资回报的关系持中立态度，虽然长期投资可能更稳定，但短期投资在某些市场条件下也能获得不错的收益。", score: 5.00 },
                { text: "认为时间周期对投资回报的影响有限，通过精准的市场预测和操作，短期投资也能实现高收益。", score: 2.50 },
                { text: "不相信时间周期与投资回报之间有必然联系，任何时间内都有可能通过高风险投资获得高额回报。", score: 0.00 }
            ]
        },
        {
            id: 15,
            title: "假设您的可投资产准备投资基金，您更喜欢以下哪一个投资组合，假设基金A预期回报30%，但是可能亏损40%，基金B预期回报3%，但是可能亏损3%",
            category: "风险承受态度",
            icon: "fa-balance-scale",
            subFeature: "风险偏好",
            options: [
                { text: "90%投资基金A，10%基金B", score: 10.00 },
                { text: "70%投资基金A，30%基金B", score: 7.50 },
                { text: "50%投资基金A，50%基金B", score: 5.00 },
                { text: "30%投资基金A，70%基金B", score: 2.50 },
                { text: "10%投资基金A，90%基金B", score: 0.00 }
            ]
        },
        {
            id: 16,
            title: "假设您的可投资产准备投资基金，您更喜欢以下哪一个投资组合，假设基金A预期回报50%，但是需要放弃5年流动性，基金B预期回报5%，但是要放弃1年流动性",
            category: "风险承受态度",
            icon: "fa-exchange-alt",
            subFeature: "风险偏好",
            options: [
                { text: "90%投资基金A，10%基金B", score: 10.00 },
                { text: "70%投资基金A，30%基金B", score: 7.50 },
                { text: "50%投资基金A，50%基金B", score: 5.00 },
                { text: "30%投资基金A，70%基金B", score: 2.50 },
                { text: "10%投资基金A，90%基金B", score: 0.00 }
            ]
        },
        {
            id: 17,
            title: "当市场出现不利变化时，您的情绪反应如何？",
            category: "风险承受态度",
            icon: "fa-sad-tear",
            subFeature: "风险情绪",
            options: [
                { text: "保持冷静，根据计划行事", score: 10.00 },
                { text: "有些焦虑，但努力保持客观", score: 7.50 },
                { text: "感到不安，可能会采取行动减少投资", score: 5.00 },
                { text: "感到恐慌，可能会做出冲动决策", score: 2.50 },
                { text: "感到绝望，可能会完全退出市场", score: 0.00 }
            ]
        },
        {
            id: 18,
            title: "如果投资收益未达到预期，您的感受是？",
            category: "风险承受态度",
            icon: "fa-frown",
            subFeature: "风险情绪",
            options: [
                { text: "几乎没有影响，能够理性接受", score: 10.00 },
                { text: "不太在意，相信长期会好转", score: 7.50 },
                { text: "有些失望，但可以接受", score: 5.00 },
                { text: "非常失望，希望采取措施", score: 2.50 },
                { text: "无法接受，需要立即改变", score: 0.00 }
            ]
        },
        {
            id: 19,
            title: "一项原定3年的投资计划，在投资1年后，亏损达到多少会使您感到焦虑",
            category: "风险承受态度",
            icon: "fa-thermometer-half",
            subFeature: "风险情绪",
            options: [
                { text: "亏损50%以上", score: 10.00 },
                { text: "亏损30%-50%", score: 7.50 },
                { text: "亏损20%-30%", score: 5.00 },
                { text: "亏损10%-20%", score: 2.50 },
                { text: "亏损10%以内", score: 0.00 }
            ]
        },
        {
            id: 20,
            title: "以下那个选项更符合您对债务的看法？",
            category: "风险承受态度",
            icon: "fa-handshake",
            subFeature: "债务观念",
            options: [
                { text: "债务是工具，可以合理利用", score: 10.00 },
                { text: "债务是必要的，但应保持在可控范围内", score: 7.50 },
                { text: "债务是负担，应尽量避免", score: 5.00 },
                { text: "债务是风险，应尽快偿还", score: 2.50 },
                { text: "债务是灾难，必须完全避免", score: 0.00 }
            ]
        }
    ]
};

// 子特征权重配置
const subFeatureWeights = {
    ability: {
        "风险抵御能力": 0.3,
        "应急能力": 0.2,
        "投资能力": 0.2,
        "债务状况": 0.1,
        "财务规划": 0.2
    },
    attitude: {
        "风险态度": 0.1,
        "风险认知": 0.3,
        "风险偏好": 0.2,
        "风险情绪": 0.3,
        "债务观念": 0.1
    }
};

// 题目到子特征的映射
const questionToSubFeature = {
    1: "风险抵御能力", 2: "风险抵御能力", 3: "风险抵御能力", 
    4: "应急能力", 5: "应急能力", 
    6: "投资能力", 7: "投资能力", 
    8: "债务状况", 
    9: "财务规划", 10: "财务规划",
    11: "风险态度", 12: "风险认知", 13: "风险认知", 14: "风险认知",
    15: "风险偏好", 16: "风险偏好", 17: "风险情绪", 18: "风险情绪",
    19: "风险情绪", 20: "债务观念"
};

// 全局变量
let currentQuestion = 0;
let answers = {};
let allQuestions = [];
let touchStartY = 0;
let touchEndY = 0;

// 移动端初始化
function init() {
    // 检查登录状态
    const currentUser = getCurrentUser();
    if (!currentUser) {
        showToast('请先登录后再开始答题', 'warning');
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000);
        return;
    }
    
    allQuestions = [...questionnaire.ability, ...questionnaire.attitude];
    showQuestion(0);
    bindEvents();
    setupMobileInteractions();
}

// 绑定事件
function bindEvents() {
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
    document.getElementById('prev-btn').addEventListener('click', prevQuestion);
    document.getElementById('download-btn').addEventListener('click', downloadExcel);
    document.getElementById('email-btn').addEventListener('click', sendToEmail);
    document.getElementById('restart-btn').addEventListener('click', restart);
}

// 设置移动端交互
function setupMobileInteractions() {
    const container = document.querySelector('.container');
    
    // 触摸滑动支持
    container.addEventListener('touchstart', handleTouchStart, {passive: true});
    container.addEventListener('touchend', handleTouchEnd, {passive: true});
    
    // 防止双击缩放
    let lastTouchEnd = 0;
    container.addEventListener('touchend', function(event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
}

// 处理触摸开始
function handleTouchStart(event) {
    touchStartY = event.touches[0].clientY;
}

// 处理触摸结束
function handleTouchEnd(event) {
    touchEndY = event.changedTouches[0].clientY;
    handleSwipe();
}

// 处理滑动手势
function handleSwipe() {
    const swipeThreshold = 50;
    const swipeDistance = touchStartY - touchEndY;
    
    if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
            // 向上滑动 - 下一题
            if (answers[currentQuestion + 1] !== undefined && currentQuestion < allQuestions.length - 1) {
                nextQuestion();
            }
        } else {
            // 向下滑动 - 上一题
            if (currentQuestion > 0) {
                prevQuestion();
            }
        }
    }
}

// 显示问题
function showQuestion(index) {
    const question = allQuestions[index];
    
    // 更新问题内容
    document.getElementById('question-title').textContent = question.title;
    document.getElementById('question-category').textContent = question.category;
    document.getElementById('question-icon').className = `fas ${question.icon}`;
    
    // 更新进度
    const progress = ((index + 1) / allQuestions.length) * 100;
    document.getElementById('progress-fill').style.width = `${progress}%`;
    document.getElementById('progress-text').textContent = `${index + 1}/${allQuestions.length}`;
    
    // 生成选项
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, optionIndex) => {
        const button = document.createElement('button');
        button.className = 'option-button';
        button.innerHTML = `
            <div class="option-radio"></div>
            <div class="option-text">${option.text}</div>
        `;
        
        // 检查是否已选择
        if (answers[question.id] === optionIndex) {
            button.classList.add('selected');
        }
        
        // 添加点击事件
        button.addEventListener('click', () => selectOption(question.id, optionIndex, button));
        
        // 添加触摸反馈
        button.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        }, {passive: true});
        
        button.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        }, {passive: true});
        
        optionsContainer.appendChild(button);
    });
    
    // 更新导航按钮状态
    updateNavigationButtons();
    
    // 添加动画效果
    const questionCard = document.querySelector('.question-card');
    questionCard.style.opacity = '0';
    questionCard.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        questionCard.style.transition = 'all 0.3s ease';
        questionCard.style.opacity = '1';
        questionCard.style.transform = 'translateY(0)';
    }, 50);
}

// 选择选项
function selectOption(questionId, optionIndex, buttonElement) {
    // 移除其他选项的选中状态
    document.querySelectorAll('.option-button').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // 添加当前选项的选中状态
    buttonElement.classList.add('selected');
    
    // 保存答案
    answers[questionId] = optionIndex;
    
    // 更新导航按钮
    updateNavigationButtons();
    
    // 添加触觉反馈（如果支持）
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
    
    // 自动跳转到下一题（延迟一点时间让用户看到选择效果）
    setTimeout(() => {
        if (currentQuestion < allQuestions.length - 1) {
            nextQuestion();
        } else {
            // 最后一题，更新按钮状态
            updateNavigationButtons();
        }
    }, 500);
}

// 下一题
function nextQuestion() {
    // 检查当前题目是否已回答
    const currentQuestionId = allQuestions[currentQuestion].id;
    if (answers[currentQuestionId] === undefined) {
        showToast('请先选择一个答案再继续', 'warning');
        return;
    }
    
    if (currentQuestion < allQuestions.length - 1) {
        currentQuestion++;
        showQuestion(currentQuestion);
    } else {
        // 检查所有题目是否都已完成
        const unansweredQuestions = allQuestions.filter(q => answers[q.id] === undefined);
        if (unansweredQuestions.length > 0) {
            showToast(`还有 ${unansweredQuestions.length} 道题目未完成，请完成所有题目后再查看结果`, 'warning');
            return;
        }
        // 显示结果
        calculateAndShowResults();
    }
}

// 上一题
function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion(currentQuestion);
    }
}

// 更新导航按钮状态
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    // 上一题按钮
    prevBtn.disabled = currentQuestion === 0;
    
    // 下一题按钮
    const currentQuestionId = allQuestions[currentQuestion].id;
    const hasAnswer = answers[currentQuestionId] !== undefined;
    
    if (currentQuestion === allQuestions.length - 1) {
        nextBtn.innerHTML = hasAnswer ? '<i class="fas fa-chart-bar"></i> 查看结果' : '请选择答案';
        nextBtn.disabled = !hasAnswer;
    } else {
        nextBtn.innerHTML = '下一题 <i class="fas fa-chevron-right"></i>';
        nextBtn.disabled = !hasAnswer;
    }
}

// 计算并显示结果
function calculateAndShowResults() {
    const scores = calculateScores();
    
    // 隐藏问题区域和导航
    document.getElementById('question-section').classList.add('hidden');
    document.getElementById('navigation').classList.add('hidden');
    
    // 显示结果区域
    document.getElementById('results-section').classList.remove('hidden');
    
    // 更新结果显示
    // document.getElementById('total-score').textContent = Math.round(scores.total); // 已删除该元素
    // document.getElementById('risk-level').textContent = getLevel(scores.total).desc; // 已删除该元素
    
    // 生成评价内容
    const evaluation = generateEvaluation(scores);
    document.getElementById('evaluation-content').innerHTML = evaluation;
    
    // 延迟创建雷达图和资产配置饼图，确保DOM元素已渲染
    setTimeout(() => {
        createAbilityRadarChart(scores);
        createAttitudeRadarChart(scores);
        createAssetAllocationChart(scores.total);
    }, 200);
    
    // 添加结果页面动画
    const resultsCard = document.querySelector('.results-card');
    resultsCard.style.opacity = '0';
    resultsCard.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        resultsCard.style.transition = 'all 0.5s ease';
        resultsCard.style.opacity = '1';
        resultsCard.style.transform = 'translateY(0)';
    }, 100);
}

// 计算分数
function calculateScores() {
    const scores = {
        ability: { total: 0, subFeatures: {} },
        attitude: { total: 0, subFeatures: {} }
    };
    
    // 初始化子特征得分
    Object.keys(subFeatureWeights.ability).forEach(sf => {
        scores.ability.subFeatures[sf] = { score: 0, count: 0 };
    });
    Object.keys(subFeatureWeights.attitude).forEach(sf => {
        scores.attitude.subFeatures[sf] = { score: 0, count: 0 };
    });
    
    // 计算每题得分
    allQuestions.forEach(question => {
        const answer = answers[question.id];
        if (answer !== undefined) {
            const score = question.options[answer].score;
            const subFeature = questionToSubFeature[question.id];
            
            if (question.id <= 10) {
                // 风险承受能力
                scores.ability.subFeatures[subFeature].score += score;
                scores.ability.subFeatures[subFeature].count++;
            } else {
                // 风险承受态度
                scores.attitude.subFeatures[subFeature].score += score;
                scores.attitude.subFeatures[subFeature].count++;
            }
        }
    });
    
    // 计算子特征平均分和总分 (满分100分)
    ['ability', 'attitude'].forEach(type => {
        Object.keys(scores[type].subFeatures).forEach(sf => {
            const subFeatureData = scores[type].subFeatures[sf];
            if (subFeatureData.count > 0) {
                // 计算子特征平均分（每题满分10分）
                subFeatureData.average = subFeatureData.score / subFeatureData.count;
                // 转换为百分比（满分100%）
                subFeatureData.percentage = (subFeatureData.average / 10) * 100;
                // 按权重累加到总分
                scores[type].total += subFeatureData.percentage * subFeatureWeights[type][sf];
            }
        });
        scores[type].total = Math.round(scores[type].total);
    });
    
    // 计算综合得分 (取两者平均分，满分100)
    scores.total = Math.round((scores.ability.total + scores.attitude.total) / 2);
    
    return scores;
}

// 获取等级 (基于100分制)
function getLevel(score) {
    if (score >= 80) return { level: 'C5', desc: '激进型投资者', color: '#ef4444' };
    if (score >= 60) return { level: 'C4', desc: '进取型投资者', color: '#f97316' };
    if (score >= 40) return { level: 'C3', desc: '平衡型投资者', color: '#eab308' };
    if (score >= 20) return { level: 'C2', desc: '稳健型投资者', color: '#22c55e' };
    return { level: 'C1', desc: '保守型投资者', color: '#3b82f6' };
}

// 生成评价内容 (移动端优化版本)
function generateEvaluation(scores) {
    const level = getLevel(scores.total);
    const abilityLevel = getLevel(scores.ability.total);
    const attitudeLevel = getLevel(scores.attitude.total);
    const abilityEval = getAbilityEvaluation(scores.ability.total);
    const attitudeEval = getAttitudeEvaluation(scores.attitude.total);
    const totalEval = getTotalEvaluation(scores.total);
    
    return `
        <div class="evaluation-container">
            <!-- 风险等级卡片 -->
            <div class="risk-level-card" style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); padding: 25px; border-radius: 15px; margin-bottom: 30px; text-align: center; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                <div style="position: relative; width: 120px; height: 120px; margin: 0 auto 15px;">
                    <svg width="120" height="120" style="transform: rotate(-90deg);">
                        <circle cx="60" cy="60" r="50" fill="none" stroke="#e5e7eb" stroke-width="8"></circle>
                        <circle cx="60" cy="60" r="50" fill="none" stroke="#5EEAD4" stroke-width="8" 
                                stroke-dasharray="${(scores.total / 100) * 314} 314" stroke-linecap="round"></circle>
                    </svg>
                    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center;">
                        <div style="font-size: 2em; font-weight: bold; color: #1e40af;">${Math.round(scores.total)}</div>
                        <div style="font-size: 0.8em; color: #666;">总分100</div>
                    </div>
                </div>
                
                <div class="risk-level-title" style="font-size: 24px; font-weight: bold; margin-bottom: 15px; color: #1e40af;">风险等级评定</div>
                <div class="risk-level-value" style="font-size: 32px; font-weight: bold; margin: 15px 0; color: #1e40af;">${totalEval.level}</div>
                <div class="risk-spectrum" style="display: flex; justify-content: space-between; align-items: center; margin: 20px 0; padding: 10px; background: rgba(255,255,255,0.7); border-radius: 25px; position: relative;">
                    <div class="risk-spectrum-item ${scores.total < 20 ? 'active' : ''}" style="flex: 1; text-align: center; padding: 8px 4px; font-size: 12px; border-radius: 15px; transition: all 0.3s ease; ${scores.total < 20 ? 'background: #4ade80; color: #1f2937; font-weight: bold;' : ''}">保守型</div>
                    <div class="risk-spectrum-item ${scores.total >= 20 && scores.total < 40 ? 'active' : ''}" style="flex: 1; text-align: center; padding: 8px 4px; font-size: 12px; border-radius: 15px; transition: all 0.3s ease; ${scores.total >= 20 && scores.total < 40 ? 'background: #4ade80; color: #1f2937; font-weight: bold;' : ''}">稳健型</div>
                    <div class="risk-spectrum-item ${scores.total >= 40 && scores.total < 60 ? 'active' : ''}" style="flex: 1; text-align: center; padding: 8px 4px; font-size: 12px; border-radius: 15px; transition: all 0.3s ease; ${scores.total >= 40 && scores.total < 60 ? 'background: #4ade80; color: #1f2937; font-weight: bold;' : ''}">平衡型</div>
                    <div class="risk-spectrum-item ${scores.total >= 60 && scores.total < 80 ? 'active' : ''}" style="flex: 1; text-align: center; padding: 8px 4px; font-size: 12px; border-radius: 15px; transition: all 0.3s ease; ${scores.total >= 60 && scores.total < 80 ? 'background: #4ade80; color: #1f2937; font-weight: bold;' : ''}">进取型</div>
                    <div class="risk-spectrum-item ${scores.total >= 80 ? 'active' : ''}" style="flex: 1; text-align: center; padding: 8px 4px; font-size: 12px; border-radius: 15px; transition: all 0.3s ease; ${scores.total >= 80 ? 'background: #4ade80; color: #1f2937; font-weight: bold;' : ''}">激进型</div>
                </div>
            </div>
            
            <!-- 您的风险维度分析 -->
            <div class="risk-report-header" style="text-align: center; margin: 30px 0 20px 0;">
                <h2 style="margin: 0; color: #333; font-size: 1.3em; font-weight: bold;">您的风险维度分析</h2>
            </div>
            
            <!-- 两个评分卡片 -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 25px;">
                <div style="background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%); padding: 18px; border-radius: 12px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                    <h4 style="margin: 0 0 10px 0; color: #1e40af; font-size: 1em;">风险承受能力</h4>
                    <div style="font-size: 2em; font-weight: bold; color: #1e40af; margin: 8px 0;">${scores.ability.total.toFixed(1)}</div>
                    <div style="font-size: 0.8em; color: #666;">${abilityLevel.level}</div>
                </div>
                <div style="background: linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%); padding: 18px; border-radius: 12px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                    <h4 style="margin: 0 0 10px 0; color: #7c3aed; font-size: 1em;">风险承受态度</h4>
                    <div style="font-size: 2em; font-weight: bold; color: #7c3aed; margin: 8px 0;">${scores.attitude.total.toFixed(1)}</div>
                    <div style="font-size: 0.8em; color: #666;">${attitudeLevel.level}</div>
                </div>
            </div>
            
            <!-- 雷达图区域 -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 25px;">
                <div style="background: white; padding: 15px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                     <h4 style="margin: 0 0 15px 0; color: #333; font-size: 1em; text-align: center;">风险承受能力分析</h4>
                     <div style="width: 250px; height: 250px; margin: 0 auto; position: relative; overflow: hidden;">
                         <canvas id="abilityRadarChart"></canvas>
                     </div>
                 </div>
                 <div style="background: white; padding: 15px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                     <h4 style="margin: 0 0 15px 0; color: #333; font-size: 1em; text-align: center;">风险承受态度分析</h4>
                     <div style="width: 250px; height: 250px; margin: 0 auto; position: relative; overflow: hidden;">
                         <canvas id="attitudeRadarChart"></canvas>
                     </div>
                 </div>
            </div>
            

            <!-- 风险承受能力与态度并排卡片 -->
            <div class="risk-assessment-row" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 16px;">
                <!-- 风险承受能力卡片 -->
                <div class="eval-card ability-card" style="background: #f8fafc; padding: 16px; border-radius: 8px; border-left: 4px solid #3b82f6; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                    <div class="card-header" style="margin-bottom: 12px;">
                        <h4 style="color: #1e40af; margin: 0 0 8px 0; font-size: 1em;">💪 风险承受能力</h4>
                        <div class="score-badge" style="background: #3b82f6; color: white; padding: 2px 8px; border-radius: 12px; font-size: 0.8em; display: inline-block;">${Math.round(scores.ability.total)}分</div>
                    </div>
                    <div class="card-content">
                        <div class="level-display" style="margin-bottom: 8px;">
                            <span class="level-tag" style="background: #dbeafe; color: #1e40af; padding: 4px 8px; border-radius: 6px; font-size: 0.8em; font-weight: bold;">${abilityEval.level}</span>
                        </div>
                        <p style="margin: 0 0 8px 0; color: #374151; font-size: 0.85em; line-height: 1.4;">${abilityEval.description}</p>
                        <div style="background: #e0f2fe; padding: 8px; border-radius: 6px; font-size: 0.8em; color: #0f172a; border-left: 3px solid #0ea5e9;">
                            ${abilityEval.example}
                        </div>
                    </div>
                </div>

                <!-- 风险承受态度卡片 -->
                <div class="eval-card attitude-card" style="background: #f8fafc; padding: 16px; border-radius: 8px; border-left: 4px solid #8b5cf6; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                    <div class="card-header" style="margin-bottom: 12px;">
                        <h4 style="color: #7c3aed; margin: 0 0 8px 0; font-size: 1em;">🧠 风险承受态度</h4>
                        <div class="score-badge" style="background: #8b5cf6; color: white; padding: 2px 8px; border-radius: 12px; font-size: 0.8em; display: inline-block;">${Math.round(scores.attitude.total)}分</div>
                    </div>
                    <div class="card-content">
                        <div class="level-display" style="margin-bottom: 8px;">
                            <span class="level-tag" style="background: #f3e8ff; color: #7c3aed; padding: 4px 8px; border-radius: 6px; font-size: 0.8em; font-weight: bold;">${attitudeEval.level}</span>
                        </div>
                        <p style="margin: 0 0 8px 0; color: #374151; font-size: 0.85em; line-height: 1.4;">${attitudeEval.description}</p>
                        <div style="background: #f3e8ff; padding: 8px; border-radius: 6px; font-size: 0.8em; color: #0f172a; border-left: 3px solid #a855f7;">
                            ${attitudeEval.example}
                        </div>
                    </div>
                </div> 
            </div>
                
            <!-- 综合评定卡片 -->
            <div class="eval-card comprehensive-eval" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 12px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);">
                <div class="card-header" style="text-align: center; margin-bottom: 16px;">
                    <h3 style="margin: 0; font-size: 1.4em;">🎯 ${level.desc}（参考建议）</h3>
                </div>
                
                <!-- 资产配置图表直接嵌入 -->
                <div class="pie-chart-container" style="width: 100%; margin: 20px 0; position: relative; display: flex; align-items: center; justify-content: center; overflow: visible;">
                    <!-- 图表将通过JavaScript动态创建 -->
                </div>
                
                <div class="strategy-grid" style="display: grid; gap: 15px; margin-top: 20px;">
                    <div class="strategy-item" style="background: rgba(255,255,255,0.1); padding: 16px; border-radius: 10px; min-height: 80px;">
                        <h5 style="margin: 0 0 8px 0; font-size: 1em; opacity: 0.95; font-weight: 600;">💰 资产配置建议</h5>
                        <p style="margin: 0; font-size: 0.9em; line-height: 1.5; word-wrap: break-word;">${totalEval.allocation}</p>
                    </div>
                    
                    <div class="strategy-item" style="background: rgba(255,255,255,0.1); padding: 16px; border-radius: 10px; min-height: 80px;">
                        <h5 style="margin: 0 0 8px 0; font-size: 1em; opacity: 0.95; font-weight: 600;">🎯 适合产品</h5>
                        <p style="margin: 0; font-size: 0.9em; line-height: 1.5; word-wrap: break-word;">${totalEval.products}</p>
                    </div>
                    
                    <div class="strategy-item" style="background: rgba(255,255,255,0.1); padding: 16px; border-radius: 10px; min-height: 80px;">
                        <h5 style="margin: 0 0 8px 0; font-size: 1em; opacity: 0.95; font-weight: 600;">📈 投资策略</h5>
                        <p style="margin: 0; font-size: 0.9em; line-height: 1.5; word-wrap: break-word;">${totalEval.strategy}</p>
                    </div>
                    
                    <div class="strategy-item" style="background: rgba(255,255,255,0.1); padding: 16px; border-radius: 10px; min-height: 80px;">
                        <h5 style="margin: 0 0 8px 0; font-size: 1em; opacity: 0.95; font-weight: 600;">⚠️ 风险收益预期</h5>
                        <p style="margin: 0; font-size: 0.9em; line-height: 1.5; word-wrap: break-word;">${totalEval.risk}</p>
                    </div>
                    
                    <div class="strategy-item" style="background: rgba(255,255,255,0.1); padding: 16px; border-radius: 10px; min-height: 80px;">
                        <h5 style="margin: 0 0 8px 0; font-size: 1em; opacity: 0.95; font-weight: 600;">💡 投资案例</h5>
                        <p style="margin: 0; font-size: 0.9em; line-height: 1.5; word-wrap: break-word;">${totalEval.example}</p>
                    </div>
                    
                    <div class="strategy-item" style="background: rgba(255,255,255,0.1); padding: 16px; border-radius: 10px; min-height: 80px;">
                        <h5 style="margin: 0 0 8px 0; font-size: 1em; opacity: 0.95; font-weight: 600;">🎯 个性化建议</h5>
                        <p style="margin: 0; font-size: 0.9em; line-height: 1.5; word-wrap: break-word;">${totalEval.personalizedAdvice}</p>
                    </div>
                    
                    <div class="strategy-item" style="background: rgba(255,255,255,0.1); padding: 16px; border-radius: 10px; min-height: 80px;">
                        <h5 style="margin: 0 0 8px 0; font-size: 1em; opacity: 0.95; font-weight: 600;">⚠️ 风险提醒</h5>
                        <p style="margin: 0; font-size: 0.9em; line-height: 1.5; word-wrap: break-word;">${totalEval.riskWarning}</p>
                    </div>
                    
                    <div class="strategy-item" style="background: rgba(255,255,255,0.1); padding: 16px; border-radius: 10px; min-height: 80px;">
                        <h5 style="margin: 0 0 8px 0; font-size: 1em; opacity: 0.95; font-weight: 600;">🔄 再平衡策略</h5>
                        <p style="margin: 0; font-size: 0.9em; line-height: 1.5; word-wrap: break-word;">${totalEval.rebalanceStrategy}</p>
                    </div>
                </div>
            </div> 
        </div>
    `;
}

// 获取能力评价 (基于100分制)
function getAbilityEvaluation(score) {
    if (score >= 80) {
        return {
            level: "很强",
            description: "您具备很强的风险承受能力，拥有充足的资金实力、丰富的投资经验和稳定的收入来源，能够承担较高的投资风险。",
            example: "💼 案例：张先生，35岁IT高管，年收入80万，可投资资产占总资产60%，有10年投资经验，参与过股票、基金、期货等多种投资，储蓄率40%，应急资金可维持2年生活。"
        };
    }
    if (score >= 60) {
        return {
            level: "较强",
            description: "您具备较强的风险承受能力，有一定的资金基础和投资经验，能够承担中等偏高的投资风险。",
            example: "👩‍💼 案例：李女士，30岁银行职员，年收入35万，可投资资产占总资产45%，有5年投资经验，主要投资股票和基金，储蓄率25%，应急资金可维持8个月生活。"
        };
    }
    if (score >= 40) {
        return {
            level: "中等",
            description: "您具备中等的风险承受能力，资金状况和投资经验处于平均水平，适合承担中等程度的投资风险。",
            example: "👨‍💻 案例：王先生，28岁公司职员，年收入20万，可投资资产占总资产30%，有2年投资经验，主要购买银行理财和货币基金，储蓄率15%。"
        };
    }
    if (score >= 20) {
        return {
            level: "较弱",
            description: "您的风险承受能力较为有限，建议选择相对稳健的投资方式，控制投资风险。",
            example: "👩‍💼 案例：赵女士，26岁销售员，年收入12万，可投资资产占总资产20%，投资经验不足1年，只买过余额宝，储蓄率10%。"
        };
    }
    return {
        level: "很弱",
        description: "您的风险承受能力较弱，建议优先考虑资本保值，选择低风险的投资产品。",
        example: "👨‍🔧 案例：陈先生，24岁临时工，年收入8万，可投资资产占总资产不足10%，无投资经验，无储蓄习惯，需要先解决基本财务问题。"
    };
}

// 获取态度评价 (基于100分制)
function getAttitudeEvaluation(score) {
    if (score >= 80) {
        return {
            level: "极度激进",
            description: "您对投资风险持非常激进态度，愿意为了获得更高收益而承担相应风险，具备良好的风险管理心态。",
            example: "🚀 案例：投资老手刘总，在2020年疫情市场大跌时，不仅没有恐慌抛售，反而加大了对优质股票的投资，最终在市场反弹中获得了丰厚回报。"
        };
    }
    if (score >= 60) {
        return {
            level: "积极进取",
            description: "您对投资风险持较为积极的态度，能够接受一定程度的市场波动，追求稳健增长。",
            example: "📈 案例：白领张经理，在市场调整期间会适当增加定投金额，她的投资组合股债比例为6:4，相信时间的复利效应。"
        };
    }
    if (score >= 40) {
        return {
            level: "理性平衡",
            description: "您对投资风险持平衡态度，既希望获得合理收益，也注重控制风险，追求稳健投资。",
            example: "⚖️ 案例：教师李老师，采用股债5:5的投资策略，市场好时不过度兴奋，市场差时也不过度恐慌，追求长期稳健回报。"
        };
    }
    if (score >= 20) {
        return {
            level: "谨慎稳健",
            description: "您对投资风险较为谨慎态度，更注重资金安全，偏好稳定收益的投资方式。",
            example: "🛡️ 案例：退休前的老王，主要投资银行理财和债券基金，股票投资占比不超过20%，更看重本金安全。"
        };
    }
    return {
        level: "极度保守",
        description: "您对投资风险非常谨慎态度，强调资金安全，建议选择保本型投资产品。",
        example: "🏦 案例：保守投资者林女士，只选择银行定期存款，认为'投资有风险'，宁可接受低收益也不愿承担任何本金损失的可能。"
    };
}

// 获取总体评价 
function getTotalEvaluation(score) {
    if (score >= 80) {
        return {
            level: "C5 - 激进型投资者",
            allocation: "中高波动资产90%，低波动资产10%，流动性资产0%",
            products: "成长股票、科技ETF、新兴市场基金、股指期货、可转债、REITs等高风险高收益产品等",
            strategy: "采用激进的投资策略，把握市场机会进行波段操作，适合参与新股申购、期权交易等创新投资工具",
            risk: "预期年化收益12%以上，需承受30-50%的最大回撤风险，适合长期持有4-5年以上",
            example: "投资案例：张先生投资3000万元，配置80%成长型股票基金、10%高收益债券、10%黄金基金。牛市期间获得25%收益，熊市期间最大回撤45%，5年平均年化收益15%。",
            personalizedAdvice: "您具备优秀的风险承受能力和投资心理素质，建议关注科技创新、新能源、生物医药等高成长行业，同时可适度运用杠杆工具放大收益。",
            riskWarning: "请注意市场波动可能带来的短期大幅亏损，建议保持3-6个月生活费作为应急资金，避免在市场恐慌时被迫卖出。",
            rebalanceStrategy: "建议每季度检视一次投资组合，当股票仓位偏离目标配置超过10%时进行再平衡，牛市末期适当减仓，熊市底部适当加仓。"
        };
    }
    if (score >= 60) {
        return {
            level: "C4 - 进取型投资者",
            allocation: "中高波动资产70%，低波动资产25%，流动性资产5%",
            products: "优质蓝筹股票、混合型基金、行业ETF、投资级债券、银行理财等中高风险产品等",
            strategy: "采用进取的投资策略，以长期价值投资为主，适度进行战术性资产配置调整",
            risk: "预期年化收益9-12%，需承受15-30%的最大回撤风险，建议投资期限3-4年",
            example: "投资案例：李女士投资1000万元，配置55%优质混合基金、25%债券基金、5%货币基金、15%黄金ETF。市场向好时收益18%，市场调整时回撤25%，3年平均年化收益10%。",
            personalizedAdvice: "您适合采用核心-卫星投资策略，以宽基指数基金作为核心持仓，配置少量主题基金作为卫星投资，增强收益弹性。",
            riskWarning: "市场波动时请保持理性，避免追涨杀跌，建议采用定投方式平滑市场波动，降低择时风险。",
            rebalanceStrategy: "建议每半年进行一次资产配置检视，根据市场估值水平和经济周期适当调整股债比例，保持投资纪律。"
        };
    }
    if (score >= 40) {
        return {
            level: "C3 - 平衡型投资者",
            allocation: "中高波动资产50%，低波动资产40%，流动性资产10%",
            products: "平衡型基金、债券基金、银行净值型理财、国债ETF等中等风险产品等",
            strategy: "采用均衡的投资策略，注重风险控制与收益平衡，定期进行资产再平衡",
            risk: "预期年化收益6-9%，需承受10-15%的最大回撤风险，适合2-3年投资期限",
            example: "投资案例：王先生投资500万元，配置40%股票基金、45%债券基金、5%货币基金、10%黄金基金。收益相对稳定，年化收益约8%，最大回撤控制在15%以内。",
            personalizedAdvice: "您适合选择目标日期基金或平衡型基金，由专业基金经理进行资产配置，省心省力且风险收益匹配度较高。",
            riskWarning: "虽然您的风险承受能力适中，但仍需关注通胀风险，建议适当配置抗通胀资产如REITs或商品基金。",
            rebalanceStrategy: "建议每年进行一次资产配置调整，当股票或债券仓位偏离目标超过5%时进行再平衡，保持投资组合的风险收益特征。"
        };
    }
    if (score >= 20) {
        return {
            level: "C2 - 稳健型投资者",
            allocation: "中高波动资产30%，低波动资产55%，流动性资产15%",
            products: "债券基金、银行理财、国债、高等级信用债等低风险产品、固收+类产品等",
            strategy: "采用稳健的投资策略，以资本保值增值为主要目标，严格控制下行风险",
            risk: "预期年化收益4-6%，需承受5-10%的最大回撤风险，适合1-2年投资期限",
            example: "投资案例：陈女士投资300万元，配置20%红利指数基金、60%债券基金、10%货币基金、10%黄金基金。追求稳定收益，年化收益约5%，最大回撤控制在6%以内。",
            personalizedAdvice: "您适合选择低波动的红利股票基金和高等级债券基金，建议关注银行、公用事业等防御性行业投资机会。",
            riskWarning: "请注意利率风险对债券投资的影响，建议选择久期较短的债券基金，或采用债券梯形投资策略。",
            rebalanceStrategy: "建议每年检视一次投资组合，重点关注债券基金的信用风险和利率风险，必要时调整债券久期和信用等级配置。"
        };
    }
    return {
        level: "C1 - 保守型投资者",
        allocation: "中高波动资产10%，低波动资产70%，流动性资产20%",
        products: "货币基金、国债、银行存款、保本理财等保本型产品，固收+类产品等",
        strategy: "采用保守的投资策略，以资本保全为首要目标，力求不接受本金损失风险",
        risk: "预期年化收益2-4%，需承受3%以内的最大回撤风险，适合1年或以上投资期限",
        example: "投资案例：刘先生投资100万元，配置5%红利指数基金、70%短期债券基金、20%货币基金、5%黄金基金。追求绝对安全，年化收益约3%，极少出现本金损失。",
        personalizedAdvice: "您适合选择短期债券基金、AAA级短期债券基金和知名货币基金，建议关注大型银行和保险公司发行的稳健型理财产品。",
        riskWarning: "虽然您追求资金安全，但也需要关注通胀侵蚀购买力的风险，建议适当配置抗通胀的低波动的红利股票基金和商品基金。",
        rebalanceStrategy: "建议每半年检视一次资金配置，根据利率环境变化调整存款和债券基金的比例，确保资金安全的同时获得合理收益。"
    };
}

// 获取投资建议
function getInvestmentAdvice(score) {
    if (score >= 80) {
        return `
            <ul style="margin: 10px 0; padding-left: 20px; line-height: 1.6;">
                <li><strong>核心配置：</strong>80-90%高成长股票基金，重点关注科技、新能源、生物医药等前沿行业</li>
                <li><strong>卫星配置：</strong>5-10%另类投资（REITs、商品基金），5-10%债券基金作为安全垫</li>
                <li><strong>投资策略：</strong>采用核心-卫星策略，长期持有3-5年以上，充分享受复利效应</li>
                <li><strong>风险管理：</strong>可适度运用期权等衍生工具对冲风险，但杠杆比例不超过1.5倍</li>
                <li><strong>再平衡：</strong>每季度检视一次，当偏离目标配置超过10%时进行调整</li>
                <li><strong>机会把握：</strong>市场恐慌时逆向加仓，牛市后期适当减仓保护收益</li>
            </ul>
        `;
    } else if (score >= 60) {
        return `
            <ul style="margin: 10px 0; padding-left: 20px; line-height: 1.6;">
                <li><strong>均衡配置：</strong>60-70%股票类资产（蓝筹股基金、行业ETF），30-40%债券类资产</li>
                <li><strong>分散策略：</strong>通过宽基指数基金+行业主题基金实现有效分散，降低单一风险</li>
                <li><strong>投资周期：</strong>中长期投资3-5年，通过时间平滑市场波动</li>
                <li><strong>定投计划：</strong>建立定期定额投资，在市场低位时可适当增加投资金额</li>
                <li><strong>动态调整：</strong>根据市场估值水平和经济周期，适时调整股债比例</li>
                <li><strong>全球视野：</strong>可配置10-20%海外资产，参与全球市场机会</li>
            </ul>
        `;
    } else if (score >= 40) {
        return `
            <ul style="margin: 10px 0; padding-left: 20px; line-height: 1.6;">
                <li><strong>平衡配置：</strong>40-50%股票类资产，50-60%债券类资产，追求稳健增长</li>
                <li><strong>产品选择：</strong>优选混合型基金、平衡型基金，由专业基金经理进行资产配置</li>
                <li><strong>投资期限：</strong>中期投资2-3年，避免频繁交易增加成本</li>
                <li><strong>风险控制：</strong>重点关注基金的最大回撤和夏普比率，选择风险调整后收益较高的产品</li>
                <li><strong>定投策略：</strong>采用定期定额投资方式，平滑市场波动对投资的影响</li>
                <li><strong>流动性管理：</strong>保持20-30%资金投资于流动性较好的货币基金或短期理财</li>
            </ul>
        `;
    } else if (score >= 20) {
        return `
            <ul style="margin: 10px 0; padding-left: 20px; line-height: 1.6;">
                <li><strong>稳健为主：</strong>20-30%优质混合基金，70-80%债券基金和银行理财产品</li>
                <li><strong>安全第一：</strong>优选国有银行、大型券商等知名机构发行的理财产品</li>
                <li><strong>收益目标：</strong>年化收益率目标5-8%，重点关注本金安全和收益稳定性</li>
                <li><strong>期限匹配：</strong>根据资金使用计划选择合适期限的产品，避免提前赎回损失</li>
                <li><strong>分散投资：</strong>不要将资金集中在单一产品，适当分散降低机构风险</li>
                <li><strong>流动性储备：</strong>保持30-40%资金投资于货币基金，确保资金流动性</li>
            </ul>
        `;
    } else {
        return `
            <ul style="margin: 10px 0; padding-left: 20px; line-height: 1.6;">
                <li><strong>安全至上：</strong>90%以上资金配置于银行存款、国债、大额存单等保本产品</li>
                <li><strong>机构选择：</strong>优先选择国有大行和政策性银行，确保资金绝对安全</li>
                <li><strong>期限规划：</strong>根据资金使用需求合理安排存款期限，兼顾收益和流动性</li>
                <li><strong>通胀对冲：</strong>可少量配置（5-10%）货币基金或短期理财，抵御通胀侵蚀</li>
                <li><strong>应急准备：</strong>保持3-6个月生活费的活期存款，应对突发资金需求</li>
                <li><strong>定期评估：</strong>每年评估一次资金配置，根据利率变化调整存款结构</li>
            </ul>
        `;
    }
}

// 创建移动端雷达图
function createMobileRadarChart(scores) {
    const canvas = document.getElementById('radar-chart');
    const ctx = canvas.getContext('2d');
    
    // 设置canvas尺寸适应移动端
    const size = Math.min(canvas.parentElement.clientWidth - 48, 280);
    canvas.width = size;
    canvas.height = size;
    canvas.style.width = size + 'px';
    canvas.style.height = size + 'px';
    
    // 准备数据 - 安全获取子特征数据
    const getSubFeatureValue = (type, feature) => {
        return scores[type].subFeatures[feature] ? scores[type].subFeatures[feature].percentage || 0 : 0;
    };
    
    const labels = ['资产状况', '投资经验', '风险偏好', '投资态度', '情绪控制', '时间观念'];
    const data = [
        (getSubFeatureValue('ability', '资产规模') + getSubFeatureValue('ability', '收入来源')) / 2,
        (getSubFeatureValue('ability', '投资经验') + getSubFeatureValue('ability', '投资经历')) / 2,
        (getSubFeatureValue('attitude', '风险偏好') + getSubFeatureValue('attitude', '投资组合')) / 2,
        (getSubFeatureValue('attitude', '市场反应') + getSubFeatureValue('attitude', '投资理念')) / 2,
        (getSubFeatureValue('attitude', '情绪反应') + getSubFeatureValue('attitude', '预期管理')) / 2,
        (getSubFeatureValue('attitude', '时间观念') + getSubFeatureValue('attitude', '流动性偏好')) / 2
    ];
    
    // 创建Chart.js雷达图
    if (window.radarChart) {
        window.radarChart.destroy();
    }
    
    window.radarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [{
                label: '风险评估',
                data: data,
                backgroundColor: 'rgba(99, 102, 241, 0.1)',
                borderColor: 'rgba(99, 102, 241, 0.8)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(99, 102, 241, 1)',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(99, 102, 241, 1)',
                pointHoverRadius: 6
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    min: 0,
                    ticks: {
                        stepSize: 20,
                        display: true,
                        backdropColor: 'transparent',
                        color: '#6b7280',
                        font: {
                            size: 10
                        }
                    },
                    grid: {
                        color: 'rgba(156, 163, 175, 0.3)',
                        lineWidth: 1
                    },
                    angleLines: {
                        color: 'rgba(156, 163, 175, 0.3)',
                        lineWidth: 1
                    },
                    pointLabels: {
                        font: {
                            size: 11,
                            weight: '500'
                        },
                        color: '#374151',
                        padding: 8
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(17, 24, 39, 0.9)',
                    titleColor: '#f9fafb',
                    bodyColor: '#f9fafb',
                    borderColor: 'rgba(99, 102, 241, 0.5)',
                    borderWidth: 1,
                    cornerRadius: 8,
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + Math.round(context.parsed.r) + '分';
                        }
                    }
                }
            },
            animation: {
                duration: 1000,
                easing: 'easeInOutQuart'
            }
        }
    });
}

// 下载Excel报告 (移动端完整版)
function downloadExcel() {
    try {
        // 创建工作簿
        const wb = XLSX.utils.book_new();
        
        // 准备答案数据
        const answerData = [];
        
        // 添加表头
        answerData.push([
            '题目编号', '题目内容', '选择答案', '得分', '子特征',
            '风险承受能力总分', '风险承受态度总分', '综合评价总分',
            '风险承受能力等级', '风险承受态度等级', '综合评价等级'
        ]);
        
        // 计算当前分数
        const currentScores = calculateScores();
        const abilityLevel = getAbilityEvaluation(currentScores.ability.total).level;
        const attitudeLevel = getAttitudeEvaluation(currentScores.attitude.total).level;
        const totalLevel = getTotalEvaluation(currentScores.total).level;
        
        // 添加答案数据
        allQuestions.forEach((question, index) => {
            const userAnswer = answers[question.id];
            if (userAnswer !== undefined) {
                const selectedOption = question.options[userAnswer];
                const score = selectedOption.score;
                const subFeature = questionToSubFeature[question.id] || '';
                
                // 将选项索引转换为英文字母（A、B、C、D、E）
                const optionLetter = String.fromCharCode(65 + userAnswer); // 65是'A'的ASCII码
                
                answerData.push([
                    question.id,
                    question.title,
                    `${optionLetter}. ${selectedOption.text}`, // 显示字母和选项文本
                    score,
                    subFeature,
                    currentScores.ability.total.toFixed(2),
                    currentScores.attitude.total.toFixed(2),
                    currentScores.total.toFixed(2),
                    abilityLevel,
                    attitudeLevel,
                    totalLevel
                ]);
            }
        });
        
        // 创建工作表
        const ws = XLSX.utils.aoa_to_sheet(answerData);
        
        // 设置列宽
        ws['!cols'] = [
            { wch: 8 },   // 题目编号
            { wch: 50 },  // 题目内容
            { wch: 30 },  // 选择答案
            { wch: 8 },   // 得分
            { wch: 15 },  // 子特征
            { wch: 15 },  // 风险承受能力总分
            { wch: 15 },  // 风险承受态度总分
            { wch: 12 },  // 综合评价总分
            { wch: 15 },  // 风险承受能力等级
            { wch: 15 },  // 风险承受态度等级
            { wch: 12 }   // 综合评价等级
        ];
        
        // 添加工作表到工作簿
        XLSX.utils.book_append_sheet(wb, ws, '风险评价答案');
        
        // 生成文件名
        const now = new Date();
        const timestamp = now.getFullYear() + 
                         String(now.getMonth() + 1).padStart(2, '0') + 
                         String(now.getDate()).padStart(2, '0') + '_' +
                         String(now.getHours()).padStart(2, '0') + 
                         String(now.getMinutes()).padStart(2, '0');
        const filename = `风险评价报告_${timestamp}.xlsx`;
        
        // 下载文件
        XLSX.writeFile(wb, filename);
        
        // 显示成功提示
         showToast('报告下载成功！', 'success');
        
    } catch (error) {
        console.error('下载Excel报告时出错:', error);
        // 移动端降级处理
        if (navigator.share) {
            navigator.share({
                title: '风险评估报告',
                text: '我的投资风险评估结果',
                url: window.location.href
            }).catch(console.error);
        } else {
            showToast('下载功能暂不支持，请截图保存结果', 'warning');
        }
    }
}

// 重新开始
function restart() {
    currentQuestion = 0;
    answers = {};
    
    // 显示问题区域和导航
    document.getElementById('question-section').classList.remove('hidden');
    document.getElementById('navigation').classList.remove('hidden');
    
    // 隐藏结果区域
    document.getElementById('results-section').classList.add('hidden');
    
    // 重新显示第一题
    showQuestion(0);
}

// 显示提示信息
function showToast(message, type = 'info') {
    // 创建toast元素
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 12px 20px;
        border-radius: 8px;
        color: white;
        font-size: 14px;
        z-index: 10000;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    // 根据类型设置背景色
    switch(type) {
        case 'success':
            toast.style.backgroundColor = '#10b981';
            break;
        case 'warning':
            toast.style.backgroundColor = '#f59e0b';
            break;
        case 'error':
            toast.style.backgroundColor = '#ef4444';
            break;
        default:
            toast.style.backgroundColor = '#3b82f6';
    }
    
    toast.textContent = message;
    document.body.appendChild(toast);
    
    // 显示动画
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(0)';
    }, 100);
    
    // 自动隐藏
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

// 页面加载完成后初始化
// 创建雷达图 - 通用函数
function createRadarChart(canvasId, subFeatures, title) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    
    const labels = Object.keys(subFeatures);
    const data = labels.map(label => subFeatures[label].percentage || 0);
    
    // 销毁之前的图表
    if (window[canvasId + 'Chart']) {
        window[canvasId + 'Chart'].destroy();
    }
    
    window[canvasId + 'Chart'] = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [{
                label: title,
                data: data,
                backgroundColor: 'rgba(102, 126, 234, 0.2)',
                borderColor: 'rgba(102, 126, 234, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(102, 126, 234, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(102, 126, 234, 1)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        stepSize: 20
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

// 创建推荐资产配置饼图
function createAssetAllocationChart(score) {
    console.log('Creating asset allocation chart with score:', score);
    
    // 根据风险评分确定资产配置（基于推荐配置.xlsx数据）
    let assetData;
    let riskType;
    if (score >= 80) {
        // 激进型：流动性资产0%，低波动资产10%，中高波动资产90%
        riskType = '激进型';
        assetData = {
            labels: ['中高波动资产（股票/商品基金）', '低波动资产（债券基金）'],
            data: [90, 10],
            colors: ['#ef4444', '#3b82f6']
        };
    } else if (score >= 60) {
        // 进取型：流动性资产5%，低波动资产25%，中高波动资产70%
        riskType = '进取型';
        assetData = {
            labels: ['中高波动资产（股票/商品基金）', '低波动资产（债券基金）', '流动性资产（货币基金）'],
            data: [70, 25, 5],
            colors: ['#ef4444', '#3b82f6', '#10b981']
        };
    } else if (score >= 40) {
        // 平衡型：流动性资产10%，低波动资产40%，中高波动资产50%
        riskType = '平衡型';
        assetData = {
            labels: ['中高波动资产（股票/商品基金）', '低波动资产（债券基金）', '流动性资产（货币基金'],
            data: [50, 40, 10],
            colors: ['#ef4444', '#3b82f6', '#10b981']
        };
    } else if (score >= 20) {
        // 稳健型：流动性资产15%，低波动资产55%，中高波动资产30%
        riskType = '稳健型';
        assetData = {
            labels: ['低波动资产（债券基金）', '中高波动资产（股票/商品基金）', '流动性资产（货币基金'],
            data: [55, 30, 15],
            colors: ['#3b82f6', '#ef4444', '#10b981']
        };
    } else {
        // 保守型：流动性资产20%，低波动资产70%，中高波动资产10%
        riskType = '保守型';
        assetData = {
            labels: ['低波动资产（债券基金）', '流动性资产（货币基金', '中高波动资产（股票/商品基金）'],
            data: [70, 20, 10],
            colors: ['#3b82f6', '#10b981', '#ef4444']
        };
    }
    
    // 获取容器并清空
    const chartContainer = document.querySelector('.pie-chart-container');
    if (!chartContainer) {
        console.error('Chart container not found: .pie-chart-container');
        return;
    }
    
    // 移除现有的图表内容
    const existingChart = chartContainer.querySelector('.custom-asset-chart');
    if (existingChart) {
        existingChart.remove();
    }
    
    // 创建新的HTML/CSS图表
    const chartDiv = document.createElement('div');
    chartDiv.className = 'custom-asset-chart';
    chartDiv.style.cssText = `
        width: 100%;
        max-width: 350px;
        margin: 0 auto;
        padding: 15px;
        background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        border-radius: 12px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.08);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        height: fit-content;
    `;
    
    // 创建标题
    const titleDiv = document.createElement('div');
    titleDiv.style.cssText = `
        text-align: center;
        margin-bottom: 15px;
        font-size: 16px;
        font-weight: 600;
        color: #1e293b;
        border-bottom: 2px solid #3b82f6;
        padding-bottom: 8px;
    `;
    titleDiv.innerHTML = `<i class="fas fa-chart-pie" style="margin-right: 8px; color: #3b82f6;"></i>${riskType}投资组合`;
    chartDiv.appendChild(titleDiv);
    
    // 创建环形进度条
    const circleContainer = document.createElement('div');
    circleContainer.style.cssText = `
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
        position: relative;
    `;
    
    const circleChart = document.createElement('div');
    circleChart.style.cssText = `
        width: 160px;
        height: 160px;
        border-radius: 50%;
        position: relative;
        background: conic-gradient(
            ${assetData.colors.map((color, index) => {
                const startAngle = assetData.data.slice(0, index).reduce((sum, val) => sum + val, 0) * 3.6;
                const endAngle = startAngle + assetData.data[index] * 3.6;
                return `${color} ${startAngle}deg ${endAngle}deg`;
            }).join(', ')}
        );
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        transition: transform 0.3s ease;
    `;
    
    // 添加中心圆
    const centerCircle = document.createElement('div');
    centerCircle.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100px;
        height: 100px;
        background: white;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 10px rgba(0,0,0,0.08);
        font-weight: 600;
        color: #1e293b;
    `;
    centerCircle.innerHTML = `
        <div style="font-size: 14px; color: #3b82f6; font-weight: bold; text-align: center; line-height: 1.2;">${riskType}</div>
        <div style="font-size: 10px; margin-top: 3px; color: #64748b;">配置比例</div>
    `;
    
    circleChart.appendChild(centerCircle);
    circleContainer.appendChild(circleChart);
    chartDiv.appendChild(circleContainer);
    
    // 创建条形图
    const barsContainer = document.createElement('div');
    barsContainer.style.cssText = `
        margin-top: 15px;
    `;
    
    assetData.labels.forEach((label, index) => {
        const barItem = document.createElement('div');
        barItem.style.cssText = `
            margin-bottom: 10px;
            padding: 8px;
            background: white;
            border-radius: 6px;
            box-shadow: 0 1px 4px rgba(0,0,0,0.05);
            cursor: pointer;
            transition: all 0.2s ease;
        `;
        
        barItem.addEventListener('mouseenter', () => {
            barItem.style.transform = 'scale(1.02)';
        });
        
        barItem.addEventListener('mouseleave', () => {
            barItem.style.transform = 'scale(1)';
        });
        
        barItem.addEventListener('click', () => {
            showAssetDetail(label, assetData.data[index], riskType, index);
        });
        
        const labelDiv = document.createElement('div');
        labelDiv.style.cssText = `
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 6px;
            font-size: 13px;
            font-weight: 500;
            color: #374151;
        `;
        
        const colorDot = document.createElement('span');
        colorDot.style.cssText = `
            display: inline-block;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background-color: ${assetData.colors[index]};
            margin-right: 8px;
        `;
        
        labelDiv.innerHTML = `
            <span><span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: ${assetData.colors[index]}; margin-right: 8px;"></span>${label}</span>
            <span style="font-weight: 600; color: ${assetData.colors[index]};">${assetData.data[index]}%</span>
        `;
        
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            width: 100%;
            height: 8px;
            background-color: #e5e7eb;
            border-radius: 4px;
            overflow: hidden;
            box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
        `;
        
        const progressFill = document.createElement('div');
        progressFill.style.cssText = `
            height: 100%;
            background: linear-gradient(90deg, ${assetData.colors[index]}, ${assetData.colors[index]}dd);
            border-radius: 4px;
            transition: width 1s ease-out;
            width: 0%;
        `;
        
        progressBar.appendChild(progressFill);
        barItem.appendChild(labelDiv);
        barItem.appendChild(progressBar);
        barsContainer.appendChild(barItem);
        
        // 动画效果
        setTimeout(() => {
            progressFill.style.width = `${assetData.data[index]}%`;
        }, 300 + index * 200);
    });
    
    chartDiv.appendChild(barsContainer);
    
    // 创建详细信息显示区域
    let detailDiv = document.getElementById('assetDetailInfo');
    if (!detailDiv) {
        detailDiv = document.createElement('div');
        detailDiv.id = 'assetDetailInfo';
        detailDiv.style.cssText = `
            margin-top: 12px;
            padding: 12px;
            background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
            border-radius: 8px;
            border-left: 3px solid #3b82f6;
            font-size: 13px;
            color: #1e293b;
            box-shadow: 0 1px 4px rgba(0,0,0,0.08);
            transition: all 0.3s ease;
            display: none;
        `;
        chartDiv.appendChild(detailDiv);
    }
    
    // 添加提示信息
    const tipDiv = document.createElement('div');
    tipDiv.style.cssText = `
        text-align: center;
        color: #64748b;
        font-size: 12px;
        margin-top: 12px;
        padding: 8px;
        background: rgba(59, 130, 246, 0.08);
        border-radius: 6px;
        border: 1px solid rgba(59, 130, 246, 0.15);
    `;
    tipDiv.innerHTML = `
        <i class="fas fa-hand-pointer" style="margin-right: 8px;"></i>
        点击条形图查看详细的资产配置信息
    `;
    chartDiv.appendChild(tipDiv);
    
    // 将图表添加到容器
    chartContainer.appendChild(chartDiv);
    
    console.log('Custom asset allocation chart created successfully');
}

// 显示资产详细信息的函数
function showAssetDetail(assetName, percentage, riskType, index) {
    const detailDiv = document.getElementById('assetDetailInfo');
    if (!detailDiv) return;
    
    // 根据资产类型提供详细说明
    let assetDescription, riskLevel, expectedReturn, suitableProducts;
    
    if (assetName.includes('中高波动资产')) {
        assetDescription = '主要投资于股票型基金、混合型基金、商品基金等，具有较高的收益潜力但波动性也较大';
        riskLevel = '中高风险';
        expectedReturn = '年化收益预期：8%-15%';
        suitableProducts = '股票型基金、偏股混合基金、指数基金、商品ETF等';
    } else if (assetName.includes('低波动资产')) {
        assetDescription = '主要投资于债券型基金、银行理财产品等，收益相对稳定，波动性较小';
        riskLevel = '低风险';
        expectedReturn = '年化收益预期：3%-6%';
        suitableProducts = '债券型基金、银行理财、国债、企业债等';
    } else if (assetName.includes('货币基金')) {
        assetDescription = '主要投资于货币市场工具，流动性强，风险极低，适合作为现金管理工具';
        riskLevel = '极低风险';
        expectedReturn = '年化收益预期：2%-4%';
        suitableProducts = '货币市场基金、银行活期存款、短期理财等';
    }
    
    detailDiv.innerHTML = `
        <div style="border-bottom: 2px solid #e2e8f0; padding-bottom: 12px; margin-bottom: 12px;">
            <h4 style="margin: 0; color: #1e40af; font-size: 16px; font-weight: bold;">
                <i class="fas fa-chart-pie" style="margin-right: 8px;"></i>
                ${assetName}
            </h4>
            <div style="margin-top: 8px; font-size: 18px; font-weight: bold; color: #059669;">
                配置比例：${percentage}%
            </div>
        </div>
        
        <div style="display: grid; gap: 10px;">
            <div style="display: flex; align-items: center;">
                <span style="font-weight: 600; color: #374151; min-width: 80px;">资产描述：</span>
                <span style="color: #6b7280;">${assetDescription}</span>
            </div>
            
            <div style="display: flex; align-items: center;">
                <span style="font-weight: 600; color: #374151; min-width: 80px;">风险等级：</span>
                <span style="color: #dc2626; font-weight: 500;">${riskLevel}</span>
            </div>
            
            <div style="display: flex; align-items: center;">
                <span style="font-weight: 600; color: #374151; min-width: 80px;">收益预期：</span>
                <span style="color: #059669; font-weight: 500;">${expectedReturn}</span>
            </div>
            
            <div style="display: flex; align-items: flex-start;">
                <span style="font-weight: 600; color: #374151; min-width: 80px;">适合产品：</span>
                <span style="color: #6b7280; line-height: 1.4;">${suitableProducts}</span>
            </div>
        </div>
        
        <div style="margin-top: 15px; padding: 10px; background: #f1f5f9; border-radius: 6px; border-left: 3px solid #3b82f6;">
            <div style="font-size: 12px; color: #64748b; text-align: center;">
                <i class="fas fa-info-circle" style="margin-right: 5px;"></i>
                ${riskType}投资者建议配置 ${percentage}% 于此类资产
            </div>
        </div>
    `;
    
    detailDiv.style.display = 'block';
    
    // 添加动画效果
    detailDiv.style.transform = 'translateY(10px)';
    detailDiv.style.opacity = '0';
    setTimeout(() => {
        detailDiv.style.transition = 'all 0.3s ease';
        detailDiv.style.transform = 'translateY(0)';
        detailDiv.style.opacity = '1';
    }, 10);
}

// 创建风险承受能力雷达图
function createAbilityRadarChart(scores) {
    const canvas = document.getElementById('abilityRadarChart');
    if (!canvas) return;
    
    createRadarChart('abilityRadarChart', scores.ability.subFeatures, '风险承受能力');
}

// 创建风险承受态度雷达图
function createAttitudeRadarChart(scores) {
    const canvas = document.getElementById('attitudeRadarChart');
    if (!canvas) return;
    
    createRadarChart('attitudeRadarChart', scores.attitude.subFeatures, '风险承受态度');
}

// 发送到邮箱功能
function sendToEmail() {
    const currentUser = getCurrentUser();
    if (!currentUser) {
        showToast('请先登录后再使用邮件发送功能', 'warning');
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000);
        return;
    }

    // 显示邮箱输入对话框
    showEmailDialog(currentUser);
}

// 显示邮箱输入对话框
function showEmailDialog(user) {
    const dialog = document.createElement('div');
    dialog.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        padding: 20px;
        box-sizing: border-box;
    `;

    dialog.innerHTML = `
        <div style="
            background: white;
            border-radius: 16px;
            padding: 24px;
            width: 100%;
            max-width: 400px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        ">
            <h3 style="margin: 0 0 20px 0; color: #333; text-align: center;">发送报告到邮箱</h3>
            <div style="margin-bottom: 16px;">
                <label style="display: block; margin-bottom: 8px; color: #555; font-weight: 500;">收件人邮箱：</label>
                <input type="email" id="recipientEmail" value="${user.email}" style="
                    width: 100%;
                    padding: 12px;
                    border: 2px solid #e1e5e9;
                    border-radius: 8px;
                    font-size: 16px;
                    box-sizing: border-box;
                " placeholder="请输入邮箱地址">
            </div>
            <div style="display: flex; gap: 12px; margin-top: 20px;">
                <button onclick="closeEmailDialog()" style="
                    flex: 1;
                    padding: 12px;
                    border: 2px solid #e1e5e9;
                    background: white;
                    color: #666;
                    border-radius: 8px;
                    cursor: pointer;
                    font-size: 16px;
                ">取消</button>
                <button onclick="confirmSendEmail()" style="
                    flex: 1;
                    padding: 12px;
                    border: none;
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    color: white;
                    border-radius: 8px;
                    cursor: pointer;
                    font-size: 16px;
                ">发送</button>
            </div>
        </div>
    `;

    document.body.appendChild(dialog);
    window.currentEmailDialog = dialog;
}

// 关闭邮箱对话框
function closeEmailDialog() {
    if (window.currentEmailDialog) {
        document.body.removeChild(window.currentEmailDialog);
        window.currentEmailDialog = null;
    }
}

// 确认发送邮件
function confirmSendEmail() {
    const email = document.getElementById('recipientEmail').value.trim();
    if (!email) {
        showToast('请输入邮箱地址', 'warning');
        return;
    }

    if (!validateEmail(email)) {
        showToast('请输入正确的邮箱格式', 'warning');
        return;
    }

    closeEmailDialog();
    
    // 保存用户信息和得分到Excel
    saveUserInfoAndSendEmail(email);
}

// 验证邮箱格式
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// 保存用户信息和得分，并发送邮件
function saveUserInfoAndSendEmail(recipientEmail) {
    try {
        showToast('正在生成报告并发送邮件...', 'info');
        
        const currentUser = getCurrentUser();
        const currentScores = calculateScores();
        
        // 生成问卷报告Excel
        const reportWorkbook = generateReportExcel();
        
        // 生成用户信息Excel
        const userInfoWorkbook = generateUserInfoExcel(currentUser, currentScores);
        
        // 模拟邮件发送（实际项目中需要后端支持）
        simulateEmailSending(recipientEmail, reportWorkbook, userInfoWorkbook);
        
    } catch (error) {
        console.error('发送邮件时出错:', error);
        showToast('发送失败，请重试', 'error');
    }
}

// 生成问卷报告Excel
function generateReportExcel() {
    const wb = XLSX.utils.book_new();
    
    // 准备答案数据
    const answerData = [];
    
    // 添加表头
    answerData.push([
        '题目编号', '题目内容', '选择答案', '得分', '子特征',
        '风险承受能力总分', '风险承受态度总分', '综合评价总分',
        '风险承受能力等级', '风险承受态度等级', '综合评价等级'
    ]);
    
    // 计算当前分数
    const currentScores = calculateScores();
    const abilityLevel = getAbilityEvaluation(currentScores.ability.total).level;
    const attitudeLevel = getAttitudeEvaluation(currentScores.attitude.total).level;
    const totalLevel = getTotalEvaluation(currentScores.total).level;
    
    // 添加答案数据
    allQuestions.forEach(question => {
        if (answers[question.id] !== undefined) {
            const selectedOption = question.options[answers[question.id]];
            const subFeature = questionToSubFeature[question.id];
            const optionLetter = String.fromCharCode(65 + answers[question.id]); // A, B, C, D, E
            
            answerData.push([
                question.id,
                question.title,
                `${optionLetter}. ${selectedOption.text}`,
                selectedOption.score,
                subFeature,
                currentScores.ability.total.toFixed(2),
                currentScores.attitude.total.toFixed(2),
                currentScores.total.toFixed(2),
                abilityLevel,
                attitudeLevel,
                totalLevel
            ]);
        }
    });
    
    // 创建工作表
    const ws = XLSX.utils.aoa_to_sheet(answerData);
    
    // 设置列宽
    ws['!cols'] = [
        { wch: 8 },   // 题目编号
        { wch: 50 },  // 题目内容
        { wch: 30 },  // 选择答案
        { wch: 8 },   // 得分
        { wch: 15 },  // 子特征
        { wch: 15 },  // 风险承受能力总分
        { wch: 15 },  // 风险承受态度总分
        { wch: 12 },  // 综合评价总分
        { wch: 15 },  // 风险承受能力等级
        { wch: 15 },  // 风险承受态度等级
        { wch: 12 }   // 综合评价等级
    ];
    
    // 添加工作表到工作簿
    XLSX.utils.book_append_sheet(wb, ws, '风险评价答案');
    
    return wb;
}

// 生成用户信息Excel
function generateUserInfoExcel(user, scores) {
    const wb = XLSX.utils.book_new();
    
    // 获取现有用户信息
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userInfoData = [];
    
    // 添加表头
    userInfoData.push([
        '序号', '姓名', '手机', '邮箱', '密码', 
        '风险承受能力得分', '风险承受态度得分', '风险属性综合得分'
    ]);
    
    // 添加所有用户数据
    users.forEach((u, index) => {
        let abilityScore = '';
        let attitudeScore = '';
        let totalScore = '';
        
        // 如果是当前用户，使用当前得分
        if (u.id === user.id) {
            abilityScore = scores.ability.total.toFixed(2);
            attitudeScore = scores.attitude.total.toFixed(2);
            totalScore = scores.total.toFixed(2);
            
            // 更新用户信息中的得分
            u.abilityScore = abilityScore;
            u.attitudeScore = attitudeScore;
            u.totalScore = totalScore;
            u.lastTestDate = new Date().toISOString();
        }
        
        userInfoData.push([
            index + 1,
            u.name,
            u.phone,
            u.email,
            u.password,
            u.abilityScore || '',
            u.attitudeScore || '',
            u.totalScore || ''
        ]);
    });
    
    // 保存更新后的用户信息
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(user));
    
    // 创建工作表
    const ws = XLSX.utils.aoa_to_sheet(userInfoData);
    
    // 设置列宽
    ws['!cols'] = [
        { wch: 6 },   // 序号
        { wch: 12 },  // 姓名
        { wch: 15 },  // 手机
        { wch: 25 },  // 邮箱
        { wch: 15 },  // 密码
        { wch: 18 },  // 风险承受能力得分
        { wch: 18 },  // 风险承受态度得分
        { wch: 18 }   // 风险属性综合得分
    ];
    
    // 添加工作表到工作簿
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    
    return wb;
}

// 模拟邮件发送
function simulateEmailSending(recipientEmail, reportWorkbook, userInfoWorkbook) {
    // 生成文件名
    const now = new Date();
    const timestamp = now.getFullYear() + 
                     String(now.getMonth() + 1).padStart(2, '0') + 
                     String(now.getDate()).padStart(2, '0') + '_' +
                     String(now.getHours()).padStart(2, '0') + 
                     String(now.getMinutes()).padStart(2, '0');
    
    const reportFilename = `风险评价报告_${timestamp}.xlsx`;
    const userInfoFilename = `用户信息_${timestamp}.xlsx`;
    
    // 模拟发送延迟
    setTimeout(() => {
        // 实际项目中，这里应该调用后端API发送邮件
        // 邮件发送功能不自动下载文件，只显示发送成功信息
        
        try {
            showToast(`邮件发送成功！\n收件人：${recipientEmail}\n附件：${reportFilename}、${userInfoFilename}`, 'success');
            
            // 显示发送详情
            showEmailSentDetails(recipientEmail, reportFilename, userInfoFilename);
            
        } catch (error) {
            console.error('邮件发送失败:', error);
            showToast('邮件发送失败，请重试', 'error');
        }
    }, 2000);
}

// 显示邮件发送详情
function showEmailSentDetails(email, reportFile, userInfoFile) {
    const dialog = document.createElement('div');
    dialog.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        padding: 20px;
        box-sizing: border-box;
    `;

    dialog.innerHTML = `
        <div style="
            background: white;
            border-radius: 16px;
            padding: 24px;
            width: 100%;
            max-width: 450px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        ">
            <div style="text-align: center; margin-bottom: 20px;">
                <i class="fas fa-check-circle" style="color: #27ae60; font-size: 48px; margin-bottom: 16px;"></i>
                <h3 style="margin: 0; color: #333;">邮件发送成功！</h3>
            </div>
            <div style="background: #f8f9fa; padding: 16px; border-radius: 8px; margin-bottom: 20px;">
                <p style="margin: 0 0 8px 0; color: #555;"><strong>收件人：</strong> ${email}</p>
                <p style="margin: 0 0 8px 0; color: #555;"><strong>附件1：</strong> ${reportFile}</p>
                <p style="margin: 0; color: #555;"><strong>附件2：</strong> ${userInfoFile}</p>
            </div>
            <p style="color: #666; font-size: 14px; text-align: center; margin-bottom: 20px;">
                报告已成功发送到指定邮箱。
            </p>
            <button onclick="closeEmailSentDialog()" style="
                width: 100%;
                padding: 12px;
                border: none;
                background: linear-gradient(135deg, #667eea, #764ba2);
                color: white;
                border-radius: 8px;
                cursor: pointer;
                font-size: 16px;
            ">确定</button>
        </div>
    `;

    document.body.appendChild(dialog);
    window.currentEmailSentDialog = dialog;
}

// 关闭邮件发送成功对话框
function closeEmailSentDialog() {
    if (window.currentEmailSentDialog) {
        document.body.removeChild(window.currentEmailSentDialog);
        window.currentEmailSentDialog = null;
    }
}

// 获取当前用户
function getCurrentUser() {
    const userStr = localStorage.getItem('currentUser');
    return userStr ? JSON.parse(userStr) : null;
}

// 检查登录状态并更新UI
function checkLoginStatus() {
    const currentUser = getCurrentUser();
    const loginLink = document.getElementById('login-link');
    
    if (currentUser && loginLink) {
        // 用户已登录，显示用户信息
        loginLink.innerHTML = `
            <i class="fas fa-user-circle"></i>
            ${currentUser.name}
        `;
        loginLink.href = '#';
        loginLink.onclick = function(e) {
            e.preventDefault();
            showUserMenu();
        };
    }
}

// 显示用户菜单
function showUserMenu() {
    const currentUser = getCurrentUser();
    if (!currentUser) return;
    
    const menu = document.createElement('div');
    menu.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        padding: 20px;
        box-sizing: border-box;
    `;

    menu.innerHTML = `
        <div style="
            background: white;
            border-radius: 16px;
            padding: 24px;
            width: 100%;
            max-width: 350px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        ">
            <div style="text-align: center; margin-bottom: 20px;">
                <i class="fas fa-user-circle" style="color: #667eea; font-size: 48px; margin-bottom: 12px;"></i>
                <h3 style="margin: 0; color: #333;">${currentUser.name}</h3>
                <p style="margin: 8px 0 0 0; color: #666; font-size: 14px;">${currentUser.email}</p>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px;">
                <button onclick="logout()" style="
                    padding: 12px;
                    border: 2px solid #e74c3c;
                    background: white;
                    color: #e74c3c;
                    border-radius: 8px;
                    cursor: pointer;
                    font-size: 16px;
                ">退出登录</button>
                <button onclick="closeUserMenu()" style="
                    padding: 12px;
                    border: none;
                    background: #f8f9fa;
                    color: #666;
                    border-radius: 8px;
                    cursor: pointer;
                    font-size: 16px;
                ">取消</button>
            </div>
        </div>
    `;

    document.body.appendChild(menu);
    window.currentUserMenu = menu;
}

// 关闭用户菜单
function closeUserMenu() {
    if (window.currentUserMenu) {
        document.body.removeChild(window.currentUserMenu);
        window.currentUserMenu = null;
    }
}

// 退出登录
function logout() {
    localStorage.removeItem('currentUser');
    closeUserMenu();
    showToast('已退出登录', 'info');
    
    // 更新UI
    setTimeout(() => {
        location.reload();
    }, 1000);
}

document.addEventListener('DOMContentLoaded', function() {
    init();
    checkLoginStatus();
});

// 全局函数，供HTML调用
window.closeEmailDialog = closeEmailDialog;
window.confirmSendEmail = confirmSendEmail;
window.closeEmailSentDialog = closeEmailSentDialog;
window.closeUserMenu = closeUserMenu;
window.logout = logout;
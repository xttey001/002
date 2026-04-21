import React, { useState } from 'react';

const Creator: React.FC = () => {
  const [activeTab, setActiveTab] = useState('elements');
  const [isGenerating, setIsGenerating] = useState(false);
  const [creationResult, setCreationResult] = useState<any>(null);

  // 核心元素生成表单
  const [elementsForm, setElementsForm] = useState({
    genre: '',
    theme: '',
    style: ''
  });

  // 大纲构建表单
  const [outlineForm, setOutlineForm] = useState({
    theme: '',
    conflict: '',
    setting: '',
    protagonist: '',
    antagonist: ''
  });

  // 风格建议表单
  const [styleForm, setStyleForm] = useState({
    genre: '',
    style: ''
  });

  // 创意生成大纲表单
  const [ideaForm, setIdeaForm] = useState({
    idea: '',
    genre: '',
    theme: ''
  });

  const handleGenerate = () => {
    setIsGenerating(true);
    // 模拟生成过程
    setTimeout(() => {
      setIsGenerating(false);
      // 模拟生成结果
      const mockResults = {
        elements: {
          elements: {
            theme: '勇气与自我牺牲',
            conflict: '主角必须在保护家人和拯救世界之间做出选择',
            setting: '未来世界，地球面临外星入侵',
            protagonist: '普通的高中学生，意外获得超能力',
            antagonist: '外星文明的领导者，试图征服地球'
          }
        },
        outline: {
          outline: {
            chapters: [
              {
                title: '平凡的一天',
                summary: '主角过着普通的高中生活，直到遇到神秘事件',
                keyEvents: ['主角发现自己有超能力', '神秘人接触主角', '主角开始怀疑自己的身份']
              },
              {
                title: '觉醒',
                summary: '主角逐渐掌握自己的能力，了解到外星入侵的真相',
                keyEvents: ['主角接受训练', '第一次使用超能力', '得知外星入侵的消息']
              },
              {
                title: '抉择',
                summary: '主角面临艰难的选择，是保护家人还是拯救世界',
                keyEvents: ['家人受到威胁', '外星军队逼近', '主角做出决定']
              },
              {
                title: '最终决战',
                summary: '主角与外星领导者展开最终对决',
                keyEvents: ['双方展开激烈战斗', '主角陷入劣势', '主角领悟真正的力量']
              },
              {
                title: '新的开始',
                summary: '战斗结束，世界恢复和平，主角开始新的生活',
                keyEvents: ['外星军队撤退', '主角与家人团聚', '主角接受新的身份']
              }
            ]
          }
        },
        style: {
          styleGuide: {
            language: '简洁有力，富有画面感',
            tone: '紧张而充满希望',
            pace: '快节奏，充满动作场景',
            examples: [
              '他的拳头如闪电般挥出，空气中留下一道残影',
              '城市在火焰中颤抖，外星飞船遮蔽了天空',
              '她的眼中闪烁着坚定的光芒，即使面对不可战胜的敌人'
            ]
          }
        },
        idea: {
          outline: '这是一个关于都市修仙的故事，主角从平凡上班族成长为强大修士的历程，融合了现代都市生活与古代修仙文化',
          goldenChapters: [
            {
              chapterNumber: 1,
              title: '第一章 平凡的一天',
              content: '李凡站在公司楼下，看着眼前的高楼大厦，心中感慨万千。作为一个普通的上班族，他每天过着朝九晚五的生活，日子平淡如水。同事们都在忙碌地工作，没有人注意到李凡眼中一闪而过的疲惫。\n\n突然，一道闪电划破天空，李凡感到一阵眩晕，等他清醒过来时，发现自己的脑海中多了一个神秘的系统。',
              highlight: '【爽点】：系统突然降临，李凡从此拥有了改变命运的力量',
              expectation: '【期待】：接下来李凡会如何使用系统，他的生活又会发生怎样的变化？'
            },
            {
              chapterNumber: 2,
              title: '第二章 修仙系统',
              content: '"宿主已绑定修仙系统，当前等级：练气一层",一个冰冷的机械声音在他脑海中响起。李凡以为自己在做梦，但当他试着运行系统中的修炼法诀时，真的感受到了体内有一股热流在涌动。\n\n系统还为他提供了修炼资源和任务，只要完成任务，就能不断提升实力。李凡心中激动不已，他知道自己的人生即将发生翻天覆地的变化。',
              highlight: '【爽点】：李凡确认系统的存在，开始了他的修仙之路',
              expectation: '【期待】：李凡的第一次修炼会有什么成果？系统又会发布什么任务？'
            },
            {
              chapterNumber: 3,
              title: '第三章 第一次出手',
              content: '李凡正在修炼，突然听到楼下传来求救声。他冲下楼，看到几个混混正在欺负一个女孩。李凡心中愤怒，刚好想试试自己刚学会的能力。\n\n他运转体内的灵力，只是轻轻一拳，就把几个混混打得落花流水。女孩感激地看着他，李凡心中也充满了成就感。他第一次真切地感受到了力量带来的改变。',
              highlight: '【爽点】：李凡第一次使用灵力，轻松击败混混，英雄救美',
              expectation: '【期待】：李凡的修仙之路会遇到什么挑战？那个女孩又会和他发生什么故事？'
            }
          ],
          chapters: [
            {
              chapterNumber: 1,
              title: '第一章 平凡的一天',
              outline: '介绍李凡的平凡生活，引出系统降临',
              content: '李凡站在公司楼下，看着眼前的高楼大厦，心中感慨万千。作为一个普通的上班族，他每天过着朝九晚五的生活，日子平淡如水。同事们都在忙碌地工作，没有人注意到李凡眼中一闪而过的疲惫。\n\n李凡的工作并不顺利，业绩平平，还经常被上司批评。他回到出租屋，看着狭小的房间，心中充满了无奈。他不知道这样的日子什么时候才是个头。\n\n突然，一道闪电划破天空，李凡感到一阵眩晕，等他清醒过来时，发现自己的脑海中多了一个神秘的系统。',
              highlight: '【爽点】：系统突然降临，李凡从此拥有了改变命运的力量',
              expectation: '【期待】：接下来李凡会如何使用系统，他的生活又会发生怎样的变化？'
            },
            {
              chapterNumber: 2,
              title: '第二章 修仙系统',
              outline: '介绍系统功能，李凡开始第一次修炼',
              content: '"宿主已绑定修仙系统，当前等级：练气一层",一个冰冷的机械声音在他脑海中响起。李凡以为自己在做梦，但当他试着运行系统中的修炼法诀时，真的感受到了体内有一股热流在涌动。\n\n系统还为他提供了修炼资源和任务面板，只要完成任务，就能获得经验值和奖励。李凡查看了新手任务，居然是让他在三天内修炼到练气二层。\n\n李凡心中激动不已，他按照系统的指引开始修炼，感觉身体中的力量不断增长。他知道自己的人生即将发生翻天覆地的变化。',
              highlight: '【爽点】：李凡确认系统的存在，开始了他的修仙之路',
              expectation: '【期待】：李凡的第一次修炼会有什么成果？系统又会发布什么任务？'
            },
            {
              chapterNumber: 3,
              title: '第三章 第一次出手',
              outline: '李凡第一次使用灵力，英雄救美',
              content: '李凡正在修炼，突然听到楼下传来求救声。他冲下楼，看到几个混混正在欺负一个女孩。李凡心中愤怒，刚好想试试自己刚学会的能力。\n\n他运转体内的灵力，只是轻轻一拳，就把几个混混打得落花流水。女孩感激地看着他，李凡心中也充满了成就感。他第一次真切地感受到了力量带来的改变。\n\n女孩自我介绍说她叫林雪儿，是附近大学的学生。她对李凡表示感谢，还留下了联系方式。李凡心中有些激动，这可是他第一次被美女主动搭讪。',
              highlight: '【爽点】：李凡第一次使用灵力，轻松击败混混，英雄救美',
              expectation: '【期待】：李凡的修仙之路会遇到什么挑战？那个女孩又会和他发生什么故事？'
            },
            {
              chapterNumber: 4,
              title: '第四章 修真世界',
              outline: '李凡发现隐藏在现代社会中的修真者',
              content: '经过几天的修炼，李凡成功达到了练气二层，完成了新手任务。系统奖励了他一枚储物戒指和一本基础功法。\n\n就在这时，李凡遇到了一个神秘的老人，老人居然也是一个修真者。老人告诉李凡，现代社会中隐藏着一个修真世界，还有很多像他一样的修士。\n\n老人邀请李凡加入一个修真者组织，李凡心中有些犹豫，但也充满了好奇。他感觉自己正在接触一个全新的世界。',
              highlight: '【爽点】：李凡发现了修真世界，还有机会加入修真组织',
              expectation: '【期待】：李凡会加入修真组织吗？修真世界又有什么在等着他？'
            },
            {
              chapterNumber: 5,
              title: '第五章 小试牛刀',
              outline: '李凡在修真者组织中初试身手，崭露头角',
              content: '李凡最终决定加入修真组织，跟着老人来到了一个隐蔽的庄园。庄园中聚集了各种修真者，有年轻人也有老年人。\n\n组织中有一个试炼活动，新加入的成员需要完成试炼才能正式加入。李凡接受了试炼，对手是一个练气三层的修士。\n\n两人开始战斗，李凡虽然境界稍低，但凭借系统传授的精妙功法，居然渐渐占据了上风。最终，李凡成功击败了对手，完成了试炼。',
              highlight: '【爽点】：李凡越级挑战成功，在组织中崭露头角',
              expectation: '【期待】：李凡会在组织中获得什么地位？还会遇到什么挑战？'
            }
          ]
        }
      };
      setCreationResult(mockResults[activeTab as keyof typeof mockResults]);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-neutral-light">
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-display text-3xl font-bold mb-8 text-primary">创作助手</h1>
        
        {/* 选项卡 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex border-b border-gray-200 mb-6">
            <button
              className={`px-4 py-2 font-medium ${activeTab === 'elements' ? 'text-accent border-b-2 border-accent' : 'text-gray-500 hover:text-primary'}`}
              onClick={() => setActiveTab('elements')}
            >
              核心元素生成
            </button>
            <button
              className={`px-4 py-2 font-medium ${activeTab === 'outline' ? 'text-accent border-b-2 border-accent' : 'text-gray-500 hover:text-primary'}`}
              onClick={() => setActiveTab('outline')}
            >
              大纲构建
            </button>
            <button
              className={`px-4 py-2 font-medium ${activeTab === 'style' ? 'text-accent border-b-2 border-accent' : 'text-gray-500 hover:text-primary'}`}
              onClick={() => setActiveTab('style')}
            >
              风格建议
            </button>
            <button
              className={`px-4 py-2 font-medium ${activeTab === 'idea' ? 'text-accent border-b-2 border-accent' : 'text-gray-500 hover:text-primary'}`}
              onClick={() => setActiveTab('idea')}
            >
              创意生成大纲
            </button>
          </div>

          {/* 核心元素生成表单 */}
          {activeTab === 'elements' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  小说类型
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="例如：科幻、奇幻、悬疑等"
                  value={elementsForm.genre}
                  onChange={(e) => setElementsForm({ ...elementsForm, genre: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  主题
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="例如：勇气、爱情、复仇等"
                  value={elementsForm.theme}
                  onChange={(e) => setElementsForm({ ...elementsForm, theme: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  风格
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="例如：现实主义、浪漫主义、暗黑风格等"
                  value={elementsForm.style}
                  onChange={(e) => setElementsForm({ ...elementsForm, style: e.target.value })}
                />
              </div>
            </div>
          )}

          {/* 大纲构建表单 */}
          {activeTab === 'outline' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  核心主题
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="例如：勇气与自我牺牲"
                  value={outlineForm.theme}
                  onChange={(e) => setOutlineForm({ ...outlineForm, theme: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  主要冲突
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="例如：主角必须在保护家人和拯救世界之间做出选择"
                  value={outlineForm.conflict}
                  onChange={(e) => setOutlineForm({ ...outlineForm, conflict: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  故事背景
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="例如：未来世界，地球面临外星入侵"
                  value={outlineForm.setting}
                  onChange={(e) => setOutlineForm({ ...outlineForm, setting: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  主角设定
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="例如：普通的高中学生，意外获得超能力"
                  value={outlineForm.protagonist}
                  onChange={(e) => setOutlineForm({ ...outlineForm, protagonist: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  反派设定
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="例如：外星文明的领导者，试图征服地球"
                  value={outlineForm.antagonist}
                  onChange={(e) => setOutlineForm({ ...outlineForm, antagonist: e.target.value })}
                />
              </div>
            </div>
          )}

          {/* 风格建议表单 */}
          {activeTab === 'style' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  小说类型
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="例如：科幻、奇幻、悬疑等"
                  value={styleForm.genre}
                  onChange={(e) => setStyleForm({ ...styleForm, genre: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  目标风格
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="例如：紧张刺激、温馨感人、暗黑风格等"
                  value={styleForm.style}
                  onChange={(e) => setStyleForm({ ...styleForm, style: e.target.value })}
                />
              </div>
            </div>
          )}

          {/* 创意生成大纲表单 */}
          {activeTab === 'idea' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  小说类型
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="例如：都市修仙、玄幻、科幻、言情等"
                  value={ideaForm.genre}
                  onChange={(e) => setIdeaForm({ ...ideaForm, genre: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  主题
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="例如：成长、复仇、爱情、冒险等"
                  value={ideaForm.theme}
                  onChange={(e) => setIdeaForm({ ...ideaForm, theme: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  你的创意
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded-lg p-3 min-h-[150px] focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="描述你的小说创意，比如：主角获得系统、穿越到古代、末世觉醒异能等"
                  value={ideaForm.idea}
                  onChange={(e) => setIdeaForm({ ...ideaForm, idea: e.target.value })}
                />
              </div>
            </div>
          )}

          <button
            className="mt-6 bg-primary hover:bg-primary-light text-white font-medium py-2 px-6 rounded-lg transition-colors"
            onClick={handleGenerate}
            disabled={isGenerating}
          >
            {isGenerating ? '生成中...' : '开始生成'}
          </button>
        </div>

        {/* 生成结果 */}
        {creationResult && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="font-display text-2xl font-bold mb-6 text-primary">
              {activeTab === 'elements' && '核心元素生成结果'}
              {activeTab === 'outline' && '大纲构建结果'}
              {activeTab === 'style' && '风格建议结果'}
              {activeTab === 'idea' && '创意生成大纲结果'}
            </h2>

            {activeTab === 'elements' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-primary/5 rounded-lg p-4">
                    <h3 className="font-medium text-lg mb-2 text-primary">核心主题</h3>
                    <p className="text-neutral-dark">{creationResult.elements.theme}</p>
                  </div>
                  <div className="bg-primary/5 rounded-lg p-4">
                    <h3 className="font-medium text-lg mb-2 text-primary">主要冲突</h3>
                    <p className="text-neutral-dark">{creationResult.elements.conflict}</p>
                  </div>
                  <div className="bg-primary/5 rounded-lg p-4">
                    <h3 className="font-medium text-lg mb-2 text-primary">故事背景</h3>
                    <p className="text-neutral-dark">{creationResult.elements.setting}</p>
                  </div>
                  <div className="bg-primary/5 rounded-lg p-4">
                    <h3 className="font-medium text-lg mb-2 text-primary">主角设定</h3>
                    <p className="text-neutral-dark">{creationResult.elements.protagonist}</p>
                  </div>
                  <div className="bg-primary/5 rounded-lg p-4 md:col-span-2">
                    <h3 className="font-medium text-lg mb-2 text-primary">反派设定</h3>
                    <p className="text-neutral-dark">{creationResult.elements.antagonist}</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'outline' && (
              <div className="space-y-6">
                {creationResult.outline.chapters.map((chapter: any, index: number) => (
                  <div key={index} className="border-b border-gray-200 pb-4">
                    <h3 className="font-medium text-lg mb-2 text-primary">第 {index + 1} 章：{chapter.title}</h3>
                    <p className="text-neutral-dark mb-3">{chapter.summary}</p>
                    <div>
                      <h4 className="text-sm text-gray-500 mb-1">关键事件</h4>
                      <ul className="list-disc list-inside space-y-1 text-neutral-dark">
                        {chapter.keyEvents.map((event: string, eventIndex: number) => (
                          <li key={eventIndex}>{event}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'style' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-primary/5 rounded-lg p-4">
                    <h3 className="font-medium text-lg mb-2 text-primary">语言特点</h3>
                    <p className="text-neutral-dark">{creationResult.styleGuide.language}</p>
                  </div>
                  <div className="bg-primary/5 rounded-lg p-4">
                    <h3 className="font-medium text-lg mb-2 text-primary">语调建议</h3>
                    <p className="text-neutral-dark">{creationResult.styleGuide.tone}</p>
                  </div>
                  <div className="bg-primary/5 rounded-lg p-4 md:col-span-2">
                    <h3 className="font-medium text-lg mb-2 text-primary">节奏建议</h3>
                    <p className="text-neutral-dark">{creationResult.styleGuide.pace}</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2 text-primary">参考示例</h3>
                  <div className="space-y-3">
                    {creationResult.styleGuide.examples.map((example: string, index: number) => (
                      <div key={index} className="bg-gray-50 border-l-4 border-accent p-4">
                        <p className="text-neutral-dark">{example}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'idea' && (
              <div className="space-y-8">
                <div>
                  <h3 className="font-medium text-xl mb-4 text-primary">📝 大纲框架</h3>
                  <div className="bg-primary/5 rounded-lg p-6">
                    <p className="text-neutral-dark">{creationResult.outline}</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-xl mb-4 text-primary">✨ 黄金三章</h3>
                  <div className="space-y-6">
                    {creationResult.goldenChapters.map((chapter: any, index: number) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="bg-accent text-primary font-bold text-sm px-3 py-1 rounded-full">
                            第{chapter.chapterNumber}章
                          </span>
                          <h4 className="font-medium text-lg">{chapter.title}</h4>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 mb-4">
                          <p className="text-neutral-dark whitespace-pre-line">{chapter.content}</p>
                        </div>
                        <div className="space-y-2">
                          <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded">
                            <p className="text-green-700 font-medium">{chapter.highlight}</p>
                          </div>
                          <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded">
                            <p className="text-blue-700 font-medium">{chapter.expectation}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-xl mb-4 text-primary">📖 完整章节</h3>
                  <div className="space-y-6">
                    {creationResult.chapters.map((chapter: any, index: number) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="bg-accent text-primary font-bold text-sm px-3 py-1 rounded-full">
                            第{chapter.chapterNumber}章
                          </span>
                          <h4 className="font-medium text-lg">{chapter.title}</h4>
                        </div>
                        <div className="bg-primary/5 rounded-lg p-4 mb-4">
                          <h5 className="text-sm text-gray-600 mb-2">章节大纲：</h5>
                          <p className="text-neutral-dark">{chapter.outline}</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 mb-4">
                          <h5 className="text-sm text-gray-600 mb-2">章节内容：</h5>
                          <p className="text-neutral-dark whitespace-pre-line">{chapter.content}</p>
                        </div>
                        <div className="space-y-2">
                          <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded">
                            <p className="text-green-700 font-medium">{chapter.highlight}</p>
                          </div>
                          <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded">
                            <p className="text-blue-700 font-medium">{chapter.expectation}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8">
              <button className="bg-accent hover:bg-accent-light text-primary font-medium py-2 px-6 rounded-lg transition-colors">
                导出创作方案
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Creator;
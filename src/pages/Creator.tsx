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
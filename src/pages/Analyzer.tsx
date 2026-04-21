import React, { useState } from 'react';

const Analyzer: React.FC = () => {
  const [activeTab, setActiveTab] = useState('structure');
  const [content, setContent] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);

  const handleAnalysis = () => {
    setIsAnalyzing(true);
    // 模拟分析过程
    setTimeout(() => {
      setIsAnalyzing(false);
      // 模拟分析结果
      const mockResults = {
        structure: {
          chapters: 12,
          structureScore: 85,
          chapterDistribution: [1000, 1200, 1500, 1300, 1100, 1400, 1600, 1300, 1200, 1500, 1400, 1800],
          suggestions: [
            '章节长度分布较为均匀，建议在关键情节处适当增加篇幅',
            '考虑在故事中段增加一个转折点，提升情节张力',
            '结尾部分可以更加紧凑，增强故事的冲击力'
          ]
        },
        style: {
          styleType: '文学现实主义',
          languageFeatures: ['细腻的描写', '自然的对话', '丰富的心理刻画'],
          tone: '严肃而温暖',
          pace: '中速',
          suggestions: [
            '可以适当增加一些象征手法，增强作品的深度',
            '对话部分可以更加口语化，提升真实感',
            '考虑在某些场景使用不同的叙述视角，增加叙事的多样性'
          ]
        },
        characters: {
          characters: [
            {
              name: '主角',
              depth: 90,
              consistency: 85,
              arcs: ['从平凡到勇敢', '从自我怀疑到自我认同']
            },
            {
              name: '反派',
              depth: 75,
              consistency: 80,
              arcs: ['从理性到偏执', '从正义到邪恶']
            },
            {
              name: '配角',
              depth: 65,
              consistency: 70,
              arcs: ['从被动到主动', '从怀疑到支持']
            }
          ],
          suggestions: [
            '主角的动机可以更加明确，增强读者的共鸣',
            '反派的背景故事可以更加丰富，使角色更加立体',
            '配角的作用可以更加突出，与主角形成更好的互动'
          ]
        },
        story: {
          storyStructure: '三幕剧结构',
          tensionCurve: [20, 35, 50, 65, 80, 60, 70, 85, 90, 75, 80, 95],
          plotHoles: ['主角如何获得关键信息的过程不够清晰', '反派的转变略显突兀'],
          suggestions: [
            '补充主角获得关键信息的过程，使情节更加连贯',
            '为反派的转变增加更多铺垫，使角色发展更加自然',
            '在故事高潮部分增加更多悬念，提升读者的阅读体验'
          ]
        },
        highlights: {
          highlightPoints: [
            {
              type: '逆袭',
              description: '主角从被欺负到反败为胜的情节',
              intensity: 90,
              position: '第5章'
            },
            {
              type: '揭秘',
              description: '主角发现自己真实身份的情节',
              intensity: 85,
              position: '第8章'
            },
            {
              type: '胜利',
              description: '主角击败反派的最终决战',
              intensity: 95,
              position: '第12章'
            }
          ],
          expectationPoints: [
            {
              type: '悬念',
              description: '主角的超能力来源',
              satisfaction: 80,
              position: '第3章'
            },
            {
              type: '伏笔',
              description: '反派的真实目的',
              satisfaction: 75,
              position: '第7章'
            },
            {
              type: '情感',
              description: '主角与家人的关系',
              satisfaction: 85,
              position: '第10章'
            }
          ],
          suggestions: [
            '在故事前期增加更多小爽点，提升读者的阅读兴趣',
            '加强期待点的铺垫，让读者更加期待后续情节',
            '在关键爽点处增加细节描写，增强冲击力'
          ]
        }
      };
      setAnalysisResult(mockResults[activeTab as keyof typeof mockResults]);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-neutral-light">
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-display text-3xl font-bold mb-8 text-primary">分析工具</h1>
        
        {/* 选项卡 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex border-b border-gray-200 mb-6">
            <button
              className={`px-4 py-2 font-medium ${activeTab === 'structure' ? 'text-accent border-b-2 border-accent' : 'text-gray-500 hover:text-primary'}`}
              onClick={() => setActiveTab('structure')}
            >
              框架分析
            </button>
            <button
              className={`px-4 py-2 font-medium ${activeTab === 'style' ? 'text-accent border-b-2 border-accent' : 'text-gray-500 hover:text-primary'}`}
              onClick={() => setActiveTab('style')}
            >
              风格分析
            </button>
            <button
              className={`px-4 py-2 font-medium ${activeTab === 'characters' ? 'text-accent border-b-2 border-accent' : 'text-gray-500 hover:text-primary'}`}
              onClick={() => setActiveTab('characters')}
            >
              角色分析
            </button>
            <button
              className={`px-4 py-2 font-medium ${activeTab === 'story' ? 'text-accent border-b-2 border-accent' : 'text-gray-500 hover:text-primary'}`}
              onClick={() => setActiveTab('story')}
            >
              故事结构分析
            </button>
            <button
              className={`px-4 py-2 font-medium ${activeTab === 'highlights' ? 'text-accent border-b-2 border-accent' : 'text-gray-500 hover:text-primary'}`}
              onClick={() => setActiveTab('highlights')}
            >
              爽点与期待点分析
            </button>
          </div>

          {/* 输入区域 */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              输入小说内容
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-lg p-4 min-h-[300px] focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="请输入小说内容或章节内容..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <div className="mt-2 text-sm text-gray-500">
              {content.length} 字符
            </div>
          </div>

          <button
            className="bg-primary hover:bg-primary-light text-white font-medium py-2 px-6 rounded-lg transition-colors"
            onClick={handleAnalysis}
            disabled={isAnalyzing}
          >
            {isAnalyzing ? '分析中...' : '开始分析'}
          </button>
        </div>

        {/* 分析结果 */}
        {analysisResult && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="font-display text-2xl font-bold mb-6 text-primary">
              {activeTab === 'structure' && '框架分析结果'}
              {activeTab === 'style' && '风格分析结果'}
              {activeTab === 'characters' && '角色分析结果'}
              {activeTab === 'story' && '故事结构分析结果'}
              {activeTab === 'highlights' && '爽点与期待点分析结果'}
            </h2>

            {activeTab === 'structure' && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-lg mb-2">章节数量</h3>
                  <p className="text-neutral-dark">{analysisResult.chapters} 章</p>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">结构评分</h3>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div 
                      className="bg-accent h-4 rounded-full" 
                      style={{ width: `${analysisResult.structureScore}%` }}
                    ></div>
                  </div>
                  <p className="mt-1 text-neutral-dark">{analysisResult.structureScore} / 100</p>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">章节长度分布</h3>
                  <div className="h-40 bg-gray-100 rounded-lg p-4 flex items-end justify-between">
                    {analysisResult.chapterDistribution.map((length: number, index: number) => (
                      <div 
                        key={index} 
                        className="w-6 bg-primary rounded-t" 
                        style={{ height: `${(length / Math.max(...analysisResult.chapterDistribution)) * 100}%` }}
                      ></div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">改进建议</h3>
                  <ul className="list-disc list-inside space-y-2 text-neutral-dark">
                    {analysisResult.suggestions.map((suggestion: string, index: number) => (
                      <li key={index}>{suggestion}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'style' && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-lg mb-2">风格类型</h3>
                  <p className="text-neutral-dark">{analysisResult.styleType}</p>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">语言特点</h3>
                  <div className="flex flex-wrap gap-2">
                    {analysisResult.languageFeatures.map((feature: string, index: number) => (
                      <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">语调和节奏</h3>
                  <p className="text-neutral-dark">语调: {analysisResult.tone} | 节奏: {analysisResult.pace}</p>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">改进建议</h3>
                  <ul className="list-disc list-inside space-y-2 text-neutral-dark">
                    {analysisResult.suggestions.map((suggestion: string, index: number) => (
                      <li key={index}>{suggestion}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'characters' && (
              <div className="space-y-6">
                {analysisResult.characters.map((character: any, index: number) => (
                  <div key={index} className="border-b border-gray-200 pb-4">
                    <h3 className="font-medium text-lg mb-2">{character.name}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm text-gray-500 mb-1">角色深度</h4>
                        <div className="w-full bg-gray-200 rounded-full h-4">
                          <div 
                            className="bg-accent h-4 rounded-full" 
                            style={{ width: `${character.depth}%` }}
                          ></div>
                        </div>
                        <p className="mt-1 text-sm text-neutral-dark">{character.depth} / 100</p>
                      </div>
                      <div>
                        <h4 className="text-sm text-gray-500 mb-1">角色一致性</h4>
                        <div className="w-full bg-gray-200 rounded-full h-4">
                          <div 
                            className="bg-primary h-4 rounded-full" 
                            style={{ width: `${character.consistency}%` }}
                          ></div>
                        </div>
                        <p className="mt-1 text-sm text-neutral-dark">{character.consistency} / 100</p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <h4 className="text-sm text-gray-500 mb-1">角色弧光</h4>
                      <div className="flex flex-wrap gap-2">
                        {character.arcs.map((arc: string, arcIndex: number) => (
                          <span key={arcIndex} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                            {arc}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
                <div>
                  <h3 className="font-medium text-lg mb-2">改进建议</h3>
                  <ul className="list-disc list-inside space-y-2 text-neutral-dark">
                    {analysisResult.suggestions.map((suggestion: string, index: number) => (
                      <li key={index}>{suggestion}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'story' && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-lg mb-2">故事结构类型</h3>
                  <p className="text-neutral-dark">{analysisResult.storyStructure}</p>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">张力曲线</h3>
                  <div className="h-40 bg-gray-100 rounded-lg p-4">
                    <svg width="100%" height="100%" viewBox="0 0 800 300">
                      <polyline
                        points={analysisResult.tensionCurve.map((value: number, index: number) => {
                          const x = (index / (analysisResult.tensionCurve.length - 1)) * 800;
                          const y = 300 - (value / 100) * 300;
                          return `${x},${y}`;
                        }).join(' ')}
                        fill="none"
                        stroke="#1a365d"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">情节漏洞</h3>
                  {analysisResult.plotHoles.length > 0 ? (
                    <ul className="list-disc list-inside space-y-2 text-neutral-dark">
                      {analysisResult.plotHoles.map((hole: string, index: number) => (
                        <li key={index}>{hole}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-neutral-dark">未发现明显情节漏洞</p>
                  )}
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">改进建议</h3>
                  <ul className="list-disc list-inside space-y-2 text-neutral-dark">
                    {analysisResult.suggestions.map((suggestion: string, index: number) => (
                      <li key={index}>{suggestion}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'highlights' && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-lg mb-4">爽点分析</h3>
                  <div className="space-y-4">
                    {analysisResult.highlightPoints.map((point: any, index: number) => (
                      <div key={index} className="border-b border-gray-200 pb-3">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium text-primary">{point.type}</h4>
                          <span className="text-sm text-gray-500">{point.position}</span>
                        </div>
                        <p className="text-neutral-dark mb-2">{point.description}</p>
                        <div>
                          <h5 className="text-sm text-gray-500 mb-1">强度</h5>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div 
                              className="bg-accent h-3 rounded-full" 
                              style={{ width: `${point.intensity}%` }}
                            ></div>
                          </div>
                          <p className="mt-1 text-sm text-neutral-dark">{point.intensity} / 100</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-lg mb-4">期待点分析</h3>
                  <div className="space-y-4">
                    {analysisResult.expectationPoints.map((point: any, index: number) => (
                      <div key={index} className="border-b border-gray-200 pb-3">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium text-primary">{point.type}</h4>
                          <span className="text-sm text-gray-500">{point.position}</span>
                        </div>
                        <p className="text-neutral-dark mb-2">{point.description}</p>
                        <div>
                          <h5 className="text-sm text-gray-500 mb-1">满足度</h5>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div 
                              className="bg-primary h-3 rounded-full" 
                              style={{ width: `${point.satisfaction}%` }}
                            ></div>
                          </div>
                          <p className="mt-1 text-sm text-neutral-dark">{point.satisfaction} / 100</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-lg mb-2">改进建议</h3>
                  <ul className="list-disc list-inside space-y-2 text-neutral-dark">
                    {analysisResult.suggestions.map((suggestion: string, index: number) => (
                      <li key={index}>{suggestion}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            <div className="mt-8">
              <button className="bg-accent hover:bg-accent-light text-primary font-medium py-2 px-6 rounded-lg transition-colors">
                导出分析报告
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Analyzer;
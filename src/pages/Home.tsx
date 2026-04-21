import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-light">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              小说分析与创作助手
            </h1>
            <p className="text-lg mb-8">
              帮助作家分析小说框架、风格、角色和故事结构，指导创作高质量小说
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link to="/analyzer" className="bg-accent hover:bg-accent-light text-primary font-medium py-3 px-6 rounded-lg transition-colors">
                开始分析
              </Link>
              <Link to="/creator" className="bg-transparent border-2 border-white hover:border-accent hover:text-accent font-medium py-3 px-6 rounded-lg transition-colors">
                创作助手
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-center mb-12 text-primary">
            核心功能
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 分析工具 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-primary">分析工具</h3>
              <p className="text-neutral-dark mb-4">
                分析小说的框架、风格、角色和故事结构，提供详细的分析报告和改进建议
              </p>
              <Link to="/analyzer" className="text-accent hover:underline font-medium">
                了解更多 →
              </Link>
            </div>

            {/* 创作助手 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-primary">创作助手</h3>
              <p className="text-neutral-dark mb-4">
                生成小说核心元素，构建大纲，提供风格建议，帮助你创作出精彩的故事
              </p>
              <Link to="/creator" className="text-accent hover:underline font-medium">
                了解更多 →
              </Link>
            </div>

            {/* 导出功能 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-primary">导出功能</h3>
              <p className="text-neutral-dark mb-4">
                导出分析报告和创作方案，方便你在其他工具中继续编辑和使用
              </p>
              <Link to="/analyzer" className="text-accent hover:underline font-medium">
                了解更多 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-neutral-light py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-center mb-12 text-primary">
            如何使用
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center mb-12">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                <h3 className="font-display text-xl font-bold mb-3 text-primary">步骤 1：选择工具</h3>
                <p className="text-neutral-dark">
                  根据你的需求选择分析工具或创作助手，开始你的创作之旅
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white rounded-lg shadow-md p-4">
                  <div className="flex items-center space-x-2">
                    <div className="bg-accent text-primary w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                    <span className="text-neutral-dark">选择工具类型</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center mb-12">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                <h3 className="font-display text-xl font-bold mb-3 text-primary">步骤 2：输入内容</h3>
                <p className="text-neutral-dark">
                  输入小说内容或创作需求，系统会根据你的输入进行分析或生成内容
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white rounded-lg shadow-md p-4">
                  <div className="flex items-center space-x-2">
                    <div className="bg-accent text-primary w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                    <span className="text-neutral-dark">输入小说内容或创作需求</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                <h3 className="font-display text-xl font-bold mb-3 text-primary">步骤 3：获取结果</h3>
                <p className="text-neutral-dark">
                  系统会生成详细的分析报告或创作方案，帮助你改进小说或开始创作
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white rounded-lg shadow-md p-4">
                  <div className="flex items-center space-x-2">
                    <div className="bg-accent text-primary w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                    <span className="text-neutral-dark">获取分析报告或创作方案</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold mb-6">
              开始你的创作之旅
            </h2>
            <p className="text-lg mb-8">
              无论你是经验丰富的作家还是初学者，我们的工具都能帮助你创作出更好的小说
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link to="/analyzer" className="bg-accent hover:bg-accent-light text-primary font-medium py-3 px-6 rounded-lg transition-colors">
                开始分析
              </Link>
              <Link to="/creator" className="bg-transparent border-2 border-white hover:border-accent hover:text-accent font-medium py-3 px-6 rounded-lg transition-colors">
                创作助手
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
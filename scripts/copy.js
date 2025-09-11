const fs = require('fs');
const path = require('path');

// 获取项目根目录路径（假设scripts目录在项目根目录下）
const projectRoot = path.join(__dirname, '..');

// 定义路径配置（基于项目根目录）
const paths = {
  source: {
    css: path.join(projectRoot, 'dist', 'index.css'),
    js: path.join(projectRoot, 'dist', 'index.js'),
    config: path.join(projectRoot, 'config')
  },
  target: {
    workflow: path.join(projectRoot, 'workflow'),
    style: path.join(projectRoot, 'workflow', 'style'),
    config: path.join(projectRoot, 'workflow', 'config')
  }
};

// 确保目录存在，如果不存在则创建
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`目录已创建: ${dirPath}`);
  }
}

// 复制文件
function copyFile(source, target) {
  if (!fs.existsSync(source)) {
    return;
  }

  fs.copyFileSync(source, target);
}

// 复制整个目录
function copyDirectory(source, target) {
  if (!fs.existsSync(source)) {
    return;
  }

  ensureDirectoryExists(target);

  // 读取源目录中的所有文件/目录
  const items = fs.readdirSync(source);

  items.forEach(item => {
    const sourcePath = path.join(source, item);
    const targetPath = path.join(target, item);

    const stat = fs.statSync(sourcePath);
    
    if (stat.isDirectory()) {
      copyDirectory(sourcePath, targetPath);
    } else {
      copyFile(sourcePath, targetPath);
    }
  });
}

// 主函数
function main() {
  try {
    // 确保目标目录存在
    ensureDirectoryExists(paths.target.workflow);
    ensureDirectoryExists(paths.target.style);
    ensureDirectoryExists(paths.target.config);

    // 复制CSS文件
    copyFile(paths.source.css, path.join(paths.target.style, 'index.css'));

    // 复制JS文件
    copyFile(paths.source.js, path.join(paths.target.workflow, 'index.js'));

    // 复制config目录
    copyDirectory(paths.source.config, paths.target.config);

    console.log('操作已完成！');
  } catch (error) {
    console.error('发生错误:', error);
  }
}

// 执行主函数
main();
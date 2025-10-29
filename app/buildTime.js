const buildDate = new Date();
export default `[${buildDate.getFullYear()}-${(buildDate.getMonth() + 1).toString().padStart(2, '0')}-${buildDate.getDate().toString().padStart(2, '0')}] ${buildDate.getHours().toString().padStart(2, '0')}h_${buildDate.getMinutes().toString().padStart(2, '0')}m_${buildDate.getSeconds().toString().padStart(2, '0')}s`;

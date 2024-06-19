var hostname = window.location.hostname;

// 获取当前cookie域
export function getDomain() {
  // 获取主机名（域名）
  if (hostname.endsWith(".gatherone.com")) {
    let ipAddress = '.gatherone.com';
    return ipAddress;
  }

  // 获取 IP 地址
  if (hostname.match(/^\d+\.\d+\.\d+\.\d+$/)) {
    return hostname;
  }

  return "";
}

const rateLimit = {
  tokenCache: new Map(),

  check(key, limit, duration) {
    const now = Date.now();
    const tokenCount = this.tokenCache.get(key) || { count: 0, lastReset: now };

    if (now - tokenCount.lastReset > duration) {
      tokenCount.count = 0;
      tokenCount.lastReset = now;
    }

    if (tokenCount.count < limit) {
      tokenCount.count++;
      this.tokenCache.set(key, tokenCount);
      return true;
    }

    return false;
  }
};
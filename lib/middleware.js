import rateLimit from './rateLimit';

export const withErrorHandler = (handler) => async (req, res) => {
  try {
    await handler(req, res);
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
};

export const withRateLimit = (handler, { limit = 5, windowMs = 60000 } = {}) => async (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  
  if (!rateLimit.check(ip, limit, windowMs)) {
    return res.status(429).json({
      error: 'Too many requests. Please try again later.'
    });
  }

  return handler(req, res);
};

export const withAuth = (handler) => async (req, res) => {
  // You can implement authentication here
  // For now, we'll just pass through
  return handler(req, res);
};
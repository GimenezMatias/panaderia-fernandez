// Mock client for standalone mode (no base44 dependency)
// This app now works independently with local data

export const base44 = {
  // Mock API client that always succeeds with local data
  functions: {
    call: async () => ({ success: true, data: {} })
  }
};

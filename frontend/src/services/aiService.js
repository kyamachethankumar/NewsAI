import { GoogleGenerativeAI } from '@google/generative-ai'

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY

if (!API_KEY) {
  console.warn('GEMINI_API_KEY not found in environment variables')
}

const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null

export const aiService = {
  async summarizeArticle(content) {
    if (!genAI) throw new Error('AI service not available')

    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-pro' })
      const prompt = `Please provide a concise summary of this news article in 2-3 sentences:\n\n${content}`
      
      const result = await model.generateContent(prompt)
      const response = await result.response
      return response.text()
    } catch (error) {
      console.error('AI Summary error:', error)
      throw new Error('Failed to generate summary')
    }
  },

  async explainSimply(content) {
    if (!genAI) throw new Error('AI service not available')

    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-pro' })
      const prompt = `Please explain this news article in simple, easy-to-understand language for a general audience. Use short sentences and avoid complex terms:\n\n${content}`
      
      const result = await model.generateContent(prompt)
      const response = await result.response
      return response.text()
    } catch (error) {
      console.error('AI Explain error:', error)
      throw new Error('Failed to simplify article')
    }
  }
}
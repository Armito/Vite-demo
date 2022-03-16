import { defineStore } from 'pinia'
import { useCount } from '@/hooks/useCount'

export const useCountStore = defineStore('count', useCount)

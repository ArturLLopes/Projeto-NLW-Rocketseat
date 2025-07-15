import { useQuery } from '@tanstack/react-query'

interface Room {
  id: string
  name: string
  description: string | null
  createdAt: string
}

export function useRooms() {
  return useQuery<Room[]>({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms`)

      if (!response.ok) {
        throw new Error('Failed to fetch rooms.')
      }

      const { rooms } = await response.json()
      return rooms
    },
  })
}
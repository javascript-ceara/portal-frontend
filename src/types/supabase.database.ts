export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      event_presentations: {
        Row: {
          created_at: string
          event_id: number
          presentation_id: number
        }
        Insert: {
          created_at?: string
          event_id: number
          presentation_id: number
        }
        Update: {
          created_at?: string
          event_id?: number
          presentation_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "event_presentations_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_presentations_presentation_id_fkey"
            columns: ["presentation_id"]
            isOneToOne: false
            referencedRelation: "presentations"
            referencedColumns: ["id"]
          },
        ]
      }
      events: {
        Row: {
          address: string
          created_at: string
          description: string
          end_date: string
          id: number
          is_highlighted: boolean | null
          is_online: boolean
          place: string
          start_date: string
          subscribe_url: string
          title: string
        }
        Insert: {
          address: string
          created_at?: string
          description: string
          end_date: string
          id?: number
          is_highlighted?: boolean | null
          is_online?: boolean
          place: string
          start_date: string
          subscribe_url: string
          title: string
        }
        Update: {
          address?: string
          created_at?: string
          description?: string
          end_date?: string
          id?: number
          is_highlighted?: boolean | null
          is_online?: boolean
          place?: string
          start_date?: string
          subscribe_url?: string
          title?: string
        }
        Relationships: []
      }
      presentations: {
        Row: {
          created_at: string
          description: string
          id: number
          profile_id: string | null
          published: boolean | null
          title: string
        }
        Insert: {
          created_at?: string
          description: string
          id?: number
          profile_id?: string | null
          published?: boolean | null
          title: string
        }
        Update: {
          created_at?: string
          description?: string
          id?: number
          profile_id?: string | null
          published?: boolean | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "presentations_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          company: string | null
          email: string | null
          full_name: string | null
          github_url: string | null
          id: string
          is_an_organizer: boolean | null
          linkedin_url: string | null
          location: string | null
          phone: string | null
          site_url: string | null
          updated_at: string | null
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          company?: string | null
          email?: string | null
          full_name?: string | null
          github_url?: string | null
          id: string
          is_an_organizer?: boolean | null
          linkedin_url?: string | null
          location?: string | null
          phone?: string | null
          site_url?: string | null
          updated_at?: string | null
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          company?: string | null
          email?: string | null
          full_name?: string | null
          github_url?: string | null
          id?: string
          is_an_organizer?: boolean | null
          linkedin_url?: string | null
          location?: string | null
          phone?: string | null
          site_url?: string | null
          updated_at?: string | null
          username?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_event_presentations: {
        Args: {
          input_event_id: number
        }
        Returns: {
          id: number
          title: string
          description: string
          profile_full_name: string
          profile_avatar_url: string
          profile_github_url: string
          profile_linkedin_url: string
          profile_site_url: string
          profile_bio: string
          profile_company: string
          profile_email: string
        }[]
      }
      get_last_events: {
        Args: Record<PropertyKey, never>
        Returns: {
          event_id: number
          title: string
          created_at: string
          description: string
          place: string
          start_date: string
          end_date: string
          is_online: boolean
          address: string
          subscribe_url: string
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

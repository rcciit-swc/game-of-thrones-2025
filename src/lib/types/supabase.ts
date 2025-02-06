export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      defined_roles: {
        Row: {
          role: string
        }
        Insert: {
          role: string
        }
        Update: {
          role?: string
        }
        Relationships: []
      }
      event_categories: {
        Row: {
          convenors: Json | null
          fest_id: string
          id: string
          name: string | null
          tagline: string | null
        }
        Insert: {
          convenors?: Json | null
          fest_id?: string
          id?: string
          name?: string | null
          tagline?: string | null
        }
        Update: {
          convenors?: Json | null
          fest_id?: string
          id?: string
          name?: string | null
          tagline?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "event_categories_fest_id_fkey"
            columns: ["fest_id"]
            isOneToOne: false
            referencedRelation: "fests"
            referencedColumns: ["id"]
          },
        ]
      }
      events: {
        Row: {
          coordinators: Json | null
          description: string | null
          event_category_id: string
          id: string
          image_url: string | null
          links: Json | null
          max_team_size: number | null
          min_team_size: number | null
          name: string | null
          prize_pool: number | null
          reg_status: boolean | null
          registration_fees: number | null
          rules: string | null
          schedule: string | null
        }
        Insert: {
          coordinators?: Json | null
          description?: string | null
          event_category_id?: string
          id?: string
          image_url?: string | null
          links?: Json | null
          max_team_size?: number | null
          min_team_size?: number | null
          name?: string | null
          prize_pool?: number | null
          reg_status?: boolean | null
          registration_fees?: number | null
          rules?: string | null
          schedule?: string | null
        }
        Update: {
          coordinators?: Json | null
          description?: string | null
          event_category_id?: string
          id?: string
          image_url?: string | null
          links?: Json | null
          max_team_size?: number | null
          min_team_size?: number | null
          name?: string | null
          prize_pool?: number | null
          reg_status?: boolean | null
          registration_fees?: number | null
          rules?: string | null
          schedule?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "events_event_category_id_fkey"
            columns: ["event_category_id"]
            isOneToOne: false
            referencedRelation: "event_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      fests: {
        Row: {
          id: string
          name: string | null
          year: number | null
        }
        Insert: {
          id?: string
          name?: string | null
          year?: number | null
        }
        Update: {
          id?: string
          name?: string | null
          year?: number | null
        }
        Relationships: []
      }
      participants: {
        Row: {
          email: string | null
          name: string
          phone: string | null
          team_id: string
        }
        Insert: {
          email?: string | null
          name: string
          phone?: string | null
          team_id?: string
        }
        Update: {
          email?: string | null
          name?: string
          phone?: string | null
          team_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "participants_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: true
            referencedRelation: "teams"
            referencedColumns: ["team_id"]
          },
        ]
      }
      referral_codes: {
        Row: {
          community_name: string
          referral_code: string
        }
        Insert: {
          community_name: string
          referral_code: string
        }
        Update: {
          community_name?: string
          referral_code?: string
        }
        Relationships: []
      }
      roles: {
        Row: {
          created_at: string | null
          event_category_id: string | null
          event_id: string | null
          role: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          event_category_id?: string | null
          event_id?: string | null
          role: string
          user_id?: string
        }
        Update: {
          created_at?: string | null
          event_category_id?: string | null
          event_id?: string | null
          role?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "roles_event_category_id_fkey"
            columns: ["event_category_id"]
            isOneToOne: false
            referencedRelation: "event_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "roles_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "roles_role_fkey"
            columns: ["role"]
            isOneToOne: false
            referencedRelation: "defined_roles"
            referencedColumns: ["role"]
          },
          {
            foreignKeyName: "roles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      teams: {
        Row: {
          attendance: boolean | null
          college: string | null
          event_id: string
          is_team: boolean | null
          payment_mode: string | null
          referral_code: string | null
          reg_mode: string | null
          registered_at: string | null
          team_id: string
          team_lead_email: string | null
          team_lead_id: string | null
          team_name: string | null
          transaction_id: string | null
          transaction_screenshot: string | null
          transaction_verified: string | null
          verification_mail_sent: boolean | null
        }
        Insert: {
          attendance?: boolean | null
          college?: string | null
          event_id?: string
          is_team?: boolean | null
          payment_mode?: string | null
          referral_code?: string | null
          reg_mode?: string | null
          registered_at?: string | null
          team_id?: string
          team_lead_email?: string | null
          team_lead_id?: string | null
          team_name?: string | null
          transaction_id?: string | null
          transaction_screenshot?: string | null
          transaction_verified?: string | null
          verification_mail_sent?: boolean | null
        }
        Update: {
          attendance?: boolean | null
          college?: string | null
          event_id?: string
          is_team?: boolean | null
          payment_mode?: string | null
          referral_code?: string | null
          reg_mode?: string | null
          registered_at?: string | null
          team_id?: string
          team_lead_email?: string | null
          team_lead_id?: string | null
          team_name?: string | null
          transaction_id?: string | null
          transaction_screenshot?: string | null
          transaction_verified?: string | null
          verification_mail_sent?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "teams_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "teams_referral_code_fkey"
            columns: ["referral_code"]
            isOneToOne: false
            referencedRelation: "referral_codes"
            referencedColumns: ["referral_code"]
          },
        ]
      }
      users: {
        Row: {
          college: string | null
          college_roll: string | null
          course: string | null
          email: string
          gender: string | null
          id: string
          name: string | null
          phone: string | null
          stream: string | null
        }
        Insert: {
          college?: string | null
          college_roll?: string | null
          course?: string | null
          email: string
          gender?: string | null
          id?: string
          name?: string | null
          phone?: string | null
          stream?: string | null
        }
        Update: {
          college?: string | null
          college_roll?: string | null
          course?: string | null
          email?: string
          gender?: string | null
          id?: string
          name?: string | null
          phone?: string | null
          stream?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
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

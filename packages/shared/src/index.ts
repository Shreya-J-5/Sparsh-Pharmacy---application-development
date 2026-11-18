export type Role = 'customer' | 'owner' | 'pharmacist' | 'delivery';
export type OrderStatus = 'PENDING_VERIFICATION' | 'APPROVED' | 'PACKED' | 'OUT_FOR_DELIVERY' | 'DELIVERED' | 'REJECTED';
export type HomeSection =
  | { type: 'broadcast'; id: string; message: string; imageUrl?: string }
  | { type: 'festival_banners'; id: string; items: Offer[] }
  | { type: 'combo_offers'; id: string; items: Offer[] }
  | { type: 'deals'; id: string; items: Product[] }
  | { type: 'new_arrivals' | 'back_in_stock' | 'category'; id: string; title: string; items: Product[] };
export interface Product { id: string; name: string; packSize: string; price: number; mrp: number; rxRequired: boolean; stock: number; category: string; imageUrl?: string }
export interface Offer { id: string; type: string; title: string; description?: string; config: Record<string, unknown> }

import { create } from 'zustand';
type Cart = { items: Record<string, number>; add: (id:string)=>void; remove:(id:string)=>void; clear:()=>void };
export const useCart = create<Cart>((set)=>({items:{},add:(id)=>set(s=>({...s,items:{...s.items,[id]:(s.items[id]||0)+1}})),remove:(id)=>set(s=>{const items={...s.items};if(items[id]<=1) delete items[id]; else items[id]--; return {...s,items}}),clear:()=>set({items:{}})}));

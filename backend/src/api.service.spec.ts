import {ApiService} from './api.service';
describe('customer data boundary',()=>{
 const service=new ApiService();
 it('never returns medicine cost in the customer catalog or home feed',()=>{
  for(const product of service.customerProducts())expect(product).not.toHaveProperty('costPrice');
  for(const section of service.home())if('items'in section)for(const product of section.items as any[])expect(product).not.toHaveProperty('costPrice');
 });
 it('keeps the cost available only to the internal pricing path',()=>expect(service.products.find(p=>p.id==='sun')?.costPrice).toBe(620));
});

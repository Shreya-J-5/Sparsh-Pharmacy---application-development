import {calculateOrder} from './pricing';
const products=[{id:'a',price:900,mrp:1000,costPrice:600,stock:10},{id:'sun',price:200,mrp:250,costPrice:100,stock:10},{id:'tight',price:100,mrp:100,costPrice:95,stock:10}];
describe('pricing engine',()=>{
 it('applies combo at configured flat total',()=>expect(calculateOrder([{productId:'a',quantity:1},{productId:'sun',quantity:1}],products,[{id:'combo',type:'combo',config:{minCart:900,productId:'sun',flatTotal:1000}}]).total).toBe(1000));
 it('clamps each item to cost plus minimum margin',()=>expect(calculateOrder([{productId:'tight',quantity:1}],products,[],15).items[0].unitPrice).toBe(109.25));
 it('honors exhausted coupon limits',()=>expect(calculateOrder([{productId:'a',quantity:1}],products,[],0,{type:'percent',value:50,remaining:0}).total).toBe(900));
 it('selects only one best eligible offer',()=>expect(calculateOrder([{productId:'a',quantity:1},{productId:'sun',quantity:1}],products,[{id:'combo',type:'combo',config:{minCart:900,productId:'sun',flatTotal:1000}}],0,{type:'flat',value:50,remaining:1}).appliedOffer).toBe('coupon'));
});

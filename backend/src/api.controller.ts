import { Body, Controller, Get, Param, Post } from '@nestjs/common'; import { ApiOperation, ApiTags } from '@nestjs/swagger'; import { ApiService } from './api.service'; import { calculateOrder } from './pricing';
@ApiTags('store') @Controller()
export class ApiController { constructor(private readonly service:ApiService){}
 @Get('health') health(){return {ok:true,service:'sparsh-pharmacy-api'}}
 @Get('home') @ApiOperation({summary:'Get ordered server-driven home sections'}) home(){return this.service.home()}
 @Get('app-config') config(){return {minSupportedVersion:'1.0.0',latestVersion:'1.0.0',storeUrl:'',whatsNew:'Welcome to Sparsh Pharmacy.'}}
 @Get('products') products(){return this.service.customerProducts()}
 @Get('products/:id') product(@Param('id')id:string){return this.service.customerProducts().find(p=>p.id===id)||{error:'Not found'}}
 @Get('offers') offers(){return this.service.offers}
 @Post('pricing/quote') quote(@Body()body:{items:{productId:string,quantity:number}[],coupon?:{type:'percent'|'flat',value:number,minSpend?:number,remaining:number}}){return calculateOrder(body.items,this.service.products,this.service.offers,15,body.coupon)}
}

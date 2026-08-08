import { LOCATIONS } from './locations';

export interface Order {
  id: number;
  customerName: string;
  foodName: string;
  destinationId: string;
  timeLimit: number;
  reward: number;
}

const CUSTOMERS = ['田中 太郎', '山本 花子', '林 健一', '佐藤 美咲', '鈴木 次郎'];
const FOODS = ['黄金チャーハン', '炎の麻婆豆腐', '五目あんかけ焼そば', '特製天津飯', '爆盛り餃子'];

export const ORDERS: Order[] = LOCATIONS.map((location, index) => ({
  id: index + 1,
  customerName: CUSTOMERS[index],
  foodName: FOODS[index],
  destinationId: location.id,
  timeLimit: 90,
  reward: 100,
}));

import { LOCATIONS, SHOP, type LocationData } from '../data/locations';
import { ORDERS, type Order } from '../data/orders';

export class DeliveryManager {
  currentOrder: Order = ORDERS[0];
  private orderIndex = 0;

  nextOrder(): Order {
    this.currentOrder = { ...ORDERS[this.orderIndex % ORDERS.length], id: this.orderIndex + 1 };
    this.orderIndex += 1;
    return this.currentOrder;
  }

  reset(): void { this.orderIndex = 0; this.currentOrder = ORDERS[0]; }

  get destination(): LocationData {
    return LOCATIONS.find((location) => location.id === this.currentOrder.destinationId) ?? LOCATIONS[0];
  }

  get shop(): LocationData { return SHOP; }
}

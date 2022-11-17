import { useState } from 'react';
import { Order } from '../../types/Order';
import { OrderModal } from '../OrderModal/index';
import { Board, OrderContainer } from './style';

interface OrdersBoardProps {
    icon: string;
    title: string;
    orders: Order[];
}

// export function OrderBoard(props: OrdersBoardProps) {
export function OrderBoard({ icon, title, orders }: OrdersBoardProps) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);

    function handleOpenOrderModal(order: Order) {
        setIsModalVisible(true);
        setSelectedOrder(order);
    }

    function handleCloseModal() {
        setIsModalVisible(false);
        setSelectedOrder(null);
    }

    return(
        <Board>
            <OrderModal
                visible={isModalVisible}
                order={selectedOrder}
                onClose={handleCloseModal}
            />
            <section>
                <span>{icon}</span>
                <strong>{title}</strong>
                <span>{orders.length}</span>
            </section>

            {/* Renderiza na tela somente se tiver pedido no container */}
            {orders.length > 0 && (
                <OrderContainer>

                    {orders.map((order) => (
                        <button type='button' key={order._id} onClick={() => handleOpenOrderModal(order)}>
                            <strong>Mesa {order.table}</strong>
                            <span>{order.products.length} itens</span>
                        </button>
                    ))}
                </OrderContainer>
            )}
        </Board>
    );
}

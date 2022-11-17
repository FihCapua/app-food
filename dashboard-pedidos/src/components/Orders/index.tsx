import { Order } from '../../types/Order';
import { OrderBoard } from '../OrdersBoard';
import { Container } from './style';

const orders: Order[] = [
    {
        '_id': '63756e2303ed9b6411fe08b5',
        'table': '123',
        'status': 'WAITING',
        'products': [
            {
                'product': {
                    'name': 'Pizza Quatro Queijos',
                    'imagePath': '1668632658688-quatro-queijos.png',
                    'price': 68,
                },
                'quantity': 2,
                '_id': '63756e2303ed9b6411fe08b6'
            },
            {
                'product': {
                    'name': 'Coca Cola',
                    'imagePath': '1668633629301-coca-cola.png',
                    'price': 8,
                },
                'quantity': 2,
                '_id': '63756e2303ed9b6411fe08b7'
            }
        ],
    }
];

export function Orders() {
    return(
        <>
            <Container>
                <OrderBoard
                    icon="🕗"
                    title="Fila de espera"
                    orders={orders}
                />

                <OrderBoard
                    icon="👨‍🍳"
                    title="Em preparação"
                    orders={[]}
                />

                <OrderBoard
                    icon="✔️"
                    title="Pronto!"
                    orders={[]}
                />
            </Container>
        </>
    );
}

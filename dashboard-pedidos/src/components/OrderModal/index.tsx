import { useEffect } from 'react';
import closeButton from '../../assets/images/close-icon.svg';
import { Order } from '../../types/Order';
import { formatCurrency } from '../../utils/current';
import { ActionsBtn, ModalBody, OrderDetails, Overlay } from './style';

interface orderModalProps {
    visible: boolean;
    order: Order | null;
    onClose(): void;
}

export function OrderModal({ visible, order, onClose }: orderModalProps) {

    // fecha o modal com o ESC do teclado
    useEffect(() => {
        function handleKeyDown(event) {
            if(event.key === 'Escape') {
                onClose();
            }
        }

        document.addEventListener('keydown', handleKeyDown);

        return() => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    if(!visible || !order) {
        return null;
    }

    // let total = 0;
    // order.products.forEach(({ product, quantity }) => {
    //     total += product.price * quantity;
    // });

    // total is accumulator
    const total = order.products.reduce((total, { product, quantity }) => {
        return total + (product.price * quantity);
    }, 0);

    return(
        <Overlay>
            <ModalBody>
                <section>
                    <strong>Mesa 2</strong>

                    <button type='button' onClick={onClose}>
                        <img src={closeButton} alt="BotÃ£o de fechar" />
                    </button>
                </section>

                <div className='status-container'>
                    <small>Status do pedido</small>
                    <div>
                        <span>
                            {order.status === 'WAITING' && 'ð'}
                            {order.status === 'IN_PROGRESS' && 'ð¨âð³'}
                            {order.status === 'DONE' && 'âï¸'}
                        </span>
                        <strong>
                            {order.status === 'WAITING' && 'Fila de Espera'}
                            {order.status === 'IN_PROGRESS' && 'Em PrepraÃ§Ã£o'}
                            {order.status === 'DONE' && 'Pronto!'}
                        </strong>
                    </div>
                </div>

                <OrderDetails>
                    <strong>Itens</strong>

                    <div className="order-items">
                        {order.products.map(({ _id, product, quantity }) => (
                            <div className="item" key={_id}>
                                <img src={`http://localhost:3001/uploads/${product.imagePath}`} alt={product.name}
                                    width="56"
                                    height="28.51"
                                />

                                <span className="quantity">
                                    {quantity}x
                                </span>

                                <div className="product-details">
                                    <strong>{product.name}</strong>
                                    <span>{formatCurrency(product.price)}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="total">
                        <span>Total</span>
                        <strong>{formatCurrency(total)}</strong>
                    </div>
                </OrderDetails>

                <ActionsBtn>
                    <button type='button' className='primary'>
                        <span>ð¨âð³</span>
                        <span>Iniciar ProduÃ§Ã£o</span>
                    </button>

                    <button type='button' className='secondary'>
                        <span>ð«</span>
                        <span>Cancelar Pedido</span>
                    </button>
                </ActionsBtn>
            </ModalBody>
        </Overlay>
    );
}

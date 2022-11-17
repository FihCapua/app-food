import Logo from '../../assets/images/logo.svg';
import { Container, Content } from './style';

export function Header() {
    return(
        <Container>
            <Content>
                <div className="page-details">
                    <h1>Pedidos</h1>
                    <h2>Acompanhe os pedidos dos Clientes</h2>
                </div>
                <div>
                    <img src={Logo} alt="Logo WaiterApp" />
                </div>
            </Content>
        </Container>
    );
}

import IncomeIgm from '../../assets/income.svg'
import OutcomeIgm from '../../assets/outcome.svg'
import TotalIgm from '../../assets/total.svg'
import { useTransactions } from '../../hooks/useTransactions';

import { Container } from "./styles";

export function Summary() {
    const { transactions } = useTransactions();

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        } else if (transaction.type === 'withdraw') {
            acc.withdraw += transaction.amount
            acc.total -= transaction.amount
        }

        return acc;
    }, {
        deposits: 0,
        withdraw: 0,
        total: 0,
    })

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={IncomeIgm} alt="Entrada" />
                </header>
                <strong>
                    {
                        new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(summary.deposits)
                    }
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={OutcomeIgm} alt="Saídas" />
                </header>
                <strong>-
                    {
                        new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(summary.withdraw)
                    }
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={TotalIgm} alt="Total" />
                </header>
                <strong>
                    {
                        new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(summary.total)
                    }
                </strong>
            </div>
        </Container>
    )
}
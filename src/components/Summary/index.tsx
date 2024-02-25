import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyDollar,
} from '@phosphor-icons/react'
import { SummaryCard, SummaryContainer } from './styles'
import { useTheme } from 'styled-components'
import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/TransactionsContext'

export function Summary() {
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.price
        acc.total += transaction.price
      } else {
        acc.outcome += transaction.price
        acc.total -= transaction.price
      }

      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  )

  const theme = useTheme()

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Income</span>
          <ArrowCircleUp size={32} color={theme.green_300} />
        </header>

        <strong>$ {summary.income}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Expenses</span>
          <ArrowCircleDown size={32} color={theme.red_300} />
        </header>

        <strong>$ {summary.outcome}</strong>
      </SummaryCard>

      <SummaryCard $variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color={theme.white} />
        </header>
        <strong>$ {summary.total}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}

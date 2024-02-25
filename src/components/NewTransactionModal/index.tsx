import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionButton } from '../Header/styles'
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from '@phosphor-icons/react'

export function NewTransactionModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <NewTransactionButton>New transaction</NewTransactionButton>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Overlay />

        <Content>
          <Dialog.Title>New transaction</Dialog.Title>

          <CloseButton>
            <X size={24} />
          </CloseButton>

          <form action="">
            <input type="text" placeholder="Description" required />
            <input type="number" placeholder="Price" required />
            <input type="text" placeholder="Category" required />

            <TransactionType>
              <TransactionTypeButton $variant="income" value="income">
                <ArrowCircleUp size={24} />
                Income
              </TransactionTypeButton>

              <TransactionTypeButton $variant="outcome" value="outcome">
                <ArrowCircleDown size={24} />
                Expense
              </TransactionTypeButton>
            </TransactionType>

            <button type="submit">Register</button>
          </form>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

import { useState } from "react";
import Modal from "react-modal";

import { GlobalStyle } from "./styles/global"

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransictionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransictionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <TransactionsProvider>

      <Header onOpenNewTransactionModel={handleOpenNewTransictionModal} />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransictionModal} />
      <Dashboard />
      <GlobalStyle />

    </TransactionsProvider>
  );
}
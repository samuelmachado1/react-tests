import React from 'react';
import { render, screen } from '@testing-library/react';

import App, { calcularNovoSaldo } from './app';

describe('Componente principal', () => {
    describe('Quando abro o app do Banco', () => {
        it('O nome é exibido', () => {
            render(<App />);
    
            expect(screen.getByText('ByteBank')).toBeInTheDocument();
        })
        it('O saldo é exibido', () => {
            render(<App />);
    
            expect(screen.getByText('Saldo:')).toBeInTheDocument();
        })
        it('O botão de realizar transação é exibido', () => {
            render(<App />);
    
            expect(screen.getByText('Realizar operação')).toBeInTheDocument();
        })  
    })
    describe('Quando eu realizo uma transação', () => {
        it('que é um saque, o valor vai diminuir', () => {
            const valores = {
                transacao: 'saque',
                valor: 50
            }
            
            const novoSaldo = calcularNovoSaldo(valores, 150)

            expect(novoSaldo).toBe(100);
        })
    })

    
})
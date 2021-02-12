import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './app';

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
    
})
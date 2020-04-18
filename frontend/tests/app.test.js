import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Form from '../src/components/Music';

it("renders correctly", () => {
    const { queryByPlaceHolderName } = render(<Form />)

    expect(queryByPlaceHolderName("Search..")).toBeTruthy()
})